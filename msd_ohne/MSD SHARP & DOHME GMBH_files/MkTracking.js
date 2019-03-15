// set microtime for pagecall
microtime = $.now();

// following lines to add microtime to href defined fileExtension
addMicrotimeParam(microtime, 'ics');

// add microtime param t= to all href with defined fileExtension
function addMicrotimeParam(microtime, fileExtension)
{
    $('a[href*=".' + fileExtension + '"]').attr('href', function(i, href) {
        initialParam = '?';
        if (href.indexOf('?') > 0) {
            initialParam = '&';
        }
        return href + initialParam + 't=' + microtime;
    });
}
