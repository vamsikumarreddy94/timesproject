const express = require('express'); //Line 1
const cors=require('cors')
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); 
app.use(cors())
// create a GET route
app.get('/getTimeStories', (req, res) => { 
    const data=[
        {
        "title": "Amy Schneider’s Jeopardy! Streak Ends at 40 Consecutive Wins and $1.4 Million",
        "link": "https://time.com/6142934/amy-schneider-jeopardy-streak-ends/",
         "date":"JANUARY 20,2022-9:00 PM EST"
      },
        {
        "title": "'Writing With Fire' Shines a Light on All-Women News Outlet",
          "link": "https://time.com/6142628/writing-with-fire-india-documentary/",
          "date":"JANUARY 19,2022-10:00 AM EST"       
        },
        {
        "title": "Moderna Booster May Wane After 6 Months",
        "link": "https://time.com/6142852/moderna-booster-wanes-omicron/",
        "date":"JANUARY 18,2022-3:00 PM EST"
      },
        {
        "title": "Pressure Mounts for Biden to Nominate a Black Woman to the Supreme",
        "link":
       "https://time.com/6142743/joe-biden-supreme-court-nominee-black-woman-campaignpromise/",
       "date":"JANUARY 17,2022-7:00 PM EST"
      },
        {
        "title": "The James Webb Space Telescope Is in Position—And Now We Wait",
        "link": "https://time.com/6142769/james-webb-space-telescope-reaches-l2/",
         "date":"JANUARY 16,2022-9:00 PM EST"
      },
        {
        "title": "We Urgently Need a New National COVID-19 Response Plan",
        "link": "https://time.com/6142718/we-need-new-national-covid-19-response-plan/",
        "date":"JANUARY 15,2022-6:00 AM EST"
      }
        ]
  res.status(200).send({ data:data }); //Line 10
}); //Line 11

