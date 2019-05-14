import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";

import {MEAT_API} from '../../app.api'
import { User } from "./user.model";

@Injectable()
export class LoginService{

  constructor(private http: HttpClient){}

  login(email: string, password: string): Observable<User> {

    console.log(`${MEAT_API}/login`,
            {email: email, password: password});



    return this.http.post<User>(`${MEAT_API}/login`,
            {email: email, password: password});
  }
}
