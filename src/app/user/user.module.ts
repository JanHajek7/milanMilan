import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserComponent } from "./containers/user/user.component";
import { UserOverviewComponent } from "./components/user-overview/user-overview.component";

import { RouterModule } from "@angular/router";
import { UserFormComponent } from "./components/user-form/user-form.component";

import { MatCardModule } from "@angular/material/card";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatTabsModule } from "@angular/material/tabs";

@NgModule({
  declarations: [UserOverviewComponent, UserComponent, UserFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: "", component: UserOverviewComponent }]),
    MatCardModule,
    DragDropModule,
    MatTabsModule
  ]
})
export class UserModule {}
