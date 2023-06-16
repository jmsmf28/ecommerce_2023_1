import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggIn: false, selectedLanguage: 'pt' },
  reducers: {
    login(state) {
      state.isLoggIn = true
    },
    logout(state) {
      state.isLoggIn = false
    },
    setLanguage(state, {payload}){
      return {
        ...state,
        selectedLanguage:payload
      }
    }
  },
})

export const authActions = authSlice.actions
export default authSlice
