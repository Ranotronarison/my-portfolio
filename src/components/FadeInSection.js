
'use client'
import { useIsOnScreen } from "@/hooks/useIsOnScreen";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

export default function FadeInSection({ children, delay }) {
  const [animate, setAnimate] = useState(false)
  //const [animationDelay, setAnimationDelay] = useState(delay)
  const ref = useRef(null)
  const isOnScreen = useIsOnScreen(ref)
  const animationClassName = `animate-appear-n-slide delay-${delay || 500}`

  useEffect(() => {
    if (isOnScreen && delay) {
      setAnimate(true)
      //      setAnimationDelay(delay)
    }
    return () => {
      setAnimate(false)
    }
  }, [isOnScreen, delay])

  return <div className={cn(`${animate && delay ? animationClassName : 'opacity-0'}`)} ref={ref}>
    {children}
  </div>
}

