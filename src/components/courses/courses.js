// =============================================
// courses.js — Shared Course Data
// Import this in k12.js, undergraduate.js, postgraduate.js
// Contains: id, uniqueID, title, link, websiteLink, image, details, price, discount
// =============================================
export const coursesData = {

  k12: [
    {
      id: '1',
      uniqueID: '100',
      title: 'Digital SAT',
   
      image: 'assets/buycourses/SAT.jpg',
      details: 'EduTechEx Digital SAT is designed by subject matter experts and senior counselors having more than a decade experience in teaching SAT programs worldwide and counselling thousands of students to get admitted into their dream universities worldwide.',
      
    },
    {
      id: '2',
      title: 'Advanced Placement Tests',
      
      image: 'assets/buycourses/Ap.jpg',
      details: 'Advanced Placement tests are college level exams for high school students relevant for admissions.',
      
    },
    {
      id: '3',
      uniqueID: '301',
      title: 'Ivy League Bachelors Program',
      
      image: 'assets/buycourses/Ivy.jpg',
      details: 'A foundation course is a programme that will prepare you for an undergraduate degree at university.',
      
    },
    {
      id: '4',
      title: 'Medical Program',
  
      image: 'assets/buycourses/Medical.jpg',
      details: 'For a Successful Medical School Application in the US, UK and Rest of the World.',
     
    },
    {
      id: '5',
      title: 'Indian Entrance Prep',
     
      image: 'assets/buycourses/Indian Entrance Prep.jpg',
      details: 'Comprehensive preparation for Indian national entrance examinations including JEE, NEET and more.',
      
    },
    {
      id: '6',
      uniqueID: '601',
      title: 'Career Navigation',
      
     
      image: 'assets/buycourses/Career Counselling.jpg',
      details: 'For Grade 6 to 12th students from all International (IB, Cambridge IGCSE) and Indian (CBSE, State, ICSE) based curriculums.',
      
    },
    {
      id: '10',
      title: 'After School Services',
      
      image: 'assets/buycourses/After School Services.jpg',
      details: 'Our After School Programs are meticulously designed for students to excel in Math, Science and English providing a strong foundation for competitive exams.',
      
    },
    {
      id: '11',
      title: 'Internships',
     
      image: 'assets/buycourses/K12.jpg',
      details: 'Gain real-world experience through curated internship programs designed for K12 students to explore career paths early.',
      
    },
  ],

  undergraduate: [
    {
      id: '1',
      uniqueID: '01',
      title: 'Abroad Masters Placement',
     
      image: 'assets/images/courses/Abroad Masters Placement.jpg',
      details: 'Abroad Masters program enables students who are about to and have completed UG degrees to get admitted into the top universities around the world aligned with their passion.',
     
    },
    {
      id: '2',
      uniqueID: '02',
      title: 'Abroad Transfers Program',
    
      image: 'assets/buycourses/Abroad Exchange Program.jpg',
      details: 'Abroad Exchange program enables students who are in the first year of their undergraduate courses to get admitted into the top universities around the world.',
      
    },
  ],

  postgraduate: [
    {
      id: '1',
      uniqueID: '03',
      title: 'Abroad Ph.D. Program',
     
      image: 'assets/buycourses/Abroad Ph.D. Program.jpg',
      details: 'Abroad Ph.D. program enables students and working professionals who have completed their UG and PG and motivated to pursue doctoral research in cutting edge technological, innovative and creative areas.',
      
    },
  ],

};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = coursesData;
}