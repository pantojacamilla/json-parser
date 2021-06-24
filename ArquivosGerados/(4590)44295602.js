    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/85/three.js"></script>&#xD;&#xA;    <script type="x-shader/x-vertex" id="vertshader">&#xD;&#xA;        uniform float uTime;&#xD;&#xA;        uniform vec2 uResolution;&#xD;&#xA;        varying vec2 vUv; &#xD;&#xA;        &#xD;&#xA;        void main() {&#xD;&#xA;            vUv = uv;&#xD;&#xA;            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0 );&#xD;&#xA;            gl_Position = projectionMatrix * mvPosition;&#xD;&#xA;        }&#xD;&#xA;    </script>&#xD;&#xA;    <script type="x-shader/x-fragment" id="fragshader">&#xD;&#xA;        &#xD;&#xA;        uniform float uTime;&#xD;&#xA;        uniform vec2 uResolution;&#xD;&#xA;        varying vec2 vUv;&#xD;&#xA;        float f = 0.15, r = 0.4, h=0.5;&#xD;&#xA;        void main() {&#xD;&#xA;            vec2 uvCustom = -1.0 + 2.0 *vUv;&#xD;&#xA;            vec2 ak = abs(gl_FragCoord.xy / uvCustom.xy-0.5);&#xD;&#xA;            // vec2 uv = gl_FragCoord.xy / uResolution.y;&#xD;&#xA;            // vec2 ak = abs(gl_FragCoord.xy / uResolution.xy-0.5);&#xD;&#xA;            float g = 1.0/1.618033988749;&#xD;&#xA;            float t = uTime * 0.7 + fract(sin(uvCustom.x+1.0))*2.0;&#xD;&#xA;            float e = 1.0 + sin(uvCustom.x*3.0)*2.6;&#xD;&#xA;            float k =  cos(t - e) + 2.0;&#xD;&#xA;            vec4 tmp  = vec4( abs( sin(t + cos(0.5 * t + (uvCustom.x+t*0.001) * k) ) ));&#xD;&#xA;            float m = sin(uTime*0.37);&#xD;&#xA;            if (m > .0) {&#xD;&#xA;                if(uvCustom.y > h){&#xD;&#xA;                    tmp = vec4( abs( cos(t + sin(0.5 * t + (uvCustom.x+t*0.001) * k) ) ));&#xD;&#xA;                }&#xD;&#xA;            }   &#xD;&#xA;            gl_FragColor  = tmp * smoothstep(ak.x,ak.x+f,r) * smoothstep(ak.y,ak.y+f,r); &#xD;&#xA;            if (m < .0) {&#xD;&#xA;                if (uvCustom.x>1.0) gl_FragColor  = 1.0 - gl_FragColor ;&#xD;&#xA;            }&#xD;&#xA;        }&#xD;&#xA;    &#xD;&#xA;    </script>