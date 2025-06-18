# Project SYMBIONT - Replit Architecture Guide

## Overview

Project SYMBIONT is a full-stack web application built as a marketing/presentation site for a regenerative AI data center concept. The application uses a modern TypeScript stack with React frontend and Express backend, styled with Tailwind CSS and shadcn/ui components. The project is designed to showcase a vision of sustainable data centers that work like living ecosystems.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: React Router DOM for client-side navigation
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **State Management**: TanStack Query for server state, React hooks for local state
- **Font**: Google Fonts Outfit family

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Storage**: PostgreSQL-backed sessions with connect-pg-simple
- **Development**: tsx for TypeScript execution in development

### Build and Deployment
- **Development**: Vite dev server with HMR and Express API proxy
- **Production Build**: Vite for frontend bundling, esbuild for backend compilation
- **Deployment Target**: Replit autoscale infrastructure
- **Port Configuration**: Internal port 5000, external port 80

## Key Components

### Frontend Components
1. **Page Components**
   - `Index.tsx`: Main landing page with hero, problem, solutions, and vision sections
   - `NotFound.tsx`: 404 error page with user-friendly messaging

2. **Section Components**
   - `HeroSection.tsx`: Landing hero with project title and embedded YouTube video
   - `ProblemSection.tsx`: Problem statement with energy, water, and emissions focus
   - `FailedSolutionsSection.tsx`: Analysis of incomplete current solutions
   - `VisionSection.tsx`: Project vision and core subsystems overview

3. **UI Components**
   - Complete shadcn/ui component library (40+ components)
   - Custom styled components following the design system
   - Responsive design patterns for mobile and desktop

### Backend Components
1. **Server Setup**
   - Express server with middleware for JSON parsing and logging
   - Route registration system for API endpoints
   - Error handling middleware for consistent error responses

2. **Data Layer**
   - Drizzle schema definition for users table
   - Memory storage implementation (IStorage interface)
   - Prepared for PostgreSQL database integration

3. **Development Tools**
   - Vite integration for seamless frontend development
   - Request logging with timing and response capture
   - Static file serving for production builds

## Data Flow

### Development Flow
1. Client requests go to Vite dev server (via Express middleware)
2. API requests prefixed with `/api` route to Express handlers
3. Database operations use the IStorage interface (currently MemStorage)
4. Frontend uses TanStack Query for API state management

### Production Flow
1. Static frontend assets served from `dist/public`
2. API requests processed by Express server
3. Database operations via Drizzle ORM to PostgreSQL
4. Session data stored in PostgreSQL with connect-pg-simple

### Content Management
- All page content is hardcoded in component files for easy editing
- YouTube video ID can be updated in HeroSection component
- Problem statements, solutions, and vision content easily editable
- Color scheme and styling controlled through Tailwind config

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon
- **drizzle-orm**: Type-safe SQL query builder and ORM
- **@tanstack/react-query**: Server state management for React
- **@radix-ui/***: Headless UI primitives for accessibility
- **react-router-dom**: Client-side routing for React

### UI and Styling
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant system for components
- **clsx**: Conditional className utility
- **lucide-react**: Icon library for UI components

### Development Tools
- **vite**: Fast build tool and dev server
- **tsx**: TypeScript execution engine for Node.js
- **esbuild**: Fast JavaScript bundler for production builds
- **@replit/vite-plugin-***: Replit-specific development enhancements

## Deployment Strategy

### Replit Configuration
- **Modules**: Node.js 20, Web, PostgreSQL 16
- **Development**: `npm run dev` starts Express server with Vite middleware
- **Production**: `npm run build` then `npm run start`
- **Database**: Automatic PostgreSQL provisioning in Replit environment

### Build Process
1. **Frontend Build**: Vite compiles React app to `dist/public`
2. **Backend Build**: esbuild bundles Express server to `dist/index.js`
3. **Database Setup**: Drizzle migrations applied to PostgreSQL instance
4. **Environment**: DATABASE_URL automatically configured in Replit

### Environment Requirements
- **DATABASE_URL**: PostgreSQL connection string (auto-configured in Replit)
- **NODE_ENV**: Development or production mode
- **PORT**: Server port (defaults to 5000)

## Changelog
- June 18, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.