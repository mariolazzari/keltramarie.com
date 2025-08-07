"use client";
import Stories from "stories-react";
import "stories-react/dist/index.css";

export function InstagramStories() {
  const stories = [
    {
      url: "https://www.instagram.com/reel/DLkwIrMoDCl/?igsh=ODh5ZnZ3bmszcjJq",
      type: "video",
    },
  ];

  return (
    <div>
      <iframe
        width="100%"
        height="300"
        src="https://www.instagram.com/reel/DLkwIrMoDCl/?igsh=ODh5ZnZ3bmszcjJq"
      ></iframe>
      <Stories
        stories={stories}
        defaultInterval={1500}
        width={432}
        height={768}
      />
    </div>
  );
}
