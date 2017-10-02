export const INITIAL = {
  // select
  age: '',

  // multiple select
  countries: [],
  listOfCountries: [
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
    react: false,
    vue: false
  },

  // radio buttons
  gender: '',

  // switch
  autoplay: false,

  // slider
  kilometers: 0,

  // autocomplete

  // datepicker

  // datepicker with range

  // timepicker

  // colorpicker

  // file upload
};

export const SET_DATA = '[Form Controls] SET_DATA';
