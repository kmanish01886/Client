import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit,  Signal,  signal } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Nav } from "../layout/nav/nav";
import { AccountService } from '../core/services/account-service';
import { Home } from "../features/home/home";
import { User } from '../types/user';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Nav, RouterOutlet]
})
export class App implements OnInit {
  private accountservice=inject(AccountService);
  private http=inject(HttpClient);
  protected router=inject(Router);
  protected  title = 'client';
  protected members=signal<User[]>([]);

  // ngOnInit(): void {
  //  this.http.get('https://localhost:44324/api/Members/AllMembers').subscribe({
  //   // next:response=>console.log(response),
  //   next:response=>this.members.set(response),
  //   error:error=>console.log(error),
  //   complete:()=>console.log('Complete the http request')
  //  })
  // }

  async ngOnInit() {
    this.members.set(await this.getMemebers());
    this.setCurrentUser();
  }

  setCurrentUser(){
    const userString=localStorage.getItem('user');
    if(!userString)return;
    const user=JSON.parse(userString);
    this.accountservice.currentUser.set(user);
  }
  async getMemebers(){
    try{
        return lastValueFrom(this.http.get<User[]>('https://localhost:44324/api/Members/AllMembers'));
    }
    catch(error)
    {
      console.log(Error);
      throw error;
    }
  }


  
}
