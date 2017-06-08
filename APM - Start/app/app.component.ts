import {Component} from '@angular/core';

@Component({
    selector: 'mc-app',
    template: "<div><h2>{{pageTitle}}</h2></div><div><pm-products></pm-products></div><div><pm-products></pm-products></div>"
})
export class AppComponent {
    pageTitle: string = "My first ng2 Application"
}