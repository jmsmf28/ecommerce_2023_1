import { createSlice } from "@reduxjs/toolkit"

const appSlice = createSlice({
  name: "app",
  initialState: { selectedLanguage: 'pt' },
  reducers: {
    setLanguage(state, {payload}){
      return {
        ...state,
        selectedLanguage:payload
      }
    }
  },
})

export const appActions = appSlice.actions
export default appSlice
