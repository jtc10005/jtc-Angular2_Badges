import { Component, Input, OnInit} from '@angular/core';


@Component({
    selector: 'jtc-Badge',
    template:`<span [class]="jtcClass">{{text}}</span>
<style>
    .jtc-badge-primary {
        background-color: #337ab7 !important;
    }

    .jtc-badge-error {
        background-color: #d9534f !important;
    }

    .jtc-badge-default {
        background-color: #777 !important;
    }

    .jtc-badge-info {
        background-color: #5bc0de !important;
    }

    .jtc-badge-warning {
        background-color: #f0ad4e !important;
    }

    .jtc-badge-success {
        background-color: #5cb85c !important;
    }

    .jtc-badge {
/*bookstrap formatting*/
        display: inline;
        padding: .2em .6em .3em;
        font-size: 75%;
        font-weight: 700;
        line-height: 1;
        color: #fff;
        text-align: center;
        white-space: nowrap;
        vertical-align: baseline;
        border-radius: .25em;
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;


    }
</style>`,
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
