import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnboardMemberComponent } from './onboard-member/onboard-member.component';
import { AuthGuard } from './shared/gaurds/auth.gaurd';
import { FormsModule } from '@angular/forms';
import { MemberOnboardModule } from './onboard-member/onboard-member-module';
import { HttpClientModule } from '@angular/common/http';
import { MemberListComponent } from './member-list/member-list.component';
import { HeadersComponent } from './headers/headers.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/services/in-memory-data.service';
import { MemberListModule } from './member-list/member-list-module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { MemberFilterComponent } from './member-list/member-filter/member-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MemberOnboardModule,
    MemberListModule,
    HttpClientModule,
    SharedModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService), // todo
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
