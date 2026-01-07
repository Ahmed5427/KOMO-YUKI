# Komo-Yuki Website

A professional, single-page website for Komo-Yuki - a modern Asian gifts and toys retail concept designed for B2B presentation to commercial landlords, shopping centre developers, and potential suppliers.

## Tech Stack

### Frontend Framework
- **Next.js 13+** - App Router architecture (/app directory)
- **React 18** - Client and Server Components

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Custom Animations** - ScrollAnimation component for smooth page transitions
- **Lucide React** - Icon library (Eye, Users, MapPin, etc.)
- **Google Fonts** - Outfit (headings) and Inter (body text)

### Language
- **JavaScript** - (not TypeScript)

## Getting Started

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
KOMO-YUKI/
├── app/
│   ├── layout.js           # Root layout with fonts
│   ├── page.js             # Main page component
│   └── globals.css         # Global styles and Tailwind directives
├── components/
│   ├── ScrollAnimation.js  # Scroll animation wrapper component
│   ├── Hero.js             # Hero section
│   ├── WhatIsKomoYuki.js   # About section
│   ├── StoreFormat.js      # Store format details
│   ├── WhyWorks.js         # Benefits for landlords
│   ├── TargetLocations.js  # Target location types
│   ├── SupplierSection.js  # Supplier partnership CTA
│   ├── Contact.js          # Contact forms
│   └── Footer.js           # Footer component
├── public/
│   └── images/
│       └── hero-storefront.jpg  # Hero background image
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
└── next.config.js          # Next.js configuration
```

## Hero Image Setup

**IMPORTANT**: Place the Komo-Yuki storefront image at:
```
public/images/hero-storefront.jpg
```

The website expects this exact path for the hero section background image.

### Image Requirements
- **Format**: JPG/JPEG
- **Recommended dimensions**: 1920px width minimum
- **Aspect ratio**: Wide landscape (16:9 or similar)
- **File size**: Optimized for web (under 500KB recommended)

## Design Features

- **Clean, Japanese-inspired minimalism**
- **Brand colors**:
  - Blush Pink (#FFB6C1)
  - Peach (#FFDAB9)
  - Cream (#FFF8DC)
  - Charcoal (#2C2C2C)
- **Fully responsive** design for all devices
- **Professional B2B focus** - designed for landlords and property developers
- **Single-page layout** with smooth scrolling
- **Scroll animations** for enhanced user experience

## Sections Included

1. **Hero Section** - Full-screen with storefront image
2. **What is Komo-Yuki** - Business overview with key benefits
3. **Store Format** - Store specifications and features
4. **Why Komo-Yuki Works for Landlords** - Value proposition
5. **Target Locations** - Ideal location types
6. **Supplier Partnership** - Supplier enquiries CTA
7. **Contact Forms** - Separate forms for landlords and suppliers
8. **Footer** - Company details and contact information

## Contact Information

- **Email**: enquiries@komo-yuki.com
- **Registered Address**: 128 City Road, London, EC1V 2NX

## Development Notes

- Contact forms are styled and functional (client-side only)
- Form submission alerts are placeholders (backend integration required)
- All links are placeholder links where applicable
- The design prioritizes clarity and professionalism over decorative elements

## License

© 2025 Komo-Yuki. All rights reserved.
