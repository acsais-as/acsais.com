import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Digital Agency Acsais",
    short_name: "Acsais",
    description:
      "Development of PWAs, artificial intelligence-based assistant bots, cloud infrastructure",
    start_url: "/",
    display: "standalone",
    background_color: "#1e2639",
    theme_color: "#1e2639",
    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
