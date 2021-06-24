<!-- -->&#xD;&#xA;    // parent component&#xD;&#xA;    import { Component, OnInit } from '@angular/core';&#xD;&#xA;    import { Router } from '@angular/router';&#xD;&#xA;    import { LoginService } from '../login.service';&#xD;&#xA;    import { ChildComponent } from '../child/child.component';&#xD;&#xA;    @Component({&#xD;&#xA;      selector: 'app-login',&#xD;&#xA;      templateUrl: './login.component.html',&#xD;&#xA;      styleUrls: ['./login.component.css'],&#xD;&#xA;      providers: [LoginService]&#xD;&#xA;    })&#xD;&#xA;    export class LoginComponent implements OnInit {&#xD;&#xA;    usernameModel: string;&#xD;&#xA;    passwordModel: string;&#xD;&#xA;    validLogin: Boolean;&#xD;&#xA;    loginData: any;&#xD;&#xA;    loginDataLength: number;&#xD;&#xA;    msg: string;&#xD;&#xA;      constructor(private router: Router, private loginService: LoginService) { &#xD;&#xA;        console.log('constructor');&#xD;&#xA;      }&#xD;&#xA;      ngOnInit(){&#xD;&#xA;        console.log('on init');&#xD;&#xA;        this.loginService.getLoginData()&#xD;&#xA;          .subscribe(data => {&#xD;&#xA;            this.loginData = data;&#xD;&#xA;            this.loginDataLength = data.length;&#xD;&#xA;          });&#xD;&#xA;          &#xD;&#xA;      }&#xD;&#xA;      callChild(event){&#xD;&#xA;        this.msg = event;&#xD;&#xA;      }&#xD;&#xA;      homeNav(){   &#xD;&#xA;      &#xD;&#xA;        if(this.usernameModel === 'jay' && this.passwordModel === 'Jay'){&#xD;&#xA;          this.validLogin = true;&#xD;&#xA;          this.router.navigate(['/home']);&#xD;&#xA;        }&#xD;&#xA;        else{&#xD;&#xA;          this.validLogin = false;&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;    }