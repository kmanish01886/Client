import { Component, inject, OnInit, signal } from '@angular/core';
import { MemberService } from '../../../core/services/member-service';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { filter, Observable } from 'rxjs';
import { Member } from '../../../types/member';
@Component({
  selector: 'app-member-detailes',
  imports: [AsyncPipe, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './member-detailes.html',
  styleUrl: './member-detailes.css'
})
export class MemberDetailes implements OnInit {
  
  private memberService=inject(MemberService);
  private route=inject(ActivatedRoute);
  private router=inject(Router);
  protected member$?:Observable<Member>;
  protected title=signal<string | undefined>('profile');

  ngOnInit(): void {
    this.member$=this.loadMember();
    this.title.set(this.route.firstChild?.snapshot?.title)
    this.router.events.pipe(
      filter(event=>event instanceof NavigationEnd)
    ).subscribe({
      next:()=>{
        this.title.set(this.route.firstChild?.snapshot?.title)
      }
    })
  }

  loadMember(){
    const idParam=this.route.snapshot.paramMap.get('id');
    if(!idParam) return;
    const id=Number(idParam);
    return this.memberService.getMember(id);
  }

}
