require('aframe');
require('aframe-broadcast-component');

AFRAME.registerComponent('sentence-text', {
  schema: {type: 'selector'},

  init: function () {
    var el = this.el;
    this.data.addEventListener('componentchanged', function (evt) {
      if (evt.detail.name !== 'value') { return; }
      el.setAttribute('value', evt.detail.newData);
    });
  }
});