    export class AppComponent implements OnInit {&#xD;&#xA;    &#xD;&#xA;      constructor(&#xD;&#xA;        public loggedInService: LoggedinService,&#xD;&#xA;        public router: Router&#xD;&#xA;      ) {}&#xD;&#xA;    &#xD;&#xA;      ngOnInit() {}&#xD;&#xA;    &#xD;&#xA;      logIn(): void {&#xD;&#xA;        this.loggedInService.login().subscribe(() => {&#xD;&#xA;          if (this.loggedInService.isLoggedIn) {&#xD;&#xA;            let redirect = this.loggedInService.redirectUrl ? this.loggedInService.redirectUrl :&#xD;&#xA;              '/gallery';&#xD;&#xA;            this.router.navigate([redirect]);&#xD;&#xA;          }&#xD;&#xA;        });&#xD;&#xA;      }&#xD;&#xA;    &#xD;&#xA;      logout(): void {&#xD;&#xA;        this.loggedInService.logout();&#xD;&#xA;      }&#xD;&#xA;    }