import Ember from 'ember';

const { Route } = Ember;

const spaceCrafts = [
  { name: 'Falcon Heavy', weight: 33, size: 99, imgURL: '' },
  { name: 'Falcon Heavy', weight: 33, size: 99, imgURL: '' },
  { name: 'Falcon Heavy', weight: 33, size: 99, imgURL: '' },
  { name: 'Falcon Heavy', weight: 33, size: 99, imgURL: '' },
  { name: 'Falcon Heavy', weight: 33, size: 99, imgURL: '' },
  { name: 'Falcon Heavy', weight: 33, size: 99, imgURL: '' },
];

const ANIMATION_NAMES = [
  'slideAndFade',
  'slide',
  'fade',
  //SCALE: 'scale', // TODO: Scale from left, right, up, down, and up
];

export default Route.extend({

  model () {
    return {
      staggerDirectionOptions: ['left', 'up', 'right', 'down'],
      staggerListItems: spaceCrafts,
      staggerInterval: 32,
      animationDuration: 500,
      supportedEffects: ANIMATION_NAMES,
    };
  },

});
