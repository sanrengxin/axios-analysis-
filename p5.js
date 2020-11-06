
/*! p5.js v1.2.0 December 19, 2020 */
(function(f) {
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = f();
  } else if (typeof define === 'function' && define.amd) {
    define([], f);
  } else {
    var g;
    if (typeof window !== 'undefined') {
      g = window;
    } else if (typeof global !== 'undefined') {
      g = global;
    } else if (typeof self !== 'undefined') {
      g = self;
    } else {
      g = this;
    }
    g.p5 = f();
  }
})(function() {
  var define, module, exports;
  return (function() {
    function r(e, n, t) {
      function o(i, f) {
        if (!n[i]) {
          if (!e[i]) {
            var c = 'function' == typeof require && require;
            if (!f && c) return c(i, !0);
            if (u) return u(i, !0);
            var a = new Error("Cannot find module '" + i + "'");
            throw ((a.code = 'MODULE_NOT_FOUND'), a);
          }
          var p = (n[i] = { exports: {} });
          e[i][0].call(
            p.exports,
            function(r) {
              var n = e[i][1][r];
              return o(n || r);
            },
            p,
            p.exports,
            r,
            e,
            n,
            t
          );
        }
        return n[i].exports;
      }
      for (var u = 'function' == typeof require && require, i = 0; i < t.length; i++)
        o(t[i]);
      return o;
    }
    return r;
  })()(
    {
      1: [
        function(_dereq_, module, exports) {
          module.exports = {
            p5: {
              describe: {
                name: 'describe',
                params: [
                  {
                    name: 'text',
                    description: '<p>description of the canvas</p>\n',
                    type: 'String'
                  },
                  {
                    name: 'display',
                    description: '<p>either LABEL or FALLBACK (Optional)</p>\n',
                    type: 'Constant',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Environment'
              },
              describeElement: {
                name: 'describeElement',
                params: [
                  {
                    name: 'name',
                    description: '<p>name of the element</p>\n',
                    type: 'String'
                  },
                  {
                    name: 'text',
                    description: '<p>description of the element</p>\n',
                    type: 'String'
                  },
                  {
                    name: 'display',
                    description: '<p>either LABEL or FALLBACK (Optional)</p>\n',
                    type: 'Constant',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Environment'
              },
              textOutput: {
                name: 'textOutput',
                params: [
                  {
                    name: 'display',
                    description: '<p>either FALLBACK or LABEL (Optional)</p>\n',
                    type: 'Constant',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Environment'
              },
              gridOutput: {
                name: 'gridOutput',
                params: [
                  {
                    name: 'display',
                    description: '<p>either FALLBACK or LABEL (Optional)</p>\n',
                    type: 'Constant',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Environment'
              },
              alpha: {
                name: 'alpha',
                params: [
                  {
                    name: 'color',
                    description:
                      '<p><a href="#/p5.Color">p5.Color</a> object, color components,\n                                        or CSS color</p>\n',
                    type: 'p5.Color|Number[]|String'
                  }
                ],
                class: 'p5',
                module: 'Color'
              },
              blue: {
                name: 'blue',
                params: [
                  {
                    name: 'color',
                    description:
                      '<p><a href="#/p5.Color">p5.Color</a> object, color components,\n                                        or CSS color</p>\n',
                    type: 'p5.Color|Number[]|String'
                  }
                ],
                class: 'p5',
                module: 'Color'
              },
              brightness: {
                name: 'brightness',
                params: [
                  {
                    name: 'color',
                    description:
                      '<p><a href="#/p5.Color">p5.Color</a> object, color components,\n                                        or CSS color</p>\n',
                    type: 'p5.Color|Number[]|String'
                  }
                ],
                class: 'p5',
                module: 'Color'
              },
              color: {
                name: 'color',
                class: 'p5',
                module: 'Color',
                overloads: [
                  {
                    params: [
                      {
                        name: 'gray',
                        description:
                          '<p>number specifying value between white and black.</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'alpha',
                        description:
                          '<p>alpha value relative to current color range\n                                (default is 0-255)</p>\n',
                        type: 'Number',
                        optional: true
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'v1',
                        description:
                          '<p>red or hue value relative to\n                                the current color range</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'v2',
                        description:
                          '<p>green or saturation value\n                                relative to the current color range</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'v3',
                        description:
                          '<p>blue or brightness value\n                                relative to the current color range</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'alpha',
                        description: '',
                        type: 'Number',
                        optional: true
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'value',
                        description: '<p>a color string</p>\n',
                        type: 'String'
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'values',
                        description:
                          '<p>an array containing the red,green,blue &\n                                and alpha components of the color</p>\n',
                        type: 'Number[]'
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'color',
                        description: '',
                        type: 'p5.Color'
                      }
                    ]
                  }
                ]
              },
              green: {
                name: 'green',
                params: [
                  {
                    name: 'color',
                    description:
                      '<p><a href="#/p5.Color">p5.Color</a> object, color components,\n                                        or CSS color</p>\n',
                    type: 'p5.Color|Number[]|String'
                  }
                ],
                class: 'p5',
                module: 'Color'
              },
              hue: {
                name: 'hue',
                params: [
                  {
                    name: 'color',
                    description:
                      '<p><a href="#/p5.Color">p5.Color</a> object, color components,\n                                        or CSS color</p>\n',
                    type: 'p5.Color|Number[]|String'
                  }
                ],
                class: 'p5',
                module: 'Color'
              },
              lerpColor: {
                name: 'lerpColor',
                params: [
                  {
                    name: 'c1',
                    description: '<p>interpolate from this color</p>\n',
                    type: 'p5.Color'
                  },
                  {
                    name: 'c2',
                    description: '<p>interpolate to this color</p>\n',
                    type: 'p5.Color'
                  },
                  {
                    name: 'amt',
                    description: '<p>number between 0 and 1</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5',
                module: 'Color'
              },
              lightness: {
                name: 'lightness',
                params: [
                  {
                    name: 'color',
                    description:
                      '<p><a href="#/p5.Color">p5.Color</a> object, color components,\n                                        or CSS color</p>\n',
                    type: 'p5.Color|Number[]|String'
                  }
                ],
                class: 'p5',
                module: 'Color'
              },
              red: {
                name: 'red',
                params: [
                  {
                    name: 'color',
                    description:
                      '<p><a href="#/p5.Color">p5.Color</a> object, color components,\n                                        or CSS color</p>\n',
                    type: 'p5.Color|Number[]|String'
                  }
                ],
                class: 'p5',
                module: 'Color'
              },
              saturation: {
                name: 'saturation',
                params: [
                  {
                    name: 'color',
                    description:
                      '<p><a href="#/p5.Color">p5.Color</a> object, color components,\n                                        or CSS color</p>\n',
                    type: 'p5.Color|Number[]|String'
                  }
                ],
                class: 'p5',
                module: 'Color'
              },
              background: {
                name: 'background',
                class: 'p5',
                module: 'Color',
                overloads: [
                  {
                    params: [
                      {
                        name: 'color',
                        description:
                          '<p>any value created by the <a href="#/p5/color">color()</a> function</p>\n',
                        type: 'p5.Color'
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'colorstring',
                        description:
                          '<p>color string, possible formats include: integer\n                        rgb() or rgba(), percentage rgb() or rgba(),\n                        3-digit hex, 6-digit hex</p>\n',
                        type: 'String'
                      },
                      {
                        name: 'a',
                        description:
                          '<p>opacity of the background relative to current\n                            color range (default is 0-255)</p>\n',
                        type: 'Number',
                        optional: true
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'gray',
                        description: '<p>specifies a value between white and black</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'a',
                        description: '',
                        type: 'Number',
                        optional: true
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'v1',
                        description:
                          '<p>red or hue value (depending on the current color\n                       mode)</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'v2',
                        description:
                          '<p>green or saturation value (depending on the current\n                       color mode)</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'v3',
                        description:
                          '<p>blue or brightness value (depending on the current\n                       color mode)</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'a',
                        description: '',
                        type: 'Number',
                        optional: true
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'values',
                        description:
                          '<p>an array containing the red, green, blue\n                                and alpha components of the color</p>\n',
                        type: 'Number[]'
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'image',
                        description:
                          '<p>image created with <a href="#/p5/loadImage">loadImage()</a> or <a href="#/p5/createImage">createImage()</a>,\n                            to set as background\n                            (must be same size as the sketch window)</p>\n',
                        type: 'p5.Image'
                      },
                      {
                        name: 'a',
                        description: '',
                        type: 'Number',
                        optional: true
                      }
                    ],
                    chainable: 1
                  }
                ]
              },
              clear: {
                name: 'clear',
                class: 'p5',
                module: 'Color'
              },
              colorMode: {
                name: 'colorMode',
                class: 'p5',
                module: 'Color',
                overloads: [
                  {
                    params: [
                      {
                        name: 'mode',
                        description:
                          '<p>either RGB, HSB or HSL, corresponding to\n                         Red/Green/Blue and Hue/Saturation/Brightness\n                         (or Lightness)</p>\n',
                        type: 'Constant'
                      },
                      {
                        name: 'max',
                        description: '<p>range for all values</p>\n',
                        type: 'Number',
                        optional: true
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'mode',
                        description: '',
                        type: 'Constant'
                      },
                      {
                        name: 'max1',
                        description:
                          '<p>range for the red or hue depending on the\n                             current color mode</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'max2',
                        description:
                          '<p>range for the green or saturation depending\n                             on the current color mode</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'max3',
                        description:
                          '<p>range for the blue or brightness/lightness\n                             depending on the current color mode</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'maxA',
                        description: '<p>range for the alpha</p>\n',
                        type: 'Number',
                        optional: true
                      }
                    ],
                    chainable: 1
                  }
                ]
              },
              fill: {
                name: 'fill',
                class: 'p5',
                module: 'Color',
                overloads: [
                  {
                    params: [
                      {
                        name: 'v1',
                        description:
                          '<p>red or hue value relative to\n                                the current color range</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'v2',
                        description:
                          '<p>green or saturation value\n                                relative to the current color range</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'v3',
                        description:
                          '<p>blue or brightness value\n                                relative to the current color range</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'alpha',
                        description: '',
                        type: 'Number',
                        optional: true
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'value',
                        description: '<p>a color string</p>\n',
                        type: 'String'
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'gray',
                        description: '<p>a gray value</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'alpha',
                        description: '',
                        type: 'Number',
                        optional: true
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'values',
                        description:
                          '<p>an array containing the red,green,blue &\n                                and alpha components of the color</p>\n',
                        type: 'Number[]'
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'color',
                        description: '<p>the fill color</p>\n',
                        type: 'p5.Color'
                      }
                    ],
                    chainable: 1
                  }
                ]
              },
              noFill: {
                name: 'noFill',
                class: 'p5',
                module: 'Color'
              },
              noStroke: {
                name: 'noStroke',
                class: 'p5',
                module: 'Color'
              },
              stroke: {
                name: 'stroke',
                class: 'p5',
                module: 'Color',
                overloads: [
                  {
                    params: [
                      {
                        name: 'v1',
                        description:
                          '<p>red or hue value relative to\n                                the current color range</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'v2',
                        description:
                          '<p>green or saturation value\n                                relative to the current color range</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'v3',
                        description:
                          '<p>blue or brightness value\n                                relative to the current color range</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'alpha',
                        description: '',
                        type: 'Number',
                        optional: true
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'value',
                        description: '<p>a color string</p>\n',
                        type: 'String'
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'gray',
                        description: '<p>a gray value</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'alpha',
                        description: '',
                        type: 'Number',
                        optional: true
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'values',
                        description:
                          '<p>an array containing the red,green,blue &\n                                and alpha components of the color</p>\n',
                        type: 'Number[]'
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'color',
                        description: '<p>the stroke color</p>\n',
                        type: 'p5.Color'
                      }
                    ],
                    chainable: 1
                  }
                ]
              },
              erase: {
                name: 'erase',
                params: [
                  {
                    name: 'strengthFill',
                    description:
                      "<p>A number (0-255) for the strength of erasing for a shape's fill.\n                                       This will default to 255 when no argument is given, which\n                                       is full strength.</p>\n",
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'strengthStroke',
                    description:
                      "<p>A number (0-255) for the strength of erasing for a shape's stroke.\n                                       This will default to 255 when no argument is given, which\n                                       is full strength.</p>\n",
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Color'
              },
              noErase: {
                name: 'noErase',
                class: 'p5',
                module: 'Color'
              },
              arc: {
                name: 'arc',
                params: [
                  {
                    name: 'x',
                    description: "<p>x-coordinate of the arc's ellipse</p>\n",
                    type: 'Number'
                  },
                  {
                    name: 'y',
                    description: "<p>y-coordinate of the arc's ellipse</p>\n",
                    type: 'Number'
                  },
                  {
                    name: 'w',
                    description: "<p>width of the arc's ellipse by default</p>\n",
                    type: 'Number'
                  },
                  {
                    name: 'h',
                    description: "<p>height of the arc's ellipse by default</p>\n",
                    type: 'Number'
                  },
                  {
                    name: 'start',
                    description: '<p>angle to start the arc, specified in radians</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'stop',
                    description: '<p>angle to stop the arc, specified in radians</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'mode',
                    description:
                      '<p>optional parameter to determine the way of drawing\n                        the arc. either CHORD, PIE or OPEN</p>\n',
                    type: 'Constant',
                    optional: true
                  },
                  {
                    name: 'detail',
                    description:
                      '<p>optional parameter for WebGL mode only. This is to\n                        specify the number of vertices that makes up the\n                        perimeter of the arc. Default value is 25.</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Shape'
              },
              ellipse: {
                name: 'ellipse',
                class: 'p5',
                module: 'Shape',
                overloads: [
                  {
                    params: [
                      {
                        name: 'x',
                        description: '<p>x-coordinate of the center of ellipse.</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'y',
                        description: '<p>y-coordinate of the center of ellipse.</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'w',
                        description: '<p>width of the ellipse.</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'h',
                        description: '<p>height of the ellipse.</p>\n',
                        type: 'Number',
                        optional: true
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'x',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'y',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'w',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'h',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'detail',
                        description:
                          '<p>number of radial sectors to draw (for WebGL mode)</p>\n',
                        type: 'Integer'
                      }
                    ]
                  }
                ]
              },
              circle: {
                name: 'circle',
                params: [
                  {
                    name: 'x',
                    description: '<p>x-coordinate of the centre of the circle.</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'y',
                    description: '<p>y-coordinate of the centre of the circle.</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'd',
                    description: '<p>diameter of the circle.</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5',
                module: 'Shape'
              },
              line: {
                name: 'line',
                class: 'p5',
                module: 'Shape',
                overloads: [
                  {
                    params: [
                      {
                        name: 'x1',
                        description: '<p>the x-coordinate of the first point</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'y1',
                        description: '<p>the y-coordinate of the first point</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'x2',
                        description: '<p>the x-coordinate of the second point</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'y2',
                        description: '<p>the y-coordinate of the second point</p>\n',
                        type: 'Number'
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'x1',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'y1',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'z1',
                        description: '<p>the z-coordinate of the first point</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'x2',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'y2',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'z2',
                        description: '<p>the z-coordinate of the second point</p>\n',
                        type: 'Number'
                      }
                    ],
                    chainable: 1
                  }
                ]
              },
              point: {
                name: 'point',
                class: 'p5',
                module: 'Shape',
                overloads: [
                  {
                    params: [
                      {
                        name: 'x',
                        description: '<p>the x-coordinate</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'y',
                        description: '<p>the y-coordinate</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'z',
                        description: '<p>the z-coordinate (for WebGL mode)</p>\n',
                        type: 'Number',
                        optional: true
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'coordinate_vector',
                        description: '<p>the coordinate vector</p>\n',
                        type: 'p5.Vector'
                      }
                    ],
                    chainable: 1
                  }
                ]
              },
              quad: {
                name: 'quad',
                class: 'p5',
                module: 'Shape',
                overloads: [
                  {
                    params: [
                      {
                        name: 'x1',
                        description: '<p>the x-coordinate of the first point</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'y1',
                        description: '<p>the y-coordinate of the first point</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'x2',
                        description: '<p>the x-coordinate of the second point</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'y2',
                        description: '<p>the y-coordinate of the second point</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'x3',
                        description: '<p>the x-coordinate of the third point</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'y3',
                        description: '<p>the y-coordinate of the third point</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'x4',
                        description: '<p>the x-coordinate of the fourth point</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'y4',
                        description: '<p>the y-coordinate of the fourth point</p>\n',
                        type: 'Number'
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'x1',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'y1',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'z1',
                        description: '<p>the z-coordinate of the first point</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'x2',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'y2',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'z2',
                        description: '<p>the z-coordinate of the second point</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'x3',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'y3',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'z3',
                        description: '<p>the z-coordinate of the third point</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'x4',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'y4',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'z4',
                        description: '<p>the z-coordinate of the fourth point</p>\n',
                        type: 'Number'
                      }
                    ],
                    chainable: 1
                  }
                ]
              },
              rect: {
                name: 'rect',
                class: 'p5',
                module: 'Shape',
                overloads: [
                  {
                    params: [
                      {
                        name: 'x',
                        description: '<p>x-coordinate of the rectangle.</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'y',
                        description: '<p>y-coordinate of the rectangle.</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'w',
                        description: '<p>width of the rectangle.</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'h',
                        description: '<p>height of the rectangle.</p>\n',
                        type: 'Number',
                        optional: true
                      },
                      {
                        name: 'tl',
                        description: '<p>optional radius of top-left corner.</p>\n',
                        type: 'Number',
                        optional: true
                      },
                      {
                        name: 'tr',
                        description: '<p>optional radius of top-right corner.</p>\n',
                        type: 'Number',
                        optional: true
                      },
                      {
                        name: 'br',
                        description: '<p>optional radius of bottom-right corner.</p>\n',
                        type: 'Number',
                        optional: true
                      },
                      {
                        name: 'bl',
                        description: '<p>optional radius of bottom-left corner.</p>\n',
                        type: 'Number',
                        optional: true
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'x',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'y',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'w',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'h',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'detailX',
                        description:
                          '<p>number of segments in the x-direction (for WebGL mode)</p>\n',
                        type: 'Integer',
                        optional: true
                      },
                      {
                        name: 'detailY',
                        description:
                          '<p>number of segments in the y-direction (for WebGL mode)</p>\n',
                        type: 'Integer',
                        optional: true
                      }
                    ],
                    chainable: 1
                  }
                ]
              },
              square: {
                name: 'square',
                params: [
                  {
                    name: 'x',
                    description: '<p>x-coordinate of the square.</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'y',
                    description: '<p>y-coordinate of the square.</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 's',
                    description: '<p>side size of the square.</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'tl',
                    description: '<p>optional radius of top-left corner.</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'tr',
                    description: '<p>optional radius of top-right corner.</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'br',
                    description: '<p>optional radius of bottom-right corner.</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'bl',
                    description: '<p>optional radius of bottom-left corner.</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Shape'
              },
              triangle: {
                name: 'triangle',
                params: [
                  {
                    name: 'x1',
                    description: '<p>x-coordinate of the first point</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'y1',
                    description: '<p>y-coordinate of the first point</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'x2',
                    description: '<p>x-coordinate of the second point</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'y2',
                    description: '<p>y-coordinate of the second point</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'x3',
                    description: '<p>x-coordinate of the third point</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'y3',
                    description: '<p>y-coordinate of the third point</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5',
                module: 'Shape'
              },
              ellipseMode: {
                name: 'ellipseMode',
                params: [
                  {
                    name: 'mode',
                    description: '<p>either CENTER, RADIUS, CORNER, or CORNERS</p>\n',
                    type: 'Constant'
                  }
                ],
                class: 'p5',
                module: 'Shape'
              },
              noSmooth: {
                name: 'noSmooth',
                class: 'p5',
                module: 'Shape'
              },
              rectMode: {
                name: 'rectMode',
                params: [
                  {
                    name: 'mode',
                    description: '<p>either CORNER, CORNERS, CENTER, or RADIUS</p>\n',
                    type: 'Constant'
                  }
                ],
                class: 'p5',
                module: 'Shape'
              },
              smooth: {
                name: 'smooth',
                class: 'p5',
                module: 'Shape'
              },
              strokeCap: {
                name: 'strokeCap',
                params: [
                  {
                    name: 'cap',
                    description: '<p>either ROUND, SQUARE or PROJECT</p>\n',
                    type: 'Constant'
                  }
                ],
                class: 'p5',
                module: 'Shape'
              },
              strokeJoin: {
                name: 'strokeJoin',
                params: [
                  {
                    name: 'join',
                    description: '<p>either MITER, BEVEL, ROUND</p>\n',
                    type: 'Constant'
                  }
                ],
                class: 'p5',
                module: 'Shape'
              },
              strokeWeight: {
                name: 'strokeWeight',
                params: [
                  {
                    name: 'weight',
                    description: '<p>the weight of the stroke (in pixels)</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5',
                module: 'Shape'
              },
              bezier: {
                name: 'bezier',
                class: 'p5',
                module: 'Shape',
                overloads: [
                  {
                    params: [
                      {
                        name: 'x1',
                        description: '<p>x-coordinate for the first anchor point</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'y1',
                        description: '<p>y-coordinate for the first anchor point</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'x2',
                        description: '<p>x-coordinate for the first control point</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'y2',
                        description: '<p>y-coordinate for the first control point</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'x3',
                        description: '<p>x-coordinate for the second control point</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'y3',
                        description: '<p>y-coordinate for the second control point</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'x4',
                        description: '<p>x-coordinate for the second anchor point</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'y4',
                        description: '<p>y-coordinate for the second anchor point</p>\n',
                        type: 'Number'
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'x1',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'y1',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'z1',
                        description: '<p>z-coordinate for the first anchor point</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'x2',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'y2',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'z2',
                        description: '<p>z-coordinate for the first control point</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'x3',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'y3',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'z3',
                        description: '<p>z-coordinate for the second control point</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'x4',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'y4',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'z4',
                        description: '<p>z-coordinate for the second anchor point</p>\n',
                        type: 'Number'
                      }
                    ],
                    chainable: 1
                  }
                ]
              },
              bezierDetail: {
                name: 'bezierDetail',
                params: [
                  {
                    name: 'detail',
                    description: '<p>resolution of the curves</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5',
                module: 'Shape'
              },
              bezierPoint: {
                name: 'bezierPoint',
                params: [
                  {
                    name: 'a',
                    description: '<p>coordinate of first point on the curve</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'b',
                    description: '<p>coordinate of first control point</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'c',
                    description: '<p>coordinate of second control point</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'd',
                    description: '<p>coordinate of second point on the curve</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 't',
                    description: '<p>value between 0 and 1</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5',
                module: 'Shape'
              },
              bezierTangent: {
                name: 'bezierTangent',
                params: [
                  {
                    name: 'a',
                    description: '<p>coordinate of first point on the curve</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'b',
                    description: '<p>coordinate of first control point</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'c',
                    description: '<p>coordinate of second control point</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'd',
                    description: '<p>coordinate of second point on the curve</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 't',
                    description: '<p>value between 0 and 1</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5',
                module: 'Shape'
              },
              curve: {
                name: 'curve',
                class: 'p5',
                module: 'Shape',
                overloads: [
                  {
                    params: [
                      {
                        name: 'x1',
                        description:
                          '<p>x-coordinate for the beginning control point</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'y1',
                        description:
                          '<p>y-coordinate for the beginning control point</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'x2',
                        description: '<p>x-coordinate for the first point</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'y2',
                        description: '<p>y-coordinate for the first point</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'x3',
                        description: '<p>x-coordinate for the second point</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'y3',
                        description: '<p>y-coordinate for the second point</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'x4',
                        description: '<p>x-coordinate for the ending control point</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'y4',
                        description: '<p>y-coordinate for the ending control point</p>\n',
                        type: 'Number'
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'x1',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'y1',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'z1',
                        description:
                          '<p>z-coordinate for the beginning control point</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'x2',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'y2',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'z2',
                        description: '<p>z-coordinate for the first point</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'x3',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'y3',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'z3',
                        description: '<p>z-coordinate for the second point</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'x4',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'y4',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'z4',
                        description: '<p>z-coordinate for the ending control point</p>\n',
                        type: 'Number'
                      }
                    ],
                    chainable: 1
                  }
                ]
              },
              curveDetail: {
                name: 'curveDetail',
                params: [
                  {
                    name: 'resolution',
                    description: '<p>resolution of the curves</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5',
                module: 'Shape'
              },
              curveTightness: {
                name: 'curveTightness',
                params: [
                  {
                    name: 'amount',
                    description:
                      '<p>amount of deformation from the original vertices</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5',
                module: 'Shape'
              },
              curvePoint: {
                name: 'curvePoint',
                params: [
                  {
                    name: 'a',
                    description: '<p>coordinate of first control point of the curve</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'b',
                    description: '<p>coordinate of first point</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'c',
                    description: '<p>coordinate of second point</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'd',
                    description: '<p>coordinate of second control point</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 't',
                    description: '<p>value between 0 and 1</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5',
                module: 'Shape'
              },
              curveTangent: {
                name: 'curveTangent',
                params: [
                  {
                    name: 'a',
                    description: '<p>coordinate of first control point</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'b',
                    description: '<p>coordinate of first point on the curve</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'c',
                    description: '<p>coordinate of second point on the curve</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'd',
                    description: '<p>coordinate of second conrol point</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 't',
                    description: '<p>value between 0 and 1</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5',
                module: 'Shape'
              },
              beginContour: {
                name: 'beginContour',
                class: 'p5',
                module: 'Shape'
              },
              beginShape: {
                name: 'beginShape',
                params: [
                  {
                    name: 'kind',
                    description:
                      '<p>either POINTS, LINES, TRIANGLES, TRIANGLE_FAN\n                               TRIANGLE_STRIP, QUADS, QUAD_STRIP or TESS</p>\n',
                    type: 'Constant',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Shape'
              },
              bezierVertex: {
                name: 'bezierVertex',
                class: 'p5',
                module: 'Shape',
                overloads: [
                  {
                    params: [
                      {
                        name: 'x2',
                        description: '<p>x-coordinate for the first control point</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'y2',
                        description: '<p>y-coordinate for the first control point</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'x3',
                        description: '<p>x-coordinate for the second control point</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'y3',
                        description: '<p>y-coordinate for the second control point</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'x4',
                        description: '<p>x-coordinate for the anchor point</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'y4',
                        description: '<p>y-coordinate for the anchor point</p>\n',
                        type: 'Number'
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'x2',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'y2',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'z2',
                        description:
                          '<p>z-coordinate for the first control point (for WebGL mode)</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'x3',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'y3',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'z3',
                        description:
                          '<p>z-coordinate for the second control point (for WebGL mode)</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'x4',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'y4',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'z4',
                        description:
                          '<p>z-coordinate for the anchor point (for WebGL mode)</p>\n',
                        type: 'Number'
                      }
                    ],
                    chainable: 1
                  }
                ]
              },
              curveVertex: {
                name: 'curveVertex',
                class: 'p5',
                module: 'Shape',
                overloads: [
                  {
                    params: [
                      {
                        name: 'x',
                        description: '<p>x-coordinate of the vertex</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'y',
                        description: '<p>y-coordinate of the vertex</p>\n',
                        type: 'Number'
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'x',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'y',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'z',
                        description: '<p>z-coordinate of the vertex (for WebGL mode)</p>\n',
                        type: 'Number',
                        optional: true
                      }
                    ],
                    chainable: 1
                  }
                ]
              },
              endContour: {
                name: 'endContour',
                class: 'p5',
                module: 'Shape'
              },
              endShape: {
                name: 'endShape',
                params: [
                  {
                    name: 'mode',
                    description: '<p>use CLOSE to close the shape</p>\n',
                    type: 'Constant',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Shape'
              },
              quadraticVertex: {
                name: 'quadraticVertex',
                class: 'p5',
                module: 'Shape',
                overloads: [
                  {
                    params: [
                      {
                        name: 'cx',
                        description: '<p>x-coordinate for the control point</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'cy',
                        description: '<p>y-coordinate for the control point</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'x3',
                        description: '<p>x-coordinate for the anchor point</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'y3',
                        description: '<p>y-coordinate for the anchor point</p>\n',
                        type: 'Number'
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'cx',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'cy',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'cz',
                        description:
                          '<p>z-coordinate for the control point (for WebGL mode)</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'x3',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'y3',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'z3',
                        description:
                          '<p>z-coordinate for the anchor point (for WebGL mode)</p>\n',
                        type: 'Number'
                      }
                    ],
                    chainable: 1
                  }
                ]
              },
              vertex: {
                name: 'vertex',
                class: 'p5',
                module: 'Shape',
                overloads: [
                  {
                    params: [
                      {
                        name: 'x',
                        description: '<p>x-coordinate of the vertex</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'y',
                        description: '<p>y-coordinate of the vertex</p>\n',
                        type: 'Number'
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'x',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'y',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'z',
                        description: '<p>z-coordinate of the vertex</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'u',
                        description: "<p>the vertex's texture u-coordinate</p>\n",
                        type: 'Number',
                        optional: true
                      },
                      {
                        name: 'v',
                        description: "<p>the vertex's texture v-coordinate</p>\n",
                        type: 'Number',
                        optional: true
                      }
                    ],
                    chainable: 1
                  }
                ]
              },
              P2D: {
                name: 'P2D',
                class: 'p5',
                module: 'Constants'
              },
              WEBGL: {
                name: 'WEBGL',
                class: 'p5',
                module: 'Constants'
              },
              ARROW: {
                name: 'ARROW',
                class: 'p5',
                module: 'Constants'
              },
              CROSS: {
                name: 'CROSS',
                class: 'p5',
                module: 'Constants'
              },
              HAND: {
                name: 'HAND',
                class: 'p5',
                module: 'Constants'
              },
              MOVE: {
                name: 'MOVE',
                class: 'p5',
                module: 'Constants'
              },
              TEXT: {
                name: 'TEXT',
                class: 'p5',
                module: 'Constants'
              },
              WAIT: {
                name: 'WAIT',
                class: 'p5',
                module: 'Constants'
              },
              HALF_PI: {
                name: 'HALF_PI',
                class: 'p5',
                module: 'Constants'
              },
              PI: {
                name: 'PI',
                class: 'p5',
                module: 'Constants'
              },
              QUARTER_PI: {
                name: 'QUARTER_PI',
                class: 'p5',
                module: 'Constants'
              },
              TAU: {
                name: 'TAU',
                class: 'p5',
                module: 'Constants'
              },
              TWO_PI: {
                name: 'TWO_PI',
                class: 'p5',
                module: 'Constants'
              },
              DEGREES: {
                name: 'DEGREES',
                class: 'p5',
                module: 'Constants'
              },
              RADIANS: {
                name: 'RADIANS',
                class: 'p5',
                module: 'Constants'
              },
              CORNER: {
                name: 'CORNER',
                class: 'p5',
                module: 'Constants'
              },
              CORNERS: {
                name: 'CORNERS',
                class: 'p5',
                module: 'Constants'
              },
              RADIUS: {
                name: 'RADIUS',
                class: 'p5',
                module: 'Constants'
              },
              RIGHT: {
                name: 'RIGHT',
                class: 'p5',
                module: 'Constants'
              },
              LEFT: {
                name: 'LEFT',
                class: 'p5',
                module: 'Constants'
              },
              CENTER: {
                name: 'CENTER',
                class: 'p5',
                module: 'Constants'
              },
              TOP: {
                name: 'TOP',
                class: 'p5',
                module: 'Constants'
              },
              BOTTOM: {
                name: 'BOTTOM',
                class: 'p5',
                module: 'Constants'
              },
              BASELINE: {
                name: 'BASELINE',
                class: 'p5',
                module: 'Constants'
              },
              POINTS: {
                name: 'POINTS',
                class: 'p5',
                module: 'Constants'
              },
              LINES: {
                name: 'LINES',
                class: 'p5',
                module: 'Constants'
              },
              LINE_STRIP: {
                name: 'LINE_STRIP',
                class: 'p5',
                module: 'Constants'
              },
              LINE_LOOP: {
                name: 'LINE_LOOP',
                class: 'p5',
                module: 'Constants'
              },
              TRIANGLES: {
                name: 'TRIANGLES',
                class: 'p5',
                module: 'Constants'
              },
              TRIANGLE_FAN: {
                name: 'TRIANGLE_FAN',
                class: 'p5',
                module: 'Constants'
              },
              TRIANGLE_STRIP: {
                name: 'TRIANGLE_STRIP',
                class: 'p5',
                module: 'Constants'
              },
              QUADS: {
                name: 'QUADS',
                class: 'p5',
                module: 'Constants'
              },
              QUAD_STRIP: {
                name: 'QUAD_STRIP',
                class: 'p5',
                module: 'Constants'
              },
              TESS: {
                name: 'TESS',
                class: 'p5',
                module: 'Constants'
              },
              CLOSE: {
                name: 'CLOSE',
                class: 'p5',
                module: 'Constants'
              },
              OPEN: {
                name: 'OPEN',
                class: 'p5',
                module: 'Constants'
              },
              CHORD: {
                name: 'CHORD',
                class: 'p5',
                module: 'Constants'
              },
              PIE: {
                name: 'PIE',
                class: 'p5',
                module: 'Constants'
              },
              PROJECT: {
                name: 'PROJECT',
                class: 'p5',
                module: 'Constants'
              },
              SQUARE: {
                name: 'SQUARE',
                class: 'p5',
                module: 'Constants'
              },
              ROUND: {
                name: 'ROUND',
                class: 'p5',
                module: 'Constants'
              },
              BEVEL: {
                name: 'BEVEL',
                class: 'p5',
                module: 'Constants'
              },
              MITER: {
                name: 'MITER',
                class: 'p5',
                module: 'Constants'
              },
              RGB: {
                name: 'RGB',
                class: 'p5',
                module: 'Constants'
              },
              HSB: {
                name: 'HSB',
                class: 'p5',
                module: 'Constants'
              },
              HSL: {
                name: 'HSL',
                class: 'p5',
                module: 'Constants'
              },
              AUTO: {
                name: 'AUTO',
                class: 'p5',
                module: 'Constants'
              },
              ALT: {
                name: 'ALT',
                class: 'p5',
                module: 'Constants'
              },
              BACKSPACE: {
                name: 'BACKSPACE',
                class: 'p5',
                module: 'Constants'
              },
              CONTROL: {
                name: 'CONTROL',
                class: 'p5',
                module: 'Constants'
              },
              DELETE: {
                name: 'DELETE',
                class: 'p5',
                module: 'Constants'
              },
              DOWN_ARROW: {
                name: 'DOWN_ARROW',
                class: 'p5',
                module: 'Constants'
              },
              ENTER: {
                name: 'ENTER',
                class: 'p5',
                module: 'Constants'
              },
              ESCAPE: {
                name: 'ESCAPE',
                class: 'p5',
                module: 'Constants'
              },
              LEFT_ARROW: {
                name: 'LEFT_ARROW',
                class: 'p5',
                module: 'Constants'
              },
              OPTION: {
                name: 'OPTION',
                class: 'p5',
                module: 'Constants'
              },
              RETURN: {
                name: 'RETURN',
                class: 'p5',
                module: 'Constants'
              },
              RIGHT_ARROW: {
                name: 'RIGHT_ARROW',
                class: 'p5',
                module: 'Constants'
              },
              SHIFT: {
                name: 'SHIFT',
                class: 'p5',
                module: 'Constants'
              },
              TAB: {
                name: 'TAB',
                class: 'p5',
                module: 'Constants'
              },
              UP_ARROW: {
                name: 'UP_ARROW',
                class: 'p5',
                module: 'Constants'
              },
              BLEND: {
                name: 'BLEND',
                class: 'p5',
                module: 'Constants'
              },
              REMOVE: {
                name: 'REMOVE',
                class: 'p5',
                module: 'Constants'
              },
              ADD: {
                name: 'ADD',
                class: 'p5',
                module: 'Constants'
              },
              DARKEST: {
                name: 'DARKEST',
                class: 'p5',
                module: 'Constants'
              },
              LIGHTEST: {
                name: 'LIGHTEST',
                class: 'p5',
                module: 'Constants'
              },
              DIFFERENCE: {
                name: 'DIFFERENCE',
                class: 'p5',
                module: 'Constants'
              },
              SUBTRACT: {
                name: 'SUBTRACT',
                class: 'p5',
                module: 'Constants'
              },
              EXCLUSION: {
                name: 'EXCLUSION',
                class: 'p5',
                module: 'Constants'
              },
              MULTIPLY: {
                name: 'MULTIPLY',
                class: 'p5',
                module: 'Constants'
              },
              SCREEN: {
                name: 'SCREEN',
                class: 'p5',
                module: 'Constants'
              },
              REPLACE: {
                name: 'REPLACE',
                class: 'p5',
                module: 'Constants'
              },
              OVERLAY: {
                name: 'OVERLAY',
                class: 'p5',
                module: 'Constants'
              },
              HARD_LIGHT: {
                name: 'HARD_LIGHT',
                class: 'p5',
                module: 'Constants'
              },
              SOFT_LIGHT: {
                name: 'SOFT_LIGHT',
                class: 'p5',
                module: 'Constants'
              },
              DODGE: {
                name: 'DODGE',
                class: 'p5',
                module: 'Constants'
              },
              BURN: {
                name: 'BURN',
                class: 'p5',
                module: 'Constants'
              },
              THRESHOLD: {
                name: 'THRESHOLD',
                class: 'p5',
                module: 'Constants'
              },
              GRAY: {
                name: 'GRAY',
                class: 'p5',
                module: 'Constants'
              },
              OPAQUE: {
                name: 'OPAQUE',
                class: 'p5',
                module: 'Constants'
              },
              INVERT: {
                name: 'INVERT',
                class: 'p5',
                module: 'Constants'
              },
              POSTERIZE: {
                name: 'POSTERIZE',
                class: 'p5',
                module: 'Constants'
              },
              DILATE: {
                name: 'DILATE',
                class: 'p5',
                module: 'Constants'
              },
              ERODE: {
                name: 'ERODE',
                class: 'p5',
                module: 'Constants'
              },
              BLUR: {
                name: 'BLUR',
                class: 'p5',
                module: 'Constants'
              },
              NORMAL: {
                name: 'NORMAL',
                class: 'p5',
                module: 'Constants'
              },
              ITALIC: {
                name: 'ITALIC',
                class: 'p5',
                module: 'Constants'
              },
              BOLD: {
                name: 'BOLD',
                class: 'p5',
                module: 'Constants'
              },
              BOLDITALIC: {
                name: 'BOLDITALIC',
                class: 'p5',
                module: 'Constants'
              },
              LINEAR: {
                name: 'LINEAR',
                class: 'p5',
                module: 'Constants'
              },
              QUADRATIC: {
                name: 'QUADRATIC',
                class: 'p5',
                module: 'Constants'
              },
              BEZIER: {
                name: 'BEZIER',
                class: 'p5',
                module: 'Constants'
              },
              CURVE: {
                name: 'CURVE',
                class: 'p5',
                module: 'Constants'
              },
              STROKE: {
                name: 'STROKE',
                class: 'p5',
                module: 'Constants'
              },
              FILL: {
                name: 'FILL',
                class: 'p5',
                module: 'Constants'
              },
              TEXTURE: {
                name: 'TEXTURE',
                class: 'p5',
                module: 'Constants'
              },
              IMMEDIATE: {
                name: 'IMMEDIATE',
                class: 'p5',
                module: 'Constants'
              },
              IMAGE: {
                name: 'IMAGE',
                class: 'p5',
                module: 'Constants'
              },
              NEAREST: {
                name: 'NEAREST',
                class: 'p5',
                module: 'Constants'
              },
              REPEAT: {
                name: 'REPEAT',
                class: 'p5',
                module: 'Constants'
              },
              CLAMP: {
                name: 'CLAMP',
                class: 'p5',
                module: 'Constants'
              },
              MIRROR: {
                name: 'MIRROR',
                class: 'p5',
                module: 'Constants'
              },
              LANDSCAPE: {
                name: 'LANDSCAPE',
                class: 'p5',
                module: 'Constants'
              },
              PORTRAIT: {
                name: 'PORTRAIT',
                class: 'p5',
                module: 'Constants'
              },
              GRID: {
                name: 'GRID',
                class: 'p5',
                module: 'Constants'
              },
              AXES: {
                name: 'AXES',
                class: 'p5',
                module: 'Constants'
              },
              LABEL: {
                name: 'LABEL',
                class: 'p5',
                module: 'Constants'
              },
              FALLBACK: {
                name: 'FALLBACK',
                class: 'p5',
                module: 'Constants'
              },
              print: {
                name: 'print',
                params: [
                  {
                    name: 'contents',
                    description:
                      '<p>any combination of Number, String, Object, Boolean,\n                      Array to print</p>\n',
                    type: 'Any'
                  }
                ],
                class: 'p5',
                module: 'Environment'
              },
              frameCount: {
                name: 'frameCount',
                class: 'p5',
                module: 'Environment'
              },
              deltaTime: {
                name: 'deltaTime',
                class: 'p5',
                module: 'Environment'
              },
              focused: {
                name: 'focused',
                class: 'p5',
                module: 'Environment'
              },
              cursor: {
                name: 'cursor',
                params: [
                  {
                    name: 'type',
                    description:
                      "<p>Built-In: either ARROW, CROSS, HAND, MOVE, TEXT and WAIT\n                              Native CSS properties: 'grab', 'progress', 'cell' etc.\n                              External: path for cursor's images\n                              (Allowed File extensions: .cur, .gif, .jpg, .jpeg, .png)\n                              For more information on Native CSS cursors and url visit:\n                              <a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/cursor\">https://developer.mozilla.org/en-US/docs/Web/CSS/cursor</a></p>\n",
                    type: 'String|Constant'
                  },
                  {
                    name: 'x',
                    description:
                      '<p>the horizontal active spot of the cursor (must be less than 32)</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'y',
                    description:
                      '<p>the vertical active spot of the cursor (must be less than 32)</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Environment'
              },
              frameRate: {
                name: 'frameRate',
                class: 'p5',
                module: 'Environment',
                overloads: [
                  {
                    params: [
                      {
                        name: 'fps',
                        description:
                          '<p>number of frames to be displayed every second</p>\n',
                        type: 'Number'
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: []
                  }
                ]
              },
              noCursor: {
                name: 'noCursor',
                class: 'p5',
                module: 'Environment'
              },
              displayWidth: {
                name: 'displayWidth',
                class: 'p5',
                module: 'Environment'
              },
              displayHeight: {
                name: 'displayHeight',
                class: 'p5',
                module: 'Environment'
              },
              windowWidth: {
                name: 'windowWidth',
                class: 'p5',
                module: 'Environment'
              },
              windowHeight: {
                name: 'windowHeight',
                class: 'p5',
                module: 'Environment'
              },
              windowResized: {
                name: 'windowResized',
                class: 'p5',
                module: 'Environment'
              },
              width: {
                name: 'width',
                class: 'p5',
                module: 'Environment'
              },
              height: {
                name: 'height',
                class: 'p5',
                module: 'Environment'
              },
              fullscreen: {
                name: 'fullscreen',
                params: [
                  {
                    name: 'val',
                    description:
                      '<p>whether the sketch should be in fullscreen mode\nor not</p>\n',
                    type: 'Boolean',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Environment'
              },
              pixelDensity: {
                name: 'pixelDensity',
                class: 'p5',
                module: 'Environment',
                overloads: [
                  {
                    params: [
                      {
                        name: 'val',
                        description: '<p>whether or how much the sketch should scale</p>\n',
                        type: 'Number'
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: []
                  }
                ]
              },
              displayDensity: {
                name: 'displayDensity',
                class: 'p5',
                module: 'Environment'
              },
              getURL: {
                name: 'getURL',
                class: 'p5',
                module: 'Environment'
              },
              getURLPath: {
                name: 'getURLPath',
                class: 'p5',
                module: 'Environment'
              },
              getURLParams: {
                name: 'getURLParams',
                class: 'p5',
                module: 'Environment'
              },
              preload: {
                name: 'preload',
                class: 'p5',
                module: 'Structure'
              },
              setup: {
                name: 'setup',
                class: 'p5',
                module: 'Structure'
              },
              draw: {
                name: 'draw',
                class: 'p5',
                module: 'Structure'
              },
              remove: {
                name: 'remove',
                class: 'p5',
                module: 'Structure'
              },
              disableFriendlyErrors: {
                name: 'disableFriendlyErrors',
                class: 'p5',
                module: 'Structure'
              },
              let: {
                name: 'let',
                class: 'p5',
                module: 'Foundation'
              },
              const: {
                name: 'const',
                class: 'p5',
                module: 'Foundation'
              },
              '===': {
                name: '===',
                class: 'p5',
                module: 'Foundation'
              },
              '>': {
                name: '>',
                class: 'p5',
                module: 'Foundation'
              },
              '>=': {
                name: '>=',
                class: 'p5',
                module: 'Foundation'
              },
              '<': {
                name: '<',
                class: 'p5',
                module: 'Foundation'
              },
              '<=': {
                name: '<=',
                class: 'p5',
                module: 'Foundation'
              },
              'if-else': {
                name: 'if-else',
                class: 'p5',
                module: 'Foundation'
              },
              function: {
                name: 'function',
                class: 'p5',
                module: 'Foundation'
              },
              return: {
                name: 'return',
                class: 'p5',
                module: 'Foundation'
              },
              boolean: {
                name: 'boolean',
                params: [
                  {
                    name: 'n',
                    description: '<p>value to parse</p>\n',
                    type: 'String|Boolean|Number|Array'
                  }
                ],
                class: 'p5',
                module: 'Data'
              },
              string: {
                name: 'string',
                class: 'p5',
                module: 'Foundation'
              },
              number: {
                name: 'number',
                class: 'p5',
                module: 'Foundation'
              },
              object: {
                name: 'object',
                class: 'p5',
                module: 'Foundation'
              },
              class: {
                name: 'class',
                class: 'p5',
                module: 'Foundation'
              },
              for: {
                name: 'for',
                class: 'p5',
                module: 'Foundation'
              },
              while: {
                name: 'while',
                class: 'p5',
                module: 'Foundation'
              },
              createCanvas: {
                name: 'createCanvas',
                params: [
                  {
                    name: 'w',
                    description: '<p>width of the canvas</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'h',
                    description: '<p>height of the canvas</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'renderer',
                    description: '<p>either P2D or WEBGL</p>\n',
                    type: 'Constant',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Rendering'
              },
              resizeCanvas: {
                name: 'resizeCanvas',
                params: [
                  {
                    name: 'w',
                    description: '<p>width of the canvas</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'h',
                    description: '<p>height of the canvas</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'noRedraw',
                    description: "<p>don't redraw the canvas immediately</p>\n",
                    type: 'Boolean',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Rendering'
              },
              noCanvas: {
                name: 'noCanvas',
                class: 'p5',
                module: 'Rendering'
              },
              createGraphics: {
                name: 'createGraphics',
                params: [
                  {
                    name: 'w',
                    description: '<p>width of the offscreen graphics buffer</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'h',
                    description: '<p>height of the offscreen graphics buffer</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'renderer',
                    description:
                      '<p>either P2D or WEBGL\n                              undefined defaults to p2d</p>\n',
                    type: 'Constant',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Rendering'
              },
              blendMode: {
                name: 'blendMode',
                params: [
                  {
                    name: 'mode',
                    description:
                      '<p>blend mode to set for canvas.\n               either BLEND, DARKEST, LIGHTEST, DIFFERENCE, MULTIPLY,\n               EXCLUSION, SCREEN, REPLACE, OVERLAY, HARD_LIGHT,\n               SOFT_LIGHT, DODGE, BURN, ADD, REMOVE or SUBTRACT</p>\n',
                    type: 'Constant'
                  }
                ],
                class: 'p5',
                module: 'Rendering'
              },
              drawingContext: {
                name: 'drawingContext',
                class: 'p5',
                module: 'Rendering'
              },
              noLoop: {
                name: 'noLoop',
                class: 'p5',
                module: 'Structure'
              },
              loop: {
                name: 'loop',
                class: 'p5',
                module: 'Structure'
              },
              isLooping: {
                name: 'isLooping',
                class: 'p5',
                module: 'Structure'
              },
              push: {
                name: 'push',
                class: 'p5',
                module: 'Structure'
              },
              pop: {
                name: 'pop',
                class: 'p5',
                module: 'Structure'
              },
              redraw: {
                name: 'redraw',
                params: [
                  {
                    name: 'n',
                    description: '<p>Redraw for n-times. The default value is 1.</p>\n',
                    type: 'Integer',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Structure'
              },
              p5: {
                name: 'p5',
                params: [
                  {
                    name: 'sketch',
                    description: '<p>a function containing a p5.js sketch</p>\n',
                    type: 'Object'
                  },
                  {
                    name: 'node',
                    description:
                      '<p>ID or pointer to HTML DOM node to contain sketch in</p>\n',
                    type: 'String|Object'
                  }
                ],
                class: 'p5',
                module: 'Structure'
              },
              applyMatrix: {
                name: 'applyMatrix',
                params: [
                  {
                    name: 'a',
                    description:
                      '<p>numbers which define the 2x3 matrix to be multiplied</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'b',
                    description:
                      '<p>numbers which define the 2x3 matrix to be multiplied</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'c',
                    description:
                      '<p>numbers which define the 2x3 matrix to be multiplied</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'd',
                    description:
                      '<p>numbers which define the 2x3 matrix to be multiplied</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'e',
                    description:
                      '<p>numbers which define the 2x3 matrix to be multiplied</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'f',
                    description:
                      '<p>numbers which define the 2x3 matrix to be multiplied</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5',
                module: 'Transform'
              },
              resetMatrix: {
                name: 'resetMatrix',
                class: 'p5',
                module: 'Transform'
              },
              rotate: {
                name: 'rotate',
                params: [
                  {
                    name: 'angle',
                    description:
                      '<p>the angle of rotation, specified in radians\n                       or degrees, depending on current angleMode</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'axis',
                    description: '<p>(in 3d) the axis to rotate around</p>\n',
                    type: 'p5.Vector|Number[]',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Transform'
              },
              rotateX: {
                name: 'rotateX',
                params: [
                  {
                    name: 'angle',
                    description:
                      '<p>the angle of rotation, specified in radians\n                       or degrees, depending on current angleMode</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5',
                module: 'Transform'
              },
              rotateY: {
                name: 'rotateY',
                params: [
                  {
                    name: 'angle',
                    description:
                      '<p>the angle of rotation, specified in radians\n                       or degrees, depending on current angleMode</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5',
                module: 'Transform'
              },
              rotateZ: {
                name: 'rotateZ',
                params: [
                  {
                    name: 'angle',
                    description:
                      '<p>the angle of rotation, specified in radians\n                       or degrees, depending on current angleMode</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5',
                module: 'Transform'
              },
              scale: {
                name: 'scale',
                class: 'p5',
                module: 'Transform',
                overloads: [
                  {
                    params: [
                      {
                        name: 's',
                        description:
                          '<p>percent to scale the object, or percentage to\n                     scale the object in the x-axis if multiple arguments\n                     are given</p>\n',
                        type: 'Number|p5.Vector|Number[]'
                      },
                      {
                        name: 'y',
                        description: '<p>percent to scale the object in the y-axis</p>\n',
                        type: 'Number',
                        optional: true
                      },
                      {
                        name: 'z',
                        description:
                          '<p>percent to scale the object in the z-axis (webgl only)</p>\n',
                        type: 'Number',
                        optional: true
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'scales',
                        description: '<p>per-axis percents to scale the object</p>\n',
                        type: 'p5.Vector|Number[]'
                      }
                    ],
                    chainable: 1
                  }
                ]
              },
              shearX: {
                name: 'shearX',
                params: [
                  {
                    name: 'angle',
                    description:
                      '<p>angle of shear specified in radians or degrees,\n                       depending on current angleMode</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5',
                module: 'Transform'
              },
              shearY: {
                name: 'shearY',
                params: [
                  {
                    name: 'angle',
                    description:
                      '<p>angle of shear specified in radians or degrees,\n                       depending on current angleMode</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5',
                module: 'Transform'
              },
              translate: {
                name: 'translate',
                class: 'p5',
                module: 'Transform',
                overloads: [
                  {
                    params: [
                      {
                        name: 'x',
                        description: '<p>left/right translation</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'y',
                        description: '<p>up/down translation</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'z',
                        description: '<p>forward/backward translation (webgl only)</p>\n',
                        type: 'Number',
                        optional: true
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'vector',
                        description: '<p>the vector to translate by</p>\n',
                        type: 'p5.Vector'
                      }
                    ],
                    chainable: 1
                  }
                ]
              },
              storeItem: {
                name: 'storeItem',
                params: [
                  {
                    name: 'key',
                    description: '',
                    type: 'String'
                  },
                  {
                    name: 'value',
                    description: '',
                    type: 'String|Number|Object|Boolean|p5.Color|p5.Vector'
                  }
                ],
                class: 'p5',
                module: 'Data'
              },
              getItem: {
                name: 'getItem',
                params: [
                  {
                    name: 'key',
                    description:
                      '<p>name that you wish to use to store in local storage</p>\n',
                    type: 'String'
                  }
                ],
                class: 'p5',
                module: 'Data'
              },
              clearStorage: {
                name: 'clearStorage',
                class: 'p5',
                module: 'Data'
              },
              removeItem: {
                name: 'removeItem',
                params: [
                  {
                    name: 'key',
                    description: '',
                    type: 'String'
                  }
                ],
                class: 'p5',
                module: 'Data'
              },
              createStringDict: {
                name: 'createStringDict',
                class: 'p5',
                module: 'Data',
                overloads: [
                  {
                    params: [
                      {
                        name: 'key',
                        description: '',
                        type: 'String'
                      },
                      {
                        name: 'value',
                        description: '',
                        type: 'String'
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'object',
                        description: '<p>object</p>\n',
                        type: 'Object'
                      }
                    ]
                  }
                ]
              },
              createNumberDict: {
                name: 'createNumberDict',
                class: 'p5',
                module: 'Data',
                overloads: [
                  {
                    params: [
                      {
                        name: 'key',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'value',
                        description: '',
                        type: 'Number'
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'object',
                        description: '<p>object</p>\n',
                        type: 'Object'
                      }
                    ]
                  }
                ]
              },
              select: {
                name: 'select',
                params: [
                  {
                    name: 'selectors',
                    description: '<p>CSS selector string of element to search for</p>\n',
                    type: 'String'
                  },
                  {
                    name: 'container',
                    description:
                      '<p>CSS selector string, <a href="#/p5.Element">p5.Element</a>, or\n                                            HTML element to search within</p>\n',
                    type: 'String|p5.Element|HTMLElement',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'DOM'
              },
              selectAll: {
                name: 'selectAll',
                params: [
                  {
                    name: 'selectors',
                    description: '<p>CSS selector string of elements to search for</p>\n',
                    type: 'String'
                  },
                  {
                    name: 'container',
                    description:
                      '<p>CSS selector string, <a href="#/p5.Element">p5.Element</a>\n                                            , or HTML element to search within</p>\n',
                    type: 'String|p5.Element|HTMLElement',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'DOM'
              },
              removeElements: {
                name: 'removeElements',
                class: 'p5',
                module: 'DOM'
              },
              changed: {
                name: 'changed',
                params: [
                  {
                    name: 'fxn',
                    description:
                      '<p>function to be fired when the value of\n                               an element changes.\n                               if <code>false</code> is passed instead, the previously\n                               firing function will no longer fire.</p>\n',
                    type: 'Function|Boolean'
                  }
                ],
                class: 'p5',
                module: 'DOM'
              },
              input: {
                name: 'input',
                params: [
                  {
                    name: 'fxn',
                    description:
                      '<p>function to be fired when any user input is\n                               detected within the element.\n                               if <code>false</code> is passed instead, the previously\n                               firing function will no longer fire.</p>\n',
                    type: 'Function|Boolean'
                  }
                ],
                class: 'p5',
                module: 'DOM'
              },
              createDiv: {
                name: 'createDiv',
                params: [
                  {
                    name: 'html',
                    description: '<p>inner HTML for element created</p>\n',
                    type: 'String',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'DOM'
              },
              createP: {
                name: 'createP',
                params: [
                  {
                    name: 'html',
                    description: '<p>inner HTML for element created</p>\n',
                    type: 'String',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'DOM'
              },
              createSpan: {
                name: 'createSpan',
                params: [
                  {
                    name: 'html',
                    description: '<p>inner HTML for element created</p>\n',
                    type: 'String',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'DOM'
              },
              createImg: {
                name: 'createImg',
                class: 'p5',
                module: 'DOM',
                overloads: [
                  {
                    params: [
                      {
                        name: 'src',
                        description: '<p>src path or url for image</p>\n',
                        type: 'String'
                      },
                      {
                        name: 'alt',
                        description:
                          '<p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Img#Attributes">alternate text</a> to be used if image does not load. You can use also an empty string (<code>""</code>) if that an image is not intended to be viewed.</p>\n',
                        type: 'String'
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'src',
                        description: '',
                        type: 'String'
                      },
                      {
                        name: 'alt',
                        description: '',
                        type: 'String'
                      },
                      {
                        name: 'crossOrigin',
                        description:
                          '<p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes">crossOrigin property</a> of the <code>img</code> element; use either \'anonymous\' or \'use-credentials\' to retrieve the image with cross-origin access (for later use with <code>canvas</code>. if an empty string(<code>""</code>) is passed, CORS is not used</p>\n',
                        type: 'String'
                      },
                      {
                        name: 'successCallback',
                        description:
                          '<p>callback to be called once image data is loaded with the <a href="#/p5.Element">p5.Element</a> as argument</p>\n',
                        type: 'Function',
                        optional: true
                      }
                    ]
                  }
                ]
              },
              createA: {
                name: 'createA',
                params: [
                  {
                    name: 'href',
                    description: '<p>url of page to link to</p>\n',
                    type: 'String'
                  },
                  {
                    name: 'html',
                    description: '<p>inner html of link element to display</p>\n',
                    type: 'String'
                  },
                  {
                    name: 'target',
                    description:
                      '<p>target where new link should open,\n                            could be _blank, _self, _parent, _top.</p>\n',
                    type: 'String',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'DOM'
              },
              createSlider: {
                name: 'createSlider',
                params: [
                  {
                    name: 'min',
                    description: '<p>minimum value of the slider</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'max',
                    description: '<p>maximum value of the slider</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'value',
                    description: '<p>default value of the slider</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'step',
                    description:
                      '<p>step size for each tick of the slider (if step is set to 0, the slider will move continuously from the minimum to the maximum value)</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'DOM'
              },
              createButton: {
                name: 'createButton',
                params: [
                  {
                    name: 'label',
                    description: '<p>label displayed on the button</p>\n',
                    type: 'String'
                  },
                  {
                    name: 'value',
                    description: '<p>value of the button</p>\n',
                    type: 'String',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'DOM'
              },
              createCheckbox: {
                name: 'createCheckbox',
                params: [
                  {
                    name: 'label',
                    description: '<p>label displayed after checkbox</p>\n',
                    type: 'String',
                    optional: true
                  },
                  {
                    name: 'value',
                    description:
                      '<p>value of the checkbox; checked is true, unchecked is false</p>\n',
                    type: 'Boolean',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'DOM'
              },
              createSelect: {
                name: 'createSelect',
                class: 'p5',
                module: 'DOM',
                overloads: [
                  {
                    params: [
                      {
                        name: 'multiple',
                        description:
                          '<p>true if dropdown should support multiple selections</p>\n',
                        type: 'Boolean',
                        optional: true
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'existing',
                        description: '<p>DOM select element</p>\n',
                        type: 'Object'
                      }
                    ]
                  }
                ]
              },
              createRadio: {
                name: 'createRadio',
                class: 'p5',
                module: 'DOM',
                overloads: [
                  {
                    params: [
                      {
                        name: 'containerElement',
                        description:
                          '<p>An container HTML Element either a div\nor span inside which all existing radio inputs will be considered as options.</p>\n',
                        type: 'Object'
                      },
                      {
                        name: 'name',
                        description: '<p>A name parameter for each Input Element.</p>\n',
                        type: 'String',
                        optional: true
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'name',
                        description: '',
                        type: 'String'
                      }
                    ]
                  },
                  {
                    params: []
                  }
                ]
              },
              createColorPicker: {
                name: 'createColorPicker',
                params: [
                  {
                    name: 'value',
                    description: '<p>default color of element</p>\n',
                    type: 'String|p5.Color',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'DOM'
              },
              createInput: {
                name: 'createInput',
                class: 'p5',
                module: 'DOM',
                overloads: [
                  {
                    params: [
                      {
                        name: 'value',
                        description: '<p>default value of the input box</p>\n',
                        type: 'String'
                      },
                      {
                        name: 'type',
                        description:
                          '<p>type of text, ie text, password etc. Defaults to text.\n  Needs a value to be specified first.</p>\n',
                        type: 'String',
                        optional: true
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'value',
                        description: '',
                        type: 'String',
                        optional: true
                      }
                    ]
                  }
                ]
              },
              createFileInput: {
                name: 'createFileInput',
                params: [
                  {
                    name: 'callback',
                    description: '<p>callback function for when a file is loaded</p>\n',
                    type: 'Function'
                  },
                  {
                    name: 'multiple',
                    description:
                      '<p>optional, to allow multiple files to be selected</p>\n',
                    type: 'Boolean',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'DOM'
              },
              createVideo: {
                name: 'createVideo',
                params: [
                  {
                    name: 'src',
                    description:
                      '<p>path to a video file, or array of paths for\n                            supporting different browsers</p>\n',
                    type: 'String|String[]'
                  },
                  {
                    name: 'callback',
                    description:
                      "<p>callback function to be called upon\n                            'canplaythrough' event fire, that is, when the\n                            browser can play the media, and estimates that\n                            enough data has been loaded to play the media\n                            up to its end without having to stop for\n                            further buffering of content</p>\n",
                    type: 'Function',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'DOM'
              },
              createAudio: {
                name: 'createAudio',
                params: [
                  {
                    name: 'src',
                    description:
                      '<p>path to an audio file, or array of paths\n                            for supporting different browsers</p>\n',
                    type: 'String|String[]',
                    optional: true
                  },
                  {
                    name: 'callback',
                    description:
                      "<p>callback function to be called upon\n                            'canplaythrough' event fire, that is, when the\n                            browser can play the media, and estimates that\n                            enough data has been loaded to play the media\n                            up to its end without having to stop for\n                            further buffering of content</p>\n",
                    type: 'Function',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'DOM'
              },
              VIDEO: {
                name: 'VIDEO',
                class: 'p5',
                module: 'DOM'
              },
              AUDIO: {
                name: 'AUDIO',
                class: 'p5',
                module: 'DOM'
              },
              createCapture: {
                name: 'createCapture',
                params: [
                  {
                    name: 'type',
                    description:
                      '<p>type of capture, either VIDEO or\n                                  AUDIO if none specified, default both,\n                                  or a Constraints object</p>\n',
                    type: 'String|Constant|Object'
                  },
                  {
                    name: 'callback',
                    description:
                      '<p>function to be called once\n                                  stream has loaded</p>\n',
                    type: 'Function',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'DOM'
              },
              createElement: {
                name: 'createElement',
                params: [
                  {
                    name: 'tag',
                    description: '<p>tag for the new element</p>\n',
                    type: 'String'
                  },
                  {
                    name: 'content',
                    description: '<p>html content to be inserted into the element</p>\n',
                    type: 'String',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'DOM'
              },
              deviceOrientation: {
                name: 'deviceOrientation',
                class: 'p5',
                module: 'Events'
              },
              accelerationX: {
                name: 'accelerationX',
                class: 'p5',
                module: 'Events'
              },
              accelerationY: {
                name: 'accelerationY',
                class: 'p5',
                module: 'Events'
              },
              accelerationZ: {
                name: 'accelerationZ',
                class: 'p5',
                module: 'Events'
              },
              pAccelerationX: {
                name: 'pAccelerationX',
                class: 'p5',
                module: 'Events'
              },
              pAccelerationY: {
                name: 'pAccelerationY',
                class: 'p5',
                module: 'Events'
              },
              pAccelerationZ: {
                name: 'pAccelerationZ',
                class: 'p5',
                module: 'Events'
              },
              rotationX: {
                name: 'rotationX',
                class: 'p5',
                module: 'Events'
              },
              rotationY: {
                name: 'rotationY',
                class: 'p5',
                module: 'Events'
              },
              rotationZ: {
                name: 'rotationZ',
                class: 'p5',
                module: 'Events'
              },
              pRotationX: {
                name: 'pRotationX',
                class: 'p5',
                module: 'Events'
              },
              pRotationY: {
                name: 'pRotationY',
                class: 'p5',
                module: 'Events'
              },
              pRotationZ: {
                name: 'pRotationZ',
                class: 'p5',
                module: 'Events'
              },
              turnAxis: {
                name: 'turnAxis',
                class: 'p5',
                module: 'Events'
              },
              setMoveThreshold: {
                name: 'setMoveThreshold',
                params: [
                  {
                    name: 'value',
                    description: '<p>The threshold value</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5',
                module: 'Events'
              },
              setShakeThreshold: {
                name: 'setShakeThreshold',
                params: [
                  {
                    name: 'value',
                    description: '<p>The threshold value</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5',
                module: 'Events'
              },
              deviceMoved: {
                name: 'deviceMoved',
                class: 'p5',
                module: 'Events'
              },
              deviceTurned: {
                name: 'deviceTurned',
                class: 'p5',
                module: 'Events'
              },
              deviceShaken: {
                name: 'deviceShaken',
                class: 'p5',
                module: 'Events'
              },
              keyIsPressed: {
                name: 'keyIsPressed',
                class: 'p5',
                module: 'Events'
              },
              key: {
                name: 'key',
                class: 'p5',
                module: 'Events'
              },
              keyCode: {
                name: 'keyCode',
                class: 'p5',
                module: 'Events'
              },
              keyPressed: {
                name: 'keyPressed',
                class: 'p5',
                module: 'Events'
              },
              keyReleased: {
                name: 'keyReleased',
                class: 'p5',
                module: 'Events'
              },
              keyTyped: {
                name: 'keyTyped',
                class: 'p5',
                module: 'Events'
              },
              keyIsDown: {
                name: 'keyIsDown',
                params: [
                  {
                    name: 'code',
                    description: '<p>The key to check for.</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5',
                module: 'Events'
              },
              movedX: {
                name: 'movedX',
                class: 'p5',
                module: 'Events'
              },
              movedY: {
                name: 'movedY',
                class: 'p5',
                module: 'Events'
              },
              mouseX: {
                name: 'mouseX',
                class: 'p5',
                module: 'Events'
              },
              mouseY: {
                name: 'mouseY',
                class: 'p5',
                module: 'Events'
              },
              pmouseX: {
                name: 'pmouseX',
                class: 'p5',
                module: 'Events'
              },
              pmouseY: {
                name: 'pmouseY',
                class: 'p5',
                module: 'Events'
              },
              winMouseX: {
                name: 'winMouseX',
                class: 'p5',
                module: 'Events'
              },
              winMouseY: {
                name: 'winMouseY',
                class: 'p5',
                module: 'Events'
              },
              pwinMouseX: {
                name: 'pwinMouseX',
                class: 'p5',
                module: 'Events'
              },
              pwinMouseY: {
                name: 'pwinMouseY',
                class: 'p5',
                module: 'Events'
              },
              mouseButton: {
                name: 'mouseButton',
                class: 'p5',
                module: 'Events'
              },
              mouseIsPressed: {
                name: 'mouseIsPressed',
                class: 'p5',
                module: 'Events'
              },
              mouseMoved: {
                name: 'mouseMoved',
                params: [
                  {
                    name: 'event',
                    description: '<p>optional MouseEvent callback argument.</p>\n',
                    type: 'Object',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Events'
              },
              mouseDragged: {
                name: 'mouseDragged',
                params: [
                  {
                    name: 'event',
                    description: '<p>optional MouseEvent callback argument.</p>\n',
                    type: 'Object',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Events'
              },
              mousePressed: {
                name: 'mousePressed',
                params: [
                  {
                    name: 'event',
                    description: '<p>optional MouseEvent callback argument.</p>\n',
                    type: 'Object',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Events'
              },
              mouseReleased: {
                name: 'mouseReleased',
                params: [
                  {
                    name: 'event',
                    description: '<p>optional MouseEvent callback argument.</p>\n',
                    type: 'Object',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Events'
              },
              mouseClicked: {
                name: 'mouseClicked',
                params: [
                  {
                    name: 'event',
                    description: '<p>optional MouseEvent callback argument.</p>\n',
                    type: 'Object',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Events'
              },
              doubleClicked: {
                name: 'doubleClicked',
                params: [
                  {
                    name: 'event',
                    description: '<p>optional MouseEvent callback argument.</p>\n',
                    type: 'Object',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Events'
              },
              mouseWheel: {
                name: 'mouseWheel',
                params: [
                  {
                    name: 'event',
                    description: '<p>optional WheelEvent callback argument.</p>\n',
                    type: 'Object',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Events'
              },
              requestPointerLock: {
                name: 'requestPointerLock',
                class: 'p5',
                module: 'Events'
              },
              exitPointerLock: {
                name: 'exitPointerLock',
                class: 'p5',
                module: 'Events'
              },
              touches: {
                name: 'touches',
                class: 'p5',
                module: 'Events'
              },
              touchStarted: {
                name: 'touchStarted',
                params: [
                  {
                    name: 'event',
                    description: '<p>optional TouchEvent callback argument.</p>\n',
                    type: 'Object',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Events'
              },
              touchMoved: {
                name: 'touchMoved',
                params: [
                  {
                    name: 'event',
                    description: '<p>optional TouchEvent callback argument.</p>\n',
                    type: 'Object',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Events'
              },
              touchEnded: {
                name: 'touchEnded',
                params: [
                  {
                    name: 'event',
                    description: '<p>optional TouchEvent callback argument.</p>\n',
                    type: 'Object',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Events'
              },
              createImage: {
                name: 'createImage',
                params: [
                  {
                    name: 'width',
                    description: '<p>width in pixels</p>\n',
                    type: 'Integer'
                  },
                  {
                    name: 'height',
                    description: '<p>height in pixels</p>\n',
                    type: 'Integer'
                  }
                ],
                class: 'p5',
                module: 'Image'
              },
              saveCanvas: {
                name: 'saveCanvas',
                class: 'p5',
                module: 'Image',
                overloads: [
                  {
                    params: [
                      {
                        name: 'selectedCanvas',
                        description:
                          '<p>a variable\n                                representing a specific html5 canvas (optional)</p>\n',
                        type: 'p5.Element|HTMLCanvasElement'
                      },
                      {
                        name: 'filename',
                        description: '',
                        type: 'String',
                        optional: true
                      },
                      {
                        name: 'extension',
                        description: "<p>'jpg' or 'png'</p>\n",
                        type: 'String',
                        optional: true
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'filename',
                        description: '',
                        type: 'String',
                        optional: true
                      },
                      {
                        name: 'extension',
                        description: '',
                        type: 'String',
                        optional: true
                      }
                    ]
                  }
                ]
              },
              saveFrames: {
                name: 'saveFrames',
                params: [
                  {
                    name: 'filename',
                    description: '',
                    type: 'String'
                  },
                  {
                    name: 'extension',
                    description: "<p>'jpg' or 'png'</p>\n",
                    type: 'String'
                  },
                  {
                    name: 'duration',
                    description: '<p>Duration in seconds to save the frames for.</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'framerate',
                    description: '<p>Framerate to save the frames in.</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'callback',
                    description:
                      '<p>A callback function that will be executed\n                                to handle the image data. This function\n                                should accept an array as argument. The\n                                array will contain the specified number of\n                                frames of objects. Each object has three\n                                properties: imageData - an\n                                image/octet-stream, filename and extension.</p>\n',
                    type: 'Function(Array)',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Image'
              },
              loadImage: {
                name: 'loadImage',
                params: [
                  {
                    name: 'path',
                    description: '<p>Path of the image to be loaded</p>\n',
                    type: 'String'
                  },
                  {
                    name: 'successCallback',
                    description:
                      '<p>Function to be called once\n                               the image is loaded. Will be passed the\n                               <a href="#/p5.Image">p5.Image</a>.</p>\n',
                    type: 'function(p5.Image)',
                    optional: true
                  },
                  {
                    name: 'failureCallback',
                    description:
                      '<p>called with event error if\n                               the image fails to load.</p>\n',
                    type: 'Function(Event)',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Image'
              },
              image: {
                name: 'image',
                class: 'p5',
                module: 'Image',
                overloads: [
                  {
                    params: [
                      {
                        name: 'img',
                        description: '<p>the image to display</p>\n',
                        type: 'p5.Image|p5.Element'
                      },
                      {
                        name: 'x',
                        description:
                          '<p>the x-coordinate of the top-left corner of the image</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'y',
                        description:
                          '<p>the y-coordinate of the top-left corner of the image</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'width',
                        description: '<p>the width to draw the image</p>\n',
                        type: 'Number',
                        optional: true
                      },
                      {
                        name: 'height',
                        description: '<p>the height to draw the image</p>\n',
                        type: 'Number',
                        optional: true
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'img',
                        description: '',
                        type: 'p5.Image|p5.Element'
                      },
                      {
                        name: 'dx',
                        description:
                          '<p>the x-coordinate of the destination\n                          rectangle in which to draw the source image</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'dy',
                        description:
                          '<p>the y-coordinate of the destination\n                          rectangle in which to draw the source image</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'dWidth',
                        description: '<p>the width of the destination rectangle</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'dHeight',
                        description: '<p>the height of the destination rectangle</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'sx',
                        description:
                          '<p>the x-coordinate of the subsection of the source\nimage to draw into the destination rectangle</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'sy',
                        description:
                          '<p>the y-coordinate of the subsection of the source\nimage to draw into the destination rectangle</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'sWidth',
                        description:
                          '<p>the width of the subsection of the\n                          source image to draw into the destination\n                          rectangle</p>\n',
                        type: 'Number',
                        optional: true
                      },
                      {
                        name: 'sHeight',
                        description:
                          '<p>the height of the subsection of the\n                           source image to draw into the destination rectangle</p>\n',
                        type: 'Number',
                        optional: true
                      }
                    ]
                  }
                ]
              },
              tint: {
                name: 'tint',
                class: 'p5',
                module: 'Image',
                overloads: [
                  {
                    params: [
                      {
                        name: 'v1',
                        description:
                          '<p>red or hue value relative to\n                                the current color range</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'v2',
                        description:
                          '<p>green or saturation value\n                                relative to the current color range</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'v3',
                        description:
                          '<p>blue or brightness value\n                                relative to the current color range</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'alpha',
                        description: '',
                        type: 'Number',
                        optional: true
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'value',
                        description: '<p>a color string</p>\n',
                        type: 'String'
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'gray',
                        description: '<p>a gray value</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'alpha',
                        description: '',
                        type: 'Number',
                        optional: true
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'values',
                        description:
                          '<p>an array containing the red,green,blue &\n                                and alpha components of the color</p>\n',
                        type: 'Number[]'
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'color',
                        description: '<p>the tint color</p>\n',
                        type: 'p5.Color'
                      }
                    ]
                  }
                ]
              },
              noTint: {
                name: 'noTint',
                class: 'p5',
                module: 'Image'
              },
              imageMode: {
                name: 'imageMode',
                params: [
                  {
                    name: 'mode',
                    description: '<p>either CORNER, CORNERS, or CENTER</p>\n',
                    type: 'Constant'
                  }
                ],
                class: 'p5',
                module: 'Image'
              },
              pixels: {
                name: 'pixels',
                class: 'p5',
                module: 'Image'
              },
              blend: {
                name: 'blend',
                class: 'p5',
                module: 'Image',
                overloads: [
                  {
                    params: [
                      {
                        name: 'srcImage',
                        description: '<p>source image</p>\n',
                        type: 'p5.Image'
                      },
                      {
                        name: 'sx',
                        description:
                          "<p>X coordinate of the source's upper left corner</p>\n",
                        type: 'Integer'
                      },
                      {
                        name: 'sy',
                        description:
                          "<p>Y coordinate of the source's upper left corner</p>\n",
                        type: 'Integer'
                      },
                      {
                        name: 'sw',
                        description: '<p>source image width</p>\n',
                        type: 'Integer'
                      },
                      {
                        name: 'sh',
                        description: '<p>source image height</p>\n',
                        type: 'Integer'
                      },
                      {
                        name: 'dx',
                        description:
                          "<p>X coordinate of the destination's upper left corner</p>\n",
                        type: 'Integer'
                      },
                      {
                        name: 'dy',
                        description:
                          "<p>Y coordinate of the destination's upper left corner</p>\n",
                        type: 'Integer'
                      },
                      {
                        name: 'dw',
                        description: '<p>destination image width</p>\n',
                        type: 'Integer'
                      },
                      {
                        name: 'dh',
                        description: '<p>destination image height</p>\n',
                        type: 'Integer'
                      },
                      {
                        name: 'blendMode',
                        description:
                          '<p>the blend mode. either\n    BLEND, DARKEST, LIGHTEST, DIFFERENCE,\n    MULTIPLY, EXCLUSION, SCREEN, REPLACE, OVERLAY, HARD_LIGHT,\n    SOFT_LIGHT, DODGE, BURN, ADD or NORMAL.</p>\n',
                        type: 'Constant'
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'sx',
                        description: '',
                        type: 'Integer'
                      },
                      {
                        name: 'sy',
                        description: '',
                        type: 'Integer'
                      },
                      {
                        name: 'sw',
                        description: '',
                        type: 'Integer'
                      },
                      {
                        name: 'sh',
                        description: '',
                        type: 'Integer'
                      },
                      {
                        name: 'dx',
                        description: '',
                        type: 'Integer'
                      },
                      {
                        name: 'dy',
                        description: '',
                        type: 'Integer'
                      },
                      {
                        name: 'dw',
                        description: '',
                        type: 'Integer'
                      },
                      {
                        name: 'dh',
                        description: '',
                        type: 'Integer'
                      },
                      {
                        name: 'blendMode',
                        description: '',
                        type: 'Constant'
                      }
                    ]
                  }
                ]
              },
              copy: {
                name: 'copy',
                class: 'p5',
                module: 'Image',
                overloads: [
                  {
                    params: [
                      {
                        name: 'srcImage',
                        description: '<p>source image</p>\n',
                        type: 'p5.Image|p5.Element'
                      },
                      {
                        name: 'sx',
                        description:
                          "<p>X coordinate of the source's upper left corner</p>\n",
                        type: 'Integer'
                      },
                      {
                        name: 'sy',
                        description:
                          "<p>Y coordinate of the source's upper left corner</p>\n",
                        type: 'Integer'
                      },
                      {
                        name: 'sw',
                        description: '<p>source image width</p>\n',
                        type: 'Integer'
                      },
                      {
                        name: 'sh',
                        description: '<p>source image height</p>\n',
                        type: 'Integer'
                      },
                      {
                        name: 'dx',
                        description:
                          "<p>X coordinate of the destination's upper left corner</p>\n",
                        type: 'Integer'
                      },
                      {
                        name: 'dy',
                        description:
                          "<p>Y coordinate of the destination's upper left corner</p>\n",
                        type: 'Integer'
                      },
                      {
                        name: 'dw',
                        description: '<p>destination image width</p>\n',
                        type: 'Integer'
                      },
                      {
                        name: 'dh',
                        description: '<p>destination image height</p>\n',
                        type: 'Integer'
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'sx',
                        description: '',
                        type: 'Integer'
                      },
                      {
                        name: 'sy',
                        description: '',
                        type: 'Integer'
                      },
                      {
                        name: 'sw',
                        description: '',
                        type: 'Integer'
                      },
                      {
                        name: 'sh',
                        description: '',
                        type: 'Integer'
                      },
                      {
                        name: 'dx',
                        description: '',
                        type: 'Integer'
                      },
                      {
                        name: 'dy',
                        description: '',
                        type: 'Integer'
                      },
                      {
                        name: 'dw',
                        description: '',
                        type: 'Integer'
                      },
                      {
                        name: 'dh',
                        description: '',
                        type: 'Integer'
                      }
                    ]
                  }
                ]
              },
              filter: {
                name: 'filter',
                params: [
                  {
                    name: 'filterType',
                    description:
                      '<p>either THRESHOLD, GRAY, OPAQUE, INVERT,\n                               POSTERIZE, BLUR, ERODE, DILATE or BLUR.\n                               See Filters.js for docs on\n                               each available filter</p>\n',
                    type: 'Constant'
                  },
                  {
                    name: 'filterParam',
                    description:
                      '<p>an optional parameter unique\n                               to each filter, see above</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Image'
              },
              get: {
                name: 'get',
                class: 'p5',
                module: 'Image',
                overloads: [
                  {
                    params: [
                      {
                        name: 'x',
                        description: '<p>x-coordinate of the pixel</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'y',
                        description: '<p>y-coordinate of the pixel</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'w',
                        description: '<p>width</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'h',
                        description: '<p>height</p>\n',
                        type: 'Number'
                      }
                    ]
                  },
                  {
                    params: []
                  },
                  {
                    params: [
                      {
                        name: 'x',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'y',
                        description: '',
                        type: 'Number'
                      }
                    ]
                  }
                ]
              },
              loadPixels: {
                name: 'loadPixels',
                class: 'p5',
                module: 'Image'
              },
              set: {
                name: 'set',
                params: [
                  {
                    name: 'x',
                    description: '<p>x-coordinate of the pixel</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'y',
                    description: '<p>y-coordinate of the pixel</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'c',
                    description:
                      '<p>insert a grayscale value | a pixel array |\n                               a <a href="#/p5.Color">p5.Color</a> object | a <a href="#/p5.Image">p5.Image</a> to copy</p>\n',
                    type: 'Number|Number[]|Object'
                  }
                ],
                class: 'p5',
                module: 'Image'
              },
              updatePixels: {
                name: 'updatePixels',
                params: [
                  {
                    name: 'x',
                    description:
                      '<p>x-coordinate of the upper-left corner of region\n                        to update</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'y',
                    description:
                      '<p>y-coordinate of the upper-left corner of region\n                        to update</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'w',
                    description: '<p>width of region to update</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'h',
                    description: '<p>height of region to update</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Image'
              },
              loadJSON: {
                name: 'loadJSON',
                class: 'p5',
                module: 'IO',
                overloads: [
                  {
                    params: [
                      {
                        name: 'path',
                        description: '<p>name of the file or url to load</p>\n',
                        type: 'String'
                      },
                      {
                        name: 'jsonpOptions',
                        description: '<p>options object for jsonp related settings</p>\n',
                        type: 'Object',
                        optional: true
                      },
                      {
                        name: 'datatype',
                        description: '<p>"json" or "jsonp"</p>\n',
                        type: 'String',
                        optional: true
                      },
                      {
                        name: 'callback',
                        description:
                          '<p>function to be executed after\n                                   <a href="#/p5/loadJSON">loadJSON()</a> completes, data is passed\n                                   in as first argument</p>\n',
                        type: 'Function',
                        optional: true
                      },
                      {
                        name: 'errorCallback',
                        description:
                          '<p>function to be executed if\n                                   there is an error, response is passed\n                                   in as first argument</p>\n',
                        type: 'Function',
                        optional: true
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'path',
                        description: '',
                        type: 'String'
                      },
                      {
                        name: 'datatype',
                        description: '',
                        type: 'String'
                      },
                      {
                        name: 'callback',
                        description: '',
                        type: 'Function',
                        optional: true
                      },
                      {
                        name: 'errorCallback',
                        description: '',
                        type: 'Function',
                        optional: true
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'path',
                        description: '',
                        type: 'String'
                      },
                      {
                        name: 'callback',
                        description: '',
                        type: 'Function'
                      },
                      {
                        name: 'errorCallback',
                        description: '',
                        type: 'Function',
                        optional: true
                      }
                    ]
                  }
                ]
              },
              loadStrings: {
                name: 'loadStrings',
                params: [
                  {
                    name: 'filename',
                    description: '<p>name of the file or url to load</p>\n',
                    type: 'String'
                  },
                  {
                    name: 'callback',
                    description:
                      '<p>function to be executed after <a href="#/p5/loadStrings">loadStrings()</a>\n                              completes, Array is passed in as first\n                              argument</p>\n',
                    type: 'Function',
                    optional: true
                  },
                  {
                    name: 'errorCallback',
                    description:
                      '<p>function to be executed if\n                              there is an error, response is passed\n                              in as first argument</p>\n',
                    type: 'Function',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'IO'
              },
              loadTable: {
                name: 'loadTable',
                params: [
                  {
                    name: 'filename',
                    description: '<p>name of the file or URL to load</p>\n',
                    type: 'String'
                  },
                  {
                    name: 'extension',
                    description:
                      '<p>parse the table by comma-separated values "csv", semicolon-separated\n                                     values "ssv", or tab-separated values "tsv"</p>\n',
                    type: 'String',
                    optional: true
                  },
                  {
                    name: 'header',
                    description: '<p>"header" to indicate table has header row</p>\n',
                    type: 'String',
                    optional: true
                  },
                  {
                    name: 'callback',
                    description:
                      '<p>function to be executed after\n                                     <a href="#/p5/loadTable">loadTable()</a> completes. On success, the\n                                     <a href="#/p5.Table">Table</a> object is passed in as the\n                                     first argument.</p>\n',
                    type: 'Function',
                    optional: true
                  },
                  {
                    name: 'errorCallback',
                    description:
                      '<p>function to be executed if\n                                     there is an error, response is passed\n                                     in as first argument</p>\n',
                    type: 'Function',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'IO'
              },
              loadXML: {
                name: 'loadXML',
                params: [
                  {
                    name: 'filename',
                    description: '<p>name of the file or URL to load</p>\n',
                    type: 'String'
                  },
                  {
                    name: 'callback',
                    description:
                      '<p>function to be executed after <a href="#/p5/loadXML">loadXML()</a>\n                              completes, XML object is passed in as\n                              first argument</p>\n',
                    type: 'Function',
                    optional: true
                  },
                  {
                    name: 'errorCallback',
                    description:
                      '<p>function to be executed if\n                              there is an error, response is passed\n                              in as first argument</p>\n',
                    type: 'Function',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'IO'
              },
              loadBytes: {
                name: 'loadBytes',
                params: [
                  {
                    name: 'file',
                    description: '<p>name of the file or URL to load</p>\n',
                    type: 'String'
                  },
                  {
                    name: 'callback',
                    description:
                      '<p>function to be executed after <a href="#/p5/loadBytes">loadBytes()</a>\n                                   completes</p>\n',
                    type: 'Function',
                    optional: true
                  },
                  {
                    name: 'errorCallback',
                    description:
                      '<p>function to be executed if there\n                                   is an error</p>\n',
                    type: 'Function',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'IO'
              },
              httpGet: {
                name: 'httpGet',
                class: 'p5',
                module: 'IO',
                overloads: [
                  {
                    params: [
                      {
                        name: 'path',
                        description: '<p>name of the file or url to load</p>\n',
                        type: 'String'
                      },
                      {
                        name: 'datatype',
                        description:
                          '<p>"json", "jsonp", "binary", "arrayBuffer",\n                                   "xml", or "text"</p>\n',
                        type: 'String',
                        optional: true
                      },
                      {
                        name: 'data',
                        description: '<p>param data passed sent with request</p>\n',
                        type: 'Object|Boolean',
                        optional: true
                      },
                      {
                        name: 'callback',
                        description:
                          '<p>function to be executed after\n                                   <a href="#/p5/httpGet">httpGet()</a> completes, data is passed in\n                                   as first argument</p>\n',
                        type: 'Function',
                        optional: true
                      },
                      {
                        name: 'errorCallback',
                        description:
                          '<p>function to be executed if\n                                   there is an error, response is passed\n                                   in as first argument</p>\n',
                        type: 'Function',
                        optional: true
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'path',
                        description: '',
                        type: 'String'
                      },
                      {
                        name: 'data',
                        description: '',
                        type: 'Object|Boolean'
                      },
                      {
                        name: 'callback',
                        description: '',
                        type: 'Function',
                        optional: true
                      },
                      {
                        name: 'errorCallback',
                        description: '',
                        type: 'Function',
                        optional: true
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'path',
                        description: '',
                        type: 'String'
                      },
                      {
                        name: 'callback',
                        description: '',
                        type: 'Function'
                      },
                      {
                        name: 'errorCallback',
                        description: '',
                        type: 'Function',
                        optional: true
                      }
                    ]
                  }
                ]
              },
              httpPost: {
                name: 'httpPost',
                class: 'p5',
                module: 'IO',
                overloads: [
                  {
                    params: [
                      {
                        name: 'path',
                        description: '<p>name of the file or url to load</p>\n',
                        type: 'String'
                      },
                      {
                        name: 'datatype',
                        description:
                          '<p>"json", "jsonp", "xml", or "text".\n                                   If omitted, <a href="#/p5/httpPost">httpPost()</a> will guess.</p>\n',
                        type: 'String',
                        optional: true
                      },
                      {
                        name: 'data',
                        description: '<p>param data passed sent with request</p>\n',
                        type: 'Object|Boolean',
                        optional: true
                      },
                      {
                        name: 'callback',
                        description:
                          '<p>function to be executed after\n                                   <a href="#/p5/httpPost">httpPost()</a> completes, data is passed in\n                                   as first argument</p>\n',
                        type: 'Function',
                        optional: true
                      },
                      {
                        name: 'errorCallback',
                        description:
                          '<p>function to be executed if\n                                   there is an error, response is passed\n                                   in as first argument</p>\n',
                        type: 'Function',
                        optional: true
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'path',
                        description: '',
                        type: 'String'
                      },
                      {
                        name: 'data',
                        description: '',
                        type: 'Object|Boolean'
                      },
                      {
                        name: 'callback',
                        description: '',
                        type: 'Function',
                        optional: true
                      },
                      {
                        name: 'errorCallback',
                        description: '',
                        type: 'Function',
                        optional: true
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'path',
                        description: '',
                        type: 'String'
                      },
                      {
                        name: 'callback',
                        description: '',
                        type: 'Function'
                      },
                      {
                        name: 'errorCallback',
                        description: '',
                        type: 'Function',
                        optional: true
                      }
                    ]
                  }
                ]
              },
              httpDo: {
                name: 'httpDo',
                class: 'p5',
                module: 'IO',
                overloads: [
                  {
                    params: [
                      {
                        name: 'path',
                        description: '<p>name of the file or url to load</p>\n',
                        type: 'String'
                      },
                      {
                        name: 'method',
                        description:
                          '<p>either "GET", "POST", or "PUT",\n                                   defaults to "GET"</p>\n',
                        type: 'String',
                        optional: true
                      },
                      {
                        name: 'datatype',
                        description: '<p>"json", "jsonp", "xml", or "text"</p>\n',
                        type: 'String',
                        optional: true
                      },
                      {
                        name: 'data',
                        description: '<p>param data passed sent with request</p>\n',
                        type: 'Object',
                        optional: true
                      },
                      {
                        name: 'callback',
                        description:
                          '<p>function to be executed after\n                                   <a href="#/p5/httpGet">httpGet()</a> completes, data is passed in\n                                   as first argument</p>\n',
                        type: 'Function',
                        optional: true
                      },
                      {
                        name: 'errorCallback',
                        description:
                          '<p>function to be executed if\n                                   there is an error, response is passed\n                                   in as first argument</p>\n',
                        type: 'Function',
                        optional: true
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'path',
                        description: '',
                        type: 'String'
                      },
                      {
                        name: 'options',
                        description:
                          '<p>Request object options as documented in the\n                                   "fetch" API\n<a href="https://developer.mozilla.org/en/docs/Web/API/Fetch_API">reference</a></p>\n',
                        type: 'Object'
                      },
                      {
                        name: 'callback',
                        description: '',
                        type: 'Function',
                        optional: true
                      },
                      {
                        name: 'errorCallback',
                        description: '',
                        type: 'Function',
                        optional: true
                      }
                    ]
                  }
                ]
              },
              createWriter: {
                name: 'createWriter',
                params: [
                  {
                    name: 'name',
                    description: '<p>name of the file to be created</p>\n',
                    type: 'String'
                  },
                  {
                    name: 'extension',
                    description: '',
                    type: 'String',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'IO'
              },
              save: {
                name: 'save',
                params: [
                  {
                    name: 'objectOrFilename',
                    description:
                      '<p>If filename is provided, will\n                                           save canvas as an image with\n                                           either png or jpg extension\n                                           depending on the filename.\n                                           If object is provided, will\n                                           save depending on the object\n                                           and filename (see examples\n                                           above).</p>\n',
                    type: 'Object|String',
                    optional: true
                  },
                  {
                    name: 'filename',
                    description:
                      '<p>If an object is provided as the first\n                             parameter, then the second parameter\n                             indicates the filename,\n                             and should include an appropriate\n                             file extension (see examples above).</p>\n',
                    type: 'String',
                    optional: true
                  },
                  {
                    name: 'options',
                    description:
                      '<p>Additional options depend on\n                          filetype. For example, when saving JSON,\n                          <code>true</code> indicates that the\n                          output will be optimized for filesize,\n                          rather than readability.</p>\n',
                    type: 'Boolean|String',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'IO'
              },
              saveJSON: {
                name: 'saveJSON',
                params: [
                  {
                    name: 'json',
                    description: '',
                    type: 'Array|Object'
                  },
                  {
                    name: 'filename',
                    description: '',
                    type: 'String'
                  },
                  {
                    name: 'optimize',
                    description:
                      '<p>If true, removes line breaks\n                               and spaces from the output\n                               file to optimize filesize\n                               (but not readability).</p>\n',
                    type: 'Boolean',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'IO'
              },
              saveStrings: {
                name: 'saveStrings',
                params: [
                  {
                    name: 'list',
                    description: '<p>string array to be written</p>\n',
                    type: 'String[]'
                  },
                  {
                    name: 'filename',
                    description: '<p>filename for output</p>\n',
                    type: 'String'
                  },
                  {
                    name: 'extension',
                    description: "<p>the filename's extension</p>\n",
                    type: 'String',
                    optional: true
                  },
                  {
                    name: 'isCRLF',
                    description: '<p>if true, change line-break to CRLF</p>\n',
                    type: 'Boolean',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'IO'
              },
              saveTable: {
                name: 'saveTable',
                params: [
                  {
                    name: 'Table',
                    description:
                      '<p>the <a href="#/p5.Table">Table</a> object to save to a file</p>\n',
                    type: 'p5.Table'
                  },
                  {
                    name: 'filename',
                    description: '<p>the filename to which the Table should be saved</p>\n',
                    type: 'String'
                  },
                  {
                    name: 'options',
                    description: '<p>can be one of "tsv", "csv", or "html"</p>\n',
                    type: 'String',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'IO'
              },
              abs: {
                name: 'abs',
                params: [
                  {
                    name: 'n',
                    description: '<p>number to compute</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5',
                module: 'Math'
              },
              ceil: {
                name: 'ceil',
                params: [
                  {
                    name: 'n',
                    description: '<p>number to round up</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5',
                module: 'Math'
              },
              constrain: {
                name: 'constrain',
                params: [
                  {
                    name: 'n',
                    description: '<p>number to constrain</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'low',
                    description: '<p>minimum limit</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'high',
                    description: '<p>maximum limit</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5',
                module: 'Math'
              },
              dist: {
                name: 'dist',
                class: 'p5',
                module: 'Math',
                overloads: [
                  {
                    params: [
                      {
                        name: 'x1',
                        description: '<p>x-coordinate of the first point</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'y1',
                        description: '<p>y-coordinate of the first point</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'x2',
                        description: '<p>x-coordinate of the second point</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'y2',
                        description: '<p>y-coordinate of the second point</p>\n',
                        type: 'Number'
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'x1',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'y1',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'z1',
                        description: '<p>z-coordinate of the first point</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'x2',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'y2',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'z2',
                        description: '<p>z-coordinate of the second point</p>\n',
                        type: 'Number'
                      }
                    ]
                  }
                ]
              },
              exp: {
                name: 'exp',
                params: [
                  {
                    name: 'n',
                    description: '<p>exponent to raise</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5',
                module: 'Math'
              },
              floor: {
                name: 'floor',
                params: [
                  {
                    name: 'n',
                    description: '<p>number to round down</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5',
                module: 'Math'
              },
              lerp: {
                name: 'lerp',
                params: [
                  {
                    name: 'start',
                    description: '<p>first value</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'stop',
                    description: '<p>second value</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'amt',
                    description: '<p>number</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5',
                module: 'Math'
              },
              log: {
                name: 'log',
                params: [
                  {
                    name: 'n',
                    description: '<p>number greater than 0</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5',
                module: 'Math'
              },
              mag: {
                name: 'mag',
                params: [
                  {
                    name: 'a',
                    description: '<p>first value</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'b',
                    description: '<p>second value</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5',
                module: 'Math'
              },
              map: {
                name: 'map',
                params: [
                  {
                    name: 'value',
                    description: '<p>the incoming value to be converted</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'start1',
                    description: "<p>lower bound of the value's current range</p>\n",
                    type: 'Number'
                  },
                  {
                    name: 'stop1',
                    description: "<p>upper bound of the value's current range</p>\n",
                    type: 'Number'
                  },
                  {
                    name: 'start2',
                    description: "<p>lower bound of the value's target range</p>\n",
                    type: 'Number'
                  },
                  {
                    name: 'stop2',
                    description: "<p>upper bound of the value's target range</p>\n",
                    type: 'Number'
                  },
                  {
                    name: 'withinBounds',
                    description: '<p>constrain the value to the newly mapped range</p>\n',
                    type: 'Boolean',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Math'
              },
              max: {
                name: 'max',
                class: 'p5',
                module: 'Math',
                overloads: [
                  {
                    params: [
                      {
                        name: 'n0',
                        description: '<p>Number to compare</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'n1',
                        description: '<p>Number to compare</p>\n',
                        type: 'Number'
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'nums',
                        description: '<p>Numbers to compare</p>\n',
                        type: 'Number[]'
                      }
                    ]
                  }
                ]
              },
              min: {
                name: 'min',
                class: 'p5',
                module: 'Math',
                overloads: [
                  {
                    params: [
                      {
                        name: 'n0',
                        description: '<p>Number to compare</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'n1',
                        description: '<p>Number to compare</p>\n',
                        type: 'Number'
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'nums',
                        description: '<p>Numbers to compare</p>\n',
                        type: 'Number[]'
                      }
                    ]
                  }
                ]
              },
              norm: {
                name: 'norm',
                params: [
                  {
                    name: 'value',
                    description: '<p>incoming value to be normalized</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'start',
                    description: "<p>lower bound of the value's current range</p>\n",
                    type: 'Number'
                  },
                  {
                    name: 'stop',
                    description: "<p>upper bound of the value's current range</p>\n",
                    type: 'Number'
                  }
                ],
                class: 'p5',
                module: 'Math'
              },
              pow: {
                name: 'pow',
                params: [
                  {
                    name: 'n',
                    description: '<p>base of the exponential expression</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'e',
                    description: '<p>power by which to raise the base</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5',
                module: 'Math'
              },
              round: {
                name: 'round',
                params: [
                  {
                    name: 'n',
                    description: '<p>number to round</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'decimals',
                    description:
                      '<p>number of decimal places to round to, default is 0</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Math'
              },
              sq: {
                name: 'sq',
                params: [
                  {
                    name: 'n',
                    description: '<p>number to square</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5',
                module: 'Math'
              },
              sqrt: {
                name: 'sqrt',
                params: [
                  {
                    name: 'n',
                    description: '<p>non-negative number to square root</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5',
                module: 'Math'
              },
              fract: {
                name: 'fract',
                params: [
                  {
                    name: 'num',
                    description:
                      '<p>Number whose fractional part needs to be found out</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5',
                module: 'Math'
              },
              createVector: {
                name: 'createVector',
                params: [
                  {
                    name: 'x',
                    description: '<p>x component of the vector</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'y',
                    description: '<p>y component of the vector</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'z',
                    description: '<p>z component of the vector</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Math'
              },
              noise: {
                name: 'noise',
                params: [
                  {
                    name: 'x',
                    description: '<p>x-coordinate in noise space</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'y',
                    description: '<p>y-coordinate in noise space</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'z',
                    description: '<p>z-coordinate in noise space</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Math'
              },
              noiseDetail: {
                name: 'noiseDetail',
                params: [
                  {
                    name: 'lod',
                    description: '<p>number of octaves to be used by the noise</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'falloff',
                    description: '<p>falloff factor for each octave</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5',
                module: 'Math'
              },
              noiseSeed: {
                name: 'noiseSeed',
                params: [
                  {
                    name: 'seed',
                    description: '<p>the seed value</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5',
                module: 'Math'
              },
              randomSeed: {
                name: 'randomSeed',
                params: [
                  {
                    name: 'seed',
                    description: '<p>the seed value</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5',
                module: 'Math'
              },
              random: {
                name: 'random',
                class: 'p5',
                module: 'Math',
                overloads: [
                  {
                    params: [
                      {
                        name: 'min',
                        description: '<p>the lower bound (inclusive)</p>\n',
                        type: 'Number',
                        optional: true
                      },
                      {
                        name: 'max',
                        description: '<p>the upper bound (exclusive)</p>\n',
                        type: 'Number',
                        optional: true
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'choices',
                        description: '<p>the array to choose from</p>\n',
                        type: 'Array'
                      }
                    ]
                  }
                ]
              },
              randomGaussian: {
                name: 'randomGaussian',
                params: [
                  {
                    name: 'mean',
                    description: '<p>the mean</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'sd',
                    description: '<p>the standard deviation</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Math'
              },
              acos: {
                name: 'acos',
                params: [
                  {
                    name: 'value',
                    description: '<p>the value whose arc cosine is to be returned</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5',
                module: 'Math'
              },
              asin: {
                name: 'asin',
                params: [
                  {
                    name: 'value',
                    description: '<p>the value whose arc sine is to be returned</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5',
                module: 'Math'
              },
              atan: {
                name: 'atan',
                params: [
                  {
                    name: 'value',
                    description: '<p>the value whose arc tangent is to be returned</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5',
                module: 'Math'
              },
              atan2: {
                name: 'atan2',
                params: [
                  {
                    name: 'y',
                    description: '<p>y-coordinate of the point</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'x',
                    description: '<p>x-coordinate of the point</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5',
                module: 'Math'
              },
              cos: {
                name: 'cos',
                params: [
                  {
                    name: 'angle',
                    description: '<p>the angle</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5',
                module: 'Math'
              },
              sin: {
                name: 'sin',
                params: [
                  {
                    name: 'angle',
                    description: '<p>the angle</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5',
                module: 'Math'
              },
              tan: {
                name: 'tan',
                params: [
                  {
                    name: 'angle',
                    description: '<p>the angle</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5',
                module: 'Math'
              },
              degrees: {
                name: 'degrees',
                params: [
                  {
                    name: 'radians',
                    description: '<p>the radians value to convert to degrees</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5',
                module: 'Math'
              },
              radians: {
                name: 'radians',
                params: [
                  {
                    name: 'degrees',
                    description: '<p>the degree value to convert to radians</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5',
                module: 'Math'
              },
              angleMode: {
                name: 'angleMode',
                params: [
                  {
                    name: 'mode',
                    description: '<p>either RADIANS or DEGREES</p>\n',
                    type: 'Constant'
                  }
                ],
                class: 'p5',
                module: 'Math'
              },
              textAlign: {
                name: 'textAlign',
                class: 'p5',
                module: 'Typography',
                overloads: [
                  {
                    params: [
                      {
                        name: 'horizAlign',
                        description:
                          '<p>horizontal alignment, either LEFT,\n                           CENTER, or RIGHT</p>\n',
                        type: 'Constant'
                      },
                      {
                        name: 'vertAlign',
                        description:
                          '<p>vertical alignment, either TOP,\n                           BOTTOM, CENTER, or BASELINE</p>\n',
                        type: 'Constant',
                        optional: true
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: []
                  }
                ]
              },
              textLeading: {
                name: 'textLeading',
                class: 'p5',
                module: 'Typography',
                overloads: [
                  {
                    params: [
                      {
                        name: 'leading',
                        description:
                          '<p>the size in pixels for spacing between lines</p>\n',
                        type: 'Number'
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: []
                  }
                ]
              },
              textSize: {
                name: 'textSize',
                class: 'p5',
                module: 'Typography',
                overloads: [
                  {
                    params: [
                      {
                        name: 'theSize',
                        description: '<p>the size of the letters in units of pixels</p>\n',
                        type: 'Number'
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: []
                  }
                ]
              },
              textStyle: {
                name: 'textStyle',
                class: 'p5',
                module: 'Typography',
                overloads: [
                  {
                    params: [
                      {
                        name: 'theStyle',
                        description:
                          '<p>styling for text, either NORMAL,\n                           ITALIC, BOLD or BOLDITALIC</p>\n',
                        type: 'Constant'
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: []
                  }
                ]
              },
              textWidth: {
                name: 'textWidth',
                params: [
                  {
                    name: 'theText',
                    description: '<p>the String of characters to measure</p>\n',
                    type: 'String'
                  }
                ],
                class: 'p5',
                module: 'Typography'
              },
              textAscent: {
                name: 'textAscent',
                class: 'p5',
                module: 'Typography'
              },
              textDescent: {
                name: 'textDescent',
                class: 'p5',
                module: 'Typography'
              },
              loadFont: {
                name: 'loadFont',
                params: [
                  {
                    name: 'path',
                    description: '<p>name of the file or url to load</p>\n',
                    type: 'String'
                  },
                  {
                    name: 'callback',
                    description:
                      '<p>function to be executed after\n                                   <a href="#/p5/loadFont">loadFont()</a> completes</p>\n',
                    type: 'Function',
                    optional: true
                  },
                  {
                    name: 'onError',
                    description:
                      '<p>function to be executed if\n                                   an error occurs</p>\n',
                    type: 'Function',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Typography'
              },
              text: {
                name: 'text',
                params: [
                  {
                    name: 'str',
                    description:
                      '<p>the alphanumeric\n                                            symbols to be displayed</p>\n',
                    type: 'String|Object|Array|Number|Boolean'
                  },
                  {
                    name: 'x',
                    description: '<p>x-coordinate of text</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'y',
                    description: '<p>y-coordinate of text</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'x2',
                    description:
                      '<p>by default, the width of the text box,\n                    see <a href="#/p5/rectMode">rectMode()</a> for more info</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'y2',
                    description:
                      '<p>by default, the height of the text box,\n                    see <a href="#/p5/rectMode">rectMode()</a> for more info</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Typography'
              },
              textFont: {
                name: 'textFont',
                class: 'p5',
                module: 'Typography',
                overloads: [
                  {
                    params: []
                  },
                  {
                    params: [
                      {
                        name: 'font',
                        description:
                          '<p>a font loaded via <a href="#/p5/loadFont">loadFont()</a>,\nor a String representing a <a href="https://mzl.la/2dOw8WD">web safe font</a>\n(a font that is generally available across all systems)</p>\n',
                        type: 'Object|String'
                      },
                      {
                        name: 'size',
                        description: '<p>the font size to use</p>\n',
                        type: 'Number',
                        optional: true
                      }
                    ],
                    chainable: 1
                  }
                ]
              },
              append: {
                name: 'append',
                params: [
                  {
                    name: 'array',
                    description: '<p>Array to append</p>\n',
                    type: 'Array'
                  },
                  {
                    name: 'value',
                    description: '<p>to be added to the Array</p>\n',
                    type: 'Any'
                  }
                ],
                class: 'p5',
                module: 'Data'
              },
              arrayCopy: {
                name: 'arrayCopy',
                class: 'p5',
                module: 'Data',
                overloads: [
                  {
                    params: [
                      {
                        name: 'src',
                        description: '<p>the source Array</p>\n',
                        type: 'Array'
                      },
                      {
                        name: 'srcPosition',
                        description: '<p>starting position in the source Array</p>\n',
                        type: 'Integer'
                      },
                      {
                        name: 'dst',
                        description: '<p>the destination Array</p>\n',
                        type: 'Array'
                      },
                      {
                        name: 'dstPosition',
                        description: '<p>starting position in the destination Array</p>\n',
                        type: 'Integer'
                      },
                      {
                        name: 'length',
                        description: '<p>number of Array elements to be copied</p>\n',
                        type: 'Integer'
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'src',
                        description: '',
                        type: 'Array'
                      },
                      {
                        name: 'dst',
                        description: '',
                        type: 'Array'
                      },
                      {
                        name: 'length',
                        description: '',
                        type: 'Integer',
                        optional: true
                      }
                    ]
                  }
                ]
              },
              concat: {
                name: 'concat',
                params: [
                  {
                    name: 'a',
                    description: '<p>first Array to concatenate</p>\n',
                    type: 'Array'
                  },
                  {
                    name: 'b',
                    description: '<p>second Array to concatenate</p>\n',
                    type: 'Array'
                  }
                ],
                class: 'p5',
                module: 'Data'
              },
              reverse: {
                name: 'reverse',
                params: [
                  {
                    name: 'list',
                    description: '<p>Array to reverse</p>\n',
                    type: 'Array'
                  }
                ],
                class: 'p5',
                module: 'Data'
              },
              shorten: {
                name: 'shorten',
                params: [
                  {
                    name: 'list',
                    description: '<p>Array to shorten</p>\n',
                    type: 'Array'
                  }
                ],
                class: 'p5',
                module: 'Data'
              },
              shuffle: {
                name: 'shuffle',
                params: [
                  {
                    name: 'array',
                    description: '<p>Array to shuffle</p>\n',
                    type: 'Array'
                  },
                  {
                    name: 'bool',
                    description: '<p>modify passed array</p>\n',
                    type: 'Boolean',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Data'
              },
              sort: {
                name: 'sort',
                params: [
                  {
                    name: 'list',
                    description: '<p>Array to sort</p>\n',
                    type: 'Array'
                  },
                  {
                    name: 'count',
                    description: '<p>number of elements to sort, starting from 0</p>\n',
                    type: 'Integer',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Data'
              },
              splice: {
                name: 'splice',
                params: [
                  {
                    name: 'list',
                    description: '<p>Array to splice into</p>\n',
                    type: 'Array'
                  },
                  {
                    name: 'value',
                    description: '<p>value to be spliced in</p>\n',
                    type: 'Any'
                  },
                  {
                    name: 'position',
                    description: '<p>in the array from which to insert data</p>\n',
                    type: 'Integer'
                  }
                ],
                class: 'p5',
                module: 'Data'
              },
              subset: {
                name: 'subset',
                params: [
                  {
                    name: 'list',
                    description: '<p>Array to extract from</p>\n',
                    type: 'Array'
                  },
                  {
                    name: 'start',
                    description: '<p>position to begin</p>\n',
                    type: 'Integer'
                  },
                  {
                    name: 'count',
                    description: '<p>number of values to extract</p>\n',
                    type: 'Integer',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Data'
              },
              float: {
                name: 'float',
                params: [
                  {
                    name: 'str',
                    description: '<p>float string to parse</p>\n',
                    type: 'String'
                  }
                ],
                class: 'p5',
                module: 'Data'
              },
              int: {
                name: 'int',
                class: 'p5',
                module: 'Data',
                overloads: [
                  {
                    params: [
                      {
                        name: 'n',
                        description: '<p>value to parse</p>\n',
                        type: 'String|Boolean|Number'
                      },
                      {
                        name: 'radix',
                        description: '<p>the radix to convert to (default: 10)</p>\n',
                        type: 'Integer',
                        optional: true
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'ns',
                        description: '<p>values to parse</p>\n',
                        type: 'Array'
                      }
                    ]
                  }
                ]
              },
              str: {
                name: 'str',
                params: [
                  {
                    name: 'n',
                    description: '<p>value to parse</p>\n',
                    type: 'String|Boolean|Number|Array'
                  }
                ],
                class: 'p5',
                module: 'Data'
              },
              byte: {
                name: 'byte',
                class: 'p5',
                module: 'Data',
                overloads: [
                  {
                    params: [
                      {
                        name: 'n',
                        description: '<p>value to parse</p>\n',
                        type: 'String|Boolean|Number'
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'ns',
                        description: '<p>values to parse</p>\n',
                        type: 'Array'
                      }
                    ]
                  }
                ]
              },
              char: {
                name: 'char',
                class: 'p5',
                module: 'Data',
                overloads: [
                  {
                    params: [
                      {
                        name: 'n',
                        description: '<p>value to parse</p>\n',
                        type: 'String|Number'
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'ns',
                        description: '<p>values to parse</p>\n',
                        type: 'Array'
                      }
                    ]
                  }
                ]
              },
              unchar: {
                name: 'unchar',
                class: 'p5',
                module: 'Data',
                overloads: [
                  {
                    params: [
                      {
                        name: 'n',
                        description: '<p>value to parse</p>\n',
                        type: 'String'
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'ns',
                        description: '<p>values to parse</p>\n',
                        type: 'Array'
                      }
                    ]
                  }
                ]
              },
              hex: {
                name: 'hex',
                class: 'p5',
                module: 'Data',
                overloads: [
                  {
                    params: [
                      {
                        name: 'n',
                        description: '<p>value to parse</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'digits',
                        description: '',
                        type: 'Number',
                        optional: true
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'ns',
                        description: '<p>array of values to parse</p>\n',
                        type: 'Number[]'
                      },
                      {
                        name: 'digits',
                        description: '',
                        type: 'Number',
                        optional: true
                      }
                    ]
                  }
                ]
              },
              unhex: {
                name: 'unhex',
                class: 'p5',
                module: 'Data',
                overloads: [
                  {
                    params: [
                      {
                        name: 'n',
                        description: '<p>value to parse</p>\n',
                        type: 'String'
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'ns',
                        description: '<p>values to parse</p>\n',
                        type: 'Array'
                      }
                    ]
                  }
                ]
              },
              join: {
                name: 'join',
                params: [
                  {
                    name: 'list',
                    description: '<p>array of Strings to be joined</p>\n',
                    type: 'Array'
                  },
                  {
                    name: 'separator',
                    description: '<p>String to be placed between each item</p>\n',
                    type: 'String'
                  }
                ],
                class: 'p5',
                module: 'Data'
              },
              match: {
                name: 'match',
                params: [
                  {
                    name: 'str',
                    description: '<p>the String to be searched</p>\n',
                    type: 'String'
                  },
                  {
                    name: 'regexp',
                    description: '<p>the regexp to be used for matching</p>\n',
                    type: 'String'
                  }
                ],
                class: 'p5',
                module: 'Data'
              },
              matchAll: {
                name: 'matchAll',
                params: [
                  {
                    name: 'str',
                    description: '<p>the String to be searched</p>\n',
                    type: 'String'
                  },
                  {
                    name: 'regexp',
                    description: '<p>the regexp to be used for matching</p>\n',
                    type: 'String'
                  }
                ],
                class: 'p5',
                module: 'Data'
              },
              nf: {
                name: 'nf',
                class: 'p5',
                module: 'Data',
                overloads: [
                  {
                    params: [
                      {
                        name: 'num',
                        description: '<p>the Number to format</p>\n',
                        type: 'Number|String'
                      },
                      {
                        name: 'left',
                        description:
                          '<p>number of digits to the left of the\n                               decimal point</p>\n',
                        type: 'Integer|String',
                        optional: true
                      },
                      {
                        name: 'right',
                        description:
                          '<p>number of digits to the right of the\n                               decimal point</p>\n',
                        type: 'Integer|String',
                        optional: true
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'nums',
                        description: '<p>the Numbers to format</p>\n',
                        type: 'Array'
                      },
                      {
                        name: 'left',
                        description: '',
                        type: 'Integer|String',
                        optional: true
                      },
                      {
                        name: 'right',
                        description: '',
                        type: 'Integer|String',
                        optional: true
                      }
                    ]
                  }
                ]
              },
              nfc: {
                name: 'nfc',
                class: 'p5',
                module: 'Data',
                overloads: [
                  {
                    params: [
                      {
                        name: 'num',
                        description: '<p>the Number to format</p>\n',
                        type: 'Number|String'
                      },
                      {
                        name: 'right',
                        description:
                          '<p>number of digits to the right of the\n                                 decimal point</p>\n',
                        type: 'Integer|String',
                        optional: true
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'nums',
                        description: '<p>the Numbers to format</p>\n',
                        type: 'Array'
                      },
                      {
                        name: 'right',
                        description: '',
                        type: 'Integer|String',
                        optional: true
                      }
                    ]
                  }
                ]
              },
              nfp: {
                name: 'nfp',
                class: 'p5',
                module: 'Data',
                overloads: [
                  {
                    params: [
                      {
                        name: 'num',
                        description: '<p>the Number to format</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'left',
                        description:
                          '<p>number of digits to the left of the decimal\n                               point</p>\n',
                        type: 'Integer',
                        optional: true
                      },
                      {
                        name: 'right',
                        description:
                          '<p>number of digits to the right of the\n                               decimal point</p>\n',
                        type: 'Integer',
                        optional: true
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'nums',
                        description: '<p>the Numbers to format</p>\n',
                        type: 'Number[]'
                      },
                      {
                        name: 'left',
                        description: '',
                        type: 'Integer',
                        optional: true
                      },
                      {
                        name: 'right',
                        description: '',
                        type: 'Integer',
                        optional: true
                      }
                    ]
                  }
                ]
              },
              nfs: {
                name: 'nfs',
                class: 'p5',
                module: 'Data',
                overloads: [
                  {
                    params: [
                      {
                        name: 'num',
                        description: '<p>the Number to format</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'left',
                        description:
                          '<p>number of digits to the left of the decimal\n                               point</p>\n',
                        type: 'Integer',
                        optional: true
                      },
                      {
                        name: 'right',
                        description:
                          '<p>number of digits to the right of the\n                               decimal point</p>\n',
                        type: 'Integer',
                        optional: true
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'nums',
                        description: '<p>the Numbers to format</p>\n',
                        type: 'Array'
                      },
                      {
                        name: 'left',
                        description: '',
                        type: 'Integer',
                        optional: true
                      },
                      {
                        name: 'right',
                        description: '',
                        type: 'Integer',
                        optional: true
                      }
                    ]
                  }
                ]
              },
              split: {
                name: 'split',
                params: [
                  {
                    name: 'value',
                    description: '<p>the String to be split</p>\n',
                    type: 'String'
                  },
                  {
                    name: 'delim',
                    description: '<p>the String used to separate the data</p>\n',
                    type: 'String'
                  }
                ],
                class: 'p5',
                module: 'Data'
              },
              splitTokens: {
                name: 'splitTokens',
                params: [
                  {
                    name: 'value',
                    description: '<p>the String to be split</p>\n',
                    type: 'String'
                  },
                  {
                    name: 'delim',
                    description:
                      '<p>list of individual Strings that will be used as\n                         separators</p>\n',
                    type: 'String',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Data'
              },
              trim: {
                name: 'trim',
                class: 'p5',
                module: 'Data',
                overloads: [
                  {
                    params: [
                      {
                        name: 'str',
                        description: '<p>a String to be trimmed</p>\n',
                        type: 'String'
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'strs',
                        description: '<p>an Array of Strings to be trimmed</p>\n',
                        type: 'Array'
                      }
                    ]
                  }
                ]
              },
              day: {
                name: 'day',
                class: 'p5',
                module: 'IO'
              },
              hour: {
                name: 'hour',
                class: 'p5',
                module: 'IO'
              },
              minute: {
                name: 'minute',
                class: 'p5',
                module: 'IO'
              },
              millis: {
                name: 'millis',
                class: 'p5',
                module: 'IO'
              },
              month: {
                name: 'month',
                class: 'p5',
                module: 'IO'
              },
              second: {
                name: 'second',
                class: 'p5',
                module: 'IO'
              },
              year: {
                name: 'year',
                class: 'p5',
                module: 'IO'
              },
              plane: {
                name: 'plane',
                params: [
                  {
                    name: 'width',
                    description: '<p>width of the plane</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'height',
                    description: '<p>height of the plane</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'detailX',
                    description:
                      '<p>Optional number of triangle\n                            subdivisions in x-dimension</p>\n',
                    type: 'Integer',
                    optional: true
                  },
                  {
                    name: 'detailY',
                    description:
                      '<p>Optional number of triangle\n                            subdivisions in y-dimension</p>\n',
                    type: 'Integer',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Shape'
              },
              box: {
                name: 'box',
                params: [
                  {
                    name: 'width',
                    description: '<p>width of the box</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'Height',
                    description: '<p>height of the box</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'depth',
                    description: '<p>depth of the box</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'detailX',
                    description:
                      '<p>Optional number of triangle\n                           subdivisions in x-dimension</p>\n',
                    type: 'Integer',
                    optional: true
                  },
                  {
                    name: 'detailY',
                    description:
                      '<p>Optional number of triangle\n                           subdivisions in y-dimension</p>\n',
                    type: 'Integer',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Shape'
              },
              sphere: {
                name: 'sphere',
                params: [
                  {
                    name: 'radius',
                    description: '<p>radius of circle</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'detailX',
                    description: '<p>optional number of subdivisions in x-dimension</p>\n',
                    type: 'Integer',
                    optional: true
                  },
                  {
                    name: 'detailY',
                    description: '<p>optional number of subdivisions in y-dimension</p>\n',
                    type: 'Integer',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Shape'
              },
              cylinder: {
                name: 'cylinder',
                params: [
                  {
                    name: 'radius',
                    description: '<p>radius of the surface</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'height',
                    description: '<p>height of the cylinder</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'detailX',
                    description:
                      '<p>number of subdivisions in x-dimension;\n                              default is 24</p>\n',
                    type: 'Integer',
                    optional: true
                  },
                  {
                    name: 'detailY',
                    description:
                      '<p>number of subdivisions in y-dimension;\n                              default is 1</p>\n',
                    type: 'Integer',
                    optional: true
                  },
                  {
                    name: 'bottomCap',
                    description: '<p>whether to draw the bottom of the cylinder</p>\n',
                    type: 'Boolean',
                    optional: true
                  },
                  {
                    name: 'topCap',
                    description: '<p>whether to draw the top of the cylinder</p>\n',
                    type: 'Boolean',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Shape'
              },
              cone: {
                name: 'cone',
                params: [
                  {
                    name: 'radius',
                    description: '<p>radius of the bottom surface</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'height',
                    description: '<p>height of the cone</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'detailX',
                    description:
                      '<p>number of segments,\n                            the more segments the smoother geometry\n                            default is 24</p>\n',
                    type: 'Integer',
                    optional: true
                  },
                  {
                    name: 'detailY',
                    description:
                      '<p>number of segments,\n                            the more segments the smoother geometry\n                            default is 1</p>\n',
                    type: 'Integer',
                    optional: true
                  },
                  {
                    name: 'cap',
                    description: '<p>whether to draw the base of the cone</p>\n',
                    type: 'Boolean',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Shape'
              },
              ellipsoid: {
                name: 'ellipsoid',
                params: [
                  {
                    name: 'radiusx',
                    description: '<p>x-radius of ellipsoid</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'radiusy',
                    description: '<p>y-radius of ellipsoid</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'radiusz',
                    description: '<p>z-radius of ellipsoid</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'detailX',
                    description:
                      '<p>number of segments,\n                                   the more segments the smoother geometry\n                                   default is 24. Avoid detail number above\n                                   150, it may crash the browser.</p>\n',
                    type: 'Integer',
                    optional: true
                  },
                  {
                    name: 'detailY',
                    description:
                      '<p>number of segments,\n                                   the more segments the smoother geometry\n                                   default is 16. Avoid detail number above\n                                   150, it may crash the browser.</p>\n',
                    type: 'Integer',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Shape'
              },
              torus: {
                name: 'torus',
                params: [
                  {
                    name: 'radius',
                    description: '<p>radius of the whole ring</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'tubeRadius',
                    description: '<p>radius of the tube</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'detailX',
                    description:
                      '<p>number of segments in x-dimension,\n                               the more segments the smoother geometry\n                               default is 24</p>\n',
                    type: 'Integer',
                    optional: true
                  },
                  {
                    name: 'detailY',
                    description:
                      '<p>number of segments in y-dimension,\n                               the more segments the smoother geometry\n                               default is 16</p>\n',
                    type: 'Integer',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Shape'
              },
              orbitControl: {
                name: 'orbitControl',
                params: [
                  {
                    name: 'sensitivityX',
                    description: '<p>sensitivity to mouse movement along X axis</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'sensitivityY',
                    description: '<p>sensitivity to mouse movement along Y axis</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'sensitivityZ',
                    description: '<p>sensitivity to scroll movement along Z axis</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Lights, Camera'
              },
              debugMode: {
                name: 'debugMode',
                class: 'p5',
                module: 'Lights, Camera',
                overloads: [
                  {
                    params: []
                  },
                  {
                    params: [
                      {
                        name: 'mode',
                        description: '<p>either GRID or AXES</p>\n',
                        type: 'Constant'
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'mode',
                        description: '',
                        type: 'Constant'
                      },
                      {
                        name: 'gridSize',
                        description: '<p>size of one side of the grid</p>\n',
                        type: 'Number',
                        optional: true
                      },
                      {
                        name: 'gridDivisions',
                        description: '<p>number of divisions in the grid</p>\n',
                        type: 'Number',
                        optional: true
                      },
                      {
                        name: 'xOff',
                        description: '<p>X axis offset from origin (0,0,0)</p>\n',
                        type: 'Number',
                        optional: true
                      },
                      {
                        name: 'yOff',
                        description: '<p>Y axis offset from origin (0,0,0)</p>\n',
                        type: 'Number',
                        optional: true
                      },
                      {
                        name: 'zOff',
                        description: '<p>Z axis offset from origin (0,0,0)</p>\n',
                        type: 'Number',
                        optional: true
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'mode',
                        description: '',
                        type: 'Constant'
                      },
                      {
                        name: 'axesSize',
                        description: '<p>size of axes icon</p>\n',
                        type: 'Number',
                        optional: true
                      },
                      {
                        name: 'xOff',
                        description: '',
                        type: 'Number',
                        optional: true
                      },
                      {
                        name: 'yOff',
                        description: '',
                        type: 'Number',
                        optional: true
                      },
                      {
                        name: 'zOff',
                        description: '',
                        type: 'Number',
                        optional: true
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'gridSize',
                        description: '',
                        type: 'Number',
                        optional: true
                      },
                      {
                        name: 'gridDivisions',
                        description: '',
                        type: 'Number',
                        optional: true
                      },
                      {
                        name: 'gridXOff',
                        description: '',
                        type: 'Number',
                        optional: true
                      },
                      {
                        name: 'gridYOff',
                        description: '',
                        type: 'Number',
                        optional: true
                      },
                      {
                        name: 'gridZOff',
                        description: '',
                        type: 'Number',
                        optional: true
                      },
                      {
                        name: 'axesSize',
                        description: '',
                        type: 'Number',
                        optional: true
                      },
                      {
                        name: 'axesXOff',
                        description: '',
                        type: 'Number',
                        optional: true
                      },
                      {
                        name: 'axesYOff',
                        description: '',
                        type: 'Number',
                        optional: true
                      },
                      {
                        name: 'axesZOff',
                        description: '',
                        type: 'Number',
                        optional: true
                      }
                    ]
                  }
                ]
              },
              noDebugMode: {
                name: 'noDebugMode',
                class: 'p5',
                module: 'Lights, Camera'
              },
              ambientLight: {
                name: 'ambientLight',
                class: 'p5',
                module: 'Lights, Camera',
                overloads: [
                  {
                    params: [
                      {
                        name: 'v1',
                        description:
                          '<p>red or hue value relative to\n                                the current color range</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'v2',
                        description:
                          '<p>green or saturation value\n                                relative to the current color range</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'v3',
                        description:
                          '<p>blue or brightness value\n                                relative to the current color range</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'alpha',
                        description: '<p>the alpha value</p>\n',
                        type: 'Number',
                        optional: true
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'value',
                        description: '<p>a color string</p>\n',
                        type: 'String'
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'gray',
                        description: '<p>a gray value</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'alpha',
                        description: '',
                        type: 'Number',
                        optional: true
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'values',
                        description:
                          '<p>an array containing the red,green,blue &\n                                and alpha components of the color</p>\n',
                        type: 'Number[]'
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'color',
                        description: '<p>the ambient light color</p>\n',
                        type: 'p5.Color'
                      }
                    ],
                    chainable: 1
                  }
                ]
              },
              specularColor: {
                name: 'specularColor',
                class: 'p5',
                module: 'Lights, Camera',
                overloads: [
                  {
                    params: [
                      {
                        name: 'v1',
                        description:
                          '<p>red or hue value relative to\n                                the current color range</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'v2',
                        description:
                          '<p>green or saturation value\n                                relative to the current color range</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'v3',
                        description:
                          '<p>blue or brightness value\n                                relative to the current color range</p>\n',
                        type: 'Number'
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'value',
                        description: '<p>a color string</p>\n',
                        type: 'String'
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'gray',
                        description: '<p>a gray value</p>\n',
                        type: 'Number'
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'values',
                        description:
                          '<p>an array containing the red,green,blue &\n                                and alpha components of the color</p>\n',
                        type: 'Number[]'
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'color',
                        description: '<p>the ambient light color</p>\n',
                        type: 'p5.Color'
                      }
                    ],
                    chainable: 1
                  }
                ]
              },
              directionalLight: {
                name: 'directionalLight',
                class: 'p5',
                module: 'Lights, Camera',
                overloads: [
                  {
                    params: [
                      {
                        name: 'v1',
                        description:
                          '<p>red or hue value (depending on the current\ncolor mode),</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'v2',
                        description: '<p>green or saturation value</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'v3',
                        description: '<p>blue or brightness value</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'position',
                        description: '<p>the direction of the light</p>\n',
                        type: 'p5.Vector'
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'color',
                        description:
                          '<p>color Array, CSS color string,\n                                            or <a href="#/p5.Color">p5.Color</a> value</p>\n',
                        type: 'Number[]|String|p5.Color'
                      },
                      {
                        name: 'x',
                        description: '<p>x axis direction</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'y',
                        description: '<p>y axis direction</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'z',
                        description: '<p>z axis direction</p>\n',
                        type: 'Number'
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'color',
                        description: '',
                        type: 'Number[]|String|p5.Color'
                      },
                      {
                        name: 'position',
                        description: '',
                        type: 'p5.Vector'
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'v1',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'v2',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'v3',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'x',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'y',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'z',
                        description: '',
                        type: 'Number'
                      }
                    ],
                    chainable: 1
                  }
                ]
              },
              pointLight: {
                name: 'pointLight',
                class: 'p5',
                module: 'Lights, Camera',
                overloads: [
                  {
                    params: [
                      {
                        name: 'v1',
                        description:
                          '<p>red or hue value (depending on the current\ncolor mode),</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'v2',
                        description: '<p>green or saturation value</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'v3',
                        description: '<p>blue or brightness value</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'x',
                        description: '<p>x axis position</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'y',
                        description: '<p>y axis position</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'z',
                        description: '<p>z axis position</p>\n',
                        type: 'Number'
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'v1',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'v2',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'v3',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'position',
                        description: '<p>the position of the light</p>\n',
                        type: 'p5.Vector'
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'color',
                        description:
                          '<p>color Array, CSS color string,\nor <a href="#/p5.Color">p5.Color</a> value</p>\n',
                        type: 'Number[]|String|p5.Color'
                      },
                      {
                        name: 'x',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'y',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'z',
                        description: '',
                        type: 'Number'
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'color',
                        description: '',
                        type: 'Number[]|String|p5.Color'
                      },
                      {
                        name: 'position',
                        description: '',
                        type: 'p5.Vector'
                      }
                    ],
                    chainable: 1
                  }
                ]
              },
              lights: {
                name: 'lights',
                class: 'p5',
                module: 'Lights, Camera'
              },
              lightFalloff: {
                name: 'lightFalloff',
                params: [
                  {
                    name: 'constant',
                    description: '<p>constant value for determining falloff</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'linear',
                    description: '<p>linear value for determining falloff</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'quadratic',
                    description: '<p>quadratic value for determining falloff</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5',
                module: 'Lights, Camera'
              },
              spotLight: {
                name: 'spotLight',
                class: 'p5',
                module: 'Lights, Camera',
                overloads: [
                  {
                    params: [
                      {
                        name: 'v1',
                        description:
                          '<p>red or hue value (depending on the current\ncolor mode),</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'v2',
                        description: '<p>green or saturation value</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'v3',
                        description: '<p>blue or brightness value</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'x',
                        description: '<p>x axis position</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'y',
                        description: '<p>y axis position</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'z',
                        description: '<p>z axis position</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'rx',
                        description: '<p>x axis direction of light</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'ry',
                        description: '<p>y axis direction of light</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'rz',
                        description: '<p>z axis direction of light</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'angle',
                        description:
                          '<p>optional parameter for angle. Defaults to PI/3</p>\n',
                        type: 'Number',
                        optional: true
                      },
                      {
                        name: 'conc',
                        description:
                          '<p>optional parameter for concentration. Defaults to 100</p>\n',
                        type: 'Number',
                        optional: true
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'color',
                        description:
                          '<p>color Array, CSS color string,\nor <a href="#/p5.Color">p5.Color</a> value</p>\n',
                        type: 'Number[]|String|p5.Color'
                      },
                      {
                        name: 'position',
                        description: '<p>the position of the light</p>\n',
                        type: 'p5.Vector'
                      },
                      {
                        name: 'direction',
                        description: '<p>the direction of the light</p>\n',
                        type: 'p5.Vector'
                      },
                      {
                        name: 'angle',
                        description: '',
                        type: 'Number',
                        optional: true
                      },
                      {
                        name: 'conc',
                        description: '',
                        type: 'Number',
                        optional: true
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'v1',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'v2',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'v3',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'position',
                        description: '',
                        type: 'p5.Vector'
                      },
                      {
                        name: 'direction',
                        description: '',
                        type: 'p5.Vector'
                      },
                      {
                        name: 'angle',
                        description: '',
                        type: 'Number',
                        optional: true
                      },
                      {
                        name: 'conc',
                        description: '',
                        type: 'Number',
                        optional: true
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'color',
                        description: '',
                        type: 'Number[]|String|p5.Color'
                      },
                      {
                        name: 'x',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'y',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'z',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'direction',
                        description: '',
                        type: 'p5.Vector'
                      },
                      {
                        name: 'angle',
                        description: '',
                        type: 'Number',
                        optional: true
                      },
                      {
                        name: 'conc',
                        description: '',
                        type: 'Number',
                        optional: true
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'color',
                        description: '',
                        type: 'Number[]|String|p5.Color'
                      },
                      {
                        name: 'position',
                        description: '',
                        type: 'p5.Vector'
                      },
                      {
                        name: 'rx',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'ry',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'rz',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'angle',
                        description: '',
                        type: 'Number',
                        optional: true
                      },
                      {
                        name: 'conc',
                        description: '',
                        type: 'Number',
                        optional: true
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'v1',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'v2',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'v3',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'x',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'y',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'z',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'direction',
                        description: '',
                        type: 'p5.Vector'
                      },
                      {
                        name: 'angle',
                        description: '',
                        type: 'Number',
                        optional: true
                      },
                      {
                        name: 'conc',
                        description: '',
                        type: 'Number',
                        optional: true
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'v1',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'v2',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'v3',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'position',
                        description: '',
                        type: 'p5.Vector'
                      },
                      {
                        name: 'rx',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'ry',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'rz',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'angle',
                        description: '',
                        type: 'Number',
                        optional: true
                      },
                      {
                        name: 'conc',
                        description: '',
                        type: 'Number',
                        optional: true
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'color',
                        description: '',
                        type: 'Number[]|String|p5.Color'
                      },
                      {
                        name: 'x',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'y',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'z',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'rx',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'ry',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'rz',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'angle',
                        description: '',
                        type: 'Number',
                        optional: true
                      },
                      {
                        name: 'conc',
                        description: '',
                        type: 'Number',
                        optional: true
                      }
                    ]
                  }
                ]
              },
              noLights: {
                name: 'noLights',
                class: 'p5',
                module: 'Lights, Camera'
              },
              loadModel: {
                name: 'loadModel',
                class: 'p5',
                module: 'Shape',
                overloads: [
                  {
                    params: [
                      {
                        name: 'path',
                        description: '<p>Path of the model to be loaded</p>\n',
                        type: 'String'
                      },
                      {
                        name: 'normalize',
                        description:
                          '<p>If true, scale the model to a\n                                     standardized size when loading</p>\n',
                        type: 'Boolean'
                      },
                      {
                        name: 'successCallback',
                        description:
                          '<p>Function to be called\n                                    once the model is loaded. Will be passed\n                                    the 3D model object.</p>\n',
                        type: 'function(p5.Geometry)',
                        optional: true
                      },
                      {
                        name: 'failureCallback',
                        description:
                          '<p>called with event error if\n                                        the model fails to load.</p>\n',
                        type: 'Function(Event)',
                        optional: true
                      },
                      {
                        name: 'fileType',
                        description:
                          '<p>The file extension of the model\n                                     (<code>.stl</code>, <code>.obj</code>).</p>\n',
                        type: 'String',
                        optional: true
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'path',
                        description: '',
                        type: 'String'
                      },
                      {
                        name: 'successCallback',
                        description: '',
                        type: 'function(p5.Geometry)',
                        optional: true
                      },
                      {
                        name: 'failureCallback',
                        description: '',
                        type: 'Function(Event)',
                        optional: true
                      },
                      {
                        name: 'fileType',
                        description: '',
                        type: 'String',
                        optional: true
                      }
                    ]
                  }
                ]
              },
              model: {
                name: 'model',
                params: [
                  {
                    name: 'model',
                    description: '<p>Loaded 3d model to be rendered</p>\n',
                    type: 'p5.Geometry'
                  }
                ],
                class: 'p5',
                module: 'Shape'
              },
              loadShader: {
                name: 'loadShader',
                params: [
                  {
                    name: 'vertFilename',
                    description:
                      '<p>path to file containing vertex shader\nsource code</p>\n',
                    type: 'String'
                  },
                  {
                    name: 'fragFilename',
                    description:
                      '<p>path to file containing fragment shader\nsource code</p>\n',
                    type: 'String'
                  },
                  {
                    name: 'callback',
                    description:
                      '<p>callback to be executed after loadShader\ncompletes. On success, the Shader object is passed as the first argument.</p>\n',
                    type: 'Function',
                    optional: true
                  },
                  {
                    name: 'errorCallback',
                    description:
                      '<p>callback to be executed when an error\noccurs inside loadShader. On error, the error is passed as the first\nargument.</p>\n',
                    type: 'Function',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Lights, Camera'
              },
              createShader: {
                name: 'createShader',
                params: [
                  {
                    name: 'vertSrc',
                    description: '<p>source code for the vertex shader</p>\n',
                    type: 'String'
                  },
                  {
                    name: 'fragSrc',
                    description: '<p>source code for the fragment shader</p>\n',
                    type: 'String'
                  }
                ],
                class: 'p5',
                module: 'Lights, Camera'
              },
              shader: {
                name: 'shader',
                params: [
                  {
                    name: 's',
                    description:
                      '<p>the desired <a href="#/p5.Shader">p5.Shader</a> to use for rendering\nshapes.</p>\n',
                    type: 'p5.Shader',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Lights, Camera'
              },
              resetShader: {
                name: 'resetShader',
                class: 'p5',
                module: 'Lights, Camera'
              },
              normalMaterial: {
                name: 'normalMaterial',
                class: 'p5',
                module: 'Lights, Camera'
              },
              texture: {
                name: 'texture',
                params: [
                  {
                    name: 'tex',
                    description:
                      '<p>2-dimensional graphics\n                   to render as texture</p>\n',
                    type: 'p5.Image|p5.MediaElement|p5.Graphics'
                  }
                ],
                class: 'p5',
                module: 'Lights, Camera'
              },
              textureMode: {
                name: 'textureMode',
                params: [
                  {
                    name: 'mode',
                    description: '<p>either IMAGE or NORMAL</p>\n',
                    type: 'Constant'
                  }
                ],
                class: 'p5',
                module: 'Lights, Camera'
              },
              textureWrap: {
                name: 'textureWrap',
                params: [
                  {
                    name: 'wrapX',
                    description: '<p>either CLAMP, REPEAT, or MIRROR</p>\n',
                    type: 'Constant'
                  },
                  {
                    name: 'wrapY',
                    description: '<p>either CLAMP, REPEAT, or MIRROR</p>\n',
                    type: 'Constant',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Lights, Camera'
              },
              ambientMaterial: {
                name: 'ambientMaterial',
                class: 'p5',
                module: 'Lights, Camera',
                overloads: [
                  {
                    params: [
                      {
                        name: 'v1',
                        description:
                          '<p>gray value, red or hue value\n                        (depending on the current color mode),</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'v2',
                        description: '<p>green or saturation value</p>\n',
                        type: 'Number',
                        optional: true
                      },
                      {
                        name: 'v3',
                        description: '<p>blue or brightness value</p>\n',
                        type: 'Number',
                        optional: true
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'color',
                        description: '<p>color, color Array, or CSS color string</p>\n',
                        type: 'Number[]|String|p5.Color'
                      }
                    ],
                    chainable: 1
                  }
                ]
              },
              emissiveMaterial: {
                name: 'emissiveMaterial',
                class: 'p5',
                module: 'Lights, Camera',
                overloads: [
                  {
                    params: [
                      {
                        name: 'v1',
                        description:
                          '<p>gray value, red or hue value\n                        (depending on the current color mode),</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'v2',
                        description: '<p>green or saturation value</p>\n',
                        type: 'Number',
                        optional: true
                      },
                      {
                        name: 'v3',
                        description: '<p>blue or brightness value</p>\n',
                        type: 'Number',
                        optional: true
                      },
                      {
                        name: 'a',
                        description: '<p>opacity</p>\n',
                        type: 'Number',
                        optional: true
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'color',
                        description: '<p>color, color Array, or CSS color string</p>\n',
                        type: 'Number[]|String|p5.Color'
                      }
                    ],
                    chainable: 1
                  }
                ]
              },
              specularMaterial: {
                name: 'specularMaterial',
                class: 'p5',
                module: 'Lights, Camera',
                overloads: [
                  {
                    params: [
                      {
                        name: 'gray',
                        description:
                          '<p>number specifying value between white and black.</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'alpha',
                        description:
                          '<p>alpha value relative to current color range\n                                (default is 0-255)</p>\n',
                        type: 'Number',
                        optional: true
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'v1',
                        description:
                          '<p>red or hue value relative to\n                                the current color range</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'v2',
                        description:
                          '<p>green or saturation value\n                                relative to the current color range</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'v3',
                        description:
                          '<p>blue or brightness value\n                                relative to the current color range</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'alpha',
                        description: '',
                        type: 'Number',
                        optional: true
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'color',
                        description: '<p>color Array, or CSS color string</p>\n',
                        type: 'Number[]|String|p5.Color'
                      }
                    ],
                    chainable: 1
                  }
                ]
              },
              shininess: {
                name: 'shininess',
                params: [
                  {
                    name: 'shine',
                    description:
                      '<p>Degree of Shininess.\n                      Defaults to 1.</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5',
                module: 'Lights, Camera'
              },
              camera: {
                name: 'camera',
                params: [
                  {
                    name: 'x',
                    description: '<p>camera position value on x axis</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'y',
                    description: '<p>camera position value on y axis</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'z',
                    description: '<p>camera position value on z axis</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'centerX',
                    description: '<p>x coordinate representing center of the sketch</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'centerY',
                    description: '<p>y coordinate representing center of the sketch</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'centerZ',
                    description: '<p>z coordinate representing center of the sketch</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'upX',
                    description: "<p>x component of direction 'up' from camera</p>\n",
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'upY',
                    description: "<p>y component of direction 'up' from camera</p>\n",
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'upZ',
                    description: "<p>z component of direction 'up' from camera</p>\n",
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Lights, Camera'
              },
              perspective: {
                name: 'perspective',
                params: [
                  {
                    name: 'fovy',
                    description:
                      '<p>camera frustum vertical field of view,\n                          from bottom to top of view, in <a href="#/p5/angleMode">angleMode</a> units</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'aspect',
                    description: '<p>camera frustum aspect ratio</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'near',
                    description: '<p>frustum near plane length</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'far',
                    description: '<p>frustum far plane length</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Lights, Camera'
              },
              ortho: {
                name: 'ortho',
                params: [
                  {
                    name: 'left',
                    description: '<p>camera frustum left plane</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'right',
                    description: '<p>camera frustum right plane</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'bottom',
                    description: '<p>camera frustum bottom plane</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'top',
                    description: '<p>camera frustum top plane</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'near',
                    description: '<p>camera frustum near plane</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'far',
                    description: '<p>camera frustum far plane</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Lights, Camera'
              },
              frustum: {
                name: 'frustum',
                params: [
                  {
                    name: 'left',
                    description: '<p>camera frustum left plane</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'right',
                    description: '<p>camera frustum right plane</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'bottom',
                    description: '<p>camera frustum bottom plane</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'top',
                    description: '<p>camera frustum top plane</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'near',
                    description: '<p>camera frustum near plane</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'far',
                    description: '<p>camera frustum far plane</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'Lights, Camera'
              },
              createCamera: {
                name: 'createCamera',
                class: 'p5',
                module: 'Lights, Camera'
              },
              setCamera: {
                name: 'setCamera',
                params: [
                  {
                    name: 'cam',
                    description: '<p>p5.Camera object</p>\n',
                    type: 'p5.Camera'
                  }
                ],
                class: 'p5',
                module: 'Lights, Camera'
              },
              setAttributes: {
                name: 'setAttributes',
                class: 'p5',
                module: 'Rendering',
                overloads: [
                  {
                    params: [
                      {
                        name: 'key',
                        description: '<p>Name of attribute</p>\n',
                        type: 'String'
                      },
                      {
                        name: 'value',
                        description: '<p>New value of named attribute</p>\n',
                        type: 'Boolean'
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'obj',
                        description: '<p>object with key-value pairs</p>\n',
                        type: 'Object'
                      }
                    ]
                  }
                ]
              },
              sampleRate: {
                name: 'sampleRate',
                class: 'p5',
                module: 'p5.sound'
              },
              freqToMidi: {
                name: 'freqToMidi',
                params: [
                  {
                    name: 'frequency',
                    description:
                      '<p>A freqeuncy, for example, the "A"\n                           above Middle C is 440Hz</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5',
                module: 'p5.sound'
              },
              midiToFreq: {
                name: 'midiToFreq',
                params: [
                  {
                    name: 'midiNote',
                    description: '<p>The number of a MIDI note</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5',
                module: 'p5.sound'
              },
              soundFormats: {
                name: 'soundFormats',
                params: [
                  {
                    name: 'formats',
                    description: "<p>i.e. 'mp3', 'wav', 'ogg'</p>\n",
                    type: 'String',
                    optional: true,
                    multiple: true
                  }
                ],
                class: 'p5',
                module: 'p5.sound'
              },
              getAudioContext: {
                name: 'getAudioContext',
                class: 'p5',
                module: 'p5.sound'
              },
              userStartAudio: {
                params: [
                  {
                    name: 'element(s)',
                    description:
                      '<p>This argument can be an Element,\n                              Selector String, NodeList, p5.Element,\n                              jQuery Element, or an Array of any of those.</p>\n',
                    type: 'Element|Array',
                    optional: true
                  },
                  {
                    name: 'callback',
                    description:
                      '<p>Callback to invoke when the AudioContext\n                              has started</p>\n',
                    type: 'Function',
                    optional: true
                  }
                ],
                name: 'userStartAudio',
                class: 'p5',
                module: 'p5.sound'
              },
              loadSound: {
                name: 'loadSound',
                params: [
                  {
                    name: 'path',
                    description:
                      "<p>Path to the sound file, or an array with\n                                  paths to soundfiles in multiple formats\n                                  i.e. ['sound.ogg', 'sound.mp3'].\n                                  Alternately, accepts an object: either\n                                  from the HTML5 File API, or a p5.File.</p>\n",
                    type: 'String|Array'
                  },
                  {
                    name: 'successCallback',
                    description: '<p>Name of a function to call once file loads</p>\n',
                    type: 'Function',
                    optional: true
                  },
                  {
                    name: 'errorCallback',
                    description:
                      '<p>Name of a function to call if there is\n                                    an error loading the file.</p>\n',
                    type: 'Function',
                    optional: true
                  },
                  {
                    name: 'whileLoading',
                    description:
                      '<p>Name of a function to call while file is loading.\n                               This function will receive the percentage loaded\n                               so far, from 0.0 to 1.0.</p>\n',
                    type: 'Function',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'p5.sound'
              },
              createConvolver: {
                name: 'createConvolver',
                params: [
                  {
                    name: 'path',
                    description: '<p>path to a sound file</p>\n',
                    type: 'String'
                  },
                  {
                    name: 'callback',
                    description:
                      '<p>function to call if loading is successful.\n                              The object will be passed in as the argument\n                              to the callback function.</p>\n',
                    type: 'Function',
                    optional: true
                  },
                  {
                    name: 'errorCallback',
                    description:
                      '<p>function to call if loading is not successful.\n                              A custom error will be passed in as the argument\n                              to the callback function.</p>\n',
                    type: 'Function',
                    optional: true
                  }
                ],
                class: 'p5',
                module: 'p5.sound'
              },
              setBPM: {
                name: 'setBPM',
                params: [
                  {
                    name: 'BPM',
                    description: '<p>Beats Per Minute</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'rampTime',
                    description: '<p>Seconds from now</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5',
                module: 'p5.sound'
              },
              saveSound: {
                name: 'saveSound',
                params: [
                  {
                    name: 'soundFile',
                    description: '<p>p5.SoundFile that you wish to save</p>\n',
                    type: 'p5.SoundFile'
                  },
                  {
                    name: 'fileName',
                    description: '<p>name of the resulting .wav file.</p>\n',
                    type: 'String'
                  }
                ],
                class: 'p5',
                module: 'p5.sound'
              }
            },
            'p5.Color': {
              toString: {
                name: 'toString',
                params: [
                  {
                    name: 'format',
                    description:
                      "<p>How the color string will be formatted.\nLeaving this empty formats the string as rgba(r, g, b, a).\n'#rgb' '#rgba' '#rrggbb' and '#rrggbbaa' format as hexadecimal color codes.\n'rgb' 'hsb' and 'hsl' return the color formatted in the specified color mode.\n'rgba' 'hsba' and 'hsla' are the same as above but with alpha channels.\n'rgb%' 'hsb%' 'hsl%' 'rgba%' 'hsba%' and 'hsla%' format as percentages.</p>\n",
                    type: 'String',
                    optional: true
                  }
                ],
                class: 'p5.Color',
                module: 'Color'
              },
              setRed: {
                name: 'setRed',
                params: [
                  {
                    name: 'red',
                    description: '<p>the new red value</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5.Color',
                module: 'Color'
              },
              setGreen: {
                name: 'setGreen',
                params: [
                  {
                    name: 'green',
                    description: '<p>the new green value</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5.Color',
                module: 'Color'
              },
              setBlue: {
                name: 'setBlue',
                params: [
                  {
                    name: 'blue',
                    description: '<p>the new blue value</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5.Color',
                module: 'Color'
              },
              setAlpha: {
                name: 'setAlpha',
                params: [
                  {
                    name: 'alpha',
                    description: '<p>the new alpha value</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5.Color',
                module: 'Color'
              }
            },
            'p5.Element': {
              elt: {
                name: 'elt',
                class: 'p5.Element',
                module: 'DOM'
              },
              parent: {
                name: 'parent',
                class: 'p5.Element',
                module: 'DOM',
                overloads: [
                  {
                    params: [
                      {
                        name: 'parent',
                        description:
                          '<p>the ID, DOM node, or <a href="#/p5.Element">p5.Element</a>\n                         of desired parent element</p>\n',
                        type: 'String|p5.Element|Object'
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: []
                  }
                ]
              },
              id: {
                name: 'id',
                class: 'p5.Element',
                module: 'DOM',
                overloads: [
                  {
                    params: [
                      {
                        name: 'id',
                        description: '<p>ID of the element</p>\n',
                        type: 'String'
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: []
                  }
                ]
              },
              class: {
                name: 'class',
                class: 'p5.Element',
                module: 'DOM',
                overloads: [
                  {
                    params: [
                      {
                        name: 'class',
                        description: '<p>class to add</p>\n',
                        type: 'String'
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: []
                  }
                ]
              },
              mousePressed: {
                name: 'mousePressed',
                params: [
                  {
                    name: 'fxn',
                    description:
                      '<p>function to be fired when mouse is\n                               pressed over the element.\n                               if <code>false</code> is passed instead, the previously\n                               firing function will no longer fire.</p>\n',
                    type: 'Function|Boolean'
                  }
                ],
                class: 'p5.Element',
                module: 'DOM'
              },
              doubleClicked: {
                name: 'doubleClicked',
                params: [
                  {
                    name: 'fxn',
                    description:
                      '<p>function to be fired when mouse is\n                               double clicked over the element.\n                               if <code>false</code> is passed instead, the previously\n                               firing function will no longer fire.</p>\n',
                    type: 'Function|Boolean'
                  }
                ],
                class: 'p5.Element',
                module: 'DOM'
              },
              mouseWheel: {
                name: 'mouseWheel',
                params: [
                  {
                    name: 'fxn',
                    description:
                      '<p>function to be fired when mouse is\n                               scrolled over the element.\n                               if <code>false</code> is passed instead, the previously\n                               firing function will no longer fire.</p>\n',
                    type: 'Function|Boolean'
                  }
                ],
                class: 'p5.Element',
                module: 'DOM'
              },
              mouseReleased: {
                name: 'mouseReleased',
                params: [
                  {
                    name: 'fxn',
                    description:
                      '<p>function to be fired when mouse is\n                               released over the element.\n                               if <code>false</code> is passed instead, the previously\n                               firing function will no longer fire.</p>\n',
                    type: 'Function|Boolean'
                  }
                ],
                class: 'p5.Element',
                module: 'DOM'
              },
              mouseClicked: {
                name: 'mouseClicked',
                params: [
                  {
                    name: 'fxn',
                    description:
                      '<p>function to be fired when mouse is\n                               clicked over the element.\n                               if <code>false</code> is passed instead, the previously\n                               firing function will no longer fire.</p>\n',
                    type: 'Function|Boolean'
                  }
                ],
                class: 'p5.Element',
                module: 'DOM'
              },
              mouseMoved: {
                name: 'mouseMoved',
                params: [
                  {
                    name: 'fxn',
                    description:
                      '<p>function to be fired when a mouse moves\n                               over the element.\n                               if <code>false</code> is passed instead, the previously\n                               firing function will no longer fire.</p>\n',
                    type: 'Function|Boolean'
                  }
                ],
                class: 'p5.Element',
                module: 'DOM'
              },
              mouseOver: {
                name: 'mouseOver',
                params: [
                  {
                    name: 'fxn',
                    description:
                      '<p>function to be fired when a mouse moves\n                               onto the element.\n                               if <code>false</code> is passed instead, the previously\n                               firing function will no longer fire.</p>\n',
                    type: 'Function|Boolean'
                  }
                ],
                class: 'p5.Element',
                module: 'DOM'
              },
              mouseOut: {
                name: 'mouseOut',
                params: [
                  {
                    name: 'fxn',
                    description:
                      '<p>function to be fired when a mouse\n                               moves off of an element.\n                               if <code>false</code> is passed instead, the previously\n                               firing function will no longer fire.</p>\n',
                    type: 'Function|Boolean'
                  }
                ],
                class: 'p5.Element',
                module: 'DOM'
              },
              touchStarted: {
                name: 'touchStarted',
                params: [
                  {
                    name: 'fxn',
                    description:
                      '<p>function to be fired when a touch\n                               starts over the element.\n                               if <code>false</code> is passed instead, the previously\n                               firing function will no longer fire.</p>\n',
                    type: 'Function|Boolean'
                  }
                ],
                class: 'p5.Element',
                module: 'DOM'
              },
              touchMoved: {
                name: 'touchMoved',
                params: [
                  {
                    name: 'fxn',
                    description:
                      '<p>function to be fired when a touch moves over\n                               the element.\n                               if <code>false</code> is passed instead, the previously\n                               firing function will no longer fire.</p>\n',
                    type: 'Function|Boolean'
                  }
                ],
                class: 'p5.Element',
                module: 'DOM'
              },
              touchEnded: {
                name: 'touchEnded',
                params: [
                  {
                    name: 'fxn',
                    description:
                      '<p>function to be fired when a touch ends\n                               over the element.\n                               if <code>false</code> is passed instead, the previously\n                               firing function will no longer fire.</p>\n',
                    type: 'Function|Boolean'
                  }
                ],
                class: 'p5.Element',
                module: 'DOM'
              },
              dragOver: {
                name: 'dragOver',
                params: [
                  {
                    name: 'fxn',
                    description:
                      '<p>function to be fired when a file is\n                               dragged over the element.\n                               if <code>false</code> is passed instead, the previously\n                               firing function will no longer fire.</p>\n',
                    type: 'Function|Boolean'
                  }
                ],
                class: 'p5.Element',
                module: 'DOM'
              },
              dragLeave: {
                name: 'dragLeave',
                params: [
                  {
                    name: 'fxn',
                    description:
                      '<p>function to be fired when a file is\n                               dragged off the element.\n                               if <code>false</code> is passed instead, the previously\n                               firing function will no longer fire.</p>\n',
                    type: 'Function|Boolean'
                  }
                ],
                class: 'p5.Element',
                module: 'DOM'
              },
              addClass: {
                name: 'addClass',
                params: [
                  {
                    name: 'class',
                    description: '<p>name of class to add</p>\n',
                    type: 'String'
                  }
                ],
                class: 'p5.Element',
                module: 'DOM'
              },
              removeClass: {
                name: 'removeClass',
                params: [
                  {
                    name: 'class',
                    description: '<p>name of class to remove</p>\n',
                    type: 'String'
                  }
                ],
                class: 'p5.Element',
                module: 'DOM'
              },
              hasClass: {
                name: 'hasClass',
                params: [
                  {
                    name: 'c',
                    description: '<p>class name of class to check</p>\n',
                    type: 'String'
                  }
                ],
                class: 'p5.Element',
                module: 'DOM'
              },
              toggleClass: {
                name: 'toggleClass',
                params: [
                  {
                    name: 'c',
                    description: '<p>class name to toggle</p>\n',
                    type: 'String'
                  }
                ],
                class: 'p5.Element',
                module: 'DOM'
              },
              child: {
                name: 'child',
                class: 'p5.Element',
                module: 'DOM',
                overloads: [
                  {
                    params: []
                  },
                  {
                    params: [
                      {
                        name: 'child',
                        description:
                          '<p>the ID, DOM node, or <a href="#/p5.Element">p5.Element</a>\n                        to add to the current element</p>\n',
                        type: 'String|p5.Element',
                        optional: true
                      }
                    ],
                    chainable: 1
                  }
                ]
              },
              center: {
                name: 'center',
                params: [
                  {
                    name: 'align',
                    description:
                      "<p>passing 'vertical', 'horizontal' aligns element accordingly</p>\n",
                    type: 'String',
                    optional: true
                  }
                ],
                class: 'p5.Element',
                module: 'DOM'
              },
              html: {
                name: 'html',
                class: 'p5.Element',
                module: 'DOM',
                overloads: [
                  {
                    params: []
                  },
                  {
                    params: [
                      {
                        name: 'html',
                        description: '<p>the HTML to be placed inside the element</p>\n',
                        type: 'String',
                        optional: true
                      },
                      {
                        name: 'append',
                        description: '<p>whether to append HTML to existing</p>\n',
                        type: 'Boolean',
                        optional: true
                      }
                    ],
                    chainable: 1
                  }
                ]
              },
              position: {
                name: 'position',
                class: 'p5.Element',
                module: 'DOM',
                overloads: [
                  {
                    params: []
                  },
                  {
                    params: [
                      {
                        name: 'x',
                        description:
                          '<p>x-position relative to upper left of window (optional)</p>\n',
                        type: 'Number',
                        optional: true
                      },
                      {
                        name: 'y',
                        description:
                          '<p>y-position relative to upper left of window (optional)</p>\n',
                        type: 'Number',
                        optional: true
                      },
                      {
                        name: 'positionType',
                        description:
                          '<p>it can be static, fixed, relative, sticky, initial or inherit (optional)</p>\n',
                        type: 'String'
                      }
                    ],
                    chainable: 1
                  }
                ]
              },
              style: {
                name: 'style',
                class: 'p5.Element',
                module: 'DOM',
                overloads: [
                  {
                    params: [
                      {
                        name: 'property',
                        description: '<p>property to be set</p>\n',
                        type: 'String'
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'property',
                        description: '',
                        type: 'String'
                      },
                      {
                        name: 'value',
                        description: '<p>value to assign to property</p>\n',
                        type: 'String|p5.Color'
                      }
                    ],
                    chainable: 1
                  }
                ]
              },
              attribute: {
                name: 'attribute',
                class: 'p5.Element',
                module: 'DOM',
                overloads: [
                  {
                    params: []
                  },
                  {
                    params: [
                      {
                        name: 'attr',
                        description: '<p>attribute to set</p>\n',
                        type: 'String'
                      },
                      {
                        name: 'value',
                        description: '<p>value to assign to attribute</p>\n',
                        type: 'String'
                      }
                    ],
                    chainable: 1
                  }
                ]
              },
              removeAttribute: {
                name: 'removeAttribute',
                params: [
                  {
                    name: 'attr',
                    description: '<p>attribute to remove</p>\n',
                    type: 'String'
                  }
                ],
                class: 'p5.Element',
                module: 'DOM'
              },
              value: {
                name: 'value',
                class: 'p5.Element',
                module: 'DOM',
                overloads: [
                  {
                    params: []
                  },
                  {
                    params: [
                      {
                        name: 'value',
                        description: '',
                        type: 'String|Number'
                      }
                    ],
                    chainable: 1
                  }
                ]
              },
              show: {
                name: 'show',
                class: 'p5.Element',
                module: 'DOM'
              },
              hide: {
                name: 'hide',
                class: 'p5.Element',
                module: 'DOM'
              },
              size: {
                name: 'size',
                class: 'p5.Element',
                module: 'DOM',
                overloads: [
                  {
                    params: []
                  },
                  {
                    params: [
                      {
                        name: 'w',
                        description:
                          '<p>width of the element, either AUTO, or a number</p>\n',
                        type: 'Number|Constant'
                      },
                      {
                        name: 'h',
                        description:
                          '<p>height of the element, either AUTO, or a number</p>\n',
                        type: 'Number|Constant',
                        optional: true
                      }
                    ],
                    chainable: 1
                  }
                ]
              },
              remove: {
                name: 'remove',
                class: 'p5.Element',
                module: 'DOM'
              },
              drop: {
                name: 'drop',
                params: [
                  {
                    name: 'callback',
                    description:
                      '<p>callback to receive loaded file, called for each file dropped.</p>\n',
                    type: 'Function'
                  },
                  {
                    name: 'fxn',
                    description:
                      '<p>callback triggered once when files are dropped with the drop event.</p>\n',
                    type: 'Function',
                    optional: true
                  }
                ],
                class: 'p5.Element',
                module: 'DOM'
              }
            },
            'p5.Graphics': {
              reset: {
                name: 'reset',
                class: 'p5.Graphics',
                module: 'Rendering'
              },
              remove: {
                name: 'remove',
                class: 'p5.Graphics',
                module: 'Rendering'
              }
            },
            JSON: {
              stringify: {
                name: 'stringify',
                params: [
                  {
                    name: 'object',
                    description:
                      '<p>:Javascript object that you would like to convert to JSON</p>\n',
                    type: 'Object'
                  }
                ],
                class: 'JSON',
                module: 'Foundation'
              }
            },
            console: {
              log: {
                name: 'log',
                params: [
                  {
                    name: 'message',
                    description:
                      '<p>:Message that you would like to print to the console</p>\n',
                    type: 'String|Expression|Object'
                  }
                ],
                class: 'console',
                module: 'Foundation'
              }
            },
            'p5.TypedDict': {
              size: {
                name: 'size',
                class: 'p5.TypedDict',
                module: 'Data'
              },
              hasKey: {
                name: 'hasKey',
                params: [
                  {
                    name: 'key',
                    description: '<p>that you want to look up</p>\n',
                    type: 'Number|String'
                  }
                ],
                class: 'p5.TypedDict',
                module: 'Data'
              },
              get: {
                name: 'get',
                params: [
                  {
                    name: 'the',
                    description: '<p>key you want to access</p>\n',
                    type: 'Number|String'
                  }
                ],
                class: 'p5.TypedDict',
                module: 'Data'
              },
              set: {
                name: 'set',
                params: [
                  {
                    name: 'key',
                    description: '',
                    type: 'Number|String'
                  },
                  {
                    name: 'value',
                    description: '',
                    type: 'Number|String'
                  }
                ],
                class: 'p5.TypedDict',
                module: 'Data'
              },
              create: {
                name: 'create',
                class: 'p5.TypedDict',
                module: 'Data',
                overloads: [
                  {
                    params: [
                      {
                        name: 'key',
                        description: '',
                        type: 'Number|String'
                      },
                      {
                        name: 'value',
                        description: '',
                        type: 'Number|String'
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'obj',
                        description: '<p>key/value pair</p>\n',
                        type: 'Object'
                      }
                    ]
                  }
                ]
              },
              clear: {
                name: 'clear',
                class: 'p5.TypedDict',
                module: 'Data'
              },
              remove: {
                name: 'remove',
                params: [
                  {
                    name: 'key',
                    description: '<p>for the pair to remove</p>\n',
                    type: 'Number|String'
                  }
                ],
                class: 'p5.TypedDict',
                module: 'Data'
              },
              print: {
                name: 'print',
                class: 'p5.TypedDict',
                module: 'Data'
              },
              saveTable: {
                name: 'saveTable',
                class: 'p5.TypedDict',
                module: 'Data'
              },
              saveJSON: {
                name: 'saveJSON',
                class: 'p5.TypedDict',
                module: 'Data'
              }
            },
            'p5.NumberDict': {
              add: {
                name: 'add',
                params: [
                  {
                    name: 'Key',
                    description: '<p>for the value you wish to add to</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'Number',
                    description: '<p>to add to the value</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5.NumberDict',
                module: 'Data'
              },
              sub: {
                name: 'sub',
                params: [
                  {
                    name: 'Key',
                    description: '<p>for the value you wish to subtract from</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'Number',
                    description: '<p>to subtract from the value</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5.NumberDict',
                module: 'Data'
              },
              mult: {
                name: 'mult',
                params: [
                  {
                    name: 'Key',
                    description: '<p>for value you wish to multiply</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'Amount',
                    description: '<p>to multiply the value by</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5.NumberDict',
                module: 'Data'
              },
              div: {
                name: 'div',
                params: [
                  {
                    name: 'Key',
                    description: '<p>for value you wish to divide</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'Amount',
                    description: '<p>to divide the value by</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5.NumberDict',
                module: 'Data'
              },
              minValue: {
                name: 'minValue',
                class: 'p5.NumberDict',
                module: 'Data'
              },
              maxValue: {
                name: 'maxValue',
                class: 'p5.NumberDict',
                module: 'Data'
              },
              minKey: {
                name: 'minKey',
                class: 'p5.NumberDict',
                module: 'Data'
              },
              maxKey: {
                name: 'maxKey',
                class: 'p5.NumberDict',
                module: 'Data'
              }
            },
            'p5.MediaElement': {
              src: {
                name: 'src',
                class: 'p5.MediaElement',
                module: 'DOM'
              },
              play: {
                name: 'play',
                class: 'p5.MediaElement',
                module: 'DOM'
              },
              stop: {
                name: 'stop',
                class: 'p5.MediaElement',
                module: 'DOM'
              },
              pause: {
                name: 'pause',
                class: 'p5.MediaElement',
                module: 'DOM'
              },
              loop: {
                name: 'loop',
                class: 'p5.MediaElement',
                module: 'DOM'
              },
              noLoop: {
                name: 'noLoop',
                class: 'p5.MediaElement',
                module: 'DOM'
              },
              autoplay: {
                name: 'autoplay',
                params: [
                  {
                    name: 'shouldAutoplay',
                    description: '<p>whether the element should autoplay</p>\n',
                    type: 'Boolean'
                  }
                ],
                class: 'p5.MediaElement',
                module: 'DOM'
              },
              volume: {
                name: 'volume',
                class: 'p5.MediaElement',
                module: 'DOM',
                overloads: [
                  {
                    params: []
                  },
                  {
                    params: [
                      {
                        name: 'val',
                        description: '<p>volume between 0.0 and 1.0</p>\n',
                        type: 'Number'
                      }
                    ],
                    chainable: 1
                  }
                ]
              },
              speed: {
                name: 'speed',
                class: 'p5.MediaElement',
                module: 'DOM',
                overloads: [
                  {
                    params: []
                  },
                  {
                    params: [
                      {
                        name: 'speed',
                        description: '<p>speed multiplier for element playback</p>\n',
                        type: 'Number'
                      }
                    ],
                    chainable: 1
                  }
                ]
              },
              time: {
                name: 'time',
                class: 'p5.MediaElement',
                module: 'DOM',
                overloads: [
                  {
                    params: []
                  },
                  {
                    params: [
                      {
                        name: 'time',
                        description: '<p>time to jump to (in seconds)</p>\n',
                        type: 'Number'
                      }
                    ],
                    chainable: 1
                  }
                ]
              },
              duration: {
                name: 'duration',
                class: 'p5.MediaElement',
                module: 'DOM'
              },
              onended: {
                name: 'onended',
                params: [
                  {
                    name: 'callback',
                    description:
                      '<p>function to call when the\n                            soundfile has ended. The\n                            media element will be passed\n                            in as the argument to the\n                            callback.</p>\n',
                    type: 'Function'
                  }
                ],
                class: 'p5.MediaElement',
                module: 'DOM'
              },
              connect: {
                name: 'connect',
                params: [
                  {
                    name: 'audioNode',
                    description:
                      '<p>AudioNode from the Web Audio API,\nor an object from the p5.sound library</p>\n',
                    type: 'AudioNode|Object'
                  }
                ],
                class: 'p5.MediaElement',
                module: 'DOM'
              },
              disconnect: {
                name: 'disconnect',
                class: 'p5.MediaElement',
                module: 'DOM'
              },
              showControls: {
                name: 'showControls',
                class: 'p5.MediaElement',
                module: 'DOM'
              },
              hideControls: {
                name: 'hideControls',
                class: 'p5.MediaElement',
                module: 'DOM'
              },
              addCue: {
                name: 'addCue',
                params: [
                  {
                    name: 'time',
                    description:
                      "<p>Time in seconds, relative to this media\n                            element's playback. For example, to trigger\n                            an event every time playback reaches two\n                            seconds, pass in the number 2. This will be\n                            passed as the first parameter to\n                            the callback function.</p>\n",
                    type: 'Number'
                  },
                  {
                    name: 'callback',
                    description:
                      '<p>Name of a function that will be\n                            called at the given time. The callback will\n                            receive time and (optionally) param as its\n                            two parameters.</p>\n',
                    type: 'Function'
                  },
                  {
                    name: 'value',
                    description:
                      '<p>An object to be passed as the\n                            second parameter to the\n                            callback function.</p>\n',
                    type: 'Object',
                    optional: true
                  }
                ],
                class: 'p5.MediaElement',
                module: 'DOM'
              },
              removeCue: {
                name: 'removeCue',
                params: [
                  {
                    name: 'id',
                    description: '<p>ID of the cue, as returned by addCue</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5.MediaElement',
                module: 'DOM'
              },
              clearCues: {
                name: 'clearCues',
                params: [
                  {
                    name: 'id',
                    description: '<p>ID of the cue, as returned by addCue</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5.MediaElement',
                module: 'DOM'
              }
            },
            'p5.File': {
              file: {
                name: 'file',
                class: 'p5.File',
                module: 'DOM'
              },
              type: {
                name: 'type',
                class: 'p5.File',
                module: 'DOM'
              },
              subtype: {
                name: 'subtype',
                class: 'p5.File',
                module: 'DOM'
              },
              name: {
                name: 'name',
                class: 'p5.File',
                module: 'DOM'
              },
              size: {
                name: 'size',
                class: 'p5.File',
                module: 'DOM'
              },
              data: {
                name: 'data',
                class: 'p5.File',
                module: 'DOM'
              }
            },
            'p5.Image': {
              width: {
                name: 'width',
                class: 'p5.Image',
                module: 'Image'
              },
              height: {
                name: 'height',
                class: 'p5.Image',
                module: 'Image'
              },
              pixels: {
                name: 'pixels',
                class: 'p5.Image',
                module: 'Image'
              },
              loadPixels: {
                name: 'loadPixels',
                class: 'p5.Image',
                module: 'Image'
              },
              updatePixels: {
                name: 'updatePixels',
                class: 'p5.Image',
                module: 'Image',
                overloads: [
                  {
                    params: [
                      {
                        name: 'x',
                        description:
                          '<p>x-offset of the target update area for the\n                             underlying canvas</p>\n',
                        type: 'Integer'
                      },
                      {
                        name: 'y',
                        description:
                          '<p>y-offset of the target update area for the\n                             underlying canvas</p>\n',
                        type: 'Integer'
                      },
                      {
                        name: 'w',
                        description:
                          '<p>height of the target update area for the\n                             underlying canvas</p>\n',
                        type: 'Integer'
                      },
                      {
                        name: 'h',
                        description:
                          '<p>height of the target update area for the\n                             underlying canvas</p>\n',
                        type: 'Integer'
                      }
                    ]
                  },
                  {
                    params: []
                  }
                ]
              },
              get: {
                name: 'get',
                class: 'p5.Image',
                module: 'Image',
                overloads: [
                  {
                    params: [
                      {
                        name: 'x',
                        description: '<p>x-coordinate of the pixel</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'y',
                        description: '<p>y-coordinate of the pixel</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'w',
                        description: '<p>width</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'h',
                        description: '<p>height</p>\n',
                        type: 'Number'
                      }
                    ]
                  },
                  {
                    params: []
                  },
                  {
                    params: [
                      {
                        name: 'x',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'y',
                        description: '',
                        type: 'Number'
                      }
                    ]
                  }
                ]
              },
              set: {
                name: 'set',
                params: [
                  {
                    name: 'x',
                    description: '<p>x-coordinate of the pixel</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'y',
                    description: '<p>y-coordinate of the pixel</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'a',
                    description:
                      '<p>grayscale value | pixel array |\n                               a <a href="#/p5.Color">p5.Color</a> | image to copy</p>\n',
                    type: 'Number|Number[]|Object'
                  }
                ],
                class: 'p5.Image',
                module: 'Image'
              },
              resize: {
                name: 'resize',
                params: [
                  {
                    name: 'width',
                    description: '<p>the resized image width</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'height',
                    description: '<p>the resized image height</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5.Image',
                module: 'Image'
              },
              copy: {
                name: 'copy',
                class: 'p5.Image',
                module: 'Image',
                overloads: [
                  {
                    params: [
                      {
                        name: 'srcImage',
                        description: '<p>source image</p>\n',
                        type: 'p5.Image|p5.Element'
                      },
                      {
                        name: 'sx',
                        description:
                          "<p>X coordinate of the source's upper left corner</p>\n",
                        type: 'Integer'
                      },
                      {
                        name: 'sy',
                        description:
                          "<p>Y coordinate of the source's upper left corner</p>\n",
                        type: 'Integer'
                      },
                      {
                        name: 'sw',
                        description: '<p>source image width</p>\n',
                        type: 'Integer'
                      },
                      {
                        name: 'sh',
                        description: '<p>source image height</p>\n',
                        type: 'Integer'
                      },
                      {
                        name: 'dx',
                        description:
                          "<p>X coordinate of the destination's upper left corner</p>\n",
                        type: 'Integer'
                      },
                      {
                        name: 'dy',
                        description:
                          "<p>Y coordinate of the destination's upper left corner</p>\n",
                        type: 'Integer'
                      },
                      {
                        name: 'dw',
                        description: '<p>destination image width</p>\n',
                        type: 'Integer'
                      },
                      {
                        name: 'dh',
                        description: '<p>destination image height</p>\n',
                        type: 'Integer'
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'sx',
                        description: '',
                        type: 'Integer'
                      },
                      {
                        name: 'sy',
                        description: '',
                        type: 'Integer'
                      },
                      {
                        name: 'sw',
                        description: '',
                        type: 'Integer'
                      },
                      {
                        name: 'sh',
                        description: '',
                        type: 'Integer'
                      },
                      {
                        name: 'dx',
                        description: '',
                        type: 'Integer'
                      },
                      {
                        name: 'dy',
                        description: '',
                        type: 'Integer'
                      },
                      {
                        name: 'dw',
                        description: '',
                        type: 'Integer'
                      },
                      {
                        name: 'dh',
                        description: '',
                        type: 'Integer'
                      }
                    ]
                  }
                ]
              },
              mask: {
                name: 'mask',
                params: [
                  {
                    name: 'srcImage',
                    description: '<p>source image</p>\n',
                    type: 'p5.Image'
                  }
                ],
                class: 'p5.Image',
                module: 'Image'
              },
              filter: {
                name: 'filter',
                params: [
                  {
                    name: 'filterType',
                    description:
                      '<p>either THRESHOLD, GRAY, OPAQUE, INVERT,\n                               POSTERIZE, ERODE, DILATE or BLUR.\n                               See Filters.js for docs on\n                               each available filter</p>\n',
                    type: 'Constant'
                  },
                  {
                    name: 'filterParam',
                    description:
                      '<p>an optional parameter unique\n                               to each filter, see above</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.Image',
                module: 'Image'
              },
              blend: {
                name: 'blend',
                class: 'p5.Image',
                module: 'Image',
                overloads: [
                  {
                    params: [
                      {
                        name: 'srcImage',
                        description: '<p>source image</p>\n',
                        type: 'p5.Image'
                      },
                      {
                        name: 'sx',
                        description:
                          "<p>X coordinate of the source's upper left corner</p>\n",
                        type: 'Integer'
                      },
                      {
                        name: 'sy',
                        description:
                          "<p>Y coordinate of the source's upper left corner</p>\n",
                        type: 'Integer'
                      },
                      {
                        name: 'sw',
                        description: '<p>source image width</p>\n',
                        type: 'Integer'
                      },
                      {
                        name: 'sh',
                        description: '<p>source image height</p>\n',
                        type: 'Integer'
                      },
                      {
                        name: 'dx',
                        description:
                          "<p>X coordinate of the destination's upper left corner</p>\n",
                        type: 'Integer'
                      },
                      {
                        name: 'dy',
                        description:
                          "<p>Y coordinate of the destination's upper left corner</p>\n",
                        type: 'Integer'
                      },
                      {
                        name: 'dw',
                        description: '<p>destination image width</p>\n',
                        type: 'Integer'
                      },
                      {
                        name: 'dh',
                        description: '<p>destination image height</p>\n',
                        type: 'Integer'
                      },
                      {
                        name: 'blendMode',
                        description:
                          '<p>the blend mode. either\n    BLEND, DARKEST, LIGHTEST, DIFFERENCE,\n    MULTIPLY, EXCLUSION, SCREEN, REPLACE, OVERLAY, HARD_LIGHT,\n    SOFT_LIGHT, DODGE, BURN, ADD or NORMAL.</p>\n<p>Available blend modes are: normal | multiply | screen | overlay |\n           darken | lighten | color-dodge | color-burn | hard-light |\n           soft-light | difference | exclusion | hue | saturation |\n           color | luminosity</p>\n<p><a href="http://blogs.adobe.com/webplatform/2013/01/28/blending-features-in-canvas/">http://blogs.adobe.com/webplatform/2013/01/28/blending-features-in-canvas/</a></p>\n',
                        type: 'Constant'
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'sx',
                        description: '',
                        type: 'Integer'
                      },
                      {
                        name: 'sy',
                        description: '',
                        type: 'Integer'
                      },
                      {
                        name: 'sw',
                        description: '',
                        type: 'Integer'
                      },
                      {
                        name: 'sh',
                        description: '',
                        type: 'Integer'
                      },
                      {
                        name: 'dx',
                        description: '',
                        type: 'Integer'
                      },
                      {
                        name: 'dy',
                        description: '',
                        type: 'Integer'
                      },
                      {
                        name: 'dw',
                        description: '',
                        type: 'Integer'
                      },
                      {
                        name: 'dh',
                        description: '',
                        type: 'Integer'
                      },
                      {
                        name: 'blendMode',
                        description: '',
                        type: 'Constant'
                      }
                    ]
                  }
                ]
              },
              save: {
                name: 'save',
                params: [
                  {
                    name: 'filename',
                    description: '<p>give your file a name</p>\n',
                    type: 'String'
                  },
                  {
                    name: 'extension',
                    description: "<p>'png' or 'jpg'</p>\n",
                    type: 'String'
                  }
                ],
                class: 'p5.Image',
                module: 'Image'
              },
              reset: {
                name: 'reset',
                class: 'p5.Image',
                module: 'Image'
              },
              getCurrentFrame: {
                name: 'getCurrentFrame',
                class: 'p5.Image',
                module: 'Image'
              },
              setFrame: {
                name: 'setFrame',
                params: [
                  {
                    name: 'index',
                    description:
                      '<p>the index for the frame that should be displayed</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5.Image',
                module: 'Image'
              },
              numFrames: {
                name: 'numFrames',
                class: 'p5.Image',
                module: 'Image'
              },
              play: {
                name: 'play',
                class: 'p5.Image',
                module: 'Image'
              },
              pause: {
                name: 'pause',
                class: 'p5.Image',
                module: 'Image'
              },
              delay: {
                name: 'delay',
                params: [
                  {
                    name: 'd',
                    description:
                      '<p>the amount in milliseconds to delay between switching frames</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'index',
                    description:
                      '<p>the index of the frame that should have the new delay value {optional}</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.Image',
                module: 'Image'
              }
            },
            'p5.PrintWriter': {
              write: {
                name: 'write',
                params: [
                  {
                    name: 'data',
                    description: '<p>all data to be written by the PrintWriter</p>\n',
                    type: 'Array'
                  }
                ],
                class: 'p5.PrintWriter',
                module: 'IO'
              },
              print: {
                name: 'print',
                params: [
                  {
                    name: 'data',
                    description: '<p>all data to be printed by the PrintWriter</p>\n',
                    type: 'Array'
                  }
                ],
                class: 'p5.PrintWriter',
                module: 'IO'
              },
              clear: {
                name: 'clear',
                class: 'p5.PrintWriter',
                module: 'IO'
              },
              close: {
                name: 'close',
                class: 'p5.PrintWriter',
                module: 'IO'
              }
            },
            'p5.Table': {
              columns: {
                name: 'columns',
                class: 'p5.Table',
                module: 'IO'
              },
              rows: {
                name: 'rows',
                class: 'p5.Table',
                module: 'IO'
              },
              addRow: {
                name: 'addRow',
                params: [
                  {
                    name: 'row',
                    description: '<p>row to be added to the table</p>\n',
                    type: 'p5.TableRow',
                    optional: true
                  }
                ],
                class: 'p5.Table',
                module: 'IO'
              },
              removeRow: {
                name: 'removeRow',
                params: [
                  {
                    name: 'id',
                    description: '<p>ID number of the row to remove</p>\n',
                    type: 'Integer'
                  }
                ],
                class: 'p5.Table',
                module: 'IO'
              },
              getRow: {
                name: 'getRow',
                params: [
                  {
                    name: 'rowID',
                    description: '<p>ID number of the row to get</p>\n',
                    type: 'Integer'
                  }
                ],
                class: 'p5.Table',
                module: 'IO'
              },
              getRows: {
                name: 'getRows',
                class: 'p5.Table',
                module: 'IO'
              },
              findRow: {
                name: 'findRow',
                params: [
                  {
                    name: 'value',
                    description: '<p>The value to match</p>\n',
                    type: 'String'
                  },
                  {
                    name: 'column',
                    description:
                      '<p>ID number or title of the\n                               column to search</p>\n',
                    type: 'Integer|String'
                  }
                ],
                class: 'p5.Table',
                module: 'IO'
              },
              findRows: {
                name: 'findRows',
                params: [
                  {
                    name: 'value',
                    description: '<p>The value to match</p>\n',
                    type: 'String'
                  },
                  {
                    name: 'column',
                    description:
                      '<p>ID number or title of the\n                               column to search</p>\n',
                    type: 'Integer|String'
                  }
                ],
                class: 'p5.Table',
                module: 'IO'
              },
              matchRow: {
                name: 'matchRow',
                params: [
                  {
                    name: 'regexp',
                    description: '<p>The regular expression to match</p>\n',
                    type: 'String|RegExp'
                  },
                  {
                    name: 'column',
                    description:
                      '<p>The column ID (number) or\n                                 title (string)</p>\n',
                    type: 'String|Integer'
                  }
                ],
                class: 'p5.Table',
                module: 'IO'
              },
              matchRows: {
                name: 'matchRows',
                params: [
                  {
                    name: 'regexp',
                    description: '<p>The regular expression to match</p>\n',
                    type: 'String'
                  },
                  {
                    name: 'column',
                    description:
                      '<p>The column ID (number) or\n                                 title (string)</p>\n',
                    type: 'String|Integer',
                    optional: true
                  }
                ],
                class: 'p5.Table',
                module: 'IO'
              },
              getColumn: {
                name: 'getColumn',
                params: [
                  {
                    name: 'column',
                    description: '<p>String or Number of the column to return</p>\n',
                    type: 'String|Number'
                  }
                ],
                class: 'p5.Table',
                module: 'IO'
              },
              clearRows: {
                name: 'clearRows',
                class: 'p5.Table',
                module: 'IO'
              },
              addColumn: {
                name: 'addColumn',
                params: [
                  {
                    name: 'title',
                    description: '<p>title of the given column</p>\n',
                    type: 'String',
                    optional: true
                  }
                ],
                class: 'p5.Table',
                module: 'IO'
              },
              getColumnCount: {
                name: 'getColumnCount',
                class: 'p5.Table',
                module: 'IO'
              },
              getRowCount: {
                name: 'getRowCount',
                class: 'p5.Table',
                module: 'IO'
              },
              removeTokens: {
                name: 'removeTokens',
                params: [
                  {
                    name: 'chars',
                    description: '<p>String listing characters to be removed</p>\n',
                    type: 'String'
                  },
                  {
                    name: 'column',
                    description:
                      '<p>Column ID (number)\n                                 or name (string)</p>\n',
                    type: 'String|Integer',
                    optional: true
                  }
                ],
                class: 'p5.Table',
                module: 'IO'
              },
              trim: {
                name: 'trim',
                params: [
                  {
                    name: 'column',
                    description:
                      '<p>Column ID (number)\n                                 or name (string)</p>\n',
                    type: 'String|Integer',
                    optional: true
                  }
                ],
                class: 'p5.Table',
                module: 'IO'
              },
              removeColumn: {
                name: 'removeColumn',
                params: [
                  {
                    name: 'column',
                    description: '<p>columnName (string) or ID (number)</p>\n',
                    type: 'String|Integer'
                  }
                ],
                class: 'p5.Table',
                module: 'IO'
              },
              set: {
                name: 'set',
                params: [
                  {
                    name: 'row',
                    description: '<p>row ID</p>\n',
                    type: 'Integer'
                  },
                  {
                    name: 'column',
                    description:
                      '<p>column ID (Number)\n                              or title (String)</p>\n',
                    type: 'String|Integer'
                  },
                  {
                    name: 'value',
                    description: '<p>value to assign</p>\n',
                    type: 'String|Number'
                  }
                ],
                class: 'p5.Table',
                module: 'IO'
              },
              setNum: {
                name: 'setNum',
                params: [
                  {
                    name: 'row',
                    description: '<p>row ID</p>\n',
                    type: 'Integer'
                  },
                  {
                    name: 'column',
                    description:
                      '<p>column ID (Number)\n                              or title (String)</p>\n',
                    type: 'String|Integer'
                  },
                  {
                    name: 'value',
                    description: '<p>value to assign</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5.Table',
                module: 'IO'
              },
              setString: {
                name: 'setString',
                params: [
                  {
                    name: 'row',
                    description: '<p>row ID</p>\n',
                    type: 'Integer'
                  },
                  {
                    name: 'column',
                    description:
                      '<p>column ID (Number)\n                              or title (String)</p>\n',
                    type: 'String|Integer'
                  },
                  {
                    name: 'value',
                    description: '<p>value to assign</p>\n',
                    type: 'String'
                  }
                ],
                class: 'p5.Table',
                module: 'IO'
              },
              get: {
                name: 'get',
                params: [
                  {
                    name: 'row',
                    description: '<p>row ID</p>\n',
                    type: 'Integer'
                  },
                  {
                    name: 'column',
                    description:
                      '<p>columnName (string) or\n                                  ID (number)</p>\n',
                    type: 'String|Integer'
                  }
                ],
                class: 'p5.Table',
                module: 'IO'
              },
              getNum: {
                name: 'getNum',
                params: [
                  {
                    name: 'row',
                    description: '<p>row ID</p>\n',
                    type: 'Integer'
                  },
                  {
                    name: 'column',
                    description:
                      '<p>columnName (string) or\n                                  ID (number)</p>\n',
                    type: 'String|Integer'
                  }
                ],
                class: 'p5.Table',
                module: 'IO'
              },
              getString: {
                name: 'getString',
                params: [
                  {
                    name: 'row',
                    description: '<p>row ID</p>\n',
                    type: 'Integer'
                  },
                  {
                    name: 'column',
                    description:
                      '<p>columnName (string) or\n                                  ID (number)</p>\n',
                    type: 'String|Integer'
                  }
                ],
                class: 'p5.Table',
                module: 'IO'
              },
              getObject: {
                name: 'getObject',
                params: [
                  {
                    name: 'headerColumn',
                    description:
                      '<p>Name of the column which should be used to\n                             title each row object (optional)</p>\n',
                    type: 'String',
                    optional: true
                  }
                ],
                class: 'p5.Table',
                module: 'IO'
              },
              getArray: {
                name: 'getArray',
                class: 'p5.Table',
                module: 'IO'
              }
            },
            'p5.TableRow': {
              set: {
                name: 'set',
                params: [
                  {
                    name: 'column',
                    description:
                      '<p>Column ID (Number)\n                              or Title (String)</p>\n',
                    type: 'String|Integer'
                  },
                  {
                    name: 'value',
                    description: '<p>The value to be stored</p>\n',
                    type: 'String|Number'
                  }
                ],
                class: 'p5.TableRow',
                module: 'IO'
              },
              setNum: {
                name: 'setNum',
                params: [
                  {
                    name: 'column',
                    description:
                      '<p>Column ID (Number)\n                              or Title (String)</p>\n',
                    type: 'String|Integer'
                  },
                  {
                    name: 'value',
                    description:
                      '<p>The value to be stored\n                              as a Float</p>\n',
                    type: 'Number|String'
                  }
                ],
                class: 'p5.TableRow',
                module: 'IO'
              },
              setString: {
                name: 'setString',
                params: [
                  {
                    name: 'column',
                    description:
                      '<p>Column ID (Number)\n                              or Title (String)</p>\n',
                    type: 'String|Integer'
                  },
                  {
                    name: 'value',
                    description:
                      '<p>The value to be stored\n                              as a String</p>\n',
                    type: 'String|Number|Boolean|Object'
                  }
                ],
                class: 'p5.TableRow',
                module: 'IO'
              },
              get: {
                name: 'get',
                params: [
                  {
                    name: 'column',
                    description:
                      '<p>columnName (string) or\n                                 ID (number)</p>\n',
                    type: 'String|Integer'
                  }
                ],
                class: 'p5.TableRow',
                module: 'IO'
              },
              getNum: {
                name: 'getNum',
                params: [
                  {
                    name: 'column',
                    description:
                      '<p>columnName (string) or\n                                 ID (number)</p>\n',
                    type: 'String|Integer'
                  }
                ],
                class: 'p5.TableRow',
                module: 'IO'
              },
              getString: {
                name: 'getString',
                params: [
                  {
                    name: 'column',
                    description:
                      '<p>columnName (string) or\n                                 ID (number)</p>\n',
                    type: 'String|Integer'
                  }
                ],
                class: 'p5.TableRow',
                module: 'IO'
              }
            },
            'p5.XML': {
              getParent: {
                name: 'getParent',
                class: 'p5.XML',
                module: 'IO'
              },
              getName: {
                name: 'getName',
                class: 'p5.XML',
                module: 'IO'
              },
              setName: {
                name: 'setName',
                params: [
                  {
                    name: 'the',
                    description: '<p>new name of the node</p>\n',
                    type: 'String'
                  }
                ],
                class: 'p5.XML',
                module: 'IO'
              },
              hasChildren: {
                name: 'hasChildren',
                class: 'p5.XML',
                module: 'IO'
              },
              listChildren: {
                name: 'listChildren',
                class: 'p5.XML',
                module: 'IO'
              },
              getChildren: {
                name: 'getChildren',
                params: [
                  {
                    name: 'name',
                    description: '<p>element name</p>\n',
                    type: 'String',
                    optional: true
                  }
                ],
                class: 'p5.XML',
                module: 'IO'
              },
              getChild: {
                name: 'getChild',
                params: [
                  {
                    name: 'name',
                    description: '<p>element name or index</p>\n',
                    type: 'String|Integer'
                  }
                ],
                class: 'p5.XML',
                module: 'IO'
              },
              addChild: {
                name: 'addChild',
                params: [
                  {
                    name: 'node',
                    description:
                      '<p>a <a href="#/p5.XML">p5.XML</a> Object which will be the child to be added</p>\n',
                    type: 'p5.XML'
                  }
                ],
                class: 'p5.XML',
                module: 'IO'
              },
              removeChild: {
                name: 'removeChild',
                params: [
                  {
                    name: 'name',
                    description: '<p>element name or index</p>\n',
                    type: 'String|Integer'
                  }
                ],
                class: 'p5.XML',
                module: 'IO'
              },
              getAttributeCount: {
                name: 'getAttributeCount',
                class: 'p5.XML',
                module: 'IO'
              },
              listAttributes: {
                name: 'listAttributes',
                class: 'p5.XML',
                module: 'IO'
              },
              hasAttribute: {
                name: 'hasAttribute',
                params: [
                  {
                    name: 'the',
                    description: '<p>attribute to be checked</p>\n',
                    type: 'String'
                  }
                ],
                class: 'p5.XML',
                module: 'IO'
              },
              getNum: {
                name: 'getNum',
                params: [
                  {
                    name: 'name',
                    description: '<p>the non-null full name of the attribute</p>\n',
                    type: 'String'
                  },
                  {
                    name: 'defaultValue',
                    description: '<p>the default value of the attribute</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.XML',
                module: 'IO'
              },
              getString: {
                name: 'getString',
                params: [
                  {
                    name: 'name',
                    description: '<p>the non-null full name of the attribute</p>\n',
                    type: 'String'
                  },
                  {
                    name: 'defaultValue',
                    description: '<p>the default value of the attribute</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.XML',
                module: 'IO'
              },
              setAttribute: {
                name: 'setAttribute',
                params: [
                  {
                    name: 'name',
                    description: '<p>the full name of the attribute</p>\n',
                    type: 'String'
                  },
                  {
                    name: 'value',
                    description: '<p>the value of the attribute</p>\n',
                    type: 'Number|String|Boolean'
                  }
                ],
                class: 'p5.XML',
                module: 'IO'
              },
              getContent: {
                name: 'getContent',
                params: [
                  {
                    name: 'defaultValue',
                    description: '<p>value returned if no content is found</p>\n',
                    type: 'String',
                    optional: true
                  }
                ],
                class: 'p5.XML',
                module: 'IO'
              },
              setContent: {
                name: 'setContent',
                params: [
                  {
                    name: 'text',
                    description: '<p>the new content</p>\n',
                    type: 'String'
                  }
                ],
                class: 'p5.XML',
                module: 'IO'
              },
              serialize: {
                name: 'serialize',
                class: 'p5.XML',
                module: 'IO'
              }
            },
            'p5.Vector': {
              x: {
                name: 'x',
                class: 'p5.Vector',
                module: 'Math'
              },
              y: {
                name: 'y',
                class: 'p5.Vector',
                module: 'Math'
              },
              z: {
                name: 'z',
                class: 'p5.Vector',
                module: 'Math'
              },
              toString: {
                name: 'toString',
                class: 'p5.Vector',
                module: 'Math'
              },
              set: {
                name: 'set',
                class: 'p5.Vector',
                module: 'Math',
                overloads: [
                  {
                    params: [
                      {
                        name: 'x',
                        description: '<p>the x component of the vector</p>\n',
                        type: 'Number',
                        optional: true
                      },
                      {
                        name: 'y',
                        description: '<p>the y component of the vector</p>\n',
                        type: 'Number',
                        optional: true
                      },
                      {
                        name: 'z',
                        description: '<p>the z component of the vector</p>\n',
                        type: 'Number',
                        optional: true
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'value',
                        description: '<p>the vector to set</p>\n',
                        type: 'p5.Vector|Number[]'
                      }
                    ],
                    chainable: 1
                  }
                ]
              },
              copy: {
                name: 'copy',
                class: 'p5.Vector',
                module: 'Math'
              },
              add: {
                name: 'add',
                class: 'p5.Vector',
                module: 'Math',
                overloads: [
                  {
                    params: [
                      {
                        name: 'x',
                        description: '<p>the x component of the vector to be added</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'y',
                        description: '<p>the y component of the vector to be added</p>\n',
                        type: 'Number',
                        optional: true
                      },
                      {
                        name: 'z',
                        description: '<p>the z component of the vector to be added</p>\n',
                        type: 'Number',
                        optional: true
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'value',
                        description: '<p>the vector to add</p>\n',
                        type: 'p5.Vector|Number[]'
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'v1',
                        description:
                          '<p>a <a href="#/p5.Vector">p5.Vector</a> to add</p>\n',
                        type: 'p5.Vector'
                      },
                      {
                        name: 'v2',
                        description:
                          '<p>a <a href="#/p5.Vector">p5.Vector</a> to add</p>\n',
                        type: 'p5.Vector'
                      },
                      {
                        name: 'target',
                        description: '<p>the vector to receive the result (Optional)</p>\n',
                        type: 'p5.Vector',
                        optional: true
                      }
                    ],
                    static: 1
                  }
                ]
              },
              rem: {
                name: 'rem',
                class: 'p5.Vector',
                module: 'Math',
                overloads: [
                  {
                    params: [
                      {
                        name: 'x',
                        description: '<p>the x component of divisor vector</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'y',
                        description: '<p>the y component of divisor vector</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'z',
                        description: '<p>the z component of divisor vector</p>\n',
                        type: 'Number'
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'value',
                        description: '<p>divisor vector</p>\n',
                        type: 'p5.Vector | Number[]'
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'v1',
                        description:
                          '<p>dividend <a href="#/p5.Vector">p5.Vector</a></p>\n',
                        type: 'p5.Vector'
                      },
                      {
                        name: 'v2',
                        description: '<p>divisor <a href="#/p5.Vector">p5.Vector</a></p>\n',
                        type: 'p5.Vector'
                      }
                    ],
                    static: 1
                  },
                  {
                    params: [
                      {
                        name: 'v1',
                        description: '',
                        type: 'p5.Vector'
                      },
                      {
                        name: 'v2',
                        description: '',
                        type: 'p5.Vector'
                      }
                    ],
                    static: 1
                  }
                ]
              },
              sub: {
                name: 'sub',
                class: 'p5.Vector',
                module: 'Math',
                overloads: [
                  {
                    params: [
                      {
                        name: 'x',
                        description: '<p>the x component of the vector to subtract</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'y',
                        description: '<p>the y component of the vector to subtract</p>\n',
                        type: 'Number',
                        optional: true
                      },
                      {
                        name: 'z',
                        description: '<p>the z component of the vector to subtract</p>\n',
                        type: 'Number',
                        optional: true
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'value',
                        description: '<p>the vector to subtract</p>\n',
                        type: 'p5.Vector|Number[]'
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'v1',
                        description:
                          '<p>a <a href="#/p5.Vector">p5.Vector</a> to subtract from</p>\n',
                        type: 'p5.Vector'
                      },
                      {
                        name: 'v2',
                        description:
                          '<p>a <a href="#/p5.Vector">p5.Vector</a> to subtract</p>\n',
                        type: 'p5.Vector'
                      },
                      {
                        name: 'target',
                        description: '<p>the vector to receive the result (Optional)</p>\n',
                        type: 'p5.Vector',
                        optional: true
                      }
                    ],
                    static: 1
                  }
                ]
              },
              mult: {
                name: 'mult',
                class: 'p5.Vector',
                module: 'Math',
                overloads: [
                  {
                    params: [
                      {
                        name: 'n',
                        description: '<p>The number to multiply with the vector</p>\n',
                        type: 'Number'
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'x',
                        description:
                          '<p>The number to multiply with the x component of the vector</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'y',
                        description:
                          '<p>The number to multiply with the y component of the vector</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'z',
                        description:
                          '<p>The number to multiply with the z component of the vector</p>\n',
                        type: 'Number',
                        optional: true
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'arr',
                        description:
                          '<p>The array to multiply with the components of the vector</p>\n',
                        type: 'Number[]'
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'v',
                        description:
                          '<p>The vector to multiply with the components of the original vector</p>\n',
                        type: 'p5.Vector'
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'x',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'y',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'z',
                        description: '',
                        type: 'Number',
                        optional: true
                      }
                    ],
                    static: 1
                  },
                  {
                    params: [
                      {
                        name: 'v',
                        description: '',
                        type: 'p5.Vector'
                      },
                      {
                        name: 'n',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'target',
                        description: '<p>the vector to receive the result (Optional)</p>\n',
                        type: 'p5.Vector',
                        optional: true
                      }
                    ],
                    static: 1
                  },
                  {
                    params: [
                      {
                        name: 'v0',
                        description: '',
                        type: 'p5.Vector'
                      },
                      {
                        name: 'v1',
                        description: '',
                        type: 'p5.Vector'
                      },
                      {
                        name: 'target',
                        description: '',
                        type: 'p5.Vector',
                        optional: true
                      }
                    ],
                    static: 1
                  },
                  {
                    params: [
                      {
                        name: 'v0',
                        description: '',
                        type: 'p5.Vector'
                      },
                      {
                        name: 'arr',
                        description: '',
                        type: 'Number[]'
                      },
                      {
                        name: 'target',
                        description: '',
                        type: 'p5.Vector',
                        optional: true
                      }
                    ],
                    static: 1
                  }
                ]
              },
              div: {
                name: 'div',
                class: 'p5.Vector',
                module: 'Math',
                overloads: [
                  {
                    params: [
                      {
                        name: 'n',
                        description: '<p>The number to divide the vector by</p>\n',
                        type: 'Number'
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'x',
                        description:
                          '<p>The number to divide with the x component of the vector</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'y',
                        description:
                          '<p>The number to divide with the y component of the vector</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'z',
                        description:
                          '<p>The number to divide with the z component of the vector</p>\n',
                        type: 'Number',
                        optional: true
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'arr',
                        description:
                          '<p>The array to divide the components of the vector by</p>\n',
                        type: 'Number[]'
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'v',
                        description:
                          '<p>The vector to divide the components of the original vector by</p>\n',
                        type: 'p5.Vector'
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'x',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'y',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'z',
                        description: '',
                        type: 'Number',
                        optional: true
                      }
                    ],
                    static: 1
                  },
                  {
                    params: [
                      {
                        name: 'v',
                        description: '',
                        type: 'p5.Vector'
                      },
                      {
                        name: 'n',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'target',
                        description: '<p>the vector to receive the result (Optional)</p>\n',
                        type: 'p5.Vector',
                        optional: true
                      }
                    ],
                    static: 1
                  },
                  {
                    params: [
                      {
                        name: 'v0',
                        description: '',
                        type: 'p5.Vector'
                      },
                      {
                        name: 'v1',
                        description: '',
                        type: 'p5.Vector'
                      },
                      {
                        name: 'target',
                        description: '',
                        type: 'p5.Vector',
                        optional: true
                      }
                    ],
                    static: 1
                  },
                  {
                    params: [
                      {
                        name: 'v0',
                        description: '',
                        type: 'p5.Vector'
                      },
                      {
                        name: 'arr',
                        description: '',
                        type: 'Number[]'
                      },
                      {
                        name: 'target',
                        description: '',
                        type: 'p5.Vector',
                        optional: true
                      }
                    ],
                    static: 1
                  }
                ]
              },
              mag: {
                name: 'mag',
                class: 'p5.Vector',
                module: 'Math',
                overloads: [
                  {
                    params: []
                  },
                  {
                    params: [
                      {
                        name: 'vecT',
                        description: '<p>the vector to return the magnitude of</p>\n',
                        type: 'p5.Vector'
                      }
                    ],
                    static: 1
                  }
                ]
              },
              magSq: {
                name: 'magSq',
                class: 'p5.Vector',
                module: 'Math'
              },
              dot: {
                name: 'dot',
                class: 'p5.Vector',
                module: 'Math',
                overloads: [
                  {
                    params: [
                      {
                        name: 'x',
                        description: '<p>x component of the vector</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'y',
                        description: '<p>y component of the vector</p>\n',
                        type: 'Number',
                        optional: true
                      },
                      {
                        name: 'z',
                        description: '<p>z component of the vector</p>\n',
                        type: 'Number',
                        optional: true
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'value',
                        description:
                          '<p>value component of the vector or a <a href="#/p5.Vector">p5.Vector</a></p>\n',
                        type: 'p5.Vector'
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'v1',
                        description:
                          '<p>the first <a href="#/p5.Vector">p5.Vector</a></p>\n',
                        type: 'p5.Vector'
                      },
                      {
                        name: 'v2',
                        description:
                          '<p>the second <a href="#/p5.Vector">p5.Vector</a></p>\n',
                        type: 'p5.Vector'
                      }
                    ],
                    static: 1
                  }
                ]
              },
              cross: {
                name: 'cross',
                class: 'p5.Vector',
                module: 'Math',
                overloads: [
                  {
                    params: [
                      {
                        name: 'v',
                        description:
                          '<p><a href="#/p5.Vector">p5.Vector</a> to be crossed</p>\n',
                        type: 'p5.Vector'
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'v1',
                        description:
                          '<p>the first <a href="#/p5.Vector">p5.Vector</a></p>\n',
                        type: 'p5.Vector'
                      },
                      {
                        name: 'v2',
                        description:
                          '<p>the second <a href="#/p5.Vector">p5.Vector</a></p>\n',
                        type: 'p5.Vector'
                      }
                    ],
                    static: 1
                  }
                ]
              },
              dist: {
                name: 'dist',
                class: 'p5.Vector',
                module: 'Math',
                overloads: [
                  {
                    params: [
                      {
                        name: 'v',
                        description:
                          '<p>the x, y, and z coordinates of a <a href="#/p5.Vector">p5.Vector</a></p>\n',
                        type: 'p5.Vector'
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'v1',
                        description:
                          '<p>the first <a href="#/p5.Vector">p5.Vector</a></p>\n',
                        type: 'p5.Vector'
                      },
                      {
                        name: 'v2',
                        description:
                          '<p>the second <a href="#/p5.Vector">p5.Vector</a></p>\n',
                        type: 'p5.Vector'
                      }
                    ],
                    static: 1
                  }
                ]
              },
              normalize: {
                name: 'normalize',
                class: 'p5.Vector',
                module: 'Math'
              },
              limit: {
                name: 'limit',
                params: [
                  {
                    name: 'max',
                    description: '<p>the maximum magnitude for the vector</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5.Vector',
                module: 'Math'
              },
              setMag: {
                name: 'setMag',
                params: [
                  {
                    name: 'len',
                    description: '<p>the new length for this vector</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5.Vector',
                module: 'Math'
              },
              heading: {
                name: 'heading',
                class: 'p5.Vector',
                module: 'Math'
              },
              setHeading: {
                name: 'setHeading',
                params: [
                  {
                    name: 'angle',
                    description: '<p>the angle of rotation</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5.Vector',
                module: 'Math'
              },
              rotate: {
                name: 'rotate',
                params: [
                  {
                    name: 'angle',
                    description: '<p>the angle of rotation</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5.Vector',
                module: 'Math'
              },
              angleBetween: {
                name: 'angleBetween',
                params: [
                  {
                    name: 'value',
                    description:
                      '<p>the x, y, and z components of a <a href="#/p5.Vector">p5.Vector</a></p>\n',
                    type: 'p5.Vector'
                  }
                ],
                class: 'p5.Vector',
                module: 'Math'
              },
              lerp: {
                name: 'lerp',
                class: 'p5.Vector',
                module: 'Math',
                overloads: [
                  {
                    params: [
                      {
                        name: 'x',
                        description: '<p>the x component</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'y',
                        description: '<p>the y component</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'z',
                        description: '<p>the z component</p>\n',
                        type: 'Number'
                      },
                      {
                        name: 'amt',
                        description:
                          '<p>the amount of interpolation; some value between 0.0\n                        (old vector) and 1.0 (new vector). 0.9 is very near\n                        the new vector. 0.5 is halfway in between.</p>\n',
                        type: 'Number'
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'v',
                        description:
                          '<p>the <a href="#/p5.Vector">p5.Vector</a> to lerp to</p>\n',
                        type: 'p5.Vector'
                      },
                      {
                        name: 'amt',
                        description: '',
                        type: 'Number'
                      }
                    ],
                    chainable: 1
                  },
                  {
                    params: [
                      {
                        name: 'v1',
                        description: '',
                        type: 'p5.Vector'
                      },
                      {
                        name: 'v2',
                        description: '',
                        type: 'p5.Vector'
                      },
                      {
                        name: 'amt',
                        description: '',
                        type: 'Number'
                      },
                      {
                        name: 'target',
                        description: '<p>the vector to receive the result (Optional)</p>\n',
                        type: 'p5.Vector',
                        optional: true
                      }
                    ],
                    static: 1
                  }
                ]
              },
              reflect: {
                name: 'reflect',
                params: [
                  {
                    name: 'surfaceNormal',
                    description:
                      '<p>the <a href="#/p5.Vector">p5.Vector</a> to reflect about, will be normalized by this method</p>\n',
                    type: 'p5.Vector'
                  }
                ],
                class: 'p5.Vector',
                module: 'Math'
              },
              array: {
                name: 'array',
                class: 'p5.Vector',
                module: 'Math'
              },
              equals: {
                name: 'equals',
                class: 'p5.Vector',
                module: 'Math',
                overloads: [
                  {
                    params: [
                      {
                        name: 'x',
                        description: '<p>the x component of the vector</p>\n',
                        type: 'Number',
                        optional: true
                      },
                      {
                        name: 'y',
                        description: '<p>the y component of the vector</p>\n',
                        type: 'Number',
                        optional: true
                      },
                      {
                        name: 'z',
                        description: '<p>the z component of the vector</p>\n',
                        type: 'Number',
                        optional: true
                      }
                    ]
                  },
                  {
                    params: [
                      {
                        name: 'value',
                        description: '<p>the vector to compare</p>\n',
                        type: 'p5.Vector|Array'
                      }
                    ]
                  }
                ]
              },
              fromAngle: {
                name: 'fromAngle',
                params: [
                  {
                    name: 'angle',
                    description:
                      '<p>the desired angle, in radians (unaffected by <a href="#/p5/angleMode">angleMode</a>)</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'length',
                    description: '<p>the length of the new vector (defaults to 1)</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.Vector',
                module: 'Math'
              },
              fromAngles: {
                name: 'fromAngles',
                params: [
                  {
                    name: 'theta',
                    description: '<p>the polar angle, in radians (zero is up)</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'phi',
                    description:
                      '<p>the azimuthal angle, in radians\n                              (zero is out of the screen)</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'length',
                    description: '<p>the length of the new vector (defaults to 1)</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.Vector',
                module: 'Math'
              },
              random2D: {
                name: 'random2D',
                class: 'p5.Vector',
                module: 'Math'
              },
              random3D: {
                name: 'random3D',
                class: 'p5.Vector',
                module: 'Math'
              }
            },
            'p5.Font': {
              font: {
                name: 'font',
                class: 'p5.Font',
                module: 'Typography'
              },
              textBounds: {
                name: 'textBounds',
                params: [
                  {
                    name: 'line',
                    description: '<p>a line of text</p>\n',
                    type: 'String'
                  },
                  {
                    name: 'x',
                    description: '<p>x-position</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'y',
                    description: '<p>y-position</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'fontSize',
                    description: '<p>font size to use (optional) Default is 12.</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'options',
                    description:
                      "<p>opentype options (optional)\n                           opentype fonts contains alignment and baseline options.\n                           Default is 'LEFT' and 'alphabetic'</p>\n",
                    type: 'Object',
                    optional: true
                  }
                ],
                class: 'p5.Font',
                module: 'Typography'
              },
              textToPoints: {
                name: 'textToPoints',
                params: [
                  {
                    name: 'txt',
                    description: '<p>a line of text</p>\n',
                    type: 'String'
                  },
                  {
                    name: 'x',
                    description: '<p>x-position</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'y',
                    description: '<p>y-position</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'fontSize',
                    description: '<p>font size to use (optional)</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'options',
                    description:
                      '<p>an (optional) object that can contain:</p>\n<p><br>sampleFactor - the ratio of path-length to number of samples\n(default=.1); higher values yield more points and are therefore\nmore precise</p>\n<p><br>simplifyThreshold - if set to a non-zero value, collinear points will be\nbe removed from the polygon; the value represents the threshold angle to use\nwhen determining whether two edges are collinear</p>\n',
                    type: 'Object',
                    optional: true
                  }
                ],
                class: 'p5.Font',
                module: 'Typography'
              }
            },
            'p5.Camera': {
              perspective: {
                name: 'perspective',
                class: 'p5.Camera',
                module: 'Lights, Camera'
              },
              ortho: {
                name: 'ortho',
                class: 'p5.Camera',
                module: 'Lights, Camera'
              },
              frustum: {
                name: 'frustum',
                class: 'p5.Camera',
                module: 'Lights, Camera'
              },
              pan: {
                name: 'pan',
                params: [
                  {
                    name: 'angle',
                    description:
                      '<p>amount to rotate camera in current\n<a href="#/p5/angleMode">angleMode</a> units.\nGreater than 0 values rotate counterclockwise (to the left).</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5.Camera',
                module: 'Lights, Camera'
              },
              tilt: {
                name: 'tilt',
                params: [
                  {
                    name: 'angle',
                    description:
                      '<p>amount to rotate camera in current\n<a href="#/p5/angleMode">angleMode</a> units.\nGreater than 0 values rotate counterclockwise (to the left).</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5.Camera',
                module: 'Lights, Camera'
              },
              lookAt: {
                name: 'lookAt',
                params: [
                  {
                    name: 'x',
                    description: '<p>x position of a point in world space</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'y',
                    description: '<p>y position of a point in world space</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'z',
                    description: '<p>z position of a point in world space</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5.Camera',
                module: 'Lights, Camera'
              },
              camera: {
                name: 'camera',
                class: 'p5.Camera',
                module: 'Lights, Camera'
              },
              move: {
                name: 'move',
                params: [
                  {
                    name: 'x',
                    description: "<p>amount to move along camera's left-right axis</p>\n",
                    type: 'Number'
                  },
                  {
                    name: 'y',
                    description: "<p>amount to move along camera's up-down axis</p>\n",
                    type: 'Number'
                  },
                  {
                    name: 'z',
                    description:
                      "<p>amount to move along camera's forward-backward axis</p>\n",
                    type: 'Number'
                  }
                ],
                class: 'p5.Camera',
                module: 'Lights, Camera'
              },
              setPosition: {
                name: 'setPosition',
                params: [
                  {
                    name: 'x',
                    description: '<p>x position of a point in world space</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'y',
                    description: '<p>y position of a point in world space</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'z',
                    description: '<p>z position of a point in world space</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5.Camera',
                module: 'Lights, Camera'
              }
            },
            'p5.Geometry': {
              computeFaces: {
                name: 'computeFaces',
                class: 'p5.Geometry',
                module: 'Lights, Camera'
              },
              computeNormals: {
                name: 'computeNormals',
                class: 'p5.Geometry',
                module: 'Lights, Camera'
              },
              averageNormals: {
                name: 'averageNormals',
                class: 'p5.Geometry',
                module: 'Lights, Camera'
              },
              averagePoleNormals: {
                name: 'averagePoleNormals',
                class: 'p5.Geometry',
                module: 'Lights, Camera'
              },
              normalize: {
                name: 'normalize',
                class: 'p5.Geometry',
                module: 'Lights, Camera'
              }
            },
            'p5.Shader': {
              setUniform: {
                name: 'setUniform',
                params: [
                  {
                    name: 'uniformName',
                    description: '<p>the name of the uniform in the\nshader program</p>\n',
                    type: 'String'
                  },
                  {
                    name: 'data',
                    description:
                      '<p>the data to be associated\nwith that uniform; type varies (could be a single numerical value, array,\nmatrix, or texture / sampler reference)</p>\n',
                    type: 'Object|Number|Boolean|Number[]'
                  }
                ],
                class: 'p5.Shader',
                module: 'Lights, Camera'
              }
            },
            'p5.sound': {
              getMasterVolume: {
                name: 'getMasterVolume',
                class: 'p5.sound',
                module: 'p5.sound'
              },
              masterVolume: {
                name: 'masterVolume',
                params: [
                  {
                    name: 'volume',
                    description:
                      '<p>Volume (amplitude) between 0.0\n                                   and 1.0 or modulating signal/oscillator</p>\n',
                    type: 'Number|Object'
                  },
                  {
                    name: 'rampTime',
                    description: '<p>Fade for t seconds</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'timeFromNow',
                    description:
                      '<p>Schedule this event to happen at\n                               t seconds in the future</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.sound',
                module: 'p5.sound'
              },
              soundOut: {
                name: 'soundOut',
                class: 'p5.sound',
                module: 'p5.sound'
              }
            },
            'p5.Effect': {
              amp: {
                name: 'amp',
                params: [
                  {
                    name: 'vol',
                    description: '<p>amplitude between 0 and 1.0</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'rampTime',
                    description: '<p>create a fade that lasts until rampTime</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'tFromNow',
                    description:
                      '<p>schedule this event to happen in tFromNow seconds</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.Effect',
                module: 'p5.sound'
              },
              chain: {
                name: 'chain',
                params: [
                  {
                    name: 'arguments',
                    description: '<p>Chain together multiple sound objects</p>\n',
                    type: 'Object',
                    optional: true
                  }
                ],
                class: 'p5.Effect',
                module: 'p5.sound'
              },
              drywet: {
                name: 'drywet',
                params: [
                  {
                    name: 'fade',
                    description: '<p>The desired drywet value (0 - 1.0)</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.Effect',
                module: 'p5.sound'
              },
              connect: {
                name: 'connect',
                params: [
                  {
                    name: 'unit',
                    description: '',
                    type: 'Object'
                  }
                ],
                class: 'p5.Effect',
                module: 'p5.sound'
              },
              disconnect: {
                name: 'disconnect',
                class: 'p5.Effect',
                module: 'p5.sound'
              }
            },
            'p5.Filter': {
              biquadFilter: {
                name: 'biquadFilter',
                class: 'p5.Filter',
                module: 'p5.sound'
              },
              process: {
                name: 'process',
                params: [
                  {
                    name: 'Signal',
                    description: '<p>An object that outputs audio</p>\n',
                    type: 'Object'
                  },
                  {
                    name: 'freq',
                    description: '<p>Frequency in Hz, from 10 to 22050</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'res',
                    description:
                      '<p>Resonance/Width of the filter frequency\n                      from 0.001 to 1000</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.Filter',
                module: 'p5.sound'
              },
              set: {
                name: 'set',
                params: [
                  {
                    name: 'freq',
                    description: '<p>Frequency in Hz, from 10 to 22050</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'res',
                    description: '<p>Resonance (Q) from 0.001 to 1000</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'timeFromNow',
                    description:
                      '<p>schedule this event to happen\n                              seconds from now</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.Filter',
                module: 'p5.sound'
              },
              freq: {
                name: 'freq',
                params: [
                  {
                    name: 'freq',
                    description: '<p>Filter Frequency</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'timeFromNow',
                    description:
                      '<p>schedule this event to happen\n                              seconds from now</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.Filter',
                module: 'p5.sound'
              },
              res: {
                name: 'res',
                params: [
                  {
                    name: 'res',
                    description:
                      '<p>Resonance/Width of filter freq\n                     from 0.001 to 1000</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'timeFromNow',
                    description:
                      '<p>schedule this event to happen\n                              seconds from now</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.Filter',
                module: 'p5.sound'
              },
              gain: {
                name: 'gain',
                params: [
                  {
                    name: 'gain',
                    description: '',
                    type: 'Number'
                  }
                ],
                class: 'p5.Filter',
                module: 'p5.sound'
              },
              toggle: {
                name: 'toggle',
                class: 'p5.Filter',
                module: 'p5.sound'
              },
              setType: {
                name: 'setType',
                params: [
                  {
                    name: 't',
                    description: '',
                    type: 'String'
                  }
                ],
                class: 'p5.Filter',
                module: 'p5.sound'
              }
            },
            'p5.Oscillator': {
              start: {
                name: 'start',
                params: [
                  {
                    name: 'time',
                    description: '<p>startTime in seconds from now.</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'frequency',
                    description: '<p>frequency in Hz.</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.Oscillator',
                module: 'p5.sound'
              },
              stop: {
                name: 'stop',
                params: [
                  {
                    name: 'secondsFromNow',
                    description: '<p>Time, in seconds from now.</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5.Oscillator',
                module: 'p5.sound'
              },
              amp: {
                name: 'amp',
                params: [
                  {
                    name: 'vol',
                    description:
                      '<p>between 0 and 1.0\n                            or a modulating signal/oscillator</p>\n',
                    type: 'Number|Object'
                  },
                  {
                    name: 'rampTime',
                    description: '<p>create a fade that lasts rampTime</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'timeFromNow',
                    description:
                      '<p>schedule this event to happen\n                              seconds from now</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.Oscillator',
                module: 'p5.sound'
              },
              freq: {
                name: 'freq',
                params: [
                  {
                    name: 'Frequency',
                    description:
                      '<p>Frequency in Hz\n                                      or modulating signal/oscillator</p>\n',
                    type: 'Number|Object'
                  },
                  {
                    name: 'rampTime',
                    description: '<p>Ramp time (in seconds)</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'timeFromNow',
                    description:
                      '<p>Schedule this event to happen\n                                 at x seconds from now</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.Oscillator',
                module: 'p5.sound'
              },
              setType: {
                name: 'setType',
                params: [
                  {
                    name: 'type',
                    description: "<p>'sine', 'triangle', 'sawtooth' or 'square'.</p>\n",
                    type: 'String'
                  }
                ],
                class: 'p5.Oscillator',
                module: 'p5.sound'
              },
              connect: {
                name: 'connect',
                params: [
                  {
                    name: 'unit',
                    description: '<p>A p5.sound or Web Audio object</p>\n',
                    type: 'Object'
                  }
                ],
                class: 'p5.Oscillator',
                module: 'p5.sound'
              },
              disconnect: {
                name: 'disconnect',
                class: 'p5.Oscillator',
                module: 'p5.sound'
              },
              pan: {
                name: 'pan',
                params: [
                  {
                    name: 'panning',
                    description: '<p>Number between -1 and 1</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'timeFromNow',
                    description:
                      '<p>schedule this event to happen\n                              seconds from now</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5.Oscillator',
                module: 'p5.sound'
              },
              phase: {
                name: 'phase',
                params: [
                  {
                    name: 'phase',
                    description: '<p>float between 0.0 and 1.0</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5.Oscillator',
                module: 'p5.sound'
              },
              add: {
                name: 'add',
                params: [
                  {
                    name: 'number',
                    description: '<p>Constant number to add</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5.Oscillator',
                module: 'p5.sound'
              },
              mult: {
                name: 'mult',
                params: [
                  {
                    name: 'number',
                    description: '<p>Constant number to multiply</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5.Oscillator',
                module: 'p5.sound'
              },
              scale: {
                name: 'scale',
                params: [
                  {
                    name: 'inMin',
                    description: '<p>input range minumum</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'inMax',
                    description: '<p>input range maximum</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'outMin',
                    description: '<p>input range minumum</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'outMax',
                    description: '<p>input range maximum</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5.Oscillator',
                module: 'p5.sound'
              }
            },
            'p5.MonoSynth': {
              play: {
                name: 'play',
                params: [
                  {
                    name: 'note',
                    description:
                      '<p>the note you want to play, specified as a\n                               frequency in Hertz (Number) or as a midi\n                               value in Note/Octave format ("C4", "Eb3"...etc")\n                               See <a href = "https://github.com/Tonejs/Tone.js/wiki/Instruments">\n                               Tone</a>. Defaults to 440 hz.</p>\n',
                    type: 'String | Number'
                  },
                  {
                    name: 'velocity',
                    description:
                      '<p>velocity of the note to play (ranging from 0 to 1)</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'secondsFromNow',
                    description: '<p>time from now (in seconds) at which to play</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'sustainTime',
                    description:
                      '<p>time to sustain before releasing the envelope. Defaults to 0.15 seconds.</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.MonoSynth',
                module: 'p5.sound'
              },
              triggerAttack: {
                params: [
                  {
                    name: 'note',
                    description:
                      '<p>the note you want to play, specified as a\n                               frequency in Hertz (Number) or as a midi\n                               value in Note/Octave format ("C4", "Eb3"...etc")\n                               See <a href = "https://github.com/Tonejs/Tone.js/wiki/Instruments">\n                               Tone</a>. Defaults to 440 hz</p>\n',
                    type: 'String | Number'
                  },
                  {
                    name: 'velocity',
                    description:
                      '<p>velocity of the note to play (ranging from 0 to 1)</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'secondsFromNow',
                    description: '<p>time from now (in seconds) at which to play</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                name: 'triggerAttack',
                class: 'p5.MonoSynth',
                module: 'p5.sound'
              },
              triggerRelease: {
                params: [
                  {
                    name: 'secondsFromNow',
                    description: '<p>time to trigger the release</p>\n',
                    type: 'Number'
                  }
                ],
                name: 'triggerRelease',
                class: 'p5.MonoSynth',
                module: 'p5.sound'
              },
              setADSR: {
                name: 'setADSR',
                params: [
                  {
                    name: 'attackTime',
                    description:
                      '<p>Time (in seconds before envelope\n                              reaches Attack Level</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'decayTime',
                    description:
                      '<p>Time (in seconds) before envelope\n                              reaches Decay/Sustain Level</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'susRatio',
                    description:
                      '<p>Ratio between attackLevel and releaseLevel, on a scale from 0 to 1,\n                              where 1.0 = attackLevel, 0.0 = releaseLevel.\n                              The susRatio determines the decayLevel and the level at which the\n                              sustain portion of the envelope will sustain.\n                              For example, if attackLevel is 0.4, releaseLevel is 0,\n                              and susAmt is 0.5, the decayLevel would be 0.2. If attackLevel is\n                              increased to 1.0 (using <code>setRange</code>),\n                              then decayLevel would increase proportionally, to become 0.5.</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'releaseTime',
                    description: '<p>Time in seconds from now (defaults to 0)</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.MonoSynth',
                module: 'p5.sound'
              },
              attack: {
                name: 'attack',
                class: 'p5.MonoSynth',
                module: 'p5.sound'
              },
              decay: {
                name: 'decay',
                class: 'p5.MonoSynth',
                module: 'p5.sound'
              },
              sustain: {
                name: 'sustain',
                class: 'p5.MonoSynth',
                module: 'p5.sound'
              },
              release: {
                name: 'release',
                class: 'p5.MonoSynth',
                module: 'p5.sound'
              },
              amp: {
                name: 'amp',
                params: [
                  {
                    name: 'vol',
                    description: '<p>desired volume</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'rampTime',
                    description: '<p>Time to reach new volume</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.MonoSynth',
                module: 'p5.sound'
              },
              connect: {
                name: 'connect',
                params: [
                  {
                    name: 'unit',
                    description: '<p>A p5.sound or Web Audio object</p>\n',
                    type: 'Object'
                  }
                ],
                class: 'p5.MonoSynth',
                module: 'p5.sound'
              },
              disconnect: {
                name: 'disconnect',
                class: 'p5.MonoSynth',
                module: 'p5.sound'
              },
              dispose: {
                name: 'dispose',
                class: 'p5.MonoSynth',
                module: 'p5.sound'
              }
            },
            'p5.AudioVoice': {
              connect: {
                name: 'connect',
                params: [
                  {
                    name: 'unit',
                    description: '',
                    type: 'Object'
                  }
                ],
                class: 'p5.AudioVoice',
                module: 'p5.sound'
              },
              disconnect: {
                name: 'disconnect',
                class: 'p5.AudioVoice',
                module: 'p5.sound'
              }
            },
            'p5.PolySynth': {
              notes: {
                name: 'notes',
                class: 'p5.PolySynth',
                module: 'p5.sound'
              },
              polyvalue: {
                name: 'polyvalue',
                class: 'p5.PolySynth',
                module: 'p5.sound'
              },
              AudioVoice: {
                name: 'AudioVoice',
                class: 'p5.PolySynth',
                module: 'p5.sound'
              },
              play: {
                name: 'play',
                params: [
                  {
                    name: 'note',
                    description:
                      '<p>midi note to play (ranging from 0 to 127 - 60 being a middle C)</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'velocity',
                    description:
                      '<p>velocity of the note to play (ranging from 0 to 1)</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'secondsFromNow',
                    description: '<p>time from now (in seconds) at which to play</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'sustainTime',
                    description: '<p>time to sustain before releasing the envelope</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.PolySynth',
                module: 'p5.sound'
              },
              noteADSR: {
                name: 'noteADSR',
                params: [
                  {
                    name: 'note',
                    description: '<p>Midi note on which ADSR should be set.</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'attackTime',
                    description:
                      '<p>Time (in seconds before envelope\n                              reaches Attack Level</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'decayTime',
                    description:
                      '<p>Time (in seconds) before envelope\n                              reaches Decay/Sustain Level</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'susRatio',
                    description:
                      '<p>Ratio between attackLevel and releaseLevel, on a scale from 0 to 1,\n                              where 1.0 = attackLevel, 0.0 = releaseLevel.\n                              The susRatio determines the decayLevel and the level at which the\n                              sustain portion of the envelope will sustain.\n                              For example, if attackLevel is 0.4, releaseLevel is 0,\n                              and susAmt is 0.5, the decayLevel would be 0.2. If attackLevel is\n                              increased to 1.0 (using <code>setRange</code>),\n                              then decayLevel would increase proportionally, to become 0.5.</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'releaseTime',
                    description: '<p>Time in seconds from now (defaults to 0)</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.PolySynth',
                module: 'p5.sound'
              },
              setADSR: {
                name: 'setADSR',
                params: [
                  {
                    name: 'attackTime',
                    description:
                      '<p>Time (in seconds before envelope\n                               reaches Attack Level</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'decayTime',
                    description:
                      '<p>Time (in seconds) before envelope\n                               reaches Decay/Sustain Level</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'susRatio',
                    description:
                      '<p>Ratio between attackLevel and releaseLevel, on a scale from 0 to 1,\n                               where 1.0 = attackLevel, 0.0 = releaseLevel.\n                               The susRatio determines the decayLevel and the level at which the\n                               sustain portion of the envelope will sustain.\n                               For example, if attackLevel is 0.4, releaseLevel is 0,\n                               and susAmt is 0.5, the decayLevel would be 0.2. If attackLevel is\n                               increased to 1.0 (using <code>setRange</code>),\n                               then decayLevel would increase proportionally, to become 0.5.</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'releaseTime',
                    description: '<p>Time in seconds from now (defaults to 0)</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.PolySynth',
                module: 'p5.sound'
              },
              noteAttack: {
                name: 'noteAttack',
                params: [
                  {
                    name: 'note',
                    description: '<p>midi note on which attack should be triggered.</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'velocity',
                    description:
                      '<p>velocity of the note to play (ranging from 0 to 1)/</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'secondsFromNow',
                    description: '<p>time from now (in seconds)</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.PolySynth',
                module: 'p5.sound'
              },
              noteRelease: {
                name: 'noteRelease',
                params: [
                  {
                    name: 'note',
                    description:
                      '<p>midi note on which attack should be triggered.\n                                  If no value is provided, all notes will be released.</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'secondsFromNow',
                    description: '<p>time to trigger the release</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.PolySynth',
                module: 'p5.sound'
              },
              connect: {
                name: 'connect',
                params: [
                  {
                    name: 'unit',
                    description: '<p>A p5.sound or Web Audio object</p>\n',
                    type: 'Object'
                  }
                ],
                class: 'p5.PolySynth',
                module: 'p5.sound'
              },
              disconnect: {
                name: 'disconnect',
                class: 'p5.PolySynth',
                module: 'p5.sound'
              },
              dispose: {
                name: 'dispose',
                class: 'p5.PolySynth',
                module: 'p5.sound'
              }
            },
            'p5.SoundFile': {
              isLoaded: {
                name: 'isLoaded',
                class: 'p5.SoundFile',
                module: 'p5.sound'
              },
              play: {
                name: 'play',
                params: [
                  {
                    name: 'startTime',
                    description:
                      '<p>(optional) schedule playback to start (in seconds from now).</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'rate',
                    description: '<p>(optional) playback rate</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'amp',
                    description:
                      '<p>(optional) amplitude (volume)\n                                    of playback</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'cueStart',
                    description: '<p>(optional) cue start time in seconds</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'duration',
                    description: '<p>(optional) duration of playback in seconds</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.SoundFile',
                module: 'p5.sound'
              },
              playMode: {
                name: 'playMode',
                params: [
                  {
                    name: 'str',
                    description: "<p>'restart' or 'sustain' or 'untilDone'</p>\n",
                    type: 'String'
                  }
                ],
                class: 'p5.SoundFile',
                module: 'p5.sound'
              },
              pause: {
                name: 'pause',
                params: [
                  {
                    name: 'startTime',
                    description:
                      '<p>(optional) schedule event to occur\n                             seconds from now</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.SoundFile',
                module: 'p5.sound'
              },
              loop: {
                name: 'loop',
                params: [
                  {
                    name: 'startTime',
                    description:
                      '<p>(optional) schedule event to occur\n                            seconds from now</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'rate',
                    description: '<p>(optional) playback rate</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'amp',
                    description: '<p>(optional) playback volume</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'cueLoopStart',
                    description: '<p>(optional) startTime in seconds</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'duration',
                    description: '<p>(optional) loop duration in seconds</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.SoundFile',
                module: 'p5.sound'
              },
              setLoop: {
                name: 'setLoop',
                params: [
                  {
                    name: 'Boolean',
                    description: '<p>set looping to true or false</p>\n',
                    type: 'Boolean'
                  }
                ],
                class: 'p5.SoundFile',
                module: 'p5.sound'
              },
              isLooping: {
                name: 'isLooping',
                class: 'p5.SoundFile',
                module: 'p5.sound'
              },
              isPlaying: {
                name: 'isPlaying',
                class: 'p5.SoundFile',
                module: 'p5.sound'
              },
              isPaused: {
                name: 'isPaused',
                class: 'p5.SoundFile',
                module: 'p5.sound'
              },
              stop: {
                name: 'stop',
                params: [
                  {
                    name: 'startTime',
                    description:
                      '<p>(optional) schedule event to occur\n                            in seconds from now</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.SoundFile',
                module: 'p5.sound'
              },
              setVolume: {
                name: 'setVolume',
                params: [
                  {
                    name: 'volume',
                    description:
                      '<p>Volume (amplitude) between 0.0\n                                   and 1.0 or modulating signal/oscillator</p>\n',
                    type: 'Number|Object'
                  },
                  {
                    name: 'rampTime',
                    description: '<p>Fade for t seconds</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'timeFromNow',
                    description:
                      '<p>Schedule this event to happen at\n                               t seconds in the future</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.SoundFile',
                module: 'p5.sound'
              },
              pan: {
                name: 'pan',
                params: [
                  {
                    name: 'panValue',
                    description: '<p>Set the stereo panner</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'timeFromNow',
                    description:
                      '<p>schedule this event to happen\n                                seconds from now</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.SoundFile',
                module: 'p5.sound'
              },
              getPan: {
                name: 'getPan',
                class: 'p5.SoundFile',
                module: 'p5.sound'
              },
              rate: {
                name: 'rate',
                params: [
                  {
                    name: 'playbackRate',
                    description:
                      '<p>Set the playback rate. 1.0 is normal,\n                                   .5 is half-speed, 2.0 is twice as fast.\n                                   Values less than zero play backwards.</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.SoundFile',
                module: 'p5.sound'
              },
              duration: {
                name: 'duration',
                class: 'p5.SoundFile',
                module: 'p5.sound'
              },
              currentTime: {
                name: 'currentTime',
                class: 'p5.SoundFile',
                module: 'p5.sound'
              },
              jump: {
                name: 'jump',
                params: [
                  {
                    name: 'cueTime',
                    description: '<p>cueTime of the soundFile in seconds.</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'duration',
                    description: '<p>duration in seconds.</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5.SoundFile',
                module: 'p5.sound'
              },
              channels: {
                name: 'channels',
                class: 'p5.SoundFile',
                module: 'p5.sound'
              },
              sampleRate: {
                name: 'sampleRate',
                class: 'p5.SoundFile',
                module: 'p5.sound'
              },
              frames: {
                name: 'frames',
                class: 'p5.SoundFile',
                module: 'p5.sound'
              },
              getPeaks: {
                name: 'getPeaks',
                params: [
                  {
                    name: 'length',
                    description:
                      '<p>length is the size of the returned array.\n                         Larger length results in more precision.\n                         Defaults to 5*width of the browser window.</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.SoundFile',
                module: 'p5.sound'
              },
              reverseBuffer: {
                name: 'reverseBuffer',
                class: 'p5.SoundFile',
                module: 'p5.sound'
              },
              onended: {
                name: 'onended',
                params: [
                  {
                    name: 'callback',
                    description:
                      '<p>function to call when the\n                            soundfile has ended.</p>\n',
                    type: 'Function'
                  }
                ],
                class: 'p5.SoundFile',
                module: 'p5.sound'
              },
              connect: {
                name: 'connect',
                params: [
                  {
                    name: 'object',
                    description: '<p>Audio object that accepts an input</p>\n',
                    type: 'Object',
                    optional: true
                  }
                ],
                class: 'p5.SoundFile',
                module: 'p5.sound'
              },
              disconnect: {
                name: 'disconnect',
                class: 'p5.SoundFile',
                module: 'p5.sound'
              },
              setPath: {
                name: 'setPath',
                params: [
                  {
                    name: 'path',
                    description: '<p>path to audio file</p>\n',
                    type: 'String'
                  },
                  {
                    name: 'callback',
                    description: '<p>Callback</p>\n',
                    type: 'Function'
                  }
                ],
                class: 'p5.SoundFile',
                module: 'p5.sound'
              },
              setBuffer: {
                name: 'setBuffer',
                params: [
                  {
                    name: 'buf',
                    description:
                      '<p>Array of Float32 Array(s). 2 Float32 Arrays\n                   will create a stereo source. 1 will create\n                   a mono source.</p>\n',
                    type: 'Array'
                  }
                ],
                class: 'p5.SoundFile',
                module: 'p5.sound'
              },
              processPeaks: {
                name: 'processPeaks',
                params: [
                  {
                    name: 'callback',
                    description: '<p>a function to call once this data is returned</p>\n',
                    type: 'Function'
                  },
                  {
                    name: 'initThreshold',
                    description: '<p>initial threshold defaults to 0.9</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'minThreshold',
                    description: '<p>minimum threshold defaults to 0.22</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'minPeaks',
                    description: '<p>minimum number of peaks defaults to 200</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.SoundFile',
                module: 'p5.sound'
              },
              addCue: {
                name: 'addCue',
                params: [
                  {
                    name: 'time',
                    description:
                      "<p>Time in seconds, relative to this media\n                           element's playback. For example, to trigger\n                           an event every time playback reaches two\n                           seconds, pass in the number 2. This will be\n                           passed as the first parameter to\n                           the callback function.</p>\n",
                    type: 'Number'
                  },
                  {
                    name: 'callback',
                    description:
                      '<p>Name of a function that will be\n                           called at the given time. The callback will\n                           receive time and (optionally) param as its\n                           two parameters.</p>\n',
                    type: 'Function'
                  },
                  {
                    name: 'value',
                    description:
                      '<p>An object to be passed as the\n                           second parameter to the\n                           callback function.</p>\n',
                    type: 'Object',
                    optional: true
                  }
                ],
                class: 'p5.SoundFile',
                module: 'p5.sound'
              },
              removeCue: {
                name: 'removeCue',
                params: [
                  {
                    name: 'id',
                    description: '<p>ID of the cue, as returned by addCue</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5.SoundFile',
                module: 'p5.sound'
              },
              clearCues: {
                name: 'clearCues',
                class: 'p5.SoundFile',
                module: 'p5.sound'
              },
              save: {
                name: 'save',
                params: [
                  {
                    name: 'fileName',
                    description: '<p>name of the resulting .wav file.</p>\n',
                    type: 'String',
                    optional: true
                  }
                ],
                class: 'p5.SoundFile',
                module: 'p5.sound'
              },
              getBlob: {
                name: 'getBlob',
                class: 'p5.SoundFile',
                module: 'p5.sound'
              }
            },
            'p5.Amplitude': {
              setInput: {
                name: 'setInput',
                params: [
                  {
                    name: 'snd',
                    description:
                      '<p>set the sound source\n                                     (optional, defaults to\n                                     master output)</p>\n',
                    type: 'SoundObject|undefined',
                    optional: true
                  },
                  {
                    name: 'smoothing',
                    description:
                      '<p>a range between 0.0 and 1.0\n                                      to smooth amplitude readings</p>\n',
                    type: 'Number|undefined',
                    optional: true
                  }
                ],
                class: 'p5.Amplitude',
                module: 'p5.sound'
              },
              getLevel: {
                name: 'getLevel',
                params: [
                  {
                    name: 'channel',
                    description:
                      '<p>Optionally return only channel 0 (left) or 1 (right)</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.Amplitude',
                module: 'p5.sound'
              },
              toggleNormalize: {
                name: 'toggleNormalize',
                params: [
                  {
                    name: 'boolean',
                    description: '<p>set normalize to true (1) or false (0)</p>\n',
                    type: 'Boolean',
                    optional: true
                  }
                ],
                class: 'p5.Amplitude',
                module: 'p5.sound'
              },
              smooth: {
                name: 'smooth',
                params: [
                  {
                    name: 'set',
                    description: '<p>smoothing from 0.0 <= 1</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5.Amplitude',
                module: 'p5.sound'
              }
            },
            'p5.FFT': {
              setInput: {
                name: 'setInput',
                params: [
                  {
                    name: 'source',
                    description: '<p>p5.sound object (or web audio API source node)</p>\n',
                    type: 'Object',
                    optional: true
                  }
                ],
                class: 'p5.FFT',
                module: 'p5.sound'
              },
              waveform: {
                name: 'waveform',
                params: [
                  {
                    name: 'bins',
                    description:
                      '<p>Must be a power of two between\n                          16 and 1024. Defaults to 1024.</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'precision',
                    description:
                      '<p>If any value is provided, will return results\n                            in a Float32 Array which is more precise\n                            than a regular array.</p>\n',
                    type: 'String',
                    optional: true
                  }
                ],
                class: 'p5.FFT',
                module: 'p5.sound'
              },
              analyze: {
                name: 'analyze',
                params: [
                  {
                    name: 'bins',
                    description:
                      '<p>Must be a power of two between\n                           16 and 1024. Defaults to 1024.</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'scale',
                    description:
                      '<p>If "dB," returns decibel\n                           float measurements between\n                           -140 and 0 (max).\n                           Otherwise returns integers from 0-255.</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.FFT',
                module: 'p5.sound'
              },
              getEnergy: {
                name: 'getEnergy',
                params: [
                  {
                    name: 'frequency1',
                    description:
                      '<p>Will return a value representing\n                              energy at this frequency. Alternately,\n                              the strings "bass", "lowMid" "mid",\n                              "highMid", and "treble" will return\n                              predefined frequency ranges.</p>\n',
                    type: 'Number|String'
                  },
                  {
                    name: 'frequency2',
                    description:
                      '<p>If a second frequency is given,\n                              will return average amount of\n                              energy that exists between the\n                              two frequencies.</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.FFT',
                module: 'p5.sound'
              },
              getCentroid: {
                name: 'getCentroid',
                class: 'p5.FFT',
                module: 'p5.sound'
              },
              smooth: {
                name: 'smooth',
                params: [
                  {
                    name: 'smoothing',
                    description:
                      '<p>0.0 < smoothing < 1.0.\n                             Defaults to 0.8.</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5.FFT',
                module: 'p5.sound'
              },
              linAverages: {
                name: 'linAverages',
                params: [
                  {
                    name: 'N',
                    description: '<p>Number of returned frequency groups</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5.FFT',
                module: 'p5.sound'
              },
              logAverages: {
                name: 'logAverages',
                params: [
                  {
                    name: 'octaveBands',
                    description: '<p>Array of Octave Bands objects for grouping</p>\n',
                    type: 'Array'
                  }
                ],
                class: 'p5.FFT',
                module: 'p5.sound'
              },
              getOctaveBands: {
                name: 'getOctaveBands',
                params: [
                  {
                    name: 'N',
                    description:
                      '<p>Specifies the 1/N type of generated octave bands</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'fCtr0',
                    description: '<p>Minimum central frequency for the lowest band</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5.FFT',
                module: 'p5.sound'
              }
            },
            'p5.Signal': {
              fade: {
                name: 'fade',
                params: [
                  {
                    name: 'value',
                    description: '<p>Value to set this signal</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'secondsFromNow',
                    description: '<p>Length of fade, in seconds from now</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.Signal',
                module: 'p5.sound'
              },
              setInput: {
                name: 'setInput',
                params: [
                  {
                    name: 'input',
                    description: '',
                    type: 'Object'
                  }
                ],
                class: 'p5.Signal',
                module: 'p5.sound'
              },
              add: {
                name: 'add',
                params: [
                  {
                    name: 'number',
                    description: '',
                    type: 'Number'
                  }
                ],
                class: 'p5.Signal',
                module: 'p5.sound'
              },
              mult: {
                name: 'mult',
                params: [
                  {
                    name: 'number',
                    description: '<p>to multiply</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5.Signal',
                module: 'p5.sound'
              },
              scale: {
                name: 'scale',
                params: [
                  {
                    name: 'number',
                    description: '<p>to multiply</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'inMin',
                    description: '<p>input range minumum</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'inMax',
                    description: '<p>input range maximum</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'outMin',
                    description: '<p>input range minumum</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'outMax',
                    description: '<p>input range maximum</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5.Signal',
                module: 'p5.sound'
              }
            },
            'p5.Envelope': {
              attackTime: {
                name: 'attackTime',
                class: 'p5.Envelope',
                module: 'p5.sound'
              },
              attackLevel: {
                name: 'attackLevel',
                class: 'p5.Envelope',
                module: 'p5.sound'
              },
              decayTime: {
                name: 'decayTime',
                class: 'p5.Envelope',
                module: 'p5.sound'
              },
              decayLevel: {
                name: 'decayLevel',
                class: 'p5.Envelope',
                module: 'p5.sound'
              },
              releaseTime: {
                name: 'releaseTime',
                class: 'p5.Envelope',
                module: 'p5.sound'
              },
              releaseLevel: {
                name: 'releaseLevel',
                class: 'p5.Envelope',
                module: 'p5.sound'
              },
              set: {
                name: 'set',
                params: [
                  {
                    name: 'attackTime',
                    description:
                      '<p>Time (in seconds) before level\n                               reaches attackLevel</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'attackLevel',
                    description:
                      '<p>Typically an amplitude between\n                               0.0 and 1.0</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'decayTime',
                    description: '<p>Time</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'decayLevel',
                    description:
                      '<p>Amplitude (In a standard ADSR envelope,\n                               decayLevel = sustainLevel)</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'releaseTime',
                    description: '<p>Release Time (in seconds)</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'releaseLevel',
                    description: '<p>Amplitude</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5.Envelope',
                module: 'p5.sound'
              },
              setADSR: {
                name: 'setADSR',
                params: [
                  {
                    name: 'attackTime',
                    description:
                      '<p>Time (in seconds before envelope\n                              reaches Attack Level</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'decayTime',
                    description:
                      '<p>Time (in seconds) before envelope\n                              reaches Decay/Sustain Level</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'susRatio',
                    description:
                      '<p>Ratio between attackLevel and releaseLevel, on a scale from 0 to 1,\n                              where 1.0 = attackLevel, 0.0 = releaseLevel.\n                              The susRatio determines the decayLevel and the level at which the\n                              sustain portion of the envelope will sustain.\n                              For example, if attackLevel is 0.4, releaseLevel is 0,\n                              and susAmt is 0.5, the decayLevel would be 0.2. If attackLevel is\n                              increased to 1.0 (using <code>setRange</code>),\n                              then decayLevel would increase proportionally, to become 0.5.</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'releaseTime',
                    description: '<p>Time in seconds from now (defaults to 0)</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.Envelope',
                module: 'p5.sound'
              },
              setRange: {
                name: 'setRange',
                params: [
                  {
                    name: 'aLevel',
                    description: '<p>attack level (defaults to 1)</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'rLevel',
                    description: '<p>release level (defaults to 0)</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5.Envelope',
                module: 'p5.sound'
              },
              setInput: {
                name: 'setInput',
                params: [
                  {
                    name: 'inputs',
                    description:
                      '<p>A p5.sound object or\n                              Web Audio Param.</p>\n',
                    type: 'Object',
                    optional: true,
                    multiple: true
                  }
                ],
                class: 'p5.Envelope',
                module: 'p5.sound'
              },
              setExp: {
                name: 'setExp',
                params: [
                  {
                    name: 'isExp',
                    description: '<p>true is exponential, false is linear</p>\n',
                    type: 'Boolean'
                  }
                ],
                class: 'p5.Envelope',
                module: 'p5.sound'
              },
              play: {
                name: 'play',
                params: [
                  {
                    name: 'unit',
                    description:
                      '<p>A p5.sound object or\n                              Web Audio Param.</p>\n',
                    type: 'Object'
                  },
                  {
                    name: 'startTime',
                    description: '<p>time from now (in seconds) at which to play</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'sustainTime',
                    description: '<p>time to sustain before releasing the envelope</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.Envelope',
                module: 'p5.sound'
              },
              triggerAttack: {
                name: 'triggerAttack',
                params: [
                  {
                    name: 'unit',
                    description: '<p>p5.sound Object or Web Audio Param</p>\n',
                    type: 'Object'
                  },
                  {
                    name: 'secondsFromNow',
                    description: '<p>time from now (in seconds)</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5.Envelope',
                module: 'p5.sound'
              },
              triggerRelease: {
                name: 'triggerRelease',
                params: [
                  {
                    name: 'unit',
                    description: '<p>p5.sound Object or Web Audio Param</p>\n',
                    type: 'Object'
                  },
                  {
                    name: 'secondsFromNow',
                    description: '<p>time to trigger the release</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5.Envelope',
                module: 'p5.sound'
              },
              ramp: {
                name: 'ramp',
                params: [
                  {
                    name: 'unit',
                    description: '<p>p5.sound Object or Web Audio Param</p>\n',
                    type: 'Object'
                  },
                  {
                    name: 'secondsFromNow',
                    description: '<p>When to trigger the ramp</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'v',
                    description: '<p>Target value</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'v2',
                    description: '<p>Second target value (optional)</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.Envelope',
                module: 'p5.sound'
              },
              add: {
                name: 'add',
                params: [
                  {
                    name: 'number',
                    description: '<p>Constant number to add</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5.Envelope',
                module: 'p5.sound'
              },
              mult: {
                name: 'mult',
                params: [
                  {
                    name: 'number',
                    description: '<p>Constant number to multiply</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5.Envelope',
                module: 'p5.sound'
              },
              scale: {
                name: 'scale',
                params: [
                  {
                    name: 'inMin',
                    description: '<p>input range minumum</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'inMax',
                    description: '<p>input range maximum</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'outMin',
                    description: '<p>input range minumum</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'outMax',
                    description: '<p>input range maximum</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5.Envelope',
                module: 'p5.sound'
              }
            },
            'p5.Pulse': {
              width: {
                name: 'width',
                params: [
                  {
                    name: 'width',
                    description:
                      '<p>Width between the pulses (0 to 1.0,\n                       defaults to 0)</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.Pulse',
                module: 'p5.sound'
              }
            },
            'p5.Noise': {
              setType: {
                name: 'setType',
                params: [
                  {
                    name: 'type',
                    description: "<p>'white', 'pink' or 'brown'</p>\n",
                    type: 'String',
                    optional: true
                  }
                ],
                class: 'p5.Noise',
                module: 'p5.sound'
              }
            },
            'p5.AudioIn': {
              input: {
                name: 'input',
                class: 'p5.AudioIn',
                module: 'p5.sound'
              },
              output: {
                name: 'output',
                class: 'p5.AudioIn',
                module: 'p5.sound'
              },
              stream: {
                name: 'stream',
                class: 'p5.AudioIn',
                module: 'p5.sound'
              },
              mediaStream: {
                name: 'mediaStream',
                class: 'p5.AudioIn',
                module: 'p5.sound'
              },
              currentSource: {
                name: 'currentSource',
                class: 'p5.AudioIn',
                module: 'p5.sound'
              },
              enabled: {
                name: 'enabled',
                class: 'p5.AudioIn',
                module: 'p5.sound'
              },
              amplitude: {
                name: 'amplitude',
                class: 'p5.AudioIn',
                module: 'p5.sound'
              },
              start: {
                name: 'start',
                params: [
                  {
                    name: 'successCallback',
                    description:
                      '<p>Name of a function to call on\n                                  success.</p>\n',
                    type: 'Function',
                    optional: true
                  },
                  {
                    name: 'errorCallback',
                    description:
                      '<p>Name of a function to call if\n                                  there was an error. For example,\n                                  some browsers do not support\n                                  getUserMedia.</p>\n',
                    type: 'Function',
                    optional: true
                  }
                ],
                class: 'p5.AudioIn',
                module: 'p5.sound'
              },
              stop: {
                name: 'stop',
                class: 'p5.AudioIn',
                module: 'p5.sound'
              },
              connect: {
                name: 'connect',
                params: [
                  {
                    name: 'unit',
                    description:
                      '<p>An object that accepts audio input,\n                        such as an FFT</p>\n',
                    type: 'Object',
                    optional: true
                  }
                ],
                class: 'p5.AudioIn',
                module: 'p5.sound'
              },
              disconnect: {
                name: 'disconnect',
                class: 'p5.AudioIn',
                module: 'p5.sound'
              },
              getLevel: {
                name: 'getLevel',
                params: [
                  {
                    name: 'smoothing',
                    description:
                      '<p>Smoothing is 0.0 by default.\n                             Smooths values based on previous values.</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.AudioIn',
                module: 'p5.sound'
              },
              amp: {
                name: 'amp',
                params: [
                  {
                    name: 'vol',
                    description: '<p>between 0 and 1.0</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'time',
                    description: '<p>ramp time (optional)</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.AudioIn',
                module: 'p5.sound'
              },
              getSources: {
                name: 'getSources',
                params: [
                  {
                    name: 'successCallback',
                    description:
                      '<p>This callback function handles the sources when they\n                                     have been enumerated. The callback function\n                                     receives the deviceList array as its only argument</p>\n',
                    type: 'Function',
                    optional: true
                  },
                  {
                    name: 'errorCallback',
                    description:
                      '<p>This optional callback receives the error\n                                   message as its argument.</p>\n',
                    type: 'Function',
                    optional: true
                  }
                ],
                class: 'p5.AudioIn',
                module: 'p5.sound'
              },
              setSource: {
                name: 'setSource',
                params: [
                  {
                    name: 'num',
                    description: '<p>position of input source in the array</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5.AudioIn',
                module: 'p5.sound'
              }
            },
            'p5.EQ': {
              bands: {
                name: 'bands',
                class: 'p5.EQ',
                module: 'p5.sound'
              },
              process: {
                name: 'process',
                params: [
                  {
                    name: 'src',
                    description: '<p>Audio source</p>\n',
                    type: 'Object'
                  }
                ],
                class: 'p5.EQ',
                module: 'p5.sound'
              }
            },
            'p5.Panner3D': {
              panner: {
                name: 'panner',
                class: 'p5.Panner3D',
                module: 'p5.sound'
              },
              process: {
                name: 'process',
                params: [
                  {
                    name: 'src',
                    description: '<p>Input source</p>\n',
                    type: 'Object'
                  }
                ],
                class: 'p5.Panner3D',
                module: 'p5.sound'
              },
              set: {
                name: 'set',
                params: [
                  {
                    name: 'xVal',
                    description: '',
                    type: 'Number'
                  },
                  {
                    name: 'yVal',
                    description: '',
                    type: 'Number'
                  },
                  {
                    name: 'zVal',
                    description: '',
                    type: 'Number'
                  },
                  {
                    name: 'time',
                    description: '',
                    type: 'Number'
                  }
                ],
                class: 'p5.Panner3D',
                module: 'p5.sound'
              },
              positionX: {
                name: 'positionX',
                class: 'p5.Panner3D',
                module: 'p5.sound'
              },
              positionY: {
                name: 'positionY',
                class: 'p5.Panner3D',
                module: 'p5.sound'
              },
              positionZ: {
                name: 'positionZ',
                class: 'p5.Panner3D',
                module: 'p5.sound'
              },
              orient: {
                name: 'orient',
                params: [
                  {
                    name: 'xVal',
                    description: '',
                    type: 'Number'
                  },
                  {
                    name: 'yVal',
                    description: '',
                    type: 'Number'
                  },
                  {
                    name: 'zVal',
                    description: '',
                    type: 'Number'
                  },
                  {
                    name: 'time',
                    description: '',
                    type: 'Number'
                  }
                ],
                class: 'p5.Panner3D',
                module: 'p5.sound'
              },
              orientX: {
                name: 'orientX',
                class: 'p5.Panner3D',
                module: 'p5.sound'
              },
              orientY: {
                name: 'orientY',
                class: 'p5.Panner3D',
                module: 'p5.sound'
              },
              orientZ: {
                name: 'orientZ',
                class: 'p5.Panner3D',
                module: 'p5.sound'
              },
              setFalloff: {
                name: 'setFalloff',
                params: [
                  {
                    name: 'maxDistance',
                    description: '',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'rolloffFactor',
                    description: '',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.Panner3D',
                module: 'p5.sound'
              },
              maxDist: {
                name: 'maxDist',
                params: [
                  {
                    name: 'maxDistance',
                    description: '',
                    type: 'Number'
                  }
                ],
                class: 'p5.Panner3D',
                module: 'p5.sound'
              },
              rollof: {
                name: 'rollof',
                params: [
                  {
                    name: 'rolloffFactor',
                    description: '',
                    type: 'Number'
                  }
                ],
                class: 'p5.Panner3D',
                module: 'p5.sound'
              }
            },
            'p5.Delay': {
              leftDelay: {
                name: 'leftDelay',
                class: 'p5.Delay',
                module: 'p5.sound'
              },
              rightDelay: {
                name: 'rightDelay',
                class: 'p5.Delay',
                module: 'p5.sound'
              },
              process: {
                name: 'process',
                params: [
                  {
                    name: 'Signal',
                    description: '<p>An object that outputs audio</p>\n',
                    type: 'Object'
                  },
                  {
                    name: 'delayTime',
                    description:
                      '<p>Time (in seconds) of the delay/echo.\n                             Some browsers limit delayTime to\n                             1 second.</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'feedback',
                    description:
                      '<p>sends the delay back through itself\n                             in a loop that decreases in volume\n                             each time.</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'lowPass',
                    description:
                      '<p>Cutoff frequency. Only frequencies\n                             below the lowPass will be part of the\n                             delay.</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.Delay',
                module: 'p5.sound'
              },
              delayTime: {
                name: 'delayTime',
                params: [
                  {
                    name: 'delayTime',
                    description: '<p>Time (in seconds) of the delay</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5.Delay',
                module: 'p5.sound'
              },
              feedback: {
                name: 'feedback',
                params: [
                  {
                    name: 'feedback',
                    description:
                      '<p>0.0 to 1.0, or an object such as an\n                                Oscillator that can be used to\n                                modulate this param</p>\n',
                    type: 'Number|Object'
                  }
                ],
                class: 'p5.Delay',
                module: 'p5.sound'
              },
              filter: {
                name: 'filter',
                params: [
                  {
                    name: 'cutoffFreq',
                    description:
                      '<p>A lowpass filter will cut off any\n                            frequencies higher than the filter frequency.</p>\n',
                    type: 'Number|Object'
                  },
                  {
                    name: 'res',
                    description:
                      '<p>Resonance of the filter frequency\n                            cutoff, or an object (i.e. a p5.Oscillator)\n                            that can be used to modulate this parameter.\n                            High numbers (i.e. 15) will produce a resonance,\n                            low numbers (i.e. .2) will produce a slope.</p>\n',
                    type: 'Number|Object'
                  }
                ],
                class: 'p5.Delay',
                module: 'p5.sound'
              },
              setType: {
                name: 'setType',
                params: [
                  {
                    name: 'type',
                    description: "<p>'pingPong' (1) or 'default' (0)</p>\n",
                    type: 'String|Number'
                  }
                ],
                class: 'p5.Delay',
                module: 'p5.sound'
              },
              amp: {
                name: 'amp',
                params: [
                  {
                    name: 'volume',
                    description: '<p>amplitude between 0 and 1.0</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'rampTime',
                    description: '<p>create a fade that lasts rampTime</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'timeFromNow',
                    description:
                      '<p>schedule this event to happen\n                              seconds from now</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.Delay',
                module: 'p5.sound'
              },
              connect: {
                name: 'connect',
                params: [
                  {
                    name: 'unit',
                    description: '',
                    type: 'Object'
                  }
                ],
                class: 'p5.Delay',
                module: 'p5.sound'
              },
              disconnect: {
                name: 'disconnect',
                class: 'p5.Delay',
                module: 'p5.sound'
              }
            },
            'p5.Reverb': {
              process: {
                name: 'process',
                params: [
                  {
                    name: 'src',
                    description:
                      '<p>p5.sound / Web Audio object with a sound\n                         output.</p>\n',
                    type: 'Object'
                  },
                  {
                    name: 'seconds',
                    description:
                      '<p>Duration of the reverb, in seconds.\n                         Min: 0, Max: 10. Defaults to 3.</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'decayRate',
                    description:
                      '<p>Percentage of decay with each echo.\n                          Min: 0, Max: 100. Defaults to 2.</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'reverse',
                    description: '<p>Play the reverb backwards or forwards.</p>\n',
                    type: 'Boolean',
                    optional: true
                  }
                ],
                class: 'p5.Reverb',
                module: 'p5.sound'
              },
              set: {
                name: 'set',
                params: [
                  {
                    name: 'seconds',
                    description:
                      '<p>Duration of the reverb, in seconds.\n                         Min: 0, Max: 10. Defaults to 3.</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'decayRate',
                    description:
                      '<p>Percentage of decay with each echo.\n                          Min: 0, Max: 100. Defaults to 2.</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'reverse',
                    description: '<p>Play the reverb backwards or forwards.</p>\n',
                    type: 'Boolean',
                    optional: true
                  }
                ],
                class: 'p5.Reverb',
                module: 'p5.sound'
              },
              amp: {
                name: 'amp',
                params: [
                  {
                    name: 'volume',
                    description: '<p>amplitude between 0 and 1.0</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'rampTime',
                    description: '<p>create a fade that lasts rampTime</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'timeFromNow',
                    description:
                      '<p>schedule this event to happen\n                              seconds from now</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.Reverb',
                module: 'p5.sound'
              },
              connect: {
                name: 'connect',
                params: [
                  {
                    name: 'unit',
                    description: '',
                    type: 'Object'
                  }
                ],
                class: 'p5.Reverb',
                module: 'p5.sound'
              },
              disconnect: {
                name: 'disconnect',
                class: 'p5.Reverb',
                module: 'p5.sound'
              }
            },
            'p5.Convolver': {
              convolverNode: {
                name: 'convolverNode',
                class: 'p5.Convolver',
                module: 'p5.sound'
              },
              process: {
                name: 'process',
                params: [
                  {
                    name: 'src',
                    description:
                      '<p>p5.sound / Web Audio object with a sound\n                         output.</p>\n',
                    type: 'Object'
                  }
                ],
                class: 'p5.Convolver',
                module: 'p5.sound'
              },
              impulses: {
                name: 'impulses',
                class: 'p5.Convolver',
                module: 'p5.sound'
              },
              addImpulse: {
                name: 'addImpulse',
                params: [
                  {
                    name: 'path',
                    description: '<p>path to a sound file</p>\n',
                    type: 'String'
                  },
                  {
                    name: 'callback',
                    description: '<p>function (optional)</p>\n',
                    type: 'Function'
                  },
                  {
                    name: 'errorCallback',
                    description: '<p>function (optional)</p>\n',
                    type: 'Function'
                  }
                ],
                class: 'p5.Convolver',
                module: 'p5.sound'
              },
              resetImpulse: {
                name: 'resetImpulse',
                params: [
                  {
                    name: 'path',
                    description: '<p>path to a sound file</p>\n',
                    type: 'String'
                  },
                  {
                    name: 'callback',
                    description: '<p>function (optional)</p>\n',
                    type: 'Function'
                  },
                  {
                    name: 'errorCallback',
                    description: '<p>function (optional)</p>\n',
                    type: 'Function'
                  }
                ],
                class: 'p5.Convolver',
                module: 'p5.sound'
              },
              toggleImpulse: {
                name: 'toggleImpulse',
                params: [
                  {
                    name: 'id',
                    description:
                      '<p>Identify the impulse by its original filename\n                          (String), or by its position in the\n                          <code>.impulses</code> Array (Number).</p>\n',
                    type: 'String|Number'
                  }
                ],
                class: 'p5.Convolver',
                module: 'p5.sound'
              }
            },
            'p5.Phrase': {
              sequence: {
                name: 'sequence',
                class: 'p5.Phrase',
                module: 'p5.sound'
              }
            },
            'p5.Part': {
              setBPM: {
                name: 'setBPM',
                params: [
                  {
                    name: 'BPM',
                    description: '<p>Beats Per Minute</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'rampTime',
                    description: '<p>Seconds from now</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.Part',
                module: 'p5.sound'
              },
              getBPM: {
                name: 'getBPM',
                class: 'p5.Part',
                module: 'p5.sound'
              },
              start: {
                name: 'start',
                params: [
                  {
                    name: 'time',
                    description: '<p>seconds from now</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.Part',
                module: 'p5.sound'
              },
              loop: {
                name: 'loop',
                params: [
                  {
                    name: 'time',
                    description: '<p>seconds from now</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.Part',
                module: 'p5.sound'
              },
              noLoop: {
                name: 'noLoop',
                class: 'p5.Part',
                module: 'p5.sound'
              },
              stop: {
                name: 'stop',
                params: [
                  {
                    name: 'time',
                    description: '<p>seconds from now</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.Part',
                module: 'p5.sound'
              },
              pause: {
                name: 'pause',
                params: [
                  {
                    name: 'time',
                    description: '<p>seconds from now</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5.Part',
                module: 'p5.sound'
              },
              addPhrase: {
                name: 'addPhrase',
                params: [
                  {
                    name: 'phrase',
                    description: '<p>reference to a p5.Phrase</p>\n',
                    type: 'p5.Phrase'
                  }
                ],
                class: 'p5.Part',
                module: 'p5.sound'
              },
              removePhrase: {
                name: 'removePhrase',
                params: [
                  {
                    name: 'phraseName',
                    description: '',
                    type: 'String'
                  }
                ],
                class: 'p5.Part',
                module: 'p5.sound'
              },
              getPhrase: {
                name: 'getPhrase',
                params: [
                  {
                    name: 'phraseName',
                    description: '',
                    type: 'String'
                  }
                ],
                class: 'p5.Part',
                module: 'p5.sound'
              },
              replaceSequence: {
                name: 'replaceSequence',
                params: [
                  {
                    name: 'phraseName',
                    description: '',
                    type: 'String'
                  },
                  {
                    name: 'sequence',
                    description:
                      '<p>Array of values to pass into the callback\n                          at each step of the phrase.</p>\n',
                    type: 'Array'
                  }
                ],
                class: 'p5.Part',
                module: 'p5.sound'
              },
              onStep: {
                name: 'onStep',
                params: [
                  {
                    name: 'callback',
                    description:
                      '<p>The name of the callback\n                            you want to fire\n                            on every beat/tatum.</p>\n',
                    type: 'Function'
                  }
                ],
                class: 'p5.Part',
                module: 'p5.sound'
              }
            },
            'p5.Score': {
              start: {
                name: 'start',
                class: 'p5.Score',
                module: 'p5.sound'
              },
              stop: {
                name: 'stop',
                class: 'p5.Score',
                module: 'p5.sound'
              },
              pause: {
                name: 'pause',
                class: 'p5.Score',
                module: 'p5.sound'
              },
              loop: {
                name: 'loop',
                class: 'p5.Score',
                module: 'p5.sound'
              },
              noLoop: {
                name: 'noLoop',
                class: 'p5.Score',
                module: 'p5.sound'
              },
              setBPM: {
                name: 'setBPM',
                params: [
                  {
                    name: 'BPM',
                    description: '<p>Beats Per Minute</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'rampTime',
                    description: '<p>Seconds from now</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5.Score',
                module: 'p5.sound'
              }
            },
            'p5.SoundLoop': {
              musicalTimeMode: {
                name: 'musicalTimeMode',
                class: 'p5.SoundLoop',
                module: 'p5.sound'
              },
              maxIterations: {
                name: 'maxIterations',
                class: 'p5.SoundLoop',
                module: 'p5.sound'
              },
              start: {
                name: 'start',
                params: [
                  {
                    name: 'timeFromNow',
                    description: '<p>schedule a starting time</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.SoundLoop',
                module: 'p5.sound'
              },
              stop: {
                name: 'stop',
                params: [
                  {
                    name: 'timeFromNow',
                    description: '<p>schedule a stopping time</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.SoundLoop',
                module: 'p5.sound'
              },
              pause: {
                name: 'pause',
                params: [
                  {
                    name: 'timeFromNow',
                    description: '<p>schedule a pausing time</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.SoundLoop',
                module: 'p5.sound'
              },
              syncedStart: {
                name: 'syncedStart',
                params: [
                  {
                    name: 'otherLoop',
                    description: '<p>a p5.SoundLoop to sync with</p>\n',
                    type: 'Object'
                  },
                  {
                    name: 'timeFromNow',
                    description:
                      '<p>Start the loops in sync after timeFromNow seconds</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.SoundLoop',
                module: 'p5.sound'
              },
              bpm: {
                name: 'bpm',
                class: 'p5.SoundLoop',
                module: 'p5.sound'
              },
              timeSignature: {
                name: 'timeSignature',
                class: 'p5.SoundLoop',
                module: 'p5.sound'
              },
              interval: {
                name: 'interval',
                class: 'p5.SoundLoop',
                module: 'p5.sound'
              },
              iterations: {
                name: 'iterations',
                class: 'p5.SoundLoop',
                module: 'p5.sound'
              }
            },
            'p5.Compressor': {
              compressor: {
                name: 'compressor',
                class: 'p5.Compressor',
                module: 'p5.sound'
              },
              process: {
                name: 'process',
                params: [
                  {
                    name: 'src',
                    description: '<p>Sound source to be connected</p>\n',
                    type: 'Object'
                  },
                  {
                    name: 'attack',
                    description:
                      '<p>The amount of time (in seconds) to reduce the gain by 10dB,\n                           default = .003, range 0 - 1</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'knee',
                    description:
                      '<p>A decibel value representing the range above the\n                           threshold where the curve smoothly transitions to the "ratio" portion.\n                           default = 30, range 0 - 40</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'ratio',
                    description:
                      '<p>The amount of dB change in input for a 1 dB change in output\n                           default = 12, range 1 - 20</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'threshold',
                    description:
                      '<p>The decibel value above which the compression will start taking effect\n                           default = -24, range -100 - 0</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'release',
                    description:
                      '<p>The amount of time (in seconds) to increase the gain by 10dB\n                           default = .25, range 0 - 1</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.Compressor',
                module: 'p5.sound'
              },
              set: {
                name: 'set',
                params: [
                  {
                    name: 'attack',
                    description:
                      '<p>The amount of time (in seconds) to reduce the gain by 10dB,\n                           default = .003, range 0 - 1</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'knee',
                    description:
                      '<p>A decibel value representing the range above the\n                           threshold where the curve smoothly transitions to the "ratio" portion.\n                           default = 30, range 0 - 40</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'ratio',
                    description:
                      '<p>The amount of dB change in input for a 1 dB change in output\n                           default = 12, range 1 - 20</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'threshold',
                    description:
                      '<p>The decibel value above which the compression will start taking effect\n                           default = -24, range -100 - 0</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'release',
                    description:
                      '<p>The amount of time (in seconds) to increase the gain by 10dB\n                           default = .25, range 0 - 1</p>\n',
                    type: 'Number'
                  }
                ],
                class: 'p5.Compressor',
                module: 'p5.sound'
              },
              attack: {
                name: 'attack',
                params: [
                  {
                    name: 'attack',
                    description:
                      '<p>Attack is the amount of time (in seconds) to reduce the gain by 10dB,\n                         default = .003, range 0 - 1</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'time',
                    description:
                      '<p>Assign time value to schedule the change in value</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.Compressor',
                module: 'p5.sound'
              },
              knee: {
                name: 'knee',
                params: [
                  {
                    name: 'knee',
                    description:
                      '<p>A decibel value representing the range above the\n                       threshold where the curve smoothly transitions to the "ratio" portion.\n                       default = 30, range 0 - 40</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'time',
                    description:
                      '<p>Assign time value to schedule the change in value</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.Compressor',
                module: 'p5.sound'
              },
              ratio: {
                name: 'ratio',
                params: [
                  {
                    name: 'ratio',
                    description:
                      '<p>The amount of dB change in input for a 1 dB change in output\n                           default = 12, range 1 - 20</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'time',
                    description:
                      '<p>Assign time value to schedule the change in value</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.Compressor',
                module: 'p5.sound'
              },
              threshold: {
                name: 'threshold',
                params: [
                  {
                    name: 'threshold',
                    description:
                      '<p>The decibel value above which the compression will start taking effect\n                           default = -24, range -100 - 0</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'time',
                    description:
                      '<p>Assign time value to schedule the change in value</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.Compressor',
                module: 'p5.sound'
              },
              release: {
                name: 'release',
                params: [
                  {
                    name: 'release',
                    description:
                      '<p>The amount of time (in seconds) to increase the gain by 10dB\n                           default = .25, range 0 - 1</p>\n',
                    type: 'Number'
                  },
                  {
                    name: 'time',
                    description:
                      '<p>Assign time value to schedule the change in value</p>\n',
                    type: 'Number',
                    optional: true
                  }
                ],
                class: 'p5.Compressor',
                module: 'p5.sound'
              },
              reduction: {
                name: 'reduction',
                class: 'p5.Compressor',
                module: 'p5.sound'
              }
            },
            'p5.SoundRecorder': {
              setInput: {
                name: 'setInput',
                params: [
                  {
                    name: 'unit',
                    description:
                      '<p>p5.sound object or a web audio unit\n                       that outputs sound</p>\n',
                    type: 'Object',
                    optional: true
                  }