# OIP Team 16 Project Website

A static website built with Next.js 14 to document our team's Open Innovation Project work. This website serves as a comprehensive portfolio of our project journey, solutions, and reflections.

## Website Content Requirements

The website includes the following required sections:

1. **Problem Statement & Solution**
   - Detailed problem statement
   - Proposed solution and its justification
   - Analysis of pre-existing solutions

2. **Design Journey**
   - User-centric problem statement
   - Prototypes and iterations
   - Ideation process documentation
   - Team composition and roles

3. **Portfolio of Work**
   - Weekly pitch videos
   - Partner communications
   - Daily team briefs
   - External surveys
   - Additional public interviews

4. **Partner Interactions**
   - Documentation of meetings
   - Feedback incorporation
   - Collaboration highlights

5. **Team Reflection**
   - Project achievements
   - Learning outcomes
   - Areas for improvement
   - Critical self-assessment

## Evaluation Criteria

The website content is structured to address these key assessment areas:

- **Clear Presentation**
  - Coherent summary of work
  - Precise documentation
  
- **Data Collection & Methodology**
  - Evidence of good practices
  - Systematic approach
  
- **Reflection Depth**
  - Thorough analysis of findings
  - Critical evaluation
  
- **Solution Justification**
  - Alignment with problem statements
  - Implementation feasibility
  
- **Multiple Perspectives**
  - Consideration of wider contexts
  - Diverse viewpoint integration

## Technical Requirements

- Static website (no dynamic content generation)
- Built with Next.js for optimal performance

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

## Build and Deployment

Since this is a static website, we need to:

1. **Build the static site**
```bash
npm run build
```

2. **Test the production build locally**
```bash
npm run start
```

3. **Deploy the static output**
- The build process generates static HTML in the `.next/` directory
- Deploy these static files to any web hosting service
- No server-side processing is required

## Key Features

- 📱 Fully responsive design
- 🎨 Clean, professional styling with Tailwind CSS
- 📄 Static content generation
- 🖼️ Optimized images and assets
- 📊 Project documentation and portfolio
- 🎯 Clear navigation and information structure

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

- [Next.js](https://nextjs.org/) - React framework for static site generation
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library for smooth transitions
- [MDX](https://mdxjs.com/) - Markdown for documentation

## Development Notes

- The development server runs on port 3000 by default
- All content is statically generated at build time
- No dynamic server-side operations
- Optimized for fast loading and SEO
- Structured to clearly present project documentation
