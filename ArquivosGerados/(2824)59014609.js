    ....&#xD;&#xA;    const [isFavourite, setIsFavourite] = useState("no");&#xD;&#xA;	//checking if there is favourite&#xD;&#xA;	useEffect(() => {&#xD;&#xA;		debugger;&#xD;&#xA;		const db = firebase.firestore().collection('users').doc(props.auth.uid)&#xD;&#xA;		db.onSnapshot(snapshot => {&#xD;&#xA;			debugger;&#xD;&#xA;			if(snapshot.data()) {&#xD;&#xA;    			if (snapshot.data().favorites) {&#xD;&#xA;	    			if (snapshot.data().favorites.includes(id)) {&#xD;&#xA;		    			setIsFavourite("yes")&#xD;&#xA;			    	}&#xD;&#xA;				    else if(!snapshot.data().favorites.includes(id)){&#xD;&#xA;					    setIsFavourite("no")&#xD;&#xA;    				}&#xD;&#xA;	    		}&#xD;&#xA;		    }&#xD;&#xA;		}, (error) => console.error(error));&#xD;&#xA;		return () => db()&#xD;&#xA;	},[])&#xD;&#xA;    ....