import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberOnboardRoutingModule } from './onboard-member/onboard-member-routing.module';
import { MemberListRoutingModule } from './member-list/member-list-routing.module';

const routes: Routes = [  {
  path: '',
  redirectTo: '/members',
  pathMatch: 'full'
}
//,{ path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MemberOnboardRoutingModule, MemberListRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
