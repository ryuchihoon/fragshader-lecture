uniform vec2 u_resolution;
uniform sampler2D u_tex0;
uniform float u_rotationDegree;             // degree. minus value allowed.

const vec2 CENTER = vec2(0.5, 0.5);
const float ROTATION_UNIT_ANGLE = 0.3 * (2.0*3.141592/360.0); // radian

const float ROTATION_DEGREE_LIMIT = 45.0;

vec2 toRotational(vec2 xy) {
    vec2 posFromCenter = xy - CENTER;
    float r = length(posFromCenter);
    float theta = atan(posFromCenter.y, posFromCenter.x);
    return vec2(r, theta);
}

vec2 fromRotational(vec2 rt) {
    float x = cos(rt.y)*rt.x;
    float y = sin(rt.y)*rt.x;
    return vec2(x, y) + CENTER;
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;

    vec2 uvRotational = toRotational(uv);
    vec4 color = texture2D(u_tex0, uv);

    float rotationDegree = u_rotationDegree;
    float rotationSign = sign(u_rotationDegree);
    if(abs(u_rotationDegree) > ROTATION_DEGREE_LIMIT) {
        rotationDegree = rotationSign * ROTATION_DEGREE_LIMIT;
    }

    int ROTATION_UNIT_COUNT = int(radians(abs(rotationDegree)) / ROTATION_UNIT_ANGLE);

    if(rotationSign != 0.0 && ROTATION_UNIT_COUNT > 1) {
        color = color / float(ROTATION_UNIT_COUNT);

        for(int i=1; i<ROTATION_UNIT_COUNT; ++i) {
            vec2 uvR = uvRotational + rotationSign * vec2(0.0, ROTATION_UNIT_ANGLE * float(i));
            vec4 c = texture2D(u_tex0, fromRotational(uvR));
            color = color + c / float(ROTATION_UNIT_COUNT);
        }
    }

    gl_FragColor = color;
}