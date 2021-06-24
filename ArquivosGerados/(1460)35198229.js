    var afficher = function ( data, page ) {&#xD;&#xA;        $( '#container' ).delay ( 300 ).fadeOut ( 400, function () {&#xD;&#xA;            $( '#container' ).empty (); &#xD;&#xA;            $( '#container' ).append ( data );&#xD;&#xA;    		$( '#container' ).fadeIn ( 500, function (){&#xD;&#xA;            } );&#xD;&#xA;        } );&#xD;&#xA;    };&#xD;&#xA;    var loadPage = function ( page, storeHistory ) {&#xD;&#xA;        if ( typeof storeHistory === 'undefined' ) {&#xD;&#xA;            var storeHistory = true;&#xD;&#xA;        }&#xD;&#xA;        &#xD;&#xA;        $.ajax ( {&#xD;&#xA;            url: 'pages/' + page,&#xD;&#xA;            cache: false,&#xD;&#xA;            success: function ( html ) {&#xD;&#xA;                afficher ( html, page );&#xD;&#xA;                if ( storeHistory === true ) {&#xD;&#xA;                    history.pushState ( { 'key': 'value', 'url': page }, '', page );&#xD;&#xA;                }&#xD;&#xA;            },&#xD;&#xA;            error: function ( XMLHttpRequest, textStatus, errorThrown ) {&#xD;&#xA;                afficher ( 'erreur lors du chagement de la page' );&#xD;&#xA;            }&#xD;&#xA;        } );&#xD;&#xA;        &#xD;&#xA;        return false;&#xD;&#xA;    };&#xD;&#xA;    window.onpopstate = function ( e ) {&#xD;&#xA;        if ( e.state === null ) {&#xD;&#xA;            loadPage ( 'home.html' );&#xD;&#xA;        } else {&#xD;&#xA;            loadPage ( e [ 'state' ] [ 'url' ], false );&#xD;&#xA;        }&#xD;&#xA;    };&#xD;&#xA;    $( document ).ready ( function () {&#xD;&#xA;        $( '#menu a' ).on ( 'click',function ( e ) {&#xD;&#xA;            var page = $( this ).attr ( 'href' );&#xD;&#xA;            loadPage ( page );&#xD;&#xA;            return false;&#xD;&#xA;        } );&#xD;&#xA;        &#xD;&#xA;        $( '#container' ).on ( 'click', '.vs-transform a', function () {&#xD;&#xA;            var page = $( this ).attr ( 'href' );&#xD;&#xA;            loadPage ( page );&#xD;&#xA;            return false;&#xD;&#xA;        } );&#xD;&#xA;    } );