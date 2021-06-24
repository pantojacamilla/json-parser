    wordWrap( document.body )&#xD;&#xA;    function wordWrap( element ){&#xD;&#xA;      var nodes = document.createTreeWalker(&#xD;&#xA;        element,&#xD;&#xA;        NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT,&#xD;&#xA;        { acceptNode : function( node ){&#xD;&#xA;          if( node.nodeType === node.TEXT_NODE )&#xD;&#xA;            return NodeFilter.FILTER_ACCEPT&#xD;&#xA;          else &#xD;&#xA;            return NodeFilter.FILTER_SKIP&#xD;&#xA;        } } &#xD;&#xA;      )&#xD;&#xA;      var node&#xD;&#xA;      var text&#xD;&#xA;      var word&#xD;&#xA;      while( node = nodes.nextNode() ){&#xD;&#xA;        text = node.nodeValue.replace( /(^\s+|\s+$)/, '' ).split( /\s+/g )&#xD;&#xA;        while( text.length ){&#xD;&#xA;          word = document.createElement( 'span' )&#xD;&#xA;          word.className = 'word'&#xD;&#xA;          word.innerText = text.shift()&#xD;&#xA;          node.parentNode.insertBefore( word, node )&#xD;&#xA;          if( text.length )&#xD;&#xA;            node.parentNode.insertBefore( document.createTextNode( ' ' ), node )&#xD;&#xA;            }&#xD;&#xA;        node.parentNode.removeChild( node )&#xD;&#xA;      }&#xD;&#xA;    }