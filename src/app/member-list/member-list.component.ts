import { Component, OnInit } from '@angular/core';
import { Member } from '../shared/models/member.model';
import { Router } from '@angular/router';
import { MemberService } from '../shared/services/member.service';
import { MemberFilter } from './shared/member-filter.model';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  members = new Array<Member>();
  filteredMembers = new Array<Member>();

  constructor(
    public router: Router,
    private memberService: MemberService,
  ) { }

  ngOnInit() {
    this.fetchMembers();
  }

  fetchMembers() {
    this.memberService.getAllMembers().subscribe(response => {
      this.members = response;
      this.filteredMembers = this.members;
    });
  }

  filterMembersHandler(filters: MemberFilter) {
    this.filteredMembers = this.members.filter(member => {
      if (filters.memberName !== '') {
        return member.name.toLowerCase().indexOf(filters.memberName.toLowerCase()) >= 0;
      }
      return true;
    });
  }

  deleteMember(memberId: number) {
    this.memberService.deleteMember(memberId).subscribe(response => {
      this.members = this.members.filter(member => member.id !== memberId);
      this.filteredMembers = this.members;
      this.filteredMembers = JSON.parse(JSON.stringify(this.filteredMembers));
    });
}

}
