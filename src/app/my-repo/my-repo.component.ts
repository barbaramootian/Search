import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GithubSearchService } from '../github-search.service';
import { Repository } from '../repository';
@Component({
  selector: 'app-my-repo',
  templateUrl: './my-repo.component.html',
  styleUrls: ['./my-repo.component.css']
})
export class MyRepoComponent implements OnInit {

  totalRepositories!:any;
  @ViewChild('myForm') searchRepoForm!: NgForm;
  userSearch!: string;
  displayUserRepos = false;
  myRepositories!:Repository;
    // end of declaring variables
  
    
    constructor(public githubSearchService:GithubSearchService ) { }
  
    ngOnInit(): void {
    }
  
      // search github user repositories
      accessRepositories() {
        this.userSearch = this.searchRepoForm.value.search;
        this.githubSearchService.getRepository(this.userSearch).then(
          (response:any) => {
            this.totalRepositories = this.githubSearchService.userRepositories;
            this.displayUserRepos = true;
            this.searchRepoForm.reset()
          },
          (error:any) => {
            console.log(error);
          }
        ); 
  
  
  }

}
