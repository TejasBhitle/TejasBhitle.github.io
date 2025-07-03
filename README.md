# Tejas Bhitle - Personal Website

A modern, responsive personal portfolio website built with Next.js, React, and Tailwind CSS. Features both developer and photographer modes with theme-aware components.

## 🚀 Features

- **Dual Mode Interface**: Switch between Work Mode (Developer) and Creative Mode (Photographer)
- **Responsive Design**: Optimized for all devices and screen sizes
- **Theme-Aware Components**: Automatic theme switching based on active mode
- **Interactive Elements**: Smooth animations, particle backgrounds, and hover effects
- **Photography Showcase**: Masonry-style grid layout for portfolio images
- **Performance Optimized**: Fast loading with optimized images and code splitting

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.4
- **Language**: JavaScript/JSX
- **Styling**: Tailwind CSS 4
- **Icons**: FontAwesome
- **UI Components**: Radix UI
- **Animations**: Custom CSS animations and Canvas-based particle effects

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd personal-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Building for Production

### Local Build
```bash
npm run build:static
```

This will create a static export in the `out` directory that can be deployed to any static hosting service.

### GitHub Pages Deployment

The repository includes a GitHub Actions workflow that automatically builds and deploys to GitHub Pages when you push to the main branch.

#### Manual Deployment Steps:

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" in the sidebar
   - Select "GitHub Actions" as the source

2. **Push your changes**:
   ```bash
   git add .
   git commit -m "Update website"
   git push origin main
   ```

3. **Monitor deployment**:
   - Go to the "Actions" tab in your repository
   - Check the "Deploy to GitHub Pages" workflow
   - Your site will be available at `https://<username>.github.io/<repo-name>`

## 📁 Project Structure

```
personal-website/
├── src/
│   ├── app/                 # Next.js app directory
│   ├── components/          # React components
│   └── lib/                # Utility functions
├── public/                 # Static assets
│   ├── photography/        # Photography images
│   ├── project-icons/      # Project icons
│   └── *.json             # Data files
├── .github/workflows/      # GitHub Actions
└── out/                   # Static export (generated)
```

## 🎨 Customization

### Adding New Photos
1. Add images to `public/photography/`
2. Update `public/photography.json` with image metadata
3. Include `orientation` field for proper layout

### Modifying Content
- **Intro**: Edit `public/intro.json`
- **Experience**: Edit `public/experience.json`
- **Projects**: Edit `public/projects.json`

### Theme Customization
The website uses theme-aware components that automatically adapt based on the active tab:
- **Work Mode**: Dark theme with blue accents
- **Creative Mode**: Light theme with pink/purple accents

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:static` - Build static export for GitHub Pages
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Key Components

- **ParticleBackground**: Canvas-based animated background
- **PhotographyGrid**: Masonry-style image grid
- **ContactSection**: Theme-aware contact information
- **ScrollToTop**: Theme-aware scroll-to-top button

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is private and proprietary. All rights reserved.

## 🤝 Contributing

This is a personal portfolio website. For any issues or suggestions, please contact Tejas Bhitle directly.

---

Built with ❤️ by Tejas Bhitle
