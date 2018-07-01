var color, width, height;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').on('submit', function (event) {
    event.preventDefault();
    color = $('#colorPicker').val();
    width = $('#inputWeight').val();
    height = $('#inputHeight').val();
    makeGrid(height, width);
});

function makeGrid(x, y) {

    // Your code goes here!
    $('tr').remove();
    for (n = 1; n <= x; n++) {
        $('#pixelCanvas').append('<tr id= table' + n + '></tr>');
        for (m = 1; m <= y; m++) {
            $('tr').filter(':last').append('<td></td>');
            //means to filter the last `tr` element and  append `td` element to it
    }

    $('td').click(function addColor() {
        color = $('#colorPicker').val();
        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).css('background-color', color); 
               }
    })
}}