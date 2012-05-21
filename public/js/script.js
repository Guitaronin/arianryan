$(document).ready(function(){ 

    // Button for menu on phones
    $(".menubutton").click(function() {
    	$(".menu").toggleClass("activemenu");
    });

    // Navigation
    $("#content").easytabs({
    	animate			: true,
    	updateHash		: false,
    	transitionIn	:'slideDown',
    	transitionOut	:'slideUp',
    	animationSpeed	:400,
    	tabs			:"> .header > div > ul > li",
    	tabActiveClass	:'active',
    	defaultTab		:"li#default",
    });

    // PrettyPhoto lightbox
    $("a[rel^='prettyPhoto']").prettyPhoto({
        social_tools: false,
        theme: 'light_rounded',
        horizontal_padding: 0
    });

    // Blog expand
    $('.readmore').click(function() {
        $(this).parent('.post').find('.more').toggle();
    });

    // Contact form validation
    $("#contactform").validate();

});


