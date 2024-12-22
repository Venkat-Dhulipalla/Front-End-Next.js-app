# Todo App Frontend

A modern, responsive Todo application built with Next.js 14 and Tailwind CSS.

## Features

- Clean and modern UI design
- Real-time task management
- Color-coded task categories
- Task completion tracking
- Responsive design for all devices
- Dark theme with consistent color scheme

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Axios for API calls
- React Hooks for state management

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd todo-frontend
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`

## Project Structure

```
todo-frontend/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── page.tsx        # Home page
│   │   ├── create/         # Create task page
│   │   └── layout.tsx      # Root layout
│   ├── components/         # Reusable components
│   │   ├── Header.tsx
│   │   ├── TaskForm.tsx
│   │   └── TodoLogo.tsx
│   ├── lib/               # Utilities and API client
│   │   └── api.ts
│   └── types/             # TypeScript type definitions
├── public/                # Static assets
├── tailwind.config.js     # Tailwind configuration
└── package.json          # Project dependencies
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Color Scheme

- Background: `#444444`
- Header Background: `#0D0D0D`
- Task Item Background: `#262626`
- Primary Button: `#1E6F9F`
- Task Counter Blue: `#4EA8DE`
- Task Counter Purple: `#8284FA`
- Text Gray: `#808080`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details
