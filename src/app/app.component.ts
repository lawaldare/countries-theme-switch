import { CountryService } from "./services/country.service";
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  inject,
} from "@angular/core";
import * as AOS from "aos";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { Router, RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  imports: [NavbarComponent, RouterOutlet, CommonModule],
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class AppComponent implements OnInit {
  protected readonly router = inject(Router);
  protected readonly countryService = inject(CountryService);

  ngOnInit() {
    AOS.init();
  }
}
