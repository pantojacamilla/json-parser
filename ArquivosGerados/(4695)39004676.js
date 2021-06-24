    import { NgModule }      from "@angular/core";&#xD;&#xA;    import { BrowserModule } from "@angular/platform-browser";&#xD;&#xA;    import { FormsModule } from "@angular/forms";&#xD;&#xA;    import { HttpModule } from "@angular/http";&#xD;&#xA;    import { MySharedModule } from "./shared/my-shared.module";&#xD;&#xA;    import { Some1Component } from "./folder/some1.component";&#xD;&#xA;    import { Some2Component } from "./folder/some2.component";&#xD;&#xA;    import { Some3Component } from "./folder/some3.component";&#xD;&#xA;    import { Some4Component } from "./folder/some4.component";&#xD;&#xA;    import { Some5Component } from "./folder/some5.component";&#xD;&#xA;    import "rxjs/add/operator/map";&#xD;&#xA;    import "rxjs/add/operator/toPromise";&#xD;&#xA;    @NgModule({&#xD;&#xA;      imports: [&#xD;&#xA;        BrowserModule,&#xD;&#xA;        FormsModule,&#xD;&#xA;        HttpModule,&#xD;&#xA;        MySharedModule&#xD;&#xA;      ],&#xD;&#xA;      declarations: [&#xD;&#xA;        AppComponent,&#xD;&#xA;         Some1Component,&#xD;&#xA;         Some2Component,&#xD;&#xA;         Some3Component,&#xD;&#xA;         Some4Component,&#xD;&#xA;         Some5Component,&#xD;&#xA;      ],&#xD;&#xA;      providers: [],&#xD;&#xA;      bootstrap: [AppComponent],&#xD;&#xA;      entryComponents: []&#xD;&#xA;    })&#xD;&#xA;    export class AppModule { }