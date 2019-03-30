uniform vec2 u_resolution;
uniform sampler2D u_tex0;
uniform sampler2D u_tex1;

vec3 blend_overlay(vec3 colorA, vec3 colorB) {
    return colorA * (colorA + 2.0*colorB*(1.0-colorA));
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    vec4 color0 = texture2D(u_tex0, uv);
    vec4 color1 = texture2D(u_tex1, uv);
    gl_FragColor = vec4(blend_overlay(color0.rgb, color1.rgb), 1.0);
}