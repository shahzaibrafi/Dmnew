import{t as H,k as P,l as F,u as x,a as K,r as v,bL as T,bH as L,_ as d,j as n,w as r,p as U,aU as E,ab as b,x as V}from"./main-677.js";import{u}from"./bf-743-127.js";import{F as C}from"./bf-336-157.js";import{C as N}from"./bf-102-76.js";import{S as l}from"./bf-377-331.js";import{a as Y}from"./bf-493-110.js";import{F as j,c as Z}from"./bf-290-93.js";import{a as M}from"./bf-526-189.js";import{S as W}from"./bf-485-83.js";import"./bf-99-111.js";import"./bf-610-73.js";import"./bf-149-112.js";import"./bf-311-113.js";/* empty css          */import"./bf-542-156.js";import"./bf-8-69.js";import"./bf-352-145.js";import"./bf-489-107.js";import"./bf-417-108.js";import"./bf-769-109.js";import"./bf-108-114.js";import"./bf-937-115.js";import"./bf-713-125.js";import"./bf-134-124.js";import"./bf-419-81.js";import"./bf-873-116.js";import"./bf-372-117.js";import"./bf-367-71.js";const J=[{label:"Credit or debit cards",value:"card"},{label:"PayPal Credit",value:"credit"},{label:"Bancontact",value:"bancontact"},{label:"BLIK",value:"blik"},{label:"eps",value:"eps"},{label:"giropay",value:"giropay"},{label:"iDEAL",value:"ideal"},{label:"Mercado Pago",value:"mercadopago"},{label:"MyBank",value:"mybank"},{label:"Przelewy24",value:"p24"},{label:"SEPA-Lastschrift",value:"sepa"},{label:"Sofort",value:"sofort"},{label:"Venmo",value:"venmo"}],$=[{currency:"Australian dollar",code:"AUD"},{currency:"Brazilian real",code:"BRL"},{currency:"Canadian dollar",code:"CAD"},{currency:"Chinese Renmenbi",code:"CNY"},{currency:"Czech koruna",code:"CZK"},{currency:"Danish krone",code:"DKK"},{currency:"Euro",code:"EUR"},{currency:"Hong Kong dollar",code:"HKD"},{currency:"Hungarian forint",code:"HUF"},{currency:"Indian rupee",code:"INR"},{currency:"Israeli new shekel",code:"ILS"},{currency:"Japanese yen",code:"JPY"},{currency:"Malaysian ringgit",code:"MYR"},{currency:"Mexican peso",code:"MXN"},{currency:"New Taiwan dollar",code:"TWD"},{currency:"New Zealand dollar",code:"NZD"},{currency:"Norwegian krone",code:"NOK"},{currency:"Philippine peso",code:"PHP"},{currency:"Polish złoty",code:"PLN"},{currency:"Pound sterling",code:"GBP"},{currency:"Russian ruble",code:"RUB"},{currency:"Singapore dollar",code:"SGD"},{currency:"Swedish krona",code:"SEK"},{currency:"Swiss franc",code:"CHF"},{currency:"Thai baht",code:"THB"},{currency:"United States dollar",code:"USD"}],k=[{region:"ALBANIA",code:"en_US"},{region:"ALGERIA",code:"ar_EG"},{region:"ALGERIA",code:"en_US"},{region:"ALGERIA",code:"fr_XC"},{region:"ALGERIA",code:"es_XC"},{region:"ALGERIA",code:"zh_XC"},{region:"ANDORRA",code:"en_US"},{region:"ANDORRA",code:"fr_XC"},{region:"ANDORRA",code:"es_XC"},{region:"ANDORRA",code:"zh_XC"},{region:"ANGOLA",code:"en_US"},{region:"ANGOLA",code:"fr_XC"},{region:"ANGOLA",code:"es_XC"},{region:"ANGOLA",code:"zh_XC"},{region:"ANGUILLA",code:"en_US"},{region:"ANGUILLA",code:"fr_XC"},{region:"ANGUILLA",code:"es_XC"},{region:"ANGUILLA",code:"zh_XC"},{region:"ANTIGUA & BARBUDA",code:"en_US"},{region:"ANTIGUA & BARBUDA",code:"fr_XC"},{region:"ANTIGUA & BARBUDA",code:"es_XC"},{region:"ANTIGUA & BARBUDA",code:"zh_XC"},{region:"ARGENTINA",code:"es_XC"},{region:"ARGENTINA",code:"en_US"},{region:"ARMENIA",code:"en_US"},{region:"ARMENIA",code:"fr_XC"},{region:"ARMENIA",code:"es_XC"},{region:"ARMENIA",code:"zh_XC"},{region:"ARUBA",code:"en_US"},{region:"ARUBA",code:"fr_XC"},{region:"ARUBA",code:"es_XC"},{region:"ARUBA",code:"zh_XC"},{region:"AUSTRALIA",code:"en_AU"},{region:"AUSTRIA",code:"de_DE"},{region:"AUSTRIA",code:"en_US"},{region:"AZERBAIJAN",code:"en_US"},{region:"AZERBAIJAN",code:"fr_XC"},{region:"AZERBAIJAN",code:"es_XC"},{region:"AZERBAIJAN",code:"zh_XC"},{region:"BAHAMAS",code:"en_US"},{region:"BAHAMAS",code:"fr_XC"},{region:"BAHAMAS",code:"es_XC"},{region:"BAHAMAS",code:"zh_XC"},{region:"BAHRAIN",code:"ar_EG"},{region:"BAHRAIN",code:"en_US"},{region:"BAHRAIN",code:"fr_XC"},{region:"BAHRAIN",code:"es_XC"},{region:"BAHRAIN",code:"zh_XC"},{region:"BARBADOS",code:"en_US"},{region:"BARBADOS",code:"fr_XC"},{region:"BARBADOS",code:"es_XC"},{region:"BARBADOS",code:"zh_XC"},{region:"BELARUS",code:"en_US"},{region:"BELGIUM",code:"en_US"},{region:"BELGIUM",code:"nl_NL"},{region:"BELGIUM",code:"fr_FR"},{region:"BELIZE",code:"es_XC"},{region:"BELIZE",code:"en_US"},{region:"BELIZE",code:"fr_XC"},{region:"BELIZE",code:"zh_XC"},{region:"BENIN",code:"fr_XC"},{region:"BENIN",code:"en_US"},{region:"BENIN",code:"es_XC"},{region:"BENIN",code:"zh_XC"},{region:"BERMUDA",code:"en_US"},{region:"BERMUDA",code:"fr_XC"},{region:"BERMUDA",code:"es_XC"},{region:"BERMUDA",code:"zh_XC"},{region:"BHUTAN",code:"en_US"},{region:"BOLIVIA",code:"es_XC"},{region:"BOLIVIA",code:"en_US"},{region:"BOLIVIA",code:"fr_XC"},{region:"BOLIVIA",code:"zh_XC"},{region:"BOSNIA & HERZEGOVINA",code:"en_US"},{region:"BOTSWANA",code:"en_US"},{region:"BOTSWANA",code:"fr_XC"},{region:"BOTSWANA",code:"es_XC"},{region:"BOTSWANA",code:"zh_XC"},{region:"BRAZIL",code:"pt_BR"},{region:"BRAZIL",code:"en_US"},{region:"BRITISH VIRGIN ISLANDS",code:"en_US"},{region:"BRITISH VIRGIN ISLANDS",code:"fr_XC"},{region:"BRITISH VIRGIN ISLANDS",code:"es_XC"},{region:"BRITISH VIRGIN ISLANDS",code:"zh_XC"},{region:"BRUNEI",code:"en_US"},{region:"BULGARIA",code:"en_US"},{region:"BURKINA FASO",code:"fr_XC"},{region:"BURKINA FASO",code:"en_US"},{region:"BURKINA FASO",code:"es_XC"},{region:"BURKINA FASO",code:"zh_XC"},{region:"BURUNDI",code:"fr_XC"},{region:"BURUNDI",code:"en_US"},{region:"BURUNDI",code:"es_XC"},{region:"BURUNDI",code:"zh_XC"},{region:"CAMBODIA",code:"en_US"},{region:"CAMEROON",code:"fr_XC"},{region:"CAMEROON",code:"en_US"},{region:"CANADA",code:"en_US"},{region:"CANADA",code:"fr_CA"},{region:"CAPE VERDE",code:"en_US"},{region:"CAPE VERDE",code:"fr_XC"},{region:"CAPE VERDE",code:"es_XC"},{region:"CAPE VERDE",code:"zh_XC"},{region:"CAYMAN ISLANDS",code:"en_US"},{region:"CAYMAN ISLANDS",code:"fr_XC"},{region:"CAYMAN ISLANDS",code:"es_XC"},{region:"CAYMAN ISLANDS",code:"zh_XC"},{region:"CHAD",code:"fr_XC"},{region:"CHAD",code:"en_US"},{region:"CHAD",code:"es_XC"},{region:"CHAD",code:"zh_XC"},{region:"CHILE",code:"es_XC"},{region:"CHILE",code:"en_US"},{region:"CHILE",code:"fr_XC"},{region:"CHILE",code:"zh_XC"},{region:"CHINA",code:"zh_CN"},{region:"CHINA WORLDWIDE",code:"zh_XC"},{region:"CHINA WORLDWIDE",code:"en_US"},{region:"COLOMBIA",code:"es_XC"},{region:"COLOMBIA",code:"en_US"},{region:"COLOMBIA",code:"fr_XC"},{region:"COLOMBIA",code:"zh_XC"},{region:"COMOROS",code:"fr_XC"},{region:"COMOROS",code:"en_US"},{region:"COMOROS",code:"es_XC"},{region:"COMOROS",code:"zh_XC"},{region:"CONGO - BRAZZAVILLE",code:"en_US"},{region:"CONGO - BRAZZAVILLE",code:"fr_XC"},{region:"CONGO - BRAZZAVILLE",code:"es_XC"},{region:"CONGO - BRAZZAVILLE",code:"zh_XC"},{region:"CONGO - KINSHASA",code:"fr_XC"},{region:"CONGO - KINSHASA",code:"en_US"},{region:"CONGO - KINSHASA",code:"es_XC"},{region:"CONGO - KINSHASA",code:"zh_XC"},{region:"COOK ISLANDS",code:"en_US"},{region:"COOK ISLANDS",code:"fr_XC"},{region:"COOK ISLANDS",code:"es_XC"},{region:"COOK ISLANDS",code:"zh_XC"},{region:"COSTA RICA",code:"es_XC"},{region:"COSTA RICA",code:"en_US"},{region:"COSTA RICA",code:"fr_XC"},{region:"COSTA RICA",code:"zh_XC"},{region:"CÔTE D’IVOIRE",code:"fr_XC"},{region:"CÔTE D’IVOIRE",code:"en_US"},{region:"CROATIA",code:"en_US"},{region:"CYPRUS",code:"en_US"},{region:"CZECH REPUBLIC",code:"cs_CZ"},{region:"CZECH REPUBLIC",code:"en_US"},{region:"CZECH REPUBLIC",code:"fr_XC"},{region:"CZECH REPUBLIC",code:"es_XC"},{region:"CZECH REPUBLIC",code:"zh_XC"},{region:"DENMARK",code:"da_DK"},{region:"DENMARK",code:"en_US"},{region:"DJIBOUTI",code:"fr_XC"},{region:"DJIBOUTI",code:"en_US"},{region:"DJIBOUTI",code:"es_XC"},{region:"DJIBOUTI",code:"zh_XC"},{region:"DOMINICA",code:"en_US"},{region:"DOMINICA",code:"fr_XC"},{region:"DOMINICA",code:"es_XC"},{region:"DOMINICA",code:"zh_XC"},{region:"DOMINICAN REPUBLIC",code:"es_XC"},{region:"DOMINICAN REPUBLIC",code:"en_US"},{region:"DOMINICAN REPUBLIC",code:"fr_XC"},{region:"DOMINICAN REPUBLIC",code:"zh_XC"},{region:"ECUADOR",code:"es_XC"},{region:"ECUADOR",code:"en_US"},{region:"ECUADOR",code:"fr_XC"},{region:"ECUADOR",code:"zh_XC"},{region:"EGYPT",code:"ar_EG"},{region:"EGYPT",code:"en_US"},{region:"EGYPT",code:"fr_XC"},{region:"EGYPT",code:"es_XC"},{region:"EGYPT",code:"zh_XC"},{region:"EL SALVADOR",code:"es_XC"},{region:"EL SALVADOR",code:"en_US"},{region:"EL SALVADOR",code:"fr_XC"},{region:"EL SALVADOR",code:"zh_XC"},{region:"ERITREA",code:"en_US"},{region:"ERITREA",code:"fr_XC"},{region:"ERITREA",code:"es_XC"},{region:"ERITREA",code:"zh_XC"},{region:"ESTONIA",code:"en_US"},{region:"ESTONIA",code:"ru_RU"},{region:"ESTONIA",code:"fr_XC"},{region:"ESTONIA",code:"es_XC"},{region:"ESTONIA",code:"zh_XC"},{region:"ETHIOPIA",code:"en_US"},{region:"ETHIOPIA",code:"fr_XC"},{region:"ETHIOPIA",code:"es_XC"},{region:"ETHIOPIA",code:"zh_XC"},{region:"FALKLAND ISLANDS",code:"en_US"},{region:"FALKLAND ISLANDS",code:"fr_XC"},{region:"FALKLAND ISLANDS",code:"es_XC"},{region:"FALKLAND ISLANDS",code:"zh_XC"},{region:"FAROE ISLANDS",code:"da_DK"},{region:"FAROE ISLANDS",code:"en_US"},{region:"FAROE ISLANDS",code:"fr_XC"},{region:"FAROE ISLANDS",code:"es_XC"},{region:"FAROE ISLANDS",code:"zh_XC"},{region:"FIJI",code:"en_US"},{region:"FIJI",code:"fr_XC"},{region:"FIJI",code:"es_XC"},{region:"FIJI",code:"zh_XC"},{region:"FINLAND",code:"fi_FI"},{region:"FINLAND",code:"en_US"},{region:"FINLAND",code:"fr_XC"},{region:"FINLAND",code:"es_XC"},{region:"FINLAND",code:"zh_XC"},{region:"FRANCE",code:"fr_FR"},{region:"FRANCE",code:"en_US"},{region:"FRENCH GUIANA",code:"en_US"},{region:"FRENCH GUIANA",code:"fr_XC"},{region:"FRENCH GUIANA",code:"es_XC"},{region:"FRENCH GUIANA",code:"zh_XC"},{region:"FRENCH POLYNESIA",code:"en_US"},{region:"FRENCH POLYNESIA",code:"fr_XC"},{region:"FRENCH POLYNESIA",code:"es_XC"},{region:"FRENCH POLYNESIA",code:"zh_XC"},{region:"GABON",code:"fr_XC"},{region:"GABON",code:"en_US"},{region:"GABON",code:"es_XC"},{region:"GABON",code:"zh_XC"},{region:"GAMBIA",code:"en_US"},{region:"GAMBIA",code:"fr_XC"},{region:"GAMBIA",code:"es_XC"},{region:"GAMBIA",code:"zh_XC"},{region:"GEORGIA",code:"en_US"},{region:"GEORGIA",code:"fr_XC"},{region:"GEORGIA",code:"es_XC"},{region:"GEORGIA",code:"zh_XC"},{region:"GERMANY",code:"de_DE"},{region:"GERMANY",code:"en_US"},{region:"GIBRALTAR",code:"en_US"},{region:"GIBRALTAR",code:"fr_XC"},{region:"GIBRALTAR",code:"es_XC"},{region:"GIBRALTAR",code:"zh_XC"},{region:"GREECE",code:"el_GR"},{region:"GREECE",code:"en_US"},{region:"GREECE",code:"fr_XC"},{region:"GREECE",code:"es_XC"},{region:"GREECE",code:"zh_XC"},{region:"GREENLAND",code:"da_DK"},{region:"GREENLAND",code:"en_US"},{region:"GREENLAND",code:"fr_XC"},{region:"GREENLAND",code:"es_XC"},{region:"GREENLAND",code:"zh_XC"},{region:"GRENADA",code:"en_US"},{region:"GRENADA",code:"fr_XC"},{region:"GRENADA",code:"es_XC"},{region:"GRENADA",code:"zh_XC"},{region:"GUADELOUPE",code:"en_US"},{region:"GUADELOUPE",code:"fr_XC"},{region:"GUADELOUPE",code:"es_XC"},{region:"GUADELOUPE",code:"zh_XC"},{region:"GUATEMALA",code:"es_XC"},{region:"GUATEMALA",code:"en_US"},{region:"GUATEMALA",code:"fr_XC"},{region:"GUATEMALA",code:"zh_XC"},{region:"GUINEA",code:"fr_XC"},{region:"GUINEA",code:"en_US"},{region:"GUINEA",code:"es_XC"},{region:"GUINEA",code:"zh_XC"},{region:"GUINEA-BISSAU",code:"en_US"},{region:"GUINEA-BISSAU",code:"fr_XC"},{region:"GUINEA-BISSAU",code:"es_XC"},{region:"GUINEA-BISSAU",code:"zh_XC"},{region:"GUYANA",code:"en_US"},{region:"GUYANA",code:"fr_XC"},{region:"GUYANA",code:"es_XC"},{region:"GUYANA",code:"zh_XC"},{region:"HONDURAS",code:"es_XC"},{region:"HONDURAS",code:"en_US"},{region:"HONDURAS",code:"fr_XC"},{region:"HONDURAS",code:"zh_XC"},{region:"HONG KONG SAR CHINA",code:"en_GB"},{region:"HONG KONG SAR CHINA",code:"zh_HK"},{region:"HUNGARY",code:"hu_HU"},{region:"HUNGARY",code:"en_US"},{region:"HUNGARY",code:"fr_XC"},{region:"HUNGARY",code:"es_XC"},{region:"HUNGARY",code:"zh_XC"},{region:"ICELAND",code:"en_US"},{region:"INDIA",code:"en_IN"},{region:"INDONESIA",code:"id_ID"},{region:"INDONESIA",code:"en_US"},{region:"IRELAND",code:"en_US"},{region:"IRELAND",code:"fr_XC"},{region:"IRELAND",code:"es_XC"},{region:"IRELAND",code:"zh_XC"},{region:"ISRAEL",code:"he_IL"},{region:"ISRAEL",code:"en_US"},{region:"ITALY",code:"it_IT"},{region:"ITALY",code:"en_US"},{region:"JAMAICA",code:"es_XC"},{region:"JAMAICA",code:"en_US"},{region:"JAMAICA",code:"fr_XC"},{region:"JAMAICA",code:"zh_XC"},{region:"JAPAN",code:"ja_JP"},{region:"JAPAN",code:"en_US"},{region:"JORDAN",code:"ar_EG"},{region:"JORDAN",code:"en_US"},{region:"JORDAN",code:"fr_XC"},{region:"JORDAN",code:"es_XC"},{region:"JORDAN",code:"zh_XC"},{region:"KAZAKHSTAN",code:"en_US"},{region:"KAZAKHSTAN",code:"fr_XC"},{region:"KAZAKHSTAN",code:"es_XC"},{region:"KAZAKHSTAN",code:"zh_XC"},{region:"KENYA",code:"en_US"},{region:"KENYA",code:"fr_XC"},{region:"KENYA",code:"es_XC"},{region:"KENYA",code:"zh_XC"},{region:"KIRIBATI",code:"en_US"},{region:"KIRIBATI",code:"fr_XC"},{region:"KIRIBATI",code:"es_XC"},{region:"KIRIBATI",code:"zh_XC"},{region:"KUWAIT",code:"ar_EG"},{region:"KUWAIT",code:"en_US"},{region:"KUWAIT",code:"fr_XC"},{region:"KUWAIT",code:"es_XC"},{region:"KUWAIT",code:"zh_XC"},{region:"KYRGYZSTAN",code:"en_US"},{region:"KYRGYZSTAN",code:"fr_XC"},{region:"KYRGYZSTAN",code:"es_XC"},{region:"KYRGYZSTAN",code:"zh_XC"},{region:"LAOS",code:"en_US"},{region:"LATVIA",code:"en_US"},{region:"LATVIA",code:"ru_RU"},{region:"LATVIA",code:"fr_XC"},{region:"LATVIA",code:"es_XC"},{region:"LATVIA",code:"zh_XC"},{region:"LESOTHO",code:"en_US"},{region:"LESOTHO",code:"fr_XC"},{region:"LESOTHO",code:"es_XC"},{region:"LESOTHO",code:"zh_XC"},{region:"LIECHTENSTEIN",code:"en_US"},{region:"LIECHTENSTEIN",code:"fr_XC"},{region:"LIECHTENSTEIN",code:"es_XC"},{region:"LIECHTENSTEIN",code:"zh_XC"},{region:"LITHUANIA",code:"en_US"},{region:"LITHUANIA",code:"ru_RU"},{region:"LITHUANIA",code:"fr_XC"},{region:"LITHUANIA",code:"es_XC"},{region:"LITHUANIA",code:"zh_XC"},{region:"LUXEMBOURG",code:"en_US"},{region:"LUXEMBOURG",code:"de_DE"},{region:"LUXEMBOURG",code:"fr_XC"},{region:"LUXEMBOURG",code:"es_XC"},{region:"LUXEMBOURG",code:"zh_XC"},{region:"MACEDONIA",code:"en_US"},{region:"MADAGASCAR",code:"en_US"},{region:"MADAGASCAR",code:"fr_XC"},{region:"MADAGASCAR",code:"es_XC"},{region:"MADAGASCAR",code:"zh_XC"},{region:"MALAWI",code:"en_US"},{region:"MALAWI",code:"fr_XC"},{region:"MALAWI",code:"es_XC"},{region:"MALAWI",code:"zh_XC"},{region:"MALAYSIA",code:"en_US"},{region:"MALDIVES",code:"en_US"},{region:"MALI",code:"fr_XC"},{region:"MALI",code:"en_US"},{region:"MALI",code:"es_XC"},{region:"MALI",code:"zh_XC"},{region:"MALTA",code:"en_US"},{region:"MARSHALL ISLANDS",code:"en_US"},{region:"MARSHALL ISLANDS",code:"fr_XC"},{region:"MARSHALL ISLANDS",code:"es_XC"},{region:"MARSHALL ISLANDS",code:"zh_XC"},{region:"MARTINIQUE",code:"en_US"},{region:"MARTINIQUE",code:"fr_XC"},{region:"MARTINIQUE",code:"es_XC"},{region:"MARTINIQUE",code:"zh_XC"},{region:"MAURITANIA",code:"en_US"},{region:"MAURITANIA",code:"fr_XC"},{region:"MAURITANIA",code:"es_XC"},{region:"MAURITANIA",code:"zh_XC"},{region:"MAURITIUS",code:"en_US"},{region:"MAURITIUS",code:"fr_XC"},{region:"MAURITIUS",code:"es_XC"},{region:"MAURITIUS",code:"zh_XC"},{region:"MAYOTTE",code:"en_US"},{region:"MAYOTTE",code:"fr_XC"},{region:"MAYOTTE",code:"es_XC"},{region:"MAYOTTE",code:"zh_XC"},{region:"MEXICO",code:"es_XC"},{region:"MEXICO",code:"en_US"},{region:"MICRONESIA",code:"en_US"},{region:"MOLDOVA",code:"en_US"},{region:"MONACO",code:"fr_XC"},{region:"MONACO",code:"en_US"},{region:"MONGOLIA",code:"en_US"},{region:"MONTENEGRO",code:"en_US"},{region:"MONTSERRAT",code:"en_US"},{region:"MONTSERRAT",code:"fr_XC"},{region:"MONTSERRAT",code:"es_XC"},{region:"MONTSERRAT",code:"zh_XC"},{region:"MOROCCO",code:"ar_EG"},{region:"MOROCCO",code:"en_US"},{region:"MOROCCO",code:"fr_XC"},{region:"MOROCCO",code:"es_XC"},{region:"MOROCCO",code:"zh_XC"},{region:"MOZAMBIQUE",code:"en_US"},{region:"MOZAMBIQUE",code:"fr_XC"},{region:"MOZAMBIQUE",code:"es_XC"},{region:"MOZAMBIQUE",code:"zh_XC"},{region:"NAMIBIA",code:"en_US"},{region:"NAMIBIA",code:"fr_XC"},{region:"NAMIBIA",code:"es_XC"},{region:"NAMIBIA",code:"zh_XC"},{region:"NAURU",code:"en_US"},{region:"NAURU",code:"fr_XC"},{region:"NAURU",code:"es_XC"},{region:"NAURU",code:"zh_XC"},{region:"NEPAL",code:"en_US"},{region:"NETHERLANDS",code:"nl_NL"},{region:"NETHERLANDS",code:"en_US"},{region:"NEW CALEDONIA",code:"en_US"},{region:"NEW CALEDONIA",code:"fr_XC"},{region:"NEW CALEDONIA",code:"es_XC"},{region:"NEW CALEDONIA",code:"zh_XC"},{region:"NEW ZEALAND",code:"en_US"},{region:"NEW ZEALAND",code:"fr_XC"},{region:"NEW ZEALAND",code:"es_XC"},{region:"NEW ZEALAND",code:"zh_XC"},{region:"NICARAGUA",code:"es_XC"},{region:"NICARAGUA",code:"en_US"},{region:"NICARAGUA",code:"fr_XC"},{region:"NICARAGUA",code:"zh_XC"},{region:"NIGER",code:"fr_XC"},{region:"NIGER",code:"en_US"},{region:"NIGER",code:"es_XC"},{region:"NIGER",code:"zh_XC"},{region:"NIGERIA",code:"en_US"},{region:"NIUE",code:"en_US"},{region:"NIUE",code:"fr_XC"},{region:"NIUE",code:"es_XC"},{region:"NIUE",code:"zh_XC"},{region:"NORFOLK ISLAND",code:"en_US"},{region:"NORFOLK ISLAND",code:"fr_XC"},{region:"NORFOLK ISLAND",code:"es_XC"},{region:"NORFOLK ISLAND",code:"zh_XC"},{region:"NORWAY",code:"no_NO"},{region:"NORWAY",code:"en_US"},{region:"OMAN",code:"ar_EG"},{region:"OMAN",code:"en_US"},{region:"OMAN",code:"fr_XC"},{region:"OMAN",code:"es_XC"},{region:"OMAN",code:"zh_XC"},{region:"PALAU",code:"en_US"},{region:"PALAU",code:"fr_XC"},{region:"PALAU",code:"es_XC"},{region:"PALAU",code:"zh_XC"},{region:"PANAMA",code:"es_XC"},{region:"PANAMA",code:"en_US"},{region:"PANAMA",code:"fr_XC"},{region:"PANAMA",code:"zh_XC"},{region:"PAPUA NEW GUINEA",code:"en_US"},{region:"PAPUA NEW GUINEA",code:"fr_XC"},{region:"PAPUA NEW GUINEA",code:"es_XC"},{region:"PAPUA NEW GUINEA",code:"zh_XC"},{region:"PARAGUAY",code:"es_XC"},{region:"PARAGUAY",code:"en_US"},{region:"PERU",code:"es_XC"},{region:"PERU",code:"en_US"},{region:"PERU",code:"fr_XC"},{region:"PERU",code:"zh_XC"},{region:"PHILIPPINES",code:"en_US"},{region:"PITCAIRN ISLANDS",code:"en_US"},{region:"PITCAIRN ISLANDS",code:"fr_XC"},{region:"PITCAIRN ISLANDS",code:"es_XC"},{region:"PITCAIRN ISLANDS",code:"zh_XC"},{region:"POLAND",code:"pl_PL"},{region:"POLAND",code:"en_US"},{region:"PORTUGAL",code:"pt_PT"},{region:"PORTUGAL",code:"en_US"},{region:"QATAR",code:"en_US"},{region:"QATAR",code:"fr_XC"},{region:"QATAR",code:"es_XC"},{region:"QATAR",code:"zh_XC"},{region:"QATAR",code:"ar_EG"},{region:"RÉUNION",code:"en_US"},{region:"RÉUNION",code:"fr_XC"},{region:"RÉUNION",code:"es_XC"},{region:"RÉUNION",code:"zh_XC"},{region:"ROMANIA",code:"en_US"},{region:"ROMANIA",code:"fr_XC"},{region:"ROMANIA",code:"es_XC"},{region:"ROMANIA",code:"zh_XC"},{region:"RUSSIA",code:"ru_RU"},{region:"RUSSIA",code:"en_US"},{region:"RWANDA",code:"fr_XC"},{region:"RWANDA",code:"en_US"},{region:"RWANDA",code:"es_XC"},{region:"RWANDA",code:"zh_XC"},{region:"SAMOA",code:"en_US"},{region:"SAN MARINO",code:"en_US"},{region:"SAN MARINO",code:"fr_XC"},{region:"SAN MARINO",code:"es_XC"},{region:"SAN MARINO",code:"zh_XC"},{region:"SÃO TOMÉ & PRÍNCIPE",code:"en_US"},{region:"SÃO TOMÉ & PRÍNCIPE",code:"fr_XC"},{region:"SÃO TOMÉ & PRÍNCIPE",code:"es_XC"},{region:"SÃO TOMÉ & PRÍNCIPE",code:"zh_XC"},{region:"SAUDI ARABIA",code:"ar_EG"},{region:"SAUDI ARABIA",code:"en_US"},{region:"SAUDI ARABIA",code:"fr_XC"},{region:"SAUDI ARABIA",code:"es_XC"},{region:"SAUDI ARABIA",code:"zh_XC"},{region:"SENEGAL",code:"fr_XC"},{region:"SENEGAL",code:"en_US"},{region:"SENEGAL",code:"es_XC"},{region:"SENEGAL",code:"zh_XC"},{region:"SERBIA",code:"en_US"},{region:"SERBIA",code:"fr_XC"},{region:"SERBIA",code:"es_XC"},{region:"SERBIA",code:"zh_XC"},{region:"SEYCHELLES",code:"fr_XC"},{region:"SEYCHELLES",code:"en_US"},{region:"SEYCHELLES",code:"es_XC"},{region:"SEYCHELLES",code:"zh_XC"},{region:"SIERRA LEONE",code:"en_US"},{region:"SIERRA LEONE",code:"fr_XC"},{region:"SIERRA LEONE",code:"es_XC"},{region:"SIERRA LEONE",code:"zh_XC"},{region:"SINGAPORE",code:"en_GB"},{region:"SLOVAKIA",code:"sk_SK"},{region:"SLOVAKIA",code:"en_US"},{region:"SLOVAKIA",code:"fr_XC"},{region:"SLOVAKIA",code:"es_XC"},{region:"SLOVAKIA",code:"zh_XC"},{region:"SLOVENIA",code:"en_US"},{region:"SLOVENIA",code:"fr_XC"},{region:"SLOVENIA",code:"es_XC"},{region:"SLOVENIA",code:"zh_XC"},{region:"SOLOMON ISLANDS",code:"en_US"},{region:"SOLOMON ISLANDS",code:"fr_XC"},{region:"SOLOMON ISLANDS",code:"es_XC"},{region:"SOLOMON ISLANDS",code:"zh_XC"},{region:"SOMALIA",code:"en_US"},{region:"SOMALIA",code:"fr_XC"},{region:"SOMALIA",code:"es_XC"},{region:"SOMALIA",code:"zh_XC"},{region:"SOUTH AFRICA",code:"en_US"},{region:"SOUTH AFRICA",code:"fr_XC"},{region:"SOUTH AFRICA",code:"es_XC"},{region:"SOUTH AFRICA",code:"zh_XC"},{region:"SOUTH KOREA",code:"ko_KR"},{region:"SOUTH KOREA",code:"en_US"},{region:"SPAIN",code:"es_ES"},{region:"SPAIN",code:"en_US"},{region:"SRI LANKA",code:"en_US"},{region:"ST. HELENA",code:"en_US"},{region:"ST. HELENA",code:"fr_XC"},{region:"ST. HELENA",code:"es_XC"},{region:"ST. HELENA",code:"zh_XC"},{region:"ST. KITTS & NEVIS",code:"en_US"},{region:"ST. KITTS & NEVIS",code:"fr_XC"},{region:"ST. KITTS & NEVIS",code:"es_XC"},{region:"ST. KITTS & NEVIS",code:"zh_XC"},{region:"ST. LUCIA",code:"en_US"},{region:"ST. LUCIA",code:"fr_XC"},{region:"ST. LUCIA",code:"es_XC"},{region:"ST. LUCIA",code:"zh_XC"},{region:"ST. PIERRE & MIQUELON",code:"en_US"},{region:"ST. PIERRE & MIQUELON",code:"fr_XC"},{region:"ST. PIERRE & MIQUELON",code:"es_XC"},{region:"ST. PIERRE & MIQUELON",code:"zh_XC"},{region:"ST. VINCENT & GRENADINES",code:"en_US"},{region:"ST. VINCENT & GRENADINES",code:"fr_XC"},{region:"ST. VINCENT & GRENADINES",code:"es_XC"},{region:"ST. VINCENT & GRENADINES",code:"zh_XC"},{region:"SURINAME",code:"en_US"},{region:"SURINAME",code:"fr_XC"},{region:"SURINAME",code:"es_XC"},{region:"SURINAME",code:"zh_XC"},{region:"SVALBARD & JAN MAYEN",code:"en_US"},{region:"SVALBARD & JAN MAYEN",code:"fr_XC"},{region:"SVALBARD & JAN MAYEN",code:"es_XC"},{region:"SVALBARD & JAN MAYEN",code:"zh_XC"},{region:"SWAZILAND",code:"en_US"},{region:"SWAZILAND",code:"fr_XC"},{region:"SWAZILAND",code:"es_XC"},{region:"SWAZILAND",code:"zh_XC"},{region:"SWEDEN",code:"sv_SE"},{region:"SWEDEN",code:"en_US"},{region:"SWITZERLAND",code:"de_DE"},{region:"SWITZERLAND",code:"fr_FR"},{region:"SWITZERLAND",code:"en_US"},{region:"TAIWAN",code:"zh_TW"},{region:"TAIWAN",code:"en_US"},{region:"TAJIKISTAN",code:"en_US"},{region:"TAJIKISTAN",code:"fr_XC"},{region:"TAJIKISTAN",code:"es_XC"},{region:"TAJIKISTAN",code:"zh_XC"},{region:"TANZANIA",code:"en_US"},{region:"TANZANIA",code:"fr_XC"},{region:"TANZANIA",code:"es_XC"},{region:"TANZANIA",code:"zh_XC"},{region:"THAILAND",code:"th_TH"},{region:"THAILAND",code:"en_GB"},{region:"TOGO",code:"fr_XC"},{region:"TOGO",code:"en_US"},{region:"TOGO",code:"es_XC"},{region:"TOGO",code:"zh_XC"},{region:"TONGA",code:"en_US"},{region:"TRINIDAD & TOBAGO",code:"en_US"},{region:"TRINIDAD & TOBAGO",code:"fr_XC"},{region:"TRINIDAD & TOBAGO",code:"es_XC"},{region:"TRINIDAD & TOBAGO",code:"zh_XC"},{region:"TUNISIA",code:"ar_EG"},{region:"TUNISIA",code:"en_US"},{region:"TUNISIA",code:"fr_XC"},{region:"TUNISIA",code:"es_XC"},{region:"TUNISIA",code:"zh_XC"},{region:"TURKMENISTAN",code:"en_US"},{region:"TURKMENISTAN",code:"fr_XC"},{region:"TURKMENISTAN",code:"es_XC"},{region:"TURKMENISTAN",code:"zh_XC"},{region:"TURKS & CAICOS ISLANDS",code:"en_US"},{region:"TURKS & CAICOS ISLANDS",code:"fr_XC"},{region:"TURKS & CAICOS ISLANDS",code:"es_XC"},{region:"TURKS & CAICOS ISLANDS",code:"zh_XC"},{region:"TUVALU",code:"en_US"},{region:"TUVALU",code:"fr_XC"},{region:"TUVALU",code:"es_XC"},{region:"TUVALU",code:"zh_XC"},{region:"UGANDA",code:"en_US"},{region:"UGANDA",code:"fr_XC"},{region:"UGANDA",code:"es_XC"},{region:"UGANDA",code:"zh_XC"},{region:"UKRAINE",code:"en_US"},{region:"UKRAINE",code:"ru_RU"},{region:"UKRAINE",code:"fr_XC"},{region:"UKRAINE",code:"es_XC"},{region:"UKRAINE",code:"zh_XC"},{region:"UNITED ARAB EMIRATES",code:"en_US"},{region:"UNITED ARAB EMIRATES",code:"fr_XC"},{region:"UNITED ARAB EMIRATES",code:"es_XC"},{region:"UNITED ARAB EMIRATES",code:"zh_XC"},{region:"UNITED ARAB EMIRATES",code:"ar_EG"},{region:"UNITED KINGDOM",code:"en_GB"},{region:"UNITED STATES",code:"en_US"},{region:"UNITED STATES",code:"fr_XC"},{region:"UNITED STATES",code:"es_XC"},{region:"UNITED STATES",code:"zh_XC"},{region:"URUGUAY",code:"es_XC"},{region:"URUGUAY",code:"en_US"},{region:"URUGUAY",code:"fr_XC"},{region:"URUGUAY",code:"zh_XC"},{region:"VANUATU",code:"en_US"},{region:"VANUATU",code:"fr_XC"},{region:"VANUATU",code:"es_XC"},{region:"VANUATU",code:"zh_XC"},{region:"VATICAN CITY",code:"en_US"},{region:"VATICAN CITY",code:"fr_XC"},{region:"VATICAN CITY",code:"es_XC"},{region:"VATICAN CITY",code:"zh_XC"},{region:"VENEZUELA",code:"es_XC"},{region:"VENEZUELA",code:"en_US"},{region:"VENEZUELA",code:"fr_XC"},{region:"VENEZUELA",code:"zh_XC"},{region:"VIETNAM",code:"en_US"},{region:"WALLIS & FUTUNA",code:"en_US"},{region:"WALLIS & FUTUNA",code:"fr_XC"},{region:"WALLIS & FUTUNA",code:"es_XC"},{region:"WALLIS & FUTUNA",code:"zh_XC"},{region:"YEMEN",code:"ar_EG"},{region:"YEMEN",code:"en_US"},{region:"YEMEN",code:"fr_XC"},{region:"YEMEN",code:"es_XC"},{region:"YEMEN",code:"zh_XC"},{region:"ZAMBIA",code:"en_US"},{region:"ZAMBIA",code:"fr_XC"},{region:"ZAMBIA",code:"es_XC"},{region:"ZAMBIA",code:"zh_XC"},{region:"ZIMBABWE",code:"en_US"}];function pe(){const{fieldKey:c}=H(),[I,s]=P(b),e=F(I[c]),f=Object.entries(I),m=x(V),R=(e==null?void 0:e.payType)==="subscription";e==null||e.descType;const S=(e==null?void 0:e.amountType)==="dynamic",t=(e==null?void 0:e.shippingType)==="dynamic",X=(e==null?void 0:e.taxType)==="dynamic",{css:A}=K();v.useEffect(()=>{T(c,"paypalAmountFldMissing"),T(c,"paypalAmountMissing"),S&&!e.amountFld?L({fieldKey:c,errorKey:"paypalAmountFldMissing",errorMsg:d("PayPal Dyanmic Amount Field is not Selected"),errorUrl:`field-settings/${c}`}):!S&&(!e.amount||e.amount<=0)&&L({fieldKey:c,errorKey:"paypalAmountMissing",errorMsg:d("PayPal Fixed Amount is not valid"),errorUrl:`field-settings/${c}`})},[e==null?void 0:e.amountType,e==null?void 0:e.amount,e==null?void 0:e.amountFld]);const g=(o,i)=>{if(i){if(e[o]=i,o==="locale"){const a=i.split(" - ");e.locale=a[a.length-1],e.language=i}}else delete e[o];const _=U(I,a=>{a[c]=e});s(_),E({event:`${Q[o]} to ${i}: ${e.lbl||c}`,type:`${o}_changed`,state:{fields:_,fldKey:c}})},G=o=>{o.target.checked?(e.payType="subscription",delete e.currency,T(c,"paypalAmountMissing")):(e.currency="USD",delete e.payType,delete e.planId,L({fieldKey:c,errorKey:"paypalAmountMissing",errorMsg:d("PayPal Fixed Amount is not valid"),errorUrl:`field-settings/${c}`})),delete e.amountType,delete e.amount,delete e.amountFld;const i=U(I,_=>{_[c]=e});s(i),E({event:`Subscription "${o.target.checked?"On":"Off"}": ${e.lbl||c}`,type:"toggle_subscription",state:{fields:i,fldKey:c}})},h=o=>{o.target.value?e.amountType=o.target.value:delete e.amountType,delete e.amount,delete e.amountFld;const i=U(I,_=>{_[c]=e});s(i),E({event:`Ammount Type Changed to "${o.target.value}": ${e.lbl||c}`,type:"set_amount",state:{fields:i,fldKey:c}})},p=o=>{o.target.value?e.shippingType=o.target.value:delete e.shippingType,delete e.shipping,delete e.shippingFld;const i=U(I,_=>{_[c]=e});s(i),E({event:`Shipping Type changed to "${o.target.value}": ${e.lbl||c}`,type:"set_shipping_type",state:{fields:i,fldKey:c}})},D=o=>{o.target.value?e.taxType=o.target.value:delete e.taxType,delete e.tax,delete e.taxFld;const i=U(I,_=>{_[c]=e});s(i),E({event:`Tax type changed to "${o.target.value}": ${e.lbl||c}`,type:"set_tax_type",state:{fields:i,fldKey:c}})},O=()=>f.filter(i=>i[1].typ.match(/^(radio|number|currency)/)).map(i=>n.jsx("option",{value:i[0],children:i[1].adminLbl||i[1].lbl},i[0])),B=()=>k.map(o=>({label:n.jsxs("div",{className:"flx flx-between",children:[n.jsx("span",{className:"btcd-ttl-ellipsis",children:o.region}),n.jsx("code",{className:"btcd-code",children:o.code})]}),title:`${o.region} - ${o.code}`,value:`${o.region} - ${o.code}`})),z=()=>m.filter(i=>i.type==="PayPal").map(i=>n.jsx("option",{value:i.id,children:i.name},i.id)),y=()=>J.map(o=>({label:o.label,value:o.value}));return n.jsxs("div",{children:[n.jsx(j,{title:"Field Settings",subtitle:e.typ,fieldKey:c}),n.jsx(W,{id:"slct-cnfg-stng",title:"Select Config",className:A(C.fieldSection),children:n.jsxs("select",{"data-testid":"slct-cnfg-slct",name:"payIntegID",id:"payIntegID",onChange:o=>g(o.target.name,o.target.value),className:A(C.input),value:e.payIntegID,children:[n.jsx("option",{value:"",children:"Select Config"}),z()]})}),n.jsx(M,{}),e.payIntegID&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:A(r.ml2,r.mr2,r.p1),children:[n.jsx(Y,{id:"sbscrptn",title:d("Subscription:"),action:G,isChecked:R,className:"mt-3"}),R&&n.jsx(l,{id:"pln-id",inpType:"text",title:d("Plan Id"),value:e.planId||"",action:o=>g("planId",o.target.value),cls:A(C.input)})]}),!R&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:A(r.ml2,r.mr2,r.p1),children:[n.jsx("b",{children:d("Language")}),n.jsx(u,{className:"w-10 btcd-paper-drpdwn mt-1",options:B(),onChange:o=>g("locale",o),defaultValue:e.language,largeData:!0,singleSelect:!0})]}),n.jsxs("div",{className:A(r.ml2,r.mr2,r.p1),children:[n.jsx("b",{children:d("Disable Card")}),n.jsx(u,{className:"w-10 btcd-paper-drpdwn mt-1 btcd-ttc",options:y(),onChange:o=>g("disableFunding",o),defaultValue:e.disableFunding})]}),n.jsxs("div",{className:A(r.ml2,r.mr2,r.p1),children:[n.jsx("b",{children:d("Amount Type")}),n.jsx("br",{}),n.jsx(N,{id:"amnt-typ-fxd",onChange:h,radio:!0,checked:!S,title:d("Fixed")}),n.jsx(N,{id:"amnt-typ-dynmc",onChange:h,radio:!0,checked:S,title:d("Dynamic"),value:"dynamic"})]}),!S&&n.jsx("div",{className:A(r.ml2,r.mr2,r.p1),children:n.jsx(l,{id:"amnt",cls:A(C.input),inpType:"number",title:d("Amount"),value:e.amount||"",action:o=>g("amount",o.target.value)})}),S&&n.jsxs("div",{className:A(r.ml2,r.mr2,r.p1),children:[n.jsx("b",{children:d("Select Amount Field")}),n.jsxs("select",{"data-testid":"slct-amnt-slct",onChange:o=>g(o.target.name,o.target.value),name:"amountFld",className:A(C.input),value:e.amountFld,children:[n.jsx("option",{value:"",children:d("Select Field")}),O()]})]}),n.jsxs("div",{className:A(r.ml2,r.mr2,r.p1),children:[n.jsx("b",{children:d("Shipping Amount")}),n.jsx("br",{}),n.jsx(N,{id:"shpng-amnt-fxd",onChange:p,radio:!0,checked:!t,title:d("Fixed")}),n.jsx(N,{id:"shpng-amnt-dynmc",onChange:p,radio:!0,checked:t,title:d("Dynamic"),value:"dynamic"})]}),!t&&n.jsx("div",{className:A(r.ml2,r.mr2,r.p1),children:n.jsx(l,{id:"spng-cst",cls:A(C.input),inpType:"number",title:d("Shipping Cost"),value:e.shipping||"",action:o=>g("shipping",o.target.value)})}),t&&n.jsxs("div",{className:A(r.ml2,r.mr2,r.p1),children:[n.jsx("b",{children:d("Select Shipping Amount Field")}),n.jsxs("select",{"data-testid":"slct-shpng-amnt",onChange:o=>g(o.target.name,o.target.value),name:"shippingFld",className:A(C.input),value:e.shippingFld,children:[n.jsx("option",{value:"",children:d("Select Field")}),O()]})]}),n.jsxs("div",{className:A(r.ml2,r.mr2,r.p1),children:[n.jsx("b",{children:d("Tax Amount Type")}),n.jsx("br",{}),n.jsx(N,{id:"tx-amnt-fxd",onChange:D,radio:!0,checked:!X,title:d("Fixed")}),n.jsx(N,{id:"tx-amnt-dynmc",onChange:D,radio:!0,checked:X,title:d("Dynamic"),value:"dynamic"})]}),!X&&n.jsx("div",{className:A(r.ml2,r.mr2,r.p1),children:n.jsx(l,{id:"tax",cls:A(C.input),inpType:"number",title:d("Tax (%)"),value:e.tax||"",action:o=>g("tax",o.target.value)})}),X&&n.jsxs("div",{className:A(r.ml2,r.mr2,r.p1),children:[n.jsx("b",{children:d("Select Amount Field")}),n.jsxs("select",{"data-testid":"slct-amnt-fld",onChange:o=>g(o.target.name,o.target.value),name:"taxFld",className:A(C.input),value:e.taxFld,children:[n.jsx("option",{value:"",children:d("Select Field")}),O()]})]}),n.jsx("div",{className:A(r.ml2,r.mr2,r.p1),children:n.jsxs("label",{htmlFor:"recap-thm",children:[n.jsx("b",{children:d("Currency")}),n.jsx("select",{"data-testid":"crncy-fld-slct",onChange:o=>g(o.target.name,o.target.value),name:"currency",value:e.currency,className:A(C.input),children:$.map(o=>n.jsx("option",{value:o.code,children:`${o.currency} - ${o.code}`},o.currency))})]})})]})]}),n.jsx(M,{}),n.jsx(Z,{})]})}const Q={payIntegID:"Payment Configuration Changed",planId:"Plan Id Changed",locale:"Language Selected",disableFunding:"Disabled Card",amount:"Amount",amountFld:"Amount Field Selected",shipping:"Shipping Cost",shippingFld:"Shipping Amount Field Selected",tax:"Tax changed",taxFld:"Tax Amount Field Selected",currency:"Currency Selected",description:"Other Description",descFld:"Description Field Selected"};export{pe as default};
