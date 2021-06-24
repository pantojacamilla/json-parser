    // class ///////////&#xD;&#xA;    class PalabraInestable {&#xD;&#xA;      constructor(texto, posX, posY) {&#xD;&#xA;        this.texto = texto || "";&#xD;&#xA;        this.posX = posX || 0;&#xD;&#xA;        this.posY = posY || 0;&#xD;&#xA;        this.altoPalabra = 20;&#xD;&#xA;        this.anchoPalabra = 40;&#xD;&#xA;      }&#xD;&#xA;      // metodos ///////////////////////////////////////////////////////////////&#xD;&#xA;      pintaPalabraInestable() {&#xD;&#xA;        ctx.fillText(this.texto, this.posX, this.posY);&#xD;&#xA;      }&#xD;&#xA;      tickle() {&#xD;&#xA;        this.posX += Math.random() * 5 - 3; // un número aleatorio entre -5 y 5&#xD;&#xA;        this.posY += Math.random() * 5 - 3; // un número aleatorio entre -5 y 5&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    //variables universales ----------------------------------------------------------&#xD;&#xA;    // posiciones iniciales del texto total&#xD;&#xA;    var x = 100;&#xD;&#xA;    var y = 200;&#xD;&#xA;    delay = 100;&#xD;&#xA;    // palabra objeto prueba&#xD;&#xA;    var palInst = new PalabraInestable();&#xD;&#xA;    //////////////////////////////////////////////////////////////////////////////////&#xD;&#xA;    function init() { // setup() mas o menos&#xD;&#xA;      // configuracion del canvas &#xD;&#xA;      canvas = document.getElementById("papel");&#xD;&#xA;      ctx = canvas.getContext("2d");&#xD;&#xA;      ctx.font = " 45px Amatic SC "; // para todo el canvas&#xD;&#xA;      ctx.textAlign = "left";&#xD;&#xA;      ctx.textBaseline = "middle";&#xD;&#xA;      palInst.texto = "palabra inestable";&#xD;&#xA;      palInst.posX = 100;&#xD;&#xA;      palInst.posY = 100;&#xD;&#xA;      // eventos de raton LLAMADAS A FUNCIONES &#xD;&#xA;      canvas.addEventListener('mousemove', mouseMove, false);&#xD;&#xA;      //canvas.addEventListener('mousedown', mouseDown, false);&#xD;&#xA;      //canvas.addEventListener('mouseup',   mouseUp,   false);&#xD;&#xA;      //canvas.addEventListener('mouseout',  mouseUp,  false);  &#xD;&#xA;      //canvas.addEventListener('dblclick', doubleClick, false); &#xD;&#xA;      setInterval(draw, delay); // llama al draw() y fija fotogramas &#xD;&#xA;    } // fin de init ---------------------------------------------------------&#xD;&#xA;    function draw() {&#xD;&#xA;      ctx.clearRect(0, 0, canvas.width, canvas.height);&#xD;&#xA;      ctx.save();&#xD;&#xA;      // aqui el follon  &#xD;&#xA;      palInst.pintaPalabraInestable();&#xD;&#xA;      //  restaura el canvas salvado&#xD;&#xA;      ctx.restore();&#xD;&#xA;      requestAnimationFrame(draw); // llamada recursiva al draw&#xD;&#xA;    }&#xD;&#xA;    requestAnimationFrame(draw); // ejecucion del draw&#xD;&#xA;    /**/&#xD;&#xA;    // funciones ========================================================================&#xD;&#xA;    // ensayo mousemove -------------------------------------------------------------------&#xD;&#xA;    function mouseMove(evento, palInst) {&#xD;&#xA;      let mouseX = getMousePosX(canvas, evento);&#xD;&#xA;      let mouseY = getMousePosY(canvas, evento);&#xD;&#xA;      // If mouse is over the word&#xD;&#xA;      if (contains(mouseX, mouseY, palInst)) {&#xD;&#xA;        palInst.tickle(); //     &#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    // mouse position separated to be clear -----------------------------------------&#xD;&#xA;    function getMousePosX(canvas, evento) {&#xD;&#xA;      let ClientRect = canvas.getBoundingClientRect();&#xD;&#xA;      //console.log("entra en getmouse pos x");&#xD;&#xA;      // devuelve un objeto con las coordenadas x e y&#xD;&#xA;      return Math.round(evento.clientX - ClientRect.left);&#xD;&#xA;    }&#xD;&#xA;    function getMousePosY(canvas, evento) {&#xD;&#xA;      let ClientRect = canvas.getBoundingClientRect();&#xD;&#xA;      // devuelve un objeto con las coordenadas  y       &#xD;&#xA;      return Math.round(evento.clientY - ClientRect.top);&#xD;&#xA;    } //------------------------------------------------------------------------------&#xD;&#xA;    // funcion para verificar que pinchamos dentro de un objeto&#xD;&#xA;    function contains(mouseX, mouseY, palInst) {&#xD;&#xA;      if ((palInst.posX <= mouseX) && (palInst.posX + palInst.anchoPalabra >= mouseX) && (palInst.posY <= mouseY) && (palInst.posY + palInst.altoPalabra >= mouseY)) {&#xD;&#xA;        return true;&#xD;&#xA;      } else {&#xD;&#xA;        return false;&#xD;&#xA;      }&#xD;&#xA;    }