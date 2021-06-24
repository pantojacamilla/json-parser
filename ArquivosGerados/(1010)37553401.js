    errorHandler (error:any) : Observable<any> {&#xD;&#xA;      if(error.status == 401) {&#xD;&#xA;        // I want to call this.myOtherMethod() here!&#xD;&#xA;        this.events.publish('token_expired'); // Will throw this.events is undefined&#xD;&#xA;        console.log(error);&#xD;&#xA;      }&#xD;&#xA;      return Observable.throw(error.json());&#xD;&#xA;    }&#xD;&#xA;    get(url) : Observable<any> {&#xD;&#xA;      return this.http.get(url, {&#xD;&#xA;        headers: this.customHeaders&#xD;&#xA;      }).catch( this.errorHandler );&#xD;&#xA;    }