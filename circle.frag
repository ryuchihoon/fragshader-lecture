uniform vec2 u_resolution;

const vec2 CENTER = vec2(0.5, 0.5);
const float RADIUS = 0.4;       // 0.5 means 'half of viewport width'

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;

    float distanceFromCenter = distance(uv, CENTER);
    vec4 color;
    if(distanceFromCenter < RADIUS) {
        color = vec4(1.0, 1.0, 1.0, 1.0);
    } else {
        color = vec4(0.0, 0.0, 0.0, 1.0);
    }

    gl_FragColor = color;
}