    function Export2Doc(element, filename = ''){&#xD;&#xA;        var preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";&#xD;&#xA;        var postHtml = "</body></html>";&#xD;&#xA;        var html = preHtml+document.getElementById(element).innerHTML+postHtml;&#xD;&#xA;        var blob = new Blob(['\ufeff', html], {&#xD;&#xA;            type: 'application/msword'&#xD;&#xA;        });&#xD;&#xA;        &#xD;&#xA;        // Specify link url&#xD;&#xA;        var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);&#xD;&#xA;        &#xD;&#xA;        // Specify file name&#xD;&#xA;        filename = filename?filename+'.doc':'document.doc';&#xD;&#xA;        &#xD;&#xA;        // Create download link element&#xD;&#xA;        var downloadLink = document.createElement("a");&#xD;&#xA;        document.body.appendChild(downloadLink);&#xD;&#xA;        &#xD;&#xA;        if(navigator.msSaveOrOpenBlob ){&#xD;&#xA;            navigator.msSaveOrOpenBlob(blob, filename);&#xD;&#xA;        }else{&#xD;&#xA;            // Create a link to the file&#xD;&#xA;            downloadLink.href = url;&#xD;&#xA;            &#xD;&#xA;            // Setting the file name&#xD;&#xA;            downloadLink.download = filename;&#xD;&#xA;            &#xD;&#xA;            //triggering the function&#xD;&#xA;            downloadLink.click();&#xD;&#xA;        }&#xD;&#xA;        &#xD;&#xA;        document.body.removeChild(downloadLink);&#xD;&#xA;    }