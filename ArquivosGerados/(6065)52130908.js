    import { Component } from '@angular/core';&#xD;&#xA;    import { FormControl , FormGroup , Validators } from "@angular/forms";&#xD;&#xA;    import { UserNameValiditors } from './UserNameValditors';&#xD;&#xA;    @Component({&#xD;&#xA;      selector: 'signup-form',&#xD;&#xA;      templateUrl: './signup-form.component.html',&#xD;&#xA;      styleUrls: ['./signup-form.component.css']&#xD;&#xA;    })&#xD;&#xA;    export class SignupFormComponent {&#xD;&#xA;      form= new FormGroup(&#xD;&#xA;        {&#xD;&#xA;           username  : new FormControl('',&#xD;&#xA;          [&#xD;&#xA;            Validators.required,&#xD;&#xA;            Validators.minLength(3) ,&#xD;&#xA;            UserNameValiditors.removeSpaceFromUserName&#xD;&#xA;          ]) ,&#xD;&#xA;           password  : new FormControl('',Validators.required)&#xD;&#xA;        });&#xD;&#xA;        get username()&#xD;&#xA;        {&#xD;&#xA;          return this.form.get('username');&#xD;&#xA;        }&#xD;&#xA;      &#xD;&#xA;    }