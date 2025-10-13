import { Routes } from '@angular/router';
import { Home } from '../features/home/home';
import { MemberDetailes } from '../features/members/member-detailes/member-detailes';
import { MemberList } from '../features/members/member-list/member-list';
import { Lists } from '../features/lists/lists';
import { Messages } from '../features/messages/messages';
import { authGuard } from '../core/guard/auth-guard';
import { TestErrors } from '../features/test-errors/test-errors';
import { NotFound } from '../shared/errors/not-found/not-found';
import { ServerErrror } from '../shared/errors/server-errror/server-errror';
import { MemberProfile } from '../features/members/member-profile/member-profile';
import { MemberPhotos } from '../features/members/member-photos/member-photos';
import { MemberMessages } from '../features/members/member-messages/member-messages';

export const routes: Routes = [
{path:'', component:Home},
{
    path:'',
    runGuardsAndResolvers:'always',
    canActivate:[authGuard],
    children:[
        {path:'members', component:MemberList},
        {
            path:'members/:id',
             component:MemberDetailes,
             children:[
                {path:'', redirectTo:'profile',pathMatch:'full'},
                {path:'profile', component:MemberProfile, title:'Profile'},
                {path:'photos', component:MemberPhotos, title:'Photos'},
                {path:'messages', component:MemberMessages, title:'Messages'}

             ]
        },
        {path:'lists', component:Lists},
        {path:'messages', component:Messages},
    ]
},
{path:'errors',component:TestErrors},
{path:'server-errror',component:ServerErrror},
{path:'**', component:NotFound},


];
