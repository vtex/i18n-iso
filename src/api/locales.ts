import { Locale } from "./types";

/**
 * Locales list organized according to the 23rd edition of
 * the top languages by population list available on Wikipedia
 *
 * For more information, see links below:
 * https://en.wikipedia.org/wiki/List_of_languages_by_total_number_of_speakers
 *
 * https://en.wikipedia.org/wiki/Language_localisation
 *
 * https://en.wikipedia.org/wiki/Member_states_of_the_Arab_League
 */
export const locales: Locale[] = [
  {
    officialLanguage: "English",
    region: "United States",
    nativeOfficialLanguage: "English",
    nativeRegion: "United States",
    ISO6391: "en",
    ISO6392: "eng",
    ISO31661Alpha2: "US",
    ISO31661Alpha3: "USA",
    IETFLanguageTag: "en-US",
  },
  {
    officialLanguage: "English",
    region: "United Kingdom",
    nativeOfficialLanguage: "English",
    nativeRegion: "United Kingdom",
    ISO6391: "en",
    ISO6392: "eng",
    ISO31661Alpha2: "GB",
    ISO31661Alpha3: "GBR",
    IETFLanguageTag: "en-GB",
  },
  {
    officialLanguage: "Chinese",
    region: "China",
    nativeOfficialLanguage: "中文",
    nativeRegion: "中华人民共和国",
    ISO6391: "zh",
    ISO6392: "zho",
    ISO31661Alpha2: "CN",
    ISO31661Alpha3: "CHN",
    IETFLanguageTag: "zh-CN",
  },
  {
    officialLanguage: "Hindi",
    region: "India",
    nativeOfficialLanguage: "हिन्दी",
    nativeRegion: "भारत गणराज्य",
    ISO6391: "hi",
    ISO6392: "hin",
    ISO31661Alpha2: "IN",
    ISO31661Alpha3: "IND",
    IETFLanguageTag: "hi-IN",
  },
  {
    officialLanguage: "Assamese",
    region: "India",
    nativeOfficialLanguage: "অসমীয়া",
    nativeRegion: "India",
    ISO6391: "as",
    ISO6392: "asm",
    ISO31661Alpha2: "IN",
    ISO31661Alpha3: "IND",
    IETFLanguageTag: "as-IN",
  },
  {
    officialLanguage: "Spanish",
    region: "Mexico",
    nativeOfficialLanguage: "Español",
    nativeRegion: "México",
    ISO6391: "es",
    ISO6392: "spa",
    ISO31661Alpha2: "MX",
    ISO31661Alpha3: "MEX",
    IETFLanguageTag: "es-MX",
  },
  {
    officialLanguage: "Spanish",
    region: "Colombia",
    nativeOfficialLanguage: "Español",
    nativeRegion: "Colombia",
    ISO6391: "es",
    ISO6392: "spa",
    ISO31661Alpha2: "CO",
    ISO31661Alpha3: "COL",
    IETFLanguageTag: "es-CO",
  },
  {
    officialLanguage: "Spanish",
    region: "Spain",
    nativeOfficialLanguage: "Español",
    nativeRegion: "España",
    ISO6391: "es",
    ISO6392: "spa",
    ISO31661Alpha2: "ES",
    ISO31661Alpha3: "ESP",
    IETFLanguageTag: "es-ES",
  },
  {
    officialLanguage: "Spanish",
    region: "Argentina",
    nativeOfficialLanguage: "Español",
    nativeRegion: "Argentina",
    ISO6391: "es",
    ISO6392: "spa",
    ISO31661Alpha2: "AR",
    ISO31661Alpha3: "ARG",
    IETFLanguageTag: "es-AR",
  },
  {
    officialLanguage: "French",
    region: "France",
    nativeOfficialLanguage: "Français",
    nativeRegion: "France",
    ISO6391: "fr",
    ISO6392: "fra",
    ISO31661Alpha2: "FR",
    ISO31661Alpha3: "FRA",
    IETFLanguageTag: "fr-FR",
  },
  {
    officialLanguage: "Egyptian Arabic",
    region: "Egypt",
    nativeOfficialLanguage: "اللهجه المصريه",
    nativeRegion: "جمهورية مصر العربية",
    ISO6391: "ar",
    ISO6392: "arb",
    ISO31661Alpha2: "EG",
    ISO31661Alpha3: "EGY",
    IETFLanguageTag: "ar-EG",
  },
  {
    officialLanguage: "Standard Arabic",
    region: "Arabic League",
    nativeOfficialLanguage: "عربي فصيح",
    nativeRegion: "جامعة الدول العربية",
    ISO6391: "ar",
    ISO6392: "arb",
    ISO31661Alpha2: "AE",
    ISO31661Alpha3: "ARE",
    IETFLanguageTag: "ar",
  },
  {
    officialLanguage: "Arabic",
    region: "United Arab Emirates (the)",
    nativeOfficialLanguage: "العَرَبِيَّة",
    nativeRegion: "الإمارات العربية المتحدة",
    ISO6391: "ar",
    ISO6392: "ara",
    ISO31661Alpha2: "AE",
    ISO31661Alpha3: "ARE",
    IETFLanguageTag: "ar-AE",
  },
  {
    officialLanguage: "Bengali",
    region: "Bangladesh",
    nativeOfficialLanguage: "বাংলা",
    nativeRegion: "اগণপ্রজাতন্ত্রী বাংলাদেশ",
    ISO6391: "bn",
    ISO6392: "ben",
    ISO31661Alpha2: "BD",
    ISO31661Alpha3: "BGD",
    IETFLanguageTag: "bn-BD",
  },
  {
    officialLanguage: "Russian",
    region: "Russia",
    nativeOfficialLanguage: "русский язык",
    nativeRegion: "Российская Федерация",
    ISO6391: "ru",
    ISO6392: "rus",
    ISO31661Alpha2: "RU",
    ISO31661Alpha3: "RUS",
    IETFLanguageTag: "ru-RU",
  },
  {
    officialLanguage: "Portuguese",
    region: "Brazil",
    nativeOfficialLanguage: "Português",
    nativeRegion: "Brasil",
    ISO6391: "pt",
    ISO6392: "por",
    ISO31661Alpha2: "BR",
    ISO31661Alpha3: "BRA",
    IETFLanguageTag: "pt-BR",
  },
  {
    officialLanguage: "Portuguese",
    region: "Portugal",
    nativeOfficialLanguage: "Português",
    nativeRegion: "Portugal",
    ISO6391: "pt",
    ISO6392: "por",
    ISO31661Alpha2: "PT",
    ISO31661Alpha3: "PRT",
    IETFLanguageTag: "pt-PT",
  },
  {
    officialLanguage: "Indonesian",
    region: "Indonesia",
    nativeOfficialLanguage: "Bahasa Indonesia",
    nativeRegion: "Indonesia",
    ISO6391: "id",
    ISO6392: "ind",
    ISO31661Alpha2: "ID",
    ISO31661Alpha3: "IDN",
    IETFLanguageTag: "id-ID",
  },
  {
    officialLanguage: "Urdu",
    region: "Pakistan",
    nativeOfficialLanguage: "اُردُو",
    nativeRegion: "اِسلامی جمہوریہ پاكِستان",
    ISO6391: "ur",
    ISO6392: "urd",
    ISO31661Alpha2: "PK",
    ISO31661Alpha3: "PAK",
    IETFLanguageTag: "ur-PK",
  },
  {
    officialLanguage: "German",
    region: "Germany",
    nativeOfficialLanguage: "Deutsch",
    nativeRegion: "Deutschland",
    ISO6391: "de",
    ISO6392: "deu",
    ISO31661Alpha2: "DE",
    ISO31661Alpha3: "DEU",
    IETFLanguageTag: "de-DE",
  },
  {
    officialLanguage: "German",
    region: "Austria",
    nativeOfficialLanguage: "Deutsch",
    nativeRegion: "Österreich",
    ISO6391: "de",
    ISO6392: "deu",
    ISO31661Alpha2: "AT",
    ISO31661Alpha3: "AUT",
    IETFLanguageTag: "de-AT",
  },
  {
    officialLanguage: "Japanese",
    region: "Japan",
    nativeOfficialLanguage: "日本語",
    nativeRegion: "日本国",
    ISO6391: "ja",
    ISO6392: "jpn",
    ISO31661Alpha2: "JP",
    ISO31661Alpha3: "JPN",
    IETFLanguageTag: "ja-JP",
  },
  {
    officialLanguage: "Korean",
    region: "South Korea",
    nativeOfficialLanguage: "한국어/韓國語",
    nativeRegion: "대한민국/大韓民國",
    ISO6391: "ko",
    ISO6392: "kor",
    ISO31661Alpha2: "KR",
    ISO31661Alpha3: "KOR",
    IETFLanguageTag: "ko-KR",
  },
  {
    officialLanguage: "Italian",
    region: "Italy",
    nativeOfficialLanguage: "Italiano",
    nativeRegion: "Italia",
    ISO6391: "it",
    ISO6392: "ita",
    ISO31661Alpha2: "IT",
    ISO31661Alpha3: "ITA",
    IETFLanguageTag: "it-IT",
  },
  {
    officialLanguage: "Thai",
    region: "Thailand",
    nativeOfficialLanguage: "ภาษาไทย",
    nativeRegion: "ราชอาณาจักรไทย",
    ISO6391: "th",
    ISO6392: "tha",
    ISO31661Alpha2: "TH",
    ISO31661Alpha3: "THA",
    IETFLanguageTag: "th-TH",
  },
  {
    officialLanguage: "Dutch",
    region: "Netherlands",
    nativeOfficialLanguage: "Nederlands",
    nativeRegion: "Nederland",
    ISO6391: "nl",
    ISO6392: "nld",
    ISO31661Alpha2: "NL",
    ISO31661Alpha3: "NLD",
    IETFLanguageTag: "nl-NL",
  },
  {
    officialLanguage: "Dutch",
    region: "Belgium",
    nativeOfficialLanguage: "Nederlands",
    nativeRegion: "België",
    ISO6391: "nl",
    ISO6392: "nld",
    ISO31661Alpha2: "BE",
    ISO31661Alpha3: "BEL",
    IETFLanguageTag: "nl-BE",
  },
  {
    officialLanguage: "Romanian",
    region: "Romania",
    nativeOfficialLanguage: "limba română",
    nativeRegion: "România",
    ISO6391: "ro",
    ISO6392: "ron",
    ISO31661Alpha2: "RO",
    ISO31661Alpha3: "ROU",
    IETFLanguageTag: "ro-RO",
  },
  {
    officialLanguage: "Swedish",
    region: "Sweden",
    nativeOfficialLanguage: "Svenska",
    nativeRegion: "Sverige",
    ISO6391: "sv",
    ISO6392: "swe",
    ISO31661Alpha2: "SE",
    ISO31661Alpha3: "SWE",
    IETFLanguageTag: "sv-SE",
  },
  {
    officialLanguage: "Czech",
    region: "Czech Republic",
    nativeOfficialLanguage: "Čeština",
    nativeRegion: "Česká republika",
    ISO6391: "cs",
    ISO6392: "cze",
    ISO31661Alpha2: "CZ",
    ISO31661Alpha3: "CZE",
    IETFLanguageTag: "cs-CZ",
  },
  {
    officialLanguage: "Finnish",
    region: "Finland",
    nativeOfficialLanguage: "Suomen kieli",
    nativeRegion: "Suomi",
    ISO6391: "fi",
    ISO6392: "fin",
    ISO31661Alpha2: "FI",
    ISO31661Alpha3: "FIN",
    IETFLanguageTag: "fi-FI",
  },
  {
    officialLanguage: "Norwegian",
    region: "Norway",
    nativeOfficialLanguage: "Norsk",
    nativeRegion: "Norge",
    ISO6391: "no",
    ISO6392: "nor",
    ISO31661Alpha2: "NO",
    ISO31661Alpha3: "NOR",
    IETFLanguageTag: "no-NO",
  },
  {
    officialLanguage: "Afar",
    region: "Djibouti",
    nativeOfficialLanguage: "Norsk",
    nativeRegion: "Ummuuno",
    ISO6391: "no",
    ISO6392: "nor",
    ISO31661Alpha2: "AA",
    ISO31661Alpha3: "AAR",
    IETFLanguageTag: "no-NO",
  },
  {
    officialLanguage: "Zulu",
    region: "South Africa",
    nativeOfficialLanguage: "isiZulu",
    nativeRegion: "yaseNingizimu Afrika",
    ISO6391: "zu",
    ISO6392: "zul",
    ISO31661Alpha2: "ZA",
    ISO31661Alpha3: "ZAF",
    IETFLanguageTag: "zu-ZA",
  },
  {
    officialLanguage: "Xhosa",
    region: "South Africa",
    nativeOfficialLanguage: "isiXhosa",
    nativeRegion: "yoMzantsi-Afrika",
    ISO6391: "xh",
    ISO6392: "xho",
    ISO31661Alpha2: "ZA",
    ISO31661Alpha3: "ZAF",
    IETFLanguageTag: "xh-ZA",
  },
  {
    officialLanguage: "Afrikaans",
    region: "South Africa",
    nativeOfficialLanguage: "Afrikaans",
    nativeRegion: "Suid-Afrika",
    ISO6391: "af",
    ISO6392: "afr",
    ISO31661Alpha2: "ZA",
    ISO31661Alpha3: "ZAF",
    IETFLanguageTag: "af-ZA",
  },
  {
    officialLanguage: "Pedi",
    region: "South Africa",
    nativeOfficialLanguage: "Sepedi",
    nativeRegion: "Afrika-Borwa",
    ISO6391: "ns",
    ISO6392: "nso",
    ISO31661Alpha2: "ZA",
    ISO31661Alpha3: "ZAF",
    IETFLanguageTag: "ns-ZA",
  },
  {
    officialLanguage: "Tswana",
    region: "South Africa",
    nativeOfficialLanguage: "Setswana",
    nativeRegion: "Aforika Borwa",
    ISO6391: "tn",
    ISO6392: "tsn",
    ISO31661Alpha2: "ZA",
    ISO31661Alpha3: "ZAF",
    IETFLanguageTag: "tn-ZA",
  },
  {
    officialLanguage: "Southern Sotho",
    region: "South Africa",
    nativeOfficialLanguage: "Sesotho",
    nativeRegion: "Afrika Borwa",
    ISO6391: "st",
    ISO6392: "sot",
    ISO31661Alpha2: "ZA",
    ISO31661Alpha3: "ZAF",
    IETFLanguageTag: "st-ZA",
  },
  {
    officialLanguage: "Tsonga",
    region: "South Africa",
    nativeOfficialLanguage: "Xitsonga",
    nativeRegion: "Afrika Dzonga",
    ISO6391: "ts",
    ISO6392: "tso",
    ISO31661Alpha2: "ZA",
    ISO31661Alpha3: "ZAF",
    IETFLanguageTag: "ts-ZA",
  },
  {
    officialLanguage: "Swazi",
    region: "South Africa",
    nativeOfficialLanguage: "siSwati",
    nativeRegion: "yeNingizimu Afrika",
    ISO6391: "ss",
    ISO6392: "ssw",
    ISO31661Alpha2: "ZA",
    ISO31661Alpha3: "ZAF",
    IETFLanguageTag: "ss-ZA",
  },
  {
    officialLanguage: "Venda",
    region: "South Africa",
    nativeOfficialLanguage: "Tshivenḓa",
    nativeRegion: "Afurika Tshipembe",
    ISO6391: "ve",
    ISO6392: "ven",
    ISO31661Alpha2: "ZA",
    ISO31661Alpha3: "ZAF",
    IETFLanguageTag: "ve-ZA",
  },
  {
    officialLanguage: "Southern Ndebele",
    region: "South Africa",
    nativeOfficialLanguage: "isiNdebele seSewula",
    nativeRegion: "yeSewula Afrika",
    ISO6391: "nr",
    ISO6392: "nbl",
    ISO31661Alpha2: "ZA",
    ISO31661Alpha3: "ZAF",
    IETFLanguageTag: "nr-ZA",
  },
  {
    officialLanguage: "Albanian",
    region: "Albania",
    nativeOfficialLanguage: "shqip",
    nativeRegion: "Shqipërisë",
    ISO6391: "sq",
    ISO6392: "alb",
    ISO31661Alpha2: "AL",
    ISO31661Alpha3: "ALB",
    IETFLanguageTag: "sq-AL",
  },
  {
    officialLanguage: "Aragonese",
    region: "Spain",
    nativeOfficialLanguage: "aragonés",
    nativeRegion: "Español",
    ISO6391: "an",
    ISO6392: "arg",
    ISO31661Alpha2: "ES",
    ISO31661Alpha3: "ESP",
    IETFLanguageTag: "an-ES",
  },
  {
    officialLanguage: "Armenian",
    region: "Armenia",
    nativeOfficialLanguage: "հայերէն",
    nativeRegion: "Հայաստան",
    ISO6391: "hy",
    ISO6392: "arm",
    ISO31661Alpha2: "AM",
    ISO31661Alpha3: "ARM",
    IETFLanguageTag: "hy-AM",
  },
  {
    officialLanguage: "Azerbaijani",
    region: "Azerbaijan",
    nativeOfficialLanguage: "Azərbaycan",
    nativeRegion: "Azərbaycan",
    ISO6391: "az",
    ISO6392: "aze",
    ISO31661Alpha2: "AZ",
    ISO31661Alpha3: "AZE",
    IETFLanguageTag: "az-AZ",
  },
  {
    officialLanguage: "Basque",
    region: "Spain",
    nativeOfficialLanguage: "Euskara",
    nativeRegion: "Espainia",
    ISO6391: "eu",
    ISO6392: "baq",
    ISO31661Alpha2: "ES",
    ISO31661Alpha3: "ESP",
    IETFLanguageTag: "eu-ES",
  },
  {
    officialLanguage: "Belarusian",
    region: "Belarus",
    nativeOfficialLanguage: "беларуская",
    nativeRegion: "Беларусь",
    ISO6391: "be",
    ISO6392: "bel",
    ISO31661Alpha2: "BY",
    ISO31661Alpha3: "BLR",
    IETFLanguageTag: "be-BY",
  },
  {
    officialLanguage: "Bislama",
    region: "Vanuatu",
    nativeOfficialLanguage: "Bislama",
    nativeRegion: "Vanuatu",
    ISO6391: "bi",
    ISO6392: "bis",
    ISO31661Alpha2: "VU",
    ISO31661Alpha3: "BIS",
    IETFLanguageTag: "bi-VU",
  },
  {
    officialLanguage: "Bosnian",
    region: "Bosnia and Herzegovina",
    nativeOfficialLanguage: "босански",
    nativeRegion: "Bosna i Hercegovina",
    ISO6391: "bs",
    ISO6392: "bos",
    ISO31661Alpha2: "BA",
    ISO31661Alpha3: "BIH",
    IETFLanguageTag: "bs-BA",
  },
  {
    officialLanguage: "Breton",
    region: "France",
    nativeOfficialLanguage: "Brezhoneg",
    nativeRegion: "Bro-C'hall",
    ISO6391: "br",
    ISO6392: "bre",
    ISO31661Alpha2: "FR",
    ISO31661Alpha3: "FRA",
    IETFLanguageTag: "br-FR",
  },
  {
    officialLanguage: "Bulgarian",
    region: "Bulgaria",
    nativeOfficialLanguage: "български",
    nativeRegion: "Norge",
    ISO6391: "bg",
    ISO6392: "bul",
    ISO31661Alpha2: "BG",
    ISO31661Alpha3: "BGR",
    IETFLanguageTag: "bg-BG",
  },
  {
    officialLanguage: "Burmese",
    region: "Myanmar",
    nativeOfficialLanguage: "မြန်မာဘာသာ",
    nativeRegion: "မြန်မာနိုင်ငံတော်‌",
    ISO6391: "my",
    ISO6392: "bur",
    ISO31661Alpha2: "MM",
    ISO31661Alpha3: "MMR",
    IETFLanguageTag: "my-MM",
  },
  {
    officialLanguage: "Catalan",
    region: "Andorra",
    nativeOfficialLanguage: "Català",
    nativeRegion: "Andorra",
    ISO6391: "ca",
    ISO6392: "cat",
    ISO31661Alpha2: "AD",
    ISO31661Alpha3: "AND",
    IETFLanguageTag: "ca-AD",
  },

  {
    officialLanguage: "Abkhaz",
    region: "Abkhazia",
    nativeOfficialLanguage: "Norsk",
    nativeRegion: "Apsny Ahwyntkarra",
    ISO6391: "ab",
    ISO6392: "abk",
    ISO31661Alpha2: "AB",
    ISO31661Alpha3: "ABK",
    IETFLanguageTag: "ab-AB",
  },
];
