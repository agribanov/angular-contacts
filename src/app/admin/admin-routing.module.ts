import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { StatusComponent } from './status/status.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    {
      path: 'admin', component: AdminComponent, children: [
        { path: 'status', component: StatusComponent },
        { path: 'dashboard', component: DashboardComponent },
      ]
    }
  ];

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ]
  })
  export class AdminRoutingModule { }