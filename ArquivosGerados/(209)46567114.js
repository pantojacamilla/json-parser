    export class AlbumsListCompoment implements OnInit {&#xD;&#xA;      private albumCollection: AngularFirestoreCollection<any>;&#xD;&#xA;      albumns: Observable<any[]>;&#xD;&#xA;      folderId: string;&#xD;&#xA;      constructor(&#xD;&#xA;        private readonly afs: AngularFirestore,&#xD;&#xA;        private activatedRoute: ActivatedRoute,&#xD;&#xA;        private router: Router&#xD;&#xA;      ) {&#xD;&#xA;        // Look at the url for the Folder ID and set the local variable&#xD;&#xA;        this.activatedRoute.params.forEach((urlParameters) => {&#xD;&#xA;          this.folderId = urlParameters['folderId'];&#xD;&#xA;        });&#xD;&#xA;        // Album Reference "folders/folderid/albums"&#xD;&#xA;        this.albumCollection = afs.collection<any>(`folders/${this.folderId}/albums`);&#xD;&#xA;        // Get the data&#xD;&#xA;        this.albumns = this.albumCollection.snapshotChanges().map(actions => {&#xD;&#xA;          return actions.map(a => {&#xD;&#xA;            const data = a.payload.doc.data();&#xD;&#xA;            // Get the date from each album&#xD;&#xA;            var albumDateTimeStapm = data.album_date;&#xD;&#xA;            // Convert the unix value and format it based on the users locale setting&#xD;&#xA;            var albumDateISO = moment(albumDateTimeStapm).format("DD/MM/YYYY");&#xD;&#xA;            // Create a new 'name' to use in the HTML binding&#xD;&#xA;            data.formattedDate = albumDateISO;&#xD;&#xA;            const id = a.payload.doc.id;&#xD;&#xA;            return { id, ...data };&#xD;&#xA;            });&#xD;&#xA;           });&#xD;&#xA;          }&#xD;&#xA;      ngOnInit() {&#xD;&#xA;      }&#xD;&#xA;      }