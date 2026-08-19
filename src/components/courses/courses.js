// =============================================
// courses.js — Shared Course Data
// Import this in k12.js, undergraduate.js, postgraduate.js
// Contains: id, uniqueID, title, link, websiteLink, image, details, price, discount
// =============================================
export const coursesData = {

  k12: [
   
  
  {
  id: '3',
  uniqueID: '301',
  title: 'Ivy League Bachelors Program',
  link: '/ivy-league',
  directLink: true,   // ADD THIS: this course has its own standalone route
  image: 'assets/buycourses/Ivy.jpg',
  details: 'A foundation course is a programme that will prepare you for an undergraduate degree at university.',
},
    {
      id: '4',
      title: 'Medical Program',
  
      image: 'assets/buycourses/Medical.jpg',
      details: 'For a Successful Medical School Application in the US, UK and Rest of the World.',
      link: '/medical-admission',
      directLink: true,
    },
  
    {
      id: '6',
      uniqueID: '601',
      title: 'Career Navigation',
      image: 'assets/buycourses/Career Counselling.jpg',
      details: 'For Grade 6 to 12th students from all International (IB, Cambridge IGCSE) and Indian (CBSE, State, ICSE) based curriculums.',
      link: '/career-admission',
      directLink: true,
    },
   
    {
      id: '12',
      title: 'UK Admission',
      image: 'assets/buycourses/uk.png',
      details: 'Explore world-class education opportunities at leading UK universities.',
      link: '/uk-undergraduate',
      directLink: true,
    },
    {
  id: "13",
  uniqueID: "1301",
  title: "Canada Admission",
  image: "assets/buycourses/canada.png",
  details:
    "Explore undergraduate study opportunities at leading Canadian universities with guidance for course selection, applications, scholarships and student visa preparation.",
  link: "/canada-admission",
  directLink: true,
},
{
  id: "14",
  uniqueID: "1401",
  title: "Australia & New Zealand Admission",
  image: "assets/buycourses/australia-nz.png",
  details:
    "Explore undergraduate study opportunities across Australia and New Zealand with guidance for university selection, applications, pathways and student visa preparation.",
  link: "/australia-nz-admission",
  directLink: true,
},
{
  id: "15",
  uniqueID: "1501",
  title: "USA Admission",
  image: "assets/buycourses/usa.png",
  details:
    "Explore undergraduate study opportunities at leading US universities with guidance for university selection, applications, scholarships and student visa preparation.",
  link: "/usa-admission",
  directLink: true,
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