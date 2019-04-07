import { BehaviorSubject } from 'rxjs';

export class SharedServicesProvider {
  statusSearch: BehaviorSubject<string> = new BehaviorSubject<string>('');
}
