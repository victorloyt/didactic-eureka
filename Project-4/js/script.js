// google.load("jquery", "1.5");
// google.load("jqueryui", "1.7.0");

/*************************/
/********* MAIN **********/
/*************************/

// wait for page to load
google.setOnLoadCallback(function () {

    if (window.innerWidth == undefined) {
        var wiw = 1000;
        var wih = 700;
    } else {
        var wiw = window.innerWidth;
        var wih = window.innerHeight;
    }

    //    console.log("height: ", wih+"px")

    $(".main").css({
        "height": wih + "px",
        "width": wiw + "px"
    })

    $(".instructions").css({
        "position": "absolute",
        "top": wih / 2 + "px",
        "left": 0.88 * wiw / 2 + "px",
        "font-size": "32px"
    })

    var counter = 0
    var zindexnr = 1;

    $(".main").click(function (event) {
        $(".instructions").css({
            "transition": "0.5s",
            "opacity": "0"
        })
        //        console.log("hi")
        curr_image = "image" + counter + ".jpg"

        $(".main").append("<div class='polaroid'> </div>")

        current_selection = $(".polaroid").last()
        current_selection.append("<img class='images' src=" + "images/" + curr_image + " />")

        $.ajax({
            type: "GET",
            url: "/images/filenames2.txt",
            success: function (data) {

                var lines = data.split('\n');
                var caption = lines[counter-1]
                console.log(caption)
                current_selection.append("<p>" + caption + "</p>")
            }

        });

        if (counter == 99) {
            counter = 0 
        } else {
            counter += 1
        }
        console.log(counter)

        //        $(".images").each(function (i) {

        var tempVal = Math.round(Math.random());
        if (tempVal == 1) {
            var rotDegrees = randomXToY(330, 360); // rotate left
        } else {
            var rotDegrees = randomXToY(0, 30); // rotate right
        }


        var cssObj = {
            'left': Math.random() * (wiw - 400),
            'top': Math.random() * (wih - 400),
            '-webkit-transform': 'rotate(' + rotDegrees + 'deg)', // safari only
            'transform': 'rotate(' + rotDegrees + 'deg)'
        }; // added in case CSS3 is standard
        //        console.log(cssObj)
        $(current_selection).css(cssObj);

        //        console.log("blurred-top")
        $(current_selection).addClass("slide-in-bck-center")


        // Set the Z-Index (used to display images on top while dragging)
//        var zindexnr = 1;
        zindexnr += 1

        // boolean to check if the user is dragging
        var dragging = false;
        // Show the polaroid on top when clicked on
        $(".polaroid").mouseup(function (e) {
            if (!dragging) {
                // Bring polaroid to the foreground
                zindexnr++;
                var cssObj = {
                    'z-index': zindexnr,
                    'transform': 'rotate(0deg)', // added in case CSS3 is standard
                    '-webkit-transform': 'rotate(0deg)'
                }; // safari only
                $(this).css(cssObj);
            }
        });

        // Make the polaroid draggable & display a shadow when dragging
        $(".polaroid").draggable({
            cursor: 'crosshair',
            start: function (event, ui) {
                dragging = true;
                zindexnr++;
                var cssObj = {
                    'box-shadow': '#888 5px 10px 10px', // added in case CSS3 is standard
                    '-webkit-box-shadow': '#888 5px 10px 10px', // safari only
                    'margin-left': '-10px',
                    'margin-top': '-10px',
                    'z-index': zindexnr
                };
                $(this).css(cssObj);
            },
            stop: function (event, ui) {
                var tempVal = Math.round(Math.random());
                if (tempVal == 1) {
                    var rotDegrees = randomXToY(330, 360); // rotate left
                } else {
                    var rotDegrees = randomXToY(0, 30); // rotate right
                }
                var cssObj = {
                    'box-shadow': '', // added in case CSS3 is standard
                    '-webkit-box-shadow': '', // safari only
                    'transform': 'rotate(' + rotDegrees + 'deg)', // added in case CSS3 is standard
                    '-webkit-transform': 'rotate(' + rotDegrees + 'deg)', // safari only
                    'margin-left': '0px',
                    'margin-top': '0px'
                };
                $(this).css(cssObj);
                dragging = false;
            }
        });

});
});



// Function to get random number upto m
// http://roshanbh.com.np/2008/09/get-random-number-range-two-numbers-javascript.html
function randomXToY(minVal, maxVal, floatVal) {
    var randVal = minVal + (Math.random() * (maxVal - minVal));
    return typeof floatVal == 'undefined' ? Math.round(randVal) : randVal.toFixed(floatVal);
}