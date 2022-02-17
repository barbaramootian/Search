import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GithubSearchService } from '../github-search.service';
import { User } from '../user';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  individualsInformation!: User;
  inputData!: string;
  userExist = false;
  @ViewChild('myForm') frm!: NgForm;
    // end of declaring variables

  constructor(public githubSearchService: GithubSearchService) {}

  ngOnInit(): void {}

  accessUser() {
    this.inputData = this.frm.value.search;
    this.githubSearchService.getUserRequest(this.inputData).then(
      (response: any) => {
        this.individualsInformation = this.githubSearchService.myData;
        this.userExist = true;
        this.frm.reset()
      },
      (error:any) => {
        console.log(error);
      }
    );
  }}


