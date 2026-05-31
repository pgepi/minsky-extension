import { ApiPrompt, ApiPromptDetail, Category, Prompt, PromptsResponse } from "./types";

const API_URL = "https://prompts.chat/prompts.json";
const PROMPT_DETAIL_URL = (id: string) => `https://prompts.chat/api/prompts/${id}`;

let cachedPrompts: Prompt[] | null = null;
let cachedCategories: Category[] | null = null;
let cacheTimestamp: number | null = null;
const CACHE_DURATION = 5 * 60 * 1000;

const cachedContent = new Map<string, { content: string; timestamp: number }>();
const contentRequests = new Map<string, Promise<string | null>>();

function mapApiPromptToPrompt(apiPrompt: ApiPrompt): Prompt {
  return {
    id: apiPrompt.id,
    title: apiPrompt.title,
    slug: apiPrompt.slug,
    description: apiPrompt.description || undefined,
    content: apiPrompt.contentPreview || "",
    type: apiPrompt.type || "TEXT",
    structuredFormat: apiPrompt.structuredFormat || undefined,
    mediaUrl: apiPrompt.mediaUrl || undefined,
    author: apiPrompt.author?.username || "anonymous",
    authorAvatar: apiPrompt.author?.avatar || undefined,
    category: apiPrompt.category?.name,
    tags:
      apiPrompt.tags?.map((t) => ({
        name: t.name,
        color: t.color || "#888",
      })) || [],
    votes: apiPrompt.voteCount || 0,
    createdAt: apiPrompt.createdAt,
    isFeatured: apiPrompt.isFeatured || false,
  };
}

function extractCategories(prompts: ApiPrompt[]): Category[] {
  const categoryMap = new Map<string, Category>();

  prompts.forEach((p) => {
    if (!p.category) return;
    if (!categoryMap.has(p.category.name)) {
      categoryMap.set(p.category.name, {
        name: p.category.name,
        icon: p.category.icon,
      });
    }
  });

  return Array.from(categoryMap.values()).sort((a, b) => a.name.localeCompare(b.name));
}

export async function fetchPrompts(): Promise<PromptsResponse> {
  if (cachedPrompts && cacheTimestamp && Date.now() - cacheTimestamp < CACHE_DURATION) {
    return {
      prompts: cachedPrompts,
      categories: cachedCategories || [],
      total: cachedPrompts.length,
    };
  }

  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  const apiPrompts: ApiPrompt[] = data.prompts;

  const prompts = apiPrompts.map(mapApiPromptToPrompt);
  const categories = extractCategories(apiPrompts);

  cachedPrompts = prompts;
  cachedCategories = categories;
  cacheTimestamp = Date.now();

  return {
    prompts,
    categories,
    total: prompts.length,
  };
}

async function requestPromptContent(id: string): Promise<string | null> {
  const response = await fetch(PROMPT_DETAIL_URL(id));
  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }
  const data: ApiPromptDetail = await response.json();
  const content = typeof data.content === "string" ? data.content : null;
  if (content) {
    cachedContent.set(id, { content, timestamp: Date.now() });
  }
  return content;
}

export async function fetchPromptContent(id: string): Promise<string | null> {
  const cached = cachedContent.get(id);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.content;
  }

  const inFlight = contentRequests.get(id);
  if (inFlight) return inFlight;

  const request = requestPromptContent(id);
  contentRequests.set(id, request);

  try {
    return await request;
  } catch {
    return null;
  } finally {
    contentRequests.delete(id);
  }
}

export function invalidateCache(): void {
  cachedPrompts = null;
  cachedCategories = null;
  cacheTimestamp = null;
  cachedContent.clear();
  contentRequests.clear();
}
