uniform vec2 u_resolution;
uniform sampler2D u_tex0;

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    vec4 color = texture2D(u_tex0, uv);
    gl_FragColor = color;
}