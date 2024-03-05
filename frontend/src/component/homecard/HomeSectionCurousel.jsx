import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeCard from './HomeCard';
import { Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const HomeSectionCurousel = () => {
      const [activeIndex, setActiveIndex] = useState(0)

      const responsive = {
            0: { items: 1 },
            400: { items: 2 },
            720: { items: 3 },
            960: { items: 4 },
            1024: { items: 5.5 },
      };

      const slidePrev = () => setActiveIndex(activeIndex - 1);
      const slideNext = () => setActiveIndex(activeIndex + 1)

      const syncActiveIndex = ({ item }) => setActiveIndex(item)



      const items = Array(8).fill().map((_, index) => <HomeCard key={index} />);

      return (
            <div className='px-4'>
                  <div className="text-center">
                        <h2 className="text-black" style={{ "font-weight": "700", "fontFamily": "Sans-serif" }}>New Arrivals</h2>
                  </div>

                  <div className='p-5 d-flex justify-content-center align-items-center position-relative'>
                        <Button
                              variant='contained'
                              className='bg-white position-absolute start-0 translate-middle-y'
                              sx={{ zIndex: 1, transform: 'translate(-50%, -50%) rotate(-90deg)', bgcolor: 'white' }}
                              aria-label='previous'
                              onClick={slidePrev}
                        >
                              <KeyboardArrowLeftIcon sx={{ transform: 'rotate(180deg)', color: 'black' }} />
                        </Button>
                        <AliceCarousel
                              items={items}
                              disableButtonsControls
                              disableDotsControls
                              responsive={responsive}
                              onSlideChanged={syncActiveIndex}
                              activeIndex={activeIndex}
                        />
                        {activeIndex !== items.lenth - 5 && <Button
                              variant='contained'
                              className='bg-white position-absolute end-0 translate-middle-y'
                              sx={{ zIndex: 1, transform: 'translate(50%, -50%) rotate(90deg)', bgcolor: 'white' }}
                              aria-label='next'
                              onClick={slideNext}
                        >
                              <KeyboardArrowLeftIcon sx={{ color: 'black' }} />
                        </Button>}
                  </div>
            </div>
      );
}

export default HomeSectionCurousel;
