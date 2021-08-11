/*1.11*/

/*
jQuery_1_11_0(function () {
    $('input[name="showit"]').hide();

    //show it when the checkbox is clicked
    $('input[name="checkbox"]').on('click', function () {
        if ($(this).prop('checked')) {
            $('input[name="showit"]').fadeIn();
        } else {
            $('input[name="showit"]').hide();
        }
    });
});

*/

  

jQuery_1_11_0('body').on('click', '.next', function() { 

    

    var id = $('.content:visible').data('id');
    var nextId = $('.content:visible').data('id')+1;
    $('[data-id="'+id+'"]').hide();
    $('[data-id="'+nextId+'"]').show();
    

    

    if($('.back:hidden').length == 1){
      

        $('.back').show();
    }
    
    if(nextId == 50){
        $('.back').show();
		$('.content-holder').hide();
        
		$('.end').show();
    }
});

jQuery_1_11_0('body').on('click', '.back', function() { 
    var id = $('.content:visible').data('id');
    var prevId = $('.content:visible').data('id')-1;
    $('[data-id="'+id+'"]').hide();
    $('[data-id="'+prevId+'"]').show();

   
    



    if(prevId == 1){
        $('.back').hide();
    }    
});

jQuery_1_11_0('body').on('click', '.edit-previous', function() { 
	$('.end').hide();
    $('.content-holder').show();
   
});