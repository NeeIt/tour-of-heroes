import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserModule } from "./users/users.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { UserDetailsComponent } from "./user-details/user-details.component";

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent },
  { path: "details/:id", component: UserDetailsComponent },
  { path: "users", component: UserModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
