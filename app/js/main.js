// Hiding menu when clicked in the mobile view.
jQuery(".navbar-nav li a").click(function(e){
  var wi = $(window).width(); // Stores the numerical value of the width into the variable "wi".

  if (wi <= 979) {
    var target  = jQuery("#menu");
    var data    = target.data('bs.collapse');
    var option  = data ? 'toggle' : $this.data();
    target.collapse(option);
  }
});
