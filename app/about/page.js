import Image from 'next/image';
import backgroundImage from '../../public/background.jpg'; 

export default function About() {
    return (
        <div className="relative bg-white py-16 px-4 sm:px-6 lg:px-8">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image 
                    src={backgroundImage} 
                    alt="Background Image"
                    layout="fill"
                    objectFit="fill"
                    className="w-full h-full object-center filter blur-md"
                    priority
                />
                <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
            </div>

            {/* Content */}
            <div className="relative container mx-auto text-white">
                <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
                
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold">School Name:</h2>
                    <p>Our Saviour’s Anglican Schools (OSAS), Durumi, Abuja</p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold">Founded:</h2>
                    <p>22nd September, 2014</p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold">Address:</h2>
                    <p>Plot 141, Cadastral Zone B2, Amaka Mgbirichi Crescent, Durumi District 1, Abuja</p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold">Mission:</h2>
                    <ul className="list-disc list-inside">
                        <li>Provide a conducive atmosphere for learning devoid of distraction.</li>
                        <li>Employ God-fearing, knowledgeable, dedicated, and kind-hearted staff.</li>
                        <li>Encourage positive behavior and attitude by modeling good character traits.</li>
                        <li>Promote a striving for academic excellence and celebrate accomplishments.</li>
                        <li>Cater for individual differences through modern teaching strategies and materials.</li>
                        <li>Sharpen the ability of every child to use their sense organs.</li>
                        <li>Boost the children’s self-esteem.</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold">Motto:</h2>
                    <p>Striving for the peak</p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold">School Prayer:</h2>
                    <p>Almighty God, the rock upon which our school stands...</p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold">School Anthem:</h2>
                    <p>
                        <strong>1. Our Saviour’s Children</strong><br/>
                        We are the best...<br/><br/>
                        <strong>2. Always determined</strong><br/>
                        We are the best...
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold">Programs:</h2>
                    <ul className="list-disc list-inside">
                        <li><strong>Crèche:</strong> 8 months – 1 ½ years (18 months)</li>
                        <li><strong>Pre Nursery:</strong> Kindergarten I: 1 ½ years (18 months) to 2 years...</li>
                        <li><strong>Nursery One:</strong> Age 2 to 4 years</li>
                        <li><strong>Nursery Two:</strong> Age 4 to 5 ½ years</li>
                        <li><strong>Primary One to Six:</strong> Age 6 to 11 years</li>
                        <li><strong>JSS One to Three:</strong> 11 to 13 years</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
