    <!DOCTYPE html>&#xD;&#xA;    <html lang="en">&#xD;&#xA;       <head>&#xD;&#xA;          <title>Recharge</title>&#xD;&#xA;          <meta charset="utf-8">&#xD;&#xA;          <meta name="viewport" content="width=device-width, initial-scale=1">&#xD;&#xA;          <link href="header.css" text="text/css" rel="stylesheet">&#xD;&#xA;          <script src="time.js" type="text/javascript"></script>&#xD;&#xA;    	  <script src="jquery-2.2.3.min.js" type="text/javascript"></script>&#xD;&#xA;          <style type="text/css"></style>&#xD;&#xA;    <body>&#xD;&#xA;    <form  name="card" method="post" onsubmit="return validateexpiry()&& validate_cvv(document.card.cvv);">&#xD;&#xA;    <table>&#xD;&#xA;    <tr>&#xD;&#xA;    <td> Expiry Date<td>&#xD;&#xA;    <td>&#xD;&#xA;    <select  id="exMonth" title="select a month">&#xD;&#xA;    <option value="0">Month</option>&#xD;&#xA;        <option value="01">January</option>&#xD;&#xA;        <option value="02">February</option>&#xD;&#xA;        <option value="03">March</option>&#xD;&#xA;        <option value="04">April</option>&#xD;&#xA;        <option value="05">May</option>&#xD;&#xA;        <option value="06">June</option>&#xD;&#xA;        <option value="07">July</option>&#xD;&#xA;        <option value="08">August</option>&#xD;&#xA;        <option value="09">September</option>&#xD;&#xA;        <option value="10">October</option>&#xD;&#xA;        <option value="11">November</option>&#xD;&#xA;        <option value="12">December</option>&#xD;&#xA;    </select>&#xD;&#xA;    <select   id="exYear" title="select a year">&#xD;&#xA;     <option value="0">Year</option>&#xD;&#xA;        &#xD;&#xA;        <option value="2016">2016</option>&#xD;&#xA;        <option value="2017">2017</option>&#xD;&#xA;        <option value="2018">2018</option>&#xD;&#xA;        <option value="2019">2019</option>&#xD;&#xA;        <option value="2020">2020</option>&#xD;&#xA;        <option value="2021">2021</option>&#xD;&#xA;        <option value="2022">2022</option>&#xD;&#xA;        <option value="2023">2023</option>&#xD;&#xA;        <option value="2024">2024</option>&#xD;&#xA;        <option value="2025">2025</option>&#xD;&#xA;        <option value="2026">2026</option>&#xD;&#xA;        <option value="2027">2027</option>&#xD;&#xA;        <option value="2028">2028</option>&#xD;&#xA;        <option value="2029">2029</option>&#xD;&#xA;        <option value="2030">2030</option>&#xD;&#xA;        <option value="2031">2031</option>&#xD;&#xA;    </select>&#xD;&#xA;    </td>&#xD;&#xA;    <tr><td><span id="invalidexpiry"></span></td></tr>&#xD;&#xA;    <tr><td>&#xD;&#xA;    CVV&#xD;&#xA;    <input type="text" name="cvv" class="cvv" onkeypress="return isNumber(event)" ><span id="usernameError"></span>&#xD;&#xA;    </td></tr>&#xD;&#xA;     <tr>&#xD;&#xA;     <td>&#xD;&#xA;    <div id="centreimg">&#xD;&#xA;    <input type="submit" name="S1" value="Submit response" />&#xD;&#xA;    </div>&#xD;&#xA;    </td>&#xD;&#xA;    </tr>&#xD;&#xA;    </form> 