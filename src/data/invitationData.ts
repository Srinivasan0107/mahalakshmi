export const invitationData = {
  homeName: 'Mahalakshmi Illam',
  blessing: 'ஸ்ரீ நாகாத்தம்மன் துணை',
  ceremonyName: 'Grihapravesam',
  ceremonySubtitle: 'Housewarming Ceremony',

  intro:
    'With happiness and gratitude, we are stepping into our dream home and would be delighted to have your presence and blessings on this special occasion.',

  hosts: [
    {
      name: 'Mr. Balaji & Mrs. Mahalakshmi',
      role: 'Wellness Coach',
    },
  ],

  family: [
    { name: 'Mr. Srinivasan' },
    { name: 'Mr. Upendran' },
  ],

  event: {
    date: 'Wednesday, 17 June 2026',
    day: 'Wednesday',
    dateShort: '17 June 2026',
    ceremonies: [
      {
        name: 'Ganapathi Homam',
        time: '4:30 AM – 6:30 AM',
        icon: 'flame',
      },
      {
        name: 'Grihapravesam',
        time: 'Following the Homam',
        icon: 'home',
      },
      {
        name: 'House Visit & Blessings',
        time: '7:30 AM Onwards',
        icon: 'users',
      },
      {
        name: 'Morning Breakfast',
        time: '7:30 AM Onwards',
        icon: 'coffee',
      },
      {
        name: 'Lunch',
        time: '12:30 PM Onwards',
        icon: 'utensils',
      },
    ],
  },

  venue: {
    name: 'Mahalakshmi Illam',
    addressLine1: 'Plot No 13C, Taj Nagar Street,',
    addressLine2: 'Thelliyaragaram Village, Ayyappan Thangal,',
    addressLine3: 'V7 Hotel (Backside), Porur,',
    addressLine4: 'Chennai – 600056',
    googleMapsEmbed:
      'https://maps.google.com/maps?q=13.0322744,80.1420609&z=17&output=embed',
    googleMapsLink:
      'https://maps.google.com/?q=13.0322744,80.1420609',
  },

  blessingQuote:
    'Your presence and blessings will make our new beginning even more special.',

  compliments: [
    {
      husband: 'Mr. Esakkimuthu',
      wife: 'Mrs. Bagiyarathi',
    },
    {
      husband: 'Mr. Jayachandran',
      wife: 'Mrs. Revathi',
    },
  ],

  footer: {
    thanks: 'Thank You',
    closing: 'Looking forward to welcoming you to our new home.',
  },
} as const
