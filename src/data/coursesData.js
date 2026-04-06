import imgSAT from '../assets/SAT.jpg';
import imgAP from '../assets/Ap.jpg';
import imgIvy from '../assets/Ivy.jpg';
import imgMedical from '../assets/Medical.jpg';
import imgAbroad from '../assets/Abroad Masters Placement.jpg';
import imgPhd from '../assets/Abroad Ph.D. Program.jpg';

export const coursesData = {
  K12: [
    {
      id: '100',
      title: 'Digital SAT',
      image: imgSAT,
      discount: '77,700',
      details: 'EduTechEx Digital SAT is designed by subject matter experts and senior counselors having more than a decade experience in teaching SAT programs worldwide and senior...',
      rating: 5.0,
      level: 'All level',
      link: '/course-details/1/K12/1/SAT%20General',
    },
    {
      id: '2',
      title: 'Advanced Placement Tests',
      image: imgAP,
      discount: '94,000',
      details: 'Advanced Placement tests are college level exams for high school students...',
      rating: 5.0,
      level: 'All level',
      link: '/apCourses',
    },
    {
      id: '301',
      title: 'Ivy League Bachelors Pro...',
      image: imgIvy,
      discount: '1,00,000',
      details: 'A foundation course is a programme that will prepare you for an...',
      rating: 5.0,
      level: 'All level',
      link: '/Ivy-League-course-details/1/K12/3/%20Ivy%20League%20Bachelors%20Program/',
    },
    {
      id: '4',
      title: 'Medical Program',
      image: imgMedical,
      discount: '1,00,000',
      details: 'For a Successful Medical School Application in the US, UK and Rest of...',
      rating: 5.0,
      level: 'All level',
      link: '/medical-program',
    },
  ],
  Undergraduate: [
    {
      id: '01',
      title: 'Abroad Masters Placement',
      image: imgAbroad,
      discount: '1,00,000',
      details: 'Abroad Masters program enables students who are about to and have completed UG degrees to get admitted into the top universities around the world aligned with their passion.',
      rating: 5.0,
      level: 'All level',
      link: '/abroad-masters-placement/2/Undergraduate/1/Abroad%20Masters%20Placement/',
    },
    {
      id: '02',
      title: 'Abroad Transfers Program',
      image: imgAbroad,
      discount: '2,00,000',
      details: 'Abroad Exchange program enables students who are in the first year of their undergraduate courses to get admitted into the top universities around the world.',
      rating: 5.0,
      level: 'All level',
      link: '/abroad-transfer-program/2/Undergraduate/2/Abroad%20Transfers%20Program/',
    },
  ],
  Postgraduate: [
    {
      id: '03',
      title: 'Abroad Ph.D. Program',
      image: imgPhd,
      discount: '1,00,000',
      details: 'Abroad Ph.D. program enables students and working professionals who have completed their UG and PG and motivated to pursue doctoral research in some of the cutting edge technological, innovative and creative areas.',
      rating: 5.0,
      level: 'All level',
      link: '/abroad-p.hd-program/3/Postgraduate/1/Abroad%20Ph.D.%20Program/',
    },
  ],
};