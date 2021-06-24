    var Engine = require("famous/core/Engine");&#xD;&#xA;    var Surface = require("famous/core/Surface");&#xD;&#xA;    var SequentialLayout = require("famous/views/SequentialLayout");&#xD;&#xA;    &#xD;&#xA;    var mainContext = Engine.createContext();&#xD;&#xA;    var sequentialLayout = new SequentialLayout();&#xD;&#xA;    var surfaces = [];&#xD;&#xA;    sequentialLayout.sequenceFrom(surfaces);&#xD;&#xA;    &#xD;&#xA;    for (var i = 0; i < 10; i++) {&#xD;&#xA;        surfaces.push(new Surface({&#xD;&#xA;            size: [i*35, 50],   // <- Changed the width here!!!&#xD;&#xA;            properties: {&#xD;&#xA;                backgroundColor: "hsl(" + (i * 360 / 10) + ", 100%, 50%)",&#xD;&#xA;            }&#xD;&#xA;        }));&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    mainContext.add(sequentialLayout);