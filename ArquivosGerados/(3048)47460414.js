    <!DOCTYPE html>&#xD;&#xA;    <html>&#xD;&#xA;    <head>&#xD;&#xA;        <title>Pixel Art Maker!</title>&#xD;&#xA;        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>&#xD;&#xA;        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Monoton">&#xD;&#xA;        <link rel="stylesheet" href="styles.css">&#xD;&#xA;    </head>&#xD;&#xA;    <body>&#xD;&#xA;        <h1>Lab: Pixel Art Maker</h1>&#xD;&#xA;        <h2>Choose Grid Size</h2>&#xD;&#xA;        <form id="sizePicker">&#xD;&#xA;            Grid Height:&#xD;&#xA;            <input type="number" id="input_height" name="height" min="1" value="1">&#xD;&#xA;            Grid Width:&#xD;&#xA;            <input type="number" id="input_width" name="width" min="1" value="1">&#xD;&#xA;            <input type="submit">&#xD;&#xA;        </form>&#xD;&#xA;        <h2>Pick A Color</h2>&#xD;&#xA;        <input type="color" id="colorPicker">&#xD;&#xA;        <h2>Design Canvas</h2>&#xD;&#xA;        <table id="pixel_canvas"></table>&#xD;&#xA;        <script src="designs.js"></script>&#xD;&#xA;    </body>&#xD;&#xA;    </html>