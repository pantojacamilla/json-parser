    <script>&#xD;&#xA;        //<![CDATA[&#xD;&#xA;        var postTitle = new Array();&#xD;&#xA;        var postUrl = new Array();&#xD;&#xA;        var postPublished = new Array();&#xD;&#xA;        var postDate = new Array();&#xD;&#xA;        var postLabels = new Array();&#xD;&#xA;        var postRecent = new Array();&#xD;&#xA;        var sortBy = "titleasc";&#xD;&#xA;        var tocLoaded = false;&#xD;&#xA;        var numChars = 250;&#xD;&#xA;        var postFilter = "";&#xD;&#xA;        var numberfeed = 0;&#xD;&#xA;        function bloggersitemap(a) {&#xD;&#xA;            function b() {&#xD;&#xA;                if ("entry" in a.feed) {&#xD;&#xA;                    var d = a.feed.entry.length;&#xD;&#xA;                    numberfeed = d;&#xD;&#xA;                    ii = 0;&#xD;&#xA;                    for (var h = 0; h < d; h++) {&#xD;&#xA;                        var n = a.feed.entry[h];&#xD;&#xA;                        var e = n.title.$t;&#xD;&#xA;                        var m = n.published.$t.substring(0, 10);&#xD;&#xA;                        var j;&#xD;&#xA;                        for (var g = 0; g < n.link.length; g++) {&#xD;&#xA;                            if (n.link[g].rel == "alternate") {&#xD;&#xA;                                j = n.link[g].href;&#xD;&#xA;                                break&#xD;&#xA;                            }&#xD;&#xA;                        }&#xD;&#xA;                        var o = "";&#xD;&#xA;                        for (var g = 0; g < n.link.length; g++) {&#xD;&#xA;                            if (n.link[g].rel == "enclosure") {&#xD;&#xA;                                o = n.link[g].href;&#xD;&#xA;                                break&#xD;&#xA;                            }&#xD;&#xA;                        }&#xD;&#xA;                        var c = "";&#xD;&#xA;                        if ("category" in n) {&#xD;&#xA;                            for (var g = 0; g < n.category.length; g++) {&#xD;&#xA;                                c = n.category[g].term;&#xD;&#xA;                                var f = c.lastIndexOf(";");&#xD;&#xA;                                if (f != -1) {&#xD;&#xA;                                    c = c.substring(0, f)&#xD;&#xA;                                }&#xD;&#xA;                                postLabels[ii] = c;&#xD;&#xA;                                postTitle[ii] = e;&#xD;&#xA;                                postDate[ii] = m;&#xD;&#xA;                                postUrl[ii] = j;&#xD;&#xA;                                postPublished[ii] = o;&#xD;&#xA;                                if (h < 10) {&#xD;&#xA;                                    postRecent[ii] = true&#xD;&#xA;                                } else {&#xD;&#xA;                                    postRecent[ii] = false&#xD;&#xA;                                }&#xD;&#xA;                                ii = ii + 1&#xD;&#xA;                            }&#xD;&#xA;                        }&#xD;&#xA;                    }&#xD;&#xA;                }&#xD;&#xA;            }&#xD;&#xA;            b();&#xD;&#xA;            sortBy = "titleasc";&#xD;&#xA;            sortPosts(sortBy);&#xD;&#xA;            sortlabel();&#xD;&#xA;            tocLoaded = true;&#xD;&#xA;            displayToc2();&#xD;&#xA;        }&#xD;&#xA;        function filterPosts(a) {&#xD;&#xA;            scroll(0, 0);&#xD;&#xA;            postFilter = a;&#xD;&#xA;            displayToc(postFilter)&#xD;&#xA;        }&#xD;&#xA;        function allPosts() {&#xD;&#xA;            sortlabel();&#xD;&#xA;            postFilter = "";&#xD;&#xA;            displayToc(postFilter)&#xD;&#xA;        }&#xD;&#xA;        function sortPosts(d) {&#xD;&#xA;            function c(e, g) {&#xD;&#xA;                var f = postTitle[e];&#xD;&#xA;                postTitle[e] = postTitle[g];&#xD;&#xA;                postTitle[g] = f;&#xD;&#xA;                var f = postDate[e];&#xD;&#xA;                postDate[e] = postDate[g];&#xD;&#xA;                postDate[g] = f;&#xD;&#xA;                var f = postUrl[e];&#xD;&#xA;                postUrl[e] = postUrl[g];&#xD;&#xA;                postUrl[g] = f;&#xD;&#xA;                var f = postLabels[e];&#xD;&#xA;                postLabels[e] = postLabels[g];&#xD;&#xA;                postLabels[g] = f;&#xD;&#xA;                var f = postPublished[e];&#xD;&#xA;                postPublished[e] = postPublished[g];&#xD;&#xA;                postPublished[g] = f;&#xD;&#xA;                var f = postRecent[e];&#xD;&#xA;                postRecent[e] = postRecent[g];&#xD;&#xA;                postRecent[g] = f&#xD;&#xA;            }&#xD;&#xA;            for (var b = 0; b < postTitle.length - 1; b++) {&#xD;&#xA;                for (var a = b + 1; a < postTitle.length; a++) {&#xD;&#xA;                    if (d == "titleasc") {&#xD;&#xA;                        if (postTitle[b] > postTitle[a]) {&#xD;&#xA;                            c(b, a)&#xD;&#xA;                        }&#xD;&#xA;                    }&#xD;&#xA;                    if (d == "titledesc") {&#xD;&#xA;                        if (postTitle[b] < postTitle[a]) {&#xD;&#xA;                            c(b, a)&#xD;&#xA;                        }&#xD;&#xA;                    }&#xD;&#xA;                    if (d == "dateoldest") {&#xD;&#xA;                        if (postDate[b] > postDate[a]) {&#xD;&#xA;                            c(b, a)&#xD;&#xA;                        }&#xD;&#xA;                    }&#xD;&#xA;                    if (d == "datenewest") {&#xD;&#xA;                        if (postDate[b] < postDate[a]) {&#xD;&#xA;                            c(b, a)&#xD;&#xA;                        }&#xD;&#xA;                    }&#xD;&#xA;                    if (d == "orderlabel") {&#xD;&#xA;                        if (postLabels[b] > postLabels[a]) {&#xD;&#xA;                            c(b, a)&#xD;&#xA;                        }&#xD;&#xA;                    }&#xD;&#xA;                }&#xD;&#xA;            }&#xD;&#xA;        }&#xD;&#xA;        function sortlabel() {&#xD;&#xA;            sortBy = "orderlabel";&#xD;&#xA;            sortPosts(sortBy);&#xD;&#xA;            var a = 0;&#xD;&#xA;            var b = 0;&#xD;&#xA;            while (b < postTitle.length) {&#xD;&#xA;                temp1 = postLabels[b];&#xD;&#xA;                firsti = a;&#xD;&#xA;                do {&#xD;&#xA;                    a = a + 1&#xD;&#xA;                } while (postLabels[a] == temp1);&#xD;&#xA;                b = a;&#xD;&#xA;                sortPosts2(firsti, a);&#xD;&#xA;                if (b > postTitle.length) {&#xD;&#xA;                    break&#xD;&#xA;                }&#xD;&#xA;            }&#xD;&#xA;        }&#xD;&#xA;        function sortPosts2(d, c) {&#xD;&#xA;            function e(f, h) {&#xD;&#xA;                var g = postTitle[f];&#xD;&#xA;                postTitle[f] = postTitle[h];&#xD;&#xA;                postTitle[h] = g;&#xD;&#xA;                var g = postDate[f];&#xD;&#xA;                postDate[f] = postDate[h];&#xD;&#xA;                postDate[h] = g;&#xD;&#xA;                var g = postUrl[f];&#xD;&#xA;                postUrl[f] = postUrl[h];&#xD;&#xA;                postUrl[h] = g;&#xD;&#xA;                var g = postLabels[f];&#xD;&#xA;                postLabels[f] = postLabels[h];&#xD;&#xA;                postLabels[h] = g;&#xD;&#xA;                var g = postPublished[f];&#xD;&#xA;                postPublished[f] = postPublished[h];&#xD;&#xA;                postPublished[h] = g;&#xD;&#xA;                var g = postRecent[f];&#xD;&#xA;                postRecent[f] = postRecent[h];&#xD;&#xA;                postRecent[h] = g&#xD;&#xA;            }&#xD;&#xA;            for (var b = d; b < c - 1; b++) {&#xD;&#xA;                for (var a = b + 1; a < c; a++) {&#xD;&#xA;                    if (postTitle[b] > postTitle[a]) {&#xD;&#xA;                        e(b, a)&#xD;&#xA;                    }&#xD;&#xA;                }&#xD;&#xA;            }&#xD;&#xA;        }&#xD;&#xA;        function displayToc(a) {&#xD;&#xA;            var l = 0;&#xD;&#xA;            var h = "";&#xD;&#xA;            var e = "Post Title";&#xD;&#xA;            var m = "Click to sort by title";&#xD;&#xA;            var d = "Date";&#xD;&#xA;            var k = "Click to sort by date";&#xD;&#xA;            var c = "Category";&#xD;&#xA;            var j = "";&#xD;&#xA;            if (sortBy == "titleasc") {&#xD;&#xA;                m += " (descending)";&#xD;&#xA;                k += " (newest first)"&#xD;&#xA;            }&#xD;&#xA;            if (sortBy == "titledesc") {&#xD;&#xA;                m += " (ascending)";&#xD;&#xA;                k += " (newest first)"&#xD;&#xA;            }&#xD;&#xA;            if (sortBy == "dateoldest") {&#xD;&#xA;                m += " (ascending)";&#xD;&#xA;                k += " (newest first)"&#xD;&#xA;            }&#xD;&#xA;            if (sortBy == "datenewest") {&#xD;&#xA;                m += " (ascending)";&#xD;&#xA;                k += " (oldest first)"&#xD;&#xA;            }&#xD;&#xA;            if (postFilter != "") {&#xD;&#xA;                j = "Click to view all"&#xD;&#xA;            }&#xD;&#xA;            h += "<table>";&#xD;&#xA;            h += "<tr>";&#xD;&#xA;            h += '<td class="header1">';&#xD;&#xA;            h += '<a href="javascript:toggleTitleSort();" title="' + m + '">' + e + "</a>";&#xD;&#xA;            h += "</td>";&#xD;&#xA;            h += '<td class="header2">';&#xD;&#xA;            h += '<a href="javascript:toggleDateSort();" title="' + k + '">' + d + "</a>";&#xD;&#xA;            h += "</td>";&#xD;&#xA;            h += '<td class="header3">';&#xD;&#xA;            h += '<a href="javascript:allPosts();" title="' + j + '">' + c + "</a>";&#xD;&#xA;            h += "</td>";&#xD;&#xA;            h += '<td class="header4">';&#xD;&#xA;            h += "Read all";&#xD;&#xA;            h += "</td>";&#xD;&#xA;            h += "</tr>";&#xD;&#xA;            for (var g = 0; g < postTitle.length; g++) {&#xD;&#xA;                if (a == "") {&#xD;&#xA;                    h += '<tr><td class="entry1"><a href="' + postUrl[g] + '">' + postTitle[g] + '</a></td><td class="entry2">' + postDate[g] + '</td><td class="entry3">' + postLabels[g] + '</td><td class="entry4"><a href="' + postPublished[g] + '">Read</a></td></tr>';&#xD;&#xA;                    l++&#xD;&#xA;                } else {&#xD;&#xA;                    z = postLabels[g].lastIndexOf(a);&#xD;&#xA;                    if (z != -1) {&#xD;&#xA;                        h += '<tr><td class="entry1"><a href="' + postUrl[g] + '">' + postTitle[g] + '</a></td><td class="entry2">' + postDate[g] + '</td><td class="entry3">' + postLabels[g] + '</td><td class="entry4"><a href="' + postPublished[g] + '">Read</a></td></tr>';&#xD;&#xA;                        l++&#xD;&#xA;                    }&#xD;&#xA;                }&#xD;&#xA;            }&#xD;&#xA;            h += "</table>";&#xD;&#xA;            if (l == postTitle.length) {&#xD;&#xA;                var f = '<span class="toc-note">Show All ' + postTitle.length + " Posts<br/></span>"&#xD;&#xA;            } else {&#xD;&#xA;                var f = '<span class="toc-note">Show ' + l + " posts by category '";&#xD;&#xA;                f += postFilter + "' the " + postTitle.length + " Total Posts<br/></span>"&#xD;&#xA;            }&#xD;&#xA;            var b = document.getElementById("toc");&#xD;&#xA;            b.innerHTML = f + h&#xD;&#xA;        }&#xD;&#xA;        function displayToc2() {&#xD;&#xA;            var a = 0;&#xD;&#xA;            var b = 0;&#xD;&#xA;            while (b < postTitle.length) {&#xD;&#xA;                temp1 = postLabels[b];&#xD;&#xA;                document.write("<p/>");&#xD;&#xA;                document.write('<p class="labels"><a href="/search/label/' + temp1 + '">' + temp1 + "</a></p><ol>");&#xD;&#xA;                firsti = a;&#xD;&#xA;                do {&#xD;&#xA;                    document.write("<li>");&#xD;&#xA;                    document.write('<a class="post-titles" href="' + postUrl[a] + '">' + postTitle[a] + "</a>");&#xD;&#xA;                    if (postRecent[a] == true) {&#xD;&#xA;                        document.write(' - <strong><span style="color: rgb(255, 0, 0);">New!</span></strong>')&#xD;&#xA;                    }&#xD;&#xA;                    document.write("</li>");&#xD;&#xA;                    a = a + 1&#xD;&#xA;                } while (postLabels[a] == temp1);&#xD;&#xA;                b = a;&#xD;&#xA;                document.write("</ol>");&#xD;&#xA;                sortPosts2(firsti, a);&#xD;&#xA;                if (b > postTitle.length) {&#xD;&#xA;                    break&#xD;&#xA;                }&#xD;&#xA;            }&#xD;&#xA;        }&#xD;&#xA;        function toggleTitleSort() {&#xD;&#xA;            if (sortBy == "titleasc") {&#xD;&#xA;                sortBy = "titledesc"&#xD;&#xA;            } else {&#xD;&#xA;                sortBy = "titleasc"&#xD;&#xA;            }&#xD;&#xA;            sortPosts(sortBy);&#xD;&#xA;            displayToc(postFilter)&#xD;&#xA;        }&#xD;&#xA;        function toggleDateSort() {&#xD;&#xA;            if (sortBy == "datenewest") {&#xD;&#xA;                sortBy = "dateoldest"&#xD;&#xA;            } else {&#xD;&#xA;                sortBy = "datenewest"&#xD;&#xA;            }&#xD;&#xA;            sortPosts(sortBy);&#xD;&#xA;            displayToc(postFilter)&#xD;&#xA;        }&#xD;&#xA;        function showToc() {&#xD;&#xA;            if (tocLoaded) {&#xD;&#xA;                displayToc(postFilter);&#xD;&#xA;                var a = document.getElementById("toclink")&#xD;&#xA;            } else {&#xD;&#xA;                alert("Just wait... TOC is loading")&#xD;&#xA;            }&#xD;&#xA;        }&#xD;&#xA;        function hideToc() {&#xD;&#xA;            var a = document.getElementById("toc");&#xD;&#xA;            a.innerHTML = "";&#xD;&#xA;            var b = document.getElementById("toclink");&#xD;&#xA;            b.innerHTML = '<a href="#" onclick="scroll(0,0); showToc(); Effect.toggle(\'toc-result\',\'blind\');">?? Display Table of Contents</a> <img src="http://1.bp.blogspot.com/-_VZwBpHw_SI/UrXvLbFxacI/AAAAAAAAFiQ/ZGqWZUZesCI/s1600/new_icon.gif"/>'&#xD;&#xA;        }&#xD;&#xA;        function looptemp2() {&#xD;&#xA;            for (var a = 0; a < numberfeed; a++) {&#xD;&#xA;                document.write("<br>");&#xD;&#xA;                document.write('Post Link : <a href="' + postUrl[a] + '">' + postTitle[a] + "</a><br>");&#xD;&#xA;                document.write('Read all : <a href="' + postPublished[a] + '">' + postTitle[a] + "</a><br>");&#xD;&#xA;                document.write("<br>")&#xD;&#xA;            }&#xD;&#xA;        };&#xD;&#xA;        //]]>&#xD;&#xA;    </script>&#xD;&#xA;    <script src="https://blogname.blogspot.com/feeds/posts/default?max-results=9999&amp;alt=json-in-script&amp;callback=bloggersitemap"></script>