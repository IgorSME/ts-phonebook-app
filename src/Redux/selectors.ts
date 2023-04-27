import { RootState } from "./store";

export const getIsLoggedIn = (state:RootState) => state.auth.isLoggedIn;
export const getUserEmail = (state:RootState) => state.auth.user.email;
export const getIsFetchCurrentUser = (state:RootState) => state.auth.isFetchCurrentUser;
export const getUserName = (state:RootState) => state.auth.user.name;
