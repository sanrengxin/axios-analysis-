
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