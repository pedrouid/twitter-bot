var Twitter = require('twitter');
var config = require('./config.js');

var account = 'bitwhat_';
var amount = 100;
var screenName = 'bitcoin';
var destroy = false;

var T =  new Twitter(config[account]);

var params = {
  cursor: '-1',
  screen_name: screenName,
  count: amount
};

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
           console.log(err[0].message);
         } else {
           let name = response.name;
           let username = response.screen_name;
           if (destroy) {
             console.log('Unollowed ' + name + ' | Profile: ', `https://twitter.com/${username}`)
           } else {
             console.log('Followed ' + name + ' | Profile: ', `https://twitter.com/${username}`)
           }
         }
       });
    }
  } else {
    console.log(err);
  }
});
