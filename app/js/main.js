
// Dropdown Menu Fade on hover.
jQuery(document).ready(function(){
  // Display the modal lead form on the pros layout when clicking.
  // Make sure it only execute on mobile.
  $('.program').find('.title').click(function() {
    $(this).siblings('.description').slideToggle(800);
    $(this).find('i').toggleClass("deg180");
  });
});
