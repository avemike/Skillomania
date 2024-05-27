enum UserRoles {
  Standard,
  Admin,
}

interface IUser {
  id: number;
  name: string;
  email: string;
  created: Date;
  role: UserRoles;
  pwdHash?: string;
}

interface ISessionUser {
  id: number;
  email: string;
  name: string;
}
