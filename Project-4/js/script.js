/*************************/
/********* MAIN **********/
/*************************/

// I used the poloroid script as a foundation for my project. Beyond that, I added in the CSS animations of the falling images, as well as various functions to help with adding images and names to the base background image. 

// Hard coded watch names (formatted with python)
filenames = ["44mm Townsman Automatic Black Stainless Steel Watch",
"ARC-03 Three-Hand Stainless Steel Watch",
"Bronson Chronograph Black Stainless Steel Watch",
"Bronson Chronograph Brown Croco Leather Watch",
"Bronson Twist Smoke Stainless Steel Watch",
"Carlie Mini Automatic Stainless Steel Mesh Watch",
"Carlie Mini Three-Hand Black Leather Watch",
"Carlie Mini Three-Hand Gold-Tone Stainless Steel Mesh Watch",
"Carlie Mini Three-Hand Gold-Tone Stainless Steel Watch",
"Carlie Mini Three-Hand Rose Gold-Tone Stainless Steel Watch",
"Carlie Mini Three-Hand Sand Leather Watch",
"Carlie Mini Three-Hand Stainless Steel Watch",
"Carlie Mini Three-Hand Tan Leather Watch",
"Carlie Three-Hand Stainless Steel Watch",
"Coachman Chronograph Brown Leather Watch",
"Copeland 42mm Three-Hand Luggage Leather Watch",
"Copeland Three-Hand Midnight Navy Leather Watch",
"Copeland Three-Hand Tan Leather Watch",
"Daisy Three-Hand Black Leather Watch",
"Everett Three-Hand Date Black Stainless Steel Watch",
"Everett Three-Hand Date Stainless Steel Watch",
"Everett Three-Hand Date Two-Tone Stainless Steel Watch",
"FB-01 Three-Hand Date Black Silicone Watch",
"FB-01 Three-Hand Date Gold-Tone Stainless Steel Watch",
"FB-01 Three-Hand Date Rose Gold-Tone Stainless Steel Watch",
"FB-01 Three-Hand Date Stainless Steel Watch",
"FB-01 Three-Hand Date Two-Tone Stainless Steel Watch Black",
"FB-01 Three-Hand Date Two-Tone Stainless Steel Watch Green",
"FB-01 Three-Hand Date Two-Tone Stainless Steel Watch",
"FB-01 Three-Hand White Ceramic Watch",
"FB-03 Chronograph Black Silicone Watch",
"FB-03 Chronograph Gold-Tone Stainless Steel Watch",
"Forrester Chronograph Brown Leather Watch",
"Forrester Chronograph Navy Leather Watch",
"Gabby Three-Hand Date Gold-Tone Stainless Steel Watch",
"Gabby Three-Hand Date Rose Gold-Tone Stainless Steel Watch",
"Gabby Three-Hand Date Two-Tone Stainless Steel Watch",
"Garrett Chronograph Gold-Tone Stainless Steel Watch",
"Garrett Chronograph Luggage Leather Watch",
"Garrett Chronograph Silver-Tone Stainless Steel Watch",
"Georgia Bone Leather Watch",
"Georgia Brown Leather Watch",
"Grant Chronograph Light Brown Leather Watch",
"Hybrid Smartwatch Carlie Rose Gold-Tone Stainless Steel",
"Hybrid Smartwatch HR Charter Blush Silicone",
"Hybrid Smartwatch HR Charter Stainless Steel",
"Hybrid Smartwatch HR Collider Black Silicone",
"Hybrid Smartwatch HR Collider Tan Leather",
"Hybrid Smartwatch HR FB-01 Black Stainless Steel",
"Hybrid Smartwatch HR Latitude Black Silicone",
"Hybrid Smartwatch HR Monroe Black Leather",
"Hybrid Smartwatch HR Monroe Stainless Steel",
"Hybrid Smartwatch Neutra Amber Leather",
"Hybrid Smartwatch Neutra Stainless Steel",
"Inscription Automatic Gold-Tone Stainless Steel Watch",
"Inscription Automatic Smoke Stainless Steel Watch",
"Izzy Multifunction Two-Tone Stainless Steel Watch",
"Jacqueline Beige Leather Watch",
"Jacqueline Brown Leather Watch",
"Jacqueline Date Blush Leather Watch",
"Jacqueline Navy Leather Watch",
"Jacqueline Stainless Steel Watch",
"Jacqueline Three-Hand Blush Leather Watch",
"Jacqueline Three-Hand Date Brown Leather Watch",
"Josey Three-Hand Brown Leather Watch",
"Kalya Three-Hand Blush Leather Watch",
"Machine Chronograph Smoke Stainless Steel Watch",
"Machine Three-Hand Date Stainless Steel Watch",
"Minimalist Three-Hand Brown Leather Watch",
"Monty Chronograph Luggage Leather Watch",
"Nate Chronograph Black Stainless Steel Watch",
"Neutra Automatic Black Stainless Steel Watch",
"Neutra Automatic Brown Leather Watch Black",
"Neutra Automatic Brown Leather Watch White",
"Neutra Automatic Smoke Stainless Steel Watch",
"Neutra Automatic Two-Tone Stainless Steel Watch",
"Neutra Chronograph Black Leather Watch",
"Neutra Chronograph Brown Leather Watch",
"Neutra Chronograph Luggage Leather Watch Blue",
"Neutra Chronograph Luggage Leather Watch Green",
"Neutra Chronograph Smoke Stainless Steel Mesh Watch",
"Riley Multifunction Black Stainless Steel Watch",
"Riley Multifunction Rose-Tone Stainless Steel Watch",
"Riley Multifunction Stainless Steel Watch",
"Sadie Multifunction Gold-Tone Stainless Steel Watch",
"Scarlette Micro Three-Hand Date Gold-Tone Stainless Steel Watch V2",
"Scarlette Micro Three-Hand Date Gold-Tone Stainless Steel Watch",
"Scarlette Micro Three-Hand Date Stainless Steel Watch",
"Scarlette Micro Three-Hand Date Two-Tone Stainless Steel Watch Peach",
"Scarlette Mini Three-Hand Date Two Tone Stainless Steel Watch",
"Tailor Automatic Rose Gold-Tone Stainless Steel Mesh Watch",
"Tailor Mechanical Rose Gold-Tone Stainless Steel Watch",
"The Minimalist Slim Three-Hand Light Brown Leather Watch",
"The Minimalist Three-Hand Brown Leather Watch",
"The Minimalist Three-Hand Smoke Stainless Steel Watch",
"Townsman 44mm Chronograph Brown Leather Watch",
"Townsman 48mm Automatic Light Brown Leather Watch",
"Townsman Automatic Black Leather Watch",
"Virginia Stainless Steel Watch",
"Virginia Two-Tone Stainless Steel Watch"]

// Page Loading
$(document).ready(function () {

    if (window.innerWidth == undefined) {
        var wiw = 1000;
        var wih = 700;
    } else {
        var wiw = window.innerWidth;
        var wih = window.innerHeight;
    }

// Landing message formatting

    $(".main").css({
        "height": wih + "px",
        "width": wiw + "px"
    })

    $(".instructions").css({
        "position": "absolute",
        "top": 0.76 *wih / 2 + "px",
        "left": 0.58 * wiw / 2 + "px",
        "font-size": "32px"
    })

    var counter = 0
    var zindexnr = 1;

// Landing message transition
    $(".main").click(function (event) {
        $(".instructions").css({
            "transition": "0.5s",
            "opacity": "0"
        })


// Adding watch image and names
        curr_image = "image" + counter + ".jpg"

        $(".main").append("<div class='polaroid'> </div>")

        current_selection = $(".polaroid").last()
        current_selection.append("<img class='images' src=" + "images/" + curr_image + " />")
        current_selection.append("<p>" + filenames[counter] + "</p>")

// Image counter, loops back to the first image if it reaches the 100th image
        if (counter == 99) {
            counter = 0 
        } else {
            counter += 1
        }
        console.log(counter)
        
// (Original script for rotating the poloroids, but the website seems to stop working once I commented this portion out)
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
        $(current_selection).css(cssObj);
        $(current_selection).addClass("slide-in-bck-center")


// Set the Z-Index (used to display images on top while dragging)
        zindexnr += 1

// Boolean to check if the user is dragging
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