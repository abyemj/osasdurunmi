
export default function SectionHeader({ title, subtitle }) {
    return (
        <div className="text-center mb-8">
            <h2 className="text-4xl font-bold uppercase text-orange-700">{title}</h2>
            <p className="text-xl mt-2">{subtitle}</p>
        </div>
    );
}
