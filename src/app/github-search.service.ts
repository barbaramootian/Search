import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Repository } from './repository';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {
 //declaring variables
 username = 'barbaramootian';
 personalToken = 'Api_key:"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"'
 userRepositories: any;
 myData: any;
 // end of declaring variables

 constructor(private http: HttpClient) {
  this.myData = new User('', '', '', '', '', 0, 0, 0, 0, new Date());
  this.userRepositories = new Repository('', '', '', '', new Date());
}
//get user request
getUserRequest(myGithubUsername: any) {
  interface ApiResponse {
    username: string;
    login: string;
    avatar_url: string;
    html_url: string;
    public_repos: number;
    followers: number;
    following: number;
    public_gists: number;
    created_at: Date;
  }
  let userRequestPromise = new Promise<void>((resolve, reject) =>
    this.http.get<ApiResponse>('https://api.github.com/users/' + myGithubUsername +'?client_id=' +'&client_secret=' +this.personalToken
      )
      .toPromise().then((getUserResponse:any) => {
          this.myData = getUserResponse;
          resolve();
        },
        (error) => {
          reject(error);
          console.log(error);
        }
      )
  );
  return userRequestPromise;
}

 //retrieve repositories
 getRepository(githubUsername: any) {
  interface ApiUserRepositoryResponse {
    name: string;
    html_url: string;
    description: string;
    created_at: Date;
    language?: string;
  }

  let FetchedResultsPromise = new Promise<void>((resolve, reject) => {
    this.http.get<ApiUserRepositoryResponse>('https://api.github.com/users/' +githubUsername +'/repos?client_id=' +this.personalToken
      )
      .toPromise().then((getRepositoryResponse:any) => {
          this.userRepositories = getRepositoryResponse;
          resolve();
        },
        (error) => {
          reject(error);
          console.log(error);
        }
      );
  });
  return FetchedResultsPromise;
}

  // from homepage

  retrieveSearchData() {
    return this.http.get('https://api.github.com/users/' +this.username +'?client_id=' +'&client_secret=' +this.personalToken
      )
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  getProfileRepositories() {
    return this.http.get('https://api.github.com/users/' +this.username +'/repos?client_id=' +this.personalToken
      )
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

}
