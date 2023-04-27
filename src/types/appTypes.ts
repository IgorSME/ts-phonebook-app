export interface IUser {
  name: string | null;
  email: string | null;
}

export interface IUserState {
  user: IUser;
  token: string | null;
  isLoggedIn: boolean;
  isFetchCurrentUser: boolean;
}
export type TToken = {
  set: (token: string) => void;
  unset: () => void;
};
export interface ILoginTarget {
  value: string; 
  name: string; 
}
export interface ILogInPayload {
  name?: string;
  email: string;
  password: string;
}

export interface IDataReturned{
    token: string,
    user:IUser
}
export interface IContactsItem {
  id: string;
  name: string;
  number: string;
}

export type IContacts = IContactsItem[];