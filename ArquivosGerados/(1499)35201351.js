    <head>&#xD;&#xA;      <link rel="stylesheet" type="text/css" href="new.css">&#xD;&#xA;      <h1 style="margin-top: 50px ; color: white" align="center">Advanced Grade Tabulator</h1>&#xD;&#xA;      <p id="studentCount" style="color: white; margin-left: 700px">You have not recorded any student yet</p>&#xD;&#xA;    </head>&#xD;&#xA;    <body>&#xD;&#xA;      <table id="showScoreResult" align="right" style="border:5px solid black; color:rgb(0, 0, 0); text-align:center; margin-right: 60px">&#xD;&#xA;        <tr>&#xD;&#xA;          <th style="border: 1px solid black; width: 100px; color:white">Student name</th>&#xD;&#xA;          <th style="border: 1px solid black; width: 100px; color:white">Midterm</th>&#xD;&#xA;          <th style="border: 1px solid black; width: 100px; color:white">Homework</th>&#xD;&#xA;          <th style="border: 1px solid black; width: 100px; color:white">Exam</th>&#xD;&#xA;          <th style="border: 1px solid black; width: 100px; color:white">Attendance</th>&#xD;&#xA;          <th style="border: 1px solid black; width: 100px; color:white">Score</th>&#xD;&#xA;          <th style="border: 1px solid black; width: 100px; color:white">Letter grade</th>&#xD;&#xA;        </tr>&#xD;&#xA;      </table>&#xD;&#xA;      <table style="color: white; margin-left: 100px ">&#xD;&#xA;        <tr>&#xD;&#xA;          <td>First Name:</td>&#xD;&#xA;          <td>&#xD;&#xA;            <input type="text" id="fName" />&#xD;&#xA;          </td>&#xD;&#xA;        </tr>&#xD;&#xA;        <tr>&#xD;&#xA;          <td>Last Name:</td>&#xD;&#xA;          <td>&#xD;&#xA;            <input type="text" id="lName" />&#xD;&#xA;          </td>&#xD;&#xA;        </tr>&#xD;&#xA;        <tr>&#xD;&#xA;          <td>Midterm:</td>&#xD;&#xA;          <td>&#xD;&#xA;            <input type="text" id="midTerm" />&#xD;&#xA;          </td>&#xD;&#xA;        </tr>&#xD;&#xA;        <tr>&#xD;&#xA;          <td>Homework:</td>&#xD;&#xA;          <td>&#xD;&#xA;            <input type="text" id="homeWork" />&#xD;&#xA;          </td>&#xD;&#xA;        </tr>&#xD;&#xA;        <tr>&#xD;&#xA;          <td>Exam:</td>&#xD;&#xA;          <td>&#xD;&#xA;            <input type="text" id="finalExam" />&#xD;&#xA;          </td>&#xD;&#xA;        </tr>&#xD;&#xA;        <tr>&#xD;&#xA;          <td>Attendance:</td>&#xD;&#xA;          <td>&#xD;&#xA;            <input type="text" id="classAttendance" />&#xD;&#xA;          </td>&#xD;&#xA;        </tr>&#xD;&#xA;      </table>&#xD;&#xA;      <table style="float:left ; margin-left: 60px ">&#xD;&#xA;        <td>&#xD;&#xA;          <button id="submitEntry">Submit Entry</button>&#xD;&#xA;        </td>&#xD;&#xA;        <td>&#xD;&#xA;          <button id="showScores">Show Scores</button>&#xD;&#xA;        </td>&#xD;&#xA;        <td>&#xD;&#xA;          <button id="overallAverage">Overall Average</button>&#xD;&#xA;        </td>&#xD;&#xA;        <td>&#xD;&#xA;          <button id="reSet">Reset</button>&#xD;&#xA;        </td>&#xD;&#xA;      </table>