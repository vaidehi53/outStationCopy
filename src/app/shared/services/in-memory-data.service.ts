import { InMemoryDbService } from 'angular-in-memory-web-api/interfaces';
import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { User } from '../models/user.model';
import { Observable, Subject } from 'rxjs';
import { Member } from '../models/member.model';

/**
 * This service acts as MOCK Server
 *
 * @export
 * @class InMemoryDataService
 * @implements {InMemoryDbService}
 */
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
 
  members = new Array<Member>();
  registeredUsers = new Array<User>();

  constructor() { }
  /**
   * This method creates dummy student data using FAKER.JS library and which will be available to all http calls
   *
   * @returns
   * @memberof InMemoryDataService
   */
  createDb() {
    this.resetValues();
    this.initRegisteredUsers();
    this.initStudentData();
    return {
      members: this.members,
      registeredUsers: this.registeredUsers
    };
  }

  /**
   * This method reset values of students and registered users
   *
   * @memberof InMemoryDataService
   */
  resetValues() {
    this.members = [];
    this.registeredUsers = [];
  }

  /**
   * This method add 2 registered users which will be used to login into app
   *
   * @memberof InMemoryDataService
   */
  initRegisteredUsers() {
    this.registeredUsers.push(new User('root', 'root'));
    this.registeredUsers.push(new User('admin', 'admin'));
  }


  /**
   * This method creates dummy student data. We are generating 40 students.
   *
   * @memberof InMemoryDataService
   */
  initStudentData() {
    for (let i = 0; i < 40; i++) {
      this.members.push(this.getDummyMember());
    }
  }

  /**
   * This method returns a dummy student using FAKER.JS library
   *
   * @private
   * @returns {Student}
   * @memberof InMemoryDataService
   */
  private getDummyMember(): Member {
    const member = new Member();
    member.id = faker.random.uuid();
    member.name = faker.name.firstName();
    member.division = faker.helpers.randomize(['YMD', 'YWD', 'MD', 'WD']);
    member.mobileNo = faker.random.number({
      min: 100000000000,
      max: 999999999999
    });
    member.region = faker.helpers.randomize(['Aravali', 'South city', 'Uniworld']);
    member.zone = faker.helpers.randomize(['Aravali', 'Delhi', 'Noida']);
    member.chapter = faker.helpers.randomize(['Malibu', 'Nirvana']);;
    member.arrivalDetails.arrivalDate = faker.helpers.randomize(['Male', 'Female']);
    member.arrivalDetails.arrivalTime = faker.date.future().toString();
    member.arrivalDetails.destinationStation = 'Delhi';
    member.arrivalDetails.mode = 'Flight';
    member.arrivalDetails.modeDetails = 'Flight Number: 1234'
    member.departureDetails.dateOfDeparture = faker.date.future().toString();
    member.departureDetails.departureStation = 'Delhi';
    member.departureDetails.destinationDetails = 'Mumbai';
    member.departureDetails.mode = 'Flight';
    member.departureDetails.modeDetails = 'Flight number : 123456';
    member.departureDetails.timeOfDeparture =  faker.date.future().toString();
    member.imgUrl = faker.image.avatar();
    return member;
  }

}
