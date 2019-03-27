uniform vec2 u_resolution;
uniform sampler2D u_tex0;

const float ZOOM = 4.0;
const vec2 CENTER = vec2(0.5, 0.5);

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    vec2 uv2 = (uv - CENTER)/ZOOM + CENTER;
    vec4 color = texture2D(u_tex0, uv2);
    gl_FragColor = color;
}