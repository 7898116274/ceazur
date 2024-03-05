import { createSlice } from '@reduxjs/toolkit'

const initialState = {
      isLoggedIn: false,
      UserContact: null,

}

const Authslice = createSlice({
      name: "auth",
      initialState,
      reducers: {
            SET_ACTIVE_USER: (state, action) => {
                  console.log(action.payload)
            }
      }
});

export const { SET_ACTIVE_USER } = Authslice.actions

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn

export const selectUserContact = (state) => state.auth.UserContact



export default Authslice.reducer