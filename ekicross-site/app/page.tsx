'use client';

import { useState } from 'react';
import { currentRelease, development, stableRelease } from './firmware-data';

type Lang = 'th' | 'en';

const copy = {
  th: {
    nav: ['เรื่องราว', 'สิ่งที่พัฒนา', 'รุ่นเฟิร์มแวร์', 'การติดตั้ง'],
    eyebrow: 'EKICROSS FOR XTEINK X3',
    title: 'เฟิร์มแวร์ภาษาไทย\nสำหรับคนรักการอ่าน',
    intro: 'Ekicross เริ่มจากความต้องการให้ X3 ใช้ภาษาไทยได้อย่างสมบูรณ์แบบ และทุกอย่างใช้งานสะดวกด้วยปุ่มจริงของเครื่อง',
    readMore: 'อ่านสิ่งที่พัฒนา',
    storyLabel: 'จุดเริ่มต้น',
    storyTitle: 'เริ่มจากความหลงใหลในเครื่องนี้ และทำเฟิร์มแวร์สำหรับใช้เอง',
    storyBody1: 'Ekicross เริ่มต้นจากความอยากทำเครื่อง XTEINK X3 ที่ใช้งานอยู่ให้เหมาะกับการอ่านหนังสือไทยมากที่สุด คล้ายอาหารหรือเบเกอรี่โฮมเมดที่ตั้งใจทำไว้ทานเอง เลือกวัตถุดิบเอง และปรับรสจนถูกใจจริงๆ',
    storyBody2: 'เมื่อพบจุดเล็กๆ ระหว่างอ่านก็กลับไปแก้ ตั้งแต่ตัวอักษร ระยะห่าง น้ำหนักหมึก ไปจนถึงการกดปุ่ม ทุกอย่างค่อยๆ ดีขึ้นจากการใช้งานจริงในแต่ละวัน',
    showcaseTitle: 'Ekicross บนเครื่อง X3',
    showcaseBody: 'หน้า Home ของเฟิร์มแวร์บนเครื่องจริง แสดงการจัดวางภาษาไทย เมนู หนังสืออ่านต่อ และการใช้งานด้วยปุ่มของ X3',
    developerLabel: 'ผู้พัฒนาเฟิร์มแวร์',
    developerTitle: 'ดูแลทุกส่วน ตั้งแต่ภาษาไทยจนถึงประสบการณ์อ่าน',
    developerBody: 'Ekicross พัฒนาจากการใช้งานจริงบนเครื่อง X3 และค่อยๆ ปรับรายละเอียดทุกส่วนให้เหมาะกับการอ่านภาษาไทยมากที่สุด',
    developmentLabel: 'สิ่งที่พัฒนาแล้ว',
    developmentTitle: 'ทำขึ้น ใช้งานจริง ปรับซ้ำๆ จนกว่าจะใช่ที่สุด',
    developmentIntro: 'ความพิถีพิถันอยู่ในรายละเอียดที่คนทั่วไปอาจไม่ทันสังเกต แต่คนอ่านต้องเห็นและรู้สึกกับมันตลอดทั้งเล่ม จึงทดสอบคำไทย การตัดคำ ย่อหน้า การวางวรรณยุกต์บนสระ ช่องไฟของเส้นขอบทุกเส้น ความสมมาตรของอินเทอร์เฟซ ปกหลายแบบ และจังหวะการกดซ้ำแล้วซ้ำอีกจนลงตัว',
    releaseLabel: 'รุ่นเฟิร์มแวร์',
    releaseTitle: 'รุ่นปัจจุบันและสถานะการเผยแพร่',
    releaseBody: 'Ekicross แจกจ่ายสองรุ่นสำหรับ XTEINK X3: 4.0.1 Stable สำหรับผู้ที่ต้องการรุ่นนิ่ง และ 4.1.0 Update ที่รวม Gallery ปฏิทิน สถิติการอ่าน Dark mode และการปรับ Reader รุ่นล่าสุด',
    target: 'รองรับเฉพาะ',
    download: 'กำลังเพิ่มลิงก์ดาวน์โหลด',
    downloadNote: 'สถานะพร้อมดาวน์โหลด เหลือเพียงเพิ่มลิงก์ไฟล์ในหน้านี้',
    warningTitle: 'ก่อนติดตั้ง',
    warning: 'เฟิร์มแวร์นี้ใช้กับ XTEINK X3 เท่านั้น ไม่ใช่ X4 ก่อนอัปเดตควรสำรองหนังสือและข้อมูลสำคัญ ชาร์จแบตเตอรี่ให้เพียงพอ และอย่าปิดเครื่องหรือถอด SD card ระหว่างติดตั้ง',
    installLabel: 'การติดตั้ง',
    installTitle: 'คู่มือการติดตั้ง Ekicross',
    installBody: 'อ่านข้อควรทราบ เตรียมเครื่องและ SD Card ให้ครบก่อนเริ่มติดตั้ง แล้วทำตามลำดับโดยไม่ข้ามขั้นตอน',
    hub: 'เว็บไซต์หลักสำหรับข้อมูล รุ่นเฟิร์มแวร์ และไฟล์ดาวน์โหลดของ Ekicross',
    back: 'กลับด้านบน',
  },
  en: {
    nav: ['Story', 'What’s built', 'Firmware', 'Installation'],
    eyebrow: 'EKICROSS FOR XTEINK X3',
    title: 'Thai firmware\nfor people who love reading',
    intro: 'Ekicross began with a simple need: make Thai work beautifully and completely on X3, with everything remaining natural to use through the device’s physical buttons.',
    readMore: 'See what is built',
    storyLabel: 'HOW IT STARTED',
    storyTitle: 'Born from a love for this device and firmware made for personal use',
    storyBody1: 'Ekicross grew from the wish to make a personal X3 as good as possible for Thai reading—like homemade food or baking, where every ingredient is chosen and the result is refined until it feels right.',
    storyBody2: 'Whenever a small issue appeared during reading, it went back for another adjustment: type, spacing, ink weight, and button behavior all improved through daily use.',
    showcaseTitle: 'Ekicross on X3',
    showcaseBody: 'The firmware Home screen on a real device, showing Thai typography, menus, recent books, and physical-button operation on X3.',
    developerLabel: 'FIRMWARE DEVELOPER',
    developerTitle: 'Caring for every detail, from Thai typography to reading flow',
    developerBody: 'Ekicross is developed through real daily use on X3, with each detail refined for a natural Thai reading experience.',
    developmentLabel: 'WHAT IS BUILT',
    developmentTitle: 'Build it, use it, refine it—until it feels right',
    developmentIntro: 'The care lives in details that may go unnoticed at first but remain visible throughout a book. Thai text, long titles, varied covers, and button flows are tested repeatedly until they settle naturally.',
    releaseLabel: 'FIRMWARE RELEASE',
    releaseTitle: 'Current release and availability',
    releaseBody: 'Ekicross is distributed in two XTEINK X3 releases: 4.0.1 Stable for a settled experience and 4.1.0 Update with the latest Gallery, calendar, reading statistics, Dark mode, and Reader improvements.',
    target: 'Target device',
    download: 'Download link being added',
    downloadNote: 'The release is open for download; only the file link remains to be added here.',
    warningTitle: 'Before installing',
    warning: 'This firmware is only for XTEINK X3, not X4. Back up important books and data, charge the battery, and never power off or remove the SD card during installation.',
    installLabel: 'INSTALLATION',
    installTitle: 'Installing Ekicross',
    installBody: 'Review the safety notes, prepare the device and SD card, then complete every step in order without interruption.',
    hub: 'The official home for Ekicross information, firmware releases, and downloads',
    back: 'Back to top',
  },
};

const installationCards = {
  th: [
    {
      number: '01',
      title: 'ข้อควรทราบและระบบความปลอดภัย',
      kind: 'notes',
      items: [
        {
          title: 'รองรับเฉพาะ XTEINK X3',
          body: 'ห้ามติดตั้งบนเครื่องรุ่น X4 เฟิร์มแวร์รุ่นนี้ปรับโค้ดให้กระชับ (Lean Code) และตัดส่วนขยายเฉพาะของ X4 ออก เพื่อลดขนาดไฟล์และให้ระบบทำงานเหมาะกับ X3',
          details: [],
        },
        {
          title: 'ระบบ Dual-Slot และ Rollback',
          body: 'ระบบจะเขียนเฟิร์มแวร์ลง Slot สำรองก่อน หากติดตั้งไม่สมบูรณ์หรือไม่ผ่านการตรวจสอบ เครื่องจะพยายามสลับกลับไปใช้เฟิร์มแวร์เดิมโดยอัตโนมัติ ช่วยลดความเสี่ยงจากเครื่องค้างหรือ Brick แต่ไม่ควรถือว่าไม่มีความเสี่ยง 100%',
          details: [],
        },
        {
          title: 'ติดตั้งด้วย SD Card เท่านั้น',
          body: 'แม้ระบบเฟิร์มแวร์รองรับ OTA แต่ Ekicross ปิดการอัปเดตผ่าน OTA ไว้ เพื่อลดโอกาสกดอัปเดตโดยไม่ตั้งใจ การติดตั้งจึงต้องทำแบบ Manual ผ่าน SD Card',
          details: [],
        },
      ],
    },
    {
      number: '02',
      title: 'ขั้นตอนการติดตั้งเฟิร์มแวร์ Ekicross X3',
      kind: 'steps',
      items: [
        {
          title: 'เตรียม SD Card',
          body: 'ฟอร์แมตการ์ดเป็น exFAT แล้ววางไฟล์ .bin ไว้ที่หน้าหลักของการ์ดได้ทันที โดยไม่ต้องสร้างโฟลเดอร์',
          details: [],
        },
        {
          title: 'ตรวจเฟิร์มแวร์เดิมและใส่การ์ด',
          body: 'เสียบ SD Card เข้ากับตัวเครื่อง แล้วตรวจว่าเฟิร์มแวร์เดิมมีเมนู SD Card Firmware Update',
          details: [],
        },
        {
          title: 'ตรวจระดับแบตเตอรี่',
          body: 'แบตเตอรี่ต้องเหลือไม่น้อยกว่า 60% และห้ามเสียบสายชาร์จระหว่างติดตั้ง',
          details: [],
        },
        {
          title: 'ตรวจไฟล์และเริ่มอัปเดต',
          body: 'เปิดเมนู SD Card Firmware Update รอให้ระบบตรวจสอบไฟล์จนผ่าน แล้วจึงกดอัปเดต ระหว่างที่แถบความคืบหน้ายังไม่ครบ 100% ห้ามปิดเครื่อง ถอดการ์ด หรือกดปุ่มรบกวนการทำงาน',
          details: [],
        },
        {
          title: 'รอให้เครื่องเริ่มต้นใหม่',
          body: 'เมื่อเครื่องรีสตาร์ตและแสดงโลโก้ Ekicross การติดตั้งจึงถือว่าเสร็จสมบูรณ์และพร้อมใช้งาน',
          details: [],
        },
      ],
    },
    {
      number: '03',
      title: 'ระบบฟอนต์ภาษาไทยและการปรับแต่ง',
      kind: 'notes',
      items: [
        {
          title: 'ฟอนต์มาตรฐานในตัวเครื่อง',
          body: 'มีฟอนต์ภาษาไทยพร้อมใช้ 2 แบบ คือ Google Sans และ Sarabun โดยปรับจูนระยะตัดคำและตำแหน่งสระหรือวรรณยุกต์ เช่น ไม้เอกและไม้โทบนหางพยัญชนะ เพื่อให้อ่านง่ายบนจอ E-Ink',
          details: [],
        },
        {
          title: 'การติดตั้ง Custom Font',
          body: 'รองรับฟอนต์ตามมาตรฐานระบบ CrossPoint หรือ CrossInk โดยต้องแปลงไฟล์ผ่านเว็บและเตรียมให้ครบ 4 ขนาดก่อนนำไปใช้',
          details: [
            'ต้องมีขนาด 12, 14, 16 และ 18 ครบทุกระดับ',
            'ฟอนต์ที่เพิ่มเองอาจตัดคำหรือวางสระและวรรณยุกต์ได้ไม่แม่นยำเท่าฟอนต์ที่ปรับจูนมาแล้ว ทั้งนี้ขึ้นอยู่กับโครงสร้างฟอนต์และการตั้งค่าของผู้ใช้',
          ],
        },
      ],
    },
  ],
  en: [
    {
      number: '01',
      title: 'Compatibility and safety systems',
      kind: 'notes',
      items: [
        { title: 'XTEINK X3 only', body: 'Never install this build on X4. The firmware uses a lean X3-specific build with X4-only extensions removed.', details: [] },
        { title: 'Dual-slot rollback', body: 'The firmware is written to the alternate slot first. If verification or installation fails, the device attempts to return to the previous firmware. This reduces risk but does not guarantee zero chance of a brick.', details: [] },
        { title: 'Manual SD card installation', body: 'OTA capability is intentionally disabled to prevent accidental updates. Install Ekicross manually from an SD card.', details: [] },
      ],
    },
    {
      number: '02',
      title: 'Installing Ekicross X3 firmware',
      kind: 'steps',
      items: [
        { title: 'Prepare the SD card', body: 'Format it as exFAT and place the .bin file at the card root. Do not create a folder.', details: [] },
        { title: 'Check the current firmware', body: 'Insert the card and confirm that the device has the SD Card Firmware Update menu.', details: [] },
        { title: 'Check the battery', body: 'Battery level must be at least 60%. Do not connect a charger during installation.', details: [] },
        { title: 'Verify and update', body: 'Open SD Card Firmware Update, wait for file verification to pass, then start the update. Do not power off, remove the card, or operate the device before progress reaches 100%.', details: [] },
        { title: 'Finish', body: 'Installation is complete after the device restarts and the Ekicross logo appears.', details: [] },
      ],
    },
    {
      number: '03',
      title: 'Thai fonts and customization',
      kind: 'notes',
      items: [
        { title: 'Built-in fonts', body: 'Google Sans and Sarabun are included and tuned for Thai word breaks, vowels, and tone marks on the E-Ink display.', details: [] },
        { title: 'Custom fonts', body: 'CrossPoint- or CrossInk-compatible fonts can be converted through the web tool and supplied in all four required sizes.', details: ['Provide sizes 12, 14, 16, and 18.', 'Custom fonts may not match the word breaking or mark placement of the tuned built-in fonts. Results depend on the font structure and user settings.'] },
      ],
    },
  ],
};

export default function Home() {
  const [lang, setLang] = useState<Lang>('th');
  const t = copy[lang];

  return (
    <main lang={lang}>
      <div className="ambient ambient-one" /><div className="ambient ambient-two" /><div className="noise" />
      <header className="site-header glass">
        <a className="parent-brand" href="#top" aria-label="Ekicross"><img src="/ekicross-parent-logo-transparent.png" alt="Ekicross" /></a>
        <nav aria-label={lang === 'th' ? 'เมนูหลัก' : 'Main navigation'}>{t.nav.map((item, index) => <a key={item} href={['#story', '#development', '#release', '#install'][index]}>{item}</a>)}</nav>
        <div className="language" aria-label="Language"><button className={lang === 'th' ? 'active' : ''} onClick={() => setLang('th')}>TH</button><button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button></div>
      </header>

      <section className="hero wrap" id="top">
        <div className="hero-copy">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.title.split('\n').map(line => <span key={line}>{line}</span>)}</h1>
          <p className="lead">{t.intro}</p>
          <div className="hero-actions"><a className="primary-button" href="#development">{t.readMore}<span>↓</span></a><a className="version-link" href="#release">v{currentRelease.version} <span>→</span></a></div>
        </div>
        <figure className="release-art device-art"><img src="/ekicross-on-device-cutout.png" alt="Ekicross shown on an XTEINK X3" /></figure>
      </section>

      <section className="story wrap" id="story">
        <div className="section-kicker"><span>01</span>{t.storyLabel}</div>
        <div className="story-card glass"><h2>{t.storyTitle}</h2><div><p>{t.storyBody1}</p><p>{t.storyBody2}</p></div></div>
      </section>

      <section className="showcase wrap" aria-labelledby="showcase-title"><div className="section-heading"><h2 id="showcase-title">{t.showcaseTitle}</h2><p>{t.showcaseBody}</p></div><figure className="showcase-device"><img src="/ekicross-home-ui-cutout.png" alt="Ekicross Home interface on X3" /></figure></section>

      <section className="developer-profile wrap" id="developer" aria-labelledby="developer-title">
        <div className="developer-copy"><div className="section-kicker"><span>•</span>{t.developerLabel}</div><h2 id="developer-title">{t.developerTitle}</h2><p>{t.developerBody}</p></div>
        <figure><img src="/ekicross-developer-device-cutout.png" alt={t.developerLabel} /></figure>
      </section>

      <section className="development wrap" id="development">
        <div className="section-kicker"><span>02</span>{t.developmentLabel}</div>
        <div className="section-heading"><h2>{t.developmentTitle}</h2><p>{t.developmentIntro}</p></div>
        <div className="development-list">{development.map(item => <article className="development-card glass" key={item.number}><span className="item-number">{item.number}</span><div><h3>{item.title[lang]}</h3><p>{item.body[lang]}</p>{item.details.length > 0 && <ul className="development-detail-list">{item.details.map(detail => <li key={detail.th}>{detail[lang]}</li>)}</ul>}<small>{item.note[lang]}</small></div></article>)}</div>
      </section>

      <section className="release wrap" id="release">
        <div className="section-kicker"><span>03</span>{t.releaseLabel}</div>
        <div className="section-heading"><h2>{t.releaseTitle}</h2><p>{t.releaseBody}</p></div>
        <div className="release-grid two-releases"><article className="release-panel glass"><div className="release-top"><span className="status-dot ready" />{stableRelease[lang]}</div><h3>Ekicross X3<br />{stableRelease.version}</h3><button disabled>{t.download}</button><p className="download-note">{t.downloadNote}</p></article><article className="release-panel update glass"><div className="release-top"><span className="status-dot ready" />{currentRelease.status[lang]}</div><h3>Ekicross X3<br />{currentRelease.version}</h3><button disabled>{t.download}</button><p className="download-note">{t.downloadNote}</p></article></div>
        <div className="test-grid release-tests">{currentRelease.tests.map(test => <div key={test.value}><strong>{test.value}</strong><span>{test[lang]}</span></div>)}</div>
        <aside className="warning glass"><span>!</span><div><h3>{t.warningTitle}</h3><p>{t.warning}</p></div></aside>
      </section>

      <section className="installation wrap" id="install">
        <div className="section-kicker"><span>04</span>{t.installLabel}</div>
        <div className="installation-heading"><h2>{t.installTitle}</h2><p>{t.installBody}</p></div>
        <div className="installation-grid">
          {installationCards[lang].map(card => {
            const List = card.kind === 'steps' ? 'ol' : 'ul';
            return <article className={`installation-card installation-card-${card.number} glass`} key={card.number}>
              <div className="installation-card-heading"><span>{card.number}</span><h3>{card.title}</h3></div>
              <List>{card.items.map(item => <li key={item.title}><div><strong>{item.title}</strong><p>{item.body}</p>{item.details.length > 0 && <ul>{item.details.map(detail => <li key={detail}>{detail}</li>)}</ul>}</div></li>)}</List>
            </article>;
          })}
        </div>
      </section>

      <footer className="glass"><div className="footer-inner wrap"><div className="footer-brand"><img src="/ekicross-parent-logo-transparent.png" alt="Ekicross" /><span>{t.hub}</span></div><a href="#top">{t.back} ↑</a></div><div className="footer-bottom wrap"><span>EKICROSS © 2026</span><span>FOR X3 LAUNCHING</span></div></footer>
    </main>
  );
}
