# Fragment shader lecture

Learn basics of fragment shader

## References
- [OpenGL ES 2.0 cheat sheet](https://www.khronos.org/opengles/sdk/docs/reference_cards/OpenGL-ES-2_0-Reference-card.pdf)
- [The book of shaders](https://thebookofshaders.com/)
- [Khronos GLES SL official doc](https://www.khronos.org/files/opengles_shading_language.pdf)

## Prerequisites
- Install [glslviewer](https://github.com/patriciogonzalezvivo/glslViewer)

## Hello world`
Show red pixels

```glslviewer hellored.frag```

## Coordinates
Coordinates in pixel unit

```glslviewer coord_pixel.frag```

Normalized coordinates 

```glslviewer coord_normal.frag```

## Texture drawing

Fill the viewport with an image ignoring aspect ratio. 
> Note: glslviewer makes u_tex[N] samplers automatically.

```glslviewer img_fill.frag girl.jpg```

## Texture from image file

Textures read from filesystem are vertically flipped. Followings are to simulate that with glslviewer.

```glslviewer img_fill.frag -vFlip girl.jpg```

Flip it vertically using fragment shader code

```glslviewer img_vflip.frag -vFlip girl.jpg```

## Blending colors

Blend two images

```glslviewer blend_normal.frag girl.jpg girl2.jpg```

and enter following command into glslviewer's command line

```u_blendAlpha,0.5```

Or, use automated one
> Note: glslviewer reads commands from stdin

```./change_blend_alpha.sh | glslviewer blend_normal.frag girl.jpg girl2.jpg```

## Composition

2x2

```glslviewer two_by_two.frag girl.jpg girl2.jpg```

## Blur

Rotational blur

```glslviewer blur_rotation.frag girl.jpg```

and enter following command into glslviewer's command line

```u_rotationDegree,10.0```
