//Prevent spoilerphobes from seeing spoilers
//Solution: Hide spoilers and reveal them through user interaction

//1. Hide spoiler
  $('.spoiler span').hide();
//2. Add a button
  $('.spoiler').append('<button>Reveal Spoiler!</button>');
//3. When button is pressed:

    $('.spoiler button').click(function(){
      //3.1 show spoiler next to the button clicked
        $(this).prev().show();
      // 3.2 get  rid of button
        $(this).remove();
    });
