var textDates = [ "Fri Apr 11 2014 17:00:00 GMT+0200 (UTC)",
                  "Fri Apr 11 2014 18:00:00 GMT+0200 (UTC)",
                  "Fri Apr 11 2014 19:00:00 GMT+0200 (UTC)",
                  "Fri Apr 11 2014 20:00:00 GMT+0200 (UTC)",
                  "Fri Apr 11 2014 21:00:00 GMT+0200 (UTC)",
                  "Fri Apr 11 2014 22:00:00 GMT+0200 (UTC)",
                  "Fri Apr 11 2014 11:00:00 GMT+0200 (UTC)",
                  "Fri Apr 11 2014 12:30:00 GMT+0200 (UTC)",
                  "Fri Apr 11 2014 14:00:00 GMT+0200 (UTC)",
                  "Fri Apr 11 2014 15:30:00 GMT+0200 (UTC)",
                  "Fri Apr 11 2014 17:00:00 GMT+0200 (UTC)",
                  "Fri Apr 11 2014 18:30:00 GMT+0200 (UTC)",
                  "Fri Apr 11 2014 20:00:00 GMT+0200 (UTC)",
                  "Fri Apr 11 2014 20:10:00 GMT+0200 (UTC)",
                  "Fri Apr 11 2014 20:20:00 GMT+0200 (UTC)",
                  "Fri Apr 11 2014 20:30:00 GMT+0200 (UTC)",
                  "Sat Apr 12 2014 11:00:00 GMT+0200 (UTC)",
                  "Sat Apr 12 2014 11:15:00 GMT+0200 (UTC)" ];

var dates = [];
var totalDates = textDates.length;
for ( var i = 0; i < totalDates; i++ ) {
  dates.push(new Date(textDates[i]));
}

test("date tests", function() {
  var result = Timey.getNIntervalsForNow(dates,3);
  var match = [dates[0], dates[1], dates[2]];
  equal(JSON.stringify(result), JSON.stringify(match));
});
