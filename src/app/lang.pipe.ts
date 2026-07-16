import { Pipe, PipeTransform } from "@angular/core";
import { Language } from "./model/country.model";

@Pipe({
  name: "lang",
})
export class LangPipe implements PipeTransform {
  transform(languages: Language[]): any {
    return languages.map((lang) => lang.name);
  }
}
