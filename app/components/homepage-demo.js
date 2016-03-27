import Ember from 'ember';

const {
  Component,
  set,
} = Ember;

export default Component.extend({

  classNames: ['homepage-demo'],

  staggerDirectionOptions: null,
  staggerListItems: null,

  currentInDirection: null,
  currentOutDirection: null,
  showItems: false,


  init () {
    this._super(...arguments);

    this.currentInDirection = this.currentInDirection || 'left';
  },


  actions: {

    onStaggerDirectionSelected (direction) {
        set(this, 'currentInDirection', direction);
    },

    onShowItemsToggled (showItems) {
      set(this, 'showItems', showItems);
    },

  }
});
