/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/28/14.
 */

var debug = {};

//set up jQuery layout
window.layout = $('#AppContainer').layout({
  applyDefaultStyles: false,
  west__resizable: false,
  west__closable: false,

  west__spacing_open: 0,
  north__spacing_open: 0,
  center__onresize_end: function(){

  }
});

//resize left(west panel) to be 59px wide.
window.layout.sizePane("west", 59);

var wait = false;
