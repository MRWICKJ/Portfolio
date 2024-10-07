import React from "react";
import { BentoGrid, BentoGridItem } from "./ui";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { div } from "framer-motion/client";
// import { TextHoverEffectDemo } from "../GlowText/App";
import { TextHoverEffect } from "../GlowText/ui";

export function BentoGridDemo() {
  return (
    <div>
        <TextHoverEffect text="PROJECTS" id="projects"/>
        <BentoGrid className="max-w-7xl p-10">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
    </div>
    
  );
}
const Skeleton = ({ image }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <img src={image} alt="project" className="object-cover w-full h-full rounded-xl" />
  </div>
);

const items = [
  {
    title: "DISCORD",
    description: "Community-driven platform for sharing ideas, projects, and collaboration.",
    header: <Skeleton image="https://techcrunch.com/wp-content/uploads/2021/05/Discord_IAP_KeyVisuals_Header_02.jpeg"/>,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "TECHHUB",
    description: "TechHub Club: Interactive platform for tech enthusiasts, built with React.",
    header: <Skeleton image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThOXoOnZlxpuJojxKrpz7cop2tSTYJSZxsPg&s"/>,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Social Media Using MERN Stack",
    description: "Social media platform using MERN stack with authentication, posts, comments, and file uploads.",
    header: <Skeleton image="https://www.searchenginejournal.com/wp-content/uploads/2021/09/16-reasons-why-social-media-is-important-to-your-company-616d3200e6dc6-sej-1280x720.png"/>,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Render.com website",
    description:
      "Deploy full-stack web applications effortlessly with Render, featuring automatic scaling, continuous deployment, and easy management of services.",
    header: <Skeleton image="https://docs.render.com/og/free-32f87dc.png"/>,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "MLBB.com",
    description: "MLBB (Mobile Legends: Bang Bang) is a fast-paced 5v5 MOBA game featuring strategic team battles, heroes with unique abilities, and real-time multiplayer action.",
    header: <Skeleton image="https://mediapract.com/wp-content/uploads/2024/05/mlbb-edot-ph-mlbb.webp"/>,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "FLUX.1 Website",
    description: "Flux.1 is an AI tool that generates detailed images from text prompts, offering fast and diverse outputs.",
    header: <Skeleton image="https://flux1ai.com/images/showcase.jpg"/>,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Movie Recommendation System",
    description: "This is a machine learning-based Movie Recommendation System built to suggest movies based on user preferences. The model analyzes patterns in the data and recommends movies using content-based filtering.",
    header: <Skeleton image="https://github.com/MRWICKJ/movie-recommendation/raw/main/img1.png"/>,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
