    require('babel-register')();&#xD;&#xA;    var jsdom = require('jsdom').jsdom;&#xD;&#xA;    var exposedProperties = ['window', 'navigator', 'document'];&#xD;&#xA;    global.document = jsdom('');&#xD;&#xA;    global.window = document.defaultView;&#xD;&#xA;    Object.keys(document.defaultView).forEach((property) => {&#xD;&#xA;      if (typeof global[property] === 'undefined') {&#xD;&#xA;        exposedProperties.push(property);&#xD;&#xA;        global[property] = document.defaultView[property];&#xD;&#xA;      }&#xD;&#xA;    });&#xD;&#xA;    global.navigator = {&#xD;&#xA;      userAgent: 'node.js'&#xD;&#xA;    };&#xD;&#xA;    //&#xD;&#xA;    var documentRef = document;&#xD;&#xA;    //&#xD;&#xA;    process.env.NODE_ENV = 'test';&#xD;&#xA;    function noop() {&#xD;&#xA;      return null;&#xD;&#xA;    }&#xD;&#xA;    require.extensions['.css'] = noop;&#xD;&#xA;    require.extensions['.scss'] = noop;&#xD;&#xA;    require.extensions['.md'] = noop;&#xD;&#xA;    require.extensions['.png'] = noop;&#xD;&#xA;    require.extensions['.svg'] = noop;&#xD;&#xA;    require.extensions['.jpg'] = noop;&#xD;&#xA;    require.extensions['.jpeg'] = noop;&#xD;&#xA;    require.extensions['.gif'] = noop;