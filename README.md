# BDL Website

A modern Next.js website for BDL, built with TypeScript, Tailwind CSS, and optimized fonts.

## Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Font Optimization**: Instrument Serif (headings) and Inter (body text)
- **Responsive Design** with mobile-first approach
- **Modern UI** inspired by Tempus landing page

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with font configuration
│   ├── page.tsx        # Home page
│   └── globals.css    # Global styles and color theme
├── components/
│   ├── Navigation.tsx  # Navigation bar component
│   └── Hero.tsx        # Hero section component
└── tailwind.config.ts  # Tailwind configuration with custom theme
```

## Color Theme

The color theme is defined in `app/globals.css` and includes:
- Dark Tone: `#1a1a1a` (primary dark color)
- Light Tone: `#f5f5f5`
- Mid Tone: `#d4c5b0`
- Primary Blue: `#0066cc`
- And more...

## Fonts

- **Instrument Serif**: Used for headings (h1, h2, h3, etc.)
- **Inter**: Used for body text and UI elements

Both fonts are loaded via Next.js font optimization for optimal performance.



