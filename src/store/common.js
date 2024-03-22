import { createSlice } from "@reduxjs/toolkit";
import { post } from "@/api/request";
const commonStore = createSlice({
    name: 'commonStore',
    initialState: {
        token: null,
        isDark: true,
    },
    reducers: {
        setToken(state, payload) {
            state.token = payload;
        },
        clearToken(state, payload) {
            state.token = null;
        },
        // dark
        switchDark(state, payload) {
            state.isDark = !state.isDark;
        }
    }
})
const { setToken, clearToken, switchDark } = commonStore.actions;
function getToken(username, password) {
    return async (dispatch) => {
        const { data } = await post(`/login`, { username, password });
        sessionStorage.setItem('token', data.data.token);
        dispatch(setToken(data.data.token));
    }

}
export { setToken, clearToken, getToken, switchDark }
export default commonStore.reducer;