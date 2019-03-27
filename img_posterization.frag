uniform vec2 u_resolution;
uniform sampler2D u_tex0;

const float LEVELS = 6.0;

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    vec4 color = texture2D(u_tex0, uv);

    // to gray scale
    float brightness = dot( vec3(0.2126, 0.7152, 0.0722), color.rgb );
    vec3 color2 = vec3(brightness, brightness, brightness);

    // reduce 256 steps to LEVELS steps
    color2 = floor( color2 * LEVELS ) / LEVELS;

    gl_FragColor.rgb = color2;
}
