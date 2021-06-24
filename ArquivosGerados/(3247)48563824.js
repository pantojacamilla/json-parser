    import {Component, EventEmitter, Input, OnInit, ViewChild} from '@angular/core';&#xD;&#xA;    import { ActivatedRoute, ParamMap} from '@angular/router';&#xD;&#xA;    @Component({&#xD;&#xA;      selector: 'hook',&#xD;&#xA;      templateUrl: 'hook.component.html',&#xD;&#xA;      styleUrls: ['hook.component.scss']&#xD;&#xA;    })&#xD;&#xA;    export class HookComponent implements OnDestroy, OnInit {&#xD;&#xA;      constructor(private route: ActivatedRoute) {&#xD;&#xA;        &#xD;&#xA;      }&#xD;&#xA;      ngOnInit() {&#xD;&#xA;        this.sub = this.route.params.subscribe(params => {&#xD;&#xA;           console.log('params are', params); //null?&#xD;&#xA;        });&#xD;&#xA;      }&#xD;&#xA;    }