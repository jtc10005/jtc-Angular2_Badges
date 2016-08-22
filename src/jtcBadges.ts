import { Component, Input, OnInit} from '@angular/core';


@Component({
    selector: 'jtc-Badge',
    templateUrl: '/jtcBadges.html'
})
export class jtcBadge implements OnInit {

    @Input() text: string;
    private jtcClass: string;

    @Input() type: string;

    constructor() {
        this.jtcClass = 'jtc-badge'
    };

    ngOnInit() {
        if (this.type) {
            if (this.type.toUpperCase().indexOf('SUCCESS') != -1)
            { this.jtcClass += ' jtc-badge-success'; }
            else if (this.type.toUpperCase().indexOf('ERROR') != -1)
            { this.jtcClass += ' jtc-badge-error'; }
            else if (this.type.toUpperCase().indexOf('INFO') != -1)
            { this.jtcClass += ' jtc-badge-info' }
            else if (this.type.toUpperCase().indexOf('PRIMARY') != -1)
            { this.jtcClass += ' jtc-badge-primary' }
            else if (this.type.toUpperCase().indexOf('DEFAULT') != -1)
            { this.jtcClass += ' jtc-badge-default' }
            else if (this.type.toUpperCase().indexOf('WARN') != -1)
            { this.jtcClass += ' jtc-badge-warning' }
            else { this.jtcClass += ' jtc-badge-primary' }
        }
        else {
            this.jtcClass += ' jtc-badge-default';
        }
    }

};
