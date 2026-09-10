// Data sourced from your uploaded workbook (Industry_Data_.xlsx):
// - "NSE active client data" sheet -> BROKER_LEADERBOARD (192 brokers, latest month)
// - "Broking data" sheet          -> INDUSTRY_PARAMS (32 parameters, latest vs previous month)
// - "MF & SIF Data" sheet         -> MF_SIF_DATA
//
// NEWS_ITEMS is still placeholder — you haven't shared a news source yet.
// The "Competition data" and "Sheet2" tabs in your file are currently
// empty templates (your own company's numbers) and aren't wired in here.
//
// Regenerate this file any time by re-running the same extraction against
// an updated copy of the workbook.

export const BROKER_LEADERBOARD = [
  {
    "rank": 1,
    "broker": "Groww Invest Tech Private Limited",
    "activeClients": 13347233,
    "marketShare": 29.68,
    "change": 1.7
  },
  {
    "rank": 2,
    "broker": "Zerodha Broking Limited",
    "activeClients": 6796854,
    "marketShare": 15.12,
    "change": 0.51
  },
  {
    "rank": 3,
    "broker": "Angel One Limited",
    "activeClients": 6718755,
    "marketShare": 14.94,
    "change": 1.28
  },
  {
    "rank": 4,
    "broker": "Icici Securities Limited",
    "activeClients": 2156209,
    "marketShare": 4.8,
    "change": 1.1
  },
  {
    "rank": 5,
    "broker": "Upstox Securities Private Limited",
    "activeClients": 1864628,
    "marketShare": 4.15,
    "change": 0.2
  },
  {
    "rank": 6,
    "broker": "Kotak Securities Ltd.",
    "activeClients": 1391663,
    "marketShare": 3.1,
    "change": 0.68
  },
  {
    "rank": 7,
    "broker": "Hdfc Securities Ltd.",
    "activeClients": 1351311,
    "marketShare": 3.01,
    "change": 1.21
  },
  {
    "rank": 8,
    "broker": "Raise Securities Private Limited (dhan App)( formerly Known As Moneylicious Securities Private Limited)",
    "activeClients": 1107277,
    "marketShare": 2.46,
    "change": 1.82
  },
  {
    "rank": 9,
    "broker": "Sbicap Securities Limited",
    "activeClients": 1043820,
    "marketShare": 2.32,
    "change": -2.46
  },
  {
    "rank": 10,
    "broker": "Motilal Oswal Financial Services Limited",
    "activeClients": 906005,
    "marketShare": 2.01,
    "change": 1.01
  },
  {
    "rank": 11,
    "broker": "Paytm Money Ltd.",
    "activeClients": 790743,
    "marketShare": 1.76,
    "change": -1.14
  },
  {
    "rank": 12,
    "broker": "Indstocks Private Limited",
    "activeClients": 713655,
    "marketShare": 1.59,
    "change": 1.11
  },
  {
    "rank": 13,
    "broker": "Sharekhan Ltd.",
    "activeClients": 527565,
    "marketShare": 1.17,
    "change": 0.83
  },
  {
    "rank": 14,
    "broker": "Axis Securities Limited",
    "activeClients": 429479,
    "marketShare": 0.96,
    "change": 0.35
  },
  {
    "rank": 15,
    "broker": "Iifl Capital Services Ltd.",
    "activeClients": 338771,
    "marketShare": 0.75,
    "change": 1.59
  },
  {
    "rank": 16,
    "broker": "5paisa Capital Limited",
    "activeClients": 321573,
    "marketShare": 0.72,
    "change": 1.95
  },
  {
    "rank": 17,
    "broker": "Aaritya Broking Private Ltd (Sahi)",
    "activeClients": 252951,
    "marketShare": 0.56,
    "change": 10.83
  },
  {
    "rank": 18,
    "broker": "Choice Equity Broking Private Limited",
    "activeClients": 235325,
    "marketShare": 0.52,
    "change": -0.23
  },
  {
    "rank": 19,
    "broker": "Geojit Investments Limited",
    "activeClients": 209373,
    "marketShare": 0.47,
    "change": 0.15
  },
  {
    "rank": 20,
    "broker": "Phonepe Wealth Broking Private Limited",
    "activeClients": 205141,
    "marketShare": 0.46,
    "change": 2.57
  },
  {
    "rank": 21,
    "broker": "Fyers Securities Private Limited",
    "activeClients": 196429,
    "marketShare": 0.44,
    "change": 0.67
  },
  {
    "rank": 22,
    "broker": "Mirae Asset Capital Markets ( India ) Private Limited",
    "activeClients": 191277,
    "marketShare": 0.43,
    "change": -2.91
  },
  {
    "rank": 23,
    "broker": "Smc Global Securities Ltd.",
    "activeClients": 159798,
    "marketShare": 0.36,
    "change": 0.71
  },
  {
    "rank": 24,
    "broker": "Anand Rathi Share And Stock Brokers Limited",
    "activeClients": 152440,
    "marketShare": 0.34,
    "change": 0.97
  },
  {
    "rank": 25,
    "broker": "Jainam Broking Limited",
    "activeClients": 150445,
    "marketShare": 0.33,
    "change": 1.96
  },
  {
    "rank": 26,
    "broker": "Nuvama Wealth And Investment Limited.",
    "activeClients": 138989,
    "marketShare": 0.31,
    "change": 0.52
  },
  {
    "rank": 27,
    "broker": "Nirmal Bang Securities Pvt. Ltd.",
    "activeClients": 135770,
    "marketShare": 0.3,
    "change": 0.69
  },
  {
    "rank": 28,
    "broker": "Nu Investors Technologies Private Limited (lemonn)",
    "activeClients": 134637,
    "marketShare": 0.3,
    "change": 16.66
  },
  {
    "rank": 29,
    "broker": "Marwadi Shares And Finance Limited",
    "activeClients": 130489,
    "marketShare": 0.29,
    "change": 1.37
  },
  {
    "rank": 30,
    "broker": "Religare Broking Limited",
    "activeClients": 129369,
    "marketShare": 0.29,
    "change": -2.05
  },
  {
    "rank": 31,
    "broker": "Jm Financial Services Limited",
    "activeClients": 113671,
    "marketShare": 0.25,
    "change": 0.49
  },
  {
    "rank": 32,
    "broker": "Ventura Securities Limited",
    "activeClients": 99576,
    "marketShare": 0.22,
    "change": 0.79
  },
  {
    "rank": 33,
    "broker": "Yes Securities (india) Limited",
    "activeClients": 95661,
    "marketShare": 0.21,
    "change": 1.15
  },
  {
    "rank": 34,
    "broker": "Alice Blue Fin Svcs P Ltd",
    "activeClients": 95042,
    "marketShare": 0.21,
    "change": 1.01
  },
  {
    "rank": 35,
    "broker": "Finvasia Securities Private Limited",
    "activeClients": 93517,
    "marketShare": 0.21,
    "change": -0.35
  },
  {
    "rank": 36,
    "broker": "Moneywise Finvest Limited (Stoxkart)",
    "activeClients": 80710,
    "marketShare": 0.18,
    "change": 2.17
  },
  {
    "rank": 37,
    "broker": "Tradebulls Securities (p) Ltd.",
    "activeClients": 77966,
    "marketShare": 0.17,
    "change": 0.84
  },
  {
    "rank": 38,
    "broker": "Nj India Invest Private Limited",
    "activeClients": 74320,
    "marketShare": 0.17,
    "change": 1.34
  },
  {
    "rank": 39,
    "broker": "Stockholding Services Limited",
    "activeClients": 73251,
    "marketShare": 0.16,
    "change": 0.22
  },
  {
    "rank": 40,
    "broker": "Aditya Birla Money Limited",
    "activeClients": 68323,
    "marketShare": 0.15,
    "change": 0.67
  },
  {
    "rank": 41,
    "broker": "Bajaj Financial Securities Ltd.",
    "activeClients": 65587,
    "marketShare": 0.15,
    "change": 2.03
  },
  {
    "rank": 42,
    "broker": "Indiabulls Securities Limited (formerly Known As Dhani Stocks Limited)",
    "activeClients": 59175,
    "marketShare": 0.13,
    "change": 3.66
  },
  {
    "rank": 43,
    "broker": "Jhaveri Securities Limited",
    "activeClients": 58790,
    "marketShare": 0.13,
    "change": 1.33
  },
  {
    "rank": 44,
    "broker": "Master Capital Services Limited",
    "activeClients": 58595,
    "marketShare": 0.13,
    "change": 0.5
  },
  {
    "rank": 45,
    "broker": "Idbi Capital Markets & Securities Ltd.",
    "activeClients": 57746,
    "marketShare": 0.13,
    "change": -0.25
  },
  {
    "rank": 46,
    "broker": "Arihant Capital Markets Limited",
    "activeClients": 54730,
    "marketShare": 0.12,
    "change": 1.08
  },
  {
    "rank": 47,
    "broker": "Bonanza Portfolio Ltd.",
    "activeClients": 53609,
    "marketShare": 0.12,
    "change": 1.1
  },
  {
    "rank": 48,
    "broker": "Samco Securities Limited",
    "activeClients": 53166,
    "marketShare": 0.12,
    "change": 1.85
  },
  {
    "rank": 49,
    "broker": "Globe Capital Market Limited",
    "activeClients": 52849,
    "marketShare": 0.12,
    "change": 0.04
  },
  {
    "rank": 50,
    "broker": "Monarch Networth Capital Limited",
    "activeClients": 50582,
    "marketShare": 0.11,
    "change": 1.52
  },
  {
    "rank": 51,
    "broker": "Integrated Enterprises (india) Private Limited",
    "activeClients": 50474,
    "marketShare": 0.11,
    "change": 0.27
  },
  {
    "rank": 52,
    "broker": "Swastika Investmart Limited",
    "activeClients": 50324,
    "marketShare": 0.11,
    "change": 0.52
  },
  {
    "rank": 53,
    "broker": "Indusind Securities (Reliance Securities Limited)",
    "activeClients": 48869,
    "marketShare": 0.11,
    "change": 0.72
  },
  {
    "rank": 54,
    "broker": "Sushil Financial Services Private Limited",
    "activeClients": 47246,
    "marketShare": 0.11,
    "change": 1.13
  },
  {
    "rank": 55,
    "broker": "Prabhudas Lilladher Pvt. Ltd.",
    "activeClients": 45039,
    "marketShare": 0.1,
    "change": 0.46
  },
  {
    "rank": 56,
    "broker": "South Asian Stocks Ltd. (incredstocko.in)",
    "activeClients": 41057,
    "marketShare": 0.09,
    "change": 27.7
  },
  {
    "rank": 57,
    "broker": "Flattrade Broking Private Limited",
    "activeClients": 40239,
    "marketShare": 0.09,
    "change": 1.67
  },
  {
    "rank": 58,
    "broker": "Others",
    "activeClients": 38103,
    "marketShare": 0.08,
    "change": -96.47
  },
  {
    "rank": 59,
    "broker": "Univest Stock Broking Private Limited",
    "activeClients": 36105,
    "marketShare": 0.08,
    "change": 6.94
  },
  {
    "rank": 60,
    "broker": "Marketwolf Securities Private Limited",
    "activeClients": 34054,
    "marketShare": 0.08,
    "change": -1.98
  },
  {
    "rank": 61,
    "broker": "Econo Broking Private Limited",
    "activeClients": 32963,
    "marketShare": 0.07,
    "change": 1.78
  },
  {
    "rank": 62,
    "broker": "Shri Parasram Holdings Pvt. Ltd.",
    "activeClients": 32632,
    "marketShare": 0.07,
    "change": 0.44
  },
  {
    "rank": 63,
    "broker": "Aionion Capital Market Services Private Limited",
    "activeClients": 31238,
    "marketShare": 0.07,
    "change": 1.31
  },
  {
    "rank": 64,
    "broker": "Lakshmishree Investment & Securities Pvt. Ltd.",
    "activeClients": 26545,
    "marketShare": 0.06,
    "change": 1.17
  },
  {
    "rank": 65,
    "broker": "Eureka Stock & Share Broking Services Limited",
    "activeClients": 26468,
    "marketShare": 0.06,
    "change": 0.36
  },
  {
    "rank": 66,
    "broker": "Shriram Insight Share Brokers Limited",
    "activeClients": 25716,
    "marketShare": 0.06,
    "change": 0.32
  },
  {
    "rank": 67,
    "broker": "Profitmart Securities Private Limited",
    "activeClients": 25149,
    "marketShare": 0.06,
    "change": -0.05
  },
  {
    "rank": 68,
    "broker": "Lkp Securities Ltd.",
    "activeClients": 23567,
    "marketShare": 0.05,
    "change": -0.36
  },
  {
    "rank": 69,
    "broker": "Way2wealth Brokers Private Limited",
    "activeClients": 22054,
    "marketShare": 0.05,
    "change": -0.35
  },
  {
    "rank": 70,
    "broker": "Goodwill Wealth Management Pvt Ltd",
    "activeClients": 21757,
    "marketShare": 0.05,
    "change": -1.67
  },
  {
    "rank": 71,
    "broker": "Kifs Trade Capital Private Limited",
    "activeClients": 20500,
    "marketShare": 0.05,
    "change": 0.76
  },
  {
    "rank": 72,
    "broker": "Ashika Stock Broking Ltd.",
    "activeClients": 19842,
    "marketShare": 0.04,
    "change": 0.61
  },
  {
    "rank": 73,
    "broker": "B N Rathi Securities Limited",
    "activeClients": 18705,
    "marketShare": 0.04,
    "change": 0.88
  },
  {
    "rank": 74,
    "broker": "Canara Bank Securities Limited",
    "activeClients": 17413,
    "marketShare": 0.04,
    "change": 1.84
  },
  {
    "rank": 75,
    "broker": "Acumen Capital Market (india) Ltd",
    "activeClients": 16321,
    "marketShare": 0.04,
    "change": -0.71
  },
  {
    "rank": 76,
    "broker": "Market Pulse Securities Private Limited",
    "activeClients": 15353,
    "marketShare": 0.03,
    "change": -3.39
  },
  {
    "rank": 77,
    "broker": "Ans Pvt. Ltd.",
    "activeClients": 15289,
    "marketShare": 0.03,
    "change": 1.86
  },
  {
    "rank": 78,
    "broker": "Bob Capital Markets Limited",
    "activeClients": 15283,
    "marketShare": 0.03,
    "change": 5.87
  },
  {
    "rank": 79,
    "broker": "Navia Markets Ltd.",
    "activeClients": 14951,
    "marketShare": 0.03,
    "change": 2.55
  },
  {
    "rank": 80,
    "broker": "Gopocket Invest Tech Private Limited (formerly Known As Sky Commodities India Pvt Ltd)",
    "activeClients": 14943,
    "marketShare": 0.03,
    "change": -0.03
  },
  {
    "rank": 81,
    "broker": "Iss Enterprise Limited",
    "activeClients": 14234,
    "marketShare": 0.03,
    "change": 0
  },
  {
    "rank": 82,
    "broker": "Bhansali Value Creations Private Limited",
    "activeClients": 14188,
    "marketShare": 0.03,
    "change": 1.59
  },
  {
    "rank": 83,
    "broker": "Alankit Imaginations Limited",
    "activeClients": 13638,
    "marketShare": 0.03,
    "change": 0.43
  },
  {
    "rank": 84,
    "broker": "Finwizard Technology Private Limited",
    "activeClients": 13270,
    "marketShare": 0.03,
    "change": -5.13
  },
  {
    "rank": 85,
    "broker": "Rudra Shares & Stock Brokers Ltd",
    "activeClients": 12994,
    "marketShare": 0.03,
    "change": 0.81
  },
  {
    "rank": 86,
    "broker": "Bp Equities Private Limited",
    "activeClients": 12546,
    "marketShare": 0.03,
    "change": 0.93
  },
  {
    "rank": 87,
    "broker": "Bgse Financials Limited",
    "activeClients": 12340,
    "marketShare": 0.03,
    "change": 0.28
  },
  {
    "rank": 88,
    "broker": "Indbank Merchant Banking Services Ltd.",
    "activeClients": 12287,
    "marketShare": 0.03,
    "change": 0.13
  },
  {
    "rank": 89,
    "broker": "Astha Credit & Securities (p) Ltd",
    "activeClients": 11917,
    "marketShare": 0.03,
    "change": -0.13
  },
  {
    "rank": 90,
    "broker": "Tradejini Financial Services Pvt Ltd",
    "activeClients": 11521,
    "marketShare": 0.03,
    "change": -0.06
  },
  {
    "rank": 91,
    "broker": "Pravin Ratilal Share And Stock Brokers Ltd",
    "activeClients": 11409,
    "marketShare": 0.03,
    "change": 1.22
  },
  {
    "rank": 92,
    "broker": "Inventure Growth & Securities Limited",
    "activeClients": 11187,
    "marketShare": 0.02,
    "change": 0.5
  },
  {
    "rank": 93,
    "broker": "Enrich Financial Market Private Limited",
    "activeClients": 10759,
    "marketShare": 0.02,
    "change": 2.03
  },
  {
    "rank": 94,
    "broker": "Trustline Securities Limited",
    "activeClients": 10566,
    "marketShare": 0.02,
    "change": -0.15
  },
  {
    "rank": 95,
    "broker": "Kunvarji Finstock Pvt. Ltd.",
    "activeClients": 10453,
    "marketShare": 0.02,
    "change": -0.06
  },
  {
    "rank": 96,
    "broker": "Jk Securities Pvt. Ltd.",
    "activeClients": 10151,
    "marketShare": 0.02,
    "change": 1.07
  },
  {
    "rank": 97,
    "broker": "Pocketful Fintech Capital Private Limited",
    "activeClients": 10096,
    "marketShare": 0.02,
    "change": 96.96
  },
  {
    "rank": 98,
    "broker": "Gepl Capital Private Limited",
    "activeClients": 9963,
    "marketShare": 0.02,
    "change": 0.39
  },
  {
    "rank": 99,
    "broker": "Indira Securities Private Limited",
    "activeClients": 9569,
    "marketShare": 0.02,
    "change": 0
  },
  {
    "rank": 100,
    "broker": "Standard Chartered Securities (india) Limited",
    "activeClients": 9036,
    "marketShare": 0.02,
    "change": 0
  },
  {
    "rank": 101,
    "broker": "Share India Securities Limited",
    "activeClients": 8668,
    "marketShare": 0.02,
    "change": 1.05
  },
  {
    "rank": 102,
    "broker": "Adroit Financial Services Private Limited",
    "activeClients": 8235,
    "marketShare": 0.02,
    "change": 0.45
  },
  {
    "rank": 103,
    "broker": "Sunidhi Securities & Finance Limited",
    "activeClients": 7816,
    "marketShare": 0.02,
    "change": 0
  },
  {
    "rank": 104,
    "broker": "Definedge Securities Broking Private Limited",
    "activeClients": 7376,
    "marketShare": 0.02,
    "change": 3.23
  },
  {
    "rank": 105,
    "broker": "Wealthyin Broking Private Limited",
    "activeClients": 6988,
    "marketShare": 0.02,
    "change": 5.54
  },
  {
    "rank": 106,
    "broker": "Smifs Limited",
    "activeClients": 6842,
    "marketShare": 0.02,
    "change": 3.93
  },
  {
    "rank": 107,
    "broker": "Capstocks & Securities (india) Private Limited",
    "activeClients": 6613,
    "marketShare": 0.01,
    "change": 0
  },
  {
    "rank": 108,
    "broker": "Prithvi Finmart Private Limited",
    "activeClients": 6529,
    "marketShare": 0.01,
    "change": -0.38
  },
  {
    "rank": 109,
    "broker": "Sunlight Broking Llp",
    "activeClients": 6452,
    "marketShare": 0.01,
    "change": 0.81
  },
  {
    "rank": 110,
    "broker": "R K Global Shares & Securities Limited",
    "activeClients": 6340,
    "marketShare": 0.01,
    "change": 0.46
  },
  {
    "rank": 111,
    "broker": "Mintcap Brokers Private Limited",
    "activeClients": 6299,
    "marketShare": 0.01,
    "change": 5.97
  },
  {
    "rank": 112,
    "broker": "Mangal Keshav Financial Services Llp",
    "activeClients": 5697,
    "marketShare": 0.01,
    "change": 0.8
  },
  {
    "rank": 113,
    "broker": "Elite Wealth Limited",
    "activeClients": 5527,
    "marketShare": 0.01,
    "change": 4.86
  },
  {
    "rank": 114,
    "broker": "Raghunandan Capital Private Limited",
    "activeClients": 5423,
    "marketShare": 0.01,
    "change": 0.91
  },
  {
    "rank": 115,
    "broker": "Rikhav Securities Limited",
    "activeClients": 5210,
    "marketShare": 0.01,
    "change": 0.4
  },
  {
    "rank": 116,
    "broker": "Zanskar Securities Private Limited",
    "activeClients": 4872,
    "marketShare": 0.01,
    "change": 29.33
  },
  {
    "rank": 117,
    "broker": "India Advantage Securities Private Limited",
    "activeClients": 4490,
    "marketShare": 0.01,
    "change": -0.07
  },
  {
    "rank": 118,
    "broker": "Peerless Securities Limited",
    "activeClients": 4428,
    "marketShare": 0.01,
    "change": -0.25
  },
  {
    "rank": 119,
    "broker": "Tradeswift Broking Private Limited",
    "activeClients": 4143,
    "marketShare": 0.01,
    "change": 0.78
  },
  {
    "rank": 120,
    "broker": "Pace Stock Broking Services Private Limited",
    "activeClients": 4130,
    "marketShare": 0.01,
    "change": -1.08
  },
  {
    "rank": 121,
    "broker": "Zuari Finserv Limited",
    "activeClients": 4041,
    "marketShare": 0.01,
    "change": 0.9
  },
  {
    "rank": 122,
    "broker": "Muthoot Securities Ltd.",
    "activeClients": 3803,
    "marketShare": 0.01,
    "change": 0
  },
  {
    "rank": 123,
    "broker": "Ifci Financial Services Limited",
    "activeClients": 3613,
    "marketShare": 0.01,
    "change": 4.6
  },
  {
    "rank": 124,
    "broker": "Arham Wealth Management Pvt Ltd",
    "activeClients": 3285,
    "marketShare": 0.01,
    "change": 2.75
  },
  {
    "rank": 125,
    "broker": "Julius Baer Wealth Advisors (india) Private Limited",
    "activeClients": 3241,
    "marketShare": 0.01,
    "change": 0
  },
  {
    "rank": 126,
    "broker": "Ashlar Securities Private Limited",
    "activeClients": 3189,
    "marketShare": 0.01,
    "change": -0.06
  },
  {
    "rank": 127,
    "broker": "Kantilal Chhaganlal Securities Private Limited",
    "activeClients": 3158,
    "marketShare": 0.01,
    "change": 1.09
  },
  {
    "rank": 128,
    "broker": "Kedia Capital Services Private Limited",
    "activeClients": 2730,
    "marketShare": 0.01,
    "change": 1.75
  },
  {
    "rank": 129,
    "broker": "Centrum Finverse Limited",
    "activeClients": 2710,
    "marketShare": 0.01,
    "change": 8.44
  },
  {
    "rank": 130,
    "broker": "Ats Share Brokers Private Limited",
    "activeClients": 2708,
    "marketShare": 0.01,
    "change": 3.28
  },
  {
    "rank": 131,
    "broker": "Mse Financial Services Ltd.",
    "activeClients": 2652,
    "marketShare": 0.01,
    "change": -4.98
  },
  {
    "rank": 132,
    "broker": "Navkar Share & Stock Brokers Private Limited",
    "activeClients": 2587,
    "marketShare": 0.01,
    "change": 0.47
  },
  {
    "rank": 133,
    "broker": "Skp Securities Ltd.",
    "activeClients": 2383,
    "marketShare": 0.01,
    "change": 0
  },
  {
    "rank": 134,
    "broker": "Mandot Securities Private Limited",
    "activeClients": 2272,
    "marketShare": 0.01,
    "change": -4.5
  },
  {
    "rank": 135,
    "broker": "Centrum Broking Limited",
    "activeClients": 2243,
    "marketShare": 0.0,
    "change": -6.03
  },
  {
    "rank": 136,
    "broker": "Greshma Shares & Stocks Limited",
    "activeClients": 2193,
    "marketShare": 0.0,
    "change": 0.5
  },
  {
    "rank": 137,
    "broker": "Balaji Equities Ltd.",
    "activeClients": 2046,
    "marketShare": 0.0,
    "change": -0.05
  },
  {
    "rank": 138,
    "broker": "Ajcon Global Services Limited",
    "activeClients": 2045,
    "marketShare": 0.0,
    "change": -0.58
  },
  {
    "rank": 139,
    "broker": "Ghalla Bhansali Stock Brokers Private Limited",
    "activeClients": 1957,
    "marketShare": 0.0,
    "change": -0.2
  },
  {
    "rank": 140,
    "broker": "Nikunj Stock Brokers Ltd.",
    "activeClients": 1906,
    "marketShare": 0.0,
    "change": 0.95
  },
  {
    "rank": 141,
    "broker": "Ski Capital Services Ltd.",
    "activeClients": 1683,
    "marketShare": 0.0,
    "change": -0.24
  },
  {
    "rank": 142,
    "broker": "Dealmoney Commodities Pvt. Ltd.",
    "activeClients": 1498,
    "marketShare": 0.0,
    "change": -6.49
  },
  {
    "rank": 143,
    "broker": "Ambalal Shares And Stocks Private Limited",
    "activeClients": 1488,
    "marketShare": 0.0,
    "change": -1.2
  },
  {
    "rank": 144,
    "broker": "Frr Shares And Securities Limited",
    "activeClients": 1443,
    "marketShare": 0.0,
    "change": 0.28
  },
  {
    "rank": 145,
    "broker": "Fair Intermediate Investment Pvt. Ltd.",
    "activeClients": 1425,
    "marketShare": 0.0,
    "change": -0.7
  },
  {
    "rank": 146,
    "broker": "Bondbazaar Securities Private Limited",
    "activeClients": 1406,
    "marketShare": 0.0,
    "change": 1.15
  },
  {
    "rank": 147,
    "broker": "Abhipra Capital Limited",
    "activeClients": 1238,
    "marketShare": 0.0,
    "change": -0.88
  },
  {
    "rank": 148,
    "broker": "Interactive Brokers (india) Private Limited",
    "activeClients": 1100,
    "marketShare": 0.0,
    "change": 0.18
  },
  {
    "rank": 149,
    "broker": "Hensex Securities Private Limited",
    "activeClients": 1076,
    "marketShare": 0.0,
    "change": -27.35
  },
  {
    "rank": 150,
    "broker": "Uae Exchange & Finance Ltd.",
    "activeClients": 1001,
    "marketShare": 0.0,
    "change": -3.66
  },
  {
    "rank": 151,
    "broker": "Aum Securities Private Ltd.",
    "activeClients": 891,
    "marketShare": 0.0,
    "change": -0.67
  },
  {
    "rank": 152,
    "broker": "Nnm Securities Pvt. Ltd.",
    "activeClients": 885,
    "marketShare": 0.0,
    "change": -1.34
  },
  {
    "rank": 153,
    "broker": "Achintya Securities Limited",
    "activeClients": 759,
    "marketShare": 0.0,
    "change": 1.88
  },
  {
    "rank": 154,
    "broker": "Baljit Securities Pvt. Ltd.",
    "activeClients": 742,
    "marketShare": 0.0,
    "change": -0.54
  },
  {
    "rank": 155,
    "broker": "Kedia Shares & Stocks Brokers Limited",
    "activeClients": 701,
    "marketShare": 0.0,
    "change": 0.29
  },
  {
    "rank": 156,
    "broker": "Lalkar Securities Private Limited",
    "activeClients": 667,
    "marketShare": 0.0,
    "change": -1.33
  },
  {
    "rank": 157,
    "broker": "Neo Wealth Management Private Limited",
    "activeClients": 643,
    "marketShare": 0.0,
    "change": 0
  },
  {
    "rank": 158,
    "broker": "Stockology Securities Private Limited",
    "activeClients": 548,
    "marketShare": 0.0,
    "change": 28.04
  },
  {
    "rank": 159,
    "broker": "Marck Securities Pvt. Ltd.",
    "activeClients": 485,
    "marketShare": 0.0,
    "change": -1.42
  },
  {
    "rank": 160,
    "broker": "Morgan Stanley India Company Private Limited",
    "activeClients": 401,
    "marketShare": 0.0,
    "change": 1.78
  },
  {
    "rank": 161,
    "broker": "Growth Securities Private Limited",
    "activeClients": 328,
    "marketShare": 0.0,
    "change": 1.86
  },
  {
    "rank": 162,
    "broker": "Hsbc Securities & Capital Markets (india) Pvt. Ltd.",
    "activeClients": 254,
    "marketShare": 0.0,
    "change": -1.55
  },
  {
    "rank": 163,
    "broker": "Barclays Securities (india) Private Limited",
    "activeClients": 240,
    "marketShare": 0.0,
    "change": 1.69
  },
  {
    "rank": 164,
    "broker": "Multigain Securities Services Pvt. Ltd.",
    "activeClients": 187,
    "marketShare": 0.0,
    "change": 0.0
  },
  {
    "rank": 165,
    "broker": "Sunshine Stock Broking Private Limited",
    "activeClients": 182,
    "marketShare": 0.0,
    "change": 1.68
  },
  {
    "rank": 166,
    "broker": "Munoth Financial Services Ltd.",
    "activeClients": 178,
    "marketShare": 0.0,
    "change": 0
  },
  {
    "rank": 167,
    "broker": "Dyna Wegmans Securities Limited",
    "activeClients": 173,
    "marketShare": 0.0,
    "change": 0
  },
  {
    "rank": 168,
    "broker": "Nirmal Bang Equities Private Limited",
    "activeClients": 153,
    "marketShare": 0.0,
    "change": 2.0
  },
  {
    "rank": 169,
    "broker": "Avendus Wealth Management Private Limited",
    "activeClients": 138,
    "marketShare": 0.0,
    "change": 26.61
  },
  {
    "rank": 170,
    "broker": "Fortune Capital Services",
    "activeClients": 105,
    "marketShare": 0.0,
    "change": 0.0
  },
  {
    "rank": 171,
    "broker": "Svcm Securities Private Limited",
    "activeClients": 87,
    "marketShare": 0.0,
    "change": -4.4
  },
  {
    "rank": 172,
    "broker": "New Berry Capitals Private Limited",
    "activeClients": 81,
    "marketShare": 0.0,
    "change": 6.58
  },
  {
    "rank": 173,
    "broker": "Arete Securities Limited",
    "activeClients": 78,
    "marketShare": 0.0,
    "change": -1.27
  },
  {
    "rank": 174,
    "broker": "Singhal Capital Services Ltd.",
    "activeClients": 72,
    "marketShare": 0.0,
    "change": -6.49
  },
  {
    "rank": 175,
    "broker": "Ksn Credence Commodities Trading Private Limited",
    "activeClients": 71,
    "marketShare": 0.0,
    "change": 4.41
  },
  {
    "rank": 176,
    "broker": "Integra Securities Private Limited",
    "activeClients": 56,
    "marketShare": 0.0,
    "change": 0
  },
  {
    "rank": 177,
    "broker": "Maheshwari Equity Services (p) Limited",
    "activeClients": 51,
    "marketShare": 0.0,
    "change": -3.77
  },
  {
    "rank": 178,
    "broker": "Dynamic Equities Private Limited",
    "activeClients": 41,
    "marketShare": 0.0,
    "change": 5.13
  },
  {
    "rank": 179,
    "broker": "Shri Ram Commodities",
    "activeClients": 36,
    "marketShare": 0.0,
    "change": -2.7
  },
  {
    "rank": 180,
    "broker": "Khosla Tradewise Private Limited",
    "activeClients": 33,
    "marketShare": 0.0,
    "change": 0.0
  },
  {
    "rank": 181,
    "broker": "Junomoneta Finsol Private Limited",
    "activeClients": 23,
    "marketShare": 0.0,
    "change": 21.05
  },
  {
    "rank": 182,
    "broker": "Bajaj Share & Stock Brokers Pvt. Ltd",
    "activeClients": 20,
    "marketShare": 0.0,
    "change": -4.76
  },
  {
    "rank": 183,
    "broker": "Share India Algoplus Private Limited",
    "activeClients": 20,
    "marketShare": 0.0,
    "change": 33.33
  },
  {
    "rank": 184,
    "broker": "Kifs Broking Private Limited",
    "activeClients": 6,
    "marketShare": 0.0,
    "change": 20.0
  },
  {
    "rank": 185,
    "broker": "Icici Bank Ltd.",
    "activeClients": 1,
    "marketShare": 0.0,
    "change": 0.0
  },
  {
    "rank": 186,
    "broker": "Union Bank Of India",
    "activeClients": 1,
    "marketShare": 0.0,
    "change": 0.0
  },
  {
    "rank": 187,
    "broker": "Citadel Securities India Markets Private Limited",
    "activeClients": 1,
    "marketShare": 0.0,
    "change": 0.0
  },
  {
    "rank": 188,
    "broker": "Finsol Securities Private Limited",
    "activeClients": 1,
    "marketShare": 0.0,
    "change": 0.0
  },
  {
    "rank": 189,
    "broker": "Axis Bank Ltd.",
    "activeClients": 1,
    "marketShare": 0.0,
    "change": 0.0
  },
  {
    "rank": 190,
    "broker": "Punjab National Bank",
    "activeClients": 1,
    "marketShare": 0.0,
    "change": 0.0
  },
  {
    "rank": 191,
    "broker": "State Bank Of India",
    "activeClients": 1,
    "marketShare": 0.0,
    "change": 0.0
  },
  {
    "rank": 192,
    "broker": "Stockfield Financial Services Private Limited",
    "activeClients": 1,
    "marketShare": 0.0,
    "change": 0.0
  }
];

export const INDUSTRY_PARAMS = [
  {
    "category": "Market Calendar",
    "param": "Trading Days",
    "value": "21",
    "prevValue": "23",
    "change": -8.7,
    "source": "NSE/ Sebi bulletin",
    "sourceUrl": "https://www.nseindia.com",
    "asOf": "Aug 2026"
  },
  {
    "category": "Demat Accounts",
    "param": "NSDL Demat Account",
    "value": "4.60 Cr",
    "prevValue": "4.60 Cr",
    "change": 0.0,
    "source": "SEBI bulletin",
    "sourceUrl": "https://www.sebi.gov.in",
    "asOf": "Jul 2026"
  },
  {
    "category": "Demat Accounts",
    "param": "CDSL Demat Account",
    "value": "18.80 Cr",
    "prevValue": "18.60 Cr",
    "change": 1.1,
    "source": "SEBI bulletin",
    "sourceUrl": "https://www.sebi.gov.in",
    "asOf": "Jul 2026"
  },
  {
    "category": "Demat Accounts",
    "param": "Total Demat accounts",
    "value": "23.40",
    "prevValue": "23.20",
    "change": 0.9,
    "source": "Internal calc.",
    "sourceUrl": "https://www.nseindia.com",
    "asOf": "Jul 2026"
  },
  {
    "category": "Demat Accounts",
    "param": "New Demat Account",
    "value": "0.20",
    "prevValue": "0.29",
    "change": -31.0,
    "source": "Difference of 2 & 3",
    "sourceUrl": "https://www.nseindia.com",
    "asOf": "Jul 2026"
  },
  {
    "category": "Active Clients",
    "param": "NSE Active clients",
    "value": "4.55 Cr",
    "prevValue": "4.63 Cr",
    "change": -1.7,
    "source": "NSE",
    "sourceUrl": "https://www.nseindia.com/invest/arbitration-status",
    "asOf": "Jul 2026"
  },
  {
    "category": "Active Clients",
    "param": "NSE Unique PANs",
    "value": "13.10 Cr",
    "prevValue": "13.20 Cr",
    "change": -0.8,
    "source": "NSE Pulse",
    "sourceUrl": "https://www.nseindia.com/research/publications-reports-nse-pulse",
    "asOf": "Jul 2026"
  },
  {
    "category": "FII/DII Flows",
    "param": "FII Volume (cash)",
    "value": "₹-7,532 Cr",
    "prevValue": "₹-5,779 Cr",
    "change": -30.3,
    "source": "Internal calc.",
    "sourceUrl": "https://www.nseindia.com",
    "asOf": "Aug 2026"
  },
  {
    "category": "FII/DII Flows",
    "param": "DII Volume (Cash)",
    "value": "₹58,268 Cr",
    "prevValue": "₹35,099 Cr",
    "change": 66.0,
    "source": "Internal calc.",
    "sourceUrl": "https://www.nseindia.com",
    "asOf": "Aug 2026"
  },
  {
    "category": "FII/DII Flows",
    "param": "FII Volume (Future)",
    "value": "₹-12,900 Cr",
    "prevValue": "₹668 Cr",
    "change": -2030.9,
    "source": "Internal calc.",
    "sourceUrl": "https://www.nseindia.com",
    "asOf": "Aug 2026"
  },
  {
    "category": "FII/DII Flows",
    "param": "FII Volume (OPTION)",
    "value": "₹-26,904 Cr",
    "prevValue": "₹-216,447 Cr",
    "change": 87.6,
    "source": "Internal calc.",
    "sourceUrl": "https://www.nseindia.com",
    "asOf": "Aug 2026"
  },
  {
    "category": "Market Cap by Investor Type",
    "param": "Private Indian promoters",
    "value": "₹150.5 Lakh Cr",
    "prevValue": "₹130.0 Lakh Cr",
    "change": 15.8,
    "source": "NSE Pulse",
    "sourceUrl": "https://www.nseindia.com/research/publications-reports-nse-pulse",
    "asOf": "Jun 2026"
  },
  {
    "category": "Market Cap by Investor Type",
    "param": "Govt",
    "value": "₹45.7 Lakh Cr",
    "prevValue": "₹42.0 Lakh Cr",
    "change": 8.8,
    "source": "NSE Pulse",
    "sourceUrl": "https://www.nseindia.com/research/publications-reports-nse-pulse",
    "asOf": "Jun 2026"
  },
  {
    "category": "Market Cap by Investor Type",
    "param": "Foreign promoters",
    "value": "₹41.7 Lakh Cr",
    "prevValue": "₹34.5 Lakh Cr",
    "change": 20.9,
    "source": "NSE Pulse",
    "sourceUrl": "https://www.nseindia.com/research/publications-reports-nse-pulse",
    "asOf": "Jun 2026"
  },
  {
    "category": "Market Cap by Investor Type",
    "param": "Passive DMFs ^",
    "value": "₹9.8 Lakh Cr",
    "prevValue": "₹9.8 Lakh Cr",
    "change": 0.0,
    "source": "NSE Pulse",
    "sourceUrl": "https://www.nseindia.com/research/publications-reports-nse-pulse",
    "asOf": "Jun 2026"
  },
  {
    "category": "Market Cap by Investor Type",
    "param": "Active DMFs $",
    "value": "₹44.6 Lakh Cr",
    "prevValue": "₹36.9 Lakh Cr",
    "change": 20.9,
    "source": "NSE Pulse",
    "sourceUrl": "https://www.nseindia.com/research/publications-reports-nse-pulse",
    "asOf": "Jun 2026"
  },
  {
    "category": "Market Cap by Investor Type",
    "param": "Banks, FIs & Insurance",
    "value": "₹25.0 Lakh Cr",
    "prevValue": "₹22.7 Lakh Cr",
    "change": 10.1,
    "source": "NSE Pulse",
    "sourceUrl": "https://www.nseindia.com/research/publications-reports-nse-pulse",
    "asOf": "Jun 2026"
  },
  {
    "category": "Market Cap by Investor Type",
    "param": "FPIs *",
    "value": "₹70.7 Lakh Cr",
    "prevValue": "₹64.6 Lakh Cr",
    "change": 9.4,
    "source": "NSE Pulse",
    "sourceUrl": "https://www.nseindia.com/research/publications-reports-nse-pulse",
    "asOf": "Jun 2026"
  },
  {
    "category": "Market Cap by Investor Type",
    "param": "Non-promoter corporate",
    "value": "₹8.7 Lakh Cr",
    "prevValue": "₹7.2 Lakh Cr",
    "change": 20.8,
    "source": "NSE Pulse",
    "sourceUrl": "https://www.nseindia.com/research/publications-reports-nse-pulse",
    "asOf": "Jun 2026"
  },
  {
    "category": "Market Cap by Investor Type",
    "param": "Individual Investor",
    "value": "₹44.6 Lakh Cr",
    "prevValue": "₹37.4 Lakh Cr",
    "change": 19.3,
    "source": "NSE Pulse",
    "sourceUrl": "https://www.nseindia.com/research/publications-reports-nse-pulse",
    "asOf": "Jun 2026"
  },
  {
    "category": "Market Cap by Investor Type",
    "param": "Others **",
    "value": "₹27.6 Lakh Cr",
    "prevValue": "₹23.5 Lakh Cr",
    "change": 17.4,
    "source": "NSE Pulse",
    "sourceUrl": "https://www.nseindia.com/research/publications-reports-nse-pulse",
    "asOf": "Jun 2026"
  },
  {
    "category": "Market Turnover",
    "param": "Equity Volume",
    "value": "₹2,996,580 Cr",
    "prevValue": "₹2,981,166 Cr",
    "change": 0.5,
    "source": "SEBI bulletin",
    "sourceUrl": "https://www.sebi.gov.in",
    "asOf": "Jul 2026"
  },
  {
    "category": "Market Turnover",
    "param": "F&O Volume (Premium)",
    "value": "₹1,739,085 Cr",
    "prevValue": "₹1,843,968 Cr",
    "change": -5.7,
    "source": "SEBI bulletin",
    "sourceUrl": "https://www.sebi.gov.in",
    "asOf": "Jul 2026"
  },
  {
    "category": "Market Turnover",
    "param": "Total Volume (premium)",
    "value": "₹4,735,665 Cr",
    "prevValue": "₹4,825,134 Cr",
    "change": -1.9,
    "source": "SEBI bulletin",
    "sourceUrl": "https://www.sebi.gov.in",
    "asOf": "Jul 2026"
  },
  {
    "category": "Market Turnover",
    "param": "F&O Volume (Notional)",
    "value": "₹1,023,827,057 Cr",
    "prevValue": "₹1,030,149,659 Cr",
    "change": -0.6,
    "source": "SEBI bulletin",
    "sourceUrl": "https://www.sebi.gov.in",
    "asOf": "Jul 2026"
  },
  {
    "category": "Market Turnover",
    "param": "Total Volume (Notional)",
    "value": "₹1,026,823,638 Cr",
    "prevValue": "₹1,033,130,825 Cr",
    "change": -0.6,
    "source": "SEBI bulletin",
    "sourceUrl": "https://www.sebi.gov.in",
    "asOf": "Jul 2026"
  },
  {
    "category": "Margin Trading (MTF)",
    "param": "BSE MTF Book",
    "value": "₹6,070 Cr",
    "prevValue": "₹5,700 Cr",
    "change": 6.5,
    "source": "BSE",
    "sourceUrl": "https://www.bseindia.com/markets/equity/eqreports/grossdel",
    "asOf": "Jul 2026"
  },
  {
    "category": "Margin Trading (MTF)",
    "param": "NSE MTF Book",
    "value": "₹136,592 Cr",
    "prevValue": "₹135,044 Cr",
    "change": 1.1,
    "source": "NSE",
    "sourceUrl": "https://www.nseindia.com/all-reports",
    "asOf": "Jul 2026"
  },
  {
    "category": "Margin Trading (MTF)",
    "param": "Total MTF book",
    "value": "₹142,662 Cr",
    "prevValue": "₹140,744 Cr",
    "change": 1.4,
    "source": "Internal calc.",
    "sourceUrl": "https://www.nseindia.com",
    "asOf": "Jul 2026"
  },
  {
    "category": "Retail ADTO",
    "param": "NSE retail cash ADTO",
    "value": "₹94,793 Cr",
    "prevValue": "₹78,616 Cr",
    "change": 20.6,
    "source": "Internal calc.",
    "sourceUrl": "https://www.nseindia.com",
    "asOf": "Jan 2026"
  },
  {
    "category": "Retail ADTO",
    "param": "NSE retail Futures ADTO",
    "value": "₹99,972 Cr",
    "prevValue": "₹81,644 Cr",
    "change": 22.4,
    "source": "Internal calc.",
    "sourceUrl": "https://www.nseindia.com",
    "asOf": "Jan 2026"
  },
  {
    "category": "Retail ADTO",
    "param": "NSE retail options ADTO",
    "value": "₹55,758 Cr",
    "prevValue": "₹43,267 Cr",
    "change": 28.9,
    "source": "Internal calc.",
    "sourceUrl": "https://www.nseindia.com",
    "asOf": "Jan 2026"
  }
];

export const NEWS_ITEMS = [
  {
    id: 1,
    title: 'Groww launches zero-fee F&O plan for high-frequency traders',
    company: 'Groww',
    tag: 'Product Launch',
    date: '2026-09-04',
    summary: 'New pricing tier targets active F&O traders with flat monthly fee instead of per-order brokerage.',
    sourceUrl: 'https://www.google.com/search?q=groww+zero+fee+f%26o+plan',
  },
  {
    id: 2,
    title: 'Angel One rolls out AI-based portfolio advisory inside its app',
    company: 'Angel One',
    tag: 'Product Launch',
    date: '2026-09-02',
    summary: 'Feature suggests rebalancing actions based on user risk profile and holding concentration.',
    sourceUrl: 'https://www.google.com/search?q=angel+one+ai+portfolio+advisory',
  },
  {
    id: 3,
    title: 'Upstox partners with a private bank for co-branded trading account',
    company: 'Upstox',
    tag: 'Partnership',
    date: '2026-08-29',
    summary: 'Tie-up bundles a savings account with a discount broking account for faster onboarding.',
    sourceUrl: 'https://www.google.com/search?q=upstox+bank+partnership+trading+account',
  },
];
// ^ PLACEHOLDER — replace with your real news source when ready.

export const MF_SIF_DATA = {
  headline: [
  {
    "label": "Total AUM",
    "value": "₹85.75 Lakh Cr",
    "change": 4.3
  },
  {
    "label": "Equity AUM",
    "value": "₹38.40 Lakh Cr",
    "change": 2.8
  },
  {
    "label": "MF Schemes",
    "value": "1,963",
    "change": 0.9
  },
  {
    "label": "MF Folios",
    "value": "28.08 Cr",
    "change": 0.8
  },
  {
    "label": "SIP Accounts",
    "value": "10.63 Cr",
    "change": 1.1
  },
  {
    "label": "SIP Monthly Inflow",
    "value": "₹31,961 Cr",
    "change": 0.6
  },
  {
    "label": "SIP AUM",
    "value": "₹18.20 Lakh Cr",
    "change": 2.8
  },
  {
    "label": "SIF AUM",
    "value": "₹23,177 Cr",
    "change": 29.8
  },
  {
    "label": "SIF Folios",
    "value": "94,447",
    "change": 25.9
  },
  {
    "label": "SIF Schemes",
    "value": "30",
    "change": 11.1
  },
  {
    "label": "B30 Contribution",
    "value": "₹15.88 Lakh Cr",
    "change": 2.0
  },
  {
    "label": "T30 Contribution",
    "value": "₹66.35 Lakh Cr",
    "change": 0.5
  }
],
  aumTrend: [
  {
    "month": "Aug 25",
    "totalAum": 76.7,
    "equityAum": 33.1
  },
  {
    "month": "Sep 25",
    "totalAum": 77.8,
    "equityAum": 33.7
  },
  {
    "month": "Oct 25",
    "totalAum": 79.9,
    "equityAum": 35.2
  },
  {
    "month": "Nov 25",
    "totalAum": 80.8,
    "equityAum": 35.7
  },
  {
    "month": "Dec 25",
    "totalAum": 80.2,
    "equityAum": 35.8
  },
  {
    "month": "Jan 26",
    "totalAum": 81.0,
    "equityAum": 34.9
  },
  {
    "month": "Feb 26",
    "totalAum": 82.0,
    "equityAum": 35.4
  },
  {
    "month": "Mar 26",
    "totalAum": 73.7,
    "equityAum": 32.0
  },
  {
    "month": "Apr 26",
    "totalAum": 81.9,
    "equityAum": 25.8
  },
  {
    "month": "May 26",
    "totalAum": 81.6,
    "equityAum": 36.2
  },
  {
    "month": "Jun 26",
    "totalAum": 82.2,
    "equityAum": 37.4
  },
  {
    "month": "Jul 26",
    "totalAum": 85.8,
    "equityAum": 38.4
  }
],
};
