import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-server-errror',
  imports: [],
  templateUrl: './server-errror.html',
  styleUrl: './server-errror.css'
})
export class ServerErrror {
  private router=inject(Router);
  protected error=ApiError;

  constructor(){
    const navigation=this.router.getCurrentNavigation();
    this.error=navigation?.extras?.state?.['error'];
  }
}
