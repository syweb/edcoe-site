function dropdown(){
  $('ul.site-menu li').hover(function(){
      $(this).find('ul:first').css({visibility: "visible"}).show(400);
  },
	 function(){
		 $(this).find('ul:first').css({visibility: "hidden"});
	 });
};


/*--- Table alt row ---*/

function tableodd(){
  $("table").find('tr:odd').addClass("odd");
};

function triggerPopup(){
  $('#trigger').hover(function(){
    $('#popup').stop(true, true).delay(200).slideDown(200);
  },
  function(){
    $('#popup').stop(true, true).delay(200).slideUp(200);
  });
  
  $('#popup').hover(function(){
      $('#popup').stop(true, true).delay(200).slideDown(200);
  },
  function(){
    $('#popup').stop(true, true).slideUp(200);
  });
};

function colheight(){
  if( window.innerWidth > 768 ) {
    $('.colheight').height($('.content').height());
  }  
}

