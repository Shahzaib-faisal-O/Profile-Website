import React, { useState, useEffect } from 'react';
import './css/preLoader.css';

const messages = [
    'hello', 'hola', 'bonjour', 'ciao', 'hallo',
    'こんにちは', '안녕하세요', '你好', 'مرحبا', 'привет'
];

const PreLoader = () => {
    const [currentMessage, setCurrentMessage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMessage((prevMessage) => (prevMessage + 1) % messages.length);
        }, 1800); // Change message every 1.2 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="preLoader">
            <svg viewBox="0 0 400 260">
                <text x="50%" y="50%" dy=".32em" textAnchor="middle" className="text-body">
                    {messages[currentMessage]}
                </text>
            </svg>
        </div>
    );
};

export default PreLoader;
