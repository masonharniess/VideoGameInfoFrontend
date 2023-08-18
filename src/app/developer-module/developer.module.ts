import { NgModule } from "@angular/core";
import { DeveloperListComponent } from "../developer-list/developer-list.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    DeveloperListComponent,
  ],
  imports: [
    RouterModule.forChild([
      {path: 'developers', component: DeveloperListComponent},
    ])
  ]
})
export class DeveloperModule {}