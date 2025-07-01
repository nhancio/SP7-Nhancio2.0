# Nhancio - Business Digital Solutions Platform

## Overview

Nhancio is a modern full-stack web application offering premium AI workflows, custom development, and digital solutions for businesses. The platform showcases services including AI automation, SaaS development, ecommerce solutions, and mobile app development with a focus on business transformation through technology.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: React Router for client-side navigation
- **State Management**: React Context API for theme and language management
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-based session storage
- **Development**: Hot reload with Vite middleware integration

### Data Storage
- **Database**: PostgreSQL (configured for Neon Database)
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: Centralized schema definition in `/shared/schema.ts`
- **Migrations**: Managed through Drizzle Kit
- **Development Storage**: In-memory storage implementation for rapid prototyping

## Key Components

### Frontend Features
- **Multi-language Support**: English, Spanish, Hindi, Arabic with React Context
- **Dark/Light Theme**: Persistent theme switching with system preference detection
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Widgets**: Chat widget and Tavus video integration
- **SEO Optimization**: Dynamic meta tags and structured data
- **Modern UI**: Gradient backgrounds, animations, and glass-morphism effects

### Backend Services
- **Storage Interface**: Abstracted storage layer for easy database switching
- **API Routes**: RESTful API structure (prefix: `/api`)
- **Error Handling**: Centralized error handling with proper HTTP status codes
- **Request Logging**: Detailed logging for API requests with performance metrics
- **Development Tools**: Hot reload and runtime error overlay integration

### Page Structure
- **Home**: Hero section with company overview and service highlights
- **Services**: Comprehensive service catalog with detailed descriptions
- **Automation Setup**: n8n templates and automation workflow solutions
- **Pricing**: Three-tier pricing structure (Basic, Plus, Pro)
- **Achievements**: Company milestones and statistics
- **Blog**: Content management with categorized articles
- **Contact**: Multi-channel contact forms and callback requests

## Data Flow

### Client-Server Communication
1. **Frontend**: React components fetch data using standard fetch API
2. **API Layer**: Express.js routes handle requests with proper validation
3. **Storage Layer**: Abstracted storage interface for database operations
4. **Response**: JSON responses with consistent error handling

### State Management
1. **Global State**: Theme and language preferences managed via React Context
2. **Local State**: Component-specific state using React hooks
3. **Persistence**: localStorage for theme preferences

### Development Workflow
1. **Development**: Vite dev server with Express API integration
2. **Database**: Drizzle migrations for schema management
3. **Building**: Separate builds for client (Vite) and server (esbuild)
4. **Production**: Compiled server serves static client files

## External Dependencies

### Core Technologies
- **Database**: Neon Database (serverless PostgreSQL)
- **UI Components**: Radix UI primitives
- **Styling**: Tailwind CSS with custom configuration
- **Development**: Replit-specific plugins for enhanced development experience

### Third-party Integrations
- **Tavus Video**: Video messaging service integration (placeholder implementation)
- **Chat Widget**: Live chat support interface
- **SEO Tools**: Structured data and meta tag management
- **Font Loading**: Google Fonts (Inter family)

### Development Tools
- **TypeScript**: Full type safety across frontend and backend
- **ESLint**: Code quality and consistency
- **PostCSS**: CSS processing with Tailwind and Autoprefixer
- **Drizzle Kit**: Database schema management

## Deployment Strategy

### Build Process
1. **Client Build**: Vite builds optimized React application to `dist/public`
2. **Server Build**: esbuild compiles TypeScript server to `dist/index.js`
3. **Static Serving**: Express serves client files in production mode

### Environment Configuration
- **Development**: Uses tsx for TypeScript execution with hot reload
- **Production**: Compiled JavaScript with NODE_ENV=production
- **Database**: Environment-based DATABASE_URL configuration

### Scalability Considerations
- **Database**: Serverless PostgreSQL scales automatically
- **Storage Interface**: Allows easy migration from in-memory to production database
- **Static Assets**: CDN-ready static file serving
- **API Structure**: RESTful design supports horizontal scaling

## Changelog

```
Changelog:
- July 01, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```