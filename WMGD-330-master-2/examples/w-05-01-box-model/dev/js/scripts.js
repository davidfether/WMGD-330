console.log("hello");


var imgWidth = $('#demo-container').width();
imgWidth = Math.round(imgWidth);

$('#img-total h4 span').html(imgWidth);

console.log(imgWidth);

$('#paddingSwitch').change(
    function(){
        if ($(this).is(':checked')) {
            $( "#demo-container" ).addClass( "add-padding" );
            imgWidth = imgWidth + 20;
            $('#img-total h4 span').html(imgWidth);

        }
        else{
            $( "#demo-container" ).removeClass( "add-padding" );
            imgWidth = imgWidth - 20;
            $('#img-total h4 span').html(imgWidth);
        }
});

$('#marginSwitch').change(
    function(){
        if ($(this).is(':checked')) {
            $( "#demo-container" ).addClass( "add-margin" );
            imgWidth = imgWidth + 20;
            $('#img-total h4 span').html(imgWidth);
        }
        else{
            console.log("remove margin");
            imgWidth = imgWidth - 20;
            $('#img-total h4 span').html(imgWidth);
            $( "#demo-container" ).removeClass( "add-margin" );
        }
});

$('#borderSwitch').change(
    function(){
        if ($(this).is(':checked')) {
            $( "#demo-container" ).addClass( "add-border" );
            imgWidth = imgWidth + 6;
            $('#img-total h4 span').html(imgWidth);
        }
        else{
            console.log("remove border");
            imgWidth = imgWidth - 6;
            $('#img-total h4 span').html(imgWidth);
            $( "#demo-container " ).removeClass( "add-border" );
        }
});

$('#widthSwitch').change(
    function(){
        if ($(this).is(':checked')) {
            $( "#demo-container" ).addClass( "add-width" );
            imgWidth = $('#demo-container').width();
            imgWidth = Math.round(imgWidth);
            $('#img-total h4 span').html(imgWidth);
            
            console.log(imgWidth);

        }
        else{
            console.log("remove border");
            $( "#demo-container " ).removeClass( "add-width" );
            imgWidth = $('#demo-container').width();
            imgWidth = Math.round(imgWidth);
            $('#img-total h4 span').html(imgWidth);
            // imgWidth = imgWidth;
        }
});

$('#borderBoxSwitch').change(
    function(){
        if ($(this).is(':checked')) {
            $( "#demo-container" ).addClass( "add-border-box" );
            imgWidth = $('#demo-container').width();
            imgWidth = Math.round(imgWidth);
            $('#img-total h4 span').html(imgWidth);
            
            console.log(imgWidth);

        }
        else{
            console.log("remove border");
            $( "#demo-container " ).removeClass( "add-border-box" );
            imgWidth = $('#demo-container').width();
            imgWidth = Math.round(imgWidth);
            $('#img-total h4 span').html(imgWidth);
            // imgWidth = imgWidth;
        }
});