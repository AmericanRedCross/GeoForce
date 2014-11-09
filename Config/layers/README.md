The files in the layers directory allow you to configure what layers
are in the layers panel as well as the basemaps available in the
application.

Make sure that you have a `type` property for each layer.
This helps save the guesswork of what type of layer it is, and
it ensures that the application will know what to do with it.

Add layers to the corresponding file for the theme you want it to
show up in by default. Also, make sure you put the theme name in
the theme property for each layer as well.

If you want a layer to show up by default for all themes, flag the
them as 'all', and put it in the `all.js` file. If you want the layer
to only show up when it is searched for, flag the theme as `other`
and put it in `other.js`.

The actual key name of the layer (like `gdacs` or `precipitation`) is
the name of the layer that is used in the layers list in the url.

For example:

```
https://geo.redcross.org/mapfolio/index.html#/map@36.031332,61.523437,3(ortho,themecount,precipitation,gdacs)
```

With this URL route, you have the ortho basemap, the theme badges with a count, the precipitation, and the gdacs layers.
