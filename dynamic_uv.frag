uniform vec2 u_resolution;
uniform sampler2D u_tex0;
uniform sampler2D u_tex1;

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    vec2 uv2 = texture2D(u_tex1, uv).rg;
    vec4 color = texture2D(u_tex0, uv2);
    gl_FragColor = color;
}
