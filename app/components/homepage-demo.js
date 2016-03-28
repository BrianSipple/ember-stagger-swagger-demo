import Ember from 'ember';

const {
  Component,
  set,
} = Ember;

export default Component.extend({

  classNames: ['homepage-demo'],

  staggerDirectionOptions: [],
  staggerListItems: [],
  animationDuration: 500,
  staggerInterval: 32,


  currentInDirection: null,
  currentOutDirection: null,


  customInAnimationName: null,
  customOutAnimationName: null,
  showItems: false,


  init () {
    this._super(...arguments);

    this.currentInDirection = this.currentInDirection || 'left';
    this.currentOutDirection = this.currentOutDirection || this.currentInDirection;
  },


  actions: {

    onStaggerDirectionSelected (direction) {
        set(this, 'currentInDirection', direction);
    },

    onShowItemsToggled (showItems) {
      set(this, 'showItems', showItems);
    },

  },
});
