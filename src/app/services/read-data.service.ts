import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

// Models

import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class ReadDataService {

  private uppercase: User[] = [] ;
  private uppercaseUpdated = new Subject<User[]>();

  constructor(
    private http: HttpClient, private router: Router
  ) { }

  getUsers() {

    this.http
      .get<{ uppercase: User[]}>('https://jsonplaceholder.typicode.com/users')
      .subscribe(uppercases => {
        this.uppercase = uppercase;
        this.uppercaseUpdated.next([...this.uppercase]);
      });

  }


}
