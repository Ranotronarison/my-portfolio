
'use client'
import { useIsOnScreen } from "@/hooks/useIsOnScreen";
import { cn } from "@/lib/utils";
import React, { useRef } from "react";

export function FadeInSection({ children, delay }) {
  const ref = useRef(null)
  const isOnScreen = useIsOnScreen(ref)
  const animate = isOnScreen && delay
  const animationClassName = `animate-appear-n-slide delay-${delay || 500}`

  return <div className={cn(`${animate ? animationClassName : 'opacity-0'}`)} ref={ref}>
    {children}
  </div>
}

