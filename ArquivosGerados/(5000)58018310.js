    <html>&#xD;&#xA;    &#xD;&#xA;        <head>&#xD;&#xA;            <meta name="viewport" content="width=device-width, initial-scale=1">&#xD;&#xA;            <style>&#xD;&#xA;    &#xD;&#xA;                #tabletu {&#xD;&#xA;                    background-color: transparent;&#xD;&#xA;                    border-collapse: collapse;&#xD;&#xA;                    width:100%;&#xD;&#xA;                }&#xD;&#xA;    &#xD;&#xA;                #tabletu td, th {&#xD;&#xA;                    border: 1px solid #000000;&#xD;&#xA;                    padding: 8px;&#xD;&#xA;                }&#xD;&#xA;    &#xD;&#xA;                #tabletu th {&#xD;&#xA;                    padding: 8px;&#xD;&#xA;                    text-align: left;&#xD;&#xA;                    border: 1px solid #000000;  &#xD;&#xA;                    background-color: rgba(0,110,167,1);&#xD;&#xA;                    color: white;&#xD;&#xA;                }&#xD;&#xA;                /* The Modal (background) */&#xD;&#xA;                .modal {&#xD;&#xA;                    display: none; /* Hidden by default */&#xD;&#xA;                    position: fixed; /* Stay in place */&#xD;&#xA;                    z-index: 1; /* Sit on top */&#xD;&#xA;                    padding-top: 100px; /* Location of the box */&#xD;&#xA;                    left: 0;&#xD;&#xA;                    top: 0;&#xD;&#xA;                    width: 100%; /* Full width */&#xD;&#xA;                    height: 100%; /* Full height */&#xD;&#xA;                    overflow: auto; /* Enable scroll if needed */&#xD;&#xA;                    background-color: rgb(0,0,0); /* Fallback color */&#xD;&#xA;                    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */&#xD;&#xA;                }&#xD;&#xA;    &#xD;&#xA;                /* Modal Content */&#xD;&#xA;                .modal-content {&#xD;&#xA;                    background-color: #fefefe;&#xD;&#xA;                    margin: auto;&#xD;&#xA;                    padding: 20px;&#xD;&#xA;                    border: 1px solid #888;&#xD;&#xA;                    width: 80%;&#xD;&#xA;                }&#xD;&#xA;    &#xD;&#xA;    &#xD;&#xA;                .modal td {&#xD;&#xA;                    padding:0px;&#xD;&#xA;                }&#xD;&#xA;                /* The Close Button */&#xD;&#xA;                .close {&#xD;&#xA;                    color: #aaaaaa;&#xD;&#xA;                    float: right;&#xD;&#xA;                    font-size: 28px;&#xD;&#xA;                    font-weight: bold;&#xD;&#xA;                }&#xD;&#xA;    &#xD;&#xA;                .close:hover,&#xD;&#xA;                .close:focus {&#xD;&#xA;                    color: #000;&#xD;&#xA;                    text-decoration: none;&#xD;&#xA;                    cursor: pointer;&#xD;&#xA;                }&#xD;&#xA;    &#xD;&#xA;                .notebook {  &#xD;&#xA;                    border-collapse: collapse;&#xD;&#xA;                    width:70%;}&#xD;&#xA;                .notebook td:hover {background-color: #ddd;}&#xD;&#xA;                .notebook td, .notebook th {&#xD;&#xA;                    border: 1px solid #ddd;&#xD;&#xA;                    padding: 0px;&#xD;&#xA;                }&#xD;&#xA;                .block {&#xD;&#xA;                    display: block;&#xD;&#xA;                    width: 100%;&#xD;&#xA;                    border: none;&#xD;&#xA;                    background-color: rgba(0, 166, 214, 1);&#xD;&#xA;                    padding: 14px 28px;&#xD;&#xA;                    font-size: 16px;&#xD;&#xA;                    cursor: pointer;&#xD;&#xA;                    text-align: center;&#xD;&#xA;                    box-sizing: border-box;&#xD;&#xA;                }&#xD;&#xA;    &#xD;&#xA;                .block:hover {&#xD;&#xA;                    background-color: rgba(0, 166, 214, 0.78);&#xD;&#xA;                    color: black;&#xD;&#xA;                }&#xD;&#xA;                .month {&#xD;&#xA;                    text-align: center;&#xD;&#xA;                }        &#xD;&#xA;                #category {&#xD;&#xA;                    padding:8px;&#xD;&#xA;                }&#xD;&#xA;            </style>&#xD;&#xA;        </head>&#xD;&#xA;        <body>&#xD;&#xA;    &#xD;&#xA;            <h2>Experiment Notebook</h2>&#xD;&#xA;            <center>&#xD;&#xA;                <table id="tabletu" class="notebook">&#xD;&#xA;                    <tr id="category">&#xD;&#xA;                        <th ></th>&#xD;&#xA;                        <th id="category">Test1</th>&#xD;&#xA;                        <th>Test2</th>&#xD;&#xA;                        <th>Other</th>&#xD;&#xA;                    </tr>&#xD;&#xA;                    <tr>&#xD;&#xA;                        <td rowspan=2 class="month">April</td>&#xD;&#xA;                        <td><!-- Trigger/Open The Modal -->&#xD;&#xA;                            <button id="myBtn2" class="block">Open Modal</button>&#xD;&#xA;    &#xD;&#xA;                            <!-- The Modal -->&#xD;&#xA;                            <div id="myModal" class="modal">&#xD;&#xA;    &#xD;&#xA;                                <!-- Modal content -->&#xD;&#xA;                                <div class="modal-content">&#xD;&#xA;                                    <span class="close">&times;</span>&#xD;&#xA;                                    <p>Some text in the Modal..</p>&#xD;&#xA;                                </div>&#xD;&#xA;    &#xD;&#xA;                            </div>&#xD;&#xA;                        </td>&#xD;&#xA;                        <td><button id="myBtn2" class="block">Open Modal</button></td>&#xD;&#xA;                        <td>Germany</td>&#xD;&#xA;                    </tr>&#xD;&#xA;                    <tr>&#xD;&#xA;    &#xD;&#xA;                        <td>Berglunds snabbköp</td>&#xD;&#xA;                        <td>Christina Berglund</td>&#xD;&#xA;                        <td>Sweden</td>&#xD;&#xA;                    </tr>&#xD;&#xA;                    <tr>&#xD;&#xA;                        <td></td>&#xD;&#xA;                        <td>Centro comercial Moctezuma</td>&#xD;&#xA;                        <td>Francisco Chang</td>&#xD;&#xA;                        <td>Mexico</td>&#xD;&#xA;                    </tr>&#xD;&#xA;                    <tr>&#xD;&#xA;                        <td></td>&#xD;&#xA;                        <td>Ernst Handel</td>&#xD;&#xA;                        <td>Roland Mendel</td>&#xD;&#xA;                        <td>Austria</td>&#xD;&#xA;                    </tr>&#xD;&#xA;                    <tr>&#xD;&#xA;                        <td></td>&#xD;&#xA;                        <td>Island Trading</td>&#xD;&#xA;                        <td>Helen Bennett</td>&#xD;&#xA;                        <td>UK</td>&#xD;&#xA;                    </tr>&#xD;&#xA;                    <tr>&#xD;&#xA;                        <td></td>&#xD;&#xA;                        <td>Königlich Essen</td>&#xD;&#xA;                        <td>Philip Cramer</td>&#xD;&#xA;                        <td>Germany</td>&#xD;&#xA;                    </tr>&#xD;&#xA;                    <tr>&#xD;&#xA;                        <td></td>&#xD;&#xA;                        <td>Laughing Bacchus Winecellars</td>&#xD;&#xA;                        <td>Yoshi Tannamuri</td>&#xD;&#xA;                        <td>Canada</td>&#xD;&#xA;                    </tr>&#xD;&#xA;                    <tr>&#xD;&#xA;                        <td></td>&#xD;&#xA;                        <td>Magazzini Alimentari Riuniti</td>&#xD;&#xA;                        <td>Giovanni Rovelli</td>&#xD;&#xA;                        <td>Italy</td>&#xD;&#xA;                    </tr>&#xD;&#xA;                    <tr>&#xD;&#xA;                        <td></td>&#xD;&#xA;                        <td>North/South</td>&#xD;&#xA;                        <td>Simon Crowther</td>&#xD;&#xA;                        <td>UK</td>&#xD;&#xA;                    </tr>&#xD;&#xA;                    <tr>&#xD;&#xA;                        <td></td>&#xD;&#xA;                        <td>Paris spécialités</td>&#xD;&#xA;                        <td>Marie Bertrand</td>&#xD;&#xA;                        <td>France</td>&#xD;&#xA;                    </tr>&#xD;&#xA;                </table>&#xD;&#xA;    &#xD;&#xA;            </center>&#xD;&#xA;    &#xD;&#xA;    &#xD;&#xA;    &#xD;&#xA;            <script>&#xD;&#xA;                // Get the modal&#xD;&#xA;                var modal = document.getElementById("myModal");&#xD;&#xA;    &#xD;&#xA;                // Get the button that opens the modal&#xD;&#xA;                var btn = document.getElementById("myBtn2");&#xD;&#xA;    &#xD;&#xA;                // Get the <span> element that closes the modal&#xD;&#xA;                var span = document.getElementsByClassName("close")[0];&#xD;&#xA;    &#xD;&#xA;                // When the user clicks the button, open the modal &#xD;&#xA;                btn.onclick = function() {&#xD;&#xA;                    modal.style.display = "block";&#xD;&#xA;                }&#xD;&#xA;    &#xD;&#xA;                // When the user clicks on <span> (x), close the modal&#xD;&#xA;                span.onclick = function() {&#xD;&#xA;                    modal.style.display = "none";&#xD;&#xA;                }&#xD;&#xA;    &#xD;&#xA;                // When the user clicks anywhere outside of the modal, close it&#xD;&#xA;                window.onclick = function(event) {&#xD;&#xA;                    if (event.target == modal) {&#xD;&#xA;                        modal.style.display = "none";&#xD;&#xA;                    }&#xD;&#xA;                }&#xD;&#xA;            </script>&#xD;&#xA;    &#xD;&#xA;        </body>&#xD;&#xA;    </html>