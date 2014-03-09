var Timey = (function () {
  // Sort dates in chronological order
  sortDateArray = function(dateList) {
    dateList.sort(function(a,b){
      return a - b;
    });
  }

  return {
    // Example 1: Time.getNIntervalsForNow(dates, 3) -> [1, 2, 3]
    //   1     2     3     4     5
    // __|_____|_____|_____|_____|__
    //    ^
    //   1.2
    // Retrieves the interval in which the current date falls as well as the
    // n-1 intervals following it.
    getNIntervalsForNow: function(dateList, n) {
                            var currentDate = new Date();
                            var selections = [];
                            var totalDates = dateList.length;
                            var j = 0;

                            sortDateArray(dateList);
                            print(dateList);
                            
                            for ( var i = 0; i < totalDates; i++ ) {
                              if (currentDate.getTime() < dateList[i].getTime()) {
                                break;
                              }
                              j = i;
                            }

                            while(j < totalDates && selections.length < n) {
                              selections.push(dateList[j]);
                              j++;
                            }

                            return selections;
                         }
  }
})();

