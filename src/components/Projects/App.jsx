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
        <TextHoverEffect text="PROJECTS" id="projects" size={5}/>
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
    header: <Skeleton image=""/>,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
