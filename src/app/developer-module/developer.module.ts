import { NgModule } from "@angular/core";
import { DeveloperListComponent } from "../developer-list/developer-list.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    DeveloperListComponent,
  ],
  imports: [
    RouterModule.forChild([
      {path: 'developers', component: DeveloperListComponent},
    ]),
    CommonModule
  ]
})
export class DeveloperModule {}