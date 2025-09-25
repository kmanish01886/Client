import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { single, tap } from 'rxjs';
import { User } from '../../types/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private http=inject(HttpClient);
  currentUser=signal<User |null>(null);

  baseUrl='https://localhost:44324/api/';

  login(creds:any)
  {
    debugger;
    return this.http.post<User>(this.baseUrl+'account/login',creds).pipe(
      tap(user=>{
        if(user)
        {
          localStorage.setItem('user', JSON.stringify(user))
          this.currentUser.set(user);
        }
      })
    )   
  }
  logout(){
    localStorage.removeItem('user');
    this.currentUser.set(null);
  }
  
}
