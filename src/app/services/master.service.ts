import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { APIresponse, User } from '../modules/user';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  http = inject(HttpClient)

  login(obg: User) {
    return this.http.post<APIresponse>("https://projectapi.gerasim.in/api/IncidentTracking/login", obg)
  }

}
