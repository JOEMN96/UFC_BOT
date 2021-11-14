import { DateTime, Duration } from 'luxon';
import dotenv from 'dotenv';
import axios from './axios';
import { TwitterClient } from 'twitter-api-client';
import axiosAirtableApi from './axiosAirtable';

import Airtable from './functions/airtable';

dotenv.config();

// console.log(DateTime.fromISO("2021-11-06T00:00:00").toFormat("DD"));
const twitterClient = new TwitterClient({
  apiKey: process.env.API_KEY,
  apiSecret: process.env.API_SECRET_KEY,
  accessToken: process.env.ACCESS_TOKEN,
  accessTokenSecret: String(process.env.ACCESS_TOKEN_SECRET),
});

function CheckDate(_eventDate: string, param: number) {
  // Please Pass Events DateTime
  // Param 0 for find upcoming Event
  // Param 1 for to Get CurrentEvent timing
  let eventDate = DateTime.fromISO(_eventDate, { zone: 'America/New_York' });
  let currentDate = DateTime.fromISO(new Date().toISOString(), { zone: 'Asia/Kolkata' });
  let differnce = eventDate.diff(currentDate, ['months', 'days', 'hours']);
  if (!param) {
    // @ts-ignore
    return differnce.values.days;
  } else if (param == 3) {
    // @ts-ignore
    let hours = Duration.fromObject(differnce.values).as('hours');

    return hours;
  } else {
    return;
  }
  // @ts-ignore
  console.log(differnce.values);
}

async function getUpcomingEvent() {
  try {
    let res = await axios.get(`Schedule/UFC/2021?key=${process.env.NODE_ENV}`);
    let data = res.data;
    let events = [];
    data.forEach((event) => {
      let res = CheckDate(event.DateTime, 0);
      if (res <= 7 && res > 0) {
        events.push(event);
      }
      return;
    });

    if (events.length > 0) {
      let upcomingEventID = events[0].EventId;
      return getCurrentEvent(upcomingEventID);
    }
  } catch (_) {
    return;
  }
}

async function getCurrentEvent(id: number) {
  try {
    let res = await axios.get(`Event/${id}?key=${process.env.NODE_ENV}`);
    let event = res.data;

    let hoursLeftForEvent = CheckDate(event.DateTime, 3);
    let status = await getServerValue();
    let AirtableID = 'recahwjlSigTOaF6y';
    let mainCards = event.Fights.filter((fight) => fight.CardSegment == 'Main Card' && fight.Status != 'Canceled');

    switch (true) {
      case hoursLeftForEvent <= 0:
        updateServerValue({ id: AirtableID, Status: 'INIT' });
        return;
      case hoursLeftForEvent <= 4:
        if (status == 'HoursLeft') {
          updateServerValue({ id: AirtableID, Status: 'INIT' });
          return tweet(`Just Bleed ! Tune In #${event.Name}`);
        }
      case hoursLeftForEvent < 6:
        if (status == 'HoursLeft') {
          updateServerValue({ id: AirtableID, Status: 'HoursLeft' });
          return tweet(`Only ${Math.round(hoursLeftForEvent)} Hours Left for #${event.Name}`);
        }
      case hoursLeftForEvent <= 20:
        if (status == 'FightNight') {
          updateServerValue({ id: AirtableID, Status: 'HoursLeft' });
          return tweet(`Fight Night ! #${event.Name} @ufc`);
        }
      case hoursLeftForEvent < 96:
        if (status == 'MainCard 2') {
          updateServerValue({ id: AirtableID, Status: 'FightNight' });
          return tweet(
            `This Weeks (${event.Name}) Main Card [${mainCards[1].Order}] : ${mainCards[1].WeightClass} bout between ${mainCards[1].Fighters[0].FirstName} ${mainCards[1].Fighters[0].LastName} and ${mainCards[1].Fighters[1].FirstName} ${mainCards[1].Fighters[1].LastName} `
          );
        }

      case hoursLeftForEvent < 120:
        if (status == 'MainCard 1') {
          updateServerValue({ id: AirtableID, Status: 'MainCard 2' });
          return tweet(
            `This Weeks (${event.Name}) Main Card [${mainCards[0].Order}] : ${mainCards[0].WeightClass} bout between ${mainCards[0].Fighters[0].FirstName} ${mainCards[0].Fighters[0].LastName} and ${mainCards[0].Fighters[1].FirstName} ${mainCards[0].Fighters[1].LastName} `
          );
        }
      case hoursLeftForEvent < 144:
        if (status == 'INIT') {
          updateServerValue({ id: AirtableID, Status: 'MainCard 1' });
          return tweet(`Fight week ! #${event.Name}`);
        }
      default:
        return;
    }
    // tweet("")
  } catch (error) {
    return;
  }
}

async function tweet(tweet: string) {
  try {
    await twitterClient.tweets.statusesUpdate({
      status: tweet,
    });
  } catch (error) {
    return;
  }
}

getUpcomingEvent();

async function getServerValue() {
  try {
    let {
      data: { formattedData },
    } = await axiosAirtableApi.get('');
    return formattedData[0].Status;
  } catch (_) {
    return null;
  }
}
interface Body {
  id: string;
  Status: string;
}

async function updateServerValue(body: Body) {
  try {
    let { status } = await axiosAirtableApi.post('', body);
    if (status == 200) {
      return true;
    } else {
      throw new Error('Api ERROR');
    }
  } catch (_) {
    return null;
  }
}
