import React from "react";

export const useIsOnScreen = (ref: any) => {
  const [isIntersecting, setIntersecting] = React.useState(false);
  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);
  return isIntersecting;
}