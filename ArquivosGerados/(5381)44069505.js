    import { Component, OnInit, AfterViewChecked } from '@angular/core';&#xD;&#xA;    import { Router } from '@angular/router';&#xD;&#xA;    import { TranslateService } from 'ng2-translate/ng2-translate';&#xD;&#xA;    import { DialogHelper } from '../fwk/dialog.helper';&#xD;&#xA;    import { CacheHelper } from '../fwk/cache.helper';&#xD;&#xA;    import { LOG } from '../fwk/logger';&#xD;&#xA;    import { authenticationServiceProvider } from './service/authentication.service.provider';&#xD;&#xA;    import { AuthenticationService, ILoginAjaxResponse } from './service/authentication.service';&#xD;&#xA;    export class Credentials {&#xD;&#xA;        email: string;&#xD;&#xA;        password: string;&#xD;&#xA;    }&#xD;&#xA;    @Component({&#xD;&#xA;        selector: 'as-login',&#xD;&#xA;        templateUrl: 'app/login/login.component.html',&#xD;&#xA;    })&#xD;&#xA;    export class LoginComponent implements OnInit, AfterViewChecked {&#xD;&#xA;        credentials = new Credentials();&#xD;&#xA;        constructor(private translateService: TranslateService,&#xD;&#xA;            private authenticationService: AuthenticationService,&#xD;&#xA;            private router: Router) {&#xD;&#xA;        }&#xD;&#xA;        public ngOnInit() {&#xD;&#xA;            this.credentials.email = CacheHelper.getItem('email');&#xD;&#xA;        }&#xD;&#xA;        ngAfterViewChecked() {&#xD;&#xA;            document.getElementById('password').focus();&#xD;&#xA;        }&#xD;&#xA;        public onSubmit() {&#xD;&#xA;            LOG.debug(JSON.stringify(this.credentials));&#xD;&#xA;            this.authenticationService.login(this.credentials)&#xD;&#xA;                .subscribe((response) => this.handleResponse(response));&#xD;&#xA;        }&#xD;&#xA;        private handleResponse(response: ILoginAjaxResponse) {&#xD;&#xA;            CacheHelper.setItem('email', this.credentials.email);&#xD;&#xA;            this.router.navigateByUrl('spa/sync')&#xD;&#xA;                .catch((reason) => { LOG.error(reason); });&#xD;&#xA;        }&#xD;&#xA;    }