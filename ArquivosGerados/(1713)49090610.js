    @Component({&#xD;&#xA;      selector: 'like-review',&#xD;&#xA;      templateUrl: 'like-review.html'&#xD;&#xA;    })&#xD;&#xA;    export class LikeReviewComponent implements OnInit, AfterViewChecked, AfterContentInit {&#xD;&#xA;      @Input() userId;&#xD;&#xA;      @Input() card: Card;&#xD;&#xA;      likesObservable: Observable<any>;&#xD;&#xA;     .....&#xD;&#xA;    }&#xD;&#xA;      ngOnInit() {&#xD;&#xA;     &#xD;&#xA;         &#xD;&#xA;        this.likesObservable = this.fav.getUserLike(this.userId, this.card.id).map(data => {&#xD;&#xA;          if(data == null) {&#xD;&#xA;            return false;&#xD;&#xA;          }else{&#xD;&#xA;            return data.like;&#xD;&#xA;          }&#xD;&#xA;        });&#xD;&#xA;      }&#xD;&#xA;    .....&#xD;&#xA;    }