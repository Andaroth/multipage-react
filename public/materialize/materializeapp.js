var scrollFixed = ($elem,$stop) => {
let elempos = $elem.position();
let supportPageOffset = window.pageXOffset !== undefined;
let isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
$(document).scroll(function(){
    let stoppos = $stop.position();
    let scrollTop = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    if (
        (scrollTop >= (elempos.top-50)) &&
        (scrollTop <= (stoppos.top-260))
    ) { 
        $elem.addClass('screenfixed'); 
    } 
    else { $elem.removeClass('screenfixed'); }
});} // scrollFix() end

$(document).ready(function(){
    $('.scrollspy').scrollSpy();
    $(document).scroll(scrollFixed($('#homeCollection'),$('#stopper')));
});