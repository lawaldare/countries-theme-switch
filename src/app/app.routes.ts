import { Route } from "@angular/router";
import { CountryDetailsComponent } from "./components/country-details/country-details.component";
import { CountryListComponent } from "./components/country-list/country-list.component";

export const appRoutes: Route[] = [
  { path: "countries", component: CountryListComponent },
  { path: "country/:name", component: CountryDetailsComponent },
  { path: "", pathMatch: "full", redirectTo: "countries" },
];
