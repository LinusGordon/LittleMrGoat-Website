var main = function() {
  $('.btn').click(function() {
    var post = $('.status-box').val();
    var name = $('.name-box').val();
    $('<li>').text("➪ " +name + ": " + post).prependTo('.posts');
    $('.status-box').val('');
    $('.counter').text("200");
    $('.btn').addClass('disabled');
  });
  $('.status-box').keyup(function() {
    var postLength = $(this).val().length;
	var nameLength = $('.name-box').val().length;
    var charactersLeft = (200 - postLength);
    $('.counter').text(charactersLeft);
    if(nameLength < 1) {
	    $('.btn').addClass('disabled');
    }
    else if(charactersLeft < 0) {
     $('.btn').addClass('disabled');
    }
    else if(charactersLeft === 200)
     $('.btn').addClass('disabled');
    else
     $('.btn').removeClass('disabled');
  });
  $('.btn').addClass('disabled');
}

$(document).ready(main);
