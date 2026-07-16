import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {
  provideHttpClient,
  withInterceptorsFromDi,
  withXhr
} from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CountryListComponent } from "./components/country-list/country-list.component";
import { CountryDetailsComponent } from "./components/country-details/country-details.component";
import { CountryComponent } from "./components/country/country.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { LangPipe } from "./lang.pipe";
import { CurrPipe } from "./curr.pipe";

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
    }),
    CountryListComponent,
    CountryDetailsComponent,
    CountryComponent,
    NavbarComponent,
    LangPipe,
    CurrPipe,
  ],
  providers: [provideHttpClient(withXhr(), withInterceptorsFromDi())],
})
export class AppModule {}
