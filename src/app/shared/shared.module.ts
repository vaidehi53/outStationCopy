import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule,
        NgbModule,
        BrowserModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports: [CommonModule,
        RouterModule,
        NgbModule,
        BrowserModule,
        ReactiveFormsModule,
        FormsModule]
})
export class SharedModule { 
    
}
