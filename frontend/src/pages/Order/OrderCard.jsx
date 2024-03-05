import { Grid } from '@mui/material'
import React from 'react'

const OrderCard = () => {
      return (

            <div className="p-5 shadow-lg hover:shadow-2xl rounded-md">
                  <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
                        <Grid item xs={12} md={6}>
                              <div className="flex cursor-pointer">
                                    <img
                                          className="w-[5rem] h-[5rem] object-cover object-top"
                                          src="https://m.media-amazon.com/images/I/61eMJalktNL._AC_UL320_.jpg"
                                          alt=""
                                    />
                                    <div className="ml-5 space-y-2">
                                          <p className="">Men Slim Mid Rise Hoodee</p>
                                          <p className="opacity-50 text-xs font-semibold">Size:M</p>
                                          <p className="opacity-50 text-xs font-semibold">Color:Black</p>
                                    </div>
                              </div>
                        </Grid>
                        <Grid item xs={6} md={2}>
                              <p>$200</p>
                        </Grid>
                        <Grid item xs={12} md={4}>
                              {true && (
                                    <div>
                                          <p>
                                                <span>Delivered On March 03</span>
                                          </p>
                                          <p className="text-xs">Your Item Has Been Delivered</p>
                                    </div>
                              )}
                              {false && (
                                    <p>
                                          <span>Expected Delivery On March 03</span>
                                    </p>
                              )}
                        </Grid>
                  </Grid>
            </div>
      )
}

export default OrderCard