//import img from 'next/img';


export default function PrincipalsMessage() {
    return (
        <div className="container mx-auto my-12 flex flex-col sm:flex-row">
            {/* Principal's Message Section */}
            <div className="sm:w-1/2 p-4">
                <h2 className="text-3xl font-bold text-orange-700 mb-6">Head Teacher&apos;s Message</h2>
                <p className="text-sm sm:text-base text-secondary leading-relaxed " style={{ fontFamily: "'Dancing Script', cursive" }}>
                    Dear Parents, Students, and Staff,
                </p>
                <br />
                <p className="text-sm sm:text-base text-secondary leading-relaxed " style={{ fontFamily: "'Dancing Script', cursive" }}>
                    It is with great pleasure that I welcome you to our school community. As your Head Teacher, I am committed to fostering a nurturing and supportive environment where students can thrive academically, socially, and emotionally.
                </p>
                <br />
                <p className="text-sm sm:text-base text-secondary leading-relaxed " style={{ fontFamily: "'Dancing Script', cursive" }}>
                    Our school is dedicated to providing a rigorous curriculum that challenges and inspires students to reach their full potential. We believe that education is more than just learning facts and figures; it is about developing critical thinking skills, problem-solving abilities, and a lifelong love of learning.
                </p>
                <br />
                <p className="text-sm sm:text-base text-secondary leading-relaxed " style={{ fontFamily: "'Dancing Script', cursive" }}>
                    Our teachers are committed to creating engaging and meaningful learning experiences that help students develop a strong foundation for future success.
                </p>
                <br />
                <p className="text-sm sm:text-base text-secondary leading-relaxed " style={{ fontFamily: "'Dancing Script', cursive" }}>
                    Thank you for choosing our school. I look forward to working with you to create a vibrant and thriving community where students can reach their highest aspirations.
                </p>
                <br />
                <p className="text-sm sm:text-base text-secondary leading-relaxed " style={{ fontFamily: "'Dancing Script', cursive" }}>
                    Sincerely,
                    <br />
                    Amaugo Esther
                    <br />
                    Head Teacher
                </p>
            </div>

            {/* imgs Section */}
            <div className="sm:w-1/2 grid grid-cols-2 gap-4 p-4">
                <img src="/vicar.jpg" alt="Principal" className="w-full h-64 object-cover rounded-lg shadow-md" />
                <img src="/school.jpg" alt="School Event" className="w-full h-64 object-cover rounded-lg shadow-md" />
                {/* <img src="/vicar3.jpg" alt="School Building" className="w-full h-64 object-cover rounded-lg shadow-md" /> */}
            </div>
        </div>
    );
}
