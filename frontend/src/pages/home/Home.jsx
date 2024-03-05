import React from 'react';
import MainCarousel from '../../component/curousel/curousel';
import CategoryType from '../../component/categoryType/CategoryType';
import HomeSectionCurousel from '../../component/homecard/HomeSectionCurousel';

function Home() {
      return (
            <>

                  <div className="container-fluid" >
                        <MainCarousel />
                  </div>
                  <div className="container my-5">
                        <CategoryType />
                  </div>
                  <div className="container-fluid my-5" >
                        <HomeSectionCurousel />
                  </div>

            </>
      );
}

export default Home;

