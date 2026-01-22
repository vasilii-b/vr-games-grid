# VR Games Grid

A Next.js application for showcasing VR games.

## Setup

### Prerequisites
- Node.js 20.x or higher
- npm

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
   - Copy `.env.example` to `.env.local`
   - Add your Microsoft Clarity project ID:
   ```
   NEXT_PUBLIC_CLARITY_PROJECT_ID=your_actual_clarity_project_id
   ```

### Microsoft Clarity Setup

This application includes Microsoft Clarity for analytics and user behavior tracking.

1. Go to [Microsoft Clarity](https://clarity.microsoft.com/)
2. Sign in with your Microsoft account
3. Create a new project or select an existing one
4. Copy your project ID from the Clarity dashboard
5. Add the project ID to your `.env.local` file:
   ```
   NEXT_PUBLIC_CLARITY_PROJECT_ID=abc123xyz
   ```

The Clarity script will automatically load when the application runs if the environment variable is configured.

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build the production application:
```bash
npm run build
```

### Production

Start the production server:
```bash
npm start
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_CLARITY_PROJECT_ID` | Microsoft Clarity project ID | No (but recommended for analytics) |

## License

Private
