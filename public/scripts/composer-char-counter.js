/**
 * Upon page DOM is ready, check number of characters in tweet textarea, and updates the counter in real time
 * Counter turns red when < 0
 */

$(document).ready(() => {
  $('#tweet-text').on('input', function () {
    const len = $(this).val().length;
    $('#tweet-text, .counter').text(140 - len);
    if (len > 140) {
      $('#tweet-text, .counter').addClass('overlimit');
    } else {
      if ($('#tweet-text, .counter').hasClass('overlimit')) {
        $('#tweet-text, .counter').removeClass('overlimit');
      }
    }
  });
});