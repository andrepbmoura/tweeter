const tweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]


const renderTweets = function (tweets) {
  for (const tweet of tweets) {
    $('#tweet-container').append(createTweetElement(tweet));
  }
  return;
};


const createTweetElement = function (tweet) {
  let $tweet = $(`<article class="tweet">
    <header>
      <span class="user-avatar">
        <img src=${tweet.user.avatars}>
      </span>
      <span class="user-tweet">
        <h3>${tweet.user.name}</h3>
      </span>
      <span class="handle">
        <h4>${tweet.user.handle}</h4>
      </span>
    </header>
    <p>${tweet.content.text}</p>
    <footer class="footer-tweet">
      <span class="footer-date">
        <time>${tweet.created_at}</time>
      </span>
      <span class="footer-icons">
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>
      </span>
    </footer>
  </article>`);

  return $tweet;
};

$(document).ready(function () {
  renderTweets(tweetData);
});