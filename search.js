var Twitter = require('twitter');
var config = require('./config.js');

var account = 'bitwhat_';

var searchQuery = 'blockchain';
var amount = 200;
var follow = true;
var destroy = false;

var T =  new Twitter(config[account]);

var params = {
  q: searchQuery,
  count: amount,
  result_type: 'recent',
  lang: 'en'
};


if (follow) {
  console.log(account.toUpperCase(), 'FOLLOWED UP TO', amount, 'USERS WHO TWEETED ABOUT', searchQuery.toUpperCase());
  // FOLLOW ALL USERS FROM TWEETS SEARCH
  //
  T.get('search/tweets', params, function(err, data, response) {
    if (err) {
      console.log(err);
      return
    }

    for (let i = 0; i < data.statuses.length; i++){
      let url = '';
       if (destroy) {
         url = 'friendships/destroy';
       } else {
         url = 'friendships/create';
       }
       let id = { id: data.statuses[i].user.id }
       T.post(url, id, function(err, response){
         if (err) {
           console.log(err[0].message);
         } else {
           let name = response.name;
           let username = response.screen_name;
           console.log('Followed ' + name + ' | Profile: ', `https://twitter.com/${username}`)
         }
       });
     }

  });
} else {
  console.log(account.toUpperCase(), 'LIKED UP TO', amount, 'TWEETS ABOUT', searchQuery);

  // LIKE ALL TWEETS
  //
  T.get('search/tweets', params, function(err, data, response) {
    if (err) {
      console.log(err);
      return
    }

    for(let i = 0; i < data.statuses.length; i++){
      let url = '';
      if (destroy) {
        url = 'favorites/destroy';
      } else {
        url = 'favorites/create';
      }
      let id = { id: data.statuses[i].id_str }
      T.post(url, id, function(err, response){
        if(err){
          console.log(err[0].message);
        }
        else{
          let username = response.user.screen_name;
          let tweetId = response.id_str;
          console.log('Favorited: ', `https://twitter.com/${username}/status/${tweetId}`)
        }
      });
    }
  });
}
