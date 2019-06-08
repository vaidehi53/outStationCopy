import { Injectable } from '@angular/core';
import { Member } from '../models/member.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

/**
 * This Service class perform all member related operations like create, update, delete, get all students, get student by id etc.
 *
 * @export
 * @class MemberService
 */
@Injectable({
    providedIn: 'root'
})
export class MemberService {

    members = new Array<Member>();
    SERVER_URL = 'https://localhost:4200/api';
    constructor(
        private httpClient: HttpClient) { 
    }

   
  /**
   * This method creates a new member on the server by passing the member details in member object
   *
   * @param {Member} member - student to be created
   * @returns
   * @memberof MemberService
   */
  onboardMember(member: Member) {
    member.id = this.genId();
    const onboardStudent$ = new Observable<boolean>(observer => {
      this.httpClient.post(`${this.SERVER_URL + '/members'}`, member).subscribe((response: any) => {
        this.members = [member, ...this.members];
        observer.next(response);
        observer.complete();
      }, error => {
        observer.error();
        observer.complete();
      });

    });
    return onboardStudent$;
  }


   /**
   * This method generates an id because In-Memory-Web-Api wont allow to use POST request without id
   *
   * @returns {number}
   * @memberof MemberService
   */
  genId(): number {
    return this.members.length > 0 ? Math.max(...this.members.map(hero => hero.id)) + 1 : 1;
  }

  getMemberById(memberId: number): Observable<Member> {
    const memberDetail = new Observable<Member>(observer => {
      this.httpClient.get(`${this.SERVER_URL + '/members'}`).subscribe((response: any) => {
        const findMember = this.members.find(member => member.id === memberId);
        observer.next(findMember ? findMember : new Member());
        observer.complete();
      }, error => {
        observer.error();
        observer.complete();
      });
    });
    return memberDetail;
  }

  updateMember(member: Member) {
    const updateMember = new Observable<boolean>(observer => {
      this.httpClient.put(`${this.SERVER_URL + '/members'}`, member).subscribe((response: any) => {
        const updateMember = this.members.find(mem => mem.id === member.id);
        if (updateMember) {
          updateMember.name = member.name;
          updateMember.division = member.division;
          updateMember.mobileNo = member.mobileNo;
          updateMember.region = member.region;
          updateMember.zone = member.zone;
          updateMember.chapter = member.chapter;
          updateMember.arrivalDetails = member.arrivalDetails;
          updateMember.departureDetails = member.departureDetails;
        }
        this.members = [...this.members];
        observer.next(response);
        observer.complete();
      }, error => {
        observer.error();
        observer.complete();
      });

    });
    return updateMember;
  }

  getAllMembers(): Observable<Array<Member>> {
    const membersList$: Observable<Array<Member>> = new Observable<Array<Member>>(observer => {
      this.httpClient.get(`${this.SERVER_URL + '/members/'}`).subscribe((response: Array<Member>) => {
        if (this.members.length === 0) {
          this.members = response;
        }
        observer.next(this.members);
        observer.complete();
      }, error => {
        observer.error();
        observer.complete();
      });
    });
    return membersList$;
  }

  deleteMember(memberId: number): Observable<boolean> {
    const deleteMember$ = new Observable<boolean>(observer => {
      this.httpClient.delete(`${this.SERVER_URL + '/members/' + memberId}`).subscribe((response: any) => {
        this.members = this.members.filter(member => member.id !== memberId);
        observer.next(response);
        observer.complete();
      }, error => {
        observer.error();
        observer.complete();
      });

    });
    return deleteMember$;
  }




}