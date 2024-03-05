import { Grid, Button, Box, TextField } from '@mui/material'
import React from 'react'
import AddressCart from './AddressCart'

const DeliveryAddressForm = () => {
      const handleSubmit = (e) => {
            e.preventDefault();
            console.log("address success")
      }

      return (
            <div>
                  <Grid container spacing={4}>
                        <Grid xs={12} lg={5} className='border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll'>
                              <div className='p-5 py-7 border-b cursor-pointer'>
                                    <AddressCart />
                                    <Button sx={{
                                          mt: 2,
                                          backgroundColor: "red"
                                    }} size='large' variant='contained'>
                                          Delivery Here
                                    </Button>
                              </div>
                        </Grid>
                        <Grid item xs={12} lg={7}>
                              <Box className="border rounded-s-md shadow-md p-5">
                                    <form onSubmit={handleSubmit}>
                                          <Grid container spacing={3}>
                                                <Grid item xs={12} sm={6}>
                                                      <TextField
                                                            required
                                                            id='firstName'
                                                            name='firstName'
                                                            label="First Name"
                                                            fullWidth
                                                            autoComplete='given-name'
                                                      />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                      <TextField
                                                            required
                                                            id='LastName'
                                                            name='LastName'
                                                            label="Last Name"
                                                            fullWidth
                                                            autoComplete='given-name'
                                                      />
                                                </Grid>
                                                <Grid item xs={12}>
                                                      <TextField

                                                            required
                                                            id='address'
                                                            name='address'
                                                            label="Address"
                                                            fullWidth
                                                            autoComplete='given-name'
                                                            multiline
                                                            rows={4}
                                                      />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                      <TextField
                                                            required
                                                            id='City'
                                                            name='City'
                                                            label="City"
                                                            fullWidth
                                                            autoComplete='given-name'
                                                      />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                      <TextField
                                                            required
                                                            id='state'
                                                            name='state'
                                                            label="State"
                                                            fullWidth
                                                            autoComplete='given-name'
                                                      />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                      <TextField
                                                            required
                                                            id='pincode'
                                                            name='pincode'
                                                            label="Pincode"
                                                            fullWidth
                                                            autoComplete='shipping postal-code'
                                                      />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                      <TextField
                                                            required
                                                            id='contact'
                                                            name='contact'
                                                            label="Contact Number"
                                                            fullWidth
                                                            autoComplete='given-name'
                                                      />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                      <Button sx={{
                                                            py: 1.5,
                                                            mt: 2,
                                                            backgroundColor: "red"
                                                      }} size='large' variant='contained'
                                                            type='submit'>
                                                            Delivery Here
                                                      </Button>
                                                </Grid>
                                          </Grid>
                                    </form>
                              </Box>
                        </Grid>
                  </Grid>
            </div>
      )
}

export default DeliveryAddressForm