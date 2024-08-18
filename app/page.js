import Carousel from './components/Carousel';
import BlurredButtons from './components/BlurredButtons';
import PrincipalsMessage from './components/PrincipalsMessage';
import Programs from './components/Programs';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import MeetOurTeachers from './components/MeetOurTeachers';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Carousel />
      <BlurredButtons />
      <PrincipalsMessage />
      <Programs />
      <WhyChooseUs />
      <Testimonials />
      {/* <MeetOurTeachers /> */}
    </div>
  );
}
