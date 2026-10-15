// ─────────────────────────────────────────────────────────────
// Global facts for Flex Gymnastics AZ.
// Edit here and every page/footer/schema updates together.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Flex Gymnastics AZ',
  shortName: 'FLEX',
  url: 'https://flexgymnasticsaz.com',
  tagline: 'Recreational and Competitive Gymnastics for Girls & Boys Ages 12 Months and Up!',
  slogans: [
    'Fitness is FUN at Flex!',
    'Gymnastics: Begin Here, Go Anywhere!',
    'Work Hard! Play Safe! Be Strong!',
  ],

  // DRAFT MODE — this build is a pitch preview, not the live site.
  // While true, every page gets <meta name="robots" content="noindex, nofollow">
  // so the draft never competes with the real site in Google.
  // Set to false at launch.
  draft: true,

  // Purple "Owner note" boxes that flag dates/facts needing confirmation.
  // Hidden for the pitch; set true to show them during a content review.
  showOwnerNotes: false,

  // Logo image in /public/images/. Set to '' to fall back to a text wordmark.
  // OWNER: current file is a 206px thumbnail — a full-size PNG/SVG will look sharper.
  logo: '/images/logo.png',

  address: {
    street: '11085 N Oracle Rd',
    city: 'Oro Valley',
    region: 'AZ',
    zip: '85737',
    country: 'US',
    full: '11085 N Oracle Rd, Oro Valley, AZ 85737',
    mapUrl: 'https://maps.app.goo.gl/4SM1wXs4F1QPte6N8',
    mapEmbed:
      'https://www.google.com/maps?q=Flex+Gymnastics,+11085+N+Oracle+Rd,+Oro+Valley,+AZ+85737&output=embed',
  },

  phones: {
    main: { label: '520-744-6180', tel: '+15207446180' },
    flex: { label: '520-775-FLEX (3539)', tel: '+15207753539' },
    text: { label: '520-263-8795', tel: '+15202638795' },
  },

  email: 'FlexGymnasticsAZ@gmail.com',

  officeHours: [
    { days: 'Mon – Thu', hours: '4:00 – 8:00 PM' },
    { days: 'Saturday', hours: '9:00 AM – Noon' },
  ],
  gymHoursNote: 'Daily hours vary depending on class times. Please text for more information.',

  social: {
    instagram: 'https://www.instagram.com/flexgymnasticsaz/',
    // OWNER: confirm this is the correct Facebook page.
    facebook: 'https://www.facebook.com/profile.php?id=61587428198229',
  },

  links: {
    enroll: 'https://app.jackrabbitclass.com/reg.asp?id=518849',
    portal: 'https://app3.jackrabbitclass.com/portal/ppLogin.asp?id=518849',
    gymSchedule: 'http://flexgyminfo.ddns.net/events1.html',
    gymScheduleJson: 'http://flexgyminfo.ddns.net/json01.php',
    ninjaSchedule: 'http://flexgyminfo.ddns.net/events.html',
    girlsSchedule: 'http://flexgyminfo.ddns.net/girls.html',
    boysSchedule: 'http://flexgyminfo.ddns.net/boys.html',
    parentTotSchedule: 'http://flexgyminfo.ddns.net/parenttot.html',
    preschoolSchedule: 'http://flexgyminfo.ddns.net/events1.html#PC',
    kinderSchedule: 'http://flexgyminfo.ddns.net/events1.html#KG',
    jobs: 'http://flexgyminfo.ddns.net/jobapp1.php',
    flexU: 'https://landing.marketing/flexgymnasticsaz/coaches-teaching-flexu/',
    // Existing contact form (embedded on the current Contact page).
    contactFormEmbed: 'https://link.creativelydisruptive.com/widget/form/3OheOCsOdhavkrlhOpzs',
  },

  articles: {
    preschool: {
      title: '20 Reasons Your Preschooler Should Do Gymnastics',
      url: 'https://annejosephson.wordpress.com/2014/09/22/20-reasons-your-preschooler-should-do-gymnastics-that-have-nothing-to-do-with-learning-gymnastics/',
    },
    girls: {
      title: '25 Life Lessons Gymnastics Teaches (without Even Trying)',
      url: 'https://annejosephson.wordpress.com/2015/02/19/25-life-lessons-gymnastics-teaches-without-even-trying/',
    },
    boys: {
      title: "5 Reasons Your Son Should Do Gymnastics… Even if He Doesn't Want to be a Gymnast!",
      url: 'https://annejosephson.wordpress.com/2015/10/12/5-simple-reasons-your-son-should-do-gymnastics-even-if-he-doesnt-want-to-be-a-gymnast/',
    },
    tots: {
      title: 'Gymnastics: Begin Here, Go Anywhere!',
      url: 'https://annejosephson.wordpress.com/2016/02/22/gymnastics-begin-here-go-anywhere/',
    },
  },

  stats: [
    { value: '45+', label: 'Years in business' },
    { value: '60,000+', label: 'Kids served' },
    { value: '18,000+', label: 'Sq ft facility' },
  ],

  // Google Tag Manager containers. Disabled for the draft so preview visits
  // don't land in the gym's real analytics. At launch, restore the IDs from
  // the current site: ['GTM-NTHSCCL', 'GTM-MP9GWFGQ']
  gtmIds: [] as string[],
};

export const fees = {
  membership: 50,
  membershipYear: '2026–27',
  ninjaUniform: 36,
};

// Gym closures. OWNER: these are the 2025 dates from the current site —
// confirm/update before launch.
export const closures = {
  year: '2025',
  items: [
    { name: 'Memorial Week', dates: 'May 26 – 30' },
    { name: 'Independence Week', dates: 'July 1 – 5' },
    { name: 'Halloween', dates: 'Oct 31' },
    { name: 'Thanksgiving', dates: 'Nov 26 – 28' },
    { name: 'Winter Break', dates: 'Dec 22 – 31' },
    { name: "New Year's Eve", dates: 'Dec 31' },
    { name: 'Sundays', dates: 'Closed every Sunday' },
  ],
  notes: [
    'Others may be announced.',
    'Team Programs: please refer to your Annual Team Calendar for team closure dates.',
  ],
};
