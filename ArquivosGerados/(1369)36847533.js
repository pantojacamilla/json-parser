    var newsListData = [&#xD;&#xA;      {&#xD;&#xA;    	    "group" : "science",&#xD;&#xA;    	    "title" : "Text 1",&#xD;&#xA;    	    "image" : "images/news1.jpg",&#xD;&#xA;    	    "content" : "Text text text"&#xD;&#xA;    	},&#xD;&#xA;    	{&#xD;&#xA;    	    "group" : "science",&#xD;&#xA;    	    "title" : "Text 2",&#xD;&#xA;    	    "image" : "images/news2.jpg",&#xD;&#xA;    	    "content" : "Text text text"&#xD;&#xA;    	},&#xD;&#xA;    	{&#xD;&#xA;    	    "group" : "science",&#xD;&#xA;    	    "title" : 'Text 3',&#xD;&#xA;    	    "image" : "images/news3.jpg",&#xD;&#xA;    	    "content" : "Text text text"&#xD;&#xA;    	},&#xD;&#xA;    	{&#xD;&#xA;    	    "group" : "economics",&#xD;&#xA;    	    "title" : 'Text 4',&#xD;&#xA;    	    "image" : "images/news4.jpg",&#xD;&#xA;    	    "content" : "Text text text"&#xD;&#xA;    	}]&#xD;&#xA;    var selected;&#xD;&#xA;    function elem() {&#xD;&#xA;      selected.innerHTML = "";&#xD;&#xA;      for (var i = 0; i < this.children.length; i++) {&#xD;&#xA;        selected.appendChild(this.children[i].cloneNode(true));&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    document.addEventListener("DOMContentLoaded", function() {&#xD;&#xA;      var selectedNews = newsListData​ /* stuck HERE */&#xD;&#xA;      for (var i = 0; i < selectedNews.length; i++) {&#xD;&#xA;        selectedNews[i].addEventListener("click", elem);&#xD;&#xA;      }&#xD;&#xA;      selected = document.getElementById("selectedNews")&#xD;&#xA;    });