export interface Country {
  names: Names;
  codes: Codes;
  capitals: Capital[];
  flag: Flag;
  region: string;
  subregion: string;
  area: Area;
  assets: any[];
  borders: string[];
  calling_codes: string[];
  cars: Cars;
  classification: Classification;
  continents: string[];
  coordinates: Coordinates;
  currencies: Currency[];
  date: DateInfo;
  demonyms: Demonyms;
  economy: Economy;
  government_type: string;
  landlocked: boolean;
  languages: Language[];
  leaders: Leader[];
  links: Links;
  memberships: Memberships;
  number_format: NumberFormat;
  parent: Parent;
  population: number;
  postal_code: PostalCode;
  timezones: string[];
  tlds: string[];
  units: Units;
  uuid: string;
  _meta: Meta;
}

export interface Names {
  alternates: string[];
  common: string;
  native: Record<string, NativeName>;
  official: string;
  translations: Record<string, NativeName>;
}

export interface NativeName {
  common: string;
  official: string;
}

export interface Codes {
  alpha_2: string;
  alpha_3: string;
  ccn3: string;
  cioc: string;
  fifa: string;
  fips: string;
  gec: string;
}

export interface Capital {
  attributes: CapitalAttributes;
  coordinates: Coordinates;
  name: string;
}

export interface CapitalAttributes {
  administrative: boolean;
  constitutional: boolean;
  executive: boolean;
  judicial: boolean;
  legislative: boolean;
  primary: boolean;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Flag {
  colors: FlagColors;
  description: string;
  emoji: string;
  html_entity: string;
  unicode: string;
  url_png: string;
  url_svg: string;
}

export interface FlagColors {
  dominant: string;
  palette: string[];
  prominent: string;
  swatches: {
    dark_muted: string | null;
    dark_vibrant: string | null;
    light_muted: string | null;
    light_vibrant: string | null;
    muted: string | null;
    vibrant: string | null;
  };
}

export interface Area {
  kilometers: number;
  miles: number;
}

export interface Cars {
  driving_side: "left" | "right";
  signs: string[];
}

export interface Classification {
  dependency: boolean;
  dependency_type: string;
  disputed: boolean;
  iso_status: string;
  sovereign: boolean;
  un_member: boolean;
  un_observer: boolean;
}

export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface DateInfo {
  academic_year_start: MonthDay;
  fiscal_year_start: {
    corporate: CorporateFiscal;
    government: MonthDay;
    personal: MonthDay;
  };
  start_of_week: string;
}

export interface MonthDay {
  day: number;
  month: number;
}

export interface CorporateFiscal extends MonthDay {
  basis: string;
}

export interface Demonyms {
  eng: Demonym;
  fra: Demonym;
}

export interface Demonym {
  f: string;
  m: string;
}

export interface Economy {
  gini_coefficient: Record<string, number>;
}

export interface Language {
  bcp47: string;
  iso639_1: string;
  iso639_2b: string;
  iso639_2t: string;
  iso639_3: string;
  name: string;
  native_name: string;
}

export interface Leader {
  message: string;
  sample: string;
}

export interface Links {
  google_maps: string;
  official: string;
  open_street_maps: string;
  wikipedia: string;
}

export interface Memberships {
  african_union: boolean;
  arab_league: boolean;
  asean: boolean;
  brics: boolean;
  commonwealth: boolean;
  eu: boolean;
  eurozone: boolean;
  g20: boolean;
  g7: boolean;
  nato: boolean;
  oecd: boolean;
  opec: boolean;
  schengen: boolean;
  un: boolean;
}

export interface NumberFormat {
  decimal_separator: string;
  thousands_separator: string;
}

export interface Parent {
  alpha_2: string;
  alpha_3: string;
}

export interface PostalCode {
  format: string;
  regex: string;
}

export interface Units {
  measurement_system: string;
  temperature_scale: string;
}

export interface Meta {
  lastUpdatedTimestamp: number;
}
