uniform vec2 u_resolution;
uniform sampler2D u_tex0;

const vec2 MOTION_DIRECTION = vec2(1.0, 0.0);
const float MOTION_COUNT = 30.0;

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;

    vec4 color = vec4(0.0, 0.0, 0.0, 0.0);

    for(int i=0; i<int(MOTION_COUNT); ++i) {
        vec2 uv2 = uv + MOTION_DIRECTION / u_resolution * float(i);
        vec4 c = texture2D(u_tex0, uv2);
        color = color + c / float(MOTION_COUNT);
    }

    gl_FragColor = color;
}