import Link from 'next/link';

export default function BlurredButtons() {
    return (
        <div className="grid grid-cols-3 gap-4 my-8">
            <Link href="/events" className="relative h-48 bg-cover bg-center" style={{ backgroundImage: "url('/group1.jpg')" }}>
                <div className="absolute inset-0 bg-orange-700 opacity-50"></div>
                <span className="relative z-10 text-white text-center block mt-16 text-xl">Student Events</span>
            </Link>
            <Link href="/admissions" className="relative h-48 bg-cover bg-center" style={{ backgroundImage: "url('/fence.jpg')" }}>
                <div className="absolute inset-0 bg-orange-700 opacity-50"></div>
                <span className="relative z-10 text-white text-center block mt-16 text-xl">Admissions</span>
            </Link>
            <Link href="/extracurricular" className="relative h-48 bg-cover bg-center" style={{ backgroundImage: "url('/group2.jpg')" }}>
                <div className="absolute inset-0 bg-orange-700 opacity-50"></div>
                <span className="relative z-10 text-white text-center block mt-16 text-xl">Extracurricular</span>
            </Link>
        </div>
    );
}
