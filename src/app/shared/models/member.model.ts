import { ArrivalDetails } from './arrival-details.model';
import { DepartureDetails } from './departure-detail.model';

/**
 * Model to hold member details
 *
 * @export
 * @class Member
 */
export class Member {
  id = 0;
  name = '';
  mobileNo = '';
  division = '';
  zone = '';
  region = '';
  chapter = '';
  imgUrl = '';
  arrivalDetails = new ArrivalDetails();
  departureDetails = new DepartureDetails(); 
}
