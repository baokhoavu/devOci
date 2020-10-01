import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// export class AppRoutingModule {}

import { Info } from "./info/info";
import { Login } from "./login/login";

const routes: Routes = [
  { path: "Login", component: Login },
  { path: "Info", component: Info },
  { path: "", redirectTo: "Login", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
