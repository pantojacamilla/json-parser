    var dot = {&#xD;&#xA;    Viewport: function(){&#xD;&#xA;        this.container;&#xD;&#xA;        if (this.container == null) {&#xD;&#xA;            var newContainer = document.createElement("div");&#xD;&#xA;                newContainer.style.width = window.innerWidth+"px";&#xD;&#xA;                newContainer.style.height = window.innerHeight+"px";&#xD;&#xA;                document.body.appendChild(newContainer);&#xD;&#xA;        }&#xD;&#xA;    }