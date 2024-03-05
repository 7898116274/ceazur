import React from 'react'
import "./ProductCard.css"
import { Button } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';




const ProductCard = () => {
      return (
            <>
                  <div className='productCard w-[13rem] m-3 transition-all cusor-pointer relative'>
                        <div className='h-[30-rem]'>
                              <img className='h-full w-full object-cover object-left-top' src="https://m.media-amazon.com/images/I/61eMJalktNL._AC_UL320_.jpg" alt='' />
                              <Button className='actions-link'>
                                    {/* need to change color when needed */}
                                    <FavoriteIcon sx={{ color: "red" }} />

                              </Button>
                        </div>

                        <div className='textPart bg-white p-3'>
                              <p className='fontbold opacity-60'>
                                    Ben Martin
                              </p>
                              <p>Men's Nylon Standard Length Bomber Jacket</p>
                        </div>
                        <div className='flex items-center space-x-2 px-2'>
                              <p className='font-semibold'>$500</p>
                              <p className='line-through opacity-50'>$1000</p>
                              <p className='text-green-600 font-semibold'>30% off</p>
                        </div>
                  </div>

            </>

      )
}

export default ProductCard