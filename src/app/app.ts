import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit,  Signal,  signal } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  
  private http=inject(HttpClient);
  protected  title = 'client';
  protected members=signal<any>([]);

  // ngOnInit(): void {
  //  this.http.get('https://localhost:44324/api/Members/AllMembers').subscribe({
  //   // next:response=>console.log(response),
  //   next:response=>this.members.set(response),
  //   error:error=>console.log(error),
  //   complete:()=>console.log('Complete the http request')
  //  })
  // }

  async ngOnInit() {
    this.members.set(await this.getMemebers())
  }

  async getMemebers(){
    try{
        return lastValueFrom(this.http.get('https://localhost:44324/api/Members/AllMembers'));
    }
    catch(error)
    {
      console.log(Error);
      throw error;
    }
  }


  
}
