{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import \{ defineConfig \} from "vite";\
import react from "@vitejs/plugin-react";\
import path from "path";\
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";\
\
export default defineConfig(\{\
  plugins: [\
    react(),\
    runtimeErrorOverlay(),\
    ...(process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined\
      ? [\
          await import("@replit/vite-plugin-cartographer").then((m) =>\
            m.cartographer(),\
          ),\
        ]\
      : []),\
  ],\
  resolve: \{\
    alias: \{\
      "@": path.resolve(import.meta.dirname, "client", "src"),\
      "@shared": path.resolve(import.meta.dirname, "shared"),\
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),\
    \},\
  \},\
  root: path.resolve(import.meta.dirname, "client"),\
  build: \{\
    outDir: path.resolve(import.meta.dirname, "dist/public"),\
    emptyOutDir: true,\
  \},\
\});\
}