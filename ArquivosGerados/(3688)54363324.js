    <div id="login_section" class="d-flex justify-content-center align-items-center">&#xD;&#xA;        <div class="login_cnt col-8 row">&#xD;&#xA;            <div class="col-6 d-flex justify-content-center py-4">&#xD;&#xA;                &#xD;&#xA;                <form class="col-8" [formGroup]="service.loginform">&#xD;&#xA;                    <h2 class="text-center">User Login</h2>&#xD;&#xA;                    <mat-form-field class="col-12">&#xD;&#xA;                      <input matInput type="text" placeholder="Username" formControlName="username" >&#xD;&#xA;                      <mat-error>Username is Required</mat-error>&#xD;&#xA;                    </mat-form-field>&#xD;&#xA;                  &#xD;&#xA;                    <mat-form-field class="col-12">&#xD;&#xA;                      <input matInput [type]="hide ? 'password' : 'text'" formControlName="password" placeholder="Password">&#xD;&#xA;                      <mat-icon matSuffix (click)="hide = !hide">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>&#xD;&#xA;                      <mat-error>Password is Required</mat-error>&#xD;&#xA;                    </mat-form-field>&#xD;&#xA;                    <a href="#" class="float-left lnk_forgot h7">Forgot Password</a>&#xD;&#xA;                    <button mat-raised-button color="primary" class="float-right" [routerLink]="['/home']" [disabled]="service.loginform.invalid">Login</button>&#xD;&#xA;                  </form>&#xD;&#xA;            </div>&#xD;&#xA;        </div>&#xD;&#xA;    </div>