var Twitter = require('twitter');
var config = require('./config.js');

var account = 'heysilvergirl';

var screenName = 'ChiaraFerragni';

var T =  new Twitter(config[account]);

var params = {
  cursor: '-1',
  screen_name: screenName,
  count: '5000'
};

var pages = [180, 360, 540, 720, 900, 1080, 1260, 1440, 1620, 1800, 1980, 2160, 2340, 2520, 2700, 2880, 3060, 3240, 3420, 3600, 3780, 3960, 4140, 4320, 4500, 4680, 4860];
var current = 0;
var pagedData = [];
var holder = [];
// THIS IS NOT WORKING

console.log(account.toUpperCase(), 'GETS FOLLOWERS JSON FROM', screenName);
// FOLLOW ALL USERS FROM TWEETS SEARCH
//
T.get('followers/ids', params, function(err,data, response) {

  if(!err) {
    for(let i = 0; i < data.ids.length; i++){
      if (i === pages[current]) {
        current++;
        pagedData.push(holder);
        holder = [];
      }
      holder.push[data.ids[i]];
    }
  } else {
    console.log(err);
  }
});
