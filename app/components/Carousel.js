'use client'

import { useState } from 'react';

export default function Carousel() {
    const images = [
        '/session.jpg',
        '/trads.jpg',
        '/cultural.jpg',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="relative w-full h-96 overflow-hidden">
            <div
                className="absolute inset-0 flex transition-transform duration-700"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((src, index) => (
                    <div key={index} className="w-full flex-shrink-0 h-96 flex justify-center items-center">
                        <img
                            src={src}
                            alt={`Carousel image ${index + 1}`}
                            className="w-full h-full object-contain"
                        />
                    </div>
                ))}
            </div>
            <button
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
            >
                &#10094;
            </button>
            <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
            >
                &#10095;
            </button>
        </div>
    );
}
