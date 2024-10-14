'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Introduction() {
    const variants = {
        first: {
            x: 0,
            rotate: 45,
            backgroundColor: "#4caf50",
            width: 100,
            height: 100,
        },
        animationEnd: {
            rotate: 270,
            backgroundColor: "#f44336",
            width: 100,
            height: 100,
        },
    };

    return (
        <div>
            <motion.div
                variants={variants}
                initial="first" 
                animate="animationEnd"
                transition={{
                    ease: "easeIn",
                    duration: 0.7,
                }}
            />
            <p>안녕</p>
        </div>
    );
}
