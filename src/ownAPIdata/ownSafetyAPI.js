const axios = require("axios");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Make sure this line is present

const app = express();
const PORT = 4000;

app.use(cors());

// Enable CORS for all origins
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/safety-rating", (req, res) => {
  res.status(200).send([
    {
      district: "ADILABAD",
      crimes: 4154,
    },
    {
      district: "ANANTAPUR",
      crimes: 4125,
    },
    {
      district: "CHITTOOR",
      crimes: 5818,
    },
    {
      district: "CUDDAPAH",
      crimes: 3140,
    },
    {
      district: "EAST GODAVARI",
      crimes: 6507,
    },
    {
      district: "GUNTAKAL RLY.",
      crimes: 287,
    },
    {
      district: "GUNTUR",
      crimes: 7848,
    },
    {
      district: "HYDERABAD CITY",
      crimes: 11831,
    },
    {
      district: "KARIMNAGAR",
      crimes: 5811,
    },
    {
      district: "KHAMMAM",
      crimes: 4582,
    },
    {
      district: "KRISHNA",
      crimes: 4779,
    },
    {
      district: "KURNOOL",
      crimes: 4581,
    },
    {
      district: "MAHABOOBNAGAR",
      crimes: 4819,
    },
    {
      district: "MEDAK",
      crimes: 3532,
    },
    {
      district: "NALGONDA",
      crimes: 5002,
    },
    {
      district: "NELLORE",
      crimes: 5245,
    },
    {
      district: "NIZAMABAD",
      crimes: 3621,
    },
    {
      district: "PRAKASHAM",
      crimes: 3678,
    },
    {
      district: "RANGA REDDY",
      crimes: 9867,
    },
    {
      district: "SECUNDERABAD RLY.",
      crimes: 439,
    },
    {
      district: "SRIKAKULAM",
      crimes: 2572,
    },
    {
      district: "VIJAYAWADA",
      crimes: 6733,
    },
    {
      district: "VIJAYAWADA RLY.",
      crimes: 320,
    },
    {
      district: "VISAKHA RURAL",
      crimes: 3183,
    },
    {
      district: "VISAKHAPATNAM",
      crimes: 3422,
    },
    {
      district: "VIZIANAGARAM",
      crimes: 2178,
    },
    {
      district: "WARANGAL",
      crimes: 6319,
    },
    {
      district: "WEST GODAVARI",
      crimes: 5696,
    },
    {
      district: "CHANGLANG",
      crimes: 163,
    },
    {
      district: "DIBANG VALLEY",
      crimes: 139,
    },
    {
      district: "KAMENG EAST",
      crimes: 126,
    },
    {
      district: "KAMENG WEST",
      crimes: 103,
    },
    {
      district: "LOHIT",
      crimes: 190,
    },
    {
      district: "PAPUM PARE",
      crimes: 498,
    },
    {
      district: "SIANG EAST",
      crimes: 243,
    },
    {
      district: "SIANG UPPER",
      crimes: 56,
    },
    {
      district: "SIANG WEST",
      crimes: 361,
    },
    {
      district: "SUBANSIRI LOWER",
      crimes: 148,
    },
    {
      district: "SUBANSIRI UPPER",
      crimes: 140,
    },
    {
      district: "TAWANG",
      crimes: 48,
    },
    {
      district: "TIRAP",
      crimes: 127,
    },
    {
      district: "BARPETA",
      crimes: 1778,
    },
    {
      district: "BONGAIGAON",
      crimes: 810,
    },
    {
      district: "C.I.D.",
      crimes: 8,
    },
    {
      district: "CACHAR",
      crimes: 3462,
    },
    {
      district: "DARRANG",
      crimes: 1454,
    },
    {
      district: "DHEMAJI",
      crimes: 652,
    },
    {
      district: "DHUBRI",
      crimes: 1505,
    },
    {
      district: "DIBRUGARH",
      crimes: 1565,
    },
    {
      district: "G.R.P.",
      crimes: 343,
    },
    {
      district: "GOALPARA",
      crimes: 873,
    },
    {
      district: "GOLAGHAT",
      crimes: 1166,
    },
    {
      district: "GUWAHATI CITY",
      crimes: 4373,
    },
    {
      district: "HAILAKANDI",
      crimes: 820,
    },
    {
      district: "JORHAT",
      crimes: 1190,
    },
    {
      district: "KAMRUP",
      crimes: 2011,
    },
    {
      district: "KARBI ANGLONG",
      crimes: 721,
    },
    {
      district: "KARIMGANJ",
      crimes: 843,
    },
    {
      district: "KOKRAJHAR",
      crimes: 776,
    },
    {
      district: "LAKHIMPUR",
      crimes: 1779,
    },
    {
      district: "MORIGAON",
      crimes: 731,
    },
    {
      district: "N.C.HILLS",
      crimes: 187,
    },
    {
      district: "NAGAON",
      crimes: 3202,
    },
    {
      district: "NALBARI",
      crimes: 1194,
    },
    {
      district: "R.P.O.",
      crimes: 101,
    },
    {
      district: "SIBSAGAR",
      crimes: 1643,
    },
    {
      district: "SONITPUR",
      crimes: 2309,
    },
    {
      district: "TINSUKIA",
      crimes: 1381,
    },
    {
      district: "ARARIA",
      crimes: 2069,
    },
    {
      district: "ARWAL",
      crimes: 591,
    },
    {
      district: "AURANGABAD",
      crimes: 1690,
    },
    {
      district: "BAGAHA",
      crimes: 912,
    },
    {
      district: "BANKA",
      crimes: 1386,
    },
    {
      district: "BEGUSARAI",
      crimes: 2628,
    },
    {
      district: "BETTIAH",
      crimes: 2796,
    },
    {
      district: "BHABHUA",
      crimes: 1368,
    },
    {
      district: "BHAGALPUR",
      crimes: 2634,
    },
    {
      district: "BHOJPUR",
      crimes: 2806,
    },
    {
      district: "BUXAR",
      crimes: 1674,
    },
    {
      district: "DARBHANGA",
      crimes: 2572,
    },
    {
      district: "GAYA",
      crimes: 3182,
    },
    {
      district: "GOPALGANJ",
      crimes: 2098,
    },
    {
      district: "JAMALPUR",
      crimes: 225,
    },
    {
      district: "JAMUI",
      crimes: 1046,
    },
    {
      district: "JEHANABAD",
      crimes: 1353,
    },
    {
      district: "KATIHAR",
      crimes: 1811,
    },
    {
      district: "KATIHAR",
      crimes: 417,
    },
    {
      district: "KHAGARIA",
      crimes: 895,
    },
    {
      district: "KISHANGANJ",
      crimes: 897,
    },
    {
      district: "LAKHISARAI",
      crimes: 754,
    },
    {
      district: "MADHEPURA",
      crimes: 1062,
    },
    {
      district: "MADHUBANI",
      crimes: 2897,
    },
    {
      district: "MOTIHARI",
      crimes: 3881,
    },
    {
      district: "MUNGER",
      crimes: 1758,
    },
    {
      district: "MUZAFFARPUR",
      crimes: 4212,
    },
    {
      district: "MUZAFFARPUR RLY.",
      crimes: 538,
    },
    {
      district: "NALANDA",
      crimes: 3479,
    },
    {
      district: "NAUGACHIA",
      crimes: 570,
    },
    {
      district: "NAWADAH",
      crimes: 1515,
    },
    {
      district: "PATNA",
      crimes: 8583,
    },
    {
      district: "PATNA RLY.",
      crimes: 1127,
    },
    {
      district: "PURNEA",
      crimes: 2054,
    },
    {
      district: "ROHTAS",
      crimes: 2961,
    },
    {
      district: "SAHARSA",
      crimes: 1066,
    },
    {
      district: "SAMASTIPUR",
      crimes: 2853,
    },
    {
      district: "SARAN",
      crimes: 3442,
    },
    {
      district: "SHEIKHPURA",
      crimes: 804,
    },
    {
      district: "SHEOHAR",
      crimes: 428,
    },
    {
      district: "SITAMARHI",
      crimes: 1797,
    },
    {
      district: "SIWAN",
      crimes: 1853,
    },
    {
      district: "SUPAUL",
      crimes: 1672,
    },
    {
      district: "VAISHALI",
      crimes: 4076,
    },
    {
      district: "BALRAMPUR",
      crimes: 235,
    },
    {
      district: "BILASPUR",
      crimes: 4353,
    },
    {
      district: "BIZAPUR",
      crimes: 86,
    },
    {
      district: "DANTEWARA",
      crimes: 739,
    },
    {
      district: "DHAMTARI",
      crimes: 996,
    },
    {
      district: "DURG",
      crimes: 6544,
    },
    {
      district: "GRP RAIPUR",
      crimes: 315,
    },
    {
      district: "JAGDALPUR",
      crimes: 1812,
    },
    {
      district: "JANJGIR",
      crimes: 2059,
    },
    {
      district: "JASHPUR",
      crimes: 719,
    },
    {
      district: "KANKER",
      crimes: 760,
    },
    {
      district: "KAWARDHA",
      crimes: 685,
    },
    {
      district: "KORBA",
      crimes: 2112,
    },
    {
      district: "KORIYA",
      crimes: 1644,
    },
    {
      district: "MAHASAMUND",
      crimes: 1185,
    },
    {
      district: "RAIGARH",
      crimes: 1650,
    },
    {
      district: "RAIPUR",
      crimes: 6786,
    },
    {
      district: "RAJNANDGAON",
      crimes: 2650,
    },
    {
      district: "SARGUJA",
      crimes: 3130,
    },
    {
      district: "GOA",
      crimes: 1271,
    },

    {
      district: "AHMEDABAD",
      crimes: 13496,
    },
    {
      district: "AHWA-DANG",
      crimes: 147,
    },
    {
      district: "AMRELI",
      crimes: 2191,
    },
    {
      district: "ANAND",
      crimes: 3879,
    },
    {
      district: "BHARUCH",
      crimes: 3052,
    },
    {
      district: "BHAVNAGAR",
      crimes: 5088,
    },
    {
      district: "DAHOD",
      crimes: 1717,
    },
    {
      district: "GANDHINAGAR",
      crimes: 3478,
    },
    {
      district: "HIMATNAGAR",
      crimes: 4013,
    },
    {
      district: "JAMNAGAR",
      crimes: 3857,
    },
    {
      district: "JUNAGADH",
      crimes: 5186,
    },
    {
      district: "KHEDA",
      crimes: 3851,
    },
    {
      district: "KUTCH",
      crimes: 3355,
    },
    {
      district: "MEHSANA",
      crimes: 5175,
    },
    {
      district: "NARMADA",
      crimes: 536,
    },
    {
      district: "NAVSARI",
      crimes: 1404,
    },
    {
      district: "PALANPUR",
      crimes: 3887,
    },
    {
      district: "PANCHMAHAL",
      crimes: 2535,
    },
    {
      district: "PATAN",
      crimes: 2447,
    },
    {
      district: "PORBANDAR",
      crimes: 1215,
    },
    {
      district: "RAJKOT",
      crimes: 4774,
    },
    {
      district: "SURAT",
      crimes: 3995,
    },
    {
      district: "SURENDRANAGAR",
      crimes: 3113,
    },
    {
      district: "VADODARA",
      crimes: 5047,
    },
    {
      district: "VALSAD",
      crimes: 3109,
    },
    {
      district: "W.RLY",
      crimes: 1421,
    },
    {
      district: "AMBALA",
      crimes: 2346,
    },
    {
      district: "BHIWANI",
      crimes: 1855,
    },
    {
      district: "FARIDABAD",
      crimes: 5808,
    },
    {
      district: "FATEHABAD",
      crimes: 1214,
    },
    {
      district: "GRP",
      crimes: 615,
    },
    {
      district: "GURGAON",
      crimes: 3502,
    },
    {
      district: "HISSAR",
      crimes: 2830,
    },
    {
      district: "JHAJJAR",
      crimes: 1501,
    },
    {
      district: "JIND",
      crimes: 1452,
    },
    {
      district: "KAITHAL",
      crimes: 1195,
    },
    {
      district: "KARNAL",
      crimes: 2383,
    },
    {
      district: "KURUKSHETRA",
      crimes: 1753,
    },
    {
      district: "MAHENDRAGARH",
      crimes: 1169,
    },
    {
      district: "PANCHKULA",
      crimes: 1054,
    },
    {
      district: "PANIPAT",
      crimes: 1895,
    },
    {
      district: "REWARI",
      crimes: 1214,
    },
    {
      district: "ROHTAK",
      crimes: 1856,
    },
    {
      district: "SIRSA",
      crimes: 1768,
    },
    {
      district: "SONIPAT",
      crimes: 1944,
    },
    {
      district: "YAMUNANAGAR",
      crimes: 1405,
    },
    {
      district: "BILASPUR",
      crimes: 1074,
    },
    {
      district: "CHAMBA",
      crimes: 555,
    },
    {
      district: "G.R.P.",
      crimes: 4,
    },
    {
      district: "HAMIRPUR",
      crimes: 747,
    },
    {
      district: "KANGRA",
      crimes: 2035,
    },
    {
      district: "KINNAUR",
      crimes: 147,
    },
    {
      district: "KULLU",
      crimes: 630,
    },
    {
      district: "LAHAUL-SPITI",
      crimes: 50,
    },
    {
      district: "MANDI",
      crimes: 1747,
    },
    {
      district: "SHIMLA",
      crimes: 1964,
    },
    {
      district: "SIRMAUR",
      crimes: 703,
    },
    {
      district: "SOLAN",
      crimes: 1130,
    },
    {
      district: "UNA",
      crimes: 713,
    },
    {
      district: "ANANTNAG",
      crimes: 1104,
    },
    {
      district: "AWANTIPORA",
      crimes: 316,
    },
    {
      district: "BARAMULLA",
      crimes: 1533,
    },
    {
      district: "BORDER",
      crimes: 708,
    },
    {
      district: "BUDGAM",
      crimes: 812,
    },
    {
      district: "CRIME JAMMU",
      crimes: 27,
    },
    {
      district: "CRIME SRINAGAR",
      crimes: 69,
    },
    {
      district: "DODA",
      crimes: 627,
    },
    {
      district: "GANDERBAL",
      crimes: 395,
    },
    {
      district: "JAMMU",
      crimes: 3607,
    },
    {
      district: "KARGIL",
      crimes: 82,
    },
    {
      district: "KATHUA",
      crimes: 817,
    },
    {
      district: "KULGAM",
      crimes: 635,
    },
    {
      district: "KUPWARA",
      crimes: 1027,
    },
    {
      district: "LEH",
      crimes: 137,
    },
    {
      district: "POONCH",
      crimes: 766,
    },
    {
      district: "PULWAMA",
      crimes: 883,
    },
    {
      district: "RAILWAYS",
      crimes: 17,
    },
    {
      district: "RAJOURI",
      crimes: 965,
    },
    {
      district: "RAMBAN",
      crimes: 537,
    },
    {
      district: "REASI",
      crimes: 389,
    },
    {
      district: "SRINAGAR",
      crimes: 3042,
    },
    {
      district: "UDHAMPUR",
      crimes: 1010,
    },
    {
      district: "TOTAL",
      crimes: 19505,
    },
    {
      district: "BOKARO",
      crimes: 1936,
    },
    {
      district: "CHAIBASA",
      crimes: 669,
    },
    {
      district: "CHATRA",
      crimes: 748,
    },
    {
      district: "DEOGHAR",
      crimes: 1106,
    },
    {
      district: "DHANBAD",
      crimes: 2916,
    },
    {
      district: "DHANBAD RLY.",
      crimes: 360,
    },
    {
      district: "DUMKA",
      crimes: 1016,
    },
    {
      district: "GARHWA",
      crimes: 788,
    },
    {
      district: "GIRIDIH",
      crimes: 1918,
    },
    {
      district: "GODDA",
      crimes: 1030,
    },
    {
      district: "GUMLA",
      crimes: 658,
    },
    {
      district: "HAZARIBAGH",
      crimes: 2498,
    },
    {
      district: "JAMSHEDPUR",
      crimes: 2712,
    },
    {
      district: "JAMSHEDPUR RLY.",
      crimes: 148,
    },
    {
      district: "JAMTARA",
      crimes: 473,
    },
    {
      district: "KODERMA",
      crimes: 667,
    },
    {
      district: "LATEHAR",
      crimes: 380,
    },
    {
      district: "LOHARDAGGA",
      crimes: 311,
    },
    {
      district: "PAKUR",
      crimes: 483,
    },
    {
      district: "PALAMU",
      crimes: 1461,
    },
    {
      district: "RANCHI",
      crimes: 1602,
    },
    {
      district: "SAHEBGANJ",
      crimes: 628,
    },
    {
      district: "SARAIKELA",
      crimes: 692,
    },
    {
      district: "SIMDEGA",
      crimes: 247,
    },
    {
      district: "BAGALKOT",
      crimes: 1710,
    },
    {
      district: "BANGALORE",
      crimes: 27254,
    },
    {
      district: "BELGAUM",
      crimes: 5053,
    },
    {
      district: "BELLARY",
      crimes: 3229,
    },
    {
      district: "BIDAR",
      crimes: 4371,
    },
    {
      district: "BIJAPUR",
      crimes: 2941,
    },
    {
      district: "CHAMARAJNAGAR",
      crimes: 1390,
    },
    {
      district: "CHICKMAGALUR",
      crimes: 2766,
    },
    {
      district: "CHITRADURGA",
      crimes: 2691,
    },
    {
      district: "DAKSHIN KANNADA",
      crimes: 3047,
    },
    {
      district: "DAVANAGERE",
      crimes: 3301,
    },
    {
      district: "DHARWAD",
      crimes: 1902,
    },
    {
      district: "GADAG",
      crimes: 899,
    },
    {
      district: "GULBARGA",
      crimes: 4169,
    },
    {
      district: "HASSAN",
      crimes: 4039,
    },
    {
      district: "HAVERI",
      crimes: 2211,
    },
    {
      district: "K.G.F.",
      crimes: 906,
    },
    {
      district: "KODAGU",
      crimes: 1301,
    },
    {
      district: "KOLAR",
      crimes: 3230,
    },
    {
      district: "KOPPAL",
      crimes: 1406,
    },
    {
      district: "MANDYA",
      crimes: 4807,
    },
    {
      district: "MYSORE",
      crimes: 2900,
    },
    {
      district: "RAICHUR",
      crimes: 2384,
    },
    {
      district: "RAILWAYS",
      crimes: 583,
    },
    {
      district: "SHIMOGA",
      crimes: 4178,
    },
    {
      district: "TUMKUR",
      crimes: 4141,
    },
    {
      district: "UDUPI",
      crimes: 1959,
    },
    {
      district: "UTTAR KANNADA",
      crimes: 2319,
    },
    {
      district: "ALAPUZHA",
      crimes: 7319,
    },
    {
      district: "CBCID",
      crimes: 250,
    },
    {
      district: "ERNAKULAM",
      crimes: 14843,
    },
    {
      district: "IDUKKI",
      crimes: 5421,
    },
    {
      district: "KANNUR",
      crimes: 5888,
    },
    {
      district: "KASARGOD",
      crimes: 3116,
    },
    {
      district: "KOLLAM",
      crimes: 9282,
    },
    {
      district: "KOTTAYAM",
      crimes: 7082,
    },
    {
      district: "KOZHIKODE",
      crimes: 8394,
    },
    {
      district: "MALAPPURAM",
      crimes: 7428,
    },
    {
      district: "PALAKKAD",
      crimes: 6516,
    },
    {
      district: "PATHANAMTHITTA",
      crimes: 4100,
    },
    {
      district: "RAILWAYS",
      crimes: 289,
    },
    {
      district: "THRISSUR",
      crimes: 10465,
    },
    {
      district: "TRIVANDRUM",
      crimes: 11368,
    },
    {
      district: "WAYANADU",
      crimes: 2086,
    },
    {
      district: "BALAGHAT",
      crimes: 2925,
    },
    {
      district: "BARWANI",
      crimes: 2008,
    },
    {
      district: "BETUL",
      crimes: 2637,
    },
    {
      district: "BHIND",
      crimes: 3361,
    },
    {
      district: "BHOPAL",
      crimes: 13708,
    },
    {
      district: "CHHATARPUR",
      crimes: 3361,
    },
    {
      district: "CHHINDWARA",
      crimes: 3672,
    },
    {
      district: "DAMOH",
      crimes: 2879,
    },
    {
      district: "DATIYA",
      crimes: 1866,
    },
    {
      district: "DEWAS",
      crimes: 5039,
    },
    {
      district: "DHAR",
      crimes: 4910,
    },
    {
      district: "DINDORI",
      crimes: 821,
    },
    {
      district: "GUNA",
      crimes: 6001,
    },
    {
      district: "GWALIOR",
      crimes: 6846,
    },
    {
      district: "HARDA",
      crimes: 746,
    },
    {
      district: "HOSHANGABAD",
      crimes: 2741,
    },
    {
      district: "INDORE",
      crimes: 13063,
    },
    {
      district: "JABALPUR",
      crimes: 8333,
    },
    {
      district: "JHABUA",
      crimes: 3416,
    },
    {
      district: "KATNI",
      crimes: 2285,
    },
    {
      district: "KHANDWA",
      crimes: 3911,
    },
    {
      district: "KHARGON",
      crimes: 3499,
    },
    {
      district: "MANDLA",
      crimes: 2122,
    },
    {
      district: "MANDSAUR",
      crimes: 2616,
    },
    {
      district: "MORENA",
      crimes: 5229,
    },
    {
      district: "NARSINGHPUR",
      crimes: 2311,
    },
    {
      district: "NEEMUCH",
      crimes: 2208,
    },
    {
      district: "PANNA",
      crimes: 1921,
    },
    {
      district: "RAISEN",
      crimes: 3009,
    },
    {
      district: "RAJGARH",
      crimes: 3718,
    },
    {
      district: "RATLAM",
      crimes: 3342,
    },
    {
      district: "REWA",
      crimes: 4603,
    },
    {
      district: "SAGAR",
      crimes: 7681,
    },
    {
      district: "SATNA",
      crimes: 4763,
    },
    {
      district: "SEONI",
      crimes: 2143,
    },
    {
      district: "SHAHDOL",
      crimes: 4162,
    },
    {
      district: "SHAJAPUR",
      crimes: 3663,
    },
    {
      district: "SHEOPUR",
      crimes: 1053,
    },
    {
      district: "SHIVPURI",
      crimes: 4321,
    },
    {
      district: "SIDHI",
      crimes: 3508,
    },
    {
      district: "SIHORE",
      crimes: 3389,
    },
    {
      district: "TIKAMGARH",
      crimes: 3078,
    },
    {
      district: "UJJAIN",
      crimes: 7641,
    },
    {
      district: "UMARIYA",
      crimes: 1849,
    },
    {
      district: "VIDISHA",
      crimes: 3635,
    },
    {
      district: "AHMEDNAGAR",
      crimes: 4391,
    },
    {
      district: "AKOLA",
      crimes: 4020,
    },
    {
      district: "AMRAVATI",
      crimes: 2837,
    },
    {
      district: "AURANGABAD",
      crimes: 2351,
    },
    {
      district: "BEED",
      crimes: 3644,
    },
    {
      district: "BHANDARA",
      crimes: 2252,
    },
    {
      district: "BULDHANA",
      crimes: 3701,
    },
    {
      district: "CHANDRAPUR",
      crimes: 3123,
    },
    {
      district: "DHULE",
      crimes: 2040,
    },
    {
      district: "GADCHIROLI",
      crimes: 1364,
    },
    {
      district: "GONDIA",
      crimes: 2006,
    },
    {
      district: "HINGOLI",
      crimes: 1841,
    },
    {
      district: "JALGAON",
      crimes: 4014,
    },
    {
      district: "JALNA",
      crimes: 2529,
    },
    {
      district: "KOLHAPUR",
      crimes: 3162,
    },
    {
      district: "LATUR",
      crimes: 3044,
    },
    {
      district: "MUMBAI",
      crimes: 28968,
    },
    {
      district: "NAGPUR COMMR.",
      crimes: 9912,
    },
    {
      district: "NANDED",
      crimes: 5348,
    },
    {
      district: "NANDURBAR",
      crimes: 1079,
    },
    {
      district: "NASHIK",
      crimes: 4880,
    },
    {
      district: "NAVI MUMBAI",
      crimes: 3063,
    },
    {
      district: "OSMANABAD",
      crimes: 2702,
    },
    {
      district: "PARBHANI",
      crimes: 2475,
    },
    {
      district: "PUNE",
      crimes: 8936,
    },
    {
      district: "RAIGAD",
      crimes: 2218,
    },
    {
      district: "RATNAGIRI",
      crimes: 1431,
    },
    {
      district: "SANGLI",
      crimes: 2999,
    },
    {
      district: "SATARA",
      crimes: 3465,
    },
    {
      district: "SINDHUDURG",
      crimes: 821,
    },
    {
      district: "SOLAPUR",
      crimes: 1567,
    },
    {
      district: "THANE",
      crimes: 6616,
    },
    {
      district: "THANE RURAL",
      crimes: 3780,
    },
    {
      district: "WARDHA",
      crimes: 3443,
    },
    {
      district: "WASHIM",
      crimes: 1826,
    },
    {
      district: "YAVATMAL",
      crimes: 4157,
    },
    {
      district: "BISHNUPUR",
      crimes: 226,
    },
    {
      district: "CHANDEL",
      crimes: 74,
    },
    {
      district: "CHURACHANDPUR",
      crimes: 132,
    },
    {
      district: "IMPHAL(EAST)",
      crimes: 337,
    },
    {
      district: "IMPHAL(WEST)",
      crimes: 1084,
    },
    {
      district: "SENAPATI",
      crimes: 176,
    },
    {
      district: "TAMENGLONG",
      crimes: 14,
    },
    {
      district: "THOUBAL",
      crimes: 403,
    },
    {
      district: "UKHRUL",
      crimes: 43,
    },
    {
      district: "TOTAL",
      crimes: 2489,
    },
    {
      district: "GARO HILLS EAST",
      crimes: 134,
    },
    {
      district: "GARO HILLS SOUTH",
      crimes: 49,
    },
    {
      district: "GARO HILLS WEST",
      crimes: 235,
    },
    {
      district: "JAINTIA HILLS",
      crimes: 214,
    },
    {
      district: "KHASI HILLS EAST",
      crimes: 754,
    },
    {
      district: "KHASI HILLS WEST",
      crimes: 125,
    },
    {
      district: "RI-BHOI",
      crimes: 176,
    },
    {
      district: "TOTAL",
      crimes: 1687,
    },
    {
      district: "AIZAWL",
      crimes: 1126,
    },
    {
      district: "CHAMPHAI",
      crimes: 203,
    },
    {
      district: "KOLASIB",
      crimes: 216,
    },
    {
      district: "LAWNGTLAI",
      crimes: 160,
    },
    {
      district: "LUNGLEI",
      crimes: 229,
    },
    {
      district: "MAMIT",
      crimes: 74,
    },
    {
      district: "SAIHA",
      crimes: 182,
    },
    {
      district: "SERCHHIP",
      crimes: 56,
    },
    {
      district: "TOTAL",
      crimes: 2246,
    },
    {
      district: "DIMAPUR",
      crimes: 464,
    },
    {
      district: "KIPHIRE",
      crimes: 18,
    },
    {
      district: "KOHIMA",
      crimes: 335,
    },
    {
      district: "MOKOKCHUNG",
      crimes: 93,
    },
    {
      district: "MON",
      crimes: 57,
    },
    {
      district: "PEREN",
      crimes: 28,
    },
    {
      district: "PHEK",
      crimes: 51,
    },
    {
      district: "TUENSANG",
      crimes: 41,
    },
    {
      district: "WOKHA",
      crimes: 93,
    },
    {
      district: "ZUNHEBOTO",
      crimes: 54,
    },
    {
      district: "TOTAL",
      crimes: 1234,
    },
    {
      district: "ANGUL",
      crimes: 1461,
    },
    {
      district: "BALASORE",
      crimes: 2341,
    },
    {
      district: "BARAGARH",
      crimes: 1244,
    },
    {
      district: "BERHAMPUR",
      crimes: 1270,
    },
    {
      district: "BHADRAK",
      crimes: 1354,
    },
    {
      district: "BOLANGIR",
      crimes: 1323,
    },
    {
      district: "BOUDH",
      crimes: 415,
    },
    {
      district: "CUTTACK",
      crimes: 4258,
    },
    {
      district: "DEOGARH",
      crimes: 363,
    },
    {
      district: "DHENKANAL",
      crimes: 1156,
    },
    {
      district: "GAJAPATI",
      crimes: 433,
    },
    {
      district: "GANJAM",
      crimes: 1790,
    },
    {
      district: "JAGATSINGHPUR",
      crimes: 1314,
    },
    {
      district: "JAJPUR",
      crimes: 1522,
    },
    {
      district: "JHARSUGUDA",
      crimes: 750,
    },
    {
      district: "KALAHANDI",
      crimes: 1269,
    },
    {
      district: "KANDHAMAL",
      crimes: 1000,
    },
    {
      district: "KENDRAPARA",
      crimes: 1057,
    },
    {
      district: "KEONJHAR",
      crimes: 1922,
    },
    {
      district: "KHURDA",
      crimes: 5076,
    },
    {
      district: "KORAPUT",
      crimes: 1563,
    },
    {
      district: "MALKANGIR",
      crimes: 496,
    },
    {
      district: "MAYURBHANJ",
      crimes: 2029,
    },
    {
      district: "NAYAGARH",
      crimes: 852,
    },
    {
      district: "NOWRANGPUR",
      crimes: 687,
    },
    {
      district: "NUAPADA",
      crimes: 466,
    },
    {
      district: "PURI",
      crimes: 2202,
    },
    {
      district: "RAYAGADA",
      crimes: 850,
    },
    {
      district: "ROURKELA",
      crimes: 1213,
    },
    {
      district: "SAMBALPUR",
      crimes: 2159,
    },
    {
      district: "SONEPUR",
      crimes: 444,
    },
    {
      district: "SRP(CUTTACK)",
      crimes: 461,
    },
    {
      district: "SRP(ROURKELA)",
      crimes: 269,
    },
    {
      district: "SUNDARGARH",
      crimes: 1652,
    },
    {
      district: "TOTAL",
      crimes: 46661,
    },
    {
      district: "AMRITSAR",
      crimes: 1244,
    },
    {
      district: "BARNALA",
      crimes: 501,
    },
    {
      district: "BATALA",
      crimes: 393,
    },
    {
      district: "BHATINDA",
      crimes: 1080,
    },
    {
      district: "FARIDKOT",
      crimes: 463,
    },
    {
      district: "FATEHGARH SAHIB",
      crimes: 671,
    },
    {
      district: "FEROZEPUR",
      crimes: 1110,
    },
    {
      district: "G.R.P",
      crimes: 482,
    },
    {
      district: "GURDASPUR",
      crimes: 580,
    },
    {
      district: "HOSHIARPUR",
      crimes: 1237,
    },
    {
      district: "JAGRAON",
      crimes: 633,
    },
    {
      district: "JALANDHAR",
      crimes: 2461,
    },
    {
      district: "KAPURTHALA",
      crimes: 755,
    },
    {
      district: "KHANNA",
      crimes: 486,
    },
    {
      district: "LUDHIANA",
      crimes: 3785,
    },
    {
      district: "MAJITHA",
      crimes: 500,
    },
    {
      district: "MANSA",
      crimes: 425,
    },
    {
      district: "MOGA",
      crimes: 754,
    },
    {
      district: "MUKTSAR",
      crimes: 432,
    },
    {
      district: "NAWAN SHAHR",
      crimes: 612,
    },
    {
      district: "PATIALA",
      crimes: 5973,
    },
    {
      district: "ROPAR",
      crimes: 1278,
    },
    {
      district: "SANGRUR",
      crimes: 1285,
    },
    {
      district: "TARN TARAN",
      crimes: 634,
    },
    {
      district: "TOTAL",
      crimes: 27774,
    },
    {
      district: "AJMER",
      crimes: 6618,
    },
    {
      district: "ALWAR",
      crimes: 7023,
    },
    {
      district: "BANSWARA",
      crimes: 3508,
    },
    {
      district: "BARAN",
      crimes: 4333,
    },
    {
      district: "BARMER",
      crimes: 2369,
    },
    {
      district: "BHARATPUR",
      crimes: 7291,
    },
    {
      district: "BHILWARA",
      crimes: 6335,
    },
    {
      district: "BIKANER",
      crimes: 3952,
    },
    {
      district: "BUNDI",
      crimes: 4078,
    },
    {
      district: "CHITTORGARH",
      crimes: 7062,
    },
    {
      district: "CHURU",
      crimes: 2880,
    },
    {
      district: "DAUSA",
      crimes: 3546,
    },
    {
      district: "DHOLPUR",
      crimes: 3096,
    },
    {
      district: "DUNGARPUR",
      crimes: 1997,
    },
    {
      district: "G.R.P.",
      crimes: 962,
    },
    {
      district: "GANGANAGAR",
      crimes: 5610,
    },
    {
      district: "HANUMANGARH",
      crimes: 3956,
    },
    {
      district: "JAIPUR",
      crimes: 20604,
    },
    {
      district: "JAISALMER",
      crimes: 1020,
    },
    {
      district: "JALORE",
      crimes: 2507,
    },
    {
      district: "JHALAWAR",
      crimes: 3533,
    },
    {
      district: "JHUNJHUNU",
      crimes: 4102,
    },
    {
      district: "JODHPUR",
      crimes: 6535,
    },
    {
      district: "KARAULI",
      crimes: 2908,
    },
    {
      district: "KOTA",
      crimes: 7383,
    },
    {
      district: "NAGAUR",
      crimes: 4575,
    },
    {
      district: "PALI",
      crimes: 4640,
    },
    {
      district: "RAJSAMAND",
      crimes: 2872,
    },
    {
      district: "SAWAI MADHOPUR",
      crimes: 3094,
    },
    {
      district: "SIKAR",
      crimes: 4333,
    },
    {
      district: "SIROHI",
      crimes: 2185,
    },
    {
      district: "TONK",
      crimes: 3913,
    },
    {
      district: "UDAIPUR",
      crimes: 6365,
    },
    {
      district: "TOTAL",
      crimes: 155185,
    },
    {
      district: "EAST",
      crimes: 279,
    },
    {
      district: "NORTH",
      crimes: 36,
    },
    {
      district: "SOUTH",
      crimes: 79,
    },
    {
      district: "WEST",
      crimes: 50,
    },
    {
      district: "TOTAL",
      crimes: 444,
    },
    {
      district: "ARIYALUR",
      crimes: 1754,
    },
    {
      district: "CHENGAI",
      crimes: 7035,
    },
    {
      district: "CHENNAI",
      crimes: 7292,
    },
    {
      district: "CHENNAI RLY.",
      crimes: 493,
    },
    {
      district: "COIMBATORE RURAL",
      crimes: 9115,
    },
    {
      district: "COIMBATORE URBAN",
      crimes: 3490,
    },
    {
      district: "CUDDALORE",
      crimes: 8018,
    },
    {
      district: "DHARMAPURI",
      crimes: 5123,
    },
    {
      district: "DINDIGUL",
      crimes: 4657,
    },
    {
      district: "ERODE",
      crimes: 6631,
    },
    {
      district: "KANCHIPURAM",
      crimes: 5840,
    },
    {
      district: "KANYAKUMARI",
      crimes: 3732,
    },
    {
      district: "KARUR",
      crimes: 2245,
    },
    {
      district: "MADURAI RURAL",
      crimes: 4877,
    },
    {
      district: "MADURAI URBAN",
      crimes: 4161,
    },
    {
      district: "NAGAPATTINAM",
      crimes: 3724,
    },
    {
      district: "NAMAKKAL",
      crimes: 2659,
    },
    {
      district: "NILGIRIS",
      crimes: 1330,
    },
    {
      district: "PERAMBALUR",
      crimes: 1100,
    },
    {
      district: "PUDUKOTTAI",
      crimes: 3416,
    },
    {
      district: "RAMNATHAPURAM",
      crimes: 3234,
    },
    {
      district: "SALEM RURAL",
      crimes: 4225,
    },
    {
      district: "SALEM URBAN",
      crimes: 1846,
    },
    {
      district: "SIVAGANGAI",
      crimes: 3030,
    },
    {
      district: "THANJAVUR",
      crimes: 3506,
    },
    {
      district: "THENI",
      crimes: 2646,
    },
    {
      district: "THIRUNELVELI RURAL",
      crimes: 6350,
    },
    {
      district: "THIRUNELVELI URBAN",
      crimes: 1569,
    },
    {
      district: "THIRUVALLUR",
      crimes: 3468,
    },
    {
      district: "THIRUVANNAMALAI",
      crimes: 4749,
    },
    {
      district: "THIRUVARUR",
      crimes: 3043,
    },
    {
      district: "THOOTHUGUDI",
      crimes: 5290,
    },
    {
      district: "TRICHY RLY.",
      crimes: 206,
    },
    {
      district: "TRICHY RURAL",
      crimes: 3104,
    },
    {
      district: "TRICHY URBAN",
      crimes: 2279,
    },
    {
      district: "VELLORE",
      crimes: 7941,
    },
    {
      district: "VILLUPURAM",
      crimes: 7120,
    },
    {
      district: "VIRUDHUNAGAR",
      crimes: 4503,
    },
    {
      district: "TOTAL",
      crimes: 154801,
    },
    {
      district: "DHALAI",
      crimes: 205,
    },
    {
      district: "NORTH",
      crimes: 566,
    },
    {
      district: "SOUTH",
      crimes: 586,
    },
    {
      district: "WEST",
      crimes: 1444,
    },
    {
      district: "TOTAL",
      crimes: 2801,
    },
    {
      district: "AGRA",
      crimes: 6662,
    },
    {
      district: "ALIGARH",
      crimes: 4688,
    },
    {
      district: "ALLAHABAD",
      crimes: 6096,
    },
    {
      district: "AMBEDKAR NAGAR",
      crimes: 1379,
    },
    {
      district: "AURAIYA",
      crimes: 1137,
    },
    {
      district: "AZAMGARH",
      crimes: 2247,
    },
    {
      district: "BADAUN",
      crimes: 3064,
    },
    {
      district: "BAGHPAT",
      crimes: 1355,
    },
    {
      district: "BAHRAICH",
      crimes: 1316,
    },
    {
      district: "BALLIA",
      crimes: 1934,
    },
    {
      district: "BALRAMPUR",
      crimes: 734,
    },
    {
      district: "BANDA",
      crimes: 1722,
    },
    {
      district: "BARABANKI",
      crimes: 2578,
    },
    {
      district: "BAREILLY",
      crimes: 5269,
    },
    {
      district: "BASTI",
      crimes: 1753,
    },
    {
      district: "BIJNOR",
      crimes: 2487,
    },
    {
      district: "BULANDSHAHAR",
      crimes: 3972,
    },
    {
      district: "CHANDOLI",
      crimes: 765,
    },
    {
      district: "CHITRAKOOT DHAM",
      crimes: 392,
    },
    {
      district: "DEORIA",
      crimes: 2402,
    },
    {
      district: "ETAH",
      crimes: 4521,
    },
    {
      district: "ETAWAH",
      crimes: 1942,
    },
    {
      district: "FAIZABAD",
      crimes: 1967,
    },
    {
      district: "FATEHGARH",
      crimes: 1694,
    },
    {
      district: "FATEHPUR",
      crimes: 1946,
    },
    {
      district: "FIROZABAD",
      crimes: 2726,
    },
    {
      district: "G.R.P.",
      crimes: 4352,
    },
    {
      district: "GAUTAMBUDH NAGAR",
      crimes: 2443,
    },
    {
      district: "GHAZIABAD",
      crimes: 5079,
    },
    {
      district: "GHAZIPUR",
      crimes: 1308,
    },
    {
      district: "GONDA",
      crimes: 1719,
    },
    {
      district: "GORAKHPUR",
      crimes: 2598,
    },
    {
      district: "HAMIRPUR",
      crimes: 1031,
    },
    {
      district: "HARDOI",
      crimes: 3078,
    },
    {
      district: "HATHRAS",
      crimes: 2216,
    },
    {
      district: "J.P.NAGAR",
      crimes: 1665,
    },
    {
      district: "JALAUN",
      crimes: 1778,
    },
    {
      district: "JAUNPUR",
      crimes: 1993,
    },
    {
      district: "JHANSI",
      crimes: 1981,
    },
    {
      district: "KANNAUJ",
      crimes: 1254,
    },
    {
      district: "KANPUR DEHAT",
      crimes: 1581,
    },
    {
      district: "KANPUR NAGAR",
      crimes: 6808,
    },
    {
      district: "KAUSHAMBI",
      crimes: 1456,
    },
    {
      district: "KHIRI",
      crimes: 3754,
    },
    {
      district: "KUSHI NAGAR",
      crimes: 1456,
    },
    {
      district: "LALITPUR",
      crimes: 773,
    },
    {
      district: "LUCKNOW",
      crimes: 9205,
    },
    {
      district: "MAHARAJGANJ",
      crimes: 861,
    },
    {
      district: "MAHOBA",
      crimes: 728,
    },
    {
      district: "MAINPURI",
      crimes: 2147,
    },
    {
      district: "MATHURA",
      crimes: 2990,
    },
    {
      district: "MAU",
      crimes: 1331,
    },
    {
      district: "MEERUT",
      crimes: 5377,
    },
    {
      district: "MIRZAPUR",
      crimes: 1185,
    },
    {
      district: "MORADABAD",
      crimes: 3445,
    },
    {
      district: "MUZAFFARNAGAR",
      crimes: 4042,
    },
    {
      district: "PILIBHIT",
      crimes: 2239,
    },
    {
      district: "PRATAPGARH",
      crimes: 2421,
    },
    {
      district: "RAIBAREILLY",
      crimes: 2544,
    },
    {
      district: "RAMPUR",
      crimes: 1644,
    },
    {
      district: "SAHARANPUR",
      crimes: 2869,
    },
    {
      district: "SANT KABIRNAGAR",
      crimes: 599,
    },
    {
      district: "SHAHJAHANPUR",
      crimes: 2941,
    },
    {
      district: "SHRAWASTI",
      crimes: 747,
    },
    {
      district: "SIDHARTHNAGAR",
      crimes: 834,
    },
    {
      district: "SITAPUR",
      crimes: 4732,
    },
    {
      district: "SONBHADRA",
      crimes: 595,
    },
    {
      district: "ST.RAVIDASNAGAR",
      crimes: 590,
    },
    {
      district: "SULTANPUR",
      crimes: 2540,
    },
    {
      district: "UNNAO",
      crimes: 3548,
    },
    {
      district: "VARANASI",
      crimes: 2904,
    },
    {
      district: "TOTAL",
      crimes: 178129,
    },
    {
      district: "ALMORA",
      crimes: 251,
    },
    {
      district: "BAGESHWAR",
      crimes: 115,
    },
    {
      district: "CHAMOLI",
      crimes: 213,
    },
    {
      district: "CHAMPAWAT",
      crimes: 127,
    },
    {
      district: "DEHRADUN",
      crimes: 1988,
    },
    {
      district: "HARIDWAR",
      crimes: 1843,
    },
    {
      district: "NAINITAL",
      crimes: 877,
    },
    {
      district: "PAURI GARHWAL",
      crimes: 396,
    },
    {
      district: "PITHORAGARH",
      crimes: 364,
    },
    {
      district: "RUDRA PRAYAG",
      crimes: 106,
    },
    {
      district: "TEHRI GARHWAL",
      crimes: 314,
    },
    {
      district: "UDHAMSINGH NAGAR",
      crimes: 1167,
    },
    {
      district: "UTTARKASHI",
      crimes: 312,
    },
    {
      district: "TOTAL",
      crimes: 8073,
    },
    {
      district: "24 PARGANAS NORTH",
      crimes: 6167,
    },
    {
      district: "24 PARGANAS SOUTH",
      crimes: 5827,
    },
    {
      district: "ASANSOL",
      crimes: 362,
    },
    {
      district: "BANKURA",
      crimes: 1180,
    },
    {
      district: "BIRBHUM",
      crimes: 2213,
    },
    {
      district: "BURDWAN",
      crimes: 4693,
    },
    {
      district: "COOCHBEHAR",
      crimes: 1262,
    },
    {
      district: "DAKSHIN DINAJPUR",
      crimes: 1011,
    },
    {
      district: "DARJEELING",
      crimes: 1778,
    },
    {
      district: "HOOGHLY",
      crimes: 3020,
    },
    {
      district: "HOWRAH",
      crimes: 1195,
    },
    {
      district: "HOWRAH CITY",
      crimes: 1438,
    },
    {
      district: "HOWRAH G.R.P.",
      crimes: 951,
    },
    {
      district: "JALPAIGURI",
      crimes: 2321,
    },
    {
      district: "KOLKATA",
      crimes: 11970,
    },
    {
      district: "MALDA",
      crimes: 1859,
    },
    {
      district: "MIDNAPUR",
      crimes: 4617,
    },
    {
      district: "MURSHIDABAD",
      crimes: 2683,
    },
    {
      district: "NADIA",
      crimes: 3623,
    },
    {
      district: "PURULIA",
      crimes: 1292,
    },
    {
      district: "SEALDAH G.R.P.",
      crimes: 418,
    },
    {
      district: "SILIGURI G.R.P.",
      crimes: 143,
    },
    {
      district: "UTTAR DINAJPUR",
      crimes: 1540,
    },
    {
      district: "TOTAL",
      crimes: 61563,
    },
    {
      district: "ANDAMAN",
      crimes: 637,
    },
    {
      district: "NICOBAR",
      crimes: 21,
    },
    {
      district: "TOTAL",
      crimes: 658,
    },
    {
      district: "CHANDIGARH",
      crimes: 3397,
    },
    {
      district: "TOTAL",
      crimes: 3397,
    },
    {
      district: "D and N HAVELI",
      crimes: 350,
    },
    {
      district: "TOTAL",
      crimes: 350,
    },
    {
      district: "DAMAN",
      crimes: 194,
    },
    {
      district: "DIU",
      crimes: 45,
    },
    {
      district: "TOTAL",
      crimes: 239,
    },
    {
      district: "CENTRAL",
      crimes: 3750,
    },
    {
      district: "DELHI UT TOTAL",
      crimes: 54384,
    },
    {
      district: "EAST",
      crimes: 4447,
    },
    {
      district: "G.R.P.(RLY)",
      crimes: 1630,
    },
    {
      district: "I.G.I. AIRPORT",
      crimes: 625,
    },
    {
      district: "NEW DELHI",
      crimes: 2660,
    },
    {
      district: "NORTH",
      crimes: 3998,
    },
    {
      district: "NORTH EAST",
      crimes: 3449,
    },
    {
      district: "NORTH WEST",
      crimes: 10001,
    },
    {
      district: "S.T.F.",
      crimes: 0,
    },
    {
      district: "SOUTH",
      crimes: 10745,
    },
    {
      district: "SOUTH WEST",
      crimes: 5389,
    },
    {
      district: "WEST",
      crimes: 7690,
    },
    {
      district: "LAKSHADWEEP",
      crimes: 36,
    },
    {
      district: "TOTAL",
      crimes: 36,
    },
    {
      district: "PONDICHERRY",
      crimes: 4068,
    },
    {
      district: "TOTAL",
      crimes: 4068,
    },
    {
      district: "ADILABAD",
      crimes: 4675,
    },
    {
      district: "ANANTAPUR",
      crimes: 4467,
    },
    {
      district: "CHITTOOR",
      crimes: 6306,
    },
    {
      district: "CUDDAPAH",
      crimes: 3324,
    },
    {
      district: "EAST GODAVARI",
      crimes: 7931,
    },
    {
      district: "GUNTAKAL RLY.",
      crimes: 310,
    },
    {
      district: "GUNTUR",
      crimes: 7883,
    },
    {
      district: "HYDERABAD CITY",
      crimes: 14413,
    },
    {
      district: "KARIMNAGAR",
      crimes: 7086,
    },
    {
      district: "KHAMMAM",
      crimes: 5646,
    },
    {
      district: "KRISHNA",
      crimes: 5318,
    },
    {
      district: "KURNOOL",
      crimes: 4684,
    },
    {
      district: "MAHABOOBNAGAR",
      crimes: 5354,
    },
    {
      district: "MEDAK",
      crimes: 4208,
    },
    {
      district: "NALGONDA",
      crimes: 5290,
    },
    {
      district: "NELLORE",
      crimes: 5240,
    },
    {
      district: "NIZAMABAD",
      crimes: 4417,
    },
    {
      district: "PRAKASHAM",
      crimes: 3636,
    },
    {
      district: "RANGA REDDY",
      crimes: 10602,
    },
    {
      district: "SECUNDERABAD RLY.",
      crimes: 444,
    },
    {
      district: "SRIKAKULAM",
      crimes: 2486,
    },
    {
      district: "VIJAYAWADA",
      crimes: 9083,
    },
    {
      district: "VIJAYAWADA RLY.",
      crimes: 410,
    },
    {
      district: "VISAKHA RURAL",
      crimes: 2669,
    },
    {
      district: "VISAKHAPATNAM",
      crimes: 2838,
    },
    {
      district: "VIZIANAGARAM",
      crimes: 2432,
    },
    {
      district: "WARANGAL",
      crimes: 6397,
    },
    {
      district: "WEST GODAVARI",
      crimes: 6061,
    },
    {
      district: "TOTAL",
      crimes: 143610,
    },
    {
      district: "CHANGLANG",
      crimes: 180,
    },
    {
      district: "DIBANG VALLEY",
      crimes: 178,
    },
    {
      district: "KAMENG EAST",
      crimes: 126,
    },
    {
      district: "KAMENG WEST",
      crimes: 84,
    },
    {
      district: "LOHIT",
      crimes: 169,
    },
    {
      district: "PAPUM PARE",
      crimes: 383,
    },
    {
      district: "SIANG EAST",
      crimes: 264,
    },
    {
      district: "SIANG UPPER",
      crimes: 44,
    },
    {
      district: "SIANG WEST",
      crimes: 331,
    },
    {
      district: "SUBANSIRI LOWER",
      crimes: 152,
    },
    {
      district: "SUBANSIRI UPPER",
      crimes: 132,
    },
    {
      district: "TAWANG",
      crimes: 44,
    },
    {
      district: "TIRAP",
      crimes: 141,
    },
    {
      district: "TOTAL",
      crimes: 2228,
    },
    {
      district: "BARPETA",
      crimes: 1527,
    },
    {
      district: "BONGAIGAON",
      crimes: 818,
    },
    {
      district: "C.I.D.",
      crimes: 52,
    },
    {
      district: "CACHAR",
      crimes: 3520,
    },
    {
      district: "DARRANG",
      crimes: 861,
    },
    {
      district: "DHEMAJI",
      crimes: 689,
    },
    {
      district: "DHUBRI",
      crimes: 1721,
    },
    {
      district: "DIBRUGARH",
      crimes: 1642,
    },
    {
      district: "G.R.P.",
      crimes: 116,
    },
    {
      district: "GOALPARA",
      crimes: 959,
    },
    {
      district: "GOLAGHAT",
      crimes: 1347,
    },
    {
      district: "GUWAHATI CITY",
      crimes: 4384,
    },
    {
      district: "HAILAKANDI",
      crimes: 814,
    },
    {
      district: "JORHAT",
      crimes: 1130,
    },
    {
      district: "KAMRUP",
      crimes: 1673,
    },
    {
      district: "KARBI ANGLONG",
      crimes: 527,
    },
    {
      district: "KARIMGANJ",
      crimes: 894,
    },
    {
      district: "KOKRAJHAR",
      crimes: 896,
    },
    {
      district: "LAKHIMPUR",
      crimes: 1925,
    },
    {
      district: "MORIGAON",
      crimes: 782,
    },
    {
      district: "N.C.HILLS",
      crimes: 213,
    },
    {
      district: "NAGAON",
      crimes: 3254,
    },
    {
      district: "NALBARI",
      crimes: 1011,
    },
    {
      district: "R.P.O.",
      crimes: 13,
    },
    {
      district: "SIBSAGAR",
      crimes: 1881,
    },
    {
      district: "SONITPUR",
      crimes: 2269,
    },
    {
      district: "TINSUKIA",
      crimes: 1428,
    },
    {
      district: "TOTAL",
      crimes: 36346,
    },
    {
      district: "ARARIA",
      crimes: 2085,
    },
    {
      district: "ARWAL",
      crimes: 606,
    },
    {
      district: "AURANGABAD",
      crimes: 2312,
    },
    {
      district: "BAGAHA",
      crimes: 975,
    },
    {
      district: "BANKA",
      crimes: 1496,
    },
    {
      district: "BEGUSARAI",
      crimes: 3054,
    },
    {
      district: "BETTIAH",
      crimes: 3288,
    },
    {
      district: "BHABHUA",
      crimes: 1509,
    },
    {
      district: "BHAGALPUR",
      crimes: 2791,
    },
    {
      district: "BHOJPUR",
      crimes: 3021,
    },
    {
      district: "BUXAR",
      crimes: 1840,
    },
    {
      district: "DARBHANGA",
      crimes: 3087,
    },
    {
      district: "GAYA",
      crimes: 3124,
    },
    {
      district: "GOPALGANJ",
      crimes: 2035,
    },
    {
      district: "JAMALPUR RLY.",
      crimes: 239,
    },
    {
      district: "JAMUI",
      crimes: 1048,
    },
    {
      district: "JEHANABAD",
      crimes: 1318,
    },
    {
      district: "KATIHAR",
      crimes: 2173,
    },
    {
      district: "KATIHAR RLY.",
      crimes: 434,
    },
    {
      district: "KHAGARIA",
      crimes: 1101,
    },
    {
      district: "KISHANGANJ",
      crimes: 966,
    },
    {
      district: "LAKHISARAI",
      crimes: 788,
    },
    {
      district: "MADHEPURA",
      crimes: 1019,
    },
    {
      district: "MADHUBANI",
      crimes: 2627,
    },
    {
      district: "MOTIHARI",
      crimes: 4596,
    },
    {
      district: "MUNGER",
      crimes: 2014,
    },
    {
      district: "MUZAFFARPUR",
      crimes: 4863,
    },
    {
      district: "MUZAFFARPUR RLY.",
      crimes: 609,
    },
    {
      district: "NALANDA",
      crimes: 3247,
    },
    {
      district: "NAUGACHIA",
      crimes: 711,
    },
    {
      district: "NAWADAH",
      crimes: 1500,
    },
    {
      district: "PATNA",
      crimes: 9217,
    },
    {
      district: "PATNA RLY.",
      crimes: 1018,
    },
    {
      district: "PURNEA",
      crimes: 2131,
    },
    {
      district: "ROHTAS",
      crimes: 3419,
    },
    {
      district: "SAHARSA",
      crimes: 967,
    },
    {
      district: "SAMASTIPUR",
      crimes: 2808,
    },
    {
      district: "SARAN",
      crimes: 3277,
    },
    {
      district: "SHEIKHPURA",
      crimes: 887,
    },
    {
      district: "SHEOHAR",
      crimes: 447,
    },
    {
      district: "SITAMARHI",
      crimes: 2172,
    },
    {
      district: "SIWAN",
      crimes: 2016,
    },
    {
      district: "SUPAUL",
      crimes: 1760,
    },
    {
      district: "VAISHALI",
      crimes: 3445,
    },
    {
      district: "TOTAL",
      crimes: 94040,
    },
    {
      district: "BALRAMPUR",
      crimes: 618,
    },
    {
      district: "BILASPUR",
      crimes: 4709,
    },
    {
      district: "BIZAPUR",
      crimes: 239,
    },
    {
      district: "DANTEWARA",
      crimes: 616,
    },
    {
      district: "DHAMTARI",
      crimes: 1249,
    },
    {
      district: "DURG",
      crimes: 6121,
    },
    {
      district: "GRP RAIPUR",
      crimes: 320,
    },
    {
      district: "JAGDALPUR",
      crimes: 1910,
    },
    {
      district: "JANJGIR",
      crimes: 2014,
    },
    {
      district: "JASHPUR",
      crimes: 766,
    },
    {
      district: "KABIRDHAM",
      crimes: 817,
    },
    {
      district: "KANKER",
      crimes: 1046,
    },
    {
      district: "KORBA",
      crimes: 2295,
    },
    {
      district: "KORIYA",
      crimes: 1531,
    },
    {
      district: "MAHASAMUND",
      crimes: 1324,
    },
    {
      district: "RAIGARH",
      crimes: 1547,
    },
    {
      district: "RAIPUR",
      crimes: 5595,
    },
    {
      district: "RAJNANDGAON",
      crimes: 2494,
    },
    {
      district: "SARGUJA",
      crimes: 2739,
    },
    {
      district: "TOTAL",
      crimes: 37950,
    },
    {
      district: "NORTH GOA",
      crimes: 1380,
    },
    {
      district: "SOUTH GOA",
      crimes: 1060,
    },
    {
      district: "TOTAL",
      crimes: 2440,
    },
    {
      district: "AHMEDABAD COMMR.",
      crimes: 14479,
    },
    {
      district: "AHMEDABAD RURAL",
      crimes: 2772,
    },
    {
      district: "AHWA-DANG",
      crimes: 170,
    },
    {
      district: "AMRELI",
      crimes: 1851,
    },
    {
      district: "ANAND",
      crimes: 3859,
    },
    {
      district: "BHARUCH",
      crimes: 3086,
    },
    {
      district: "BHAVNAGAR",
      crimes: 5146,
    },
    {
      district: "DAHOD",
      crimes: 1743,
    },
    {
      district: "GANDHINAGAR",
      crimes: 3299,
    },
    {
      district: "HIMATNAGAR",
      crimes: 4386,
    },
    {
      district: "JAMNAGAR",
      crimes: 3571,
    },
    {
      district: "JUNAGADH",
      crimes: 4980,
    },
    {
      district: "KHEDA NORTH",
      crimes: 3868,
    },
    {
      district: "KUTCH",
      crimes: 3611,
    },
    {
      district: "MEHSANA",
      crimes: 5120,
    },
    {
      district: "NARMADA",
      crimes: 696,
    },
    {
      district: "NAVSARI",
      crimes: 1354,
    },
    {
      district: "PALANPUR",
      crimes: 3745,
    },
    {
      district: "PANCHMAHAL",
      crimes: 2416,
    },
    {
      district: "PATAN",
      crimes: 2389,
    },
    {
      district: "PORBANDAR",
      crimes: 1213,
    },
    {
      district: "RAJKOT COMMR.",
      crimes: 4644,
    },
    {
      district: "RAJKOT RURAL",
      crimes: 4382,
    },
    {
      district: "SURAT COMMR.",
      crimes: 4172,
    },
    {
      district: "SURAT RURAL",
      crimes: 2060,
    },
    {
      district: "SURENDRANAGAR",
      crimes: 3137,
    },
    {
      district: "VADODARA COMMR.",
      crimes: 7116,
    },
    {
      district: "VADODARA RURAL",
      crimes: 3377,
    },
    {
      district: "VALSAD",
      crimes: 2746,
    },
    {
      district: "W.RLY",
      crimes: 1287,
    },
    {
      district: "TOTAL",
      crimes: 106675,
    },
    {
      district: "AMBALA",
      crimes: 2172,
    },
    {
      district: "BHIWANI",
      crimes: 1938,
    },
    {
      district: "FARIDABAD",
      crimes: 6999,
    },
    {
      district: "FATEHABAD",
      crimes: 1226,
    },
    {
      district: "GRP",
      crimes: 770,
    },
    {
      district: "GURGAON",
      crimes: 3623,
    },
    {
      district: "HISSAR",
      crimes: 2545,
    },
    {
      district: "JHAJJAR",
      crimes: 1518,
    },
    {
      district: "JIND",
      crimes: 1325,
    },
    {
      district: "KAITHAL",
      crimes: 1121,
    },
    {
      district: "KARNAL",
      crimes: 2173,
    },
    {
      district: "KURUKSHETRA",
      crimes: 1856,
    },
    {
      district: "MAHENDRAGARH",
      crimes: 1303,
    },
    {
      district: "PANCHKULA",
      crimes: 1187,
    },
    {
      district: "PANIPAT",
      crimes: 2096,
    },
    {
      district: "REWARI",
      crimes: 1293,
    },
    {
      district: "ROHTAK",
      crimes: 1883,
    },
    {
      district: "SIRSA",
      crimes: 1778,
    },
    {
      district: "SONIPAT",
      crimes: 2046,
    },
    {
      district: "YAMUNANAGAR",
      crimes: 1300,
    },
    {
      district: "TOTAL",
      crimes: 40152,
    },
    {
      district: "BILASPUR",
      crimes: 1217,
    },
    {
      district: "CHAMBA",
      crimes: 677,
    },
    {
      district: "G.R.P.",
      crimes: 8,
    },
    {
      district: "HAMIRPUR",
      crimes: 851,
    },
    {
      district: "KANGRA",
      crimes: 1961,
    },
    {
      district: "KINNAUR",
      crimes: 154,
    },
    {
      district: "KULLU",
      crimes: 743,
    },
    {
      district: "LAHAUL-SPITI",
      crimes: 68,
    },
    {
      district: "MANDI",
      crimes: 1775,
    },
    {
      district: "SHIMLA",
      crimes: 2008,
    },
    {
      district: "SIRMAUR",
      crimes: 712,
    },
    {
      district: "SOLAN",
      crimes: 1266,
    },
    {
      district: "UNA",
      crimes: 803,
    },
    {
      district: "TOTAL",
      crimes: 12243,
    },
    {
      district: "ANANTNAG",
      crimes: 1358,
    },
    {
      district: "AWANTIPORA",
      crimes: 309,
    },
    {
      district: "BARAMULLA",
      crimes: 1476,
    },
    {
      district: "BORDER",
      crimes: 740,
    },
    {
      district: "BUDGAM",
      crimes: 831,
    },
    {
      district: "CRIME JAMMU",
      crimes: 48,
    },
    {
      district: "CRIME SRINAGAR",
      crimes: 63,
    },
    {
      district: "DODA",
      crimes: 726,
    },
    {
      district: "GANDERBAL",
      crimes: 519,
    },
    {
      district: "HANDWARA",
      crimes: 472,
    },
    {
      district: "JAMMU",
      crimes: 3236,
    },
    {
      district: "KARGIL",
      crimes: 71,
    },
    {
      district: "KATHUA",
      crimes: 968,
    },
    {
      district: "KULGAM",
      crimes: 585,
    },
    {
      district: "KUPWARA",
      crimes: 597,
    },
    {
      district: "LEH",
      crimes: 128,
    },
    {
      district: "POONCH",
      crimes: 625,
    },
    {
      district: "PULWAMA",
      crimes: 953,
    },
    {
      district: "RAILWAYS",
      crimes: 19,
    },
    {
      district: "RAJOURI",
      crimes: 1100,
    },
    {
      district: "RAMBAN",
      crimes: 566,
    },
    {
      district: "REASI",
      crimes: 377,
    },
    {
      district: "SRINAGAR",
      crimes: 3104,
    },
    {
      district: "UDHAMPUR",
      crimes: 1096,
    },
    {
      district: "TOTAL",
      crimes: 19967,
    },
    {
      district: "BOKARO",
      crimes: 2194,
    },
    {
      district: "CHAIBASA",
      crimes: 730,
    },
    {
      district: "CHATRA",
      crimes: 840,
    },
    {
      district: "DEOGHAR",
      crimes: 1283,
    },
    {
      district: "DHANBAD",
      crimes: 3201,
    },
    {
      district: "DHANBAD RLY.",
      crimes: 408,
    },
    {
      district: "DUMKA",
      crimes: 1008,
    },
    {
      district: "GARHWA",
      crimes: 869,
    },
    {
      district: "GIRIDIH",
      crimes: 1955,
    },
    {
      district: "GODDA",
      crimes: 2203,
    },
    {
      district: "GUMLA",
      crimes: 689,
    },
    {
      district: "HAZARIBAGH",
      crimes: 2621,
    },
    {
      district: "JAMSHEDPUR",
      crimes: 2755,
    },
    {
      district: "JAMSHEDPUR RLY.",
      crimes: 201,
    },
    {
      district: "JAMTARA",
      crimes: 534,
    },
    {
      district: "KODERMA",
      crimes: 785,
    },
    {
      district: "LATEHAR",
      crimes: 456,
    },
    {
      district: "LOHARDAGGA",
      crimes: 432,
    },
    {
      district: "PAKUR",
      crimes: 584,
    },
    {
      district: "PALAMU",
      crimes: 1549,
    },
    {
      district: "RANCHI",
      crimes: 4306,
    },
    {
      district: "SAHEBGANJ",
      crimes: 730,
    },
    {
      district: "SARAIKELA",
      crimes: 824,
    },
    {
      district: "SIMDEGA",
      crimes: 282,
    },
    {
      district: "TOTAL",
      crimes: 31439,
    },
    {
      district: "BAGALKOT",
      crimes: 1915,
    },
    {
      district: "BANGALORE COMMR.",
      crimes: 29120,
    },
    {
      district: "BANGALORE RURAL",
      crimes: 7310,
    },
    {
      district: "BELGAUM",
      crimes: 4726,
    },
    {
      district: "BELLARY",
      crimes: 3088,
    },
    {
      district: "BIDAR",
      crimes: 4417,
    },
    {
      district: "BIJAPUR",
      crimes: 2762,
    },
    {
      district: "CHAMARAJNAGAR",
      crimes: 1327,
    },
    {
      district: "CHICKMAGALUR",
      crimes: 2796,
    },
    {
      district: "CHITRADURGA",
      crimes: 2986,
    },
    {
      district: "DAKSHIN KANNADA",
      crimes: 3429,
    },
    {
      district: "DAVANAGERE",
      crimes: 3106,
    },
    {
      district: "DHARWAD COMMR.",
      crimes: 2021,
    },
    {
      district: "DHARWAD RURAL",
      crimes: 905,
    },
    {
      district: "GADAG",
      crimes: 928,
    },
    {
      district: "GULBARGA",
      crimes: 4003,
    },
    {
      district: "HASSAN",
      crimes: 4100,
    },
    {
      district: "HAVERI",
      crimes: 1955,
    },
    {
      district: "K.G.F.",
      crimes: 1054,
    },
    {
      district: "KODAGU",
      crimes: 1365,
    },
    {
      district: "KOLAR",
      crimes: 3553,
    },
    {
      district: "KOPPAL",
      crimes: 1393,
    },
    {
      district: "MANDYA",
      crimes: 4745,
    },
    {
      district: "MYSORE COMMR.",
      crimes: 1762,
    },
    {
      district: "MYSORE RURAL",
      crimes: 2798,
    },
    {
      district: "RAICHUR",
      crimes: 2522,
    },
    {
      district: "RAILWAYS",
      crimes: 724,
    },
    {
      district: "SHIMOGA",
      crimes: 4165,
    },
    {
      district: "TUMKUR",
      crimes: 4180,
    },
    {
      district: "UDUPI",
      crimes: 2209,
    },
    {
      district: "UTTAR KANNADA",
      crimes: 2335,
    },
    {
      district: "TOTAL",
      crimes: 113699,
    },
    {
      district: "ALAPUZHA",
      crimes: 7578,
    },
    {
      district: "CBCID",
      crimes: 240,
    },
    {
      district: "ERNAKULAM",
      crimes: 15673,
    },
    {
      district: "IDUKKI",
      crimes: 4646,
    },
    {
      district: "KANNUR",
      crimes: 5024,
    },
    {
      district: "KASARGOD",
      crimes: 2770,
    },
    {
      district: "KOLLAM",
      crimes: 9877,
    },
    {
      district: "KOTTAYAM",
      crimes: 7316,
    },
    {
      district: "KOZHIKODE",
      crimes: 8746,
    },
    {
      district: "MALAPPURAM",
      crimes: 6532,
    },
    {
      district: "PALAKKAD",
      crimes: 6135,
    },
    {
      district: "PATHANAMTHITTA",
      crimes: 4468,
    },
    {
      district: "RAILWAYS",
      crimes: 387,
    },
    {
      district: "THRISSUR",
      crimes: 10049,
    },
    {
      district: "TRIVANDRUM",
      crimes: 12690,
    },
    {
      district: "WAYANADU",
      crimes: 2069,
    },
    {
      district: "TOTAL",
      crimes: 104200,
    },
    {
      district: "BALAGHAT",
      crimes: 3005,
    },
    {
      district: "BARWANI",
      crimes: 1787,
    },
    {
      district: "BETUL",
      crimes: 2902,
    },
    {
      district: "BHIND",
      crimes: 3665,
    },
    {
      district: "BHOPAL",
      crimes: 14217,
    },
    {
      district: "BHOPAL RLY.",
      crimes: 1315,
    },
    {
      district: "CHHATARPUR",
      crimes: 3680,
    },
    {
      district: "CHHINDWARA",
      crimes: 3834,
    },
    {
      district: "DAMOH",
      crimes: 2785,
    },
    {
      district: "DATIYA",
      crimes: 1875,
    },
    {
      district: "DEWAS",
      crimes: 6531,
    },
    {
      district: "DHAR",
      crimes: 5397,
    },
    {
      district: "DINDORI",
      crimes: 865,
    },
    {
      district: "GUNA",
      crimes: 6268,
    },
    {
      district: "GWALIOR",
      crimes: 7690,
    },
    {
      district: "HARDA",
      crimes: 876,
    },
    {
      district: "HOSHANGABAD",
      crimes: 3156,
    },
    {
      district: "INDORE",
      crimes: 14934,
    },
    {
      district: "INDORE RLY.",
      crimes: 278,
    },
    {
      district: "JABALPUR",
      crimes: 9290,
    },
    {
      district: "JABALPUR RLY.",
      crimes: 345,
    },
    {
      district: "JHABUA",
      crimes: 3104,
    },
    {
      district: "KATNI",
      crimes: 2403,
    },
    {
      district: "KHANDWA",
      crimes: 3983,
    },
    {
      district: "KHARGON",
      crimes: 3696,
    },
    {
      district: "MANDLA",
      crimes: 1823,
    },
    {
      district: "MANDSAUR",
      crimes: 2812,
    },
    {
      district: "MORENA",
      crimes: 5149,
    },
    {
      district: "NARSINGHPUR",
      crimes: 2443,
    },
    {
      district: "NEEMUCH",
      crimes: 2223,
    },
    {
      district: "PANNA",
      crimes: 1717,
    },
    {
      district: "RAISEN",
      crimes: 3080,
    },
    {
      district: "RAJGARH",
      crimes: 4301,
    },
    {
      district: "RATLAM",
      crimes: 3332,
    },
    {
      district: "REWA",
      crimes: 4569,
    },
    {
      district: "SAGAR",
      crimes: 7303,
    },
    {
      district: "SATNA",
      crimes: 4503,
    },
    {
      district: "SEONI",
      crimes: 2038,
    },
    {
      district: "SHAHDOL",
      crimes: 4734,
    },
    {
      district: "SHAJAPUR",
      crimes: 3765,
    },
    {
      district: "SHEOPUR",
      crimes: 1339,
    },
    {
      district: "SHIVPURI",
      crimes: 4429,
    },
    {
      district: "SIDHI",
      crimes: 3606,
    },
    {
      district: "SIHORE",
      crimes: 3897,
    },
    {
      district: "TIKAMGARH",
      crimes: 3240,
    },
    {
      district: "UJJAIN",
      crimes: 8425,
    },
    {
      district: "UMARIYA",
      crimes: 1272,
    },
    {
      district: "VIDISHA",
      crimes: 3918,
    },
    {
      district: "TOTAL",
      crimes: 191799,
    },
    {
      district: "AHMEDNAGAR",
      crimes: 4506,
    },
    {
      district: "AKOLA",
      crimes: 3886,
    },
    {
      district: "AMRAVATI COMMR.",
      crimes: 2665,
    },
    {
      district: "AMRAVATI RURAL",
      crimes: 3922,
    },
    {
      district: "AURANGABAD COMMR.",
      crimes: 2440,
    },
    {
      district: "AURANGABAD RURAL",
      crimes: 2703,
    },
    {
      district: "BEED",
      crimes: 3288,
    },
    {
      district: "BHANDARA",
      crimes: 2258,
    },
    {
      district: "BULDHANA",
      crimes: 3665,
    },
    {
      district: "CHANDRAPUR",
      crimes: 2970,
    },
    {
      district: "DHULE",
      crimes: 2149,
    },
    {
      district: "GADCHIROLI",
      crimes: 1403,
    },
    {
      district: "GONDIA",
      crimes: 1959,
    },
    {
      district: "HINGOLI",
      crimes: 1629,
    },
    {
      district: "JALGAON",
      crimes: 4302,
    },
    {
      district: "JALNA",
      crimes: 2326,
    },
    {
      district: "KOLHAPUR",
      crimes: 2990,
    },
    {
      district: "LATUR",
      crimes: 2832,
    },
    {
      district: "MUMBAI",
      crimes: 26276,
    },
    {
      district: "MUMBAI RLY.",
      crimes: 1942,
    },
    {
      district: "NAGPUR COMMR.",
      crimes: 8722,
    },
    {
      district: "NAGPUR RLY.",
      crimes: 1052,
    },
    {
      district: "NAGPUR RURAL",
      crimes: 5053,
    },
    {
      district: "NANDED",
      crimes: 5799,
    },
    {
      district: "NANDURBAR",
      crimes: 1178,
    },
    {
      district: "NASIK COMMR.",
      crimes: 2521,
    },
    {
      district: "NASIK RURAL",
      crimes: 4783,
    },
    {
      district: "NAVI MUMBAI",
      crimes: 3071,
    },
    {
      district: "OSMANABAD",
      crimes: 2656,
    },
    {
      district: "PARBHANI",
      crimes: 2366,
    },
    {
      district: "PUNE COMMR.",
      crimes: 8504,
    },
    {
      district: "PUNE RLY.",
      crimes: 409,
    },
    {
      district: "PUNE RURAL",
      crimes: 4518,
    },
    {
      district: "RAIGAD",
      crimes: 2149,
    },
    {
      district: "RATNAGIRI",
      crimes: 1222,
    },
    {
      district: "SANGLI",
      crimes: 2688,
    },
    {
      district: "SATARA",
      crimes: 3341,
    },
    {
      district: "SINDHUDURG",
      crimes: 781,
    },
    {
      district: "SOLAPUR COMMR.",
      crimes: 1597,
    },
    {
      district: "SOLAPUR RURAL",
      crimes: 2835,
    },
    {
      district: "THANE COMMR.",
      crimes: 6419,
    },
    {
      district: "THANE RURAL",
      crimes: 4010,
    },
    {
      district: "WARDHA",
      crimes: 3493,
    },
    {
      district: "WASHIM",
      crimes: 1875,
    },
    {
      district: "YAVATMAL",
      crimes: 4309,
    },
    {
      district: "TOTAL",
      crimes: 165462,
    },
    {
      district: "BISHNUPUR",
      crimes: 293,
    },
    {
      district: "CHANDEL",
      crimes: 98,
    },
    {
      district: "CHURACHANDPUR",
      crimes: 108,
    },
    {
      district: "IMPHAL(EAST)",
      crimes: 391,
    },
    {
      district: "IMPHAL(WEST)",
      crimes: 1010,
    },
    {
      district: "SENAPATI",
      crimes: 130,
    },
    {
      district: "TAMENGLONG",
      crimes: 28,
    },
    {
      district: "THOUBAL",
      crimes: 488,
    },
    {
      district: "UKHRUL",
      crimes: 38,
    },
    {
      district: "TOTAL",
      crimes: 2584,
    },
    {
      district: "GARO HILLS EAST",
      crimes: 110,
    },
    {
      district: "GARO HILLS SOUTH",
      crimes: 57,
    },
    {
      district: "GARO HILLS WEST",
      crimes: 196,
    },
    {
      district: "JAINTIA HILLS",
      crimes: 227,
    },
    {
      district: "KHASI HILLS EAST",
      crimes: 771,
    },
    {
      district: "KHASI HILLS WEST",
      crimes: 119,
    },
    {
      district: "RI-BHOI",
      crimes: 184,
    },
    {
      district: "TOTAL",
      crimes: 1664,
    },
    {
      district: "AIZAWL",
      crimes: 1409,
    },
    {
      district: "CHAMPHAI",
      crimes: 212,
    },
    {
      district: "KOLASIB",
      crimes: 240,
    },
    {
      district: "LAWNGTLAI",
      crimes: 162,
    },
    {
      district: "LUNGLEI",
      crimes: 336,
    },
    {
      district: "MAMIT",
      crimes: 62,
    },
    {
      district: "SAIHA",
      crimes: 326,
    },
    {
      district: "SERCHHIP",
      crimes: 73,
    },
    {
      district: "TOTAL",
      crimes: 2820,
    },
    {
      district: "DIMAPUR",
      crimes: 467,
    },
    {
      district: "KIPHIRE",
      crimes: 11,
    },
    {
      district: "KOHIMA",
      crimes: 226,
    },
    {
      district: "MOKOKCHUNG",
      crimes: 64,
    },
    {
      district: "MON",
      crimes: 64,
    },
    {
      district: "PEREN",
      crimes: 31,
    },
    {
      district: "PHEK",
      crimes: 52,
    },
    {
      district: "TUENSANG",
      crimes: 45,
    },
    {
      district: "WOKHA",
      crimes: 99,
    },
    {
      district: "ZUNHEBOTO",
      crimes: 55,
    },
    {
      district: "TOTAL",
      crimes: 1114,
    },
    {
      district: "ANGUL",
      crimes: 1614,
    },
    {
      district: "BALASORE",
      crimes: 2490,
    },
    {
      district: "BARAGARH",
      crimes: 1259,
    },
    {
      district: "BERHAMPUR",
      crimes: 1128,
    },
    {
      district: "BHADRAK",
      crimes: 1411,
    },
    {
      district: "BOLANGIR",
      crimes: 1439,
    },
    {
      district: "BOUDH",
      crimes: 403,
    },
    {
      district: "CUTTACK",
      crimes: 4280,
    },
    {
      district: "DEOGARH",
      crimes: 433,
    },
    {
      district: "DHENKANAL",
      crimes: 1305,
    },
    {
      district: "GAJAPATI",
      crimes: 425,
    },
    {
      district: "GANJAM",
      crimes: 2179,
    },
    {
      district: "JAGATSINGHPUR",
      crimes: 1261,
    },
    {
      district: "JAJPUR",
      crimes: 1687,
    },
    {
      district: "JHARSUGUDA",
      crimes: 710,
    },
    {
      district: "KALAHANDI",
      crimes: 909,
    },
    {
      district: "KANDHAMAL",
      crimes: 948,
    },
    {
      district: "KENDRAPARA",
      crimes: 929,
    },
    {
      district: "KEONJHAR",
      crimes: 2047,
    },
    {
      district: "KHURDA",
      crimes: 5236,
    },
    {
      district: "KORAPUT",
      crimes: 1452,
    },
    {
      district: "MALKANGIR",
      crimes: 459,
    },
    {
      district: "MAYURBHANJ",
      crimes: 2025,
    },
    {
      district: "NAYAGARH",
      crimes: 865,
    },
    {
      district: "NOWRANGPUR",
      crimes: 764,
    },
    {
      district: "NUAPADA",
      crimes: 491,
    },
    {
      district: "PURI",
      crimes: 2561,
    },
    {
      district: "RAYAGADA",
      crimes: 959,
    },
    {
      district: "ROURKELA",
      crimes: 1226,
    },
    {
      district: "SAMBALPUR",
      crimes: 1904,
    },
    {
      district: "SONEPUR",
      crimes: 488,
    },
    {
      district: "SRP(CUTTACK)",
      crimes: 439,
    },
    {
      district: "SRP(ROURKELA)",
      crimes: 281,
    },
    {
      district: "SUNDARGARH",
      crimes: 1721,
    },
    {
      district: "TOTAL",
      crimes: 47728,
    },
    {
      district: "AMRITSAR",
      crimes: 1320,
    },
    {
      district: "BARNALA",
      crimes: 545,
    },
    {
      district: "BATALA",
      crimes: 640,
    },
    {
      district: "BHATINDA",
      crimes: 1197,
    },
    {
      district: "FARIDKOT",
      crimes: 504,
    },
    {
      district: "FATEHGARH SAHIB",
      crimes: 565,
    },
    {
      district: "FEROZEPUR",
      crimes: 1532,
    },
    {
      district: "G.R.P",
      crimes: 390,
    },
    {
      district: "GURDASPUR",
      crimes: 819,
    },
    {
      district: "HOSHIARPUR",
      crimes: 1339,
    },
    {
      district: "JAGRAON",
      crimes: 660,
    },
    {
      district: "JALANDHAR",
      crimes: 2425,
    },
    {
      district: "KAPURTHALA",
      crimes: 912,
    },
    {
      district: "KHANNA",
      crimes: 599,
    },
    {
      district: "LUDHIANA",
      crimes: 5648,
    },
    {
      district: "MAJITHA",
      crimes: 743,
    },
    {
      district: "MANSA",
      crimes: 533,
    },
    {
      district: "MOGA",
      crimes: 704,
    },
    {
      district: "MUKTSAR",
      crimes: 466,
    },
    {
      district: "NAWAN SHAHR",
      crimes: 665,
    },
    {
      district: "PATIALA",
      crimes: 3196,
    },
    {
      district: "ROPAR",
      crimes: 1370,
    },
    {
      district: "SANGRUR",
      crimes: 1402,
    },
    {
      district: "TARN TARAN",
      crimes: 620,
    },
    {
      district: "TOTAL",
      crimes: 28794,
    },
    {
      district: "AJMER",
      crimes: 6983,
    },
    {
      district: "ALWAR",
      crimes: 6814,
    },
    {
      district: "BANSWARA",
      crimes: 3215,
    },
    {
      district: "BARAN",
      crimes: 3704,
    },
    {
      district: "BARMER",
      crimes: 2442,
    },
    {
      district: "BHARATPUR",
      crimes: 7304,
    },
    {
      district: "BHILWARA",
      crimes: 6593,
    },
    {
      district: "BIKANER",
      crimes: 3065,
    },
    {
      district: "BUNDI",
      crimes: 3899,
    },
    {
      district: "CHITTORGARH",
      crimes: 6470,
    },
    {
      district: "CHURU",
      crimes: 2855,
    },
    {
      district: "DAUSA",
      crimes: 3646,
    },
    {
      district: "DHOLPUR",
      crimes: 2811,
    },
    {
      district: "DUNGARPUR",
      crimes: 1936,
    },
    {
      district: "G.R.P.",
      crimes: 851,
    },
    {
      district: "GANGANAGAR",
      crimes: 5393,
    },
    {
      district: "HANUMANGARH",
      crimes: 3867,
    },
    {
      district: "JAIPUR",
      crimes: 19663,
    },
    {
      district: "JAISALMER",
      crimes: 917,
    },
    {
      district: "JALORE",
      crimes: 2587,
    },
    {
      district: "JHALAWAR",
      crimes: 3498,
    },
    {
      district: "JHUNJHUNU",
      crimes: 4197,
    },
    {
      district: "JODHPUR",
      crimes: 7123,
    },
    {
      district: "KARAULI",
      crimes: 2924,
    },
    {
      district: "KOTA",
      crimes: 6528,
    },
    {
      district: "NAGAUR",
      crimes: 4814,
    },
    {
      district: "PALI",
      crimes: 5065,
    },
    {
      district: "RAJSAMAND",
      crimes: 2587,
    },
    {
      district: "SAWAI MADHOPUR",
      crimes: 3004,
    },
    {
      district: "SIKAR",
      crimes: 4054,
    },
    {
      district: "SIROHI",
      crimes: 2313,
    },
    {
      district: "TONK",
      crimes: 3738,
    },
    {
      district: "UDAIPUR",
      crimes: 6388,
    },
    {
      district: "TOTAL",
      crimes: 151248,
    },
    {
      district: "EAST",
      crimes: 283,
    },
    {
      district: "NORTH",
      crimes: 46,
    },
    {
      district: "SOUTH",
      crimes: 89,
    },
    {
      district: "WEST",
      crimes: 67,
    },
    {
      district: "TOTAL",
      crimes: 485,
    },
    {
      district: "CHENGAI",
      crimes: 12887,
    },
    {
      district: "CHENNAI",
      crimes: 8526,
    },
    {
      district: "CHENNAI RLY.",
      crimes: 559,
    },
    {
      district: "COIMBATORE RURAL",
      crimes: 8862,
    },
    {
      district: "COIMBATORE URBAN",
      crimes: 3226,
    },
    {
      district: "CUDDALORE",
      crimes: 7095,
    },
    {
      district: "DHARMAPURI",
      crimes: 5816,
    },
    {
      district: "DINDIGUL",
      crimes: 5165,
    },
    {
      district: "ERODE",
      crimes: 6666,
    },
    {
      district: "KANCHIPURAM",
      crimes: 7869,
    },
    {
      district: "KANYAKUMARI",
      crimes: 4731,
    },
    {
      district: "KARUR",
      crimes: 2579,
    },
    {
      district: "MADURAI RURAL",
      crimes: 4459,
    },
    {
      district: "MADURAI URBAN",
      crimes: 3689,
    },
    {
      district: "NAGAPATTINAM",
      crimes: 4061,
    },
    {
      district: "NAMAKKAL",
      crimes: 3777,
    },
    {
      district: "NILGIRIS",
      crimes: 1380,
    },
    {
      district: "PERAMBALUR",
      crimes: 2931,
    },
    {
      district: "PUDUKOTTAI",
      crimes: 3391,
    },
    {
      district: "RAMNATHAPURAM",
      crimes: 3166,
    },
    {
      district: "SALEM RURAL",
      crimes: 4507,
    },
    {
      district: "SALEM URBAN",
      crimes: 1996,
    },
    {
      district: "SIVAGANGAI",
      crimes: 2832,
    },
    {
      district: "THANJAVUR",
      crimes: 3909,
    },
    {
      district: "THENI",
      crimes: 2941,
    },
    {
      district: "THIRUNELVELI RURAL",
      crimes: 6629,
    },
    {
      district: "THIRUNELVELI URBAN",
      crimes: 1276,
    },
    {
      district: "THIRUVALLUR",
      crimes: 3612,
    },
    {
      district: "THIRUVANNAMALAI",
      crimes: 4953,
    },
    {
      district: "THIRUVARUR",
      crimes: 2532,
    },
    {
      district: "THOOTHUGUDI",
      crimes: 5090,
    },
    {
      district: "TRICHY RLY.",
      crimes: 232,
    },
    {
      district: "TRICHY RURAL",
      crimes: 3318,
    },
    {
      district: "TRICHY URBAN",
      crimes: 2495,
    },
    {
      district: "VELLORE",
      crimes: 8245,
    },
    {
      district: "VILLUPURAM",
      crimes: 7260,
    },
    {
      district: "VIRUDHUNAGAR",
      crimes: 4280,
    },
    {
      district: "TOTAL",
      crimes: 166942,
    },
    {
      district: "DHALAI",
      crimes: 401,
    },
    {
      district: "NORTH",
      crimes: 712,
    },
    {
      district: "SOUTH",
      crimes: 735,
    },
    {
      district: "WEST",
      crimes: 1227,
    },
    {
      district: "TOTAL",
      crimes: 3075,
    },
    {
      district: "AGRA",
      crimes: 5617,
    },
    {
      district: "ALIGARH",
      crimes: 3996,
    },
    {
      district: "ALLAHABAD",
      crimes: 4962,
    },
    {
      district: "AMBEDKAR NAGAR",
      crimes: 1028,
    },
    {
      district: "AURAIYA",
      crimes: 1036,
    },
    {
      district: "AZAMGARH",
      crimes: 1879,
    },
    {
      district: "BADAUN",
      crimes: 2617,
    },
    {
      district: "BAGHPAT",
      crimes: 1117,
    },
    {
      district: "BAHRAICH",
      crimes: 1069,
    },
    {
      district: "BALLIA",
      crimes: 1436,
    },
    {
      district: "BALRAMPUR",
      crimes: 535,
    },
    {
      district: "BANDA",
      crimes: 1474,
    },
    {
      district: "BARABANKI",
      crimes: 2198,
    },
    {
      district: "BAREILLY",
      crimes: 4392,
    },
    {
      district: "BASTI",
      crimes: 1412,
    },
    {
      district: "BIJNOR",
      crimes: 1911,
    },
    {
      district: "BULANDSHAHAR",
      crimes: 3172,
    },
    {
      district: "CHANDOLI",
      crimes: 627,
    },
    {
      district: "CHITRAKOOT DHAM",
      crimes: 397,
    },
    {
      district: "DEORIA",
      crimes: 1582,
    },
    {
      district: "ETAH",
      crimes: 3170,
    },
    {
      district: "ETAWAH",
      crimes: 1492,
    },
    {
      district: "FAIZABAD",
      crimes: 1681,
    },
    {
      district: "FATEHGARH",
      crimes: 1413,
    },
    {
      district: "FATEHPUR",
      crimes: 1637,
    },
    {
      district: "FIROZABAD",
      crimes: 2555,
    },
    {
      district: "G.R.P.",
      crimes: 4039,
    },
    {
      district: "GAUTAMBUDH NAGAR",
      crimes: 2213,
    },
    {
      district: "GHAZIABAD",
      crimes: 4619,
    },
    {
      district: "GHAZIPUR",
      crimes: 1048,
    },
    {
      district: "GONDA",
      crimes: 1505,
    },
    {
      district: "GORAKHPUR",
      crimes: 2618,
    },
    {
      district: "HAMIRPUR",
      crimes: 861,
    },
    {
      district: "HARDOI",
      crimes: 1990,
    },
    {
      district: "HATHRAS",
      crimes: 1845,
    },
    {
      district: "J.P.NAGAR",
      crimes: 1241,
    },
    {
      district: "JALAUN",
      crimes: 1153,
    },
    {
      district: "JAUNPUR",
      crimes: 1405,
    },
    {
      district: "JHANSI",
      crimes: 1419,
    },
    {
      district: "KANNAUJ",
      crimes: 921,
    },
    {
      district: "KANPUR DEHAT",
      crimes: 1436,
    },
    {
      district: "KANPUR NAGAR",
      crimes: 5908,
    },
    {
      district: "KAUSHAMBI",
      crimes: 950,
    },
    {
      district: "KHIRI",
      crimes: 2452,
    },
    {
      district: "KUSHI NAGAR",
      crimes: 1198,
    },
    {
      district: "LALITPUR",
      crimes: 584,
    },
    {
      district: "LUCKNOW",
      crimes: 8622,
    },
    {
      district: "MAHARAJGANJ",
      crimes: 679,
    },
    {
      district: "MAHOBA",
      crimes: 593,
    },
    {
      district: "MAINPURI",
      crimes: 1701,
    },
    {
      district: "MATHURA",
      crimes: 2610,
    },
    {
      district: "MAU",
      crimes: 1119,
    },
    {
      district: "MEERUT",
      crimes: 4018,
    },
    {
      district: "MIRZAPUR",
      crimes: 902,
    },
    {
      district: "MORADABAD",
      crimes: 2852,
    },
    {
      district: "MUZAFFARNAGAR",
      crimes: 3188,
    },
    {
      district: "PILIBHIT",
      crimes: 1907,
    },
    {
      district: "PRATAPGARH",
      crimes: 1862,
    },
    {
      district: "RAIBAREILLY",
      crimes: 2109,
    },
    {
      district: "RAMPUR",
      crimes: 1412,
    },
    {
      district: "SAHARANPUR",
      crimes: 2331,
    },
    {
      district: "SANT KABIRNAGAR",
      crimes: 418,
    },
    {
      district: "SHAHJAHANPUR",
      crimes: 2716,
    },
    {
      district: "SHRAWASTI",
      crimes: 488,
    },
    {
      district: "SIDHARTHNAGAR",
      crimes: 595,
    },
    {
      district: "SITAPUR",
      crimes: 3405,
    },
    {
      district: "SONBHADRA",
      crimes: 557,
    },
    {
      district: "ST.RAVIDASNAGAR",
      crimes: 532,
    },
    {
      district: "SULTANPUR",
      crimes: 2140,
    },
    {
      district: "UNNAO",
      crimes: 2662,
    },
    {
      district: "VARANASI",
      crimes: 2809,
    },
    {
      district: "TOTAL",
      crimes: 146037,
    },
    {
      district: "ALMORA",
      crimes: 324,
    },
    {
      district: "BAGESHWAR",
      crimes: 129,
    },
    {
      district: "CHAMOLI",
      crimes: 227,
    },
    {
      district: "CHAMPAWAT",
      crimes: 92,
    },
    {
      district: "DEHRADUN",
      crimes: 1777,
    },
    {
      district: "HARIDWAR",
      crimes: 2028,
    },
    {
      district: "NAINITAL",
      crimes: 806,
    },
    {
      district: "PAURI GARHWAL",
      crimes: 426,
    },
    {
      district: "PITHORAGARH",
      crimes: 271,
    },
    {
      district: "RUDRA PRAYAG",
      crimes: 120,
    },
    {
      district: "TEHRI GARHWAL",
      crimes: 283,
    },
    {
      district: "UDHAMSINGH NAGAR",
      crimes: 1257,
    },
    {
      district: "UTTARKASHI",
      crimes: 236,
    },
    {
      district: "TOTAL",
      crimes: 7976,
    },
    {
      district: "24 PARGANAS NORTH",
      crimes: 6894,
    },
    {
      district: "24 PARGANAS SOUTH",
      crimes: 5965,
    },
    {
      district: "ASANSOL",
      crimes: 363,
    },
    {
      district: "BANKURA",
      crimes: 1205,
    },
    {
      district: "BIRBHUM",
      crimes: 2010,
    },
    {
      district: "BURDWAN",
      crimes: 4129,
    },
    {
      district: "COOCHBEHAR",
      crimes: 1146,
    },
    {
      district: "DAKSHIN DINAJPUR",
      crimes: 1114,
    },
    {
      district: "DARJEELING",
      crimes: 1881,
    },
    {
      district: "HOOGHLY",
      crimes: 2773,
    },
    {
      district: "HOWRAH",
      crimes: 1359,
    },
    {
      district: "HOWRAH CITY",
      crimes: 1258,
    },
    {
      district: "HOWRAH G.R.P.",
      crimes: 509,
    },
    {
      district: "JALPAIGURI",
      crimes: 1924,
    },
    {
      district: "KHARAGPUR G.R.P.",
      crimes: 185,
    },
    {
      district: "KOLKATA",
      crimes: 10663,
    },
    {
      district: "MALDA",
      crimes: 1611,
    },
    {
      district: "MURSHIDABAD",
      crimes: 2631,
    },
    {
      district: "NADIA",
      crimes: 3786,
    },
    {
      district: "PASCHIM MIDNAPUR",
      crimes: 2587,
    },
    {
      district: "PURAB MIDNAPUR",
      crimes: 1946,
    },
    {
      district: "PURULIA",
      crimes: 1158,
    },
    {
      district: "SEALDAH G.R.P.",
      crimes: 410,
    },
    {
      district: "SILIGURI G.R.P.",
      crimes: 130,
    },
    {
      district: "UTTAR DINAJPUR",
      crimes: 1325,
    },
    {
      district: "TOTAL",
      crimes: 58962,
    },
    {
      district: "ANDAMAN",
      crimes: 580,
    },
    {
      district: "NICOBAR",
      crimes: 28,
    },
    {
      district: "TOTAL",
      crimes: 608,
    },
    {
      district: "CHANDIGARH",
      crimes: 3806,
    },
    {
      district: "TOTAL",
      crimes: 3806,
    },
    {
      district: "D and N HAVELI",
      crimes: 349,
    },
    {
      district: "TOTAL",
      crimes: 349,
    },
    {
      district: "DAMAN",
      crimes: 211,
    },
    {
      district: "DIU",
      crimes: 50,
    },
    {
      district: "TOTAL",
      crimes: 261,
    },
    {
      district: "CENTRAL",
      crimes: 3578,
    },
    {
      district: "DELHI UT TOTAL",
      crimes: 49137,
    },
    {
      district: "EAST",
      crimes: 3881,
    },
    {
      district: "G.R.P.(RLY)",
      crimes: 1407,
    },
    {
      district: "I.G.I. AIRPORT",
      crimes: 724,
    },
    {
      district: "NEW DELHI",
      crimes: 2406,
    },
    {
      district: "NORTH",
      crimes: 3681,
    },
    {
      district: "NORTH EAST",
      crimes: 2957,
    },
    {
      district: "NORTH WEST",
      crimes: 9191,
    },
    {
      district: "S.T.F.",
      crimes: 0,
    },
    {
      district: "SOUTH",
      crimes: 9306,
    },
    {
      district: "SOUTH WEST",
      crimes: 4814,
    },
    {
      district: "SPL CELL",
      crimes: 44,
    },
    {
      district: "WEST",
      crimes: 7148,
    },
    {
      district: "LAKSHADWEEP",
      crimes: 53,
    },
    {
      district: "TOTAL",
      crimes: 53,
    },
    {
      district: "PONDICHERRY",
      crimes: 4437,
    },
    {
      district: "TOTAL",
      crimes: 4437,
    },
    {
      district: "ADILABAD",
      crimes: 4881,
    },
    {
      district: "ANANTAPUR",
      crimes: 4582,
    },
    {
      district: "CHITTOOR",
      crimes: 6624,
    },
    {
      district: "CUDDAPAH",
      crimes: 3447,
    },
    {
      district: "CYBERABAD",
      crimes: 10305,
    },
    {
      district: "EAST GODAVARI",
      crimes: 7616,
    },
    {
      district: "GUNTAKAL RLY.",
      crimes: 368,
    },
    {
      district: "GUNTUR",
      crimes: 7715,
    },
    {
      district: "HYDERABAD CITY",
      crimes: 20252,
    },
    {
      district: "KARIMNAGAR",
      crimes: 7709,
    },
    {
      district: "KHAMMAM",
      crimes: 5179,
    },
    {
      district: "KRISHNA",
      crimes: 5283,
    },
    {
      district: "KURNOOL",
      crimes: 4775,
    },
    {
      district: "MAHABOOBNAGAR",
      crimes: 5390,
    },
    {
      district: "MEDAK",
      crimes: 4818,
    },
    {
      district: "NALGONDA",
      crimes: 5651,
    },
    {
      district: "NELLORE",
      crimes: 5952,
    },
    {
      district: "NIZAMABAD",
      crimes: 4674,
    },
    {
      district: "PRAKASHAM",
      crimes: 3720,
    },
    {
      district: "RANGA REDDY",
      crimes: 1980,
    },
    {
      district: "SECUNDERABAD RLY.",
      crimes: 536,
    },
    {
      district: "SRIKAKULAM",
      crimes: 2663,
    },
    {
      district: "VIJAYAWADA",
      crimes: 10084,
    },
    {
      district: "VIJAYAWADA RLY.",
      crimes: 430,
    },
    {
      district: "VISAKHA RURAL",
      crimes: 2599,
    },
    {
      district: "VISAKHAPATNAM",
      crimes: 3261,
    },
    {
      district: "VIZIANAGARAM",
      crimes: 2150,
    },
    {
      district: "WARANGAL",
      crimes: 6827,
    },
    {
      district: "WEST GODAVARI",
      crimes: 7480,
    },
    {
      district: "TOTAL",
      crimes: 156951,
    },
    {
      district: "CHANGLANG",
      crimes: 145,
    },
    {
      district: "DIBANG VALLEY",
      crimes: 116,
    },
    {
      district: "K/KUMEY",
      crimes: 25,
    },
    {
      district: "KAMENG EAST",
      crimes: 101,
    },
    {
      district: "KAMENG WEST",
      crimes: 83,
    },
    {
      district: "LOHIT",
      crimes: 189,
    },
    {
      district: "PAPUM PARE",
      crimes: 405,
    },
    {
      district: "SIANG EAST",
      crimes: 232,
    },
    {
      district: "SIANG UPPER",
      crimes: 55,
    },
    {
      district: "SIANG WEST",
      crimes: 257,
    },
    {
      district: "SUBANSIRI LOWER",
      crimes: 123,
    },
    {
      district: "SUBANSIRI UPPER",
      crimes: 118,
    },
    {
      district: "TAWANG",
      crimes: 49,
    },
    {
      district: "TIRAP",
      crimes: 146,
    },
    {
      district: "UPPER DIBANG VALLEY",
      crimes: 17,
    },
    {
      district: "TOTAL",
      crimes: 2061,
    },
    {
      district: "BARPETA",
      crimes: 1644,
    },
    {
      district: "BONGAIGAON",
      crimes: 772,
    },
    {
      district: "C.I.D.",
      crimes: 24,
    },
    {
      district: "CACHAR",
      crimes: 3457,
    },
    {
      district: "DARRANG",
      crimes: 1400,
    },
    {
      district: "DHEMAJI",
      crimes: 762,
    },
    {
      district: "DHUBRI",
      crimes: 1920,
    },
    {
      district: "DIBRUGARH",
      crimes: 1901,
    },
    {
      district: "G.R.P.",
      crimes: 182,
    },
    {
      district: "GOALPARA",
      crimes: 1098,
    },
    {
      district: "GOLAGHAT",
      crimes: 1459,
    },
    {
      district: "GUWAHATI CITY",
      crimes: 5590,
    },
    {
      district: "HAILAKANDI",
      crimes: 791,
    },
    {
      district: "JORHAT",
      crimes: 1131,
    },
    {
      district: "KAMRUP",
      crimes: 1255,
    },
    {
      district: "KARBI ANGLONG",
      crimes: 619,
    },
    {
      district: "KARIMGANJ",
      crimes: 919,
    },
    {
      district: "KOKRAJHAR",
      crimes: 723,
    },
    {
      district: "LAKHIMPUR",
      crimes: 1651,
    },
    {
      district: "MORIGAON",
      crimes: 861,
    },
    {
      district: "N.C.HILLS",
      crimes: 212,
    },
    {
      district: "NAGAON",
      crimes: 3539,
    },
    {
      district: "NALBARI",
      crimes: 1215,
    },
    {
      district: "R.P.O.",
      crimes: 30,
    },
    {
      district: "SIBSAGAR",
      crimes: 1628,
    },
    {
      district: "SONITPUR",
      crimes: 2317,
    },
    {
      district: "TINSUKIA",
      crimes: 1095,
    },
    {
      district: "TOTAL",
      crimes: 38195,
    },
    {
      district: "ARARIA",
      crimes: 2071,
    },
    {
      district: "ARWAL",
      crimes: 597,
    },
    {
      district: "AURANGABAD",
      crimes: 2329,
    },
    {
      district: "BAGAHA",
      crimes: 932,
    },
    {
      district: "BANKA",
      crimes: 1250,
    },
    {
      district: "BEGUSARAI",
      crimes: 2903,
    },
    {
      district: "BETTIAH",
      crimes: 3012,
    },
    {
      district: "BHABHUA",
      crimes: 1236,
    },
    {
      district: "BHAGALPUR",
      crimes: 3042,
    },
    {
      district: "BHOJPUR",
      crimes: 2794,
    },
    {
      district: "BUXAR",
      crimes: 1167,
    },
    {
      district: "DARBHANGA",
      crimes: 2808,
    },
    {
      district: "GAYA",
      crimes: 3345,
    },
    {
      district: "GOPALGANJ",
      crimes: 2005,
    },
    {
      district: "JAMALPUR RLY.",
      crimes: 237,
    },
    {
      district: "JAMUI",
      crimes: 1055,
    },
    {
      district: "JEHANABAD",
      crimes: 1680,
    },
    {
      district: "KATIHAR",
      crimes: 2177,
    },
    {
      district: "KATIHAR RLY.",
      crimes: 524,
    },
    {
      district: "KHAGARIA",
      crimes: 1397,
    },
    {
      district: "KISHANGANJ",
      crimes: 959,
    },
    {
      district: "LAKHISARAI",
      crimes: 782,
    },
    {
      district: "MADHEPURA",
      crimes: 1001,
    },
    {
      district: "MADHUBANI",
      crimes: 2687,
    },
    {
      district: "MOTIHARI",
      crimes: 4286,
    },
    {
      district: "MUNGER",
      crimes: 1877,
    },
    {
      district: "MUZAFFARPUR",
      crimes: 4841,
    },
    {
      district: "MUZAFFARPUR RLY.",
      crimes: 594,
    },
    {
      district: "NALANDA",
      crimes: 2949,
    },
    {
      district: "NAUGACHIA",
      crimes: 693,
    },
    {
      district: "NAWADAH",
      crimes: 1347,
    },
    {
      district: "PATNA",
      crimes: 9770,
    },
    {
      district: "PATNA RLY.",
      crimes: 1119,
    },
    {
      district: "PURNEA",
      crimes: 1919,
    },
    {
      district: "ROHTAS",
      crimes: 2855,
    },
    {
      district: "SAHARSA",
      crimes: 1004,
    },
    {
      district: "SAMASTIPUR",
      crimes: 2970,
    },
    {
      district: "SARAN",
      crimes: 3709,
    },
    {
      district: "SHEIKHPURA",
      crimes: 717,
    },
    {
      district: "SHEOHAR",
      crimes: 410,
    },
    {
      district: "SITAMARHI",
      crimes: 2407,
    },
    {
      district: "SIWAN",
      crimes: 2065,
    },
    {
      district: "SUPAUL",
      crimes: 1246,
    },
    {
      district: "VAISHALI",
      crimes: 3495,
    },
    {
      district: "TOTAL",
      crimes: 92263,
    },
    {
      district: "BALRAMPUR",
      crimes: 488,
    },
    {
      district: "BILASPUR",
      crimes: 4896,
    },
    {
      district: "BIZAPUR",
      crimes: 265,
    },
    {
      district: "DANTEWARA",
      crimes: 605,
    },
    {
      district: "DHAMTARI",
      crimes: 1412,
    },
    {
      district: "DURG",
      crimes: 6127,
    },
    {
      district: "GRP RAIPUR",
      crimes: 327,
    },
    {
      district: "JAGDALPUR",
      crimes: 1923,
    },
    {
      district: "JANJGIR",
      crimes: 1733,
    },
    {
      district: "JASHPUR",
      crimes: 704,
    },
    {
      district: "KABIRDHAM",
      crimes: 869,
    },
    {
      district: "KANKER",
      crimes: 874,
    },
    {
      district: "KORBA",
      crimes: 2661,
    },
    {
      district: "KORIYA",
      crimes: 1313,
    },
    {
      district: "MAHASAMUND",
      crimes: 1412,
    },
    {
      district: "NARAYANPUR",
      crimes: 114,
    },
    {
      district: "RAIGARH",
      crimes: 1941,
    },
    {
      district: "RAIPUR",
      crimes: 6198,
    },
    {
      district: "RAJNANDGAON",
      crimes: 2247,
    },
    {
      district: "SARGUJA",
      crimes: 2340,
    },
    {
      district: "TOTAL",
      crimes: 38449,
    },
    {
      district: "NORTH GOA",
      crimes: 1330,
    },
    {
      district: "SOUTH GOA",
      crimes: 914,
    },
    {
      district: "TOTAL",
      crimes: 2244,
    },
    {
      district: "AHMEDABAD COMMR.",
      crimes: 16199,
    },
    {
      district: "AHMEDABAD RURAL",
      crimes: 2638,
    },
    {
      district: "AHWA-DANG",
      crimes: 104,
    },
    {
      district: "AMRELI",
      crimes: 1940,
    },
    {
      district: "ANAND",
      crimes: 3512,
    },
    {
      district: "BHARUCH",
      crimes: 2793,
    },
    {
      district: "BHAVNAGAR",
      crimes: 4815,
    },
    {
      district: "DAHOD",
      crimes: 1537,
    },
    {
      district: "GANDHINAGAR",
      crimes: 3380,
    },
    {
      district: "HIMATNAGAR",
      crimes: 4182,
    },
    {
      district: "JAMNAGAR",
      crimes: 3225,
    },
    {
      district: "JUNAGADH",
      crimes: 4832,
    },
    {
      district: "KHEDA NORTH",
      crimes: 3627,
    },
    {
      district: "KUTCH",
      crimes: 3272,
    },
    {
      district: "MEHSANA",
      crimes: 4789,
    },
    {
      district: "NARMADA",
      crimes: 477,
    },
    {
      district: "NAVSARI",
      crimes: 1402,
    },
    {
      district: "PALANPUR",
      crimes: 3788,
    },
    {
      district: "PANCHMAHAL",
      crimes: 2192,
    },
    {
      district: "PATAN",
      crimes: 2357,
    },
    {
      district: "PORBANDAR",
      crimes: 958,
    },
    {
      district: "RAJKOT COMMR.",
      crimes: 4802,
    },
    {
      district: "RAJKOT RURAL",
      crimes: 4319,
    },
    {
      district: "SURAT COMMR.",
      crimes: 4401,
    },
    {
      district: "SURAT RURAL",
      crimes: 2156,
    },
    {
      district: "SURENDRANAGAR",
      crimes: 3051,
    },
    {
      district: "VADODARA COMMR.",
      crimes: 5712,
    },
    {
      district: "VADODARA RURAL",
      crimes: 3215,
    },
    {
      district: "VALSAD",
      crimes: 2481,
    },
    {
      district: "W.RLY",
      crimes: 1553,
    },
    {
      district: "TOTAL",
      crimes: 103709,
    },
    {
      district: "AMBALA",
      crimes: 1898,
    },
    {
      district: "BHIWANI",
      crimes: 1994,
    },
    {
      district: "FARIDABAD",
      crimes: 7110,
    },
    {
      district: "FATEHABAD",
      crimes: 938,
    },
    {
      district: "GRP",
      crimes: 729,
    },
    {
      district: "GURGAON",
      crimes: 3683,
    },
    {
      district: "HISSAR",
      crimes: 2355,
    },
    {
      district: "JHAJJAR",
      crimes: 1272,
    },
    {
      district: "JIND",
      crimes: 1084,
    },
    {
      district: "KAITHAL",
      crimes: 1206,
    },
    {
      district: "KARNAL",
      crimes: 2215,
    },
    {
      district: "KURUKSHETRA",
      crimes: 1804,
    },
    {
      district: "MAHENDRAGARH",
      crimes: 1235,
    },
    {
      district: "PANCHKULA",
      crimes: 1419,
    },
    {
      district: "PANIPAT",
      crimes: 1863,
    },
    {
      district: "REWARI",
      crimes: 1417,
    },
    {
      district: "ROHTAK",
      crimes: 1764,
    },
    {
      district: "SIRSA",
      crimes: 1515,
    },
    {
      district: "SONIPAT",
      crimes: 1828,
    },
    {
      district: "YAMUNANAGAR",
      crimes: 1283,
    },
    {
      district: "TOTAL",
      crimes: 38612,
    },
    {
      district: "BILASPUR",
      crimes: 1098,
    },
    {
      district: "CHAMBA",
      crimes: 585,
    },
    {
      district: "G.R.P.",
      crimes: 1,
    },
    {
      district: "HAMIRPUR",
      crimes: 868,
    },
    {
      district: "KANGRA",
      crimes: 2015,
    },
    {
      district: "KINNAUR",
      crimes: 156,
    },
    {
      district: "KULLU",
      crimes: 747,
    },
    {
      district: "LAHAUL-SPITI",
      crimes: 59,
    },
    {
      district: "MANDI",
      crimes: 1744,
    },
    {
      district: "SHIMLA",
      crimes: 1963,
    },
    {
      district: "SIRMAUR",
      crimes: 663,
    },
    {
      district: "SOLAN",
      crimes: 1332,
    },
    {
      district: "UNA",
      crimes: 780,
    },
    {
      district: "TOTAL",
      crimes: 12011,
    },
    {
      district: "ANANTNAG",
      crimes: 1347,
    },
    {
      district: "AWANTIPORA",
      crimes: 356,
    },
    {
      district: "BARAMULLA",
      crimes: 1815,
    },
    {
      district: "BORDER",
      crimes: 768,
    },
    {
      district: "BUDGAM",
      crimes: 921,
    },
    {
      district: "CRIME JAMMU",
      crimes: 36,
    },
    {
      district: "CRIME SRINAGAR",
      crimes: 81,
    },
    {
      district: "DODA",
      crimes: 761,
    },
    {
      district: "GANDERBAL",
      crimes: 588,
    },
    {
      district: "HANDWARA",
      crimes: 426,
    },
    {
      district: "JAMMU",
      crimes: 3370,
    },
    {
      district: "KARGIL",
      crimes: 83,
    },
    {
      district: "KATHUA",
      crimes: 1046,
    },
    {
      district: "KULGAM",
      crimes: 563,
    },
    {
      district: "KUPWARA",
      crimes: 713,
    },
    {
      district: "LEH",
      crimes: 142,
    },
    {
      district: "POONCH",
      crimes: 727,
    },
    {
      district: "PULWAMA",
      crimes: 956,
    },
    {
      district: "RAILWAYS",
      crimes: 25,
    },
    {
      district: "RAJOURI",
      crimes: 1303,
    },
    {
      district: "RAMBAN",
      crimes: 609,
    },
    {
      district: "REASI",
      crimes: 275,
    },
    {
      district: "SRINAGAR",
      crimes: 3109,
    },
    {
      district: "UDHAMPUR",
      crimes: 1213,
    },
    {
      district: "TOTAL",
      crimes: 21233,
    },
    {
      district: "BOKARO",
      crimes: 2154,
    },
    {
      district: "CHAIBASA",
      crimes: 735,
    },
    {
      district: "CHATRA",
      crimes: 1038,
    },
    {
      district: "DEOGHAR",
      crimes: 1582,
    },
    {
      district: "DHANBAD",
      crimes: 3227,
    },
    {
      district: "DHANBAD RLY.",
      crimes: 363,
    },
    {
      district: "DUMKA",
      crimes: 967,
    },
    {
      district: "GARHWA",
      crimes: 985,
    },
    {
      district: "GIRIDIH",
      crimes: 2386,
    },
    {
      district: "GODDA",
      crimes: 2195,
    },
    {
      district: "GUMLA",
      crimes: 769,
    },
    {
      district: "HAZARIBAGH",
      crimes: 2839,
    },
    {
      district: "JAMSHEDPUR",
      crimes: 2138,
    },
    {
      district: "JAMSHEDPUR RLY.",
      crimes: 235,
    },
    {
      district: "JAMTARA",
      crimes: 476,
    },
    {
      district: "KODERMA",
      crimes: 751,
    },
    {
      district: "LATEHAR",
      crimes: 519,
    },
    {
      district: "LOHARDAGGA",
      crimes: 448,
    },
    {
      district: "PAKUR",
      crimes: 526,
    },
    {
      district: "PALAMU",
      crimes: 1603,
    },
    {
      district: "RANCHI",
      crimes: 4277,
    },
    {
      district: "SAHEBGANJ",
      crimes: 642,
    },
    {
      district: "SARAIKELA",
      crimes: 973,
    },
    {
      district: "SIMDEGA",
      crimes: 375,
    },
    {
      district: "TOTAL",
      crimes: 32203,
    },
    {
      district: "BAGALKOT",
      crimes: 1951,
    },
    {
      district: "BANGALORE COMMR.",
      crimes: 29260,
    },
    {
      district: "BANGALORE RURAL",
      crimes: 7409,
    },
    {
      district: "BELGAUM",
      crimes: 4494,
    },
    {
      district: "BELLARY",
      crimes: 3302,
    },
    {
      district: "BIDAR",
      crimes: 4069,
    },
    {
      district: "BIJAPUR",
      crimes: 4283,
    },
    {
      district: "CHAMARAJNAGAR",
      crimes: 1171,
    },
    {
      district: "CHICKMAGALUR",
      crimes: 3013,
    },
    {
      district: "CHITRADURGA",
      crimes: 3276,
    },
    {
      district: "DAKSHIN KANNADA",
      crimes: 3521,
    },
    {
      district: "DAVANAGERE",
      crimes: 2988,
    },
    {
      district: "DHARWAD COMMR.",
      crimes: 1793,
    },
    {
      district: "DHARWAD RURAL",
      crimes: 903,
    },
    {
      district: "GADAG",
      crimes: 842,
    },
    {
      district: "GULBARGA",
      crimes: 4278,
    },
    {
      district: "HASSAN",
      crimes: 4196,
    },
    {
      district: "HAVERI",
      crimes: 1827,
    },
    {
      district: "K.G.F.",
      crimes: 920,
    },
    {
      district: "KODAGU",
      crimes: 1282,
    },
    {
      district: "KOLAR",
      crimes: 3213,
    },
    {
      district: "KOPPAL",
      crimes: 1135,
    },
    {
      district: "MANDYA",
      crimes: 3755,
    },
    {
      district: "MYSORE COMMR.",
      crimes: 1819,
    },
    {
      district: "MYSORE RURAL",
      crimes: 2374,
    },
    {
      district: "RAICHUR",
      crimes: 2334,
    },
    {
      district: "RAILWAYS",
      crimes: 812,
    },
    {
      district: "SHIMOGA",
      crimes: 3706,
    },
    {
      district: "TUMKUR",
      crimes: 4003,
    },
    {
      district: "UDUPI",
      crimes: 2170,
    },
    {
      district: "UTTAR KANNADA",
      crimes: 2306,
    },
    {
      district: "TOTAL",
      crimes: 112405,
    },
    {
      district: "ALAPUZHA",
      crimes: 6975,
    },
    {
      district: "CBCID",
      crimes: 232,
    },
    {
      district: "ERNAKULAM COMMR.",
      crimes: 6829,
    },
    {
      district: "ERNAKULAM RURAL",
      crimes: 8080,
    },
    {
      district: "IDUKKI",
      crimes: 4252,
    },
    {
      district: "KANNUR",
      crimes: 4273,
    },
    {
      district: "KASARGOD",
      crimes: 2843,
    },
    {
      district: "KOLLAM",
      crimes: 9380,
    },
    {
      district: "KOTTAYAM",
      crimes: 6684,
    },
    {
      district: "KOZHIKODE COMMR.",
      crimes: 4717,
    },
    {
      district: "KOZHIKODE RURAL",
      crimes: 3982,
    },
    {
      district: "MALAPPURAM",
      crimes: 5909,
    },
    {
      district: "PALAKKAD",
      crimes: 5465,
    },
    {
      district: "PATHANAMTHITTA",
      crimes: 4206,
    },
    {
      district: "RAILWAYS",
      crimes: 240,
    },
    {
      district: "THRISSUR",
      crimes: 9797,
    },
    {
      district: "TRIVANDRUM COMMR.",
      crimes: 5189,
    },
    {
      district: "TRIVANDRUM RURAL",
      crimes: 7544,
    },
    {
      district: "WAYANADU",
      crimes: 2227,
    },
    {
      district: "TOTAL",
      crimes: 98824,
    },
    {
      district: "ANUPPUR",
      crimes: 633,
    },
    {
      district: "ASHOK NAGAR",
      crimes: 2195,
    },
    {
      district: "BALAGHAT",
      crimes: 2895,
    },
    {
      district: "BARWANI",
      crimes: 2252,
    },
    {
      district: "BETUL",
      crimes: 3313,
    },
    {
      district: "BHIND",
      crimes: 3647,
    },
    {
      district: "BHOPAL",
      crimes: 14689,
    },
    {
      district: "BHOPAL RLY.",
      crimes: 1504,
    },
    {
      district: "BURHANPUR",
      crimes: 456,
    },
    {
      district: "CHHATARPUR",
      crimes: 3042,
    },
    {
      district: "CHHINDWARA",
      crimes: 3539,
    },
    {
      district: "DAMOH",
      crimes: 2676,
    },
    {
      district: "DATIYA",
      crimes: 1987,
    },
    {
      district: "DEWAS",
      crimes: 8478,
    },
    {
      district: "DHAR",
      crimes: 4938,
    },
    {
      district: "DINDORI",
      crimes: 1035,
    },
    {
      district: "GUNA",
      crimes: 3578,
    },
    {
      district: "GWALIOR",
      crimes: 7833,
    },
    {
      district: "HARDA",
      crimes: 828,
    },
    {
      district: "HOSHANGABAD",
      crimes: 3361,
    },
    {
      district: "INDORE",
      crimes: 15998,
    },
    {
      district: "INDORE RLY.",
      crimes: 202,
    },
    {
      district: "JABALPUR",
      crimes: 10004,
    },
    {
      district: "JABALPUR RLY.",
      crimes: 397,
    },
    {
      district: "JHABUA",
      crimes: 3371,
    },
    {
      district: "KATNI",
      crimes: 2557,
    },
    {
      district: "KHANDWA",
      crimes: 2791,
    },
    {
      district: "KHARGON",
      crimes: 4161,
    },
    {
      district: "MANDLA",
      crimes: 2147,
    },
    {
      district: "MANDSAUR",
      crimes: 2758,
    },
    {
      district: "MORENA",
      crimes: 4487,
    },
    {
      district: "NARSINGHPUR",
      crimes: 2146,
    },
    {
      district: "NEEMUCH",
      crimes: 2116,
    },
    {
      district: "PANNA",
      crimes: 1632,
    },
    {
      district: "RAISEN",
      crimes: 3376,
    },
    {
      district: "RAJGARH",
      crimes: 4066,
    },
    {
      district: "RATLAM",
      crimes: 3447,
    },
    {
      district: "REWA",
      crimes: 4450,
    },
    {
      district: "SAGAR",
      crimes: 6856,
    },
    {
      district: "SATNA",
      crimes: 4537,
    },
    {
      district: "SEONI",
      crimes: 1895,
    },
    {
      district: "SHAHDOL",
      crimes: 4165,
    },
    {
      district: "SHAJAPUR",
      crimes: 3718,
    },
    {
      district: "SHEOPUR",
      crimes: 1254,
    },
    {
      district: "SHIVPURI",
      crimes: 3473,
    },
    {
      district: "SIDHI",
      crimes: 3717,
    },
    {
      district: "SIHORE",
      crimes: 3212,
    },
    {
      district: "TIKAMGARH",
      crimes: 2678,
    },
    {
      district: "UJJAIN",
      crimes: 7634,
    },
    {
      district: "UMARIYA",
      crimes: 1244,
    },
    {
      district: "VIDISHA",
      crimes: 3710,
    },
    {
      district: "TOTAL",
      crimes: 191078,
    },
    {
      district: "AHMEDNAGAR",
      crimes: 4251,
    },
    {
      district: "AKOLA",
      crimes: 3900,
    },
    {
      district: "AMRAVATI COMMR.",
      crimes: 2986,
    },
    {
      district: "AMRAVATI RURAL",
      crimes: 3763,
    },
    {
      district: "AURANGABAD COMMR.",
      crimes: 2286,
    },
    {
      district: "AURANGABAD RURAL",
      crimes: 2675,
    },
    {
      district: "BEED",
      crimes: 3887,
    },
    {
      district: "BHANDARA",
      crimes: 2313,
    },
    {
      district: "BULDHANA",
      crimes: 3821,
    },
    {
      district: "CHANDRAPUR",
      crimes: 3033,
    },
    {
      district: "DHULE",
      crimes: 1754,
    },
    {
      district: "GADCHIROLI",
      crimes: 1501,
    },
    {
      district: "GONDIA",
      crimes: 1875,
    },
    {
      district: "HINGOLI",
      crimes: 1735,
    },
    {
      district: "JALGAON",
      crimes: 3927,
    },
    {
      district: "JALNA",
      crimes: 2430,
    },
    {
      district: "KOLHAPUR",
      crimes: 3358,
    },
    {
      district: "LATUR",
      crimes: 3074,
    },
    {
      district: "MUMBAI",
      crimes: 25686,
    },
    {
      district: "MUMBAI RLY.",
      crimes: 1841,
    },
    {
      district: "NAGPUR COMMR.",
      crimes: 7357,
    },
    {
      district: "NAGPUR RLY.",
      crimes: 1169,
    },
    {
      district: "NAGPUR RURAL",
      crimes: 4644,
    },
    {
      district: "NANDED",
      crimes: 5829,
    },
    {
      district: "NANDURBAR",
      crimes: 1283,
    },
    {
      district: "NASIK COMMR.",
      crimes: 2542,
    },
    {
      district: "NASIK RURAL",
      crimes: 4384,
    },
    {
      district: "NAVI MUMBAI",
      crimes: 2861,
    },
    {
      district: "OSMANABAD",
      crimes: 2507,
    },
    {
      district: "PARBHANI",
      crimes: 2350,
    },
    {
      district: "PUNE COMMR.",
      crimes: 8813,
    },
    {
      district: "PUNE RLY.",
      crimes: 261,
    },
    {
      district: "PUNE RURAL",
      crimes: 4479,
    },
    {
      district: "RAIGAD",
      crimes: 2179,
    },
    {
      district: "RATNAGIRI",
      crimes: 1272,
    },
    {
      district: "SANGLI",
      crimes: 2713,
    },
    {
      district: "SATARA",
      crimes: 3164,
    },
    {
      district: "SINDHUDURG",
      crimes: 810,
    },
    {
      district: "SOLAPUR COMMR.",
      crimes: 1682,
    },
    {
      district: "SOLAPUR RURAL",
      crimes: 3230,
    },
    {
      district: "THANE COMMR.",
      crimes: 6708,
    },
    {
      district: "THANE RURAL",
      crimes: 4008,
    },
    {
      district: "WARDHA",
      crimes: 3783,
    },
    {
      district: "WASHIM",
      crimes: 1959,
    },
    {
      district: "YAVATMAL",
      crimes: 4223,
    },
    {
      district: "TOTAL",
      crimes: 164306,
    },
    {
      district: "BISHNUPUR",
      crimes: 274,
    },
    {
      district: "CHANDEL",
      crimes: 83,
    },
    {
      district: "CHURACHANDPUR",
      crimes: 97,
    },
    {
      district: "IMPHAL(EAST)",
      crimes: 458,
    },
    {
      district: "IMPHAL(WEST)",
      crimes: 941,
    },
    {
      district: "SENAPATI",
      crimes: 132,
    },
    {
      district: "TAMENGLONG",
      crimes: 24,
    },
    {
      district: "THOUBAL",
      crimes: 488,
    },
    {
      district: "UKHRUL",
      crimes: 40,
    },
    {
      district: "TOTAL",
      crimes: 2537,
    },
    {
      district: "GARO HILLS EAST",
      crimes: 132,
    },
    {
      district: "GARO HILLS SOUTH",
      crimes: 46,
    },
    {
      district: "GARO HILLS WEST",
      crimes: 200,
    },
    {
      district: "JAINTIA HILLS",
      crimes: 264,
    },
    {
      district: "KHASI HILLS EAST",
      crimes: 770,
    },
    {
      district: "KHASI HILLS WEST",
      crimes: 91,
    },
    {
      district: "RI-BHOI",
      crimes: 166,
    },
    {
      district: "TOTAL",
      crimes: 1669,
    },
    {
      district: "AIZAWL",
      crimes: 1871,
    },
    {
      district: "CHAMPHAI",
      crimes: 221,
    },
    {
      district: "KOLASIB",
      crimes: 253,
    },
    {
      district: "LAWNGTLAI",
      crimes: 144,
    },
    {
      district: "LUNGLEI",
      crimes: 355,
    },
    {
      district: "MAMIT",
      crimes: 93,
    },
    {
      district: "SAIHA",
      crimes: 360,
    },
    {
      district: "SERCHHIP",
      crimes: 159,
    },
    {
      district: "TOTAL",
      crimes: 3456,
    },
    {
      district: "DIMAPUR",
      crimes: 238,
    },
    {
      district: "KIPHIRE",
      crimes: 16,
    },
    {
      district: "KOHIMA",
      crimes: 245,
    },
    {
      district: "MOKOKCHUNG",
      crimes: 103,
    },
    {
      district: "MON",
      crimes: 84,
    },
    {
      district: "PEREN",
      crimes: 27,
    },
    {
      district: "PHEK",
      crimes: 65,
    },
    {
      district: "TUENSANG",
      crimes: 56,
    },
    {
      district: "WOKHA",
      crimes: 85,
    },
    {
      district: "ZUNHEBOTO",
      crimes: 57,
    },
    {
      district: "TOTAL",
      crimes: 976,
    },
    {
      district: "ANGUL",
      crimes: 1614,
    },
    {
      district: "BALASORE",
      crimes: 2545,
    },
    {
      district: "BARAGARH",
      crimes: 1372,
    },
    {
      district: "BERHAMPUR",
      crimes: 1097,
    },
    {
      district: "BHADRAK",
      crimes: 1410,
    },
    {
      district: "BOLANGIR",
      crimes: 1648,
    },
    {
      district: "BOUDH",
      crimes: 405,
    },
    {
      district: "CUTTACK",
      crimes: 3985,
    },
    {
      district: "DEOGARH",
      crimes: 502,
    },
    {
      district: "DHENKANAL",
      crimes: 1187,
    },
    {
      district: "GAJAPATI",
      crimes: 368,
    },
    {
      district: "GANJAM",
      crimes: 2026,
    },
    {
      district: "JAGATSINGHPUR",
      crimes: 1302,
    },
    {
      district: "JAJPUR",
      crimes: 1630,
    },
    {
      district: "JHARSUGUDA",
      crimes: 962,
    },
    {
      district: "KALAHANDI",
      crimes: 780,
    },
    {
      district: "KANDHAMAL",
      crimes: 945,
    },
    {
      district: "KENDRAPARA",
      crimes: 930,
    },
    {
      district: "KEONJHAR",
      crimes: 1973,
    },
    {
      district: "KHURDA",
      crimes: 5271,
    },
    {
      district: "KORAPUT",
      crimes: 1534,
    },
    {
      district: "MALKANGIR",
      crimes: 440,
    },
    {
      district: "MAYURBHANJ",
      crimes: 2213,
    },
    {
      district: "NAYAGARH",
      crimes: 903,
    },
    {
      district: "NOWRANGPUR",
      crimes: 708,
    },
    {
      district: "NUAPADA",
      crimes: 562,
    },
    {
      district: "PURI",
      crimes: 2442,
    },
    {
      district: "RAYAGADA",
      crimes: 881,
    },
    {
      district: "ROURKELA",
      crimes: 1178,
    },
    {
      district: "SAMBALPUR",
      crimes: 1775,
    },
    {
      district: "SONEPUR",
      crimes: 466,
    },
    {
      district: "SRP(CUTTACK)",
      crimes: 509,
    },
    {
      district: "SRP(ROURKELA)",
      crimes: 211,
    },
    {
      district: "SUNDARGARH",
      crimes: 1507,
    },
    {
      district: "TOTAL",
      crimes: 47281,
    },
    {
      district: "AMRITSAR",
      crimes: 1422,
    },
    {
      district: "BARNALA",
      crimes: 623,
    },
    {
      district: "BATALA",
      crimes: 715,
    },
    {
      district: "BHATINDA",
      crimes: 1330,
    },
    {
      district: "FARIDKOT",
      crimes: 561,
    },
    {
      district: "FATEHGARH SAHIB",
      crimes: 482,
    },
    {
      district: "FEROZEPUR",
      crimes: 1909,
    },
    {
      district: "G.R.P",
      crimes: 377,
    },
    {
      district: "GURDASPUR",
      crimes: 669,
    },
    {
      district: "HOSHIARPUR",
      crimes: 1205,
    },
    {
      district: "JAGRAON",
      crimes: 597,
    },
    {
      district: "JALANDHAR",
      crimes: 3019,
    },
    {
      district: "KAPURTHALA",
      crimes: 887,
    },
    {
      district: "KHANNA",
      crimes: 612,
    },
    {
      district: "LUDHIANA",
      crimes: 4663,
    },
    {
      district: "MAJITHA",
      crimes: 769,
    },
    {
      district: "MANSA",
      crimes: 546,
    },
    {
      district: "MOGA",
      crimes: 832,
    },
    {
      district: "MUKTSAR",
      crimes: 506,
    },
    {
      district: "NAWAN SHAHR",
      crimes: 737,
    },
    {
      district: "PATIALA",
      crimes: 2949,
    },
    {
      district: "ROPAR",
      crimes: 1420,
    },
    {
      district: "SANGRUR",
      crimes: 1328,
    },
    {
      district: "TARN TARAN",
      crimes: 598,
    },
    {
      district: "TOTAL",
      crimes: 28756,
    },
    {
      district: "AJMER",
      crimes: 6360,
    },
    {
      district: "ALWAR",
      crimes: 7118,
    },
    {
      district: "BANSWARA",
      crimes: 3171,
    },
    {
      district: "BARAN",
      crimes: 3486,
    },
    {
      district: "BARMER",
      crimes: 2424,
    },
    {
      district: "BHARATPUR",
      crimes: 7191,
    },
    {
      district: "BHILWARA",
      crimes: 5890,
    },
    {
      district: "BIKANER",
      crimes: 3512,
    },
    {
      district: "BUNDI",
      crimes: 3648,
    },
    {
      district: "CHITTORGARH",
      crimes: 6574,
    },
    {
      district: "CHURU",
      crimes: 2866,
    },
    {
      district: "DAUSA",
      crimes: 3482,
    },
    {
      district: "DHOLPUR",
      crimes: 2530,
    },
    {
      district: "DUNGARPUR",
      crimes: 1885,
    },
    {
      district: "G.R.P.",
      crimes: 858,
    },
    {
      district: "GANGANAGAR",
      crimes: 5236,
    },
    {
      district: "HANUMANGARH",
      crimes: 3818,
    },
    {
      district: "JAIPUR",
      crimes: 18758,
    },
    {
      district: "JAISALMER",
      crimes: 696,
    },
    {
      district: "JALORE",
      crimes: 2404,
    },
    {
      district: "JHALAWAR",
      crimes: 3262,
    },
    {
      district: "JHUNJHUNU",
      crimes: 3607,
    },
    {
      district: "JODHPUR",
      crimes: 6824,
    },
    {
      district: "KARAULI",
      crimes: 3217,
    },
    {
      district: "KOTA",
      crimes: 6030,
    },
    {
      district: "NAGAUR",
      crimes: 4476,
    },
    {
      district: "PALI",
      crimes: 4969,
    },
    {
      district: "RAJSAMAND",
      crimes: 2639,
    },
    {
      district: "SAWAI MADHOPUR",
      crimes: 3098,
    },
    {
      district: "SIKAR",
      crimes: 3552,
    },
    {
      district: "SIROHI",
      crimes: 2055,
    },
    {
      district: "TONK",
      crimes: 3837,
    },
    {
      district: "UDAIPUR",
      crimes: 6106,
    },
    {
      district: "TOTAL",
      crimes: 145579,
    },
    {
      district: "EAST",
      crimes: 280,
    },
    {
      district: "NORTH",
      crimes: 14,
    },
    {
      district: "SOUTH",
      crimes: 91,
    },
    {
      district: "WEST",
      crimes: 58,
    },
    {
      district: "TOTAL",
      crimes: 443,
    },
    {
      district: "CHENGAI",
      crimes: 11079,
    },
    {
      district: "CHENNAI",
      crimes: 8580,
    },
    {
      district: "CHENNAI RLY.",
      crimes: 574,
    },
    {
      district: "COIMBATORE RURAL",
      crimes: 9257,
    },
    {
      district: "COIMBATORE URBAN",
      crimes: 3187,
    },
    {
      district: "CUDDALORE",
      crimes: 6098,
    },
    {
      district: "DHARMAPURI",
      crimes: 6099,
    },
    {
      district: "DINDIGUL",
      crimes: 5020,
    },
    {
      district: "ERODE",
      crimes: 6052,
    },
    {
      district: "KANCHIPURAM",
      crimes: 5087,
    },
    {
      district: "KANYAKUMARI",
      crimes: 3502,
    },
    {
      district: "KARUR",
      crimes: 2414,
    },
    {
      district: "MADURAI RURAL",
      crimes: 4110,
    },
    {
      district: "MADURAI URBAN",
      crimes: 3253,
    },
    {
      district: "NAGAPATTINAM",
      crimes: 3636,
    },
    {
      district: "NAMAKKAL",
      crimes: 3558,
    },
    {
      district: "NILGIRIS",
      crimes: 1599,
    },
    {
      district: "PERAMBALUR",
      crimes: 2438,
    },
    {
      district: "PUDUKOTTAI",
      crimes: 3262,
    },
    {
      district: "RAMNATHAPURAM",
      crimes: 2959,
    },
    {
      district: "SALEM RURAL",
      crimes: 6310,
    },
    {
      district: "SALEM URBAN",
      crimes: 2070,
    },
    {
      district: "SIVAGANGAI",
      crimes: 2721,
    },
    {
      district: "THANJAVUR",
      crimes: 3985,
    },
    {
      district: "THENI",
      crimes: 3054,
    },
    {
      district: "THIRUNELVELI RURAL",
      crimes: 6367,
    },
    {
      district: "THIRUNELVELI URBAN",
      crimes: 1065,
    },
    {
      district: "THIRUVALLUR",
      crimes: 3184,
    },
    {
      district: "THIRUVANNAMALAI",
      crimes: 3949,
    },
    {
      district: "THIRUVARUR",
      crimes: 2776,
    },
    {
      district: "THOOTHUGUDI",
      crimes: 5353,
    },
    {
      district: "TRICHY RLY.",
      crimes: 177,
    },
    {
      district: "TRICHY RURAL",
      crimes: 3037,
    },
    {
      district: "TRICHY URBAN",
      crimes: 2470,
    },
    {
      district: "VELLORE",
      crimes: 7354,
    },
    {
      district: "VILLUPURAM",
      crimes: 6735,
    },
    {
      district: "VIRUDHUNAGAR",
      crimes: 4815,
    },
    {
      district: "TOTAL",
      crimes: 157186,
    },
    {
      district: "DHALAI",
      crimes: 530,
    },
    {
      district: "NORTH",
      crimes: 719,
    },
    {
      district: "SOUTH",
      crimes: 897,
    },
    {
      district: "WEST",
      crimes: 1368,
    },
    {
      district: "TOTAL",
      crimes: 3514,
    },
    {
      district: "AGRA",
      crimes: 3438,
    },
    {
      district: "ALIGARH",
      crimes: 2325,
    },
    {
      district: "ALLAHABAD",
      crimes: 2512,
    },
    {
      district: "AMBEDKAR NAGAR",
      crimes: 406,
    },
    {
      district: "AURAIYA",
      crimes: 745,
    },
    {
      district: "AZAMGARH",
      crimes: 1404,
    },
    {
      district: "BADAUN",
      crimes: 1834,
    },
    {
      district: "BAGHPAT",
      crimes: 690,
    },
    {
      district: "BAHRAICH",
      crimes: 1144,
    },
    {
      district: "BALLIA",
      crimes: 652,
    },
    {
      district: "BALRAMPUR",
      crimes: 255,
    },
    {
      district: "BANDA",
      crimes: 746,
    },
    {
      district: "BARABANKI",
      crimes: 1033,
    },
    {
      district: "BAREILLY",
      crimes: 2545,
    },
    {
      district: "BASTI",
      crimes: 1233,
    },
    {
      district: "BIJNOR",
      crimes: 1869,
    },
    {
      district: "BULANDSHAHAR",
      crimes: 1870,
    },
    {
      district: "CHANDOLI",
      crimes: 390,
    },
    {
      district: "CHITRAKOOT DHAM",
      crimes: 299,
    },
    {
      district: "DEORIA",
      crimes: 844,
    },
    {
      district: "ETAH",
      crimes: 1555,
    },
    {
      district: "ETAWAH",
      crimes: 808,
    },
    {
      district: "FAIZABAD",
      crimes: 704,
    },
    {
      district: "FATEHGARH",
      crimes: 851,
    },
    {
      district: "FATEHPUR",
      crimes: 913,
    },
    {
      district: "FIROZABAD",
      crimes: 1715,
    },
    {
      district: "G.R.P.",
      crimes: 3278,
    },
    {
      district: "GAUTAMBUDH NAGAR",
      crimes: 1085,
    },
    {
      district: "GHAZIABAD",
      crimes: 2627,
    },
    {
      district: "GHAZIPUR",
      crimes: 659,
    },
    {
      district: "GONDA",
      crimes: 912,
    },
    {
      district: "GORAKHPUR",
      crimes: 1690,
    },
    {
      district: "HAMIRPUR",
      crimes: 365,
    },
    {
      district: "HARDOI",
      crimes: 1446,
    },
    {
      district: "HATHRAS",
      crimes: 1387,
    },
    {
      district: "J.P.NAGAR",
      crimes: 1066,
    },
    {
      district: "JALAUN",
      crimes: 734,
    },
    {
      district: "JAUNPUR",
      crimes: 1108,
    },
    {
      district: "JHANSI",
      crimes: 1516,
    },
    {
      district: "KANNAUJ",
      crimes: 870,
    },
    {
      district: "KANPUR DEHAT",
      crimes: 1218,
    },
    {
      district: "KANPUR NAGAR",
      crimes: 3231,
    },
    {
      district: "KAUSHAMBI",
      crimes: 503,
    },
    {
      district: "KHIRI",
      crimes: 2108,
    },
    {
      district: "KUSHI NAGAR",
      crimes: 731,
    },
    {
      district: "LALITPUR",
      crimes: 344,
    },
    {
      district: "LUCKNOW",
      crimes: 6806,
    },
    {
      district: "MAHARAJGANJ",
      crimes: 679,
    },
    {
      district: "MAHOBA",
      crimes: 386,
    },
    {
      district: "MAINPURI",
      crimes: 1073,
    },
    {
      district: "MATHURA",
      crimes: 1520,
    },
    {
      district: "MAU",
      crimes: 745,
    },
    {
      district: "MEERUT",
      crimes: 2705,
    },
    {
      district: "MIRZAPUR",
      crimes: 544,
    },
    {
      district: "MORADABAD",
      crimes: 2037,
    },
    {
      district: "MUZAFFARNAGAR",
      crimes: 2485,
    },
    {
      district: "PILIBHIT",
      crimes: 1181,
    },
    {
      district: "PRATAPGARH",
      crimes: 1001,
    },
    {
      district: "RAIBAREILLY",
      crimes: 1445,
    },
    {
      district: "RAMPUR",
      crimes: 1149,
    },
    {
      district: "SAHARANPUR",
      crimes: 1623,
    },
    {
      district: "SANT KABIRNAGAR",
      crimes: 378,
    },
    {
      district: "SHAHJAHANPUR",
      crimes: 1446,
    },
    {
      district: "SHRAWASTI",
      crimes: 237,
    },
    {
      district: "SIDHARTHNAGAR",
      crimes: 634,
    },
    {
      district: "SITAPUR",
      crimes: 1905,
    },
    {
      district: "SONBHADRA",
      crimes: 334,
    },
    {
      district: "ST.RAVIDASNAGAR",
      crimes: 285,
    },
    {
      district: "SULTANPUR",
      crimes: 1249,
    },
    {
      district: "UNNAO",
      crimes: 1887,
    },
    {
      district: "VARANASI",
      crimes: 1681,
    },
    {
      district: "TOTAL",
      crimes: 95073,
    },
    {
      district: "ALMORA",
      crimes: 254,
    },
    {
      district: "BAGESHWAR",
      crimes: 102,
    },
    {
      district: "CHAMOLI",
      crimes: 201,
    },
    {
      district: "CHAMPAWAT",
      crimes: 123,
    },
    {
      district: "DEHRADUN",
      crimes: 1673,
    },
    {
      district: "HARIDWAR",
      crimes: 1776,
    },
    {
      district: "NAINITAL",
      crimes: 875,
    },
    {
      district: "PAURI GARHWAL",
      crimes: 451,
    },
    {
      district: "PITHORAGARH",
      crimes: 305,
    },
    {
      district: "RUDRA PRAYAG",
      crimes: 143,
    },
    {
      district: "TEHRI GARHWAL",
      crimes: 317,
    },
    {
      district: "UDHAMSINGH NAGAR",
      crimes: 1426,
    },
    {
      district: "UTTARKASHI",
      crimes: 277,
    },
    {
      district: "TOTAL",
      crimes: 7923,
    },
    {
      district: "24 PARGANAS NORTH",
      crimes: 7351,
    },
    {
      district: "24 PARGANAS SOUTH",
      crimes: 6556,
    },
    {
      district: "ASANSOL",
      crimes: 1327,
    },
    {
      district: "BANKURA",
      crimes: 1341,
    },
    {
      district: "BIRBHUM",
      crimes: 1845,
    },
    {
      district: "BURDWAN",
      crimes: 3209,
    },
    {
      district: "COOCHBEHAR",
      crimes: 1191,
    },
    {
      district: "DAKSHIN DINAJPUR",
      crimes: 870,
    },
    {
      district: "DARJEELING",
      crimes: 1720,
    },
    {
      district: "HOOGHLY",
      crimes: 3031,
    },
    {
      district: "HOWRAH",
      crimes: 1113,
    },
    {
      district: "HOWRAH CITY",
      crimes: 1417,
    },
    {
      district: "HOWRAH G.R.P.",
      crimes: 467,
    },
    {
      district: "JALPAIGURI",
      crimes: 2301,
    },
    {
      district: "KHARAGPUR G.R.P.",
      crimes: 165,
    },
    {
      district: "KOLKATA",
      crimes: 10714,
    },
    {
      district: "MALDA",
      crimes: 1747,
    },
    {
      district: "MURSHIDABAD",
      crimes: 3467,
    },
    {
      district: "NADIA",
      crimes: 3520,
    },
    {
      district: "PASCHIM MIDNAPUR",
      crimes: 2956,
    },
    {
      district: "PURAB MIDNAPUR",
      crimes: 1966,
    },
    {
      district: "PURULIA",
      crimes: 1089,
    },
    {
      district: "SEALDAH G.R.P.",
      crimes: 337,
    },
    {
      district: "SILIGURI G.R.P.",
      crimes: 147,
    },
    {
      district: "UTTAR DINAJPUR",
      crimes: 1327,
    },
    {
      district: "TOTAL",
      crimes: 61174,
    },
    {
      district: "ANDAMAN",
      crimes: 611,
    },
    {
      district: "NICOBAR",
      crimes: 33,
    },
    {
      district: "TOTAL",
      crimes: 644,
    },
    {
      district: "CHANDIGARH",
      crimes: 2806,
    },
    {
      district: "TOTAL",
      crimes: 2806,
    },
    {
      district: "D and N HAVELI",
      crimes: 338,
    },
    {
      district: "TOTAL",
      crimes: 338,
    },
    {
      district: "DAMAN",
      crimes: 240,
    },
    {
      district: "DIU",
      crimes: 29,
    },
    {
      district: "TOTAL",
      crimes: 269,
    },
    {
      district: "CENTRAL",
      crimes: 2998,
    },
    {
      district: "DELHI UT TOTAL",
      crimes: 47404,
    },
    {
      district: "EAST",
      crimes: 4331,
    },
    {
      district: "G.R.P.(RLY)",
      crimes: 1168,
    },
    {
      district: "I.G.I. AIRPORT",
      crimes: 668,
    },
    {
      district: "NEW DELHI",
      crimes: 2177,
    },
    {
      district: "NORTH",
      crimes: 3391,
    },
    {
      district: "NORTH EAST",
      crimes: 3125,
    },
    {
      district: "NORTH WEST",
      crimes: 8782,
    },
    {
      district: "S.T.F.",
      crimes: 68,
    },
    {
      district: "SOUTH",
      crimes: 8440,
    },
    {
      district: "SOUTH WEST",
      crimes: 5179,
    },
    {
      district: "WEST",
      crimes: 7077,
    },
    {
      district: "LAKSHADWEEP",
      crimes: 31,
    },
    {
      district: "TOTAL",
      crimes: 31,
    },
    {
      district: "PONDICHERRY",
      crimes: 4517,
    },
    {
      district: "TOTAL",
      crimes: 4517,
    },
    {
      district: "ADILABAD",
      crimes: 5011,
    },
    {
      district: "ANANTAPUR",
      crimes: 4296,
    },
    {
      district: "CHITTOOR",
      crimes: 6960,
    },
    {
      district: "CUDDAPAH",
      crimes: 4107,
    },
    {
      district: "CYBERABAD",
      crimes: 9911,
    },
    {
      district: "EAST GODAVARI",
      crimes: 7741,
    },
    {
      district: "GUNTAKAL RLY.",
      crimes: 338,
    },
    {
      district: "GUNTUR",
      crimes: 8544,
    },
    {
      district: "HYDERABAD CITY",
      crimes: 18868,
    },
    {
      district: "KARIMNAGAR",
      crimes: 8048,
    },
    {
      district: "KHAMMAM",
      crimes: 5928,
    },
    {
      district: "KRISHNA",
      crimes: 5377,
    },
    {
      district: "KURNOOL",
      crimes: 5372,
    },
    {
      district: "MAHABOOBNAGAR",
      crimes: 4545,
    },
    {
      district: "MEDAK",
      crimes: 4789,
    },
    {
      district: "NALGONDA",
      crimes: 6009,
    },
    {
      district: "NELLORE",
      crimes: 7047,
    },
    {
      district: "NIZAMABAD",
      crimes: 4804,
    },
    {
      district: "PRAKASHAM",
      crimes: 3881,
    },
    {
      district: "RANGA REDDY",
      crimes: 2240,
    },
    {
      district: "SECUNDERABAD RLY.",
      crimes: 465,
    },
    {
      district: "SRIKAKULAM",
      crimes: 2821,
    },
    {
      district: "VIJAYAWADA",
      crimes: 7659,
    },
    {
      district: "VIJAYAWADA RLY.",
      crimes: 359,
    },
    {
      district: "VISAKHA RURAL",
      crimes: 2903,
    },
    {
      district: "VISAKHAPATNAM",
      crimes: 3182,
    },
    {
      district: "VIZIANAGARAM",
      crimes: 2464,
    },
    {
      district: "WARANGAL",
      crimes: 7717,
    },
    {
      district: "WEST GODAVARI",
      crimes: 7370,
    },
    {
      district: "TOTAL",
      crimes: 158756,
    },
    {
      district: "CHANGLANG",
      crimes: 162,
    },
    {
      district: "DIBANG VALLEY",
      crimes: 112,
    },
    {
      district: "K/KUMEY",
      crimes: 39,
    },
    {
      district: "KAMENG EAST",
      crimes: 100,
    },
    {
      district: "KAMENG WEST",
      crimes: 104,
    },
    {
      district: "LOHIT",
      crimes: 180,
    },
    {
      district: "PAPUM PARE",
      crimes: 440,
    },
    {
      district: "SIANG EAST",
      crimes: 292,
    },
    {
      district: "SIANG UPPER",
      crimes: 51,
    },
    {
      district: "SIANG WEST",
      crimes: 329,
    },
    {
      district: "SUBANSIRI LOWER",
      crimes: 95,
    },
    {
      district: "SUBANSIRI UPPER",
      crimes: 138,
    },
    {
      district: "TAWANG",
      crimes: 75,
    },
    {
      district: "TIRAP",
      crimes: 122,
    },
    {
      district: "UPPER DIBANG VALLEY",
      crimes: 17,
    },
    {
      district: "TOTAL",
      crimes: 2256,
    },
    {
      district: "BARPETA",
      crimes: 1543,
    },
    {
      district: "BONGAIGAON",
      crimes: 1142,
    },
    {
      district: "C.I.D.",
      crimes: 22,
    },
    {
      district: "CACHAR",
      crimes: 3518,
    },
    {
      district: "DARRANG",
      crimes: 1653,
    },
    {
      district: "DHEMAJI",
      crimes: 838,
    },
    {
      district: "DHUBRI",
      crimes: 2160,
    },
    {
      district: "DIBRUGARH",
      crimes: 2074,
    },
    {
      district: "G.R.P.",
      crimes: 330,
    },
    {
      district: "GOALPARA",
      crimes: 1053,
    },
    {
      district: "GOLAGHAT",
      crimes: 1514,
    },
    {
      district: "GUWAHATI CITY",
      crimes: 5074,
    },
    {
      district: "HAILAKANDI",
      crimes: 798,
    },
    {
      district: "JORHAT",
      crimes: 953,
    },
    {
      district: "KAMRUP",
      crimes: 2559,
    },
    {
      district: "KARBI ANGLONG",
      crimes: 593,
    },
    {
      district: "KARIMGANJ",
      crimes: 1097,
    },
    {
      district: "KOKRAJHAR",
      crimes: 859,
    },
    {
      district: "LAKHIMPUR",
      crimes: 1478,
    },
    {
      district: "MORIGAON",
      crimes: 792,
    },
    {
      district: "N.C.HILLS",
      crimes: 229,
    },
    {
      district: "NAGAON",
      crimes: 3477,
    },
    {
      district: "NALBARI",
      crimes: 1133,
    },
    {
      district: "R.P.O.",
      crimes: 110,
    },
    {
      district: "SIBSAGAR",
      crimes: 1514,
    },
    {
      district: "SONITPUR",
      crimes: 2639,
    },
    {
      district: "TINSUKIA",
      crimes: 1523,
    },
    {
      district: "TOTAL",
      crimes: 40675,
    },
    {
      district: "ARARIA",
      crimes: 2035,
    },
    {
      district: "ARWAL",
      crimes: 487,
    },
    {
      district: "AURANGABAD",
      crimes: 2418,
    },
    {
      district: "BAGAHA",
      crimes: 977,
    },
    {
      district: "BANKA",
      crimes: 1378,
    },
    {
      district: "BEGUSARAI",
      crimes: 3110,
    },
    {
      district: "BETTIAH",
      crimes: 5235,
    },
    {
      district: "BHABHUA",
      crimes: 1432,
    },
    {
      district: "BHAGALPUR",
      crimes: 3362,
    },
    {
      district: "BHOJPUR",
      crimes: 3795,
    },
    {
      district: "BUXAR",
      crimes: 2304,
    },
    {
      district: "DARBHANGA",
      crimes: 3083,
    },
    {
      district: "GAYA",
      crimes: 3536,
    },
    {
      district: "GOPALGANJ",
      crimes: 2724,
    },
    {
      district: "JAMALPUR RLY.",
      crimes: 328,
    },
    {
      district: "JAMUI",
      crimes: 1388,
    },
    {
      district: "JEHANABAD",
      crimes: 1430,
    },
    {
      district: "KATIHAR",
      crimes: 1899,
    },
    {
      district: "KATIHAR RLY.",
      crimes: 445,
    },
    {
      district: "KHAGARIA",
      crimes: 1554,
    },
    {
      district: "KISHANGANJ",
      crimes: 1052,
    },
    {
      district: "LAKHISARAI",
      crimes: 914,
    },
    {
      district: "MADHEPURA",
      crimes: 1175,
    },
    {
      district: "MADHUBANI",
      crimes: 2721,
    },
    {
      district: "MOTIHARI",
      crimes: 4331,
    },
    {
      district: "MUNGER",
      crimes: 1672,
    },
    {
      district: "MUZAFFARPUR",
      crimes: 6810,
    },
    {
      district: "MUZAFFARPUR RLY.",
      crimes: 685,
    },
    {
      district: "NALANDA",
      crimes: 3403,
    },
    {
      district: "NAUGACHIA",
      crimes: 1059,
    },
    {
      district: "NAWADAH",
      crimes: 1772,
    },
    {
      district: "PATNA",
      crimes: 10632,
    },
    {
      district: "PATNA RLY.",
      crimes: 1135,
    },
    {
      district: "PURNEA",
      crimes: 2275,
    },
    {
      district: "ROHTAS",
      crimes: 2854,
    },
    {
      district: "SAHARSA",
      crimes: 1554,
    },
    {
      district: "SAMASTIPUR",
      crimes: 3159,
    },
    {
      district: "SARAN",
      crimes: 4851,
    },
    {
      district: "SHEIKHPURA",
      crimes: 794,
    },
    {
      district: "SHEOHAR",
      crimes: 389,
    },
    {
      district: "SITAMARHI",
      crimes: 2734,
    },
    {
      district: "SIWAN",
      crimes: 2294,
    },
    {
      district: "SUPAUL",
      crimes: 1843,
    },
    {
      district: "VAISHALI",
      crimes: 5032,
    },
    {
      district: "TOTAL",
      crimes: 108060,
    },
    {
      district: "BALRAMPUR",
      crimes: 489,
    },
    {
      district: "BILASPUR",
      crimes: 5327,
    },
    {
      district: "BIZAPUR",
      crimes: 260,
    },
    {
      district: "DANTEWARA",
      crimes: 702,
    },
    {
      district: "DHAMTARI",
      crimes: 1270,
    },
    {
      district: "DURG",
      crimes: 6518,
    },
    {
      district: "GRP RAIPUR",
      crimes: 351,
    },
    {
      district: "JAGDALPUR",
      crimes: 2197,
    },
    {
      district: "JANJGIR",
      crimes: 2398,
    },
    {
      district: "JASHPUR",
      crimes: 835,
    },
    {
      district: "KABIRDHAM",
      crimes: 1114,
    },
    {
      district: "KANKER",
      crimes: 966,
    },
    {
      district: "KORBA",
      crimes: 2210,
    },
    {
      district: "KORIYA",
      crimes: 1486,
    },
    {
      district: "MAHASAMUND",
      crimes: 1489,
    },
    {
      district: "NARAYANPUR",
      crimes: 165,
    },
    {
      district: "RAIGARH",
      crimes: 2035,
    },
    {
      district: "RAIPUR",
      crimes: 6970,
    },
    {
      district: "RAJNANDGAON",
      crimes: 2380,
    },
    {
      district: "SARGUJA",
      crimes: 2765,
    },
    {
      district: "TOTAL",
      crimes: 41927,
    },
    {
      district: "NORTH GOA",
      crimes: 1227,
    },
    {
      district: "SOUTH GOA",
      crimes: 900,
    },
    {
      district: "TOTAL",
      crimes: 2127,
    },
    {
      district: "AHMEDABAD COMMR.",
      crimes: 17553,
    },
    {
      district: "AHMEDABAD RURAL",
      crimes: 2813,
    },
    {
      district: "AHWA-DANG",
      crimes: 124,
    },
    {
      district: "AMRELI",
      crimes: 2240,
    },
    {
      district: "ANAND",
      crimes: 3216,
    },
    {
      district: "BHARUCH",
      crimes: 2747,
    },
    {
      district: "BHAVNAGAR",
      crimes: 5341,
    },
    {
      district: "DAHOD",
      crimes: 1759,
    },
    {
      district: "GANDHINAGAR",
      crimes: 2756,
    },
    {
      district: "HIMATNAGAR",
      crimes: 4053,
    },
    {
      district: "JAMNAGAR",
      crimes: 3794,
    },
    {
      district: "JUNAGADH",
      crimes: 4764,
    },
    {
      district: "KHEDA NORTH",
      crimes: 3643,
    },
    {
      district: "KUTCH",
      crimes: 3638,
    },
    {
      district: "MEHSANA",
      crimes: 4549,
    },
    {
      district: "NARMADA",
      crimes: 590,
    },
    {
      district: "NAVSARI",
      crimes: 1199,
    },
    {
      district: "PALANPUR",
      crimes: 3544,
    },
    {
      district: "PANCHMAHAL",
      crimes: 2306,
    },
    {
      district: "PATAN",
      crimes: 2186,
    },
    {
      district: "PORBANDAR",
      crimes: 1008,
    },
    {
      district: "RAJKOT COMMR.",
      crimes: 4339,
    },
    {
      district: "RAJKOT RURAL",
      crimes: 4178,
    },
    {
      district: "SURAT COMMR.",
      crimes: 4131,
    },
    {
      district: "SURAT RURAL",
      crimes: 2614,
    },
    {
      district: "SURENDRANAGAR",
      crimes: 2850,
    },
    {
      district: "VADODARA COMMR.",
      crimes: 5551,
    },
    {
      district: "VADODARA RURAL",
      crimes: 3142,
    },
    {
      district: "VALSAD",
      crimes: 2565,
    },
    {
      district: "W.RLY",
      crimes: 2276,
    },
    {
      district: "TOTAL",
      crimes: 105469,
    },
    {
      district: "AMBALA",
      crimes: 2225,
    },
    {
      district: "BHIWANI",
      crimes: 2181,
    },
    {
      district: "FARIDABAD",
      crimes: 5585,
    },
    {
      district: "FATEHABAD",
      crimes: 1104,
    },
    {
      district: "GRP",
      crimes: 931,
    },
    {
      district: "GURGAON",
      crimes: 4077,
    },
    {
      district: "HISSAR",
      crimes: 2464,
    },
    {
      district: "JHAJJAR",
      crimes: 1336,
    },
    {
      district: "JIND",
      crimes: 1008,
    },
    {
      district: "KAITHAL",
      crimes: 1226,
    },
    {
      district: "KARNAL",
      crimes: 2352,
    },
    {
      district: "KURUKSHETRA",
      crimes: 2050,
    },
    {
      district: "MAHENDRAGARH",
      crimes: 1233,
    },
    {
      district: "PANCHKULA",
      crimes: 1169,
    },
    {
      district: "PANIPAT",
      crimes: 1817,
    },
    {
      district: "REWARI",
      crimes: 1558,
    },
    {
      district: "ROHTAK",
      crimes: 1867,
    },
    {
      district: "SIRSA",
      crimes: 1531,
    },
    {
      district: "SONIPAT",
      crimes: 2051,
    },
    {
      district: "YAMUNANAGAR",
      crimes: 1331,
    },
    {
      district: "TOTAL",
      crimes: 39096,
    },
    {
      district: "BILASPUR",
      crimes: 1103,
    },
    {
      district: "CHAMBA",
      crimes: 627,
    },
    {
      district: "G.R.P.",
      crimes: 8,
    },
    {
      district: "HAMIRPUR",
      crimes: 936,
    },
    {
      district: "KANGRA",
      crimes: 2057,
    },
    {
      district: "KINNAUR",
      crimes: 190,
    },
    {
      district: "KULLU",
      crimes: 790,
    },
    {
      district: "LAHAUL-SPITI",
      crimes: 52,
    },
    {
      district: "MANDI",
      crimes: 1735,
    },
    {
      district: "SHIMLA",
      crimes: 1992,
    },
    {
      district: "SIRMAUR",
      crimes: 692,
    },
    {
      district: "SOLAN",
      crimes: 1344,
    },
    {
      district: "UNA",
      crimes: 800,
    },
    {
      district: "TOTAL",
      crimes: 12326,
    },
    {
      district: "ANANTNAG",
      crimes: 1473,
    },
    {
      district: "AWANTIPORA",
      crimes: 384,
    },
    {
      district: "BARAMULLA",
      crimes: 1815,
    },
    {
      district: "BORDER",
      crimes: 713,
    },
    {
      district: "BUDGAM",
      crimes: 989,
    },
    {
      district: "CRIME JAMMU",
      crimes: 52,
    },
    {
      district: "CRIME SRINAGAR",
      crimes: 108,
    },
    {
      district: "DODA",
      crimes: 751,
    },
    {
      district: "GANDERBAL",
      crimes: 608,
    },
    {
      district: "HANDWARA",
      crimes: 434,
    },
    {
      district: "JAMMU",
      crimes: 3626,
    },
    {
      district: "KARGIL",
      crimes: 97,
    },
    {
      district: "KATHUA",
      crimes: 967,
    },
    {
      district: "KULGAM",
      crimes: 577,
    },
    {
      district: "KUPWARA",
      crimes: 732,
    },
    {
      district: "LEH",
      crimes: 153,
    },
    {
      district: "POONCH",
      crimes: 586,
    },
    {
      district: "PULWAMA",
      crimes: 903,
    },
    {
      district: "RAILWAYS",
      crimes: 16,
    },
    {
      district: "RAJOURI",
      crimes: 1197,
    },
    {
      district: "RAMBAN",
      crimes: 598,
    },
    {
      district: "REASI",
      crimes: 293,
    },
    {
      district: "SRINAGAR",
      crimes: 2837,
    },
    {
      district: "UDHAMPUR",
      crimes: 1282,
    },
    {
      district: "TOTAL",
      crimes: 21191,
    },
    {
      district: "BOKARO",
      crimes: 2194,
    },
    {
      district: "CHAIBASA",
      crimes: 730,
    },
    {
      district: "CHATRA",
      crimes: 840,
    },
    {
      district: "DEOGHAR",
      crimes: 1283,
    },
    {
      district: "DHANBAD",
      crimes: 3201,
    },
    {
      district: "DHANBAD RLY.",
      crimes: 408,
    },
    {
      district: "DUMKA",
      crimes: 1008,
    },
    {
      district: "GARHWA",
      crimes: 869,
    },
    {
      district: "GIRIDIH",
      crimes: 1955,
    },
    {
      district: "GODDA",
      crimes: 2203,
    },
    {
      district: "GUMLA",
      crimes: 689,
    },
    {
      district: "HAZARIBAGH",
      crimes: 2621,
    },
    {
      district: "JAMSHEDPUR",
      crimes: 2755,
    },
    {
      district: "JAMSHEDPUR RLY.",
      crimes: 201,
    },
    {
      district: "JAMTARA",
      crimes: 534,
    },
    {
      district: "KODERMA",
      crimes: 785,
    },
    {
      district: "LATEHAR",
      crimes: 456,
    },
    {
      district: "LOHARDAGGA",
      crimes: 432,
    },
    {
      district: "PAKUR",
      crimes: 584,
    },
    {
      district: "PALAMU",
      crimes: 1549,
    },
    {
      district: "RANCHI",
      crimes: 4306,
    },
    {
      district: "SAHEBGANJ",
      crimes: 730,
    },
    {
      district: "SARAIKELA",
      crimes: 824,
    },
    {
      district: "SIMDEGA",
      crimes: 282,
    },
    {
      district: "TOTAL",
      crimes: 31439,
    },
    {
      district: "BAGALKOT",
      crimes: 2038,
    },
    {
      district: "BANGALORE COMMR.",
      crimes: 28526,
    },
    {
      district: "BANGALORE RURAL",
      crimes: 8084,
    },
    {
      district: "BELGAUM",
      crimes: 4657,
    },
    {
      district: "BELLARY",
      crimes: 3850,
    },
    {
      district: "BIDAR",
      crimes: 4045,
    },
    {
      district: "BIJAPUR",
      crimes: 3109,
    },
    {
      district: "CHAMARAJNAGAR",
      crimes: 1627,
    },
    {
      district: "CHICKMAGALUR",
      crimes: 2823,
    },
    {
      district: "CHITRADURGA",
      crimes: 3672,
    },
    {
      district: "DAKSHIN KANNADA",
      crimes: 4133,
    },
    {
      district: "DAVANAGERE",
      crimes: 2950,
    },
    {
      district: "DHARWAD COMMR.",
      crimes: 1698,
    },
    {
      district: "DHARWAD RURAL",
      crimes: 918,
    },
    {
      district: "GADAG",
      crimes: 947,
    },
    {
      district: "GULBARGA",
      crimes: 4684,
    },
    {
      district: "HASSAN",
      crimes: 4298,
    },
    {
      district: "HAVERI",
      crimes: 1970,
    },
    {
      district: "K.G.F.",
      crimes: 833,
    },
    {
      district: "KODAGU",
      crimes: 1459,
    },
    {
      district: "KOLAR",
      crimes: 3129,
    },
    {
      district: "KOPPAL",
      crimes: 1103,
    },
    {
      district: "MANDYA",
      crimes: 3380,
    },
    {
      district: "MYSORE COMMR.",
      crimes: 2159,
    },
    {
      district: "MYSORE RURAL",
      crimes: 2600,
    },
    {
      district: "RAICHUR",
      crimes: 2333,
    },
    {
      district: "RAILWAYS",
      crimes: 879,
    },
    {
      district: "SHIMOGA",
      crimes: 3749,
    },
    {
      district: "TUMKUR",
      crimes: 4251,
    },
    {
      district: "UDUPI",
      crimes: 2240,
    },
    {
      district: "UTTAR KANNADA",
      crimes: 2296,
    },
    {
      district: "TOTAL",
      crimes: 114440,
    },
    {
      district: "ALAPUZHA",
      crimes: 7082,
    },
    {
      district: "CBCID",
      crimes: 226,
    },
    {
      district: "ERNAKULAM COMMR.",
      crimes: 6756,
    },
    {
      district: "ERNAKULAM RURAL",
      crimes: 8777,
    },
    {
      district: "IDUKKI",
      crimes: 4229,
    },
    {
      district: "KANNUR",
      crimes: 4621,
    },
    {
      district: "KASARGOD",
      crimes: 2669,
    },
    {
      district: "KOLLAM",
      crimes: 9448,
    },
    {
      district: "KOTTAYAM",
      crimes: 7919,
    },
    {
      district: "KOZHIKODE COMMR.",
      crimes: 4164,
    },
    {
      district: "KOZHIKODE RURAL",
      crimes: 4238,
    },
    {
      district: "MALAPPURAM",
      crimes: 6777,
    },
    {
      district: "PALAKKAD",
      crimes: 5668,
    },
    {
      district: "PATHANAMTHITTA",
      crimes: 4409,
    },
    {
      district: "RAILWAYS",
      crimes: 185,
    },
    {
      district: "THRISSUR",
      crimes: 10143,
    },
    {
      district: "TRIVANDRUM COMMR.",
      crimes: 5577,
    },
    {
      district: "TRIVANDRUM RURAL",
      crimes: 8742,
    },
    {
      district: "WAYANADU",
      crimes: 2395,
    },
    {
      district: "TOTAL",
      crimes: 104025,
    },
    {
      district: "ANUPPUR",
      crimes: 1458,
    },
    {
      district: "ASHOK NAGAR",
      crimes: 1954,
    },
    {
      district: "BALAGHAT",
      crimes: 3053,
    },
    {
      district: "BARWANI",
      crimes: 2255,
    },
    {
      district: "BETUL",
      crimes: 3018,
    },
    {
      district: "BHIND",
      crimes: 3802,
    },
    {
      district: "BHOPAL",
      crimes: 15718,
    },
    {
      district: "BHOPAL RLY.",
      crimes: 1673,
    },
    {
      district: "BURHANPUR",
      crimes: 1523,
    },
    {
      district: "CHHATARPUR",
      crimes: 3528,
    },
    {
      district: "CHHINDWARA",
      crimes: 4126,
    },
    {
      district: "DAMOH",
      crimes: 2645,
    },
    {
      district: "DATIYA",
      crimes: 2089,
    },
    {
      district: "DEWAS",
      crimes: 7197,
    },
    {
      district: "DHAR",
      crimes: 5045,
    },
    {
      district: "DINDORI",
      crimes: 826,
    },
    {
      district: "GUNA",
      crimes: 3421,
    },
    {
      district: "GWALIOR",
      crimes: 8428,
    },
    {
      district: "HARDA",
      crimes: 1092,
    },
    {
      district: "HOSHANGABAD",
      crimes: 3484,
    },
    {
      district: "INDORE",
      crimes: 15350,
    },
    {
      district: "INDORE RLY.",
      crimes: 288,
    },
    {
      district: "JABALPUR",
      crimes: 9524,
    },
    {
      district: "JABALPUR RLY.",
      crimes: 515,
    },
    {
      district: "JHABUA",
      crimes: 2566,
    },
    {
      district: "KATNI",
      crimes: 2516,
    },
    {
      district: "KHANDWA",
      crimes: 3791,
    },
    {
      district: "KHARGON",
      crimes: 4367,
    },
    {
      district: "MANDLA",
      crimes: 1985,
    },
    {
      district: "MANDSAUR",
      crimes: 2997,
    },
    {
      district: "MORENA",
      crimes: 4976,
    },
    {
      district: "NARSINGHPUR",
      crimes: 2349,
    },
    {
      district: "NEEMUCH",
      crimes: 2204,
    },
    {
      district: "PANNA",
      crimes: 1384,
    },
    {
      district: "RAISEN",
      crimes: 3358,
    },
    {
      district: "RAJGARH",
      crimes: 5098,
    },
    {
      district: "RATLAM",
      crimes: 3661,
    },
    {
      district: "REWA",
      crimes: 4478,
    },
    {
      district: "SAGAR",
      crimes: 7143,
    },
    {
      district: "SATNA",
      crimes: 4877,
    },
    {
      district: "SEONI",
      crimes: 2278,
    },
    {
      district: "SHAHDOL",
      crimes: 2518,
    },
    {
      district: "SHAJAPUR",
      crimes: 3995,
    },
    {
      district: "SHEOPUR",
      crimes: 1053,
    },
    {
      district: "SHIVPURI",
      crimes: 3824,
    },
    {
      district: "SIDHI",
      crimes: 3719,
    },
    {
      district: "SIHORE",
      crimes: 3042,
    },
    {
      district: "TIKAMGARH",
      crimes: 2923,
    },
    {
      district: "UJJAIN",
      crimes: 8685,
    },
    {
      district: "UMARIYA",
      crimes: 1212,
    },
    {
      district: "VIDISHA",
      crimes: 3856,
    },
    {
      district: "TOTAL",
      crimes: 196867,
    },
    {
      district: "AHMEDNAGAR",
      crimes: 4738,
    },
    {
      district: "AKOLA",
      crimes: 4354,
    },
    {
      district: "AMRAVATI COMMR.",
      crimes: 2740,
    },
    {
      district: "AMRAVATI RURAL",
      crimes: 3660,
    },
    {
      district: "AURANGABAD COMMR.",
      crimes: 2326,
    },
    {
      district: "AURANGABAD RURAL",
      crimes: 2777,
    },
    {
      district: "BEED",
      crimes: 3936,
    },
    {
      district: "BHANDARA",
      crimes: 2550,
    },
    {
      district: "BULDHANA",
      crimes: 3705,
    },
    {
      district: "CHANDRAPUR",
      crimes: 3539,
    },
    {
      district: "DHULE",
      crimes: 2042,
    },
    {
      district: "GADCHIROLI",
      crimes: 1367,
    },
    {
      district: "GONDIA",
      crimes: 1898,
    },
    {
      district: "HINGOLI",
      crimes: 1689,
    },
    {
      district: "JALGAON",
      crimes: 4336,
    },
    {
      district: "JALNA",
      crimes: 2603,
    },
    {
      district: "KOLHAPUR",
      crimes: 3132,
    },
    {
      district: "LATUR",
      crimes: 3382,
    },
    {
      district: "MUMBAI",
      crimes: 29453,
    },
    {
      district: "MUMBAI RLY.",
      crimes: 2020,
    },
    {
      district: "NAGPUR COMMR.",
      crimes: 8518,
    },
    {
      district: "NAGPUR RLY.",
      crimes: 1249,
    },
    {
      district: "NAGPUR RURAL",
      crimes: 4884,
    },
    {
      district: "NANDED",
      crimes: 5687,
    },
    {
      district: "NANDURBAR",
      crimes: 1247,
    },
    {
      district: "NASIK COMMR.",
      crimes: 2606,
    },
    {
      district: "NASIK RURAL",
      crimes: 4344,
    },
    {
      district: "NAVI MUMBAI",
      crimes: 3688,
    },
    {
      district: "OSMANABAD",
      crimes: 2418,
    },
    {
      district: "PARBHANI",
      crimes: 2444,
    },
    {
      district: "PUNE COMMR.",
      crimes: 10754,
    },
    {
      district: "PUNE RLY.",
      crimes: 186,
    },
    {
      district: "PUNE RURAL",
      crimes: 4830,
    },
    {
      district: "RAIGAD",
      crimes: 2127,
    },
    {
      district: "RATNAGIRI",
      crimes: 1301,
    },
    {
      district: "SANGLI",
      crimes: 2588,
    },
    {
      district: "SATARA",
      crimes: 3288,
    },
    {
      district: "SINDHUDURG",
      crimes: 791,
    },
    {
      district: "SOLAPUR COMMR.",
      crimes: 1737,
    },
    {
      district: "SOLAPUR RURAL",
      crimes: 2990,
    },
    {
      district: "THANE COMMR.",
      crimes: 7286,
    },
    {
      district: "THANE RURAL",
      crimes: 4250,
    },
    {
      district: "WARDHA",
      crimes: 3692,
    },
    {
      district: "WASHIM",
      crimes: 2233,
    },
    {
      district: "YAVATMAL",
      crimes: 4917,
    },
    {
      district: "TOTAL",
      crimes: 176302,
    },
    {
      district: "BISHNUPUR",
      crimes: 283,
    },
    {
      district: "CHANDEL",
      crimes: 64,
    },
    {
      district: "CHURACHANDPUR",
      crimes: 120,
    },
    {
      district: "IMPHAL(EAST)",
      crimes: 467,
    },
    {
      district: "IMPHAL(WEST)",
      crimes: 1053,
    },
    {
      district: "SENAPATI",
      crimes: 117,
    },
    {
      district: "TAMENGLONG",
      crimes: 37,
    },
    {
      district: "THOUBAL",
      crimes: 346,
    },
    {
      district: "UKHRUL",
      crimes: 48,
    },
    {
      district: "TOTAL",
      crimes: 2535,
    },
    {
      district: "GARO HILLS EAST",
      crimes: 98,
    },
    {
      district: "GARO HILLS SOUTH",
      crimes: 33,
    },
    {
      district: "GARO HILLS WEST",
      crimes: 212,
    },
    {
      district: "JAINTIA HILLS",
      crimes: 305,
    },
    {
      district: "KHASI HILLS EAST",
      crimes: 762,
    },
    {
      district: "KHASI HILLS WEST",
      crimes: 123,
    },
    {
      district: "RI-BHOI",
      crimes: 219,
    },
    {
      district: "TOTAL",
      crimes: 1752,
    },
    {
      district: "AIZAWL",
      crimes: 670,
    },
    {
      district: "CHAMPHAI",
      crimes: 161,
    },
    {
      district: "KOLASIB",
      crimes: 47,
    },
    {
      district: "LAWNGTLAI",
      crimes: 99,
    },
    {
      district: "LUNGLEI",
      crimes: 250,
    },
    {
      district: "MAMIT",
      crimes: 38,
    },
    {
      district: "SAIHA",
      crimes: 142,
    },
    {
      district: "SERCHHIP",
      crimes: 108,
    },
    {
      district: "TOTAL",
      crimes: 1515,
    },
    {
      district: "DIMAPUR",
      crimes: 333,
    },
    {
      district: "KIPHIRE",
      crimes: 21,
    },
    {
      district: "KOHIMA",
      crimes: 202,
    },
    {
      district: "MOKOKCHUNG",
      crimes: 62,
    },
    {
      district: "MON",
      crimes: 96,
    },
    {
      district: "PEREN",
      crimes: 14,
    },
    {
      district: "PHEK",
      crimes: 44,
    },
    {
      district: "TUENSANG",
      crimes: 58,
    },
    {
      district: "WOKHA",
      crimes: 85,
    },
    {
      district: "ZUNHEBOTO",
      crimes: 69,
    },
    {
      district: "TOTAL",
      crimes: 984,
    },
    {
      district: "ANGUL",
      crimes: 1889,
    },
    {
      district: "BALASORE",
      crimes: 2504,
    },
    {
      district: "BARAGARH",
      crimes: 1399,
    },
    {
      district: "BERHAMPUR",
      crimes: 1152,
    },
    {
      district: "BHADRAK",
      crimes: 1662,
    },
    {
      district: "BOLANGIR",
      crimes: 1667,
    },
    {
      district: "BOUDH",
      crimes: 397,
    },
    {
      district: "CUTTACK",
      crimes: 3973,
    },
    {
      district: "DEOGARH",
      crimes: 470,
    },
    {
      district: "DHENKANAL",
      crimes: 1469,
    },
    {
      district: "GAJAPATI",
      crimes: 402,
    },
    {
      district: "GANJAM",
      crimes: 1922,
    },
    {
      district: "JAGATSINGHPUR",
      crimes: 1347,
    },
    {
      district: "JAJPUR",
      crimes: 1778,
    },
    {
      district: "JHARSUGUDA",
      crimes: 887,
    },
    {
      district: "KALAHANDI",
      crimes: 870,
    },
    {
      district: "KANDHAMAL",
      crimes: 823,
    },
    {
      district: "KENDRAPARA",
      crimes: 994,
    },
    {
      district: "KEONJHAR",
      crimes: 1933,
    },
    {
      district: "KHURDA",
      crimes: 5337,
    },
    {
      district: "KORAPUT",
      crimes: 1587,
    },
    {
      district: "MALKANGIR",
      crimes: 507,
    },
    {
      district: "MAYURBHANJ",
      crimes: 2234,
    },
    {
      district: "NAYAGARH",
      crimes: 842,
    },
    {
      district: "NOWRANGPUR",
      crimes: 683,
    },
    {
      district: "NUAPADA",
      crimes: 704,
    },
    {
      district: "PURI",
      crimes: 2527,
    },
    {
      district: "RAYAGADA",
      crimes: 951,
    },
    {
      district: "ROURKELA",
      crimes: 1271,
    },
    {
      district: "SAMBALPUR",
      crimes: 1841,
    },
    {
      district: "SONEPUR",
      crimes: 375,
    },
    {
      district: "SRP(CUTTACK)",
      crimes: 402,
    },
    {
      district: "SRP(ROURKELA)",
      crimes: 228,
    },
    {
      district: "SUNDARGARH",
      crimes: 1712,
    },
    {
      district: "TOTAL",
      crimes: 48739,
    },
    {
      district: "AMRITSAR",
      crimes: 1444,
    },
    {
      district: "BARNALA",
      crimes: 474,
    },
    {
      district: "BATALA",
      crimes: 565,
    },
    {
      district: "BHATINDA",
      crimes: 1319,
    },
    {
      district: "FARIDKOT",
      crimes: 611,
    },
    {
      district: "FATEHGARH SAHIB",
      crimes: 557,
    },
    {
      district: "FEROZEPUR",
      crimes: 1482,
    },
    {
      district: "G.R.P",
      crimes: 361,
    },
    {
      district: "GURDASPUR",
      crimes: 724,
    },
    {
      district: "HOSHIARPUR",
      crimes: 1175,
    },
    {
      district: "JAGRAON",
      crimes: 942,
    },
    {
      district: "JALANDHAR",
      crimes: 2753,
    },
    {
      district: "KAPURTHALA",
      crimes: 807,
    },
    {
      district: "KHANNA",
      crimes: 357,
    },
    {
      district: "LUDHIANA",
      crimes: 2877,
    },
    {
      district: "MAJITHA",
      crimes: 652,
    },
    {
      district: "MANSA",
      crimes: 587,
    },
    {
      district: "MOGA",
      crimes: 749,
    },
    {
      district: "MUKTSAR",
      crimes: 571,
    },
    {
      district: "NAWAN SHAHR",
      crimes: 766,
    },
    {
      district: "PATIALA",
      crimes: 2814,
    },
    {
      district: "ROPAR",
      crimes: 1152,
    },
    {
      district: "SANGRUR",
      crimes: 1267,
    },
    {
      district: "TARN TARAN",
      crimes: 624,
    },
    {
      district: "TOTAL",
      crimes: 25630,
    },
    {
      district: "AJMER",
      crimes: 6775,
    },
    {
      district: "ALWAR",
      crimes: 7163,
    },
    {
      district: "BANSWARA",
      crimes: 2984,
    },
    {
      district: "BARAN",
      crimes: 3301,
    },
    {
      district: "BARMER",
      crimes: 2559,
    },
    {
      district: "BHARATPUR",
      crimes: 7528,
    },
    {
      district: "BHILWARA",
      crimes: 6297,
    },
    {
      district: "BIKANER",
      crimes: 3937,
    },
    {
      district: "BUNDI",
      crimes: 4154,
    },
    {
      district: "CHITTORGARH",
      crimes: 6861,
    },
    {
      district: "CHURU",
      crimes: 2713,
    },
    {
      district: "DAUSA",
      crimes: 4053,
    },
    {
      district: "DHOLPUR",
      crimes: 3043,
    },
    {
      district: "DUNGARPUR",
      crimes: 1910,
    },
    {
      district: "G.R.P.",
      crimes: 972,
    },
    {
      district: "GANGANAGAR",
      crimes: 5512,
    },
    {
      district: "HANUMANGARH",
      crimes: 3846,
    },
    {
      district: "JAIPUR",
      crimes: 20209,
    },
    {
      district: "JAISALMER",
      crimes: 821,
    },
    {
      district: "JALORE",
      crimes: 2411,
    },
    {
      district: "JHALAWAR",
      crimes: 3838,
    },
    {
      district: "JHUNJHUNU",
      crimes: 3917,
    },
    {
      district: "JODHPUR",
      crimes: 6883,
    },
    {
      district: "KARAULI",
      crimes: 3373,
    },
    {
      district: "KOTA",
      crimes: 7221,
    },
    {
      district: "NAGAUR",
      crimes: 4311,
    },
    {
      district: "PALI",
      crimes: 5329,
    },
    {
      district: "RAJSAMAND",
      crimes: 2499,
    },
    {
      district: "SAWAI MADHOPUR",
      crimes: 3217,
    },
    {
      district: "SIKAR",
      crimes: 4029,
    },
    {
      district: "SIROHI",
      crimes: 2207,
    },
    {
      district: "TONK",
      crimes: 3803,
    },
    {
      district: "UDAIPUR",
      crimes: 7183,
    },
    {
      district: "TOTAL",
      crimes: 154859,
    },
    {
      district: "EAST",
      crimes: 332,
    },
    {
      district: "NORTH",
      crimes: 24,
    },
    {
      district: "SOUTH",
      crimes: 137,
    },
    {
      district: "WEST",
      crimes: 138,
    },
    {
      district: "TOTAL",
      crimes: 631,
    },
    {
      district: "CHENGAI",
      crimes: 12560,
    },
    {
      district: "CHENNAI",
      crimes: 12436,
    },
    {
      district: "CHENNAI RLY.",
      crimes: 645,
    },
    {
      district: "COIMBATORE RURAL",
      crimes: 9840,
    },
    {
      district: "COIMBATORE URBAN",
      crimes: 3831,
    },
    {
      district: "CUDDALORE",
      crimes: 7109,
    },
    {
      district: "DHARMAPURI",
      crimes: 2789,
    },
    {
      district: "DINDIGUL",
      crimes: 5047,
    },
    {
      district: "ERODE",
      crimes: 6045,
    },
    {
      district: "KANCHIPURAM",
      crimes: 6807,
    },
    {
      district: "KANYAKUMARI",
      crimes: 3113,
    },
    {
      district: "KARUR",
      crimes: 2435,
    },
    {
      district: "KRISHNAGIRI",
      crimes: 4890,
    },
    {
      district: "MADURAI RURAL",
      crimes: 4253,
    },
    {
      district: "MADURAI URBAN",
      crimes: 3164,
    },
    {
      district: "NAGAPATTINAM",
      crimes: 3480,
    },
    {
      district: "NAMAKKAL",
      crimes: 3608,
    },
    {
      district: "NILGIRIS",
      crimes: 1707,
    },
    {
      district: "PERAMBALUR",
      crimes: 2505,
    },
    {
      district: "PUDUKOTTAI",
      crimes: 3323,
    },
    {
      district: "RAMNATHAPURAM",
      crimes: 2865,
    },
    {
      district: "SALEM RURAL",
      crimes: 5908,
    },
    {
      district: "SALEM URBAN",
      crimes: 2865,
    },
    {
      district: "SIVAGANGAI",
      crimes: 2620,
    },
    {
      district: "THANJAVUR",
      crimes: 3930,
    },
    {
      district: "THENI",
      crimes: 3367,
    },
    {
      district: "THIRUNELVELI RURAL",
      crimes: 4834,
    },
    {
      district: "THIRUNELVELI URBAN",
      crimes: 1305,
    },
    {
      district: "THIRUVALLUR",
      crimes: 3163,
    },
    {
      district: "THIRUVANNAMALAI",
      crimes: 3842,
    },
    {
      district: "THIRUVARUR",
      crimes: 2950,
    },
    {
      district: "THOOTHUGUDI",
      crimes: 4950,
    },
    {
      district: "TRICHY RLY.",
      crimes: 210,
    },
    {
      district: "TRICHY RURAL",
      crimes: 3639,
    },
    {
      district: "TRICHY URBAN",
      crimes: 2615,
    },
    {
      district: "VELLORE",
      crimes: 6760,
    },
    {
      district: "VILLUPURAM",
      crimes: 6559,
    },
    {
      district: "VIRUDHUNAGAR",
      crimes: 4637,
    },
    {
      district: "TOTAL",
      crimes: 166606,
    },
    {
      district: "DHALAI",
      crimes: 301,
    },
    {
      district: "NORTH",
      crimes: 633,
    },
    {
      district: "SOUTH",
      crimes: 971,
    },
    {
      district: "WEST",
      crimes: 1176,
    },
    {
      district: "TOTAL",
      crimes: 3081,
    },
    {
      district: "AGRA",
      crimes: 5040,
    },
    {
      district: "ALIGARH",
      crimes: 3884,
    },
    {
      district: "ALLAHABAD",
      crimes: 3963,
    },
    {
      district: "AMBEDKAR NAGAR",
      crimes: 793,
    },
    {
      district: "AURAIYA",
      crimes: 814,
    },
    {
      district: "AZAMGARH",
      crimes: 2039,
    },
    {
      district: "BADAUN",
      crimes: 2492,
    },
    {
      district: "BAGHPAT",
      crimes: 974,
    },
    {
      district: "BAHRAICH",
      crimes: 1266,
    },
    {
      district: "BALLIA",
      crimes: 1133,
    },
    {
      district: "BALRAMPUR",
      crimes: 312,
    },
    {
      district: "BANDA",
      crimes: 1060,
    },
    {
      district: "BARABANKI",
      crimes: 1661,
    },
    {
      district: "BAREILLY",
      crimes: 4117,
    },
    {
      district: "BASTI",
      crimes: 975,
    },
    {
      district: "BIJNOR",
      crimes: 1547,
    },
    {
      district: "BULANDSHAHAR",
      crimes: 2811,
    },
    {
      district: "CHANDOLI",
      crimes: 608,
    },
    {
      district: "CHITRAKOOT DHAM",
      crimes: 406,
    },
    {
      district: "DEORIA",
      crimes: 1217,
    },
    {
      district: "ETAH",
      crimes: 2235,
    },
    {
      district: "ETAWAH",
      crimes: 1406,
    },
    {
      district: "FAIZABAD",
      crimes: 1079,
    },
    {
      district: "FATEHGARH",
      crimes: 829,
    },
    {
      district: "FATEHPUR",
      crimes: 1193,
    },
    {
      district: "FIROZABAD",
      crimes: 2325,
    },
    {
      district: "G.R.P.",
      crimes: 2916,
    },
    {
      district: "GAUTAMBUDH NAGAR",
      crimes: 2290,
    },
    {
      district: "GHAZIABAD",
      crimes: 4613,
    },
    {
      district: "GHAZIPUR",
      crimes: 1037,
    },
    {
      district: "GONDA",
      crimes: 976,
    },
    {
      district: "GORAKHPUR",
      crimes: 2528,
    },
    {
      district: "HAMIRPUR",
      crimes: 646,
    },
    {
      district: "HARDOI",
      crimes: 2094,
    },
    {
      district: "HATHRAS",
      crimes: 1783,
    },
    {
      district: "J.P.NAGAR",
      crimes: 1301,
    },
    {
      district: "JALAUN",
      crimes: 1084,
    },
    {
      district: "JAUNPUR",
      crimes: 1586,
    },
    {
      district: "JHANSI",
      crimes: 1672,
    },
    {
      district: "KANNAUJ",
      crimes: 993,
    },
    {
      district: "KANPUR DEHAT",
      crimes: 1387,
    },
    {
      district: "KANPUR NAGAR",
      crimes: 4526,
    },
    {
      district: "KAUSHAMBI",
      crimes: 762,
    },
    {
      district: "KHIRI",
      crimes: 2670,
    },
    {
      district: "KUSHI NAGAR",
      crimes: 1204,
    },
    {
      district: "LALITPUR",
      crimes: 448,
    },
    {
      district: "LUCKNOW",
      crimes: 7412,
    },
    {
      district: "MAHARAJGANJ",
      crimes: 577,
    },
    {
      district: "MAHOBA",
      crimes: 440,
    },
    {
      district: "MAINPURI",
      crimes: 1587,
    },
    {
      district: "MATHURA",
      crimes: 2227,
    },
    {
      district: "MAU",
      crimes: 778,
    },
    {
      district: "MEERUT",
      crimes: 4298,
    },
    {
      district: "MIRZAPUR",
      crimes: 878,
    },
    {
      district: "MORADABAD",
      crimes: 3664,
    },
    {
      district: "MUZAFFARNAGAR",
      crimes: 2893,
    },
    {
      district: "PILIBHIT",
      crimes: 1637,
    },
    {
      district: "PRATAPGARH",
      crimes: 1732,
    },
    {
      district: "RAIBAREILLY",
      crimes: 1854,
    },
    {
      district: "RAMPUR",
      crimes: 1479,
    },
    {
      district: "SAHARANPUR",
      crimes: 2477,
    },
    {
      district: "SANT KABIRNAGAR",
      crimes: 430,
    },
    {
      district: "SHAHJAHANPUR",
      crimes: 2166,
    },
    {
      district: "SHRAWASTI",
      crimes: 366,
    },
    {
      district: "SIDHARTHNAGAR",
      crimes: 847,
    },
    {
      district: "SITAPUR",
      crimes: 3039,
    },
    {
      district: "SONBHADRA",
      crimes: 559,
    },
    {
      district: "ST.RAVIDASNAGAR",
      crimes: 579,
    },
    {
      district: "SULTANPUR",
      crimes: 1441,
    },
    {
      district: "UNNAO",
      crimes: 1917,
    },
    {
      district: "VARANASI",
      crimes: 2209,
    },
    {
      district: "TOTAL",
      crimes: 130181,
    },
    {
      district: "ALMORA",
      crimes: 221,
    },
    {
      district: "BAGESHWAR",
      crimes: 90,
    },
    {
      district: "CHAMOLI",
      crimes: 243,
    },
    {
      district: "CHAMPAWAT",
      crimes: 128,
    },
    {
      district: "DEHRADUN",
      crimes: 1955,
    },
    {
      district: "HARIDWAR",
      crimes: 1909,
    },
    {
      district: "NAINITAL",
      crimes: 892,
    },
    {
      district: "PAURI GARHWAL",
      crimes: 439,
    },
    {
      district: "PITHORAGARH",
      crimes: 306,
    },
    {
      district: "RUDRA PRAYAG",
      crimes: 132,
    },
    {
      district: "TEHRI GARHWAL",
      crimes: 331,
    },
    {
      district: "UDHAMSINGH NAGAR",
      crimes: 1771,
    },
    {
      district: "UTTARKASHI",
      crimes: 217,
    },
    {
      district: "TOTAL",
      crimes: 8634,
    },
    {
      district: "24 PARGANAS NORTH",
      crimes: 8827,
    },
    {
      district: "24 PARGANAS SOUTH",
      crimes: 7123,
    },
    {
      district: "ASANSOL",
      crimes: 1062,
    },
    {
      district: "BANKURA",
      crimes: 1618,
    },
    {
      district: "BIRBHUM",
      crimes: 1612,
    },
    {
      district: "BURDWAN",
      crimes: 4140,
    },
    {
      district: "COOCHBEHAR",
      crimes: 1264,
    },
    {
      district: "DAKSHIN DINAJPUR",
      crimes: 860,
    },
    {
      district: "DARJEELING",
      crimes: 1261,
    },
    {
      district: "HOOGHLY",
      crimes: 3663,
    },
    {
      district: "HOWRAH",
      crimes: 1760,
    },
    {
      district: "HOWRAH CITY",
      crimes: 1992,
    },
    {
      district: "HOWRAH G.R.P.",
      crimes: 498,
    },
    {
      district: "JALPAIGURI",
      crimes: 2866,
    },
    {
      district: "KHARAGPUR G.R.P.",
      crimes: 167,
    },
    {
      district: "KOLKATA",
      crimes: 10757,
    },
    {
      district: "MALDA",
      crimes: 2467,
    },
    {
      district: "MURSHIDABAD",
      crimes: 4283,
    },
    {
      district: "NADIA",
      crimes: 4218,
    },
    {
      district: "PASCHIM MIDNAPUR",
      crimes: 3305,
    },
    {
      district: "PURAB MIDNAPUR",
      crimes: 2351,
    },
    {
      district: "PURULIA",
      crimes: 1125,
    },
    {
      district: "SEALDAH G.R.P.",
      crimes: 424,
    },
    {
      district: "SILIGURI G.R.P.",
      crimes: 141,
    },
    {
      district: "UTTAR DINAJPUR",
      crimes: 1566,
    },
    {
      district: "TOTAL",
      crimes: 69350,
    },
    {
      district: "ANDAMAN",
      crimes: 721,
    },
    {
      district: "NICOBAR",
      crimes: 27,
    },
    {
      district: "TOTAL",
      crimes: 748,
    },
    {
      district: "CHANDIGARH",
      crimes: 2889,
    },
    {
      district: "TOTAL",
      crimes: 2889,
    },
    {
      district: "D and N HAVELI",
      crimes: 409,
    },
    {
      district: "TOTAL",
      crimes: 409,
    },
    {
      district: "DAMAN",
      crimes: 171,
    },
    {
      district: "DIU",
      crimes: 27,
    },
    {
      district: "TOTAL",
      crimes: 198,
    },
    {
      district: "CENTRAL",
      crimes: 3335,
    },
    {
      district: "DELHI UT TOTAL",
      crimes: 53623,
    },
    {
      district: "EAST",
      crimes: 5528,
    },
    {
      district: "G.R.P.(RLY)",
      crimes: 1235,
    },
    {
      district: "I.G.I. AIRPORT",
      crimes: 683,
    },
    {
      district: "NEW DELHI",
      crimes: 2651,
    },
    {
      district: "NORTH",
      crimes: 3418,
    },
    {
      district: "NORTH EAST",
      crimes: 3896,
    },
    {
      district: "NORTH WEST",
      crimes: 9840,
    },
    {
      district: "S.T.F.",
      crimes: 90,
    },
    {
      district: "SOUTH",
      crimes: 9672,
    },
    {
      district: "SOUTH WEST",
      crimes: 5932,
    },
    {
      district: "WEST",
      crimes: 7343,
    },
    {
      district: "LAKSHADWEEP",
      crimes: 70,
    },
    {
      district: "TOTAL",
      crimes: 70,
    },
    {
      district: "PONDICHERRY",
      crimes: 4620,
    },
    {
      district: "TOTAL",
      crimes: 4620,
    },
    {
      district: "ADILABAD",
      crimes: 5033,
    },
    {
      district: "ANANTAPUR",
      crimes: 4545,
    },
    {
      district: "CHITTOOR",
      crimes: 6746,
    },
    {
      district: "CUDDAPAH",
      crimes: 4072,
    },
    {
      district: "CYBERABAD",
      crimes: 12079,
    },
    {
      district: "EAST GODAVARI",
      crimes: 8262,
    },
    {
      district: "GUNTAKAL RLY.",
      crimes: 225,
    },
    {
      district: "GUNTUR",
      crimes: 7736,
    },
    {
      district: "HYDERABAD CITY",
      crimes: 17276,
    },
    {
      district: "KARIMNAGAR",
      crimes: 8875,
    },
    {
      district: "KHAMMAM",
      crimes: 5757,
    },
    {
      district: "KRISHNA",
      crimes: 5335,
    },
    {
      district: "KURNOOL",
      crimes: 5266,
    },
    {
      district: "MAHABOOBNAGAR",
      crimes: 5624,
    },
    {
      district: "MEDAK",
      crimes: 4024,
    },
    {
      district: "NALGONDA",
      crimes: 6570,
    },
    {
      district: "NELLORE",
      crimes: 5283,
    },
    {
      district: "NIZAMABAD",
      crimes: 5059,
    },
    {
      district: "PRAKASHAM",
      crimes: 4343,
    },
    {
      district: "RANGA REDDY",
      crimes: 2127,
    },
    {
      district: "SECUNDERABAD RLY.",
      crimes: 508,
    },
    {
      district: "SRIKAKULAM",
      crimes: 2686,
    },
    {
      district: "VIJAYAWADA",
      crimes: 5791,
    },
    {
      district: "VIJAYAWADA RLY.",
      crimes: 316,
    },
    {
      district: "VISAKHA RURAL",
      crimes: 2687,
    },
    {
      district: "VISAKHAPATNAM",
      crimes: 4455,
    },
    {
      district: "VIZIANAGARAM",
      crimes: 2560,
    },
    {
      district: "WARANGAL",
      crimes: 6683,
    },
    {
      district: "WEST GODAVARI",
      crimes: 7200,
    },
    {
      district: "TOTAL",
      crimes: 157123,
    },
    {
      district: "CHANGLANG",
      crimes: 148,
    },
    {
      district: "DIBANG VALLEY",
      crimes: 128,
    },
    {
      district: "K/KUMEY",
      crimes: 53,
    },
    {
      district: "KAMENG EAST",
      crimes: 104,
    },
    {
      district: "KAMENG WEST",
      crimes: 111,
    },
    {
      district: "LOHIT",
      crimes: 158,
    },
    {
      district: "PAPUM PARE",
      crimes: 496,
    },
    {
      district: "SIANG EAST",
      crimes: 313,
    },
    {
      district: "SIANG UPPER",
      crimes: 80,
    },
    {
      district: "SIANG WEST",
      crimes: 230,
    },
    {
      district: "SUBANSIRI LOWER",
      crimes: 119,
    },
    {
      district: "SUBANSIRI UPPER",
      crimes: 180,
    },
    {
      district: "TAWANG",
      crimes: 48,
    },
    {
      district: "TIRAP",
      crimes: 114,
    },
    {
      district: "UPPER DIBANG VALLEY",
      crimes: 22,
    },
    {
      district: "TOTAL",
      crimes: 2304,
    },
    {
      district: "BARPETA",
      crimes: 1981,
    },
    {
      district: "BASKA",
      crimes: 306,
    },
    {
      district: "BONGAIGAON",
      crimes: 825,
    },
    {
      district: "C.I.D.",
      crimes: 15,
    },
    {
      district: "CACHAR",
      crimes: 3930,
    },
    {
      district: "CHIRANG",
      crimes: 323,
    },
    {
      district: "DARRANG",
      crimes: 1156,
    },
    {
      district: "DHEMAJI",
      crimes: 943,
    },
    {
      district: "DHUBRI",
      crimes: 2285,
    },
    {
      district: "DIBRUGARH",
      crimes: 2095,
    },
    {
      district: "G.R.P.",
      crimes: 290,
    },
    {
      district: "GOALPARA",
      crimes: 1162,
    },
    {
      district: "GOLAGHAT",
      crimes: 1421,
    },
    {
      district: "GUWAHATI CITY",
      crimes: 5651,
    },
    {
      district: "HAILAKANDI",
      crimes: 888,
    },
    {
      district: "JORHAT",
      crimes: 981,
    },
    {
      district: "KAMRUP",
      crimes: 891,
    },
    {
      district: "KARBI ANGLONG",
      crimes: 685,
    },
    {
      district: "KARIMGANJ",
      crimes: 1083,
    },
    {
      district: "KOKRAJHAR",
      crimes: 928,
    },
    {
      district: "LAKHIMPUR",
      crimes: 1615,
    },
    {
      district: "MORIGAON",
      crimes: 981,
    },
    {
      district: "N.C.HILLS",
      crimes: 220,
    },
    {
      district: "NAGAON",
      crimes: 3545,
    },
    {
      district: "NALBARI",
      crimes: 750,
    },
    {
      district: "R.P.O.",
      crimes: 143,
    },
    {
      district: "SIBSAGAR",
      crimes: 1635,
    },
    {
      district: "SONITPUR",
      crimes: 2805,
    },
    {
      district: "TINSUKIA",
      crimes: 1759,
    },
    {
      district: "UDALGURI",
      crimes: 714,
    },
    {
      district: "TOTAL",
      crimes: 42006,
    },
    {
      district: "ARARIA",
      crimes: 1743,
    },
    {
      district: "ARWAL",
      crimes: 512,
    },
    {
      district: "AURANGABAD",
      crimes: 2283,
    },
    {
      district: "BAGAHA",
      crimes: 945,
    },
    {
      district: "BANKA",
      crimes: 1353,
    },
    {
      district: "BEGUSARAI",
      crimes: 2444,
    },
    {
      district: "BETTIAH",
      crimes: 3075,
    },
    {
      district: "BHABHUA",
      crimes: 1255,
    },
    {
      district: "BHAGALPUR",
      crimes: 3104,
    },
    {
      district: "BHOJPUR",
      crimes: 2853,
    },
    {
      district: "BUXAR",
      crimes: 1644,
    },
    {
      district: "DARBHANGA",
      crimes: 3140,
    },
    {
      district: "GAYA",
      crimes: 3418,
    },
    {
      district: "GOPALGANJ",
      crimes: 2543,
    },
    {
      district: "JAMALPUR RLY.",
      crimes: 195,
    },
    {
      district: "JAMUI",
      crimes: 1409,
    },
    {
      district: "JEHANABAD",
      crimes: 1191,
    },
    {
      district: "KATIHAR",
      crimes: 1785,
    },
    {
      district: "KATIHAR RLY.",
      crimes: 432,
    },
    {
      district: "KHAGARIA",
      crimes: 1439,
    },
    {
      district: "KISHANGANJ",
      crimes: 1017,
    },
    {
      district: "LAKHISARAI",
      crimes: 840,
    },
    {
      district: "MADHEPURA",
      crimes: 1137,
    },
    {
      district: "MADHUBANI",
      crimes: 2835,
    },
    {
      district: "MOTIHARI",
      crimes: 4564,
    },
    {
      district: "MUNGER",
      crimes: 1749,
    },
    {
      district: "MUZAFFARPUR",
      crimes: 5363,
    },
    {
      district: "MUZAFFARPUR RLY.",
      crimes: 583,
    },
    {
      district: "NALANDA",
      crimes: 3000,
    },
    {
      district: "NAUGACHIA",
      crimes: 999,
    },
    {
      district: "NAWADAH",
      crimes: 1732,
    },
    {
      district: "PATNA",
      crimes: 11840,
    },
    {
      district: "PATNA RLY.",
      crimes: 950,
    },
    {
      district: "PURNEA",
      crimes: 2169,
    },
    {
      district: "ROHTAS",
      crimes: 3384,
    },
    {
      district: "SAHARSA",
      crimes: 1441,
    },
    {
      district: "SAMASTIPUR",
      crimes: 3452,
    },
    {
      district: "SARAN",
      crimes: 3233,
    },
    {
      district: "SHEIKHPURA",
      crimes: 683,
    },
    {
      district: "SHEOHAR",
      crimes: 493,
    },
    {
      district: "SITAMARHI",
      crimes: 2687,
    },
    {
      district: "SIWAN",
      crimes: 2190,
    },
    {
      district: "SUPAUL",
      crimes: 1224,
    },
    {
      district: "VAISHALI",
      crimes: 3522,
    },
    {
      district: "TOTAL",
      crimes: 97850,
    },
    {
      district: "BALRAMPUR",
      crimes: 521,
    },
    {
      district: "BILASPUR",
      crimes: 5477,
    },
    {
      district: "BIZAPUR",
      crimes: 401,
    },
    {
      district: "DANTEWARA",
      crimes: 698,
    },
    {
      district: "DHAMTARI",
      crimes: 1309,
    },
    {
      district: "DURG",
      crimes: 6647,
    },
    {
      district: "GRP RAIPUR",
      crimes: 385,
    },
    {
      district: "JAGDALPUR",
      crimes: 2087,
    },
    {
      district: "JANJGIR",
      crimes: 2705,
    },
    {
      district: "JASHPUR",
      crimes: 959,
    },
    {
      district: "KABIRDHAM",
      crimes: 1119,
    },
    {
      district: "KANKER",
      crimes: 1022,
    },
    {
      district: "KORBA",
      crimes: 2083,
    },
    {
      district: "KORIYA",
      crimes: 1343,
    },
    {
      district: "MAHASAMUND",
      crimes: 1551,
    },
    {
      district: "NARAYANPUR",
      crimes: 163,
    },
    {
      district: "RAIGARH",
      crimes: 2234,
    },
    {
      district: "RAIPUR",
      crimes: 7454,
    },
    {
      district: "RAJNANDGAON",
      crimes: 2419,
    },
    {
      district: "SARGUJA",
      crimes: 1843,
    },
    {
      district: "SURAJPUR",
      crimes: 1213,
    },
    {
      district: "TOTAL",
      crimes: 43633,
    },
    {
      district: "NORTH GOA",
      crimes: 1305,
    },
    {
      district: "SOUTH GOA",
      crimes: 814,
    },
    {
      district: "TOTAL",
      crimes: 2119,
    },
    {
      district: "AHMEDABAD COMMR.",
      crimes: 17468,
    },
    {
      district: "AHMEDABAD RURAL",
      crimes: 2925,
    },
    {
      district: "AHWA-DANG",
      crimes: 146,
    },
    {
      district: "AMRELI",
      crimes: 3578,
    },
    {
      district: "ANAND",
      crimes: 3077,
    },
    {
      district: "BHARUCH",
      crimes: 2688,
    },
    {
      district: "BHAVNAGAR",
      crimes: 7586,
    },
    {
      district: "DAHOD",
      crimes: 1523,
    },
    {
      district: "GANDHINAGAR",
      crimes: 2646,
    },
    {
      district: "HIMATNAGAR",
      crimes: 4380,
    },
    {
      district: "JAMNAGAR",
      crimes: 3882,
    },
    {
      district: "JUNAGADH",
      crimes: 5786,
    },
    {
      district: "KHEDA NORTH",
      crimes: 3997,
    },
    {
      district: "KUTCH",
      crimes: 4421,
    },
    {
      district: "MEHSANA",
      crimes: 4792,
    },
    {
      district: "NARMADA",
      crimes: 1049,
    },
    {
      district: "NAVSARI",
      crimes: 1246,
    },
    {
      district: "PALANPUR",
      crimes: 3845,
    },
    {
      district: "PANCHMAHAL",
      crimes: 3259,
    },
    {
      district: "PATAN",
      crimes: 2646,
    },
    {
      district: "PORBANDAR",
      crimes: 1086,
    },
    {
      district: "RAJKOT COMMR.",
      crimes: 3934,
    },
    {
      district: "RAJKOT RURAL",
      crimes: 4809,
    },
    {
      district: "SURAT COMMR.",
      crimes: 5273,
    },
    {
      district: "SURAT RURAL",
      crimes: 2246,
    },
    {
      district: "SURENDRANAGAR",
      crimes: 3526,
    },
    {
      district: "VADODARA COMMR.",
      crimes: 5276,
    },
    {
      district: "VADODARA RURAL",
      crimes: 3023,
    },
    {
      district: "VALSAD",
      crimes: 1694,
    },
    {
      district: "W.RLY",
      crimes: 1607,
    },
    {
      district: "TOTAL",
      crimes: 113414,
    },
    {
      district: "AMBALA",
      crimes: 2064,
    },
    {
      district: "BHIWANI",
      crimes: 2184,
    },
    {
      district: "FARIDABAD",
      crimes: 5051,
    },
    {
      district: "FATEHABAD",
      crimes: 1282,
    },
    {
      district: "GRP",
      crimes: 859,
    },
    {
      district: "GURGAON",
      crimes: 3969,
    },
    {
      district: "HISSAR",
      crimes: 2709,
    },
    {
      district: "JHAJJAR",
      crimes: 1343,
    },
    {
      district: "JIND",
      crimes: 1231,
    },
    {
      district: "KAITHAL",
      crimes: 1286,
    },
    {
      district: "KARNAL",
      crimes: 2990,
    },
    {
      district: "KURUKSHETRA",
      crimes: 2164,
    },
    {
      district: "MAHENDRAGARH",
      crimes: 1084,
    },
    {
      district: "MEWAT",
      crimes: 1567,
    },
    {
      district: "PANCHKULA",
      crimes: 1200,
    },
    {
      district: "PANIPAT",
      crimes: 2138,
    },
    {
      district: "REWARI",
      crimes: 1753,
    },
    {
      district: "ROHTAK",
      crimes: 2003,
    },
    {
      district: "SIRSA",
      crimes: 1667,
    },
    {
      district: "SONIPAT",
      crimes: 2413,
    },
    {
      district: "YAMUNANAGAR",
      crimes: 1707,
    },
    {
      district: "TOTAL",
      crimes: 42664,
    },
    {
      district: "BILASPUR",
      crimes: 1165,
    },
    {
      district: "CHAMBA",
      crimes: 580,
    },
    {
      district: "G.R.P.",
      crimes: 10,
    },
    {
      district: "HAMIRPUR",
      crimes: 983,
    },
    {
      district: "KANGRA",
      crimes: 2023,
    },
    {
      district: "KINNAUR",
      crimes: 231,
    },
    {
      district: "KULLU",
      crimes: 870,
    },
    {
      district: "LAHAUL-SPITI",
      crimes: 51,
    },
    {
      district: "MANDI",
      crimes: 1712,
    },
    {
      district: "SHIMLA",
      crimes: 2009,
    },
    {
      district: "SIRMAUR",
      crimes: 720,
    },
    {
      district: "SOLAN",
      crimes: 1236,
    },
    {
      district: "UNA",
      crimes: 755,
    },
    {
      district: "TOTAL",
      crimes: 12345,
    },
    {
      district: "ANANTNAG",
      crimes: 1530,
    },
    {
      district: "AWANTIPORA",
      crimes: 410,
    },
    {
      district: "BARAMULLA",
      crimes: 1701,
    },
    {
      district: "BORDER",
      crimes: 522,
    },
    {
      district: "BUDGAM",
      crimes: 965,
    },
    {
      district: "CRIME JAMMU",
      crimes: 46,
    },
    {
      district: "CRIME SRINAGAR",
      crimes: 93,
    },
    {
      district: "DODA",
      crimes: 683,
    },
    {
      district: "GANDERBAL",
      crimes: 498,
    },
    {
      district: "HANDWARA",
      crimes: 494,
    },
    {
      district: "JAMMU",
      crimes: 3085,
    },
    {
      district: "KARGIL",
      crimes: 93,
    },
    {
      district: "KATHUA",
      crimes: 967,
    },
    {
      district: "KULGAM",
      crimes: 584,
    },
    {
      district: "KUPWARA",
      crimes: 675,
    },
    {
      district: "LEH",
      crimes: 174,
    },
    {
      district: "POONCH",
      crimes: 641,
    },
    {
      district: "PULWAMA",
      crimes: 922,
    },
    {
      district: "RAILWAYS",
      crimes: 21,
    },
    {
      district: "RAJOURI",
      crimes: 1168,
    },
    {
      district: "RAMBAN",
      crimes: 648,
    },
    {
      district: "REASI",
      crimes: 316,
    },
    {
      district: "SRINAGAR",
      crimes: 2883,
    },
    {
      district: "UDHAMPUR",
      crimes: 996,
    },
    {
      district: "TOTAL",
      crimes: 20115,
    },
    {
      district: "BOKARO",
      crimes: 2411,
    },
    {
      district: "CHAIBASA",
      crimes: 1004,
    },
    {
      district: "CHATRA",
      crimes: 716,
    },
    {
      district: "DEOGHAR",
      crimes: 1385,
    },
    {
      district: "DHANBAD",
      crimes: 3645,
    },
    {
      district: "DHANBAD RLY.",
      crimes: 103,
    },
    {
      district: "DUMKA",
      crimes: 1571,
    },
    {
      district: "GARHWA",
      crimes: 964,
    },
    {
      district: "GIRIDIH",
      crimes: 2356,
    },
    {
      district: "GODDA",
      crimes: 1273,
    },
    {
      district: "GUMLA",
      crimes: 787,
    },
    {
      district: "HAZARIBAGH",
      crimes: 3189,
    },
    {
      district: "JAMSHEDPUR",
      crimes: 3143,
    },
    {
      district: "JAMSHEDPUR RLY.",
      crimes: 400,
    },
    {
      district: "JAMTARA",
      crimes: 540,
    },
    {
      district: "KODERMA",
      crimes: 816,
    },
    {
      district: "LATEHAR",
      crimes: 459,
    },
    {
      district: "LOHARDAGGA",
      crimes: 615,
    },
    {
      district: "PAKUR",
      crimes: 719,
    },
    {
      district: "PALAMU",
      crimes: 1718,
    },
    {
      district: "RANCHI",
      crimes: 5075,
    },
    {
      district: "SAHEBGANJ",
      crimes: 813,
    },
    {
      district: "SARAIKELA",
      crimes: 1013,
    },
    {
      district: "SIMDEGA",
      crimes: 460,
    },
    {
      district: "TOTAL",
      crimes: 35175,
    },
    {
      district: "BAGALKOT",
      crimes: 2083,
    },
    {
      district: "BANGALORE COMMR.",
      crimes: 29042,
    },
    {
      district: "BANGALORE RURAL",
      crimes: 8200,
    },
    {
      district: "BELGAUM",
      crimes: 5680,
    },
    {
      district: "BELLARY",
      crimes: 4432,
    },
    {
      district: "BIDAR",
      crimes: 3589,
    },
    {
      district: "BIJAPUR",
      crimes: 3015,
    },
    {
      district: "CHAMARAJNAGAR",
      crimes: 1504,
    },
    {
      district: "CHICKMAGALUR",
      crimes: 2716,
    },
    {
      district: "CHITRADURGA",
      crimes: 3492,
    },
    {
      district: "DAKSHIN KANNADA",
      crimes: 4292,
    },
    {
      district: "DAVANAGERE",
      crimes: 2869,
    },
    {
      district: "DHARWAD COMMR.",
      crimes: 1818,
    },
    {
      district: "DHARWAD RURAL",
      crimes: 992,
    },
    {
      district: "GADAG",
      crimes: 1030,
    },
    {
      district: "GULBARGA",
      crimes: 4858,
    },
    {
      district: "HASSAN",
      crimes: 4120,
    },
    {
      district: "HAVERI",
      crimes: 1888,
    },
    {
      district: "K.G.F.",
      crimes: 841,
    },
    {
      district: "KODAGU",
      crimes: 1478,
    },
    {
      district: "KOLAR",
      crimes: 3125,
    },
    {
      district: "KOPPAL",
      crimes: 1589,
    },
    {
      district: "MANDYA",
      crimes: 3380,
    },
    {
      district: "MYSORE COMMR.",
      crimes: 2600,
    },
    {
      district: "MYSORE RURAL",
      crimes: 2649,
    },
    {
      district: "RAICHUR",
      crimes: 2609,
    },
    {
      district: "RAILWAYS",
      crimes: 606,
    },
    {
      district: "SHIMOGA",
      crimes: 4169,
    },
    {
      district: "TUMKUR",
      crimes: 4354,
    },
    {
      district: "UDUPI",
      crimes: 2237,
    },
    {
      district: "UTTAR KANNADA",
      crimes: 2323,
    },
    {
      district: "TOTAL",
      crimes: 117580,
    },
    {
      district: "ALAPUZHA",
      crimes: 7622,
    },
    {
      district: "CBCID",
      crimes: 164,
    },
    {
      district: "ERNAKULAM COMMR.",
      crimes: 5930,
    },
    {
      district: "ERNAKULAM RURAL",
      crimes: 8667,
    },
    {
      district: "IDUKKI",
      crimes: 4500,
    },
    {
      district: "KANNUR",
      crimes: 5153,
    },
    {
      district: "KASARGOD",
      crimes: 2998,
    },
    {
      district: "KOLLAM",
      crimes: 9989,
    },
    {
      district: "KOTTAYAM",
      crimes: 7923,
    },
    {
      district: "KOZHIKODE COMMR.",
      crimes: 3499,
    },
    {
      district: "KOZHIKODE RURAL",
      crimes: 4533,
    },
    {
      district: "MALAPPURAM",
      crimes: 6860,
    },
    {
      district: "PALAKKAD",
      crimes: 5496,
    },
    {
      district: "PATHANAMTHITTA",
      crimes: 4388,
    },
    {
      district: "RAILWAYS",
      crimes: 222,
    },
    {
      district: "THRISSUR",
      crimes: 9639,
    },
    {
      district: "TRIVANDRUM COMMR.",
      crimes: 5495,
    },
    {
      district: "TRIVANDRUM RURAL",
      crimes: 9108,
    },
    {
      district: "WAYANADU",
      crimes: 2164,
    },
    {
      district: "TOTAL",
      crimes: 104350,
    },
    {
      district: "ANUPPUR",
      crimes: 1458,
    },
    {
      district: "ASHOK NAGAR",
      crimes: 1941,
    },
    {
      district: "BALAGHAT",
      crimes: 2924,
    },
    {
      district: "BARWANI",
      crimes: 2335,
    },
    {
      district: "BETUL",
      crimes: 3005,
    },
    {
      district: "BHIND",
      crimes: 3929,
    },
    {
      district: "BHOPAL",
      crimes: 10850,
    },
    {
      district: "BHOPAL RLY.",
      crimes: 1544,
    },
    {
      district: "BURHANPUR",
      crimes: 1449,
    },
    {
      district: "CHHATARPUR",
      crimes: 3651,
    },
    {
      district: "CHHINDWARA",
      crimes: 3963,
    },
    {
      district: "DAMOH",
      crimes: 2275,
    },
    {
      district: "DATIYA",
      crimes: 2179,
    },
    {
      district: "DEWAS",
      crimes: 6075,
    },
    {
      district: "DHAR",
      crimes: 5227,
    },
    {
      district: "DINDORI",
      crimes: 725,
    },
    {
      district: "GUNA",
      crimes: 3421,
    },
    {
      district: "GWALIOR",
      crimes: 8765,
    },
    {
      district: "HARDA",
      crimes: 1098,
    },
    {
      district: "HOSHANGABAD",
      crimes: 3546,
    },
    {
      district: "INDORE",
      crimes: 16026,
    },
    {
      district: "INDORE RLY.",
      crimes: 320,
    },
    {
      district: "JABALPUR",
      crimes: 9463,
    },
    {
      district: "JABALPUR RLY.",
      crimes: 574,
    },
    {
      district: "JHABUA",
      crimes: 2505,
    },
    {
      district: "KATNI",
      crimes: 2534,
    },
    {
      district: "KHANDWA",
      crimes: 4380,
    },
    {
      district: "KHARGON",
      crimes: 3972,
    },
    {
      district: "MANDLA",
      crimes: 1462,
    },
    {
      district: "MANDSAUR",
      crimes: 3046,
    },
    {
      district: "MORENA",
      crimes: 5022,
    },
    {
      district: "NARSINGHPUR",
      crimes: 2613,
    },
    {
      district: "NEEMUCH",
      crimes: 1860,
    },
    {
      district: "PANNA",
      crimes: 1487,
    },
    {
      district: "RAISEN",
      crimes: 3368,
    },
    {
      district: "RAJGARH",
      crimes: 4493,
    },
    {
      district: "RATLAM",
      crimes: 3797,
    },
    {
      district: "REWA",
      crimes: 3956,
    },
    {
      district: "SAGAR",
      crimes: 7335,
    },
    {
      district: "SATNA",
      crimes: 5241,
    },
    {
      district: "SEONI",
      crimes: 2454,
    },
    {
      district: "SHAHDOL",
      crimes: 2552,
    },
    {
      district: "SHAJAPUR",
      crimes: 3570,
    },
    {
      district: "SHEOPUR",
      crimes: 1167,
    },
    {
      district: "SHIVPURI",
      crimes: 3713,
    },
    {
      district: "SIDHI",
      crimes: 3661,
    },
    {
      district: "SIHORE",
      crimes: 2957,
    },
    {
      district: "TIKAMGARH",
      crimes: 2761,
    },
    {
      district: "UJJAIN",
      crimes: 7371,
    },
    {
      district: "UMARIYA",
      crimes: 1208,
    },
    {
      district: "VIDISHA",
      crimes: 3944,
    },
    {
      district: "TOTAL",
      crimes: 189172,
    },
    {
      district: "AHMEDNAGAR",
      crimes: 5241,
    },
    {
      district: "AKOLA",
      crimes: 4594,
    },
    {
      district: "AMRAVATI COMMR.",
      crimes: 2573,
    },
    {
      district: "AMRAVATI RURAL",
      crimes: 3655,
    },
    {
      district: "AURANGABAD COMMR.",
      crimes: 2476,
    },
    {
      district: "AURANGABAD RURAL",
      crimes: 2715,
    },
    {
      district: "BEED",
      crimes: 4324,
    },
    {
      district: "BHANDARA",
      crimes: 2398,
    },
    {
      district: "BULDHANA",
      crimes: 4240,
    },
    {
      district: "CHANDRAPUR",
      crimes: 3446,
    },
    {
      district: "DHULE",
      crimes: 2258,
    },
    {
      district: "GADCHIROLI",
      crimes: 1266,
    },
    {
      district: "GONDIA",
      crimes: 2108,
    },
    {
      district: "HINGOLI",
      crimes: 1908,
    },
    {
      district: "JALGAON",
      crimes: 4563,
    },
    {
      district: "JALNA",
      crimes: 2880,
    },
    {
      district: "KOLHAPUR",
      crimes: 3423,
    },
    {
      district: "LATUR",
      crimes: 3379,
    },
    {
      district: "MUMBAI",
      crimes: 31432,
    },
    {
      district: "MUMBAI RLY.",
      crimes: 1818,
    },
    {
      district: "NAGPUR COMMR.",
      crimes: 9605,
    },
    {
      district: "NAGPUR RLY.",
      crimes: 1110,
    },
    {
      district: "NAGPUR RURAL",
      crimes: 4815,
    },
    {
      district: "NANDED",
      crimes: 5420,
    },
    {
      district: "NANDURBAR",
      crimes: 1168,
    },
    {
      district: "NASIK COMMR.",
      crimes: 2776,
    },
    {
      district: "NASIK RURAL",
      crimes: 4513,
    },
    {
      district: "NAVI MUMBAI",
      crimes: 3843,
    },
    {
      district: "OSMANABAD",
      crimes: 3027,
    },
    {
      district: "PARBHANI",
      crimes: 2383,
    },
    {
      district: "PUNE COMMR.",
      crimes: 11817,
    },
    {
      district: "PUNE RLY.",
      crimes: 208,
    },
    {
      district: "PUNE RURAL",
      crimes: 5343,
    },
    {
      district: "RAIGAD",
      crimes: 2322,
    },
    {
      district: "RATNAGIRI",
      crimes: 1458,
    },
    {
      district: "SANGLI",
      crimes: 3068,
    },
    {
      district: "SATARA",
      crimes: 3777,
    },
    {
      district: "SINDHUDURG",
      crimes: 853,
    },
    {
      district: "SOLAPUR COMMR.",
      crimes: 1644,
    },
    {
      district: "SOLAPUR RURAL",
      crimes: 3363,
    },
    {
      district: "THANE COMMR.",
      crimes: 7664,
    },
    {
      district: "THANE RURAL",
      crimes: 4600,
    },
    {
      district: "WARDHA",
      crimes: 4018,
    },
    {
      district: "WASHIM",
      crimes: 2096,
    },
    {
      district: "YAVATMAL",
      crimes: 5439,
    },
    {
      district: "TOTAL",
      crimes: 187027,
    },
    {
      district: "BISHNUPUR",
      crimes: 340,
    },
    {
      district: "CHANDEL",
      crimes: 89,
    },
    {
      district: "CHURACHANDPUR",
      crimes: 175,
    },
    {
      district: "IMPHAL(EAST)",
      crimes: 523,
    },
    {
      district: "IMPHAL(WEST)",
      crimes: 1058,
    },
    {
      district: "SENAPATI",
      crimes: 120,
    },
    {
      district: "TAMENGLONG",
      crimes: 47,
    },
    {
      district: "THOUBAL",
      crimes: 482,
    },
    {
      district: "UKHRUL",
      crimes: 79,
    },
    {
      district: "TOTAL",
      crimes: 2913,
    },
    {
      district: "GARO HILLS EAST",
      crimes: 158,
    },
    {
      district: "GARO HILLS SOUTH",
      crimes: 49,
    },
    {
      district: "GARO HILLS WEST",
      crimes: 267,
    },
    {
      district: "JAINTIA HILLS",
      crimes: 286,
    },
    {
      district: "KHASI HILLS EAST",
      crimes: 762,
    },
    {
      district: "KHASI HILLS WEST",
      crimes: 175,
    },
    {
      district: "RI-BHOI",
      crimes: 183,
    },
    {
      district: "TOTAL",
      crimes: 1880,
    },
    {
      district: "AIZAWL",
      crimes: 534,
    },
    {
      district: "CHAMPHAI",
      crimes: 233,
    },
    {
      district: "KOLASIB",
      crimes: 152,
    },
    {
      district: "LAWNGTLAI",
      crimes: 249,
    },
    {
      district: "LUNGLEI",
      crimes: 468,
    },
    {
      district: "MAMIT",
      crimes: 104,
    },
    {
      district: "SAIHA",
      crimes: 270,
    },
    {
      district: "SERCHHIP",
      crimes: 146,
    },
    {
      district: "TOTAL",
      crimes: 2156,
    },
    {
      district: "DIMAPUR",
      crimes: 350,
    },
    {
      district: "KIPHIRE",
      crimes: 19,
    },
    {
      district: "KOHIMA",
      crimes: 254,
    },
    {
      district: "MOKOKCHUNG",
      crimes: 47,
    },
    {
      district: "MON",
      crimes: 84,
    },
    {
      district: "PEREN",
      crimes: 30,
    },
    {
      district: "PHEK",
      crimes: 52,
    },
    {
      district: "TUENSANG",
      crimes: 77,
    },
    {
      district: "WOKHA",
      crimes: 86,
    },
    {
      district: "ZUNHEBOTO",
      crimes: 50,
    },
    {
      district: "TOTAL",
      crimes: 1049,
    },
    {
      district: "ANGUL",
      crimes: 2047,
    },
    {
      district: "BALASORE",
      crimes: 2584,
    },
    {
      district: "BARAGARH",
      crimes: 1655,
    },
    {
      district: "BERHAMPUR",
      crimes: 1504,
    },
    {
      district: "BHADRAK",
      crimes: 1720,
    },
    {
      district: "BOLANGIR",
      crimes: 1621,
    },
    {
      district: "BOUDH",
      crimes: 409,
    },
    {
      district: "CUTTACK",
      crimes: 4197,
    },
    {
      district: "DEOGARH",
      crimes: 581,
    },
    {
      district: "DHENKANAL",
      crimes: 1546,
    },
    {
      district: "GAJAPATI",
      crimes: 420,
    },
    {
      district: "GANJAM",
      crimes: 1948,
    },
    {
      district: "JAGATSINGHPUR",
      crimes: 1218,
    },
    {
      district: "JAJPUR",
      crimes: 1786,
    },
    {
      district: "JHARSUGUDA",
      crimes: 1194,
    },
    {
      district: "KALAHANDI",
      crimes: 1064,
    },
    {
      district: "KANDHAMAL",
      crimes: 947,
    },
    {
      district: "KENDRAPARA",
      crimes: 1159,
    },
    {
      district: "KEONJHAR",
      crimes: 2268,
    },
    {
      district: "KHURDA",
      crimes: 5432,
    },
    {
      district: "KORAPUT",
      crimes: 1551,
    },
    {
      district: "MALKANGIR",
      crimes: 495,
    },
    {
      district: "MAYURBHANJ",
      crimes: 2259,
    },
    {
      district: "NAYAGARH",
      crimes: 991,
    },
    {
      district: "NOWRANGPUR",
      crimes: 756,
    },
    {
      district: "NUAPADA",
      crimes: 751,
    },
    {
      district: "PURI",
      crimes: 2477,
    },
    {
      district: "RAYAGADA",
      crimes: 965,
    },
    {
      district: "ROURKELA",
      crimes: 1351,
    },
    {
      district: "SAMBALPUR",
      crimes: 2046,
    },
    {
      district: "SONEPUR",
      crimes: 347,
    },
    {
      district: "SRP(CUTTACK)",
      crimes: 426,
    },
    {
      district: "SRP(ROURKELA)",
      crimes: 215,
    },
    {
      district: "SUNDARGARH",
      crimes: 1755,
    },
    {
      district: "TOTAL",
      crimes: 51685,
    },
    {
      district: "AMRITSAR",
      crimes: 1124,
    },
    {
      district: "BARNALA",
      crimes: 473,
    },
    {
      district: "BATALA",
      crimes: 1085,
    },
    {
      district: "BHATINDA",
      crimes: 1547,
    },
    {
      district: "FARIDKOT",
      crimes: 579,
    },
    {
      district: "FATEHGARH SAHIB",
      crimes: 627,
    },
    {
      district: "FEROZPUR",
      crimes: 1354,
    },
    {
      district: "G.R.P",
      crimes: 295,
    },
    {
      district: "GURDASPUR",
      crimes: 848,
    },
    {
      district: "HOSHIARPUR",
      crimes: 1120,
    },
    {
      district: "JAGRAON",
      crimes: 841,
    },
    {
      district: "JALANDHAR",
      crimes: 2926,
    },
    {
      district: "KAPURTHALA",
      crimes: 1031,
    },
    {
      district: "KHANNA",
      crimes: 956,
    },
    {
      district: "LUDHIANA",
      crimes: 2707,
    },
    {
      district: "MAJITHA",
      crimes: 697,
    },
    {
      district: "MANSA",
      crimes: 613,
    },
    {
      district: "MOGA",
      crimes: 873,
    },
    {
      district: "MUKTSAR",
      crimes: 772,
    },
    {
      district: "NAWAN SHAHR",
      crimes: 850,
    },
    {
      district: "PATIALA",
      crimes: 2786,
    },
    {
      district: "ROPAR",
      crimes: 1204,
    },
    {
      district: "SANGRUR",
      crimes: 1155,
    },
    {
      district: "TARN TARAN",
      crimes: 673,
    },
    {
      district: "TOTAL",
      crimes: 27136,
    },
    {
      district: "AJMER",
      crimes: 5861,
    },
    {
      district: "ALWAR",
      crimes: 6921,
    },
    {
      district: "BANSWARA",
      crimes: 2426,
    },
    {
      district: "BARAN",
      crimes: 2977,
    },
    {
      district: "BARMER",
      crimes: 2479,
    },
    {
      district: "BHARATPUR",
      crimes: 6664,
    },
    {
      district: "BHILWARA",
      crimes: 5105,
    },
    {
      district: "BIKANER",
      crimes: 3418,
    },
    {
      district: "BUNDI",
      crimes: 3143,
    },
    {
      district: "CHITTORGARH",
      crimes: 5675,
    },
    {
      district: "CHURU",
      crimes: 2258,
    },
    {
      district: "DAUSA",
      crimes: 3450,
    },
    {
      district: "DHOLPUR",
      crimes: 2900,
    },
    {
      district: "DUNGARPUR",
      crimes: 1468,
    },
    {
      district: "G.R.P.",
      crimes: 916,
    },
    {
      district: "GANGANAGAR",
      crimes: 4855,
    },
    {
      district: "HANUMANGARH",
      crimes: 3185,
    },
    {
      district: "JAIPUR",
      crimes: 20293,
    },
    {
      district: "JAISALMER",
      crimes: 742,
    },
    {
      district: "JALORE",
      crimes: 2108,
    },
    {
      district: "JHALAWAR",
      crimes: 3558,
    },
    {
      district: "JHUNJHUNU",
      crimes: 3355,
    },
    {
      district: "JODHPUR",
      crimes: 6456,
    },
    {
      district: "KARAULI",
      crimes: 3166,
    },
    {
      district: "KOTA",
      crimes: 6773,
    },
    {
      district: "NAGAUR",
      crimes: 4078,
    },
    {
      district: "PALI",
      crimes: 4693,
    },
    {
      district: "RAJSAMAND",
      crimes: 2318,
    },
    {
      district: "SAWAI MADHOPUR",
      crimes: 3059,
    },
    {
      district: "SIKAR",
      crimes: 4223,
    },
    {
      district: "SIROHI",
      crimes: 2132,
    },
    {
      district: "TONK",
      crimes: 3844,
    },
    {
      district: "UDAIPUR",
      crimes: 6418,
    },
    {
      district: "TOTAL",
      crimes: 140917,
    },
    {
      district: "EAST",
      crimes: 271,
    },
    {
      district: "NORTH",
      crimes: 32,
    },
    {
      district: "SOUTH",
      crimes: 173,
    },
    {
      district: "WEST",
      crimes: 76,
    },
    {
      district: "TOTAL",
      crimes: 552,
    },
    {
      district: "CHENNAI",
      crimes: 20127,
    },
    {
      district: "CHENNAI RLY.",
      crimes: 373,
    },
    {
      district: "COIMBATORE RURAL",
      crimes: 10000,
    },
    {
      district: "COIMBATORE URBAN",
      crimes: 3845,
    },
    {
      district: "CUDDALORE",
      crimes: 6458,
    },
    {
      district: "DHARMAPURI",
      crimes: 2727,
    },
    {
      district: "DINDIGUL",
      crimes: 4829,
    },
    {
      district: "ERODE",
      crimes: 6379,
    },
    {
      district: "KANCHIPURAM",
      crimes: 5085,
    },
    {
      district: "KANYAKUMARI",
      crimes: 3063,
    },
    {
      district: "KARUR",
      crimes: 2865,
    },
    {
      district: "KRISHNAGIRI",
      crimes: 5024,
    },
    {
      district: "MADURAI RURAL",
      crimes: 5380,
    },
    {
      district: "MADURAI URBAN",
      crimes: 3384,
    },
    {
      district: "NAGAPATTINAM",
      crimes: 3673,
    },
    {
      district: "NAMAKKAL",
      crimes: 3310,
    },
    {
      district: "NILGIRIS",
      crimes: 1695,
    },
    {
      district: "PERAMBALUR",
      crimes: 2683,
    },
    {
      district: "PUDUKOTTAI",
      crimes: 3752,
    },
    {
      district: "RAMNATHAPURAM",
      crimes: 2894,
    },
    {
      district: "SALEM RURAL",
      crimes: 6091,
    },
    {
      district: "SALEM URBAN",
      crimes: 4025,
    },
    {
      district: "SIVAGANGAI",
      crimes: 2400,
    },
    {
      district: "THANJAVUR",
      crimes: 4095,
    },
    {
      district: "THENI",
      crimes: 3227,
    },
    {
      district: "THIRUNELVELI RURAL",
      crimes: 5530,
    },
    {
      district: "THIRUNELVELI URBAN",
      crimes: 1191,
    },
    {
      district: "THIRUVALLUR",
      crimes: 3061,
    },
    {
      district: "THIRUVANNAMALAI",
      crimes: 2971,
    },
    {
      district: "THIRUVARUR",
      crimes: 3064,
    },
    {
      district: "THOOTHUGUDI",
      crimes: 4571,
    },
    {
      district: "TRICHY RLY.",
      crimes: 200,
    },
    {
      district: "TRICHY RURAL",
      crimes: 3855,
    },
    {
      district: "TRICHY URBAN",
      crimes: 2935,
    },
    {
      district: "VELLORE",
      crimes: 6411,
    },
    {
      district: "VILUPPURAM",
      crimes: 5959,
    },
    {
      district: "VIRUDHUNAGAR",
      crimes: 5228,
    },
    {
      district: "TOTAL",
      crimes: 162360,
    },
    {
      district: "DHALAI",
      crimes: 328,
    },
    {
      district: "NORTH",
      crimes: 727,
    },
    {
      district: "SOUTH",
      crimes: 941,
    },
    {
      district: "WEST",
      crimes: 1360,
    },
    {
      district: "TOTAL",
      crimes: 3356,
    },
    {
      district: "AGRA",
      crimes: 4799,
    },
    {
      district: "ALIGARH",
      crimes: 4166,
    },
    {
      district: "ALLAHABAD",
      crimes: 3517,
    },
    {
      district: "AMBEDKAR NAGAR",
      crimes: 886,
    },
    {
      district: "AURAIYA",
      crimes: 962,
    },
    {
      district: "AZAMGARH",
      crimes: 2030,
    },
    {
      district: "BADAUN",
      crimes: 2003,
    },
    {
      district: "BAGHPAT",
      crimes: 1002,
    },
    {
      district: "BAHRAICH",
      crimes: 1164,
    },
    {
      district: "BALLIA",
      crimes: 863,
    },
    {
      district: "BALRAMPUR",
      crimes: 309,
    },
    {
      district: "BANDA",
      crimes: 1009,
    },
    {
      district: "BARABANKI",
      crimes: 1638,
    },
    {
      district: "BAREILLY",
      crimes: 4020,
    },
    {
      district: "BASTI",
      crimes: 822,
    },
    {
      district: "BIJNOR",
      crimes: 1434,
    },
    {
      district: "BULANDSHAHAR",
      crimes: 2723,
    },
    {
      district: "CHANDOLI",
      crimes: 484,
    },
    {
      district: "CHITRAKOOT DHAM",
      crimes: 406,
    },
    {
      district: "DEORIA",
      crimes: 1060,
    },
    {
      district: "ETAH",
      crimes: 1941,
    },
    {
      district: "ETAWAH",
      crimes: 1604,
    },
    {
      district: "FAIZABAD",
      crimes: 1226,
    },
    {
      district: "FATEHGARH",
      crimes: 765,
    },
    {
      district: "FATEHPUR",
      crimes: 1142,
    },
    {
      district: "FIROZABAD",
      crimes: 2146,
    },
    {
      district: "G.R.P.",
      crimes: 2002,
    },
    {
      district: "GAUTAMBUDH NAGAR",
      crimes: 2169,
    },
    {
      district: "GHAZIABAD",
      crimes: 4256,
    },
    {
      district: "GHAZIPUR",
      crimes: 872,
    },
    {
      district: "GONDA",
      crimes: 999,
    },
    {
      district: "GORAKHPUR",
      crimes: 2193,
    },
    {
      district: "HAMIRPUR",
      crimes: 631,
    },
    {
      district: "HARDOI",
      crimes: 1914,
    },
    {
      district: "HATHRAS",
      crimes: 1646,
    },
    {
      district: "J.P.NAGAR",
      crimes: 1132,
    },
    {
      district: "JALAUN",
      crimes: 1552,
    },
    {
      district: "JAUNPUR",
      crimes: 1301,
    },
    {
      district: "JHANSI",
      crimes: 870,
    },
    {
      district: "KANNAUJ",
      crimes: 930,
    },
    {
      district: "KANPUR DEHAT",
      crimes: 1454,
    },
    {
      district: "KANPUR NAGAR",
      crimes: 3718,
    },
    {
      district: "KAUSHAMBI",
      crimes: 723,
    },
    {
      district: "KHIRI",
      crimes: 2257,
    },
    {
      district: "KUSHI NAGAR",
      crimes: 1106,
    },
    {
      district: "LALITPUR",
      crimes: 287,
    },
    {
      district: "LUCKNOW",
      crimes: 8007,
    },
    {
      district: "MAHARAJGANJ",
      crimes: 563,
    },
    {
      district: "MAHOBA",
      crimes: 399,
    },
    {
      district: "MAINPURI",
      crimes: 1437,
    },
    {
      district: "MATHURA",
      crimes: 2532,
    },
    {
      district: "MAU",
      crimes: 784,
    },
    {
      district: "MEERUT",
      crimes: 4347,
    },
    {
      district: "MIRZAPUR",
      crimes: 898,
    },
    {
      district: "MORADABAD",
      crimes: 3499,
    },
    {
      district: "MUZAFFARNAGAR",
      crimes: 3232,
    },
    {
      district: "PILIBHIT",
      crimes: 1238,
    },
    {
      district: "PRATAPGARH",
      crimes: 1439,
    },
    {
      district: "RAIBAREILLY",
      crimes: 1771,
    },
    {
      district: "RAMPUR",
      crimes: 1208,
    },
    {
      district: "SAHARANPUR",
      crimes: 2393,
    },
    {
      district: "SANT KABIRNAGAR",
      crimes: 408,
    },
    {
      district: "SHAHJAHANPUR",
      crimes: 1822,
    },
    {
      district: "SHRAWASTI",
      crimes: 337,
    },
    {
      district: "SIDHARTHNAGAR",
      crimes: 677,
    },
    {
      district: "SITAPUR",
      crimes: 3168,
    },
    {
      district: "SONBHADRA",
      crimes: 519,
    },
    {
      district: "ST.RAVIDASNAGAR",
      crimes: 484,
    },
    {
      district: "SULTANPUR",
      crimes: 1297,
    },
    {
      district: "UNNAO",
      crimes: 1768,
    },
    {
      district: "VARANASI",
      crimes: 1748,
    },
    {
      district: "TOTAL",
      crimes: 122108,
    },
    {
      district: "ALMORA",
      crimes: 254,
    },
    {
      district: "BAGESHWAR",
      crimes: 106,
    },
    {
      district: "CHAMOLI",
      crimes: 248,
    },
    {
      district: "CHAMPAWAT",
      crimes: 108,
    },
    {
      district: "DEHRADUN",
      crimes: 1845,
    },
    {
      district: "HARIDWAR",
      crimes: 1800,
    },
    {
      district: "NAINITAL",
      crimes: 871,
    },
    {
      district: "PAURI GARHWAL",
      crimes: 387,
    },
    {
      district: "PITHORAGARH",
      crimes: 254,
    },
    {
      district: "RUDRA PRAYAG",
      crimes: 137,
    },
    {
      district: "TEHRI GARHWAL",
      crimes: 248,
    },
    {
      district: "UDHAMSINGH NAGAR",
      crimes: 1561,
    },
    {
      district: "UTTARKASHI",
      crimes: 214,
    },
    {
      district: "TOTAL",
      crimes: 8033,
    },
    {
      district: "24 PARGANAS NORTH",
      crimes: 7958,
    },
    {
      district: "24 PARGANAS SOUTH",
      crimes: 6724,
    },
    {
      district: "ASANSOL",
      crimes: 1217,
    },
    {
      district: "BANKURA",
      crimes: 1542,
    },
    {
      district: "BIRBHUM",
      crimes: 1680,
    },
    {
      district: "BURDWAN",
      crimes: 4502,
    },
    {
      district: "COOCHBEHAR",
      crimes: 1277,
    },
    {
      district: "DAKSHIN DINAJPUR",
      crimes: 943,
    },
    {
      district: "DARJEELING",
      crimes: 1448,
    },
    {
      district: "HOOGHLY",
      crimes: 3270,
    },
    {
      district: "HOWRAH",
      crimes: 1658,
    },
    {
      district: "HOWRAH CITY",
      crimes: 2381,
    },
    {
      district: "HOWRAH G.R.P.",
      crimes: 569,
    },
    {
      district: "JALPAIGURI",
      crimes: 2886,
    },
    {
      district: "KHARAGPUR G.R.P.",
      crimes: 150,
    },
    {
      district: "KOLKATA",
      crimes: 9391,
    },
    {
      district: "MALDA",
      crimes: 2241,
    },
    {
      district: "MURSHIDABAD",
      crimes: 4052,
    },
    {
      district: "NADIA",
      crimes: 4454,
    },
    {
      district: "PASCHIM MIDNAPUR",
      crimes: 2716,
    },
    {
      district: "PURAB MIDNAPUR",
      crimes: 2163,
    },
    {
      district: "PURULIA",
      crimes: 1034,
    },
    {
      district: "SEALDAH G.R.P.",
      crimes: 304,
    },
    {
      district: "SILIGURI G.R.P.",
      crimes: 141,
    },
    {
      district: "UTTAR DINAJPUR",
      crimes: 1705,
    },
    {
      district: "TOTAL",
      crimes: 66406,
    },
    {
      district: "ANDAMAN",
      crimes: 666,
    },
    {
      district: "NICOBAR",
      crimes: 16,
    },
    {
      district: "TOTAL",
      crimes: 682,
    },
    {
      district: "CHANDIGARH",
      crimes: 3133,
    },
    {
      district: "TOTAL",
      crimes: 3133,
    },
    {
      district: "D and N HAVELI",
      crimes: 434,
    },
    {
      district: "TOTAL",
      crimes: 434,
    },
    {
      district: "DAMAN",
      crimes: 193,
    },
    {
      district: "DIU",
      crimes: 50,
    },
    {
      district: "TOTAL",
      crimes: 243,
    },
    {
      district: "CENTRAL",
      crimes: 3529,
    },
    {
      district: "DELHI UT TOTAL",
      crimes: 56065,
    },
    {
      district: "EAST",
      crimes: 5453,
    },
    {
      district: "G.R.P.(RLY)",
      crimes: 1201,
    },
    {
      district: "IGI AIRPORT",
      crimes: 816,
    },
    {
      district: "NEW DELHI",
      crimes: 2295,
    },
    {
      district: "NORTH",
      crimes: 3306,
    },
    {
      district: "NORTH-EAST",
      crimes: 4849,
    },
    {
      district: "NORTH-WEST",
      crimes: 11019,
    },
    {
      district: "SOUTH",
      crimes: 10529,
    },
    {
      district: "SOUTH-WEST",
      crimes: 5762,
    },
    {
      district: "SPL CELL",
      crimes: 89,
    },
    {
      district: "WEST",
      crimes: 7217,
    },
    {
      district: "LAKSHADWEEP",
      crimes: 42,
    },
    {
      district: "TOTAL",
      crimes: 42,
    },
    {
      district: "PONDICHERRY",
      crimes: 4575,
    },
    {
      district: "TOTAL",
      crimes: 4575,
    },
    {
      district: "ADILABAD",
      crimes: 6122,
    },
    {
      district: "ANANTAPUR",
      crimes: 5090,
    },
    {
      district: "CHITTOOR",
      crimes: 6440,
    },
    {
      district: "CUDDAPAH",
      crimes: 5298,
    },
    {
      district: "CYBERABAD",
      crimes: 14226,
    },
    {
      district: "EAST GODAVARI",
      crimes: 9056,
    },
    {
      district: "GUNTAKAL RLY.",
      crimes: 221,
    },
    {
      district: "GUNTUR",
      crimes: 9080,
    },
    {
      district: "HYDERABAD CITY",
      crimes: 17295,
    },
    {
      district: "KARIMNAGAR",
      crimes: 8141,
    },
    {
      district: "KHAMMAM",
      crimes: 5961,
    },
    {
      district: "KRISHNA",
      crimes: 5267,
    },
    {
      district: "KURNOOL",
      crimes: 5823,
    },
    {
      district: "MAHABOOBNAGAR",
      crimes: 6320,
    },
    {
      district: "MEDAK",
      crimes: 5602,
    },
    {
      district: "NALGONDA",
      crimes: 7933,
    },
    {
      district: "NELLORE",
      crimes: 5805,
    },
    {
      district: "NIZAMABAD",
      crimes: 5812,
    },
    {
      district: "PRAKASHAM",
      crimes: 5776,
    },
    {
      district: "RANGA REDDY",
      crimes: 2028,
    },
    {
      district: "SECUNDERABAD RLY.",
      crimes: 311,
    },
    {
      district: "SRIKAKULAM",
      crimes: 3016,
    },
    {
      district: "VIJAYAWADA CITY",
      crimes: 5862,
    },
    {
      district: "VIJAYAWADA RLY.",
      crimes: 339,
    },
    {
      district: "VISAKHA RURAL",
      crimes: 3235,
    },
    {
      district: "VISAKHAPATNAM",
      crimes: 5478,
    },
    {
      district: "VIZIANAGARAM",
      crimes: 2955,
    },
    {
      district: "WARANGAL",
      crimes: 7879,
    },
    {
      district: "WEST GODAVARI",
      crimes: 7538,
    },
    {
      district: "TOTAL",
      crimes: 173909,
    },
    {
      district: "CHANGLANG",
      crimes: 153,
    },
    {
      district: "DIBANG VALLEY",
      crimes: 135,
    },
    {
      district: "K/KUMEY",
      crimes: 36,
    },
    {
      district: "KAMENG EAST",
      crimes: 124,
    },
    {
      district: "KAMENG WEST",
      crimes: 113,
    },
    {
      district: "LOHIT",
      crimes: 173,
    },
    {
      district: "PAPUM PARE",
      crimes: 556,
    },
    {
      district: "SIANG EAST",
      crimes: 245,
    },
    {
      district: "SIANG UPPER",
      crimes: 85,
    },
    {
      district: "SIANG WEST",
      crimes: 250,
    },
    {
      district: "SUBANSIRI LOWER",
      crimes: 111,
    },
    {
      district: "SUBANSIRI UPPER",
      crimes: 152,
    },
    {
      district: "TAWANG",
      crimes: 49,
    },
    {
      district: "TIRAP",
      crimes: 99,
    },
    {
      district: "UPPER DIBANG VALLEY",
      crimes: 13,
    },
    {
      district: "TOTAL",
      crimes: 2294,
    },
    {
      district: "BARPETA",
      crimes: 1877,
    },
    {
      district: "BASKA",
      crimes: 360,
    },
    {
      district: "BONGAIGAON",
      crimes: 652,
    },
    {
      district: "C.I.D.",
      crimes: 18,
    },
    {
      district: "CACHAR",
      crimes: 3817,
    },
    {
      district: "CHIRANG",
      crimes: 612,
    },
    {
      district: "DARRANG",
      crimes: 1391,
    },
    {
      district: "DHEMAJI",
      crimes: 1025,
    },
    {
      district: "DHUBRI",
      crimes: 2629,
    },
    {
      district: "DIBRUGARH",
      crimes: 2069,
    },
    {
      district: "G.R.P.",
      crimes: 355,
    },
    {
      district: "GOALPARA",
      crimes: 1063,
    },
    {
      district: "GOLAGHAT",
      crimes: 1500,
    },
    {
      district: "GUWAHATI CITY",
      crimes: 4992,
    },
    {
      district: "HAILAKANDI",
      crimes: 948,
    },
    {
      district: "JORHAT",
      crimes: 1463,
    },
    {
      district: "KAMRUP",
      crimes: 1205,
    },
    {
      district: "KARBI ANGLONG",
      crimes: 693,
    },
    {
      district: "KARIMGANJ",
      crimes: 1153,
    },
    {
      district: "KOKRAJHAR",
      crimes: 961,
    },
    {
      district: "LAKHIMPUR",
      crimes: 1642,
    },
    {
      district: "MORIGAON",
      crimes: 1194,
    },
    {
      district: "N.C.HILLS",
      crimes: 221,
    },
    {
      district: "NAGAON",
      crimes: 3546,
    },
    {
      district: "NALBARI",
      crimes: 844,
    },
    {
      district: "R.P.O.",
      crimes: 86,
    },
    {
      district: "SIBSAGAR",
      crimes: 1978,
    },
    {
      district: "SONITPUR",
      crimes: 2156,
    },
    {
      district: "TINSUKIA",
      crimes: 2660,
    },
    {
      district: "UDALGURI",
      crimes: 563,
    },
    {
      district: "TOTAL",
      crimes: 43673,
    },
    {
      district: "ARARIA",
      crimes: 2611,
    },
    {
      district: "ARWAL",
      crimes: 562,
    },
    {
      district: "AURANGABAD",
      crimes: 2230,
    },
    {
      district: "BAGAHA",
      crimes: 1156,
    },
    {
      district: "BANKA",
      crimes: 1526,
    },
    {
      district: "BEGUSARAI",
      crimes: 2884,
    },
    {
      district: "BETTIAH",
      crimes: 3058,
    },
    {
      district: "BHABHUA",
      crimes: 1422,
    },
    {
      district: "BHAGALPUR",
      crimes: 3552,
    },
    {
      district: "BHOJPUR",
      crimes: 3143,
    },
    {
      district: "BUXAR",
      crimes: 1663,
    },
    {
      district: "DARBHANGA",
      crimes: 3235,
    },
    {
      district: "GAYA",
      crimes: 3424,
    },
    {
      district: "GOPALGANJ",
      crimes: 2357,
    },
    {
      district: "JAMALPUR RLY.",
      crimes: 168,
    },
    {
      district: "JAMUI",
      crimes: 1556,
    },
    {
      district: "JEHANABAD",
      crimes: 1087,
    },
    {
      district: "KATIHAR",
      crimes: 1757,
    },
    {
      district: "KATIHAR RLY.",
      crimes: 503,
    },
    {
      district: "KHAGARIA",
      crimes: 1712,
    },
    {
      district: "KISHANGANJ",
      crimes: 1086,
    },
    {
      district: "LAKHISARAI",
      crimes: 971,
    },
    {
      district: "MADHEPURA",
      crimes: 1172,
    },
    {
      district: "MADHUBANI",
      crimes: 1196,
    },
    {
      district: "MOTIHARI",
      crimes: 4246,
    },
    {
      district: "MUNGER",
      crimes: 1846,
    },
    {
      district: "MUZAFFARPUR",
      crimes: 5484,
    },
    {
      district: "MUZAFFARPUR RLY.",
      crimes: 709,
    },
    {
      district: "NALANDA",
      crimes: 2973,
    },
    {
      district: "NAUGACHIA",
      crimes: 914,
    },
    {
      district: "NAWADAH",
      crimes: 1566,
    },
    {
      district: "PATNA",
      crimes: 12736,
    },
    {
      district: "PATNA RLY.",
      crimes: 972,
    },
    {
      district: "PURNEA",
      crimes: 2403,
    },
    {
      district: "ROHTAS",
      crimes: 3038,
    },
    {
      district: "SAHARSA",
      crimes: 1787,
    },
    {
      district: "SAMASTIPUR",
      crimes: 3333,
    },
    {
      district: "SARAN",
      crimes: 3526,
    },
    {
      district: "SHEIKHPURA",
      crimes: 590,
    },
    {
      district: "SHEOHAR",
      crimes: 488,
    },
    {
      district: "SITAMARHI",
      crimes: 2548,
    },
    {
      district: "SIWAN",
      crimes: 2438,
    },
    {
      district: "SUPAUL",
      crimes: 1302,
    },
    {
      district: "VAISHALI",
      crimes: 3735,
    },
    {
      district: "TOTAL",
      crimes: 100665,
    },
    {
      district: "BALRAMPUR",
      crimes: 603,
    },
    {
      district: "BILASPUR",
      crimes: 5301,
    },
    {
      district: "BIZAPUR",
      crimes: 522,
    },
    {
      district: "DANTEWARA",
      crimes: 784,
    },
    {
      district: "DHAMTARI",
      crimes: 1463,
    },
    {
      district: "DURG",
      crimes: 6938,
    },
    {
      district: "GRP RAIPUR",
      crimes: 386,
    },
    {
      district: "JAGDALPUR",
      crimes: 2197,
    },
    {
      district: "JANJGIR",
      crimes: 2851,
    },
    {
      district: "JASHPUR",
      crimes: 974,
    },
    {
      district: "KABIRDHAM",
      crimes: 1171,
    },
    {
      district: "KANKER",
      crimes: 1017,
    },
    {
      district: "KORBA",
      crimes: 2311,
    },
    {
      district: "KORIYA",
      crimes: 1368,
    },
    {
      district: "MAHASAMUND",
      crimes: 1517,
    },
    {
      district: "NARAYANPUR",
      crimes: 156,
    },
    {
      district: "RAIGARH",
      crimes: 2369,
    },
    {
      district: "RAIPUR",
      crimes: 7932,
    },
    {
      district: "RAJNANDGAON",
      crimes: 2569,
    },
    {
      district: "SARGUJA",
      crimes: 1566,
    },
    {
      district: "SURAJPUR",
      crimes: 1182,
    },
    {
      district: "TOTAL",
      crimes: 45177,
    },
    {
      district: "NORTH GOA",
      crimes: 1199,
    },
    {
      district: "SOUTH GOA",
      crimes: 1005,
    },
    {
      district: "TOTAL",
      crimes: 2204,
    },
    {
      district: "AHMEDABAD COMMR.",
      crimes: 19238,
    },
    {
      district: "AHMEDABAD RURAL",
      crimes: 3020,
    },
    {
      district: "AHWA-DANG",
      crimes: 280,
    },
    {
      district: "AMRELI",
      crimes: 2432,
    },
    {
      district: "ANAND",
      crimes: 3053,
    },
    {
      district: "BHARUCH",
      crimes: 2618,
    },
    {
      district: "BHAVNAGAR",
      crimes: 8457,
    },
    {
      district: "DAHOD",
      crimes: 1725,
    },
    {
      district: "GANDHINAGAR",
      crimes: 2841,
    },
    {
      district: "HIMATNAGAR",
      crimes: 6525,
    },
    {
      district: "JAMNAGAR",
      crimes: 3903,
    },
    {
      district: "JUNAGADH",
      crimes: 4683,
    },
    {
      district: "KHEDA NORTH",
      crimes: 4550,
    },
    {
      district: "KUTCH",
      crimes: 6007,
    },
    {
      district: "MEHSANA",
      crimes: 4649,
    },
    {
      district: "NARMADA",
      crimes: 643,
    },
    {
      district: "NAVSARI",
      crimes: 1177,
    },
    {
      district: "PALANPUR",
      crimes: 5018,
    },
    {
      district: "PANCHMAHAL",
      crimes: 3421,
    },
    {
      district: "PATAN",
      crimes: 2679,
    },
    {
      district: "PORBANDAR",
      crimes: 954,
    },
    {
      district: "RAJKOT COMMR.",
      crimes: 3489,
    },
    {
      district: "RAJKOT RURAL",
      crimes: 4167,
    },
    {
      district: "SURAT COMMR.",
      crimes: 8659,
    },
    {
      district: "SURAT RURAL",
      crimes: 2366,
    },
    {
      district: "SURENDRANAGAR",
      crimes: 2748,
    },
    {
      district: "VADODARA COMMR.",
      crimes: 5672,
    },
    {
      district: "VADODARA RURAL",
      crimes: 2616,
    },
    {
      district: "VALSAD",
      crimes: 2066,
    },
    {
      district: "W.RLY",
      crimes: 1316,
    },
    {
      district: "TOTAL",
      crimes: 120972,
    },
    {
      district: "AMBALA",
      crimes: 2666,
    },
    {
      district: "BHIWANI",
      crimes: 2519,
    },
    {
      district: "FARIDABAD",
      crimes: 4682,
    },
    {
      district: "FATEHABAD",
      crimes: 1430,
    },
    {
      district: "GRP",
      crimes: 859,
    },
    {
      district: "GURGAON",
      crimes: 5528,
    },
    {
      district: "HISSAR",
      crimes: 3117,
    },
    {
      district: "JHAJJAR",
      crimes: 1257,
    },
    {
      district: "JIND",
      crimes: 1634,
    },
    {
      district: "KAITHAL",
      crimes: 1554,
    },
    {
      district: "KARNAL",
      crimes: 3143,
    },
    {
      district: "KURUKSHETRA",
      crimes: 2500,
    },
    {
      district: "MAHENDRAGARH",
      crimes: 1853,
    },
    {
      district: "MEWAT",
      crimes: 1569,
    },
    {
      district: "PALWAL",
      crimes: 1523,
    },
    {
      district: "PANCHKULA",
      crimes: 1350,
    },
    {
      district: "PANIPAT",
      crimes: 2500,
    },
    {
      district: "REWARI",
      crimes: 2003,
    },
    {
      district: "ROHTAK",
      crimes: 2226,
    },
    {
      district: "SIRSA",
      crimes: 1847,
    },
    {
      district: "SONIPAT",
      crimes: 2940,
    },
    {
      district: "YAMUNANAGAR",
      crimes: 1809,
    },
    {
      district: "TOTAL",
      crimes: 50509,
    },
    {
      district: "BILASPUR",
      crimes: 1192,
    },
    {
      district: "CHAMBA",
      crimes: 592,
    },
    {
      district: "G.R.P.",
      crimes: 6,
    },
    {
      district: "HAMIRPUR",
      crimes: 1088,
    },
    {
      district: "KANGRA",
      crimes: 2128,
    },
    {
      district: "KINNAUR",
      crimes: 231,
    },
    {
      district: "KULLU",
      crimes: 836,
    },
    {
      district: "LAHAUL-SPITI",
      crimes: 58,
    },
    {
      district: "MANDI",
      crimes: 1892,
    },
    {
      district: "SHIMLA",
      crimes: 1997,
    },
    {
      district: "SIRMAUR",
      crimes: 766,
    },
    {
      district: "SOLAN",
      crimes: 1442,
    },
    {
      district: "UNA",
      crimes: 865,
    },
    {
      district: "TOTAL",
      crimes: 13093,
    },
    {
      district: "ANANTNAG",
      crimes: 1511,
    },
    {
      district: "AWANTIPORA",
      crimes: 334,
    },
    {
      district: "BARAMULLA",
      crimes: 1666,
    },
    {
      district: "BORDER DISTRICT",
      crimes: 555,
    },
    {
      district: "BUDGAM",
      crimes: 1153,
    },
    {
      district: "CRIME JAMMU",
      crimes: 26,
    },
    {
      district: "CRIME SRINAGAR",
      crimes: 55,
    },
    {
      district: "DODA",
      crimes: 888,
    },
    {
      district: "GANDERBAL",
      crimes: 510,
    },
    {
      district: "HANDWARA",
      crimes: 493,
    },
    {
      district: "JAMMU",
      crimes: 3233,
    },
    {
      district: "KARGIL",
      crimes: 107,
    },
    {
      district: "KATHUA",
      crimes: 1106,
    },
    {
      district: "KULGAM",
      crimes: 663,
    },
    {
      district: "KUPWARA",
      crimes: 629,
    },
    {
      district: "LEH",
      crimes: 200,
    },
    {
      district: "POONCH",
      crimes: 719,
    },
    {
      district: "PULWAMA",
      crimes: 946,
    },
    {
      district: "RAILWAYS",
      crimes: 20,
    },
    {
      district: "RAJOURI",
      crimes: 1373,
    },
    {
      district: "RAMBAN",
      crimes: 711,
    },
    {
      district: "REASI",
      crimes: 318,
    },
    {
      district: "SRINAGAR",
      crimes: 2629,
    },
    {
      district: "UDHAMPUR",
      crimes: 942,
    },
    {
      district: "TOTAL",
      crimes: 20787,
    },
    {
      district: "BOKARO",
      crimes: 2322,
    },
    {
      district: "CHAIBASA",
      crimes: 1032,
    },
    {
      district: "CHATRA",
      crimes: 772,
    },
    {
      district: "DEOGHAR",
      crimes: 1780,
    },
    {
      district: "DHANBAD",
      crimes: 3707,
    },
    {
      district: "DHANBAD RLY.",
      crimes: 300,
    },
    {
      district: "DUMKA",
      crimes: 1522,
    },
    {
      district: "GARHWA",
      crimes: 1168,
    },
    {
      district: "GIRIDIH",
      crimes: 2689,
    },
    {
      district: "GODDA",
      crimes: 1231,
    },
    {
      district: "GUMLA",
      crimes: 991,
    },
    {
      district: "HAZARIBAGH",
      crimes: 3034,
    },
    {
      district: "JAMSHEDPUR",
      crimes: 3192,
    },
    {
      district: "JAMSHEDPUR RLY.",
      crimes: 291,
    },
    {
      district: "JAMTARA",
      crimes: 676,
    },
    {
      district: "KODERMA",
      crimes: 769,
    },
    {
      district: "LATEHAR",
      crimes: 543,
    },
    {
      district: "LOHARDAGGA",
      crimes: 567,
    },
    {
      district: "PAKUR",
      crimes: 731,
    },
    {
      district: "PALAMU",
      crimes: 1566,
    },
    {
      district: "RANCHI",
      crimes: 5302,
    },
    {
      district: "SAHEBGANJ",
      crimes: 841,
    },
    {
      district: "SARAIKELA",
      crimes: 900,
    },
    {
      district: "SIMDEGA",
      crimes: 438,
    },
    {
      district: "TOTAL",
      crimes: 36364,
    },
    {
      district: "BAGALKOT",
      crimes: 2062,
    },
    {
      district: "BANGALORE COMMR.",
      crimes: 26284,
    },
    {
      district: "BANGALORE RURAL",
      crimes: 8778,
    },
    {
      district: "BELGAUM",
      crimes: 6143,
    },
    {
      district: "BELLARY",
      crimes: 4112,
    },
    {
      district: "BIDAR",
      crimes: 3583,
    },
    {
      district: "BIJAPUR",
      crimes: 3162,
    },
    {
      district: "CHAMARAJNAGAR",
      crimes: 1300,
    },
    {
      district: "CHICKMAGALUR",
      crimes: 3369,
    },
    {
      district: "CHITRADURGA",
      crimes: 3531,
    },
    {
      district: "DAKSHIN KANNADA",
      crimes: 4037,
    },
    {
      district: "DAVANAGERE",
      crimes: 2812,
    },
    {
      district: "DHARWAD COMMR.",
      crimes: 2125,
    },
    {
      district: "DHARWAD RURAL",
      crimes: 993,
    },
    {
      district: "GADAG",
      crimes: 1138,
    },
    {
      district: "GULBARGA",
      crimes: 5093,
    },
    {
      district: "HASSAN",
      crimes: 4299,
    },
    {
      district: "HAVERI",
      crimes: 1839,
    },
    {
      district: "K.G.F.",
      crimes: 768,
    },
    {
      district: "KODAGU",
      crimes: 1341,
    },
    {
      district: "KOLAR",
      crimes: 3411,
    },
    {
      district: "KOPPAL",
      crimes: 1539,
    },
    {
      district: "MANDYA",
      crimes: 3924,
    },
    {
      district: "MYSORE COMMR.",
      crimes: 2696,
    },
    {
      district: "MYSORE RURAL",
      crimes: 2868,
    },
    {
      district: "RAICHUR",
      crimes: 2789,
    },
    {
      district: "RAILWAYS",
      crimes: 543,
    },
    {
      district: "SHIMOGA",
      crimes: 4403,
    },
    {
      district: "TUMKUR",
      crimes: 4271,
    },
    {
      district: "UDUPI",
      crimes: 2218,
    },
    {
      district: "UTTAR KANNADA",
      crimes: 2279,
    },
    {
      district: "TOTAL",
      crimes: 117710,
    },
    {
      district: "ALAPUZHA",
      crimes: 7700,
    },
    {
      district: "CBCID",
      crimes: 141,
    },
    {
      district: "ERNAKULAM COMMR.",
      crimes: 5699,
    },
    {
      district: "ERNAKULAM RURAL",
      crimes: 8542,
    },
    {
      district: "IDUKKI",
      crimes: 4797,
    },
    {
      district: "KANNUR",
      crimes: 5461,
    },
    {
      district: "KASARGOD",
      crimes: 3062,
    },
    {
      district: "KOLLAM",
      crimes: 10388,
    },
    {
      district: "KOTTAYAM",
      crimes: 8186,
    },
    {
      district: "KOZHIKODE COMMR.",
      crimes: 3692,
    },
    {
      district: "KOZHIKODE RURAL",
      crimes: 4516,
    },
    {
      district: "MALAPPURAM",
      crimes: 6527,
    },
    {
      district: "PALAKKAD",
      crimes: 5620,
    },
    {
      district: "PATHANAMTHITTA",
      crimes: 4433,
    },
    {
      district: "RAILWAYS",
      crimes: 204,
    },
    {
      district: "THRISSUR",
      crimes: 9778,
    },
    {
      district: "TRIVANDRUM COMMR.",
      crimes: 4914,
    },
    {
      district: "TRIVANDRUM RURAL",
      crimes: 9274,
    },
    {
      district: "WAYANADU",
      crimes: 2321,
    },
    {
      district: "TOTAL",
      crimes: 105255,
    },
    {
      district: "ANUPPUR",
      crimes: 1487,
    },
    {
      district: "ASHOK NAGAR",
      crimes: 2265,
    },
    {
      district: "BALAGHAT",
      crimes: 2295,
    },
    {
      district: "BARWANI",
      crimes: 2392,
    },
    {
      district: "BETUL",
      crimes: 3291,
    },
    {
      district: "BHIND",
      crimes: 3856,
    },
    {
      district: "BHOPAL",
      crimes: 13016,
    },
    {
      district: "BHOPAL RLY.",
      crimes: 1417,
    },
    {
      district: "BURHANPUR",
      crimes: 1265,
    },
    {
      district: "CHHATARPUR",
      crimes: 4667,
    },
    {
      district: "CHHINDWARA",
      crimes: 3855,
    },
    {
      district: "DAMOH",
      crimes: 2444,
    },
    {
      district: "DATIYA",
      crimes: 2338,
    },
    {
      district: "DEWAS",
      crimes: 5420,
    },
    {
      district: "DHAR",
      crimes: 4835,
    },
    {
      district: "DINDORI",
      crimes: 660,
    },
    {
      district: "GUNA",
      crimes: 3494,
    },
    {
      district: "GWALIOR",
      crimes: 10008,
    },
    {
      district: "HARDA",
      crimes: 1284,
    },
    {
      district: "HOSHANGABAD",
      crimes: 3066,
    },
    {
      district: "INDORE",
      crimes: 16127,
    },
    {
      district: "INDORE RLY.",
      crimes: 265,
    },
    {
      district: "JABALPUR",
      crimes: 10199,
    },
    {
      district: "JABALPUR RLY.",
      crimes: 396,
    },
    {
      district: "JHABUA",
      crimes: 2273,
    },
    {
      district: "KATNI",
      crimes: 2871,
    },
    {
      district: "KHANDWA",
      crimes: 3999,
    },
    {
      district: "KHARGON",
      crimes: 3918,
    },
    {
      district: "MANDLA",
      crimes: 1559,
    },
    {
      district: "MANDSAUR",
      crimes: 3165,
    },
    {
      district: "MORENA",
      crimes: 4880,
    },
    {
      district: "NARSINGHPUR",
      crimes: 1972,
    },
    {
      district: "NEEMUCH",
      crimes: 1816,
    },
    {
      district: "PANNA",
      crimes: 1503,
    },
    {
      district: "RAISEN",
      crimes: 3676,
    },
    {
      district: "RAJGARH",
      crimes: 4357,
    },
    {
      district: "RATLAM",
      crimes: 3704,
    },
    {
      district: "REWA",
      crimes: 4459,
    },
    {
      district: "SAGAR",
      crimes: 6972,
    },
    {
      district: "SATNA",
      crimes: 5748,
    },
    {
      district: "SEONI",
      crimes: 2468,
    },
    {
      district: "SHAHDOL",
      crimes: 2492,
    },
    {
      district: "SHAJAPUR",
      crimes: 3544,
    },
    {
      district: "SHEOPUR",
      crimes: 1159,
    },
    {
      district: "SHIVPURI",
      crimes: 4646,
    },
    {
      district: "SIDHI",
      crimes: 4136,
    },
    {
      district: "SIHORE",
      crimes: 3337,
    },
    {
      district: "TIKAMGARH",
      crimes: 3080,
    },
    {
      district: "UJJAIN",
      crimes: 7458,
    },
    {
      district: "UMARIYA",
      crimes: 1249,
    },
    {
      district: "VIDISHA",
      crimes: 3928,
    },
    {
      district: "TOTAL",
      crimes: 194711,
    },
    {
      district: "AHMEDNAGAR",
      crimes: 6173,
    },
    {
      district: "AKOLA",
      crimes: 4222,
    },
    {
      district: "AMRAVATI COMMR.",
      crimes: 2591,
    },
    {
      district: "AMRAVATI RURAL",
      crimes: 3806,
    },
    {
      district: "AURANGABAD COMMR.",
      crimes: 2766,
    },
    {
      district: "AURANGABAD RURAL",
      crimes: 2591,
    },
    {
      district: "BEED",
      crimes: 4380,
    },
    {
      district: "BHANDARA",
      crimes: 2583,
    },
    {
      district: "BULDHANA",
      crimes: 4152,
    },
    {
      district: "CHANDRAPUR",
      crimes: 3703,
    },
    {
      district: "DHULE",
      crimes: 2516,
    },
    {
      district: "GADCHIROLI",
      crimes: 1278,
    },
    {
      district: "GONDIA",
      crimes: 2296,
    },
    {
      district: "HINGOLI",
      crimes: 1790,
    },
    {
      district: "JALGAON",
      crimes: 4443,
    },
    {
      district: "JALNA",
      crimes: 3011,
    },
    {
      district: "KOLHAPUR",
      crimes: 3781,
    },
    {
      district: "LATUR",
      crimes: 3902,
    },
    {
      district: "MUMBAI COMMR.",
      crimes: 31070,
    },
    {
      district: "MUMBAI RLY.",
      crimes: 1897,
    },
    {
      district: "NAGPUR COMMR.",
      crimes: 9991,
    },
    {
      district: "NAGPUR RLY.",
      crimes: 1089,
    },
    {
      district: "NAGPUR RURAL",
      crimes: 4514,
    },
    {
      district: "NANDED",
      crimes: 4828,
    },
    {
      district: "NANDURBAR",
      crimes: 1266,
    },
    {
      district: "NASIK COMMR.",
      crimes: 2951,
    },
    {
      district: "NASIK RURAL",
      crimes: 4767,
    },
    {
      district: "NAVI MUMBAI",
      crimes: 3994,
    },
    {
      district: "OSMANABAD",
      crimes: 3227,
    },
    {
      district: "PARBHANI",
      crimes: 2512,
    },
    {
      district: "PUNE COMMR.",
      crimes: 11484,
    },
    {
      district: "PUNE RLY.",
      crimes: 290,
    },
    {
      district: "PUNE RURAL",
      crimes: 5573,
    },
    {
      district: "RAIGAD",
      crimes: 2589,
    },
    {
      district: "RATNAGIRI",
      crimes: 1634,
    },
    {
      district: "SANGLI",
      crimes: 2668,
    },
    {
      district: "SATARA",
      crimes: 4643,
    },
    {
      district: "SINDHUDURG",
      crimes: 816,
    },
    {
      district: "SOLAPUR COMMR.",
      crimes: 1786,
    },
    {
      district: "SOLAPUR RURAL",
      crimes: 3652,
    },
    {
      district: "THANE COMMR.",
      crimes: 8224,
    },
    {
      district: "THANE RURAL",
      crimes: 4970,
    },
    {
      district: "WARDHA",
      crimes: 4130,
    },
    {
      district: "WASHIM",
      crimes: 2011,
    },
    {
      district: "YAVATMAL",
      crimes: 5228,
    },
    {
      district: "TOTAL",
      crimes: 191788,
    },
    {
      district: "BISHNUPUR",
      crimes: 289,
    },
    {
      district: "CHANDEL",
      crimes: 71,
    },
    {
      district: "CHURACHANDPUR",
      crimes: 264,
    },
    {
      district: "IMPHAL EAST",
      crimes: 534,
    },
    {
      district: "IMPHAL WEST",
      crimes: 1058,
    },
    {
      district: "SENAPATI",
      crimes: 108,
    },
    {
      district: "TAMENGLONG",
      crimes: 40,
    },
    {
      district: "THOUBAL",
      crimes: 464,
    },
    {
      district: "UKHRUL",
      crimes: 56,
    },
    {
      district: "TOTAL",
      crimes: 2884,
    },
    {
      district: "GARO HILLS EAST",
      crimes: 148,
    },
    {
      district: "GARO HILLS SOUTH",
      crimes: 53,
    },
    {
      district: "GARO HILLS WEST",
      crimes: 242,
    },
    {
      district: "JAINTIA HILLS",
      crimes: 286,
    },
    {
      district: "KHASI HILLS EAST",
      crimes: 901,
    },
    {
      district: "KHASI HILLS WEST",
      crimes: 118,
    },
    {
      district: "RI-BHOI",
      crimes: 187,
    },
    {
      district: "TOTAL",
      crimes: 1935,
    },
    {
      district: "AIZAWL",
      crimes: 998,
    },
    {
      district: "CHAMPHAI",
      crimes: 171,
    },
    {
      district: "KOLASIB",
      crimes: 253,
    },
    {
      district: "LAWNGTLAI",
      crimes: 87,
    },
    {
      district: "LUNGLEI",
      crimes: 237,
    },
    {
      district: "MAMIT",
      crimes: 65,
    },
    {
      district: "SAIHA",
      crimes: 185,
    },
    {
      district: "SERCHHIP",
      crimes: 77,
    },
    {
      district: "TOTAL",
      crimes: 2073,
    },
    {
      district: "DIMAPUR",
      crimes: 425,
    },
    {
      district: "KIPHIRE",
      crimes: 9,
    },
    {
      district: "KOHIMA",
      crimes: 266,
    },
    {
      district: "MOKOKCHUNG",
      crimes: 49,
    },
    {
      district: "MON",
      crimes: 77,
    },
    {
      district: "PEREN",
      crimes: 39,
    },
    {
      district: "PHEK",
      crimes: 56,
    },
    {
      district: "TUENSANG",
      crimes: 45,
    },
    {
      district: "WOKHA",
      crimes: 64,
    },
    {
      district: "ZUNHEBOTO",
      crimes: 73,
    },
    {
      district: "TOTAL",
      crimes: 1103,
    },
    {
      district: "ANGUL",
      crimes: 2104,
    },
    {
      district: "BALASORE",
      crimes: 2987,
    },
    {
      district: "BARAGARH",
      crimes: 1225,
    },
    {
      district: "BERHAMPUR",
      crimes: 1184,
    },
    {
      district: "BHADRAK",
      crimes: 1642,
    },
    {
      district: "BOLANGIR",
      crimes: 1714,
    },
    {
      district: "BOUDH",
      crimes: 464,
    },
    {
      district: "CUTTACK",
      crimes: 3909,
    },
    {
      district: "DEOGARH",
      crimes: 643,
    },
    {
      district: "DHENKANAL",
      crimes: 1600,
    },
    {
      district: "GAJAPATI",
      crimes: 443,
    },
    {
      district: "GANJAM",
      crimes: 2003,
    },
    {
      district: "JAGATSINGHPUR",
      crimes: 1186,
    },
    {
      district: "JAJPUR",
      crimes: 2163,
    },
    {
      district: "JHARSUGUDA",
      crimes: 1298,
    },
    {
      district: "KALAHANDI",
      crimes: 1299,
    },
    {
      district: "KANDHAMAL",
      crimes: 890,
    },
    {
      district: "KENDRAPARA",
      crimes: 1173,
    },
    {
      district: "KEONJHAR",
      crimes: 2075,
    },
    {
      district: "KHURDA",
      crimes: 6007,
    },
    {
      district: "KORAPUT",
      crimes: 1532,
    },
    {
      district: "MALKANGIR",
      crimes: 482,
    },
    {
      district: "MAYURBHANJ",
      crimes: 2148,
    },
    {
      district: "NAYAGARH",
      crimes: 1124,
    },
    {
      district: "NOWRANGPUR",
      crimes: 735,
    },
    {
      district: "NUAPADA",
      crimes: 683,
    },
    {
      district: "PURI",
      crimes: 2466,
    },
    {
      district: "RAYAGADA",
      crimes: 900,
    },
    {
      district: "ROURKELA",
      crimes: 1420,
    },
    {
      district: "SAMBALPUR",
      crimes: 2305,
    },
    {
      district: "SONEPUR",
      crimes: 455,
    },
    {
      district: "SRP(CUTTACK)",
      crimes: 490,
    },
    {
      district: "SRP(ROURKELA)",
      crimes: 266,
    },
    {
      district: "SUNDARGARH",
      crimes: 1777,
    },
    {
      district: "TOTAL",
      crimes: 52792,
    },
    {
      district: "AMRITSAR",
      crimes: 1527,
    },
    {
      district: "BARNALA",
      crimes: 530,
    },
    {
      district: "BATALA",
      crimes: 1242,
    },
    {
      district: "BHATINDA",
      crimes: 1441,
    },
    {
      district: "FARIDKOT",
      crimes: 900,
    },
    {
      district: "FATEHGARH SAHIB",
      crimes: 668,
    },
    {
      district: "FEROZPUR",
      crimes: 1753,
    },
    {
      district: "G.R.P",
      crimes: 302,
    },
    {
      district: "GURDASPUR",
      crimes: 1133,
    },
    {
      district: "HOSHIARPUR",
      crimes: 1351,
    },
    {
      district: "JAGRAON",
      crimes: 897,
    },
    {
      district: "JALANDHAR",
      crimes: 3671,
    },
    {
      district: "KAPURTHALA",
      crimes: 1201,
    },
    {
      district: "KHANNA",
      crimes: 1010,
    },
    {
      district: "LUDHIANA",
      crimes: 3087,
    },
    {
      district: "MAJITHA",
      crimes: 790,
    },
    {
      district: "MANSA",
      crimes: 656,
    },
    {
      district: "MOGA",
      crimes: 1311,
    },
    {
      district: "MUKTSAR",
      crimes: 717,
    },
    {
      district: "NAWAN SHAHR",
      crimes: 727,
    },
    {
      district: "PATIALA",
      crimes: 2403,
    },
    {
      district: "ROPAR",
      crimes: 660,
    },
    {
      district: "SANGRUR",
      crimes: 1125,
    },
    {
      district: "SAS NGR",
      crimes: 2136,
    },
    {
      district: "TARN TARAN",
      crimes: 830,
    },
    {
      district: "TOTAL",
      crimes: 32068,
    },
    {
      district: "AJMER",
      crimes: 6523,
    },
    {
      district: "ALWAR",
      crimes: 7243,
    },
    {
      district: "BANSWARA",
      crimes: 2489,
    },
    {
      district: "BARAN",
      crimes: 2555,
    },
    {
      district: "BARMER",
      crimes: 2597,
    },
    {
      district: "BHARATPUR",
      crimes: 6134,
    },
    {
      district: "BHILWARA",
      crimes: 4635,
    },
    {
      district: "BIKANER",
      crimes: 3733,
    },
    {
      district: "BUNDI",
      crimes: 3010,
    },
    {
      district: "CHITTORGARH",
      crimes: 6006,
    },
    {
      district: "CHURU",
      crimes: 2282,
    },
    {
      district: "DAUSA",
      crimes: 3648,
    },
    {
      district: "DHOLPUR",
      crimes: 2949,
    },
    {
      district: "DUNGARPUR",
      crimes: 1596,
    },
    {
      district: "G.R.P.",
      crimes: 1032,
    },
    {
      district: "GANGANAGAR",
      crimes: 4807,
    },
    {
      district: "HANUMANGARH",
      crimes: 3083,
    },
    {
      district: "JAIPUR EAST",
      crimes: 5370,
    },
    {
      district: "JAIPUR NORTH",
      crimes: 3714,
    },
    {
      district: "JAIPUR RURAL",
      crimes: 7987,
    },
    {
      district: "JAIPUR SOUTH",
      crimes: 4739,
    },
    {
      district: "JAISALMER",
      crimes: 851,
    },
    {
      district: "JALORE",
      crimes: 2106,
    },
    {
      district: "JHALAWAR",
      crimes: 3134,
    },
    {
      district: "JHUNJHUNU",
      crimes: 3610,
    },
    {
      district: "JODHPUR CITY",
      crimes: 3460,
    },
    {
      district: "JODHPUR RURAL",
      crimes: 2505,
    },
    {
      district: "KARAULI",
      crimes: 3291,
    },
    {
      district: "KOTA CITY",
      crimes: 4045,
    },
    {
      district: "KOTA RURAL",
      crimes: 2080,
    },
    {
      district: "NAGAUR",
      crimes: 4432,
    },
    {
      district: "PALI",
      crimes: 4337,
    },
    {
      district: "RAJSAMAND",
      crimes: 2456,
    },
    {
      district: "SAWAI MADHOPUR",
      crimes: 3487,
    },
    {
      district: "SIKAR",
      crimes: 4156,
    },
    {
      district: "SIROHI",
      crimes: 1834,
    },
    {
      district: "TONK",
      crimes: 3877,
    },
    {
      district: "UDAIPUR",
      crimes: 6199,
    },
    {
      district: "TOTAL",
      crimes: 141992,
    },
    {
      district: "EAST",
      crimes: 344,
    },
    {
      district: "NORTH",
      crimes: 34,
    },
    {
      district: "SOUTH",
      crimes: 191,
    },
    {
      district: "WEST",
      crimes: 134,
    },
    {
      district: "TOTAL",
      crimes: 703,
    },
    {
      district: "CHENNAI",
      crimes: 16168,
    },
    {
      district: "CHENNAI RLY.",
      crimes: 346,
    },
    {
      district: "COIMBATORE RURAL",
      crimes: 7435,
    },
    {
      district: "COIMBATORE URBAN",
      crimes: 3974,
    },
    {
      district: "CUDDALORE",
      crimes: 6037,
    },
    {
      district: "DHARMAPURI",
      crimes: 2670,
    },
    {
      district: "DINDIGUL",
      crimes: 4720,
    },
    {
      district: "ERODE",
      crimes: 5831,
    },
    {
      district: "KANCHIPURAM",
      crimes: 5475,
    },
    {
      district: "KANYAKUMARI",
      crimes: 3061,
    },
    {
      district: "KARUR",
      crimes: 2425,
    },
    {
      district: "KRISHNAGIRI",
      crimes: 3935,
    },
    {
      district: "MADURAI RURAL",
      crimes: 4448,
    },
    {
      district: "MADURAI URBAN",
      crimes: 2464,
    },
    {
      district: "NAGAPATTINAM",
      crimes: 3820,
    },
    {
      district: "NAMAKKAL",
      crimes: 3232,
    },
    {
      district: "NILGIRIS",
      crimes: 1422,
    },
    {
      district: "PERAMBALUR",
      crimes: 2568,
    },
    {
      district: "PUDUKOTTAI",
      crimes: 3784,
    },
    {
      district: "RAMNATHAPURAM",
      crimes: 2802,
    },
    {
      district: "SALEM RURAL",
      crimes: 4275,
    },
    {
      district: "SALEM URBAN",
      crimes: 2560,
    },
    {
      district: "SIVAGANGAI",
      crimes: 2499,
    },
    {
      district: "THANJAVUR",
      crimes: 4740,
    },
    {
      district: "THENI",
      crimes: 2873,
    },
    {
      district: "THIRUNELVELI RURAL",
      crimes: 6124,
    },
    {
      district: "THIRUNELVELI URBAN",
      crimes: 1143,
    },
    {
      district: "THIRUVALLUR",
      crimes: 3071,
    },
    {
      district: "THIRUVANNAMALAI",
      crimes: 3095,
    },
    {
      district: "THIRUVARUR",
      crimes: 3285,
    },
    {
      district: "THOOTHUGUDI",
      crimes: 4157,
    },
    {
      district: "TRICHY RLY.",
      crimes: 100,
    },
    {
      district: "TRICHY RURAL",
      crimes: 3750,
    },
    {
      district: "TRICHY URBAN",
      crimes: 3155,
    },
    {
      district: "VELLORE",
      crimes: 6926,
    },
    {
      district: "VILLUPURAM",
      crimes: 6445,
    },
    {
      district: "VIRUDHUNAGAR",
      crimes: 4157,
    },
    {
      district: "TOTAL",
      crimes: 148972,
    },
    {
      district: "DHALAI",
      crimes: 354,
    },
    {
      district: "NORTH",
      crimes: 853,
    },
    {
      district: "SOUTH",
      crimes: 1088,
    },
    {
      district: "WEST",
      crimes: 1645,
    },
    {
      district: "TOTAL",
      crimes: 3940,
    },
    {
      district: "AGRA",
      crimes: 6098,
    },
    {
      district: "ALIGARH",
      crimes: 3851,
    },
    {
      district: "ALLAHABAD",
      crimes: 3640,
    },
    {
      district: "AMBEDKAR NAGAR",
      crimes: 991,
    },
    {
      district: "AURAIYA",
      crimes: 1011,
    },
    {
      district: "AZAMGARH",
      crimes: 1515,
    },
    {
      district: "BADAUN",
      crimes: 1906,
    },
    {
      district: "BAGHPAT",
      crimes: 1161,
    },
    {
      district: "BAHRAICH",
      crimes: 1288,
    },
    {
      district: "BALLIA",
      crimes: 813,
    },
    {
      district: "BALRAMPUR",
      crimes: 386,
    },
    {
      district: "BANDA",
      crimes: 898,
    },
    {
      district: "BARABANKI",
      crimes: 1775,
    },
    {
      district: "BAREILLY",
      crimes: 3941,
    },
    {
      district: "BASTI",
      crimes: 830,
    },
    {
      district: "BIJNOR",
      crimes: 1522,
    },
    {
      district: "BULANDSHAHAR",
      crimes: 2933,
    },
    {
      district: "CHANDOLI",
      crimes: 645,
    },
    {
      district: "CHITRAKOOT DHAM",
      crimes: 398,
    },
    {
      district: "DEORIA",
      crimes: 1011,
    },
    {
      district: "ETAH",
      crimes: 2013,
    },
    {
      district: "ETAWAH",
      crimes: 1522,
    },
    {
      district: "FAIZABAD",
      crimes: 1323,
    },
    {
      district: "FATEHGARH",
      crimes: 1005,
    },
    {
      district: "FATEHPUR",
      crimes: 1165,
    },
    {
      district: "FIROZABAD",
      crimes: 2355,
    },
    {
      district: "G.R.P.",
      crimes: 1683,
    },
    {
      district: "GAUTAMBUDH NAGAR",
      crimes: 2401,
    },
    {
      district: "GHAZIABAD",
      crimes: 4207,
    },
    {
      district: "GHAZIPUR",
      crimes: 790,
    },
    {
      district: "GONDA",
      crimes: 1280,
    },
    {
      district: "GORAKHPUR",
      crimes: 2204,
    },
    {
      district: "HAMIRPUR",
      crimes: 533,
    },
    {
      district: "HARDOI",
      crimes: 1784,
    },
    {
      district: "HATHRAS",
      crimes: 1520,
    },
    {
      district: "J.P.NAGAR",
      crimes: 1204,
    },
    {
      district: "JALAUN",
      crimes: 1016,
    },
    {
      district: "JAUNPUR",
      crimes: 1767,
    },
    {
      district: "JHANSI",
      crimes: 827,
    },
    {
      district: "KANNAUJ",
      crimes: 926,
    },
    {
      district: "KANPUR DEHAT",
      crimes: 1254,
    },
    {
      district: "KANPUR NAGAR",
      crimes: 4736,
    },
    {
      district: "KAUSHAMBI",
      crimes: 734,
    },
    {
      district: "KHIRI",
      crimes: 2127,
    },
    {
      district: "KUSHI NAGAR",
      crimes: 1006,
    },
    {
      district: "LALITPUR",
      crimes: 469,
    },
    {
      district: "LUCKNOW",
      crimes: 8102,
    },
    {
      district: "MAHARAJGANJ",
      crimes: 672,
    },
    {
      district: "MAHOBA",
      crimes: 445,
    },
    {
      district: "MAINPURI",
      crimes: 1624,
    },
    {
      district: "MATHURA",
      crimes: 3148,
    },
    {
      district: "MAU",
      crimes: 906,
    },
    {
      district: "MEERUT",
      crimes: 4072,
    },
    {
      district: "MIRZAPUR",
      crimes: 814,
    },
    {
      district: "MORADABAD",
      crimes: 3659,
    },
    {
      district: "MUZAFFARNAGAR",
      crimes: 3328,
    },
    {
      district: "PILIBHIT",
      crimes: 1505,
    },
    {
      district: "PRATAPGARH",
      crimes: 1826,
    },
    {
      district: "RAIBAREILLY",
      crimes: 1592,
    },
    {
      district: "RAMPUR",
      crimes: 1458,
    },
    {
      district: "SAHARANPUR",
      crimes: 2852,
    },
    {
      district: "SANT KABIRNAGAR",
      crimes: 515,
    },
    {
      district: "SHAHJAHANPUR",
      crimes: 1573,
    },
    {
      district: "SHRAWASTI",
      crimes: 413,
    },
    {
      district: "SIDHARTHNAGAR",
      crimes: 793,
    },
    {
      district: "SITAPUR",
      crimes: 2637,
    },
    {
      district: "SONBHADRA",
      crimes: 509,
    },
    {
      district: "ST.RAVIDASNAGAR",
      crimes: 438,
    },
    {
      district: "SULTANPUR",
      crimes: 1419,
    },
    {
      district: "UNNAO",
      crimes: 1575,
    },
    {
      district: "VARANASI",
      crimes: 2662,
    },
    {
      district: "TOTAL",
      crimes: 127001,
    },
    {
      district: "ALMORA",
      crimes: 249,
    },
    {
      district: "BAGESHWAR",
      crimes: 99,
    },
    {
      district: "CHAMOLI",
      crimes: 189,
    },
    {
      district: "CHAMPAWAT",
      crimes: 109,
    },
    {
      district: "DEHRADUN",
      crimes: 2005,
    },
    {
      district: "HARIDWAR",
      crimes: 2162,
    },
    {
      district: "NAINITAL",
      crimes: 785,
    },
    {
      district: "PAURI GARHWAL",
      crimes: 330,
    },
    {
      district: "PITHORAGARH",
      crimes: 252,
    },
    {
      district: "RUDRA PRAYAG",
      crimes: 126,
    },
    {
      district: "TEHRI GARHWAL",
      crimes: 171,
    },
    {
      district: "UDHAMSINGH NAGAR",
      crimes: 1746,
    },
    {
      district: "UTTARKASHI",
      crimes: 189,
    },
    {
      district: "TOTAL",
      crimes: 8412,
    },
    {
      district: "24 PARGANAS NORTH",
      crimes: 7776,
    },
    {
      district: "24 PARGANAS SOUTH",
      crimes: 7396,
    },
    {
      district: "ASANSOL",
      crimes: 1699,
    },
    {
      district: "BANKURA",
      crimes: 1282,
    },
    {
      district: "BIRBHUM",
      crimes: 1625,
    },
    {
      district: "BURDWAN",
      crimes: 3897,
    },
    {
      district: "COOCHBEHAR",
      crimes: 1697,
    },
    {
      district: "DAKSHIN DINAJPUR",
      crimes: 1101,
    },
    {
      district: "DARJEELING",
      crimes: 1682,
    },
    {
      district: "HOOGHLY",
      crimes: 3220,
    },
    {
      district: "HOWRAH",
      crimes: 3633,
    },
    {
      district: "HOWRAH G.R.P.",
      crimes: 826,
    },
    {
      district: "JALPAIGURI",
      crimes: 2610,
    },
    {
      district: "KHARAGPUR G.R.P.",
      crimes: 126,
    },
    {
      district: "KOLKATA",
      crimes: 9381,
    },
    {
      district: "MALDA",
      crimes: 2102,
    },
    {
      district: "MURSHIDABAD",
      crimes: 4759,
    },
    {
      district: "NADIA",
      crimes: 4672,
    },
    {
      district: "PASCHIM MIDNAPUR",
      crimes: 2700,
    },
    {
      district: "PURAB MIDNAPUR",
      crimes: 2399,
    },
    {
      district: "PURULIA",
      crimes: 1094,
    },
    {
      district: "SEALDAH G.R.P.",
      crimes: 295,
    },
    {
      district: "SILIGURI G.R.P.",
      crimes: 99,
    },
    {
      district: "UTTAR DINAJPUR",
      crimes: 1981,
    },
    {
      district: "TOTAL",
      crimes: 68052,
    },
    {
      district: "ANDAMAN",
      crimes: 655,
    },
    {
      district: "NICOBAR",
      crimes: 21,
    },
    {
      district: "TOTAL",
      crimes: 676,
    },
    {
      district: "CHANDIGARH",
      crimes: 3126,
    },
    {
      district: "TOTAL",
      crimes: 3126,
    },
    {
      district: "D and N HAVELI",
      crimes: 435,
    },
    {
      district: "TOTAL",
      crimes: 435,
    },
    {
      district: "DAMAN",
      crimes: 243,
    },
    {
      district: "DIU",
      crimes: 45,
    },
    {
      district: "TOTAL",
      crimes: 288,
    },
    {
      district: "CENTRAL",
      crimes: 3706,
    },
    {
      district: "DELHI UT TOTAL",
      crimes: 57963,
    },
    {
      district: "EAST",
      crimes: 5573,
    },
    {
      district: "GRP(RLY)",
      crimes: 1076,
    },
    {
      district: "IGI AIRPORT",
      crimes: 924,
    },
    {
      district: "NEW DELHI",
      crimes: 2288,
    },
    {
      district: "NORTH",
      crimes: 3016,
    },
    {
      district: "NORTH-EAST",
      crimes: 5389,
    },
    {
      district: "NORTH-WEST",
      crimes: 11146,
    },
    {
      district: "SOUTH",
      crimes: 10854,
    },
    {
      district: "SOUTH-WEST",
      crimes: 6584,
    },
    {
      district: "STF",
      crimes: 39,
    },
    {
      district: "WEST",
      crimes: 7368,
    },
    {
      district: "LAKSHADWEEP",
      crimes: 80,
    },
    {
      district: "TOTAL",
      crimes: 80,
    },
    {
      district: "KARAIKAL",
      crimes: 772,
    },
    {
      district: "PONDICHERRY",
      crimes: 3915,
    },
    {
      district: "TOTAL",
      crimes: 4687,
    },
    {
      district: "ADILABAD",
      crimes: 5685,
    },
    {
      district: "ANANTAPUR",
      crimes: 5182,
    },
    {
      district: "CHITTOOR",
      crimes: 7095,
    },
    {
      district: "CUDDAPAH",
      crimes: 5500,
    },
    {
      district: "CYBERABAD",
      crimes: 14236,
    },
    {
      district: "EAST GODAVARI",
      crimes: 8580,
    },
    {
      district: "GUNTAKAL RLY.",
      crimes: 175,
    },
    {
      district: "GUNTUR",
      crimes: 8659,
    },
    {
      district: "HYDERABAD CITY",
      crimes: 17391,
    },
    {
      district: "KARIMNAGAR",
      crimes: 8535,
    },
    {
      district: "KHAMMAM",
      crimes: 6215,
    },
    {
      district: "KRISHNA",
      crimes: 5178,
    },
    {
      district: "KURNOOL",
      crimes: 6159,
    },
    {
      district: "MAHABOOBNAGAR",
      crimes: 6389,
    },
    {
      district: "MEDAK",
      crimes: 6070,
    },
    {
      district: "NALGONDA",
      crimes: 7960,
    },
    {
      district: "NELLORE",
      crimes: 5991,
    },
    {
      district: "NIZAMABAD",
      crimes: 5178,
    },
    {
      district: "PRAKASHAM",
      crimes: 5655,
    },
    {
      district: "RANGA REDDY",
      crimes: 2170,
    },
    {
      district: "SECUNDERABAD RLY.",
      crimes: 445,
    },
    {
      district: "SRIKAKULAM",
      crimes: 3898,
    },
    {
      district: "VIJAYAWADA CITY",
      crimes: 5587,
    },
    {
      district: "VIJAYAWADA RLY.",
      crimes: 373,
    },
    {
      district: "VISAKHA RURAL",
      crimes: 3278,
    },
    {
      district: "VISAKHAPATNAM",
      crimes: 5480,
    },
    {
      district: "VIZIANAGARAM",
      crimes: 3256,
    },
    {
      district: "WARANGAL",
      crimes: 7333,
    },
    {
      district: "WEST GODAVARI",
      crimes: 7434,
    },
    {
      district: "TOTAL",
      crimes: 175087,
    },
    {
      district: "CHANGLANG",
      crimes: 171,
    },
    {
      district: "DIBANG VALLEY",
      crimes: 101,
    },
    {
      district: "K/KUMEY",
      crimes: 69,
    },
    {
      district: "KAMENG EAST",
      crimes: 110,
    },
    {
      district: "KAMENG WEST",
      crimes: 104,
    },
    {
      district: "LOHIT",
      crimes: 206,
    },
    {
      district: "PAPUM PARE",
      crimes: 576,
    },
    {
      district: "SIANG EAST",
      crimes: 239,
    },
    {
      district: "SIANG UPPER",
      crimes: 76,
    },
    {
      district: "SIANG WEST",
      crimes: 218,
    },
    {
      district: "SUBANSIRI LOWER",
      crimes: 123,
    },
    {
      district: "SUBANSIRI UPPER",
      crimes: 141,
    },
    {
      district: "TAWANG",
      crimes: 46,
    },
    {
      district: "TIRAP",
      crimes: 101,
    },
    {
      district: "UPPER DIBANG VALLEY",
      crimes: 5,
    },
    {
      district: "TOTAL",
      crimes: 2286,
    },
    {
      district: "BARPETA",
      crimes: 2039,
    },
    {
      district: "BASKA",
      crimes: 334,
    },
    {
      district: "BONGAIGAON",
      crimes: 1110,
    },
    {
      district: "C.I.D.",
      crimes: 26,
    },
    {
      district: "CACHAR",
      crimes: 3677,
    },
    {
      district: "CHIRANG",
      crimes: 515,
    },
    {
      district: "DARRANG",
      crimes: 1322,
    },
    {
      district: "DHEMAJI",
      crimes: 1154,
    },
    {
      district: "DHUBRI",
      crimes: 3257,
    },
    {
      district: "DIBRUGARH",
      crimes: 1906,
    },
    {
      district: "G.R.P.",
      crimes: 272,
    },
    {
      district: "GOALPARA",
      crimes: 1131,
    },
    {
      district: "GOLAGHAT",
      crimes: 1468,
    },
    {
      district: "GUWAHATI CITY",
      crimes: 3929,
    },
    {
      district: "HAILAKANDI",
      crimes: 871,
    },
    {
      district: "JORHAT",
      crimes: 1634,
    },
    {
      district: "KAMRUP",
      crimes: 2264,
    },
    {
      district: "KARBI ANGLONG",
      crimes: 775,
    },
    {
      district: "KARIMGANJ",
      crimes: 1167,
    },
    {
      district: "KOKRAJHAR",
      crimes: 1046,
    },
    {
      district: "LAKHIMPUR",
      crimes: 1758,
    },
    {
      district: "MORIGAON",
      crimes: 1310,
    },
    {
      district: "N.C.HILLS",
      crimes: 292,
    },
    {
      district: "NAGAON",
      crimes: 3540,
    },
    {
      district: "NALBARI",
      crimes: 697,
    },
    {
      district: "R.P.O.",
      crimes: 60,
    },
    {
      district: "SIBSAGAR",
      crimes: 2175,
    },
    {
      district: "SONITPUR",
      crimes: 2726,
    },
    {
      district: "TINSUKIA",
      crimes: 2219,
    },
    {
      district: "UDALGURI",
      crimes: 608,
    },
    {
      district: "TOTAL",
      crimes: 45282,
    },
    {
      district: "ARARIA",
      crimes: 2904,
    },
    {
      district: "ARWAL",
      crimes: 542,
    },
    {
      district: "AURANGABAD",
      crimes: 2485,
    },
    {
      district: "BAGAHA",
      crimes: 1989,
    },
    {
      district: "BANKA",
      crimes: 1908,
    },
    {
      district: "BEGUSARAI",
      crimes: 3197,
    },
    {
      district: "BETTIAH",
      crimes: 2686,
    },
    {
      district: "BHABHUA",
      crimes: 1748,
    },
    {
      district: "BHAGALPUR",
      crimes: 3020,
    },
    {
      district: "BHOJPUR",
      crimes: 3113,
    },
    {
      district: "BUXAR",
      crimes: 1467,
    },
    {
      district: "DARBHANGA",
      crimes: 3388,
    },
    {
      district: "GAYA",
      crimes: 3406,
    },
    {
      district: "GOPALGANJ",
      crimes: 2430,
    },
    {
      district: "JAMALPUR RLY.",
      crimes: 192,
    },
    {
      district: "JAMUI",
      crimes: 1593,
    },
    {
      district: "JEHANABAD",
      crimes: 1319,
    },
    {
      district: "KATIHAR",
      crimes: 2618,
    },
    {
      district: "KATIHAR RLY.",
      crimes: 464,
    },
    {
      district: "KHAGARIA",
      crimes: 1724,
    },
    {
      district: "KISHANGANJ",
      crimes: 1040,
    },
    {
      district: "LAKHISARAI",
      crimes: 1230,
    },
    {
      district: "MADHEPURA",
      crimes: 1456,
    },
    {
      district: "MADHUBANI",
      crimes: 3625,
    },
    {
      district: "MOTIHARI",
      crimes: 4333,
    },
    {
      district: "MUNGER",
      crimes: 2037,
    },
    {
      district: "MUZAFFARPUR",
      crimes: 5748,
    },
    {
      district: "MUZAFFARPUR RLY.",
      crimes: 585,
    },
    {
      district: "NALANDA",
      crimes: 3759,
    },
    {
      district: "NAUGACHIA",
      crimes: 988,
    },
    {
      district: "NAWADAH",
      crimes: 1803,
    },
    {
      district: "PATNA",
      crimes: 14064,
    },
    {
      district: "PATNA RLY.",
      crimes: 835,
    },
    {
      district: "PURNEA",
      crimes: 2582,
    },
    {
      district: "ROHTAS",
      crimes: 2825,
    },
    {
      district: "SAHARSA",
      crimes: 2019,
    },
    {
      district: "SAMASTIPUR",
      crimes: 3154,
    },
    {
      district: "SARAN",
      crimes: 3556,
    },
    {
      district: "SHEIKHPURA",
      crimes: 765,
    },
    {
      district: "SHEOHAR",
      crimes: 434,
    },
    {
      district: "SITAMARHI",
      crimes: 2665,
    },
    {
      district: "SIWAN",
      crimes: 2412,
    },
    {
      district: "SUPAUL",
      crimes: 1612,
    },
    {
      district: "VAISHALI",
      crimes: 3700,
    },
    {
      district: "TOTAL",
      crimes: 109420,
    },
    {
      district: "BALRAMPUR",
      crimes: 658,
    },
    {
      district: "BILASPUR",
      crimes: 5581,
    },
    {
      district: "BIZAPUR",
      crimes: 475,
    },
    {
      district: "DANTEWARA",
      crimes: 762,
    },
    {
      district: "DHAMTARI",
      crimes: 1628,
    },
    {
      district: "DURG",
      crimes: 6084,
    },
    {
      district: "GRP RAIPUR",
      crimes: 291,
    },
    {
      district: "JAGDALPUR",
      crimes: 1924,
    },
    {
      district: "JANJGIR",
      crimes: 2740,
    },
    {
      district: "JASHPUR",
      crimes: 1053,
    },
    {
      district: "KABIRDHAM",
      crimes: 1205,
    },
    {
      district: "KANKER",
      crimes: 1143,
    },
    {
      district: "KORBA",
      crimes: 2228,
    },
    {
      district: "KORIYA",
      crimes: 1589,
    },
    {
      district: "MAHASAMUND",
      crimes: 1460,
    },
    {
      district: "NARAYANPUR",
      crimes: 138,
    },
    {
      district: "RAIGARH",
      crimes: 2764,
    },
    {
      district: "RAIPUR",
      crimes: 8344,
    },
    {
      district: "RAJNANDGAON",
      crimes: 2900,
    },
    {
      district: "SARGUJA",
      crimes: 1568,
    },
    {
      district: "SURAJPUR",
      crimes: 1310,
    },
    {
      district: "TOTAL",
      crimes: 45845,
    },
    {
      district: "NORTH GOA",
      crimes: 1290,
    },
    {
      district: "SOUTH GOA",
      crimes: 1189,
    },
    {
      district: "TOTAL",
      crimes: 2479,
    },
    {
      district: "AHMEDABAD COMMR.",
      crimes: 17310,
    },
    {
      district: "AHMEDABAD RURAL",
      crimes: 4006,
    },
    {
      district: "AHWA-DANG",
      crimes: 292,
    },
    {
      district: "AMRELI",
      crimes: 2308,
    },
    {
      district: "ANAND",
      crimes: 3919,
    },
    {
      district: "BHARUCH",
      crimes: 2538,
    },
    {
      district: "BHAVNAGAR",
      crimes: 6047,
    },
    {
      district: "DAHOD",
      crimes: 1722,
    },
    {
      district: "GANDHINAGAR",
      crimes: 2970,
    },
    {
      district: "HIMATNAGAR",
      crimes: 6041,
    },
    {
      district: "JAMNAGAR",
      crimes: 6978,
    },
    {
      district: "JUNAGADH",
      crimes: 4864,
    },
    {
      district: "KHEDA NORTH",
      crimes: 5069,
    },
    {
      district: "KUTCH",
      crimes: 5228,
    },
    {
      district: "MEHSANA",
      crimes: 4924,
    },
    {
      district: "NARMADA",
      crimes: 822,
    },
    {
      district: "NAVSARI",
      crimes: 994,
    },
    {
      district: "PALANPUR",
      crimes: 4793,
    },
    {
      district: "PANCHMAHAL",
      crimes: 3673,
    },
    {
      district: "PATAN",
      crimes: 2974,
    },
    {
      district: "PORBANDAR",
      crimes: 924,
    },
    {
      district: "RAJKOT COMMR.",
      crimes: 3912,
    },
    {
      district: "RAJKOT RURAL",
      crimes: 3994,
    },
    {
      district: "SURAT COMMR.",
      crimes: 10986,
    },
    {
      district: "SURAT RURAL",
      crimes: 1607,
    },
    {
      district: "SURENDRANAGAR",
      crimes: 3220,
    },
    {
      district: "VADODARA COMMR.",
      crimes: 5109,
    },
    {
      district: "VADODARA RURAL",
      crimes: 2858,
    },
    {
      district: "VALSAD",
      crimes: 1854,
    },
    {
      district: "W.RLY",
      crimes: 1259,
    },
    {
      district: "TOTAL",
      crimes: 123195,
    },
    {
      district: "AMBALA",
      crimes: 2378,
    },
    {
      district: "BHIWANI",
      crimes: 2573,
    },
    {
      district: "FARIDABAD",
      crimes: 4520,
    },
    {
      district: "FATEHABAD",
      crimes: 1550,
    },
    {
      district: "GRP",
      crimes: 1139,
    },
    {
      district: "GURGAON",
      crimes: 6355,
    },
    {
      district: "HISSAR",
      crimes: 2986,
    },
    {
      district: "JHAJJAR",
      crimes: 1560,
    },
    {
      district: "JIND",
      crimes: 1654,
    },
    {
      district: "KAITHAL",
      crimes: 1588,
    },
    {
      district: "KARNAL",
      crimes: 3095,
    },
    {
      district: "KURUKSHETRA",
      crimes: 2492,
    },
    {
      district: "MAHENDRAGARH",
      crimes: 1686,
    },
    {
      district: "MEWAT",
      crimes: 1677,
    },
    {
      district: "PALWAL",
      crimes: 1670,
    },
    {
      district: "PANCHKULA",
      crimes: 1264,
    },
    {
      district: "PANIPAT",
      crimes: 2368,
    },
    {
      district: "REWARI",
      crimes: 2318,
    },
    {
      district: "ROHTAK",
      crimes: 2306,
    },
    {
      district: "SIRSA",
      crimes: 1972,
    },
    {
      district: "SONIPAT",
      crimes: 2664,
    },
    {
      district: "YAMUNANAGAR",
      crimes: 1782,
    },
    {
      district: "TOTAL",
      crimes: 51597,
    },
    {
      district: "BILASPUR",
      crimes: 1104,
    },
    {
      district: "CHAMBA",
      crimes: 780,
    },
    {
      district: "G.R.P.",
      crimes: 4,
    },
    {
      district: "HAMIRPUR",
      crimes: 1122,
    },
    {
      district: "KANGRA",
      crimes: 2211,
    },
    {
      district: "KINNAUR",
      crimes: 215,
    },
    {
      district: "KULLU",
      crimes: 1020,
    },
    {
      district: "LAHAUL-SPITI",
      crimes: 81,
    },
    {
      district: "MANDI",
      crimes: 2203,
    },
    {
      district: "SHIMLA",
      crimes: 2126,
    },
    {
      district: "SIRMAUR",
      crimes: 789,
    },
    {
      district: "SOLAN",
      crimes: 1620,
    },
    {
      district: "UNA",
      crimes: 947,
    },
    {
      district: "TOTAL",
      crimes: 14222,
    },
    {
      district: "ANANTNAG",
      crimes: 1310,
    },
    {
      district: "AWANTIPORA",
      crimes: 377,
    },
    {
      district: "BARAMULLA",
      crimes: 1544,
    },
    {
      district: "BORDER DISTRICT",
      crimes: 637,
    },
    {
      district: "BUDGAM",
      crimes: 1336,
    },
    {
      district: "CRIME JAMMU",
      crimes: 44,
    },
    {
      district: "CRIME SRINAGAR",
      crimes: 79,
    },
    {
      district: "DODA",
      crimes: 947,
    },
    {
      district: "GANDERBAL",
      crimes: 622,
    },
    {
      district: "HANDWARA",
      crimes: 440,
    },
    {
      district: "JAMMU",
      crimes: 3342,
    },
    {
      district: "KARGIL",
      crimes: 88,
    },
    {
      district: "KATHUA",
      crimes: 1238,
    },
    {
      district: "KULGAM",
      crimes: 673,
    },
    {
      district: "KUPWARA",
      crimes: 682,
    },
    {
      district: "LEH",
      crimes: 286,
    },
    {
      district: "POONCH",
      crimes: 761,
    },
    {
      district: "PULWAMA",
      crimes: 842,
    },
    {
      district: "RAILWAYS",
      crimes: 27,
    },
    {
      district: "RAJOURI",
      crimes: 1560,
    },
    {
      district: "RAMBAN",
      crimes: 734,
    },
    {
      district: "REASI",
      crimes: 310,
    },
    {
      district: "SRINAGAR",
      crimes: 2620,
    },
    {
      district: "UDHAMPUR",
      crimes: 944,
    },
    {
      district: "TOTAL",
      crimes: 21443,
    },
    {
      district: "BOKARO",
      crimes: 2751,
    },
    {
      district: "CHAIBASA",
      crimes: 1025,
    },
    {
      district: "CHATRA",
      crimes: 960,
    },
    {
      district: "DEOGHAR",
      crimes: 1813,
    },
    {
      district: "DHANBAD",
      crimes: 3712,
    },
    {
      district: "DHANBAD RLY.",
      crimes: 281,
    },
    {
      district: "DUMKA",
      crimes: 1569,
    },
    {
      district: "GARHWA",
      crimes: 1016,
    },
    {
      district: "GIRIDIH",
      crimes: 2710,
    },
    {
      district: "GODDA",
      crimes: 1295,
    },
    {
      district: "GUMLA",
      crimes: 979,
    },
    {
      district: "HAZARIBAGH",
      crimes: 2777,
    },
    {
      district: "JAMSHEDPUR",
      crimes: 3471,
    },
    {
      district: "JAMSHEDPUR RLY.",
      crimes: 265,
    },
    {
      district: "JAMTARA",
      crimes: 719,
    },
    {
      district: "KHUNTI",
      crimes: 389,
    },
    {
      district: "KODERMA",
      crimes: 785,
    },
    {
      district: "LATEHAR",
      crimes: 569,
    },
    {
      district: "LOHARDAGGA",
      crimes: 620,
    },
    {
      district: "PAKUR",
      crimes: 756,
    },
    {
      district: "PALAMU",
      crimes: 1597,
    },
    {
      district: "RAMGARH",
      crimes: 1346,
    },
    {
      district: "RANCHI",
      crimes: 4849,
    },
    {
      district: "SAHEBGANJ",
      crimes: 896,
    },
    {
      district: "SARAIKELA",
      crimes: 907,
    },
    {
      district: "SIMDEGA",
      crimes: 432,
    },
    {
      district: "TOTAL",
      crimes: 38489,
    },
    {
      district: "BAGALKOT",
      crimes: 2044,
    },
    {
      district: "BANGALORE COMMR.",
      crimes: 27049,
    },
    {
      district: "BANGALORE RURAL",
      crimes: 8577,
    },
    {
      district: "BELGAUM",
      crimes: 6778,
    },
    {
      district: "BELLARY",
      crimes: 3636,
    },
    {
      district: "BIDAR",
      crimes: 3639,
    },
    {
      district: "BIJAPUR",
      crimes: 3218,
    },
    {
      district: "CHAMARAJNAGAR",
      crimes: 1373,
    },
    {
      district: "CHICKMAGALUR",
      crimes: 2814,
    },
    {
      district: "CHITRADURGA",
      crimes: 3929,
    },
    {
      district: "DAKSHIN KANNADA",
      crimes: 3888,
    },
    {
      district: "DAVANAGERE",
      crimes: 2775,
    },
    {
      district: "DHARWAD COMMR.",
      crimes: 2053,
    },
    {
      district: "DHARWAD RURAL",
      crimes: 996,
    },
    {
      district: "GADAG",
      crimes: 1022,
    },
    {
      district: "GULBARGA",
      crimes: 4952,
    },
    {
      district: "HASSAN",
      crimes: 4531,
    },
    {
      district: "HAVERI",
      crimes: 2043,
    },
    {
      district: "K.G.F.",
      crimes: 864,
    },
    {
      district: "KODAGU",
      crimes: 1613,
    },
    {
      district: "KOLAR",
      crimes: 3746,
    },
    {
      district: "KOPPAL",
      crimes: 1640,
    },
    {
      district: "MANDYA",
      crimes: 4236,
    },
    {
      district: "MYSORE COMMR.",
      crimes: 2937,
    },
    {
      district: "MYSORE RURAL",
      crimes: 3195,
    },
    {
      district: "RAICHUR",
      crimes: 2873,
    },
    {
      district: "RAILWAYS",
      crimes: 488,
    },
    {
      district: "SHIMOGA",
      crimes: 4249,
    },
    {
      district: "TUMKUR",
      crimes: 4718,
    },
    {
      district: "UDUPI",
      crimes: 2389,
    },
    {
      district: "UTTAR KANNADA",
      crimes: 2341,
    },
    {
      district: "TOTAL",
      crimes: 120606,
    },
    {
      district: "ALAPUZHA",
      crimes: 8161,
    },
    {
      district: "CBCID",
      crimes: 86,
    },
    {
      district: "ERNAKULAM COMMR.",
      crimes: 6602,
    },
    {
      district: "ERNAKULAM RURAL",
      crimes: 9357,
    },
    {
      district: "IDUKKI",
      crimes: 4921,
    },
    {
      district: "KANNUR",
      crimes: 5982,
    },
    {
      district: "KASARGOD",
      crimes: 4146,
    },
    {
      district: "KOLLAM",
      crimes: 9239,
    },
    {
      district: "KOTTAYAM",
      crimes: 7859,
    },
    {
      district: "KOZHIKODE COMMR.",
      crimes: 3883,
    },
    {
      district: "KOZHIKODE RURAL",
      crimes: 4709,
    },
    {
      district: "MALAPPURAM",
      crimes: 7186,
    },
    {
      district: "PALAKKAD",
      crimes: 5461,
    },
    {
      district: "PATHANAMTHITTA",
      crimes: 4879,
    },
    {
      district: "RAILWAYS",
      crimes: 214,
    },
    {
      district: "THRISSUR",
      crimes: 10168,
    },
    {
      district: "TRIVANDRUM COMMR.",
      crimes: 5437,
    },
    {
      district: "TRIVANDRUM RURAL",
      crimes: 7885,
    },
    {
      district: "WAYANADU",
      crimes: 2355,
    },
    {
      district: "TOTAL",
      crimes: 108530,
    },
    {
      district: "ANUPPUR",
      crimes: 1665,
    },
    {
      district: "ASHOK NAGAR",
      crimes: 2746,
    },
    {
      district: "BALAGHAT",
      crimes: 2290,
    },
    {
      district: "BARWANI",
      crimes: 2501,
    },
    {
      district: "BETUL",
      crimes: 3084,
    },
    {
      district: "BHIND",
      crimes: 2958,
    },
    {
      district: "BHOPAL",
      crimes: 14065,
    },
    {
      district: "BHOPAL RLY.",
      crimes: 1317,
    },
    {
      district: "BURHANPUR",
      crimes: 1367,
    },
    {
      district: "CHHATARPUR",
      crimes: 5103,
    },
    {
      district: "CHHINDWARA",
      crimes: 3880,
    },
    {
      district: "DAMOH",
      crimes: 2755,
    },
    {
      district: "DATIYA",
      crimes: 2488,
    },
    {
      district: "DEWAS",
      crimes: 5648,
    },
    {
      district: "DHAR",
      crimes: 4620,
    },
    {
      district: "DINDORI",
      crimes: 575,
    },
    {
      district: "GUNA",
      crimes: 3501,
    },
    {
      district: "GWALIOR",
      crimes: 9838,
    },
    {
      district: "HARDA",
      crimes: 1418,
    },
    {
      district: "HOSHANGABAD",
      crimes: 3174,
    },
    {
      district: "INDORE",
      crimes: 16874,
    },
    {
      district: "INDORE RLY.",
      crimes: 292,
    },
    {
      district: "JABALPUR",
      crimes: 10945,
    },
    {
      district: "JABALPUR RLY.",
      crimes: 397,
    },
    {
      district: "JHABUA",
      crimes: 2295,
    },
    {
      district: "KATNI",
      crimes: 2917,
    },
    {
      district: "KHANDWA",
      crimes: 3170,
    },
    {
      district: "KHARGON",
      crimes: 4200,
    },
    {
      district: "MANDLA",
      crimes: 1653,
    },
    {
      district: "MANDSAUR",
      crimes: 3259,
    },
    {
      district: "MORENA",
      crimes: 5100,
    },
    {
      district: "NARSINGHPUR",
      crimes: 2336,
    },
    {
      district: "NEEMUCH",
      crimes: 2394,
    },
    {
      district: "PANNA",
      crimes: 1795,
    },
    {
      district: "RAISEN",
      crimes: 3699,
    },
    {
      district: "RAJGARH",
      crimes: 5367,
    },
    {
      district: "RATLAM",
      crimes: 3781,
    },
    {
      district: "REWA",
      crimes: 4689,
    },
    {
      district: "SAGAR",
      crimes: 8194,
    },
    {
      district: "SATNA",
      crimes: 5252,
    },
    {
      district: "SEONI",
      crimes: 2576,
    },
    {
      district: "SHAHDOL",
      crimes: 2558,
    },
    {
      district: "SHAJAPUR",
      crimes: 3780,
    },
    {
      district: "SHEOPUR",
      crimes: 1192,
    },
    {
      district: "SHIVPURI",
      crimes: 4178,
    },
    {
      district: "SIDHI",
      crimes: 4604,
    },
    {
      district: "SIHORE",
      crimes: 3160,
    },
    {
      district: "TIKAMGARH",
      crimes: 3512,
    },
    {
      district: "UJJAIN",
      crimes: 7752,
    },
    {
      district: "UMARIYA",
      crimes: 1186,
    },
    {
      district: "VIDISHA",
      crimes: 4286,
    },
    {
      district: "TOTAL",
      crimes: 202386,
    },
    {
      district: "AHMEDNAGAR",
      crimes: 6753,
    },
    {
      district: "AKOLA",
      crimes: 4067,
    },
    {
      district: "AMRAVATI COMMR.",
      crimes: 2643,
    },
    {
      district: "AMRAVATI RURAL",
      crimes: 3692,
    },
    {
      district: "AURANGABAD COMMR.",
      crimes: 3155,
    },
    {
      district: "AURANGABAD RURAL",
      crimes: 3032,
    },
    {
      district: "BEED",
      crimes: 4466,
    },
    {
      district: "BHANDARA",
      crimes: 2554,
    },
    {
      district: "BULDHANA",
      crimes: 3780,
    },
    {
      district: "CHANDRAPUR",
      crimes: 4148,
    },
    {
      district: "DHULE",
      crimes: 2681,
    },
    {
      district: "GADCHIROLI",
      crimes: 1282,
    },
    {
      district: "GONDIA",
      crimes: 1937,
    },
    {
      district: "HINGOLI",
      crimes: 1597,
    },
    {
      district: "JALGAON",
      crimes: 4599,
    },
    {
      district: "JALNA",
      crimes: 2584,
    },
    {
      district: "KOLHAPUR",
      crimes: 3989,
    },
    {
      district: "LATUR",
      crimes: 3837,
    },
    {
      district: "MUMBAI COMMR.",
      crimes: 30481,
    },
    {
      district: "MUMBAI RLY.",
      crimes: 1966,
    },
    {
      district: "NAGPUR COMMR.",
      crimes: 9791,
    },
    {
      district: "NAGPUR RLY.",
      crimes: 1031,
    },
    {
      district: "NAGPUR RURAL",
      crimes: 4436,
    },
    {
      district: "NANDED",
      crimes: 4654,
    },
    {
      district: "NANDURBAR",
      crimes: 1579,
    },
    {
      district: "NASIK COMMR.",
      crimes: 3115,
    },
    {
      district: "NASIK RURAL",
      crimes: 4899,
    },
    {
      district: "NAVI MUMBAI",
      crimes: 4705,
    },
    {
      district: "OSMANABAD",
      crimes: 3206,
    },
    {
      district: "PARBHANI",
      crimes: 2743,
    },
    {
      district: "PUNE COMMR.",
      crimes: 12818,
    },
    {
      district: "PUNE RLY.",
      crimes: 392,
    },
    {
      district: "PUNE RURAL",
      crimes: 6244,
    },
    {
      district: "RAIGAD",
      crimes: 2391,
    },
    {
      district: "RATNAGIRI",
      crimes: 1600,
    },
    {
      district: "SANGLI",
      crimes: 2651,
    },
    {
      district: "SATARA",
      crimes: 4335,
    },
    {
      district: "SINDHUDURG",
      crimes: 782,
    },
    {
      district: "SOLAPUR COMMR.",
      crimes: 1564,
    },
    {
      district: "SOLAPUR RURAL",
      crimes: 4220,
    },
    {
      district: "THANE COMMR.",
      crimes: 8911,
    },
    {
      district: "THANE RURAL",
      crimes: 5267,
    },
    {
      district: "WARDHA",
      crimes: 4026,
    },
    {
      district: "WASHIM",
      crimes: 2155,
    },
    {
      district: "YAVATMAL",
      crimes: 4949,
    },
    {
      district: "TOTAL",
      crimes: 195707,
    },
    {
      district: "BISHNUPUR",
      crimes: 367,
    },
    {
      district: "CHANDEL",
      crimes: 88,
    },
    {
      district: "CHURACHANDPUR",
      crimes: 157,
    },
    {
      district: "IMPHAL EAST",
      crimes: 608,
    },
    {
      district: "IMPHAL WEST",
      crimes: 1238,
    },
    {
      district: "SENAPATI",
      crimes: 145,
    },
    {
      district: "TAMENGLONG",
      crimes: 38,
    },
    {
      district: "THOUBAL",
      crimes: 544,
    },
    {
      district: "UKHRUL",
      crimes: 74,
    },
    {
      district: "TOTAL",
      crimes: 3259,
    },
    {
      district: "GARO HILLS EAST",
      crimes: 159,
    },
    {
      district: "GARO HILLS SOUTH",
      crimes: 53,
    },
    {
      district: "GARO HILLS WEST",
      crimes: 267,
    },
    {
      district: "JAINTIA HILLS",
      crimes: 314,
    },
    {
      district: "KHASI HILLS EAST",
      crimes: 979,
    },
    {
      district: "KHASI HILLS WEST",
      crimes: 127,
    },
    {
      district: "RI-BHOI",
      crimes: 180,
    },
    {
      district: "TOTAL",
      crimes: 2079,
    },
    {
      district: "AIZAWL",
      crimes: 1056,
    },
    {
      district: "CHAMPHAI",
      crimes: 164,
    },
    {
      district: "KOLASIB",
      crimes: 248,
    },
    {
      district: "LAWNGTLAI",
      crimes: 124,
    },
    {
      district: "LUNGLEI",
      crimes: 237,
    },
    {
      district: "MAMIT",
      crimes: 74,
    },
    {
      district: "SAIHA",
      crimes: 103,
    },
    {
      district: "SERCHHIP",
      crimes: 77,
    },
    {
      district: "TOTAL",
      crimes: 2083,
    },
    {
      district: "DIMAPUR",
      crimes: 510,
    },
    {
      district: "KIPHIRE",
      crimes: 19,
    },
    {
      district: "KOHIMA",
      crimes: 248,
    },
    {
      district: "LONGLENG",
      crimes: 13,
    },
    {
      district: "MOKOKCHUNG",
      crimes: 84,
    },
    {
      district: "MON",
      crimes: 57,
    },
    {
      district: "PEREN",
      crimes: 28,
    },
    {
      district: "PHEK",
      crimes: 50,
    },
    {
      district: "TUENSANG",
      crimes: 51,
    },
    {
      district: "WOKHA",
      crimes: 66,
    },
    {
      district: "ZUNHEBOTO",
      crimes: 54,
    },
    {
      district: "TOTAL",
      crimes: 1180,
    },
    {
      district: "ANGUL",
      crimes: 2428,
    },
    {
      district: "BALASORE",
      crimes: 2797,
    },
    {
      district: "BARAGARH",
      crimes: 1422,
    },
    {
      district: "BERHAMPUR",
      crimes: 1056,
    },
    {
      district: "BHADRAK",
      crimes: 1734,
    },
    {
      district: "BOLANGIR",
      crimes: 1870,
    },
    {
      district: "BOUDH",
      crimes: 485,
    },
    {
      district: "CUTTACK",
      crimes: 3919,
    },
    {
      district: "DEOGARH",
      crimes: 655,
    },
    {
      district: "DHENKANAL",
      crimes: 1900,
    },
    {
      district: "GAJAPATI",
      crimes: 452,
    },
    {
      district: "GANJAM",
      crimes: 2244,
    },
    {
      district: "JAGATSINGHPUR",
      crimes: 1317,
    },
    {
      district: "JAJPUR",
      crimes: 2152,
    },
    {
      district: "JHARSUGUDA",
      crimes: 1426,
    },
    {
      district: "KALAHANDI",
      crimes: 1302,
    },
    {
      district: "KANDHAMAL",
      crimes: 952,
    },
    {
      district: "KENDRAPARA",
      crimes: 1465,
    },
    {
      district: "KEONJHAR",
      crimes: 1891,
    },
    {
      district: "KHURDA",
      crimes: 6052,
    },
    {
      district: "KORAPUT",
      crimes: 1512,
    },
    {
      district: "MALKANGIR",
      crimes: 380,
    },
    {
      district: "MAYURBHANJ",
      crimes: 2434,
    },
    {
      district: "NAYAGARH",
      crimes: 1273,
    },
    {
      district: "NOWRANGPUR",
      crimes: 851,
    },
    {
      district: "NUAPADA",
      crimes: 749,
    },
    {
      district: "PURI",
      crimes: 2809,
    },
    {
      district: "RAYAGADA",
      crimes: 788,
    },
    {
      district: "ROURKELA",
      crimes: 1418,
    },
    {
      district: "SAMBALPUR",
      crimes: 2127,
    },
    {
      district: "SONEPUR",
      crimes: 466,
    },
    {
      district: "SRP(CUTTACK)",
      crimes: 343,
    },
    {
      district: "SRP(ROURKELA)",
      crimes: 281,
    },
    {
      district: "SUNDARGARH",
      crimes: 1922,
    },
    {
      district: "TOTAL",
      crimes: 54872,
    },
    {
      district: "AMRITSAR",
      crimes: 2142,
    },
    {
      district: "AMRITSAR RURAL",
      crimes: 744,
    },
    {
      district: "BARNALA",
      crimes: 637,
    },
    {
      district: "BATALA",
      crimes: 1049,
    },
    {
      district: "BHATINDA",
      crimes: 1893,
    },
    {
      district: "FARIDKOT",
      crimes: 1067,
    },
    {
      district: "FATEHGARH SAHIB",
      crimes: 1292,
    },
    {
      district: "FEROZPUR",
      crimes: 1868,
    },
    {
      district: "G.R.P",
      crimes: 306,
    },
    {
      district: "GURDASPUR",
      crimes: 1100,
    },
    {
      district: "HOSHIARPUR",
      crimes: 1690,
    },
    {
      district: "JAGRAON",
      crimes: 874,
    },
    {
      district: "JALANDHAR",
      crimes: 3855,
    },
    {
      district: "KAPURTHALA",
      crimes: 1480,
    },
    {
      district: "KHANNA",
      crimes: 1083,
    },
    {
      district: "LUDHIANA",
      crimes: 3409,
    },
    {
      district: "MANSA",
      crimes: 777,
    },
    {
      district: "MOGA",
      crimes: 1124,
    },
    {
      district: "MUKTSAR",
      crimes: 787,
    },
    {
      district: "NAWAN SHAHR",
      crimes: 824,
    },
    {
      district: "PATIALA",
      crimes: 2428,
    },
    {
      district: "ROPAR",
      crimes: 898,
    },
    {
      district: "SANGRUR",
      crimes: 1678,
    },
    {
      district: "SAS NGR",
      crimes: 1602,
    },
    {
      district: "TARN TARAN",
      crimes: 1186,
    },
    {
      district: "TOTAL",
      crimes: 35793,
    },
    {
      district: "AJMER",
      crimes: 6708,
    },
    {
      district: "ALWAR",
      crimes: 8199,
    },
    {
      district: "BANSWARA",
      crimes: 2199,
    },
    {
      district: "BARAN",
      crimes: 2489,
    },
    {
      district: "BARMER",
      crimes: 2664,
    },
    {
      district: "BHARATPUR",
      crimes: 6931,
    },
    {
      district: "BHILWARA",
      crimes: 4629,
    },
    {
      district: "BIKANER",
      crimes: 4105,
    },
    {
      district: "BUNDI",
      crimes: 2868,
    },
    {
      district: "CHITTORGARH",
      crimes: 6242,
    },
    {
      district: "CHURU",
      crimes: 2587,
    },
    {
      district: "DAUSA",
      crimes: 4195,
    },
    {
      district: "DHOLPUR",
      crimes: 3371,
    },
    {
      district: "DUNGARPUR",
      crimes: 1991,
    },
    {
      district: "G.R.P.",
      crimes: 972,
    },
    {
      district: "GANGANAGAR",
      crimes: 5172,
    },
    {
      district: "HANUMANGARH",
      crimes: 2922,
    },
    {
      district: "JAIPUR EAST",
      crimes: 6527,
    },
    {
      district: "JAIPUR NORTH",
      crimes: 3789,
    },
    {
      district: "JAIPUR RURAL",
      crimes: 8929,
    },
    {
      district: "JAIPUR SOUTH",
      crimes: 5179,
    },
    {
      district: "JAISALMER",
      crimes: 972,
    },
    {
      district: "JALORE",
      crimes: 2329,
    },
    {
      district: "JHALAWAR",
      crimes: 2782,
    },
    {
      district: "JHUNJHUNU",
      crimes: 3956,
    },
    {
      district: "JODHPUR CITY",
      crimes: 3472,
    },
    {
      district: "JODHPUR RURAL",
      crimes: 2699,
    },
    {
      district: "KARAULI",
      crimes: 3564,
    },
    {
      district: "KOTA CITY",
      crimes: 3661,
    },
    {
      district: "KOTA RURAL",
      crimes: 1768,
    },
    {
      district: "NAGAUR",
      crimes: 4001,
    },
    {
      district: "PALI",
      crimes: 4733,
    },
    {
      district: "RAJSAMAND",
      crimes: 2325,
    },
    {
      district: "SAWAI MADHOPUR",
      crimes: 3485,
    },
    {
      district: "SIKAR",
      crimes: 4047,
    },
    {
      district: "SIROHI",
      crimes: 1888,
    },
    {
      district: "TONK",
      crimes: 3497,
    },
    {
      district: "UDAIPUR",
      crimes: 7023,
    },
    {
      district: "TOTAL",
      crimes: 148870,
    },
    {
      district: "EAST",
      crimes: 328,
    },
    {
      district: "NORTH",
      crimes: 32,
    },
    {
      district: "SOUTH",
      crimes: 180,
    },
    {
      district: "WEST",
      crimes: 127,
    },
    {
      district: "TOTAL",
      crimes: 667,
    },
    {
      district: "CHENNAI",
      crimes: 16508,
    },
    {
      district: "CHENNAI RLY.",
      crimes: 358,
    },
    {
      district: "COIMBATORE RURAL",
      crimes: 14360,
    },
    {
      district: "COIMBATORE URBAN",
      crimes: 3924,
    },
    {
      district: "CUDDALORE",
      crimes: 6909,
    },
    {
      district: "DHARMAPURI",
      crimes: 3488,
    },
    {
      district: "DINDIGUL",
      crimes: 4439,
    },
    {
      district: "ERODE",
      crimes: 7380,
    },
    {
      district: "KANCHIPURAM",
      crimes: 7236,
    },
    {
      district: "KANYAKUMARI",
      crimes: 4206,
    },
    {
      district: "KARUR",
      crimes: 2642,
    },
    {
      district: "KRISHNAGIRI",
      crimes: 4562,
    },
    {
      district: "MADURAI RURAL",
      crimes: 4734,
    },
    {
      district: "MADURAI URBAN",
      crimes: 2325,
    },
    {
      district: "NAGAPATTINAM",
      crimes: 4404,
    },
    {
      district: "NAMAKKAL",
      crimes: 3849,
    },
    {
      district: "NILGIRIS",
      crimes: 1365,
    },
    {
      district: "PERAMBALUR",
      crimes: 2896,
    },
    {
      district: "PUDUKOTTAI",
      crimes: 3450,
    },
    {
      district: "RAMNATHAPURAM",
      crimes: 3027,
    },
    {
      district: "SALEM RURAL",
      crimes: 5208,
    },
    {
      district: "SALEM URBAN",
      crimes: 1520,
    },
    {
      district: "SIVAGANGAI",
      crimes: 2897,
    },
    {
      district: "THANJAVUR",
      crimes: 6504,
    },
    {
      district: "THENI",
      crimes: 3712,
    },
    {
      district: "THIRUNELVELI RURAL",
      crimes: 7610,
    },
    {
      district: "THIRUNELVELI URBAN",
      crimes: 1398,
    },
    {
      district: "THIRUVALLUR",
      crimes: 3056,
    },
    {
      district: "THIRUVANNAMALAI",
      crimes: 4663,
    },
    {
      district: "THIRUVARUR",
      crimes: 4300,
    },
    {
      district: "THOOTHUGUDI",
      crimes: 4663,
    },
    {
      district: "TRICHY RLY.",
      crimes: 92,
    },
    {
      district: "TRICHY RURAL",
      crimes: 3566,
    },
    {
      district: "TRICHY URBAN",
      crimes: 3218,
    },
    {
      district: "VELLORE",
      crimes: 7343,
    },
    {
      district: "VILLUPURAM",
      crimes: 6919,
    },
    {
      district: "VIRUDHUNAGAR",
      crimes: 4023,
    },
    {
      district: "TOTAL",
      crimes: 172754,
    },
    {
      district: "DHALAI",
      crimes: 358,
    },
    {
      district: "NORTH",
      crimes: 706,
    },
    {
      district: "SOUTH",
      crimes: 1267,
    },
    {
      district: "WEST",
      crimes: 1942,
    },
    {
      district: "TOTAL",
      crimes: 4273,
    },
    {
      district: "AGRA",
      crimes: 6135,
    },
    {
      district: "ALIGARH",
      crimes: 3751,
    },
    {
      district: "ALLAHABAD",
      crimes: 4417,
    },
    {
      district: "AMBEDKAR NAGAR",
      crimes: 1027,
    },
    {
      district: "AURAIYA",
      crimes: 1069,
    },
    {
      district: "AZAMGARH",
      crimes: 1308,
    },
    {
      district: "BADAUN",
      crimes: 1831,
    },
    {
      district: "BAGHPAT",
      crimes: 1114,
    },
    {
      district: "BAHRAICH",
      crimes: 1313,
    },
    {
      district: "BALLIA",
      crimes: 816,
    },
    {
      district: "BALRAMPUR",
      crimes: 505,
    },
    {
      district: "BANDA",
      crimes: 978,
    },
    {
      district: "BARABANKI",
      crimes: 1931,
    },
    {
      district: "BAREILLY",
      crimes: 4834,
    },
    {
      district: "BASTI",
      crimes: 1130,
    },
    {
      district: "BIJNOR",
      crimes: 2070,
    },
    {
      district: "BULANDSHAHAR",
      crimes: 4005,
    },
    {
      district: "CHANDOLI",
      crimes: 955,
    },
    {
      district: "CHITRAKOOT DHAM",
      crimes: 440,
    },
    {
      district: "DEORIA",
      crimes: 1001,
    },
    {
      district: "ETAH",
      crimes: 2723,
    },
    {
      district: "ETAWAH",
      crimes: 2208,
    },
    {
      district: "FAIZABAD",
      crimes: 1463,
    },
    {
      district: "FATEHGARH",
      crimes: 1388,
    },
    {
      district: "FATEHPUR",
      crimes: 1419,
    },
    {
      district: "FIROZABAD",
      crimes: 2652,
    },
    {
      district: "G.R.P.",
      crimes: 2153,
    },
    {
      district: "GAUTAMBUDH NAGAR",
      crimes: 3277,
    },
    {
      district: "GHAZIABAD",
      crimes: 4320,
    },
    {
      district: "GHAZIPUR",
      crimes: 1102,
    },
    {
      district: "GONDA",
      crimes: 1233,
    },
    {
      district: "GORAKHPUR",
      crimes: 2076,
    },
    {
      district: "HAMIRPUR",
      crimes: 435,
    },
    {
      district: "HARDOI",
      crimes: 1806,
    },
    {
      district: "HATHRAS",
      crimes: 1879,
    },
    {
      district: "J.P.NAGAR",
      crimes: 1244,
    },
    {
      district: "JALAUN",
      crimes: 1164,
    },
    {
      district: "JAUNPUR",
      crimes: 2198,
    },
    {
      district: "JHANSI",
      crimes: 1183,
    },
    {
      district: "KANNAUJ",
      crimes: 1084,
    },
    {
      district: "KANPUR DEHAT",
      crimes: 1820,
    },
    {
      district: "KANPUR NAGAR",
      crimes: 8008,
    },
    {
      district: "KAUSHAMBI",
      crimes: 1156,
    },
    {
      district: "KHIRI",
      crimes: 2308,
    },
    {
      district: "KUSHI NAGAR",
      crimes: 1127,
    },
    {
      district: "LALITPUR",
      crimes: 583,
    },
    {
      district: "LUCKNOW",
      crimes: 10017,
    },
    {
      district: "MAHARAJGANJ",
      crimes: 1111,
    },
    {
      district: "MAHOBA",
      crimes: 496,
    },
    {
      district: "MAINPURI",
      crimes: 2232,
    },
    {
      district: "MATHURA",
      crimes: 3965,
    },
    {
      district: "MAU",
      crimes: 911,
    },
    {
      district: "MEERUT",
      crimes: 4410,
    },
    {
      district: "MIRZAPUR",
      crimes: 795,
    },
    {
      district: "MORADABAD",
      crimes: 4304,
    },
    {
      district: "MUZAFFARNAGAR",
      crimes: 3720,
    },
    {
      district: "PILIBHIT",
      crimes: 1651,
    },
    {
      district: "PRATAPGARH",
      crimes: 1684,
    },
    {
      district: "RAIBAREILLY",
      crimes: 1826,
    },
    {
      district: "RAMPUR",
      crimes: 2138,
    },
    {
      district: "SAHARANPUR",
      crimes: 2960,
    },
    {
      district: "SANT KABIRNAGAR",
      crimes: 503,
    },
    {
      district: "SHAHJAHANPUR",
      crimes: 2691,
    },
    {
      district: "SHRAWASTI",
      crimes: 393,
    },
    {
      district: "SIDHARTHNAGAR",
      crimes: 771,
    },
    {
      district: "SITAPUR",
      crimes: 2881,
    },
    {
      district: "SONBHADRA",
      crimes: 744,
    },
    {
      district: "ST.RAVIDASNAGAR",
      crimes: 478,
    },
    {
      district: "SULTANPUR",
      crimes: 1594,
    },
    {
      district: "UNNAO",
      crimes: 1560,
    },
    {
      district: "VARANASI",
      crimes: 3784,
    },
    {
      district: "TOTAL",
      crimes: 150258,
    },
    {
      district: "ALMORA",
      crimes: 299,
    },
    {
      district: "BAGESHWAR",
      crimes: 109,
    },
    {
      district: "CHAMOLI",
      crimes: 221,
    },
    {
      district: "CHAMPAWAT",
      crimes: 84,
    },
    {
      district: "DEHRADUN",
      crimes: 2205,
    },
    {
      district: "HARIDWAR",
      crimes: 2534,
    },
    {
      district: "NAINITAL",
      crimes: 883,
    },
    {
      district: "PAURI GARHWAL",
      crimes: 419,
    },
    {
      district: "PITHORAGARH",
      crimes: 341,
    },
    {
      district: "RUDRA PRAYAG",
      crimes: 134,
    },
    {
      district: "TEHRI GARHWAL",
      crimes: 248,
    },
    {
      district: "UDHAMSINGH NAGAR",
      crimes: 1903,
    },
    {
      district: "UTTARKASHI",
      crimes: 219,
    },
    {
      district: "TOTAL",
      crimes: 9599,
    },
    {
      district: "24 PARGANAS NORTH",
      crimes: 9201,
    },
    {
      district: "24 PARGANAS SOUTH",
      crimes: 8856,
    },
    {
      district: "ASANSOL",
      crimes: 1491,
    },
    {
      district: "BANKURA",
      crimes: 1329,
    },
    {
      district: "BIRBHUM",
      crimes: 1868,
    },
    {
      district: "BURDWAN",
      crimes: 4384,
    },
    {
      district: "COOCHBEHAR",
      crimes: 2051,
    },
    {
      district: "DAKSHIN DINAJPUR",
      crimes: 1284,
    },
    {
      district: "DARJEELING",
      crimes: 1873,
    },
    {
      district: "HOOGHLY",
      crimes: 3632,
    },
    {
      district: "HOWRAH",
      crimes: 4073,
    },
    {
      district: "HOWRAH G.R.P.",
      crimes: 493,
    },
    {
      district: "JALPAIGURI",
      crimes: 6654,
    },
    {
      district: "KHARAGPUR G.R.P.",
      crimes: 170,
    },
    {
      district: "KOLKATA",
      crimes: 10901,
    },
    {
      district: "MALDA",
      crimes: 2175,
    },
    {
      district: "MURSHIDABAD",
      crimes: 5243,
    },
    {
      district: "NADIA",
      crimes: 5623,
    },
    {
      district: "PASCHIM MIDNAPUR",
      crimes: 2933,
    },
    {
      district: "PURAB MIDNAPUR",
      crimes: 3099,
    },
    {
      district: "PURULIA",
      crimes: 1385,
    },
    {
      district: "SEALDAH G.R.P.",
      crimes: 269,
    },
    {
      district: "SILIGURI G.R.P.",
      crimes: 96,
    },
    {
      district: "UTTAR DINAJPUR",
      crimes: 2019,
    },
    {
      district: "TOTAL",
      crimes: 81102,
    },
    {
      district: "A and N ISLANDS",
      crimes: 807,
    },
    {
      district: "TOTAL",
      crimes: 807,
    },
    {
      district: "CHANDIGARH",
      crimes: 3643,
    },
    {
      district: "TOTAL",
      crimes: 3643,
    },
    {
      district: "D and N HAVELI",
      crimes: 425,
    },
    {
      district: "TOTAL",
      crimes: 425,
    },
    {
      district: "DAMAN",
      crimes: 210,
    },
    {
      district: "DIU",
      crimes: 50,
    },
    {
      district: "TOTAL",
      crimes: 260,
    },
    {
      district: "CENTRAL",
      crimes: 3248,
    },
    {
      district: "DELHI UT TOTAL",
      crimes: 56065,
    },
    {
      district: "EAST",
      crimes: 6016,
    },
    {
      district: "GRP(RLY)",
      crimes: 926,
    },
    {
      district: "IGI AIRPORT",
      crimes: 662,
    },
    {
      district: "NEW DELHI",
      crimes: 2195,
    },
    {
      district: "NORTH",
      crimes: 3352,
    },
    {
      district: "NORTH-EAST",
      crimes: 5121,
    },
    {
      district: "NORTH-WEST",
      crimes: 5189,
    },
    {
      district: "OUTER",
      crimes: 5690,
    },
    {
      district: "SOUTH",
      crimes: 10414,
    },
    {
      district: "SOUTH-WEST",
      crimes: 6821,
    },
    {
      district: "STF",
      crimes: 40,
    },
    {
      district: "WEST",
      crimes: 6391,
    },
    {
      district: "LAKSHADWEEP",
      crimes: 56,
    },
    {
      district: "TOTAL",
      crimes: 56,
    },
    {
      district: "KARAIKAL",
      crimes: 766,
    },
    {
      district: "PONDICHERRY",
      crimes: 4288,
    },
    {
      district: "TOTAL",
      crimes: 5054,
    },
    {
      district: "ADILABAD",
      crimes: 5300,
    },
    {
      district: "ANANTAPUR",
      crimes: 5734,
    },
    {
      district: "CHITTOOR",
      crimes: 7307,
    },
    {
      district: "CUDDAPAH",
      crimes: 6605,
    },
    {
      district: "CYBERABAD",
      crimes: 14173,
    },
    {
      district: "EAST GODAVARI",
      crimes: 8435,
    },
    {
      district: "GUNTAKAL RLY.",
      crimes: 171,
    },
    {
      district: "GUNTUR",
      crimes: 8911,
    },
    {
      district: "HYDERABAD CITY",
      crimes: 18567,
    },
    {
      district: "KARIMNAGAR",
      crimes: 8337,
    },
    {
      district: "KHAMMAM",
      crimes: 5834,
    },
    {
      district: "KRISHNA",
      crimes: 5528,
    },
    {
      district: "KURNOOL",
      crimes: 7835,
    },
    {
      district: "MAHABOOBNAGAR",
      crimes: 6661,
    },
    {
      district: "MEDAK",
      crimes: 5989,
    },
    {
      district: "NALGONDA",
      crimes: 8026,
    },
    {
      district: "NELLORE",
      crimes: 6118,
    },
    {
      district: "NIZAMABAD",
      crimes: 5709,
    },
    {
      district: "PRAKASHAM",
      crimes: 5453,
    },
    {
      district: "RANGA REDDY",
      crimes: 2419,
    },
    {
      district: "SECUNDERABAD RLY.",
      crimes: 476,
    },
    {
      district: "SRIKAKULAM",
      crimes: 3908,
    },
    {
      district: "VIJAYAWADA CITY",
      crimes: 5127,
    },
    {
      district: "VIJAYAWADA RLY.",
      crimes: 417,
    },
    {
      district: "VISAKHA RURAL",
      crimes: 3107,
    },
    {
      district: "VISAKHAPATNAM",
      crimes: 5015,
    },
    {
      district: "VIZIANAGARAM",
      crimes: 3142,
    },
    {
      district: "WARANGAL",
      crimes: 6758,
    },
    {
      district: "WEST GODAVARI",
      crimes: 8213,
    },
    {
      district: "TOTAL",
      crimes: 179275,
    },
    {
      district: "CHANGLANG",
      crimes: 199,
    },
    {
      district: "DIBANG VALLEY",
      crimes: 133,
    },
    {
      district: "K/KUMEY",
      crimes: 97,
    },
    {
      district: "KAMENG EAST",
      crimes: 144,
    },
    {
      district: "KAMENG WEST",
      crimes: 97,
    },
    {
      district: "LOHIT",
      crimes: 159,
    },
    {
      district: "PAPUM PARE",
      crimes: 541,
    },
    {
      district: "SIANG EAST",
      crimes: 179,
    },
    {
      district: "SIANG UPPER",
      crimes: 55,
    },
    {
      district: "SIANG WEST",
      crimes: 276,
    },
    {
      district: "SUBANSIRI LOWER",
      crimes: 135,
    },
    {
      district: "SUBANSIRI UPPER",
      crimes: 162,
    },
    {
      district: "TAWANG",
      crimes: 42,
    },
    {
      district: "TIRAP",
      crimes: 141,
    },
    {
      district: "UPPER DIBANG VALLEY",
      crimes: 14,
    },
    {
      district: "TOTAL",
      crimes: 2374,
    },
    {
      district: "BARPETA",
      crimes: 2539,
    },
    {
      district: "BASKA",
      crimes: 465,
    },
    {
      district: "BONGAIGAON",
      crimes: 1219,
    },
    {
      district: "C.I.D.",
      crimes: 24,
    },
    {
      district: "CACHAR",
      crimes: 4869,
    },
    {
      district: "CHIRANG",
      crimes: 467,
    },
    {
      district: "DARRANG",
      crimes: 1493,
    },
    {
      district: "DHEMAJI",
      crimes: 1326,
    },
    {
      district: "DHUBRI",
      crimes: 3242,
    },
    {
      district: "DIBRUGARH",
      crimes: 2343,
    },
    {
      district: "G.R.P.",
      crimes: 251,
    },
    {
      district: "GOALPARA",
      crimes: 1319,
    },
    {
      district: "GOLAGHAT",
      crimes: 1476,
    },
    {
      district: "GUWAHATI CITY",
      crimes: 7163,
    },
    {
      district: "HAILAKANDI",
      crimes: 1171,
    },
    {
      district: "JORHAT",
      crimes: 1517,
    },
    {
      district: "KAMRUP",
      crimes: 2429,
    },
    {
      district: "KARBI ANGLONG",
      crimes: 684,
    },
    {
      district: "KARIMGANJ",
      crimes: 1046,
    },
    {
      district: "KOKRAJHAR",
      crimes: 902,
    },
    {
      district: "LAKHIMPUR",
      crimes: 1905,
    },
    {
      district: "MORIGAON",
      crimes: 1429,
    },
    {
      district: "N.C.HILLS",
      crimes: 233,
    },
    {
      district: "NAGAON",
      crimes: 4294,
    },
    {
      district: "NALBARI",
      crimes: 1183,
    },
    {
      district: "R.P.O.",
      crimes: 88,
    },
    {
      district: "SIBSAGAR",
      crimes: 2276,
    },
    {
      district: "SONITPUR",
      crimes: 2779,
    },
    {
      district: "TINSUKIA",
      crimes: 2333,
    },
    {
      district: "UDALGURI",
      crimes: 868,
    },
    {
      district: "TOTAL",
      crimes: 53333,
    },
    {
      district: "ARARIA",
      crimes: 2907,
    },
    {
      district: "ARWAL",
      crimes: 694,
    },
    {
      district: "AURANGABAD",
      crimes: 3381,
    },
    {
      district: "BAGAHA",
      crimes: 2439,
    },
    {
      district: "BANKA",
      crimes: 1848,
    },
    {
      district: "BEGUSARAI",
      crimes: 3256,
    },
    {
      district: "BETTIAH",
      crimes: 3312,
    },
    {
      district: "BHABHUA",
      crimes: 1763,
    },
    {
      district: "BHAGALPUR",
      crimes: 4313,
    },
    {
      district: "BHOJPUR",
      crimes: 3866,
    },
    {
      district: "BUXAR",
      crimes: 1496,
    },
    {
      district: "DARBHANGA",
      crimes: 3800,
    },
    {
      district: "GAYA",
      crimes: 4179,
    },
    {
      district: "GOPALGANJ",
      crimes: 2605,
    },
    {
      district: "JAMALPUR RLY.",
      crimes: 223,
    },
    {
      district: "JAMUI",
      crimes: 1788,
    },
    {
      district: "JEHANABAD",
      crimes: 1524,
    },
    {
      district: "KATIHAR",
      crimes: 2858,
    },
    {
      district: "KATIHAR RLY.",
      crimes: 467,
    },
    {
      district: "KHAGARIA",
      crimes: 1826,
    },
    {
      district: "KISHANGANJ",
      crimes: 1316,
    },
    {
      district: "LAKHISARAI",
      crimes: 1187,
    },
    {
      district: "MADHEPURA",
      crimes: 1700,
    },
    {
      district: "MADHUBANI",
      crimes: 5454,
    },
    {
      district: "MOTIHARI",
      crimes: 4600,
    },
    {
      district: "MUNGER",
      crimes: 1899,
    },
    {
      district: "MUZAFFARPUR",
      crimes: 5678,
    },
    {
      district: "MUZAFFARPUR RLY.",
      crimes: 609,
    },
    {
      district: "NALANDA",
      crimes: 4215,
    },
    {
      district: "NAUGACHIA",
      crimes: 1523,
    },
    {
      district: "NAWADAH",
      crimes: 1747,
    },
    {
      district: "PATNA",
      crimes: 14491,
    },
    {
      district: "PATNA RLY.",
      crimes: 939,
    },
    {
      district: "PURNEA",
      crimes: 2802,
    },
    {
      district: "ROHTAS",
      crimes: 3943,
    },
    {
      district: "SAHARSA",
      crimes: 2155,
    },
    {
      district: "SAMASTIPUR",
      crimes: 3416,
    },
    {
      district: "SARAN",
      crimes: 3550,
    },
    {
      district: "SHEIKHPURA",
      crimes: 1020,
    },
    {
      district: "SHEOHAR",
      crimes: 546,
    },
    {
      district: "SITAMARHI",
      crimes: 3235,
    },
    {
      district: "SIWAN",
      crimes: 2452,
    },
    {
      district: "SUPAUL",
      crimes: 1978,
    },
    {
      district: "VAISHALI",
      crimes: 3669,
    },
    {
      district: "TOTAL",
      crimes: 122669,
    },
    {
      district: "BALRAMPUR",
      crimes: 774,
    },
    {
      district: "BILASPUR",
      crimes: 6337,
    },
    {
      district: "BIZAPUR",
      crimes: 368,
    },
    {
      district: "DANTEWARA",
      crimes: 723,
    },
    {
      district: "DHAMTARI",
      crimes: 1552,
    },
    {
      district: "DURG",
      crimes: 6595,
    },
    {
      district: "GRP RAIPUR",
      crimes: 301,
    },
    {
      district: "JAGDALPUR",
      crimes: 2309,
    },
    {
      district: "JANJGIR",
      crimes: 3011,
    },
    {
      district: "JASHPUR",
      crimes: 1270,
    },
    {
      district: "KABIRDHAM",
      crimes: 1720,
    },
    {
      district: "KANKER",
      crimes: 1062,
    },
    {
      district: "KORBA",
      crimes: 2515,
    },
    {
      district: "KORIYA",
      crimes: 1798,
    },
    {
      district: "MAHASAMUND",
      crimes: 1493,
    },
    {
      district: "NARAYANPUR",
      crimes: 151,
    },
    {
      district: "RAIGARH",
      crimes: 2945,
    },
    {
      district: "RAIPUR",
      crimes: 9981,
    },
    {
      district: "RAJNANDGAON",
      crimes: 3252,
    },
    {
      district: "SARGUJA",
      crimes: 1805,
    },
    {
      district: "SURAJPUR",
      crimes: 1480,
    },
    {
      district: "TOTAL",
      crimes: 51442,
    },
    {
      district: "NORTH GOA",
      crimes: 1489,
    },
    {
      district: "SOUTH GOA",
      crimes: 1253,
    },
    {
      district: "TOTAL",
      crimes: 2742,
    },
    {
      district: "AHMEDABAD COMMR.",
      crimes: 18544,
    },
    {
      district: "AHMEDABAD RURAL",
      crimes: 3404,
    },
    {
      district: "AHWA-DANG",
      crimes: 231,
    },
    {
      district: "AMRELI",
      crimes: 2391,
    },
    {
      district: "ANAND",
      crimes: 3794,
    },
    {
      district: "BHARUCH",
      crimes: 3075,
    },
    {
      district: "BHAVNAGAR",
      crimes: 5858,
    },
    {
      district: "DAHOD",
      crimes: 1808,
    },
    {
      district: "GANDHINAGAR",
      crimes: 4808,
    },
    {
      district: "HIMATNAGAR",
      crimes: 4887,
    },
    {
      district: "JAMNAGAR",
      crimes: 5332,
    },
    {
      district: "JUNAGADH",
      crimes: 5288,
    },
    {
      district: "KHEDA NORTH",
      crimes: 5265,
    },
    {
      district: "KUTCH",
      crimes: 4941,
    },
    {
      district: "MEHSANA",
      crimes: 4604,
    },
    {
      district: "NARMADA",
      crimes: 810,
    },
    {
      district: "NAVSARI",
      crimes: 995,
    },
    {
      district: "PALANPUR",
      crimes: 4107,
    },
    {
      district: "PANCHMAHAL",
      crimes: 3323,
    },
    {
      district: "PATAN",
      crimes: 2948,
    },
    {
      district: "PORBANDAR",
      crimes: 1014,
    },
    {
      district: "RAJKOT COMMR.",
      crimes: 5525,
    },
    {
      district: "RAJKOT RURAL",
      crimes: 3870,
    },
    {
      district: "SURAT COMMR.",
      crimes: 10741,
    },
    {
      district: "SURAT RURAL",
      crimes: 1589,
    },
    {
      district: "SURENDRANAGAR",
      crimes: 2957,
    },
    {
      district: "TAPI",
      crimes: 602,
    },
    {
      district: "VADODARA COMMR.",
      crimes: 5386,
    },
    {
      district: "VADODARA RURAL",
      crimes: 2755,
    },
    {
      district: "VALSAD",
      crimes: 1800,
    },
    {
      district: "W.RLY",
      crimes: 1156,
    },
    {
      district: "TOTAL",
      crimes: 123808,
    },
    {
      district: "AMBALA",
      crimes: 2560,
    },
    {
      district: "BHIWANI",
      crimes: 2739,
    },
    {
      district: "FARIDABAD",
      crimes: 4516,
    },
    {
      district: "FATEHABAD",
      crimes: 1621,
    },
    {
      district: "GRP",
      crimes: 1260,
    },
    {
      district: "GURGAON",
      crimes: 7170,
    },
    {
      district: "HISSAR",
      crimes: 3166,
    },
    {
      district: "JHAJJAR",
      crimes: 1715,
    },
    {
      district: "JIND",
      crimes: 1767,
    },
    {
      district: "KAITHAL",
      crimes: 1522,
    },
    {
      district: "KARNAL",
      crimes: 3231,
    },
    {
      district: "KURUKSHETRA",
      crimes: 2413,
    },
    {
      district: "MAHENDRAGARH",
      crimes: 1724,
    },
    {
      district: "MEWAT",
      crimes: 1262,
    },
    {
      district: "PALWAL",
      crimes: 1990,
    },
    {
      district: "PANCHKULA",
      crimes: 1569,
    },
    {
      district: "PANIPAT",
      crimes: 2702,
    },
    {
      district: "REWARI",
      crimes: 2361,
    },
    {
      district: "ROHTAK",
      crimes: 2642,
    },
    {
      district: "SIRSA",
      crimes: 1958,
    },
    {
      district: "SONIPAT",
      crimes: 3383,
    },
    {
      district: "YAMUNANAGAR",
      crimes: 2073,
    },
    {
      district: "TOTAL",
      crimes: 55344,
    },
    {
      district: "BILASPUR",
      crimes: 1046,
    },
    {
      district: "CHAMBA",
      crimes: 761,
    },
    {
      district: "G.R.P.",
      crimes: 8,
    },
    {
      district: "HAMIRPUR",
      crimes: 959,
    },
    {
      district: "KANGRA",
      crimes: 2290,
    },
    {
      district: "KINNAUR",
      crimes: 170,
    },
    {
      district: "KULLU",
      crimes: 1096,
    },
    {
      district: "LAHAUL-SPITI",
      crimes: 70,
    },
    {
      district: "MANDI",
      crimes: 2144,
    },
    {
      district: "SHIMLA",
      crimes: 1941,
    },
    {
      district: "SIRMAUR",
      crimes: 885,
    },
    {
      district: "SOLAN",
      crimes: 1504,
    },
    {
      district: "UNA",
      crimes: 1102,
    },
    {
      district: "TOTAL",
      crimes: 13976,
    },
    {
      district: "ANANTNAG",
      crimes: 1224,
    },
    {
      district: "AWANTIPORA",
      crimes: 367,
    },
    {
      district: "BANDIPORA",
      crimes: 467,
    },
    {
      district: "BARAMULLA",
      crimes: 1247,
    },
    {
      district: "BUDGAM",
      crimes: 1404,
    },
    {
      district: "CRIME JAMMU",
      crimes: 25,
    },
    {
      district: "CRIME SRINAGAR",
      crimes: 52,
    },
    {
      district: "DODA",
      crimes: 591,
    },
    {
      district: "GANDERBAL",
      crimes: 358,
    },
    {
      district: "HANDWARA",
      crimes: 310,
    },
    {
      district: "JAMMU",
      crimes: 3851,
    },
    {
      district: "KARGIL",
      crimes: 107,
    },
    {
      district: "KATHUA",
      crimes: 1057,
    },
    {
      district: "KISHTWAR",
      crimes: 294,
    },
    {
      district: "KULGAM",
      crimes: 572,
    },
    {
      district: "KUPWARA",
      crimes: 393,
    },
    {
      district: "LEH",
      crimes: 253,
    },
    {
      district: "POONCH",
      crimes: 787,
    },
    {
      district: "PULWAMA",
      crimes: 421,
    },
    {
      district: "RAILWAYS",
      crimes: 13,
    },
    {
      district: "RAJOURI",
      crimes: 1286,
    },
    {
      district: "RAMBAN",
      crimes: 678,
    },
    {
      district: "REASI",
      crimes: 472,
    },
    {
      district: "SAMBA",
      crimes: 670,
    },
    {
      district: "SHOPIAN",
      crimes: 313,
    },
    {
      district: "SRINAGAR",
      crimes: 2549,
    },
    {
      district: "UDHAMPUR",
      crimes: 843,
    },
    {
      district: "TOTAL",
      crimes: 20604,
    },
    {
      district: "BOKARO",
      crimes: 2665,
    },
    {
      district: "CHAIBASA",
      crimes: 837,
    },
    {
      district: "CHATRA",
      crimes: 1030,
    },
    {
      district: "DEOGHAR",
      crimes: 1475,
    },
    {
      district: "DHANBAD",
      crimes: 3579,
    },
    {
      district: "DHANBAD RLY.",
      crimes: 235,
    },
    {
      district: "DUMKA",
      crimes: 1758,
    },
    {
      district: "GARHWA",
      crimes: 1279,
    },
    {
      district: "GIRIDIH",
      crimes: 2819,
    },
    {
      district: "GODDA",
      crimes: 1863,
    },
    {
      district: "GUMLA",
      crimes: 960,
    },
    {
      district: "HAZARIBAGH",
      crimes: 3021,
    },
    {
      district: "JAMSHEDPUR",
      crimes: 3212,
    },
    {
      district: "JAMSHEDPUR RLY.",
      crimes: 194,
    },
    {
      district: "JAMTARA",
      crimes: 654,
    },
    {
      district: "KHUNTI",
      crimes: 313,
    },
    {
      district: "KODERMA",
      crimes: 825,
    },
    {
      district: "LATEHAR",
      crimes: 540,
    },
    {
      district: "LOHARDAGGA",
      crimes: 563,
    },
    {
      district: "PAKUR",
      crimes: 796,
    },
    {
      district: "PALAMU",
      crimes: 2117,
    },
    {
      district: "RAMGARH",
      crimes: 1067,
    },
    {
      district: "RANCHI",
      crimes: 4805,
    },
    {
      district: "SAHEBGANJ",
      crimes: 844,
    },
    {
      district: "SARAIKELA",
      crimes: 857,
    },
    {
      district: "SIMDEGA",
      crimes: 378,
    },
    {
      district: "TOTAL",
      crimes: 38686,
    },
    {
      district: "BAGALKOT",
      crimes: 2048,
    },
    {
      district: "BANGALORE COMMR.",
      crimes: 29664,
    },
    {
      district: "BANGALORE RURAL",
      crimes: 4423,
    },
    {
      district: "BELGAUM",
      crimes: 7150,
    },
    {
      district: "BELLARY",
      crimes: 3264,
    },
    {
      district: "BIDAR",
      crimes: 3363,
    },
    {
      district: "BIJAPUR",
      crimes: 3125,
    },
    {
      district: "CBPURA",
      crimes: 1891,
    },
    {
      district: "CHAMARAJNAGAR",
      crimes: 1518,
    },
    {
      district: "CHICKMAGALUR",
      crimes: 3101,
    },
    {
      district: "CHITRADURGA",
      crimes: 4191,
    },
    {
      district: "DAKSHIN KANNADA",
      crimes: 3974,
    },
    {
      district: "DAVANAGERE",
      crimes: 3009,
    },
    {
      district: "DHARWAD COMMR.",
      crimes: 2299,
    },
    {
      district: "DHARWAD RURAL",
      crimes: 1087,
    },
    {
      district: "GADAG",
      crimes: 1175,
    },
    {
      district: "GULBARGA",
      crimes: 5622,
    },
    {
      district: "HASSAN",
      crimes: 4949,
    },
    {
      district: "HAVERI",
      crimes: 2322,
    },
    {
      district: "K.G.F.",
      crimes: 849,
    },
    {
      district: "KODAGU",
      crimes: 1730,
    },
    {
      district: "KOLAR",
      crimes: 2014,
    },
    {
      district: "KOPPAL",
      crimes: 1723,
    },
    {
      district: "MANDYA",
      crimes: 4747,
    },
    {
      district: "MYSORE COMMR.",
      crimes: 3086,
    },
    {
      district: "MYSORE RURAL",
      crimes: 3173,
    },
    {
      district: "RAICHUR",
      crimes: 2994,
    },
    {
      district: "RAILWAYS",
      crimes: 447,
    },
    {
      district: "RAMANAGAR",
      crimes: 4084,
    },
    {
      district: "SHIMOGA",
      crimes: 4790,
    },
    {
      district: "TUMKUR",
      crimes: 4813,
    },
    {
      district: "UDUPI",
      crimes: 2335,
    },
    {
      district: "UTTAR KANNADA",
      crimes: 2580,
    },
    {
      district: "TOTAL",
      crimes: 127540,
    },
    {
      district: "ALAPUZHA",
      crimes: 8373,
    },
    {
      district: "ERNAKULAM COMMR.",
      crimes: 7961,
    },
    {
      district: "ERNAKULAM RURAL",
      crimes: 9159,
    },
    {
      district: "IDUKKI",
      crimes: 4923,
    },
    {
      district: "KANNUR",
      crimes: 5901,
    },
    {
      district: "KASARGOD",
      crimes: 3585,
    },
    {
      district: "KOLLAM",
      crimes: 8717,
    },
    {
      district: "KOTTAYAM",
      crimes: 8008,
    },
    {
      district: "KOZHIKODE COMMR.",
      crimes: 4166,
    },
    {
      district: "KOZHIKODE RURAL",
      crimes: 5429,
    },
    {
      district: "MALAPPURAM",
      crimes: 7419,
    },
    {
      district: "PALAKKAD",
      crimes: 5557,
    },
    {
      district: "PATHANAMTHITTA",
      crimes: 5343,
    },
    {
      district: "RAILWAYS",
      crimes: 209,
    },
    {
      district: "THRISSUR",
      crimes: 10003,
    },
    {
      district: "TRIVANDRUM COMMR.",
      crimes: 5016,
    },
    {
      district: "TRIVANDRUM RURAL",
      crimes: 8348,
    },
    {
      district: "WAYANADU",
      crimes: 2503,
    },
    {
      district: "TOTAL",
      crimes: 110620,
    },
    {
      district: "ALIRAJPUR",
      crimes: 1225,
    },
    {
      district: "ANUPPUR",
      crimes: 1244,
    },
    {
      district: "ASHOK NAGAR",
      crimes: 2041,
    },
    {
      district: "BALAGHAT",
      crimes: 2559,
    },
    {
      district: "BARWANI",
      crimes: 1907,
    },
    {
      district: "BETUL",
      crimes: 3241,
    },
    {
      district: "BHIND",
      crimes: 3171,
    },
    {
      district: "BHOPAL",
      crimes: 14718,
    },
    {
      district: "BHOPAL RLY.",
      crimes: 1327,
    },
    {
      district: "BURHANPUR",
      crimes: 1384,
    },
    {
      district: "CHHATARPUR",
      crimes: 4928,
    },
    {
      district: "CHHINDWARA",
      crimes: 4589,
    },
    {
      district: "DAMOH",
      crimes: 2904,
    },
    {
      district: "DATIYA",
      crimes: 2388,
    },
    {
      district: "DEWAS",
      crimes: 5593,
    },
    {
      district: "DHAR",
      crimes: 5389,
    },
    {
      district: "DINDORI",
      crimes: 750,
    },
    {
      district: "GUNA",
      crimes: 3116,
    },
    {
      district: "GWALIOR",
      crimes: 9104,
    },
    {
      district: "HARDA",
      crimes: 1205,
    },
    {
      district: "HOSHANGABAD",
      crimes: 3562,
    },
    {
      district: "INDORE",
      crimes: 19587,
    },
    {
      district: "INDORE RLY.",
      crimes: 337,
    },
    {
      district: "JABALPUR",
      crimes: 10857,
    },
    {
      district: "JABALPUR RLY.",
      crimes: 365,
    },
    {
      district: "JHABUA",
      crimes: 1507,
    },
    {
      district: "KATNI",
      crimes: 2964,
    },
    {
      district: "KHANDWA",
      crimes: 3244,
    },
    {
      district: "KHARGON",
      crimes: 4144,
    },
    {
      district: "MANDLA",
      crimes: 1922,
    },
    {
      district: "MANDSAUR",
      crimes: 3360,
    },
    {
      district: "MORENA",
      crimes: 5062,
    },
    {
      district: "NARSINGHPUR",
      crimes: 2465,
    },
    {
      district: "NEEMUCH",
      crimes: 2082,
    },
    {
      district: "PANNA",
      crimes: 1704,
    },
    {
      district: "RAISEN",
      crimes: 3355,
    },
    {
      district: "RAJGARH",
      crimes: 4675,
    },
    {
      district: "RATLAM",
      crimes: 3488,
    },
    {
      district: "REWA",
      crimes: 5179,
    },
    {
      district: "SAGAR",
      crimes: 8169,
    },
    {
      district: "SATNA",
      crimes: 5798,
    },
    {
      district: "SEONI",
      crimes: 2551,
    },
    {
      district: "SHAHDOL",
      crimes: 2959,
    },
    {
      district: "SHAJAPUR",
      crimes: 3811,
    },
    {
      district: "SHEOPUR",
      crimes: 1239,
    },
    {
      district: "SHIVPURI",
      crimes: 4104,
    },
    {
      district: "SIDHI",
      crimes: 2367,
    },
    {
      district: "SIHORE",
      crimes: 3403,
    },
    {
      district: "SINGRAULI",
      crimes: 2102,
    },
    {
      district: "TIKAMGARH",
      crimes: 3035,
    },
    {
      district: "UJJAIN",
      crimes: 8764,
    },
    {
      district: "UMARIYA",
      crimes: 1259,
    },
    {
      district: "VIDISHA",
      crimes: 4353,
    },
    {
      district: "TOTAL",
      crimes: 206556,
    },
    {
      district: "AHMEDNAGAR",
      crimes: 7070,
    },
    {
      district: "AKOLA",
      crimes: 4132,
    },
    {
      district: "AMRAVATI COMMR.",
      crimes: 2439,
    },
    {
      district: "AMRAVATI RURAL",
      crimes: 4150,
    },
    {
      district: "AURANGABAD COMMR.",
      crimes: 3452,
    },
    {
      district: "AURANGABAD RURAL",
      crimes: 3347,
    },
    {
      district: "BEED",
      crimes: 4500,
    },
    {
      district: "BHANDARA",
      crimes: 2845,
    },
    {
      district: "BULDHANA",
      crimes: 4494,
    },
    {
      district: "CHANDRAPUR",
      crimes: 4456,
    },
    {
      district: "DHULE",
      crimes: 2783,
    },
    {
      district: "GADCHIROLI",
      crimes: 1195,
    },
    {
      district: "GONDIA",
      crimes: 2023,
    },
    {
      district: "HINGOLI",
      crimes: 1751,
    },
    {
      district: "JALGAON",
      crimes: 4901,
    },
    {
      district: "JALNA",
      crimes: 2832,
    },
    {
      district: "KOLHAPUR",
      crimes: 4398,
    },
    {
      district: "LATUR",
      crimes: 3681,
    },
    {
      district: "MUMBAI COMMR.",
      crimes: 32770,
    },
    {
      district: "MUMBAI RLY.",
      crimes: 2222,
    },
    {
      district: "NAGPUR COMMR.",
      crimes: 8661,
    },
    {
      district: "NAGPUR RLY.",
      crimes: 1247,
    },
    {
      district: "NAGPUR RURAL",
      crimes: 4567,
    },
    {
      district: "NANDED",
      crimes: 4778,
    },
    {
      district: "NANDURBAR",
      crimes: 1501,
    },
    {
      district: "NASIK COMMR.",
      crimes: 3813,
    },
    {
      district: "NASIK RURAL",
      crimes: 4480,
    },
    {
      district: "NAVI MUMBAI",
      crimes: 4686,
    },
    {
      district: "OSMANABAD",
      crimes: 3072,
    },
    {
      district: "PARBHANI",
      crimes: 2767,
    },
    {
      district: "PUNE COMMR.",
      crimes: 14467,
    },
    {
      district: "PUNE RLY.",
      crimes: 455,
    },
    {
      district: "PUNE RURAL",
      crimes: 7183,
    },
    {
      district: "RAIGAD",
      crimes: 2061,
    },
    {
      district: "RATNAGIRI",
      crimes: 1561,
    },
    {
      district: "SANGLI",
      crimes: 2909,
    },
    {
      district: "SATARA",
      crimes: 4634,
    },
    {
      district: "SINDHUDURG",
      crimes: 795,
    },
    {
      district: "SOLAPUR COMMR.",
      crimes: 1684,
    },
    {
      district: "SOLAPUR RURAL",
      crimes: 4720,
    },
    {
      district: "THANE COMMR.",
      crimes: 9479,
    },
    {
      district: "THANE RURAL",
      crimes: 5792,
    },
    {
      district: "WARDHA",
      crimes: 4369,
    },
    {
      district: "WASHIM",
      crimes: 2222,
    },
    {
      district: "YAVATMAL",
      crimes: 4899,
    },
    {
      district: "TOTAL",
      crimes: 206243,
    },
    {
      district: "BISHNUPUR",
      crimes: 327,
    },
    {
      district: "CHANDEL",
      crimes: 74,
    },
    {
      district: "CHURACHANDPUR",
      crimes: 131,
    },
    {
      district: "CID",
      crimes: 2,
    },
    {
      district: "IMPHAL EAST",
      crimes: 725,
    },
    {
      district: "IMPHAL WEST",
      crimes: 1191,
    },
    {
      district: "SENAPATI",
      crimes: 139,
    },
    {
      district: "TAMENGLONG",
      crimes: 27,
    },
    {
      district: "THOUBAL",
      crimes: 648,
    },
    {
      district: "UKHRUL",
      crimes: 85,
    },
    {
      district: "TOTAL",
      crimes: 3349,
    },
    {
      district: "GARO HILLS EAST",
      crimes: 130,
    },
    {
      district: "GARO HILLS SOUTH",
      crimes: 37,
    },
    {
      district: "GARO HILLS WEST",
      crimes: 533,
    },
    {
      district: "JAINTIA HILLS",
      crimes: 339,
    },
    {
      district: "KHASI HILLS EAST",
      crimes: 896,
    },
    {
      district: "KHASI HILLS WEST",
      crimes: 154,
    },
    {
      district: "RI-BHOI",
      crimes: 229,
    },
    {
      district: "TOTAL",
      crimes: 2318,
    },
    {
      district: "AIZAWL",
      crimes: 976,
    },
    {
      district: "CHAMPHAI",
      crimes: 151,
    },
    {
      district: "KOLASIB",
      crimes: 217,
    },
    {
      district: "LAWNGTLAI",
      crimes: 147,
    },
    {
      district: "LUNGLEI",
      crimes: 265,
    },
    {
      district: "MAMIT",
      crimes: 62,
    },
    {
      district: "SAIHA",
      crimes: 78,
    },
    {
      district: "SERCHHIP",
      crimes: 93,
    },
    {
      district: "TOTAL",
      crimes: 1989,
    },
    {
      district: "DIMAPUR",
      crimes: 558,
    },
    {
      district: "KIPHIRE",
      crimes: 21,
    },
    {
      district: "KOHIMA",
      crimes: 181,
    },
    {
      district: "LONGLENG",
      crimes: 9,
    },
    {
      district: "MOKOKCHUNG",
      crimes: 82,
    },
    {
      district: "MON",
      crimes: 84,
    },
    {
      district: "PEREN",
      crimes: 18,
    },
    {
      district: "PHEK",
      crimes: 55,
    },
    {
      district: "TUENSANG",
      crimes: 36,
    },
    {
      district: "WOKHA",
      crimes: 95,
    },
    {
      district: "ZUNHEBOTO",
      crimes: 63,
    },
    {
      district: "TOTAL",
      crimes: 1202,
    },
    {
      district: "ANGUL",
      crimes: 2543,
    },
    {
      district: "BALASORE",
      crimes: 2803,
    },
    {
      district: "BARAGARH",
      crimes: 1513,
    },
    {
      district: "BERHAMPUR",
      crimes: 1059,
    },
    {
      district: "BHADRAK",
      crimes: 2078,
    },
    {
      district: "BOLANGIR",
      crimes: 1834,
    },
    {
      district: "BOUDH",
      crimes: 463,
    },
    {
      district: "CUTTACK",
      crimes: 2301,
    },
    {
      district: "DCP BBSR",
      crimes: 4056,
    },
    {
      district: "DCP CTC",
      crimes: 1912,
    },
    {
      district: "DEOGARH",
      crimes: 686,
    },
    {
      district: "DHENKANAL",
      crimes: 1832,
    },
    {
      district: "GAJAPATI",
      crimes: 481,
    },
    {
      district: "GANJAM",
      crimes: 2126,
    },
    {
      district: "JAGATSINGHPUR",
      crimes: 1384,
    },
    {
      district: "JAJPUR",
      crimes: 2220,
    },
    {
      district: "JHARSUGUDA",
      crimes: 1531,
    },
    {
      district: "KALAHANDI",
      crimes: 1360,
    },
    {
      district: "KANDHAMAL",
      crimes: 1630,
    },
    {
      district: "KENDRAPARA",
      crimes: 1399,
    },
    {
      district: "KEONJHAR",
      crimes: 2300,
    },
    {
      district: "KHURDA",
      crimes: 1380,
    },
    {
      district: "KORAPUT",
      crimes: 1469,
    },
    {
      district: "MALKANGIR",
      crimes: 384,
    },
    {
      district: "MAYURBHANJ",
      crimes: 2448,
    },
    {
      district: "NAYAGARH",
      crimes: 1114,
    },
    {
      district: "NOWRANGPUR",
      crimes: 840,
    },
    {
      district: "NUAPADA",
      crimes: 720,
    },
    {
      district: "PURI",
      crimes: 2930,
    },
    {
      district: "RAYAGADA",
      crimes: 715,
    },
    {
      district: "ROURKELA",
      crimes: 2247,
    },
    {
      district: "SAMBALPUR",
      crimes: 2377,
    },
    {
      district: "SONEPUR",
      crimes: 455,
    },
    {
      district: "SRP(CUTTACK)",
      crimes: 504,
    },
    {
      district: "SRP(ROURKELA)",
      crimes: 304,
    },
    {
      district: "SUNDARGARH",
      crimes: 1357,
    },
    {
      district: "TOTAL",
      crimes: 56755,
    },
    {
      district: "AMRITSAR",
      crimes: 2327,
    },
    {
      district: "AMRITSAR RURAL",
      crimes: 693,
    },
    {
      district: "BARNALA",
      crimes: 705,
    },
    {
      district: "BATALA",
      crimes: 803,
    },
    {
      district: "BHATINDA",
      crimes: 2206,
    },
    {
      district: "FARIDKOT",
      crimes: 895,
    },
    {
      district: "FATEHGARH SAHIB",
      crimes: 998,
    },
    {
      district: "FEROZPUR",
      crimes: 1992,
    },
    {
      district: "G.R.P",
      crimes: 401,
    },
    {
      district: "GURDASPUR",
      crimes: 938,
    },
    {
      district: "HOSHIARPUR",
      crimes: 1529,
    },
    {
      district: "JALANDHAR",
      crimes: 3886,
    },
    {
      district: "KAPURTHALA",
      crimes: 1469,
    },
    {
      district: "KHANNA",
      crimes: 1089,
    },
    {
      district: "LUDHIANA",
      crimes: 3148,
    },
    {
      district: "LUDHIANA RURAL",
      crimes: 789,
    },
    {
      district: "MANSA",
      crimes: 824,
    },
    {
      district: "MOGA",
      crimes: 1106,
    },
    {
      district: "MUKTSAR",
      crimes: 784,
    },
    {
      district: "PATIALA",
      crimes: 2597,
    },
    {
      district: "ROPAR",
      crimes: 886,
    },
    {
      district: "SANGRUR",
      crimes: 1836,
    },
    {
      district: "SAS NGR",
      crimes: 1684,
    },
    {
      district: "SBS NAGAR",
      crimes: 796,
    },
    {
      district: "TARN TARAN",
      crimes: 933,
    },
    {
      district: "TOTAL",
      crimes: 35314,
    },
    {
      district: "AJMER",
      crimes: 6339,
    },
    {
      district: "ALWAR",
      crimes: 8335,
    },
    {
      district: "BANSWARA",
      crimes: 2310,
    },
    {
      district: "BARAN",
      crimes: 3032,
    },
    {
      district: "BARMER",
      crimes: 2849,
    },
    {
      district: "BHARATPUR",
      crimes: 7203,
    },
    {
      district: "BHILWARA",
      crimes: 4808,
    },
    {
      district: "BIKANER",
      crimes: 4054,
    },
    {
      district: "BUNDI",
      crimes: 3101,
    },
    {
      district: "CHITTORGARH",
      crimes: 4533,
    },
    {
      district: "CHURU",
      crimes: 2759,
    },
    {
      district: "DAUSA",
      crimes: 4603,
    },
    {
      district: "DHOLPUR",
      crimes: 3616,
    },
    {
      district: "DUNGARPUR",
      crimes: 2033,
    },
    {
      district: "G.R.P.",
      crimes: 745,
    },
    {
      district: "GANGANAGAR",
      crimes: 4632,
    },
    {
      district: "HANUMANGARH",
      crimes: 3354,
    },
    {
      district: "JAIPUR EAST",
      crimes: 6455,
    },
    {
      district: "JAIPUR NORTH",
      crimes: 3517,
    },
    {
      district: "JAIPUR RURAL",
      crimes: 9051,
    },
    {
      district: "JAIPUR SOUTH",
      crimes: 5435,
    },
    {
      district: "JAISALMER",
      crimes: 993,
    },
    {
      district: "JALORE",
      crimes: 2472,
    },
    {
      district: "JHALAWAR",
      crimes: 3368,
    },
    {
      district: "JHUNJHUNU",
      crimes: 3859,
    },
    {
      district: "JODHPUR CITY",
      crimes: 3216,
    },
    {
      district: "JODHPUR RURAL",
      crimes: 3029,
    },
    {
      district: "KARAULI",
      crimes: 3771,
    },
    {
      district: "KOTA CITY",
      crimes: 3908,
    },
    {
      district: "KOTA RURAL",
      crimes: 1919,
    },
    {
      district: "NAGAUR",
      crimes: 3775,
    },
    {
      district: "PALI",
      crimes: 4704,
    },
    {
      district: "PRATAPGARH",
      crimes: 1847,
    },
    {
      district: "RAJSAMAND",
      crimes: 2159,
    },
    {
      district: "SAWAI MADHOPUR",
      crimes: 3435,
    },
    {
      district: "SIKAR",
      crimes: 4202,
    },
    {
      district: "SIROHI",
      crimes: 1834,
    },
    {
      district: "TONK",
      crimes: 3203,
    },
    {
      district: "UDAIPUR",
      crimes: 6716,
    },
    {
      district: "TOTAL",
      crimes: 151174,
    },
    {
      district: "EAST",
      crimes: 351,
    },
    {
      district: "NORTH",
      crimes: 41,
    },
    {
      district: "SOUTH",
      crimes: 195,
    },
    {
      district: "WEST",
      crimes: 143,
    },
    {
      district: "TOTAL",
      crimes: 730,
    },
    {
      district: "CHENNAI",
      crimes: 11829,
    },
    {
      district: "CHENNAI RLY.",
      crimes: 539,
    },
    {
      district: "CHENNAISUBURBAN",
      crimes: 3457,
    },
    {
      district: "COIMBATORE RURAL",
      crimes: 10998,
    },
    {
      district: "COIMBATORE URBAN",
      crimes: 4180,
    },
    {
      district: "CUDDALORE",
      crimes: 6509,
    },
    {
      district: "DHARMAPURI",
      crimes: 4696,
    },
    {
      district: "DINDIGUL",
      crimes: 4627,
    },
    {
      district: "ERODE",
      crimes: 8006,
    },
    {
      district: "KANCHIPURAM",
      crimes: 6916,
    },
    {
      district: "KANYAKUMARI",
      crimes: 4735,
    },
    {
      district: "KARUR",
      crimes: 2464,
    },
    {
      district: "KRISHNAGIRI",
      crimes: 5080,
    },
    {
      district: "MADURAI RURAL",
      crimes: 4791,
    },
    {
      district: "MADURAI URBAN",
      crimes: 2470,
    },
    {
      district: "NAGAPATTINAM",
      crimes: 4133,
    },
    {
      district: "NAMAKKAL",
      crimes: 4625,
    },
    {
      district: "NILGIRIS",
      crimes: 1371,
    },
    {
      district: "PERAMBALUR",
      crimes: 3138,
    },
    {
      district: "PUDUKOTTAI",
      crimes: 3032,
    },
    {
      district: "RAMNATHAPURAM",
      crimes: 2907,
    },
    {
      district: "SALEM RURAL",
      crimes: 7381,
    },
    {
      district: "SALEM URBAN",
      crimes: 2313,
    },
    {
      district: "SIVAGANGAI",
      crimes: 2888,
    },
    {
      district: "THANJAVUR",
      crimes: 7420,
    },
    {
      district: "THENI",
      crimes: 4992,
    },
    {
      district: "THIRUNELVELI RURAL",
      crimes: 7822,
    },
    {
      district: "THIRUNELVELI URBAN",
      crimes: 1574,
    },
    {
      district: "THIRUVALLUR",
      crimes: 4116,
    },
    {
      district: "THIRUVANNAMALAI",
      crimes: 4625,
    },
    {
      district: "THIRUVARUR",
      crimes: 2770,
    },
    {
      district: "THOOTHUGUDI",
      crimes: 5508,
    },
    {
      district: "TRICHY RLY.",
      crimes: 98,
    },
    {
      district: "TRICHY RURAL",
      crimes: 3598,
    },
    {
      district: "TRICHY URBAN",
      crimes: 3273,
    },
    {
      district: "VELLORE",
      crimes: 7050,
    },
    {
      district: "VILLUPURAM",
      crimes: 6631,
    },
    {
      district: "VIRUDHUNAGAR",
      crimes: 4271,
    },
    {
      district: "TOTAL",
      crimes: 176833,
    },
    {
      district: "DHALAI",
      crimes: 417,
    },
    {
      district: "NORTH",
      crimes: 993,
    },
    {
      district: "SOUTH",
      crimes: 1506,
    },
    {
      district: "WEST",
      crimes: 2420,
    },
    {
      district: "TOTAL",
      crimes: 5336,
    },
    {
      district: "AGRA",
      crimes: 6925,
    },
    {
      district: "ALIGARH",
      crimes: 4069,
    },
    {
      district: "ALLAHABAD",
      crimes: 5161,
    },
    {
      district: "AMBEDKAR NAGAR",
      crimes: 1040,
    },
    {
      district: "AURAIYA",
      crimes: 822,
    },
    {
      district: "AZAMGARH",
      crimes: 1760,
    },
    {
      district: "BADAUN",
      crimes: 2112,
    },
    {
      district: "BAGHPAT",
      crimes: 1539,
    },
    {
      district: "BAHRAICH",
      crimes: 1217,
    },
    {
      district: "BALLIA",
      crimes: 936,
    },
    {
      district: "BALRAMPUR",
      crimes: 351,
    },
    {
      district: "BANDA",
      crimes: 1830,
    },
    {
      district: "BARABANKI",
      crimes: 2986,
    },
    {
      district: "BAREILLY",
      crimes: 5222,
    },
    {
      district: "BASTI",
      crimes: 999,
    },
    {
      district: "BIJNOR",
      crimes: 2295,
    },
    {
      district: "BULANDSHAHAR",
      crimes: 3568,
    },
    {
      district: "CHANDOLI",
      crimes: 1129,
    },
    {
      district: "CHITRAKOOT DHAM",
      crimes: 528,
    },
    {
      district: "DEORIA",
      crimes: 797,
    },
    {
      district: "ETAH",
      crimes: 1984,
    },
    {
      district: "ETAWAH",
      crimes: 2408,
    },
    {
      district: "FAIZABAD",
      crimes: 1733,
    },
    {
      district: "FATEHGARH",
      crimes: 1433,
    },
    {
      district: "FATEHPUR",
      crimes: 1819,
    },
    {
      district: "FIROZABAD",
      crimes: 3009,
    },
    {
      district: "G.R.P.",
      crimes: 2632,
    },
    {
      district: "GAUTAMBUDH NAGAR",
      crimes: 3622,
    },
    {
      district: "GHAZIABAD",
      crimes: 4888,
    },
    {
      district: "GHAZIPUR",
      crimes: 1059,
    },
    {
      district: "GONDA",
      crimes: 1395,
    },
    {
      district: "GORAKHPUR",
      crimes: 2892,
    },
    {
      district: "HAMIRPUR",
      crimes: 450,
    },
    {
      district: "HARDOI",
      crimes: 2114,
    },
    {
      district: "HATHRAS",
      crimes: 1447,
    },
    {
      district: "J.P.NAGAR",
      crimes: 1144,
    },
    {
      district: "JALAUN",
      crimes: 1106,
    },
    {
      district: "JAUNPUR",
      crimes: 2230,
    },
    {
      district: "JHANSI",
      crimes: 1011,
    },
    {
      district: "KANNAUJ",
      crimes: 1160,
    },
    {
      district: "KANPUR DEHAT",
      crimes: 2084,
    },
    {
      district: "KANPUR NAGAR",
      crimes: 8885,
    },
    {
      district: "KANSHIRAM NAGAR",
      crimes: 905,
    },
    {
      district: "KAUSHAMBI",
      crimes: 1674,
    },
    {
      district: "KHIRI",
      crimes: 2768,
    },
    {
      district: "KUSHI NAGAR",
      crimes: 976,
    },
    {
      district: "LALITPUR",
      crimes: 495,
    },
    {
      district: "LUCKNOW",
      crimes: 13707,
    },
    {
      district: "MAHARAJGANJ",
      crimes: 807,
    },
    {
      district: "MAHOBA",
      crimes: 652,
    },
    {
      district: "MAINPURI",
      crimes: 2207,
    },
    {
      district: "MATHURA",
      crimes: 3911,
    },
    {
      district: "MAU",
      crimes: 1110,
    },
    {
      district: "MEERUT",
      crimes: 5025,
    },
    {
      district: "MIRZAPUR",
      crimes: 1294,
    },
    {
      district: "MORADABAD",
      crimes: 5093,
    },
    {
      district: "MUZAFFARNAGAR",
      crimes: 3892,
    },
    {
      district: "PILIBHIT",
      crimes: 2470,
    },
    {
      district: "PRATAPGARH",
      crimes: 2483,
    },
    {
      district: "RAIBAREILLY",
      crimes: 2228,
    },
    {
      district: "RAMPUR",
      crimes: 2252,
    },
    {
      district: "SAHARANPUR",
      crimes: 2737,
    },
    {
      district: "SANT KABIRNAGAR",
      crimes: 823,
    },
    {
      district: "SHAHJAHANPUR",
      crimes: 2640,
    },
    {
      district: "SHRAWASTI",
      crimes: 390,
    },
    {
      district: "SIDHARTHNAGAR",
      crimes: 765,
    },
    {
      district: "SITAPUR",
      crimes: 3275,
    },
    {
      district: "SONBHADRA",
      crimes: 969,
    },
    {
      district: "ST.RAVIDASNAGAR",
      crimes: 433,
    },
    {
      district: "SULTANPUR",
      crimes: 1902,
    },
    {
      district: "UNNAO",
      crimes: 1583,
    },
    {
      district: "VARANASI",
      crimes: 3739,
    },
    {
      district: "TOTAL",
      crimes: 168996,
    },
    {
      district: "ALMORA",
      crimes: 252,
    },
    {
      district: "BAGESHWAR",
      crimes: 65,
    },
    {
      district: "CHAMOLI",
      crimes: 94,
    },
    {
      district: "CHAMPAWAT",
      crimes: 79,
    },
    {
      district: "DEHRADUN",
      crimes: 2458,
    },
    {
      district: "HARIDWAR",
      crimes: 2522,
    },
    {
      district: "NAINITAL",
      crimes: 892,
    },
    {
      district: "PAURI GARHWAL",
      crimes: 178,
    },
    {
      district: "PITHORAGARH",
      crimes: 160,
    },
    {
      district: "RUDRA PRAYAG",
      crimes: 37,
    },
    {
      district: "TEHRI GARHWAL",
      crimes: 241,
    },
    {
      district: "UDHAMSINGH NAGAR",
      crimes: 1749,
    },
    {
      district: "UTTARKASHI",
      crimes: 129,
    },
    {
      district: "TOTAL",
      crimes: 8856,
    },
    {
      district: "24 PARGANAS NORTH",
      crimes: 11247,
    },
    {
      district: "24 PARGANAS SOUTH",
      crimes: 13920,
    },
    {
      district: "ASANSOL",
      crimes: 1676,
    },
    {
      district: "BANKURA",
      crimes: 1460,
    },
    {
      district: "BIRBHUM",
      crimes: 2526,
    },
    {
      district: "BURDWAN",
      crimes: 4128,
    },
    {
      district: "COOCHBEHAR",
      crimes: 2499,
    },
    {
      district: "DAKSHIN DINAJPUR",
      crimes: 1551,
    },
    {
      district: "DARJEELING",
      crimes: 2246,
    },
    {
      district: "HOOGHLY",
      crimes: 3844,
    },
    {
      district: "HOWRAH",
      crimes: 5487,
    },
    {
      district: "HOWRAH G.R.P.",
      crimes: 666,
    },
    {
      district: "JALPAIGURI",
      crimes: 12992,
    },
    {
      district: "KHARAGPUR G.R.P.",
      crimes: 139,
    },
    {
      district: "KOLKATA",
      crimes: 13005,
    },
    {
      district: "MALDA",
      crimes: 2798,
    },
    {
      district: "MURSHIDABAD",
      crimes: 6302,
    },
    {
      district: "NADIA",
      crimes: 7247,
    },
    {
      district: "PASCHIM MIDNAPUR",
      crimes: 2933,
    },
    {
      district: "PURAB MIDNAPUR",
      crimes: 3887,
    },
    {
      district: "PURULIA",
      crimes: 1744,
    },
    {
      district: "SEALDAH G.R.P.",
      crimes: 257,
    },
    {
      district: "SILIGURI G.R.P.",
      crimes: 135,
    },
    {
      district: "UTTAR DINAJPUR",
      crimes: 2730,
    },
    {
      district: "TOTAL",
      crimes: 105419,
    },
    {
      district: "ANDAMAN",
      crimes: 859,
    },
    {
      district: "NICOBAR",
      crimes: 23,
    },
    {
      district: "TOTAL",
      crimes: 882,
    },
    {
      district: "CHANDIGARH",
      crimes: 3931,
    },
    {
      district: "TOTAL",
      crimes: 3931,
    },
    {
      district: "D and N HAVELI",
      crimes: 401,
    },
    {
      district: "TOTAL",
      crimes: 401,
    },
    {
      district: "DAMAN",
      crimes: 192,
    },
    {
      district: "DIU",
      crimes: 56,
    },
    {
      district: "TOTAL",
      crimes: 248,
    },
    {
      district: "CAW",
      crimes: 107,
    },
    {
      district: "CENTRAL",
      crimes: 3100,
    },
    {
      district: "CRIME BRANCH",
      crimes: 30,
    },
    {
      district: "DELHI UT TOTAL",
      crimes: 49350,
    },
    {
      district: "EAST",
      crimes: 5540,
    },
    {
      district: "EOW",
      crimes: 170,
    },
    {
      district: "GRP(RLY)",
      crimes: 951,
    },
    {
      district: "IGI AIRPORT",
      crimes: 530,
    },
    {
      district: "NEW DELHI",
      crimes: 1859,
    },
    {
      district: "NORTH",
      crimes: 3113,
    },
    {
      district: "NORTH-EAST",
      crimes: 4514,
    },
    {
      district: "NORTH-WEST",
      crimes: 4204,
    },
    {
      district: "OUTER",
      crimes: 5237,
    },
    {
      district: "SOUTH",
      crimes: 4821,
    },
    {
      district: "SOUTH-EAST",
      crimes: 5904,
    },
    {
      district: "SOUTH-WEST",
      crimes: 3945,
    },
    {
      district: "STF",
      crimes: 39,
    },
    {
      district: "WEST",
      crimes: 5286,
    },
    {
      district: "LAKSHADWEEP",
      crimes: 95,
    },
    {
      district: "TOTAL",
      crimes: 95,
    },
    {
      district: "KARAIKAL",
      crimes: 727,
    },
    {
      district: "PUDUCHERRY",
      crimes: 4262,
    },
    {
      district: "TOTAL",
      crimes: 4989,
    },
    {
      district: "ADILABAD",
      crimes: 5312,
    },
    {
      district: "ANANTAPUR",
      crimes: 5181,
    },
    {
      district: "CHITTOOR",
      crimes: 7268,
    },
    {
      district: "CUDDAPAH",
      crimes: 5510,
    },
    {
      district: "CYBERABAD",
      crimes: 14841,
    },
    {
      district: "EAST GODAVARI",
      crimes: 8660,
    },
    {
      district: "GUNTAKAL RLY.",
      crimes: 214,
    },
    {
      district: "GUNTUR",
      crimes: 9806,
    },
    {
      district: "HYDERABAD CITY",
      crimes: 17840,
    },
    {
      district: "KARIMNAGAR",
      crimes: 7902,
    },
    {
      district: "KHAMMAM",
      crimes: 6228,
    },
    {
      district: "KRISHNA",
      crimes: 5893,
    },
    {
      district: "KURNOOL",
      crimes: 8002,
    },
    {
      district: "MAHABOOBNAGAR",
      crimes: 6972,
    },
    {
      district: "MEDAK",
      crimes: 5887,
    },
    {
      district: "NALGONDA",
      crimes: 8617,
    },
    {
      district: "NELLORE",
      crimes: 5867,
    },
    {
      district: "NIZAMABAD",
      crimes: 4890,
    },
    {
      district: "PRAKASHAM",
      crimes: 6125,
    },
    {
      district: "RANGA REDDY",
      crimes: 2042,
    },
    {
      district: "SECUNDERABAD RLY.",
      crimes: 588,
    },
    {
      district: "SRIKAKULAM",
      crimes: 3354,
    },
    {
      district: "VIJAYAWADA CITY",
      crimes: 5180,
    },
    {
      district: "VIJAYAWADA RLY.",
      crimes: 592,
    },
    {
      district: "VISAKHA RURAL",
      crimes: 2738,
    },
    {
      district: "VISAKHAPATNAM",
      crimes: 5416,
    },
    {
      district: "VIZIANAGARAM",
      crimes: 3451,
    },
    {
      district: "WARANGAL",
      crimes: 7479,
    },
    {
      district: "WEST GODAVARI",
      crimes: 8586,
    },
    {
      district: "TOTAL",
      crimes: 180441,
    },
    {
      district: "ANJAW",
      crimes: 20,
    },
    {
      district: "CHANGLANG",
      crimes: 207,
    },
    {
      district: "DIBANG VALLEY",
      crimes: 115,
    },
    {
      district: "K/KUMEY",
      crimes: 72,
    },
    {
      district: "KAMENG EAST",
      crimes: 163,
    },
    {
      district: "KAMENG WEST",
      crimes: 137,
    },
    {
      district: "LOHIT",
      crimes: 170,
    },
    {
      district: "PAPUM PARE",
      crimes: 456,
    },
    {
      district: "SIANG EAST",
      crimes: 222,
    },
    {
      district: "SIANG UPPER",
      crimes: 55,
    },
    {
      district: "SIANG WEST",
      crimes: 243,
    },
    {
      district: "SUBANSIRI LOWER",
      crimes: 127,
    },
    {
      district: "SUBANSIRI UPPER",
      crimes: 136,
    },
    {
      district: "TAWANG",
      crimes: 44,
    },
    {
      district: "TIRAP",
      crimes: 166,
    },
    {
      district: "UPPER DIBANG VALLEY",
      crimes: 29,
    },
    {
      district: "TOTAL",
      crimes: 2362,
    },
    {
      district: "BARPETA",
      crimes: 2496,
    },
    {
      district: "BASKA",
      crimes: 413,
    },
    {
      district: "BONGAIGAON",
      crimes: 1253,
    },
    {
      district: "C.I.D.",
      crimes: 22,
    },
    {
      district: "CACHAR",
      crimes: 4601,
    },
    {
      district: "CHIRANG",
      crimes: 582,
    },
    {
      district: "DARRANG",
      crimes: 2321,
    },
    {
      district: "DHEMAJI",
      crimes: 1016,
    },
    {
      district: "DHUBRI",
      crimes: 3291,
    },
    {
      district: "DIBRUGARH",
      crimes: 2155,
    },
    {
      district: "G.R.P.",
      crimes: 306,
    },
    {
      district: "GOALPARA",
      crimes: 1776,
    },
    {
      district: "GOLAGHAT",
      crimes: 1586,
    },
    {
      district: "GUWAHATI CITY",
      crimes: 7280,
    },
    {
      district: "HAILAKANDI",
      crimes: 1202,
    },
    {
      district: "JORHAT",
      crimes: 1362,
    },
    {
      district: "KAMRUP",
      crimes: 2335,
    },
    {
      district: "KARBI ANGLONG",
      crimes: 624,
    },
    {
      district: "KARIMGANJ",
      crimes: 1140,
    },
    {
      district: "KOKRAJHAR",
      crimes: 1191,
    },
    {
      district: "LAKHIMPUR",
      crimes: 1861,
    },
    {
      district: "MORIGAON",
      crimes: 1322,
    },
    {
      district: "N.C.HILLS",
      crimes: 254,
    },
    {
      district: "NAGAON",
      crimes: 5203,
    },
    {
      district: "NALBARI",
      crimes: 1348,
    },
    {
      district: "R.P.O.",
      crimes: 90,
    },
    {
      district: "SIBSAGAR",
      crimes: 2163,
    },
    {
      district: "SONITPUR",
      crimes: 2907,
    },
    {
      district: "TINSUKIA",
      crimes: 2374,
    },
    {
      district: "UDALGURI",
      crimes: 839,
    },
    {
      district: "TOTAL",
      crimes: 55313,
    },
    {
      district: "ARARIA",
      crimes: 2129,
    },
    {
      district: "ARWAL",
      crimes: 655,
    },
    {
      district: "AURANGABAD",
      crimes: 3113,
    },
    {
      district: "BAGAHA",
      crimes: 1500,
    },
    {
      district: "BANKA",
      crimes: 1820,
    },
    {
      district: "BEGUSARAI",
      crimes: 3387,
    },
    {
      district: "BETTIAH",
      crimes: 3202,
    },
    {
      district: "BHABHUA",
      crimes: 1780,
    },
    {
      district: "BHAGALPUR",
      crimes: 3240,
    },
    {
      district: "BHOJPUR",
      crimes: 3736,
    },
    {
      district: "BUXAR",
      crimes: 1860,
    },
    {
      district: "DARBHANGA",
      crimes: 4261,
    },
    {
      district: "GAYA",
      crimes: 4626,
    },
    {
      district: "GOPALGANJ",
      crimes: 2641,
    },
    {
      district: "JAMALPUR RLY.",
      crimes: 232,
    },
    {
      district: "JAMUI",
      crimes: 2257,
    },
    {
      district: "JEHANABAD",
      crimes: 1592,
    },
    {
      district: "KATIHAR",
      crimes: 2537,
    },
    {
      district: "KATIHAR RLY.",
      crimes: 364,
    },
    {
      district: "KHAGARIA",
      crimes: 1671,
    },
    {
      district: "KISHANGANJ",
      crimes: 1247,
    },
    {
      district: "LAKHISARAI",
      crimes: 1294,
    },
    {
      district: "MADHEPURA",
      crimes: 1770,
    },
    {
      district: "MADHUBANI",
      crimes: 4175,
    },
    {
      district: "MOTIHARI",
      crimes: 5234,
    },
    {
      district: "MUNGER",
      crimes: 2002,
    },
    {
      district: "MUZAFFARPUR",
      crimes: 5579,
    },
    {
      district: "MUZAFFARPUR RLY.",
      crimes: 600,
    },
    {
      district: "NALANDA",
      crimes: 4707,
    },
    {
      district: "NAUGACHIA",
      crimes: 1573,
    },
    {
      district: "NAWADAH",
      crimes: 2164,
    },
    {
      district: "PATNA",
      crimes: 14446,
    },
    {
      district: "PATNA RLY.",
      crimes: 1146,
    },
    {
      district: "PURNEA",
      crimes: 2820,
    },
    {
      district: "ROHTAS",
      crimes: 4071,
    },
    {
      district: "SAHARSA",
      crimes: 2087,
    },
    {
      district: "SAMASTIPUR",
      crimes: 4077,
    },
    {
      district: "SARAN",
      crimes: 3826,
    },
    {
      district: "SHEIKHPURA",
      crimes: 964,
    },
    {
      district: "SHEOHAR",
      crimes: 555,
    },
    {
      district: "SITAMARHI",
      crimes: 3763,
    },
    {
      district: "SIWAN",
      crimes: 2242,
    },
    {
      district: "SUPAUL",
      crimes: 1675,
    },
    {
      district: "VAISHALI",
      crimes: 4311,
    },
    {
      district: "TOTAL",
      crimes: 122931,
    },
    {
      district: "BALRAMPUR",
      crimes: 761,
    },
    {
      district: "BILASPUR",
      crimes: 6438,
    },
    {
      district: "BIZAPUR",
      crimes: 306,
    },
    {
      district: "DANTEWARA",
      crimes: 737,
    },
    {
      district: "DHAMTARI",
      crimes: 1442,
    },
    {
      district: "DURG",
      crimes: 7341,
    },
    {
      district: "GRP RAIPUR",
      crimes: 358,
    },
    {
      district: "JAGDALPUR",
      crimes: 2211,
    },
    {
      district: "JANJGIR",
      crimes: 2964,
    },
    {
      district: "JASHPUR",
      crimes: 1258,
    },
    {
      district: "KABIRDHAM",
      crimes: 1567,
    },
    {
      district: "KANKER",
      crimes: 993,
    },
    {
      district: "KORBA",
      crimes: 2428,
    },
    {
      district: "KORIYA",
      crimes: 1574,
    },
    {
      district: "MAHASAMUND",
      crimes: 1660,
    },
    {
      district: "NARAYANPUR",
      crimes: 171,
    },
    {
      district: "RAIGARH",
      crimes: 2890,
    },
    {
      district: "RAIPUR",
      crimes: 9915,
    },
    {
      district: "RAJNANDGAON",
      crimes: 3071,
    },
    {
      district: "SARGUJA",
      crimes: 1835,
    },
    {
      district: "SURAJPUR",
      crimes: 1450,
    },
    {
      district: "TOTAL",
      crimes: 51370,
    },
    {
      district: "NORTH GOA",
      crimes: 1673,
    },
    {
      district: "SOUTH GOA",
      crimes: 1332,
    },
    {
      district: "TOTAL",
      crimes: 3005,
    },
    {
      district: "AHMEDABAD COMMR.",
      crimes: 20726,
    },
    {
      district: "AHMEDABAD RURAL",
      crimes: 3241,
    },
    {
      district: "AHWA-DANG",
      crimes: 153,
    },
    {
      district: "AMRELI",
      crimes: 2226,
    },
    {
      district: "ANAND",
      crimes: 3455,
    },
    {
      district: "BHARUCH",
      crimes: 3183,
    },
    {
      district: "BHAVNAGAR",
      crimes: 4611,
    },
    {
      district: "DAHOD",
      crimes: 1459,
    },
    {
      district: "GANDHINAGAR",
      crimes: 4890,
    },
    {
      district: "HIMATNAGAR",
      crimes: 3365,
    },
    {
      district: "JAMNAGAR",
      crimes: 4694,
    },
    {
      district: "JUNAGADH",
      crimes: 5521,
    },
    {
      district: "KHEDA NORTH",
      crimes: 4168,
    },
    {
      district: "KUTCH",
      crimes: 3969,
    },
    {
      district: "MEHSANA",
      crimes: 4672,
    },
    {
      district: "NARMADA",
      crimes: 755,
    },
    {
      district: "NAVSARI",
      crimes: 870,
    },
    {
      district: "PALANPUR",
      crimes: 4325,
    },
    {
      district: "PANCHMAHAL",
      crimes: 3460,
    },
    {
      district: "PATAN",
      crimes: 2564,
    },
    {
      district: "PORBANDAR",
      crimes: 973,
    },
    {
      district: "RAJKOT COMMR.",
      crimes: 4475,
    },
    {
      district: "RAJKOT RURAL",
      crimes: 4269,
    },
    {
      district: "SURAT COMMR.",
      crimes: 7564,
    },
    {
      district: "SURAT RURAL",
      crimes: 1446,
    },
    {
      district: "SURENDRANAGAR",
      crimes: 2951,
    },
    {
      district: "TAPI",
      crimes: 663,
    },
    {
      district: "VADODARA COMMR.",
      crimes: 5060,
    },
    {
      district: "VADODARA RURAL",
      crimes: 2836,
    },
    {
      district: "VALSAD",
      crimes: 1777,
    },
    {
      district: "W.RLY",
      crimes: 862,
    },
    {
      district: "TOTAL",
      crimes: 115183,
    },
    {
      district: "AMBALA",
      crimes: 2345,
    },
    {
      district: "BHIWANI",
      crimes: 2732,
    },
    {
      district: "FARIDABAD",
      crimes: 4409,
    },
    {
      district: "FATEHABAD",
      crimes: 1627,
    },
    {
      district: "GRP",
      crimes: 1264,
    },
    {
      district: "GURGAON",
      crimes: 6340,
    },
    {
      district: "HISSAR",
      crimes: 3346,
    },
    {
      district: "JHAJJAR",
      crimes: 1797,
    },
    {
      district: "JIND",
      crimes: 2373,
    },
    {
      district: "KAITHAL",
      crimes: 1744,
    },
    {
      district: "KARNAL",
      crimes: 3351,
    },
    {
      district: "KURUKSHETRA",
      crimes: 2485,
    },
    {
      district: "MAHENDRAGARH",
      crimes: 1713,
    },
    {
      district: "MEWAT",
      crimes: 1604,
    },
    {
      district: "PALWAL",
      crimes: 2337,
    },
    {
      district: "PANCHKULA",
      crimes: 1554,
    },
    {
      district: "PANIPAT",
      crimes: 2812,
    },
    {
      district: "REWARI",
      crimes: 2125,
    },
    {
      district: "ROHTAK",
      crimes: 2838,
    },
    {
      district: "SIRSA",
      crimes: 1722,
    },
    {
      district: "SONIPAT",
      crimes: 3429,
    },
    {
      district: "YAMUNANAGAR",
      crimes: 2282,
    },
    {
      district: "TOTAL",
      crimes: 56229,
    },
    {
      district: "BADDIPOLICEDIST",
      crimes: 423,
    },
    {
      district: "BILASPUR",
      crimes: 1063,
    },
    {
      district: "CHAMBA",
      crimes: 711,
    },
    {
      district: "CID",
      crimes: 2,
    },
    {
      district: "G.R.P.",
      crimes: 9,
    },
    {
      district: "HAMIRPUR",
      crimes: 936,
    },
    {
      district: "KANGRA",
      crimes: 2486,
    },
    {
      district: "KINNAUR",
      crimes: 203,
    },
    {
      district: "KULLU",
      crimes: 961,
    },
    {
      district: "LAHAUL-SPITI",
      crimes: 64,
    },
    {
      district: "MANDI",
      crimes: 1937,
    },
    {
      district: "SHIMLA",
      crimes: 1763,
    },
    {
      district: "SIRMAUR",
      crimes: 909,
    },
    {
      district: "SOLAN",
      crimes: 854,
    },
    {
      district: "UNA",
      crimes: 994,
    },
    {
      district: "TOTAL",
      crimes: 13315,
    },
    {
      district: "ANANTNAG",
      crimes: 1393,
    },
    {
      district: "AWANTIPORA",
      crimes: 472,
    },
    {
      district: "BANDIPORA",
      crimes: 465,
    },
    {
      district: "BARAMULLA",
      crimes: 1580,
    },
    {
      district: "BUDGAM",
      crimes: 1369,
    },
    {
      district: "CRIME JAMMU",
      crimes: 17,
    },
    {
      district: "CRIME SRINAGAR",
      crimes: 32,
    },
    {
      district: "DODA",
      crimes: 721,
    },
    {
      district: "GANDERBAL",
      crimes: 446,
    },
    {
      district: "HANDWARA",
      crimes: 381,
    },
    {
      district: "JAMMU",
      crimes: 3746,
    },
    {
      district: "KARGIL",
      crimes: 104,
    },
    {
      district: "KATHUA",
      crimes: 1001,
    },
    {
      district: "KISHTWAR",
      crimes: 276,
    },
    {
      district: "KULGAM",
      crimes: 720,
    },
    {
      district: "KUPWARA",
      crimes: 417,
    },
    {
      district: "LEH",
      crimes: 168,
    },
    {
      district: "POONCH",
      crimes: 758,
    },
    {
      district: "PULWAMA",
      crimes: 433,
    },
    {
      district: "RAILWAYS",
      crimes: 27,
    },
    {
      district: "RAILWAYS KMR",
      crimes: 10,
    },
    {
      district: "RAJOURI",
      crimes: 1210,
    },
    {
      district: "RAMBAN",
      crimes: 669,
    },
    {
      district: "REASI",
      crimes: 517,
    },
    {
      district: "SAMBA",
      crimes: 683,
    },
    {
      district: "SHOPIAN",
      crimes: 490,
    },
    {
      district: "SRINAGAR",
      crimes: 2960,
    },
    {
      district: "UDHAMPUR",
      crimes: 910,
    },
    {
      district: "TOTAL",
      crimes: 21975,
    },
    {
      district: "BOKARO",
      crimes: 2476,
    },
    {
      district: "CHAIBASA",
      crimes: 812,
    },
    {
      district: "CHATRA",
      crimes: 858,
    },
    {
      district: "DEOGHAR",
      crimes: 1588,
    },
    {
      district: "DHANBAD",
      crimes: 3787,
    },
    {
      district: "DHANBAD RLY.",
      crimes: 310,
    },
    {
      district: "DUMKA",
      crimes: 1519,
    },
    {
      district: "GARHWA",
      crimes: 1321,
    },
    {
      district: "GIRIDIH",
      crimes: 2564,
    },
    {
      district: "GODDA",
      crimes: 1236,
    },
    {
      district: "GUMLA",
      crimes: 926,
    },
    {
      district: "HAZARIBAGH",
      crimes: 2409,
    },
    {
      district: "JAMSHEDPUR",
      crimes: 3595,
    },
    {
      district: "JAMSHEDPUR RLY.",
      crimes: 282,
    },
    {
      district: "JAMTARA",
      crimes: 449,
    },
    {
      district: "KHUNTI",
      crimes: 340,
    },
    {
      district: "KODERMA",
      crimes: 987,
    },
    {
      district: "LATEHAR",
      crimes: 658,
    },
    {
      district: "LOHARDAGGA",
      crimes: 472,
    },
    {
      district: "PAKUR",
      crimes: 693,
    },
    {
      district: "PALAMU",
      crimes: 1888,
    },
    {
      district: "RAMGARH",
      crimes: 1016,
    },
    {
      district: "RANCHI",
      crimes: 5138,
    },
    {
      district: "SAHEBGANJ",
      crimes: 935,
    },
    {
      district: "SARAIKELA",
      crimes: 865,
    },
    {
      district: "SIMDEGA",
      crimes: 312,
    },
    {
      district: "TOTAL",
      crimes: 37436,
    },
    {
      district: "BAGALKOT",
      crimes: 2130,
    },
    {
      district: "BANGALORE COMMR.",
      crimes: 32380,
    },
    {
      district: "BANGALORE RURAL",
      crimes: 4384,
    },
    {
      district: "BELGAUM",
      crimes: 7315,
    },
    {
      district: "BELLARY",
      crimes: 3209,
    },
    {
      district: "BIDAR",
      crimes: 3594,
    },
    {
      district: "BIJAPUR",
      crimes: 3290,
    },
    {
      district: "CBPURA",
      crimes: 1948,
    },
    {
      district: "CHAMARAJNAGAR",
      crimes: 1661,
    },
    {
      district: "CHICKMAGALUR",
      crimes: 2915,
    },
    {
      district: "CHITRADURGA",
      crimes: 4122,
    },
    {
      district: "DAKSHIN KANNADA",
      crimes: 4187,
    },
    {
      district: "DAVANAGERE",
      crimes: 3259,
    },
    {
      district: "DHARWAD COMMR.",
      crimes: 2040,
    },
    {
      district: "DHARWAD RURAL",
      crimes: 1278,
    },
    {
      district: "GADAG",
      crimes: 1150,
    },
    {
      district: "GULBARGA",
      crimes: 5984,
    },
    {
      district: "HASSAN",
      crimes: 5142,
    },
    {
      district: "HAVERI",
      crimes: 2139,
    },
    {
      district: "K.G.F.",
      crimes: 853,
    },
    {
      district: "KODAGU",
      crimes: 1826,
    },
    {
      district: "KOLAR",
      crimes: 1859,
    },
    {
      district: "KOPPAL",
      crimes: 1916,
    },
    {
      district: "MANDYA",
      crimes: 5491,
    },
    {
      district: "MYSORE COMMR.",
      crimes: 3183,
    },
    {
      district: "MYSORE RURAL",
      crimes: 3486,
    },
    {
      district: "RAICHUR",
      crimes: 2907,
    },
    {
      district: "RAILWAYS",
      crimes: 604,
    },
    {
      district: "RAMANAGAR",
      crimes: 4237,
    },
    {
      district: "SHIMOGA",
      crimes: 5599,
    },
    {
      district: "TUMKUR",
      crimes: 4945,
    },
    {
      district: "UDUPI",
      crimes: 2406,
    },
    {
      district: "UTTAR KANNADA",
      crimes: 2603,
    },
    {
      district: "TOTAL",
      crimes: 134042,
    },
    {
      district: "ALAPUZHA",
      crimes: 7654,
    },
    {
      district: "ERNAKULAM COMMR.",
      crimes: 8758,
    },
    {
      district: "ERNAKULAM RURAL",
      crimes: 12350,
    },
    {
      district: "IDUKKI",
      crimes: 5150,
    },
    {
      district: "KANNUR",
      crimes: 6839,
    },
    {
      district: "KASARGOD",
      crimes: 3567,
    },
    {
      district: "KOLLAM",
      crimes: 9372,
    },
    {
      district: "KOTTAYAM",
      crimes: 7848,
    },
    {
      district: "KOZHIKODE COMMR.",
      crimes: 4005,
    },
    {
      district: "KOZHIKODE RURAL",
      crimes: 5483,
    },
    {
      district: "MALAPPURAM",
      crimes: 6994,
    },
    {
      district: "PALAKKAD",
      crimes: 8024,
    },
    {
      district: "PATHANAMTHITTA",
      crimes: 5419,
    },
    {
      district: "RAILWAYS",
      crimes: 269,
    },
    {
      district: "THRISSUR",
      crimes: 10131,
    },
    {
      district: "TRIVANDRUM COMMR.",
      crimes: 5906,
    },
    {
      district: "TRIVANDRUM RURAL",
      crimes: 8308,
    },
    {
      district: "WAYANADU",
      crimes: 2292,
    },
    {
      district: "TOTAL",
      crimes: 118369,
    },
    {
      district: "ALIRAJPUR",
      crimes: 1277,
    },
    {
      district: "ANUPPUR",
      crimes: 1327,
    },
    {
      district: "ASHOK NAGAR",
      crimes: 2054,
    },
    {
      district: "BALAGHAT",
      crimes: 2388,
    },
    {
      district: "BARWANI",
      crimes: 1749,
    },
    {
      district: "BETUL",
      crimes: 3174,
    },
    {
      district: "BHIND",
      crimes: 3674,
    },
    {
      district: "BHOPAL",
      crimes: 15440,
    },
    {
      district: "BHOPAL RLY.",
      crimes: 1359,
    },
    {
      district: "BURHANPUR",
      crimes: 1175,
    },
    {
      district: "CHHATARPUR",
      crimes: 5047,
    },
    {
      district: "CHHINDWARA",
      crimes: 5172,
    },
    {
      district: "DAMOH",
      crimes: 3130,
    },
    {
      district: "DATIYA",
      crimes: 2615,
    },
    {
      district: "DEWAS",
      crimes: 4790,
    },
    {
      district: "DHAR",
      crimes: 5816,
    },
    {
      district: "DINDORI",
      crimes: 907,
    },
    {
      district: "GUNA",
      crimes: 3133,
    },
    {
      district: "GWALIOR",
      crimes: 10029,
    },
    {
      district: "HARDA",
      crimes: 1379,
    },
    {
      district: "HOSHANGABAD",
      crimes: 3562,
    },
    {
      district: "INDORE",
      crimes: 18306,
    },
    {
      district: "INDORE RLY.",
      crimes: 304,
    },
    {
      district: "JABALPUR",
      crimes: 9990,
    },
    {
      district: "JABALPUR RLY.",
      crimes: 529,
    },
    {
      district: "JHABUA",
      crimes: 1589,
    },
    {
      district: "KATNI",
      crimes: 3038,
    },
    {
      district: "KHANDWA",
      crimes: 3158,
    },
    {
      district: "KHARGON",
      crimes: 4079,
    },
    {
      district: "MANDLA",
      crimes: 1654,
    },
    {
      district: "MANDSAUR",
      crimes: 3445,
    },
    {
      district: "MORENA",
      crimes: 4880,
    },
    {
      district: "NARSINGHPUR",
      crimes: 2689,
    },
    {
      district: "NEEMUCH",
      crimes: 2040,
    },
    {
      district: "PANNA",
      crimes: 1682,
    },
    {
      district: "RAISEN",
      crimes: 3901,
    },
    {
      district: "RAJGARH",
      crimes: 4429,
    },
    {
      district: "RATLAM",
      crimes: 3637,
    },
    {
      district: "REWA",
      crimes: 5158,
    },
    {
      district: "SAGAR",
      crimes: 8592,
    },
    {
      district: "SATNA",
      crimes: 5704,
    },
    {
      district: "SEONI",
      crimes: 2698,
    },
    {
      district: "SHAHDOL",
      crimes: 2843,
    },
    {
      district: "SHAJAPUR",
      crimes: 3675,
    },
    {
      district: "SHEOPUR",
      crimes: 1277,
    },
    {
      district: "SHIVPURI",
      crimes: 4094,
    },
    {
      district: "SIDHI",
      crimes: 2184,
    },
    {
      district: "SIHORE",
      crimes: 3337,
    },
    {
      district: "SINGRAULI",
      crimes: 2039,
    },
    {
      district: "TIKAMGARH",
      crimes: 3330,
    },
    {
      district: "UJJAIN",
      crimes: 8706,
    },
    {
      district: "UMARIYA",
      crimes: 1200,
    },
    {
      district: "VIDISHA",
      crimes: 4378,
    },
    {
      district: "TOTAL",
      crimes: 207762,
    },
    {
      district: "AHMEDNAGAR",
      crimes: 6530,
    },
    {
      district: "AKOLA",
      crimes: 4227,
    },
    {
      district: "AMRAVATI COMMR.",
      crimes: 2629,
    },
    {
      district: "AMRAVATI RURAL",
      crimes: 4209,
    },
    {
      district: "AURANGABAD COMMR.",
      crimes: 3727,
    },
    {
      district: "AURANGABAD RURAL",
      crimes: 2934,
    },
    {
      district: "BEED",
      crimes: 4338,
    },
    {
      district: "BHANDARA",
      crimes: 2259,
    },
    {
      district: "BULDHANA",
      crimes: 4260,
    },
    {
      district: "CHANDRAPUR",
      crimes: 4483,
    },
    {
      district: "DHULE",
      crimes: 2662,
    },
    {
      district: "GADCHIROLI",
      crimes: 1188,
    },
    {
      district: "GONDIA",
      crimes: 1911,
    },
    {
      district: "HINGOLI",
      crimes: 1667,
    },
    {
      district: "JALGAON",
      crimes: 4737,
    },
    {
      district: "JALNA",
      crimes: 2939,
    },
    {
      district: "KOLHAPUR",
      crimes: 3917,
    },
    {
      district: "LATUR",
      crimes: 3407,
    },
    {
      district: "MUMBAI COMMR.",
      crimes: 31262,
    },
    {
      district: "MUMBAI RLY.",
      crimes: 2347,
    },
    {
      district: "NAGPUR COMMR.",
      crimes: 7785,
    },
    {
      district: "NAGPUR RLY.",
      crimes: 1160,
    },
    {
      district: "NAGPUR RURAL",
      crimes: 3983,
    },
    {
      district: "NANDED",
      crimes: 4991,
    },
    {
      district: "NANDURBAR",
      crimes: 1356,
    },
    {
      district: "NASIK COMMR.",
      crimes: 4218,
    },
    {
      district: "NASIK RURAL",
      crimes: 4840,
    },
    {
      district: "NAVI MUMBAI",
      crimes: 4876,
    },
    {
      district: "OSMANABAD",
      crimes: 2692,
    },
    {
      district: "PARBHANI",
      crimes: 2708,
    },
    {
      district: "PUNE COMMR.",
      crimes: 13848,
    },
    {
      district: "PUNE RLY.",
      crimes: 541,
    },
    {
      district: "PUNE RURAL",
      crimes: 7537,
    },
    {
      district: "RAIGAD",
      crimes: 2053,
    },
    {
      district: "RATNAGIRI",
      crimes: 1477,
    },
    {
      district: "SANGLI",
      crimes: 2777,
    },
    {
      district: "SATARA",
      crimes: 4350,
    },
    {
      district: "SINDHUDURG",
      crimes: 872,
    },
    {
      district: "SOLAPUR COMMR.",
      crimes: 1465,
    },
    {
      district: "SOLAPUR RURAL",
      crimes: 4634,
    },
    {
      district: "THANE COMMR.",
      crimes: 9570,
    },
    {
      district: "THANE RURAL",
      crimes: 5420,
    },
    {
      district: "WARDHA",
      crimes: 4041,
    },
    {
      district: "WASHIM",
      crimes: 2121,
    },
    {
      district: "YAVATMAL",
      crimes: 4650,
    },
    {
      district: "TOTAL",
      crimes: 199598,
    },
    {
      district: "BISHNUPUR",
      crimes: 268,
    },
    {
      district: "CHANDEL",
      crimes: 80,
    },
    {
      district: "CHURACHANDPUR",
      crimes: 88,
    },
    {
      district: "CID",
      crimes: 1,
    },
    {
      district: "IMPHAL EAST",
      crimes: 615,
    },
    {
      district: "IMPHAL WEST",
      crimes: 1071,
    },
    {
      district: "SENAPATI",
      crimes: 139,
    },
    {
      district: "TAMENGLONG",
      crimes: 35,
    },
    {
      district: "THOUBAL",
      crimes: 486,
    },
    {
      district: "UKHRUL",
      crimes: 69,
    },
    {
      district: "TOTAL",
      crimes: 2852,
    },
    {
      district: "GARO HILLS EAST",
      crimes: 167,
    },
    {
      district: "GARO HILLS SOUTH",
      crimes: 49,
    },
    {
      district: "GARO HILLS WEST",
      crimes: 591,
    },
    {
      district: "JAINTIA HILLS",
      crimes: 383,
    },
    {
      district: "KHASI HILLS EAST",
      crimes: 804,
    },
    {
      district: "KHASI HILLS WEST",
      crimes: 214,
    },
    {
      district: "RI-BHOI",
      crimes: 240,
    },
    {
      district: "TOTAL",
      crimes: 2448,
    },
    {
      district: "AIZAWL",
      crimes: 1048,
    },
    {
      district: "CHAMPHAI",
      crimes: 170,
    },
    {
      district: "KOLASIB",
      crimes: 207,
    },
    {
      district: "LAWNGTLAI",
      crimes: 154,
    },
    {
      district: "LUNGLEI",
      crimes: 200,
    },
    {
      district: "MAMIT",
      crimes: 104,
    },
    {
      district: "SAIHA",
      crimes: 83,
    },
    {
      district: "SERCHHIP",
      crimes: 81,
    },
    {
      district: "TOTAL",
      crimes: 2047,
    },
    {
      district: "DIMAPUR",
      crimes: 536,
    },
    {
      district: "KIPHIRE",
      crimes: 11,
    },
    {
      district: "KOHIMA",
      crimes: 178,
    },
    {
      district: "LONGLENG",
      crimes: 19,
    },
    {
      district: "MOKOKCHUNG",
      crimes: 57,
    },
    {
      district: "MON",
      crimes: 51,
    },
    {
      district: "PEREN",
      crimes: 37,
    },
    {
      district: "PHEK",
      crimes: 42,
    },
    {
      district: "TUENSANG",
      crimes: 28,
    },
    {
      district: "WOKHA",
      crimes: 58,
    },
    {
      district: "ZUNHEBOTO",
      crimes: 42,
    },
    {
      district: "TOTAL",
      crimes: 1059,
    },
    {
      district: "ANGUL",
      crimes: 2881,
    },
    {
      district: "BALASORE",
      crimes: 3405,
    },
    {
      district: "BARAGARH",
      crimes: 1402,
    },
    {
      district: "BERHAMPUR",
      crimes: 1072,
    },
    {
      district: "BHADRAK",
      crimes: 2139,
    },
    {
      district: "BOLANGIR",
      crimes: 2093,
    },
    {
      district: "BOUDH",
      crimes: 332,
    },
    {
      district: "CUTTACK",
      crimes: 2377,
    },
    {
      district: "DCP BBSR",
      crimes: 4065,
    },
    {
      district: "DCP CTC",
      crimes: 2192,
    },
    {
      district: "DEOGARH",
      crimes: 548,
    },
    {
      district: "DHENKANAL",
      crimes: 1689,
    },
    {
      district: "GAJAPATI",
      crimes: 464,
    },
    {
      district: "GANJAM",
      crimes: 1785,
    },
    {
      district: "JAGATSINGHPUR",
      crimes: 1478,
    },
    {
      district: "JAJPUR",
      crimes: 2252,
    },
    {
      district: "JHARSUGUDA",
      crimes: 1285,
    },
    {
      district: "KALAHANDI",
      crimes: 1323,
    },
    {
      district: "KANDHAMAL",
      crimes: 828,
    },
    {
      district: "KENDRAPARA",
      crimes: 1318,
    },
    {
      district: "KEONJHAR",
      crimes: 2544,
    },
    {
      district: "KHURDA",
      crimes: 1506,
    },
    {
      district: "KORAPUT",
      crimes: 1271,
    },
    {
      district: "MALKANGIR",
      crimes: 324,
    },
    {
      district: "MAYURBHANJ",
      crimes: 2262,
    },
    {
      district: "NAYAGARH",
      crimes: 1092,
    },
    {
      district: "NOWRANGPUR",
      crimes: 853,
    },
    {
      district: "NUAPADA",
      crimes: 700,
    },
    {
      district: "PURI",
      crimes: 2756,
    },
    {
      district: "RAYAGADA",
      crimes: 751,
    },
    {
      district: "ROURKELA",
      crimes: 1806,
    },
    {
      district: "SAMBALPUR",
      crimes: 2259,
    },
    {
      district: "SONEPUR",
      crimes: 504,
    },
    {
      district: "SRP(CUTTACK)",
      crimes: 564,
    },
    {
      district: "SRP(ROURKELA)",
      crimes: 424,
    },
    {
      district: "SUNDARGARH",
      crimes: 1196,
    },
    {
      district: "TOTAL",
      crimes: 55740,
    },
    {
      district: "AMRITSAR",
      crimes: 2157,
    },
    {
      district: "AMRITSAR RURAL",
      crimes: 738,
    },
    {
      district: "BARNALA",
      crimes: 637,
    },
    {
      district: "BATALA",
      crimes: 861,
    },
    {
      district: "BHATINDA",
      crimes: 2187,
    },
    {
      district: "FARIDKOT",
      crimes: 782,
    },
    {
      district: "FATEHGARH SAHIB",
      crimes: 979,
    },
    {
      district: "FEROZPUR",
      crimes: 1905,
    },
    {
      district: "G.R.P",
      crimes: 468,
    },
    {
      district: "GURDASPUR",
      crimes: 1077,
    },
    {
      district: "HOSHIARPUR",
      crimes: 1706,
    },
    {
      district: "JALANDHAR",
      crimes: 3799,
    },
    {
      district: "KAPURTHALA",
      crimes: 1168,
    },
    {
      district: "KHANNA",
      crimes: 982,
    },
    {
      district: "LUDHIANA",
      crimes: 3122,
    },
    {
      district: "LUDHIANA RURAL",
      crimes: 991,
    },
    {
      district: "MANSA",
      crimes: 799,
    },
    {
      district: "MOGA",
      crimes: 1201,
    },
    {
      district: "MUKTSAR",
      crimes: 817,
    },
    {
      district: "PATIALA",
      crimes: 2940,
    },
    {
      district: "ROPAR",
      crimes: 884,
    },
    {
      district: "SANGRUR",
      crimes: 1769,
    },
    {
      district: "SAS NGR",
      crimes: 1852,
    },
    {
      district: "SBS NAGAR",
      crimes: 861,
    },
    {
      district: "TARN TARAN",
      crimes: 863,
    },
    {
      district: "TOTAL",
      crimes: 35545,
    },
    {
      district: "AJMER",
      crimes: 6275,
    },
    {
      district: "ALWAR",
      crimes: 10092,
    },
    {
      district: "BANSWARA",
      crimes: 2286,
    },
    {
      district: "BARAN",
      crimes: 3376,
    },
    {
      district: "BARMER",
      crimes: 3110,
    },
    {
      district: "BHARATPUR",
      crimes: 8394,
    },
    {
      district: "BHILWARA",
      crimes: 5485,
    },
    {
      district: "BIKANER",
      crimes: 3883,
    },
    {
      district: "BUNDI",
      crimes: 3665,
    },
    {
      district: "CHITTORGARH",
      crimes: 4754,
    },
    {
      district: "CHURU",
      crimes: 3165,
    },
    {
      district: "DAUSA",
      crimes: 5092,
    },
    {
      district: "DHOLPUR",
      crimes: 4174,
    },
    {
      district: "DUNGARPUR",
      crimes: 1895,
    },
    {
      district: "G.R.P.",
      crimes: 928,
    },
    {
      district: "GANGANAGAR",
      crimes: 5557,
    },
    {
      district: "HANUMANGARH",
      crimes: 3721,
    },
    {
      district: "JAIPUR EAST",
      crimes: 6762,
    },
    {
      district: "JAIPUR NORTH",
      crimes: 3905,
    },
    {
      district: "JAIPUR RURAL",
      crimes: 9052,
    },
    {
      district: "JAIPUR SOUTH",
      crimes: 6121,
    },
    {
      district: "JAISALMER",
      crimes: 1037,
    },
    {
      district: "JALORE",
      crimes: 2684,
    },
    {
      district: "JHALAWAR",
      crimes: 4345,
    },
    {
      district: "JHUNJHUNU",
      crimes: 4237,
    },
    {
      district: "JODHPUR CITY",
      crimes: 3705,
    },
    {
      district: "JODHPUR RURAL",
      crimes: 2906,
    },
    {
      district: "KARAULI",
      crimes: 4112,
    },
    {
      district: "KOTA CITY",
      crimes: 4245,
    },
    {
      district: "KOTA RURAL",
      crimes: 2354,
    },
    {
      district: "NAGAUR",
      crimes: 4231,
    },
    {
      district: "PALI",
      crimes: 5255,
    },
    {
      district: "PRATAPGARH",
      crimes: 1718,
    },
    {
      district: "RAJSAMAND",
      crimes: 2457,
    },
    {
      district: "SAWAI MADHOPUR",
      crimes: 3406,
    },
    {
      district: "SIKAR",
      crimes: 5138,
    },
    {
      district: "SIROHI",
      crimes: 2033,
    },
    {
      district: "TONK",
      crimes: 3543,
    },
    {
      district: "UDAIPUR",
      crimes: 7467,
    },
    {
      district: "TOTAL",
      crimes: 166565,
    },
    {
      district: "EAST",
      crimes: 289,
    },
    {
      district: "NORTH",
      crimes: 38,
    },
    {
      district: "SOUTH",
      crimes: 234,
    },
    {
      district: "WEST",
      crimes: 108,
    },
    {
      district: "TOTAL",
      crimes: 669,
    },
    {
      district: "ARIYALUR",
      crimes: 2055,
    },
    {
      district: "CHENNAI",
      crimes: 10905,
    },
    {
      district: "CHENNAI RLY.",
      crimes: 490,
    },
    {
      district: "CHENNAISUBURBAN",
      crimes: 7277,
    },
    {
      district: "COIMBATORE RURAL",
      crimes: 4667,
    },
    {
      district: "COIMBATORE URBAN",
      crimes: 4318,
    },
    {
      district: "CUDDALORE",
      crimes: 6622,
    },
    {
      district: "DHARMAPURI",
      crimes: 3875,
    },
    {
      district: "DINDIGUL",
      crimes: 4869,
    },
    {
      district: "ERODE",
      crimes: 5670,
    },
    {
      district: "KANCHIPURAM",
      crimes: 5615,
    },
    {
      district: "KANYAKUMARI",
      crimes: 4868,
    },
    {
      district: "KARUR",
      crimes: 2358,
    },
    {
      district: "KRISHNAGIRI",
      crimes: 4514,
    },
    {
      district: "MADURAI RURAL",
      crimes: 5152,
    },
    {
      district: "MADURAI URBAN",
      crimes: 3000,
    },
    {
      district: "NAGAPATTINAM",
      crimes: 3976,
    },
    {
      district: "NAMAKKAL",
      crimes: 4410,
    },
    {
      district: "NILGIRIS",
      crimes: 1096,
    },
    {
      district: "PERAMBALUR",
      crimes: 1520,
    },
    {
      district: "PUDUKOTTAI",
      crimes: 3048,
    },
    {
      district: "RAMNATHAPURAM",
      crimes: 3401,
    },
    {
      district: "SALEM RURAL",
      crimes: 5781,
    },
    {
      district: "SALEM URBAN",
      crimes: 2404,
    },
    {
      district: "SIVAGANGAI",
      crimes: 2534,
    },
    {
      district: "THANJAVUR",
      crimes: 7408,
    },
    {
      district: "THENI",
      crimes: 5214,
    },
    {
      district: "THIRUNELVELI RURAL",
      crimes: 7740,
    },
    {
      district: "THIRUNELVELI URBAN",
      crimes: 1811,
    },
    {
      district: "THIRUVALLUR",
      crimes: 4067,
    },
    {
      district: "THIRUVANNAMALAI",
      crimes: 4067,
    },
    {
      district: "THIRUVARUR",
      crimes: 3180,
    },
    {
      district: "THOOTHUGUDI",
      crimes: 5436,
    },
    {
      district: "TIRUPPUR",
      crimes: 5208,
    },
    {
      district: "TRICHY RLY.",
      crimes: 170,
    },
    {
      district: "TRICHY RURAL",
      crimes: 3911,
    },
    {
      district: "TRICHY URBAN",
      crimes: 3593,
    },
    {
      district: "VELLORE",
      crimes: 6862,
    },
    {
      district: "VILLUPURAM",
      crimes: 7171,
    },
    {
      district: "VIRUDHUNAGAR",
      crimes: 4428,
    },
    {
      district: "TOTAL",
      crimes: 174691,
    },
    {
      district: "DHALAI",
      crimes: 420,
    },
    {
      district: "NORTH",
      crimes: 1016,
    },
    {
      district: "SOUTH",
      crimes: 1489,
    },
    {
      district: "WEST",
      crimes: 2561,
    },
    {
      district: "TOTAL",
      crimes: 5486,
    },
    {
      district: "AGRA",
      crimes: 6704,
    },
    {
      district: "ALIGARH",
      crimes: 5733,
    },
    {
      district: "ALLAHABAD",
      crimes: 5175,
    },
    {
      district: "AMBEDKAR NAGAR",
      crimes: 1056,
    },
    {
      district: "AURAIYA",
      crimes: 1008,
    },
    {
      district: "AZAMGARH",
      crimes: 1752,
    },
    {
      district: "BADAUN",
      crimes: 2548,
    },
    {
      district: "BAGHPAT",
      crimes: 1438,
    },
    {
      district: "BAHRAICH",
      crimes: 1879,
    },
    {
      district: "BALLIA",
      crimes: 928,
    },
    {
      district: "BALRAMPUR",
      crimes: 415,
    },
    {
      district: "BANDA",
      crimes: 1434,
    },
    {
      district: "BARABANKI",
      crimes: 2862,
    },
    {
      district: "BAREILLY",
      crimes: 4728,
    },
    {
      district: "BASTI",
      crimes: 907,
    },
    {
      district: "BIJNOR",
      crimes: 2647,
    },
    {
      district: "BULANDSHAHAR",
      crimes: 2595,
    },
    {
      district: "CHANDOLI",
      crimes: 814,
    },
    {
      district: "CHITRAKOOT DHAM",
      crimes: 460,
    },
    {
      district: "DEORIA",
      crimes: 1067,
    },
    {
      district: "ETAH",
      crimes: 2078,
    },
    {
      district: "ETAWAH",
      crimes: 2472,
    },
    {
      district: "FAIZABAD",
      crimes: 1787,
    },
    {
      district: "FATEHGARH",
      crimes: 1267,
    },
    {
      district: "FATEHPUR",
      crimes: 1621,
    },
    {
      district: "FIROZABAD",
      crimes: 3051,
    },
    {
      district: "G.R.P.",
      crimes: 2248,
    },
    {
      district: "GAUTAMBUDH NAGAR",
      crimes: 4707,
    },
    {
      district: "GHAZIABAD",
      crimes: 11821,
    },
    {
      district: "GHAZIPUR",
      crimes: 960,
    },
    {
      district: "GONDA",
      crimes: 1746,
    },
    {
      district: "GORAKHPUR",
      crimes: 3906,
    },
    {
      district: "HAMIRPUR",
      crimes: 472,
    },
    {
      district: "HARDOI",
      crimes: 2699,
    },
    {
      district: "HATHRAS",
      crimes: 1663,
    },
    {
      district: "J.P.NAGAR",
      crimes: 1147,
    },
    {
      district: "JALAUN",
      crimes: 1116,
    },
    {
      district: "JAUNPUR",
      crimes: 2130,
    },
    {
      district: "JHANSI",
      crimes: 1144,
    },
    {
      district: "KANNAUJ",
      crimes: 1178,
    },
    {
      district: "KANPUR DEHAT",
      crimes: 1790,
    },
    {
      district: "KANPUR NAGAR",
      crimes: 6812,
    },
    {
      district: "KANSHIRAM NAGAR",
      crimes: 954,
    },
    {
      district: "KAUSHAMBI",
      crimes: 1320,
    },
    {
      district: "KHIRI",
      crimes: 2359,
    },
    {
      district: "KUSHI NAGAR",
      crimes: 1044,
    },
    {
      district: "LALITPUR",
      crimes: 613,
    },
    {
      district: "LUCKNOW",
      crimes: 12424,
    },
    {
      district: "MAHARAJGANJ",
      crimes: 832,
    },
    {
      district: "MAHOBA",
      crimes: 558,
    },
    {
      district: "MAINPURI",
      crimes: 1776,
    },
    {
      district: "MATHURA",
      crimes: 3994,
    },
    {
      district: "MAU",
      crimes: 1024,
    },
    {
      district: "MEERUT",
      crimes: 5375,
    },
    {
      district: "MIRZAPUR",
      crimes: 1196,
    },
    {
      district: "MORADABAD",
      crimes: 4008,
    },
    {
      district: "MUZAFFARNAGAR",
      crimes: 4117,
    },
    {
      district: "PILIBHIT",
      crimes: 1834,
    },
    {
      district: "PRATAPGARH",
      crimes: 1963,
    },
    {
      district: "RAIBAREILLY",
      crimes: 2174,
    },
    {
      district: "RAMPUR",
      crimes: 2434,
    },
    {
      district: "SAHARANPUR",
      crimes: 2421,
    },
    {
      district: "SANT KABIRNAGAR",
      crimes: 964,
    },
    {
      district: "SHAHJAHANPUR",
      crimes: 2431,
    },
    {
      district: "SHRAWASTI",
      crimes: 616,
    },
    {
      district: "SIDHARTHNAGAR",
      crimes: 700,
    },
    {
      district: "SITAPUR",
      crimes: 3172,
    },
    {
      district: "SONBHADRA",
      crimes: 962,
    },
    {
      district: "ST.RAVIDASNAGAR",
      crimes: 441,
    },
    {
      district: "SULTANPUR",
      crimes: 2283,
    },
    {
      district: "UNNAO",
      crimes: 1782,
    },
    {
      district: "VARANASI",
      crimes: 3148,
    },
    {
      district: "TOTAL",
      crimes: 172884,
    },
    {
      district: "ALMORA",
      crimes: 246,
    },
    {
      district: "BAGESHWAR",
      crimes: 69,
    },
    {
      district: "CHAMOLI",
      crimes: 112,
    },
    {
      district: "CHAMPAWAT",
      crimes: 82,
    },
    {
      district: "DEHRADUN",
      crimes: 2425,
    },
    {
      district: "HARIDWAR",
      crimes: 2268,
    },
    {
      district: "NAINITAL",
      crimes: 928,
    },
    {
      district: "PAURI GARHWAL",
      crimes: 225,
    },
    {
      district: "PITHORAGARH",
      crimes: 150,
    },
    {
      district: "RUDRA PRAYAG",
      crimes: 59,
    },
    {
      district: "TEHRI GARHWAL",
      crimes: 114,
    },
    {
      district: "UDHAMSINGH NAGAR",
      crimes: 2023,
    },
    {
      district: "UTTARKASHI",
      crimes: 101,
    },
    {
      district: "TOTAL",
      crimes: 8802,
    },
    {
      district: "24 PARGANAS NORTH",
      crimes: 13046,
    },
    {
      district: "24 PARGANAS SOUTH",
      crimes: 13624,
    },
    {
      district: "ASANSOL",
      crimes: 1361,
    },
    {
      district: "BANKURA",
      crimes: 1586,
    },
    {
      district: "BIRBHUM",
      crimes: 2702,
    },
    {
      district: "BURDWAN",
      crimes: 5556,
    },
    {
      district: "COOCHBEHAR",
      crimes: 3465,
    },
    {
      district: "DAKSHIN DINAJPUR",
      crimes: 1602,
    },
    {
      district: "DARJEELING",
      crimes: 2629,
    },
    {
      district: "HOOGHLY",
      crimes: 4064,
    },
    {
      district: "HOWRAH",
      crimes: 5500,
    },
    {
      district: "HOWRAH G.R.P.",
      crimes: 455,
    },
    {
      district: "JALPAIGURI",
      crimes: 6445,
    },
    {
      district: "KHARAGPUR G.R.P.",
      crimes: 161,
    },
    {
      district: "KOLKATA",
      crimes: 13615,
    },
    {
      district: "MALDA",
      crimes: 3927,
    },
    {
      district: "MURSHIDABAD",
      crimes: 12308,
    },
    {
      district: "NADIA",
      crimes: 8706,
    },
    {
      district: "PASCHIM MIDNAPUR",
      crimes: 3717,
    },
    {
      district: "PURAB MIDNAPUR",
      crimes: 3649,
    },
    {
      district: "PURULIA",
      crimes: 1506,
    },
    {
      district: "SEALDAH G.R.P.",
      crimes: 373,
    },
    {
      district: "SILIGURI G.R.P.",
      crimes: 116,
    },
    {
      district: "UTTAR DINAJPUR",
      crimes: 2923,
    },
    {
      district: "TOTAL",
      crimes: 113036,
    },
    {
      district: "ANDAMAN",
      crimes: 921,
    },
    {
      district: "NICOBAR",
      crimes: 20,
    },
    {
      district: "TOTAL",
      crimes: 941,
    },
    {
      district: "CHANDIGARH",
      crimes: 3555,
    },
    {
      district: "TOTAL",
      crimes: 3555,
    },
    {
      district: "D and N HAVELI",
      crimes: 442,
    },
    {
      district: "TOTAL",
      crimes: 442,
    },
    {
      district: "DAMAN",
      crimes: 208,
    },
    {
      district: "DIU",
      crimes: 68,
    },
    {
      district: "TOTAL",
      crimes: 276,
    },
    {
      district: "CAW",
      crimes: 194,
    },
    {
      district: "CENTRAL",
      crimes: 2833,
    },
    {
      district: "CRIME BRANCH",
      crimes: 91,
    },
    {
      district: "DELHI UT TOTAL",
      crimes: 50251,
    },
    {
      district: "EAST",
      crimes: 6379,
    },
    {
      district: "EOW",
      crimes: 190,
    },
    {
      district: "GRP(RLY)",
      crimes: 864,
    },
    {
      district: "IGI AIRPORT",
      crimes: 569,
    },
    {
      district: "NEW DELHI",
      crimes: 1492,
    },
    {
      district: "NORTH",
      crimes: 2908,
    },
    {
      district: "NORTH-EAST",
      crimes: 4720,
    },
    {
      district: "NORTH-WEST",
      crimes: 4676,
    },
    {
      district: "OUTER",
      crimes: 4969,
    },
    {
      district: "SOUTH",
      crimes: 5353,
    },
    {
      district: "SOUTH-EAST",
      crimes: 6267,
    },
    {
      district: "SOUTH-WEST",
      crimes: 3610,
    },
    {
      district: "STF",
      crimes: 25,
    },
    {
      district: "WEST",
      crimes: 5111,
    },
    {
      district: "LAKSHADWEEP",
      crimes: 134,
    },
    {
      district: "TOTAL",
      crimes: 134,
    },
    {
      district: "KARAIKAL",
      crimes: 724,
    },
    {
      district: "PUDUCHERRY",
      crimes: 3867,
    },
    {
      district: "TOTAL",
      crimes: 4591,
    },
    {
      district: "ADILABAD",
      crimes: 4955,
    },
    {
      district: "ANANTAPUR",
      crimes: 5854,
    },
    {
      district: "CHITTOOR",
      crimes: 5218,
    },
    {
      district: "CUDDAPAH",
      crimes: 5694,
    },
    {
      district: "CYBERABAD",
      crimes: 16348,
    },
    {
      district: "EAST GODAVARI",
      crimes: 6349,
    },
    {
      district: "GUNTAKAL RLY.",
      crimes: 287,
    },
    {
      district: "GUNTUR",
      crimes: 6512,
    },
    {
      district: "GUNTUR URBAN",
      crimes: 3208,
    },
    {
      district: "HYDERABAD CITY",
      crimes: 17549,
    },
    {
      district: "KARIMNAGAR",
      crimes: 8320,
    },
    {
      district: "KHAMMAM",
      crimes: 5571,
    },
    {
      district: "KRISHNA",
      crimes: 5819,
    },
    {
      district: "KURNOOL",
      crimes: 7258,
    },
    {
      district: "MAHABOOBNAGAR",
      crimes: 6704,
    },
    {
      district: "MEDAK",
      crimes: 5269,
    },
    {
      district: "NALGONDA",
      crimes: 7736,
    },
    {
      district: "NELLORE",
      crimes: 5779,
    },
    {
      district: "NIZAMABAD",
      crimes: 5815,
    },
    {
      district: "PRAKASHAM",
      crimes: 5442,
    },
    {
      district: "RAJAHMUNDRY",
      crimes: 2022,
    },
    {
      district: "RANGA REDDY",
      crimes: 1676,
    },
    {
      district: "SECUNDERABAD RLY.",
      crimes: 462,
    },
    {
      district: "SRIKAKULAM",
      crimes: 4910,
    },
    {
      district: "TIRUPATHI URBAN",
      crimes: 2607,
    },
    {
      district: "VIJAYAWADA CITY",
      crimes: 5833,
    },
    {
      district: "VIJAYAWADA RLY.",
      crimes: 449,
    },
    {
      district: "VISAKHA RURAL",
      crimes: 3312,
    },
    {
      district: "VISAKHAPATNAM",
      crimes: 7112,
    },
    {
      district: "VIZIANAGARAM",
      crimes: 3862,
    },
    {
      district: "WARANGAL",
      crimes: 2717,
    },
    {
      district: "WARANGAL URBAN",
      crimes: 2516,
    },
    {
      district: "WEST GODAVARI",
      crimes: 8273,
    },
    {
      district: "TOTAL",
      crimes: 181438,
    },
    {
      district: "ANJAW",
      crimes: 29,
    },
    {
      district: "CHANGLANG",
      crimes: 249,
    },
    {
      district: "DIBANG VALLEY",
      crimes: 119,
    },
    {
      district: "K/KUMEY",
      crimes: 54,
    },
    {
      district: "KAMENG EAST",
      crimes: 141,
    },
    {
      district: "KAMENG WEST",
      crimes: 131,
    },
    {
      district: "LOHIT",
      crimes: 176,
    },
    {
      district: "PAPUM PARE",
      crimes: 444,
    },
    {
      district: "RURAL",
      crimes: 95,
    },
    {
      district: "SIANG EAST",
      crimes: 240,
    },
    {
      district: "SIANG UPPER",
      crimes: 53,
    },
    {
      district: "SIANG WEST",
      crimes: 237,
    },
    {
      district: "SUBANSIRI LOWER",
      crimes: 113,
    },
    {
      district: "SUBANSIRI UPPER",
      crimes: 164,
    },
    {
      district: "TAWANG",
      crimes: 40,
    },
    {
      district: "TIRAP",
      crimes: 140,
    },
    {
      district: "UPPER DIBANG VALLEY",
      crimes: 14,
    },
    {
      district: "TOTAL",
      crimes: 2439,
    },
    {
      district: "BARPETA",
      crimes: 3030,
    },
    {
      district: "BASKA",
      crimes: 615,
    },
    {
      district: "BONGAIGAON",
      crimes: 1407,
    },
    {
      district: "C.I.D.",
      crimes: 51,
    },
    {
      district: "CACHAR",
      crimes: 4505,
    },
    {
      district: "CHIRANG",
      crimes: 612,
    },
    {
      district: "DARRANG",
      crimes: 2598,
    },
    {
      district: "DHEMAJI",
      crimes: 1091,
    },
    {
      district: "DHUBRI",
      crimes: 4289,
    },
    {
      district: "DIBRUGARH",
      crimes: 2406,
    },
    {
      district: "G.R.P.",
      crimes: 291,
    },
    {
      district: "GOALPARA",
      crimes: 2290,
    },
    {
      district: "GOLAGHAT",
      crimes: 1503,
    },
    {
      district: "GUWAHATI CITY",
      crimes: 9219,
    },
    {
      district: "HAILAKANDI",
      crimes: 1458,
    },
    {
      district: "JORHAT",
      crimes: 1763,
    },
    {
      district: "KAMRUP",
      crimes: 2341,
    },
    {
      district: "KARBI ANGLONG",
      crimes: 650,
    },
    {
      district: "KARIMGANJ",
      crimes: 1382,
    },
    {
      district: "KOKRAJHAR",
      crimes: 1016,
    },
    {
      district: "LAKHIMPUR",
      crimes: 1876,
    },
    {
      district: "MORIGAON",
      crimes: 1320,
    },
    {
      district: "N.C.HILLS",
      crimes: 191,
    },
    {
      district: "NAGAON",
      crimes: 5699,
    },
    {
      district: "NALBARI",
      crimes: 1374,
    },
    {
      district: "R.P.O.",
      crimes: 117,
    },
    {
      district: "SIBSAGAR",
      crimes: 2285,
    },
    {
      district: "SONITPUR",
      crimes: 3129,
    },
    {
      district: "TINSUKIA",
      crimes: 2295,
    },
    {
      district: "UDALGURI",
      crimes: 865,
    },
    {
      district: "TOTAL",
      crimes: 61668,
    },
    {
      district: "ARARIA",
      crimes: 2421,
    },
    {
      district: "ARWAL",
      crimes: 770,
    },
    {
      district: "AURANGABAD",
      crimes: 3015,
    },
    {
      district: "BAGAHA",
      crimes: 1543,
    },
    {
      district: "BANKA",
      crimes: 1816,
    },
    {
      district: "BEGUSARAI",
      crimes: 4025,
    },
    {
      district: "BETTIAH",
      crimes: 3755,
    },
    {
      district: "BHABHUA",
      crimes: 1883,
    },
    {
      district: "BHAGALPUR",
      crimes: 3220,
    },
    {
      district: "BHOJPUR",
      crimes: 3969,
    },
    {
      district: "BUXAR",
      crimes: 2180,
    },
    {
      district: "DARBHANGA",
      crimes: 4308,
    },
    {
      district: "GAYA",
      crimes: 4706,
    },
    {
      district: "GOPALGANJ",
      crimes: 2779,
    },
    {
      district: "JAMALPUR RLY.",
      crimes: 246,
    },
    {
      district: "JAMUI",
      crimes: 1880,
    },
    {
      district: "JEHANABAD",
      crimes: 1832,
    },
    {
      district: "KATIHAR",
      crimes: 2488,
    },
    {
      district: "KATIHAR RLY.",
      crimes: 419,
    },
    {
      district: "KHAGARIA",
      crimes: 1860,
    },
    {
      district: "KISHANGANJ",
      crimes: 1234,
    },
    {
      district: "LAKHISARAI",
      crimes: 1316,
    },
    {
      district: "MADHEPURA",
      crimes: 1877,
    },
    {
      district: "MADHUBANI",
      crimes: 4319,
    },
    {
      district: "MOTIHARI",
      crimes: 5546,
    },
    {
      district: "MUNGER",
      crimes: 2052,
    },
    {
      district: "MUZAFFARPUR",
      crimes: 6541,
    },
    {
      district: "MUZAFFARPUR RLY.",
      crimes: 524,
    },
    {
      district: "NALANDA",
      crimes: 4411,
    },
    {
      district: "NAUGACHIA",
      crimes: 1216,
    },
    {
      district: "NAWADAH",
      crimes: 2286,
    },
    {
      district: "PATNA",
      crimes: 14036,
    },
    {
      district: "PATNA RLY.",
      crimes: 1181,
    },
    {
      district: "PURNEA",
      crimes: 2959,
    },
    {
      district: "ROHTAS",
      crimes: 4488,
    },
    {
      district: "SAHARSA",
      crimes: 1795,
    },
    {
      district: "SAMASTIPUR",
      crimes: 4063,
    },
    {
      district: "SARAN",
      crimes: 4050,
    },
    {
      district: "SHEIKHPURA",
      crimes: 923,
    },
    {
      district: "SHEOHAR",
      crimes: 546,
    },
    {
      district: "SITAMARHI",
      crimes: 3776,
    },
    {
      district: "SIWAN",
      crimes: 3106,
    },
    {
      district: "SUPAUL",
      crimes: 1721,
    },
    {
      district: "VAISHALI",
      crimes: 4372,
    },
    {
      district: "TOTAL",
      crimes: 127453,
    },
    {
      district: "BALRAMPUR",
      crimes: 886,
    },
    {
      district: "BILASPUR",
      crimes: 6599,
    },
    {
      district: "BIZAPUR",
      crimes: 395,
    },
    {
      district: "DANTEWARA",
      crimes: 692,
    },
    {
      district: "DHAMTARI",
      crimes: 1382,
    },
    {
      district: "DURG",
      crimes: 9563,
    },
    {
      district: "GRP RAIPUR",
      crimes: 407,
    },
    {
      district: "JAGDALPUR",
      crimes: 2157,
    },
    {
      district: "JANJGIR",
      crimes: 2896,
    },
    {
      district: "JASHPUR",
      crimes: 1240,
    },
    {
      district: "KABIRDHAM",
      crimes: 1378,
    },
    {
      district: "KANKER",
      crimes: 976,
    },
    {
      district: "KORBA",
      crimes: 2600,
    },
    {
      district: "KORIYA",
      crimes: 1817,
    },
    {
      district: "MAHASAMUND",
      crimes: 1624,
    },
    {
      district: "NARAYANPUR",
      crimes: 187,
    },
    {
      district: "RAIGARH",
      crimes: 3130,
    },
    {
      district: "RAIPUR",
      crimes: 10360,
    },
    {
      district: "RAJNANDGAON",
      crimes: 2849,
    },
    {
      district: "SARGUJA",
      crimes: 2218,
    },
    {
      district: "SURAJPUR",
      crimes: 1602,
    },
    {
      district: "TOTAL",
      crimes: 54958,
    },
    {
      district: "NORTH GOA",
      crimes: 1926,
    },
    {
      district: "SOUTH GOA",
      crimes: 1367,
    },
    {
      district: "TOTAL",
      crimes: 3293,
    },
    {
      district: "AHMEDABAD COMMR.",
      crimes: 21442,
    },
    {
      district: "AHMEDABAD RURAL",
      crimes: 3373,
    },
    {
      district: "AHWA-DANG",
      crimes: 154,
    },
    {
      district: "AMRELI",
      crimes: 2167,
    },
    {
      district: "ANAND",
      crimes: 3464,
    },
    {
      district: "BHARUCH",
      crimes: 2872,
    },
    {
      district: "BHAVNAGAR",
      crimes: 4133,
    },
    {
      district: "CID CRIME",
      crimes: 27,
    },
    {
      district: "DAHOD",
      crimes: 1832,
    },
    {
      district: "GANDHINAGAR",
      crimes: 5755,
    },
    {
      district: "HIMATNAGAR",
      crimes: 3713,
    },
    {
      district: "JAMNAGAR",
      crimes: 3972,
    },
    {
      district: "JUNAGADH",
      crimes: 4690,
    },
    {
      district: "KHEDA NORTH",
      crimes: 5277,
    },
    {
      district: "KUTCH",
      crimes: 4258,
    },
    {
      district: "MEHSANA",
      crimes: 4602,
    },
    {
      district: "NARMADA",
      crimes: 841,
    },
    {
      district: "NAVSARI",
      crimes: 1078,
    },
    {
      district: "PALANPUR",
      crimes: 4728,
    },
    {
      district: "PANCHMAHAL",
      crimes: 3720,
    },
    {
      district: "PATAN",
      crimes: 2438,
    },
    {
      district: "PORBANDAR",
      crimes: 875,
    },
    {
      district: "RAJKOT COMMR.",
      crimes: 4024,
    },
    {
      district: "RAJKOT RURAL",
      crimes: 3741,
    },
    {
      district: "SURAT COMMR.",
      crimes: 7426,
    },
    {
      district: "SURAT RURAL",
      crimes: 1698,
    },
    {
      district: "SURENDRANAGAR",
      crimes: 2871,
    },
    {
      district: "TAPI",
      crimes: 667,
    },
    {
      district: "VADODARA COMMR.",
      crimes: 5352,
    },
    {
      district: "VADODARA RURAL",
      crimes: 2663,
    },
    {
      district: "VALSAD",
      crimes: 1821,
    },
    {
      district: "W.RLY",
      crimes: 765,
    },
    {
      district: "TOTAL",
      crimes: 116439,
    },
    {
      district: "AMBALA",
      crimes: 2848,
    },
    {
      district: "BHIWANI",
      crimes: 2871,
    },
    {
      district: "FARIDABAD",
      crimes: 4920,
    },
    {
      district: "FATEHABAD",
      crimes: 1385,
    },
    {
      district: "GRP",
      crimes: 1199,
    },
    {
      district: "GURGAON",
      crimes: 6736,
    },
    {
      district: "HISSAR",
      crimes: 3821,
    },
    {
      district: "JHAJJAR",
      crimes: 2137,
    },
    {
      district: "JIND",
      crimes: 2435,
    },
    {
      district: "KAITHAL",
      crimes: 1668,
    },
    {
      district: "KARNAL",
      crimes: 3447,
    },
    {
      district: "KURUKSHETRA",
      crimes: 2536,
    },
    {
      district: "MAHENDRAGARH",
      crimes: 1835,
    },
    {
      district: "MEWAT",
      crimes: 1909,
    },
    {
      district: "PALWAL",
      crimes: 2306,
    },
    {
      district: "PANCHKULA",
      crimes: 1328,
    },
    {
      district: "PANIPAT",
      crimes: 2809,
    },
    {
      district: "REWARI",
      crimes: 2351,
    },
    {
      district: "ROHTAK",
      crimes: 3077,
    },
    {
      district: "SIRSA",
      crimes: 2007,
    },
    {
      district: "SONIPAT",
      crimes: 3475,
    },
    {
      district: "YAMUNANAGAR",
      crimes: 2020,
    },
    {
      district: "TOTAL",
      crimes: 59120,
    },
    {
      district: "BADDIPOLICEDIST",
      crimes: 368,
    },
    {
      district: "BILASPUR",
      crimes: 1138,
    },
    {
      district: "CHAMBA",
      crimes: 663,
    },
    {
      district: "CID",
      crimes: 5,
    },
    {
      district: "G.R.P.",
      crimes: 17,
    },
    {
      district: "HAMIRPUR",
      crimes: 1015,
    },
    {
      district: "KANGRA",
      crimes: 2416,
    },
    {
      district: "KINNAUR",
      crimes: 197,
    },
    {
      district: "KULLU",
      crimes: 808,
    },
    {
      district: "LAHAUL-SPITI",
      crimes: 67,
    },
    {
      district: "MANDI",
      crimes: 1788,
    },
    {
      district: "SHIMLA",
      crimes: 1790,
    },
    {
      district: "SIRMAUR",
      crimes: 844,
    },
    {
      district: "SOLAN",
      crimes: 893,
    },
    {
      district: "UNA",
      crimes: 1040,
    },
    {
      district: "TOTAL",
      crimes: 13049,
    },
    {
      district: "ANANTNAG",
      crimes: 1299,
    },
    {
      district: "AWANTIPORA",
      crimes: 480,
    },
    {
      district: "BANDIPORA",
      crimes: 560,
    },
    {
      district: "BARAMULLA",
      crimes: 975,
    },
    {
      district: "BUDGAM",
      crimes: 1352,
    },
    {
      district: "CRIME JAMMU",
      crimes: 20,
    },
    {
      district: "CRIME KASHMIR",
      crimes: 32,
    },
    {
      district: "DODA",
      crimes: 870,
    },
    {
      district: "GANDERBAL",
      crimes: 365,
    },
    {
      district: "HANDWARA",
      crimes: 420,
    },
    {
      district: "JAMMU",
      crimes: 3976,
    },
    {
      district: "KARGIL",
      crimes: 136,
    },
    {
      district: "KATHUA",
      crimes: 1061,
    },
    {
      district: "KISHTWAR",
      crimes: 338,
    },
    {
      district: "KULGAM",
      crimes: 712,
    },
    {
      district: "KUPWARA",
      crimes: 527,
    },
    {
      district: "LEH",
      crimes: 158,
    },
    {
      district: "POONCH",
      crimes: 950,
    },
    {
      district: "PULWAMA",
      crimes: 617,
    },
    {
      district: "RAILWAYS",
      crimes: 36,
    },
    {
      district: "RAILWAYS",
      crimes: 21,
    },
    {
      district: "RAJOURI",
      crimes: 1460,
    },
    {
      district: "RAMBAN",
      crimes: 636,
    },
    {
      district: "REASI",
      crimes: 545,
    },
    {
      district: "SAMBA",
      crimes: 660,
    },
    {
      district: "SHOPIAN",
      crimes: 621,
    },
    {
      district: "SOPORE",
      crimes: 734,
    },
    {
      district: "SRINAGAR",
      crimes: 2630,
    },
    {
      district: "UDHAMPUR",
      crimes: 1032,
    },
    {
      district: "TOTAL",
      crimes: 23223,
    },
    {
      district: "BOKARO",
      crimes: 2808,
    },
    {
      district: "CHAIBASA",
      crimes: 916,
    },
    {
      district: "CHATRA",
      crimes: 923,
    },
    {
      district: "DEOGHAR",
      crimes: 1702,
    },
    {
      district: "DHANBAD",
      crimes: 3835,
    },
    {
      district: "DHANBAD RLY.",
      crimes: 336,
    },
    {
      district: "DUMKA",
      crimes: 1504,
    },
    {
      district: "GARHWA",
      crimes: 1303,
    },
    {
      district: "GIRIDIH",
      crimes: 2580,
    },
    {
      district: "GODDA",
      crimes: 1464,
    },
    {
      district: "GUMLA",
      crimes: 945,
    },
    {
      district: "HAZARIBAGH",
      crimes: 2238,
    },
    {
      district: "JAMSHEDPUR",
      crimes: 3574,
    },
    {
      district: "JAMSHEDPUR RLY.",
      crimes: 248,
    },
    {
      district: "JAMTARA",
      crimes: 525,
    },
    {
      district: "KHUNTI",
      crimes: 306,
    },
    {
      district: "KODERMA",
      crimes: 927,
    },
    {
      district: "LATEHAR",
      crimes: 455,
    },
    {
      district: "LOHARDAGGA",
      crimes: 513,
    },
    {
      district: "PAKUR",
      crimes: 731,
    },
    {
      district: "PALAMU",
      crimes: 2101,
    },
    {
      district: "RAMGARH",
      crimes: 932,
    },
    {
      district: "RANCHI",
      crimes: 5862,
    },
    {
      district: "SAHEBGANJ",
      crimes: 907,
    },
    {
      district: "SARAIKELA",
      crimes: 886,
    },
    {
      district: "SIMDEGA",
      crimes: 368,
    },
    {
      district: "TOTAL",
      crimes: 38889,
    },
    {
      district: "BAGALKOT",
      crimes: 2189,
    },
    {
      district: "BANGALORE COMMR.",
      crimes: 32188,
    },
    {
      district: "BANGALORE RURAL",
      crimes: 4612,
    },
    {
      district: "BELGAUM",
      crimes: 7463,
    },
    {
      district: "BELLARY",
      crimes: 3414,
    },
    {
      district: "BIDAR",
      crimes: 3599,
    },
    {
      district: "BIJAPUR",
      crimes: 3259,
    },
    {
      district: "CBPURA",
      crimes: 2333,
    },
    {
      district: "CHAMARAJNAGAR",
      crimes: 1937,
    },
    {
      district: "CHICKMAGALUR",
      crimes: 3165,
    },
    {
      district: "CHITRADURGA",
      crimes: 4752,
    },
    {
      district: "DAKSHIN KANNADA",
      crimes: 4196,
    },
    {
      district: "DAVANAGERE",
      crimes: 3059,
    },
    {
      district: "DHARWAD COMMR.",
      crimes: 2221,
    },
    {
      district: "DHARWAD RURAL",
      crimes: 1487,
    },
    {
      district: "GADAG",
      crimes: 1107,
    },
    {
      district: "GULBARGA",
      crimes: 4799,
    },
    {
      district: "HASSAN",
      crimes: 6204,
    },
    {
      district: "HAVERI",
      crimes: 2245,
    },
    {
      district: "K.G.F.",
      crimes: 991,
    },
    {
      district: "KODAGU",
      crimes: 2199,
    },
    {
      district: "KOLAR",
      crimes: 1912,
    },
    {
      district: "KOPPAL",
      crimes: 1951,
    },
    {
      district: "MANDYA",
      crimes: 6626,
    },
    {
      district: "MYSORE COMMR.",
      crimes: 3407,
    },
    {
      district: "MYSORE RURAL",
      crimes: 4464,
    },
    {
      district: "RAICHUR",
      crimes: 3349,
    },
    {
      district: "RAILWAYS",
      crimes: 580,
    },
    {
      district: "RAMANAGAR",
      crimes: 4440,
    },
    {
      district: "SHIMOGA",
      crimes: 5839,
    },
    {
      district: "TUMKUR",
      crimes: 5101,
    },
    {
      district: "UDUPI",
      crimes: 2699,
    },
    {
      district: "UTTAR KANNADA",
      crimes: 2993,
    },
    {
      district: "YADGIRI",
      crimes: 1542,
    },
    {
      district: "TOTAL",
      crimes: 142322,
    },
    {
      district: "ALAPUZHA",
      crimes: 7842,
    },
    {
      district: "ERNAKULAM COMMR.",
      crimes: 25735,
    },
    {
      district: "ERNAKULAM RURAL",
      crimes: 12225,
    },
    {
      district: "IDUKKI",
      crimes: 8620,
    },
    {
      district: "KANNUR",
      crimes: 5850,
    },
    {
      district: "KASARGOD",
      crimes: 3238,
    },
    {
      district: "KOLLAM",
      crimes: 11879,
    },
    {
      district: "KOTTAYAM",
      crimes: 8151,
    },
    {
      district: "KOZHIKODE COMMR.",
      crimes: 3938,
    },
    {
      district: "KOZHIKODE RURAL",
      crimes: 7358,
    },
    {
      district: "MALAPPURAM",
      crimes: 9196,
    },
    {
      district: "PALAKKAD",
      crimes: 10449,
    },
    {
      district: "PATHANAMTHITTA",
      crimes: 4971,
    },
    {
      district: "RAILWAYS",
      crimes: 333,
    },
    {
      district: "THRISSUR",
      crimes: 11420,
    },
    {
      district: "TRIVANDRUM COMMR.",
      crimes: 5652,
    },
    {
      district: "TRIVANDRUM RURAL",
      crimes: 8696,
    },
    {
      district: "WAYANADU",
      crimes: 2760,
    },
    {
      district: "TOTAL",
      crimes: 148313,
    },
    {
      district: "ALIRAJPUR",
      crimes: 1330,
    },
    {
      district: "ANUPPUR",
      crimes: 1365,
    },
    {
      district: "ASHOK NAGAR",
      crimes: 2649,
    },
    {
      district: "BALAGHAT",
      crimes: 2637,
    },
    {
      district: "BARWANI",
      crimes: 1913,
    },
    {
      district: "BETUL",
      crimes: 3177,
    },
    {
      district: "BHIND",
      crimes: 3211,
    },
    {
      district: "BHOPAL",
      crimes: 13711,
    },
    {
      district: "BHOPAL RLY.",
      crimes: 1138,
    },
    {
      district: "BURHANPUR",
      crimes: 1263,
    },
    {
      district: "CHHATARPUR",
      crimes: 4692,
    },
    {
      district: "CHHINDWARA",
      crimes: 5190,
    },
    {
      district: "DAMOH",
      crimes: 3399,
    },
    {
      district: "DATIYA",
      crimes: 2530,
    },
    {
      district: "DEWAS",
      crimes: 5692,
    },
    {
      district: "DHAR",
      crimes: 5737,
    },
    {
      district: "DINDORI",
      crimes: 994,
    },
    {
      district: "GUNA",
      crimes: 3459,
    },
    {
      district: "GWALIOR",
      crimes: 11337,
    },
    {
      district: "HARDA",
      crimes: 1362,
    },
    {
      district: "HOSHANGABAD",
      crimes: 4284,
    },
    {
      district: "INDORE",
      crimes: 18473,
    },
    {
      district: "INDORE RLY.",
      crimes: 275,
    },
    {
      district: "JABALPUR",
      crimes: 9973,
    },
    {
      district: "JABALPUR RLY.",
      crimes: 496,
    },
    {
      district: "JHABUA",
      crimes: 1939,
    },
    {
      district: "KATNI",
      crimes: 3220,
    },
    {
      district: "KHANDWA",
      crimes: 3111,
    },
    {
      district: "KHARGON",
      crimes: 4121,
    },
    {
      district: "MANDLA",
      crimes: 1824,
    },
    {
      district: "MANDSAUR",
      crimes: 3203,
    },
    {
      district: "MORENA",
      crimes: 4912,
    },
    {
      district: "NARSINGHPUR",
      crimes: 3135,
    },
    {
      district: "NEEMUCH",
      crimes: 2046,
    },
    {
      district: "PANNA",
      crimes: 2077,
    },
    {
      district: "RAISEN",
      crimes: 4461,
    },
    {
      district: "RAJGARH",
      crimes: 4430,
    },
    {
      district: "RATLAM",
      crimes: 4245,
    },
    {
      district: "REWA",
      crimes: 5562,
    },
    {
      district: "SAGAR",
      crimes: 8518,
    },
    {
      district: "SATNA",
      crimes: 5373,
    },
    {
      district: "SEONI",
      crimes: 2906,
    },
    {
      district: "SHAHDOL",
      crimes: 2937,
    },
    {
      district: "SHAJAPUR",
      crimes: 3225,
    },
    {
      district: "SHEOPUR",
      crimes: 1214,
    },
    {
      district: "SHIVPURI",
      crimes: 4357,
    },
    {
      district: "SIDHI",
      crimes: 2603,
    },
    {
      district: "SIHORE",
      crimes: 3986,
    },
    {
      district: "SINGRAULI",
      crimes: 2156,
    },
    {
      district: "TIKAMGARH",
      crimes: 3718,
    },
    {
      district: "UJJAIN",
      crimes: 8708,
    },
    {
      district: "UMARIYA",
      crimes: 1238,
    },
    {
      district: "VIDISHA",
      crimes: 4757,
    },
    {
      district: "TOTAL",
      crimes: 214269,
    },
    {
      district: "AHMEDNAGAR",
      crimes: 7215,
    },
    {
      district: "AKOLA",
      crimes: 4472,
    },
    {
      district: "AMRAVATI COMMR.",
      crimes: 3079,
    },
    {
      district: "AMRAVATI RURAL",
      crimes: 4574,
    },
    {
      district: "AURANGABAD COMMR.",
      crimes: 3953,
    },
    {
      district: "AURANGABAD RURAL",
      crimes: 3223,
    },
    {
      district: "BEED",
      crimes: 4049,
    },
    {
      district: "BHANDARA",
      crimes: 2242,
    },
    {
      district: "BULDHANA",
      crimes: 3972,
    },
    {
      district: "CHANDRAPUR",
      crimes: 4006,
    },
    {
      district: "DHULE",
      crimes: 2974,
    },
    {
      district: "GADCHIROLI",
      crimes: 1082,
    },
    {
      district: "GONDIA",
      crimes: 1982,
    },
    {
      district: "HINGOLI",
      crimes: 1865,
    },
    {
      district: "JALGAON",
      crimes: 5408,
    },
    {
      district: "JALNA",
      crimes: 2960,
    },
    {
      district: "KOLHAPUR",
      crimes: 3727,
    },
    {
      district: "LATUR",
      crimes: 3513,
    },
    {
      district: "MUMBAI COMMR.",
      crimes: 33932,
    },
    {
      district: "MUMBAI RLY.",
      crimes: 2322,
    },
    {
      district: "NAGPUR COMMR.",
      crimes: 7728,
    },
    {
      district: "NAGPUR RLY.",
      crimes: 1135,
    },
    {
      district: "NAGPUR RURAL",
      crimes: 3922,
    },
    {
      district: "NANDED",
      crimes: 5312,
    },
    {
      district: "NANDURBAR",
      crimes: 1542,
    },
    {
      district: "NASIK COMMR.",
      crimes: 4484,
    },
    {
      district: "NASIK RURAL",
      crimes: 5011,
    },
    {
      district: "NAVI MUMBAI",
      crimes: 5873,
    },
    {
      district: "OSMANABAD",
      crimes: 2831,
    },
    {
      district: "PARBHANI",
      crimes: 3043,
    },
    {
      district: "PUNE COMMR.",
      crimes: 13602,
    },
    {
      district: "PUNE RLY.",
      crimes: 439,
    },
    {
      district: "PUNE RURAL",
      crimes: 7741,
    },
    {
      district: "RAIGAD",
      crimes: 2006,
    },
    {
      district: "RATNAGIRI",
      crimes: 1604,
    },
    {
      district: "SANGLI",
      crimes: 2922,
    },
    {
      district: "SATARA",
      crimes: 4349,
    },
    {
      district: "SINDHUDURG",
      crimes: 815,
    },
    {
      district: "SOLAPUR COMMR.",
      crimes: 1623,
    },
    {
      district: "SOLAPUR RURAL",
      crimes: 4751,
    },
    {
      district: "THANE COMMR.",
      crimes: 9943,
    },
    {
      district: "THANE RURAL",
      crimes: 6213,
    },
    {
      district: "WARDHA",
      crimes: 3882,
    },
    {
      district: "WASHIM",
      crimes: 2070,
    },
    {
      district: "YAVATMAL",
      crimes: 4777,
    },
    {
      district: "TOTAL",
      crimes: 208168,
    },
    {
      district: "BISHNUPUR",
      crimes: 320,
    },
    {
      district: "CHANDEL",
      crimes: 59,
    },
    {
      district: "CHURACHANDPUR",
      crimes: 90,
    },
    {
      district: "CID",
      crimes: 2,
    },
    {
      district: "IMPHAL EAST",
      crimes: 476,
    },
    {
      district: "IMPHAL WEST",
      crimes: 1067,
    },
    {
      district: "SENAPATI",
      crimes: 177,
    },
    {
      district: "TAMENGLONG",
      crimes: 47,
    },
    {
      district: "THOUBAL",
      crimes: 414,
    },
    {
      district: "UKHRUL",
      crimes: 63,
    },
    {
      district: "TOTAL",
      crimes: 2715,
    },
    {
      district: "GARO HILLS EAST",
      crimes: 151,
    },
    {
      district: "GARO HILLS SOUTH",
      crimes: 59,
    },
    {
      district: "GARO HILLS WEST",
      crimes: 556,
    },
    {
      district: "JAINTIA HILLS",
      crimes: 383,
    },
    {
      district: "KHASI HILLS EAST",
      crimes: 849,
    },
    {
      district: "KHASI HILLS WEST",
      crimes: 243,
    },
    {
      district: "RI-BHOI",
      crimes: 264,
    },
    {
      district: "TOTAL",
      crimes: 2505,
    },
    {
      district: "AIZAWL",
      crimes: 1110,
    },
    {
      district: "CHAMPHAI",
      crimes: 210,
    },
    {
      district: "KOLASIB",
      crimes: 182,
    },
    {
      district: "LAWNGTLAI",
      crimes: 156,
    },
    {
      district: "LUNGLEI",
      crimes: 244,
    },
    {
      district: "MAMIT",
      crimes: 107,
    },
    {
      district: "SAIHA",
      crimes: 88,
    },
    {
      district: "SERCHHIP",
      crimes: 77,
    },
    {
      district: "TOTAL",
      crimes: 2174,
    },
    {
      district: "DIMAPUR",
      crimes: 511,
    },
    {
      district: "KIPHIRE",
      crimes: 26,
    },
    {
      district: "KOHIMA",
      crimes: 189,
    },
    {
      district: "LONGLENG",
      crimes: 12,
    },
    {
      district: "MOKOKCHUNG",
      crimes: 82,
    },
    {
      district: "MON",
      crimes: 13,
    },
    {
      district: "PEREN",
      crimes: 20,
    },
    {
      district: "PHEK",
      crimes: 45,
    },
    {
      district: "TUENSANG",
      crimes: 36,
    },
    {
      district: "WOKHA",
      crimes: 47,
    },
    {
      district: "ZUNHEBOTO",
      crimes: 78,
    },
    {
      district: "TOTAL",
      crimes: 1059,
    },
    {
      district: "ANGUL",
      crimes: 2901,
    },
    {
      district: "BALASORE",
      crimes: 3330,
    },
    {
      district: "BARAGARH",
      crimes: 1627,
    },
    {
      district: "BERHAMPUR",
      crimes: 1251,
    },
    {
      district: "BHADRAK",
      crimes: 2005,
    },
    {
      district: "BOLANGIR",
      crimes: 2021,
    },
    {
      district: "BOUDH",
      crimes: 360,
    },
    {
      district: "CUTTACK",
      crimes: 2340,
    },
    {
      district: "DCP BBSR",
      crimes: 4096,
    },
    {
      district: "DCP CTC",
      crimes: 2226,
    },
    {
      district: "DEOGARH",
      crimes: 533,
    },
    {
      district: "DHENKANAL",
      crimes: 1786,
    },
    {
      district: "GAJAPATI",
      crimes: 388,
    },
    {
      district: "GANJAM",
      crimes: 1882,
    },
    {
      district: "JAGATSINGHPUR",
      crimes: 1617,
    },
    {
      district: "JAJPUR",
      crimes: 2166,
    },
    {
      district: "JHARSUGUDA",
      crimes: 1325,
    },
    {
      district: "KALAHANDI",
      crimes: 1564,
    },
    {
      district: "KANDHAMAL",
      crimes: 742,
    },
    {
      district: "KENDRAPARA",
      crimes: 1392,
    },
    {
      district: "KEONJHAR",
      crimes: 2366,
    },
    {
      district: "KHURDA",
      crimes: 1521,
    },
    {
      district: "KORAPUT",
      crimes: 1302,
    },
    {
      district: "MALKANGIR",
      crimes: 358,
    },
    {
      district: "MAYURBHANJ",
      crimes: 2223,
    },
    {
      district: "NAYAGARH",
      crimes: 1243,
    },
    {
      district: "NOWRANGPUR",
      crimes: 975,
    },
    {
      district: "NUAPADA",
      crimes: 711,
    },
    {
      district: "PURI",
      crimes: 2738,
    },
    {
      district: "RAYAGADA",
      crimes: 829,
    },
    {
      district: "ROURKELA",
      crimes: 1616,
    },
    {
      district: "SAMBALPUR",
      crimes: 2271,
    },
    {
      district: "SONEPUR",
      crimes: 578,
    },
    {
      district: "SRP(CUTTACK)",
      crimes: 530,
    },
    {
      district: "SRP(ROURKELA)",
      crimes: 468,
    },
    {
      district: "SUNDARGARH",
      crimes: 1178,
    },
    {
      district: "TOTAL",
      crimes: 56459,
    },
    {
      district: "AMRITSAR RURAL",
      crimes: 1194,
    },
    {
      district: "BARNALA",
      crimes: 739,
    },
    {
      district: "BATALA",
      crimes: 909,
    },
    {
      district: "BHATINDA",
      crimes: 1872,
    },
    {
      district: "CP AMRITSAR",
      crimes: 1833,
    },
    {
      district: "CP JALANDHAR",
      crimes: 2126,
    },
    {
      district: "CP LUDHIANA",
      crimes: 3922,
    },
    {
      district: "FARIDKOT",
      crimes: 847,
    },
    {
      district: "FATEHGARH SAHIB",
      crimes: 939,
    },
    {
      district: "FEROZPUR",
      crimes: 1842,
    },
    {
      district: "G.R.P",
      crimes: 390,
    },
    {
      district: "GURDASPUR",
      crimes: 1217,
    },
    {
      district: "HOSHIARPUR",
      crimes: 1688,
    },
    {
      district: "JALANDHAR RURAL",
      crimes: 1809,
    },
    {
      district: "KAPURTHALA",
      crimes: 1159,
    },
    {
      district: "KHANNA",
      crimes: 1035,
    },
    {
      district: "LUDHIANA RURAL",
      crimes: 836,
    },
    {
      district: "MANSA",
      crimes: 794,
    },
    {
      district: "MOGA",
      crimes: 1227,
    },
    {
      district: "MUKTSAR",
      crimes: 894,
    },
    {
      district: "PATIALA",
      crimes: 3001,
    },
    {
      district: "ROPAR",
      crimes: 1099,
    },
    {
      district: "SANGRUR",
      crimes: 1953,
    },
    {
      district: "SAS NGR",
      crimes: 1747,
    },
    {
      district: "SBS NAGAR",
      crimes: 718,
    },
    {
      district: "TARN TARAN",
      crimes: 858,
    },
    {
      district: "TOTAL",
      crimes: 36648,
    },
    {
      district: "AJMER",
      crimes: 6112,
    },
    {
      district: "ALWAR",
      crimes: 9886,
    },
    {
      district: "BANSWARA",
      crimes: 2241,
    },
    {
      district: "BARAN",
      crimes: 3048,
    },
    {
      district: "BARMER",
      crimes: 3148,
    },
    {
      district: "BHARATPUR",
      crimes: 8425,
    },
    {
      district: "BHILWARA",
      crimes: 5268,
    },
    {
      district: "BIKANER",
      crimes: 3683,
    },
    {
      district: "BUNDI",
      crimes: 3286,
    },
    {
      district: "CHITTORGARH",
      crimes: 4755,
    },
    {
      district: "CHURU",
      crimes: 3153,
    },
    {
      district: "DAUSA",
      crimes: 5136,
    },
    {
      district: "DHOLPUR",
      crimes: 4311,
    },
    {
      district: "DUNGARPUR",
      crimes: 1875,
    },
    {
      district: "G.R.P. AJMER",
      crimes: 617,
    },
    {
      district: "G.R.P. JODHPUR",
      crimes: 149,
    },
    {
      district: "GANGANAGAR",
      crimes: 5241,
    },
    {
      district: "HANUMANGARH",
      crimes: 3763,
    },
    {
      district: "JAIPUR EAST",
      crimes: 6673,
    },
    {
      district: "JAIPUR NORTH",
      crimes: 3921,
    },
    {
      district: "JAIPUR RURAL",
      crimes: 8107,
    },
    {
      district: "JAIPUR SOUTH",
      crimes: 6123,
    },
    {
      district: "JAISALMER",
      crimes: 1124,
    },
    {
      district: "JALORE",
      crimes: 2506,
    },
    {
      district: "JHALAWAR",
      crimes: 3981,
    },
    {
      district: "JHUNJHUNU",
      crimes: 3661,
    },
    {
      district: "JODHPUR CITY",
      crimes: 3608,
    },
    {
      district: "JODHPUR RURAL",
      crimes: 2987,
    },
    {
      district: "KARAULI",
      crimes: 4461,
    },
    {
      district: "KOTA CITY",
      crimes: 4078,
    },
    {
      district: "KOTA RURAL",
      crimes: 2200,
    },
    {
      district: "NAGAUR",
      crimes: 4211,
    },
    {
      district: "PALI",
      crimes: 5161,
    },
    {
      district: "PRATAPGARH",
      crimes: 1969,
    },
    {
      district: "RAJSAMAND",
      crimes: 2380,
    },
    {
      district: "SAWAI MADHOPUR",
      crimes: 3510,
    },
    {
      district: "SIKAR",
      crimes: 5029,
    },
    {
      district: "SIROHI",
      crimes: 1910,
    },
    {
      district: "TONK",
      crimes: 3158,
    },
    {
      district: "UDAIPUR",
      crimes: 8102,
    },
    {
      district: "TOTAL",
      crimes: 162957,
    },
    {
      district: "EAST",
      crimes: 228,
    },
    {
      district: "NORTH",
      crimes: 48,
    },
    {
      district: "SOUTH",
      crimes: 158,
    },
    {
      district: "WEST",
      crimes: 118,
    },
    {
      district: "TOTAL",
      crimes: 552,
    },
    {
      district: "ARIYALUR",
      crimes: 1977,
    },
    {
      district: "CHENNAI",
      crimes: 10869,
    },
    {
      district: "CHENNAI RLY.",
      crimes: 647,
    },
    {
      district: "CHENNAISUBURBAN",
      crimes: 8670,
    },
    {
      district: "COIMBATORE RURAL",
      crimes: 4806,
    },
    {
      district: "COIMBATORE URBAN",
      crimes: 4180,
    },
    {
      district: "CUDDALORE",
      crimes: 6179,
    },
    {
      district: "DHARMAPURI",
      crimes: 3761,
    },
    {
      district: "DINDIGUL",
      crimes: 5299,
    },
    {
      district: "ERODE",
      crimes: 6702,
    },
    {
      district: "KANCHIPURAM",
      crimes: 5757,
    },
    {
      district: "KANYAKUMARI",
      crimes: 4752,
    },
    {
      district: "KARUR",
      crimes: 2974,
    },
    {
      district: "KRISHNAGIRI",
      crimes: 4580,
    },
    {
      district: "MADURAI RURAL",
      crimes: 5348,
    },
    {
      district: "MADURAI URBAN",
      crimes: 2672,
    },
    {
      district: "NAGAPATTINAM",
      crimes: 4027,
    },
    {
      district: "NAMAKKAL",
      crimes: 4690,
    },
    {
      district: "NILGIRIS",
      crimes: 1320,
    },
    {
      district: "PERAMBALUR",
      crimes: 1536,
    },
    {
      district: "PUDUKOTTAI",
      crimes: 4808,
    },
    {
      district: "RAMNATHAPURAM",
      crimes: 3462,
    },
    {
      district: "SALEM RURAL",
      crimes: 8634,
    },
    {
      district: "SALEM URBAN",
      crimes: 3218,
    },
    {
      district: "SIVAGANGAI",
      crimes: 2611,
    },
    {
      district: "THANJAVUR",
      crimes: 6946,
    },
    {
      district: "THENI",
      crimes: 5384,
    },
    {
      district: "THIRUNELVELI RURAL",
      crimes: 7777,
    },
    {
      district: "THIRUNELVELI URBAN",
      crimes: 1630,
    },
    {
      district: "THIRUVALLUR",
      crimes: 3487,
    },
    {
      district: "THIRUVANNAMALAI",
      crimes: 4562,
    },
    {
      district: "THIRUVARUR",
      crimes: 3976,
    },
    {
      district: "THOOTHUGUDI",
      crimes: 4954,
    },
    {
      district: "TIRUPPUR",
      crimes: 5238,
    },
    {
      district: "TRICHY RLY.",
      crimes: 195,
    },
    {
      district: "TRICHY RURAL",
      crimes: 4525,
    },
    {
      district: "TRICHY URBAN",
      crimes: 3741,
    },
    {
      district: "VELLORE",
      crimes: 8249,
    },
    {
      district: "VILLUPURAM",
      crimes: 6690,
    },
    {
      district: "VIRUDHUNAGAR",
      crimes: 4845,
    },
    {
      district: "TOTAL",
      crimes: 185678,
    },
    {
      district: "DHALAI",
      crimes: 541,
    },
    {
      district: "G.R.P.",
      crimes: 6,
    },
    {
      district: "NORTH",
      crimes: 970,
    },
    {
      district: "SOUTH",
      crimes: 1688,
    },
    {
      district: "WEST",
      crimes: 2600,
    },
    {
      district: "TOTAL",
      crimes: 5805,
    },
    {
      district: "AGRA",
      crimes: 6919,
    },
    {
      district: "ALIGARH",
      crimes: 5636,
    },
    {
      district: "ALLAHABAD",
      crimes: 4955,
    },
    {
      district: "AMBEDKAR NAGAR",
      crimes: 1168,
    },
    {
      district: "AURAIYA",
      crimes: 1000,
    },
    {
      district: "AZAMGARH",
      crimes: 1764,
    },
    {
      district: "BADAUN",
      crimes: 2203,
    },
    {
      district: "BAGHPAT",
      crimes: 1220,
    },
    {
      district: "BAHRAICH",
      crimes: 2181,
    },
    {
      district: "BALLIA",
      crimes: 824,
    },
    {
      district: "BALRAMPUR",
      crimes: 438,
    },
    {
      district: "BANDA",
      crimes: 1138,
    },
    {
      district: "BARABANKI",
      crimes: 2238,
    },
    {
      district: "BAREILLY",
      crimes: 4277,
    },
    {
      district: "BASTI",
      crimes: 806,
    },
    {
      district: "BIJNOR",
      crimes: 2860,
    },
    {
      district: "BULANDSHAHAR",
      crimes: 3056,
    },
    {
      district: "CHANDOLI",
      crimes: 834,
    },
    {
      district: "CHITRAKOOT DHAM",
      crimes: 457,
    },
    {
      district: "CSM NAGAR",
      crimes: 1302,
    },
    {
      district: "DEORIA",
      crimes: 810,
    },
    {
      district: "ETAH",
      crimes: 2012,
    },
    {
      district: "ETAWAH",
      crimes: 1918,
    },
    {
      district: "FAIZABAD",
      crimes: 1770,
    },
    {
      district: "FATEHGARH",
      crimes: 903,
    },
    {
      district: "FATEHPUR",
      crimes: 1943,
    },
    {
      district: "FIROZABAD",
      crimes: 2541,
    },
    {
      district: "G.R.P.",
      crimes: 3933,
    },
    {
      district: "GAUTAMBUDH NAGAR",
      crimes: 6091,
    },
    {
      district: "GHAZIABAD",
      crimes: 10217,
    },
    {
      district: "GHAZIPUR",
      crimes: 806,
    },
    {
      district: "GONDA",
      crimes: 2054,
    },
    {
      district: "GORAKHPUR",
      crimes: 5246,
    },
    {
      district: "HAMIRPUR",
      crimes: 518,
    },
    {
      district: "HARDOI",
      crimes: 2292,
    },
    {
      district: "HATHRAS",
      crimes: 1591,
    },
    {
      district: "J.P.NAGAR",
      crimes: 1361,
    },
    {
      district: "JALAUN",
      crimes: 899,
    },
    {
      district: "JAUNPUR",
      crimes: 1779,
    },
    {
      district: "JHANSI",
      crimes: 1113,
    },
    {
      district: "KANNAUJ",
      crimes: 947,
    },
    {
      district: "KANPUR NAGAR",
      crimes: 6892,
    },
    {
      district: "KANSHIRAM NAGAR",
      crimes: 837,
    },
    {
      district: "KAUSHAMBI",
      crimes: 1188,
    },
    {
      district: "KHIRI",
      crimes: 2296,
    },
    {
      district: "KUSHI NAGAR",
      crimes: 1192,
    },
    {
      district: "LALITPUR",
      crimes: 616,
    },
    {
      district: "LUCKNOW",
      crimes: 12454,
    },
    {
      district: "MAHARAJGANJ",
      crimes: 1004,
    },
    {
      district: "MAHOBA",
      crimes: 586,
    },
    {
      district: "MAINPURI",
      crimes: 1644,
    },
    {
      district: "MATHURA",
      crimes: 4307,
    },
    {
      district: "MAU",
      crimes: 1075,
    },
    {
      district: "MEERUT",
      crimes: 6792,
    },
    {
      district: "MIRZAPUR",
      crimes: 1210,
    },
    {
      district: "MORADABAD",
      crimes: 4382,
    },
    {
      district: "MUZAFFARNAGAR",
      crimes: 4850,
    },
    {
      district: "PILIBHIT",
      crimes: 1989,
    },
    {
      district: "PRATAPGARH",
      crimes: 1670,
    },
    {
      district: "RAIBAREILLY",
      crimes: 1456,
    },
    {
      district: "RAMABAI NAGAR",
      crimes: 1717,
    },
    {
      district: "RAMPUR",
      crimes: 2326,
    },
    {
      district: "SAHARANPUR",
      crimes: 2786,
    },
    {
      district: "SANT KABIRNAGAR",
      crimes: 958,
    },
    {
      district: "SHAHJAHANPUR",
      crimes: 2359,
    },
    {
      district: "SHRAWASTI",
      crimes: 600,
    },
    {
      district: "SIDHARTHNAGAR",
      crimes: 617,
    },
    {
      district: "SITAPUR",
      crimes: 2830,
    },
    {
      district: "SONBHADRA",
      crimes: 978,
    },
    {
      district: "ST.RAVIDASNAGAR",
      crimes: 298,
    },
    {
      district: "SULTANPUR",
      crimes: 1554,
    },
    {
      district: "UNNAO",
      crimes: 1636,
    },
    {
      district: "VARANASI",
      crimes: 3060,
    },
    {
      district: "TOTAL",
      crimes: 174179,
    },
    {
      district: "ALMORA",
      crimes: 162,
    },
    {
      district: "BAGESHWAR",
      crimes: 46,
    },
    {
      district: "CHAMOLI",
      crimes: 109,
    },
    {
      district: "CHAMPAWAT",
      crimes: 96,
    },
    {
      district: "DEHRADUN",
      crimes: 2370,
    },
    {
      district: "HARIDWAR",
      crimes: 2654,
    },
    {
      district: "NAINITAL",
      crimes: 894,
    },
    {
      district: "PAURI GARHWAL",
      crimes: 197,
    },
    {
      district: "PITHORAGARH",
      crimes: 136,
    },
    {
      district: "RUDRA PRAYAG",
      crimes: 107,
    },
    {
      district: "TEHRI GARHWAL",
      crimes: 116,
    },
    {
      district: "UDHAMSINGH NAGAR",
      crimes: 2288,
    },
    {
      district: "UTTARKASHI",
      crimes: 65,
    },
    {
      district: "TOTAL",
      crimes: 9240,
    },
    {
      district: "24 PARGANAS NORTH",
      crimes: 15151,
    },
    {
      district: "24 PARGANAS SOUTH",
      crimes: 15299,
    },
    {
      district: "ASANSOL",
      crimes: 1841,
    },
    {
      district: "BANKURA",
      crimes: 2251,
    },
    {
      district: "BIRBHUM",
      crimes: 2547,
    },
    {
      district: "BURDWAN",
      crimes: 4996,
    },
    {
      district: "COOCHBEHAR",
      crimes: 3721,
    },
    {
      district: "DAKSHIN DINAJPUR",
      crimes: 2071,
    },
    {
      district: "DARJEELING",
      crimes: 2848,
    },
    {
      district: "HOOGHLY",
      crimes: 4748,
    },
    {
      district: "HOWRAH",
      crimes: 8519,
    },
    {
      district: "HOWRAH G.R.P.",
      crimes: 708,
    },
    {
      district: "JALPAIGURI",
      crimes: 7433,
    },
    {
      district: "KHARAGPUR G.R.P.",
      crimes: 129,
    },
    {
      district: "KOLKATA",
      crimes: 15510,
    },
    {
      district: "MALDA",
      crimes: 4286,
    },
    {
      district: "MURSHIDABAD",
      crimes: 13094,
    },
    {
      district: "NADIA",
      crimes: 9274,
    },
    {
      district: "PASCHIM MIDNAPUR",
      crimes: 4640,
    },
    {
      district: "PURAB MIDNAPUR",
      crimes: 4396,
    },
    {
      district: "PURULIA",
      crimes: 1795,
    },
    {
      district: "SEALDAH G.R.P.",
      crimes: 467,
    },
    {
      district: "SILIGURI G.R.P.",
      crimes: 133,
    },
    {
      district: "UTTAR DINAJPUR",
      crimes: 3759,
    },
    {
      district: "TOTAL",
      crimes: 129616,
    },
    {
      district: "ANDAMAN",
      crimes: 956,
    },
    {
      district: "NICOBAR",
      crimes: 24,
    },
    {
      district: "TOTAL",
      crimes: 980,
    },
    {
      district: "CHANDIGARH",
      crimes: 3373,
    },
    {
      district: "TOTAL",
      crimes: 3373,
    },
    {
      district: "D and N HAVELI",
      crimes: 378,
    },
    {
      district: "TOTAL",
      crimes: 378,
    },
    {
      district: "DAMAN",
      crimes: 164,
    },
    {
      district: "DIU",
      crimes: 39,
    },
    {
      district: "TOTAL",
      crimes: 203,
    },
    {
      district: "CAW",
      crimes: 187,
    },
    {
      district: "CENTRAL",
      crimes: 2828,
    },
    {
      district: "CRIME BRANCH",
      crimes: 61,
    },
    {
      district: "DELHI UT TOTAL",
      crimes: 51292,
    },
    {
      district: "EAST",
      crimes: 6723,
    },
    {
      district: "EOW",
      crimes: 150,
    },
    {
      district: "GRP(RLY)",
      crimes: 816,
    },
    {
      district: "IGI AIRPORT",
      crimes: 703,
    },
    {
      district: "NEW DELHI",
      crimes: 1452,
    },
    {
      district: "NORTH",
      crimes: 2889,
    },
    {
      district: "NORTH-EAST",
      crimes: 5062,
    },
    {
      district: "NORTH-WEST",
      crimes: 5016,
    },
    {
      district: "OUTER",
      crimes: 5495,
    },
    {
      district: "SOUTH",
      crimes: 5308,
    },
    {
      district: "SOUTH-EAST",
      crimes: 5606,
    },
    {
      district: "SOUTH-WEST",
      crimes: 3503,
    },
    {
      district: "STF",
      crimes: 18,
    },
    {
      district: "WEST",
      crimes: 5475,
    },
    {
      district: "LAKSHADWEEP",
      crimes: 42,
    },
    {
      district: "TOTAL",
      crimes: 42,
    },
    {
      district: "KARAIKAL",
      crimes: 762,
    },
    {
      district: "PUDUCHERRY",
      crimes: 3173,
    },
    {
      district: "TOTAL",
      crimes: 3935,
    },
    {
      district: "ADILABAD",
      crimes: 5121,
    },
    {
      district: "ANANTAPUR",
      crimes: 5430,
    },
    {
      district: "CHITTOOR",
      crimes: 5224,
    },
    {
      district: "CUDDAPAH",
      crimes: 5340,
    },
    {
      district: "CYBERABAD",
      crimes: 17645,
    },
    {
      district: "EAST GODAVARI",
      crimes: 7111,
    },
    {
      district: "GUNTAKAL RLY.",
      crimes: 297,
    },
    {
      district: "GUNTUR",
      crimes: 7026,
    },
    {
      district: "GUNTUR URBAN",
      crimes: 3933,
    },
    {
      district: "HYDERABAD CITY",
      crimes: 15657,
    },
    {
      district: "KARIMNAGAR",
      crimes: 8973,
    },
    {
      district: "KHAMMAM",
      crimes: 5961,
    },
    {
      district: "KRISHNA",
      crimes: 6857,
    },
    {
      district: "KURNOOL",
      crimes: 7441,
    },
    {
      district: "MAHABOOBNAGAR",
      crimes: 6675,
    },
    {
      district: "MEDAK",
      crimes: 5669,
    },
    {
      district: "NALGONDA",
      crimes: 7640,
    },
    {
      district: "NELLORE",
      crimes: 6294,
    },
    {
      district: "NIZAMABAD",
      crimes: 6391,
    },
    {
      district: "PRAKASHAM",
      crimes: 5980,
    },
    {
      district: "RAJAHMUNDRY",
      crimes: 2141,
    },
    {
      district: "RANGA REDDY",
      crimes: 1792,
    },
    {
      district: "SECUNDERABAD RLY.",
      crimes: 573,
    },
    {
      district: "SRIKAKULAM",
      crimes: 4161,
    },
    {
      district: "TIRUPATHI URBAN",
      crimes: 2948,
    },
    {
      district: "VIJAYAWADA CITY",
      crimes: 7225,
    },
    {
      district: "VIJAYAWADA RLY.",
      crimes: 479,
    },
    {
      district: "VISAKHA RURAL",
      crimes: 3468,
    },
    {
      district: "VISAKHAPATNAM",
      crimes: 4886,
    },
    {
      district: "VIZIANAGARAM",
      crimes: 4818,
    },
    {
      district: "WARANGAL",
      crimes: 4516,
    },
    {
      district: "WARANGAL URBAN",
      crimes: 3797,
    },
    {
      district: "WEST GODAVARI",
      crimes: 8311,
    },
    {
      district: "TOTAL",
      crimes: 189780,
    },
    {
      district: "ANJAW",
      crimes: 21,
    },
    {
      district: "CHANGLANG",
      crimes: 201,
    },
    {
      district: "DIBANG VALLEY",
      crimes: 90,
    },
    {
      district: "K/KUMEY",
      crimes: 33,
    },
    {
      district: "KAMENG EAST",
      crimes: 102,
    },
    {
      district: "KAMENG WEST",
      crimes: 118,
    },
    {
      district: "LOHIT",
      crimes: 158,
    },
    {
      district: "PAPUM PARE",
      crimes: 553,
    },
    {
      district: "RURAL",
      crimes: 99,
    },
    {
      district: "SIANG EAST",
      crimes: 235,
    },
    {
      district: "SIANG UPPER",
      crimes: 55,
    },
    {
      district: "SIANG WEST",
      crimes: 210,
    },
    {
      district: "SUBANSIRI LOWER",
      crimes: 78,
    },
    {
      district: "SUBANSIRI UPPER",
      crimes: 136,
    },
    {
      district: "TAWANG",
      crimes: 49,
    },
    {
      district: "TIRAP",
      crimes: 143,
    },
    {
      district: "UPPER DIBANG VALLEY",
      crimes: 5,
    },
    {
      district: "TOTAL",
      crimes: 2286,
    },
    {
      district: "BARPETA",
      crimes: 2962,
    },
    {
      district: "BASKA",
      crimes: 776,
    },
    {
      district: "BONGAIGAON",
      crimes: 1504,
    },
    {
      district: "C.I.D.",
      crimes: 57,
    },
    {
      district: "CACHAR",
      crimes: 4286,
    },
    {
      district: "CHIRANG",
      crimes: 676,
    },
    {
      district: "DARRANG",
      crimes: 2622,
    },
    {
      district: "DHEMAJI",
      crimes: 1092,
    },
    {
      district: "DHUBRI",
      crimes: 4244,
    },
    {
      district: "DIBRUGARH",
      crimes: 2529,
    },
    {
      district: "G.R.P.",
      crimes: 342,
    },
    {
      district: "GOALPARA",
      crimes: 2203,
    },
    {
      district: "GOLAGHAT",
      crimes: 2012,
    },
    {
      district: "GUWAHATI CITY",
      crimes: 10545,
    },
    {
      district: "HAILAKANDI",
      crimes: 1355,
    },
    {
      district: "JORHAT",
      crimes: 2147,
    },
    {
      district: "KAMRUP",
      crimes: 2868,
    },
    {
      district: "KARBI ANGLONG",
      crimes: 759,
    },
    {
      district: "KARIMGANJ",
      crimes: 2031,
    },
    {
      district: "KOKRAJHAR",
      crimes: 1238,
    },
    {
      district: "LAKHIMPUR",
      crimes: 2010,
    },
    {
      district: "MORIGAON",
      crimes: 1204,
    },
    {
      district: "N.C.HILLS",
      crimes: 220,
    },
    {
      district: "NAGAON",
      crimes: 5998,
    },
    {
      district: "NALBARI",
      crimes: 1832,
    },
    {
      district: "R.P.O.",
      crimes: 78,
    },
    {
      district: "SIBSAGAR",
      crimes: 2254,
    },
    {
      district: "SONITPUR",
      crimes: 3631,
    },
    {
      district: "TINSUKIA",
      crimes: 2285,
    },
    {
      district: "UDALGURI",
      crimes: 954,
    },
    {
      district: "TOTAL",
      crimes: 66714,
    },
    {
      district: "ARARIA",
      crimes: 2914,
    },
    {
      district: "ARWAL",
      crimes: 799,
    },
    {
      district: "AURANGABAD",
      crimes: 3409,
    },
    {
      district: "BAGAHA",
      crimes: 1623,
    },
    {
      district: "BANKA",
      crimes: 1765,
    },
    {
      district: "BEGUSARAI",
      crimes: 3420,
    },
    {
      district: "BETTIAH",
      crimes: 3903,
    },
    {
      district: "BHABHUA",
      crimes: 2025,
    },
    {
      district: "BHAGALPUR",
      crimes: 3024,
    },
    {
      district: "BHOJPUR",
      crimes: 3564,
    },
    {
      district: "BUXAR",
      crimes: 2236,
    },
    {
      district: "DARBHANGA",
      crimes: 5387,
    },
    {
      district: "GAYA",
      crimes: 5207,
    },
    {
      district: "GOPALGANJ",
      crimes: 3334,
    },
    {
      district: "JAMALPUR RLY.",
      crimes: 290,
    },
    {
      district: "JAMUI",
      crimes: 1902,
    },
    {
      district: "JEHANABAD",
      crimes: 1658,
    },
    {
      district: "KATIHAR",
      crimes: 3653,
    },
    {
      district: "KATIHAR RLY.",
      crimes: 390,
    },
    {
      district: "KHAGARIA",
      crimes: 1899,
    },
    {
      district: "KISHANGANJ",
      crimes: 1225,
    },
    {
      district: "LAKHISARAI",
      crimes: 1243,
    },
    {
      district: "MADHEPURA",
      crimes: 1810,
    },
    {
      district: "MADHUBANI",
      crimes: 4660,
    },
    {
      district: "MOTIHARI",
      crimes: 7489,
    },
    {
      district: "MUNGER",
      crimes: 1981,
    },
    {
      district: "MUZAFFARPUR",
      crimes: 6827,
    },
    {
      district: "MUZAFFARPUR RLY.",
      crimes: 524,
    },
    {
      district: "NALANDA",
      crimes: 4527,
    },
    {
      district: "NAUGACHIA",
      crimes: 1478,
    },
    {
      district: "NAWADAH",
      crimes: 2523,
    },
    {
      district: "PATNA",
      crimes: 13712,
    },
    {
      district: "PATNA RLY.",
      crimes: 1143,
    },
    {
      district: "PURNEA",
      crimes: 3332,
    },
    {
      district: "ROHTAS",
      crimes: 4203,
    },
    {
      district: "SAHARSA",
      crimes: 2020,
    },
    {
      district: "SAMASTIPUR",
      crimes: 4216,
    },
    {
      district: "SARAN",
      crimes: 5200,
    },
    {
      district: "SHEIKHPURA",
      crimes: 1031,
    },
    {
      district: "SHEOHAR",
      crimes: 614,
    },
    {
      district: "SITAMARHI",
      crimes: 3624,
    },
    {
      district: "SIWAN",
      crimes: 3408,
    },
    {
      district: "SUPAUL",
      crimes: 2043,
    },
    {
      district: "VAISHALI",
      crimes: 4661,
    },
    {
      district: "TOTAL",
      crimes: 135896,
    },
    {
      district: "BALRAMPUR",
      crimes: 908,
    },
    {
      district: "BILASPUR",
      crimes: 5446,
    },
    {
      district: "BIZAPUR",
      crimes: 325,
    },
    {
      district: "DANTEWARA",
      crimes: 674,
    },
    {
      district: "DHAMTARI",
      crimes: 1190,
    },
    {
      district: "DURG",
      crimes: 11218,
    },
    {
      district: "GARIYABAND",
      crimes: 687,
    },
    {
      district: "GRP RAIPUR",
      crimes: 277,
    },
    {
      district: "JAGDALPUR",
      crimes: 2262,
    },
    {
      district: "JANJGIR",
      crimes: 3335,
    },
    {
      district: "JASHPUR",
      crimes: 1312,
    },
    {
      district: "KABIRDHAM",
      crimes: 1417,
    },
    {
      district: "KANKER",
      crimes: 929,
    },
    {
      district: "KORBA",
      crimes: 2448,
    },
    {
      district: "KORIYA",
      crimes: 1690,
    },
    {
      district: "MAHASAMUND",
      crimes: 2140,
    },
    {
      district: "NARAYANPUR",
      crimes: 179,
    },
    {
      district: "RAIGARH",
      crimes: 3024,
    },
    {
      district: "RAIPUR",
      crimes: 10652,
    },
    {
      district: "RAJNANDGAON",
      crimes: 3133,
    },
    {
      district: "SARGUJA",
      crimes: 2312,
    },
    {
      district: "SURAJPUR",
      crimes: 1660,
    },
    {
      district: "TOTAL",
      crimes: 57218,
    },
    {
      district: "NORTH GOA",
      crimes: 2056,
    },
    {
      district: "SOUTH GOA",
      crimes: 1393,
    },
    {
      district: "TOTAL",
      crimes: 3449,
    },
    {
      district: "AHMEDABAD COMMR.",
      crimes: 20203,
    },
    {
      district: "AHMEDABAD RURAL",
      crimes: 3688,
    },
    {
      district: "AHWA-DANG",
      crimes: 227,
    },
    {
      district: "AMRELI",
      crimes: 2126,
    },
    {
      district: "ANAND",
      crimes: 3154,
    },
    {
      district: "BHARUCH",
      crimes: 2931,
    },
    {
      district: "BHAVNAGAR",
      crimes: 4257,
    },
    {
      district: "CID CRIME",
      crimes: 12,
    },
    {
      district: "DAHOD",
      crimes: 1910,
    },
    {
      district: "GANDHINAGAR",
      crimes: 5716,
    },
    {
      district: "HIMATNAGAR",
      crimes: 4667,
    },
    {
      district: "JAMNAGAR",
      crimes: 5126,
    },
    {
      district: "JUNAGADH",
      crimes: 4196,
    },
    {
      district: "KHEDA NORTH",
      crimes: 4868,
    },
    {
      district: "KUTCH (EAST(G))",
      crimes: 2626,
    },
    {
      district: "KUTCH (WEST-BHUJ)",
      crimes: 1919,
    },
    {
      district: "MEHSANA",
      crimes: 4368,
    },
    {
      district: "NARMADA",
      crimes: 625,
    },
    {
      district: "NAVSARI",
      crimes: 1370,
    },
    {
      district: "PALANPUR",
      crimes: 5273,
    },
    {
      district: "PANCHMAHAL",
      crimes: 3540,
    },
    {
      district: "PATAN",
      crimes: 3147,
    },
    {
      district: "PORBANDAR",
      crimes: 872,
    },
    {
      district: "RAJKOT COMMR.",
      crimes: 3939,
    },
    {
      district: "RAJKOT RURAL",
      crimes: 4582,
    },
    {
      district: "SURAT COMMR.",
      crimes: 8446,
    },
    {
      district: "SURAT RURAL",
      crimes: 3408,
    },
    {
      district: "SURENDRANAGAR",
      crimes: 3037,
    },
    {
      district: "TAPI",
      crimes: 716,
    },
    {
      district: "VADODARA COMMR.",
      crimes: 5727,
    },
    {
      district: "VADODARA RURAL",
      crimes: 3133,
    },
    {
      district: "VALSAD",
      crimes: 2532,
    },
    {
      district: "W.RLY AHMEDABAD",
      crimes: 325,
    },
    {
      district: "W.RLY VADODARA",
      crimes: 705,
    },
    {
      district: "TOTAL",
      crimes: 123371,
    },
    {
      district: "AMBALA",
      crimes: 2969,
    },
    {
      district: "BHIWANI",
      crimes: 3015,
    },
    {
      district: "FARIDABAD",
      crimes: 5357,
    },
    {
      district: "FATEHABAD",
      crimes: 1334,
    },
    {
      district: "GRP",
      crimes: 1265,
    },
    {
      district: "GURGAON",
      crimes: 6640,
    },
    {
      district: "HISSAR",
      crimes: 4371,
    },
    {
      district: "JHAJJAR",
      crimes: 2062,
    },
    {
      district: "JIND",
      crimes: 2271,
    },
    {
      district: "KAITHAL",
      crimes: 1855,
    },
    {
      district: "KARNAL",
      crimes: 3202,
    },
    {
      district: "KURUKSHETRA",
      crimes: 2151,
    },
    {
      district: "MAHENDRAGARH",
      crimes: 2011,
    },
    {
      district: "MEWAT",
      crimes: 1970,
    },
    {
      district: "PALWAL",
      crimes: 2396,
    },
    {
      district: "PANCHKULA",
      crimes: 1472,
    },
    {
      district: "PANIPAT",
      crimes: 3192,
    },
    {
      district: "REWARI",
      crimes: 2404,
    },
    {
      district: "ROHTAK",
      crimes: 3294,
    },
    {
      district: "SIRSA",
      crimes: 2371,
    },
    {
      district: "SONIPAT",
      crimes: 2954,
    },
    {
      district: "YAMUNANAGAR",
      crimes: 2185,
    },
    {
      district: "TOTAL",
      crimes: 60741,
    },
    {
      district: "BADDIPOLICEDIST",
      crimes: 579,
    },
    {
      district: "BILASPUR",
      crimes: 1077,
    },
    {
      district: "CHAMBA",
      crimes: 678,
    },
    {
      district: "CID",
      crimes: 2,
    },
    {
      district: "G.R.P.",
      crimes: 24,
    },
    {
      district: "HAMIRPUR",
      crimes: 793,
    },
    {
      district: "KANGRA",
      crimes: 2709,
    },
    {
      district: "KINNAUR",
      crimes: 162,
    },
    {
      district: "KULLU",
      crimes: 934,
    },
    {
      district: "LAHAUL-SPITI",
      crimes: 102,
    },
    {
      district: "MANDI",
      crimes: 1640,
    },
    {
      district: "SHIMLA",
      crimes: 2866,
    },
    {
      district: "SIRMAUR",
      crimes: 866,
    },
    {
      district: "SOLAN",
      crimes: 959,
    },
    {
      district: "UNA",
      crimes: 921,
    },
    {
      district: "TOTAL",
      crimes: 14312,
    },
    {
      district: "ANANTNAG",
      crimes: 1484,
    },
    {
      district: "AWANTIPORA",
      crimes: 509,
    },
    {
      district: "BANDIPORA",
      crimes: 577,
    },
    {
      district: "BARAMULLA",
      crimes: 1116,
    },
    {
      district: "BUDGAM",
      crimes: 1307,
    },
    {
      district: "CRIME JAMMU",
      crimes: 16,
    },
    {
      district: "CRIME SRINAGAR",
      crimes: 23,
    },
    {
      district: "DODA",
      crimes: 706,
    },
    {
      district: "GANDERBAL",
      crimes: 523,
    },
    {
      district: "HANDWARA",
      crimes: 535,
    },
    {
      district: "JAMMU",
      crimes: 4118,
    },
    {
      district: "KARGIL",
      crimes: 114,
    },
    {
      district: "KATHUA",
      crimes: 1170,
    },
    {
      district: "KISHTWAR",
      crimes: 420,
    },
    {
      district: "KULGAM",
      crimes: 686,
    },
    {
      district: "KUPWARA",
      crimes: 767,
    },
    {
      district: "LEH",
      crimes: 189,
    },
    {
      district: "POONCH",
      crimes: 822,
    },
    {
      district: "PULWAMA",
      crimes: 443,
    },
    {
      district: "RAILWAYS JAMMU",
      crimes: 15,
    },
    {
      district: "RAILWAYS KASHMIR",
      crimes: 27,
    },
    {
      district: "RAJOURI",
      crimes: 1832,
    },
    {
      district: "RAMBAN",
      crimes: 761,
    },
    {
      district: "REASI",
      crimes: 581,
    },
    {
      district: "SAMBA",
      crimes: 743,
    },
    {
      district: "SHOPIAN",
      crimes: 629,
    },
    {
      district: "SOPORE",
      crimes: 572,
    },
    {
      district: "SRINAGAR",
      crimes: 2756,
    },
    {
      district: "UDHAMPUR",
      crimes: 1063,
    },
    {
      district: "TOTAL",
      crimes: 24504,
    },
    {
      district: "BOKARO",
      crimes: 2973,
    },
    {
      district: "CHAIBASA",
      crimes: 844,
    },
    {
      district: "CHATRA",
      crimes: 925,
    },
    {
      district: "DEOGHAR",
      crimes: 1506,
    },
    {
      district: "DHANBAD",
      crimes: 3708,
    },
    {
      district: "DHANBAD RLY.",
      crimes: 384,
    },
    {
      district: "DUMKA",
      crimes: 1562,
    },
    {
      district: "GARHWA",
      crimes: 1865,
    },
    {
      district: "GIRIDIH",
      crimes: 2418,
    },
    {
      district: "GODDA",
      crimes: 1263,
    },
    {
      district: "GUMLA",
      crimes: 1036,
    },
    {
      district: "HAZARIBAGH",
      crimes: 2282,
    },
    {
      district: "JAMSHEDPUR",
      crimes: 3106,
    },
    {
      district: "JAMSHEDPUR RLY.",
      crimes: 251,
    },
    {
      district: "JAMTARA",
      crimes: 708,
    },
    {
      district: "KHUNTI",
      crimes: 403,
    },
    {
      district: "KODERMA",
      crimes: 1090,
    },
    {
      district: "LATEHAR",
      crimes: 513,
    },
    {
      district: "LOHARDAGGA",
      crimes: 622,
    },
    {
      district: "PAKUR",
      crimes: 721,
    },
    {
      district: "PALAMU",
      crimes: 2033,
    },
    {
      district: "RAMGARH",
      crimes: 979,
    },
    {
      district: "RANCHI",
      crimes: 2222,
    },
    {
      district: "SAHEBGANJ",
      crimes: 1128,
    },
    {
      district: "SARAIKELA",
      crimes: 900,
    },
    {
      district: "SIMDEGA",
      crimes: 396,
    },
    {
      district: "TOTAL",
      crimes: 35838,
    },
    {
      district: "BAGALKOT",
      crimes: 2255,
    },
    {
      district: "BANGALORE COMMR.",
      crimes: 30283,
    },
    {
      district: "BANGALORE RURAL",
      crimes: 4915,
    },
    {
      district: "BELGAUM",
      crimes: 7393,
    },
    {
      district: "BELLARY",
      crimes: 3205,
    },
    {
      district: "BIDAR",
      crimes: 3471,
    },
    {
      district: "BIJAPUR",
      crimes: 3040,
    },
    {
      district: "CBPURA",
      crimes: 2611,
    },
    {
      district: "CHAMARAJNAGAR",
      crimes: 1960,
    },
    {
      district: "CHICKMAGALUR",
      crimes: 2726,
    },
    {
      district: "CHITRADURGA",
      crimes: 4278,
    },
    {
      district: "DAKSHIN KANNADA",
      crimes: 1741,
    },
    {
      district: "DAVANAGERE",
      crimes: 2768,
    },
    {
      district: "DHARWAD COMMR.",
      crimes: 1856,
    },
    {
      district: "DHARWAD RURAL",
      crimes: 1297,
    },
    {
      district: "GADAG",
      crimes: 1100,
    },
    {
      district: "GULBARGA",
      crimes: 4537,
    },
    {
      district: "HASSAN",
      crimes: 6071,
    },
    {
      district: "HAVERI",
      crimes: 2356,
    },
    {
      district: "K.G.F.",
      crimes: 971,
    },
    {
      district: "KODAGU",
      crimes: 1901,
    },
    {
      district: "KOLAR",
      crimes: 2053,
    },
    {
      district: "KOPPAL",
      crimes: 1858,
    },
    {
      district: "MANDYA",
      crimes: 6120,
    },
    {
      district: "MANGALORE CITY",
      crimes: 2615,
    },
    {
      district: "MYSORE COMMR.",
      crimes: 3081,
    },
    {
      district: "MYSORE RURAL",
      crimes: 4383,
    },
    {
      district: "RAICHUR",
      crimes: 3491,
    },
    {
      district: "RAILWAYS",
      crimes: 672,
    },
    {
      district: "RAMANAGAR",
      crimes: 4337,
    },
    {
      district: "SHIMOGA",
      crimes: 5516,
    },
    {
      district: "TUMKUR",
      crimes: 5593,
    },
    {
      district: "UDUPI",
      crimes: 2578,
    },
    {
      district: "UTTAR KANNADA",
      crimes: 2976,
    },
    {
      district: "YADGIRI",
      crimes: 1592,
    },
    {
      district: "TOTAL",
      crimes: 137600,
    },
    {
      district: "ALAPUZHA",
      crimes: 9927,
    },
    {
      district: "ERNAKULAM COMMR.",
      crimes: 13192,
    },
    {
      district: "ERNAKULAM RURAL",
      crimes: 34638,
    },
    {
      district: "IDUKKI",
      crimes: 6196,
    },
    {
      district: "KANNUR",
      crimes: 7989,
    },
    {
      district: "KASARGOD",
      crimes: 3942,
    },
    {
      district: "KOLLAM COMMR.",
      crimes: 6357,
    },
    {
      district: "KOLLAM RURAL",
      crimes: 6536,
    },
    {
      district: "KOTTAYAM",
      crimes: 8448,
    },
    {
      district: "KOZHIKODE COMMR.",
      crimes: 3996,
    },
    {
      district: "KOZHIKODE RURAL",
      crimes: 7409,
    },
    {
      district: "MALAPPURAM",
      crimes: 13026,
    },
    {
      district: "PALAKKAD",
      crimes: 7721,
    },
    {
      district: "PATHANAMTHITTA",
      crimes: 5532,
    },
    {
      district: "RAILWAYS",
      crimes: 362,
    },
    {
      district: "THRISSUR COMMR.",
      crimes: 4891,
    },
    {
      district: "THRISSUR RURAL",
      crimes: 11486,
    },
    {
      district: "TRIVANDRUM COMMR.",
      crimes: 6591,
    },
    {
      district: "TRIVANDRUM RURAL",
      crimes: 9642,
    },
    {
      district: "WAYANADU",
      crimes: 4256,
    },
    {
      district: "TOTAL",
      crimes: 172137,
    },
    {
      district: "ALIRAJPUR",
      crimes: 1262,
    },
    {
      district: "ANUPPUR",
      crimes: 1435,
    },
    {
      district: "ASHOK NAGAR",
      crimes: 2613,
    },
    {
      district: "BALAGHAT",
      crimes: 2447,
    },
    {
      district: "BARWANI",
      crimes: 1914,
    },
    {
      district: "BETUL",
      crimes: 3278,
    },
    {
      district: "BHIND",
      crimes: 3695,
    },
    {
      district: "BHOPAL",
      crimes: 15123,
    },
    {
      district: "BHOPAL RLY.",
      crimes: 1448,
    },
    {
      district: "BURHANPUR",
      crimes: 1135,
    },
    {
      district: "CHHATARPUR",
      crimes: 5133,
    },
    {
      district: "CHHINDWARA",
      crimes: 5180,
    },
    {
      district: "DAMOH",
      crimes: 3649,
    },
    {
      district: "DATIYA",
      crimes: 2614,
    },
    {
      district: "DEWAS",
      crimes: 5434,
    },
    {
      district: "DHAR",
      crimes: 5547,
    },
    {
      district: "DINDORI",
      crimes: 1038,
    },
    {
      district: "GUNA",
      crimes: 3708,
    },
    {
      district: "GWALIOR",
      crimes: 11015,
    },
    {
      district: "HARDA",
      crimes: 1306,
    },
    {
      district: "HOSHANGABAD",
      crimes: 4078,
    },
    {
      district: "INDORE",
      crimes: 18569,
    },
    {
      district: "INDORE RLY.",
      crimes: 346,
    },
    {
      district: "JABALPUR",
      crimes: 10293,
    },
    {
      district: "JABALPUR RLY.",
      crimes: 615,
    },
    {
      district: "JHABUA",
      crimes: 2028,
    },
    {
      district: "KATNI",
      crimes: 3228,
    },
    {
      district: "KHANDWA",
      crimes: 2914,
    },
    {
      district: "KHARGON",
      crimes: 3874,
    },
    {
      district: "MANDLA",
      crimes: 2210,
    },
    {
      district: "MANDSAUR",
      crimes: 3542,
    },
    {
      district: "MORENA",
      crimes: 5160,
    },
    {
      district: "NARSINGHPUR",
      crimes: 2949,
    },
    {
      district: "NEEMUCH",
      crimes: 2091,
    },
    {
      district: "PANNA",
      crimes: 2277,
    },
    {
      district: "RAISEN",
      crimes: 4172,
    },
    {
      district: "RAJGARH",
      crimes: 4609,
    },
    {
      district: "RATLAM",
      crimes: 3829,
    },
    {
      district: "REWA",
      crimes: 5007,
    },
    {
      district: "SAGAR",
      crimes: 8978,
    },
    {
      district: "SATNA",
      crimes: 5445,
    },
    {
      district: "SEONI",
      crimes: 2712,
    },
    {
      district: "SHAHDOL",
      crimes: 3204,
    },
    {
      district: "SHAJAPUR",
      crimes: 3123,
    },
    {
      district: "SHEOPUR",
      crimes: 1276,
    },
    {
      district: "SHIVPURI",
      crimes: 4911,
    },
    {
      district: "SIDHI",
      crimes: 2536,
    },
    {
      district: "SIHORE",
      crimes: 4315,
    },
    {
      district: "SINGRAULI",
      crimes: 2123,
    },
    {
      district: "TIKAMGARH",
      crimes: 3240,
    },
    {
      district: "UJJAIN",
      crimes: 8411,
    },
    {
      district: "UMARIYA",
      crimes: 1404,
    },
    {
      district: "VIDISHA",
      crimes: 4651,
    },
    {
      district: "TOTAL",
      crimes: 217094,
    },
    {
      district: "AHMEDNAGAR",
      crimes: 7648,
    },
    {
      district: "AKOLA",
      crimes: 4025,
    },
    {
      district: "AMRAVATI COMMR.",
      crimes: 2931,
    },
    {
      district: "AMRAVATI RURAL",
      crimes: 4228,
    },
    {
      district: "AURANGABAD COMMR.",
      crimes: 3781,
    },
    {
      district: "AURANGABAD RURAL",
      crimes: 3214,
    },
    {
      district: "BEED",
      crimes: 4230,
    },
    {
      district: "BHANDARA",
      crimes: 2077,
    },
    {
      district: "BULDHANA",
      crimes: 3902,
    },
    {
      district: "CHANDRAPUR",
      crimes: 3828,
    },
    {
      district: "DHULE",
      crimes: 2749,
    },
    {
      district: "GADCHIROLI",
      crimes: 957,
    },
    {
      district: "GONDIA",
      crimes: 1947,
    },
    {
      district: "HINGOLI",
      crimes: 1743,
    },
    {
      district: "JALGAON",
      crimes: 5518,
    },
    {
      district: "JALNA",
      crimes: 3017,
    },
    {
      district: "KOLHAPUR",
      crimes: 4114,
    },
    {
      district: "LATUR",
      crimes: 3418,
    },
    {
      district: "MUMBAI COMMR.",
      crimes: 32647,
    },
    {
      district: "MUMBAI RLY.",
      crimes: 2471,
    },
    {
      district: "NAGPUR COMMR.",
      crimes: 8063,
    },
    {
      district: "NAGPUR RLY.",
      crimes: 1235,
    },
    {
      district: "NAGPUR RURAL",
      crimes: 3891,
    },
    {
      district: "NANDED",
      crimes: 5162,
    },
    {
      district: "NANDURBAR",
      crimes: 1486,
    },
    {
      district: "NASIK COMMR.",
      crimes: 4512,
    },
    {
      district: "NASIK RURAL",
      crimes: 4989,
    },
    {
      district: "NAVI MUMBAI",
      crimes: 5658,
    },
    {
      district: "OSMANABAD",
      crimes: 3083,
    },
    {
      district: "PARBHANI",
      crimes: 2967,
    },
    {
      district: "PUNE COMMR.",
      crimes: 12622,
    },
    {
      district: "PUNE RLY.",
      crimes: 462,
    },
    {
      district: "PUNE RURAL",
      crimes: 7902,
    },
    {
      district: "RAIGAD",
      crimes: 1997,
    },
    {
      district: "RATNAGIRI",
      crimes: 1463,
    },
    {
      district: "SANGLI",
      crimes: 2743,
    },
    {
      district: "SATARA",
      crimes: 4312,
    },
    {
      district: "SINDHUDURG",
      crimes: 792,
    },
    {
      district: "SOLAPUR COMMR.",
      crimes: 1965,
    },
    {
      district: "SOLAPUR RURAL",
      crimes: 4716,
    },
    {
      district: "THANE COMMR.",
      crimes: 9653,
    },
    {
      district: "THANE RURAL",
      crimes: 6005,
    },
    {
      district: "WARDHA",
      crimes: 3492,
    },
    {
      district: "WASHIM",
      crimes: 2279,
    },
    {
      district: "YAVATMAL",
      crimes: 5008,
    },
    {
      district: "TOTAL",
      crimes: 204902,
    },
    {
      district: "BISHNUPUR",
      crimes: 311,
    },
    {
      district: "CHANDEL",
      crimes: 63,
    },
    {
      district: "CHURACHANDPUR",
      crimes: 71,
    },
    {
      district: "CID",
      crimes: 2,
    },
    {
      district: "IMPHAL EAST",
      crimes: 509,
    },
    {
      district: "IMPHAL WEST",
      crimes: 1397,
    },
    {
      district: "SENAPATI",
      crimes: 161,
    },
    {
      district: "TAMENGLONG",
      crimes: 53,
    },
    {
      district: "THOUBAL",
      crimes: 585,
    },
    {
      district: "UKHRUL",
      crimes: 66,
    },
    {
      district: "TOTAL",
      crimes: 3218,
    },
    {
      district: "GARO HILLS EAST",
      crimes: 237,
    },
    {
      district: "GARO HILLS SOUTH",
      crimes: 115,
    },
    {
      district: "GARO HILLS WEST",
      crimes: 533,
    },
    {
      district: "JAINTIA HILLS",
      crimes: 425,
    },
    {
      district: "KHASI HILLS EAST",
      crimes: 943,
    },
    {
      district: "KHASI HILLS WEST",
      crimes: 267,
    },
    {
      district: "RI-BHOI",
      crimes: 235,
    },
    {
      district: "TOTAL",
      crimes: 2755,
    },
    {
      district: "AIZAWL",
      crimes: 983,
    },
    {
      district: "CHAMPHAI",
      crimes: 199,
    },
    {
      district: "KOLASIB",
      crimes: 146,
    },
    {
      district: "LAWNGTLAI",
      crimes: 64,
    },
    {
      district: "LUNGLEI",
      crimes: 191,
    },
    {
      district: "MAMIT",
      crimes: 85,
    },
    {
      district: "SAIHA",
      crimes: 79,
    },
    {
      district: "SERCHHIP",
      crimes: 74,
    },
    {
      district: "TOTAL",
      crimes: 1821,
    },
    {
      district: "DIMAPUR",
      crimes: 499,
    },
    {
      district: "KIPHIRE",
      crimes: 13,
    },
    {
      district: "KOHIMA",
      crimes: 208,
    },
    {
      district: "LONGLENG",
      crimes: 18,
    },
    {
      district: "MOKOKCHUNG",
      crimes: 56,
    },
    {
      district: "MON",
      crimes: 42,
    },
    {
      district: "PEREN",
      crimes: 22,
    },
    {
      district: "PHEK",
      crimes: 48,
    },
    {
      district: "TUENSANG",
      crimes: 42,
    },
    {
      district: "WOKHA",
      crimes: 65,
    },
    {
      district: "ZUNHEBOTO",
      crimes: 70,
    },
    {
      district: "TOTAL",
      crimes: 1083,
    },
    {
      district: "ANGUL",
      crimes: 3383,
    },
    {
      district: "BALASORE",
      crimes: 3741,
    },
    {
      district: "BARAGARH",
      crimes: 1737,
    },
    {
      district: "BERHAMPUR",
      crimes: 1698,
    },
    {
      district: "BHADRAK",
      crimes: 2377,
    },
    {
      district: "BOLANGIR",
      crimes: 1958,
    },
    {
      district: "BOUDH",
      crimes: 514,
    },
    {
      district: "CUTTACK",
      crimes: 2481,
    },
    {
      district: "DCP BBSR",
      crimes: 4057,
    },
    {
      district: "DCP CTC",
      crimes: 2261,
    },
    {
      district: "DEOGARH",
      crimes: 477,
    },
    {
      district: "DHENKANAL",
      crimes: 1738,
    },
    {
      district: "GAJAPATI",
      crimes: 362,
    },
    {
      district: "GANJAM",
      crimes: 2198,
    },
    {
      district: "JAGATSINGHPUR",
      crimes: 1590,
    },
    {
      district: "JAJPUR",
      crimes: 2492,
    },
    {
      district: "JHARSUGUDA",
      crimes: 1309,
    },
    {
      district: "KALAHANDI",
      crimes: 1593,
    },
    {
      district: "KANDHAMAL",
      crimes: 891,
    },
    {
      district: "KENDRAPARA",
      crimes: 1763,
    },
    {
      district: "KEONJHAR",
      crimes: 2161,
    },
    {
      district: "KHURDA",
      crimes: 1620,
    },
    {
      district: "KORAPUT",
      crimes: 1471,
    },
    {
      district: "MALKANGIR",
      crimes: 498,
    },
    {
      district: "MAYURBHANJ",
      crimes: 2565,
    },
    {
      district: "NAYAGARH",
      crimes: 1191,
    },
    {
      district: "NOWRANGPUR",
      crimes: 1035,
    },
    {
      district: "NUAPADA",
      crimes: 776,
    },
    {
      district: "PURI",
      crimes: 2944,
    },
    {
      district: "RAYAGADA",
      crimes: 1005,
    },
    {
      district: "ROURKELA",
      crimes: 1705,
    },
    {
      district: "SAMBALPUR",
      crimes: 2647,
    },
    {
      district: "SONEPUR",
      crimes: 660,
    },
    {
      district: "SRP(CUTTACK)",
      crimes: 648,
    },
    {
      district: "SRP(ROURKELA)",
      crimes: 492,
    },
    {
      district: "SUNDARGARH",
      crimes: 1239,
    },
    {
      district: "TOTAL",
      crimes: 61277,
    },
    {
      district: "AMRITSAR",
      crimes: 1171,
    },
    {
      district: "BARNALA",
      crimes: 824,
    },
    {
      district: "BATALA",
      crimes: 858,
    },
    {
      district: "BHATINDA",
      crimes: 1609,
    },
    {
      district: "CP AMRITSAR",
      crimes: 1807,
    },
    {
      district: "CP JALANDHAR",
      crimes: 1962,
    },
    {
      district: "CP LUDHIANA",
      crimes: 3154,
    },
    {
      district: "FARIDKOT",
      crimes: 760,
    },
    {
      district: "FATEHGARH SAHIB",
      crimes: 792,
    },
    {
      district: "FAZILKA",
      crimes: 840,
    },
    {
      district: "FEROZPUR",
      crimes: 1213,
    },
    {
      district: "G.R.P",
      crimes: 351,
    },
    {
      district: "GURDASPUR",
      crimes: 780,
    },
    {
      district: "HOSHIARPUR",
      crimes: 1621,
    },
    {
      district: "JALANDHAR",
      crimes: 1602,
    },
    {
      district: "KAPURTHALA",
      crimes: 1182,
    },
    {
      district: "KHANNA",
      crimes: 872,
    },
    {
      district: "LUDHIANA",
      crimes: 867,
    },
    {
      district: "MANSA",
      crimes: 583,
    },
    {
      district: "MOGA",
      crimes: 1338,
    },
    {
      district: "MUKTSAR",
      crimes: 739,
    },
    {
      district: "PATHANKOT",
      crimes: 541,
    },
    {
      district: "PATIALA",
      crimes: 2653,
    },
    {
      district: "ROPAR",
      crimes: 1083,
    },
    {
      district: "SANGRUR",
      crimes: 1870,
    },
    {
      district: "SAS NGR",
      crimes: 2068,
    },
    {
      district: "SBS NAGAR",
      crimes: 729,
    },
    {
      district: "TARN TARAN",
      crimes: 1014,
    },
    {
      district: "TOTAL",
      crimes: 34883,
    },
    {
      district: "AJMER",
      crimes: 6627,
    },
    {
      district: "ALWAR",
      crimes: 10643,
    },
    {
      district: "BANSWARA",
      crimes: 2567,
    },
    {
      district: "BARAN",
      crimes: 3488,
    },
    {
      district: "BARMER",
      crimes: 3392,
    },
    {
      district: "BHARATPUR",
      crimes: 9120,
    },
    {
      district: "BHILWARA",
      crimes: 4697,
    },
    {
      district: "BIKANER",
      crimes: 3831,
    },
    {
      district: "BUNDI",
      crimes: 3305,
    },
    {
      district: "CHITTORGARH",
      crimes: 4246,
    },
    {
      district: "CHURU",
      crimes: 3068,
    },
    {
      district: "DAUSA",
      crimes: 5145,
    },
    {
      district: "DHOLPUR",
      crimes: 3743,
    },
    {
      district: "DUNGARPUR",
      crimes: 2030,
    },
    {
      district: "G.R.P.AJMER",
      crimes: 665,
    },
    {
      district: "G.R.P.JODHPUR",
      crimes: 155,
    },
    {
      district: "GANGANAGAR",
      crimes: 5433,
    },
    {
      district: "HANUMANGARH",
      crimes: 3994,
    },
    {
      district: "JAIPUR EAST",
      crimes: 6375,
    },
    {
      district: "JAIPUR NORTH",
      crimes: 3396,
    },
    {
      district: "JAIPUR RURAL",
      crimes: 5205,
    },
    {
      district: "JAIPUR SOUTH",
      crimes: 4135,
    },
    {
      district: "JAIPUR WEST",
      crimes: 4991,
    },
    {
      district: "JAISALMER",
      crimes: 1081,
    },
    {
      district: "JALORE",
      crimes: 2465,
    },
    {
      district: "JHALAWAR",
      crimes: 3596,
    },
    {
      district: "JHUNJHUNU",
      crimes: 4078,
    },
    {
      district: "JODHPUR CITY",
      crimes: 4270,
    },
    {
      district: "JODHPUR RURAL",
      crimes: 2545,
    },
    {
      district: "KARAULI",
      crimes: 4402,
    },
    {
      district: "KOTA CITY",
      crimes: 4176,
    },
    {
      district: "KOTA RURAL",
      crimes: 2311,
    },
    {
      district: "NAGAUR",
      crimes: 4258,
    },
    {
      district: "PALI",
      crimes: 5347,
    },
    {
      district: "PRATAPGARH",
      crimes: 2253,
    },
    {
      district: "RAJSAMAND",
      crimes: 2282,
    },
    {
      district: "SAWAI MADHOPUR",
      crimes: 3725,
    },
    {
      district: "SIKAR",
      crimes: 5417,
    },
    {
      district: "SIROHI",
      crimes: 1952,
    },
    {
      district: "TONK",
      crimes: 3274,
    },
    {
      district: "UDAIPUR",
      crimes: 7939,
    },
    {
      district: "TOTAL",
      crimes: 165622,
    },
    {
      district: "EAST",
      crimes: 249,
    },
    {
      district: "NORTH",
      crimes: 46,
    },
    {
      district: "SOUTH",
      crimes: 195,
    },
    {
      district: "WEST",
      crimes: 106,
    },
    {
      district: "TOTAL",
      crimes: 596,
    },
    {
      district: "ARIYALUR",
      crimes: 1953,
    },
    {
      district: "CHENNAI",
      crimes: 21346,
    },
    {
      district: "CHENNAI RLY.",
      crimes: 515,
    },
    {
      district: "COIMBATORE RURAL",
      crimes: 4590,
    },
    {
      district: "COIMBATORE URBAN",
      crimes: 4030,
    },
    {
      district: "CUDDALORE",
      crimes: 9215,
    },
    {
      district: "DHARMAPURI",
      crimes: 3574,
    },
    {
      district: "DINDIGUL",
      crimes: 5426,
    },
    {
      district: "ERODE",
      crimes: 6198,
    },
    {
      district: "KANCHIPURAM",
      crimes: 6269,
    },
    {
      district: "KANYAKUMARI",
      crimes: 5199,
    },
    {
      district: "KARUR",
      crimes: 2574,
    },
    {
      district: "KRISHNAGIRI",
      crimes: 4506,
    },
    {
      district: "MADURAI RURAL",
      crimes: 6165,
    },
    {
      district: "MADURAI URBAN",
      crimes: 2873,
    },
    {
      district: "NAGAPATTINAM",
      crimes: 4153,
    },
    {
      district: "NAMAKKAL",
      crimes: 4526,
    },
    {
      district: "NILGIRIS",
      crimes: 1324,
    },
    {
      district: "PERAMBALUR",
      crimes: 1518,
    },
    {
      district: "PUDUKOTTAI",
      crimes: 3573,
    },
    {
      district: "RAMNATHAPURAM",
      crimes: 3511,
    },
    {
      district: "SALEM RURAL",
      crimes: 6222,
    },
    {
      district: "SALEM URBAN",
      crimes: 3445,
    },
    {
      district: "SIVAGANGAI",
      crimes: 3074,
    },
    {
      district: "THANJAVUR",
      crimes: 6528,
    },
    {
      district: "THENI",
      crimes: 5019,
    },
    {
      district: "THIRUNELVELI RURAL",
      crimes: 7943,
    },
    {
      district: "THIRUNELVELI URBAN",
      crimes: 1234,
    },
    {
      district: "THIRUVALLUR",
      crimes: 3453,
    },
    {
      district: "THIRUVANNAMALAI",
      crimes: 4298,
    },
    {
      district: "THIRUVARUR",
      crimes: 4397,
    },
    {
      district: "THOOTHUGUDI",
      crimes: 5405,
    },
    {
      district: "TIRUPPUR",
      crimes: 6769,
    },
    {
      district: "TRICHY RLY.",
      crimes: 230,
    },
    {
      district: "TRICHY RURAL",
      crimes: 4796,
    },
    {
      district: "TRICHY URBAN",
      crimes: 3496,
    },
    {
      district: "VELLORE",
      crimes: 7672,
    },
    {
      district: "VILLUPURAM",
      crimes: 10945,
    },
    {
      district: "VIRUDHUNAGAR",
      crimes: 4915,
    },
    {
      district: "TOTAL",
      crimes: 192879,
    },
    {
      district: "DHALAI",
      crimes: 437,
    },
    {
      district: "GRP",
      crimes: 11,
    },
    {
      district: "NORTH",
      crimes: 871,
    },
    {
      district: "SOUTH",
      crimes: 1775,
    },
    {
      district: "WEST",
      crimes: 2709,
    },
    {
      district: "TOTAL",
      crimes: 5803,
    },
    {
      district: "AGRA",
      crimes: 10290,
    },
    {
      district: "ALIGARH",
      crimes: 5881,
    },
    {
      district: "ALLAHABAD",
      crimes: 6256,
    },
    {
      district: "AMBEDKAR NAGAR",
      crimes: 1283,
    },
    {
      district: "AURAIYA",
      crimes: 1183,
    },
    {
      district: "AZAMGARH",
      crimes: 2173,
    },
    {
      district: "BADAUN",
      crimes: 2599,
    },
    {
      district: "BAGHPAT",
      crimes: 1736,
    },
    {
      district: "BAHRAICH",
      crimes: 2679,
    },
    {
      district: "BALLIA",
      crimes: 1148,
    },
    {
      district: "BALRAMPUR",
      crimes: 657,
    },
    {
      district: "BANDA",
      crimes: 1281,
    },
    {
      district: "BARABANKI",
      crimes: 2216,
    },
    {
      district: "BAREILLY",
      crimes: 5010,
    },
    {
      district: "BASTI",
      crimes: 796,
    },
    {
      district: "BHIM NAGAR",
      crimes: 1737,
    },
    {
      district: "BIJNOR",
      crimes: 2555,
    },
    {
      district: "BULANDSHAHAR",
      crimes: 3898,
    },
    {
      district: "CHANDOLI",
      crimes: 936,
    },
    {
      district: "CHITRAKOOT DHAM",
      crimes: 588,
    },
    {
      district: "CSM NAGAR",
      crimes: 1187,
    },
    {
      district: "DEORIA",
      crimes: 1188,
    },
    {
      district: "ETAH",
      crimes: 1695,
    },
    {
      district: "ETAWAH",
      crimes: 2134,
    },
    {
      district: "FAIZABAD",
      crimes: 2049,
    },
    {
      district: "FATEHGARH",
      crimes: 1185,
    },
    {
      district: "FATEHPUR",
      crimes: 2256,
    },
    {
      district: "FIROZABAD",
      crimes: 2969,
    },
    {
      district: "G.R.P.",
      crimes: 5116,
    },
    {
      district: "GAUTAMBUDH NAGAR",
      crimes: 6215,
    },
    {
      district: "GHAZIABAD",
      crimes: 7813,
    },
    {
      district: "GHAZIPUR",
      crimes: 794,
    },
    {
      district: "GONDA",
      crimes: 2481,
    },
    {
      district: "GORAKHPUR",
      crimes: 5074,
    },
    {
      district: "HAMIRPUR",
      crimes: 638,
    },
    {
      district: "HARDOI",
      crimes: 3104,
    },
    {
      district: "HATHRAS",
      crimes: 1595,
    },
    {
      district: "J.P.NAGAR",
      crimes: 1511,
    },
    {
      district: "JALAUN",
      crimes: 1066,
    },
    {
      district: "JAUNPUR",
      crimes: 1640,
    },
    {
      district: "JHANSI",
      crimes: 1934,
    },
    {
      district: "KANNAUJ",
      crimes: 2058,
    },
    {
      district: "KANPUR NAGAR",
      crimes: 7661,
    },
    {
      district: "KANSHIRAM NAGAR",
      crimes: 984,
    },
    {
      district: "KAUSHAMBI",
      crimes: 1410,
    },
    {
      district: "KHIRI",
      crimes: 2842,
    },
    {
      district: "KUSHI NAGAR",
      crimes: 1529,
    },
    {
      district: "LALITPUR",
      crimes: 828,
    },
    {
      district: "LUCKNOW",
      crimes: 10538,
    },
    {
      district: "MAHARAJGANJ",
      crimes: 764,
    },
    {
      district: "MAHOBA",
      crimes: 644,
    },
    {
      district: "MAINPURI",
      crimes: 2212,
    },
    {
      district: "MATHURA",
      crimes: 4546,
    },
    {
      district: "MAU",
      crimes: 1270,
    },
    {
      district: "MEERUT",
      crimes: 7607,
    },
    {
      district: "MIRZAPUR",
      crimes: 1012,
    },
    {
      district: "MORADABAD",
      crimes: 3618,
    },
    {
      district: "MUZAFFARNAGAR",
      crimes: 4079,
    },
    {
      district: "PANCHSHIL NAGAR",
      crimes: 2059,
    },
    {
      district: "PILIBHIT",
      crimes: 2633,
    },
    {
      district: "PRABUDDH NAGAR",
      crimes: 1286,
    },
    {
      district: "PRATAPGARH",
      crimes: 1854,
    },
    {
      district: "RAIBAREILLY",
      crimes: 1553,
    },
    {
      district: "RAMABAI NAGAR",
      crimes: 1950,
    },
    {
      district: "RAMPUR",
      crimes: 2514,
    },
    {
      district: "SAHARANPUR",
      crimes: 3079,
    },
    {
      district: "SANT KABIRNAGAR",
      crimes: 792,
    },
    {
      district: "SHAHJAHANPUR",
      crimes: 2620,
    },
    {
      district: "SHRAWASTI",
      crimes: 576,
    },
    {
      district: "SIDHARTHNAGAR",
      crimes: 661,
    },
    {
      district: "SITAPUR",
      crimes: 3394,
    },
    {
      district: "SONBHADRA",
      crimes: 905,
    },
    {
      district: "ST.RAVIDASNAGAR",
      crimes: 348,
    },
    {
      district: "SULTANPUR",
      crimes: 1551,
    },
    {
      district: "UNNAO",
      crimes: 2191,
    },
    {
      district: "VARANASI",
      crimes: 3021,
    },
    {
      district: "TOTAL",
      crimes: 195135,
    },
    {
      district: "ALMORA",
      crimes: 122,
    },
    {
      district: "BAGESHWAR",
      crimes: 48,
    },
    {
      district: "CHAMOLI",
      crimes: 80,
    },
    {
      district: "CHAMPAWAT",
      crimes: 90,
    },
    {
      district: "DEHRADUN",
      crimes: 1969,
    },
    {
      district: "HARIDWAR",
      crimes: 2632,
    },
    {
      district: "NAINITAL",
      crimes: 768,
    },
    {
      district: "PAURI GARHWAL",
      crimes: 209,
    },
    {
      district: "PITHORAGARH",
      crimes: 157,
    },
    {
      district: "RUDRA PRAYAG",
      crimes: 94,
    },
    {
      district: "TEHRI GARHWAL",
      crimes: 97,
    },
    {
      district: "UDHAMSINGH NAGAR",
      crimes: 2433,
    },
    {
      district: "UTTARKASHI",
      crimes: 75,
    },
    {
      district: "TOTAL",
      crimes: 8774,
    },
    {
      district: "24 PARGANAS NORTH",
      crimes: 17412,
    },
    {
      district: "24 PARGANAS SOUTH",
      crimes: 15252,
    },
    {
      district: "ASANSOL",
      crimes: 3381,
    },
    {
      district: "BANKURA",
      crimes: 2296,
    },
    {
      district: "BIRBHUM",
      crimes: 2511,
    },
    {
      district: "BURDWAN",
      crimes: 3997,
    },
    {
      district: "COOCHBEHAR",
      crimes: 3354,
    },
    {
      district: "DAKSHIN DINAJPUR",
      crimes: 2336,
    },
    {
      district: "DARJEELING",
      crimes: 3555,
    },
    {
      district: "HOOGHLY",
      crimes: 5391,
    },
    {
      district: "HOWRAH",
      crimes: 5447,
    },
    {
      district: "HOWRAH CITY",
      crimes: 4709,
    },
    {
      district: "HOWRAH G.R.P.",
      crimes: 667,
    },
    {
      district: "JALPAIGURI",
      crimes: 7886,
    },
    {
      district: "KHARAGPUR G.R.P.",
      crimes: 225,
    },
    {
      district: "KOLKATA",
      crimes: 17152,
    },
    {
      district: "MALDA",
      crimes: 4496,
    },
    {
      district: "MURSHIDABAD",
      crimes: 14154,
    },
    {
      district: "NADIA",
      crimes: 12271,
    },
    {
      district: "PASCHIM MIDNAPUR",
      crimes: 5494,
    },
    {
      district: "PURAB MIDNAPUR",
      crimes: 4665,
    },
    {
      district: "PURULIA",
      crimes: 1895,
    },
    {
      district: "SEALDAH G.R.P.",
      crimes: 535,
    },
    {
      district: "SILIGURI G.R.P.",
      crimes: 231,
    },
    {
      district: "UTTAR DINAJPUR",
      crimes: 3885,
    },
    {
      district: "TOTAL",
      crimes: 143197,
    },
    {
      district: "ANDAMAN",
      crimes: 771,
    },
    {
      district: "NICOBAR",
      crimes: 22,
    },
    {
      district: "TOTAL",
      crimes: 793,
    },
    {
      district: "CHANDIGARH",
      crimes: 3542,
    },
    {
      district: "TOTAL",
      crimes: 3542,
    },
    {
      district: "D and N HAVELI",
      crimes: 372,
    },
    {
      district: "TOTAL",
      crimes: 372,
    },
    {
      district: "DAMAN",
      crimes: 170,
    },
    {
      district: "DIU",
      crimes: 54,
    },
    {
      district: "TOTAL",
      crimes: 224,
    },
    {
      district: "CAW",
      crimes: 130,
    },
    {
      district: "CENTRAL",
      crimes: 2451,
    },
    {
      district: "CRIME BRANCH",
      crimes: 121,
    },
    {
      district: "DELHI UT TOTAL",
      crimes: 53353,
    },
    {
      district: "EAST",
      crimes: 7004,
    },
    {
      district: "EOW",
      crimes: 149,
    },
    {
      district: "GRP(RLY)",
      crimes: 972,
    },
    {
      district: "IGI AIRPORT",
      crimes: 565,
    },
    {
      district: "NEW DELHI",
      crimes: 1181,
    },
    {
      district: "NORTH",
      crimes: 2841,
    },
    {
      district: "NORTH-EAST",
      crimes: 5734,
    },
    {
      district: "NORTH-WEST",
      crimes: 4889,
    },
    {
      district: "OUTER",
      crimes: 6118,
    },
    {
      district: "SOUTH",
      crimes: 5141,
    },
    {
      district: "SOUTH-EAST",
      crimes: 6377,
    },
    {
      district: "SOUTH-WEST",
      crimes: 3783,
    },
    {
      district: "STF",
      crimes: 14,
    },
    {
      district: "WEST",
      crimes: 5883,
    },
    {
      district: "LAKSHADWEEP",
      crimes: 44,
    },
    {
      district: "TOTAL",
      crimes: 44,
    },
    {
      district: "KARAIKAL",
      crimes: 753,
    },
    {
      district: "PUDUCHERRY",
      crimes: 3609,
    },
    {
      district: "TOTAL",
      crimes: 4362,
    },
    {
      district: "ADILABAD",
      crimes: 5710,
    },
    {
      district: "ANANTAPUR",
      crimes: 5441,
    },
    {
      district: "CHITTOOR",
      crimes: 4465,
    },
    {
      district: "CUDDAPAH",
      crimes: 6110,
    },
    {
      district: "CYBERABAD",
      crimes: 17979,
    },
    {
      district: "EAST GODAVARI",
      crimes: 6945,
    },
    {
      district: "GUNTAKAL RLY.",
      crimes: 339,
    },
    {
      district: "GUNTUR",
      crimes: 7371,
    },
    {
      district: "GUNTUR URBAN",
      crimes: 4687,
    },
    {
      district: "HYDERABAD CITY",
      crimes: 15992,
    },
    {
      district: "KARIMNAGAR",
      crimes: 8991,
    },
    {
      district: "KHAMMAM",
      crimes: 6041,
    },
    {
      district: "KRISHNA",
      crimes: 7211,
    },
    {
      district: "KURNOOL",
      crimes: 6687,
    },
    {
      district: "MAHABOOBNAGAR",
      crimes: 6485,
    },
    {
      district: "MEDAK",
      crimes: 6070,
    },
    {
      district: "NALGONDA",
      crimes: 8934,
    },
    {
      district: "NELLORE",
      crimes: 6854,
    },
    {
      district: "NIZAMABAD",
      crimes: 5542,
    },
    {
      district: "PRAKASHAM",
      crimes: 6675,
    },
    {
      district: "RAJAHMUNDRY",
      crimes: 2125,
    },
    {
      district: "RANGA REDDY",
      crimes: 2094,
    },
    {
      district: "SECUNDERABAD RLY.",
      crimes: 916,
    },
    {
      district: "SRIKAKULAM",
      crimes: 3818,
    },
    {
      district: "TIRUPATHI URBAN",
      crimes: 2609,
    },
    {
      district: "VIJAYAWADA CITY",
      crimes: 7686,
    },
    {
      district: "VIJAYAWADA RLY.",
      crimes: 732,
    },
    {
      district: "VISAKHA RURAL",
      crimes: 2733,
    },
    {
      district: "VISAKHAPATNAM",
      crimes: 4626,
    },
    {
      district: "VIZIANAGARAM",
      crimes: 4482,
    },
    {
      district: "WARANGAL",
      crimes: 4722,
    },
    {
      district: "WARANGAL URBAN",
      crimes: 3583,
    },
    {
      district: "WEST GODAVARI",
      crimes: 7867,
    },
    {
      district: "TOTAL",
      crimes: 192522,
    },
    {
      district: "ANJAW",
      crimes: 15,
    },
    {
      district: "CHANGLANG",
      crimes: 223,
    },
    {
      district: "DIBANG VALLEY",
      crimes: 78,
    },
    {
      district: "K/KUMEY",
      crimes: 29,
    },
    {
      district: "KAMENG EAST",
      crimes: 140,
    },
    {
      district: "KAMENG WEST",
      crimes: 112,
    },
    {
      district: "LOHIT",
      crimes: 226,
    },
    {
      district: "PAPUM PARE",
      crimes: 505,
    },
    {
      district: "RURAL",
      crimes: 104,
    },
    {
      district: "SIANG EAST",
      crimes: 170,
    },
    {
      district: "SIANG UPPER",
      crimes: 51,
    },
    {
      district: "SIANG WEST",
      crimes: 218,
    },
    {
      district: "SUBANSIRI LOWER",
      crimes: 136,
    },
    {
      district: "SUBANSIRI UPPER",
      crimes: 168,
    },
    {
      district: "TAWANG",
      crimes: 46,
    },
    {
      district: "TIRAP",
      crimes: 187,
    },
    {
      district: "UPPER DIBANG VALLEY",
      crimes: 12,
    },
    {
      district: "TOTAL",
      crimes: 2420,
    },
    {
      district: "BAKSA",
      crimes: 664,
    },
    {
      district: "BARPETA",
      crimes: 4764,
    },
    {
      district: "BIEO",
      crimes: 16,
    },
    {
      district: "BONGAIGAON",
      crimes: 1381,
    },
    {
      district: "C.I.D.",
      crimes: 65,
    },
    {
      district: "CACHAR",
      crimes: 4658,
    },
    {
      district: "CHIRANG",
      crimes: 718,
    },
    {
      district: "DARRANG",
      crimes: 2607,
    },
    {
      district: "DHEMAJI",
      crimes: 1107,
    },
    {
      district: "DHUBRI",
      crimes: 4633,
    },
    {
      district: "DIBRUGARH",
      crimes: 2997,
    },
    {
      district: "G.R.P.",
      crimes: 511,
    },
    {
      district: "GOALPARA",
      crimes: 2415,
    },
    {
      district: "GOLAGHAT",
      crimes: 2245,
    },
    {
      district: "GUWAHATI CITY",
      crimes: 8730,
    },
    {
      district: "HAILAKANDI",
      crimes: 1322,
    },
    {
      district: "HAMREN",
      crimes: 150,
    },
    {
      district: "JORHAT",
      crimes: 2612,
    },
    {
      district: "KAMRUP",
      crimes: 5022,
    },
    {
      district: "KARBI ANGLONG",
      crimes: 824,
    },
    {
      district: "KARIMGANJ",
      crimes: 2210,
    },
    {
      district: "KOKRAJHAR",
      crimes: 6459,
    },
    {
      district: "LAKHIMPUR",
      crimes: 1968,
    },
    {
      district: "MORIGAON",
      crimes: 1449,
    },
    {
      district: "N.C.HILLS",
      crimes: 249,
    },
    {
      district: "NAGAON",
      crimes: 5980,
    },
    {
      district: "NALBARI",
      crimes: 1801,
    },
    {
      district: "R.P.O.",
      crimes: 100,
    },
    {
      district: "SIBSAGAR",
      crimes: 2686,
    },
    {
      district: "SONITPUR",
      crimes: 3980,
    },
    {
      district: "TINSUKIA",
      crimes: 2544,
    },
    {
      district: "UDALGURI",
      crimes: 815,
    },
    {
      district: "TOTAL",
      crimes: 77682,
    },
    {
      district: "ARARIA",
      crimes: 2526,
    },
    {
      district: "ARWAL",
      crimes: 858,
    },
    {
      district: "AURANGABAD",
      crimes: 3279,
    },
    {
      district: "BAGAHA",
      crimes: 1729,
    },
    {
      district: "BANKA",
      crimes: 1801,
    },
    {
      district: "BEGUSARAI",
      crimes: 3717,
    },
    {
      district: "BETTIAH",
      crimes: 5073,
    },
    {
      district: "BHABHUA",
      crimes: 1867,
    },
    {
      district: "BHAGALPUR",
      crimes: 3134,
    },
    {
      district: "BHOJPUR",
      crimes: 3846,
    },
    {
      district: "BUXAR",
      crimes: 2566,
    },
    {
      district: "DARBHANGA",
      crimes: 6314,
    },
    {
      district: "GAYA",
      crimes: 6082,
    },
    {
      district: "GOPALGANJ",
      crimes: 3959,
    },
    {
      district: "JAMALPUR RLY.",
      crimes: 264,
    },
    {
      district: "JAMUI",
      crimes: 1752,
    },
    {
      district: "JEHANABAD",
      crimes: 1448,
    },
    {
      district: "KATIHAR",
      crimes: 4072,
    },
    {
      district: "KATIHAR RLY.",
      crimes: 317,
    },
    {
      district: "KHAGARIA",
      crimes: 2257,
    },
    {
      district: "KISHANGANJ",
      crimes: 1420,
    },
    {
      district: "LAKHISARAI",
      crimes: 1238,
    },
    {
      district: "MADHEPURA",
      crimes: 2293,
    },
    {
      district: "MADHUBANI",
      crimes: 4887,
    },
    {
      district: "MOTIHARI",
      crimes: 7833,
    },
    {
      district: "MUNGER",
      crimes: 1829,
    },
    {
      district: "MUZAFFARPUR",
      crimes: 7306,
    },
    {
      district: "MUZAFFARPUR RLY.",
      crimes: 553,
    },
    {
      district: "NALANDA",
      crimes: 4993,
    },
    {
      district: "NAUGACHIA",
      crimes: 1494,
    },
    {
      district: "NAWADAH",
      crimes: 2729,
    },
    {
      district: "PATNA",
      crimes: 14015,
    },
    {
      district: "PATNA RLY.",
      crimes: 1088,
    },
    {
      district: "PURNEA",
      crimes: 3953,
    },
    {
      district: "ROHTAS",
      crimes: 3665,
    },
    {
      district: "SAHARSA",
      crimes: 2421,
    },
    {
      district: "SAMASTIPUR",
      crimes: 4817,
    },
    {
      district: "SARAN",
      crimes: 5254,
    },
    {
      district: "SHEIKHPURA",
      crimes: 1189,
    },
    {
      district: "SHEOHAR",
      crimes: 603,
    },
    {
      district: "SITAMARHI",
      crimes: 3982,
    },
    {
      district: "SIWAN",
      crimes: 4379,
    },
    {
      district: "SUPAUL",
      crimes: 2626,
    },
    {
      district: "VAISHALI",
      crimes: 5186,
    },
    {
      district: "TOTAL",
      crimes: 146614,
    },
    {
      district: "BALOD",
      crimes: 1117,
    },
    {
      district: "BALODA BAZAR",
      crimes: 2371,
    },
    {
      district: "BALRAMPUR",
      crimes: 950,
    },
    {
      district: "BEMETARA",
      crimes: 1323,
    },
    {
      district: "BILASPUR",
      crimes: 4576,
    },
    {
      district: "BIZAPUR",
      crimes: 291,
    },
    {
      district: "DANTEWARA",
      crimes: 360,
    },
    {
      district: "DHAMTARI",
      crimes: 1147,
    },
    {
      district: "DURG",
      crimes: 7471,
    },
    {
      district: "GARIYABAND",
      crimes: 831,
    },
    {
      district: "GRP RAIPUR",
      crimes: 289,
    },
    {
      district: "JAGDALPUR",
      crimes: 1454,
    },
    {
      district: "JANJGIR",
      crimes: 3287,
    },
    {
      district: "JASHPUR",
      crimes: 1237,
    },
    {
      district: "KABIRDHAM",
      crimes: 1376,
    },
    {
      district: "KANKER",
      crimes: 1007,
    },
    {
      district: "KONDAGAON",
      crimes: 537,
    },
    {
      district: "KORBA",
      crimes: 2217,
    },
    {
      district: "KORIYA",
      crimes: 1581,
    },
    {
      district: "MAHASAMUND",
      crimes: 2120,
    },
    {
      district: "MUNGELI",
      crimes: 1012,
    },
    {
      district: "NARAYANPUR",
      crimes: 186,
    },
    {
      district: "RAIGARH",
      crimes: 3053,
    },
    {
      district: "RAIPUR",
      crimes: 8323,
    },
    {
      district: "RAJNANDGAON",
      crimes: 3035,
    },
    {
      district: "SARGUJA",
      crimes: 1742,
    },
    {
      district: "SUKMA",
      crimes: 205,
    },
    {
      district: "SURAJPUR",
      crimes: 1500,
    },
    {
      district: "TOTAL",
      crimes: 54598,
    },
    {
      district: "NORTH GOA",
      crimes: 2102,
    },
    {
      district: "SOUTH GOA",
      crimes: 1506,
    },
    {
      district: "TOTAL",
      crimes: 3608,
    },
    {
      district: "AHMEDABAD COMMR.",
      crimes: 21347,
    },
    {
      district: "AHMEDABAD RURAL",
      crimes: 3673,
    },
    {
      district: "AHWA-DANG",
      crimes: 209,
    },
    {
      district: "AMRELI",
      crimes: 2301,
    },
    {
      district: "ANAND",
      crimes: 2991,
    },
    {
      district: "BHARUCH",
      crimes: 2781,
    },
    {
      district: "BHAVNAGAR",
      crimes: 4375,
    },
    {
      district: "CID CRIME",
      crimes: 15,
    },
    {
      district: "DAHOD",
      crimes: 1683,
    },
    {
      district: "GANDHINAGAR",
      crimes: 6530,
    },
    {
      district: "HIMATNAGAR",
      crimes: 6411,
    },
    {
      district: "JAMNAGAR",
      crimes: 5030,
    },
    {
      district: "JUNAGADH",
      crimes: 3915,
    },
    {
      district: "KHEDA NORTH",
      crimes: 5092,
    },
    {
      district: "KUTCH (EAST(G))",
      crimes: 3030,
    },
    {
      district: "KUTCH (WEST-BHUJ)",
      crimes: 1806,
    },
    {
      district: "MEHSANA",
      crimes: 5353,
    },
    {
      district: "NARMADA",
      crimes: 674,
    },
    {
      district: "NAVSARI",
      crimes: 1542,
    },
    {
      district: "PALANPUR",
      crimes: 4867,
    },
    {
      district: "PANCHMAHAL",
      crimes: 3677,
    },
    {
      district: "PATAN",
      crimes: 3107,
    },
    {
      district: "PORBANDAR",
      crimes: 896,
    },
    {
      district: "RAJKOT COMMR.",
      crimes: 4319,
    },
    {
      district: "RAJKOT RURAL",
      crimes: 4297,
    },
    {
      district: "SURAT COMMR.",
      crimes: 9246,
    },
    {
      district: "SURAT RURAL",
      crimes: 3644,
    },
    {
      district: "SURENDRANAGAR",
      crimes: 2985,
    },
    {
      district: "TAPI",
      crimes: 792,
    },
    {
      district: "VADODARA COMMR.",
      crimes: 6440,
    },
    {
      district: "VADODARA RURAL",
      crimes: 3479,
    },
    {
      district: "VALSAD",
      crimes: 2731,
    },
    {
      district: "W.RLY AHMEDABAD",
      crimes: 344,
    },
    {
      district: "W.RLY VADODARA",
      crimes: 539,
    },
    {
      district: "TOTAL",
      crimes: 130121,
    },
    {
      district: "AMBALA RURAL",
      crimes: 1082,
    },
    {
      district: "AMBALA URBAN",
      crimes: 2342,
    },
    {
      district: "BHIWANI",
      crimes: 3378,
    },
    {
      district: "FARIDABAD",
      crimes: 5023,
    },
    {
      district: "FATEHABAD",
      crimes: 1535,
    },
    {
      district: "GRP",
      crimes: 1121,
    },
    {
      district: "GURGAON",
      crimes: 7138,
    },
    {
      district: "HISSAR",
      crimes: 4536,
    },
    {
      district: "JHAJJAR",
      crimes: 2016,
    },
    {
      district: "JIND",
      crimes: 2323,
    },
    {
      district: "KAITHAL",
      crimes: 1724,
    },
    {
      district: "KARNAL",
      crimes: 3958,
    },
    {
      district: "KURUKSHETRA",
      crimes: 2294,
    },
    {
      district: "MAHENDRAGARH",
      crimes: 1772,
    },
    {
      district: "MEWAT",
      crimes: 2126,
    },
    {
      district: "PALWAL",
      crimes: 2457,
    },
    {
      district: "PANCHKULA",
      crimes: 1372,
    },
    {
      district: "PANIPAT",
      crimes: 3003,
    },
    {
      district: "REWARI",
      crimes: 2452,
    },
    {
      district: "ROHTAK",
      crimes: 2951,
    },
    {
      district: "SIRSA",
      crimes: 2268,
    },
    {
      district: "SONIPAT",
      crimes: 3465,
    },
    {
      district: "YAMUNANAGAR",
      crimes: 2144,
    },
    {
      district: "TOTAL",
      crimes: 62480,
    },
    {
      district: "BADDIPOLICEDIST",
      crimes: 543,
    },
    {
      district: "BILASPUR",
      crimes: 960,
    },
    {
      district: "CHAMBA",
      crimes: 557,
    },
    {
      district: "CID",
      crimes: 5,
    },
    {
      district: "G.R.P.",
      crimes: 13,
    },
    {
      district: "HAMIRPUR",
      crimes: 856,
    },
    {
      district: "KANGRA",
      crimes: 2810,
    },
    {
      district: "KINNAUR",
      crimes: 192,
    },
    {
      district: "KULLU",
      crimes: 719,
    },
    {
      district: "LAHAUL-SPITI",
      crimes: 100,
    },
    {
      district: "MANDI",
      crimes: 1733,
    },
    {
      district: "SHIMLA",
      crimes: 1530,
    },
    {
      district: "SIRMAUR",
      crimes: 866,
    },
    {
      district: "SOLAN",
      crimes: 778,
    },
    {
      district: "UNA",
      crimes: 895,
    },
    {
      district: "TOTAL",
      crimes: 12557,
    },
    {
      district: "ANANTNAG",
      crimes: 1431,
    },
    {
      district: "AWANTIPORA",
      crimes: 372,
    },
    {
      district: "BANDIPORA",
      crimes: 537,
    },
    {
      district: "BARAMULLA",
      crimes: 1215,
    },
    {
      district: "BUDGAM",
      crimes: 1234,
    },
    {
      district: "CRIME JAMMU",
      crimes: 12,
    },
    {
      district: "CRIME SRINAGAR",
      crimes: 31,
    },
    {
      district: "DODA",
      crimes: 724,
    },
    {
      district: "GANDERBAL",
      crimes: 529,
    },
    {
      district: "HANDWARA",
      crimes: 482,
    },
    {
      district: "JAMMU",
      crimes: 4261,
    },
    {
      district: "KARGIL",
      crimes: 107,
    },
    {
      district: "KATHUA",
      crimes: 1254,
    },
    {
      district: "KISHTWAR",
      crimes: 422,
    },
    {
      district: "KULGAM",
      crimes: 775,
    },
    {
      district: "KUPWARA",
      crimes: 796,
    },
    {
      district: "LEH",
      crimes: 180,
    },
    {
      district: "POONCH",
      crimes: 839,
    },
    {
      district: "PULWAMA",
      crimes: 435,
    },
    {
      district: "RAILWAYS JAMMU",
      crimes: 14,
    },
    {
      district: "RAILWAYS KASHMIR",
      crimes: 16,
    },
    {
      district: "RAILWAYS KATRA",
      crimes: 2,
    },
    {
      district: "RAJOURI",
      crimes: 1894,
    },
    {
      district: "RAMBAN",
      crimes: 761,
    },
    {
      district: "REASI",
      crimes: 677,
    },
    {
      district: "SAMBA",
      crimes: 741,
    },
    {
      district: "SHOPIAN",
      crimes: 525,
    },
    {
      district: "SOPORE",
      crimes: 646,
    },
    {
      district: "SRINAGAR",
      crimes: 2614,
    },
    {
      district: "UDHAMPUR",
      crimes: 1082,
    },
    {
      district: "TOTAL",
      crimes: 24608,
    },
    {
      district: "BOKARO",
      crimes: 3564,
    },
    {
      district: "CHAIBASA",
      crimes: 944,
    },
    {
      district: "CHATRA",
      crimes: 1017,
    },
    {
      district: "DEOGHAR",
      crimes: 2000,
    },
    {
      district: "DHANBAD",
      crimes: 4606,
    },
    {
      district: "DHANBAD RLY.",
      crimes: 380,
    },
    {
      district: "DUMKA",
      crimes: 1479,
    },
    {
      district: "GARHWA",
      crimes: 2139,
    },
    {
      district: "GIRIDIH",
      crimes: 2871,
    },
    {
      district: "GODDA",
      crimes: 1765,
    },
    {
      district: "GUMLA",
      crimes: 933,
    },
    {
      district: "HAZARIBAGH",
      crimes: 2427,
    },
    {
      district: "JAMSHEDPUR",
      crimes: 4022,
    },
    {
      district: "JAMSHEDPUR RLY.",
      crimes: 207,
    },
    {
      district: "JAMTARA",
      crimes: 850,
    },
    {
      district: "KHUNTI",
      crimes: 377,
    },
    {
      district: "KODERMA",
      crimes: 1135,
    },
    {
      district: "LATEHAR",
      crimes: 527,
    },
    {
      district: "LOHARDAGGA",
      crimes: 451,
    },
    {
      district: "PAKUR",
      crimes: 933,
    },
    {
      district: "PALAMU",
      crimes: 2107,
    },
    {
      district: "RAMGARH",
      crimes: 996,
    },
    {
      district: "RANCHI",
      crimes: 2396,
    },
    {
      district: "SAHEBGANJ",
      crimes: 1467,
    },
    {
      district: "SARAIKELA",
      crimes: 897,
    },
    {
      district: "SIMDEGA",
      crimes: 456,
    },
    {
      district: "TOTAL",
      crimes: 40946,
    },
    {
      district: "BAGALKOT",
      crimes: 2297,
    },
    {
      district: "BANGALORE COMMR.",
      crimes: 29297,
    },
    {
      district: "BANGALORE RURAL",
      crimes: 5560,
    },
    {
      district: "BELGAUM",
      crimes: 6845,
    },
    {
      district: "BELLARY",
      crimes: 3112,
    },
    {
      district: "BIDAR",
      crimes: 3658,
    },
    {
      district: "BIJAPUR",
      crimes: 2783,
    },
    {
      district: "CBPURA",
      crimes: 2554,
    },
    {
      district: "CHAMARAJNAGAR",
      crimes: 1733,
    },
    {
      district: "CHICKMAGALUR",
      crimes: 2498,
    },
    {
      district: "CHITRADURGA",
      crimes: 4059,
    },
    {
      district: "DAKSHIN KANNADA",
      crimes: 1836,
    },
    {
      district: "DAVANAGERE",
      crimes: 3271,
    },
    {
      district: "DHARWAD COMMR.",
      crimes: 1937,
    },
    {
      district: "DHARWAD RURAL",
      crimes: 1313,
    },
    {
      district: "GADAG",
      crimes: 1083,
    },
    {
      district: "GULBARGA",
      crimes: 4101,
    },
    {
      district: "HASSAN",
      crimes: 5592,
    },
    {
      district: "HAVERI",
      crimes: 2333,
    },
    {
      district: "K.G.F.",
      crimes: 1007,
    },
    {
      district: "KODAGU",
      crimes: 1550,
    },
    {
      district: "KOLAR",
      crimes: 2209,
    },
    {
      district: "KOPPAL",
      crimes: 1899,
    },
    {
      district: "MANDYA",
      crimes: 5914,
    },
    {
      district: "MANGALORE CITY",
      crimes: 2685,
    },
    {
      district: "MYSORE COMMR.",
      crimes: 2826,
    },
    {
      district: "MYSORE RURAL",
      crimes: 4339,
    },
    {
      district: "RAICHUR",
      crimes: 3039,
    },
    {
      district: "RAILWAYS",
      crimes: 649,
    },
    {
      district: "RAMANAGAR",
      crimes: 4673,
    },
    {
      district: "SHIMOGA",
      crimes: 5034,
    },
    {
      district: "TUMKUR",
      crimes: 5567,
    },
    {
      district: "UDUPI",
      crimes: 2454,
    },
    {
      district: "UTTAR KANNADA",
      crimes: 2828,
    },
    {
      district: "YADGIRI",
      crimes: 1486,
    },
    {
      district: "TOTAL",
      crimes: 134021,
    },
    {
      district: "ALAPUZHA",
      crimes: 8555,
    },
    {
      district: "ERNAKULAM COMMR.",
      crimes: 17324,
    },
    {
      district: "ERNAKULAM RURAL",
      crimes: 10678,
    },
    {
      district: "IDUKKI",
      crimes: 5134,
    },
    {
      district: "KANNUR",
      crimes: 8400,
    },
    {
      district: "KASARGOD",
      crimes: 5174,
    },
    {
      district: "KOLLAM COMMR.",
      crimes: 7074,
    },
    {
      district: "KOLLAM RURAL",
      crimes: 5981,
    },
    {
      district: "KOTTAYAM",
      crimes: 12355,
    },
    {
      district: "KOZHIKODE COMMR.",
      crimes: 4156,
    },
    {
      district: "KOZHIKODE RURAL",
      crimes: 5645,
    },
    {
      district: "MALAPPURAM",
      crimes: 14385,
    },
    {
      district: "PALAKKAD",
      crimes: 8611,
    },
    {
      district: "PATHANAMTHITTA",
      crimes: 5327,
    },
    {
      district: "RAILWAYS",
      crimes: 348,
    },
    {
      district: "THRISSUR COMMR.",
      crimes: 6231,
    },
    {
      district: "THRISSUR RURAL",
      crimes: 13403,
    },
    {
      district: "TRIVANDRUM COMMR.",
      crimes: 7253,
    },
    {
      district: "TRIVANDRUM RURAL",
      crimes: 10065,
    },
    {
      district: "WAYANADU",
      crimes: 2890,
    },
    {
      district: "TOTAL",
      crimes: 158989,
    },
    {
      district: "ALIRAJPUR",
      crimes: 1355,
    },
    {
      district: "ANUPPUR",
      crimes: 1794,
    },
    {
      district: "ASHOK NAGAR",
      crimes: 2474,
    },
    {
      district: "BALAGHAT",
      crimes: 2792,
    },
    {
      district: "BARWANI",
      crimes: 2026,
    },
    {
      district: "BETUL",
      crimes: 3080,
    },
    {
      district: "BHIND",
      crimes: 3920,
    },
    {
      district: "BHOPAL",
      crimes: 14320,
    },
    {
      district: "BHOPAL RLY.",
      crimes: 1429,
    },
    {
      district: "BURHANPUR",
      crimes: 1436,
    },
    {
      district: "CHHATARPUR",
      crimes: 4521,
    },
    {
      district: "CHHINDWARA",
      crimes: 5310,
    },
    {
      district: "DAMOH",
      crimes: 3248,
    },
    {
      district: "DATIYA",
      crimes: 2441,
    },
    {
      district: "DEWAS",
      crimes: 5369,
    },
    {
      district: "DHAR",
      crimes: 5558,
    },
    {
      district: "DINDORI",
      crimes: 1268,
    },
    {
      district: "GUNA",
      crimes: 3592,
    },
    {
      district: "GWALIOR",
      crimes: 10313,
    },
    {
      district: "HARDA",
      crimes: 1318,
    },
    {
      district: "HOSHANGABAD",
      crimes: 3298,
    },
    {
      district: "INDORE",
      crimes: 21091,
    },
    {
      district: "INDORE RLY.",
      crimes: 427,
    },
    {
      district: "JABALPUR",
      crimes: 10575,
    },
    {
      district: "JABALPUR RLY.",
      crimes: 975,
    },
    {
      district: "JHABUA",
      crimes: 2431,
    },
    {
      district: "KATNI",
      crimes: 3383,
    },
    {
      district: "KHANDWA",
      crimes: 2841,
    },
    {
      district: "KHARGON",
      crimes: 4171,
    },
    {
      district: "MANDLA",
      crimes: 2275,
    },
    {
      district: "MANDSAUR",
      crimes: 3469,
    },
    {
      district: "MORENA",
      crimes: 5431,
    },
    {
      district: "NARSINGHPUR",
      crimes: 3371,
    },
    {
      district: "NEEMUCH",
      crimes: 2183,
    },
    {
      district: "PANNA",
      crimes: 2234,
    },
    {
      district: "RAISEN",
      crimes: 4207,
    },
    {
      district: "RAJGARH",
      crimes: 4712,
    },
    {
      district: "RATLAM",
      crimes: 3420,
    },
    {
      district: "REWA",
      crimes: 5498,
    },
    {
      district: "SAGAR",
      crimes: 9276,
    },
    {
      district: "SATNA",
      crimes: 5407,
    },
    {
      district: "SEONI",
      crimes: 2728,
    },
    {
      district: "SHAHDOL",
      crimes: 3375,
    },
    {
      district: "SHAJAPUR",
      crimes: 3350,
    },
    {
      district: "SHEOPUR",
      crimes: 1347,
    },
    {
      district: "SHIVPURI",
      crimes: 4968,
    },
    {
      district: "SIDHI",
      crimes: 2568,
    },
    {
      district: "SIHORE",
      crimes: 3894,
    },
    {
      district: "SINGRAULI",
      crimes: 2393,
    },
    {
      district: "TIKAMGARH",
      crimes: 3302,
    },
    {
      district: "UJJAIN",
      crimes: 8286,
    },
    {
      district: "UMARIYA",
      crimes: 1262,
    },
    {
      district: "VIDISHA",
      crimes: 4623,
    },
    {
      district: "TOTAL",
      crimes: 220335,
    },
    {
      district: "AHMEDNAGAR",
      crimes: 7246,
    },
    {
      district: "AKOLA",
      crimes: 3442,
    },
    {
      district: "AMRAVATI COMMR.",
      crimes: 2713,
    },
    {
      district: "AMRAVATI RURAL",
      crimes: 4442,
    },
    {
      district: "AURANGABAD COMMR.",
      crimes: 3659,
    },
    {
      district: "AURANGABAD RURAL",
      crimes: 3562,
    },
    {
      district: "BEED",
      crimes: 4099,
    },
    {
      district: "BHANDARA",
      crimes: 2019,
    },
    {
      district: "BULDHANA",
      crimes: 3497,
    },
    {
      district: "CHANDRAPUR",
      crimes: 3763,
    },
    {
      district: "DHULE",
      crimes: 2542,
    },
    {
      district: "GADCHIROLI",
      crimes: 981,
    },
    {
      district: "GONDIA",
      crimes: 1772,
    },
    {
      district: "HINGOLI",
      crimes: 1391,
    },
    {
      district: "JALGAON",
      crimes: 4954,
    },
    {
      district: "JALNA",
      crimes: 3051,
    },
    {
      district: "KOLHAPUR",
      crimes: 4554,
    },
    {
      district: "LATUR",
      crimes: 3237,
    },
    {
      district: "MUMBAI COMMR.",
      crimes: 30508,
    },
    {
      district: "MUMBAI RLY.",
      crimes: 2325,
    },
    {
      district: "NAGPUR COMMR.",
      crimes: 8277,
    },
    {
      district: "NAGPUR RLY.",
      crimes: 1292,
    },
    {
      district: "NAGPUR RURAL",
      crimes: 3622,
    },
    {
      district: "NANDED",
      crimes: 4668,
    },
    {
      district: "NANDURBAR",
      crimes: 1358,
    },
    {
      district: "NASIK COMMR.",
      crimes: 4390,
    },
    {
      district: "NASIK RURAL",
      crimes: 5216,
    },
    {
      district: "NAVI MUMBAI",
      crimes: 5157,
    },
    {
      district: "OSMANABAD",
      crimes: 3055,
    },
    {
      district: "PARBHANI",
      crimes: 2836,
    },
    {
      district: "PUNE COMMR.",
      crimes: 12308,
    },
    {
      district: "PUNE RLY.",
      crimes: 445,
    },
    {
      district: "PUNE RURAL",
      crimes: 8433,
    },
    {
      district: "RAIGAD",
      crimes: 2159,
    },
    {
      district: "RATNAGIRI",
      crimes: 1398,
    },
    {
      district: "SANGLI",
      crimes: 2783,
    },
    {
      district: "SATARA",
      crimes: 5042,
    },
    {
      district: "SINDHUDURG",
      crimes: 803,
    },
    {
      district: "SOLAPUR COMMR.",
      crimes: 1992,
    },
    {
      district: "SOLAPUR RURAL",
      crimes: 4476,
    },
    {
      district: "THANE COMMR.",
      crimes: 10144,
    },
    {
      district: "THANE RURAL",
      crimes: 6919,
    },
    {
      district: "WARDHA",
      crimes: 3564,
    },
    {
      district: "WASHIM",
      crimes: 2241,
    },
    {
      district: "YAVATMAL",
      crimes: 6365,
    },
    {
      district: "TOTAL",
      crimes: 202700,
    },
    {
      district: "BISHNUPUR",
      crimes: 314,
    },
    {
      district: "CHANDEL",
      crimes: 68,
    },
    {
      district: "CHURACHANDPUR",
      crimes: 120,
    },
    {
      district: "CID",
      crimes: 2,
    },
    {
      district: "IMPHAL EAST",
      crimes: 709,
    },
    {
      district: "IMPHAL WEST",
      crimes: 1485,
    },
    {
      district: "SENAPATI",
      crimes: 176,
    },
    {
      district: "TAMENGLONG",
      crimes: 73,
    },
    {
      district: "THOUBAL",
      crimes: 691,
    },
    {
      district: "UKHRUL",
      crimes: 99,
    },
    {
      district: "TOTAL",
      crimes: 3737,
    },
    {
      district: "GARO HILLS EAST",
      crimes: 147,
    },
    {
      district: "GARO HILLS SOUTH",
      crimes: 146,
    },
    {
      district: "GARO HILLS WEST",
      crimes: 471,
    },
    {
      district: "JAINTIA HILLS",
      crimes: 395,
    },
    {
      district: "KHASI HILLS EAST",
      crimes: 917,
    },
    {
      district: "KHASI HILLS WEST",
      crimes: 224,
    },
    {
      district: "RI-BHOI",
      crimes: 257,
    },
    {
      district: "TOTAL",
      crimes: 2557,
    },
    {
      district: "AIZAWL",
      crimes: 905,
    },
    {
      district: "CHAMPHAI",
      crimes: 230,
    },
    {
      district: "KOLASIB",
      crimes: 173,
    },
    {
      district: "LAWNGTLAI",
      crimes: 89,
    },
    {
      district: "LUNGLEI",
      crimes: 142,
    },
    {
      district: "MAMIT",
      crimes: 80,
    },
    {
      district: "SAIHA",
      crimes: 65,
    },
    {
      district: "SERCHHIP",
      crimes: 82,
    },
    {
      district: "TOTAL",
      crimes: 1766,
    },
    {
      district: "DIMAPUR",
      crimes: 524,
    },
    {
      district: "KIPHIRE",
      crimes: 11,
    },
    {
      district: "KOHIMA",
      crimes: 178,
    },
    {
      district: "LONGLENG",
      crimes: 13,
    },
    {
      district: "MOKOKCHUNG",
      crimes: 61,
    },
    {
      district: "MON",
      crimes: 62,
    },
    {
      district: "PEREN",
      crimes: 29,
    },
    {
      district: "PHEK",
      crimes: 43,
    },
    {
      district: "TUENSANG",
      crimes: 44,
    },
    {
      district: "WOKHA",
      crimes: 59,
    },
    {
      district: "ZUNHEBOTO",
      crimes: 66,
    },
    {
      district: "TOTAL",
      crimes: 1090,
    },
    {
      district: "ANGUL",
      crimes: 3835,
    },
    {
      district: "BALASORE",
      crimes: 4257,
    },
    {
      district: "BARAGARH",
      crimes: 1749,
    },
    {
      district: "BERHAMPUR",
      crimes: 1958,
    },
    {
      district: "BHADRAK",
      crimes: 2624,
    },
    {
      district: "BOLANGIR",
      crimes: 2151,
    },
    {
      district: "BOUDH",
      crimes: 660,
    },
    {
      district: "CUTTACK",
      crimes: 2882,
    },
    {
      district: "DCP BBSR",
      crimes: 4960,
    },
    {
      district: "DCP CTC",
      crimes: 2620,
    },
    {
      district: "DEOGARH",
      crimes: 473,
    },
    {
      district: "DHENKANAL",
      crimes: 1947,
    },
    {
      district: "GAJAPATI",
      crimes: 397,
    },
    {
      district: "GANJAM",
      crimes: 2295,
    },
    {
      district: "JAGATSINGHPUR",
      crimes: 2139,
    },
    {
      district: "JAJPUR",
      crimes: 2759,
    },
    {
      district: "JHARSUGUDA",
      crimes: 1247,
    },
    {
      district: "KALAHANDI",
      crimes: 1685,
    },
    {
      district: "KANDHAMAL",
      crimes: 841,
    },
    {
      district: "KENDRAPARA",
      crimes: 2096,
    },
    {
      district: "KEONJHAR",
      crimes: 2507,
    },
    {
      district: "KHURDA",
      crimes: 1848,
    },
    {
      district: "KORAPUT",
      crimes: 1430,
    },
    {
      district: "MALKANGIR",
      crimes: 502,
    },
    {
      district: "MAYURBHANJ",
      crimes: 2565,
    },
    {
      district: "NAYAGARH",
      crimes: 1242,
    },
    {
      district: "NOWRANGPUR",
      crimes: 1022,
    },
    {
      district: "NUAPADA",
      crimes: 921,
    },
    {
      district: "PURI",
      crimes: 3883,
    },
    {
      district: "RAYAGADA",
      crimes: 1044,
    },
    {
      district: "ROURKELA",
      crimes: 1861,
    },
    {
      district: "SAMBALPUR",
      crimes: 2474,
    },
    {
      district: "SONEPUR",
      crimes: 559,
    },
    {
      district: "SRP(CUTTACK)",
      crimes: 700,
    },
    {
      district: "SRP(ROURKELA)",
      crimes: 454,
    },
    {
      district: "SUNDARGARH",
      crimes: 1370,
    },
    {
      district: "TOTAL",
      crimes: 67957,
    },
    {
      district: "AMRITSAR RURAL",
      crimes: 1198,
    },
    {
      district: "BARNALA",
      crimes: 688,
    },
    {
      district: "BATALA",
      crimes: 1023,
    },
    {
      district: "BHATINDA",
      crimes: 1810,
    },
    {
      district: "CP AMRITSAR",
      crimes: 1964,
    },
    {
      district: "CP JALANDHAR",
      crimes: 1698,
    },
    {
      district: "CP LUDHIANA",
      crimes: 3065,
    },
    {
      district: "FARIDKOT",
      crimes: 771,
    },
    {
      district: "FATEHGARH SAHIB",
      crimes: 767,
    },
    {
      district: "FAZILKA",
      crimes: 962,
    },
    {
      district: "FEROZPUR",
      crimes: 1228,
    },
    {
      district: "G.R.P",
      crimes: 359,
    },
    {
      district: "GURDASPUR",
      crimes: 840,
    },
    {
      district: "HOSHIARPUR",
      crimes: 1626,
    },
    {
      district: "JALANDHAR RURAL",
      crimes: 1634,
    },
    {
      district: "KAPURTHALA",
      crimes: 1408,
    },
    {
      district: "KHANNA",
      crimes: 834,
    },
    {
      district: "LUDHIANA RURAL",
      crimes: 829,
    },
    {
      district: "MANSA",
      crimes: 650,
    },
    {
      district: "MOGA",
      crimes: 1152,
    },
    {
      district: "MUKTSAR",
      crimes: 821,
    },
    {
      district: "PATHANKOT",
      crimes: 472,
    },
    {
      district: "PATIALA",
      crimes: 2545,
    },
    {
      district: "ROPAR",
      crimes: 1108,
    },
    {
      district: "SANGRUR",
      crimes: 2103,
    },
    {
      district: "SAS NGR",
      crimes: 2414,
    },
    {
      district: "SBS NAGAR",
      crimes: 704,
    },
    {
      district: "TARN TARAN",
      crimes: 1117,
    },
    {
      district: "TOTAL",
      crimes: 35790,
    },
    {
      district: "AJMER",
      crimes: 6550,
    },
    {
      district: "ALWAR",
      crimes: 11941,
    },
    {
      district: "BANSWARA",
      crimes: 2777,
    },
    {
      district: "BARAN",
      crimes: 3596,
    },
    {
      district: "BARMER",
      crimes: 3744,
    },
    {
      district: "BHARATPUR",
      crimes: 8849,
    },
    {
      district: "BHILWARA",
      crimes: 4893,
    },
    {
      district: "BIKANER",
      crimes: 4535,
    },
    {
      district: "BUNDI",
      crimes: 3124,
    },
    {
      district: "CHITTORGARH",
      crimes: 4390,
    },
    {
      district: "CHURU",
      crimes: 3363,
    },
    {
      district: "DAUSA",
      crimes: 5101,
    },
    {
      district: "DHOLPUR",
      crimes: 3739,
    },
    {
      district: "DUNGARPUR",
      crimes: 1844,
    },
    {
      district: "G.R.P.AJMER",
      crimes: 788,
    },
    {
      district: "G.R.P.JODHPUR",
      crimes: 131,
    },
    {
      district: "GANGANAGAR",
      crimes: 5427,
    },
    {
      district: "HANUMANGARH",
      crimes: 4077,
    },
    {
      district: "JAIPUR EAST",
      crimes: 6371,
    },
    {
      district: "JAIPUR NORTH",
      crimes: 2936,
    },
    {
      district: "JAIPUR RURAL",
      crimes: 5484,
    },
    {
      district: "JAIPUR SOUTH",
      crimes: 4016,
    },
    {
      district: "JAIPUR WEST",
      crimes: 5288,
    },
    {
      district: "JAISALMER",
      crimes: 1177,
    },
    {
      district: "JALORE",
      crimes: 2480,
    },
    {
      district: "JHALAWAR",
      crimes: 3795,
    },
    {
      district: "JHUNJHUNU",
      crimes: 4358,
    },
    {
      district: "JODHPUR EAST",
      crimes: 2303,
    },
    {
      district: "JODHPUR RURAL",
      crimes: 2788,
    },
    {
      district: "JODHPUR WEST",
      crimes: 2228,
    },
    {
      district: "KARAULI",
      crimes: 4561,
    },
    {
      district: "KOTA CITY",
      crimes: 3972,
    },
    {
      district: "KOTA RURAL",
      crimes: 2331,
    },
    {
      district: "NAGAUR",
      crimes: 4498,
    },
    {
      district: "PALI",
      crimes: 5469,
    },
    {
      district: "PRATAPGARH",
      crimes: 2585,
    },
    {
      district: "RAJSAMAND",
      crimes: 2439,
    },
    {
      district: "SAWAI MADHOPUR",
      crimes: 4054,
    },
    {
      district: "SIKAR",
      crimes: 5824,
    },
    {
      district: "SIROHI",
      crimes: 1906,
    },
    {
      district: "TONK",
      crimes: 3232,
    },
    {
      district: "UDAIPUR",
      crimes: 7984,
    },
    {
      district: "TOTAL",
      crimes: 170948,
    },
    {
      district: "EAST",
      crimes: 209,
    },
    {
      district: "NORTH",
      crimes: 31,
    },
    {
      district: "SOUTH",
      crimes: 165,
    },
    {
      district: "WEST",
      crimes: 123,
    },
    {
      district: "TOTAL",
      crimes: 528,
    },
    {
      district: "ARIYALUR",
      crimes: 2480,
    },
    {
      district: "CHENNAI",
      crimes: 19881,
    },
    {
      district: "CHENNAI RLY.",
      crimes: 558,
    },
    {
      district: "COIMBATORE RURAL",
      crimes: 5093,
    },
    {
      district: "COIMBATORE URBAN",
      crimes: 10357,
    },
    {
      district: "CUDDALORE",
      crimes: 11318,
    },
    {
      district: "DHARMAPURI",
      crimes: 3742,
    },
    {
      district: "DINDIGUL",
      crimes: 5985,
    },
    {
      district: "ERODE",
      crimes: 4789,
    },
    {
      district: "KANCHIPURAM",
      crimes: 8040,
    },
    {
      district: "KANYAKUMARI",
      crimes: 4810,
    },
    {
      district: "KARUR",
      crimes: 2401,
    },
    {
      district: "KRISHNAGIRI",
      crimes: 4196,
    },
    {
      district: "MADURAI RURAL",
      crimes: 6358,
    },
    {
      district: "MADURAI URBAN",
      crimes: 3261,
    },
    {
      district: "NAGAPATTINAM",
      crimes: 4245,
    },
    {
      district: "NAMAKKAL",
      crimes: 4070,
    },
    {
      district: "NILGIRIS",
      crimes: 1216,
    },
    {
      district: "PERAMBALUR",
      crimes: 1455,
    },
    {
      district: "PUDUKOTTAI",
      crimes: 3142,
    },
    {
      district: "RAMNATHAPURAM",
      crimes: 3549,
    },
    {
      district: "SALEM RURAL",
      crimes: 5939,
    },
    {
      district: "SALEM URBAN",
      crimes: 2329,
    },
    {
      district: "SIVAGANGAI",
      crimes: 3598,
    },
    {
      district: "THANJAVUR",
      crimes: 6785,
    },
    {
      district: "THENI",
      crimes: 4312,
    },
    {
      district: "THIRUNELVELI RURAL",
      crimes: 9024,
    },
    {
      district: "THIRUNELVELI URBAN",
      crimes: 1352,
    },
    {
      district: "THIRUVALLUR",
      crimes: 3579,
    },
    {
      district: "THIRUVANNAMALAI",
      crimes: 4874,
    },
    {
      district: "THIRUVARUR",
      crimes: 4039,
    },
    {
      district: "THOOTHUGUDI",
      crimes: 5324,
    },
    {
      district: "TIRUPPUR",
      crimes: 7046,
    },
    {
      district: "TRICHY RLY.",
      crimes: 216,
    },
    {
      district: "TRICHY RURAL",
      crimes: 4485,
    },
    {
      district: "TRICHY URBAN",
      crimes: 2926,
    },
    {
      district: "VELLORE",
      crimes: 7710,
    },
    {
      district: "VILLUPURAM",
      crimes: 10486,
    },
    {
      district: "VIRUDHUNAGAR",
      crimes: 5504,
    },
    {
      district: "TOTAL",
      crimes: 200474,
    },
    {
      district: "DHALAI",
      crimes: 443,
    },
    {
      district: "GOMATI",
      crimes: 1147,
    },
    {
      district: "GRP",
      crimes: 10,
    },
    {
      district: "KHOWAI",
      crimes: 423,
    },
    {
      district: "NORTH",
      crimes: 553,
    },
    {
      district: "SIPAHIJALA",
      crimes: 987,
    },
    {
      district: "SOUTH",
      crimes: 774,
    },
    {
      district: "UNAKOTI",
      crimes: 533,
    },
    {
      district: "WEST",
      crimes: 1394,
    },
    {
      district: "TOTAL",
      crimes: 6264,
    },
    {
      district: "AGRA",
      crimes: 9360,
    },
    {
      district: "ALIGARH",
      crimes: 5806,
    },
    {
      district: "ALLAHABAD",
      crimes: 6394,
    },
    {
      district: "AMBEDKAR NAGAR",
      crimes: 1211,
    },
    {
      district: "AURAIYA",
      crimes: 1319,
    },
    {
      district: "AZAMGARH",
      crimes: 2284,
    },
    {
      district: "BADAUN",
      crimes: 2537,
    },
    {
      district: "BAGHPAT",
      crimes: 1560,
    },
    {
      district: "BAHRAICH",
      crimes: 2369,
    },
    {
      district: "BALLIA",
      crimes: 1607,
    },
    {
      district: "BALRAMPUR",
      crimes: 586,
    },
    {
      district: "BANDA",
      crimes: 1224,
    },
    {
      district: "BARABANKI",
      crimes: 2096,
    },
    {
      district: "BAREILLY",
      crimes: 5228,
    },
    {
      district: "BASTI",
      crimes: 1237,
    },
    {
      district: "BHIM NAGAR",
      crimes: 1914,
    },
    {
      district: "BIJNOR",
      crimes: 3108,
    },
    {
      district: "BULANDSHAHAR",
      crimes: 3554,
    },
    {
      district: "CHANDOLI",
      crimes: 1043,
    },
    {
      district: "CHITRAKOOT DHAM",
      crimes: 780,
    },
    {
      district: "CSM NAGAR",
      crimes: 1522,
    },
    {
      district: "DEORIA",
      crimes: 1446,
    },
    {
      district: "ETAH",
      crimes: 2468,
    },
    {
      district: "ETAWAH",
      crimes: 1996,
    },
    {
      district: "FAIZABAD",
      crimes: 2281,
    },
    {
      district: "FATEHGARH",
      crimes: 1608,
    },
    {
      district: "FATEHPUR",
      crimes: 2152,
    },
    {
      district: "FIROZABAD",
      crimes: 3096,
    },
    {
      district: "G.R.P.",
      crimes: 2782,
    },
    {
      district: "GAUTAMBUDH NAGAR",
      crimes: 6687,
    },
    {
      district: "GHAZIABAD",
      crimes: 7477,
    },
    {
      district: "GHAZIPUR",
      crimes: 1430,
    },
    {
      district: "GONDA",
      crimes: 2458,
    },
    {
      district: "GORAKHPUR",
      crimes: 4577,
    },
    {
      district: "HAMIRPUR",
      crimes: 848,
    },
    {
      district: "HARDOI",
      crimes: 3005,
    },
    {
      district: "HATHRAS",
      crimes: 1770,
    },
    {
      district: "J.P.NAGAR",
      crimes: 1649,
    },
    {
      district: "JALAUN",
      crimes: 1292,
    },
    {
      district: "JAUNPUR",
      crimes: 1822,
    },
    {
      district: "JHANSI",
      crimes: 2016,
    },
    {
      district: "KANNAUJ",
      crimes: 1689,
    },
    {
      district: "KANPUR NAGAR",
      crimes: 7018,
    },
    {
      district: "KANSHIRAM NAGAR",
      crimes: 1123,
    },
    {
      district: "KAUSHAMBI",
      crimes: 1302,
    },
    {
      district: "KHIRI",
      crimes: 2917,
    },
    {
      district: "KUSHI NAGAR",
      crimes: 1698,
    },
    {
      district: "LALITPUR",
      crimes: 697,
    },
    {
      district: "LUCKNOW",
      crimes: 11083,
    },
    {
      district: "MAHARAJGANJ",
      crimes: 1524,
    },
    {
      district: "MAHOBA",
      crimes: 791,
    },
    {
      district: "MAINPURI",
      crimes: 2400,
    },
    {
      district: "MATHURA",
      crimes: 4438,
    },
    {
      district: "MAU",
      crimes: 1535,
    },
    {
      district: "MEERUT",
      crimes: 7984,
    },
    {
      district: "MIRZAPUR",
      crimes: 775,
    },
    {
      district: "MORADABAD",
      crimes: 3652,
    },
    {
      district: "MUZAFFARNAGAR",
      crimes: 3715,
    },
    {
      district: "PANCHSHIL NAGAR",
      crimes: 1765,
    },
    {
      district: "PILIBHIT",
      crimes: 2296,
    },
    {
      district: "PRABUDDH NAGAR",
      crimes: 1268,
    },
    {
      district: "PRATAPGARH",
      crimes: 2354,
    },
    {
      district: "RAIBAREILLY",
      crimes: 1774,
    },
    {
      district: "RAMABAI NAGAR",
      crimes: 2013,
    },
    {
      district: "RAMPUR",
      crimes: 2105,
    },
    {
      district: "SAHARANPUR",
      crimes: 3254,
    },
    {
      district: "SANT KABIRNAGAR",
      crimes: 736,
    },
    {
      district: "SHAHJAHANPUR",
      crimes: 2632,
    },
    {
      district: "SHRAWASTI",
      crimes: 553,
    },
    {
      district: "SIDHARTHNAGAR",
      crimes: 707,
    },
    {
      district: "SITAPUR",
      crimes: 3360,
    },
    {
      district: "SONBHADRA",
      crimes: 901,
    },
    {
      district: "ST.RAVIDASNAGAR",
      crimes: 466,
    },
    {
      district: "SULTANPUR",
      crimes: 1821,
    },
    {
      district: "UNNAO",
      crimes: 2683,
    },
    {
      district: "VARANASI",
      crimes: 3465,
    },
    {
      district: "TOTAL",
      crimes: 198093,
    },
    {
      district: "ALMORA",
      crimes: 150,
    },
    {
      district: "BAGESHWAR",
      crimes: 74,
    },
    {
      district: "CHAMOLI",
      crimes: 74,
    },
    {
      district: "CHAMPAWAT",
      crimes: 85,
    },
    {
      district: "DEHRADUN",
      crimes: 2189,
    },
    {
      district: "HARIDWAR",
      crimes: 2613,
    },
    {
      district: "NAINITAL",
      crimes: 740,
    },
    {
      district: "PAURI GARHWAL",
      crimes: 256,
    },
    {
      district: "PITHORAGARH",
      crimes: 103,
    },
    {
      district: "RUDRA PRAYAG",
      crimes: 111,
    },
    {
      district: "TEHRI GARHWAL",
      crimes: 101,
    },
    {
      district: "UDHAMSINGH NAGAR",
      crimes: 2314,
    },
    {
      district: "UTTARKASHI",
      crimes: 72,
    },
    {
      district: "TOTAL",
      crimes: 8882,
    },
    {
      district: "24 PARGANAS NORTH",
      crimes: 11765,
    },
    {
      district: "24 PARGANAS SOUTH",
      crimes: 14370,
    },
    {
      district: "ASANSOL",
      crimes: 3897,
    },
    {
      district: "BANKURA",
      crimes: 2758,
    },
    {
      district: "BDN CP",
      crimes: 3446,
    },
    {
      district: "BIRBHUM",
      crimes: 3083,
    },
    {
      district: "BKP CP",
      crimes: 6608,
    },
    {
      district: "BURDWAN",
      crimes: 4674,
    },
    {
      district: "COOCHBEHAR",
      crimes: 3491,
    },
    {
      district: "DAKSHIN DINAJPUR",
      crimes: 2725,
    },
    {
      district: "DARJEELING",
      crimes: 1574,
    },
    {
      district: "HOOGHLY",
      crimes: 6434,
    },
    {
      district: "HOWRAH",
      crimes: 5059,
    },
    {
      district: "HOWRAH CITY",
      crimes: 5675,
    },
    {
      district: "HOWRAH G.R.P.",
      crimes: 499,
    },
    {
      district: "JALPAIGURI",
      crimes: 7861,
    },
    {
      district: "JHARGRAM",
      crimes: 711,
    },
    {
      district: "KHARAGPUR G.R.P.",
      crimes: 199,
    },
    {
      district: "KOLKATA",
      crimes: 25370,
    },
    {
      district: "MALDA",
      crimes: 5634,
    },
    {
      district: "MURSHIDABAD",
      crimes: 12713,
    },
    {
      district: "NADIA",
      crimes: 11919,
    },
    {
      district: "PASCHIM MIDNAPUR",
      crimes: 5000,
    },
    {
      district: "PURAB MIDNAPUR",
      crimes: 4981,
    },
    {
      district: "PURULIA",
      crimes: 1841,
    },
    {
      district: "SEALDAH G.R.P.",
      crimes: 657,
    },
    {
      district: "SILIGURI G.R.P.",
      crimes: 248,
    },
    {
      district: "SILIGURI_PC",
      crimes: 3023,
    },
    {
      district: "UTTAR DINAJPUR",
      crimes: 5212,
    },
    {
      district: "TOTAL",
      crimes: 161427,
    },
    {
      district: "CAR",
      crimes: 24,
    },
    {
      district: "NORTH",
      crimes: 115,
    },
    {
      district: "SOUTH",
      crimes: 544,
    },
    {
      district: "TOTAL",
      crimes: 683,
    },
    {
      district: "CHANDIGARH",
      crimes: 3606,
    },
    {
      district: "TOTAL",
      crimes: 3606,
    },
    {
      district: "D and N HAVELI",
      crimes: 318,
    },
    {
      district: "TOTAL",
      crimes: 318,
    },
    {
      district: "DAMAN",
      crimes: 202,
    },
    {
      district: "DIU",
      crimes: 37,
    },
    {
      district: "TOTAL",
      crimes: 239,
    },
    {
      district: "CAW",
      crimes: 178,
    },
    {
      district: "CENTRAL",
      crimes: 2973,
    },
    {
      district: "CRIME BRANCH",
      crimes: 90,
    },
    {
      district: "DELHI UT TOTAL",
      crimes: 54287,
    },
    {
      district: "EAST",
      crimes: 7423,
    },
    {
      district: "EOW",
      crimes: 124,
    },
    {
      district: "GRP(RLY)",
      crimes: 837,
    },
    {
      district: "IGI AIRPORT",
      crimes: 382,
    },
    {
      district: "NEW DELHI",
      crimes: 1057,
    },
    {
      district: "NORTH",
      crimes: 2700,
    },
    {
      district: "NORTH-EAST",
      crimes: 5903,
    },
    {
      district: "NORTH-WEST",
      crimes: 4542,
    },
    {
      district: "OUTER",
      crimes: 6344,
    },
    {
      district: "SOUTH",
      crimes: 5045,
    },
    {
      district: "SOUTH-EAST",
      crimes: 7040,
    },
    {
      district: "SOUTH-WEST",
      crimes: 4085,
    },
    {
      district: "STF",
      crimes: 6,
    },
    {
      district: "WEST",
      crimes: 5558,
    },
    {
      district: "LAKSHADWEEP",
      crimes: 60,
    },
    {
      district: "TOTAL",
      crimes: 60,
    },
    {
      district: "KARAIKAL",
      crimes: 787,
    },
    {
      district: "PUDUCHERRY",
      crimes: 3494,
    },
    {
      district: "TOTAL",
      crimes: 4281,
    },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
