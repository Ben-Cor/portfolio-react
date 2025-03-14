import { useEffect, useState } from "react";

function useIntersectionObserver(targetRef, options={threshold: 0.3}) {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }
                });
            },
            options
        );

        const target = targetRef.current;
        if (target) {
            observer.observe(target);
        }

        return () => {
            if (target) {
                observer.unobserve(target);
            }
        }
    }, [targetRef, options]);

    return isVisible;
}

export default useIntersectionObserver;