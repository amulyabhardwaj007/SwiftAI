# Swift.AI Client

Frontend for **Swift.AI**, a React + Vite app that turns a single dashboard into a compact AI content studio. Users can sign in with Clerk, generate content, edit visual assets, manage their own creations, and publish images into a shared community feed.

## What It Does

- Writes AI-generated articles
- Generates blog title ideas
- Creates AI images from prompts
- Removes image backgrounds
- Removes unwanted objects from images
- Reviews resumes with AI
- Shows a personal dashboard of saved creations
- Publishes images to a community gallery with likes

## Stack

- React 19
- Vite 7
- React Router 7
- Tailwind CSS 4
- Clerk for authentication
- Axios for API requests
- React Hot Toast for feedback
- React Markdown for article rendering
- Lucide React for icons

## App Flow

Landing page:
- Marketing homepage with hero, tool cards, testimonials, and footer

Authenticated workspace:
- `/ai`
- `/ai/write-article`
- `/ai/blog-titles`
- `/ai/generate-images`
- `/ai/remove-background`
- `/ai/remove-object`
- `/ai/review-resume`
- `/ai/community`

## Environment Variables

Create a `.env` file in `client/` with:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_BASE_URL=your_backend_base_url
```

Notes:
- `VITE_CLERK_PUBLISHABLE_KEY` powers Clerk authentication in [`src/main.jsx`](/c:/Users/91620/Downloads/projects/SwiftAi/SwiftAI/client/src/main.jsx).
- `VITE_BASE_URL` is used as the default Axios base URL across the AI and user pages.
- For local development, point `VITE_BASE_URL` at the backend origin, not the frontend URL.

## Getting Started

```bash
npm install
npm run dev
```

Default Vite local URL:

```bash
http://localhost:5173
```

## Scripts

```bash
npm run dev      # start the Vite dev server
npm run build    # create a production build
npm run preview  # preview the production build locally
npm run lint     # run ESLint
```

## API Expectations

The client expects an authenticated backend exposing routes like:

- `POST /v1/api/ai/generate-article`
- `POST /v1/api/ai/generate-blog-title`
- `POST /v1/api/ai/generate-image`
- `POST /v1/api/ai/remove-background`
- `POST /v1/api/ai/remove-object`
- `POST /v1/api/ai/resume-review`
- `GET /v1/api/user/get-user-creations`
- `GET /v1/api/user/get-published-creations`
- `POST /v1/api/user/toggle-like-creations`

Most protected requests send a Clerk bearer token via `Authorization`.

## Project Structure

```text
client/
|-- public/
|-- src/
|   |-- assets/
|   |-- components/
|   |-- pages/
|   |-- App.jsx
|   |-- index.css
|   `-- main.jsx
|-- index.html
|-- package.json
`-- vite.config.js
```

## Deployment

This client includes [`vercel.json`](/c:/Users/91620/Downloads/projects/SwiftAi/SwiftAI/client/vercel.json), so it is already shaped for Vercel deployment. Make sure the deployed environment includes the same `VITE_*` variables used locally.

