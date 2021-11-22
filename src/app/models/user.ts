export class User {
  userId: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  lastLoginDate: Date;
  lastLoginDateDisplay: Date;
  joinDate: Date;
  profileImageUrl: string;
  active: boolean;
  notLocked: boolean;
  role: string;
  authorities: [];

  constructor() {
    this.userId = '';
    this.firstName = '';
    this.lastName = '';
    this.username = '';
    this.email = '';
    this.password = '';
    this.lastLoginDate = null;
    this.lastLoginDateDisplay = null;
    this.joinDate = null;
    this.profileImageUrl = '';
    this.active = false;
    this.notLocked = false;
    this.role = '';
    this.authorities = [];
  }
}
