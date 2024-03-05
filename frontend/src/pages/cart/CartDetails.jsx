import React from 'react'
import Cart from './Cart'
import Button from '@mui/material/Button';

const CartDetails = () => {
      return (
            <div className='mt-3 py-3'>
                  <div className='lg:grid grid-cols-3 lg:px-16 relative py-2'>
                        <div className='col-span-2'>
                              <Cart />
                        </div>
                        <div className="top-0 px-5 rounded-lg bg-white-100" style={{ width: "300px" }}>
                              <p className="text-center uppercase font-bold opacity-60 ">Price Details</p>
                              <hr />
                              <div className=" font-semibold">
                                    <div className="flex justify-between pt-3 text-black">
                                          <span>Price</span>
                                          <span>$300</span>
                                    </div>
                                    <div className="flex justify-between pt-3">
                                          <span>Discount</span>
                                          <span className="text-green-600">-$100</span>
                                    </div>
                                    <div className="flex justify-between pt-3">
                                          <span>Delivery Charges</span>
                                          <span className="text-green-600">Free</span>
                                    </div>
                                    <div className="flex justify-between pt-3">
                                          <span>Total Amount</span>
                                          <span className="text-green-600">$200</span>
                                    </div>
                              </div>
                              <Button variant="contained" sx={{ px: "2.5rem", py: ".7rem" }} className="w-full mt-4">
                                    Check Out
                              </Button>
                        </div>

                  </div>
            </div>

      )
}

export default CartDetails;