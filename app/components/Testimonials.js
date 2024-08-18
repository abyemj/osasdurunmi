'use client'

import { useState, useEffect } from "react";

export default function TestimonialSection() {
    const testimonials = [
        {
            id: 1,
            name: "Mr Abyem Afa",
            image: "/parent1.jpg",
            comment: "This school has been an incredible environment for my children. The teachers are nurturing and dedicated.",
        },
        {
            id: 2,
            name: "Mr Orseer Kurugh",
            image: "/parent2.jpg",
            comment: "I am impressed with the level of care and education my child receives. The programs offered are outstanding.",
        },
        {
            id: 3,
            name: "Mrs Miriam Gajir",
            image: "/parent3.jpg",
            comment: "The school's commitment to both academics and extracurricular activities is commendable. My child loves it here.",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [testimonials.length]);

    return (
        <section className="bg-gray-100 py-12">
            <div className="text-center mb-8">
                <h2 className="text-4xl font-bold uppercase text-orange-700">TESTIMONIAL</h2>
                <p className="text-xl mt-2">What Parents Say</p>
            </div>
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center bg-white p-6 shadow-lg rounded-lg">
                    <img
                        src={testimonials[currentIndex].image}
                        alt={`${testimonials[currentIndex].name}`}
                        className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover shadow-md"
                    />
                    <div className="mt-6 md:mt-0 md:ml-6">
                        <p className="text-lg md:text-xl italic text-gray-700 relative pl-8 before:content-['\201C'] before:absolute before:left-0 before:top-0 before:text-4xl before:text-purple-700">
                            {testimonials[currentIndex].comment}
                        </p>
                        <p className="mt-4 text-right font-semibold text-gray-900">{testimonials[currentIndex].name}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
