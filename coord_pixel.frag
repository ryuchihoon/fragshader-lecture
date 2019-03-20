uniform vec2 u_resolution;

void main() {
    vec4 color = vec4(0.0, 0.0, 0.0, 1.0);
    if( gl_FragCoord.x > 10.0 && gl_FragCoord.x < 12.0) {
        color = vec4(1.0, 0.0, 0.0, 1.0);
    }
    if( gl_FragCoord.x > u_resolution.x-12.0 && gl_FragCoord.x < u_resolution.x-10.0) {
        color = vec4(0.0, 1.0, 0.0, 1.0);
    }
    if( gl_FragCoord.y > 10.0 && gl_FragCoord.y < 12.0) {
        color = vec4(0.0, 0.0, 1.0, 1.0);
    }
    if( gl_FragCoord.y > u_resolution.y-12.0 && gl_FragCoord.y < u_resolution.y-10.0) {
        color = vec4(0.0, 1.0, 1.0, 1.0);
    }

     gl_FragColor = color;
}