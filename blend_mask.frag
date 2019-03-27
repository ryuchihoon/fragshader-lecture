uniform vec2 u_resolution;
uniform sampler2D u_tex0;
uniform sampler2D u_tex1;
uniform sampler2D u_tex2;

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    vec4 color0 = texture2D(u_tex0, uv);
    vec4 color1 = texture2D(u_tex1, uv);
    float mask  = texture2D(u_tex2, uv).r;
    gl_FragColor = mix(color0, color1, mask);
}