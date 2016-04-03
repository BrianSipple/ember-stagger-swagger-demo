import Ember from 'ember';

const { Route } = Ember;

const spaceCrafts = [
  { name: 'Roadster', year: 2008, imgURL: '' },
  { name: 'Model S', year: 2012, imgURL: '' },
  { name: 'Model X', year: 2012, imgURL: '' },
  { name: 'Model 3', year: 2016, imgURL: '' },
  { name: 'Roadster', year: 2008, imgURL: '' },
  { name: 'Model S', year: 2012, imgURL: '' },
  { name: 'Model X', year : 2012, imgURL: '' },
  { name: 'Model 3', year: 2016, imgURL: '' },
];

const ANIMATION_NAMES = [
  'slideAndFade',
  'slide',
  'fade',
  'scale',
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
