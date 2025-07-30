# Next.js Restaurant Template

A modern restaurant website template built with Next.js 14, TypeScript, Tailwind CSS, and various other powerful libraries.

## Prerequisites

Before you begin, ensure you have installed:
- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

## Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/wq-cs/oip-team16.git
cd oip-team16
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Open your browser**
Visit [http://localhost:3000](http://localhost:3000) to view the application

## Available Scripts

- `npm run dev` - Runs the development server
- `npm run build` - Builds the application for production
- `npm run start` - Runs the built application in production mode
- `npm run lint` - Runs the linter to check code quality

## Key Features

- 🌙 Dark/Light mode support
- 📱 Fully responsive design
- 🎨 Tailwind CSS for styling
- 💨 Smooth animations with Framer Motion
- 🔐 Authentication with NextAuth.js
- 📝 Blog system with MDX support
- 🖼️ Image optimization
- 🎭 TypeScript for type safety

## Project Structure

```
src/
├── app/              # App router pages and layouts
├── components/       # Reusable React components
├── types/           # TypeScript type definitions
├── utils/           # Utility functions
└── styles/          # Global styles
```

## Built With

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [NextAuth.js](https://next-auth.js.org/) - Authentication
- [React Hot Toast](https://react-hot-toast.com/) - Toast notifications
- [AOS](https://michalsnik.github.io/aos/) - Animate on scroll library

## Notes

- The development server runs on port 3000 by default
- This template includes blog functionality with MDX support
- Authentication is configured with NextAuth.js
- Supports both dark and light themes using next-themes
