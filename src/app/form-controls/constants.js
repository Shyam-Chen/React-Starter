export const INITIAL = {
  // simple select
  age: '',

  // multiple select
  countries: [
    'Taiwan',
    'Japan',
    'Korea',
    'China',
    'Singapore',
    'United States',
    'Canada',
    'Germany',
    'France',
    'Spain',
    'Netherlands',
    'United Kingdom'
  ],

  // nested select
  animals: [
    {
      category: 'Cat',
      variety: [
        'British Shorthair',
        'Persian',
        'Ragdoll',
        'Sphynx',
        'Exotic Shorthair',
        'Scottish Fold'
      ]
    }, {
      category: 'Dog',
      variety: [
        'German Shepherd',
        'Labrador Retriever',
        'Beagle',
        'Bulldog',
        'Golden Retriever',
        'Great Dane',
        'Poodle'
      ]
    }
  ],

  // checkboxes
  frameworks: {
    angular: false,
    react: true,
    vue: false
  },

  // radio buttons
  gender: '',

  // switches
  iPhoneX: true,

  // slider
  kilometers: 0,

  // autocomplete

  // datepicker

  // timepicker
};

export const SET_DATA = '[Form Controls] SET_DATA';
