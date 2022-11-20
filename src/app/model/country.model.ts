export interface Country {
  name: {
    common:string;
    official:string;
  };
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  currencies: any[];
  languages: any[];
  flags: {
    svg: string;
    png: string;
  };
  borders: string[];
  topLevelDomain: string[];
  alpha3Code: string;

}
