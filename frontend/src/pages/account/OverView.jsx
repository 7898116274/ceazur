import React from 'react'
import { Grid, Button, Box, styled } from '@mui/material';
import InventoryIcon from '@mui/icons-material/Inventory';
import { purple } from '@mui/material/colors';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import BusinessIcon from '@mui/icons-material/Business';

const OverView = () => {
      return (
            <>
                  <div className="pt-2 mx-1 my-1">
                        <div className="space-x-12 bg-gray-200 flex mx-4 py-2 px-5 h-[4.5rem] items-center justify-between">
                              <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                          <div>Email:</div>
                                          <div>aniket@gmail.com</div>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                          <div>Number:</div>
                                          <div>7898116274</div>

                                    </Grid>
                              </Grid>
                              <Button
                                    variant="outlined"
                                    sx={{ fontSize: "9px" }}
                                    className="rounded-full ml-auto bg-white text-black border border-black px-3 py-0.25 overflow-hidden whitespace-nowrap" style={{
                                          fontsize: "11px",
                                          padding: "4px 8px"
                                    }}
                              >
                                    Edit Profile
                              </Button>


                        </div>
                        <table className="mx-2 p-12">
                              <tr >
                                    <td>

                                          <Box
                                                height={150}
                                                width={200}
                                                my={4}
                                                display="flex"
                                                alignItems="center"
                                                gap={4}
                                                p={2}

                                          >
                                                <div className="shadow-md rounded-md bg-white text-center p-6">
                                                      <div>
                                                            <InventoryIcon className="h-20 mx-auto mb-4" />
                                                            <div >

                                                                  <div>Order Details</div>
                                                                  <div className="opacity-40 text-sm text-gray-600">Check the order status</div>
                                                            </div>

                                                      </div>

                                                </div>
                                          </Box>



                                    </td>
                                    <td>

                                          <Box
                                                height={200}
                                                width={200}
                                                my={4}
                                                display="flex"
                                                alignItems="center"
                                                gap={4}
                                                p={2}

                                          >
                                                <div className="shadow-md rounded-md bg-white text-center p-6">
                                                      <div>
                                                            <FeaturedPlayListIcon className="h-20 mx-auto mb-4" />
                                                            <div >

                                                                  <div>Wishlist</div>
                                                                  <div className="opacity-40 text-sm text-gray-600">All your curated product</div>
                                                            </div>

                                                      </div>

                                                </div>
                                          </Box>

                                    </td>
                                    <td>
                                          <Box

                                                height={150}
                                                width={200}
                                                my={4}
                                                display="flex"
                                                alignItems="center"
                                                gap={4}
                                                p={2}

                                          >
                                                <div className="shadow-md rounded-md bg-white text-center p-6">
                                                      <div>
                                                            <PermContactCalendarIcon className="h-20 mx-auto mb-4" />
                                                            <div >

                                                                  <div>Profile Details</div>
                                                                  <div className="opacity-40 text-sm text-gray-600">Check your details here</div>
                                                            </div>

                                                      </div>

                                                </div>
                                          </Box>

                                    </td>
                              </tr>
                              <tr >
                                    <td>

                                          <Box
                                                height={150}
                                                width={200}
                                                my={4}
                                                display="flex"
                                                alignItems="center"
                                                gap={4}
                                                p={2}

                                          >
                                                <div className="shadow-md rounded-md bg-white text-center p-6">
                                                      <div>
                                                            <BusinessIcon className="h-20 mx-auto mb-4" />
                                                            <div >

                                                                  <div>Address Details</div>
                                                                  <div className="opacity-40 text-sm text-gray-600">Saved addresses need to check</div>
                                                            </div>

                                                      </div>

                                                </div>
                                          </Box>



                                    </td>

                              </tr>
                        </table>
                        <div className='mx-4'>
                              <ColorButton variant="contained" className='w-2/4'>Logout</ColorButton>
                        </div>

                  </div>
            </>
      )
}


const ColorButton = styled(Button)(({ theme }) => ({
      color: theme.palette.getContrastText(purple[500]),
      backgroundColor: purple[500],
      '&:hover': {
            backgroundColor: purple[700],
      },
}));
export default OverView;