 /* eslint-disable no-unused-vars */
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import image1 from '../assets/carousel-one.jpg';
import image2 from '../assets/carousel-two.jpg';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

function ImageSlider() {
    return (
        <div className="flex justify-center mt-12 md:mt-[32rem] bg-[#2b3358] bg-opacity-75 py-14">
            <Carousel
                responsive={responsive}
                autoPlay={true}
                swipeable={true}
                draggable={true}
                showDots={true}
                infinite={true}
                partialVisible={false}
                dotListClass="custom-dot-list-style"
                className='w-full lg:w-4/5 mx-auto'
            >
              <div className="m-2">
                  <img src={image1} alt="Image 1" className="w-full h-44 object-cover" />
              </div>
              <div className="m-2">
                  <img src={image2} alt="Image 2" className="w-full h-44 object-cover" />
              </div>
              <div className="m-2">
                  <img src={image1} alt="Image 1" className="w-full h-44 object-cover" />
              </div>
              <div className="m-2">
                  <img src={image2} alt="Image 2" className="w-full h-44 object-cover" />
              </div>
              <div className="m-2">
                  <img src={image1} alt="Image 1" className="w-full h-44 object-cover" />
              </div>
              <div className="m-2">
                  <img src={image2} alt="Image 2" className="w-full h-44 object-cover" />
              </div>
              <div className="m-2">
                  <img src={image1} alt="Image 1" className="w-full h-44 object-cover" />
              </div>
              <div className="m-2">
                  <img src={image2} alt="Image 2" className="w-full h-44 object-cover" />
              </div>
                {/* Add more images as needed */}
            </Carousel>
        </div>
    );
}

export default ImageSlider;

// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
// import image1 from '../assets/carousel-one.jpg';
// import image2 from '../assets/carousel-two.jpg';

// function ImageSlider() {
//     return (
//         <div className="flex justify-center mt-[32rem] bg-[#2b3358] bg-opacity-75 py-14">
//             <Carousel
//                 showArrows={true}
//                 infiniteLoop={true}
//                 showThumbs={false}
//                 showStatus={false}
//                 autoPlay={true}
//                 interval={3000}
//                 className='w-4/5 mx-auto'
//             >
//                 <div className='flex justify-between gap-x-4'>
//                     <img src={image1} alt="Image 1" className="w-1/4 h-64 object-cover" />
//                     <img src={image2} alt="Image 2" className="w-1/4 h-64 object-cover" />        
//                     <img src={image1} alt="Image 3" className="w-1/4 h-64 object-cover" />
//                     <img src={image2} alt="Image 2" className="w-1/4 h-64 object-cover" />  
//                 </div>   
//                 <div className='flex justify-between gap-x-4'>
//                     <img src={image1} alt="Image 1" className="w-1/4 h-64 object-cover" />
//                     <img src={image2} alt="Image 2" className="w-1/4 h-64 object-cover" />        
//                     <img src={image1} alt="Image 3" className="w-1/4 h-64 object-cover" />
//                     <img src={image2} alt="Image 2" className="w-1/4 h-64 object-cover" />  
//                 </div> 
//                 <div className='flex justify-between gap-x-4'>
//                     <img src={image1} alt="Image 1" className="w-1/4 h-64 object-cover" />
//                     <img src={image2} alt="Image 2" className="w-1/4 h-64 object-cover" />        
//                     <img src={image1} alt="Image 3" className="w-1/4 h-64 object-cover" />
//                     <img src={image2} alt="Image 2" className="w-1/4 h-64 object-cover" />  
//                 </div> 
//                 {/* Add more images as needed */}
//             </Carousel>
//         </div>
//     );
// }

// export default ImageSlider;