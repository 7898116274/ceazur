import React, { useState } from 'react'
import AddressCart from '../checkOut/AddressCart'
import OrdertTracker from './OrdertTracker'
import { Grid, Box, Rating } from '@mui/material'
import { deepPurple } from '@mui/material/colors'


const OrderDetails = () => {
      const [value, setValue] = useState(2);
      return (
            <div className='px:5 lg:px-20'>
                  <div>
                        <h1 className='font-bold text-xl py-7'>Address Details</h1>
                        <AddressCart />
                  </div>
                  <div className='py-20'>
                        <OrdertTracker activeStep={3} />
                  </div>
                  {[1, 1, 1, 1, 1].map((item) =>
                        <Grid className='space-x-5 mx-1 my-2' container>
                              <Grid item container className='shadow-xl rounded-md px-5' sx={{ alignItems: "center", justifyContent: "space-between" }}>
                                    <Grid item xs={6} className='flex'>
                                          <div className='flex items-center space-x-4'>
                                                <img className="w-[5rem] h-[5rem] object-cover object-top" src='https://m.media-amazon.com/images/I/61eMJalktNL._AC_UL320_.jpg' alt='' />
                                          </div>
                                          <div className='space-y-2 ml-5'>
                                                <p className="font-semibold">Men Slim Mid Rise Hoodee</p>
                                                <p className="space-x-5 opacity-50 text-xss font-semibold"><span>Color:Black</span><span>Size:M</span></p>
                                                <p >$200</p>
                                          </div>
                                    </Grid>
                                    <Grid item>
                                          <Box sx={{ color: deepPurple[500] }}>
                                                <Rating
                                                      name="simple-controlled"
                                                      value={value}
                                                      onChange={(event, newValue) => {
                                                            setValue(newValue);
                                                      }}
                                                />
                                          </Box>
                                    </Grid>
                              </Grid>

                        </Grid>)
                  }


            </div>
      )
}

export default OrderDetails