uniform vec2 u_resolution;
uniform sampler2D u_tex0;
uniform sampler2D u_tex1;

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;

    bool isLeft = uv.x < 0.5;
    bool isTop = uv.y > 0.5;

    vec2 uv2 = fract(uv * 2.0);

    vec4 color;
    if(isLeft ^^ isTop) {   // '^^' is 'logical exclusive OR'
        color = texture2D(u_tex0, uv2);
    } else {
        color = texture2D(u_tex1, uv2);
    }

    gl_FragColor = color;
}