# Customization Guide

This guide will help you personalize your website with your own content, branding, and links.

## 🎯 Quick Start Checklist

### 1. Personal Information

- [ ] Update your name in `app/page.tsx` (line 47)
- [ ] Update your tagline in `app/page.tsx` (line 50)
- [ ] Update your email in `app/page.tsx` (line 58)
- [ ] Update navbar logo/initials in `components/Navbar.tsx` (line 31)
- [ ] Update footer copyright in `components/Footer.tsx` (line 9)

### 2. Social Media Links

Update in `components/Footer.tsx`:
- [ ] LinkedIn URL (line 17)
- [ ] GitHub URL (line 31)
- [ ] Twitter/X URL (line 45)

### 3. Site Metadata

Update in `app/layout.tsx`:
- [ ] Site title (line 16-18)
- [ ] Site description (line 20)
- [ ] Site URL (line 24)
- [ ] Author name (line 23)

### 4. Page Content

#### Product Page (`app/product/page.tsx`)
- [ ] Update your product philosophy (line 36)
- [ ] Add real framework examples (line 42-80)
- [ ] Add actual product launches (line 87-120)

#### Go-To-Market Page (`app/go-to-market/page.tsx`)
- [ ] Update GTM approach (line 36)
- [ ] Add real competencies (line 46-78)
- [ ] Update impact metrics (line 87-110)

#### Software Page (`app/software/page.tsx`)
- [ ] Update tech skills (line 57-73)
- [ ] Add your real projects (line 22-50)
- [ ] Update GitHub links (line 132-147)

#### Personal Page (`app/personal/page.tsx`)
- [ ] Update quote or add your own (line 36-41)
- [ ] Update core values (line 48-73)
- [ ] Update interests/hobbies (line 80-116)
- [ ] Update "What I'm Up To" section (line 123-142)

### 5. Contact Form

Update email addresses for contact:
- [ ] `app/page.tsx` - Hero CTA button (line 58)
- [ ] `app/personal/page.tsx` - Get In Touch button (line 153)
- [ ] `app/api/contact/route.ts` - Add email service integration (see README)

### 6. Styling & Branding

#### Colors
Update `tailwind.config.ts` to change the blue accent color:
```typescript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom color palette
      }
    }
  }
}
```

#### Font
Change from Inter to another Google Font in `app/layout.tsx`:
```typescript
import { YourFont } from "next/font/google";

const yourFont = YourFont({
  subsets: ["latin"],
  variable: "--font-your-font",
});
```

### 7. Images & Assets

- [ ] Add favicon to `/public/favicon.ico`
- [ ] Add Open Graph image to `/public/og-image.jpg` (1200x630px)
- [ ] Add any project screenshots to `/public/`
- [ ] Update image references in pages

### 8. SEO & Meta Tags

Update page-specific metadata in each layout file:
- [ ] `app/product/layout.tsx`
- [ ] `app/go-to-market/layout.tsx`
- [ ] `app/software/layout.tsx`
- [ ] `app/personal/layout.tsx`

## 🎨 Design Customization

### Theme Colors

The site uses a neutral color scheme with blue accents. To change:

1. **Update CSS variables** in `app/globals.css`:
```css
:root {
  --background: #ffffff;
  --foreground: #171717;
  --accent: #3b82f6; /* Your brand color */
}
```

2. **Update Tailwind classes** throughout components:
   - Search for `blue-600`, `blue-500` etc.
   - Replace with your color choice

### Layout & Spacing

- Max width is `max-w-7xl` (1280px) - change in layouts
- Section padding is `py-20` - adjust for more/less space
- Grid gaps are `gap-6` - modify for tighter/looser layouts

## 🔧 Advanced Customization

### Add New Pages

1. Create new directory in `app/`
2. Add `layout.tsx` for metadata
3. Add `page.tsx` for content
4. Update navigation in `components/Navbar.tsx`

### Modify Animations

Framer Motion animations are defined in each page. To customize:
```typescript
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};
```

Adjust `y` value, `duration`, add `delay`, etc.

### Add Blog or Case Studies

Create a new section:
```
app/
  blog/
    layout.tsx
    page.tsx
    [slug]/
      page.tsx
```

## 📝 Content Tips

### Writing Great Content

1. **Be specific**: Use real numbers and concrete examples
2. **Show impact**: Highlight results and outcomes
3. **Tell stories**: Make your work relatable and memorable
4. **Stay concise**: Respect visitors' time with scannable content
5. **Use active voice**: Make your writing direct and engaging

### Project Descriptions

Good formula: **Context + Action + Result**

Example:
> "Built a customer analytics dashboard (context) using React and Python (action) that reduced report generation time by 80% (result)."

## 🚀 Before Deploying

Final checklist:
- [ ] All placeholder text replaced with real content
- [ ] All social links updated and tested
- [ ] Contact form tested (if email service configured)
- [ ] Site tested on mobile, tablet, and desktop
- [ ] Dark mode works correctly on all pages
- [ ] All internal links work
- [ ] All external links open in new tabs
- [ ] SEO metadata is accurate
- [ ] Performance check with Lighthouse

## 🆘 Need Help?

- Check the main README.md for setup instructions
- Review Next.js documentation: https://nextjs.org/docs
- Check Tailwind CSS docs: https://tailwindcss.com/docs
- Review Framer Motion docs: https://www.framer.com/motion/

---

Remember: Your website should reflect your unique perspective and experience. Don't be afraid to make it your own!

