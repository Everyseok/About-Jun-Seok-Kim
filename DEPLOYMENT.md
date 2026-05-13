# Deployment Guide

This guide provides step-by-step instructions for deploying Jun Seok Kim's research portfolio website.

## Pre-Deployment Checklist

### Content Review
- [ ] All text content has been proofread
- [ ] Publication statuses are current and accurate
- [ ] Project descriptions reflect actual implementations
- [ ] No placeholder text remains (except image placeholders marked for replacement)
- [ ] All badges and status labels are accurate

### Image Replacement
- [ ] Hero section CEM graph visualization added
- [ ] AI Scientist project images (4 slots) added
- [ ] Core-Breaker project images (3 slots) added
- [ ] Tidy Launcher project images (3 slots) added
- [ ] Korean Food Trends project images (3 slots) added
- [ ] Publication images (2 slots) added
- [ ] Research in Practice gallery (6 slots) added
- [ ] All images are optimized for web (compressed but high quality)
- [ ] All images are copyright-safe and properly licensed

### Links and Downloads
- [ ] CV PDF file created and uploaded to `/public/cv.pdf`
- [ ] GitHub profile URL updated in navigation and hero section
- [ ] GitHub repository links added to all project cards
- [ ] Google Scholar profile URL added to contact section
- [ ] ORCID profile URL added to contact section
- [ ] LinkedIn profile URL added to contact section
- [ ] Email link verified (junseok3055@gmail.com)

### Technical Verification
- [ ] All dependencies installed (`pnpm install`)
- [ ] No console errors in browser developer tools
- [ ] Mobile responsive design tested on multiple device sizes
- [ ] Navigation scroll behavior working correctly
- [ ] Mobile menu opens and closes properly
- [ ] All hover effects working as expected
- [ ] Glass morphism effects rendering correctly
- [ ] Custom CSS animations loading properly

### Browser Testing
Test on the following browsers:
- [ ] Chrome/Edge (latest version)
- [ ] Firefox (latest version)
- [ ] Safari (latest version)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Performance
- [ ] Images compressed and optimized
- [ ] Page load time under 3 seconds
- [ ] No layout shift during loading
- [ ] Smooth scrolling performance
- [ ] No memory leaks or performance issues

### SEO and Meta Tags
- [ ] Page title is correct
- [ ] Meta description is accurate
- [ ] Open Graph tags configured (if needed)
- [ ] Favicon added (if available)

## Deployment Platforms

### Recommended Platforms

1. **Vercel** (Recommended for Next.js-style deployment)
   - Excellent React support
   - Automatic deployments from GitHub
   - Custom domain support
   - Free SSL certificates

2. **Netlify**
   - Easy drag-and-drop deployment
   - Continuous deployment from Git
   - Custom domain support
   - Free tier available

3. **GitHub Pages**
   - Free hosting for static sites
   - Integration with GitHub repositories
   - Custom domain support

4. **Cloudflare Pages**
   - Fast global CDN
   - Integration with GitHub
   - Free tier with generous limits

### Deployment Steps (Vercel)

1. **Prepare the Build**
   ```bash
   # Ensure dependencies are installed
   pnpm install
   
   # Test local build (if applicable)
   pnpm build
   ```

2. **Connect to Vercel**
   - Sign up at vercel.com
   - Connect your GitHub repository
   - Import the project
   - Configure build settings:
     - Framework Preset: Vite
     - Build Command: `pnpm build`
     - Output Directory: `dist`
     - Install Command: `pnpm install`

3. **Configure Environment Variables** (if needed)
   - Add any required environment variables in Vercel dashboard

4. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete
   - Verify deployment at the provided URL

5. **Custom Domain** (optional)
   - Add custom domain in Vercel settings
   - Configure DNS records as instructed
   - Wait for SSL certificate provisioning

### Deployment Steps (Netlify)

1. **Prepare the Build**
   ```bash
   pnpm install
   pnpm build
   ```

2. **Deploy via Netlify**
   - Sign up at netlify.com
   - Drag and drop `dist` folder, OR
   - Connect GitHub repository for continuous deployment

3. **Configure Build Settings**
   - Build command: `pnpm build`
   - Publish directory: `dist`
   - Install command: `pnpm install`

4. **Custom Domain** (optional)
   - Add custom domain in Netlify settings
   - Configure DNS records
   - Enable HTTPS

## Post-Deployment

### Verification
- [ ] Visit deployed URL and verify all sections load correctly
- [ ] Test all navigation links
- [ ] Test mobile menu functionality
- [ ] Verify all images load correctly
- [ ] Test on mobile devices
- [ ] Verify email links work
- [ ] Check all external links (GitHub, Scholar, etc.)

### Analytics (Optional)
Consider adding:
- Google Analytics
- Plausible Analytics
- Simple Analytics
- Fathom Analytics

### Monitoring
- Set up uptime monitoring (e.g., UptimeRobot)
- Monitor page load performance
- Check for broken links regularly

## Updating the Site

### Content Updates
1. Edit content in `src/app/App.tsx`
2. Commit changes to GitHub
3. Push to main branch
4. Automatic deployment (if set up with Vercel/Netlify)

### Adding New Projects
1. Add project card to Featured Projects section
2. Add repository to GitHub Workbench section
3. Upload project images
4. Update README.md

### Updating Publications
1. Edit publications section in `src/app/App.tsx`
2. Update status badges as needed
3. Add DOI links when available
4. Commit and deploy

## Maintenance Schedule

### Weekly
- Check for broken links
- Monitor site performance
- Review analytics (if enabled)

### Monthly
- Update project statuses
- Review and refresh content
- Check for security updates in dependencies
- Update publication statuses

### Quarterly
- Comprehensive content audit
- Performance optimization review
- Update professional links and profiles
- Refresh project screenshots

### Annually
- Major content refresh
- Design review and updates
- Comprehensive security audit
- Platform/framework updates

## Troubleshooting

### Build Fails
- Check all imports are correct
- Verify all dependencies are installed
- Check for TypeScript errors
- Review build logs for specific errors

### Images Not Loading
- Verify image paths are correct
- Check image files are in correct directory
- Ensure images are web-optimized format
- Verify image file permissions

### Styling Issues
- Clear browser cache
- Check custom.css is imported correctly
- Verify Tailwind CSS is processing correctly
- Check for CSS conflicts

### Mobile Menu Not Working
- Verify useState is imported
- Check button onClick handlers
- Test in different browsers
- Check for JavaScript errors in console

## Security Considerations

- Never commit sensitive information (API keys, passwords)
- Use environment variables for secrets
- Keep dependencies updated
- Enable HTTPS (should be automatic on modern platforms)
- Regular security audits
- Monitor for vulnerabilities

## Backup

### Regular Backups
- Source code: Stored in GitHub repository
- Content: Version controlled in Git
- Images: Keep local copies of all images
- Configuration: Document all deployment settings

### Recovery Plan
1. All source code is in GitHub - can redeploy anytime
2. Keep local copies of all custom images
3. Document custom domain and DNS settings
4. Export analytics data periodically

## Support

For technical issues with deployment:
- Vercel: https://vercel.com/support
- Netlify: https://www.netlify.com/support/
- GitHub Pages: https://docs.github.com/pages

For website content or functionality questions:
- Contact: junseok3055@gmail.com

---

**Last Updated**: May 2026
**Website Owner**: Jun Seok Kim
**Technical Contact**: junseok3055@gmail.com
