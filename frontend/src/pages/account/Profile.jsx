import React, { useState } from 'react';
import { Grid, Button, TextField, Box } from '@mui/material';

const Profile = () => {
      const [selectedGender, setSelectedGender] = useState('');

      const handleGenderClick = (gender) => {
            setSelectedGender(gender);
      };

      return (
            <div className='w-full mx-5 text-xs 2xl:text-base xl:text-base lg:text-base'>
                  <h1 className='font-semibold text-lg font1 border-b-[1px] my-1 py-4'>Profile Details</h1>

                  <div>
                        <Grid container spacing={3}>
                              <Grid item xs={12} lg={12}>
                                    <Box className="border rounded-s-md shadow-md p-5">
                                          <form>
                                                <Grid container spacing={3}>
                                                      <Grid item xs={12} sm={6}>
                                                            <TextField
                                                                  id='ContactNumber'
                                                                  name='ContactNumber'
                                                                  value="7898116274"
                                                                  fullWidth
                                                                  InputProps={{
                                                                        readOnly: true,
                                                                  }}
                                                            />
                                                      </Grid>
                                                      <Grid item xs={12} sm={6}>
                                                            <TextField
                                                                  required
                                                                  id='Email'
                                                                  name='Email'
                                                                  label="Email"
                                                                  fullWidth
                                                                  autoComplete='given-name'
                                                            />
                                                      </Grid>
                                                      <Grid item xs={12}>
                                                            <TextField
                                                                  required
                                                                  id='name'
                                                                  name='name'
                                                                  label="Name"
                                                                  fullWidth
                                                                  autoComplete='given-name'
                                                            />
                                                      </Grid>
                                                      <Grid item xs={12}>
                                                            <div className="flex items-center space-x-4">
                                                                  <button
                                                                        className={`flex-grow px-4 py-2 rounded-md text-sm font-medium ${selectedGender === 'male' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                                                                              }`}
                                                                        onClick={() => handleGenderClick('male')}
                                                                  >
                                                                        Male
                                                                  </button>
                                                                  <button
                                                                        className={`flex-grow px-4 py-2 rounded-md text-sm font-medium ${selectedGender === 'female' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                                                                              }`}
                                                                        onClick={() => handleGenderClick('female')}
                                                                  >
                                                                        Female
                                                                  </button>
                                                            </div>
                                                      </Grid>
                                                      <Grid item xs={12}>
                                                            <TextField
                                                                  required
                                                                  id='City'
                                                                  name='City'
                                                                  label="Date of Birth"
                                                                  fullWidth
                                                                  autoComplete='given-name'
                                                            />
                                                      </Grid>
                                                      <Grid item xs={12} sm={6}>
                                                            <Button
                                                                  sx={{
                                                                        py: 1.5,
                                                                        mt: 2,
                                                                        backgroundColor: "red"
                                                                  }}
                                                                  size='large'
                                                                  variant='contained'
                                                                  type='submit'>
                                                                  Save Details
                                                            </Button>
                                                      </Grid>
                                                </Grid>
                                          </form>
                                    </Box>
                              </Grid>
                        </Grid>
                  </div>
            </div>
      )
}

export default Profile;
