import { DateTime, Duration } from "luxon";
import dotenv from 'dotenv';
import axios from "./axios"
dotenv.config();

let data = [
    {
    "EventId": 166,
    "LeagueId": 1,
    "Name": "UFC Fight Night: Holloway vs. Kattar",
    "ShortName": "UFC Fight Night",
    "Season": 2021,
    "Day": "2021-01-16T00:00:00",
    "DateTime": "2021-01-16T12:00:00",
    "Status": "Final",
    "Active": true
    },
    {
    "EventId": 167,
    "LeagueId": 1,
    "Name": "UFC Fight Night: Chiesa vs. Magny",
    "ShortName": "UFC Fight Night",
    "Season": 2021,
    "Day": "2021-01-20T00:00:00",
    "DateTime": "2021-01-20T09:00:00",
    "Status": "Final",
    "Active": true
    },
    {
    "EventId": 168,
    "LeagueId": 1,
    "Name": "UFC 257: Poirier vs. McGregor 2",
    "ShortName": "UFC 257",
    "Season": 2021,
    "Day": "2021-01-23T00:00:00",
    "DateTime": "2021-01-23T19:00:00",
    "Status": "Final",
    "Active": true
    },
    {
    "EventId": 171,
    "LeagueId": 1,
    "Name": "UFC Fight Night: Overeem vs. Volkov",
    "ShortName": "UFC Fight Night",
    "Season": 2021,
    "Day": "2021-02-06T00:00:00",
    "DateTime": "2021-02-06T17:00:00",
    "Status": "Final",
    "Active": true
    },
    {
    "EventId": 169,
    "LeagueId": 1,
    "Name": "UFC 258: Usman vs. Burns",
    "ShortName": "UFC 258",
    "Season": 2021,
    "Day": "2021-02-13T00:00:00",
    "DateTime": "2021-02-13T19:00:00",
    "Status": "Final",
    "Active": true
    },
    {
    "EventId": 172,
    "LeagueId": 1,
    "Name": "UFC Fight Night: Blaydes vs. Lewis",
    "ShortName": "UFC Fight Night",
    "Season": 2021,
    "Day": "2021-02-20T00:00:00",
    "DateTime": "2021-02-20T17:00:00",
    "Status": "Final",
    "Active": true
    },
    {
    "EventId": 174,
    "LeagueId": 1,
    "Name": "UFC Fight Night: Rozenstruik vs. Gane",
    "ShortName": "UFC Fight Night",
    "Season": 2021,
    "Day": "2021-02-27T00:00:00",
    "DateTime": "2021-02-27T18:00:00",
    "Status": "Final",
    "Active": true
    },
    {
    "EventId": 170,
    "LeagueId": 1,
    "Name": "UFC 259: Blachowicz vs. Adesanya",
    "ShortName": "UFC 259",
    "Season": 2021,
    "Day": "2021-03-06T00:00:00",
    "DateTime": "2021-03-06T17:15:00",
    "Status": "Final",
    "Active": true
    },
    {
    "EventId": 173,
    "LeagueId": 1,
    "Name": "UFC Fight Night: Edwards vs. Muhammad",
    "ShortName": "UFC Fight Night",
    "Season": 2021,
    "Day": "2021-03-13T00:00:00",
    "DateTime": "2021-03-13T17:00:00",
    "Status": "Final",
    "Active": true
    },
    {
    "EventId": 176,
    "LeagueId": 1,
    "Name": "UFC Fight Night: Brunson vs. Holland",
    "ShortName": "UFC Fight Night",
    "Season": 2021,
    "Day": "2021-03-20T00:00:00",
    "DateTime": "2021-03-20T19:30:00",
    "Status": "Final",
    "Active": true
    },
    {
    "EventId": 175,
    "LeagueId": 1,
    "Name": "UFC 260: Miocic vs. Ngannou 2",
    "ShortName": "UFC 260",
    "Season": 2021,
    "Day": "2021-03-27T00:00:00",
    "DateTime": "2021-03-27T19:30:00",
    "Status": "Final",
    "Active": true
    },
    {
    "EventId": 179,
    "LeagueId": 1,
    "Name": "UFC Fight Night: Vettori vs. Holland",
    "ShortName": "UFC Fight Night",
    "Season": 2021,
    "Day": "2021-04-10T00:00:00",
    "DateTime": "2021-04-10T11:30:00",
    "Status": "Final",
    "Active": true
    },
    {
    "EventId": 177,
    "LeagueId": 1,
    "Name": "UFC Fight Night: Whittaker vs. Gastelum",
    "ShortName": "UFC Fight Night",
    "Season": 2021,
    "Day": "2021-04-17T00:00:00",
    "DateTime": "2021-04-17T19:00:00",
    "Status": "Final",
    "Active": true
    },
    {
    "EventId": 178,
    "LeagueId": 1,
    "Name": "UFC 261: Usman vs. Masvidal 2",
    "ShortName": "UFC 261",
    "Season": 2021,
    "Day": "2021-04-24T00:00:00",
    "DateTime": "2021-04-24T18:00:00",
    "Status": "Final",
    "Active": true
    },
    {
    "EventId": 183,
    "LeagueId": 1,
    "Name": "UFC Fight Night: Reyes vs. Prochazka",
    "ShortName": "UFC Fight Night",
    "Season": 2021,
    "Day": "2021-05-01T00:00:00",
    "DateTime": "2021-05-01T19:00:00",
    "Status": "Final",
    "Active": true
    },
    {
    "EventId": 180,
    "LeagueId": 1,
    "Name": "UFC Fight Night: Rodriguez vs. Waterson",
    "ShortName": "UFC Fight Night",
    "Season": 2021,
    "Day": "2021-05-08T00:00:00",
    "DateTime": "2021-05-08T18:00:00",
    "Status": "Final",
    "Active": true
    },
    {
    "EventId": 181,
    "LeagueId": 1,
    "Name": "UFC 262: Oliveira vs. Chandler",
    "ShortName": "UFC 262",
    "Season": 2021,
    "Day": "2021-05-15T00:00:00",
    "DateTime": "2021-05-15T18:30:00",
    "Status": "Final",
    "Active": true
    },
    {
    "EventId": 182,
    "LeagueId": 1,
    "Name": "UFC Fight Night: Font vs. Garbrandt",
    "ShortName": "UFC Fight Night",
    "Season": 2021,
    "Day": "2021-05-22T00:00:00",
    "DateTime": "2021-05-22T16:00:00",
    "Status": "Final",
    "Active": true
    },
    {
    "EventId": 189,
    "LeagueId": 1,
    "Name": "UFC Fight Night: Rozenstruik vs. Sakai",
    "ShortName": "UFC Fight Night",
    "Season": 2021,
    "Day": "2021-06-05T00:00:00",
    "DateTime": "2021-06-05T16:00:00",
    "Status": "Final",
    "Active": true
    },
    {
    "EventId": 187,
    "LeagueId": 1,
    "Name": "UFC 263: Adesanya vs. Vettori 2",
    "ShortName": "UFC 263",
    "Season": 2021,
    "Day": "2021-06-12T00:00:00",
    "DateTime": "2021-06-12T18:00:00",
    "Status": "Final",
    "Active": true
    },
    {
    "EventId": 188,
    "LeagueId": 1,
    "Name": "UFC Fight Night: The Korean Zombie vs. Ige",
    "ShortName": "UFC Fight Night",
    "Season": 2021,
    "Day": "2021-06-19T00:00:00",
    "DateTime": "2021-06-19T16:00:00",
    "Status": "Final",
    "Active": true
    },
    {
    "EventId": 184,
    "LeagueId": 1,
    "Name": "UFC Fight Night: Gane vs. Volkov",
    "ShortName": "UFC Fight Night",
    "Season": 2021,
    "Day": "2021-06-26T00:00:00",
    "DateTime": "2021-06-26T13:00:00",
    "Status": "Final",
    "Active": true
    },
    {
    "EventId": 185,
    "LeagueId": 1,
    "Name": "UFC 264: Poirier vs. McGregor 3",
    "ShortName": "UFC 264",
    "Season": 2021,
    "Day": "2021-07-10T00:00:00",
    "DateTime": "2021-07-10T18:00:00",
    "Status": "Final",
    "Active": true
    },
    {
    "EventId": 193,
    "LeagueId": 1,
    "Name": "UFC Fight Night: Makhachev vs. Moises",
    "ShortName": "UFC Fight Night",
    "Season": 2021,
    "Day": "2021-07-17T00:00:00",
    "DateTime": "2021-07-17T19:00:00",
    "Status": "Final",
    "Active": true
    },
    {
    "EventId": 194,
    "LeagueId": 1,
    "Name": "UFC Fight Night: Sandhagen vs. Dillashaw",
    "ShortName": "UFC Fight Night",
    "Season": 2021,
    "Day": "2021-07-24T00:00:00",
    "DateTime": "2021-07-24T16:00:00",
    "Status": "Final",
    "Active": true
    },
    {
    "EventId": 206,
    "LeagueId": 1,
    "Name": "The Ultimate Fighter 29 Semifinal",
    "ShortName": "The Ultimate Fighter 29 Semifinal",
    "Season": 2021,
    "Day": "2021-07-27T00:00:00",
    "DateTime": "2021-07-27T00:00:00",
    "Status": "Final",
    "Active": true
    },
    {
    "EventId": 195,
    "LeagueId": 1,
    "Name": "UFC Fight Night: Hall vs. Strickland",
    "ShortName": "UFC Fight Night",
    "Season": 2021,
    "Day": "2021-07-31T00:00:00",
    "DateTime": "2021-07-31T18:30:00",
    "Status": "Final",
    "Active": true
    },
    {
    "EventId": 207,
    "LeagueId": 1,
    "Name": "The Ultimate Fighter 29 Semifinal",
    "ShortName": "The Ultimate Fighter 29 Semifinal",
    "Season": 2021,
    "Day": "2021-08-03T00:00:00",
    "DateTime": "2021-08-03T00:00:00",
    "Status": "Final",
    "Active": true
    },
    {
    "EventId": 190,
    "LeagueId": 1,
    "Name": "UFC 265: Lewis vs. Gane",
    "ShortName": "UFC 265",
    "Season": 2021,
    "Day": "2021-08-07T00:00:00",
    "DateTime": "2021-08-07T18:00:00",
    "Status": "Final",
    "Active": true
    },
    {
    "EventId": 208,
    "LeagueId": 1,
    "Name": "The Ultimate Fighter 29 Semifinal",
    "ShortName": "The Ultimate Fighter 29 Semifinal",
    "Season": 2021,
    "Day": "2021-08-10T00:00:00",
    "DateTime": "2021-08-10T00:00:00",
    "Status": "Final",
    "Active": true
    },
    {
    "EventId": 209,
    "LeagueId": 1,
    "Name": "The Ultimate Fighter 29 Semifinal",
    "ShortName": "The Ultimate Fighter 29 Semifinal",
    "Season": 2021,
    "Day": "2021-08-17T00:00:00",
    "DateTime": "2021-08-17T00:00:00",
    "Status": "Final",
    "Active": true
    },
    {
    "EventId": 192,
    "LeagueId": 1,
    "Name": "UFC Fight Night: Cannonier vs. Gastelum",
    "ShortName": "UFC Fight Night",
    "Season": 2021,
    "Day": "2021-08-21T00:00:00",
    "DateTime": "2021-08-21T19:00:00",
    "Status": "Final",
    "Active": true
    },
    {
    "EventId": 201,
    "LeagueId": 1,
    "Name": "UFC Fight Night: Barboza vs. Chikadze",
    "ShortName": "UFC Fight Night",
    "Season": 2021,
    "Day": "2021-08-28T00:00:00",
    "DateTime": "2021-08-28T19:00:00",
    "Status": "Final",
    "Active": true
    },
    {
    "EventId": 196,
    "LeagueId": 1,
    "Name": "Dana White's Contender Series: Season 5, Week 1",
    "ShortName": "Dana White's Contender Series",
    "Season": 2021,
    "Day": "2021-08-31T00:00:00",
    "DateTime": "2021-08-31T20:00:00",
    "Status": "Final",
    "Active": true
    },
    {
    "EventId": 202,
    "LeagueId": 1,
    "Name": "UFC Fight Night: Brunson vs. Till",
    "ShortName": "UFC Fight Night",
    "Season": 2021,
    "Day": "2021-09-04T00:00:00",
    "DateTime": "2021-09-04T14:00:00",
    "Status": "Final",
    "Active": true
    },
    {
    "EventId": 197,
    "LeagueId": 1,
    "Name": "Dana White's Contender Series: Season 5, Week 2",
    "ShortName": "Dana White's Contender Series",
    "Season": 2021,
    "Day": "2021-09-07T00:00:00",
    "DateTime": "2021-09-07T20:00:00",
    "Status": "Final",
    "Active": true
    },
    {
    "EventId": 198,
    "LeagueId": 1,
    "Name": "Dana White's Contender Series: Season 5, Week 3",
    "ShortName": "Dana White's Contender Series",
    "Season": 2021,
    "Day": "2021-09-14T00:00:00",
    "DateTime": "2021-09-14T20:00:00",
    "Status": "Final",
    "Active": true
    },
    {
    "EventId": 204,
    "LeagueId": 1,
    "Name": "UFC Fight Night: Smith vs. Spann",
    "ShortName": "UFC Fight Night",
    "Season": 2021,
    "Day": "2021-09-18T00:00:00",
    "DateTime": "2021-09-18T16:00:00",
    "Status": "Final",
    "Active": true
    },
    {
    "EventId": 199,
    "LeagueId": 1,
    "Name": "Dana White's Contender Series: Season 5, Week 4",
    "ShortName": "Dana White's Contender Series",
    "Season": 2021,
    "Day": "2021-09-21T00:00:00",
    "DateTime": "2021-09-21T20:00:00",
    "Status": "Final",
    "Active": true
    },
    {
    "EventId": 191,
    "LeagueId": 1,
    "Name": "UFC 266: Volkanovski vs. Ortega",
    "ShortName": "UFC 266",
    "Season": 2021,
    "Day": "2021-09-25T00:00:00",
    "DateTime": "2021-09-25T18:00:00",
    "Status": "Final",
    "Active": true
    },
    {
    "EventId": 200,
    "LeagueId": 1,
    "Name": "Dana White's Contender Series: Season 5, Week 5",
    "ShortName": "Dana White's Contender Series",
    "Season": 2021,
    "Day": "2021-09-28T00:00:00",
    "DateTime": "2021-09-28T20:00:00",
    "Status": "Final",
    "Active": true
    },
    {
    "EventId": 205,
    "LeagueId": 1,
    "Name": "UFC Fight Night: Santos vs. Walker",
    "ShortName": "UFC Fight Night",
    "Season": 2021,
    "Day": "2021-10-02T00:00:00",
    "DateTime": "2021-10-02T16:00:00",
    "Status": "Final",
    "Active": true
    },
    {
    "EventId": 210,
    "LeagueId": 1,
    "Name": "Dana White's Contender Series: Season 5, Week 6",
    "ShortName": "Dana White's Contender Series",
    "Season": 2021,
    "Day": "2021-10-05T00:00:00",
    "DateTime": "2021-10-05T20:00:00",
    "Status": "Final",
    "Active": true
    },
    {
    "EventId": 212,
    "LeagueId": 1,
    "Name": "UFC Fight Night: Dern vs. Rodriguez",
    "ShortName": "UFC Fight Night",
    "Season": 2021,
    "Day": "2021-10-09T00:00:00",
    "DateTime": "2021-10-09T14:00:00",
    "Status": "Final",
    "Active": true
    },
    {
    "EventId": 211,
    "LeagueId": 1,
    "Name": "Dana White's Contender Series: Season 5, Week 7",
    "ShortName": "Dana White's Contender Series",
    "Season": 2021,
    "Day": "2021-10-12T00:00:00",
    "DateTime": "2021-10-12T20:00:00",
    "Status": "Final",
    "Active": true
    },
    {
    "EventId": 215,
    "LeagueId": 1,
    "Name": "UFC Fight Night: Ladd vs. Dumont",
    "ShortName": "UFC Fight Night",
    "Season": 2021,
    "Day": "2021-10-16T00:00:00",
    "DateTime": "2021-10-16T16:30:00",
    "Status": "Final",
    "Active": true
    },
    {
    "EventId": 221,
    "LeagueId": 1,
    "Name": "Dana White's Contender Series: Season 5, Week 8",
    "ShortName": "Dana White's Contender Series",
    "Season": 2021,
    "Day": "2021-10-19T00:00:00",
    "DateTime": "2021-10-19T20:00:00",
    "Status": "Final",
    "Active": true
    },
    {
    "EventId": 216,
    "LeagueId": 1,
    "Name": "UFC Fight Night: Costa vs. Vettori",
    "ShortName": "UFC Fight Night",
    "Season": 2021,
    "Day": "2021-10-23T00:00:00",
    "DateTime": "2021-10-23T13:00:00",
    "Status": "Final",
    "Active": true
    },
    {
    "EventId": 222,
    "LeagueId": 1,
    "Name": "Dana White's Contender Series: Season 5, Week 9",
    "ShortName": "Dana White's Contender Series",
    "Season": 2021,
    "Day": "2021-10-26T00:00:00",
    "DateTime": "2021-10-26T20:00:00",
    "Status": "Final",
    "Active": true
    },
    {
    "EventId": 203,
    "LeagueId": 1,
    "Name": "UFC 267: Blachowicz vs. Teixeira",
    "ShortName": "UFC 267",
    "Season": 2021,
    "Day": "2021-10-30T00:00:00",
    "DateTime": "2021-10-30T10:30:00",
    "Status": "Final",
    "Active": true
    },
    {
    "EventId": 223,
    "LeagueId": 1,
    "Name": "Dana White's Contender Series: Season 5, Week 10",
    "ShortName": "Dana White's Contender Series",
    "Season": 2021,
    "Day": "2021-11-02T00:00:00",
    "DateTime": "2021-11-02T20:00:00",
    "Status": "Final",
    "Active": true
    },
    {
    "EventId": 213,
    "LeagueId": 1,
    "Name": "UFC 268: Usman vs. Covington 2",
    "ShortName": "UFC 268",
    "Season": 2021,
    "Day": "2021-11-06T00:00:00",
    "DateTime": "2021-11-06T18:00:00",
    "Status": "Scheduled",
    "Active": true
    },
    {
    "EventId": 217,
    "LeagueId": 1,
    "Name": "UFC Fight Night: Holloway vs. Rodriguez",
    "ShortName": "UFC Fight Night",
    "Season": 2021,
    "Day": "2021-11-13T00:00:00",
    "DateTime": "2021-11-13T13:00:00",
    "Status": "Scheduled",
    "Active": true
    },
    {
    "EventId": 218,
    "LeagueId": 1,
    "Name": "UFC Fight Night: Vieira vs. Tate",
    "ShortName": "UFC Fight Night",
    "Season": 2021,
    "Day": "2021-11-20T00:00:00",
    "DateTime": "2021-11-20T15:00:00",
    "Status": "Scheduled",
    "Active": true
    },
    {
    "EventId": 220,
    "LeagueId": 1,
    "Name": "UFC Fight Night: Font vs. Aldo",
    "ShortName": "UFC Fight Night",
    "Season": 2021,
    "Day": "2021-12-04T00:00:00",
    "DateTime": "2021-12-04T19:00:00",
    "Status": "Scheduled",
    "Active": true
    },
    {
    "EventId": 214,
    "LeagueId": 1,
    "Name": "UFC 269: Oliveira vs. Poirier",
    "ShortName": "UFC 269",
    "Season": 2021,
    "Day": "2021-12-11T00:00:00",
    "DateTime": "2021-12-11T18:00:00",
    "Status": "Scheduled",
    "Active": true
    },
    {
    "EventId": 219,
    "LeagueId": 1,
    "Name": "UFC Fight Night: Lewis vs. Daukaus",
    "ShortName": "UFC Fight Night",
    "Season": 2021,
    "Day": "2021-12-18T00:00:00",
    "DateTime": "2021-12-18T16:00:00",
    "Status": "Scheduled",
    "Active": true
    }
    ]

    let event = {
        "EventId": 213,
        "LeagueId": 1,
        "Name": "UFC 268: Usman vs. Covington 2",
        "ShortName": "UFC 268",
        "Season": 2021,
        "Day": "2021-11-06T00:00:00",
        "DateTime": "2021-11-06T18:00:00",
        "Status": "Scheduled",
        "Active": true,
        "Fights": [
        {
        "FightId": 2401,
        "Order": 1,
        "Status": "Scheduled",
        "WeightClass": "Welterweight",
        "CardSegment": "Main Card",
        "Referee": null,
        "Rounds": 5,
        "ResultClock": 0,
        "ResultRound": 0,
        "ResultType": "Scrambled",
        "WinnerId": null,
        "Active": true,
        "Fighters": [
        {
        "FighterId": 140000521,
        "FirstName": "Colby",
        "LastName": "Covington",
        "PreFightWins": 16,
        "PreFightLosses": 2,
        "PreFightDraws": 0,
        "PreFightNoContests": 0,
        "Winner": false,
        "Moneyline": 248,
        "Active": true
        },
        {
        "FighterId": 140000145,
        "FirstName": "Kamaru",
        "LastName": "Usman",
        "PreFightWins": 19,
        "PreFightLosses": 1,
        "PreFightDraws": 0,
        "PreFightNoContests": 0,
        "Winner": false,
        "Moneyline": -321,
        "Active": true
        }
        ]
        },
        {
        "FightId": 2400,
        "Order": 2,
        "Status": "Scheduled",
        "WeightClass": "Women's Strawweight",
        "CardSegment": "Main Card",
        "Referee": null,
        "Rounds": 5,
        "ResultClock": 0,
        "ResultRound": 0,
        "ResultType": "Scrambled",
        "WinnerId": null,
        "Active": true,
        "Fighters": [
        {
        "FighterId": 140000350,
        "FirstName": "Rose",
        "LastName": "Namajunas",
        "PreFightWins": 11,
        "PreFightLosses": 4,
        "PreFightDraws": 0,
        "PreFightNoContests": 0,
        "Winner": false,
        "Moneyline": -105,
        "Active": true
        },
        {
        "FighterId": 140000141,
        "FirstName": "Zhang",
        "LastName": "Weili",
        "PreFightWins": 21,
        "PreFightLosses": 2,
        "PreFightDraws": 0,
        "PreFightNoContests": 0,
        "Winner": false,
        "Moneyline": -118,
        "Active": true
        }
        ]
        },
        {
        "FightId": 2397,
        "Order": 3,
        "Status": "Scheduled",
        "WeightClass": "Bantamweight",
        "CardSegment": "Main Card",
        "Referee": null,
        "Rounds": 3,
        "ResultClock": 0,
        "ResultRound": 0,
        "ResultType": "Scrambled",
        "WinnerId": null,
        "Active": true,
        "Fighters": [
        {
        "FighterId": 140000504,
        "FirstName": "Frankie",
        "LastName": "Edgar",
        "PreFightWins": 23,
        "PreFightLosses": 9,
        "PreFightDraws": 1,
        "PreFightNoContests": 0,
        "Winner": false,
        "Moneyline": 147,
        "Active": true
        },
        {
        "FighterId": 140000207,
        "FirstName": "Marlon",
        "LastName": "Vera",
        "PreFightWins": 17,
        "PreFightLosses": 7,
        "PreFightDraws": 1,
        "PreFightNoContests": 0,
        "Winner": false,
        "Moneyline": -177,
        "Active": true
        }
        ]
        },
        {
        "FightId": 2398,
        "Order": 4,
        "Status": "Canceled",
        "WeightClass": "Middleweight",
        "CardSegment": "Main Card",
        "Referee": null,
        "Rounds": 3,
        "ResultClock": 0,
        "ResultRound": 0,
        "ResultType": "Scrambled",
        "WinnerId": null,
        "Active": false,
        "Fighters": [
        {
        "FighterId": 140000445,
        "FirstName": "Luke",
        "LastName": "Rockhold",
        "PreFightWins": 16,
        "PreFightLosses": 5,
        "PreFightDraws": 0,
        "PreFightNoContests": 0,
        "Winner": false,
        "Moneyline": 138,
        "Active": false
        },
        {
        "FighterId": 140000741,
        "FirstName": "Sean",
        "LastName": "Strickland",
        "PreFightWins": 24,
        "PreFightLosses": 3,
        "PreFightDraws": 0,
        "PreFightNoContests": 0,
        "Winner": false,
        "Moneyline": -167,
        "Active": false
        }
        ]
        },
        {
        "FightId": 2440,
        "Order": 4,
        "Status": "Scheduled",
        "WeightClass": "Featherweight",
        "CardSegment": "Main Card",
        "Referee": null,
        "Rounds": 3,
        "ResultClock": 0,
        "ResultRound": 0,
        "ResultType": "Scrambled",
        "WinnerId": null,
        "Active": true,
        "Fighters": [
        {
        "FighterId": 140000488,
        "FirstName": "Billy",
        "LastName": "Quarantillo",
        "PreFightWins": 16,
        "PreFightLosses": 3,
        "PreFightDraws": 0,
        "PreFightNoContests": 0,
        "Winner": false,
        "Moneyline": 165,
        "Active": true
        },
        {
        "FighterId": 140000328,
        "FirstName": "Shane",
        "LastName": "Burgos",
        "PreFightWins": 13,
        "PreFightLosses": 3,
        "PreFightDraws": 0,
        "PreFightNoContests": 0,
        "Winner": false,
        "Moneyline": -201,
        "Active": true
        }
        ]
        },
        {
        "FightId": 2399,
        "Order": 5,
        "Status": "Scheduled",
        "WeightClass": "Lightweight",
        "CardSegment": "Main Card",
        "Referee": null,
        "Rounds": 3,
        "ResultClock": 0,
        "ResultRound": 0,
        "ResultType": "Scrambled",
        "WinnerId": null,
        "Active": true,
        "Fighters": [
        {
        "FighterId": 140001095,
        "FirstName": "Michael",
        "LastName": "Chandler",
        "PreFightWins": 22,
        "PreFightLosses": 6,
        "PreFightDraws": 0,
        "PreFightNoContests": 0,
        "Winner": false,
        "Moneyline": 170,
        "Active": true
        },
        {
        "FighterId": 140000247,
        "FirstName": "Justin",
        "LastName": "Gaethje",
        "PreFightWins": 22,
        "PreFightLosses": 3,
        "PreFightDraws": 0,
        "PreFightNoContests": 0,
        "Winner": false,
        "Moneyline": -209,
        "Active": true
        }
        ]
        },
        {
        "FightId": 2396,
        "Order": 6,
        "Status": "Canceled",
        "WeightClass": "Women's Bantamweight",
        "CardSegment": "Main Card",
        "Referee": null,
        "Rounds": 3,
        "ResultClock": 0,
        "ResultRound": 0,
        "ResultType": "Scrambled",
        "WinnerId": null,
        "Active": false,
        "Fighters": [
        {
        "FighterId": 140000471,
        "FirstName": "Germaine",
        "LastName": "de Randamie",
        "PreFightWins": 10,
        "PreFightLosses": 4,
        "PreFightDraws": 0,
        "PreFightNoContests": 0,
        "Winner": false,
        "Moneyline": -170,
        "Active": false
        },
        {
        "FighterId": 140000345,
        "FirstName": "Irene",
        "LastName": "Aldana",
        "PreFightWins": 13,
        "PreFightLosses": 6,
        "PreFightDraws": 0,
        "PreFightNoContests": 0,
        "Winner": false,
        "Moneyline": 145,
        "Active": false
        },
        {
        "FighterId": 140000488,
        "FirstName": "Billy",
        "LastName": "Quarantillo",
        "PreFightWins": 16,
        "PreFightLosses": 3,
        "PreFightDraws": 0,
        "PreFightNoContests": 0,
        "Winner": false,
        "Moneyline": -170,
        "Active": false
        },
        {
        "FighterId": 140000328,
        "FirstName": "Shane",
        "LastName": "Burgos",
        "PreFightWins": 13,
        "PreFightLosses": 3,
        "PreFightDraws": 0,
        "PreFightNoContests": 0,
        "Winner": false,
        "Moneyline": 145,
        "Active": false
        }
        ]
        },
        {
        "FightId": 2437,
        "Order": 6,
        "Status": "Scheduled",
        "WeightClass": "Middleweight",
        "CardSegment": "Prelims",
        "Referee": null,
        "Rounds": 3,
        "ResultClock": 0,
        "ResultRound": 0,
        "ResultType": "Scrambled",
        "WinnerId": null,
        "Active": true,
        "Fighters": [
        {
        "FighterId": 140000938,
        "FirstName": "Andreas",
        "LastName": "Michailidis",
        "PreFightWins": 13,
        "PreFightLosses": 4,
        "PreFightDraws": 0,
        "PreFightNoContests": 0,
        "Winner": false,
        "Moneyline": 204,
        "Active": true
        },
        {
        "FighterId": 140001220,
        "FirstName": "Alex",
        "LastName": "Pereira",
        "PreFightWins": 3,
        "PreFightLosses": 1,
        "PreFightDraws": 0,
        "PreFightNoContests": 0,
        "Winner": false,
        "Moneyline": -257,
        "Active": true
        }
        ]
        },
        {
        "FightId": 2395,
        "Order": 7,
        "Status": "Scheduled",
        "WeightClass": "Lightweight",
        "CardSegment": "Prelims",
        "Referee": null,
        "Rounds": 3,
        "ResultClock": 0,
        "ResultRound": 0,
        "ResultType": "Scrambled",
        "WinnerId": null,
        "Active": true,
        "Fighters": [
        {
        "FighterId": 140000649,
        "FirstName": "Bobby",
        "LastName": "Green",
        "PreFightWins": 27,
        "PreFightLosses": 12,
        "PreFightDraws": 1,
        "PreFightNoContests": 0,
        "Winner": false,
        "Moneyline": -180,
        "Active": true
        },
        {
        "FighterId": 140000331,
        "FirstName": "Al",
        "LastName": "Iaquinta",
        "PreFightWins": 14,
        "PreFightLosses": 6,
        "PreFightDraws": 1,
        "PreFightNoContests": 0,
        "Winner": false,
        "Moneyline": 145,
        "Active": true
        }
        ]
        },
        {
        "FightId": 2553,
        "Order": 8,
        "Status": "Scheduled",
        "WeightClass": "Middleweight",
        "CardSegment": "Prelims",
        "Referee": null,
        "Rounds": 3,
        "ResultClock": 0,
        "ResultRound": 0,
        "ResultType": "Scrambled",
        "WinnerId": null,
        "Active": true,
        "Fighters": [
        {
        "FighterId": 140000766,
        "FirstName": "Chris",
        "LastName": "Curtis",
        "PreFightWins": 26,
        "PreFightLosses": 8,
        "PreFightDraws": 0,
        "PreFightNoContests": 0,
        "Winner": false,
        "Moneyline": 264,
        "Active": true
        },
        {
        "FighterId": 140001025,
        "FirstName": "Phil",
        "LastName": "Hawes",
        "PreFightWins": 11,
        "PreFightLosses": 2,
        "PreFightDraws": 0,
        "PreFightNoContests": 0,
        "Winner": false,
        "Moneyline": -347,
        "Active": true
        }
        ]
        },
        {
        "FightId": 2443,
        "Order": 9,
        "Status": "Scheduled",
        "WeightClass": "Middleweight",
        "CardSegment": "Prelims",
        "Referee": null,
        "Rounds": 3,
        "ResultClock": 0,
        "ResultRound": 0,
        "ResultType": "Scrambled",
        "WinnerId": null,
        "Active": true,
        "Fighters": [
        {
        "FighterId": 140000130,
        "FirstName": "Edmen",
        "LastName": "Shahbazyan",
        "PreFightWins": 11,
        "PreFightLosses": 2,
        "PreFightDraws": 0,
        "PreFightNoContests": 0,
        "Winner": false,
        "Moneyline": -101,
        "Active": true
        },
        {
        "FighterId": 140001027,
        "FirstName": "Nassourdine",
        "LastName": "Imavov",
        "PreFightWins": 10,
        "PreFightLosses": 3,
        "PreFightDraws": 0,
        "PreFightNoContests": 0,
        "Winner": false,
        "Moneyline": -121,
        "Active": true
        }
        ]
        },
        {
        "FightId": 2394,
        "Order": 10,
        "Status": "Scheduled",
        "WeightClass": "Welterweight",
        "CardSegment": "Early Prelims",
        "Referee": null,
        "Rounds": 3,
        "ResultClock": 0,
        "ResultRound": 0,
        "ResultType": "Scrambled",
        "WinnerId": null,
        "Active": true,
        "Fighters": [
        {
        "FighterId": 140000496,
        "FirstName": "Jordan",
        "LastName": "Williams",
        "PreFightWins": 9,
        "PreFightLosses": 5,
        "PreFightDraws": 0,
        "PreFightNoContests": 1,
        "Winner": false,
        "Moneyline": 284,
        "Active": true
        },
        {
        "FighterId": 140001217,
        "FirstName": "Ian",
        "LastName": "Garry",
        "PreFightWins": 7,
        "PreFightLosses": 0,
        "PreFightDraws": 0,
        "PreFightNoContests": 0,
        "Winner": false,
        "Moneyline": -378,
        "Active": true
        }
        ]
        },
        {
        "FightId": 2473,
        "Order": 11,
        "Status": "Scheduled",
        "WeightClass": "Heavyweight",
        "CardSegment": "Early Prelims",
        "Referee": null,
        "Rounds": 3,
        "ResultClock": 0,
        "ResultRound": 0,
        "ResultType": "Scrambled",
        "WinnerId": null,
        "Active": true,
        "Fighters": [
        {
        "FighterId": 140000119,
        "FirstName": "Gian",
        "LastName": "Villante",
        "PreFightWins": 17,
        "PreFightLosses": 13,
        "PreFightDraws": 0,
        "PreFightNoContests": 0,
        "Winner": false,
        "Moneyline": -125,
        "Active": true
        },
        {
        "FighterId": 140001124,
        "FirstName": "Chris",
        "LastName": "Barnett",
        "PreFightWins": 21,
        "PreFightLosses": 7,
        "PreFightDraws": 0,
        "PreFightNoContests": 0,
        "Winner": false,
        "Moneyline": 102,
        "Active": true
        }
        ]
        },
        {
        "FightId": 2561,
        "Order": 12,
        "Status": "Scheduled",
        "WeightClass": "Light Heavyweight",
        "CardSegment": "Early Prelims",
        "Referee": null,
        "Rounds": 3,
        "ResultClock": 0,
        "ResultRound": 0,
        "ResultType": "Scrambled",
        "WinnerId": null,
        "Active": true,
        "Fighters": [
        {
        "FighterId": 140000953,
        "FirstName": "Dustin",
        "LastName": "Jacoby",
        "PreFightWins": 15,
        "PreFightLosses": 5,
        "PreFightDraws": 1,
        "PreFightNoContests": 0,
        "Winner": false,
        "Moneyline": -350,
        "Active": true
        },
        {
        "FighterId": 140000465,
        "FirstName": "John",
        "LastName": "Allan",
        "PreFightWins": 13,
        "PreFightLosses": 6,
        "PreFightDraws": 0,
        "PreFightNoContests": 1,
        "Winner": false,
        "Moneyline": 268,
        "Active": true
        }
        ]
        },
        {
        "FightId": 2560,
        "Order": 13,
        "Status": "Scheduled",
        "WeightClass": "Featherweight",
        "CardSegment": "Early Prelims",
        "Referee": null,
        "Rounds": 3,
        "ResultClock": 0,
        "ResultRound": 0,
        "ResultType": "Scrambled",
        "WinnerId": null,
        "Active": true,
        "Fighters": [
        {
        "FighterId": 140001015,
        "FirstName": "Melsik",
        "LastName": "Baghdasaryan",
        "PreFightWins": 6,
        "PreFightLosses": 1,
        "PreFightDraws": 0,
        "PreFightNoContests": 0,
        "Winner": false,
        "Moneyline": -330,
        "Active": true
        },
        {
        "FighterId": 140001353,
        "FirstName": "Bruno",
        "LastName": "Souza",
        "PreFightWins": 10,
        "PreFightLosses": 1,
        "PreFightDraws": 0,
        "PreFightNoContests": 0,
        "Winner": false,
        "Moneyline": 251,
        "Active": true
        }
        ]
        },
        {
        "FightId": 2469,
        "Order": 14,
        "Status": "Scheduled",
        "WeightClass": "Flyweight",
        "CardSegment": "Early Prelims",
        "Referee": null,
        "Rounds": 3,
        "ResultClock": 0,
        "ResultRound": 0,
        "ResultType": "Scrambled",
        "WinnerId": null,
        "Active": true,
        "Fighters": [
        {
        "FighterId": 140001171,
        "FirstName": "C.J.",
        "LastName": "Vergara",
        "PreFightWins": 9,
        "PreFightLosses": 2,
        "PreFightDraws": 1,
        "PreFightNoContests": 0,
        "Winner": false,
        "Moneyline": 149,
        "Active": true
        },
        {
        "FighterId": 140000479,
        "FirstName": "Ode'",
        "LastName": "Osbourne",
        "PreFightWins": 9,
        "PreFightLosses": 4,
        "PreFightDraws": 0,
        "PreFightNoContests": 1,
        "Winner": false,
        "Moneyline": -180,
        "Active": true
        }
        ]
        },
        {
        "FightId": 2441,
        "Order": null,
        "Status": "Canceled",
        "WeightClass": "Featherweight",
        "CardSegment": "Early Prelims",
        "Referee": null,
        "Rounds": 3,
        "ResultClock": 0,
        "ResultRound": 0,
        "ResultType": "Scrambled",
        "WinnerId": null,
        "Active": false,
        "Fighters": [
        {
        "FighterId": 140000969,
        "FirstName": "TJ",
        "LastName": "Laramie",
        "PreFightWins": 12,
        "PreFightLosses": 4,
        "PreFightDraws": 0,
        "PreFightNoContests": 0,
        "Winner": false,
        "Moneyline": 220,
        "Active": false
        },
        {
        "FighterId": 140001015,
        "FirstName": "Melsik",
        "LastName": "Baghdasaryan",
        "PreFightWins": 6,
        "PreFightLosses": 1,
        "PreFightDraws": 0,
        "PreFightNoContests": 0,
        "Winner": false,
        "Moneyline": -270,
        "Active": false
        }
        ]
        },
        {
        "FightId": 2442,
        "Order": null,
        "Status": "Canceled",
        "WeightClass": "Light Heavyweight",
        "CardSegment": "Early Prelims",
        "Referee": null,
        "Rounds": 3,
        "ResultClock": 0,
        "ResultRound": 0,
        "ResultType": "Scrambled",
        "WinnerId": null,
        "Active": false,
        "Fighters": [
        {
        "FighterId": 140000465,
        "FirstName": "John",
        "LastName": "Allan",
        "PreFightWins": 13,
        "PreFightLosses": 6,
        "PreFightDraws": 0,
        "PreFightNoContests": 1,
        "Winner": false,
        "Moneyline": 102,
        "Active": false
        },
        {
        "FighterId": 140000513,
        "FirstName": "Aleksa",
        "LastName": "Camur",
        "PreFightWins": 6,
        "PreFightLosses": 2,
        "PreFightDraws": 0,
        "PreFightNoContests": 0,
        "Winner": false,
        "Moneyline": -128,
        "Active": false
        }
        ]
        }
        ]
        }
// console.log(DateTime.fromISO("2021-11-06T00:00:00").toFormat("DD"));

 
function CheckDate(_eventDate:string,param:number) {
    // Please Pass Events DateTime 
    // Param 0 for find upcoming Event 
    // Param 1 for to Get CurrentEvent timing 
    let eventDate = DateTime.fromISO(_eventDate, { zone: "America/New_York" });     
    let currentDate = DateTime.fromISO(new Date().toISOString(),{ zone:"Asia/Kolkata" });
    let differnce =  eventDate.diff(currentDate, ["months", 'days',"hours"])
    if(!param) {
        // @ts-ignore
        return differnce.values.days
    } else if (param == 3) {
        // @ts-ignore
        let hours = Duration.fromObject(differnce.values).as('hours');
        return hours
    }
    // @ts-ignore
    console.log(differnce.values);
}

async function getUpcomingEvent() {
    // let res = await axios.get(`Schedule/UFC/2021?key=${process.env.NODE_ENV}`)
    // let data = res.data()
    let upcomingEventID = null;
    data.forEach(event => {
        let res =  CheckDate(event.DateTime,0)
        if(res <= 5 && res > 0) {
            upcomingEventID = event.EventId; 
        } 
        return;
    });
    if(upcomingEventID) {
        getCurrentEvent(upcomingEventID);
    }
}

async function getCurrentEvent(id:number) {
        // let res = await axios.get(`Event/${id}?key=${process.env.NODE_ENV}`)
        // let event = res.data() 
        let daysLeftForEvent = Math.floor(CheckDate(event.DateTime,3))
        console.log(daysLeftForEvent);
        
        
        
}

getUpcomingEvent()