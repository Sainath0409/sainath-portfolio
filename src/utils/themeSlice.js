import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme: 'light' // Fix: Do not access localStorage during SSR
    },
    reducers: {
        changeTheme: (state, action) => {
            state.theme = action.payload
            if (typeof window !== "undefined") {
                localStorage.setItem('theme', action.payload);
            }
        }
    }
})

export default themeSlice.reducer
export const { changeTheme } = themeSlice.actions