      sendEmail(firstname, lastname) {&#xD;&#xA;        const body = '<h1>' + 'Dear ' + lastname + ', ' + firstname.charAt(0).toUpperCase() + '</h1><table><tr><td>' + 'This is a table' +'</td></tr>';&#xD;&#xA;        let url = `https://us-central1-xxxxxx.cloudfunctions.net/httpEmail`;&#xD;&#xA;        let params: URLSearchParams = new URLSearchParams();&#xD;&#xA;        let headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });&#xD;&#xA;        params.set('to', 'ikmail@graagnaarmijzelf.com');&#xD;&#xA;        params.set('from', 'ikmail@graagnaarmijzelf.com');&#xD;&#xA;        params.set('subject', 'clautomate');&#xD;&#xA;        params.set('content', body);&#xD;&#xA;        return this.http.post(url, params)&#xD;&#xA;          .toPromise()&#xD;&#xA;          .then( res => {&#xD;&#xA;            console.log("Mail Posted Tony!");&#xD;&#xA;            console.log(res)&#xD;&#xA;          })&#xD;&#xA;          .catch(err => {&#xD;&#xA;            console.log(err)&#xD;&#xA;          })&#xD;&#xA;      }