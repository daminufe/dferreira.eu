import {Route} from '@angular/router';
import {TalksComponent} from './index';
import {TalksInviteMeComponent} from './invite-me/index';
import {TalksListComponent} from './talks-list/index';

export const TalksRoutes: Route[] = [
    {
        path: 'talks',
        component: TalksComponent
    },
    {
        path: 'talks/invite-me',
        component: TalksInviteMeComponent
    },
    {
        path: 'talks/list',
        component: TalksListComponent
    }
];
