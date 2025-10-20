# Personal Website

A modern, responsive personal website built with Next.js 15, TypeScript, and Tailwind CSS. Features a clean design with dark mode support and smooth animations.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 (App Router), TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Dark Mode**: System-aware theme switching with `next-themes`
- **Smooth Animations**: Framer Motion for page transitions and interactions
- **SEO Optimized**: Meta tags and Open Graph support for all pages
- **Contact API**: Backend API route for contact form submissions
- **Performance**: Optimized for Core Web Vitals and fast loading

## 📁 Project Structure

```
.
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── go-to-market/
│   │   ├── layout.tsx             # GTM page metadata
│   │   └── page.tsx               # GTM page content
│   ├── personal/
│   │   ├── layout.tsx             # Personal page metadata
│   │   └── page.tsx               # Personal page content
│   ├── product/
│   │   ├── layout.tsx             # Product page metadata
│   │   └── page.tsx               # Product page content
│   ├── software/
│   │   ├── layout.tsx             # Software page metadata
│   │   └── page.tsx               # Software page content
│   ├── globals.css                # Global styles and Tailwind directives
│   ├── layout.tsx                 # Root layout with theme provider
│   └── page.tsx                   # Home page
├── components/
│   ├── Footer.tsx                 # Footer with social links
│   ├── Navbar.tsx                 # Responsive navigation with mobile menu
│   ├── ThemeProvider.tsx          # Dark mode context provider
│   └── ThemeToggle.tsx            # Theme switch component
├── public/                        # Static assets (add images, favicon, etc.)
├── .eslintrc.json                 # ESLint configuration
├── .gitignore                     # Git ignore rules
├── next.config.mjs                # Next.js configuration
├── package.json                   # Dependencies and scripts
├── postcss.config.mjs             # PostCSS configuration
├── tailwind.config.ts             # Tailwind CSS configuration
└── tsconfig.json                  # TypeScript configuration
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. **Install dependencies**:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. **Run the development server**:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Update Personal Information

Replace placeholder content in the following locations:

1. **Name and branding**:
   - `app/layout.tsx` - Update metadata title and description
   - `app/page.tsx` - Update hero section with your name and tagline
   - `components/Navbar.tsx` - Update logo/initials
   - `components/Footer.tsx` - Update copyright and social links

2. **Content pages**:
   - `app/product/page.tsx` - Add your product work and launches
   - `app/go-to-market/page.tsx` - Add your GTM strategies and impact
   - `app/software/page.tsx` - Add your projects and GitHub links
   - `app/personal/page.tsx` - Add your values, interests, and hobbies

3. **Contact information**:
   - Update email addresses in `app/page.tsx` and `app/personal/page.tsx`
   - Update social media links in `components/Footer.tsx`

### Styling

The site uses Tailwind CSS for styling:

- **Colors**: Modify `tailwind.config.ts` to change the color scheme
- **Fonts**: Update `app/layout.tsx` to change from Inter to another Google Font
- **Global styles**: Edit `app/globals.css` for site-wide style changes

### Dark Mode

Dark mode is implemented using `next-themes`:
- System preference detection by default
- Manual toggle available in navbar
- Styles use `dark:` prefix in Tailwind classes

## 📧 Contact Form Setup

The contact API route (`app/api/contact/route.ts`) currently logs submissions to the console. To enable email notifications:

1. **Choose an email service** (recommended options):
   - [Resend](https://resend.com/) - Modern email API
   - [SendGrid](https://sendgrid.com/) - Reliable email delivery
   - [Nodemailer](https://nodemailer.com/) - Self-hosted option

2. **Install the package**:

```bash
npm install resend
# or your chosen service
```

3. **Add environment variables**:

Create a `.env.local` file:

```bash
RESEND_API_KEY=your_api_key_here
CONTACT_EMAIL=your.email@example.com
```

4. **Update the API route** to send emails instead of logging.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

2. **Deploy to Vercel**:

   - Visit [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "Add New Project"
   - Import your repository
   - Vercel will auto-detect Next.js and configure settings
   - Click "Deploy"

3. **Configure environment variables** (if using contact form with email):
   - Go to Project Settings → Environment Variables
   - Add your `RESEND_API_KEY` and other secrets

4. **Set up a custom domain** (optional):
   - Go to Project Settings → Domains
   - Add your domain and follow DNS configuration steps

### Other Deployment Options

- **Netlify**: Similar to Vercel, auto-detects Next.js
- **AWS Amplify**: Full AWS integration
- **Self-hosted**: Use `npm run build` and `npm run start` on your server

## 🔧 Configuration

### Next.js Configuration

Edit `next.config.mjs` to add:
- Image optimization domains
- Redirects and rewrites
- Custom headers
- Environment variables

### TypeScript

The project uses strict TypeScript settings. Adjust `tsconfig.json` as needed for your preferences.

### ESLint

Linting rules are configured in `.eslintrc.json`. Extend with additional plugins as needed.

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

Mobile menu automatically activates below 768px.

## ⚡ Performance

Optimized for performance:
- Static generation where possible
- Optimized fonts with `next/font`
- Image optimization with `next/image` (when you add images)
- Minimal JavaScript bundle size
- CSS purging via Tailwind

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**:
   ```bash
   # Kill process on port 3000
   lsof -ti:3000 | xargs kill
   ```

2. **Module not found errors**:
   ```bash
   # Clear cache and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Theme flashing on load**:
   - Ensure `suppressHydrationWarning` is on `<html>` tag
   - Check that `ThemeProvider` is properly configured

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

Built with:
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)

---

**Need help?** Open an issue or reach out through the contact form on the website.

