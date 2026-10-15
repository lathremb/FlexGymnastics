export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; desc?: string }[];
}

export const nav: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Classes',
    href: '/classes/',
    children: [
      { label: 'Parent & Tot', href: '/parent-and-tots/', desc: 'Ages 1–3, with a grown-up' },
      { label: 'Preschool', href: '/preschool-gymnastics/', desc: 'Ages 3–5' },
      { label: 'Kinder', href: '/preschool-gymnastics/#kinder', desc: 'Ages 5–6' },
      { label: 'Girls Gymnastics', href: '/girls-classes/', desc: 'Ages 6+' },
      { label: 'Boys Gymnastics', href: '/boys-classes/', desc: 'Ages 6+' },
      { label: "NinjaZone & Lil' Ninja", href: '/ninjazone/', desc: 'Ages 3–13' },
      { label: 'Tuition & Membership', href: '/tuition/', desc: 'Prices & policies' },
    ],
  },
  { label: 'NinjaZone', href: '/ninjazone/' },
  {
    label: 'Teams',
    href: '/teams/',
    children: [
      { label: 'Team Development for Girls', href: '/team-development-for-girls/', desc: 'Hot Shots → Pre-Team' },
      { label: 'Girls Competitive Teams', href: '/girls-competitive-teams/', desc: 'USAG DP & XCEL' },
      { label: 'Team Development for Boys', href: '/team-development-for-boys/', desc: 'PreTeam skills' },
      { label: 'Boys Competitive Teams', href: '/boys-competitive-teams/', desc: 'Levels 3–8' },
    ],
  },
  { label: 'Calendar', href: '/annual-calendar/' },
  { label: 'FAQ', href: '/faq/' },
  { label: 'About Us', href: '/about-us/' },
  { label: 'Contact', href: '/contact/' },
];
