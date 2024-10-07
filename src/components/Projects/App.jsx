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
    title: "Uposthit",
    description: "Smart Attandance Management App with GPS Locating For Smooth Attandance.",
    header: <Skeleton image="https://www.radicallogix.com/assets/img/student-attendance-features.png"/>,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Bucks",
    description: "All Rounder Ai Helper Phone App , For Free Limitless Text to Voice,Image,Paragraphs etc Generator.",
    header: <Skeleton image="https://botup.com/images/blog/ai-chatbot-app.png?v=1685597433119865848"/>,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Texter",
    description: "A Free And Secure Texting App For All To Use And Guess What its Free.",
    header: <Skeleton image="https://img.freepik.com/premium-vector/chat-app-logo-design-template-can-be-used-icon-chat-application-logo_605910-1724.jpg"/>,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Collage's website",
    description:
      "A Simple And Easy to Use , Professioanal Collage Governing Website.",
    header: <Skeleton image="https://softloom.com/wp-content/uploads/2022/06/St.-Thomas-College-Thrissur.webp"/>,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Flux.1(Reimagined)",
    description: "Final Round Project At Sheriyans HackaThon.",
    header: <Skeleton image="https://www.communeify.com/images/blogs/3e7347c7-197d-4bd0-9ca5-eeea7d049465.webp"/>,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Render.com(Reimagined)",
    description: "First Round Project At Sheriyans HackaThon.",
    header: <Skeleton image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAhFBMVEX///8NDQ0LCwsQEBDv7+/8/PwYGBgeHh739/cTExMkJCQHBwf29vbz8/MaGhofHx/Q0NDKysrp6ekvLy+/v79XV1eurq5HR0c+Pj4oKCjc3NycnJw4ODjGxsZdXV1SUlKLi4uJiYl8fHxsbGyzs7NlZWU7OzuVlZWBgYFERETi4uKkpKQbIdYdAAAF8klEQVR4nO2bDXPaPAzHYxtDhEN4h4YWStu1Xen3/36PJAfos6ZLzEbi6/Q7bpce3KE/erEta0kiCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCILw17HWdm3CX8GmWZZ2bUQw9NunSVo+p9P909sw7+d5sX66ndjE8gfs6aMRk7F9qCQdTZ+GyminjDLGaG1M8TihKEttGW1xh5y1/MpWN6TCkAZHYkiJMusfbPxRQbxKrDfOLl4cqgA0X7NHHPkEtbjB28SWkWdjFsJZYGfP2gDajeYr5b2hSJBWzoF6HCWsJWIVBOrYzlEDKUA3oAhHGkA5UmMwwMzL4ei4ro39DaMkWY0pHRxrQOvBsBgDgB7SqM/BeJrGH1nJOzi0XCmMLSAn0DP6hFJE0wOpybdpEreQJPkBDt2hasinSZLEuEzaMs3TaR9/cdevE2KKTdcmfwmvH705h46pE+L0OivX+RixybPSoOojS2Ee/YxTR8rhtTIOsECZWiUOa9gmxhzxP+7oRvepQHGV/X2OoNr7ONOduKXCq8HV5whuVkAtura3EtrWvqCFQNuqeiGAReE+xhyh+ruoF3ASQrsViLUEY8lqKoTOJ1rvu7a4mlEOjYV4yXddm1zNtkG1OuvAz4I5dG3zJyht98110CGF8mTVtd2V7HRzIXQKxlXxsWubq7B3AQ7hI7w2y66NrmLUhwAdirYy7qZro6uY8NG8sUOoAquia6M/Y5NXRUeqhhifT+Ouza7injoNzYOLGxERCrG9oXL9+oPISQXKdjDv2uzP4EbLNdgsnoTwBtjEmOw7bsI1DyzqsbgIy+9mYMAFLO2+bD10bfZn9r6BFabDxLNFwT1WRt2TjG4QVMCmkVqROo9t04iLCDcVG+e6bwLDPKIjouX7gdlcczM0QAkWrZhSxPrm1KMzIRnCVw3ok0M8HqGWQ2KnwJcfIQdE45RZxqPDN+ZGd4bTvL4v91GKUtuIhPB95hOXU61CDlaYT7GthvaVLkFAuSYdxpMQbfJJK9bVf+DY7lxBgCdIMeW50u61zR72l19lj0rsAre8zRcQ3saQcrPO2tFRN0ByfHcBDnTzJKeLXrocdfNZEs3VG93s3ELY1sRwImkznybt3PPUfYXlyOr9NJqaCM1Dy6E/UPh4a49XKteXUh9bmzV5QocccUk4sD9aGhnwEyNffxG99ZrT2uHAqfr7kJNH0IF6vaHBGhp/uL6SxWZUM72zeNM880MOab6k40KYP2TlNNTVdWD8j81u8tUID/29XRqeATiHjNb+tMQHpl+E8Zt+REjvWlkHT7YOMJjXq145w1Pmiy1fvdsb4/yC8PHH5rY0LXl0rfarJ6hgOde/Xxw3zC0J4fDXxW51oCPgaQIGbdi8L8c0LkPjDeeyq/3vrv1q5/zzGfrbwct+Y1ueQUkH4BxPWcH8+XU1PRxms9lm+r5fzsFbTJfQHxZCrfyWkZyBLoHhcFgUxbCkKO7uH1d8HZ3yK2tLyAh02bFRfmIM+jmQF4BMplE4GlvCn/8UOuVAFm6l9NvtpDfKshTJ0izjp/NcU6vzf7aXG76bdco3PAwZSYNLypW1isT9zyVeh3K7TXXk2PRcqloRY70Qx/NWcAx9GuMD4BFL7ScbKLI0fBRCnx+v0moZx3/bmzfjb+mh0ZjL7lRgacUjl/gTFMeR/pjs3kswnpRTQl9q+fx8VXp95YtpU4Cc09JZKYRgIY7voOJpHB4JFmIAl/NlfDMywUKoMphJfKPV4aGF+b/u2uoKwpMdXw/R+eMCITRive3a6grCcwSTffYtPKLVoNe11RWIkNgQIbEhQmLjHxaiRMhVuSC0tAi5JhcJGXVtdQWXVK3xdxEybK0PGsAFQsw3EaLUML4eigiJDxESGyIkNkRIbIiQ2BAhsSFCYuPfFaK/i5BoPZLzqFiADK3jFNLnwT7dGFQSp5BQjxjDoRXddWh4smNofY8uijFFlKFVDMYDegUQ039hEwRBEARBEARBEARBEARBEARBEARBEARBEARBEP6Q/wBL7UBcifYptQAAAABJRU5ErkJggg==" />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Mobile Legends-Bang Bang(Reimagined)",
    description: "First Round Project At Sheriyans HackaThon..",
    header: <Skeleton image="https://cdn.gamerbraves.com/2020/06/mobile-legends-bang-bang.jpg"/>,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
