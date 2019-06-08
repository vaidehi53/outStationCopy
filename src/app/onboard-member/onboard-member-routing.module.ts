import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OnboardMemberComponent } from './onboard-member.component';
import { AuthGuard } from '../shared/gaurds/auth.gaurd';


@NgModule({
    imports: [RouterModule.forChild([
        {
            path: 'onboard',
            component: OnboardMemberComponent,
            //canActivate: [AuthGuard]
        } 
    ])]
})
export class MemberOnboardRoutingModule{

}