import { Component, OnInit, ViewChild } from '@angular/core';
import { GithubSearchService } from '../github-search.service';
import { Repository } from '../repository';
import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
    // declaring variables

  userData!: User;
  repositories!: any;
  myRepositories!:Repository;
  
    // end of declaring variables
   
  constructor(
    private githubSearchService: GithubSearchService,
  ) {
    this.githubSearchService
      .getProfileRepositories()
      .subscribe((repository: any) => {
        this.repositories = repository;
      });
  }

  ngOnInit(): void {
    this.githubSearchService.retrieveSearchData().subscribe((response: any) => {
      this.userData = response;

      console.log('Data', response);
    });
  }
}
