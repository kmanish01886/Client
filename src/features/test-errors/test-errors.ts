import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-test-errors',
  imports: [],
  templateUrl: './test-errors.html',
  styleUrl: './test-errors.css'
})
export class TestErrors {
  private http=inject(HttpClient);
  baseUrl='https://localhost:44324/api/';
  validationErrors=signal<string[]>([]);

  get404Error(){
    this.http.get(this.baseUrl+'buggy/not-found').subscribe({
      next:response=>console.log(response),
      error:error=>console.log(error)      
    })
  }
  get400Error(){
    this.http.get(this.baseUrl+'buggy/bad-request').subscribe({
      next:response=>console.log(response),
      error:error=>console.log(error)      
    })
  }
  get500Error(){
    this.http.get(this.baseUrl+'buggy/server-error').subscribe({
      next:response=>console.log(response),
      error:error=>console.log(error)      
    })
  }
  get401Error(){
    this.http.get(this.baseUrl+'buggy/auth').subscribe({
      next:response=>console.log(response),
      error:error=>console.log(error)      
    })
  }
  get400ValidationError(){
    debugger;
    this.http.post(this.baseUrl+'buggy/register',{}).subscribe({
      next:response=>console.log(response),
      error:error=>{
        console.log(error)
        this.validationErrors.set(error);
      }      
    })
  }
  

}
