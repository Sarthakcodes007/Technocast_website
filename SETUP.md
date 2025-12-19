# Setup Instructions

## Prerequisites
- Node.js 18 or higher
- npm or yarn

## Installation

1. Install dependencies:
```bash
npm install
```

If you encounter npm registry issues, try:
```bash
npm install --registry https://registry.npmjs.org/
```

Or use yarn:
```bash
yarn install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

```bash
npm run build
npm start
```

## Deploying to Vercel

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

The project is already configured with `vercel.json` for optimal deployment settings.

## Project Structure

```
TechnoCast/
├── app/
│   ├── globals.css      # Global styles with dark theme
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main page
├── components/
│   ├── Navbar.tsx       # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── Features.tsx     # Features showcase
│   ├── TechnicalApproach.tsx  # Technical approach
│   ├── Benefits.tsx     # Benefits section
│   ├── TechStack.tsx    # Technology stack
│   └── Footer.tsx       # Footer
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── vercel.json          # Vercel configuration
```

## Customization

- **Colors**: Edit `app/globals.css` to change the color scheme
- **Content**: Update component files in `components/` directory
- **Styling**: Modify Tailwind classes or add custom CSS in `globals.css`

