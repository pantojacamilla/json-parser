    sepetDetay(BELGEID){&#xD;&#xA;        &#xD;&#xA;        var header = new Headers();&#xD;&#xA;        header.append("Accept","application/json");&#xD;&#xA;        header.append("Content-Type","application/json");&#xD;&#xA;        var base_url = "xxxxxxxxxxxxxxxxxx";&#xD;&#xA;        var veri = JSON.stringify({&#xD;&#xA;          ID : 0,&#xD;&#xA;          BELGEID : BELGEID&#xD;&#xA;        });&#xD;&#xA;        this.http.post(base_url, veri, header).map(res=>res.json()).subscribe(data=>{ this.SEPETSAYISI = data["Table"].length; });&#xD;&#xA;      &#xD;&#xA;    }&#xD;&#xA;    <ion-tab [root]="tab5Root" tabTitle="Sepet" [tabBadge]="SEPETSAYISI" tabIcon="ios-cart"></ion-tab>