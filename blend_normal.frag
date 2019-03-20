uniform vec2 u_resolution;
uniform sampler2D u_tex0;
uniform sampler2D u_tex1;
uniform float u_blendAlpha;

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    vec4 color0 = texture2D(u_tex0, uv);
    vec4 color1 = texture2D(u_tex1, uv);
    gl_FragColor = mix(color0, color1, u_blendAlpha);
}