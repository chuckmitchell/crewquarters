# CrewQuarters (Accommodations App)

Production accommodation and housing logistics management platform for film and TV crew.

## Environment & Prerequisites

- **Node.js:** v20+ or v22+ required (Next.js 16).
- **Tool Manager:** This project uses [`mise`](https://mise.jdx.dev) to pin Node 22 via [`mise.toml`](./mise.toml).

To run commands with the pinned environment:
```bash
mise exec -- npm run dev
# or if mise is activated in your shell:
npm run dev
```

## Getting Started

Run the development server:

```bash
mise exec -- npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
