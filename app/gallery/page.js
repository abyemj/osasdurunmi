export default function Gallery() {
    const images = [
        '/gallery1.jpg',
        '/gallery2.jpg',
        '/gallery3.jpg',
        '/gallery4.jpg',
        '/gallery5.jpg',
        '/gallery6.jpg',
        '/gallery7.jpg',
        '/gallery8.jpg',
        '/gallery9.jpg',
        '/gallery10.jpg',
        '/gallery11.jpg',
        '/gallery12.jpg',
        '/gallery13.jpg',
        '/gallery14.jpg',
        '/gallery15.jpg',
        '/gallery16.jpg',
        '/gallery17.jpg',
        '/gallery18.jpg',
        '/gallery19.jpg',
        '/gallery20.jpg',
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Gallery Header */}
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-orange-700">GALLERY</h1>
                <p className="text-lg text-gray-700 mt-2">A glimpse into our school&apos;s vibrant activities and events</p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((src, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-md">
                        <img src={src} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transform transition duration-300 ease-in-out" />
                    </div>
                ))}
            </div>
        </div>
    );
}
