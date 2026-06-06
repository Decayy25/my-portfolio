# 🎨 Web Portfolio

Modern, responsive personal portfolio website built with cutting-edge web technologies. Showcase your projects, skills, and experience with a beautiful, performant interface.

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Architecture & Design Pattern](#-architecture--design-pattern)
- [Components Overview](#-components-overview)
- [Environment Setup](#-environment-setup)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

- 📱 **Fully Responsive Design** - Optimized for desktop, tablet, and mobile devices
- ⚡ **High Performance** - Built with Next.js 16 and React 19 for fast load times
- 🎯 **Atomic Design Pattern** - Modular and scalable component architecture
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- 📝 **Dynamic Content** - Easily manage portfolio content through data files
- 🔗 **Social Media Integration** - Built-in social media links
- 📧 **Contact Form** - Functional contact form with validation
- 🚀 **Modern Stack** - TypeScript, React Icons, and more
- ♿ **Accessible** - Semantic HTML and ARIA compliant components

## 🛠 Tech Stack

| Technology       | Version | Purpose                              |
| ---------------- | ------- | ------------------------------------ |
| **Next.js**      | 16.2.7  | React framework with SSR/SSG support |
| **React**        | 19.2.4  | UI library                           |
| **TypeScript**   | 5       | Type-safe JavaScript                 |
| **Tailwind CSS** | 4       | Utility-first CSS framework          |
| **React Icons**  | 5.6.0   | Icon library                         |
| **ESLint**       | 9       | Code linting and quality             |
| **PostCSS**      | 4       | CSS processing                       |

## 📁 Project Structure

```
web-portfolio/
├── public/                          # Static assets
│   └── images/                      # Image assets
│       ├── banner/
│       ├── blog/
│       ├── clients/
│       ├── general/
│       └── project/
├── src/
│   ├── @types/                      # TypeScript type definitions
│   │   └── UI.ts                    # UI component interfaces
│   ├── assets/                      # Imported assets
│   │   └── images/
│   ├── components/                  # React components (Atomic Design)
│   │   ├── atoms/                   # Basic building blocks
│   │   │   ├── Button.tsx
│   │   │   ├── Heading.tsx
│   │   │   ├── Hyperlink.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Label.tsx
│   │   │   ├── Text.tsx
│   │   │   └── ...
│   │   ├── molecules/               # Simple component compositions
│   │   │   ├── BlogCard.tsx
│   │   │   ├── NavItem.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── FooterBrand.tsx
│   │   │   ├── FooterSection.tsx
│   │   │   └── ...
│   │   ├── organisms/               # Complex component compositions
│   │   │   ├── FormContact.tsx
│   │   │   ├── ProjectGrid.tsx
│   │   │   └── ...
│   │   ├── templates/               # Page-level components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   └── ...
│   │   └── commons/                 # Shared/common components
│   │       ├── SocialMedia/
│   │       └── PageHead/
│   ├── data/                        # Static data files
│   │   ├── blogs.ts
│   │   ├── clients.ts
│   │   ├── projects.ts
│   │   └── footer.ts
│   ├── pages/                       # Next.js pages
│   │   ├── _app.tsx                 # App wrapper
│   │   ├── _document.tsx            # HTML document
│   │   ├── index.tsx                # Home page
│   │   └── api/                     # API routes
│   ├── styles/                      # Global styles
│   │   └── globals.css
│   └── utils/                       # Utility functions
│       ├── cn.ts                    # Class name utility
│       └── env.ts                   # Environment utilities
├── .eslintrc.json                   # ESLint configuration
├── next.config.ts                   # Next.js configuration
├── postcss.config.mjs               # PostCSS configuration
├── tailwind.config.ts               # Tailwind CSS configuration
├── tsconfig.json                    # TypeScript configuration
└── package.json                     # Project dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd web-portfolio
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Create environment file (if needed)**

```bash
cp .env.example .env.local  # If .env.example exists
```

4. **Start the development server**

```bash
npm run dev
```

5. **Open in browser**

Visit [http://localhost:3000](http://localhost:3000) in your browser. The page will auto-update as you edit files.

## 📜 Available Scripts

### Development

```bash
npm run dev
```

Start the development server with hot-reload enabled.

### Production Build

```bash
npm run build
```

Build the application for production.

```bash
npm start
```

Start the production server.

### Linting

```bash
npm run lint
```

Run ESLint to check code quality.

```bash
npm run lint:fix
```

Run ESLint with automatic fixes for code style issues.

## 🏗 Architecture & Design Pattern

### Atomic Design Pattern

This project follows the **Atomic Design** methodology, which organizes components into five distinct levels:

1. **Atoms** 🔵
   - Basic building blocks (Button, Heading, Text, Input, etc.)
   - Cannot be broken down further
   - Reusable across the application

   Example: `Heading.tsx`, `Button.tsx`, `Hyperlink.tsx`

2. **Molecules** 🟠
   - Simple groups of atoms bound together
   - Serve a specific purpose
   - More specific than atoms

   Example: `BlogCard.tsx`, `NavItem.tsx`, `FooterBrand.tsx`

3. **Organisms** 🔴
   - Complex components composed of molecules and/or atoms
   - Relatively independent and reusable sections

   Example: `FormContact.tsx`, `ProjectGrid.tsx`

4. **Templates** 📄
   - Page-level layouts composed of organisms, molecules, and atoms
   - Define the structure and wireframe of pages

   Example: `Header.tsx`, `Footer.tsx`, `Hero.tsx`, `About.tsx`

5. **Pages** 🌐
   - Specific instances of templates filled with actual content

   Example: `pages/index.tsx`, `pages/contact.tsx`

### Benefits

- ✅ **Scalability** - Easy to add new features and components
- ✅ **Maintainability** - Clear component hierarchy and responsibilities
- ✅ **Reusability** - Components are designed to be reused
- ✅ **Testability** - Smaller, focused components are easier to test
- ✅ **Consistency** - Unified component structure throughout the project

## 🧩 Components Overview

### Atoms

| Component     | Purpose                  | Props                                      |
| ------------- | ------------------------ | ------------------------------------------ |
| `Button`      | Clickable button element | `children`, `className`, `onClick`, `type` |
| `Heading`     | Semantic heading (h1-h6) | `level`, `children`, `className`           |
| `Text`        | Paragraph text           | `children`, `className`                    |
| `Hyperlink`   | Link/anchor element      | `href`, `children`, `className`, `target`  |
| `Input`       | Form input field         | `type`, `name`, `placeholder`, `className` |
| `Label`       | Form label               | `htmlFor`, `title`                         |
| `Description` | Descriptive text block   | `children`, `className`                    |
| `Subtitle`    | Subtitle element         | `children`, `className`                    |
| `Logo`        | Logo component           | `className`                                |

### Molecules

| Component       | Purpose                    | Used In           |
| --------------- | -------------------------- | ----------------- |
| `BlogCard`      | Blog post card display     | Blog listings     |
| `ProjectCard`   | Project showcase card      | Portfolio section |
| `NavItem`       | Navigation menu item       | Header navigation |
| `NavList`       | Navigation list container  | Header            |
| `PortfolioCard` | Portfolio item card        | Portfolio section |
| `SectionHeader` | Section title and subtitle | Various sections  |
| `FooterBrand`   | Footer brand section       | Footer            |
| `FooterSection` | Footer link section        | Footer            |
| `HeroBio`       | Hero biography section     | Hero section      |
| `HeroImage`     | Hero image section         | Hero section      |
| `InputForm`     | Form input with label      | Forms             |

### Organisms

| Component     | Purpose                                      |
| ------------- | -------------------------------------------- |
| `FormContact` | Complete contact form with validation        |
| `ProjectGrid` | Grid layout for displaying multiple projects |

### Templates

| Component   | Purpose                             |
| ----------- | ----------------------------------- |
| `Header`    | Page header/navigation bar          |
| `Footer`    | Page footer with links and info     |
| `Hero`      | Hero/welcome section                |
| `About`     | About me section                    |
| `Portfolio` | Portfolio/projects showcase section |
| `Blog`      | Blog posts listing section          |
| `Clients`   | Clients/companies section           |
| `Contact`   | Contact form section                |

### Commons

| Component          | Purpose                                         |
| ------------------ | ----------------------------------------------- |
| `SocialMediaLinks` | Social media links container                    |
| `SocialMediaLink`  | Individual social media link with hover effects |
| `PageHead`         | SEO meta tags and page head configuration       |
| `GetBlogImage`     | Dynamic blog image loader                       |

## 🔧 Environment Setup

### TypeScript Configuration

The project uses strict TypeScript settings in `tsconfig.json` for type safety and better development experience.

### Tailwind CSS

Configured in `tailwind.config.ts` with custom theme extensions and plugins. Supports utility classes for responsive design.

### Next.js Configuration

- **React Compiler** enabled for optimization
- **React Strict Mode** enabled for development warnings
- **Remote image patterns** configured for external images (e.g., Unsplash)

### ESLint Configuration

Code quality is maintained using ESLint with the Next.js config preset and TypeScript support.

## 🚀 Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and configure the build settings
5. Click "Deploy"

```bash
# Deploy via Vercel CLI
npm install -g vercel
vercel
```

### Other Deployment Options

#### Docker

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:

```bash
docker build -t web-portfolio .
docker run -p 3000:3000 web-portfolio
```

#### Traditional Server (Node.js)

```bash
npm run build
npm start
```

Server runs on `http://localhost:3000`

#### Static Export

To export as static HTML:

```bash
# Update next.config.ts
# export const output = 'export'

npm run build
# Check `out` directory for static files
```

## 📝 Customization

### Adding New Projects

Edit `src/data/projects.ts`:

```typescript
import { IProject } from "@/@types/UI";
import myProjectImage from "@/assets/images/project/my-project.jpg";

export const projects: IProject[] = [
  {
    id: 1,
    title: "My Project",
    name: "project-name",
    img: myProjectImage,
    description: "Project description and details...",
  },
  // Add more projects...
];
```

### Adding Blog Posts

Edit `src/data/blogs.ts`:

```typescript
export const Blogs = [
  {
    id: 1,
    image: "blog-image-name",
    h3: "Blog Title",
    href: "/blog/blog-slug",
    text: "Blog description and excerpt...",
    imageUrl: "blog-image-url",
  },
  // Add more blogs...
];
```

### Updating Contact Information

Edit `src/data/footer.ts` to update contact details and footer links:

```typescript
export const footerData = {
  brand: {
    name: "Your Name",
    description: "Contact Section",
    contact: {
      email: "your-email@example.com",
      address: "Your Address",
      city: "Your City",
    },
  },
  // Add more sections...
};
```

### Creating New Components

Follow the atomic design pattern:

1. **Atoms** - Use for basic UI elements
2. **Molecules** - Combine atoms for specific features
3. **Organisms** - Create complex sections from molecules
4. **Templates** - Build page layouts from organisms

### Styling

- Use Tailwind CSS utility classes
- Create custom styles in `src/styles/globals.css` if needed
- Use the `cn` utility from `src/utils/cn.ts` for conditional classes

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Create a feature branch

```bash
git checkout -b feature/AmazingFeature
```

2. Commit your changes

```bash
git commit -m 'Add some AmazingFeature'
```

3. Push to the branch

```bash
git push origin feature/AmazingFeature
```

4. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [React 19 Features](https://react.dev/blog/2024/12/19/react-19)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Atomic Design Methodology](https://atomicdesign.bradfrost.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [React Icons](https://react-icons.github.io/react-icons/)

## 📞 Support

For issues and questions, please:

1. Check existing issues in the repository
2. Create a new issue with a detailed description
3. Include screenshots or error messages if applicable
4. Provide steps to reproduce the issue

## 🎯 Future Enhancements

- [ ] Dark mode toggle
- [ ] Blog search and filtering
- [ ] Project filtering by category
- [ ] Email notifications for contact form
- [ ] Analytics integration
- [ ] Performance optimization (Image optimization, Code splitting)
- [ ] Multi-language support

---

**Made with ❤️ using Next.js, React 19, and TypeScript**

Last updated: 2026-06-06
