import { useEffect } from "react";
import { useLocation } from "react-router";

export function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // Immediate scroll to top on any route or search param change
    window.scrollTo(0, 0);
    
    // Backup scroll with a tiny delay to ensure heavy content is rendered
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 10);
    
    return () => clearTimeout(timer);
  }, [pathname, search]);

  return null;
}
