    input.form,&#xD;&#xA;    button {&#xD;&#xA;      font-family: 'Roboto Slab', serif;&#xD;&#xA;      font-weight: 300;&#xD;&#xA;      font-size: 16px;&#xD;&#xA;      border: 0;&#xD;&#xA;      padding: 3px 5px;&#xD;&#xA;      border-radius: 3px;&#xD;&#xA;      color: #000;&#xD;&#xA;    }&#xD;&#xA;    .animation {&#xD;&#xA;      -webkit-transition: all 0.3s ease;&#xD;&#xA;      -moz-transition: all 0.3s ease;&#xD;&#xA;      -ms-transition: all 0.3s ease;&#xD;&#xA;      -o-transition: all 0.3s ease;&#xD;&#xA;      transition: all 0.3s ease;&#xD;&#xA;    }&#xD;&#xA;    .card-container{&#xD;&#xA;      position: relative;&#xD;&#xA;      float: left;&#xD;&#xA;      width: 48%;&#xD;&#xA;      height: 260px;&#xD;&#xA;      margin: 30px 0 30px 4%;&#xD;&#xA;      background: #fff;&#xD;&#xA;      &#xD;&#xA;      /* Set the depth of the elements */&#xD;&#xA;      -webkit-perspective: 800px;&#xD;&#xA;      -moz-perspective: 800px;&#xD;&#xA;      -o-perspective: 800px;&#xD;&#xA;      perspective: 800px;&#xD;&#xA;    }&#xD;&#xA;    .card-container:first-child {&#xD;&#xA;      margin-left: 0;&#xD;&#xA;    }&#xD;&#xA;    .card {&#xD;&#xA;      width: 100%;&#xD;&#xA;      height: 100%;&#xD;&#xA;      position: absolute;&#xD;&#xA;      cursor: pointer;&#xD;&#xA;      &#xD;&#xA;      /* Set the transition effects */&#xD;&#xA;      -webkit-transition: -webkit-transform 0.4s;&#xD;&#xA;      -moz-transition: -moz-transform 0.4s;&#xD;&#xA;      -o-transition: -o-transform 0.4s;&#xD;&#xA;      transition: transform 0.4s;&#xD;&#xA;      -webkit-transform-style: preserve-3d;&#xD;&#xA;      -moz-transform-style: preserve-3d;&#xD;&#xA;      -o-transform-style: preserve-3d;&#xD;&#xA;      transform-style: preserve-3d;&#xD;&#xA;    }&#xD;&#xA;    .card.flipped {&#xD;&#xA;      -webkit-transform: rotateY( 180deg );&#xD;&#xA;      -moz-transform: rotateY( 180deg );&#xD;&#xA;      -o-transform: rotateY( 180deg );&#xD;&#xA;      transform: rotateY( 180deg );&#xD;&#xA;    }&#xD;&#xA;    .card .front,&#xD;&#xA;    .card .back {&#xD;&#xA;      display: block;&#xD;&#xA;      height: 100%;&#xD;&#xA;      width: 100%;&#xD;&#xA;      line-height: 260px;&#xD;&#xA;      color: white;&#xD;&#xA;      text-align: center;&#xD;&#xA;      position: absolute;&#xD;&#xA;      -webkit-backface-visibility: hidden;&#xD;&#xA;      -moz-backface-visibility: hidden;&#xD;&#xA;      -o-backface-visibility: hidden;&#xD;&#xA;      backface-visibility: hidden;&#xD;&#xA;      &#xD;&#xA;      box-shadow: 3px 5px 20px 2px rgba(0, 0, 0, 0.25);&#xD;&#xA;    }&#xD;&#xA;    .card .back {&#xD;&#xA;      width: 100%;&#xD;&#xA;      padding-left: 3%;&#xD;&#xA;      padding-right: 3%;&#xD;&#xA;      font-size: 16px;&#xD;&#xA;      text-align: left;&#xD;&#xA;      line-height: 25px;&#xD;&#xA;    }&#xD;&#xA;    .formItem:first-child {&#xD;&#xA;      margin-top: 20px;&#xD;&#xA;    }&#xD;&#xA;    .card .back label {&#xD;&#xA;      display: inline-block;&#xD;&#xA;      width: 70px;&#xD;&#xA;      text-align: left;&#xD;&#xA;    }&#xD;&#xA;    .card .front {&#xD;&#xA;      background: #000000;&#xD;&#xA;    }&#xD;&#xA;    .card .back {&#xD;&#xA;      background: #8bc34a;&#xD;&#xA;      -webkit-transform: rotateY( 180deg );&#xD;&#xA;      -moz-transform: rotateY( 180deg );&#xD;&#xA;      -o-transform: rotateY( 180deg );&#xD;&#xA;      transform: rotateY( 180deg );&#xD;&#xA;    }&#xD;&#xA;    .card-container:first-child .card .front {&#xD;&#xA;      background: #000000;&#xD;&#xA;    }&#xD;&#xA;    .card-container:first-child .card .back {&#xD;&#xA;      background: #8bc34a;&#xD;&#xA;    }&#xD;&#xA;    .cardTitle {&#xD;&#xA;      font-size: 1.4em;&#xD;&#xA;      line-height: 1.2em;&#xD;&#xA;      margin: 0;&#xD;&#xA;    }&#xD;&#xA;    .content {&#xD;&#xA;      padding: 4%;&#xD;&#xA;      font-weight: 100;&#xD;&#xA;      text-align: left;&#xD;&#xA;    }&#xD;&#xA;    button.btnSend {&#xD;&#xA;      display: inline-block;&#xD;&#xA;      min-width: 100px;&#xD;&#xA;      padding: 3px 5px;&#xD;&#xA;      margin-top: 10px;&#xD;&#xA;      font-weight: bold;&#xD;&#xA;      text-transform: uppercase;&#xD;&#xA;      text-align: center;&#xD;&#xA;      color: #8bc34a;&#xD;&#xA;      background: #fff;&#xD;&#xA;      border: 0;&#xD;&#xA;      border-radius: 0;&#xD;&#xA;    }