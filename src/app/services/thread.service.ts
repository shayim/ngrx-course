import { AllUserData } from './../../shared/viewModels/all-user-data'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class ThreadService {
  constructor(private http: HttpClient) {}

  getUserThreads(): Observable<AllUserData> {
    return this.http.get('/api/threads').pipe(
      map(data => data as AllUserData))
  }
}
