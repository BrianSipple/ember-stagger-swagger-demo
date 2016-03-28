import Ember from 'ember';

const {
  Component,
  set,
} = Ember;

export default Component.extend({

  tagName: 'input',
  classNames: ['x-slider'],
  type: 'range',

  attributeBindings: [
    'id',
    'min',
    'max',
    'step',
    'value',
    'type',
  ],

  input (ev) {
    ev.stopPropagation();

    const newValue = Number(ev.target.value);

    set(this, 'value', newValue);

    if (typeof this.attrs.oninput === 'function') {
      this.attrs.oninput(newValue);
    }
  },

});
