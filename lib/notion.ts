import { Client } from '@notionhq/client';

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

// Type definitions for our content items
export interface ContentItem {
  id: string;
  title: string;
  description: string;
  url?: string;
  tags: string[];
  createdAt: string;
  lastEdited: string;
}

// Database IDs from environment variables
const DATABASE_IDS = {
  PRODUCT: process.env.NOTION_PRODUCT_DB_ID!,
  GTM: process.env.NOTION_GTM_DB_ID!,
  SOFTWARE: process.env.NOTION_SOFTWARE_DB_ID!,
  PERSONAL: process.env.NOTION_PERSONAL_DB_ID!,
} as const;

// Helper function to extract text from Notion rich text
function extractText(richText: any[]): string {
  return richText
    .map((text: any) => text.plain_text)
    .join('')
    .trim();
}

// Helper function to extract tags from multi-select
function extractTags(properties: any): string[] {
  if (!properties?.Tags?.multi_select) return [];
  return properties.Tags.multi_select.map((tag: any) => tag.name);
}

// Helper function to extract URL
function extractUrl(properties: any): string | undefined {
  return properties?.URL?.url || undefined;
}

// Helper function to format dates
function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Main function to fetch and transform Notion database content
export async function fetchNotionContent(databaseType: keyof typeof DATABASE_IDS): Promise<ContentItem[]> {
  try {
    const databaseId = DATABASE_IDS[databaseType];
    
    if (!databaseId) {
      throw new Error(`Database ID for ${databaseType} not found in environment variables`);
    }

    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: 'Created',
          direction: 'descending',
        },
      ],
    });

    const contentItems: ContentItem[] = response.results.map((page: any) => {
      const properties = page.properties;
      
      return {
        id: page.id,
        title: extractText(properties.Name?.title || []),
        description: extractText(properties.Description?.rich_text || []),
        url: extractUrl(properties),
        tags: extractTags(properties),
        createdAt: formatDate(page.created_time),
        lastEdited: formatDate(page.last_edited_time),
      };
    });

    return contentItems;
  } catch (error) {
    console.error(`Error fetching ${databaseType} content:`, error);
    throw new Error(`Failed to fetch ${databaseType} content from Notion`);
  }
}

// Specific functions for each content type
export async function fetchProductContent(): Promise<ContentItem[]> {
  return fetchNotionContent('PRODUCT');
}

export async function fetchGTMContent(): Promise<ContentItem[]> {
  return fetchNotionContent('GTM');
}

export async function fetchSoftwareContent(): Promise<ContentItem[]> {
  return fetchNotionContent('SOFTWARE');
}

export async function fetchPersonalContent(): Promise<ContentItem[]> {
  return fetchNotionContent('PERSONAL');
}

// Function to get a single page by ID (for detailed views)
export async function fetchNotionPage(pageId: string): Promise<ContentItem | null> {
  try {
    const page = await notion.pages.retrieve({ page_id: pageId });
    
    if (!('properties' in page)) {
      return null;
    }

    const properties = page.properties;
    
    return {
      id: page.id,
      title: extractText(properties.Name?.title || []),
      description: extractText(properties.Description?.rich_text || []),
      url: extractUrl(properties),
      tags: extractTags(properties),
      createdAt: formatDate(page.created_time),
      lastEdited: formatDate(page.last_edited_time),
    };
  } catch (error) {
    console.error('Error fetching page:', error);
    return null;
  }
}

// Function to validate environment variables
export function validateNotionConfig(): boolean {
  const requiredVars = [
    'NOTION_TOKEN',
    'NOTION_PRODUCT_DB_ID',
    'NOTION_GTM_DB_ID',
    'NOTION_SOFTWARE_DB_ID',
    'NOTION_PERSONAL_DB_ID',
  ];

  const missingVars = requiredVars.filter(varName => !process.env[varName]);
  
  if (missingVars.length > 0) {
    console.error('Missing required environment variables:', missingVars);
    return false;
  }

  return true;
}