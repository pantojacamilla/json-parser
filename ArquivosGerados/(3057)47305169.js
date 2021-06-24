    import { BrowserModule } from '@angular/platform-browser';&#xD;&#xA;    import { NgModule } from '@angular/core';&#xD;&#xA;    import { AppComponent } from './app.component';&#xD;&#xA;    // Routing&#xD;&#xA;    import { AppRouting } from './routing/app-routing';&#xD;&#xA;    // Modules&#xD;&#xA;    import { ProjectsModule } from './projects/projects.module';&#xD;&#xA;    import { UserModule } from './user/user.module';&#xD;&#xA;    import { LoadingOverlayModule } from './loading-overlay/loading-overlay.module';&#xD;&#xA;    // Services / Providers&#xD;&#xA;    import { AuthService } from './user/auth.service'&#xD;&#xA;    @NgModule({&#xD;&#xA;      declarations: [&#xD;&#xA;        AppComponent,&#xD;&#xA;      ],&#xD;&#xA;      imports: [&#xD;&#xA;        BrowserModule,&#xD;&#xA;        AppRouting,&#xD;&#xA;        LoadingOverlayModule  &#xD;&#xA;      ],&#xD;&#xA;      providers: [&#xD;&#xA;        AuthService,&#xD;&#xA;      ],&#xD;&#xA;      bootstrap: [AppComponent]&#xD;&#xA;    })&#xD;&#xA;    export class AppModule { }