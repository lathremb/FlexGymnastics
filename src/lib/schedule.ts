import data from '../data/classes.json';
import { site } from '../data/site';

export type Status = 'open' | 'waitlist' | 'closed' | 'registrar';

export interface ClassRow {
  program: string;
  level: string;
  code: string;
  day: string;
  start: string;
  end: string;
  ageMin: number;
  ageMax: number;
  ages: string;
  tuition: number;
  status: Status;
  signupUrl?: string;
  note?: string;
}

export const programs: Record<string, { name: string; ages: string; href: string }> = {
  'parent-tot': { name: 'Parent & Tot', ages: '1–3', href: '/parent-and-tots/' },
  preschool: { name: 'Preschool', ages: '3–5', href: '/preschool-gymnastics/' },
  kinder: { name: 'Kinder', ages: '5–6', href: '/preschool-gymnastics/#kinder' },
  girls: { name: 'Girls Gymnastics', ages: '6+', href: '/girls-classes/' },
  boys: { name: 'Boys Gymnastics', ages: '6+', href: '/boys-classes/' },
  ninjazone: { name: 'NinjaZone', ages: '6–14', href: '/ninjazone/' },
  'lil-ninja': { name: "Lil' Ninja", ages: '3–5', href: '/ninjazone/#lil-ninja' },
};

export const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
export const DAY_NAMES: Record<string, string> = {
  Mon: 'Monday', Tue: 'Tuesday', Wed: 'Wednesday', Thu: 'Thursday',
  Fri: 'Friday', Sat: 'Saturday', Sun: 'Sunday',
};

export const scheduleUpdated: string = data.updated;
const all = data.classes as ClassRow[];

export function getClasses(filter?: { programs?: string[]; levels?: string[] }): ClassRow[] {
  return all
    .filter((c) => !filter?.programs || filter.programs.includes(c.program))
    .filter((c) => !filter?.levels || filter.levels.includes(c.level))
    .sort((a, b) => DAYS.indexOf(a.day) - DAYS.indexOf(b.day) || a.start.localeCompare(b.start));
}

export function fmtTime(t: string): string {
  const [h, m] = t.split(':').map(Number);
  const suffix = h >= 12 ? 'pm' : 'am';
  const hr = h % 12 === 0 ? 12 : h % 12;
  return `${hr}:${String(m).padStart(2, '0')}${suffix}`;
}

export function fmtRange(c: ClassRow): string {
  return `${fmtTime(c.start)} – ${fmtTime(c.end)}`;
}

export function minutes(c: ClassRow): number {
  const toMin = (t: string) => { const [h, m] = t.split(':').map(Number); return h * 60 + m; };
  return toMin(c.end) - toMin(c.start);
}

export const statusInfo: Record<Status, { label: string; action: string }> = {
  open: { label: 'Open', action: 'Sign Up' },
  waitlist: { label: 'Waitlist', action: 'Join Waitlist' },
  closed: { label: 'Closed', action: '' },
  registrar: { label: 'By Registrar', action: 'Text Registrar' },
};

export function actionHref(c: ClassRow): string {
  if (c.status === 'registrar') return `sms:${site.phones.text.tel}`;
  return c.signupUrl || site.links.enroll;
}
