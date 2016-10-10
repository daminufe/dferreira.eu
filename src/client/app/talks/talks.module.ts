import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../components/shared.module';
import {TalksComponent} from './talks.component';
import {TalksInviteMeComponent} from './invite-me/invite-me.component';
import {TalksListComponent} from './talks-list/talks-list.component';

@NgModule({
    imports: [CommonModule, SharedModule],
    declarations: [TalksComponent, TalksInviteMeComponent, TalksListComponent],
    exports: [TalksComponent]
})

export class TalksModule {
}
