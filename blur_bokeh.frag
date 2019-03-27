uniform vec2 u_resolution;
uniform sampler2D u_tex0;

const int KERNEL_SIZE = 35;

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;

    vec4 color = vec4(0.0, 0.0, 0.0, 1.0);
    float weightSum = 0.0;
    for(int row=0; row<KERNEL_SIZE; ++row) {
        float uv2y = uv.y + float(row - KERNEL_SIZE/2)/u_resolution.y;
        for(int col=0; col<KERNEL_SIZE; ++col) {
            float uv2x = uv.x + float(col - KERNEL_SIZE/2)/u_resolution.x;
            vec2 uv2 = vec2(uv2x, uv2y);
            vec4 color2 = texture2D(u_tex0, uv2);
            float dist = distance(uv, uv2);
            float weight = 0.0;
            if(dist < float(KERNEL_SIZE/2) / u_resolution.x) {
                weight = 1.0;
                weightSum = weightSum + weight;
            }
            color = color + color2 * weight;
        }
    }
    if(weightSum > 0.0) {
        color = color / weightSum;
    }
    
    gl_FragColor = color;
}