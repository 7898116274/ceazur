import React, { useState } from 'react';
import OverView from './OverView'
import Profile from './Profile'

function Account() {
      const [activeComponent, setActiveComponent] = useState(<OverView />);
      return (
            <div>
                  <div className='py-4 border-b-[1px] mx-auto w-[90%] mt-2 2xl:w-[70%] xl:w-[70%] lg:w-[70%]'>
                        <h1 className='font-semibold text-lg font1'>Account</h1>
                        <p className='text-xs'>Aniket</p>
                  </div>
                  <div className='flex w-[90%] h-auto mx-auto 2xl:w-[70%] xl:w-[70%] lg:w-[70%]'>
                        <div className='w-[30%] border-r-2 2xl:w-[20%] xl:w-[20%] lg:w-[20%]'>
                              <div className=''>
                                    <ul>
                                          <li className='text-sm py-6 border-b-[1px] mr-6 text-slate-500' onClick={() => setActiveComponent(<OverView />)}>OVERVIEW</li>
                                          <h1 className='text-slate-400 text-sm pt-6' >ORDERS</h1>
                                          <li className='text-sm pb-6 pt-3 border-b-[1px] mr-6 text-slate-500'>Orders & Returns</li>
                                          <h1 className='text-slate-400 text-sm pt-6' onClick={() => setActiveComponent(<Profile />)}>ACCOUNT</h1>
                                          <li className='text-sm pt-3 mr-6 text-slate-500'>Profile</li>

                                          <li className='text-sm mr-6 text-slate-500'>Addresses</li>
                                          <li className='text-sm pt-3 mr-6 text-slate-500'>Terms of Use</li>
                                          <li className='text-sm pb-6 border-b-[1px] mr-6 text-slate-500'>Privacy Policy</li>
                                    </ul>
                              </div>
                        </div>
                        <div className=' w-[70%] h-full 2xl:w-[80%] xl:w-[80%] lg:w-[80%] '>
                              {activeComponent}
                        </div>
                  </div>

            </div>

      )
}

export default Account