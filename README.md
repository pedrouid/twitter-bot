# twitter-bot

There are two files and both can be intiated simply using `node file.js`

#### The first file is called `followers.js`
This file get's a Twitter accounts followers from variable `screenName`
then you follow or unfollow users with account from variable `account`
`account` will use the API keys from config.js
To unfollow set the variable `destroy` to `true`


#### The first file is called `search.js`
This file get's all tweets from variable `searchQuery`
then you follow or unfollow users with account from variable `account`
`account` will use the API keys from config.js
To unfollow set the variable `destroy` to `true`

You can also simply favourite(like) all tweets by setting `follow` to `false`
You can also unfavourite(unlike) all tweets by setting `destroy` to `true`

#### roadmap

- Make variables `follow`, `destroy`, `searchQuery` and `screenName` available through CLI

- Improve search paging and track already followed accounts or favourited tweets
