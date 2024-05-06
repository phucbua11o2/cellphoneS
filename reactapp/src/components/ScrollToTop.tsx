import React, { useState, useEffect } from "react";

export interface ScrollToTopProps {
    myRef: any;
}

export function ScrollToTop({ myRef }: ScrollToTopProps) {
    const [visible, setVisible] = useState(false);

    const onScroll = () => {
        if (myRef && myRef.current) {
            setVisible(myRef.current.scrollTop > 0);
        }
    };

    useEffect(() => {
        if (myRef) {
            const element = myRef.current;
            if (element) {
                element.addEventListener("scroll", onScroll);
            }
        }
    }, []);

    return (
        <>
            {visible && (
                <a
                    className="btn srcroll-to-top"
                    style={{
                        right: 40,
                        bottom: 20,
                        position: "fixed",
                        zIndex: 1000,
                        borderRadius: 7,
                        width: 40,
                        height: 40,
                        border: "none",
                        outline: "none",
                        fontSize: 30,
                        color: "#0f0d6a",
                    }}
                    onClick={() => {
                        if (myRef) {
                            myRef.current.scrollTo({
                                top: 0,
                                behavior: "smooth",
                            });
                        }
                    }}
                >
                    <i className="bi bi-caret-up-square"></i>
                </a>
            )}
        </>
    );
}
