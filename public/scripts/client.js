/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function () {

  // Function to create a new tweet element from a tweet object
  const createTweetElement = function (tweet) {
    let $tweet = $(`<article class="tweet">
      <header>
        <span class="user-avatar">
          <img src=${tweet.user.avatars}>
        </span>
        <span class="user-tweet">
        <h3>${$("<div>").text(tweet.user.name).html()}</h3>
        </span>
        <span class="handle">
        <h4>${$("<div>").text(tweet.user.handle).html()}</h4>
        </span>
      </header>
      <p>${$("<div>").text(tweet.content.text).html()}</p>
      <footer class="footer-tweet">
        <span class="footer-date">
          <h4>${timeago.format(tweet.created_at)}</h4>
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

  // function to take in an array of tweet objects 
  const renderTweets = function (tweets) {
    $('#tweet-container').empty();
    for (const tweet of tweets) {
      $('#tweet-container').prepend(createTweetElement(tweet));
    }
  };

  // Function to load all tweets from the server
  const loadTweets = function () {
    $.get('/tweets', renderTweets);
  };

  $(".create-tweet").on('submit', function (e) {
    e.preventDefault();
    $('.error-message').text('');
    $('.error').slideUp();
    const tweetText = $(this).find("#tweet-text").val();
    if (tweetText === "") {
      $('.error').slideDown();
      $('.error-message').text("🚫🚫 You must type a tweet! 🚫🚫");
    } else if (tweetText.length > 140) {
      $('.error').slideDown();
      $('.error-message').text("🚫🚫 Your tweet is longer than 140 characters! 🚫🚫");
    } else {
      $.ajax({
        type: 'POST',
        url: '/tweets/',
        data: $('.create-tweet').serialize(),
      })
        .then(function () {
          loadTweets();
          $('#tweet-text').val('');
          $('#tweet-test, .counter').text(140);
        })
    }
  });
});
