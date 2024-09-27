import { Manifest } from "next/dist/lib/metadata/types/manifest-types";

export default function manifest(): Manifest {
  return {
    name: "GenQ",
    short_name: "GenQ",
    description: "GenQ is an Advanced language learning application.",
    start_url: "/",
    orientation: "portrait",
    theme_color: "#1468CF",
    display: "standalone",
    scope: ".",
    icons: [
      {
        src: "/genq-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/genq-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    background_color: "#ffffff",
    screenshots: [
      {
        src: "/genq-first.png",
        sizes: "800x500",
        type: "image/png",
        // @ts-ignore
        form_factor: "wide",
      },
      {
        src: "/genq-responsive.png",
        sizes: "381x831",
        type: "image/png",
      },
    ],
  };
}
