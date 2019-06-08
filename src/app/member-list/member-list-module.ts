import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MemberListComponent } from './member-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { MemberFilterComponent } from './member-filter/member-filter.component';

@NgModule({
  declarations: [MemberListComponent, MemberFilterComponent],
  imports: [
    SharedModule
  ],
  exports: []
})
export class MemberListModule { }
