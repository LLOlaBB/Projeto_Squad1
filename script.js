function ativaScrollSuave(selector) {

    $(selector).click(function(event) {
        
        event.preventDefault();
        var target = $(this).attr('href');

        $('html, body').animate({
            scrollTop:$(target).offset().top
        }, 2000)

    });
}

ativaScrollSuave('a[href*=painel-sobre]');
ativaScrollSuave()
ativaScrollSuave()
ativaScrollSuave()
ativaScrollSuave()
ativaScrollSuave()