import { Routes } from '@angular/router';
import { Home } from '../features/home/home';
import { MemberDetailes } from '../features/members/member-detailes/member-detailes';
import { MemberList } from '../features/members/member-list/member-list';
import { Lists } from '../features/lists/lists';
import { Messages } from '../features/messages/messages';

export const routes: Routes = [
{path:'', component:Home},
{path:'members', component:MemberList},
{path:'members/:id', component:MemberDetailes},
{path:'lists', component:Lists},
{path:'messages', component:Messages},
{path:'**', component:Home},


];
