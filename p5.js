
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
                ],
                class: 'p5.SoundRecorder',
                module: 'p5.sound'
              },
              record: {
                name: 'record',
                params: [
                  {
                    name: 'soundFile',
                    description: '<p>p5.SoundFile</p>\n',
                    type: 'p5.SoundFile'
                  },
                  {
                    name: 'duration',
                    description: '<p>Time (in seconds)</p>\n',
                    type: 'Number',
                    optional: true
                  },
                  {
                    name: 'callback',
                    description:
                      '<p>The name of a function that will be\n                              called once the recording completes</p>\n',
                    type: 'Function',
                    optional: true
                  }
                ],
                class: 'p5.SoundRecorder',
                module: 'p5.sound'
              },
              stop: {
                name: 'stop',
                class: 'p5.SoundRecorder',
                module: 'p5.sound'
              }
            },
            'p5.PeakDetect': {
              isDetected: {
                name: 'isDetected',
                class: 'p5.PeakDetect',
                module: 'p5.sound'
              },
              update: {
                name: 'update',
                params: [
                  {
                    name: 'fftObject',
                    description: '<p>A p5.FFT object</p>\n',
                    type: 'p5.FFT'
                  }
                ],
                class: 'p5.PeakDetect',
                module: 'p5.sound'
              },
              onPeak: {
                name: 'onPeak',
                params: [
                  {
                    name: 'callback',
                    description:
                      '<p>Name of a function that will\n                            be called when a peak is\n                            detected.</p>\n',
                    type: 'Function'
                  },
                  {
                    name: 'val',
                    description:
                      '<p>Optional value to pass\n                            into the function when\n                            a peak is detected.</p>\n',
                    type: 'Object',
                    optional: true
                  }
                ],
                class: 'p5.PeakDetect',
                module: 'p5.sound'
              }
            },
            'p5.Gain': {
              setInput: {
                name: 'setInput',
                params: [
                  {
                    name: 'src',
                    description:
                      '<p>p5.sound / Web Audio object with a sound\n                         output.</p>\n',
                    type: 'Object'
                  }
                ],
                class: 'p5.Gain',
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
                class: 'p5.Gain',
                module: 'p5.sound'
              },
              disconnect: {
                name: 'disconnect',
                class: 'p5.Gain',
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
                class: 'p5.Gain',
                module: 'p5.sound'
              }
            },
            'p5.Distortion': {
              WaveShaperNode: {
                name: 'WaveShaperNode',
                class: 'p5.Distortion',
                module: 'p5.sound'
              },
              process: {
                name: 'process',
                params: [
                  {
                    name: 'amount',
                    description:
                      '<p>Unbounded distortion amount.\n                               Normal values range from 0-1.</p>\n',
                    type: 'Number',
                    optional: true,
                    optdefault: '0.25'
                  },
                  {
                    name: 'oversample',
                    description: "<p>'none', '2x', or '4x'.</p>\n",
                    type: 'String',
                    optional: true,
                    optdefault: "'none'"
                  }
                ],
                class: 'p5.Distortion',
                module: 'p5.sound'
              },
              set: {
                name: 'set',
                params: [
                  {
                    name: 'amount',
                    description:
                      '<p>Unbounded distortion amount.\n                               Normal values range from 0-1.</p>\n',
                    type: 'Number',
                    optional: true,
                    optdefault: '0.25'
                  },
                  {
                    name: 'oversample',
                    description: "<p>'none', '2x', or '4x'.</p>\n",
                    type: 'String',
                    optional: true,
                    optdefault: "'none'"
                  }
                ],
                class: 'p5.Distortion',
                module: 'p5.sound'
              },
              getAmount: {
                name: 'getAmount',
                class: 'p5.Distortion',
                module: 'p5.sound'
              },
              getOversample: {
                name: 'getOversample',
                class: 'p5.Distortion',
                module: 'p5.sound'
              }
            }
          };
        },
        {}
      ],
      2: [
        function(_dereq_, module, exports) {
          function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          }

          module.exports = _arrayWithHoles;
        },
        {}
      ],
      3: [
        function(_dereq_, module, exports) {
          function _arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) {
              for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
                arr2[i] = arr[i];
              }

              return arr2;
            }
          }

          module.exports = _arrayWithoutHoles;
        },
        {}
      ],
      4: [
        function(_dereq_, module, exports) {
          function _assertThisInitialized(self) {
            if (self === void 0) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }

            return self;
          }

          module.exports = _assertThisInitialized;
        },
        {}
      ],
      5: [
        function(_dereq_, module, exports) {
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function');
            }
          }

          module.exports = _classCallCheck;
        },
        {}
      ],
      6: [
        function(_dereq_, module, exports) {
          function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ('value' in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }

          function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            return Constructor;
          }

          module.exports = _createClass;
        },
        {}
      ],
      7: [
        function(_dereq_, module, exports) {
          function _defineProperty(obj, key, value) {
            if (key in obj) {
              Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
              });
            } else {
              obj[key] = value;
            }

            return obj;
          }

          module.exports = _defineProperty;
        },
        {}
      ],
      8: [
        function(_dereq_, module, exports) {
          function _getPrototypeOf(o) {
            module.exports = _getPrototypeOf = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function _getPrototypeOf(o) {
                  return o.__proto__ || Object.getPrototypeOf(o);
                };
            return _getPrototypeOf(o);
          }

          module.exports = _getPrototypeOf;
        },
        {}
      ],
      9: [
        function(_dereq_, module, exports) {
          var setPrototypeOf = _dereq_('./setPrototypeOf');

          function _inherits(subClass, superClass) {
            if (typeof superClass !== 'function' && superClass !== null) {
              throw new TypeError('Super expression must either be null or a function');
            }

            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                writable: true,
                configurable: true
              }
            });
            if (superClass) setPrototypeOf(subClass, superClass);
          }

          module.exports = _inherits;
        },
        { './setPrototypeOf': 16 }
      ],
      10: [
        function(_dereq_, module, exports) {
          function _iterableToArray(iter) {
            if (
              Symbol.iterator in Object(iter) ||
              Object.prototype.toString.call(iter) === '[object Arguments]'
            )
              return Array.from(iter);
          }

          module.exports = _iterableToArray;
        },
        {}
      ],
      11: [
        function(_dereq_, module, exports) {
          function _iterableToArrayLimit(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = undefined;

            try {
              for (
                var _i = arr[Symbol.iterator](), _s;
                !(_n = (_s = _i.next()).done);
                _n = true
              ) {
                _arr.push(_s.value);

                if (i && _arr.length === i) break;
              }
            } catch (err) {
              _d = true;
              _e = err;
            } finally {
              try {
                if (!_n && _i['return'] != null) _i['return']();
              } finally {
                if (_d) throw _e;
              }
            }

            return _arr;
          }

          module.exports = _iterableToArrayLimit;
        },
        {}
      ],
      12: [
        function(_dereq_, module, exports) {
          function _nonIterableRest() {
            throw new TypeError('Invalid attempt to destructure non-iterable instance');
          }

          module.exports = _nonIterableRest;
        },
        {}
      ],
      13: [
        function(_dereq_, module, exports) {
          function _nonIterableSpread() {
            throw new TypeError('Invalid attempt to spread non-iterable instance');
          }

          module.exports = _nonIterableSpread;
        },
        {}
      ],
      14: [
        function(_dereq_, module, exports) {
          var defineProperty = _dereq_('./defineProperty');

          function _objectSpread(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i] != null ? arguments[i] : {};
              var ownKeys = Object.keys(source);

              if (typeof Object.getOwnPropertySymbols === 'function') {
                ownKeys = ownKeys.concat(
                  Object.getOwnPropertySymbols(source).filter(function(sym) {
                    return Object.getOwnPropertyDescriptor(source, sym).enumerable;
                  })
                );
              }

              ownKeys.forEach(function(key) {
                defineProperty(target, key, source[key]);
              });
            }

            return target;
          }

          module.exports = _objectSpread;
        },
        { './defineProperty': 7 }
      ],
      15: [
        function(_dereq_, module, exports) {
          var _typeof = _dereq_('../helpers/typeof');

          var assertThisInitialized = _dereq_('./assertThisInitialized');

          function _possibleConstructorReturn(self, call) {
            if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
              return call;
            }

            return assertThisInitialized(self);
          }

          module.exports = _possibleConstructorReturn;
        },
        { '../helpers/typeof': 19, './assertThisInitialized': 4 }
      ],
      16: [
        function(_dereq_, module, exports) {
          function _setPrototypeOf(o, p) {
            module.exports = _setPrototypeOf =
              Object.setPrototypeOf ||
              function _setPrototypeOf(o, p) {
                o.__proto__ = p;
                return o;
              };

            return _setPrototypeOf(o, p);
          }

          module.exports = _setPrototypeOf;
        },
        {}
      ],
      17: [
        function(_dereq_, module, exports) {
          var arrayWithHoles = _dereq_('./arrayWithHoles');

          var iterableToArrayLimit = _dereq_('./iterableToArrayLimit');

          var nonIterableRest = _dereq_('./nonIterableRest');

          function _slicedToArray(arr, i) {
            return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
          }

          module.exports = _slicedToArray;
        },
        { './arrayWithHoles': 2, './iterableToArrayLimit': 11, './nonIterableRest': 12 }
      ],
      18: [
        function(_dereq_, module, exports) {
          var arrayWithoutHoles = _dereq_('./arrayWithoutHoles');

          var iterableToArray = _dereq_('./iterableToArray');

          var nonIterableSpread = _dereq_('./nonIterableSpread');

          function _toConsumableArray(arr) {
            return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
          }

          module.exports = _toConsumableArray;
        },
        { './arrayWithoutHoles': 3, './iterableToArray': 10, './nonIterableSpread': 13 }
      ],
      19: [
        function(_dereq_, module, exports) {
          function _typeof2(obj) {
            if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
              _typeof2 = function _typeof2(obj) {
                return typeof obj;
              };
            } else {
              _typeof2 = function _typeof2(obj) {
                return obj &&
                  typeof Symbol === 'function' &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              };
            }
            return _typeof2(obj);
          }

          function _typeof(obj) {
            if (typeof Symbol === 'function' && _typeof2(Symbol.iterator) === 'symbol') {
              module.exports = _typeof = function _typeof(obj) {
                return _typeof2(obj);
              };
            } else {
              module.exports = _typeof = function _typeof(obj) {
                return obj &&
                  typeof Symbol === 'function' &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : _typeof2(obj);
              };
            }

            return _typeof(obj);
          }

          module.exports = _typeof;
        },
        {}
      ],
      20: [
        function(_dereq_, module, exports) {
          'use strict';

          exports.byteLength = byteLength;
          exports.toByteArray = toByteArray;
          exports.fromByteArray = fromByteArray;

          var lookup = [];
          var revLookup = [];
          var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;

          var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
          for (var i = 0, len = code.length; i < len; ++i) {
            lookup[i] = code[i];
            revLookup[code.charCodeAt(i)] = i;
          }

          // Support decoding URL-safe base64 strings, as Node.js does.
          // See: https://en.wikipedia.org/wiki/Base64#URL_applications
          revLookup['-'.charCodeAt(0)] = 62;
          revLookup['_'.charCodeAt(0)] = 63;

          function getLens(b64) {
            var len = b64.length;

            if (len % 4 > 0) {
              throw new Error('Invalid string. Length must be a multiple of 4');
            }

            // Trim off extra bytes after placeholder bytes are found
            // See: https://github.com/beatgammit/base64-js/issues/42
            var validLen = b64.indexOf('=');
            if (validLen === -1) validLen = len;

            var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;

            return [validLen, placeHoldersLen];
          }

          // base64 is 4/3 + up to two characters of the original data
          function byteLength(b64) {
            var lens = getLens(b64);
            var validLen = lens[0];
            var placeHoldersLen = lens[1];
            return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
          }

          function _byteLength(b64, validLen, placeHoldersLen) {
            return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
          }

          function toByteArray(b64) {
            var tmp;
            var lens = getLens(b64);
            var validLen = lens[0];
            var placeHoldersLen = lens[1];

            var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));

            var curByte = 0;

            // if there are placeholders, only get up to the last complete 4 chars
            var len = placeHoldersLen > 0 ? validLen - 4 : validLen;

            var i;
            for (i = 0; i < len; i += 4) {
              tmp =
                (revLookup[b64.charCodeAt(i)] << 18) |
                (revLookup[b64.charCodeAt(i + 1)] << 12) |
                (revLookup[b64.charCodeAt(i + 2)] << 6) |
                revLookup[b64.charCodeAt(i + 3)];
              arr[curByte++] = (tmp >> 16) & 0xff;
              arr[curByte++] = (tmp >> 8) & 0xff;
              arr[curByte++] = tmp & 0xff;
            }

            if (placeHoldersLen === 2) {
              tmp =
                (revLookup[b64.charCodeAt(i)] << 2) |
                (revLookup[b64.charCodeAt(i + 1)] >> 4);
              arr[curByte++] = tmp & 0xff;
            }

            if (placeHoldersLen === 1) {
              tmp =
                (revLookup[b64.charCodeAt(i)] << 10) |
                (revLookup[b64.charCodeAt(i + 1)] << 4) |
                (revLookup[b64.charCodeAt(i + 2)] >> 2);
              arr[curByte++] = (tmp >> 8) & 0xff;
              arr[curByte++] = tmp & 0xff;
            }

            return arr;
          }

          function tripletToBase64(num) {
            return (
              lookup[(num >> 18) & 0x3f] +
              lookup[(num >> 12) & 0x3f] +
              lookup[(num >> 6) & 0x3f] +
              lookup[num & 0x3f]
            );
          }

          function encodeChunk(uint8, start, end) {
            var tmp;
            var output = [];
            for (var i = start; i < end; i += 3) {
              tmp =
                ((uint8[i] << 16) & 0xff0000) +
                ((uint8[i + 1] << 8) & 0xff00) +
                (uint8[i + 2] & 0xff);
              output.push(tripletToBase64(tmp));
            }
            return output.join('');
          }

          function fromByteArray(uint8) {
            var tmp;
            var len = uint8.length;
            var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
            var parts = [];
            var maxChunkLength = 16383; // must be multiple of 3

            // go through the array every three bytes, we'll deal with trailing stuff later
            for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
              parts.push(
                encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength)
              );
            }

            // pad the end with zeros, but make sure to not forget the extra bytes
            if (extraBytes === 1) {
              tmp = uint8[len - 1];
              parts.push(lookup[tmp >> 2] + lookup[(tmp << 4) & 0x3f] + '==');
            } else if (extraBytes === 2) {
              tmp = (uint8[len - 2] << 8) + uint8[len - 1];
              parts.push(
                lookup[tmp >> 10] +
                  lookup[(tmp >> 4) & 0x3f] +
                  lookup[(tmp << 2) & 0x3f] +
                  '='
              );
            }

            return parts.join('');
          }
        },
        {}
      ],
      21: [function(_dereq_, module, exports) {}, {}],
      22: [
        function(_dereq_, module, exports) {
          (function(Buffer) {
            /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
            /* eslint-disable no-proto */

            'use strict';

            var base64 = _dereq_('base64-js');
            var ieee754 = _dereq_('ieee754');
            var customInspectSymbol =
              typeof Symbol === 'function' && typeof Symbol.for === 'function'
                ? Symbol.for('nodejs.util.inspect.custom')
                : null;

            exports.Buffer = Buffer;
            exports.SlowBuffer = SlowBuffer;
            exports.INSPECT_MAX_BYTES = 50;

            var K_MAX_LENGTH = 0x7fffffff;
            exports.kMaxLength = K_MAX_LENGTH;

            /**
             * If `Buffer.TYPED_ARRAY_SUPPORT`:
             *   === true    Use Uint8Array implementation (fastest)
             *   === false   Print warning and recommend using `buffer` v4.x which has an Object
             *               implementation (most compatible, even IE6)
             *
             * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
             * Opera 11.6+, iOS 4.2+.
             *
             * We report that the browser does not support typed arrays if the are not subclassable
             * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
             * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
             * for __proto__ and has a buggy typed array implementation.
             */
            Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();

            if (
              !Buffer.TYPED_ARRAY_SUPPORT &&
              typeof console !== 'undefined' &&
              typeof console.error === 'function'
            ) {
              console.error(
                'This browser lacks typed array (Uint8Array) support which is required by ' +
                  '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
              );
            }

            function typedArraySupport() {
              // Can typed array instances can be augmented?
              try {
                var arr = new Uint8Array(1);
                var proto = {
                  foo: function() {
                    return 42;
                  }
                };
                Object.setPrototypeOf(proto, Uint8Array.prototype);
                Object.setPrototypeOf(arr, proto);
                return arr.foo() === 42;
              } catch (e) {
                return false;
              }
            }

            Object.defineProperty(Buffer.prototype, 'parent', {
              enumerable: true,
              get: function() {
                if (!Buffer.isBuffer(this)) return undefined;
                return this.buffer;
              }
            });

            Object.defineProperty(Buffer.prototype, 'offset', {
              enumerable: true,
              get: function() {
                if (!Buffer.isBuffer(this)) return undefined;
                return this.byteOffset;
              }
            });

            function createBuffer(length) {
              if (length > K_MAX_LENGTH) {
                throw new RangeError(
                  'The value "' + length + '" is invalid for option "size"'
                );
              }
              // Return an augmented `Uint8Array` instance
              var buf = new Uint8Array(length);
              Object.setPrototypeOf(buf, Buffer.prototype);
              return buf;
            }

            /**
             * The Buffer constructor returns instances of `Uint8Array` that have their
             * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
             * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
             * and the `Uint8Array` methods. Square bracket notation works as expected -- it
             * returns a single octet.
             *
             * The `Uint8Array` prototype remains unmodified.
             */

            function Buffer(arg, encodingOrOffset, length) {
              // Common case.
              if (typeof arg === 'number') {
                if (typeof encodingOrOffset === 'string') {
                  throw new TypeError(
                    'The "string" argument must be of type string. Received type number'
                  );
                }
                return allocUnsafe(arg);
              }
              return from(arg, encodingOrOffset, length);
            }

            // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
            if (
              typeof Symbol !== 'undefined' &&
              Symbol.species != null &&
              Buffer[Symbol.species] === Buffer
            ) {
              Object.defineProperty(Buffer, Symbol.species, {
                value: null,
                configurable: true,
                enumerable: false,
                writable: false
              });
            }

            Buffer.poolSize = 8192; // not used by this implementation

            function from(value, encodingOrOffset, length) {
              if (typeof value === 'string') {
                return fromString(value, encodingOrOffset);
              }

              if (ArrayBuffer.isView(value)) {
                return fromArrayLike(value);
              }

              if (value == null) {
                throw new TypeError(
                  'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
                    'or Array-like Object. Received type ' +
                    typeof value
                );
              }

              if (
                isInstance(value, ArrayBuffer) ||
                (value && isInstance(value.buffer, ArrayBuffer))
              ) {
                return fromArrayBuffer(value, encodingOrOffset, length);
              }

              if (typeof value === 'number') {
                throw new TypeError(
                  'The "value" argument must not be of type number. Received type number'
                );
              }

              var valueOf = value.valueOf && value.valueOf();
              if (valueOf != null && valueOf !== value) {
                return Buffer.from(valueOf, encodingOrOffset, length);
              }

              var b = fromObject(value);
              if (b) return b;

              if (
                typeof Symbol !== 'undefined' &&
                Symbol.toPrimitive != null &&
                typeof value[Symbol.toPrimitive] === 'function'
              ) {
                return Buffer.from(
                  value[Symbol.toPrimitive]('string'),
                  encodingOrOffset,
                  length
                );
              }

              throw new TypeError(
                'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
                  'or Array-like Object. Received type ' +
                  typeof value
              );
            }

            /**
             * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
             * if value is a number.
             * Buffer.from(str[, encoding])
             * Buffer.from(array)
             * Buffer.from(buffer)
             * Buffer.from(arrayBuffer[, byteOffset[, length]])
             **/
            Buffer.from = function(value, encodingOrOffset, length) {
              return from(value, encodingOrOffset, length);
            };

            // Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
            // https://github.com/feross/buffer/pull/148
            Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
            Object.setPrototypeOf(Buffer, Uint8Array);

            function assertSize(size) {
              if (typeof size !== 'number') {
                throw new TypeError('"size" argument must be of type number');
              } else if (size < 0) {
                throw new RangeError(
                  'The value "' + size + '" is invalid for option "size"'
                );
              }
            }

            function alloc(size, fill, encoding) {
              assertSize(size);
              if (size <= 0) {
                return createBuffer(size);
              }
              if (fill !== undefined) {
                // Only pay attention to encoding if it's a string. This
                // prevents accidentally sending in a number that would
                // be interpretted as a start offset.
                return typeof encoding === 'string'
                  ? createBuffer(size).fill(fill, encoding)
                  : createBuffer(size).fill(fill);
              }
              return createBuffer(size);
            }

            /**
             * Creates a new filled Buffer instance.
             * alloc(size[, fill[, encoding]])
             **/
            Buffer.alloc = function(size, fill, encoding) {
              return alloc(size, fill, encoding);
            };

            function allocUnsafe(size) {
              assertSize(size);
              return createBuffer(size < 0 ? 0 : checked(size) | 0);
            }

            /**
             * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
             * */
            Buffer.allocUnsafe = function(size) {
              return allocUnsafe(size);
            };
            /**
             * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
             */
            Buffer.allocUnsafeSlow = function(size) {
              return allocUnsafe(size);
            };

            function fromString(string, encoding) {
              if (typeof encoding !== 'string' || encoding === '') {
                encoding = 'utf8';
              }

              if (!Buffer.isEncoding(encoding)) {
                throw new TypeError('Unknown encoding: ' + encoding);
              }

              var length = byteLength(string, encoding) | 0;
              var buf = createBuffer(length);

              var actual = buf.write(string, encoding);

              if (actual !== length) {
                // Writing a hex string, for example, that contains invalid characters will
                // cause everything after the first invalid character to be ignored. (e.g.
                // 'abxxcd' will be treated as 'ab')
                buf = buf.slice(0, actual);
              }

              return buf;
            }

            function fromArrayLike(array) {
              var length = array.length < 0 ? 0 : checked(array.length) | 0;
              var buf = createBuffer(length);
              for (var i = 0; i < length; i += 1) {
                buf[i] = array[i] & 255;
              }
              return buf;
            }

            function fromArrayBuffer(array, byteOffset, length) {
              if (byteOffset < 0 || array.byteLength < byteOffset) {
                throw new RangeError('"offset" is outside of buffer bounds');
              }

              if (array.byteLength < byteOffset + (length || 0)) {
                throw new RangeError('"length" is outside of buffer bounds');
              }

              var buf;
              if (byteOffset === undefined && length === undefined) {
                buf = new Uint8Array(array);
              } else if (length === undefined) {
                buf = new Uint8Array(array, byteOffset);
              } else {
                buf = new Uint8Array(array, byteOffset, length);
              }

              // Return an augmented `Uint8Array` instance
              Object.setPrototypeOf(buf, Buffer.prototype);

              return buf;
            }

            function fromObject(obj) {
              if (Buffer.isBuffer(obj)) {
                var len = checked(obj.length) | 0;
                var buf = createBuffer(len);

                if (buf.length === 0) {
                  return buf;
                }

                obj.copy(buf, 0, 0, len);
                return buf;
              }

              if (obj.length !== undefined) {
                if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
                  return createBuffer(0);
                }
                return fromArrayLike(obj);
              }

              if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
                return fromArrayLike(obj.data);
              }
            }

            function checked(length) {
              // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
              // length is NaN (which is otherwise coerced to zero.)
              if (length >= K_MAX_LENGTH) {
                throw new RangeError(
                  'Attempt to allocate Buffer larger than maximum ' +
                    'size: 0x' +
                    K_MAX_LENGTH.toString(16) +
                    ' bytes'
                );
              }
              return length | 0;
            }

            function SlowBuffer(length) {
              if (+length != length) {
                // eslint-disable-line eqeqeq
                length = 0;
              }
              return Buffer.alloc(+length);
            }

            Buffer.isBuffer = function isBuffer(b) {
              return b != null && b._isBuffer === true && b !== Buffer.prototype; // so Buffer.isBuffer(Buffer.prototype) will be false
            };

            Buffer.compare = function compare(a, b) {
              if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
              if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
              if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
                throw new TypeError(
                  'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
                );
              }

              if (a === b) return 0;

              var x = a.length;
              var y = b.length;

              for (var i = 0, len = Math.min(x, y); i < len; ++i) {
                if (a[i] !== b[i]) {
                  x = a[i];
                  y = b[i];
                  break;
                }
              }

              if (x < y) return -1;
              if (y < x) return 1;
              return 0;
            };

            Buffer.isEncoding = function isEncoding(encoding) {
              switch (String(encoding).toLowerCase()) {
                case 'hex':
                case 'utf8':
                case 'utf-8':
                case 'ascii':
                case 'latin1':
                case 'binary':
                case 'base64':
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                  return true;
                default:
                  return false;
              }
            };

            Buffer.concat = function concat(list, length) {
              if (!Array.isArray(list)) {
                throw new TypeError('"list" argument must be an Array of Buffers');
              }

              if (list.length === 0) {
                return Buffer.alloc(0);
              }

              var i;
              if (length === undefined) {
                length = 0;
                for (i = 0; i < list.length; ++i) {
                  length += list[i].length;
                }
              }

              var buffer = Buffer.allocUnsafe(length);
              var pos = 0;
              for (i = 0; i < list.length; ++i) {
                var buf = list[i];
                if (isInstance(buf, Uint8Array)) {
                  buf = Buffer.from(buf);
                }
                if (!Buffer.isBuffer(buf)) {
                  throw new TypeError('"list" argument must be an Array of Buffers');
                }
                buf.copy(buffer, pos);
                pos += buf.length;
              }
              return buffer;
            };

            function byteLength(string, encoding) {
              if (Buffer.isBuffer(string)) {
                return string.length;
              }
              if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
                return string.byteLength;
              }
              if (typeof string !== 'string') {
                throw new TypeError(
                  'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
                    'Received type ' +
                    typeof string
                );
              }

              var len = string.length;
              var mustMatch = arguments.length > 2 && arguments[2] === true;
              if (!mustMatch && len === 0) return 0;

              // Use a for loop to avoid recursion
              var loweredCase = false;
              for (;;) {
                switch (encoding) {
                  case 'ascii':
                  case 'latin1':
                  case 'binary':
                    return len;
                  case 'utf8':
                  case 'utf-8':
                    return utf8ToBytes(string).length;
                  case 'ucs2':
                  case 'ucs-2':
                  case 'utf16le':
                  case 'utf-16le':
                    return len * 2;
                  case 'hex':
                    return len >>> 1;
                  case 'base64':
                    return base64ToBytes(string).length;
                  default:
                    if (loweredCase) {
                      return mustMatch ? -1 : utf8ToBytes(string).length; // assume utf8
                    }
                    encoding = ('' + encoding).toLowerCase();
                    loweredCase = true;
                }
              }
            }
            Buffer.byteLength = byteLength;

            function slowToString(encoding, start, end) {
              var loweredCase = false;

              // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
              // property of a typed array.

              // This behaves neither like String nor Uint8Array in that we set start/end
              // to their upper/lower bounds if the value passed is out of range.
              // undefined is handled specially as per ECMA-262 6th Edition,
              // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
              if (start === undefined || start < 0) {
                start = 0;
              }
              // Return early if start > this.length. Done here to prevent potential uint32
              // coercion fail below.
              if (start > this.length) {
                return '';
              }

              if (end === undefined || end > this.length) {
                end = this.length;
              }

              if (end <= 0) {
                return '';
              }

              // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
              end >>>= 0;
              start >>>= 0;

              if (end <= start) {
                return '';
              }

              if (!encoding) encoding = 'utf8';

              while (true) {
                switch (encoding) {
                  case 'hex':
                    return hexSlice(this, start, end);

                  case 'utf8':
                  case 'utf-8':
                    return utf8Slice(this, start, end);

                  case 'ascii':
                    return asciiSlice(this, start, end);

                  case 'latin1':
                  case 'binary':
                    return latin1Slice(this, start, end);

                  case 'base64':
                    return base64Slice(this, start, end);

                  case 'ucs2':
                  case 'ucs-2':
                  case 'utf16le':
                  case 'utf-16le':
                    return utf16leSlice(this, start, end);

                  default:
                    if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
                    encoding = (encoding + '').toLowerCase();
                    loweredCase = true;
                }
              }
            }

            // This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
            // to detect a Buffer instance. It's not possible to use `instanceof Buffer`
            // reliably in a browserify context because there could be multiple different
            // copies of the 'buffer' package in use. This method works even for Buffer
            // instances that were created from another copy of the `buffer` package.
            // See: https://github.com/feross/buffer/issues/154
            Buffer.prototype._isBuffer = true;

            function swap(b, n, m) {
              var i = b[n];
              b[n] = b[m];
              b[m] = i;
            }

            Buffer.prototype.swap16 = function swap16() {
              var len = this.length;
              if (len % 2 !== 0) {
                throw new RangeError('Buffer size must be a multiple of 16-bits');
              }
              for (var i = 0; i < len; i += 2) {
                swap(this, i, i + 1);
              }
              return this;
            };

            Buffer.prototype.swap32 = function swap32() {
              var len = this.length;
              if (len % 4 !== 0) {
                throw new RangeError('Buffer size must be a multiple of 32-bits');
              }
              for (var i = 0; i < len; i += 4) {
                swap(this, i, i + 3);
                swap(this, i + 1, i + 2);
              }
              return this;
            };

            Buffer.prototype.swap64 = function swap64() {
              var len = this.length;
              if (len % 8 !== 0) {
                throw new RangeError('Buffer size must be a multiple of 64-bits');
              }
              for (var i = 0; i < len; i += 8) {
                swap(this, i, i + 7);
                swap(this, i + 1, i + 6);
                swap(this, i + 2, i + 5);
                swap(this, i + 3, i + 4);
              }
              return this;
            };

            Buffer.prototype.toString = function toString() {
              var length = this.length;
              if (length === 0) return '';
              if (arguments.length === 0) return utf8Slice(this, 0, length);
              return slowToString.apply(this, arguments);
            };

            Buffer.prototype.toLocaleString = Buffer.prototype.toString;

            Buffer.prototype.equals = function equals(b) {
              if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
              if (this === b) return true;
              return Buffer.compare(this, b) === 0;
            };

            Buffer.prototype.inspect = function inspect() {
              var str = '';
              var max = exports.INSPECT_MAX_BYTES;
              str = this.toString('hex', 0, max)
                .replace(/(.{2})/g, '$1 ')
                .trim();
              if (this.length > max) str += ' ... ';
              return '<Buffer ' + str + '>';
            };
            if (customInspectSymbol) {
              Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
            }

            Buffer.prototype.compare = function compare(
              target,
              start,
              end,
              thisStart,
              thisEnd
            ) {
              if (isInstance(target, Uint8Array)) {
                target = Buffer.from(target, target.offset, target.byteLength);
              }
              if (!Buffer.isBuffer(target)) {
                throw new TypeError(
                  'The "target" argument must be one of type Buffer or Uint8Array. ' +
                    'Received type ' +
                    typeof target
                );
              }

              if (start === undefined) {
                start = 0;
              }
              if (end === undefined) {
                end = target ? target.length : 0;
              }
              if (thisStart === undefined) {
                thisStart = 0;
              }
              if (thisEnd === undefined) {
                thisEnd = this.length;
              }

              if (
                start < 0 ||
                end > target.length ||
                thisStart < 0 ||
                thisEnd > this.length
              ) {
                throw new RangeError('out of range index');
              }

              if (thisStart >= thisEnd && start >= end) {
                return 0;
              }
              if (thisStart >= thisEnd) {
                return -1;
              }
              if (start >= end) {
                return 1;
              }

              start >>>= 0;
              end >>>= 0;
              thisStart >>>= 0;
              thisEnd >>>= 0;

              if (this === target) return 0;

              var x = thisEnd - thisStart;
              var y = end - start;
              var len = Math.min(x, y);

              var thisCopy = this.slice(thisStart, thisEnd);
              var targetCopy = target.slice(start, end);

              for (var i = 0; i < len; ++i) {
                if (thisCopy[i] !== targetCopy[i]) {
                  x = thisCopy[i];
                  y = targetCopy[i];
                  break;
                }
              }

              if (x < y) return -1;
              if (y < x) return 1;
              return 0;
            };

            // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
            // OR the last index of `val` in `buffer` at offset <= `byteOffset`.
            //
            // Arguments:
            // - buffer - a Buffer to search
            // - val - a string, Buffer, or number
            // - byteOffset - an index into `buffer`; will be clamped to an int32
            // - encoding - an optional encoding, relevant is val is a string
            // - dir - true for indexOf, false for lastIndexOf
            function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
              // Empty buffer means no match
              if (buffer.length === 0) return -1;

              // Normalize byteOffset
              if (typeof byteOffset === 'string') {
                encoding = byteOffset;
                byteOffset = 0;
              } else if (byteOffset > 0x7fffffff) {
                byteOffset = 0x7fffffff;
              } else if (byteOffset < -0x80000000) {
                byteOffset = -0x80000000;
              }
              byteOffset = +byteOffset; // Coerce to Number.
              if (numberIsNaN(byteOffset)) {
                // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
                byteOffset = dir ? 0 : buffer.length - 1;
              }

              // Normalize byteOffset: negative offsets start from the end of the buffer
              if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
              if (byteOffset >= buffer.length) {
                if (dir) return -1;
                else byteOffset = buffer.length - 1;
              } else if (byteOffset < 0) {
                if (dir) byteOffset = 0;
                else return -1;
              }

              // Normalize val
              if (typeof val === 'string') {
                val = Buffer.from(val, encoding);
              }

              // Finally, search either indexOf (if dir is true) or lastIndexOf
              if (Buffer.isBuffer(val)) {
                // Special case: looking for empty string/buffer always fails
                if (val.length === 0) {
                  return -1;
                }
                return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
              } else if (typeof val === 'number') {
                val = val & 0xff; // Search for a byte value [0-255]
                if (typeof Uint8Array.prototype.indexOf === 'function') {
                  if (dir) {
                    return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
                  } else {
                    return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
                  }
                }
                return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
              }

              throw new TypeError('val must be string, number or Buffer');
            }

            function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
              var indexSize = 1;
              var arrLength = arr.length;
              var valLength = val.length;

              if (encoding !== undefined) {
                encoding = String(encoding).toLowerCase();
                if (
                  encoding === 'ucs2' ||
                  encoding === 'ucs-2' ||
                  encoding === 'utf16le' ||
                  encoding === 'utf-16le'
                ) {
                  if (arr.length < 2 || val.length < 2) {
                    return -1;
                  }
                  indexSize = 2;
                  arrLength /= 2;
                  valLength /= 2;
                  byteOffset /= 2;
                }
              }

              function read(buf, i) {
                if (indexSize === 1) {
                  return buf[i];
                } else {
                  return buf.readUInt16BE(i * indexSize);
                }
              }

              var i;
              if (dir) {
                var foundIndex = -1;
                for (i = byteOffset; i < arrLength; i++) {
                  if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
                    if (foundIndex === -1) foundIndex = i;
                    if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
                  } else {
                    if (foundIndex !== -1) i -= i - foundIndex;
                    foundIndex = -1;
                  }
                }
              } else {
                if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
                for (i = byteOffset; i >= 0; i--) {
                  var found = true;
                  for (var j = 0; j < valLength; j++) {
                    if (read(arr, i + j) !== read(val, j)) {
                      found = false;
                      break;
                    }
                  }
                  if (found) return i;
                }
              }

              return -1;
            }

            Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
              return this.indexOf(val, byteOffset, encoding) !== -1;
            };

            Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
              return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
            };

            Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
              return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
            };

            function hexWrite(buf, string, offset, length) {
              offset = Number(offset) || 0;
              var remaining = buf.length - offset;
              if (!length) {
                length = remaining;
              } else {
                length = Number(length);
                if (length > remaining) {
                  length = remaining;
                }
              }

              var strLen = string.length;

              if (length > strLen / 2) {
                length = strLen / 2;
              }
              for (var i = 0; i < length; ++i) {
                var parsed = parseInt(string.substr(i * 2, 2), 16);
                if (numberIsNaN(parsed)) return i;
                buf[offset + i] = parsed;
              }
              return i;
            }

            function utf8Write(buf, string, offset, length) {
              return blitBuffer(
                utf8ToBytes(string, buf.length - offset),
                buf,
                offset,
                length
              );
            }

            function asciiWrite(buf, string, offset, length) {
              return blitBuffer(asciiToBytes(string), buf, offset, length);
            }

            function latin1Write(buf, string, offset, length) {
              return asciiWrite(buf, string, offset, length);
            }

            function base64Write(buf, string, offset, length) {
              return blitBuffer(base64ToBytes(string), buf, offset, length);
            }

            function ucs2Write(buf, string, offset, length) {
              return blitBuffer(
                utf16leToBytes(string, buf.length - offset),
                buf,
                offset,
                length
              );
            }

            Buffer.prototype.write = function write(string, offset, length, encoding) {
              // Buffer#write(string)
              if (offset === undefined) {
                encoding = 'utf8';
                length = this.length;
                offset = 0;
                // Buffer#write(string, encoding)
              } else if (length === undefined && typeof offset === 'string') {
                encoding = offset;
                length = this.length;
                offset = 0;
                // Buffer#write(string, offset[, length][, encoding])
              } else if (isFinite(offset)) {
                offset = offset >>> 0;
                if (isFinite(length)) {
                  length = length >>> 0;
                  if (encoding === undefined) encoding = 'utf8';
                } else {
                  encoding = length;
                  length = undefined;
                }
              } else {
                throw new Error(
                  'Buffer.write(string, encoding, offset[, length]) is no longer supported'
                );
              }

              var remaining = this.length - offset;
              if (length === undefined || length > remaining) length = remaining;

              if (
                (string.length > 0 && (length < 0 || offset < 0)) ||
                offset > this.length
              ) {
                throw new RangeError('Attempt to write outside buffer bounds');
              }

              if (!encoding) encoding = 'utf8';

              var loweredCase = false;
              for (;;) {
                switch (encoding) {
                  case 'hex':
                    return hexWrite(this, string, offset, length);

                  case 'utf8':
                  case 'utf-8':
                    return utf8Write(this, string, offset, length);

                  case 'ascii':
                    return asciiWrite(this, string, offset, length);

                  case 'latin1':
                  case 'binary':
                    return latin1Write(this, string, offset, length);

                  case 'base64':
                    // Warning: maxLength not taken into account in base64Write
                    return base64Write(this, string, offset, length);

                  case 'ucs2':
                  case 'ucs-2':
                  case 'utf16le':
                  case 'utf-16le':
                    return ucs2Write(this, string, offset, length);

                  default:
                    if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
                    encoding = ('' + encoding).toLowerCase();
                    loweredCase = true;
                }
              }
            };

            Buffer.prototype.toJSON = function toJSON() {
              return {
                type: 'Buffer',
                data: Array.prototype.slice.call(this._arr || this, 0)
              };
            };

            function base64Slice(buf, start, end) {
              if (start === 0 && end === buf.length) {
                return base64.fromByteArray(buf);
              } else {
                return base64.fromByteArray(buf.slice(start, end));
              }
            }

            function utf8Slice(buf, start, end) {
              end = Math.min(buf.length, end);
              var res = [];

              var i = start;
              while (i < end) {
                var firstByte = buf[i];
                var codePoint = null;
                var bytesPerSequence =
                  firstByte > 0xef ? 4 : firstByte > 0xdf ? 3 : firstByte > 0xbf ? 2 : 1;

                if (i + bytesPerSequence <= end) {
                  var secondByte, thirdByte, fourthByte, tempCodePoint;

                  switch (bytesPerSequence) {
                    case 1:
                      if (firstByte < 0x80) {
                        codePoint = firstByte;
                      }
                      break;
                    case 2:
                      secondByte = buf[i + 1];
                      if ((secondByte & 0xc0) === 0x80) {
                        tempCodePoint = ((firstByte & 0x1f) << 0x6) | (secondByte & 0x3f);
                        if (tempCodePoint > 0x7f) {
                          codePoint = tempCodePoint;
                        }
                      }
                      break;
                    case 3:
                      secondByte = buf[i + 1];
                      thirdByte = buf[i + 2];
                      if ((secondByte & 0xc0) === 0x80 && (thirdByte & 0xc0) === 0x80) {
                        tempCodePoint =
                          ((firstByte & 0xf) << 0xc) |
                          ((secondByte & 0x3f) << 0x6) |
                          (thirdByte & 0x3f);
                        if (
                          tempCodePoint > 0x7ff &&
                          (tempCodePoint < 0xd800 || tempCodePoint > 0xdfff)
                        ) {
                          codePoint = tempCodePoint;
                        }
                      }
                      break;
                    case 4:
                      secondByte = buf[i + 1];
                      thirdByte = buf[i + 2];
                      fourthByte = buf[i + 3];
                      if (
                        (secondByte & 0xc0) === 0x80 &&
                        (thirdByte & 0xc0) === 0x80 &&
                        (fourthByte & 0xc0) === 0x80
                      ) {
                        tempCodePoint =
                          ((firstByte & 0xf) << 0x12) |
                          ((secondByte & 0x3f) << 0xc) |
                          ((thirdByte & 0x3f) << 0x6) |
                          (fourthByte & 0x3f);
                        if (tempCodePoint > 0xffff && tempCodePoint < 0x110000) {
                          codePoint = tempCodePoint;
                        }
                      }
                  }
                }

                if (codePoint === null) {
                  // we did not generate a valid codePoint so insert a
                  // replacement char (U+FFFD) and advance only 1 byte
                  codePoint = 0xfffd;
                  bytesPerSequence = 1;
                } else if (codePoint > 0xffff) {
                  // encode to utf16 (surrogate pair dance)
                  codePoint -= 0x10000;
                  res.push(((codePoint >>> 10) & 0x3ff) | 0xd800);
                  codePoint = 0xdc00 | (codePoint & 0x3ff);
                }

                res.push(codePoint);
                i += bytesPerSequence;
              }

              return decodeCodePointsArray(res);
            }

            // Based on http://stackoverflow.com/a/22747272/680742, the browser with
            // the lowest limit is Chrome, with 0x10000 args.
            // We go 1 magnitude less, for safety
            var MAX_ARGUMENTS_LENGTH = 0x1000;

            function decodeCodePointsArray(codePoints) {
              var len = codePoints.length;
              if (len <= MAX_ARGUMENTS_LENGTH) {
                return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
              }

              // Decode in chunks to avoid "call stack size exceeded".
              var res = '';
              var i = 0;
              while (i < len) {
                res += String.fromCharCode.apply(
                  String,
                  codePoints.slice(i, (i += MAX_ARGUMENTS_LENGTH))
                );
              }
              return res;
            }

            function asciiSlice(buf, start, end) {
              var ret = '';
              end = Math.min(buf.length, end);

              for (var i = start; i < end; ++i) {
                ret += String.fromCharCode(buf[i] & 0x7f);
              }
              return ret;
            }

            function latin1Slice(buf, start, end) {
              var ret = '';
              end = Math.min(buf.length, end);

              for (var i = start; i < end; ++i) {
                ret += String.fromCharCode(buf[i]);
              }
              return ret;
            }

            function hexSlice(buf, start, end) {
              var len = buf.length;

              if (!start || start < 0) start = 0;
              if (!end || end < 0 || end > len) end = len;

              var out = '';
              for (var i = start; i < end; ++i) {
                out += hexSliceLookupTable[buf[i]];
              }
              return out;
            }

            function utf16leSlice(buf, start, end) {
              var bytes = buf.slice(start, end);
              var res = '';
              for (var i = 0; i < bytes.length; i += 2) {
                res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
              }
              return res;
            }

            Buffer.prototype.slice = function slice(start, end) {
              var len = this.length;
              start = ~~start;
              end = end === undefined ? len : ~~end;

              if (start < 0) {
                start += len;
                if (start < 0) start = 0;
              } else if (start > len) {
                start = len;
              }

              if (end < 0) {
                end += len;
                if (end < 0) end = 0;
              } else if (end > len) {
                end = len;
              }

              if (end < start) end = start;

              var newBuf = this.subarray(start, end);
              // Return an augmented `Uint8Array` instance
              Object.setPrototypeOf(newBuf, Buffer.prototype);

              return newBuf;
            };

            /*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
            function checkOffset(offset, ext, length) {
              if (offset % 1 !== 0 || offset < 0)
                throw new RangeError('offset is not uint');
              if (offset + ext > length)
                throw new RangeError('Trying to access beyond buffer length');
            }

            Buffer.prototype.readUIntLE = function readUIntLE(
              offset,
              byteLength,
              noAssert
            ) {
              offset = offset >>> 0;
              byteLength = byteLength >>> 0;
              if (!noAssert) checkOffset(offset, byteLength, this.length);

              var val = this[offset];
              var mul = 1;
              var i = 0;
              while (++i < byteLength && (mul *= 0x100)) {
                val += this[offset + i] * mul;
              }

              return val;
            };

            Buffer.prototype.readUIntBE = function readUIntBE(
              offset,
              byteLength,
              noAssert
            ) {
              offset = offset >>> 0;
              byteLength = byteLength >>> 0;
              if (!noAssert) {
                checkOffset(offset, byteLength, this.length);
              }

              var val = this[offset + --byteLength];
              var mul = 1;
              while (byteLength > 0 && (mul *= 0x100)) {
                val += this[offset + --byteLength] * mul;
              }

              return val;
            };

            Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
              offset = offset >>> 0;
              if (!noAssert) checkOffset(offset, 1, this.length);
              return this[offset];
            };

            Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
              offset = offset >>> 0;
              if (!noAssert) checkOffset(offset, 2, this.length);
              return this[offset] | (this[offset + 1] << 8);
            };

            Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
              offset = offset >>> 0;
              if (!noAssert) checkOffset(offset, 2, this.length);
              return (this[offset] << 8) | this[offset + 1];
            };

            Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
              offset = offset >>> 0;
              if (!noAssert) checkOffset(offset, 4, this.length);

              return (
                (this[offset] | (this[offset + 1] << 8) | (this[offset + 2] << 16)) +
                this[offset + 3] * 0x1000000
              );
            };

            Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
              offset = offset >>> 0;
              if (!noAssert) checkOffset(offset, 4, this.length);

              return (
                this[offset] * 0x1000000 +
                ((this[offset + 1] << 16) | (this[offset + 2] << 8) | this[offset + 3])
              );
            };

            Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
              offset = offset >>> 0;
              byteLength = byteLength >>> 0;
              if (!noAssert) checkOffset(offset, byteLength, this.length);

              var val = this[offset];
              var mul = 1;
              var i = 0;
              while (++i < byteLength && (mul *= 0x100)) {
                val += this[offset + i] * mul;
              }
              mul *= 0x80;

              if (val >= mul) val -= Math.pow(2, 8 * byteLength);

              return val;
            };

            Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
              offset = offset >>> 0;
              byteLength = byteLength >>> 0;
              if (!noAssert) checkOffset(offset, byteLength, this.length);

              var i = byteLength;
              var mul = 1;
              var val = this[offset + --i];
              while (i > 0 && (mul *= 0x100)) {
                val += this[offset + --i] * mul;
              }
              mul *= 0x80;

              if (val >= mul) val -= Math.pow(2, 8 * byteLength);

              return val;
            };

            Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
              offset = offset >>> 0;
              if (!noAssert) checkOffset(offset, 1, this.length);
              if (!(this[offset] & 0x80)) return this[offset];
              return (0xff - this[offset] + 1) * -1;
            };

            Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
              offset = offset >>> 0;
              if (!noAssert) checkOffset(offset, 2, this.length);
              var val = this[offset] | (this[offset + 1] << 8);
              return val & 0x8000 ? val | 0xffff0000 : val;
            };

            Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
              offset = offset >>> 0;
              if (!noAssert) checkOffset(offset, 2, this.length);
              var val = this[offset + 1] | (this[offset] << 8);
              return val & 0x8000 ? val | 0xffff0000 : val;
            };

            Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
              offset = offset >>> 0;
              if (!noAssert) checkOffset(offset, 4, this.length);

              return (
                this[offset] |
                (this[offset + 1] << 8) |
                (this[offset + 2] << 16) |
                (this[offset + 3] << 24)
              );
            };

            Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
              offset = offset >>> 0;
              if (!noAssert) checkOffset(offset, 4, this.length);

              return (
                (this[offset] << 24) |
                (this[offset + 1] << 16) |
                (this[offset + 2] << 8) |
                this[offset + 3]
              );
            };

            Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
              offset = offset >>> 0;
              if (!noAssert) checkOffset(offset, 4, this.length);
              return ieee754.read(this, offset, true, 23, 4);
            };

            Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
              offset = offset >>> 0;
              if (!noAssert) checkOffset(offset, 4, this.length);
              return ieee754.read(this, offset, false, 23, 4);
            };

            Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
              offset = offset >>> 0;
              if (!noAssert) checkOffset(offset, 8, this.length);
              return ieee754.read(this, offset, true, 52, 8);
            };

            Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
              offset = offset >>> 0;
              if (!noAssert) checkOffset(offset, 8, this.length);
              return ieee754.read(this, offset, false, 52, 8);
            };

            function checkInt(buf, value, offset, ext, max, min) {
              if (!Buffer.isBuffer(buf))
                throw new TypeError('"buffer" argument must be a Buffer instance');
              if (value > max || value < min)
                throw new RangeError('"value" argument is out of bounds');
              if (offset + ext > buf.length) throw new RangeError('Index out of range');
            }

            Buffer.prototype.writeUIntLE = function writeUIntLE(
              value,
              offset,
              byteLength,
              noAssert
            ) {
              value = +value;
              offset = offset >>> 0;
              byteLength = byteLength >>> 0;
              if (!noAssert) {
                var maxBytes = Math.pow(2, 8 * byteLength) - 1;
                checkInt(this, value, offset, byteLength, maxBytes, 0);
              }

              var mul = 1;
              var i = 0;
              this[offset] = value & 0xff;
              while (++i < byteLength && (mul *= 0x100)) {
                this[offset + i] = (value / mul) & 0xff;
              }

              return offset + byteLength;
            };

            Buffer.prototype.writeUIntBE = function writeUIntBE(
              value,
              offset,
              byteLength,
              noAssert
            ) {
              value = +value;
              offset = offset >>> 0;
              byteLength = byteLength >>> 0;
              if (!noAssert) {
                var maxBytes = Math.pow(2, 8 * byteLength) - 1;
                checkInt(this, value, offset, byteLength, maxBytes, 0);
              }

              var i = byteLength - 1;
              var mul = 1;
              this[offset + i] = value & 0xff;
              while (--i >= 0 && (mul *= 0x100)) {
                this[offset + i] = (value / mul) & 0xff;
              }

              return offset + byteLength;
            };

            Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
              value = +value;
              offset = offset >>> 0;
              if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
              this[offset] = value & 0xff;
              return offset + 1;
            };

            Buffer.prototype.writeUInt16LE = function writeUInt16LE(
              value,
              offset,
              noAssert
            ) {
              value = +value;
              offset = offset >>> 0;
              if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
              this[offset] = value & 0xff;
              this[offset + 1] = value >>> 8;
              return offset + 2;
            };

            Buffer.prototype.writeUInt16BE = function writeUInt16BE(
              value,
              offset,
              noAssert
            ) {
              value = +value;
              offset = offset >>> 0;
              if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
              this[offset] = value >>> 8;
              this[offset + 1] = value & 0xff;
              return offset + 2;
            };

            Buffer.prototype.writeUInt32LE = function writeUInt32LE(
              value,
              offset,
              noAssert
            ) {
              value = +value;
              offset = offset >>> 0;
              if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
              this[offset + 3] = value >>> 24;
              this[offset + 2] = value >>> 16;
              this[offset + 1] = value >>> 8;
              this[offset] = value & 0xff;
              return offset + 4;
            };

            Buffer.prototype.writeUInt32BE = function writeUInt32BE(
              value,
              offset,
              noAssert
            ) {
              value = +value;
              offset = offset >>> 0;
              if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
              this[offset] = value >>> 24;
              this[offset + 1] = value >>> 16;
              this[offset + 2] = value >>> 8;
              this[offset + 3] = value & 0xff;
              return offset + 4;
            };

            Buffer.prototype.writeIntLE = function writeIntLE(
              value,
              offset,
              byteLength,
              noAssert
            ) {
              value = +value;
              offset = offset >>> 0;
              if (!noAssert) {
                var limit = Math.pow(2, 8 * byteLength - 1);

                checkInt(this, value, offset, byteLength, limit - 1, -limit);
              }

              var i = 0;
              var mul = 1;
              var sub = 0;
              this[offset] = value & 0xff;
              while (++i < byteLength && (mul *= 0x100)) {
                if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
                  sub = 1;
                }
                this[offset + i] = (((value / mul) >> 0) - sub) & 0xff;
              }

              return offset + byteLength;
            };

            Buffer.prototype.writeIntBE = function writeIntBE(
              value,
              offset,
              byteLength,
              noAssert
            ) {
              value = +value;
              offset = offset >>> 0;
              if (!noAssert) {
                var limit = Math.pow(2, 8 * byteLength - 1);

                checkInt(this, value, offset, byteLength, limit - 1, -limit);
              }

              var i = byteLength - 1;
              var mul = 1;
              var sub = 0;
              this[offset + i] = value & 0xff;
              while (--i >= 0 && (mul *= 0x100)) {
                if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
                  sub = 1;
                }
                this[offset + i] = (((value / mul) >> 0) - sub) & 0xff;
              }

              return offset + byteLength;
            };

            Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
              value = +value;
              offset = offset >>> 0;
              if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
              if (value < 0) value = 0xff + value + 1;
              this[offset] = value & 0xff;
              return offset + 1;
            };

            Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
              value = +value;
              offset = offset >>> 0;
              if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
              this[offset] = value & 0xff;
              this[offset + 1] = value >>> 8;
              return offset + 2;
            };

            Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
              value = +value;
              offset = offset >>> 0;
              if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
              this[offset] = value >>> 8;
              this[offset + 1] = value & 0xff;
              return offset + 2;
            };

            Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
              value = +value;
              offset = offset >>> 0;
              if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
              this[offset] = value & 0xff;
              this[offset + 1] = value >>> 8;
              this[offset + 2] = value >>> 16;
              this[offset + 3] = value >>> 24;
              return offset + 4;
            };

            Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
              value = +value;
              offset = offset >>> 0;
              if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
              if (value < 0) value = 0xffffffff + value + 1;
              this[offset] = value >>> 24;
              this[offset + 1] = value >>> 16;
              this[offset + 2] = value >>> 8;
              this[offset + 3] = value & 0xff;
              return offset + 4;
            };

            function checkIEEE754(buf, value, offset, ext, max, min) {
              if (offset + ext > buf.length) throw new RangeError('Index out of range');
              if (offset < 0) throw new RangeError('Index out of range');
            }

            function writeFloat(buf, value, offset, littleEndian, noAssert) {
              value = +value;
              offset = offset >>> 0;
              if (!noAssert) {
                checkIEEE754(
                  buf,
                  value,
                  offset,
                  4,
                  3.4028234663852886e38,
                  -3.4028234663852886e38
                );
              }
              ieee754.write(buf, value, offset, littleEndian, 23, 4);
              return offset + 4;
            }

            Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
              return writeFloat(this, value, offset, true, noAssert);
            };

            Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
              return writeFloat(this, value, offset, false, noAssert);
            };

            function writeDouble(buf, value, offset, littleEndian, noAssert) {
              value = +value;
              offset = offset >>> 0;
              if (!noAssert) {
                checkIEEE754(
                  buf,
                  value,
                  offset,
                  8,
                  1.7976931348623157e308,
                  -1.7976931348623157e308
                );
              }
              ieee754.write(buf, value, offset, littleEndian, 52, 8);
              return offset + 8;
            }

            Buffer.prototype.writeDoubleLE = function writeDoubleLE(
              value,
              offset,
              noAssert
            ) {
              return writeDouble(this, value, offset, true, noAssert);
            };

            Buffer.prototype.writeDoubleBE = function writeDoubleBE(
              value,
              offset,
              noAssert
            ) {
              return writeDouble(this, value, offset, false, noAssert);
            };

            // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
            Buffer.prototype.copy = function copy(target, targetStart, start, end) {
              if (!Buffer.isBuffer(target))
                throw new TypeError('argument should be a Buffer');
              if (!start) start = 0;
              if (!end && end !== 0) end = this.length;
              if (targetStart >= target.length) targetStart = target.length;
              if (!targetStart) targetStart = 0;
              if (end > 0 && end < start) end = start;

              // Copy 0 bytes; we're done
              if (end === start) return 0;
              if (target.length === 0 || this.length === 0) return 0;

              // Fatal error conditions
              if (targetStart < 0) {
                throw new RangeError('targetStart out of bounds');
              }
              if (start < 0 || start >= this.length)
                throw new RangeError('Index out of range');
              if (end < 0) throw new RangeError('sourceEnd out of bounds');

              // Are we oob?
              if (end > this.length) end = this.length;
              if (target.length - targetStart < end - start) {
                end = target.length - targetStart + start;
              }

              var len = end - start;

              if (
                this === target &&
                typeof Uint8Array.prototype.copyWithin === 'function'
              ) {
                // Use built-in when available, missing from IE11
                this.copyWithin(targetStart, start, end);
              } else if (this === target && start < targetStart && targetStart < end) {
                // descending copy from end
                for (var i = len - 1; i >= 0; --i) {
                  target[i + targetStart] = this[i + start];
                }
              } else {
                Uint8Array.prototype.set.call(
                  target,
                  this.subarray(start, end),
                  targetStart
                );
              }

              return len;
            };

            // Usage:
            //    buffer.fill(number[, offset[, end]])
            //    buffer.fill(buffer[, offset[, end]])
            //    buffer.fill(string[, offset[, end]][, encoding])
            Buffer.prototype.fill = function fill(val, start, end, encoding) {
              // Handle string cases:
              if (typeof val === 'string') {
                if (typeof start === 'string') {
                  encoding = start;
                  start = 0;
                  end = this.length;
                } else if (typeof end === 'string') {
                  encoding = end;
                  end = this.length;
                }
                if (encoding !== undefined && typeof encoding !== 'string') {
                  throw new TypeError('encoding must be a string');
                }
                if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
                  throw new TypeError('Unknown encoding: ' + encoding);
                }
                if (val.length === 1) {
                  var code = val.charCodeAt(0);
                  if ((encoding === 'utf8' && code < 128) || encoding === 'latin1') {
                    // Fast path: If `val` fits into a single byte, use that numeric value.
                    val = code;
                  }
                }
              } else if (typeof val === 'number') {
                val = val & 255;
              } else if (typeof val === 'boolean') {
                val = Number(val);
              }

              // Invalid ranges are not set to a default, so can range check early.
              if (start < 0 || this.length < start || this.length < end) {
                throw new RangeError('Out of range index');
              }

              if (end <= start) {
                return this;
              }

              start = start >>> 0;
              end = end === undefined ? this.length : end >>> 0;

              if (!val) val = 0;

              var i;
              if (typeof val === 'number') {
                for (i = start; i < end; ++i) {
                  this[i] = val;
                }
              } else {
                var bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
                var len = bytes.length;
                if (len === 0) {
                  throw new TypeError(
                    'The value "' + val + '" is invalid for argument "value"'
                  );
                }
                for (i = 0; i < end - start; ++i) {
                  this[i + start] = bytes[i % len];
                }
              }

              return this;
            };

            // HELPER FUNCTIONS
            // ================

            var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;

            function base64clean(str) {
              // Node takes equal signs as end of the Base64 encoding
              str = str.split('=')[0];
              // Node strips out invalid characters like \n and \t from the string, base64-js does not
              str = str.trim().replace(INVALID_BASE64_RE, '');
              // Node converts strings with length < 2 to ''
              if (str.length < 2) return '';
              // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
              while (str.length % 4 !== 0) {
                str = str + '=';
              }
              return str;
            }

            function utf8ToBytes(string, units) {
              units = units || Infinity;
              var codePoint;
              var length = string.length;
              var leadSurrogate = null;
              var bytes = [];

              for (var i = 0; i < length; ++i) {
                codePoint = string.charCodeAt(i);

                // is surrogate component
                if (codePoint > 0xd7ff && codePoint < 0xe000) {
                  // last char was a lead
                  if (!leadSurrogate) {
                    // no lead yet
                    if (codePoint > 0xdbff) {
                      // unexpected trail
                      if ((units -= 3) > -1) bytes.push(0xef, 0xbf, 0xbd);
                      continue;
                    } else if (i + 1 === length) {
                      // unpaired lead
                      if ((units -= 3) > -1) bytes.push(0xef, 0xbf, 0xbd);
                      continue;
                    }

                    // valid lead
                    leadSurrogate = codePoint;

                    continue;
                  }

                  // 2 leads in a row
                  if (codePoint < 0xdc00) {
                    if ((units -= 3) > -1) bytes.push(0xef, 0xbf, 0xbd);
                    leadSurrogate = codePoint;
                    continue;
                  }

                  // valid surrogate pair
                  codePoint =
                    (((leadSurrogate - 0xd800) << 10) | (codePoint - 0xdc00)) + 0x10000;
                } else if (leadSurrogate) {
                  // valid bmp char, but last char was a lead
                  if ((units -= 3) > -1) bytes.push(0xef, 0xbf, 0xbd);
                }

                leadSurrogate = null;

                // encode utf8
                if (codePoint < 0x80) {
                  if ((units -= 1) < 0) break;
                  bytes.push(codePoint);
                } else if (codePoint < 0x800) {
                  if ((units -= 2) < 0) break;
                  bytes.push((codePoint >> 0x6) | 0xc0, (codePoint & 0x3f) | 0x80);
                } else if (codePoint < 0x10000) {
                  if ((units -= 3) < 0) break;
                  bytes.push(
                    (codePoint >> 0xc) | 0xe0,
                    ((codePoint >> 0x6) & 0x3f) | 0x80,
                    (codePoint & 0x3f) | 0x80
                  );
                } else if (codePoint < 0x110000) {
                  if ((units -= 4) < 0) break;
                  bytes.push(
                    (codePoint >> 0x12) | 0xf0,
                    ((codePoint >> 0xc) & 0x3f) | 0x80,
                    ((codePoint >> 0x6) & 0x3f) | 0x80,
                    (codePoint & 0x3f) | 0x80
                  );
                } else {
                  throw new Error('Invalid code point');
                }
              }

              return bytes;
            }

            function asciiToBytes(str) {
              var byteArray = [];
              for (var i = 0; i < str.length; ++i) {
                // Node's code seems to be doing this and not & 0x7F..
                byteArray.push(str.charCodeAt(i) & 0xff);
              }
              return byteArray;
            }

            function utf16leToBytes(str, units) {
              var c, hi, lo;
              var byteArray = [];
              for (var i = 0; i < str.length; ++i) {
                if ((units -= 2) < 0) break;

                c = str.charCodeAt(i);
                hi = c >> 8;
                lo = c % 256;
                byteArray.push(lo);
                byteArray.push(hi);
              }

              return byteArray;
            }

            function base64ToBytes(str) {
              return base64.toByteArray(base64clean(str));
            }

            function blitBuffer(src, dst, offset, length) {
              for (var i = 0; i < length; ++i) {
                if (i + offset >= dst.length || i >= src.length) break;
                dst[i + offset] = src[i];
              }
              return i;
            }

            // ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
            // the `instanceof` check but they should be treated as of that type.
            // See: https://github.com/feross/buffer/issues/166
            function isInstance(obj, type) {
              return (
                obj instanceof type ||
                (obj != null &&
                  obj.constructor != null &&
                  obj.constructor.name != null &&
                  obj.constructor.name === type.name)
              );
            }
            function numberIsNaN(obj) {
              // For IE11 support
              return obj !== obj; // eslint-disable-line no-self-compare
            }

            // Create lookup table for `toString('hex')`
            // See: https://github.com/feross/buffer/issues/219
            var hexSliceLookupTable = (function() {
              var alphabet = '0123456789abcdef';
              var table = new Array(256);
              for (var i = 0; i < 16; ++i) {
                var i16 = i * 16;
                for (var j = 0; j < 16; ++j) {
                  table[i16 + j] = alphabet[i] + alphabet[j];
                }
              }
              return table;
            })();
          }.call(this, _dereq_('buffer').Buffer));
        },
        { 'base64-js': 20, buffer: 22, ieee754: 31 }
      ],
      23: [
        function(_dereq_, module, exports) {
          // This file can be required in Browserify and Node.js for automatic polyfill
          // To use it:  require('es6-promise/auto');
          'use strict';
          module.exports = _dereq_('./').polyfill();
        },
        { './': 24 }
      ],
      24: [
        function(_dereq_, module, exports) {
          (function(process, global) {
            /*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */

            (function(global, factory) {
              typeof exports === 'object' && typeof module !== 'undefined'
                ? (module.exports = factory())
                : typeof define === 'function' && define.amd
                  ? define(factory)
                  : (global.ES6Promise = factory());
            })(this, function() {
              'use strict';

              function objectOrFunction(x) {
                var type = typeof x;
                return x !== null && (type === 'object' || type === 'function');
              }

              function isFunction(x) {
                return typeof x === 'function';
              }

              var _isArray = void 0;
              if (Array.isArray) {
                _isArray = Array.isArray;
              } else {
                _isArray = function(x) {
                  return Object.prototype.toString.call(x) === '[object Array]';
                };
              }

              var isArray = _isArray;

              var len = 0;
              var vertxNext = void 0;
              var customSchedulerFn = void 0;

              var asap = function asap(callback, arg) {
                queue[len] = callback;
                queue[len + 1] = arg;
                len += 2;
                if (len === 2) {
                  // If len is 2, that means that we need to schedule an async flush.
                  // If additional callbacks are queued before the queue is flushed, they
                  // will be processed by this flush that we are scheduling.
                  if (customSchedulerFn) {
                    customSchedulerFn(flush);
                  } else {
                    scheduleFlush();
                  }
                }
              };

              function setScheduler(scheduleFn) {
                customSchedulerFn = scheduleFn;
              }

              function setAsap(asapFn) {
                asap = asapFn;
              }

              var browserWindow = typeof window !== 'undefined' ? window : undefined;
              var browserGlobal = browserWindow || {};
              var BrowserMutationObserver =
                browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
              var isNode =
                typeof self === 'undefined' &&
                typeof process !== 'undefined' &&
                {}.toString.call(process) === '[object process]';

              // test for web worker but not in IE10
              var isWorker =
                typeof Uint8ClampedArray !== 'undefined' &&
                typeof importScripts !== 'undefined' &&
                typeof MessageChannel !== 'undefined';

              // node
              function useNextTick() {
                // node version 0.10.x displays a deprecation warning when nextTick is used recursively
                // see https://github.com/cujojs/when/issues/410 for details
                return function() {
                  return process.nextTick(flush);
                };
              }

              // vertx
              function useVertxTimer() {
                if (typeof vertxNext !== 'undefined') {
                  return function() {
                    vertxNext(flush);
                  };
                }

                return useSetTimeout();
              }

              function useMutationObserver() {
                var iterations = 0;
                var observer = new BrowserMutationObserver(flush);
                var node = document.createTextNode('');
                observer.observe(node, { characterData: true });

                return function() {
                  node.data = iterations = ++iterations % 2;
                };
              }

              // web worker
              function useMessageChannel() {
                var channel = new MessageChannel();
                channel.port1.onmessage = flush;
                return function() {
                  return channel.port2.postMessage(0);
                };
              }

              function useSetTimeout() {
                // Store setTimeout reference so es6-promise will be unaffected by
                // other code modifying setTimeout (like sinon.useFakeTimers())
                var globalSetTimeout = setTimeout;
                return function() {
                  return globalSetTimeout(flush, 1);
                };
              }

              var queue = new Array(1000);
              function flush() {
                for (var i = 0; i < len; i += 2) {
                  var callback = queue[i];
                  var arg = queue[i + 1];

                  callback(arg);

                  queue[i] = undefined;
                  queue[i + 1] = undefined;
                }

                len = 0;
              }

              function attemptVertx() {
                try {
                  var vertx = Function('return this')().require('vertx');
                  vertxNext = vertx.runOnLoop || vertx.runOnContext;
                  return useVertxTimer();
                } catch (e) {
                  return useSetTimeout();
                }
              }

              var scheduleFlush = void 0;
              // Decide what async method to use to triggering processing of queued callbacks:
              if (isNode) {
                scheduleFlush = useNextTick();
              } else if (BrowserMutationObserver) {
                scheduleFlush = useMutationObserver();
              } else if (isWorker) {
                scheduleFlush = useMessageChannel();
              } else if (browserWindow === undefined && typeof _dereq_ === 'function') {
                scheduleFlush = attemptVertx();
              } else {
                scheduleFlush = useSetTimeout();
              }

              function then(onFulfillment, onRejection) {
                var parent = this;

                var child = new this.constructor(noop);

                if (child[PROMISE_ID] === undefined) {
                  makePromise(child);
                }

                var _state = parent._state;

                if (_state) {
                  var callback = arguments[_state - 1];
                  asap(function() {
                    return invokeCallback(_state, child, callback, parent._result);
                  });
                } else {
                  subscribe(parent, child, onFulfillment, onRejection);
                }

                return child;
              }

              /**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
              function resolve$1(object) {
                /*jshint validthis:true */
                var Constructor = this;

                if (
                  object &&
                  typeof object === 'object' &&
                  object.constructor === Constructor
                ) {
                  return object;
                }

                var promise = new Constructor(noop);
                resolve(promise, object);
                return promise;
              }

              var PROMISE_ID = Math.random()
                .toString(36)
                .substring(2);

              function noop() {}

              var PENDING = void 0;
              var FULFILLED = 1;
              var REJECTED = 2;

              function selfFulfillment() {
                return new TypeError('You cannot resolve a promise with itself');
              }

              function cannotReturnOwn() {
                return new TypeError(
                  'A promises callback cannot return that same promise.'
                );
              }

              function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
                try {
                  then$$1.call(value, fulfillmentHandler, rejectionHandler);
                } catch (e) {
                  return e;
                }
              }

              function handleForeignThenable(promise, thenable, then$$1) {
                asap(function(promise) {
                  var sealed = false;
                  var error = tryThen(
                    then$$1,
                    thenable,
                    function(value) {
                      if (sealed) {
                        return;
                      }
                      sealed = true;
                      if (thenable !== value) {
                        resolve(promise, value);
                      } else {
                        fulfill(promise, value);
                      }
                    },
                    function(reason) {
                      if (sealed) {
                        return;
                      }
                      sealed = true;

                      reject(promise, reason);
                    },
                    'Settle: ' + (promise._label || ' unknown promise')
                  );

                  if (!sealed && error) {
                    sealed = true;
                    reject(promise, error);
                  }
                }, promise);
              }

              function handleOwnThenable(promise, thenable) {
                if (thenable._state === FULFILLED) {
                  fulfill(promise, thenable._result);
                } else if (thenable._state === REJECTED) {
                  reject(promise, thenable._result);
                } else {
                  subscribe(
                    thenable,
                    undefined,
                    function(value) {
                      return resolve(promise, value);
                    },
                    function(reason) {
                      return reject(promise, reason);
                    }
                  );
                }
              }

              function handleMaybeThenable(promise, maybeThenable, then$$1) {
                if (
                  maybeThenable.constructor === promise.constructor &&
                  then$$1 === then &&
                  maybeThenable.constructor.resolve === resolve$1
                ) {
                  handleOwnThenable(promise, maybeThenable);
                } else {
                  if (then$$1 === undefined) {
                    fulfill(promise, maybeThenable);
                  } else if (isFunction(then$$1)) {
                    handleForeignThenable(promise, maybeThenable, then$$1);
                  } else {
                    fulfill(promise, maybeThenable);
                  }
                }
              }

              function resolve(promise, value) {
                if (promise === value) {
                  reject(promise, selfFulfillment());
                } else if (objectOrFunction(value)) {
                  var then$$1 = void 0;
                  try {
                    then$$1 = value.then;
                  } catch (error) {
                    reject(promise, error);
                    return;
                  }
                  handleMaybeThenable(promise, value, then$$1);
                } else {
                  fulfill(promise, value);
                }
              }

              function publishRejection(promise) {
                if (promise._onerror) {
                  promise._onerror(promise._result);
                }

                publish(promise);
              }

              function fulfill(promise, value) {
                if (promise._state !== PENDING) {
                  return;
                }

                promise._result = value;
                promise._state = FULFILLED;

                if (promise._subscribers.length !== 0) {
                  asap(publish, promise);
                }
              }

              function reject(promise, reason) {
                if (promise._state !== PENDING) {
                  return;
                }
                promise._state = REJECTED;
                promise._result = reason;

                asap(publishRejection, promise);
              }

              function subscribe(parent, child, onFulfillment, onRejection) {
                var _subscribers = parent._subscribers;
                var length = _subscribers.length;

                parent._onerror = null;

                _subscribers[length] = child;
                _subscribers[length + FULFILLED] = onFulfillment;
                _subscribers[length + REJECTED] = onRejection;

                if (length === 0 && parent._state) {
                  asap(publish, parent);
                }
              }

              function publish(promise) {
                var subscribers = promise._subscribers;
                var settled = promise._state;

                if (subscribers.length === 0) {
                  return;
                }

                var child = void 0,
                  callback = void 0,
                  detail = promise._result;

                for (var i = 0; i < subscribers.length; i += 3) {
                  child = subscribers[i];
                  callback = subscribers[i + settled];

                  if (child) {
                    invokeCallback(settled, child, callback, detail);
                  } else {
                    callback(detail);
                  }
                }

                promise._subscribers.length = 0;
              }

              function invokeCallback(settled, promise, callback, detail) {
                var hasCallback = isFunction(callback),
                  value = void 0,
                  error = void 0,
                  succeeded = true;

                if (hasCallback) {
                  try {
                    value = callback(detail);
                  } catch (e) {
                    succeeded = false;
                    error = e;
                  }

                  if (promise === value) {
                    reject(promise, cannotReturnOwn());
                    return;
                  }
                } else {
                  value = detail;
                }

                if (promise._state !== PENDING) {
                  // noop
                } else if (hasCallback && succeeded) {
                  resolve(promise, value);
                } else if (succeeded === false) {
                  reject(promise, error);
                } else if (settled === FULFILLED) {
                  fulfill(promise, value);
                } else if (settled === REJECTED) {
                  reject(promise, value);
                }
              }

              function initializePromise(promise, resolver) {
                try {
                  resolver(
                    function resolvePromise(value) {
                      resolve(promise, value);
                    },
                    function rejectPromise(reason) {
                      reject(promise, reason);
                    }
                  );
                } catch (e) {
                  reject(promise, e);
                }
              }

              var id = 0;
              function nextId() {
                return id++;
              }

              function makePromise(promise) {
                promise[PROMISE_ID] = id++;
                promise._state = undefined;
                promise._result = undefined;
                promise._subscribers = [];
              }

              function validationError() {
                return new Error('Array Methods must be provided an Array');
              }

              var Enumerator = (function() {
                function Enumerator(Constructor, input) {
                  this._instanceConstructor = Constructor;
                  this.promise = new Constructor(noop);

                  if (!this.promise[PROMISE_ID]) {
                    makePromise(this.promise);
                  }

                  if (isArray(input)) {
                    this.length = input.length;
                    this._remaining = input.length;

                    this._result = new Array(this.length);

                    if (this.length === 0) {
                      fulfill(this.promise, this._result);
                    } else {
                      this.length = this.length || 0;
                      this._enumerate(input);
                      if (this._remaining === 0) {
                        fulfill(this.promise, this._result);
                      }
                    }
                  } else {
                    reject(this.promise, validationError());
                  }
                }

                Enumerator.prototype._enumerate = function _enumerate(input) {
                  for (var i = 0; this._state === PENDING && i < input.length; i++) {
                    this._eachEntry(input[i], i);
                  }
                };

                Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
                  var c = this._instanceConstructor;
                  var resolve$$1 = c.resolve;

                  if (resolve$$1 === resolve$1) {
                    var _then = void 0;
                    var error = void 0;
                    var didError = false;
                    try {
                      _then = entry.then;
                    } catch (e) {
                      didError = true;
                      error = e;
                    }

                    if (_then === then && entry._state !== PENDING) {
                      this._settledAt(entry._state, i, entry._result);
                    } else if (typeof _then !== 'function') {
                      this._remaining--;
                      this._result[i] = entry;
                    } else if (c === Promise$1) {
                      var promise = new c(noop);
                      if (didError) {
                        reject(promise, error);
                      } else {
                        handleMaybeThenable(promise, entry, _then);
                      }
                      this._willSettleAt(promise, i);
                    } else {
                      this._willSettleAt(
                        new c(function(resolve$$1) {
                          return resolve$$1(entry);
                        }),
                        i
                      );
                    }
                  } else {
                    this._willSettleAt(resolve$$1(entry), i);
                  }
                };

                Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
                  var promise = this.promise;

                  if (promise._state === PENDING) {
                    this._remaining--;

                    if (state === REJECTED) {
                      reject(promise, value);
                    } else {
                      this._result[i] = value;
                    }
                  }

                  if (this._remaining === 0) {
                    fulfill(promise, this._result);
                  }
                };

                Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
                  var enumerator = this;

                  subscribe(
                    promise,
                    undefined,
                    function(value) {
                      return enumerator._settledAt(FULFILLED, i, value);
                    },
                    function(reason) {
                      return enumerator._settledAt(REJECTED, i, reason);
                    }
                  );
                };

                return Enumerator;
              })();

              /**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
              function all(entries) {
                return new Enumerator(this, entries).promise;
              }

              /**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
              function race(entries) {
                /*jshint validthis:true */
                var Constructor = this;

                if (!isArray(entries)) {
                  return new Constructor(function(_, reject) {
                    return reject(new TypeError('You must pass an array to race.'));
                  });
                } else {
                  return new Constructor(function(resolve, reject) {
                    var length = entries.length;
                    for (var i = 0; i < length; i++) {
                      Constructor.resolve(entries[i]).then(resolve, reject);
                    }
                  });
                }
              }

              /**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
              function reject$1(reason) {
                /*jshint validthis:true */
                var Constructor = this;
                var promise = new Constructor(noop);
                reject(promise, reason);
                return promise;
              }

              function needsResolver() {
                throw new TypeError(
                  'You must pass a resolver function as the first argument to the promise constructor'
                );
              }

              function needsNew() {
                throw new TypeError(
                  "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
                );
              }

              /**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {Function} resolver
  Useful for tooling.
  @constructor
*/

              var Promise$1 = (function() {
                function Promise(resolver) {
                  this[PROMISE_ID] = nextId();
                  this._result = this._state = undefined;
                  this._subscribers = [];

                  if (noop !== resolver) {
                    typeof resolver !== 'function' && needsResolver();
                    this instanceof Promise
                      ? initializePromise(this, resolver)
                      : needsNew();
                  }
                }

                /**
  The primary way of interacting with a promise is through its `then` method,
  which registers callbacks to receive either a promise's eventual value or the
  reason why the promise cannot be fulfilled.
   ```js
  findUser().then(function(user){
    // user is available
  }, function(reason){
    // user is unavailable, and you are given the reason why
  });
  ```
   Chaining
  --------
   The return value of `then` is itself a promise.  This second, 'downstream'
  promise is resolved with the return value of the first promise's fulfillment
  or rejection handler, or rejected if the handler throws an exception.
   ```js
  findUser().then(function (user) {
    return user.name;
  }, function (reason) {
    return 'default name';
  }).then(function (userName) {
    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
    // will be `'default name'`
  });
   findUser().then(function (user) {
    throw new Error('Found user, but still unhappy');
  }, function (reason) {
    throw new Error('`findUser` rejected and we're unhappy');
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
  });
  ```
  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
   ```js
  findUser().then(function (user) {
    throw new PedagogicalException('Upstream error');
  }).then(function (value) {
    // never reached
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // The `PedgagocialException` is propagated all the way down to here
  });
  ```
   Assimilation
  ------------
   Sometimes the value you want to propagate to a downstream promise can only be
  retrieved asynchronously. This can be achieved by returning a promise in the
  fulfillment or rejection handler. The downstream promise will then be pending
  until the returned promise is settled. This is called *assimilation*.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // The user's comments are now available
  });
  ```
   If the assimliated promise rejects, then the downstream promise will also reject.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // If `findCommentsByAuthor` fulfills, we'll have the value here
  }, function (reason) {
    // If `findCommentsByAuthor` rejects, we'll have the reason here
  });
  ```
   Simple Example
  --------------
   Synchronous Example
   ```javascript
  let result;
   try {
    result = findResult();
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
  findResult(function(result, err){
    if (err) {
      // failure
    } else {
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findResult().then(function(result){
    // success
  }, function(reason){
    // failure
  });
  ```
   Advanced Example
  --------------
   Synchronous Example
   ```javascript
  let author, books;
   try {
    author = findAuthor();
    books  = findBooksByAuthor(author);
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
   function foundBooks(books) {
   }
   function failure(reason) {
   }
   findAuthor(function(author, err){
    if (err) {
      failure(err);
      // failure
    } else {
      try {
        findBoooksByAuthor(author, function(books, err) {
          if (err) {
            failure(err);
          } else {
            try {
              foundBooks(books);
            } catch(reason) {
              failure(reason);
            }
          }
        });
      } catch(error) {
        failure(err);
      }
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findAuthor().
    then(findBooksByAuthor).
    then(function(books){
      // found books
  }).catch(function(reason){
    // something went wrong
  });
  ```
   @method then
  @param {Function} onFulfilled
  @param {Function} onRejected
  Useful for tooling.
  @return {Promise}
  */

                /**
  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
  as the catch block of a try/catch statement.
  ```js
  function findAuthor(){
  throw new Error('couldn't find that author');
  }
  // synchronous
  try {
  findAuthor();
  } catch(reason) {
  // something went wrong
  }
  // async with promises
  findAuthor().catch(function(reason){
  // something went wrong
  });
  ```
  @method catch
  @param {Function} onRejection
  Useful for tooling.
  @return {Promise}
  */

                Promise.prototype.catch = function _catch(onRejection) {
                  return this.then(null, onRejection);
                };

                /**
    `finally` will be invoked regardless of the promise's fate just as native
    try/catch/finally behaves
  
    Synchronous example:
  
    ```js
    findAuthor() {
      if (Math.random() > 0.5) {
        throw new Error();
      }
      return new Author();
    }
  
    try {
      return findAuthor(); // succeed or fail
    } catch(error) {
      return findOtherAuther();
    } finally {
      // always runs
      // doesn't affect the return value
    }
    ```
  
    Asynchronous example:
  
    ```js
    findAuthor().catch(function(reason){
      return findOtherAuther();
    }).finally(function(){
      // author was either found, or not
    });
    ```
  
    @method finally
    @param {Function} callback
    @return {Promise}
  */

                Promise.prototype.finally = function _finally(callback) {
                  var promise = this;
                  var constructor = promise.constructor;

                  if (isFunction(callback)) {
                    return promise.then(
                      function(value) {
                        return constructor.resolve(callback()).then(function() {
                          return value;
                        });
                      },
                      function(reason) {
                        return constructor.resolve(callback()).then(function() {
                          throw reason;
                        });
                      }
                    );
                  }

                  return promise.then(callback, callback);
                };

                return Promise;
              })();

              Promise$1.prototype.then = then;
              Promise$1.all = all;
              Promise$1.race = race;
              Promise$1.resolve = resolve$1;
              Promise$1.reject = reject$1;
              Promise$1._setScheduler = setScheduler;
              Promise$1._setAsap = setAsap;
              Promise$1._asap = asap;

              /*global self*/
              function polyfill() {
                var local = void 0;

                if (typeof global !== 'undefined') {
                  local = global;
                } else if (typeof self !== 'undefined') {
                  local = self;
                } else {
                  try {
                    local = Function('return this')();
                  } catch (e) {
                    throw new Error(
                      'polyfill failed because global object is unavailable in this environment'
                    );
                  }
                }

                var P = local.Promise;

                if (P) {
                  var promiseToString = null;
                  try {
                    promiseToString = Object.prototype.toString.call(P.resolve());
                  } catch (e) {
                    // silently ignored
                  }

                  if (promiseToString === '[object Promise]' && !P.cast) {
                    return;
                  }
                }

                local.Promise = Promise$1;
              }

              // Strange compat..
              Promise$1.polyfill = polyfill;
              Promise$1.Promise = Promise$1;

              return Promise$1;
            });
          }.call(
            this,
            _dereq_('_process'),
            typeof global !== 'undefined'
              ? global
              : typeof self !== 'undefined'
                ? self
                : typeof window !== 'undefined' ? window : {}
          ));
        },
        { _process: 36 }
      ],
      25: [
        function(_dereq_, module, exports) {
          (function(global, factory) {
            if (typeof define === 'function' && define.amd) {
              define(['exports', 'module'], factory);
            } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
              factory(exports, module);
            } else {
              var mod = {
                exports: {}
              };
              factory(mod.exports, mod);
              global.fetchJsonp = mod.exports;
            }
          })(this, function(exports, module) {
            'use strict';

            var defaultOptions = {
              timeout: 5000,
              jsonpCallback: 'callback',
              jsonpCallbackFunction: null
            };

            function generateCallbackFunction() {
              return 'jsonp_' + Date.now() + '_' + Math.ceil(Math.random() * 100000);
            }

            function clearFunction(functionName) {
              // IE8 throws an exception when you try to delete a property on window
              // http://stackoverflow.com/a/1824228/751089
              try {
                delete window[functionName];
              } catch (e) {
                window[functionName] = undefined;
              }
            }

            function removeScript(scriptId) {
              var script = document.getElementById(scriptId);
              if (script) {
                document.getElementsByTagName('head')[0].removeChild(script);
              }
            }

            function fetchJsonp(_url) {
              var options =
                arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

              // to avoid param reassign
              var url = _url;
              var timeout = options.timeout || defaultOptions.timeout;
              var jsonpCallback = options.jsonpCallback || defaultOptions.jsonpCallback;

              var timeoutId = undefined;

              return new Promise(function(resolve, reject) {
                var callbackFunction =
                  options.jsonpCallbackFunction || generateCallbackFunction();
                var scriptId = jsonpCallback + '_' + callbackFunction;

                window[callbackFunction] = function(response) {
                  resolve({
                    ok: true,
                    // keep consistent with fetch API
                    json: function json() {
                      return Promise.resolve(response);
                    }
                  });

                  if (timeoutId) clearTimeout(timeoutId);

                  removeScript(scriptId);

                  clearFunction(callbackFunction);
                };

                // Check if the user set their own params, and if not add a ? to start a list of params
                url += url.indexOf('?') === -1 ? '?' : '&';

                var jsonpScript = document.createElement('script');
                jsonpScript.setAttribute(
                  'src',
                  '' + url + jsonpCallback + '=' + callbackFunction
                );
                if (options.charset) {
                  jsonpScript.setAttribute('charset', options.charset);
                }
                jsonpScript.id = scriptId;
                document.getElementsByTagName('head')[0].appendChild(jsonpScript);

                timeoutId = setTimeout(function() {
                  reject(new Error('JSONP request to ' + _url + ' timed out'));

                  clearFunction(callbackFunction);
                  removeScript(scriptId);
                  window[callbackFunction] = function() {
                    clearFunction(callbackFunction);
                  };
                }, timeout);

                // Caught if got 404/500
                jsonpScript.onerror = function() {
                  reject(new Error('JSONP request to ' + _url + ' failed'));

                  clearFunction(callbackFunction);
                  removeScript(scriptId);
                  if (timeoutId) clearTimeout(timeoutId);
                };
              });
            }

            // export as global function
            /*
  let local;
  if (typeof global !== 'undefined') {
    local = global;
  } else if (typeof self !== 'undefined') {
    local = self;
  } else {
    try {
      local = Function('return this')();
    } catch (e) {
      throw new Error('polyfill failed because global object is unavailable in this environment');
    }
  }
  local.fetchJsonp = fetchJsonp;
  */

            module.exports = fetchJsonp;
          });
        },
        {}
      ],
      26: [
        function(_dereq_, module, exports) {
          /* FileSaver.js
 * A saveAs() FileSaver implementation.
 * 1.3.2
 * 2016-06-16 18:25:19
 *
 * By Eli Grey, http://eligrey.com
 * License: MIT
 *   See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md
 */

          /*global self */
          /*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */

          /*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */

          var saveAs =
            saveAs ||
            (function(view) {
              'use strict';
              // IE <10 is explicitly unsupported
              if (
                typeof view === 'undefined' ||
                (typeof navigator !== 'undefined' &&
                  /MSIE [1-9]\./.test(navigator.userAgent))
              ) {
                return;
              }
              var doc = view.document,
                // only get URL when necessary in case Blob.js hasn't overridden it yet
                get_URL = function() {
                  return view.URL || view.webkitURL || view;
                },
                save_link = doc.createElementNS('http://www.w3.org/1999/xhtml', 'a'),
                can_use_save_link = 'download' in save_link,
                click = function(node) {
                  var event = new MouseEvent('click');
                  node.dispatchEvent(event);
                },
                is_safari = /constructor/i.test(view.HTMLElement) || view.safari,
                is_chrome_ios = /CriOS\/[\d]+/.test(navigator.userAgent),
                throw_outside = function(ex) {
                  (view.setImmediate || view.setTimeout)(function() {
                    throw ex;
                  }, 0);
                },
                force_saveable_type = 'application/octet-stream',
                // the Blob API is fundamentally broken as there is no "downloadfinished" event to subscribe to
                arbitrary_revoke_timeout = 1000 * 40, // in ms
                revoke = function(file) {
                  var revoker = function() {
                    if (typeof file === 'string') {
                      // file is an object URL
                      get_URL().revokeObjectURL(file);
                    } else {
                      // file is a File
                      file.remove();
                    }
                  };
                  setTimeout(revoker, arbitrary_revoke_timeout);
                },
                dispatch = function(filesaver, event_types, event) {
                  event_types = [].concat(event_types);
                  var i = event_types.length;
                  while (i--) {
                    var listener = filesaver['on' + event_types[i]];
                    if (typeof listener === 'function') {
                      try {
                        listener.call(filesaver, event || filesaver);
                      } catch (ex) {
                        throw_outside(ex);
                      }
                    }
                  }
                },
                auto_bom = function(blob) {
                  // prepend BOM for UTF-8 XML and text/* types (including HTML)
                  // note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF
                  if (
                    /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
                      blob.type
                    )
                  ) {
                    return new Blob([String.fromCharCode(0xfeff), blob], {
                      type: blob.type
                    });
                  }
                  return blob;
                },
                FileSaver = function(blob, name, no_auto_bom) {
                  if (!no_auto_bom) {
                    blob = auto_bom(blob);
                  }
                  // First try a.download, then web filesystem, then object URLs
                  var filesaver = this,
                    type = blob.type,
                    force = type === force_saveable_type,
                    object_url,
                    dispatch_all = function() {
                      dispatch(filesaver, 'writestart progress write writeend'.split(' '));
                    },
                    // on any filesys errors revert to saving with object URLs
                    fs_error = function() {
                      if ((is_chrome_ios || (force && is_safari)) && view.FileReader) {
                        // Safari doesn't allow downloading of blob urls
                        var reader = new FileReader();
                        reader.onloadend = function() {
                          var url = is_chrome_ios
                            ? reader.result
                            : reader.result.replace(
                                /^data:[^;]*;/,
                                'data:attachment/file;'
                              );
                          var popup = view.open(url, '_blank');
                          if (!popup) view.location.href = url;
                          url = undefined; // release reference before dispatching
                          filesaver.readyState = filesaver.DONE;
                          dispatch_all();
                        };
                        reader.readAsDataURL(blob);
                        filesaver.readyState = filesaver.INIT;
                        return;
                      }
                      // don't create more object URLs than needed
                      if (!object_url) {
                        object_url = get_URL().createObjectURL(blob);
                      }
                      if (force) {
                        view.location.href = object_url;
                      } else {
                        var opened = view.open(object_url, '_blank');
                        if (!opened) {
                          // Apple does not allow window.open, see https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/WorkingwithWindowsandTabs/WorkingwithWindowsandTabs.html
                          view.location.href = object_url;
                        }
                      }
                      filesaver.readyState = filesaver.DONE;
                      dispatch_all();
                      revoke(object_url);
                    };
                  filesaver.readyState = filesaver.INIT;

                  if (can_use_save_link) {
                    object_url = get_URL().createObjectURL(blob);
                    setTimeout(function() {
                      save_link.href = object_url;
                      save_link.download = name;
                      click(save_link);
                      dispatch_all();
                      revoke(object_url);
                      filesaver.readyState = filesaver.DONE;
                    });
                    return;
                  }

                  fs_error();
                },
                FS_proto = FileSaver.prototype,
                saveAs = function(blob, name, no_auto_bom) {
                  return new FileSaver(blob, name || blob.name || 'download', no_auto_bom);
                };
              // IE 10+ (native saveAs)
              if (typeof navigator !== 'undefined' && navigator.msSaveOrOpenBlob) {
                return function(blob, name, no_auto_bom) {
                  name = name || blob.name || 'download';

                  if (!no_auto_bom) {
                    blob = auto_bom(blob);
                  }
                  return navigator.msSaveOrOpenBlob(blob, name);
                };
              }

              FS_proto.abort = function() {};
              FS_proto.readyState = FS_proto.INIT = 0;
              FS_proto.WRITING = 1;
              FS_proto.DONE = 2;

              FS_proto.error = FS_proto.onwritestart = FS_proto.onprogress = FS_proto.onwrite = FS_proto.onabort = FS_proto.onerror = FS_proto.onwriteend = null;

              return saveAs;
            })(
              (typeof self !== 'undefined' && self) ||
                (typeof window !== 'undefined' && window) ||
                this.content
            );
          // `self` is undefined in Firefox for Android content script context
          // while `this` is nsIContentFrameMessageManager
          // with an attribute `content` that corresponds to the window

          if (typeof module !== 'undefined' && module.exports) {
            module.exports.saveAs = saveAs;
          } else if (
            typeof define !== 'undefined' &&
            define !== null &&
            define.amd !== null
          ) {
            define('FileSaver.js', function() {
              return saveAs;
            });
          }
        },
        {}
      ],
      27: [
        function(_dereq_, module, exports) {
          'use strict';

          function _interopDefault(ex) {
            return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
          }

          var _classCallCheck = _interopDefault(
            _dereq_('@babel/runtime/helpers/classCallCheck')
          );
          var _createClass = _interopDefault(_dereq_('@babel/runtime/helpers/createClass'));

          var arr = [];
          var each = arr.forEach;
          var slice = arr.slice;
          function defaults(obj) {
            each.call(slice.call(arguments, 1), function(source) {
              if (source) {
                for (var prop in source) {
                  if (obj[prop] === undefined) obj[prop] = source[prop];
                }
              }
            });
            return obj;
          }

          var cookie = {
            create: function create(name, value, minutes, domain) {
              var expires;

              if (minutes) {
                var date = new Date();
                date.setTime(date.getTime() + minutes * 60 * 1000);
                expires = '; expires=' + date.toGMTString();
              } else expires = '';

              domain = domain ? 'domain=' + domain + ';' : '';
              document.cookie = name + '=' + value + expires + ';' + domain + 'path=/';
            },
            read: function read(name) {
              var nameEQ = name + '=';
              var ca = document.cookie.split(';');

              for (var i = 0; i < ca.length; i++) {
                var c = ca[i];

                while (c.charAt(0) === ' ') {
                  c = c.substring(1, c.length);
                }

                if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
              }

              return null;
            },
            remove: function remove(name) {
              this.create(name, '', -1);
            }
          };
          var cookie$1 = {
            name: 'cookie',
            lookup: function lookup(options) {
              var found;

              if (options.lookupCookie && typeof document !== 'undefined') {
                var c = cookie.read(options.lookupCookie);
                if (c) found = c;
              }

              return found;
            },
            cacheUserLanguage: function cacheUserLanguage(lng, options) {
              if (options.lookupCookie && typeof document !== 'undefined') {
                cookie.create(
                  options.lookupCookie,
                  lng,
                  options.cookieMinutes,
                  options.cookieDomain
                );
              }
            }
          };

          var querystring = {
            name: 'querystring',
            lookup: function lookup(options) {
              var found;

              if (typeof window !== 'undefined') {
                var query = window.location.search.substring(1);
                var params = query.split('&');

                for (var i = 0; i < params.length; i++) {
                  var pos = params[i].indexOf('=');

                  if (pos > 0) {
                    var key = params[i].substring(0, pos);

                    if (key === options.lookupQuerystring) {
                      found = params[i].substring(pos + 1);
                    }
                  }
                }
              }

              return found;
            }
          };

          var hasLocalStorageSupport;

          try {
            hasLocalStorageSupport = window !== 'undefined' && window.localStorage !== null;
            var testKey = 'i18next.translate.boo';
            window.localStorage.setItem(testKey, 'foo');
            window.localStorage.removeItem(testKey);
          } catch (e) {
            hasLocalStorageSupport = false;
          }

          var localStorage = {
            name: 'localStorage',
            lookup: function lookup(options) {
              var found;

              if (options.lookupLocalStorage && hasLocalStorageSupport) {
                var lng = window.localStorage.getItem(options.lookupLocalStorage);
                if (lng) found = lng;
              }

              return found;
            },
            cacheUserLanguage: function cacheUserLanguage(lng, options) {
              if (options.lookupLocalStorage && hasLocalStorageSupport) {
                window.localStorage.setItem(options.lookupLocalStorage, lng);
              }
            }
          };

          var navigator$1 = {
            name: 'navigator',
            lookup: function lookup(options) {
              var found = [];

              if (typeof navigator !== 'undefined') {
                if (navigator.languages) {
                  // chrome only; not an array, so can't use .push.apply instead of iterating
                  for (var i = 0; i < navigator.languages.length; i++) {
                    found.push(navigator.languages[i]);
                  }
                }

                if (navigator.userLanguage) {
                  found.push(navigator.userLanguage);
                }

                if (navigator.language) {
                  found.push(navigator.language);
                }
              }

              return found.length > 0 ? found : undefined;
            }
          };

          var htmlTag = {
            name: 'htmlTag',
            lookup: function lookup(options) {
              var found;
              var htmlTag =
                options.htmlTag ||
                (typeof document !== 'undefined' ? document.documentElement : null);

              if (htmlTag && typeof htmlTag.getAttribute === 'function') {
                found = htmlTag.getAttribute('lang');
              }

              return found;
            }
          };

          var path = {
            name: 'path',
            lookup: function lookup(options) {
              var found;

              if (typeof window !== 'undefined') {
                var language = window.location.pathname.match(/\/([a-zA-Z-]*)/g);

                if (language instanceof Array) {
                  if (typeof options.lookupFromPathIndex === 'number') {
                    if (typeof language[options.lookupFromPathIndex] !== 'string') {
                      return undefined;
                    }

                    found = language[options.lookupFromPathIndex].replace('/', '');
                  } else {
                    found = language[0].replace('/', '');
                  }
                }
              }

              return found;
            }
          };

          var subdomain = {
            name: 'subdomain',
            lookup: function lookup(options) {
              var found;

              if (typeof window !== 'undefined') {
                var language = window.location.href.match(
                  /(?:http[s]*\:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})/gi
                );

                if (language instanceof Array) {
                  if (typeof options.lookupFromSubdomainIndex === 'number') {
                    found = language[options.lookupFromSubdomainIndex]
                      .replace('http://', '')
                      .replace('https://', '')
                      .replace('.', '');
                  } else {
                    found = language[0]
                      .replace('http://', '')
                      .replace('https://', '')
                      .replace('.', '');
                  }
                }
              }

              return found;
            }
          };

          function getDefaults() {
            return {
              order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
              lookupQuerystring: 'lng',
              lookupCookie: 'i18next',
              lookupLocalStorage: 'i18nextLng',
              // cache user language
              caches: ['localStorage'],
              excludeCacheFor: ['cimode'],
              //cookieMinutes: 10,
              //cookieDomain: 'myDomain'
              checkWhitelist: true
            };
          }

          var Browser =
            /*#__PURE__*/
            (function() {
              function Browser(services) {
                var options =
                  arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

                _classCallCheck(this, Browser);

                this.type = 'languageDetector';
                this.detectors = {};
                this.init(services, options);
              }

              _createClass(Browser, [
                {
                  key: 'init',
                  value: function init(services) {
                    var options =
                      arguments.length > 1 && arguments[1] !== undefined
                        ? arguments[1]
                        : {};
                    var i18nOptions =
                      arguments.length > 2 && arguments[2] !== undefined
                        ? arguments[2]
                        : {};
                    this.services = services;
                    this.options = defaults(options, this.options || {}, getDefaults()); // backwards compatibility

                    if (this.options.lookupFromUrlIndex)
                      this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex;
                    this.i18nOptions = i18nOptions;
                    this.addDetector(cookie$1);
                    this.addDetector(querystring);
                    this.addDetector(localStorage);
                    this.addDetector(navigator$1);
                    this.addDetector(htmlTag);
                    this.addDetector(path);
                    this.addDetector(subdomain);
                  }
                },
                {
                  key: 'addDetector',
                  value: function addDetector(detector) {
                    this.detectors[detector.name] = detector;
                  }
                },
                {
                  key: 'detect',
                  value: function detect(detectionOrder) {
                    var _this = this;

                    if (!detectionOrder) detectionOrder = this.options.order;
                    var detected = [];
                    detectionOrder.forEach(function(detectorName) {
                      if (_this.detectors[detectorName]) {
                        var lookup = _this.detectors[detectorName].lookup(_this.options);

                        if (lookup && typeof lookup === 'string') lookup = [lookup];
                        if (lookup) detected = detected.concat(lookup);
                      }
                    });
                    var found;
                    detected.forEach(function(lng) {
                      if (found) return;

                      var cleanedLng = _this.services.languageUtils.formatLanguageCode(lng);

                      if (
                        !_this.options.checkWhitelist ||
                        _this.services.languageUtils.isWhitelisted(cleanedLng)
                      )
                        found = cleanedLng;
                    });

                    if (!found) {
                      var fallbacks = this.i18nOptions.fallbackLng;
                      if (typeof fallbacks === 'string') fallbacks = [fallbacks];
                      if (!fallbacks) fallbacks = [];

                      if (Object.prototype.toString.apply(fallbacks) === '[object Array]') {
                        found = fallbacks[0];
                      } else {
                        found =
                          fallbacks[0] || (fallbacks['default'] && fallbacks['default'][0]);
                      }
                    }

                    return found;
                  }
                },
                {
                  key: 'cacheUserLanguage',
                  value: function cacheUserLanguage(lng, caches) {
                    var _this2 = this;

                    if (!caches) caches = this.options.caches;
                    if (!caches) return;
                    if (
                      this.options.excludeCacheFor &&
                      this.options.excludeCacheFor.indexOf(lng) > -1
                    )
                      return;
                    caches.forEach(function(cacheName) {
                      if (_this2.detectors[cacheName])
                        _this2.detectors[cacheName].cacheUserLanguage(lng, _this2.options);
                    });
                  }
                }
              ]);

              return Browser;
            })();

          Browser.type = 'languageDetector';

          module.exports = Browser;
        },
        {
          '@babel/runtime/helpers/classCallCheck': 28,
          '@babel/runtime/helpers/createClass': 29
        }
      ],
      28: [
        function(_dereq_, module, exports) {
          arguments[4][5][0].apply(exports, arguments);
        },
        { dup: 5 }
      ],
      29: [
        function(_dereq_, module, exports) {
          arguments[4][6][0].apply(exports, arguments);
        },
        { dup: 6 }
      ],
      30: [
        function(_dereq_, module, exports) {
          'use strict';

          function _interopDefault(ex) {
            return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
          }

          var _typeof = _interopDefault(_dereq_('@babel/runtime/helpers/typeof'));
          var _objectSpread = _interopDefault(
            _dereq_('@babel/runtime/helpers/objectSpread')
          );
          var _classCallCheck = _interopDefault(
            _dereq_('@babel/runtime/helpers/classCallCheck')
          );
          var _createClass = _interopDefault(_dereq_('@babel/runtime/helpers/createClass'));
          var _possibleConstructorReturn = _interopDefault(
            _dereq_('@babel/runtime/helpers/possibleConstructorReturn')
          );
          var _getPrototypeOf = _interopDefault(
            _dereq_('@babel/runtime/helpers/getPrototypeOf')
          );
          var _assertThisInitialized = _interopDefault(
            _dereq_('@babel/runtime/helpers/assertThisInitialized')
          );
          var _inherits = _interopDefault(_dereq_('@babel/runtime/helpers/inherits'));
          var _toConsumableArray = _interopDefault(
            _dereq_('@babel/runtime/helpers/toConsumableArray')
          );
          var _slicedToArray = _interopDefault(
            _dereq_('@babel/runtime/helpers/slicedToArray')
          );

          var consoleLogger = {
            type: 'logger',
            log: function log(args) {
              this.output('log', args);
            },
            warn: function warn(args) {
              this.output('warn', args);
            },
            error: function error(args) {
              this.output('error', args);
            },
            output: function output(type, args) {
              var _console;

              /* eslint no-console: 0 */
              if (console && console[type])
                (_console = console)[type].apply(_console, _toConsumableArray(args));
            }
          };

          var Logger =
            /*#__PURE__*/
            (function() {
              function Logger(concreteLogger) {
                var options =
                  arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

                _classCallCheck(this, Logger);

                this.init(concreteLogger, options);
              }

              _createClass(Logger, [
                {
                  key: 'init',
                  value: function init(concreteLogger) {
                    var options =
                      arguments.length > 1 && arguments[1] !== undefined
                        ? arguments[1]
                        : {};
                    this.prefix = options.prefix || 'i18next:';
                    this.logger = concreteLogger || consoleLogger;
                    this.options = options;
                    this.debug = options.debug;
                  }
                },
                {
                  key: 'setDebug',
                  value: function setDebug(bool) {
                    this.debug = bool;
                  }
                },
                {
                  key: 'log',
                  value: function log() {
                    for (
                      var _len = arguments.length, args = new Array(_len), _key = 0;
                      _key < _len;
                      _key++
                    ) {
                      args[_key] = arguments[_key];
                    }

                    return this.forward(args, 'log', '', true);
                  }
                },
                {
                  key: 'warn',
                  value: function warn() {
                    for (
                      var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;
                      _key2 < _len2;
                      _key2++
                    ) {
                      args[_key2] = arguments[_key2];
                    }

                    return this.forward(args, 'warn', '', true);
                  }
                },
                {
                  key: 'error',
                  value: function error() {
                    for (
                      var _len3 = arguments.length, args = new Array(_len3), _key3 = 0;
                      _key3 < _len3;
                      _key3++
                    ) {
                      args[_key3] = arguments[_key3];
                    }

                    return this.forward(args, 'error', '');
                  }
                },
                {
                  key: 'deprecate',
                  value: function deprecate() {
                    for (
                      var _len4 = arguments.length, args = new Array(_len4), _key4 = 0;
                      _key4 < _len4;
                      _key4++
                    ) {
                      args[_key4] = arguments[_key4];
                    }

                    return this.forward(args, 'warn', 'WARNING DEPRECATED: ', true);
                  }
                },
                {
                  key: 'forward',
                  value: function forward(args, lvl, prefix, debugOnly) {
                    if (debugOnly && !this.debug) return null;
                    if (typeof args[0] === 'string')
                      args[0] = ''
                        .concat(prefix)
                        .concat(this.prefix, ' ')
                        .concat(args[0]);
                    return this.logger[lvl](args);
                  }
                },
                {
                  key: 'create',
                  value: function create(moduleName) {
                    return new Logger(
                      this.logger,
                      _objectSpread(
                        {},
                        {
                          prefix: ''.concat(this.prefix, ':').concat(moduleName, ':')
                        },
                        this.options
                      )
                    );
                  }
                }
              ]);

              return Logger;
            })();

          var baseLogger = new Logger();

          var EventEmitter =
            /*#__PURE__*/
            (function() {
              function EventEmitter() {
                _classCallCheck(this, EventEmitter);

                this.observers = {};
              }

              _createClass(EventEmitter, [
                {
                  key: 'on',
                  value: function on(events, listener) {
                    var _this = this;

                    events.split(' ').forEach(function(event) {
                      _this.observers[event] = _this.observers[event] || [];

                      _this.observers[event].push(listener);
                    });
                    return this;
                  }
                },
                {
                  key: 'off',
                  value: function off(event, listener) {
                    if (!this.observers[event]) return;

                    if (!listener) {
                      delete this.observers[event];
                      return;
                    }

                    this.observers[event] = this.observers[event].filter(function(l) {
                      return l !== listener;
                    });
                  }
                },
                {
                  key: 'emit',
                  value: function emit(event) {
                    for (
                      var _len = arguments.length,
                        args = new Array(_len > 1 ? _len - 1 : 0),
                        _key = 1;
                      _key < _len;
                      _key++
                    ) {
                      args[_key - 1] = arguments[_key];
                    }

                    if (this.observers[event]) {
                      var cloned = [].concat(this.observers[event]);
                      cloned.forEach(function(observer) {
                        observer.apply(void 0, args);
                      });
                    }

                    if (this.observers['*']) {
                      var _cloned = [].concat(this.observers['*']);

                      _cloned.forEach(function(observer) {
                        observer.apply(observer, [event].concat(args));
                      });
                    }
                  }
                }
              ]);

              return EventEmitter;
            })();

          // http://lea.verou.me/2016/12/resolve-promises-externally-with-this-one-weird-trick/
          function defer() {
            var res;
            var rej;
            var promise = new Promise(function(resolve, reject) {
              res = resolve;
              rej = reject;
            });
            promise.resolve = res;
            promise.reject = rej;
            return promise;
          }
          function makeString(object) {
            if (object == null) return '';
            /* eslint prefer-template: 0 */

            return '' + object;
          }
          function copy(a, s, t) {
            a.forEach(function(m) {
              if (s[m]) t[m] = s[m];
            });
          }

          function getLastOfPath(object, path, Empty) {
            function cleanKey(key) {
              return key && key.indexOf('###') > -1 ? key.replace(/###/g, '.') : key;
            }

            function canNotTraverseDeeper() {
              return !object || typeof object === 'string';
            }

            var stack = typeof path !== 'string' ? [].concat(path) : path.split('.');

            while (stack.length > 1) {
              if (canNotTraverseDeeper()) return {};
              var key = cleanKey(stack.shift());
              if (!object[key] && Empty) object[key] = new Empty();
              object = object[key];
            }

            if (canNotTraverseDeeper()) return {};
            return {
              obj: object,
              k: cleanKey(stack.shift())
            };
          }

          function setPath(object, path, newValue) {
            var _getLastOfPath = getLastOfPath(object, path, Object),
              obj = _getLastOfPath.obj,
              k = _getLastOfPath.k;

            obj[k] = newValue;
          }
          function pushPath(object, path, newValue, concat) {
            var _getLastOfPath2 = getLastOfPath(object, path, Object),
              obj = _getLastOfPath2.obj,
              k = _getLastOfPath2.k;

            obj[k] = obj[k] || [];
            if (concat) obj[k] = obj[k].concat(newValue);
            if (!concat) obj[k].push(newValue);
          }
          function getPath(object, path) {
            var _getLastOfPath3 = getLastOfPath(object, path),
              obj = _getLastOfPath3.obj,
              k = _getLastOfPath3.k;

            if (!obj) return undefined;
            return obj[k];
          }
          function getPathWithDefaults(data, defaultData, key) {
            var value = getPath(data, key);

            if (value !== undefined) {
              return value;
            } // Fallback to default values

            return getPath(defaultData, key);
          }
          function deepExtend(target, source, overwrite) {
            /* eslint no-restricted-syntax: 0 */
            for (var prop in source) {
              if (prop in target) {
                // If we reached a leaf string in target or source then replace with source or skip depending on the 'overwrite' switch
                if (
                  typeof target[prop] === 'string' ||
                  target[prop] instanceof String ||
                  typeof source[prop] === 'string' ||
                  source[prop] instanceof String
                ) {
                  if (overwrite) target[prop] = source[prop];
                } else {
                  deepExtend(target[prop], source[prop], overwrite);
                }
              } else {
                target[prop] = source[prop];
              }
            }

            return target;
          }
          function regexEscape(str) {
            /* eslint no-useless-escape: 0 */
            return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
          }
          /* eslint-disable */

          var _entityMap = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;',
            '/': '&#x2F;'
          };
          /* eslint-enable */

          function escape(data) {
            if (typeof data === 'string') {
              return data.replace(/[&<>"'\/]/g, function(s) {
                return _entityMap[s];
              });
            }

            return data;
          }

          var ResourceStore =
            /*#__PURE__*/
            (function(_EventEmitter) {
              _inherits(ResourceStore, _EventEmitter);

              function ResourceStore(data) {
                var _this;

                var options =
                  arguments.length > 1 && arguments[1] !== undefined
                    ? arguments[1]
                    : {
                        ns: ['translation'],
                        defaultNS: 'translation'
                      };

                _classCallCheck(this, ResourceStore);

                _this = _possibleConstructorReturn(
                  this,
                  _getPrototypeOf(ResourceStore).call(this)
                );
                EventEmitter.call(_assertThisInitialized(_this)); // <=IE10 fix (unable to call parent constructor)

                _this.data = data || {};
                _this.options = options;

                if (_this.options.keySeparator === undefined) {
                  _this.options.keySeparator = '.';
                }

                return _this;
              }

              _createClass(ResourceStore, [
                {
                  key: 'addNamespaces',
                  value: function addNamespaces(ns) {
                    if (this.options.ns.indexOf(ns) < 0) {
                      this.options.ns.push(ns);
                    }
                  }
                },
                {
                  key: 'removeNamespaces',
                  value: function removeNamespaces(ns) {
                    var index = this.options.ns.indexOf(ns);

                    if (index > -1) {
                      this.options.ns.splice(index, 1);
                    }
                  }
                },
                {
                  key: 'getResource',
                  value: function getResource(lng, ns, key) {
                    var options =
                      arguments.length > 3 && arguments[3] !== undefined
                        ? arguments[3]
                        : {};
                    var keySeparator =
                      options.keySeparator !== undefined
                        ? options.keySeparator
                        : this.options.keySeparator;
                    var path = [lng, ns];
                    if (key && typeof key !== 'string') path = path.concat(key);
                    if (key && typeof key === 'string')
                      path = path.concat(keySeparator ? key.split(keySeparator) : key);

                    if (lng.indexOf('.') > -1) {
                      path = lng.split('.');
                    }

                    return getPath(this.data, path);
                  }
                },
                {
                  key: 'addResource',
                  value: function addResource(lng, ns, key, value) {
                    var options =
                      arguments.length > 4 && arguments[4] !== undefined
                        ? arguments[4]
                        : {
                            silent: false
                          };
                    var keySeparator = this.options.keySeparator;
                    if (keySeparator === undefined) keySeparator = '.';
                    var path = [lng, ns];
                    if (key)
                      path = path.concat(keySeparator ? key.split(keySeparator) : key);

                    if (lng.indexOf('.') > -1) {
                      path = lng.split('.');
                      value = ns;
                      ns = path[1];
                    }

                    this.addNamespaces(ns);
                    setPath(this.data, path, value);
                    if (!options.silent) this.emit('added', lng, ns, key, value);
                  }
                },
                {
                  key: 'addResources',
                  value: function addResources(lng, ns, resources) {
                    var options =
                      arguments.length > 3 && arguments[3] !== undefined
                        ? arguments[3]
                        : {
                            silent: false
                          };

                    /* eslint no-restricted-syntax: 0 */
                    for (var m in resources) {
                      if (
                        typeof resources[m] === 'string' ||
                        Object.prototype.toString.apply(resources[m]) === '[object Array]'
                      )
                        this.addResource(lng, ns, m, resources[m], {
                          silent: true
                        });
                    }

                    if (!options.silent) this.emit('added', lng, ns, resources);
                  }
                },
                {
                  key: 'addResourceBundle',
                  value: function addResourceBundle(lng, ns, resources, deep, overwrite) {
                    var options =
                      arguments.length > 5 && arguments[5] !== undefined
                        ? arguments[5]
                        : {
                            silent: false
                          };
                    var path = [lng, ns];

                    if (lng.indexOf('.') > -1) {
                      path = lng.split('.');
                      deep = resources;
                      resources = ns;
                      ns = path[1];
                    }

                    this.addNamespaces(ns);
                    var pack = getPath(this.data, path) || {};

                    if (deep) {
                      deepExtend(pack, resources, overwrite);
                    } else {
                      pack = _objectSpread({}, pack, resources);
                    }

                    setPath(this.data, path, pack);
                    if (!options.silent) this.emit('added', lng, ns, resources);
                  }
                },
                {
                  key: 'removeResourceBundle',
                  value: function removeResourceBundle(lng, ns) {
                    if (this.hasResourceBundle(lng, ns)) {
                      delete this.data[lng][ns];
                    }

                    this.removeNamespaces(ns);
                    this.emit('removed', lng, ns);
                  }
                },
                {
                  key: 'hasResourceBundle',
                  value: function hasResourceBundle(lng, ns) {
                    return this.getResource(lng, ns) !== undefined;
                  }
                },
                {
                  key: 'getResourceBundle',
                  value: function getResourceBundle(lng, ns) {
                    if (!ns) ns = this.options.defaultNS; // COMPATIBILITY: remove extend in v2.1.0

                    if (this.options.compatibilityAPI === 'v1')
                      return _objectSpread({}, {}, this.getResource(lng, ns));
                    return this.getResource(lng, ns);
                  }
                },
                {
                  key: 'getDataByLanguage',
                  value: function getDataByLanguage(lng) {
                    return this.data[lng];
                  }
                },
                {
                  key: 'toJSON',
                  value: function toJSON() {
                    return this.data;
                  }
                }
              ]);

              return ResourceStore;
            })(EventEmitter);

          var postProcessor = {
            processors: {},
            addPostProcessor: function addPostProcessor(module) {
              this.processors[module.name] = module;
            },
            handle: function handle(processors, value, key, options, translator) {
              var _this = this;

              processors.forEach(function(processor) {
                if (_this.processors[processor])
                  value = _this.processors[processor].process(
                    value,
                    key,
                    options,
                    translator
                  );
              });
              return value;
            }
          };

          var checkedLoadedFor = {};

          var Translator =
            /*#__PURE__*/
            (function(_EventEmitter) {
              _inherits(Translator, _EventEmitter);

              function Translator(services) {
                var _this;

                var options =
                  arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

                _classCallCheck(this, Translator);

                _this = _possibleConstructorReturn(
                  this,
                  _getPrototypeOf(Translator).call(this)
                );
                EventEmitter.call(_assertThisInitialized(_this)); // <=IE10 fix (unable to call parent constructor)

                copy(
                  [
                    'resourceStore',
                    'languageUtils',
                    'pluralResolver',
                    'interpolator',
                    'backendConnector',
                    'i18nFormat',
                    'utils'
                  ],
                  services,
                  _assertThisInitialized(_this)
                );
                _this.options = options;

                if (_this.options.keySeparator === undefined) {
                  _this.options.keySeparator = '.';
                }

                _this.logger = baseLogger.create('translator');
                return _this;
              }

              _createClass(Translator, [
                {
                  key: 'changeLanguage',
                  value: function changeLanguage(lng) {
                    if (lng) this.language = lng;
                  }
                },
                {
                  key: 'exists',
                  value: function exists(key) {
                    var options =
                      arguments.length > 1 && arguments[1] !== undefined
                        ? arguments[1]
                        : {
                            interpolation: {}
                          };
                    var resolved = this.resolve(key, options);
                    return resolved && resolved.res !== undefined;
                  }
                },
                {
                  key: 'extractFromKey',
                  value: function extractFromKey(key, options) {
                    var nsSeparator = options.nsSeparator || this.options.nsSeparator;
                    if (nsSeparator === undefined) nsSeparator = ':';
                    var keySeparator =
                      options.keySeparator !== undefined
                        ? options.keySeparator
                        : this.options.keySeparator;
                    var namespaces = options.ns || this.options.defaultNS;

                    if (nsSeparator && key.indexOf(nsSeparator) > -1) {
                      var parts = key.split(nsSeparator);
                      if (
                        nsSeparator !== keySeparator ||
                        (nsSeparator === keySeparator &&
                          this.options.ns.indexOf(parts[0]) > -1)
                      )
                        namespaces = parts.shift();
                      key = parts.join(keySeparator);
                    }

                    if (typeof namespaces === 'string') namespaces = [namespaces];
                    return {
                      key: key,
                      namespaces: namespaces
                    };
                  }
                },
                {
                  key: 'translate',
                  value: function translate(keys, options) {
                    var _this2 = this;

                    if (
                      _typeof(options) !== 'object' &&
                      this.options.overloadTranslationOptionHandler
                    ) {
                      /* eslint prefer-rest-params: 0 */
                      options = this.options.overloadTranslationOptionHandler(arguments);
                    }

                    if (!options) options = {}; // non valid keys handling

                    if (
                      keys === undefined ||
                      keys === null
                      /* || keys === ''*/
                    )
                      return '';
                    if (!Array.isArray(keys)) keys = [String(keys)]; // separators

                    var keySeparator =
                      options.keySeparator !== undefined
                        ? options.keySeparator
                        : this.options.keySeparator; // get namespace(s)

                    var _this$extractFromKey = this.extractFromKey(
                        keys[keys.length - 1],
                        options
                      ),
                      key = _this$extractFromKey.key,
                      namespaces = _this$extractFromKey.namespaces;

                    var namespace = namespaces[namespaces.length - 1]; // return key on CIMode

                    var lng = options.lng || this.language;
                    var appendNamespaceToCIMode =
                      options.appendNamespaceToCIMode ||
                      this.options.appendNamespaceToCIMode;

                    if (lng && lng.toLowerCase() === 'cimode') {
                      if (appendNamespaceToCIMode) {
                        var nsSeparator = options.nsSeparator || this.options.nsSeparator;
                        return namespace + nsSeparator + key;
                      }

                      return key;
                    } // resolve from store

                    var resolved = this.resolve(keys, options);
                    var res = resolved && resolved.res;
                    var resUsedKey = (resolved && resolved.usedKey) || key;
                    var resExactUsedKey = (resolved && resolved.exactUsedKey) || key;
                    var resType = Object.prototype.toString.apply(res);
                    var noObject = [
                      '[object Number]',
                      '[object Function]',
                      '[object RegExp]'
                    ];
                    var joinArrays =
                      options.joinArrays !== undefined
                        ? options.joinArrays
                        : this.options.joinArrays; // object

                    var handleAsObjectInI18nFormat =
                      !this.i18nFormat || this.i18nFormat.handleAsObject;
                    var handleAsObject =
                      typeof res !== 'string' &&
                      typeof res !== 'boolean' &&
                      typeof res !== 'number';

                    if (
                      handleAsObjectInI18nFormat &&
                      res &&
                      handleAsObject &&
                      noObject.indexOf(resType) < 0 &&
                      !(typeof joinArrays === 'string' && resType === '[object Array]')
                    ) {
                      if (!options.returnObjects && !this.options.returnObjects) {
                        this.logger.warn(
                          'accessing an object - but returnObjects options is not enabled!'
                        );
                        return this.options.returnedObjectHandler
                          ? this.options.returnedObjectHandler(resUsedKey, res, options)
                          : "key '"
                              .concat(key, ' (')
                              .concat(
                                this.language,
                                ")' returned an object instead of string."
                              );
                      } // if we got a separator we loop over children - else we just return object as is
                      // as having it set to false means no hierarchy so no lookup for nested values

                      if (keySeparator) {
                        var resTypeIsArray = resType === '[object Array]';
                        var copy$$1 = resTypeIsArray ? [] : {}; // apply child translation on a copy

                        /* eslint no-restricted-syntax: 0 */

                        var newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;

                        for (var m in res) {
                          if (Object.prototype.hasOwnProperty.call(res, m)) {
                            var deepKey = ''
                              .concat(newKeyToUse)
                              .concat(keySeparator)
                              .concat(m);
                            copy$$1[m] = this.translate(
                              deepKey,
                              _objectSpread({}, options, {
                                joinArrays: false,
                                ns: namespaces
                              })
                            );
                            if (copy$$1[m] === deepKey) copy$$1[m] = res[m]; // if nothing found use orginal value as fallback
                          }
                        }

                        res = copy$$1;
                      }
                    } else if (
                      handleAsObjectInI18nFormat &&
                      typeof joinArrays === 'string' &&
                      resType === '[object Array]'
                    ) {
                      // array special treatment
                      res = res.join(joinArrays);
                      if (res) res = this.extendTranslation(res, keys, options);
                    } else {
                      // string, empty or null
                      var usedDefault = false;
                      var usedKey = false; // fallback value

                      if (!this.isValidLookup(res) && options.defaultValue !== undefined) {
                        usedDefault = true;

                        if (options.count !== undefined) {
                          var suffix = this.pluralResolver.getSuffix(lng, options.count);
                          res = options['defaultValue'.concat(suffix)];
                        }

                        if (!res) res = options.defaultValue;
                      }

                      if (!this.isValidLookup(res)) {
                        usedKey = true;
                        res = key;
                      } // save missing

                      var updateMissing =
                        options.defaultValue &&
                        options.defaultValue !== res &&
                        this.options.updateMissing;

                      if (usedKey || usedDefault || updateMissing) {
                        this.logger.log(
                          updateMissing ? 'updateKey' : 'missingKey',
                          lng,
                          namespace,
                          key,
                          updateMissing ? options.defaultValue : res
                        );
                        var lngs = [];
                        var fallbackLngs = this.languageUtils.getFallbackCodes(
                          this.options.fallbackLng,
                          options.lng || this.language
                        );

                        if (
                          this.options.saveMissingTo === 'fallback' &&
                          fallbackLngs &&
                          fallbackLngs[0]
                        ) {
                          for (var i = 0; i < fallbackLngs.length; i++) {
                            lngs.push(fallbackLngs[i]);
                          }
                        } else if (this.options.saveMissingTo === 'all') {
                          lngs = this.languageUtils.toResolveHierarchy(
                            options.lng || this.language
                          );
                        } else {
                          lngs.push(options.lng || this.language);
                        }

                        var send = function send(l, k) {
                          if (_this2.options.missingKeyHandler) {
                            _this2.options.missingKeyHandler(
                              l,
                              namespace,
                              k,
                              updateMissing ? options.defaultValue : res,
                              updateMissing,
                              options
                            );
                          } else if (
                            _this2.backendConnector &&
                            _this2.backendConnector.saveMissing
                          ) {
                            _this2.backendConnector.saveMissing(
                              l,
                              namespace,
                              k,
                              updateMissing ? options.defaultValue : res,
                              updateMissing,
                              options
                            );
                          }

                          _this2.emit('missingKey', l, namespace, k, res);
                        };

                        if (this.options.saveMissing) {
                          var needsPluralHandling =
                            options.count !== undefined &&
                            typeof options.count !== 'string';

                          if (this.options.saveMissingPlurals && needsPluralHandling) {
                            lngs.forEach(function(l) {
                              var plurals = _this2.pluralResolver.getPluralFormsOfKey(
                                l,
                                key
                              );

                              plurals.forEach(function(p) {
                                return send([l], p);
                              });
                            });
                          } else {
                            send(lngs, key);
                          }
                        }
                      } // extend

                      res = this.extendTranslation(res, keys, options, resolved); // append namespace if still key

                      if (
                        usedKey &&
                        res === key &&
                        this.options.appendNamespaceToMissingKey
                      )
                        res = ''.concat(namespace, ':').concat(key); // parseMissingKeyHandler

                      if (usedKey && this.options.parseMissingKeyHandler)
                        res = this.options.parseMissingKeyHandler(res);
                    } // return

                    return res;
                  }
                },
                {
                  key: 'extendTranslation',
                  value: function extendTranslation(res, key, options, resolved) {
                    var _this3 = this;

                    if (this.i18nFormat && this.i18nFormat.parse) {
                      res = this.i18nFormat.parse(
                        res,
                        options,
                        resolved.usedLng,
                        resolved.usedNS,
                        resolved.usedKey,
                        {
                          resolved: resolved
                        }
                      );
                    } else if (!options.skipInterpolation) {
                      // i18next.parsing
                      if (options.interpolation)
                        this.interpolator.init(
                          _objectSpread({}, options, {
                            interpolation: _objectSpread(
                              {},
                              this.options.interpolation,
                              options.interpolation
                            )
                          })
                        ); // interpolate

                      var data =
                        options.replace && typeof options.replace !== 'string'
                          ? options.replace
                          : options;
                      if (this.options.interpolation.defaultVariables)
                        data = _objectSpread(
                          {},
                          this.options.interpolation.defaultVariables,
                          data
                        );
                      res = this.interpolator.interpolate(
                        res,
                        data,
                        options.lng || this.language,
                        options
                      ); // nesting

                      if (options.nest !== false)
                        res = this.interpolator.nest(
                          res,
                          function() {
                            return _this3.translate.apply(_this3, arguments);
                          },
                          options
                        );
                      if (options.interpolation) this.interpolator.reset();
                    } // post process

                    var postProcess = options.postProcess || this.options.postProcess;
                    var postProcessorNames =
                      typeof postProcess === 'string' ? [postProcess] : postProcess;

                    if (
                      res !== undefined &&
                      res !== null &&
                      postProcessorNames &&
                      postProcessorNames.length &&
                      options.applyPostProcessor !== false
                    ) {
                      res = postProcessor.handle(
                        postProcessorNames,
                        res,
                        key,
                        this.options && this.options.postProcessPassResolved
                          ? _objectSpread(
                              {
                                i18nResolved: resolved
                              },
                              options
                            )
                          : options,
                        this
                      );
                    }

                    return res;
                  }
                },
                {
                  key: 'resolve',
                  value: function resolve(keys) {
                    var _this4 = this;

                    var options =
                      arguments.length > 1 && arguments[1] !== undefined
                        ? arguments[1]
                        : {};
                    var found;
                    var usedKey; // plain key

                    var exactUsedKey; // key with context / plural

                    var usedLng;
                    var usedNS;
                    if (typeof keys === 'string') keys = [keys]; // forEach possible key

                    keys.forEach(function(k) {
                      if (_this4.isValidLookup(found)) return;

                      var extracted = _this4.extractFromKey(k, options);

                      var key = extracted.key;
                      usedKey = key;
                      var namespaces = extracted.namespaces;
                      if (_this4.options.fallbackNS)
                        namespaces = namespaces.concat(_this4.options.fallbackNS);
                      var needsPluralHandling =
                        options.count !== undefined && typeof options.count !== 'string';
                      var needsContextHandling =
                        options.context !== undefined &&
                        typeof options.context === 'string' &&
                        options.context !== '';
                      var codes = options.lngs
                        ? options.lngs
                        : _this4.languageUtils.toResolveHierarchy(
                            options.lng || _this4.language,
                            options.fallbackLng
                          );
                      namespaces.forEach(function(ns) {
                        if (_this4.isValidLookup(found)) return;
                        usedNS = ns;

                        if (
                          !checkedLoadedFor[''.concat(codes[0], '-').concat(ns)] &&
                          _this4.utils &&
                          _this4.utils.hasLoadedNamespace &&
                          !_this4.utils.hasLoadedNamespace(usedNS)
                        ) {
                          checkedLoadedFor[''.concat(codes[0], '-').concat(ns)] = true;

                          _this4.logger.warn(
                            'key "'
                              .concat(usedKey, '" for namespace "')
                              .concat(usedNS, '" for languages "')
                              .concat(
                                codes.join(', '),
                                '" won\'t get resolved as namespace was not yet loaded'
                              ),
                            'This means something IS WRONG in your application setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
                          );
                        }

                        codes.forEach(function(code) {
                          if (_this4.isValidLookup(found)) return;
                          usedLng = code;
                          var finalKey = key;
                          var finalKeys = [finalKey];

                          if (_this4.i18nFormat && _this4.i18nFormat.addLookupKeys) {
                            _this4.i18nFormat.addLookupKeys(
                              finalKeys,
                              key,
                              code,
                              ns,
                              options
                            );
                          } else {
                            var pluralSuffix;
                            if (needsPluralHandling)
                              pluralSuffix = _this4.pluralResolver.getSuffix(
                                code,
                                options.count
                              ); // fallback for plural if context not found

                            if (needsPluralHandling && needsContextHandling)
                              finalKeys.push(finalKey + pluralSuffix); // get key for context if needed

                            if (needsContextHandling)
                              finalKeys.push(
                                (finalKey += ''
                                  .concat(_this4.options.contextSeparator)
                                  .concat(options.context))
                              ); // get key for plural if needed

                            if (needsPluralHandling)
                              finalKeys.push((finalKey += pluralSuffix));
                          } // iterate over finalKeys starting with most specific pluralkey (-> contextkey only) -> singularkey only

                          var possibleKey;
                          /* eslint no-cond-assign: 0 */

                          while ((possibleKey = finalKeys.pop())) {
                            if (!_this4.isValidLookup(found)) {
                              exactUsedKey = possibleKey;
                              found = _this4.getResource(code, ns, possibleKey, options);
                            }
                          }
                        });
                      });
                    });
                    return {
                      res: found,
                      usedKey: usedKey,
                      exactUsedKey: exactUsedKey,
                      usedLng: usedLng,
                      usedNS: usedNS
                    };
                  }
                },
                {
                  key: 'isValidLookup',
                  value: function isValidLookup(res) {
                    return (
                      res !== undefined &&
                      !(!this.options.returnNull && res === null) &&
                      !(!this.options.returnEmptyString && res === '')
                    );
                  }
                },
                {
                  key: 'getResource',
                  value: function getResource(code, ns, key) {
                    var options =
                      arguments.length > 3 && arguments[3] !== undefined
                        ? arguments[3]
                        : {};
                    if (this.i18nFormat && this.i18nFormat.getResource)
                      return this.i18nFormat.getResource(code, ns, key, options);
                    return this.resourceStore.getResource(code, ns, key, options);
                  }
                }
              ]);

              return Translator;
            })(EventEmitter);

          function capitalize(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
          }

          var LanguageUtil =
            /*#__PURE__*/
            (function() {
              function LanguageUtil(options) {
                _classCallCheck(this, LanguageUtil);

                this.options = options;
                this.whitelist = this.options.whitelist || false;
                this.logger = baseLogger.create('languageUtils');
              }

              _createClass(LanguageUtil, [
                {
                  key: 'getScriptPartFromCode',
                  value: function getScriptPartFromCode(code) {
                    if (!code || code.indexOf('-') < 0) return null;
                    var p = code.split('-');
                    if (p.length === 2) return null;
                    p.pop();
                    return this.formatLanguageCode(p.join('-'));
                  }
                },
                {
                  key: 'getLanguagePartFromCode',
                  value: function getLanguagePartFromCode(code) {
                    if (!code || code.indexOf('-') < 0) return code;
                    var p = code.split('-');
                    return this.formatLanguageCode(p[0]);
                  }
                },
                {
                  key: 'formatLanguageCode',
                  value: function formatLanguageCode(code) {
                    // http://www.iana.org/assignments/language-tags/language-tags.xhtml
                    if (typeof code === 'string' && code.indexOf('-') > -1) {
                      var specialCases = [
                        'hans',
                        'hant',
                        'latn',
                        'cyrl',
                        'cans',
                        'mong',
                        'arab'
                      ];
                      var p = code.split('-');

                      if (this.options.lowerCaseLng) {
                        p = p.map(function(part) {
                          return part.toLowerCase();
                        });
                      } else if (p.length === 2) {
                        p[0] = p[0].toLowerCase();
                        p[1] = p[1].toUpperCase();
                        if (specialCases.indexOf(p[1].toLowerCase()) > -1)
                          p[1] = capitalize(p[1].toLowerCase());
                      } else if (p.length === 3) {
                        p[0] = p[0].toLowerCase(); // if lenght 2 guess it's a country

                        if (p[1].length === 2) p[1] = p[1].toUpperCase();
                        if (p[0] !== 'sgn' && p[2].length === 2) p[2] = p[2].toUpperCase();
                        if (specialCases.indexOf(p[1].toLowerCase()) > -1)
                          p[1] = capitalize(p[1].toLowerCase());
                        if (specialCases.indexOf(p[2].toLowerCase()) > -1)
                          p[2] = capitalize(p[2].toLowerCase());
                      }

                      return p.join('-');
                    }

                    return this.options.cleanCode || this.options.lowerCaseLng
                      ? code.toLowerCase()
                      : code;
                  }
                },
                {
                  key: 'isWhitelisted',
                  value: function isWhitelisted(code) {
                    if (
                      this.options.load === 'languageOnly' ||
                      this.options.nonExplicitWhitelist
                    ) {
                      code = this.getLanguagePartFromCode(code);
                    }

                    return (
                      !this.whitelist ||
                      !this.whitelist.length ||
                      this.whitelist.indexOf(code) > -1
                    );
                  }
                },
                {
                  key: 'getFallbackCodes',
                  value: function getFallbackCodes(fallbacks, code) {
                    if (!fallbacks) return [];
                    if (typeof fallbacks === 'string') fallbacks = [fallbacks];
                    if (Object.prototype.toString.apply(fallbacks) === '[object Array]')
                      return fallbacks;
                    if (!code) return fallbacks['default'] || []; // asume we have an object defining fallbacks

                    var found = fallbacks[code];
                    if (!found) found = fallbacks[this.getScriptPartFromCode(code)];
                    if (!found) found = fallbacks[this.formatLanguageCode(code)];
                    if (!found) found = fallbacks['default'];
                    return found || [];
                  }
                },
                {
                  key: 'toResolveHierarchy',
                  value: function toResolveHierarchy(code, fallbackCode) {
                    var _this = this;

                    var fallbackCodes = this.getFallbackCodes(
                      fallbackCode || this.options.fallbackLng || [],
                      code
                    );
                    var codes = [];

                    var addCode = function addCode(c) {
                      if (!c) return;

                      if (_this.isWhitelisted(c)) {
                        codes.push(c);
                      } else {
                        _this.logger.warn(
                          'rejecting non-whitelisted language code: '.concat(c)
                        );
                      }
                    };

                    if (typeof code === 'string' && code.indexOf('-') > -1) {
                      if (this.options.load !== 'languageOnly')
                        addCode(this.formatLanguageCode(code));
                      if (
                        this.options.load !== 'languageOnly' &&
                        this.options.load !== 'currentOnly'
                      )
                        addCode(this.getScriptPartFromCode(code));
                      if (this.options.load !== 'currentOnly')
                        addCode(this.getLanguagePartFromCode(code));
                    } else if (typeof code === 'string') {
                      addCode(this.formatLanguageCode(code));
                    }

                    fallbackCodes.forEach(function(fc) {
                      if (codes.indexOf(fc) < 0) addCode(_this.formatLanguageCode(fc));
                    });
                    return codes;
                  }
                }
              ]);

              return LanguageUtil;
            })();

          /* eslint-disable */

          var sets = [
            {
              lngs: [
                'ach',
                'ak',
                'am',
                'arn',
                'br',
                'fil',
                'gun',
                'ln',
                'mfe',
                'mg',
                'mi',
                'oc',
                'pt',
                'pt-BR',
                'tg',
                'ti',
                'tr',
                'uz',
                'wa'
              ],
              nr: [1, 2],
              fc: 1
            },
            {
              lngs: [
                'af',
                'an',
                'ast',
                'az',
                'bg',
                'bn',
                'ca',
                'da',
                'de',
                'dev',
                'el',
                'en',
                'eo',
                'es',
                'et',
                'eu',
                'fi',
                'fo',
                'fur',
                'fy',
                'gl',
                'gu',
                'ha',
                'hi',
                'hu',
                'hy',
                'ia',
                'it',
                'kn',
                'ku',
                'lb',
                'mai',
                'ml',
                'mn',
                'mr',
                'nah',
                'nap',
                'nb',
                'ne',
                'nl',
                'nn',
                'no',
                'nso',
                'pa',
                'pap',
                'pms',
                'ps',
                'pt-PT',
                'rm',
                'sco',
                'se',
                'si',
                'so',
                'son',
                'sq',
                'sv',
                'sw',
                'ta',
                'te',
                'tk',
                'ur',
                'yo'
              ],
              nr: [1, 2],
              fc: 2
            },
            {
              lngs: [
                'ay',
                'bo',
                'cgg',
                'fa',
                'id',
                'ja',
                'jbo',
                'ka',
                'kk',
                'km',
                'ko',
                'ky',
                'lo',
                'ms',
                'sah',
                'su',
                'th',
                'tt',
                'ug',
                'vi',
                'wo',
                'zh'
              ],
              nr: [1],
              fc: 3
            },
            {
              lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'],
              nr: [1, 2, 5],
              fc: 4
            },
            {
              lngs: ['ar'],
              nr: [0, 1, 2, 3, 11, 100],
              fc: 5
            },
            {
              lngs: ['cs', 'sk'],
              nr: [1, 2, 5],
              fc: 6
            },
            {
              lngs: ['csb', 'pl'],
              nr: [1, 2, 5],
              fc: 7
            },
            {
              lngs: ['cy'],
              nr: [1, 2, 3, 8],
              fc: 8
            },
            {
              lngs: ['fr'],
              nr: [1, 2],
              fc: 9
            },
            {
              lngs: ['ga'],
              nr: [1, 2, 3, 7, 11],
              fc: 10
            },
            {
              lngs: ['gd'],
              nr: [1, 2, 3, 20],
              fc: 11
            },
            {
              lngs: ['is'],
              nr: [1, 2],
              fc: 12
            },
            {
              lngs: ['jv'],
              nr: [0, 1],
              fc: 13
            },
            {
              lngs: ['kw'],
              nr: [1, 2, 3, 4],
              fc: 14
            },
            {
              lngs: ['lt'],
              nr: [1, 2, 10],
              fc: 15
            },
            {
              lngs: ['lv'],
              nr: [1, 2, 0],
              fc: 16
            },
            {
              lngs: ['mk'],
              nr: [1, 2],
              fc: 17
            },
            {
              lngs: ['mnk'],
              nr: [0, 1, 2],
              fc: 18
            },
            {
              lngs: ['mt'],
              nr: [1, 2, 11, 20],
              fc: 19
            },
            {
              lngs: ['or'],
              nr: [2, 1],
              fc: 2
            },
            {
              lngs: ['ro'],
              nr: [1, 2, 20],
              fc: 20
            },
            {
              lngs: ['sl'],
              nr: [5, 1, 2, 3],
              fc: 21
            },
            {
              lngs: ['he'],
              nr: [1, 2, 20, 21],
              fc: 22
            }
          ];
          var _rulesPluralsTypes = {
            1: function _(n) {
              return Number(n > 1);
            },
            2: function _(n) {
              return Number(n != 1);
            },
            3: function _(n) {
              return 0;
            },
            4: function _(n) {
              return Number(
                n % 10 == 1 && n % 100 != 11
                  ? 0
                  : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2
              );
            },
            5: function _(n) {
              return Number(
                n === 0
                  ? 0
                  : n == 1
                    ? 1
                    : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5
              );
            },
            6: function _(n) {
              return Number(n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2);
            },
            7: function _(n) {
              return Number(
                n == 1
                  ? 0
                  : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2
              );
            },
            8: function _(n) {
              return Number(n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3);
            },
            9: function _(n) {
              return Number(n >= 2);
            },
            10: function _(n) {
              return Number(n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4);
            },
            11: function _(n) {
              return Number(
                n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3
              );
            },
            12: function _(n) {
              return Number(n % 10 != 1 || n % 100 == 11);
            },
            13: function _(n) {
              return Number(n !== 0);
            },
            14: function _(n) {
              return Number(n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3);
            },
            15: function _(n) {
              return Number(
                n % 10 == 1 && n % 100 != 11
                  ? 0
                  : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2
              );
            },
            16: function _(n) {
              return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2);
            },
            17: function _(n) {
              return Number(n == 1 || n % 10 == 1 ? 0 : 1);
            },
            18: function _(n) {
              return Number(n == 0 ? 0 : n == 1 ? 1 : 2);
            },
            19: function _(n) {
              return Number(
                n == 1
                  ? 0
                  : n === 0 || (n % 100 > 1 && n % 100 < 11)
                    ? 1
                    : n % 100 > 10 && n % 100 < 20 ? 2 : 3
              );
            },
            20: function _(n) {
              return Number(n == 1 ? 0 : n === 0 || (n % 100 > 0 && n % 100 < 20) ? 1 : 2);
            },
            21: function _(n) {
              return Number(
                n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0
              );
            },
            22: function _(n) {
              return Number(
                n === 1 ? 0 : n === 2 ? 1 : (n < 0 || n > 10) && n % 10 == 0 ? 2 : 3
              );
            }
          };
          /* eslint-enable */

          function createRules() {
            var rules = {};
            sets.forEach(function(set) {
              set.lngs.forEach(function(l) {
                rules[l] = {
                  numbers: set.nr,
                  plurals: _rulesPluralsTypes[set.fc]
                };
              });
            });
            return rules;
          }

          var PluralResolver =
            /*#__PURE__*/
            (function() {
              function PluralResolver(languageUtils) {
                var options =
                  arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

                _classCallCheck(this, PluralResolver);

                this.languageUtils = languageUtils;
                this.options = options;
                this.logger = baseLogger.create('pluralResolver');
                this.rules = createRules();
              }

              _createClass(PluralResolver, [
                {
                  key: 'addRule',
                  value: function addRule(lng, obj) {
                    this.rules[lng] = obj;
                  }
                },
                {
                  key: 'getRule',
                  value: function getRule(code) {
                    return (
                      this.rules[code] ||
                      this.rules[this.languageUtils.getLanguagePartFromCode(code)]
                    );
                  }
                },
                {
                  key: 'needsPlural',
                  value: function needsPlural(code) {
                    var rule = this.getRule(code);
                    return rule && rule.numbers.length > 1;
                  }
                },
                {
                  key: 'getPluralFormsOfKey',
                  value: function getPluralFormsOfKey(code, key) {
                    var _this = this;

                    var ret = [];
                    var rule = this.getRule(code);
                    if (!rule) return ret;
                    rule.numbers.forEach(function(n) {
                      var suffix = _this.getSuffix(code, n);

                      ret.push(''.concat(key).concat(suffix));
                    });
                    return ret;
                  }
                },
                {
                  key: 'getSuffix',
                  value: function getSuffix(code, count) {
                    var _this2 = this;

                    var rule = this.getRule(code);

                    if (rule) {
                      // if (rule.numbers.length === 1) return ''; // only singular
                      var idx = rule.noAbs
                        ? rule.plurals(count)
                        : rule.plurals(Math.abs(count));
                      var suffix = rule.numbers[idx]; // special treatment for lngs only having singular and plural

                      if (
                        this.options.simplifyPluralSuffix &&
                        rule.numbers.length === 2 &&
                        rule.numbers[0] === 1
                      ) {
                        if (suffix === 2) {
                          suffix = 'plural';
                        } else if (suffix === 1) {
                          suffix = '';
                        }
                      }

                      var returnSuffix = function returnSuffix() {
                        return _this2.options.prepend && suffix.toString()
                          ? _this2.options.prepend + suffix.toString()
                          : suffix.toString();
                      }; // COMPATIBILITY JSON
                      // v1

                      if (this.options.compatibilityJSON === 'v1') {
                        if (suffix === 1) return '';
                        if (typeof suffix === 'number')
                          return '_plural_'.concat(suffix.toString());
                        return returnSuffix();
                      } else if (
                        /* v2 */
                        this.options.compatibilityJSON === 'v2'
                      ) {
                        return returnSuffix();
                      } else if (
                        /* v3 - gettext index */
                        this.options.simplifyPluralSuffix &&
                        rule.numbers.length === 2 &&
                        rule.numbers[0] === 1
                      ) {
                        return returnSuffix();
                      }

                      return this.options.prepend && idx.toString()
                        ? this.options.prepend + idx.toString()
                        : idx.toString();
                    }

                    this.logger.warn('no plural rule found for: '.concat(code));
                    return '';
                  }
                }
              ]);

              return PluralResolver;
            })();

          var Interpolator =
            /*#__PURE__*/
            (function() {
              function Interpolator() {
                var options =
                  arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                _classCallCheck(this, Interpolator);

                this.logger = baseLogger.create('interpolator');
                this.options = options;

                this.format =
                  (options.interpolation && options.interpolation.format) ||
                  function(value) {
                    return value;
                  };

                this.init(options);
              }
              /* eslint no-param-reassign: 0 */

              _createClass(Interpolator, [
                {
                  key: 'init',
                  value: function init() {
                    var options =
                      arguments.length > 0 && arguments[0] !== undefined
                        ? arguments[0]
                        : {};
                    if (!options.interpolation)
                      options.interpolation = {
                        escapeValue: true
                      };
                    var iOpts = options.interpolation;
                    this.escape = iOpts.escape !== undefined ? iOpts.escape : escape;
                    this.escapeValue =
                      iOpts.escapeValue !== undefined ? iOpts.escapeValue : true;
                    this.useRawValueToEscape =
                      iOpts.useRawValueToEscape !== undefined
                        ? iOpts.useRawValueToEscape
                        : false;
                    this.prefix = iOpts.prefix
                      ? regexEscape(iOpts.prefix)
                      : iOpts.prefixEscaped || '{{';
                    this.suffix = iOpts.suffix
                      ? regexEscape(iOpts.suffix)
                      : iOpts.suffixEscaped || '}}';
                    this.formatSeparator = iOpts.formatSeparator
                      ? iOpts.formatSeparator
                      : iOpts.formatSeparator || ',';
                    this.unescapePrefix = iOpts.unescapeSuffix
                      ? ''
                      : iOpts.unescapePrefix || '-';
                    this.unescapeSuffix = this.unescapePrefix
                      ? ''
                      : iOpts.unescapeSuffix || '';
                    this.nestingPrefix = iOpts.nestingPrefix
                      ? regexEscape(iOpts.nestingPrefix)
                      : iOpts.nestingPrefixEscaped || regexEscape('$t(');
                    this.nestingSuffix = iOpts.nestingSuffix
                      ? regexEscape(iOpts.nestingSuffix)
                      : iOpts.nestingSuffixEscaped || regexEscape(')');
                    this.maxReplaces = iOpts.maxReplaces ? iOpts.maxReplaces : 1000; // the regexp

                    this.resetRegExp();
                  }
                },
                {
                  key: 'reset',
                  value: function reset() {
                    if (this.options) this.init(this.options);
                  }
                },
                {
                  key: 'resetRegExp',
                  value: function resetRegExp() {
                    // the regexp
                    var regexpStr = ''.concat(this.prefix, '(.+?)').concat(this.suffix);
                    this.regexp = new RegExp(regexpStr, 'g');
                    var regexpUnescapeStr = ''
                      .concat(this.prefix)
                      .concat(this.unescapePrefix, '(.+?)')
                      .concat(this.unescapeSuffix)
                      .concat(this.suffix);
                    this.regexpUnescape = new RegExp(regexpUnescapeStr, 'g');
                    var nestingRegexpStr = ''
                      .concat(this.nestingPrefix, '(.+?)')
                      .concat(this.nestingSuffix);
                    this.nestingRegexp = new RegExp(nestingRegexpStr, 'g');
                  }
                },
                {
                  key: 'interpolate',
                  value: function interpolate(str, data, lng, options) {
                    var _this = this;

                    var match;
                    var value;
                    var replaces;
                    var defaultData =
                      (this.options &&
                        this.options.interpolation &&
                        this.options.interpolation.defaultVariables) ||
                      {};

                    function regexSafe(val) {
                      return val.replace(/\$/g, '$$$$');
                    }

                    var handleFormat = function handleFormat(key) {
                      if (key.indexOf(_this.formatSeparator) < 0) {
                        return getPathWithDefaults(data, defaultData, key);
                      }

                      var p = key.split(_this.formatSeparator);
                      var k = p.shift().trim();
                      var f = p.join(_this.formatSeparator).trim();
                      return _this.format(
                        getPathWithDefaults(data, defaultData, k),
                        f,
                        lng
                      );
                    };

                    this.resetRegExp();
                    var missingInterpolationHandler =
                      (options && options.missingInterpolationHandler) ||
                      this.options.missingInterpolationHandler;
                    replaces = 0; // unescape if has unescapePrefix/Suffix

                    /* eslint no-cond-assign: 0 */

                    while ((match = this.regexpUnescape.exec(str))) {
                      value = handleFormat(match[1].trim());

                      if (value === undefined) {
                        if (typeof missingInterpolationHandler === 'function') {
                          var temp = missingInterpolationHandler(str, match, options);
                          value = typeof temp === 'string' ? temp : '';
                        } else {
                          this.logger.warn(
                            'missed to pass in variable '
                              .concat(match[1], ' for interpolating ')
                              .concat(str)
                          );
                          value = '';
                        }
                      } else if (typeof value !== 'string' && !this.useRawValueToEscape) {
                        value = makeString(value);
                      }

                      str = str.replace(match[0], regexSafe(value));
                      this.regexpUnescape.lastIndex = 0;
                      replaces++;

                      if (replaces >= this.maxReplaces) {
                        break;
                      }
                    }

                    replaces = 0; // regular escape on demand

                    while ((match = this.regexp.exec(str))) {
                      value = handleFormat(match[1].trim());

                      if (value === undefined) {
                        if (typeof missingInterpolationHandler === 'function') {
                          var _temp = missingInterpolationHandler(str, match, options);

                          value = typeof _temp === 'string' ? _temp : '';
                        } else {
                          this.logger.warn(
                            'missed to pass in variable '
                              .concat(match[1], ' for interpolating ')
                              .concat(str)
                          );
                          value = '';
                        }
                      } else if (typeof value !== 'string' && !this.useRawValueToEscape) {
                        value = makeString(value);
                      }

                      value = this.escapeValue
                        ? regexSafe(this.escape(value))
                        : regexSafe(value);
                      str = str.replace(match[0], value);
                      this.regexp.lastIndex = 0;
                      replaces++;

                      if (replaces >= this.maxReplaces) {
                        break;
                      }
                    }

                    return str;
                  }
                },
                {
                  key: 'nest',
                  value: function nest(str, fc) {
                    var options =
                      arguments.length > 2 && arguments[2] !== undefined
                        ? arguments[2]
                        : {};
                    var match;
                    var value;

                    var clonedOptions = _objectSpread({}, options);

                    clonedOptions.applyPostProcessor = false; // avoid post processing on nested lookup

                    delete clonedOptions.defaultValue; // assert we do not get a endless loop on interpolating defaultValue again and again
                    // if value is something like "myKey": "lorem $(anotherKey, { "count": {{aValueInOptions}} })"

                    function handleHasOptions(key, inheritedOptions) {
                      if (key.indexOf(',') < 0) return key;
                      var p = key.split(',');
                      key = p.shift();
                      var optionsString = p.join(',');
                      optionsString = this.interpolate(optionsString, clonedOptions);
                      optionsString = optionsString.replace(/'/g, '"');

                      try {
                        clonedOptions = JSON.parse(optionsString);
                        if (inheritedOptions)
                          clonedOptions = _objectSpread(
                            {},
                            inheritedOptions,
                            clonedOptions
                          );
                      } catch (e) {
                        this.logger.error(
                          'failed parsing options string in nesting for key '.concat(key),
                          e
                        );
                      } // assert we do not get a endless loop on interpolating defaultValue again and again

                      delete clonedOptions.defaultValue;
                      return key;
                    } // regular escape on demand

                    while ((match = this.nestingRegexp.exec(str))) {
                      value = fc(
                        handleHasOptions.call(this, match[1].trim(), clonedOptions),
                        clonedOptions
                      ); // is only the nesting key (key1 = '$(key2)') return the value without stringify

                      if (value && match[0] === str && typeof value !== 'string')
                        return value; // no string to include or empty

                      if (typeof value !== 'string') value = makeString(value);

                      if (!value) {
                        this.logger.warn(
                          'missed to resolve '.concat(match[1], ' for nesting ').concat(str)
                        );
                        value = '';
                      } // Nested keys should not be escaped by default #854
                      // value = this.escapeValue ? regexSafe(utils.escape(value)) : regexSafe(value);

                      str = str.replace(match[0], value);
                      this.regexp.lastIndex = 0;
                    }

                    return str;
                  }
                }
              ]);

              return Interpolator;
            })();

          function remove(arr, what) {
            var found = arr.indexOf(what);

            while (found !== -1) {
              arr.splice(found, 1);
              found = arr.indexOf(what);
            }
          }

          var Connector =
            /*#__PURE__*/
            (function(_EventEmitter) {
              _inherits(Connector, _EventEmitter);

              function Connector(backend, store, services) {
                var _this;

                var options =
                  arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

                _classCallCheck(this, Connector);

                _this = _possibleConstructorReturn(
                  this,
                  _getPrototypeOf(Connector).call(this)
                );
                EventEmitter.call(_assertThisInitialized(_this)); // <=IE10 fix (unable to call parent constructor)

                _this.backend = backend;
                _this.store = store;
                _this.services = services;
                _this.languageUtils = services.languageUtils;
                _this.options = options;
                _this.logger = baseLogger.create('backendConnector');
                _this.state = {};
                _this.queue = [];

                if (_this.backend && _this.backend.init) {
                  _this.backend.init(services, options.backend, options);
                }

                return _this;
              }

              _createClass(Connector, [
                {
                  key: 'queueLoad',
                  value: function queueLoad(languages, namespaces, options, callback) {
                    var _this2 = this;

                    // find what needs to be loaded
                    var toLoad = [];
                    var pending = [];
                    var toLoadLanguages = [];
                    var toLoadNamespaces = [];
                    languages.forEach(function(lng) {
                      var hasAllNamespaces = true;
                      namespaces.forEach(function(ns) {
                        var name = ''.concat(lng, '|').concat(ns);

                        if (!options.reload && _this2.store.hasResourceBundle(lng, ns)) {
                          _this2.state[name] = 2; // loaded
                        } else if (_this2.state[name] < 0);
                        else if (_this2.state[name] === 1) {
                          if (pending.indexOf(name) < 0) pending.push(name);
                        } else {
                          _this2.state[name] = 1; // pending

                          hasAllNamespaces = false;
                          if (pending.indexOf(name) < 0) pending.push(name);
                          if (toLoad.indexOf(name) < 0) toLoad.push(name);
                          if (toLoadNamespaces.indexOf(ns) < 0) toLoadNamespaces.push(ns);
                        }
                      });
                      if (!hasAllNamespaces) toLoadLanguages.push(lng);
                    });

                    if (toLoad.length || pending.length) {
                      this.queue.push({
                        pending: pending,
                        loaded: {},
                        errors: [],
                        callback: callback
                      });
                    }

                    return {
                      toLoad: toLoad,
                      pending: pending,
                      toLoadLanguages: toLoadLanguages,
                      toLoadNamespaces: toLoadNamespaces
                    };
                  }
                },
                {
                  key: 'loaded',
                  value: function loaded(name, err, data) {
                    var _name$split = name.split('|'),
                      _name$split2 = _slicedToArray(_name$split, 2),
                      lng = _name$split2[0],
                      ns = _name$split2[1];

                    if (err) this.emit('failedLoading', lng, ns, err);

                    if (data) {
                      this.store.addResourceBundle(lng, ns, data);
                    } // set loaded

                    this.state[name] = err ? -1 : 2; // consolidated loading done in this run - only emit once for a loaded namespace

                    var loaded = {}; // callback if ready

                    this.queue.forEach(function(q) {
                      pushPath(q.loaded, [lng], ns);
                      remove(q.pending, name);
                      if (err) q.errors.push(err);

                      if (q.pending.length === 0 && !q.done) {
                        // only do once per loaded -> this.emit('loaded', q.loaded);
                        Object.keys(q.loaded).forEach(function(l) {
                          if (!loaded[l]) loaded[l] = [];

                          if (q.loaded[l].length) {
                            q.loaded[l].forEach(function(ns) {
                              if (loaded[l].indexOf(ns) < 0) loaded[l].push(ns);
                            });
                          }
                        });
                        /* eslint no-param-reassign: 0 */

                        q.done = true;

                        if (q.errors.length) {
                          q.callback(q.errors);
                        } else {
                          q.callback();
                        }
                      }
                    }); // emit consolidated loaded event

                    this.emit('loaded', loaded); // remove done load requests

                    this.queue = this.queue.filter(function(q) {
                      return !q.done;
                    });
                  }
                },
                {
                  key: 'read',
                  value: function read(lng, ns, fcName) {
                    var _this3 = this;

                    var tried =
                      arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
                    var wait =
                      arguments.length > 4 && arguments[4] !== undefined
                        ? arguments[4]
                        : 250;
                    var callback = arguments.length > 5 ? arguments[5] : undefined;
                    if (!lng.length) return callback(null, {}); // noting to load

                    return this.backend[fcName](lng, ns, function(err, data) {
                      if (
                        err &&
                        data &&
                        /* = retryFlag */
                        tried < 5
                      ) {
                        setTimeout(function() {
                          _this3.read.call(
                            _this3,
                            lng,
                            ns,
                            fcName,
                            tried + 1,
                            wait * 2,
                            callback
                          );
                        }, wait);
                        return;
                      }

                      callback(err, data);
                    });
                  }
                  /* eslint consistent-return: 0 */
                },
                {
                  key: 'prepareLoading',
                  value: function prepareLoading(languages, namespaces) {
                    var _this4 = this;

                    var options =
                      arguments.length > 2 && arguments[2] !== undefined
                        ? arguments[2]
                        : {};
                    var callback = arguments.length > 3 ? arguments[3] : undefined;

                    if (!this.backend) {
                      this.logger.warn(
                        'No backend was added via i18next.use. Will not load resources.'
                      );
                      return callback && callback();
                    }

                    if (typeof languages === 'string')
                      languages = this.languageUtils.toResolveHierarchy(languages);
                    if (typeof namespaces === 'string') namespaces = [namespaces];
                    var toLoad = this.queueLoad(languages, namespaces, options, callback);

                    if (!toLoad.toLoad.length) {
                      if (!toLoad.pending.length) callback(); // nothing to load and no pendings...callback now

                      return null; // pendings will trigger callback
                    }

                    toLoad.toLoad.forEach(function(name) {
                      _this4.loadOne(name);
                    });
                  }
                },
                {
                  key: 'load',
                  value: function load(languages, namespaces, callback) {
                    this.prepareLoading(languages, namespaces, {}, callback);
                  }
                },
                {
                  key: 'reload',
                  value: function reload(languages, namespaces, callback) {
                    this.prepareLoading(
                      languages,
                      namespaces,
                      {
                        reload: true
                      },
                      callback
                    );
                  }
                },
                {
                  key: 'loadOne',
                  value: function loadOne(name) {
                    var _this5 = this;

                    var prefix =
                      arguments.length > 1 && arguments[1] !== undefined
                        ? arguments[1]
                        : '';

                    var _name$split3 = name.split('|'),
                      _name$split4 = _slicedToArray(_name$split3, 2),
                      lng = _name$split4[0],
                      ns = _name$split4[1];

                    this.read(lng, ns, 'read', null, null, function(err, data) {
                      if (err)
                        _this5.logger.warn(
                          ''
                            .concat(prefix, 'loading namespace ')
                            .concat(ns, ' for language ')
                            .concat(lng, ' failed'),
                          err
                        );
                      if (!err && data)
                        _this5.logger.log(
                          ''
                            .concat(prefix, 'loaded namespace ')
                            .concat(ns, ' for language ')
                            .concat(lng),
                          data
                        );

                      _this5.loaded(name, err, data);
                    });
                  }
                },
                {
                  key: 'saveMissing',
                  value: function saveMissing(
                    languages,
                    namespace,
                    key,
                    fallbackValue,
                    isUpdate
                  ) {
                    var options =
                      arguments.length > 5 && arguments[5] !== undefined
                        ? arguments[5]
                        : {};

                    if (
                      this.services.utils &&
                      this.services.utils.hasLoadedNamespace &&
                      !this.services.utils.hasLoadedNamespace(namespace)
                    ) {
                      this.logger.warn(
                        'did not save key "'
                          .concat(key, '" for namespace "')
                          .concat(namespace, '" as the namespace was not yet loaded'),
                        'This means something IS WRONG in your application setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
                      );
                      return;
                    } // ignore non valid keys

                    if (key === undefined || key === null || key === '') return;

                    if (this.backend && this.backend.create) {
                      this.backend.create(
                        languages,
                        namespace,
                        key,
                        fallbackValue,
                        null,
                        /* unused callback */
                        _objectSpread({}, options, {
                          isUpdate: isUpdate
                        })
                      );
                    } // write to store to avoid resending

                    if (!languages || !languages[0]) return;
                    this.store.addResource(languages[0], namespace, key, fallbackValue);
                  }
                }
              ]);

              return Connector;
            })(EventEmitter);

          function get() {
            return {
              debug: false,
              initImmediate: true,
              ns: ['translation'],
              defaultNS: ['translation'],
              fallbackLng: ['dev'],
              fallbackNS: false,
              // string or array of namespaces
              whitelist: false,
              // array with whitelisted languages
              nonExplicitWhitelist: false,
              load: 'all',
              // | currentOnly | languageOnly
              preload: false,
              // array with preload languages
              simplifyPluralSuffix: true,
              keySeparator: '.',
              nsSeparator: ':',
              pluralSeparator: '_',
              contextSeparator: '_',
              partialBundledLanguages: false,
              // allow bundling certain languages that are not remotely fetched
              saveMissing: false,
              // enable to send missing values
              updateMissing: false,
              // enable to update default values if different from translated value (only useful on initial development, or when keeping code as source of truth)
              saveMissingTo: 'fallback',
              // 'current' || 'all'
              saveMissingPlurals: true,
              // will save all forms not only singular key
              missingKeyHandler: false,
              // function(lng, ns, key, fallbackValue) -> override if prefer on handling
              missingInterpolationHandler: false,
              // function(str, match)
              postProcess: false,
              // string or array of postProcessor names
              postProcessPassResolved: false,
              // pass resolved object into 'options.i18nResolved' for postprocessor
              returnNull: true,
              // allows null value as valid translation
              returnEmptyString: true,
              // allows empty string value as valid translation
              returnObjects: false,
              joinArrays: false,
              // or string to join array
              returnedObjectHandler: false,
              // function(key, value, options) triggered if key returns object but returnObjects is set to false
              parseMissingKeyHandler: false,
              // function(key) parsed a key that was not found in t() before returning
              appendNamespaceToMissingKey: false,
              appendNamespaceToCIMode: false,
              overloadTranslationOptionHandler: function handle(args) {
                var ret = {};
                if (_typeof(args[1]) === 'object') ret = args[1];
                if (typeof args[1] === 'string') ret.defaultValue = args[1];
                if (typeof args[2] === 'string') ret.tDescription = args[2];

                if (_typeof(args[2]) === 'object' || _typeof(args[3]) === 'object') {
                  var options = args[3] || args[2];
                  Object.keys(options).forEach(function(key) {
                    ret[key] = options[key];
                  });
                }

                return ret;
              },
              interpolation: {
                escapeValue: true,
                format: function format(value, _format, lng) {
                  return value;
                },
                prefix: '{{',
                suffix: '}}',
                formatSeparator: ',',
                // prefixEscaped: '{{',
                // suffixEscaped: '}}',
                // unescapeSuffix: '',
                unescapePrefix: '-',
                nestingPrefix: '$t(',
                nestingSuffix: ')',
                // nestingPrefixEscaped: '$t(',
                // nestingSuffixEscaped: ')',
                // defaultVariables: undefined // object that can have values to interpolate on - extends passed in interpolation data
                maxReplaces: 1000 // max replaces to prevent endless loop
              }
            };
          }
          /* eslint no-param-reassign: 0 */

          function transformOptions(options) {
            // create namespace object if namespace is passed in as string
            if (typeof options.ns === 'string') options.ns = [options.ns];
            if (typeof options.fallbackLng === 'string')
              options.fallbackLng = [options.fallbackLng];
            if (typeof options.fallbackNS === 'string')
              options.fallbackNS = [options.fallbackNS]; // extend whitelist with cimode

            if (options.whitelist && options.whitelist.indexOf('cimode') < 0) {
              options.whitelist = options.whitelist.concat(['cimode']);
            }

            return options;
          }

          function noop() {}

          var I18n =
            /*#__PURE__*/
            (function(_EventEmitter) {
              _inherits(I18n, _EventEmitter);

              function I18n() {
                var _this;

                var options =
                  arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var callback = arguments.length > 1 ? arguments[1] : undefined;

                _classCallCheck(this, I18n);

                _this = _possibleConstructorReturn(this, _getPrototypeOf(I18n).call(this));
                EventEmitter.call(_assertThisInitialized(_this)); // <=IE10 fix (unable to call parent constructor)

                _this.options = transformOptions(options);
                _this.services = {};
                _this.logger = baseLogger;
                _this.modules = {
                  external: []
                };

                if (callback && !_this.isInitialized && !options.isClone) {
                  // https://github.com/i18next/i18next/issues/879
                  if (!_this.options.initImmediate) {
                    _this.init(options, callback);

                    return _possibleConstructorReturn(_this, _assertThisInitialized(_this));
                  }

                  setTimeout(function() {
                    _this.init(options, callback);
                  }, 0);
                }

                return _this;
              }

              _createClass(I18n, [
                {
                  key: 'init',
                  value: function init() {
                    var _this2 = this;

                    var options =
                      arguments.length > 0 && arguments[0] !== undefined
                        ? arguments[0]
                        : {};
                    var callback = arguments.length > 1 ? arguments[1] : undefined;

                    if (typeof options === 'function') {
                      callback = options;
                      options = {};
                    }

                    this.options = _objectSpread(
                      {},
                      get(),
                      this.options,
                      transformOptions(options)
                    );
                    this.format = this.options.interpolation.format;
                    if (!callback) callback = noop;

                    function createClassOnDemand(ClassOrObject) {
                      if (!ClassOrObject) return null;
                      if (typeof ClassOrObject === 'function') return new ClassOrObject();
                      return ClassOrObject;
                    } // init services

                    if (!this.options.isClone) {
                      if (this.modules.logger) {
                        baseLogger.init(
                          createClassOnDemand(this.modules.logger),
                          this.options
                        );
                      } else {
                        baseLogger.init(null, this.options);
                      }

                      var lu = new LanguageUtil(this.options);
                      this.store = new ResourceStore(this.options.resources, this.options);
                      var s = this.services;
                      s.logger = baseLogger;
                      s.resourceStore = this.store;
                      s.languageUtils = lu;
                      s.pluralResolver = new PluralResolver(lu, {
                        prepend: this.options.pluralSeparator,
                        compatibilityJSON: this.options.compatibilityJSON,
                        simplifyPluralSuffix: this.options.simplifyPluralSuffix
                      });
                      s.interpolator = new Interpolator(this.options);
                      s.utils = {
                        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
                      };
                      s.backendConnector = new Connector(
                        createClassOnDemand(this.modules.backend),
                        s.resourceStore,
                        s,
                        this.options
                      ); // pipe events from backendConnector

                      s.backendConnector.on('*', function(event) {
                        for (
                          var _len = arguments.length,
                            args = new Array(_len > 1 ? _len - 1 : 0),
                            _key = 1;
                          _key < _len;
                          _key++
                        ) {
                          args[_key - 1] = arguments[_key];
                        }

                        _this2.emit.apply(_this2, [event].concat(args));
                      });

                      if (this.modules.languageDetector) {
                        s.languageDetector = createClassOnDemand(
                          this.modules.languageDetector
                        );
                        s.languageDetector.init(s, this.options.detection, this.options);
                      }

                      if (this.modules.i18nFormat) {
                        s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
                        if (s.i18nFormat.init) s.i18nFormat.init(this);
                      }

                      this.translator = new Translator(this.services, this.options); // pipe events from translator

                      this.translator.on('*', function(event) {
                        for (
                          var _len2 = arguments.length,
                            args = new Array(_len2 > 1 ? _len2 - 1 : 0),
                            _key2 = 1;
                          _key2 < _len2;
                          _key2++
                        ) {
                          args[_key2 - 1] = arguments[_key2];
                        }

                        _this2.emit.apply(_this2, [event].concat(args));
                      });
                      this.modules.external.forEach(function(m) {
                        if (m.init) m.init(_this2);
                      });
                    } // append api

                    var storeApi = [
                      'getResource',
                      'addResource',
                      'addResources',
                      'addResourceBundle',
                      'removeResourceBundle',
                      'hasResourceBundle',
                      'getResourceBundle',
                      'getDataByLanguage'
                    ];
                    storeApi.forEach(function(fcName) {
                      _this2[fcName] = function() {
                        var _this2$store;

                        return (_this2$store = _this2.store)[fcName].apply(
                          _this2$store,
                          arguments
                        );
                      };
                    });
                    var deferred = defer();

                    var load = function load() {
                      _this2.changeLanguage(_this2.options.lng, function(err, t) {
                        _this2.isInitialized = true;

                        _this2.logger.log('initialized', _this2.options);

                        _this2.emit('initialized', _this2.options);

                        deferred.resolve(t); // not rejecting on err (as err is only a loading translation failed warning)

                        callback(err, t);
                      });
                    };

                    if (this.options.resources || !this.options.initImmediate) {
                      load();
                    } else {
                      setTimeout(load, 0);
                    }

                    return deferred;
                  }
                  /* eslint consistent-return: 0 */
                },
                {
                  key: 'loadResources',
                  value: function loadResources(language) {
                    var _this3 = this;

                    var callback =
                      arguments.length > 1 && arguments[1] !== undefined
                        ? arguments[1]
                        : noop;
                    var usedCallback = callback;
                    var usedLng = typeof language === 'string' ? language : this.language;
                    if (typeof language === 'function') usedCallback = language;

                    if (!this.options.resources || this.options.partialBundledLanguages) {
                      if (usedLng && usedLng.toLowerCase() === 'cimode')
                        return usedCallback(); // avoid loading resources for cimode

                      var toLoad = [];

                      var append = function append(lng) {
                        if (!lng) return;

                        var lngs = _this3.services.languageUtils.toResolveHierarchy(lng);

                        lngs.forEach(function(l) {
                          if (toLoad.indexOf(l) < 0) toLoad.push(l);
                        });
                      };

                      if (!usedLng) {
                        // at least load fallbacks in this case
                        var fallbacks = this.services.languageUtils.getFallbackCodes(
                          this.options.fallbackLng
                        );
                        fallbacks.forEach(function(l) {
                          return append(l);
                        });
                      } else {
                        append(usedLng);
                      }

                      if (this.options.preload) {
                        this.options.preload.forEach(function(l) {
                          return append(l);
                        });
                      }

                      this.services.backendConnector.load(
                        toLoad,
                        this.options.ns,
                        usedCallback
                      );
                    } else {
                      usedCallback(null);
                    }
                  }
                },
                {
                  key: 'reloadResources',
                  value: function reloadResources(lngs, ns, callback) {
                    var deferred = defer();
                    if (!lngs) lngs = this.languages;
                    if (!ns) ns = this.options.ns;
                    if (!callback) callback = noop;
                    this.services.backendConnector.reload(lngs, ns, function(err) {
                      deferred.resolve(); // not rejecting on err (as err is only a loading translation failed warning)

                      callback(err);
                    });
                    return deferred;
                  }
                },
                {
                  key: 'use',
                  value: function use(module) {
                    if (module.type === 'backend') {
                      this.modules.backend = module;
                    }

                    if (
                      module.type === 'logger' ||
                      (module.log && module.warn && module.error)
                    ) {
                      this.modules.logger = module;
                    }

                    if (module.type === 'languageDetector') {
                      this.modules.languageDetector = module;
                    }

                    if (module.type === 'i18nFormat') {
                      this.modules.i18nFormat = module;
                    }

                    if (module.type === 'postProcessor') {
                      postProcessor.addPostProcessor(module);
                    }

                    if (module.type === '3rdParty') {
                      this.modules.external.push(module);
                    }

                    return this;
                  }
                },
                {
                  key: 'changeLanguage',
                  value: function changeLanguage(lng, callback) {
                    var _this4 = this;

                    this.isLanguageChangingTo = lng;
                    var deferred = defer();
                    this.emit('languageChanging', lng);

                    var done = function done(err, l) {
                      if (l) {
                        _this4.language = l;
                        _this4.languages = _this4.services.languageUtils.toResolveHierarchy(
                          l
                        );

                        _this4.translator.changeLanguage(l);

                        _this4.isLanguageChangingTo = undefined;

                        _this4.emit('languageChanged', l);

                        _this4.logger.log('languageChanged', l);
                      } else {
                        _this4.isLanguageChangingTo = undefined;
                      }

                      deferred.resolve(function() {
                        return _this4.t.apply(_this4, arguments);
                      });
                      if (callback)
                        callback(err, function() {
                          return _this4.t.apply(_this4, arguments);
                        });
                    };

                    var setLng = function setLng(l) {
                      if (l) {
                        if (!_this4.language) {
                          _this4.language = l;
                          _this4.languages = _this4.services.languageUtils.toResolveHierarchy(
                            l
                          );
                        }

                        if (!_this4.translator.language)
                          _this4.translator.changeLanguage(l);
                        if (_this4.services.languageDetector)
                          _this4.services.languageDetector.cacheUserLanguage(l);
                      }

                      _this4.loadResources(l, function(err) {
                        done(err, l);
                      });
                    };

                    if (
                      !lng &&
                      this.services.languageDetector &&
                      !this.services.languageDetector.async
                    ) {
                      setLng(this.services.languageDetector.detect());
                    } else if (
                      !lng &&
                      this.services.languageDetector &&
                      this.services.languageDetector.async
                    ) {
                      this.services.languageDetector.detect(setLng);
                    } else {
                      setLng(lng);
                    }

                    return deferred;
                  }
                },
                {
                  key: 'getFixedT',
                  value: function getFixedT(lng, ns) {
                    var _this5 = this;

                    var fixedT = function fixedT(key, opts) {
                      var options;

                      if (_typeof(opts) !== 'object') {
                        for (
                          var _len3 = arguments.length,
                            rest = new Array(_len3 > 2 ? _len3 - 2 : 0),
                            _key3 = 2;
                          _key3 < _len3;
                          _key3++
                        ) {
                          rest[_key3 - 2] = arguments[_key3];
                        }

                        options = _this5.options.overloadTranslationOptionHandler(
                          [key, opts].concat(rest)
                        );
                      } else {
                        options = _objectSpread({}, opts);
                      }

                      options.lng = options.lng || fixedT.lng;
                      options.lngs = options.lngs || fixedT.lngs;
                      options.ns = options.ns || fixedT.ns;
                      return _this5.t(key, options);
                    };

                    if (typeof lng === 'string') {
                      fixedT.lng = lng;
                    } else {
                      fixedT.lngs = lng;
                    }

                    fixedT.ns = ns;
                    return fixedT;
                  }
                },
                {
                  key: 't',
                  value: function t() {
                    var _this$translator;

                    return (
                      this.translator &&
                      (_this$translator = this.translator).translate.apply(
                        _this$translator,
                        arguments
                      )
                    );
                  }
                },
                {
                  key: 'exists',
                  value: function exists() {
                    var _this$translator2;

                    return (
                      this.translator &&
                      (_this$translator2 = this.translator).exists.apply(
                        _this$translator2,
                        arguments
                      )
                    );
                  }
                },
                {
                  key: 'setDefaultNamespace',
                  value: function setDefaultNamespace(ns) {
                    this.options.defaultNS = ns;
                  }
                },
                {
                  key: 'hasLoadedNamespace',
                  value: function hasLoadedNamespace(ns) {
                    var _this6 = this;

                    if (!this.isInitialized) {
                      this.logger.warn(
                        'hasLoadedNamespace: i18next was not initialized',
                        this.languages
                      );
                      return false;
                    }

                    if (!this.languages || !this.languages.length) {
                      this.logger.warn(
                        'hasLoadedNamespace: i18n.languages were undefined or empty',
                        this.languages
                      );
                      return false;
                    }

                    var lng = this.languages[0];
                    var fallbackLng = this.options ? this.options.fallbackLng : false;
                    var lastLng = this.languages[this.languages.length - 1]; // we're in cimode so this shall pass

                    if (lng.toLowerCase() === 'cimode') return true;

                    var loadNotPending = function loadNotPending(l, n) {
                      var loadState =
                        _this6.services.backendConnector.state[''.concat(l, '|').concat(n)];

                      return loadState === -1 || loadState === 2;
                    }; // loaded -> SUCCESS

                    if (this.hasResourceBundle(lng, ns)) return true; // were not loading at all -> SEMI SUCCESS

                    if (!this.services.backendConnector.backend) return true; // failed loading ns - but at least fallback is not pending -> SEMI SUCCESS

                    if (
                      loadNotPending(lng, ns) &&
                      (!fallbackLng || loadNotPending(lastLng, ns))
                    )
                      return true;
                    return false;
                  }
                },
                {
                  key: 'loadNamespaces',
                  value: function loadNamespaces(ns, callback) {
                    var _this7 = this;

                    var deferred = defer();

                    if (!this.options.ns) {
                      callback && callback();
                      return Promise.resolve();
                    }

                    if (typeof ns === 'string') ns = [ns];
                    ns.forEach(function(n) {
                      if (_this7.options.ns.indexOf(n) < 0) _this7.options.ns.push(n);
                    });
                    this.loadResources(function(err) {
                      deferred.resolve();
                      if (callback) callback(err);
                    });
                    return deferred;
                  }
                },
                {
                  key: 'loadLanguages',
                  value: function loadLanguages(lngs, callback) {
                    var deferred = defer();
                    if (typeof lngs === 'string') lngs = [lngs];
                    var preloaded = this.options.preload || [];
                    var newLngs = lngs.filter(function(lng) {
                      return preloaded.indexOf(lng) < 0;
                    }); // Exit early if all given languages are already preloaded

                    if (!newLngs.length) {
                      if (callback) callback();
                      return Promise.resolve();
                    }

                    this.options.preload = preloaded.concat(newLngs);
                    this.loadResources(function(err) {
                      deferred.resolve();
                      if (callback) callback(err);
                    });
                    return deferred;
                  }
                },
                {
                  key: 'dir',
                  value: function dir(lng) {
                    if (!lng)
                      lng =
                        this.languages && this.languages.length > 0
                          ? this.languages[0]
                          : this.language;
                    if (!lng) return 'rtl';
                    var rtlLngs = [
                      'ar',
                      'shu',
                      'sqr',
                      'ssh',
                      'xaa',
                      'yhd',
                      'yud',
                      'aao',
                      'abh',
                      'abv',
                      'acm',
                      'acq',
                      'acw',
                      'acx',
                      'acy',
                      'adf',
                      'ads',
                      'aeb',
                      'aec',
                      'afb',
                      'ajp',
                      'apc',
                      'apd',
                      'arb',
                      'arq',
                      'ars',
                      'ary',
                      'arz',
                      'auz',
                      'avl',
                      'ayh',
                      'ayl',
                      'ayn',
                      'ayp',
                      'bbz',
                      'pga',
                      'he',
                      'iw',
                      'ps',
                      'pbt',
                      'pbu',
                      'pst',
                      'prp',
                      'prd',
                      'ur',
                      'ydd',
                      'yds',
                      'yih',
                      'ji',
                      'yi',
                      'hbo',
                      'men',
                      'xmn',
                      'fa',
                      'jpr',
                      'peo',
                      'pes',
                      'prs',
                      'dv',
                      'sam'
                    ];
                    return rtlLngs.indexOf(
                      this.services.languageUtils.getLanguagePartFromCode(lng)
                    ) >= 0
                      ? 'rtl'
                      : 'ltr';
                  }
                  /* eslint class-methods-use-this: 0 */
                },
                {
                  key: 'createInstance',
                  value: function createInstance() {
                    var options =
                      arguments.length > 0 && arguments[0] !== undefined
                        ? arguments[0]
                        : {};
                    var callback = arguments.length > 1 ? arguments[1] : undefined;
                    return new I18n(options, callback);
                  }
                },
                {
                  key: 'cloneInstance',
                  value: function cloneInstance() {
                    var _this8 = this;

                    var options =
                      arguments.length > 0 && arguments[0] !== undefined
                        ? arguments[0]
                        : {};
                    var callback =
                      arguments.length > 1 && arguments[1] !== undefined
                        ? arguments[1]
                        : noop;

                    var mergedOptions = _objectSpread({}, this.options, options, {
                      isClone: true
                    });

                    var clone = new I18n(mergedOptions);
                    var membersToCopy = ['store', 'services', 'language'];
                    membersToCopy.forEach(function(m) {
                      clone[m] = _this8[m];
                    });
                    clone.translator = new Translator(clone.services, clone.options);
                    clone.translator.on('*', function(event) {
                      for (
                        var _len4 = arguments.length,
                          args = new Array(_len4 > 1 ? _len4 - 1 : 0),
                          _key4 = 1;
                        _key4 < _len4;
                        _key4++
                      ) {
                        args[_key4 - 1] = arguments[_key4];
                      }

                      clone.emit.apply(clone, [event].concat(args));
                    });
                    clone.init(mergedOptions, callback);
                    clone.translator.options = clone.options; // sync options

                    return clone;
                  }
                }
              ]);

              return I18n;
            })(EventEmitter);

          var i18next = new I18n();

          module.exports = i18next;
        },
        {
          '@babel/runtime/helpers/assertThisInitialized': 4,
          '@babel/runtime/helpers/classCallCheck': 5,
          '@babel/runtime/helpers/createClass': 6,
          '@babel/runtime/helpers/getPrototypeOf': 8,
          '@babel/runtime/helpers/inherits': 9,
          '@babel/runtime/helpers/objectSpread': 14,
          '@babel/runtime/helpers/possibleConstructorReturn': 15,
          '@babel/runtime/helpers/slicedToArray': 17,
          '@babel/runtime/helpers/toConsumableArray': 18,
          '@babel/runtime/helpers/typeof': 19
        }
      ],
      31: [
        function(_dereq_, module, exports) {
          exports.read = function(buffer, offset, isLE, mLen, nBytes) {
            var e, m;
            var eLen = nBytes * 8 - mLen - 1;
            var eMax = (1 << eLen) - 1;
            var eBias = eMax >> 1;
            var nBits = -7;
            var i = isLE ? nBytes - 1 : 0;
            var d = isLE ? -1 : 1;
            var s = buffer[offset + i];

            i += d;

            e = s & ((1 << -nBits) - 1);
            s >>= -nBits;
            nBits += eLen;
            for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

            m = e & ((1 << -nBits) - 1);
            e >>= -nBits;
            nBits += mLen;
            for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

            if (e === 0) {
              e = 1 - eBias;
            } else if (e === eMax) {
              return m ? NaN : (s ? -1 : 1) * Infinity;
            } else {
              m = m + Math.pow(2, mLen);
              e = e - eBias;
            }
            return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
          };

          exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
            var e, m, c;
            var eLen = nBytes * 8 - mLen - 1;
            var eMax = (1 << eLen) - 1;
            var eBias = eMax >> 1;
            var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
            var i = isLE ? 0 : nBytes - 1;
            var d = isLE ? 1 : -1;
            var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

            value = Math.abs(value);

            if (isNaN(value) || value === Infinity) {
              m = isNaN(value) ? 1 : 0;
              e = eMax;
            } else {
              e = Math.floor(Math.log(value) / Math.LN2);
              if (value * (c = Math.pow(2, -e)) < 1) {
                e--;
                c *= 2;
              }
              if (e + eBias >= 1) {
                value += rt / c;
              } else {
                value += rt * Math.pow(2, 1 - eBias);
              }
              if (value * c >= 2) {
                e++;
                c /= 2;
              }

              if (e + eBias >= eMax) {
                m = 0;
                e = eMax;
              } else if (e + eBias >= 1) {
                m = (value * c - 1) * Math.pow(2, mLen);
                e = e + eBias;
              } else {
                m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
                e = 0;
              }
            }

            for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

            e = (e << mLen) | m;
            eLen += mLen;
            for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

            buffer[offset + i - d] |= s * 128;
          };
        },
        {}
      ],
      32: [
        function(_dereq_, module, exports) {
          /*

 Copyright 2000, Silicon Graphics, Inc. All Rights Reserved.
 Copyright 2015, Google Inc. All Rights Reserved.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to
 deal in the Software without restriction, including without limitation the
 rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice including the dates of first publication and
 either this permission notice or a reference to http://oss.sgi.com/projects/FreeB/
 shall be included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 SILICON GRAPHICS, INC. BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
 IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 Original Code. The Original Code is: OpenGL Sample Implementation,
 Version 1.2.1, released January 26, 2000, developed by Silicon Graphics,
 Inc. The Original Code is Copyright (c) 1991-2000 Silicon Graphics, Inc.
 Copyright in any portions created by third parties is as indicated
 elsewhere herein. All Rights Reserved.
*/
          'use strict';
          var n;
          function t(a, b) {
            return a.b === b.b && a.a === b.a;
          }
          function u(a, b) {
            return a.b < b.b || (a.b === b.b && a.a <= b.a);
          }
          function v(a, b, c) {
            var d = b.b - a.b,
              e = c.b - b.b;
            return 0 < d + e
              ? d < e
                ? b.a - a.a + d / (d + e) * (a.a - c.a)
                : b.a - c.a + e / (d + e) * (c.a - a.a)
              : 0;
          }
          function x(a, b, c) {
            var d = b.b - a.b,
              e = c.b - b.b;
            return 0 < d + e ? (b.a - c.a) * d + (b.a - a.a) * e : 0;
          }
          function z(a, b) {
            return a.a < b.a || (a.a === b.a && a.b <= b.b);
          }
          function aa(a, b, c) {
            var d = b.a - a.a,
              e = c.a - b.a;
            return 0 < d + e
              ? d < e
                ? b.b - a.b + d / (d + e) * (a.b - c.b)
                : b.b - c.b + e / (d + e) * (c.b - a.b)
              : 0;
          }
          function ba(a, b, c) {
            var d = b.a - a.a,
              e = c.a - b.a;
            return 0 < d + e ? (b.b - c.b) * d + (b.b - a.b) * e : 0;
          }
          function ca(a) {
            return u(a.b.a, a.a);
          }
          function da(a) {
            return u(a.a, a.b.a);
          }
          function A(a, b, c, d) {
            a = 0 > a ? 0 : a;
            c = 0 > c ? 0 : c;
            return a <= c
              ? 0 === c ? (b + d) / 2 : b + a / (a + c) * (d - b)
              : d + c / (a + c) * (b - d);
          }
          function ea(a) {
            var b = B(a.b);
            C(b, a.c);
            C(b.b, a.c);
            D(b, a.a);
            return b;
          }
          function E(a, b) {
            var c = !1,
              d = !1;
            a !== b &&
              (b.a !== a.a && ((d = !0), F(b.a, a.a)),
              b.d !== a.d && ((c = !0), G(b.d, a.d)),
              H(b, a),
              d || (C(b, a.a), (a.a.c = a)),
              c || (D(b, a.d), (a.d.a = a)));
          }
          function I(a) {
            var b = a.b,
              c = !1;
            a.d !== a.b.d && ((c = !0), G(a.d, a.b.d));
            a.c === a
              ? F(a.a, null)
              : ((a.b.d.a = J(a)), (a.a.c = a.c), H(a, J(a)), c || D(a, a.d));
            b.c === b
              ? (F(b.a, null), G(b.d, null))
              : ((a.d.a = J(b)), (b.a.c = b.c), H(b, J(b)));
            fa(a);
          }
          function K(a) {
            var b = B(a),
              c = b.b;
            H(b, a.e);
            b.a = a.b.a;
            C(c, b.a);
            b.d = c.d = a.d;
            b = b.b;
            H(a.b, J(a.b));
            H(a.b, b);
            a.b.a = b.a;
            b.b.a.c = b.b;
            b.b.d = a.b.d;
            b.f = a.f;
            b.b.f = a.b.f;
            return b;
          }
          function L(a, b) {
            var c = !1,
              d = B(a),
              e = d.b;
            b.d !== a.d && ((c = !0), G(b.d, a.d));
            H(d, a.e);
            H(e, b);
            d.a = a.b.a;
            e.a = b.a;
            d.d = e.d = a.d;
            a.d.a = e;
            c || D(d, a.d);
            return d;
          }
          function B(a) {
            var b = new M(),
              c = new M(),
              d = a.b.h;
            c.h = d;
            d.b.h = b;
            b.h = a;
            a.b.h = c;
            b.b = c;
            b.c = b;
            b.e = c;
            c.b = b;
            c.c = c;
            return (c.e = b);
          }
          function H(a, b) {
            var c = a.c,
              d = b.c;
            c.b.e = b;
            d.b.e = a;
            a.c = d;
            b.c = c;
          }
          function C(a, b) {
            var c = b.f,
              d = new N(b, c);
            c.e = d;
            b.f = d;
            c = d.c = a;
            do (c.a = d), (c = c.c);
            while (c !== a);
          }
          function D(a, b) {
            var c = b.d,
              d = new ga(b, c);
            c.b = d;
            b.d = d;
            d.a = a;
            d.c = b.c;
            c = a;
            do (c.d = d), (c = c.e);
            while (c !== a);
          }
          function fa(a) {
            var b = a.h;
            a = a.b.h;
            b.b.h = a;
            a.b.h = b;
          }
          function F(a, b) {
            var c = a.c,
              d = c;
            do (d.a = b), (d = d.c);
            while (d !== c);
            c = a.f;
            d = a.e;
            d.f = c;
            c.e = d;
          }
          function G(a, b) {
            var c = a.a,
              d = c;
            do (d.d = b), (d = d.e);
            while (d !== c);
            c = a.d;
            d = a.b;
            d.d = c;
            c.b = d;
          }
          function ha(a) {
            var b = 0;
            Math.abs(a[1]) > Math.abs(a[0]) && (b = 1);
            Math.abs(a[2]) > Math.abs(a[b]) && (b = 2);
            return b;
          }
          var O = 4 * 1e150;
          function P(a, b) {
            a.f += b.f;
            a.b.f += b.b.f;
          }
          function ia(a, b, c) {
            a = a.a;
            b = b.a;
            c = c.a;
            if (b.b.a === a)
              return c.b.a === a
                ? u(b.a, c.a) ? 0 >= x(c.b.a, b.a, c.a) : 0 <= x(b.b.a, c.a, b.a)
                : 0 >= x(c.b.a, a, c.a);
            if (c.b.a === a) return 0 <= x(b.b.a, a, b.a);
            b = v(b.b.a, a, b.a);
            a = v(c.b.a, a, c.a);
            return b >= a;
          }
          function Q(a) {
            a.a.i = null;
            var b = a.e;
            b.a.c = b.c;
            b.c.a = b.a;
            a.e = null;
          }
          function ja(a, b) {
            I(a.a);
            a.c = !1;
            a.a = b;
            b.i = a;
          }
          function ka(a) {
            var b = a.a.a;
            do a = R(a);
            while (a.a.a === b);
            a.c && ((b = L(S(a).a.b, a.a.e)), ja(a, b), (a = R(a)));
            return a;
          }
          function la(a, b, c) {
            var d = new ma();
            d.a = c;
            d.e = na(a.f, b.e, d);
            return (c.i = d);
          }
          function oa(a, b) {
            switch (a.s) {
              case 100130:
                return 0 !== (b & 1);
              case 100131:
                return 0 !== b;
              case 100132:
                return 0 < b;
              case 100133:
                return 0 > b;
              case 100134:
                return 2 <= b || -2 >= b;
            }
            return !1;
          }
          function pa(a) {
            var b = a.a,
              c = b.d;
            c.c = a.d;
            c.a = b;
            Q(a);
          }
          function T(a, b, c) {
            a = b;
            for (b = b.a; a !== c; ) {
              a.c = !1;
              var d = S(a),
                e = d.a;
              if (e.a !== b.a) {
                if (!d.c) {
                  pa(a);
                  break;
                }
                e = L(b.c.b, e.b);
                ja(d, e);
              }
              b.c !== e && (E(J(e), e), E(b, e));
              pa(a);
              b = d.a;
              a = d;
            }
            return b;
          }
          function U(a, b, c, d, e, f) {
            var g = !0;
            do la(a, b, c.b), (c = c.c);
            while (c !== d);
            for (null === e && (e = S(b).a.b.c); ; ) {
              d = S(b);
              c = d.a.b;
              if (c.a !== e.a) break;
              c.c !== e && (E(J(c), c), E(J(e), c));
              d.f = b.f - c.f;
              d.d = oa(a, d.f);
              b.b = !0;
              !g && qa(a, b) && (P(c, e), Q(b), I(e));
              g = !1;
              b = d;
              e = c;
            }
            b.b = !0;
            f && ra(a, b);
          }
          function sa(a, b, c, d, e) {
            var f = [b.g[0], b.g[1], b.g[2]];
            b.d = null;
            b.d = a.o ? a.o(f, c, d, a.c) || null : null;
            null === b.d && (e ? a.n || (V(a, 100156), (a.n = !0)) : (b.d = c[0]));
          }
          function ta(a, b, c) {
            var d = [null, null, null, null];
            d[0] = b.a.d;
            d[1] = c.a.d;
            sa(a, b.a, d, [0.5, 0.5, 0, 0], !1);
            E(b, c);
          }
          function ua(a, b, c, d, e) {
            var f = Math.abs(b.b - a.b) + Math.abs(b.a - a.a),
              g = Math.abs(c.b - a.b) + Math.abs(c.a - a.a),
              h = e + 1;
            d[e] = 0.5 * g / (f + g);
            d[h] = 0.5 * f / (f + g);
            a.g[0] += d[e] * b.g[0] + d[h] * c.g[0];
            a.g[1] += d[e] * b.g[1] + d[h] * c.g[1];
            a.g[2] += d[e] * b.g[2] + d[h] * c.g[2];
          }
          function qa(a, b) {
            var c = S(b),
              d = b.a,
              e = c.a;
            if (u(d.a, e.a)) {
              if (0 < x(e.b.a, d.a, e.a)) return !1;
              if (!t(d.a, e.a)) K(e.b), E(d, J(e)), (b.b = c.b = !0);
              else if (d.a !== e.a) {
                var c = a.e,
                  f = d.a.h;
                if (0 <= f) {
                  var c = c.b,
                    g = c.d,
                    h = c.e,
                    k = c.c,
                    l = k[f];
                  g[l] = g[c.a];
                  k[g[l]] = l;
                  l <= --c.a &&
                    (1 >= l ? W(c, l) : u(h[g[l >> 1]], h[g[l]]) ? W(c, l) : va(c, l));
                  h[f] = null;
                  k[f] = c.b;
                  c.b = f;
                } else
                  for (c.c[-(f + 1)] = null; 0 < c.a && null === c.c[c.d[c.a - 1]]; ) --c.a;
                ta(a, J(e), d);
              }
            } else {
              if (0 > x(d.b.a, e.a, d.a)) return !1;
              R(b).b = b.b = !0;
              K(d.b);
              E(J(e), d);
            }
            return !0;
          }
          function wa(a, b) {
            var c = S(b),
              d = b.a,
              e = c.a,
              f = d.a,
              g = e.a,
              h = d.b.a,
              k = e.b.a,
              l = new N();
            x(h, a.a, f);
            x(k, a.a, g);
            if (f === g || Math.min(f.a, h.a) > Math.max(g.a, k.a)) return !1;
            if (u(f, g)) {
              if (0 < x(k, f, g)) return !1;
            } else if (0 > x(h, g, f)) return !1;
            var r = h,
              p = f,
              q = k,
              y = g,
              m,
              w;
            u(r, p) || ((m = r), (r = p), (p = m));
            u(q, y) || ((m = q), (q = y), (y = m));
            u(r, q) || ((m = r), (r = q), (q = m), (m = p), (p = y), (y = m));
            u(q, p)
              ? u(p, y)
                ? ((m = v(r, q, p)),
                  (w = v(q, p, y)),
                  0 > m + w && ((m = -m), (w = -w)),
                  (l.b = A(m, q.b, w, p.b)))
                : ((m = x(r, q, p)),
                  (w = -x(r, y, p)),
                  0 > m + w && ((m = -m), (w = -w)),
                  (l.b = A(m, q.b, w, y.b)))
              : (l.b = (q.b + p.b) / 2);
            z(r, p) || ((m = r), (r = p), (p = m));
            z(q, y) || ((m = q), (q = y), (y = m));
            z(r, q) || ((m = r), (r = q), (q = m), (m = p), (p = y), (y = m));
            z(q, p)
              ? z(p, y)
                ? ((m = aa(r, q, p)),
                  (w = aa(q, p, y)),
                  0 > m + w && ((m = -m), (w = -w)),
                  (l.a = A(m, q.a, w, p.a)))
                : ((m = ba(r, q, p)),
                  (w = -ba(r, y, p)),
                  0 > m + w && ((m = -m), (w = -w)),
                  (l.a = A(m, q.a, w, y.a)))
              : (l.a = (q.a + p.a) / 2);
            u(l, a.a) && ((l.b = a.a.b), (l.a = a.a.a));
            r = u(f, g) ? f : g;
            u(r, l) && ((l.b = r.b), (l.a = r.a));
            if (t(l, f) || t(l, g)) return qa(a, b), !1;
            if ((!t(h, a.a) && 0 <= x(h, a.a, l)) || (!t(k, a.a) && 0 >= x(k, a.a, l))) {
              if (k === a.a)
                return (
                  K(d.b),
                  E(e.b, d),
                  (b = ka(b)),
                  (d = S(b).a),
                  T(a, S(b), c),
                  U(a, b, J(d), d, d, !0),
                  !0
                );
              if (h === a.a) {
                K(e.b);
                E(d.e, J(e));
                f = c = b;
                g = f.a.b.a;
                do f = R(f);
                while (f.a.b.a === g);
                b = f;
                f = S(b).a.b.c;
                c.a = J(e);
                e = T(a, c, null);
                U(a, b, e.c, d.b.c, f, !0);
                return !0;
              }
              0 <= x(h, a.a, l) &&
                ((R(b).b = b.b = !0), K(d.b), (d.a.b = a.a.b), (d.a.a = a.a.a));
              0 >= x(k, a.a, l) &&
                ((b.b = c.b = !0), K(e.b), (e.a.b = a.a.b), (e.a.a = a.a.a));
              return !1;
            }
            K(d.b);
            K(e.b);
            E(J(e), d);
            d.a.b = l.b;
            d.a.a = l.a;
            d.a.h = xa(a.e, d.a);
            d = d.a;
            e = [0, 0, 0, 0];
            l = [f.d, h.d, g.d, k.d];
            d.g[0] = d.g[1] = d.g[2] = 0;
            ua(d, f, h, e, 0);
            ua(d, g, k, e, 2);
            sa(a, d, l, e, !0);
            R(b).b = b.b = c.b = !0;
            return !1;
          }
          function ra(a, b) {
            for (var c = S(b); ; ) {
              for (; c.b; ) (b = c), (c = S(c));
              if (!b.b && ((c = b), (b = R(b)), null === b || !b.b)) break;
              b.b = !1;
              var d = b.a,
                e = c.a,
                f;
              if ((f = d.b.a !== e.b.a))
                a: {
                  f = b;
                  var g = S(f),
                    h = f.a,
                    k = g.a,
                    l = void 0;
                  if (u(h.b.a, k.b.a)) {
                    if (0 > x(h.b.a, k.b.a, h.a)) {
                      f = !1;
                      break a;
                    }
                    R(f).b = f.b = !0;
                    l = K(h);
                    E(k.b, l);
                    l.d.c = f.d;
                  } else {
                    if (0 < x(k.b.a, h.b.a, k.a)) {
                      f = !1;
                      break a;
                    }
                    f.b = g.b = !0;
                    l = K(k);
                    E(h.e, k.b);
                    l.b.d.c = f.d;
                  }
                  f = !0;
                }
              f &&
                (c.c
                  ? (Q(c), I(e), (c = S(b)), (e = c.a))
                  : b.c && (Q(b), I(d), (b = R(c)), (d = b.a)));
              if (d.a !== e.a)
                if (d.b.a === e.b.a || b.c || c.c || (d.b.a !== a.a && e.b.a !== a.a))
                  qa(a, b);
                else if (wa(a, b)) break;
              d.a === e.a && d.b.a === e.b.a && (P(e, d), Q(b), I(d), (b = R(c)));
            }
          }
          function ya(a, b) {
            a.a = b;
            for (var c = b.c; null === c.i; )
              if (((c = c.c), c === b.c)) {
                var c = a,
                  d = b,
                  e = new ma();
                e.a = d.c.b;
                var f = c.f,
                  g = f.a;
                do g = g.a;
                while (null !== g.b && !f.c(f.b, e, g.b));
                var f = g.b,
                  h = S(f),
                  e = f.a,
                  g = h.a;
                if (0 === x(e.b.a, d, e.a))
                  (e = f.a),
                    t(e.a, d) ||
                      t(e.b.a, d) ||
                      (K(e.b), f.c && (I(e.c), (f.c = !1)), E(d.c, e), ya(c, d));
                else {
                  var k = u(g.b.a, e.b.a) ? f : h,
                    h = void 0;
                  f.d || k.c
                    ? (k === f ? (h = L(d.c.b, e.e)) : (h = L(g.b.c.b, d.c).b),
                      k.c
                        ? ja(k, h)
                        : ((e = c),
                          (f = la(c, f, h)),
                          (f.f = R(f).f + f.a.f),
                          (f.d = oa(e, f.f))),
                      ya(c, d))
                    : U(c, f, d.c, d.c, null, !0);
                }
                return;
              }
            c = ka(c.i);
            e = S(c);
            f = e.a;
            e = T(a, e, null);
            if (e.c === f) {
              var f = e,
                e = f.c,
                g = S(c),
                h = c.a,
                k = g.a,
                l = !1;
              h.b.a !== k.b.a && wa(a, c);
              t(h.a, a.a) &&
                (E(J(e), h), (c = ka(c)), (e = S(c).a), T(a, S(c), g), (l = !0));
              t(k.a, a.a) && (E(f, J(k)), (f = T(a, g, null)), (l = !0));
              l
                ? U(a, c, f.c, e, e, !0)
                : (u(k.a, h.a) ? (d = J(k)) : (d = h),
                  (d = L(f.c.b, d)),
                  U(a, c, d, d.c, d.c, !1),
                  (d.b.i.c = !0),
                  ra(a, c));
            } else U(a, c, e.c, f, f, !0);
          }
          function za(a, b) {
            var c = new ma(),
              d = ea(a.b);
            d.a.b = O;
            d.a.a = b;
            d.b.a.b = -O;
            d.b.a.a = b;
            a.a = d.b.a;
            c.a = d;
            c.f = 0;
            c.d = !1;
            c.c = !1;
            c.h = !0;
            c.b = !1;
            d = a.f;
            d = na(d, d.a, c);
            c.e = d;
          }
          function Aa(a) {
            this.a = new Ba();
            this.b = a;
            this.c = ia;
          }
          function na(a, b, c) {
            do b = b.c;
            while (null !== b.b && !a.c(a.b, b.b, c));
            a = new Ba(c, b.a, b);
            b.a.c = a;
            return (b.a = a);
          }
          function Ba(a, b, c) {
            this.b = a || null;
            this.a = b || this;
            this.c = c || this;
          }
          function X() {
            this.d = Y;
            this.p = this.b = this.q = null;
            this.j = [0, 0, 0];
            this.s = 100130;
            this.n = !1;
            this.o = this.a = this.e = this.f = null;
            this.m = !1;
            this.c = this.r = this.i = this.k = this.l = this.h = null;
          }
          var Y = 0;
          n = X.prototype;
          n.x = function() {
            Z(this, Y);
          };
          n.B = function(a, b) {
            switch (a) {
              case 100142:
                return;
              case 100140:
                switch (b) {
                  case 100130:
                  case 100131:
                  case 100132:
                  case 100133:
                  case 100134:
                    this.s = b;
                    return;
                }
                break;
              case 100141:
                this.m = !!b;
                return;
              default:
                V(this, 100900);
                return;
            }
            V(this, 100901);
          };
          n.y = function(a) {
            switch (a) {
              case 100142:
                return 0;
              case 100140:
                return this.s;
              case 100141:
                return this.m;
              default:
                V(this, 100900);
            }
            return !1;
          };
          n.A = function(a, b, c) {
            this.j[0] = a;
            this.j[1] = b;
            this.j[2] = c;
          };
          n.z = function(a, b) {
            var c = b ? b : null;
            switch (a) {
              case 100100:
              case 100106:
                this.h = c;
                break;
              case 100104:
              case 100110:
                this.l = c;
                break;
              case 100101:
              case 100107:
                this.k = c;
                break;
              case 100102:
              case 100108:
                this.i = c;
                break;
              case 100103:
              case 100109:
                this.p = c;
                break;
              case 100105:
              case 100111:
                this.o = c;
                break;
              case 100112:
                this.r = c;
                break;
              default:
                V(this, 100900);
            }
          };
          n.C = function(a, b) {
            var c = !1,
              d = [0, 0, 0];
            Z(this, 2);
            for (var e = 0; 3 > e; ++e) {
              var f = a[e];
              -1e150 > f && ((f = -1e150), (c = !0));
              1e150 < f && ((f = 1e150), (c = !0));
              d[e] = f;
            }
            c && V(this, 100155);
            c = this.q;
            null === c ? ((c = ea(this.b)), E(c, c.b)) : (K(c), (c = c.e));
            c.a.d = b;
            c.a.g[0] = d[0];
            c.a.g[1] = d[1];
            c.a.g[2] = d[2];
            c.f = 1;
            c.b.f = -1;
            this.q = c;
          };
          n.u = function(a) {
            Z(this, Y);
            this.d = 1;
            this.b = new Ca();
            this.c = a;
          };
          n.t = function() {
            Z(this, 1);
            this.d = 2;
            this.q = null;
          };
          n.v = function() {
            Z(this, 2);
            this.d = 1;
          };
          n.w = function() {
            Z(this, 1);
            this.d = Y;
            var a = this.j[0],
              b = this.j[1],
              c = this.j[2],
              d = !1,
              e = [a, b, c];
            if (0 === a && 0 === b && 0 === c) {
              for (
                var b = [-2 * 1e150, -2 * 1e150, -2 * 1e150],
                  f = [2 * 1e150, 2 * 1e150, 2 * 1e150],
                  c = [],
                  g = [],
                  d = this.b.c,
                  a = d.e;
                a !== d;
                a = a.e
              )
                for (var h = 0; 3 > h; ++h) {
                  var k = a.g[h];
                  k < f[h] && ((f[h] = k), (g[h] = a));
                  k > b[h] && ((b[h] = k), (c[h] = a));
                }
              a = 0;
              b[1] - f[1] > b[0] - f[0] && (a = 1);
              b[2] - f[2] > b[a] - f[a] && (a = 2);
              if (f[a] >= b[a]) (e[0] = 0), (e[1] = 0), (e[2] = 1);
              else {
                b = 0;
                f = g[a];
                c = c[a];
                g = [0, 0, 0];
                f = [f.g[0] - c.g[0], f.g[1] - c.g[1], f.g[2] - c.g[2]];
                h = [0, 0, 0];
                for (a = d.e; a !== d; a = a.e)
                  (h[0] = a.g[0] - c.g[0]),
                    (h[1] = a.g[1] - c.g[1]),
                    (h[2] = a.g[2] - c.g[2]),
                    (g[0] = f[1] * h[2] - f[2] * h[1]),
                    (g[1] = f[2] * h[0] - f[0] * h[2]),
                    (g[2] = f[0] * h[1] - f[1] * h[0]),
                    (k = g[0] * g[0] + g[1] * g[1] + g[2] * g[2]),
                    k > b && ((b = k), (e[0] = g[0]), (e[1] = g[1]), (e[2] = g[2]));
                0 >= b && ((e[0] = e[1] = e[2] = 0), (e[ha(f)] = 1));
              }
              d = !0;
            }
            g = ha(e);
            a = this.b.c;
            b = (g + 1) % 3;
            c = (g + 2) % 3;
            g = 0 < e[g] ? 1 : -1;
            for (e = a.e; e !== a; e = e.e) (e.b = e.g[b]), (e.a = g * e.g[c]);
            if (d) {
              e = 0;
              d = this.b.a;
              for (a = d.b; a !== d; a = a.b)
                if (((b = a.a), !(0 >= b.f))) {
                  do (e += (b.a.b - b.b.a.b) * (b.a.a + b.b.a.a)), (b = b.e);
                  while (b !== a.a);
                }
              if (0 > e) for (e = this.b.c, d = e.e; d !== e; d = d.e) d.a = -d.a;
            }
            this.n = !1;
            e = this.b.b;
            for (a = e.h; a !== e; a = d)
              if (
                ((d = a.h),
                (b = a.e),
                t(a.a, a.b.a) && a.e.e !== a && (ta(this, b, a), I(a), (a = b), (b = a.e)),
                b.e === a)
              ) {
                if (b !== a) {
                  if (b === d || b === d.b) d = d.h;
                  I(b);
                }
                if (a === d || a === d.b) d = d.h;
                I(a);
              }
            this.e = e = new Da();
            d = this.b.c;
            for (a = d.e; a !== d; a = a.e) a.h = xa(e, a);
            Ea(e);
            this.f = new Aa(this);
            za(this, -O);
            for (za(this, O); null !== (e = Fa(this.e)); ) {
              for (;;) {
                a: if (((a = this.e), 0 === a.a)) d = Ga(a.b);
                else if (
                  ((d = a.c[a.d[a.a - 1]]), 0 !== a.b.a && ((a = Ga(a.b)), u(a, d)))
                ) {
                  d = a;
                  break a;
                }
                if (null === d || !t(d, e)) break;
                d = Fa(this.e);
                ta(this, e.c, d.c);
              }
              ya(this, e);
            }
            this.a = this.f.a.a.b.a.a;
            for (e = 0; null !== (d = this.f.a.a.b); ) d.h || ++e, Q(d);
            this.f = null;
            e = this.e;
            e.b = null;
            e.d = null;
            this.e = e.c = null;
            e = this.b;
            for (a = e.a.b; a !== e.a; a = d)
              (d = a.b), (a = a.a), a.e.e === a && (P(a.c, a), I(a));
            if (!this.n) {
              e = this.b;
              if (this.m)
                for (a = e.b.h; a !== e.b; a = d)
                  (d = a.h), a.b.d.c !== a.d.c ? (a.f = a.d.c ? 1 : -1) : I(a);
              else
                for (a = e.a.b; a !== e.a; a = d)
                  if (((d = a.b), a.c)) {
                    for (a = a.a; u(a.b.a, a.a); a = a.c.b);
                    for (; u(a.a, a.b.a); a = a.e);
                    b = a.c.b;
                    for (c = void 0; a.e !== b; )
                      if (u(a.b.a, b.a)) {
                        for (; b.e !== a && (ca(b.e) || 0 >= x(b.a, b.b.a, b.e.b.a)); )
                          (c = L(b.e, b)), (b = c.b);
                        b = b.c.b;
                      } else {
                        for (; b.e !== a && (da(a.c.b) || 0 <= x(a.b.a, a.a, a.c.b.a)); )
                          (c = L(a, a.c.b)), (a = c.b);
                        a = a.e;
                      }
                    for (; b.e.e !== a; ) (c = L(b.e, b)), (b = c.b);
                  }
              if (this.h || this.i || this.k || this.l)
                if (this.m)
                  for (e = this.b, d = e.a.b; d !== e.a; d = d.b) {
                    if (d.c) {
                      this.h && this.h(2, this.c);
                      a = d.a;
                      do this.k && this.k(a.a.d, this.c), (a = a.e);
                      while (a !== d.a);
                      this.i && this.i(this.c);
                    }
                  }
                else {
                  e = this.b;
                  d = !!this.l;
                  a = !1;
                  b = -1;
                  for (c = e.a.d; c !== e.a; c = c.d)
                    if (c.c) {
                      a || (this.h && this.h(4, this.c), (a = !0));
                      g = c.a;
                      do
                        d &&
                          ((f = g.b.d.c ? 0 : 1),
                          b !== f && ((b = f), this.l && this.l(!!b, this.c))),
                          this.k && this.k(g.a.d, this.c),
                          (g = g.e);
                      while (g !== c.a);
                    }
                  a && this.i && this.i(this.c);
                }
              if (this.r) {
                e = this.b;
                for (a = e.a.b; a !== e.a; a = d)
                  if (((d = a.b), !a.c)) {
                    b = a.a;
                    c = b.e;
                    g = void 0;
                    do
                      (g = c),
                        (c = g.e),
                        (g.d = null),
                        null === g.b.d &&
                          (g.c === g ? F(g.a, null) : ((g.a.c = g.c), H(g, J(g))),
                          (f = g.b),
                          f.c === f ? F(f.a, null) : ((f.a.c = f.c), H(f, J(f))),
                          fa(g));
                    while (g !== b);
                    b = a.d;
                    a = a.b;
                    a.d = b;
                    b.b = a;
                  }
                this.r(this.b);
                this.c = this.b = null;
                return;
              }
            }
            this.b = this.c = null;
          };
          function Z(a, b) {
            if (a.d !== b)
              for (; a.d !== b; )
                if (a.d < b)
                  switch (a.d) {
                    case Y:
                      V(a, 100151);
                      a.u(null);
                      break;
                    case 1:
                      V(a, 100152), a.t();
                  }
                else
                  switch (a.d) {
                    case 2:
                      V(a, 100154);
                      a.v();
                      break;
                    case 1:
                      V(a, 100153), a.w();
                  }
          }
          function V(a, b) {
            a.p && a.p(b, a.c);
          }
          function ga(a, b) {
            this.b = a || this;
            this.d = b || this;
            this.a = null;
            this.c = !1;
          }
          function M() {
            this.h = this;
            this.i = this.d = this.a = this.e = this.c = this.b = null;
            this.f = 0;
          }
          function J(a) {
            return a.b.e;
          }
          function Ca() {
            this.c = new N();
            this.a = new ga();
            this.b = new M();
            this.d = new M();
            this.b.b = this.d;
            this.d.b = this.b;
          }
          function N(a, b) {
            this.e = a || this;
            this.f = b || this;
            this.d = this.c = null;
            this.g = [0, 0, 0];
            this.h = this.a = this.b = 0;
          }
          function Da() {
            this.c = [];
            this.d = null;
            this.a = 0;
            this.e = !1;
            this.b = new Ha();
          }
          function Ea(a) {
            a.d = [];
            for (var b = 0; b < a.a; b++) a.d[b] = b;
            a.d.sort(
              (function(a) {
                return function(b, e) {
                  return u(a[b], a[e]) ? 1 : -1;
                };
              })(a.c)
            );
            a.e = !0;
            Ia(a.b);
          }
          function xa(a, b) {
            if (a.e) {
              var c = a.b,
                d = ++c.a;
              2 * d > c.f && ((c.f *= 2), (c.c = Ja(c.c, c.f + 1)));
              var e;
              0 === c.b ? (e = d) : ((e = c.b), (c.b = c.c[c.b]));
              c.e[e] = b;
              c.c[e] = d;
              c.d[d] = e;
              c.h && va(c, d);
              return e;
            }
            c = a.a++;
            a.c[c] = b;
            return -(c + 1);
          }
          function Fa(a) {
            if (0 === a.a) return Ka(a.b);
            var b = a.c[a.d[a.a - 1]];
            if (0 !== a.b.a && u(Ga(a.b), b)) return Ka(a.b);
            do --a.a;
            while (0 < a.a && null === a.c[a.d[a.a - 1]]);
            return b;
          }
          function Ha() {
            this.d = Ja([0], 33);
            this.e = [null, null];
            this.c = [0, 0];
            this.a = 0;
            this.f = 32;
            this.b = 0;
            this.h = !1;
            this.d[1] = 1;
          }
          function Ja(a, b) {
            for (var c = Array(b), d = 0; d < a.length; d++) c[d] = a[d];
            for (; d < b; d++) c[d] = 0;
            return c;
          }
          function Ia(a) {
            for (var b = a.a; 1 <= b; --b) W(a, b);
            a.h = !0;
          }
          function Ga(a) {
            return a.e[a.d[1]];
          }
          function Ka(a) {
            var b = a.d,
              c = a.e,
              d = a.c,
              e = b[1],
              f = c[e];
            0 < a.a &&
              ((b[1] = b[a.a]),
              (d[b[1]] = 1),
              (c[e] = null),
              (d[e] = a.b),
              (a.b = e),
              0 < --a.a && W(a, 1));
            return f;
          }
          function W(a, b) {
            for (var c = a.d, d = a.e, e = a.c, f = b, g = c[f]; ; ) {
              var h = f << 1;
              h < a.a && u(d[c[h + 1]], d[c[h]]) && (h += 1);
              var k = c[h];
              if (h > a.a || u(d[g], d[k])) {
                c[f] = g;
                e[g] = f;
                break;
              }
              c[f] = k;
              e[k] = f;
              f = h;
            }
          }
          function va(a, b) {
            for (var c = a.d, d = a.e, e = a.c, f = b, g = c[f]; ; ) {
              var h = f >> 1,
                k = c[h];
              if (0 === h || u(d[k], d[g])) {
                c[f] = g;
                e[g] = f;
                break;
              }
              c[f] = k;
              e[k] = f;
              f = h;
            }
          }
          function ma() {
            this.e = this.a = null;
            this.f = 0;
            this.c = this.b = this.h = this.d = !1;
          }
          function S(a) {
            return a.e.c.b;
          }
          function R(a) {
            return a.e.a.b;
          }
          this.libtess = {
            GluTesselator: X,
            windingRule: {
              GLU_TESS_WINDING_ODD: 100130,
              GLU_TESS_WINDING_NONZERO: 100131,
              GLU_TESS_WINDING_POSITIVE: 100132,
              GLU_TESS_WINDING_NEGATIVE: 100133,
              GLU_TESS_WINDING_ABS_GEQ_TWO: 100134
            },
            primitiveType: {
              GL_LINE_LOOP: 2,
              GL_TRIANGLES: 4,
              GL_TRIANGLE_STRIP: 5,
              GL_TRIANGLE_FAN: 6
            },
            errorType: {
              GLU_TESS_MISSING_BEGIN_POLYGON: 100151,
              GLU_TESS_MISSING_END_POLYGON: 100153,
              GLU_TESS_MISSING_BEGIN_CONTOUR: 100152,
              GLU_TESS_MISSING_END_CONTOUR: 100154,
              GLU_TESS_COORD_TOO_LARGE: 100155,
              GLU_TESS_NEED_COMBINE_CALLBACK: 100156
            },
            gluEnum: {
              GLU_TESS_MESH: 100112,
              GLU_TESS_TOLERANCE: 100142,
              GLU_TESS_WINDING_RULE: 100140,
              GLU_TESS_BOUNDARY_ONLY: 100141,
              GLU_INVALID_ENUM: 100900,
              GLU_INVALID_VALUE: 100901,
              GLU_TESS_BEGIN: 100100,
              GLU_TESS_VERTEX: 100101,
              GLU_TESS_END: 100102,
              GLU_TESS_ERROR: 100103,
              GLU_TESS_EDGE_FLAG: 100104,
              GLU_TESS_COMBINE: 100105,
              GLU_TESS_BEGIN_DATA: 100106,
              GLU_TESS_VERTEX_DATA: 100107,
              GLU_TESS_END_DATA: 100108,
              GLU_TESS_ERROR_DATA: 100109,
              GLU_TESS_EDGE_FLAG_DATA: 100110,
              GLU_TESS_COMBINE_DATA: 100111
            }
          };
          X.prototype.gluDeleteTess = X.prototype.x;
          X.prototype.gluTessProperty = X.prototype.B;
          X.prototype.gluGetTessProperty = X.prototype.y;
          X.prototype.gluTessNormal = X.prototype.A;
          X.prototype.gluTessCallback = X.prototype.z;
          X.prototype.gluTessVertex = X.prototype.C;
          X.prototype.gluTessBeginPolygon = X.prototype.u;
          X.prototype.gluTessBeginContour = X.prototype.t;
          X.prototype.gluTessEndContour = X.prototype.v;
          X.prototype.gluTessEndPolygon = X.prototype.w;
          if (typeof module !== 'undefined') {
            module.exports = this.libtess;
          }
        },
        {}
      ],
      33: [
        function(_dereq_, module, exports) {
          // (c) Dean McNamee <dean@gmail.com>, 2013.
          //
          // https://github.com/deanm/omggif
          //
          // Permission is hereby granted, free of charge, to any person obtaining a copy
          // of this software and associated documentation files (the "Software"), to
          // deal in the Software without restriction, including without limitation the
          // rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
          // sell copies of the Software, and to permit persons to whom the Software is
          // furnished to do so, subject to the following conditions:
          //
          // The above copyright notice and this permission notice shall be included in
          // all copies or substantial portions of the Software.
          //
          // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
          // IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
          // FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
          // AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
          // LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
          // FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
          // IN THE SOFTWARE.
          //
          // omggif is a JavaScript implementation of a GIF 89a encoder and decoder,
          // including animation and compression.  It does not rely on any specific
          // underlying system, so should run in the browser, Node, or Plask.

          'use strict';

          function GifWriter(buf, width, height, gopts) {
            var p = 0;

            var gopts = gopts === undefined ? {} : gopts;
            var loop_count = gopts.loop === undefined ? null : gopts.loop;
            var global_palette = gopts.palette === undefined ? null : gopts.palette;

            if (width <= 0 || height <= 0 || width > 65535 || height > 65535)
              throw new Error('Width/Height invalid.');

            function check_palette_and_num_colors(palette) {
              var num_colors = palette.length;
              if (num_colors < 2 || num_colors > 256 || num_colors & (num_colors - 1)) {
                throw new Error(
                  'Invalid code/color length, must be power of 2 and 2 .. 256.'
                );
              }
              return num_colors;
            }

            // - Header.
            buf[p++] = 0x47;
            buf[p++] = 0x49;
            buf[p++] = 0x46; // GIF
            buf[p++] = 0x38;
            buf[p++] = 0x39;
            buf[p++] = 0x61; // 89a

            // Handling of Global Color Table (palette) and background index.
            var gp_num_colors_pow2 = 0;
            var background = 0;
            if (global_palette !== null) {
              var gp_num_colors = check_palette_and_num_colors(global_palette);
              while ((gp_num_colors >>= 1)) ++gp_num_colors_pow2;
              gp_num_colors = 1 << gp_num_colors_pow2;
              --gp_num_colors_pow2;
              if (gopts.background !== undefined) {
                background = gopts.background;
                if (background >= gp_num_colors)
                  throw new Error('Background index out of range.');
                // The GIF spec states that a background index of 0 should be ignored, so
                // this is probably a mistake and you really want to set it to another
                // slot in the palette.  But actually in the end most browsers, etc end
                // up ignoring this almost completely (including for dispose background).
                if (background === 0)
                  throw new Error('Background index explicitly passed as 0.');
              }
            }

            // - Logical Screen Descriptor.
            // NOTE(deanm): w/h apparently ignored by implementations, but set anyway.
            buf[p++] = width & 0xff;
            buf[p++] = (width >> 8) & 0xff;
            buf[p++] = height & 0xff;
            buf[p++] = (height >> 8) & 0xff;
            // NOTE: Indicates 0-bpp original color resolution (unused?).
            buf[p++] =
              (global_palette !== null ? 0x80 : 0) | gp_num_colors_pow2; // Global Color Table Flag. // NOTE: No sort flag (unused?).
            buf[p++] = background; // Background Color Index.
            buf[p++] = 0; // Pixel aspect ratio (unused?).

            // - Global Color Table
            if (global_palette !== null) {
              for (var i = 0, il = global_palette.length; i < il; ++i) {
                var rgb = global_palette[i];
                buf[p++] = (rgb >> 16) & 0xff;
                buf[p++] = (rgb >> 8) & 0xff;
                buf[p++] = rgb & 0xff;
              }
            }

            if (loop_count !== null) {
              // Netscape block for looping.
              if (loop_count < 0 || loop_count > 65535)
                throw new Error('Loop count invalid.');
              // Extension code, label, and length.
              buf[p++] = 0x21;
              buf[p++] = 0xff;
              buf[p++] = 0x0b;
              // NETSCAPE2.0
              buf[p++] = 0x4e;
              buf[p++] = 0x45;
              buf[p++] = 0x54;
              buf[p++] = 0x53;
              buf[p++] = 0x43;
              buf[p++] = 0x41;
              buf[p++] = 0x50;
              buf[p++] = 0x45;
              buf[p++] = 0x32;
              buf[p++] = 0x2e;
              buf[p++] = 0x30;
              // Sub-block
              buf[p++] = 0x03;
              buf[p++] = 0x01;
              buf[p++] = loop_count & 0xff;
              buf[p++] = (loop_count >> 8) & 0xff;
              buf[p++] = 0x00; // Terminator.
            }

            var ended = false;

            this.addFrame = function(x, y, w, h, indexed_pixels, opts) {
              if (ended === true) {
                --p;
                ended = false;
              } // Un-end.

              opts = opts === undefined ? {} : opts;

              // TODO(deanm): Bounds check x, y.  Do they need to be within the virtual
              // canvas width/height, I imagine?
              if (x < 0 || y < 0 || x > 65535 || y > 65535) throw new Error('x/y invalid.');

              if (w <= 0 || h <= 0 || w > 65535 || h > 65535)
                throw new Error('Width/Height invalid.');

              if (indexed_pixels.length < w * h)
                throw new Error('Not enough pixels for the frame size.');

              var using_local_palette = true;
              var palette = opts.palette;
              if (palette === undefined || palette === null) {
                using_local_palette = false;
                palette = global_palette;
              }

              if (palette === undefined || palette === null)
                throw new Error('Must supply either a local or global palette.');

              var num_colors = check_palette_and_num_colors(palette);

              // Compute the min_code_size (power of 2), destroying num_colors.
              var min_code_size = 0;
              while ((num_colors >>= 1)) ++min_code_size;
              num_colors = 1 << min_code_size; // Now we can easily get it back.

              var delay = opts.delay === undefined ? 0 : opts.delay;

              // From the spec:
              //     0 -   No disposal specified. The decoder is
              //           not required to take any action.
              //     1 -   Do not dispose. The graphic is to be left
              //           in place.
              //     2 -   Restore to background color. The area used by the
              //           graphic must be restored to the background color.
              //     3 -   Restore to previous. The decoder is required to
              //           restore the area overwritten by the graphic with
              //           what was there prior to rendering the graphic.
              //  4-7 -    To be defined.
              // NOTE(deanm): Dispose background doesn't really work, apparently most
              // browsers ignore the background palette index and clear to transparency.
              var disposal = opts.disposal === undefined ? 0 : opts.disposal;
              if (disposal < 0 || disposal > 3)
                // 4-7 is reserved.
                throw new Error('Disposal out of range.');

              var use_transparency = false;
              var transparent_index = 0;
              if (opts.transparent !== undefined && opts.transparent !== null) {
                use_transparency = true;
                transparent_index = opts.transparent;
                if (transparent_index < 0 || transparent_index >= num_colors)
                  throw new Error('Transparent color index.');
              }

              if (disposal !== 0 || use_transparency || delay !== 0) {
                // - Graphics Control Extension
                buf[p++] = 0x21;
                buf[p++] = 0xf9; // Extension / Label.
                buf[p++] = 4; // Byte size.

                buf[p++] = (disposal << 2) | (use_transparency === true ? 1 : 0);
                buf[p++] = delay & 0xff;
                buf[p++] = (delay >> 8) & 0xff;
                buf[p++] = transparent_index; // Transparent color index.
                buf[p++] = 0; // Block Terminator.
              }

              // - Image Descriptor
              buf[p++] = 0x2c; // Image Seperator.
              buf[p++] = x & 0xff;
              buf[p++] = (x >> 8) & 0xff; // Left.
              buf[p++] = y & 0xff;
              buf[p++] = (y >> 8) & 0xff; // Top.
              buf[p++] = w & 0xff;
              buf[p++] = (w >> 8) & 0xff;
              buf[p++] = h & 0xff;
              buf[p++] = (h >> 8) & 0xff;
              // NOTE: No sort flag (unused?).
              // TODO(deanm): Support interlace.
              buf[p++] = using_local_palette === true ? 0x80 | (min_code_size - 1) : 0;

              // - Local Color Table
              if (using_local_palette === true) {
                for (var i = 0, il = palette.length; i < il; ++i) {
                  var rgb = palette[i];
                  buf[p++] = (rgb >> 16) & 0xff;
                  buf[p++] = (rgb >> 8) & 0xff;
                  buf[p++] = rgb & 0xff;
                }
              }

              p = GifWriterOutputLZWCodeStream(
                buf,
                p,
                min_code_size < 2 ? 2 : min_code_size,
                indexed_pixels
              );

              return p;
            };

            this.end = function() {
              if (ended === false) {
                buf[p++] = 0x3b; // Trailer.
                ended = true;
              }
              return p;
            };

            this.getOutputBuffer = function() {
              return buf;
            };
            this.setOutputBuffer = function(v) {
              buf = v;
            };
            this.getOutputBufferPosition = function() {
              return p;
            };
            this.setOutputBufferPosition = function(v) {
              p = v;
            };
          }

          // Main compression routine, palette indexes -> LZW code stream.
          // |index_stream| must have at least one entry.
          function GifWriterOutputLZWCodeStream(buf, p, min_code_size, index_stream) {
            buf[p++] = min_code_size;
            var cur_subblock = p++; // Pointing at the length field.

            var clear_code = 1 << min_code_size;
            var code_mask = clear_code - 1;
            var eoi_code = clear_code + 1;
            var next_code = eoi_code + 1;

            var cur_code_size = min_code_size + 1; // Number of bits per code.
            var cur_shift = 0;
            // We have at most 12-bit codes, so we should have to hold a max of 19
            // bits here (and then we would write out).
            var cur = 0;

            function emit_bytes_to_buffer(bit_block_size) {
              while (cur_shift >= bit_block_size) {
                buf[p++] = cur & 0xff;
                cur >>= 8;
                cur_shift -= 8;
                if (p === cur_subblock + 256) {
                  // Finished a subblock.
                  buf[cur_subblock] = 255;
                  cur_subblock = p++;
                }
              }
            }

            function emit_code(c) {
              cur |= c << cur_shift;
              cur_shift += cur_code_size;
              emit_bytes_to_buffer(8);
            }

            // I am not an expert on the topic, and I don't want to write a thesis.
            // However, it is good to outline here the basic algorithm and the few data
            // structures and optimizations here that make this implementation fast.
            // The basic idea behind LZW is to build a table of previously seen runs
            // addressed by a short id (herein called output code).  All data is
            // referenced by a code, which represents one or more values from the
            // original input stream.  All input bytes can be referenced as the same
            // value as an output code.  So if you didn't want any compression, you
            // could more or less just output the original bytes as codes (there are
            // some details to this, but it is the idea).  In order to achieve
            // compression, values greater then the input range (codes can be up to
            // 12-bit while input only 8-bit) represent a sequence of previously seen
            // inputs.  The decompressor is able to build the same mapping while
            // decoding, so there is always a shared common knowledge between the
            // encoding and decoder, which is also important for "timing" aspects like
            // how to handle variable bit width code encoding.
            //
            // One obvious but very important consequence of the table system is there
            // is always a unique id (at most 12-bits) to map the runs.  'A' might be
            // 4, then 'AA' might be 10, 'AAA' 11, 'AAAA' 12, etc.  This relationship
            // can be used for an effecient lookup strategy for the code mapping.  We
            // need to know if a run has been seen before, and be able to map that run
            // to the output code.  Since we start with known unique ids (input bytes),
            // and then from those build more unique ids (table entries), we can
            // continue this chain (almost like a linked list) to always have small
            // integer values that represent the current byte chains in the encoder.
            // This means instead of tracking the input bytes (AAAABCD) to know our
            // current state, we can track the table entry for AAAABC (it is guaranteed
            // to exist by the nature of the algorithm) and the next character D.
            // Therefor the tuple of (table_entry, byte) is guaranteed to also be
            // unique.  This allows us to create a simple lookup key for mapping input
            // sequences to codes (table indices) without having to store or search
            // any of the code sequences.  So if 'AAAA' has a table entry of 12, the
            // tuple of ('AAAA', K) for any input byte K will be unique, and can be our
            // key.  This leads to a integer value at most 20-bits, which can always
            // fit in an SMI value and be used as a fast sparse array / object key.

            // Output code for the current contents of the index buffer.
            var ib_code = index_stream[0] & code_mask; // Load first input index.