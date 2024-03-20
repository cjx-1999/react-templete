import { createSlice } from "@reduxjs/toolkit";
import { post } from "@/api/request";
const commonStore = createSlice({
    name: 'commonStore',
    initialState: {
        token: null,
    },
    reducers: {
        setToken(state, payload) {
            state.token = payload;
        },
        clearToken(state, payload) {
            state.token = null;
        },
    }
})
const { setToken, clearToken } = commonStore.actions;
function getToken(username, password) {
    return async (dispatch) => {
        const { data } = await post(`/login`, { username, password });
        sessionStorage.setItem('token', data.data.token);
        dispatch(setToken(data.data.token));
    }

}
export { setToken, clearToken, getToken }
export default commonStore.reducer;