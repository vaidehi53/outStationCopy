import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {

  storage: Storage;

  constructor(private router: Router) {
    this.storage = window.sessionStorage;
   }

  

  ngOnInit() {
  }

}
