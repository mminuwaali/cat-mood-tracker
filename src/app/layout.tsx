import "./global.scss";
import React from "react";
import type { Metadata } from "next";
import { catFaceImg } from "@/constants/media";
import HistoryProvider from "@/providers/history.provider";

export const metadata: Metadata = {
  icons: catFaceImg.src,
  title: "Cat Mood Tracker",
  description: "Track your cat's mood",
};

export default function Rootlayout(properties: React.PropsWithChildren) {
  return (
    <html lang="en">
      <HistoryProvider>
        <body>{properties.children}</body>
      </HistoryProvider>
    </html>
  );
}
