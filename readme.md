# Client Signup Application

A modern React application for client signup built with TypeScript, React Router, and Material UI.

## Project Structure

This project follows a feature-based architecture for better scalability and maintainability:

```
client-signup/
├── public/                     # Static assets that don't require processing
├── src/
│   ├── assets/                 # Processed assets (images, fonts, etc.)
│   ├── components/             # Shared/reusable components
│   ├── features/               # Feature-based modules
│   │   ├── auth/               # Authentication feature
│   │   └── signup/             # Signup feature
│   │       ├── components/     # Feature-specific components
│   │       ├── hooks/          # Feature-specific hooks
│   │       ├── services/       # Feature-specific services
│   │       └── types/          # Feature-specific types
│   ├── hooks/                  # Shared custom hooks
│   ├── layouts/                # Layout components
│   ├── pages/                  # Page components (route destinations)
│   ├── services/               # API services and other external services
│   ├── store/                  # State management
│   ├── theme/                  # Theme configuration
│   ├── types/                  # Shared TypeScript types/interfaces
│   └── utils/                  # Utility functions
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone [repository_url]

# Navigate to the project directory
cd client-signup

# Install dependencies
npm install
# or
yarn install
```

### Development

```bash
# Start the development server
npm run dev
# or
yarn dev
```

### Building for Production

```bash
# Build the application
npm run build
# or
yarn build
```

## Technologies Used

- React
- TypeScript
- React Router
- Material UI
- Vite
