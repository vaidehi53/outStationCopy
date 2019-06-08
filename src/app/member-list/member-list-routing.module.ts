import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MemberListComponent } from './member-list.component';
import { AuthGuard } from '../shared/gaurds/auth.gaurd';


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'members',
      component: MemberListComponent
    //   canActivate: [AuthGuard]
    }
  ])],
  exports: [
    RouterModule
  ]
})
export class MemberListRoutingModule {

}
