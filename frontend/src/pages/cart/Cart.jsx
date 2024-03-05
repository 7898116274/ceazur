import React from 'react'
import { FormControl, Select, MenuItem, IconButton } from "@mui/material"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
function Cart() {
      return (
            <div className=' mx-auto p-5 rounded-md shadow-lg border border-gray-300'>
                  <div className='flex items-center'>
                        <div className='w-24 h-24 lg:w-36 lg:h-36'>
                              <img className="w-full h-full object-cover object-top" src='https://m.media-amazon.com/images/I/61eMJalktNL._AC_UL320_.jpg' alt='' />
                        </div>
                        <div className='ml-6 space-y-1'>
                              <h5>Title</h5>
                              <p className='font-semibold'>Men's Nylon Standard Length Bomber Jacket</p>
                              <div className='h-4 '>
                                    <FormControl className='w-2 h-8' sx={{ m: 1, minWidth: 94, minHeight: 10 }}>
                                          <Select
                                                // value={""} // Initially displays "Size: "
                                                inputProps={{ 'aria-label': 'Size' }}
                                                sx={{
                                                      height: '100%',
                                                      fontSize: '0.75rem',
                                                      '& .MuiSelect-icon': {
                                                            // display: 'none', // Hide the arrow icon
                                                      },
                                                }}
                                                MenuProps={{
                                                      MenuIconComponent: null, // Remove arrow icon from menu
                                                }}
                                          >
                                                {/* Display size options with "Size: " prefix */}
                                                <MenuItem value={'Size: S'}>Size: S</MenuItem>
                                                <MenuItem value={'Size: M'}>Size: M</MenuItem>
                                                <MenuItem value={'Size: L'}>Size: L</MenuItem>
                                                <MenuItem value={'Size: XL'}>Size: XL</MenuItem>
                                          </Select>
                                    </FormControl>
                                    <FormControl className='w-2 h-8' sx={{ m: 1, minWidth: 90, minHeight: 10 }}>
                                          <Select
                                                // value={""} // Initially displays "Size: "
                                                inputProps={{ 'aria-label': 'Size' }}
                                                sx={{
                                                      height: '100%',
                                                      fontSize: '0.75rem',
                                                      '& .MuiSelect-icon': {
                                                            // display: 'none', // Hide the arrow icon
                                                      },
                                                }}
                                                MenuProps={{
                                                      MenuIconComponent: null, // Remove arrow icon from menu
                                                }}
                                          >
                                                {/* Display size options with "Size: " prefix */}
                                                <MenuItem value={'Qty:1'}>Qty:1</MenuItem>
                                                <MenuItem value={'Qty:2'}>Qty:2</MenuItem>
                                                <MenuItem value={'Qty:3'}>Qty:3</MenuItem>
                                                <MenuItem value={'Qty:4'}>Qty:4</MenuItem>
                                          </Select>
                                    </FormControl>

                              </div>
                              <div className='flex space-x-5 items-center text-gray-900 pt-6'>
                                    <p className='font-semibold'>$200</p>
                                    <p className='opacity-50 line-through'>$400</p>
                                    <p className='text-green-600 font-semibold'>50% off</p>
                              </div>
                        </div>


                  </div>
                  <div className="lg:flex lg:pt-4 flex items-center space-x-2 absolute top-0 right-0 lg:static lg:top-auto lg:right-auto">
                        <div className="flex items-center space-x-2" >
                              <IconButton sx={{
                                    backgroundColor: "transparent",
                                    border: "1px solid #ccc",
                                    borderRadius: "5px",
                                    padding: "5px",
                                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Add subtle shadow
                              }} >
                                    <DeleteOutlineIcon sx={{ color: "red" }} />
                                    <span className="hidden lg:inline text-sm">Delete</span> </IconButton>
                              <IconButton sx={{
                                    backgroundColor: "transparent",
                                    border: "1px solid #ccc",
                                    borderRadius: "5px",
                                    padding: "5px",
                                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Add subtle shadow
                              }}>
                                    <FavoriteIcon sx={{ color: "pink" }} />
                                    <span className="hidden lg:inline text-sm">Move to Wishlist</span> </IconButton>
                        </div>
                  </div>

            </div >

      )
}

export default Cart