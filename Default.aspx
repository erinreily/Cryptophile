<!DOCTYPE html>
<html>
<head>
    <title></title>
	<meta charset="utf-8" />

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>

    <link rel="stylesheet" href="css/Intro.css" /> 

</head>
<body>
    <img src="pictures/letter.png" id="letter" usemap="#words" />
    <p id="instructions">
        You have intercepted a mysterious letter. Break the seal and crack the code to discern what knowledge it contains.
    </p>
    
    <map name="words">
        <area shape="rect" coords="180,210,250,245" href="html/welcomepage.html" alt="rightword" style="cursor:default"/>
    </map>

    <script>
        $("#letter").click(function () {
            if (document.getElementById("letter").src = "pictures/letter.png") {
                $("#letter").fadeTo("slow", 0, function () {
                });
                setTimeout(function () {
                    document.getElementById("letter").src = "pictures/letteropened.png";
                    $("#letter").fadeTo("slow", 1, function () {
                    });
                }, 600);
            }

        })
    </script>
</body>
</html>
