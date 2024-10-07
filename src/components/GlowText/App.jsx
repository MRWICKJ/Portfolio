import React from "react";
import { TextHoverEffect } from "./ui";

export function TextHoverEffectDemo() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 dark:bg-neutral-900">
      <TextHoverEffect 
        text="ACET" 
        duration={3} 
        glowColors={{
          stop1: "#ff7e5f",
          stop2: "#feb47b",
          stop3: "#86a8e7",
          stop4: "#7f7fd5",
          stop5: "#91eae4"
        }} 
      />
    </div>
  );
}
