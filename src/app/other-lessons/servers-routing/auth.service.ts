export class AuthService {
  loggedIn = false;

  login(): void {
    this.loggedIn = true;
  }

  logout(): void {
    this.loggedIn = false;
  }

  isAuthenticated(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => setTimeout(resolve(this.loggedIn), 800));
  }
}
