var Twitter = require('twitter');
var config = require('./config.js');

var account = 'heysilvergirl';
var amount = 180;
var screenName = 'AmandaCerny';
var destroy = false;

var T =  new Twitter(config[account]);

var params = {
  cursor: '-1',
  screen_name: screenName,
  count: amount
};

var success = 0;
var errors = 0;


T.get('followers/ids', params, function(err,data, response) {
  if(!err) {
    for(let i = 0; i < data.ids.length; i++){
      let url = '';
       if (destroy) {
         url = 'friendships/destroy';
       } else {
         url = 'friendships/create';
       }
       let id = { id: data.ids[i] }
       T.post(url, id, function(err, response){
         if (err) {
           errors++;
           console.log(err[0].message);
         } else {
           success++;
           let name = response.name;
           let username = response.screen_name;
           console.log('Followed ' + name + ' | Profile: ', `https://twitter.com/${username}`)
         }
       });
    }
  } else {
    console.log(err);
  }
});

console.log(account.toUpperCase(), 'FOLLOWED', success, 'FOLLOWERS SUCCESSFULLY FROM', screenName.toUpperCase());
console.log(account.toUpperCase(), 'FAILED TO FOLLOW', errors, 'USERS FROM', screenName.toUpperCase());
