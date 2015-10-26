$("iframe").each(function(){
	var ifr_source = $(this).attr('src');
	var wmode = "wmode=transparent";
	if(ifr_source.indexOf('?') != -1) {
		var getQString = ifr_source.split('?');
		var oldString = getQString[1];
		var newString = getQString[0];
			$(this).attr('src',newString+'?'+wmode+'&'+oldString);
	}
	else $(this).attr('src',ifr_source+'?'+wmode);
});

var $sharebar     	   = jQuery('#sharebar');
var $sharebar_elms     = jQuery('#sharebar li iframe');
var $sharebar_facebook = $sharebar_elms.get(0);
jQuery($sharebar_facebook).css({"width":"60px", "height":"62px", "margin-left" : "7px" });
jQuery($sharebar).css({"margin-top" : "110px", "border-radius" : "5px", "box-shadow" : "0 8px 6px -6px #555, inset 0 0 10px #D3D3D3", "border" : "1px solid #D3D3D3"} );


$(window).scroll(function () { 
	if ($(this).scrollTop() > 80) {
		$("#top").addClass("grid-hide-header");
		$("#header_content").hide(300);
		$("#search-trigger").hide();
	} else {
		$("#top").removeClass("grid-hide-header");
		$("#search-trigger").show();
		$("#header_content").show(300);
	}
});