    import { OnInit } from '@angular/core';&#xD;&#xA;    import { Component, ViewChild, ViewEncapsulation} from '@angular/core';&#xD;&#xA;    import {MatAccordion} from '@angular/material';&#xD;&#xA;    @Component({&#xD;&#xA;      selector: 'app-demo-accordion',&#xD;&#xA;      templateUrl: './demo-accordion.component.html',&#xD;&#xA;      styleUrls: ['./demo-accordion.component.css']&#xD;&#xA;    })&#xD;&#xA;    export class DemoAccordionComponent implements OnInit {&#xD;&#xA;      constructor() { }&#xD;&#xA;      ngOnInit() {&#xD;&#xA;      }&#xD;&#xA;      @ViewChild(MatAccordion) accordion: MatAccordion;&#xD;&#xA;      @ViewChild(MatAccordion) testing: MatAccordion;&#xD;&#xA;      displayMode: string = 'default';&#xD;&#xA;      displayMode1: string = 'default';&#xD;&#xA;      multi = true;&#xD;&#xA;      hideToggle = false;&#xD;&#xA;      hideToggle1 = false;&#xD;&#xA;      disabled = false;&#xD;&#xA;      showPanel3 = true;&#xD;&#xA;      panel11 = false;&#xD;&#xA;      expandedHeight: string;&#xD;&#xA;      collapsedHeight: string;&#xD;&#xA;    }