export default function WhyChooseUsSection() {
    const reasons = [
        {
            icon: "📚",
            title: "Quality Education",
            description: "We provide top-notch education with a focus on both academics and character development.",
        },
        {
            icon: "🏫",
            title: "Modern Facilities",
            description: "Our campus is equipped with state-of-the-art facilities that enhance the learning experience.",
        },
        {
            icon: "👨‍🏫",
            title: "Expert Teachers",
            description: "Our educators are highly trained professionals who are passionate about teaching.",
        },
    ];

    return (
        <section className="bg-white py-12">
            <div className="text-center mb-8">
                <h2 className="text-4xl font-bold uppercase text-orange-700">WHY CHOOSE US</h2>
                <p className="text-xl mt-2">Discover What Makes Us Special</p>
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {reasons.map((reason, index) => (
                    <div key={index} className="text-center p-6 shadow-lg rounded-lg bg-gray-50">
                        <div className="text-6xl mb-4">{reason.icon}</div>
                        <h3 className="text-2xl font-semibold text-orange-700 mb-2">{reason.title}</h3>
                        <p className="text-gray-700">{reason.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
