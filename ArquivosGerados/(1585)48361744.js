    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />&#xD;&#xA;    <script src="https://cdnjs.cloudflare.com/ajax/libs/tinysort/2.3.6/tinysort.min.js"></script>&#xD;&#xA;    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>&#xD;&#xA;    <div id="filterOptions">&#xD;&#xA;      <select name="filterMenu" class="searchFieldMenu">&#xD;&#xA;                                      <option value="firstName" data-sortby="first">First Name</option>&#xD;&#xA;                                      <option value="lastName" data-sortby="last">Last Name</option>&#xD;&#xA;                                      <option value="cityName" data-sortby="city">City</option>&#xD;&#xA;                                      <option value="stateName" data-sortby="state">State</option>&#xD;&#xA;                                    </select>&#xD;&#xA;      <div id="filterBtn">&#xD;&#xA;        <i class="fa fa-sort-alpha-asc active" data-sortdir="asc" aria-hidden="true"></i>&#xD;&#xA;        <i class="fa fa-sort-alpha-desc hidden_apa" data-sortdir="desc" aria-hidden="false"></i>&#xD;&#xA;      </div>&#xD;&#xA;    </div>&#xD;&#xA;    <ul id="resultsList">&#xD;&#xA;      <li class="resultsItem">&#xD;&#xA;        <div class="infoBox">&#xD;&#xA;          <h2 class="firstName">Zack</h2>&#xD;&#xA;          <h2 class="lastName">Last Name A</h2>&#xD;&#xA;          <div class="title">Manager</div>&#xD;&#xA;          <div class="company">Walmart</div>&#xD;&#xA;          <div class="location">&#xD;&#xA;            <span class="cityName">Juno</span>,&#xD;&#xA;            <span class="stateName">AK</span>&#xD;&#xA;            <br>United States</div>&#xD;&#xA;        </div>&#xD;&#xA;      </li>&#xD;&#xA;    </ul>&#xD;&#xA;    <div class="pagination" id="pager">&#xD;&#xA;      <ul class="paginatorList">&#xD;&#xA;        <li class="page-item active">&#xD;&#xA;          <a onclick="createPagination(pages, 1)">1</a>&#xD;&#xA;        </li>&#xD;&#xA;        <li class="page-item">&#xD;&#xA;          <a onclick="createPagination(pages, 2)">2</a>&#xD;&#xA;        </li>&#xD;&#xA;      </ul>&#xD;&#xA;    </div>