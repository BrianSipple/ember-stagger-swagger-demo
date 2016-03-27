import Ember from 'ember';

const {
  Component,
  set,
} = Ember;

export default Component.extend({

  classNames: ['homepage-demo'],

  staggerDirectionOptions: null,
  staggerListItems: null,
  currentStaggerDirection: null,

  showItems: false,

  init () {
    this._super(...arguments);

    this.currentStaggerDirection = this.currentStaggerDirection || 'left';
  },


  actions: {

    onStaggerDirectionSelected (direction) {
        set(this, 'currentStaggerDirection', direction);
    },

    onShowItemsToggled (showItems) {
      set(this, 'showItems', showItems);
    },

  }
});
