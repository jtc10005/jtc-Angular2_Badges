### jtc-Angular2_Badges
___
Latest version: 1.0.8
Simple badge module for Angular 2.

<img src='./src/images/sampleImage.PNG' />
___
How to use:
from NPM run: `npm install jtc-angular2_badges --save`   
Add to your module directives.
```
import { NgModule
    , BrowserModule
    , HomeComponent
    , routing
    , FormsModule } from './index.ts';
import { SharedModule }            from '../shared/shared.module';

import { JtcBadgeModule } from '../../../node_modules/jtc-angular2_badges/jtc-angular2_badges';

@NgModule({
    imports: [BrowserModule, routing, FormsModule, SharedModule, JtcBadgeModule],
    declarations: [HomeComponent]
})
export class HomeModule { }
```

Add to component HTML: 
```
<jtc-Badge type="error" text="INACTIVE" *ngIf="!table.IsActive"></jtc-Badge>
``` 

___
text is the text to appear in the badge.
type is the stylings to be applied to the badge.

There are several different badge stylings:
<ul>
<li>primary</li>
<li>error</li>
<li>info</li>
<li>warn</li>
<li>success</li>
<li>default</li>
</ul>
