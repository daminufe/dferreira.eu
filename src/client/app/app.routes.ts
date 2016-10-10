import {Routes} from '@angular/router';

import {AboutRoutes} from './about/index';
import {HomeRoutes} from './home/index';
import {TalksRoutes} from './talks/index';

export const routes: Routes = [
    ...HomeRoutes,
    ...AboutRoutes,
    ...TalksRoutes
];
