import Link from 'next/link';

export default function Programs() {
    return (
        <div className="bg-orange-50 py-16">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-orange-700 uppercase">Our Programs</h1>
                    <p className="text-lg text-gray-600 mt-4">Explore the wide range of programs we offer to cater to different age groups and needs.</p>
                </div>

                {/* Programs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Link href="/program1" className="group p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                        <h3 className="text-xl font-semibold text-orange-700 group-hover:text-orange-900">Creche</h3>
                        <p className="text-gray-600 mt-2">We offer creche services for babies in a nurturing environment...</p>
                    </Link>

                    <Link href="/program2" className="group p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                        <h3 className="text-xl font-semibold text-orange-700 group-hover:text-orange-900">Kindergarten</h3>
                        <p className="text-gray-600 mt-2">Our Kindergarten is superbly designed to teach kids the basics...</p>
                    </Link>

                    <Link href="/program3" className="group p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                        <h3 className="text-xl font-semibold text-orange-700 group-hover:text-orange-900">Nursery</h3>
                        <p className="text-gray-600 mt-2">Our Nursery classes provide excellent early childhood education...</p>
                    </Link>

                    <Link href="/program4" className="group p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                        <h3 className="text-xl font-semibold text-orange-700 group-hover:text-orange-900">Primary</h3>
                        <p className="text-gray-600 mt-2">We have an amazing curriculum for Primary school pupils...</p>
                    </Link>

                    <Link href="/program5" className="group p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                        <h3 className="text-xl font-semibold text-orange-700 group-hover:text-orange-900">JSS</h3>
                        <p className="text-gray-600 mt-2">Our Junior Secondary School students are well-prepared for future challenges...</p>
                    </Link>

                    <Link href="/program6" className="group p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                        <h3 className="text-xl font-semibold text-orange-700 group-hover:text-orange-900">Extra Lessons</h3>
                        <p className="text-gray-600 mt-2">We offer extra lessons to help students excel in their studies...</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
