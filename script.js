
// const quotes = JSON.parse('/quotes.json');

$(document).ready(() => {
    $('#new-quote').click(() => {
        $('#quote').fadeOut('slow',
            () => $('#quote').fadeIn('slow'));
    })
});
