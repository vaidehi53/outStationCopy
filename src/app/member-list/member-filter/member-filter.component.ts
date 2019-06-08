import { Component, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { MemberFilter } from '../shared/member-filter.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-member-filter',
  templateUrl: './member-filter.component.html',
  styleUrls: ['./member-filter.component.css']
})
export class MemberFilterComponent implements OnInit {
  
  @Output() filterMembersEvent = new EventEmitter<MemberFilter>();
  memberFilter = new MemberFilter();
  
  constructor() { }

  ngOnInit() {
  }

  getFilteredMembers() {
    this.filterMembersEvent.emit(this.memberFilter);
  }

}
