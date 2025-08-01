import { useEffect } from "react";
import { stagger, useAnimate } from "framer-motion";
import SplitType from "split-type";

const useTextReveal = () => {
    const [scope, animate] = useAnimate()

    useEffect(() => {
        new SplitType(scope.current, {
            types: 'lines,words',
            tagName: 'span'
        })
    }, [scope]);

    const entranceAnimation = () => {
        return animate(
            scope.current.querySelectorAll(".word"),
            {
                transform: "translateY(0)",
            },
            {
                duration: 0.1,
                delay: stagger(0.1)
            }
        )
    }

    const exitAnimation = () => {
        return animate(
            scope.current.querySelectorAll(".word"),
            {
                transform: "translateY(100%)",
            },
            {
                duration: 0.3,
                delay: stagger(-0.25, {
                    startDelay: scope.current.querySelectorAll(".word").length * 0.025,
                }),
            }
        )
    }

    return{
        scope,
        entranceAnimation,
        exitAnimation,
    }
}

export default useTextReveal; 