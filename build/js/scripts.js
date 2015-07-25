
$(document).ready(function() {
// ============================================================================
  
/* ===== INITIALIZATION OF THE PLUGINS: ===== */

/* ----- #flexslider ----- */

$(window).load(function() {
	$('#flexslider').flexslider({
		animation: "slide",
		slideshow: false,
		controlNav: false,
		directionNav: true,
		customDirectionNav: $(".custom-navigation a")
	});

});

$(window).load(function() {
	$('#flexslider__2').flexslider({
		animation: "fade",
		slideshow: false,
		controlNav: false,
		directionNav: true,
		customDirectionNav: $(".custom-navigation__2 a")
	});

});

// ============================================================================
});