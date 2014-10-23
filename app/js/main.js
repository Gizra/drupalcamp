// Hiding menu when clicked in the mobile view.
jQuery(".navbar-nav li a").click(function() {
  // Stores the numerical value of the width into the variable "wi".
  var wi = $(window).width();

  if (wi <= 979) {
    var target  = jQuery("#menu");
    var data    = target.data('bs.collapse');
    var option  = data ? 'toggle' : $this.data();
    target.collapse(option);
  }
});

// Dropdown Menu Fade on hover.
jQuery(document).ready(function(){
  // Display the modal lead form on the pros layout when clicking.
  // Make sure it only execute on mobile.
  $('.program').find('.extend-button').click(function() {
    $(this).siblings('.description').slideToggle(300).css("display", "inline-block");
    $(this).find('i').toggleClass("deg180");
  });
});
