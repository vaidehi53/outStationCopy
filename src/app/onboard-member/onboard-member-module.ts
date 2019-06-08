import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { OnboardMemberComponent } from './onboard-member.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [OnboardMemberComponent],
    imports: [
        SharedModule
    ],
})
export class MemberOnboardModule{

}