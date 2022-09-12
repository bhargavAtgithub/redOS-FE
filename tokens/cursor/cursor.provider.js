import React, { useRef, useEffect } from "react";
import CursorContext from "./cursor.context";

const CursorProvider = ({ children }) => {
    const cursor = useRef(null);

    const cursorVisible = useRef(true);
    const cursorEnlarged = useRef(false);

    const endX = useRef();
    const endY = useRef();
    const _x = useRef(0);
    const _y = useRef(0);

    const requestRef = useRef(false);

    const toggleHidden = (hide) => {
        requestRef.current = hide;
        if (requestRef.current) {
            cursor.current.style.display = "none";
        } else {
            cursor.current.style.display = "block";
        }
    };

    const toggleCursorVisibility = () => {
        if (cursorVisible.current) {
            cursor.current.style.opacity = 1;
        } else {
            cursor.current.style.opacity = 0;
        }
    };

    const mouseOverEvent = () => {
        cursorEnlarged.current = true;
    };

    const mouseOutEvent = () => {
        cursorEnlarged.current = false;
    };

    const mouseEnterEvent = () => {
        cursorVisible.current = false;
        toggleCursorVisibility();
    };

    const mouseLeaveEvent = () => {
        cursorVisible.current = false;
        toggleCursorVisibility();
    };

    const mouseMoveEvent = (e) => {
        cursorVisible.current = true;
        toggleCursorVisibility();

        endX.current = e.pageX;
        endY.current = e.pageY;

        cursor.current.style.top = endY.current + "px";
        cursor.current.style.left = endX.current + "px";
    };

    useEffect(() => {
        endX.current = window.innerWidth / 2;
        endY.current = window.innerHeight / 2;

        document.addEventListener("mousedown", mouseOverEvent);
        document.addEventListener("mouseup", mouseOutEvent);
        document.addEventListener("mousemove", mouseMoveEvent);
        document.addEventListener("mouseenter", mouseEnterEvent);
        document.addEventListener("mouseleave", mouseLeaveEvent);

        return () => {
            document.removeEventListener("mousedown", mouseOverEvent);
            document.removeEventListener("mouseup", mouseOutEvent);
            document.removeEventListener("mousemove", mouseMoveEvent);
            document.removeEventListener("mouseenter", mouseEnterEvent);
            document.removeEventListener("mouseleave", mouseLeaveEvent);
        };
    }, []);

    return (
        <CursorContext.Provider value={{ cursor, toggleHidden }}>
            {children}
        </CursorContext.Provider>
    );
};

export default CursorProvider;
