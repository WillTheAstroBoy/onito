import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserFormData } from "../types";

interface UserState {
    data: UserFormData | null;
    list: Array<UserFormData>
}

const initialState: UserState = {
    data: null,
    list: []
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<UserFormData>) => {
            state.data = action.payload;
        },
        deleteUserData: (state) => {
            state.data = null;
        },
        addUser: (state, action: PayloadAction<UserFormData>) => {
            state.list = [...state.list, action.payload];
        }
    },
});

export const { setUserData, deleteUserData, addUser } = userSlice.actions;
export const selectUsersList = (state: { user: UserState }) => state.user.list;
export default userSlice.reducer;