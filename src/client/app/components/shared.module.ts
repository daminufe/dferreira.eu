import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {ToolbarComponent} from './toolbar/index';
import {NavbarComponent} from './navbar/index';
import {FooterComponent} from './footer/index';
import {NameListService} from './name-list/index';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [ToolbarComponent, NavbarComponent, FooterComponent],
    exports: [ToolbarComponent, NavbarComponent, FooterComponent,
        CommonModule, FormsModule, RouterModule]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [NameListService]
        };
    }
}
