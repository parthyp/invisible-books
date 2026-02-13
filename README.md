# Invisible Bookkeeping

A premium, modern static website for bookkeeping services.

## Features
- **Sleek Design**: Modern "Dark Mode" aesthetic with glassmorphism.
- **High Performance**: Pure static site with minimal dependencies.
- **Responsive**: Fully optimized for mobile and desktop.
- **Automated Deployment**: Ready for GitHub Pages.

## Deployment to GitHub Pages

To deploy this website to your GitHub repository:

1. **Create a new repository** on GitHub.
2. **Push the code**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```
3. **Enable GitHub Pages**:
   - Go to your repository **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.

The website will automatically deploy on every push to the `main` branch.
