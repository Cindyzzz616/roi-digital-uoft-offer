# ROI Digital — Static Site

A fast, accessible, SEO-friendly website you can deploy to **Netlify** or **Vercel**.

## Quick Deploy (Netlify)
1. Go to https://app.netlify.com/drop and drag the **contents of this folder**.
2. Netlify will give you a live URL (e.g., https://your-site.netlify.app).
3. Click **Site settings → Domain management** to connect your domain.
4. To enable the contact form, ensure the `data-netlify="true"` attribute is present (already done).

## Quick Deploy (Vercel)
1. Create a new project and import this folder from a Git repo, or use the Vercel CLI to deploy.
2. Set **Output Directory** to the project root (no build step).

## Custom Domain
Point your domain or subdomain via your host:
- **Netlify**: Add a custom domain in settings and follow the DNS instructions (CNAME or ANAME).
- **Vercel**: Add a domain and then set your DNS to the A/CNAME values Vercel provides.

## Edit Content
- `index.html` — homepage
- `services.html`, `work.html`, `contact.html`
- `offer/index.html` — UofT-specific landing

## Dev Tips
- Keep images optimized; use SVGs for icons where possible.
- Update `sitemap.xml` and `robots.txt` with your real domain.
- Add analytics by pasting your script in the `<head>` of each page.
