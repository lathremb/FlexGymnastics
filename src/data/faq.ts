import { site } from './site';

// Answers may contain simple HTML (links, lists).
export const faqs: { q: string; a: string }[] = [
  {
    q: 'When can we start?',
    a: '<p>Any time! We offer <strong>open enrollment</strong> — you can join our year-round program at any time because our curriculum is continuous.</p>',
  },
  {
    q: 'How do I pay for classes?',
    a: `<p>Cash, credit cards and checks are accepted. Fees are auto-drafted from your credit/debit card on the 20th of the month before your next month of classes. You may also pay membership and fees at the front desk or through the <a href="${site.links.portal}">Parent Portal</a> before the 19th of each month.</p>`,
  },
  {
    q: 'What should my child wear?',
    a: `<p>Comfortable clothing. Leotards work great for girls; shorts and t-shirts are OK for girls and boys. Slightly fitted clothing is best.</p>
<ul>
<li>No bulky t-shirts, long shorts, denim, buckles, buttons or zippers.</li>
<li>No skirts, tights, socks or jewelry (stud earrings are OK).</li>
<li>Hair should be secured with barrettes and ponytails.</li>
</ul>`,
  },
  {
    q: 'Can parents watch?',
    a: `<p>Parents are encouraged to stay and watch, but please don’t communicate with your child during class — it helps them stay focused.</p>
<p>Drop-off is fine if your child is comfortable. Please come back inside to pick up (don’t ask kids to find you in the parking lot), and return promptly near the end of class — our coaches are usually scheduled right after for their next group.</p>`,
  },
  {
    q: 'What is the coach-to-child ratio?',
    a: '<p>Generally no more than <strong>8:1</strong> for classes over age 5. Preschool classes are generally no larger than <strong>6:1</strong>. Please call ahead to schedule enrollment in new or makeup classes.</p>',
  },
  {
    q: 'Are gymnasts insured?',
    a: '<p>Yes. The annual membership provides secondary insurance for accidents on our premises. Competitive gymnasts and coaches are all registered with USA Gymnastics, which provides insurance at sanctioned events.</p>',
  },
];
