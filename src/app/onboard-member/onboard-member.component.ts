import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MemberService } from '../shared/services/member.service';
import { Member } from '../shared/models/member.model';
import * as faker from 'faker';

@Component({
  selector: 'app-onboard-member',
  templateUrl: './onboard-member.component.html',
  styleUrls: ['../app.component.css']
  // styleUrls: ['./onboard-member.component.css']
})
export class OnboardMemberComponent implements OnInit {

  memberForm: FormGroup;
  viewMode = '';
  memberId = 0;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private memberService: MemberService){}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.initMemberForm(params.memberId, params.viewMode);
  });
}

 /**
   * This method initializes the member onboarding form
   *
   * @memberof MemberOnboardComponent
   */
  initMemberForm(memberId: number, viewMode: string) {
    this.viewMode = viewMode;
    this.memberId = memberId;
    this.memberForm = this.formBuilder.group({
      name: [{value: '', disabled: viewMode === 'VIEW' && this.memberId }, [Validators.required]],
      zone: [{value: '', disabled: viewMode === 'VIEW' && this.memberId }, [Validators.required]],
      mobileNo: [{value: '', disabled: viewMode === 'VIEW' && this.memberId }, [Validators.required]],
      chapter: [{value: '', disabled: viewMode === 'VIEW' && this.memberId }, [Validators.required]],
      division: [{value: '', disabled: viewMode === 'VIEW' && this.memberId }, [Validators.required]],
      region: [{value: '', disabled: viewMode === 'VIEW' && this.memberId }, [Validators.required]],
    });

    if (memberId) {
      this.memberService.getMemberById(memberId).subscribe((member: Member) => {
        this.memberForm.get('name').setValue(member.name);
        this.memberForm.get('division').setValue(member.division);
        this.memberForm.get('chapter').setValue(member.chapter);
        this.memberForm.get('mobileNo').setValue(member.mobileNo);
        this.memberForm.get('name').setValue(member.name);
        this.memberForm.get('region').setValue(member.region);
        this.memberForm.get('zone').setValue(new Date(member.zone));

      }, error => {
        //this.messageService.add({ severity: 'error', summary: 'Some error occurred !!!' });
      });
    }
  }

  onboardMember() {
    const member = new Member();
    if (this.viewMode === '' || this.viewMode === undefined) {
      member.id = faker.random.uuid();
    } else {
      member.id = this.memberId;
    }
    member.name = this.memberForm.get('name').value;
    member.division = this.memberForm.get('division').value;
    member.chapter = this.memberForm.get('chapter').value;
    member.mobileNo = this.memberForm.get('mobileNo').value;
    member.region = this.memberForm.get('region').value;
    member.zone = this.memberForm.get('zone').value;

    if (this.viewMode === 'EDIT') {
      this.updateMember(member);
    } else if (this.viewMode === '' || this.viewMode === undefined) {
      this.onboardNewMember(member);
    }
  }

  updateMember(member: Member) {
    this.memberService.updateMember(member).subscribe(response => {
     console.log('updated successfully'); 
      // this.messageService.add({ severity: 'success', summary: 'Student updated successfully !!!' });
    }, error => {
      //this.messageService.add({ severity: 'error', summary: 'Student update failed !!!' });
    });
  }

  onboardNewMember(member: Member) {
    this.memberService.onboardMember(member).subscribe(response => {
      this.memberForm.reset();
      console.log('onboarded successfully');
     // this.messageService.add({ severity: 'success', summary: 'Student onboarded successfully !!!' });
    }, error => {
      //this.messageService.add({ severity: 'error', summary: 'Student onboarded failed !!!' });
    });
  }

 
}
