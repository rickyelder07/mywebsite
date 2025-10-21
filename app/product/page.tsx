import { fetchProductContent, ContentItem, validateNotionConfig } from "@/lib/notion";
import ProductContent from "./ProductContent";

// Server component for data fetching
export default async function ProductPage() {
  let content: ContentItem[] = [];
  let error: string | undefined;

  try {
    // Validate environment variables
    if (!validateNotionConfig()) {
      error = "Notion configuration is incomplete. Please check your environment variables.";
    } else {
      content = await fetchProductContent();
    }
  } catch (err) {
    console.error('Error fetching product content:', err);
    error = err instanceof Error ? err.message : "Failed to load product content";
  }

  return <ProductContent content={content} error={error} />;
}

