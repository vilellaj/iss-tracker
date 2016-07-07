# iss-tracker
App for tracking the International Space Station (ISS) using google maps.

## Details
This application uses [Open Notify](http://open-notify.org/)

>"Open Notify is an open source project to provide a simple programming interface for some of NASA’s awesome data. I do some of the work to take raw data and turn them into APIs related to space and spacecraft".

## How to use
Clone the repo.

`git clone https://github.com/vilellaj/iss-tracker.git`
`cd iss-tracker`

Insert a google maps API KEY in INDEX.HTML (Replace YOUR_API_KEY at line 10). 

`<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" async defer></script>`

Open INDEX.HTML using a browser or serve it using live-server 

`npm install -g live-server`

`live-server`

Wait a few seconds and watch the marker move.
