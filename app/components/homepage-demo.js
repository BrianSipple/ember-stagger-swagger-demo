import Ember from 'ember';

const {
  Component,
  set,
} = Ember;

export default Component.extend({

  classNames: ['homepage-demo'],

  staggerDirectionOptions: [],
  staggerListItems: [],
  supportedEffects: [],
  animationDuration: 500,
  staggerInterval: 32,


  currentInDirection: null,
  currentOutDirection: null,


  currentSupportedInEffect: null,
  currentSupportedOutEffect: null,
  currentCustomInEffect: null,
  currentCustomOutEffect: null,

  showItems: false,
  isAnimating: false,


  init () {
    this._super(...arguments);

    this.currentInDirection = this.currentInDirection || 'left';
    this.currentOutDirection = this.currentOutDirection || this.currentInDirection;

    this.currentSupportedInEffect = this.currentSupportedInEffect || this.supportedEffects[0];
    this.currentSupportedOutEffect = this.currentSupportedOutEffect || this.supportedEffects[0];
  },


  actions: {

    onStaggerDirectionSelected (direction) {
        set(this, 'currentInDirection', direction);
    },

    onShowItemsToggled (ev) {
      ev.stopPropagation();

      set(this, 'showItems', !this.get('showItems'));
    },

    onStaggerListAnimationStart (ev) {
      set(this, 'isAnimating', true);
    },

    onStaggerListAnimationComplete () {
      set(this, 'isAnimating', false);
    }

  },
});
