import { Routes } from '@angular/router';
import { Home } from '../features/home/home';
import { MemberDetailes } from '../features/members/member-detailes/member-detailes';
import { MemberList } from '../features/members/member-list/member-list';
import { Lists } from '../features/lists/lists';
import { Messages } from '../features/messages/messages';
import { authGuard } from '../core/guard/auth-guard';

export const routes: Routes = [
{path:'', component:Home},
{
    path:'',
    runGuardsAndResolvers:'always',
    canActivate:[authGuard],
    children:[
        {path:'members', component:MemberList},
        {path:'members/:id', component:MemberDetailes},
        {path:'lists', component:Lists},
        {path:'messages', component:Messages},
    ]
},

{path:'**', component:Home},


];
