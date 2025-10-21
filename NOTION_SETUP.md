# Notion Integration Setup Guide

This guide will help you set up Notion as a content management system for your personal website.

## 🚀 Quick Start

### 1. Create Notion Integration

1. Go to [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations)
2. Click **"New integration"**
3. Fill in the details:
   - **Name**: `Personal Website CMS`
   - **Logo**: Upload your website logo (optional)
   - **Associated workspace**: Select your workspace
4. Click **"Submit"**
5. Copy the **Internal Integration Token** (starts with `secret_`)

### 2. Create Notion Databases

Create 4 databases in your Notion workspace:

#### Database Structure

Each database should have these properties:

| Property Name | Type | Description |
|---------------|------|-------------|
| **Name** | Title | The main title of the content item |
| **Description** | Rich Text | Detailed description or summary |
| **URL** | URL | Link to external resource (GitHub, blog post, etc.) |
| **Tags** | Multi-select | Categories or tags for filtering |

#### Required Databases

1. **Product Database** - For product frameworks, case studies, launches
2. **Go-To-Market Database** - For GTM strategies, playbooks, insights  
3. **Software Database** - For software projects, repositories, tools
4. **Personal Database** - For personal reflections, interests, notes

### 3. Get Database IDs

1. Open each database in Notion
2. Copy the URL from your browser
3. Extract the database ID from the URL:
   ```
   https://www.notion.so/your-workspace/DATABASE_ID?v=...
   ```
4. The database ID is the 32-character string before the `?v=`

### 4. Configure Environment Variables

1. Copy `env.example` to `.env.local`:
   ```bash
   cp env.example .env.local
   ```

2. Update `.env.local` with your values:
   ```bash
   NOTION_TOKEN=secret_your_integration_token_here
   NOTION_PRODUCT_DB_ID=your_product_database_id
   NOTION_GTM_DB_ID=your_gtm_database_id
   NOTION_SOFTWARE_DB_ID=your_software_database_id
   NOTION_PERSONAL_DB_ID=your_personal_database_id
   ```

### 5. Share Databases with Integration

For each database:
1. Open the database in Notion
2. Click the **"Share"** button (top right)
3. Click **"Add people, emails, groups, or integrations"**
4. Search for your integration name: `Personal Website CMS`
5. Select it and click **"Invite"**
6. Make sure the integration has **"Can edit"** permissions

## 📝 Sample Database Entries

### Product Database Example

| Name | Description | URL | Tags |
|------|-------------|-----|------|
| **Discovery Framework** | A systematic approach to validating problems before building solutions, combining user interviews, data analysis, and competitive research. | https://example.com/discovery | Strategy, Framework |
| **Feature Prioritization** | Framework for evaluating features based on impact, effort, and strategic alignment to ensure resources are focused on what matters most. | | Prioritization, Process |
| **Launch Playbook** | Coordinated approach to product launches that ensures cross-functional alignment and maximizes adoption through careful planning and execution. | https://example.com/launch | Launch, Process |

### Software Database Example

| Name | Description | URL | Tags |
|------|-------------|-----|------|
| **Personal Website** | Modern personal website built with Next.js 15, TypeScript, and Tailwind CSS, integrated with Notion CMS. | https://github.com/yourusername/website | Next.js, TypeScript, Tailwind |
| **API Integration Service** | Microservice for managing third-party API integrations with rate limiting, caching, and error handling. | https://github.com/yourusername/api-service | Node.js, Express, Redis |
| **Data Analytics Tool** | Python-based analytics tool for processing and visualizing large datasets with custom ETL pipeline. | https://github.com/yourusername/analytics | Python, Pandas, FastAPI |

## 🔧 Database Properties Setup

### Step-by-Step Property Creation

1. **Name Property**:
   - Type: `Title`
   - Name: `Name`
   - This is the main identifier for each entry

2. **Description Property**:
   - Type: `Rich text`
   - Name: `Description`
   - Use this for detailed descriptions, summaries, or content

3. **URL Property**:
   - Type: `URL`
   - Name: `URL`
   - Optional: Link to external resources, GitHub repos, blog posts

4. **Tags Property**:
   - Type: `Multi-select`
   - Name: `Tags`
   - Add options like: `Strategy`, `Framework`, `Launch`, `Research`, `Process`, `Tool`, `Project`

## 🚀 Testing Your Setup

### 1. Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### 2. Verify Content Loading

1. Visit each page:
   - `/product` - Should show your product database content
   - `/go-to-market` - Should show your GTM database content
   - `/software` - Should show your software database content
   - `/personal` - Should show your personal database content

2. Check for errors in the browser console
3. Verify that content appears as cards with proper formatting

### 3. Common Issues

**"No content available" message:**
- Check that databases are shared with your integration
- Verify database IDs are correct
- Ensure environment variables are set

**"Notion configuration is incomplete" error:**
- Check that all environment variables are set in `.env.local`
- Restart your development server after adding environment variables

**API rate limiting:**
- Notion has rate limits; if you hit them, wait a few minutes and try again
- Consider adding caching to reduce API calls

## 📦 Deployment to Vercel

### 1. Add Environment Variables to Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add each environment variable:
   - `NOTION_TOKEN`
   - `NOTION_PRODUCT_DB_ID`
   - `NOTION_GTM_DB_ID`
   - `NOTION_SOFTWARE_DB_ID`
   - `NOTION_PERSONAL_DB_ID`

### 2. Deploy

```bash
# Push to your repository
git add .
git commit -m "feat: Add Notion CMS integration"
git push

# Vercel will automatically deploy
```

## 🔄 Content Updates

### How It Works

- **Static Generation**: Content is fetched at build time
- **ISR (Incremental Static Regeneration)**: Pages revalidate every hour
- **Automatic Updates**: Changes in Notion appear on your website within an hour
- **Manual Refresh**: You can trigger a rebuild in Vercel for immediate updates

### Updating Content

1. **Edit in Notion**: Make changes to your databases
2. **Wait for ISR**: Changes appear automatically within 1 hour
3. **Force Update**: Go to Vercel dashboard → Deployments → Redeploy for immediate updates

## 🎨 Customization

### Adding New Properties

To add new properties to your Notion databases:

1. **Add to Notion**: Create new properties in your databases
2. **Update lib/notion.ts**: Add extraction logic for new properties
3. **Update ContentItem interface**: Add new fields to the type definition
4. **Update components**: Modify ContentCard to display new properties

### Styling Content Cards

Edit `components/ContentCard.tsx` to customize:
- Card layout and styling
- Property display order
- Tag styling
- Link behavior

## 🛠️ Advanced Features

### Filtering and Sorting

You can modify `lib/notion.ts` to add:
- **Filtering**: Show only items with specific tags
- **Sorting**: Custom sort orders (by date, name, etc.)
- **Pagination**: Limit number of items per page

### Caching

For better performance, consider adding:
- **Redis caching**: Cache Notion API responses
- **Static caching**: Pre-generate content at build time
- **CDN caching**: Use Vercel's edge caching

## 📚 Resources

- [Notion API Documentation](https://developers.notion.com/)
- [Next.js App Router Documentation](https://nextjs.org/docs/app)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
- [Notion Integration Guide](https://developers.notion.com/docs/getting-started)

## 🆘 Troubleshooting

### Common Errors

**"Unauthorized" error:**
- Check that your integration token is correct
- Verify the integration has access to your databases

**"Database not found" error:**
- Verify database IDs are correct
- Check that databases are shared with your integration

**"Rate limit exceeded" error:**
- Wait a few minutes before trying again
- Consider implementing caching to reduce API calls

### Getting Help

1. Check the browser console for detailed error messages
2. Verify all environment variables are set correctly
3. Test your Notion integration permissions
4. Check the Vercel deployment logs for build errors

---

**Need help?** Check the main README.md or open an issue in your repository.
