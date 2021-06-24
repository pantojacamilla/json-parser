    import { NgModule } from '@angular/core';&#xD;&#xA;    import { RouterModule, Routes } from '@angular/router';&#xD;&#xA;    import { HomeComponent } from './components/home/home.component';&#xD;&#xA;    const coreRoutes: Routes = [&#xD;&#xA;      {&#xD;&#xA;        path: '',&#xD;&#xA;        component: HomeComponent,&#xD;&#xA;        children: [&#xD;&#xA;          {&#xD;&#xA;            path: 'home/dashboard',&#xD;&#xA;            loadChildren: '../dashboard/dashboard.module#DashboardModule'&#xD;&#xA;          }&#xD;&#xA;        ]&#xD;&#xA;      }&#xD;&#xA;    ];&#xD;&#xA;    @NgModule({&#xD;&#xA;      imports: [&#xD;&#xA;        RouterModule.forChild(coreRoutes)&#xD;&#xA;      ],&#xD;&#xA;      exports: [&#xD;&#xA;        RouterModule&#xD;&#xA;      ]&#xD;&#xA;    })&#xD;&#xA;    export class CoreRoutingModule { }