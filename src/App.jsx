import { useState } from 'react'

const Icon = ({ name, size = 20 }) => {
  const paths = {
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    spark: <><path d="m12 3-1.4 4.1a5.4 5.4 0 0 1-3.5 3.5L3 12l4.1 1.4a5.4 5.4 0 0 1 3.5 3.5L12 21l1.4-4.1a5.4 5.4 0 0 1 3.5-3.5L21 12l-4.1-1.4a5.4 5.4 0 0 1-3.5-3.5L12 3Z"/></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>,
    send: <><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></>,
    chart: <><path d="M3 3v18h18"/><path d="m7 16 4-5 4 3 5-7"/></>,
    target: <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></>,
    chevron: <path d="m9 18 6-6-6-6"/>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    close: <><path d="m6 6 12 12M18 6 6 18"/></>,
  }

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

const features = [
  {
    icon: 'send',
    number: '01',
    title: 'Automate your outreach',
    text: 'Build multi-step campaigns that reach the right prospects and follow up automatically—without the manual busywork.',
  },
  {
    icon: 'spark',
    number: '02',
    title: 'Personalize with AI',
    text: 'Use AI to research every prospect and write relevant messages that feel thoughtful, specific, and genuinely human.',
  },
  {
    icon: 'chart',
    number: '03',
    title: 'Generate more leads',
    text: 'Turn consistent, personalized conversations into qualified replies, booked meetings, and a fuller sales pipeline.',
  },
]

const faqs = [
  ['What does OutreacherPro automate?', 'OutreacherPro automates prospect outreach, AI-powered personalized email generation, and campaign timing—so you can focus on qualified conversations.'],
  ['Will AI-generated messages sound automated?', 'No. The AI uses real prospect and company context to tailor each message to your offer and voice. You stay in control of the strategy, tone, and final campaign.'],
  ['How quickly can I launch a campaign?', 'Once your audience, offer, and messaging are set, you can build and launch an automated campaign in a fraction of the time required for manual outreach.'],
  ['Who is OutreacherPro built for?', 'It is designed for founders, sales teams, agencies, consultants, and individuals who need to reach businesses without sacrificing relevance or personalization.'],
]

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="OutreacherPro home">
      <img className="logo-mark" src="/favicon.svg" alt="" />
      <span>Outreacher<span>Pro</span></span>
    </a>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)

  const closeMenu = () => setMenuOpen(false)

  return (
    <main id="top">
      <nav className="nav container" aria-label="Main navigation">
        <Logo />
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#contact" className="button button-small nav-cta" onClick={closeMenu}><span className="desktop-nav-label">Book a strategy call</span><span className="mobile-nav-label">Book a call</span> <Icon name="arrow" size={16} /></a>
        </div>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          <Icon name={menuOpen ? 'close' : 'menu'} />
        </button>
      </nav>

      <header className="hero container">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse" /> AI-powered outreach, built to scale</div>
          <h1>
            <span>Automate outreach.</span>
            <span>Personalize with AI.</span>
            <em>Get more leads.</em>
          </h1>
          <p className="hero-subtitle">OutreacherPro automates your outbound campaigns and uses AI to make every message feel personal—so more prospects become qualified leads.</p>
          <div className="hero-actions">
            <a href="#contact" className="button">Start generating leads <Icon name="arrow" size={18} /></a>
            <a href="#how-it-works" className="text-link">See the process <span>↓</span></a>
          </div>
          <div className="hero-proof">
            <span className="hero-proof-icon"><Icon name="spark" size={17}/></span>
            <div><strong>Built for growth</strong><span>Scale outreach without sounding robotic</span></div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Illustration of personalized outreach emails being sent">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="mail-sheet mail-sheet-back" aria-hidden="true" />
          <div className="mail-sheet mail-sheet-mid" aria-hidden="true" />
          <div className="mail-panel">
            <div className="mail-panel-top">
              <div className="dash-brand"><img className="mini-mark" src="/favicon.svg" alt="" /> OutreacherPro</div>
              <span>ILLUSTRATIVE WORKFLOW</span>
            </div>
            <div className="mail-panel-heading">
              <small>OUTREACH IN MOTION</small>
              <h3>Personalized emails, sent automatically.</h3>
              <p>Each message is researched and adapted before it goes out.</p>
            </div>
            <div className="email-list">
              <article className="email-row">
                <span className="email-avatar avatar-blue">AC</span>
                <div className="email-copy"><strong>Alex Chen</strong><span>Partnership idea for your team</span><small>Hi Alex — I noticed your recent expansion into...</small></div>
                <span className="email-status status-sent"><Icon name="check" size={12}/> Sent</span>
              </article>
              <article className="email-row active-email">
                <span className="email-avatar avatar-warm">ML</span>
                <div className="email-copy"><strong>Morgan Lee</strong><span>A quick idea for your outreach</span><small>Hi Morgan — based on your work with growing...</small></div>
                <span className="email-status status-writing"><Icon name="spark" size={12}/> Personalizing</span>
              </article>
              <article className="email-row">
                <span className="email-avatar avatar-purple">PS</span>
                <div className="email-copy"><strong>Priya Shah</strong><span>Following up with something useful</span><small>Hi Priya — I thought this might be relevant to...</small></div>
                <span className="email-status status-queued"><Icon name="clock" size={12}/> Queued</span>
              </article>
              <article className="email-row dim-email">
                <span className="email-avatar avatar-green">JR</span>
                <div className="email-copy"><strong>Jordan Rivera</strong><span>Worth a conversation?</span><small>Hi Jordan — your team’s focus on customer...</small></div>
                <span className="email-status status-queued"><Icon name="clock" size={12}/> Next</span>
              </article>
            </div>
            <div className="mail-progress"><span><i /> Sequence running</span><small>Next email in 2 min</small></div>
          </div>
          <div className="floating-card reply-card mail-float-ai">
            <span className="floating-icon"><Icon name="spark" size={17}/></span>
            <div><small>AI PERSONALIZATION</small><strong>Prospect context added</strong></div>
            <span className="success-check"><Icon name="check" size={15}/></span>
          </div>
          <div className="floating-card meeting-card mail-float-sent">
            <span className="sent-plane"><Icon name="send" size={18}/></span>
            <div><small>EMAIL SENT</small><strong>Personalized message</strong><span>Delivered just now</span></div>
          </div>
        </div>
      </header>

      <section className="logo-strip" aria-label="Teams OutreacherPro is built for">
        <div className="container built-for-inner">
          <div className="built-for-label">
            <span>BUILT FOR</span>
            <strong>Anyone reaching<br/>businesses</strong>
          </div>
          <div className="client-logos">
            <span><i className="audience-icon"><Icon name="users" size={15}/></i>FOUNDERS</span>
            <span><i className="audience-icon"><Icon name="chart" size={15}/></i>LEAN SALES TEAMS</span>
            <span><i className="audience-icon"><Icon name="spark" size={15}/></i>AGENCIES</span>
            <span><i className="audience-icon"><Icon name="target" size={15}/></i>CONSULTANTS</span>
          </div>
        </div>
      </section>

      <section className="problem-section section container" id="about">
        <div className="section-kicker">OUTREACH SHOULD SCALE</div>
        <div className="problem-grid">
          <h2>Manual outreach is slow.<br/>Personalized automation <em>gets results.</em></h2>
          <div className="problem-copy">
            <p>Growing outbound usually forces a bad tradeoff: spend hours writing one-to-one messages, or blast generic templates that prospects can spot instantly.</p>
            <p><strong>OutreacherPro gives you both scale and relevance.</strong> Automation handles the repetitive work while AI researches each prospect and personalizes the message—helping you reach more people and create more leads.</p>
          </div>
        </div>
      </section>

      <section className="process-section" id="how-it-works">
        <div className="container section">
          <div className="section-heading centered">
            <div className="section-kicker light">THE OUTREACHERPRO PROCESS</div>
            <h2>Automate. Personalize.<br/>Grow your pipeline.</h2>
            <p>One simple workflow turns repetitive outreach into relevant conversations and a consistent source of new leads.</p>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.number}>
                <span className="feature-number">{feature.number}</span>
                <div className="feature-icon"><Icon name={feature.icon} size={26}/></div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
                <span className="feature-line" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="results-section section container" id="results">
        <div className="results-copy">
          <div className="section-kicker">FROM AUTOMATION TO OPPORTUNITY</div>
          <h2>More outreach.<br/>More relevance.<br/><em>More leads.</em></h2>
          <p>Reach a larger audience without adding more manual work. Every campaign keeps running, learning, and creating opportunities while you focus on closing.</p>
          <ul className="check-list">
            <li><span><Icon name="check" size={16}/></span>Automated campaigns and follow-ups</li>
            <li><span><Icon name="check" size={16}/></span>AI personalization for every prospect</li>
            <li><span><Icon name="check" size={16}/></span>More qualified replies entering your pipeline</li>
          </ul>
          <a href="#contact" className="text-link dark-link">Start generating more leads <Icon name="arrow" size={17}/></a>
        </div>
        <div className="case-study outcome-panel">
          <div className="case-top">
            <span className="case-logo"><Icon name="chart" size={20}/></span>
            <div><small>THE GOAL</small><strong>A simpler path to more conversations</strong></div>
            <span className="case-tag">No inflated promises</span>
          </div>
          <h3>Turn repetitive outreach into a system your team can actually use.</h3>
          <div className="outcome-list">
            <div><span><Icon name="send" size={18}/></span><p><strong>Consistent activity</strong><small>Campaigns and follow-ups keep moving automatically.</small></p></div>
            <div><span><Icon name="spark" size={18}/></span><p><strong>Relevant messaging</strong><small>AI adapts each message using real prospect context.</small></p></div>
            <div><span><Icon name="target" size={18}/></span><p><strong>More opportunities</strong><small>Your team gets more chances to start qualified conversations.</small></p></div>
          </div>
          <p className="honest-note"><Icon name="shield" size={15}/> OutreacherPro is new. We’ll publish real results only when we have real, permissioned customer data.</p>
        </div>
      </section>

      <section className="difference-section">
        <div className="container section">
          <div className="section-heading centered compact">
            <div className="section-kicker light">SMARTER OUTBOUND</div>
            <h2>Automation that scales.<br/>Personalization that connects.</h2>
          </div>
          <div className="difference-grid">
            <div><span><Icon name="clock" size={22}/></span><h3>Always-on automation</h3><p>Keep campaigns and follow-ups moving automatically, even when your team is focused elsewhere.</p></div>
            <div><span><Icon name="spark" size={22}/></span><h3>AI personalization</h3><p>Transform real prospect research into relevant messages at a scale manual writing cannot match.</p></div>
            <div><span><Icon name="target" size={22}/></span><h3>Smarter targeting</h3><p>Focus every campaign on the prospects most likely to need, value, and respond to your offer.</p></div>
            <div><span><Icon name="chart" size={22}/></span><h3>More lead flow</h3><p>Turn consistent outreach and better replies into a reliable stream of qualified opportunities.</p></div>
          </div>
        </div>
      </section>

      <section className="faq-section section container" id="faq">
        <div className="faq-intro">
          <div className="section-kicker">FAQ</div>
          <h2>A few things you<br/>might be wondering.</h2>
          <p>Still have a question? <a href="#contact">Let's talk it through.</a></p>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <div className={`faq-item ${openFaq === index ? 'active' : ''}`} key={question}>
              <button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}>
                <span>{question}</span><i><Icon name="chevron" size={18}/></i>
              </button>
              <div className="faq-answer"><p>{answer}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-wrap container" id="contact">
        <div className="cta-card">
          <div className="cta-glow" />
          <div className="section-kicker light">PUT OUTREACH ON AUTOPILOT</div>
          <h2>Reach more prospects.<br/>Create more opportunities.</h2>
          <p>Automate the repetitive work. Let AI make it personal. Turn outreach into leads.</p>
          <a href="mailto:hello@outreacherpro.com?subject=OutreacherPro%20demo&amp;body=Hi%20OutreacherPro%2C%0D%0A%0D%0AI%27d%20like%20to%20schedule%20a%20meeting.%0D%0A%0D%0AName%3A%0D%0APreferred%20meeting%20time%3A%0D%0A%0D%0AI%20will%20send%20the%20meeting%20link.%0D%0A%0D%0AThanks%21" className="button">See OutreacherPro in action <Icon name="arrow" size={18}/></a>
          <small>Discover how automated, personalized outreach fits your growth strategy.</small>
        </div>
      </section>

      <footer>
        <div className="container footer-main">
          <div className="footer-brand"><Logo/><p>Automated outreach.<br/>Human conversations.</p></div>
          <div className="footer-links"><strong>CONNECT</strong><a href="mailto:hello@outreacherpro.com">hello@outreacherpro.com</a></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 OutreacherPro. All rights reserved.</span><div><a href="/privacy.html">Privacy</a><a href="/terms.html">Terms</a></div></div>
      </footer>
    </main>
  )
}

export default App
