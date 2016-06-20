L.Control.EasyButtons = L.Control.extend({
  options: {
    position: 'topleft',
    title: '',
    intendedIcon: 'fa-circle-o',
    link: null //RW - add optional hyperlink
  },

  onAdd: function () {
    var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control custom-reset');

    this.link = L.DomUtil.create('a', 'leaflet-bar-part', container);
    this._addImage()

    //RW - add link if present
    if(this.options.link){
      this.link.href = this.options.link;
    }
    else{
      this.link.href = '#';
    }

    L.DomEvent.on(this.link, 'click', this._click, this);
    this.link.title = this.options.title;

    return container;
  },

  intendedFunction: function(){ alert('no function selected');},

  _click: function (e) {
    if(this.options.link){
       //allow a href behavior
    }
    else{
      //stop default link behavior and do this.
      L.DomEvent.stopPropagation(e);
      L.DomEvent.preventDefault(e);
      this.intendedFunction();
    }

  },

  _addImage: function () {
    var extraClasses = this.options.intendedIcon.lastIndexOf('fa', 0) === 0 ? ' fa fa-lg' : ' glyphicon';

    var icon = L.DomUtil.create('i', this.options.intendedIcon + extraClasses, this.link);
    icon.id = this.options.id;
  }
});

L.easyButton = function( btnIcon , btnFunction , btnTitle , btnMap , btnId, btnALink) {
  var newControl = new L.Control.EasyButtons;

  if (btnIcon) newControl.options.intendedIcon = btnIcon;
  if (btnId) newControl.options.id = btnId;
  if(btnALink) newControl.options.link = btnALink;

  if ( typeof btnFunction === 'function'){
    newControl.intendedFunction = btnFunction;
  }

  if (btnTitle) newControl.options.title = btnTitle;

  if ( btnMap == '' ){
    // skip auto addition
  } else if ( btnMap ) {
    btnMap.addControl(newControl);
  } else {
    map.addControl(newControl);
  }
  return newControl;
};
