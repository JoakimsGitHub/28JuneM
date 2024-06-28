import React from "react";
import { Helmet } from "react-helmet-async"; // Use react-helmet-async for better performance and support

function MetaTags() {
  const metaTags = [
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { name: "description", content: "Your website's description goes here." },
    { name: "keywords", content: "React, TypeScript, Replit, web development" },
    { name: "author", content: "Oskar Joakim Nilsson" },
    { name: "robots", content: "index, follow" },
    { property: "og:title", content: "React + TypeScript + Replit" },
    {
      property: "og:description",
      content:
        "Description of your website for social media and search engines.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://www.yourwebsite.com" },
    {
      property: "og:image",
      content: "https://www.yourwebsite.com/images/og-image.jpg",
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "React + TypeScript + Replit" },
    {
      name: "twitter:description",
      content: "Description of your website for Twitter.",
    },
    {
      name: "twitter:image",
      content: "https://www.yourwebsite.com/images/twitter-image.jpg",
    },
  ];

  return (
  <>
        {metaTags.map((tag, index) => (
        <meta key={index} {...tag} />
      ))}
  </>


  );
}

export default MetaTags;
