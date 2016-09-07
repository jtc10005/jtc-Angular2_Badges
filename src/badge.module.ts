import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { jtcBadge } from './badge.component';


@NgModule({
    imports: [CommonModule],
    declarations: [jtcBadge],
    exports: [jtcBadge],
    entryComponents: [jtcBadge]
})
export class JtcBadgeModule {

}