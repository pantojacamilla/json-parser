    import { Component } from '@angular/core';&#xD;&#xA;    import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';&#xD;&#xA;    @IonicPage()&#xD;&#xA;    @Component({&#xD;&#xA;      selector: 'page-modal',&#xD;&#xA;      templateUrl: 'modal.html',&#xD;&#xA;    })&#xD;&#xA;    export class Modal {&#xD;&#xA;      constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {&#xD;&#xA;      }&#xD;&#xA;      closeModal(): void {&#xD;&#xA;        this.viewCtrl.dismiss();&#xD;&#xA;      }&#xD;&#xA;    }