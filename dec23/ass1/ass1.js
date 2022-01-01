var g_class = {
  'name': "Dec21WebFundamentals",
  'instructor': {
    'name': "soniya",
    'subject': "MERN"
  },
  'students': [{
      'name': 'manu k',
      'marks': 83,
    },
    {
      'name': 'vinod bhaskar',
      'marks': 87,
    },
    {
      'name': 'jyothish',
      'marks': 84,
    },
    {
      'name': 'vimal kumar',
      'marks': 70,
    },
    {
     'name': 'ajith k',
     'marks': 88,
    },
    {
     'name': 'mohan das',
     'marks': 85,
    },
    {
     'name': 'manoj k',
     'marks': 88,
    }
  ],
};
for( var property=0; property<g_class.students.length; property++ ){

  if( g_class.students[property].marks>=85 ){

    console.log( g_class.students[property].name );
  }
}