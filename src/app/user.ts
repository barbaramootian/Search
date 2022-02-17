export class User {

    constructor(
      public username: string,
      public login: string,
      public location: string,
      public avatar_url: string,
      public html_url: string,
      public public_repos: number,
      public followers: number,
      public following: number,
      public public_gists: number,
      public created_at: Date
    ) {}
  }
  