export default function MeetOurTeachers() {
    const teachers = [
      { name: 'Teacher 1', image: '/teacher1.jpg' },
      { name: 'Teacher 2', image: '/teacher2.jpg' },
      { name: 'Teacher 3', image: '/teacher3.jpg' },
      { name: 'Teacher 4', image: '/teacher4.jpg' },
      { name: 'Teacher 5', image: '/teacher5.jpg' },
      { name: 'Teacher 6', image: '/teacher6.jpg' },
      { name: 'Teacher 7', image: '/teacher7.jpg' },
      { name: 'Teacher 8', image: '/teacher8.jpg' },
    ];
  
    return (
      <div className="container mx-auto my-12 grid grid-cols-1 sm:grid-cols-4 gap-6">
        {teachers.map((teacher, index) => (
          <div key={index} className="text-center">
            <img src={teacher.image} alt={teacher.name} className="w-full h-48 object-cover rounded-lg" />
            <h3 className="mt-4 text-xl font-bold text-primary">{teacher.name}</h3>
          </div>
        ))}
      </div>
    );
  }
  