function ativaScrollSuave(selector) {
	$(selector).click(function(event){
		

		event.preventDefault ();
		var target =$(this).attr('href');

		$('html,body').animate({
			scrolltop:$(target).offset().top
		},2000)

	});
}

ativaScrollSuave('[ahrefpainel-faq]');
ativaScrollSuave();
ativaScrollSuave();
ativaScrollSuave();
ativaScrollSuave();
