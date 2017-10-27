export const INITIAL = {
  // input
  name: '',
  nameTouch: false,
  nameError: false,

  // select
  age: '',
  listOfage: [
    { value: 12, label: 'Twelve' },
    { value: 13, label: 'Thirteen' },
    { value: 14, label: 'Fourteen' },
    { value: 15, label: 'Fifteen' },
    { value: 16, label: 'Sixteen' },
    { value: 17, label: 'Seventeen' },
    { value: 18, label: 'Eighteen' },
    { value: 19, label: 'Nineteen' },
    { value: 20, label: 'Twenty' },
    { value: 21, label: 'Twenty one' },
    { value: 22, label: 'Twenty two' },
    { value: 23, label: 'Twenty three' },
    { value: 24, label: 'Twenty four' },
    { value: 25, label: 'Twenty five' }
  ],

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
    'United Kingdom',
    'Italy',
    'Ukraine',
    'Sweden',
    'Russia'
  ],

  // nested select
  category: '',
  variety: '',
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
