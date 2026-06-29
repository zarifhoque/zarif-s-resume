import React from "react";

export default function ScrollIndicator() {
  return (
    <div className="flex flex-col items-center gap-2 text-xs text-muted-foreground">
      <span className="hidden sm:block">SCROLL DOWN</span>
      <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-1">
        <div className="w-1.5 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
      </div>
      <span className="text-muted-foreground font-medium">MORE</span>
    </div>
  );
}
