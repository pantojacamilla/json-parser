    // ===================================================================&#xD;&#xA;    // Node class. Represents a javascript version of the java Node class&#xD;&#xA;    // ===================================================================&#xD;&#xA;    var nodes = []; //Have second reduced node version running, maybe as a method in the Node? Call simple for loop in web-link&#xD;&#xA;    function StoryNode(name) {&#xD;&#xA;        this.name = name;&#xD;&#xA;        let that = this;&#xD;&#xA;        nodes.push(this);&#xD;&#xA;        // Add our graphical representation&#xD;&#xA;        this.domElement = document.createElement('div');&#xD;&#xA;        document.getElementById('node-container').appendChild(this.domElement);&#xD;&#xA;        this.domElement.classList.add('node');&#xD;&#xA;        this.domElement.classList.add('container-fixed');&#xD;&#xA;        this.domElement.setAttribute('title', name.replace("Node",""));&#xD;&#xA;        let remDom = document.createElement('div');&#xD;&#xA;        remDom.classList.add('delete-node');&#xD;&#xA;        remDom.innerHTML ='<i class="fa fa-trash" aria-hidden="true"/>';&#xD;&#xA;        this.domElement.appendChild(remDom);&#xD;&#xA;        remDom.onclick = function (e) {&#xD;&#xA;            that.detachAll();&#xD;&#xA;            for( let i = 0; i < nodes.length; i++){&#xD;&#xA;                if ( nodes[i] === that) {&#xD;&#xA;                    nodes.splice(i, 1);&#xD;&#xA;                }&#xD;&#xA;            }&#xD;&#xA;            that.domElement.parentElement.removeChild(that.domElement);&#xD;&#xA;        };&#xD;&#xA;        // Add the node body&#xD;&#xA;        // Directories&#xD;&#xA;        var innerDomGroup = document.createElement('div');&#xD;&#xA;        innerDomGroup.classList.add('row');&#xD;&#xA;        this.domElement.appendChild(innerDomGroup);&#xD;&#xA;        // Outputs&#xD;&#xA;        this.outputDomGroup = document.createElement('div');&#xD;&#xA;        this.outputDomGroup.classList.add('col-fixed-small-1');&#xD;&#xA;        innerDomGroup.appendChild(this.outputDomGroup);&#xD;&#xA;        // Inner Data&#xD;&#xA;        this.dataDomGroup = document.createElement('div');&#xD;&#xA;        this.dataDomGroup.classList.add('col-fixed-medium-1');&#xD;&#xA;        innerDomGroup.appendChild(this.dataDomGroup);&#xD;&#xA;        // Inputs&#xD;&#xA;        this.inputDomGroup = document.createElement('div');&#xD;&#xA;        this.inputDomGroup.classList.add('col-fixed-small-1');&#xD;&#xA;        innerDomGroup.appendChild(this.inputDomGroup);&#xD;&#xA;        //Node data&#xD;&#xA;        this.inputs = [];&#xD;&#xA;        this.data = [];&#xD;&#xA;        this.outputs = [];&#xD;&#xA;    }&#xD;&#xA;    StoryNode.prototype.addInput = function(name, inputType){&#xD;&#xA;        let input = new NodeInput(name, inputType);&#xD;&#xA;        input.node = this;&#xD;&#xA;        this.inputs.push(input);&#xD;&#xA;        this.inputDomGroup.appendChild(input.domElement);&#xD;&#xA;        return input;&#xD;&#xA;    };&#xD;&#xA;    StoryNode.prototype.addOutput = function(name, outputType){&#xD;&#xA;        let output = new NodeOutput(name, outputType);&#xD;&#xA;        output.node = this;&#xD;&#xA;        this.outputs.push(output);&#xD;&#xA;        this.outputDomGroup.appendChild(output.domElement);&#xD;&#xA;        return output;&#xD;&#xA;    };&#xD;&#xA;    StoryNode.prototype.addData = function(name, outputType){&#xD;&#xA;        let data = new NodeData(name, outputType);&#xD;&#xA;        data.node = this;&#xD;&#xA;        this.data.push(data);&#xD;&#xA;        this.dataDomGroup.appendChild(data.domElement);&#xD;&#xA;        return data;&#xD;&#xA;    };&#xD;&#xA;    StoryNode.prototype.ownsInput = function(input){&#xD;&#xA;        for(let i = 0; i < this.inputs.length; i++){&#xD;&#xA;            if(this.inputs[i] === input)&#xD;&#xA;                return true;&#xD;&#xA;        }&#xD;&#xA;        return false;&#xD;&#xA;    };&#xD;&#xA;    Node.prototype.ownsOutput = function(output){&#xD;&#xA;        for(let i = 0; i < this.outputs.length; i++){&#xD;&#xA;            if(this.outputs[i] === output)&#xD;&#xA;                return true;&#xD;&#xA;        }&#xD;&#xA;        return false;&#xD;&#xA;    };&#xD;&#xA;    StoryNode.prototype.detachAll = function(output){&#xD;&#xA;        for(let item of this.inputs){&#xD;&#xA;            if(item.output)&#xD;&#xA;                item.output.detachInput();&#xD;&#xA;        }&#xD;&#xA;        for(let item of this.outputs){&#xD;&#xA;            if(item.input)&#xD;&#xA;                item.detachInput();&#xD;&#xA;        }&#xD;&#xA;    };&#xD;&#xA;    StoryNode.prototype.updatePosition = function(){&#xD;&#xA;        for(let j = 0; j < this.outputs.length; j++){&#xD;&#xA;            if(this.outputs[j].input != null){&#xD;&#xA;                let oP = this.outputs[j].getOutputPoint();&#xD;&#xA;                let iP = this.outputs[j].input.getAttachPoint();&#xD;&#xA;                let pStr = this.createPath(iP, oP);&#xD;&#xA;                this.outputs[j].input.path.setAttributeNS(null, 'd', pStr);&#xD;&#xA;            }&#xD;&#xA;        }&#xD;&#xA;        for(let j = 0; j < this.inputs.length; j++){&#xD;&#xA;            if(this.inputs[j].output != null){&#xD;&#xA;                let iP = this.inputs[j].getAttachPoint();&#xD;&#xA;                let oP = this.inputs[j].output.getOutputPoint();&#xD;&#xA;                let pStr = this.createPath(iP, oP);&#xD;&#xA;                this.inputs[j].path.setAttributeNS(null, 'd', pStr);&#xD;&#xA;            }&#xD;&#xA;        }&#xD;&#xA;    };&#xD;&#xA;    StoryNode.prototype.createPath = function(a, b){&#xD;&#xA;        let diff = {&#xD;&#xA;            x: b.x - a.x,&#xD;&#xA;            y: b.y - a.y&#xD;&#xA;        };&#xD;&#xA;        let pathStr = 'M' + a.x + ',' + a.y + ' ';&#xD;&#xA;        pathStr += 'C';&#xD;&#xA;        pathStr += a.x + diff.x / 3 * 2 + ',' + a.y + ' ';&#xD;&#xA;        pathStr += a.x + diff.x / 3 + ',' + b.y + ' ';&#xD;&#xA;        pathStr += b.x + ',' + b.y;&#xD;&#xA;        return pathStr;&#xD;&#xA;    };&#xD;&#xA;    StoryNode.prototype.moveTo = function(point){&#xD;&#xA;        this.domElement.style.top = point.y + 'px';&#xD;&#xA;        this.domElement.style.left = point.x + 'px';&#xD;&#xA;        this.updatePosition();&#xD;&#xA;    };&#xD;&#xA;    StoryNode.prototype.initUI = function(){&#xD;&#xA;        let that = this;&#xD;&#xA;        // Make draggable&#xD;&#xA;        // noinspection JSValidateTypes&#xD;&#xA;        $(this.domElement).draggable({&#xD;&#xA;            containment: 'parent',&#xD;&#xA;            cancel: '.connection,.output,.data',&#xD;&#xA;            drag: function(event, ui){&#xD;&#xA;                that.updatePosition();&#xD;&#xA;            }&#xD;&#xA;        });&#xD;&#xA;        //Mak node design smaller as it holds no data inputs&#xD;&#xA;        if(this.data.length === 0) {&#xD;&#xA;            this.domElement.classList.remove('container-fixed');&#xD;&#xA;            this.domElement.classList.add('container-fixed-min');&#xD;&#xA;            this.dataDomGroup.classList.remove('col-fixed-medium-1');&#xD;&#xA;            this.dataDomGroup.classList.add('col-fixed-medium-1-min');&#xD;&#xA;        }&#xD;&#xA;        // Fix positioning&#xD;&#xA;        this.domElement.style.position = 'absolute';&#xD;&#xA;        document.body.appendChild(this.domElement);&#xD;&#xA;        // Update Visual&#xD;&#xA;        this.updatePosition();&#xD;&#xA;    };&#xD;&#xA;    // Node 1&#xD;&#xA;    let node = new StoryNode('Page');&#xD;&#xA;    // Move to initial positions&#xD;&#xA;    node.moveTo({x: 150, y: 20});&#xD;&#xA;    // Connect Nodes&#xD;&#xA;    // Add to DOM&#xD;&#xA;    node.initUI();