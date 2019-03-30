uniform vec2 u_resolution;
uniform sampler2D u_tex0;

const float PI = 3.141592;
const float MAX_DISPLACEMENT = 0.15;

vec2 toZeroCentered(vec2 uv) {
    return (uv - 0.5)*2.0;
}

vec2 fromZeroCentered(vec2 uv2) {
    return uv2 / 2.0 + 0.5;
}

float offsetY(float y) {
    return -1.0 * MAX_DISPLACEMENT * (y + 1.0) * (y - 1.0) * sin(-1.0 * PI * y);
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    vec2 uv2 = toZeroCentered(uv);
    uv2.y = uv2.y + offsetY(uv2.y);
    vec4 color = texture2D(u_tex0, fromZeroCentered(uv2));
    gl_FragColor = color;
}
