        'use strict';&#xD;&#xA;    const functions = require( 'firebase-functions' );&#xD;&#xA;    const {WebhookClient} = require( 'dialogflow-fulfillment' );&#xD;&#xA;    const {Card, Suggestion} = require( 'dialogflow-fulfillment' );&#xD;&#xA;     var admin = require( 'firebase-admin' );&#xD;&#xA;        admin.initializeApp( {&#xD;&#xA;          credential: admin.credential.cert( {&#xD;&#xA;            projectId: ' ',&#xD;&#xA;            clientEmail: ' ',&#xD;&#xA;            privateKey: ' '&#xD;&#xA;          } ),&#xD;&#xA;          databaseURL: 'https://*****.firebaseio.com'&#xD;&#xA;        } );&#xD;&#xA;    process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements&#xD;&#xA;    exports.dialogflowFirebaseFulfillment = functions.https.onRequest( ( request, response ) =>{&#xD;&#xA;      const agent = new WebhookClient( {request, response} );&#xD;&#xA;      console.log( 'Dialogflow Request headers: ' + JSON.stringify( request.headers ) );&#xD;&#xA;      console.log( 'Dialogflow Request body: ' + JSON.stringify( request.body ) );&#xD;&#xA;      function welcome( agent ){&#xD;&#xA;        agent.add( `Welcome to my agent!` );&#xD;&#xA;      }&#xD;&#xA;      function fallback( agent ){&#xD;&#xA;        agent.add( `I didn't understand` );&#xD;&#xA;        agent.add( `I'm sorry, can you try again?` );&#xD;&#xA;      }&#xD;&#xA;      function personFacts( agent ){&#xD;&#xA;        const personId = agent.parameters["personId"];&#xD;&#xA;        const personMeasurement = agent.parameters["personMeasurement"];&#xD;&#xA;       &#xD;&#xA;        var db = admin.database();&#xD;&#xA;        var ref = db.ref( `person/${personId}/${personMeasurement}` );&#xD;&#xA;        return ref.once( "value" ).then( snapshot =>{&#xD;&#xA;        var result = snapshot.val();&#xD;&#xA;          agent.add( `${personId}'s ${personMeasurement} is ${result}` );&#xD;&#xA;        } )&#xD;&#xA;          .catch( err =>{&#xD;&#xA;            agent.add( 'uh oh, something went wrong.' );&#xD;&#xA;            console.error( err );&#xD;&#xA;          } );&#xD;&#xA;      }&#xD;&#xA;      let intentMap = new Map();&#xD;&#xA;      intentMap.set( 'Default Welcome Intent', welcome );&#xD;&#xA;      intentMap.set( 'Default Fallback Intent', fallback );&#xD;&#xA;      intentMap.set('person', personFacts);&#xD;&#xA;      agent.handleRequest( intentMap );&#xD;&#xA;    } );