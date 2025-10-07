import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ApiError } from '../../../types/error';

@Component({
  selector: 'app-server-errror',
  imports: [],
  templateUrl: './server-errror.html',
  styleUrl: './server-errror.css'
})
export class ServerErrror {
  private router=inject(Router);
  protected error:ApiError;
  protected showDetails=false;

  constructor(){
    const navigation=this.router.getCurrentNavigation();
    this.error=navigation?.extras?.state?.['error'];
  }

  detailsToggle(){
    this.showDetails=!this.showDetails;
  }

}
