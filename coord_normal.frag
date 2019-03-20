uniform vec2 u_resolution;

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    vec4 color = vec4(0.0, 0.0, 0.0, 1.0);
    if( uv.x > 0.1 && uv.x < 0.12) {
        color = vec4(1.0, 0.0, 0.0, 1.0);
    }
    if( uv.x > 0.9 && uv.x < 0.92) {
        color = vec4(0.0, 1.0, 0.0, 1.0);
    }
    if( uv.y > 0.1 && uv.y < 0.12) {
        color = vec4(0.0, 0.0, 1.0, 1.0);
    }
    if( uv.y > 0.9 && uv.y < 0.92) {
        color = vec4(0.0, 1.0, 1.0, 1.0);
    }

    gl_FragColor = color;
}