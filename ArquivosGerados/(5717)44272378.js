    jQuery(document).on('mousedown', '.bx_reposioned', function(evt) {&#xD;&#xA;      if (!Dragging) { //---prevents dragging conflicts on other draggable elements---&#xD;&#xA;        DragTarget = evt.target;&#xD;&#xA;        //---bring this viewPort to top---&#xD;&#xA;        var xcord = evt.clientX;&#xD;&#xA;        var ycord = evt.clientY;&#xD;&#xA;        OffsetX = xcord;&#xD;&#xA;        OffsetY = ycord;&#xD;&#xA;        Dragging = true;&#xD;&#xA;      }&#xD;&#xA;    });&#xD;&#xA;    jQuery(document).on('mousemove', '.bx_reposioned', function(evt) {&#xD;&#xA;      if (Dragging) {&#xD;&#xA;        //var pnt = DragTarget.ownerSVGElement.createSVGPoint();&#xD;&#xA;        var xcord = evt.clientX;&#xD;&#xA;        var ycord = evt.clientY;&#xD;&#xA;        xcord -= OffsetX;&#xD;&#xA;        ycord -= OffsetY;&#xD;&#xA;        jQuery(this).css('transform', 'translate(' + xcord + 'px, ' + ycord + 'px)');&#xD;&#xA;      }&#xD;&#xA;    });&#xD;&#xA;    jQuery(document).on('mouseup', '.bx_reposioned', function(evt) {&#xD;&#xA;      Dragging = false;&#xD;&#xA;      var xcord = evt.clientX;&#xD;&#xA;      var ycord = evt.clientY;&#xD;&#xA;    });