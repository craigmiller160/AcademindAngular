import { Subject } from 'rxjs/Subject';

export class ObservableUsersService {

  userActivated = new Subject<number>();

}
