import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../core/services/account-service';

@Component({
  selector: 'app-nav',
  imports: [FormsModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
  private accountservice=inject(AccountService)
protected creds:any={}
protected loggedIn=signal(false)

login(){
  this.accountservice.login(this.creds).subscribe({
    next:result=>
    {
      console.log(result),
      this.loggedIn.set(true);
    }
    //error:error=>alert(error.message)
  })
}

logout()
{
  this.loggedIn.set(false);
}



}
