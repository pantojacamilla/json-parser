        <a class="btn btn-danger btn-xs" (click)="findMyButton()">FindMyButton</a>    &#xD;&#xA;...&#xD;&#xA;    findMyButton(){    &#xD;&#xA;      console.log('find my button clicked')&#xD;&#xA;      console.log((this.myButton) ? 'is myButton' : "myButton undefined"); &#xD;&#xA;      if(this.myButton && !this.hasAttachedListener){&#xD;&#xA;        let simple = this.renderer.listen(this.myButton.nativeElement, 'click', (evt) => {&#xD;&#xA;          console.log('Clicking the button', evt);&#xD;&#xA;        });&#xD;&#xA;        this.hasAttachedListener=true;&#xD;&#xA;    }