    <!DOCTYPE html>&#xD;&#xA;    <html>&#xD;&#xA;    <head>&#xD;&#xA;        <title>Weather Watch</title>&#xD;&#xA;        <meta charset="UTF-8" />&#xD;&#xA;        <link href="test.css" rel="stylesheet" type="text/css" />&#xD;&#xA;        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>&#xD;&#xA;        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"&#xD;&#xA;            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />&#xD;&#xA;        <link href="https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap" rel="stylesheet" />&#xD;&#xA;    </head>&#xD;&#xA;    <body>&#xD;&#xA;        <div id="app" class="lightmode">&#xD;&#xA;        <div class="container">&#xD;&#xA;            <h1>WeatherWatch</h1>&#xD;&#xA;            <div class="input-group mb-3">&#xD;&#xA;                <form>&#xD;&#xA;                    <input type="text" class="form-control" id="keyword" placeholder="Search city..."&#xD;&#xA;                        aria-label="Input city" aria-describedby="button-addon2" autocomplete="off" />&#xD;&#xA;                    <div class="input-group-append">&#xD;&#xA;                        <submit class="btn btn-outline-secondary search-btn" type="button" id="button-addon2">&#xD;&#xA;                            Search&#xD;&#xA;                        </submit>&#xD;&#xA;                </form>&#xD;&#xA;            </div>&#xD;&#xA;        </div>&#xD;&#xA;        <div class="row">&#xD;&#xA;            <div class="col-6">&#xD;&#xA;                <div class="element">&#xD;&#xA;                </div>&#xD;&#xA;                <span class="current"></span>&#xD;&#xA;            </div>&#xD;&#xA;            <div class="col-6">&#xD;&#xA;                <span class="current-city">Lisbon</span>&#xD;&#xA;                <p class="date"></p>&#xD;&#xA;                <p class="time"></p>&#xD;&#xA;            </div>&#xD;&#xA;        </div>&#xD;&#xA;        <script src="test.js"></script>&#xD;&#xA;    </body>