uniform vec2 u_resolution;

const vec2 CENTER = vec2(0.5, 0.5);
const float RADIUS = 0.4;       // 0.5 means 'half of viewport width'

// Change coordinate 
vec2 adjustUVWithAspectRatio(vec2 uv, float aspectRatio) {
    vec2 uv2 = uv - CENTER;
    uv2.y = uv2.y / aspectRatio;
    return uv2 + CENTER;
}

void main() {
    float aspectRatio = u_resolution.x / u_resolution.y;

    vec2 uv = gl_FragCoord.xy / u_resolution;    
    
    vec2 uv2 = adjustUVWithAspectRatio(uv, aspectRatio);
    float distanceFromCenter = distance(uv2, CENTER);
    
    vec4 color;
    if(distanceFromCenter < RADIUS) {
        color = vec4(1.0, 1.0, 1.0, 1.0);
    } else {
        color = vec4(0.0, 0.0, 0.0, 1.0);
    }

    gl_FragColor = color;
}