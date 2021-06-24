    exports.deleteFunc = functions.firestore.document('nonauth_url/{docId}').onCreate( ( change, context) => {&#xD;&#xA;       &#xD;&#xA;       let newbatch = db.batch() ;&#xD;&#xA;       db.collection('nonauth_url').where( 'expiredAt' , '<=', Date.now()).get().then( (snapshot) => {&#xD;&#xA;      snapshot.forEach( (doc) => {&#xD;&#xA;         newbatch.delete(doc.ref) ;&#xD;&#xA;      }) ;&#xD;&#xA;       }).then( () => {&#xD;&#xA;      console.log('Delete done') ;&#xD;&#xA;       }) ;&#xD;&#xA;       return newbatch.commit().then( () => {&#xD;&#xA;      console.log('Batch Committed');&#xD;&#xA;       }).catch( (err) => {&#xD;&#xA;      console.error('error occurred', err) ;&#xD;&#xA;       }) ;&#xD;&#xA;    }) ;