import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';

import { UserDataComponent } from '../user-data/user-data.component';
import { MyRepoComponent } from '../my-repo/my-repo.component';
import { WrongPageComponent } from '../wrong-page/wrong-page.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'searchUser', component: UserDataComponent},
  { path: 'searchRepos', component: MyRepoComponent },
  { path: '', redirectTo: '/profile', pathMatch: 'full' },
  { path: '**', component: WrongPageComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),

    CommonModule
  ],
  exports: [RouterModule]
})


export class MyRoutingModule { }
