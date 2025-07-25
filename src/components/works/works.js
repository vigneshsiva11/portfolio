// import React, { useState } from 'react';
// import './works.css';

// import project_image_1 from '../../assets/project_image_1.png';
// import project_image_2 from '../../assets/project_image_2.png';
// import project_image_3 from '../../assets/project_image_3.png';
// import project_image_4 from '../../assets/project_image_4.png';
// import project_image_5 from '../../assets/project_image_5.png';
// import project_image_6 from '../../assets/project_image_6.png';
// import project_image_7 from '../../assets/project_image_7.png';
// import project_image_8 from '../../assets/project_image_8.png';
// import project_image_9 from '../../assets/project_image_9.png';
// import project_image_10 from '../../assets/project_image_10.png';


// const Works = () => {
//   const [showMore, setShowMore] = useState(false);

//   const initialImages = [
//     project_image_2,
//     project_image_3,
//     project_image_5,
//     project_image_6,
//     project_image_10,
//     project_image_8,
    
//   ];
  
//   const moreImages = [
//     project_image_9,
//     project_image_7,
//     project_image_4,
//     project_image_1,
//   ];

//   return (
//     <section id='works'>
//       <h2 className="worksTitle">My Works</h2>
//       <span className="workDesc">
//         I take pride in paying attention to the smallest details and making sure that my work is pixel perfect.
//         I am excited to bring my skills and experience to help businesses <br />
//         achieve their goals and create a strong online presence.
//       </span>

//       <div className="worksImgs">
//         {initialImages.map((img, index) => (
//           <img src={img} alt={`Project ${index + 1}`} key={index} className="worksImg" />
//         ))}

//         {showMore &&
//           moreImages.map((img, index) => (
//             <img src={img} alt={`Project ${index + 7}`} key={index + 6} className="worksImg" />
//           ))}
//       </div>

//       <button className="workBtn" onClick={() => setShowMore(!showMore)}>
//         {showMore ? 'Show Less' : 'See More'}
//       </button>
//     </section>
//   );
// };

// export default Works;



import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // ✅ Step 1: Import Link
import './works.css';

import project_image_1 from '../../assets/project_image_1.png';
import project_image_2 from '../../assets/project_image_2.png';
import project_image_3 from '../../assets/project_image_3.png';
import project_image_4 from '../../assets/project_image_4.png';
import project_image_5 from '../../assets/project_image_5.png';
import project_image_6 from '../../assets/project_image_6.png';
import project_image_7 from '../../assets/project_image_7.png';
import project_image_8 from '../../assets/project_image_8.png';
import project_image_9 from '../../assets/project_image_9.png';
import project_image_10 from '../../assets/project_image_10.png';

const Works = () => {
  const [showMore, setShowMore] = useState(false);

  const initialImages = [
    project_image_2,
    project_image_3,
    project_image_5,
    project_image_6,
    project_image_10,
    project_image_8,
  ];

  const moreImages = [
    project_image_9,
    project_image_7,
    project_image_4,
    project_image_1,
  ];

  return (
    <section id="works">
      <h2 className="worksTitle">My Works</h2>
      <span className="workDesc">
        I take pride in paying attention to the smallest details and making sure that my work is pixel perfect.
        I am excited to bring my skills and experience to help businesses <br />
        achieve their goals and create a strong online presence.
      </span>

      <Link to="/certifications" className="certButton">
        View Certification
      </Link>
      
      <div className="worksImgs">
        {initialImages.map((img, index) => (
          <img src={img} alt={`Project ${index + 1}`} key={index} className="worksImg" />
        ))}

        {showMore &&
          moreImages.map((img, index) => (
            <img src={img} alt={`Project ${index + 7}`} key={index + 6} className="worksImg" />
          ))}
      </div>

      <button className="workBtn" onClick={() => setShowMore(!showMore)}>
        {showMore ? 'Show Less' : 'See More'}
      </button>

      {/* ✅ Add this below the image grid */}
      
    </section>
  );
};

export default Works;
