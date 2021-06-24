    var target;&#xD;&#xA;    const imageUrl = "https://i.imgur.com/RzEm1WK.png";&#xD;&#xA;    let jsonData = {&#xD;&#xA;        "layers": [{&#xD;&#xA;            "x": 0,&#xD;&#xA;            "height": 612,&#xD;&#xA;            "layers": [{&#xD;&#xA;                    "x": 160,&#xD;&#xA;                    "src": "ax0HVTs.png",&#xD;&#xA;                    "y": 291,&#xD;&#xA;                    "height": 296,&#xD;&#xA;                    "width": 429,&#xD;&#xA;                    "name": "mask_1"&#xD;&#xA;                },&#xD;&#xA;                {&#xD;&#xA;                    "x": 25,&#xD;&#xA;                    "src": "hEM2kEP.png",&#xD;&#xA;                    "height": 324,&#xD;&#xA;                    "width": 471,&#xD;&#xA;                    "y": 22,&#xD;&#xA;                    "name": "mask_2"&#xD;&#xA;                }&#xD;&#xA;            ],&#xD;&#xA;            "y": 0,&#xD;&#xA;            "width": 612&#xD;&#xA;        }]&#xD;&#xA;    };&#xD;&#xA;    const containerElement = $('#container');&#xD;&#xA;    const fileUp = $('#fileup');&#xD;&#xA;    $(function() {&#xD;&#xA;        // Upload image onclick mask image &#xD;&#xA;        containerElement.click(function(e) {&#xD;&#xA;            var res = e.target;&#xD;&#xA;            target = res.id;&#xD;&#xA;            console.log(target);&#xD;&#xA;            if (e.target.getContext) {&#xD;&#xA;                // click only inside Non Transparent part&#xD;&#xA;                var pixel = e.target.getContext('2d').getImageData(e.offsetX, e.offsetY, 1, 1).data;&#xD;&#xA;                if (pixel[3] === 255) {&#xD;&#xA;                    setTimeout(() => {&#xD;&#xA;                        $('#fileup').click();&#xD;&#xA;                    }, 20);&#xD;&#xA;                }&#xD;&#xA;            }&#xD;&#xA;        });&#xD;&#xA;        // Fetch mask images from json file - IGNORE this code&#xD;&#xA;        function getAllSrc(layers) {&#xD;&#xA;            let arr = [];&#xD;&#xA;            layers.forEach(layer => {&#xD;&#xA;                if (layer.src) {&#xD;&#xA;                    arr.push({&#xD;&#xA;                        src: layer.src,&#xD;&#xA;                        x: layer.x,&#xD;&#xA;                        y: layer.y,&#xD;&#xA;                        height: layer.height,&#xD;&#xA;                        width: layer.width,&#xD;&#xA;                        name: layer.name&#xD;&#xA;                    });&#xD;&#xA;                } else if (layer.layers) {&#xD;&#xA;                    let newArr = getAllSrc(layer.layers);&#xD;&#xA;                    if (newArr.length > 0) {&#xD;&#xA;                        newArr.forEach(({&#xD;&#xA;                            src,&#xD;&#xA;                            x,&#xD;&#xA;                            y,&#xD;&#xA;                            height,&#xD;&#xA;                            width,&#xD;&#xA;                            name&#xD;&#xA;                        }) => {&#xD;&#xA;                            arr.push({&#xD;&#xA;                                src,&#xD;&#xA;                                x: (layer.x + x),&#xD;&#xA;                                y: (layer.y + y),&#xD;&#xA;                                height,&#xD;&#xA;                                width,&#xD;&#xA;                                name: (name)&#xD;&#xA;                            });&#xD;&#xA;                        });&#xD;&#xA;                    }&#xD;&#xA;                }&#xD;&#xA;            });&#xD;&#xA;            return arr;&#xD;&#xA;        }&#xD;&#xA;        function json(data)&#xD;&#xA;        {&#xD;&#xA;            var width = 0;&#xD;&#xA;            var height = 0;&#xD;&#xA;            let arr = getAllSrc(data.layers);&#xD;&#xA;            let layer1 = data.layers;&#xD;&#xA;            width = layer1[0].width;&#xD;&#xA;            height = layer1[0].height;&#xD;&#xA;            let counter = 0;&#xD;&#xA;            let table = [];&#xD;&#xA;            // container dimensions&#xD;&#xA;            containerElement.css('width', width + "px").css('height', height + "px").addClass('temp');&#xD;&#xA;            //end&#xD;&#xA;            for (let {&#xD;&#xA;                    src,&#xD;&#xA;                    x,&#xD;&#xA;                    y,&#xD;&#xA;                    name&#xD;&#xA;                } of arr) {&#xD;&#xA;                //Get Height and width of mask image [ edit button ]&#xD;&#xA;                var ImagePosition = arr;&#xD;&#xA;                //code end&#xD;&#xA;                var mask = $(".container").mask({&#xD;&#xA;                    imageUrl: imageUrl,&#xD;&#xA;                    // Fetch Mask images&#xD;&#xA;                    maskImageUrl: 'https://i.imgur.com/' + src,&#xD;&#xA;                    // end&#xD;&#xA;                    onMaskImageCreate: function(img) {&#xD;&#xA;                        // Mask image positions&#xD;&#xA;                        img.css({&#xD;&#xA;                            "position": "absolute",&#xD;&#xA;                            "left": x + "px",&#xD;&#xA;                            "top": y + "px"&#xD;&#xA;                        });&#xD;&#xA;                        // end&#xD;&#xA;                    },&#xD;&#xA;                    id: counter&#xD;&#xA;                });&#xD;&#xA;                table.push(mask);&#xD;&#xA;                fileup.onchange = function() {&#xD;&#xA;                    let mask2 = table[target];&#xD;&#xA;                    const newImageLoadedId = mask2.loadImage(URL.createObjectURL(fileup.files[0]));&#xD;&#xA;                    document.getElementById('fileup').value = "";                          &#xD;&#xA;                };&#xD;&#xA;                counter++;&#xD;&#xA;            }&#xD;&#xA;        }&#xD;&#xA;        json(jsonData);&#xD;&#xA;    }); // end of function&#xD;&#xA;    // Image code&#xD;&#xA;    (function($) {&#xD;&#xA;        var JQmasks = [];&#xD;&#xA;        $.fn.mask = function(options) {&#xD;&#xA;            // This is the easiest way to have default options.&#xD;&#xA;            var settings = $.extend({&#xD;&#xA;                // These are the defaults.&#xD;&#xA;                maskImageUrl: undefined,&#xD;&#xA;                imageUrl: undefined,&#xD;&#xA;                scale: 1,&#xD;&#xA;                id: new Date().getUTCMilliseconds().toString(),&#xD;&#xA;                x: 0, // image start position&#xD;&#xA;                y: 0, // image start position&#xD;&#xA;                onMaskImageCreate: function(div) {},&#xD;&#xA;            }, options);&#xD;&#xA;            var container = $(this);&#xD;&#xA;            let prevX = 0,&#xD;&#xA;                prevY = 0,&#xD;&#xA;                draggable = false,&#xD;&#xA;                img,&#xD;&#xA;                canvas,&#xD;&#xA;                context,&#xD;&#xA;                image,&#xD;&#xA;                timeout,&#xD;&#xA;                initImage = false,&#xD;&#xA;                startX = settings.x,&#xD;&#xA;                startY = settings.y,&#xD;&#xA;                div;&#xD;&#xA;            container.mousePosition = function(event) {&#xD;&#xA;                return {&#xD;&#xA;                    x: event.pageX || event.offsetX,&#xD;&#xA;                    y: event.pageY || event.offsetY&#xD;&#xA;                };&#xD;&#xA;            }&#xD;&#xA;            container.selected = function(ev) {&#xD;&#xA;                var pos = container.mousePosition(ev);&#xD;&#xA;                var item = $(".masked-img canvas").filter(function() {&#xD;&#xA;                    var offset = $(this).offset()&#xD;&#xA;                    var x = pos.x - offset.left;&#xD;&#xA;                    var y = pos.y - offset.top;&#xD;&#xA;                    var d = this.getContext('2d').getImageData(x, y, 1, 1).data;&#xD;&#xA;                    return d[0] > 0&#xD;&#xA;                });&#xD;&#xA;                JQmasks.forEach(function(el) {&#xD;&#xA;                    var id = item.length > 0 ? $(item).attr("id") : "";&#xD;&#xA;                    if (el.id == id)&#xD;&#xA;                        el.item.enable();&#xD;&#xA;                    else el.item.disable();&#xD;&#xA;                });&#xD;&#xA;            };&#xD;&#xA;            container.enable = function() {&#xD;&#xA;                draggable = true;&#xD;&#xA;                $(canvas).attr("active", "true");&#xD;&#xA;                div.css({&#xD;&#xA;                    "z-index": 2&#xD;&#xA;                });&#xD;&#xA;            }&#xD;&#xA;            container.disable = function() {&#xD;&#xA;                draggable = false;&#xD;&#xA;                $(canvas).attr("active", "false");&#xD;&#xA;                div.css({&#xD;&#xA;                    "z-index": 1&#xD;&#xA;                });&#xD;&#xA;            }&#xD;&#xA;            container.getImagePosition = function() {&#xD;&#xA;                return {&#xD;&#xA;                    x: settings.x,&#xD;&#xA;                    y: settings.y,&#xD;&#xA;                    scale: settings.scale&#xD;&#xA;                };&#xD;&#xA;            };&#xD;&#xA;            // Drag uploaded image&#xD;&#xA;            container.onDragStart = function(evt) {&#xD;&#xA;                if (evt.target.getContext) {&#xD;&#xA;                    var pixel = evt.target.getContext('2d').getImageData(evt.offsetX, evt.offsetY, 1, 1).data;&#xD;&#xA;                    $(canvas).attr("active", "true");&#xD;&#xA;                    container.selected(evt);&#xD;&#xA;                    prevX = evt.clientX;&#xD;&#xA;                    prevY = evt.clientY;&#xD;&#xA;                    var img = new Image();&#xD;&#xA;                    evt.originalEvent.dataTransfer.setDragImage(img, 10, 10);&#xD;&#xA;                    evt.originalEvent.dataTransfer.setData('text/plain', 'anything');&#xD;&#xA;                }&#xD;&#xA;            };&#xD;&#xA;            container.onDragOver = function(evt) {&#xD;&#xA;                if (evt.target.getContext) {&#xD;&#xA;                    var pixel = evt.target.getContext('2d').getImageData(evt.offsetX, evt.offsetY, 1, 1).data;&#xD;&#xA;                    if (pixel[3] === 255) {&#xD;&#xA;                        if (draggable && $(canvas).attr("active") === "true") {&#xD;&#xA;                            var x = settings.x + evt.clientX - prevX;&#xD;&#xA;                            var y = settings.y + evt.clientY - prevY;&#xD;&#xA;                            if (x == settings.x && y == settings.y)&#xD;&#xA;                                return; // position has not changed&#xD;&#xA;                            settings.x += evt.clientX - prevX;&#xD;&#xA;                            settings.y += evt.clientY - prevY;&#xD;&#xA;                            prevX = evt.clientX;&#xD;&#xA;                            prevY = evt.clientY;&#xD;&#xA;                            clearTimeout(timeout);&#xD;&#xA;                            timeout = setTimeout(function() {&#xD;&#xA;                                container.updateStyle();&#xD;&#xA;                                renderInnerImage();&#xD;&#xA;                            }, 20);&#xD;&#xA;                        }&#xD;&#xA;                    } else {&#xD;&#xA;                        evt.stopPropagation();&#xD;&#xA;                        return false;&#xD;&#xA;                    }&#xD;&#xA;                }&#xD;&#xA;            };&#xD;&#xA;            // end&#xD;&#xA;            container.updateStyle = function() {&#xD;&#xA;                return new Promise((resolve, reject) => {&#xD;&#xA;                    context.beginPath();&#xD;&#xA;                    context.globalCompositeOperation = "source-over";&#xD;&#xA;                    image = new Image();&#xD;&#xA;                    image.setAttribute('crossOrigin', 'anonymous');&#xD;&#xA;                    image.src = settings.maskImageUrl;&#xD;&#xA;                    image.onload = function() {&#xD;&#xA;                        canvas.width = image.width;&#xD;&#xA;                        canvas.height = image.height;&#xD;&#xA;                        context.drawImage(image, 0, 0, image.width, image.height);&#xD;&#xA;                        div.css({&#xD;&#xA;                            "width": image.width,&#xD;&#xA;                            "height": image.height&#xD;&#xA;                        });&#xD;&#xA;                        resolve();&#xD;&#xA;                    };&#xD;&#xA;                });&#xD;&#xA;            };&#xD;&#xA;            function renderInnerImage() {&#xD;&#xA;                img = new Image();&#xD;&#xA;                img.setAttribute('crossOrigin', 'anonymous');&#xD;&#xA;                img.src = settings.imageUrl;&#xD;&#xA;                img.onload = function() {&#xD;&#xA;                    settings.x = settings.x == 0 && initImage ? (canvas.width - (img.width * settings.scale)) / 2 : settings.x;&#xD;&#xA;                    settings.y = settings.y == 0 && initImage ? (canvas.height - (img.height * settings.scale)) / 2 : settings.y;&#xD;&#xA;                    context.globalCompositeOperation = 'source-atop';&#xD;&#xA;                    context.drawImage(img, settings.x, settings.y, img.width * settings.scale, img.height * settings.scale);&#xD;&#xA;                    initImage = false;&#xD;&#xA;                };&#xD;&#xA;            }&#xD;&#xA;            // change the draggable image&#xD;&#xA;            container.loadImage = function(imageUrl) {&#xD;&#xA;                console.log("load");&#xD;&#xA;                settings.y = startY;&#xD;&#xA;                settings.x = startX;&#xD;&#xA;                prevX = prevY = 0;&#xD;&#xA;                settings.imageUrl = imageUrl;&#xD;&#xA;                initImage = true;&#xD;&#xA;                container.updateStyle().then(renderInnerImage);&#xD;&#xA;                // sirpepole  Add this&#xD;&#xA;                return settings.id;&#xD;&#xA;            };&#xD;&#xA;            container.loadMaskImage = function(imageUrl, from) {&#xD;&#xA;                canvas = document.createElement("canvas");&#xD;&#xA;                context = canvas.getContext('2d');&#xD;&#xA;                canvas.setAttribute("draggable", "true");&#xD;&#xA;                canvas.setAttribute("id", settings.id);&#xD;&#xA;                settings.maskImageUrl = imageUrl;&#xD;&#xA;                div = $("<div/>", {&#xD;&#xA;                    "class": "masked-img"&#xD;&#xA;                }).append(canvas);&#xD;&#xA;                // div.find("canvas").on('touchstart mousedown', function(event)&#xD;&#xA;                div.find("canvas").on('dragstart', function(event) {&#xD;&#xA;                    if (event.handled === false) return;&#xD;&#xA;                    event.handled = true;&#xD;&#xA;                    container.onDragStart(event);&#xD;&#xA;                });&#xD;&#xA;                div.find("canvas").on('touchend mouseup', function(event) {&#xD;&#xA;                    if (event.handled === false) return;&#xD;&#xA;                    event.handled = true;&#xD;&#xA;                    container.selected(event);&#xD;&#xA;                });&#xD;&#xA;                div.find("canvas").bind("dragover", container.onDragOver);&#xD;&#xA;                container.append(div);&#xD;&#xA;                if (settings.onMaskImageCreate)&#xD;&#xA;                    settings.onMaskImageCreate(div);&#xD;&#xA;                container.loadImage(settings.imageUrl);&#xD;&#xA;            };&#xD;&#xA;            container.loadMaskImage(settings.maskImageUrl);&#xD;&#xA;            JQmasks.push({&#xD;&#xA;                item: container,&#xD;&#xA;                id: settings.id&#xD;&#xA;            })&#xD;&#xA;            // Edit image&#xD;&#xA;            div.addClass('masked-img' + settings.id);&#xD;&#xA;            // end&#xD;&#xA;            return container;&#xD;&#xA;        };&#xD;&#xA;    }(jQuery));