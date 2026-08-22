export const currentRelease = {
  version: '4.1.0 Update',
  status: { th: 'เปิดดาวน์โหลด', en: 'Download available' },
  target: 'XTEINK X3',
  tests: [
    { value: '77/77', th: 'Python tests', en: 'Python tests' },
    { value: '172/172', th: 'C++ tests', en: 'C++ tests' },
    { value: 'PASS', th: 'Clean build', en: 'Clean build' },
  ],
};

export const stableRelease = {
  version: '4.0.1 Stable',
  th: 'เปิดดาวน์โหลด',
  en: 'Download available',
};

export const development = [
  {
    number: '01',
    title: { th: 'ทำให้ภาษาไทยเป็นส่วนหนึ่งของระบบจริงๆ', en: 'Making Thai a native part of the system' },
    body: {
      th: 'ภาษาไทยไม่ได้หยุดอยู่ที่การแปลเมนู แต่ครอบคลุมชื่อหนังสือ ผู้แต่ง ชื่อไฟล์ โฟลเดอร์ และพจนานุกรมส่วนตัว ระบบตัดคำใช้ข้อมูลพจนานุกรมร่วมกับกฎการจัดย่อหน้า เพื่อหลีกเลี่ยงการตัดกลางคำและรักษาจังหวะการอ่านให้เป็นธรรมชาติ',
      en: 'Thai support goes beyond translated menus to book titles, authors, filenames, folders, and a personal dictionary. Dictionary-aware word breaking and paragraph rules help preserve natural reading rhythm.',
    },
    details: [
      { th: 'ตรวจตำแหน่งสระและวรรณยุกต์บนพยัญชนะหลายรูปแบบ ไม่ให้ลอย ชนกัน หรือถูกตัดบริเวณขอบบรรทัด', en: 'Checks vowel and tone-mark placement across varied Thai letterforms to prevent collisions, floating marks, and edge clipping.' },
      { th: 'รองรับฟอนต์จาก SD Card พร้อมฟอนต์ที่ปรับจูนมาแล้วสำหรับหน้าจอ E-Ink', en: 'Supports fonts from the SD card alongside tuned fonts prepared for the E-Ink display.' },
    ],
    note: { th: 'ความถูกต้องของภาษาไทยต้องสัมผัสได้ตลอดทั้งเล่ม ไม่ใช่เฉพาะหน้าเมนู', en: 'Thai quality should remain visible throughout an entire book—not only in menus.' },
  },
  {
    number: '02',
    title: { th: 'ปรับหน้า Home ให้ใช้กับปุ่มจริงได้ง่าย', en: 'A Home screen made for physical buttons' },
    body: {
      th: 'หน้า Home ถูกออกแบบใหม่จากการกดใช้งานจริง ทดลองทั้งไอคอน การ์ด ขนาดปก ระยะห่าง ช่องไฟของเส้นขอบ และตำแหน่งคำสั่งหลายรูปแบบ ก่อนเลือกโครงที่แสดงหนังสืออ่านต่อ 3 เล่มและเครื่องมือ 6 ช่องอย่างสมมาตร',
      en: 'The Home screen was rebuilt through real button use, testing icons, cards, cover sizes, border spacing, and command placement before settling on a balanced layout with three recent books and six tools.',
    },
    details: [
      { th: 'คำสั่งด้านล่างสัมพันธ์กับปุ่มจริงของ X3 เพื่อให้มองแล้วเข้าใจได้โดยไม่ต้องเดาหรือแตะหน้าจอ', en: 'Bottom commands map clearly to X3 physical buttons, with no touchscreen assumptions.' },
      { th: 'ปรับความกว้าง ระยะห่าง และแนวเส้นทุกส่วนให้สมดุลเมื่อมองบนจอจริง ไม่ได้ตัดสินจากภาพจำลองเพียงอย่างเดียว', en: 'Widths, spacing, and alignment are judged on the physical display rather than from mockups alone.' },
    ],
    note: { th: 'เก็บเฉพาะรูปแบบที่อ่านง่าย กดใช้งานชัดเจน และดูสมมาตรบนเครื่องจริง', en: 'Only layouts that remain readable, operable, and visually balanced on the real device are kept.' },
  },
  {
    number: '03',
    title: { th: 'เพิ่ม Gallery เพราะ X3 ควรเปิดดูรูปได้สะดวก', en: 'A Gallery that makes images genuinely useful on X3' },
    body: {
      th: 'หลายคนมีบัตร เอกสาร รูปภาพ หรือนามบัตรที่อยากพกติดตัว บางคนประยุกต์เครื่องกับเคสห้อยคอ หรือเก็บ QR Code สำหรับสแกนรับและจ่ายเงิน จึงพัฒนา Gallery ให้เปิดภาพได้ง่ายและรวดเร็วกว่าการใช้ภาพเป็นเพียงวอลล์เปเปอร์',
      en: 'People often carry cards, documents, personal images, business cards, or QR codes. Gallery was built to make these images quick to reach instead of limiting them to wallpaper use.',
    },
    details: [
      { th: 'แสดงภาพตัวอย่าง 12 รูปต่อหน้า และรองรับ 256 รูปต่อโฟลเดอร์', en: 'Shows 12 thumbnails per page and supports 256 images per folder.' },
      { th: 'เปิดภาพเต็มจอโดยไม่มีปุ่มหรือแถบคำสั่งบังภาพ', en: 'Opens images full screen without controls covering the image.' },
      { th: 'เลื่อนไปรูปก่อนหน้าและถัดไปด้วยปุ่มของเครื่อง', en: 'Moves to the previous or next image with physical buttons.' },
      { th: 'หมุนและขยายภาพให้เหมาะกับหน้าจอ E-Ink', en: 'Rotates and zooms images for the E-Ink screen.' },
      { th: 'กดค้างเพื่อลบรูป พร้อมหน้าต่างยืนยันก่อนลบจริง', en: 'Long-presses to delete with a confirmation dialog before removal.' },
    ],
    note: { th: 'ออกแบบให้เปิดภาพสำคัญได้เร็ว โดยไม่ต้องใช้หน้าจอสัมผัส', en: 'Designed for quick access to important images without a touchscreen.' },
  },
  {
    number: '04',
    title: { th: 'ใช้เวลากับความคมชัดของ Reader จนได้น้ำหนักหมึกที่พอดี', en: 'Refining Reader clarity until the ink weight feels right' },
    body: {
      th: 'ช่วงแรกหน้าหนังสือจะขึ้นมาคมและดำก่อน แล้วตัวอักษรบางหรือจางลงเล็กน้อยหลัง Refresh แม้เกิดขึ้นเพียงเสี้ยววินาที แต่เมื่ออ่านต่อเนื่องจะรู้สึกเหมือนหน้าจอกะพริบและน้ำหนักหมึกไม่นิ่ง จึงเปิดหน้าเดิมซ้ำเพื่อเปรียบเทียบน้ำหนักสีดำทั้งก่อนและหลัง Refresh อย่างละเอียด',
      en: 'Early builds rendered a crisp dark page before text became slightly thinner after refresh. Even a brief shift can feel like flicker during long reading, so identical pages were repeatedly compared before and after refresh.',
    },
    details: [
      { th: 'ปรับการเลือก Waveform ให้ตัวอักษรคงน้ำหนักขาวดำที่นิ่ง ขณะที่ภาพใน EPUB ยังแสดงระดับสีเทาและรายละเอียดที่จำเป็นได้', en: 'Waveform selection keeps text at a stable black-and-white weight while EPUB images retain useful gray levels and detail.' },
      { th: 'แยกวิธีแสดงตัวหนังสือออกจากภาพ เพื่อลดสีเทาที่เข้ามาแทรกขอบตัวอักษรหลัง Refresh', en: 'Text and image rendering paths are separated to reduce gray intrusion around glyph edges after refresh.' },
      { th: 'ไม่แก้ด้วยการเร่ง Contrast หรือถมทุกอย่างให้ดำ เพราะอาจทำให้รายละเอียดภาพและขอบตัวอักษรเสียไป', en: 'The solution is not simply higher contrast or filling everything with black, which can damage image detail and letter edges.' },
    ],
    note: { th: 'ความดำที่พอดีและคงที่มีผลต่อความสบายตาตลอดการอ่าน มากกว่าความเข้มในวินาทีแรก', en: 'Comfort comes from stable, balanced ink weight—not maximum darkness in the first instant.' },
  },
  {
    number: '05',
    title: { th: 'เพิ่มเครื่องมือเล็กๆ ที่นักอ่านใช้งานได้จริง', en: 'Small tools with real value for readers' },
    body: {
      th: 'เครื่องมือเสริมถูกเลือกจากสิ่งที่ใช้ได้จริงบนเครื่องอ่านหนังสือ ไม่เพิ่มเพียงเพื่อให้รายการฟีเจอร์ดูยาวขึ้น ทุกหน้าต้องควบคุมได้ด้วยปุ่ม อ่านง่ายบน E-Ink และช่วยให้ผู้ใช้เข้าใจการอ่านของตัวเองมากขึ้น',
      en: 'Supporting tools are chosen for real e-reader use, not to inflate a feature list. Every screen must work with physical buttons, remain clear on E-Ink, and help readers understand their habits.',
    },
    details: [
      { th: 'ปฏิทินเต็มจอ: ใช้ปุ่มเปลี่ยนเดือนและปี แสดงวันนี้แยกจากเดือนที่กำลังเปิดดู และเริ่มสัปดาห์ด้วยวันอาทิตย์ตามรูปแบบที่คนไทยคุ้นเคย', en: 'Full-screen calendar: changes month and year with buttons, distinguishes today from the viewed month, and starts weeks on Sunday.' },
      { th: 'สถิติการอ่านจากข้อมูลจริง: แสดงเวลาอ่านวันนี้ เวลาสะสม วันอ่านต่อเนื่อง จำนวนครั้งที่อ่าน ช่วงอ่านที่ยาวที่สุด วันที่มักอ่าน และช่วงเวลาที่อ่านบ่อย', en: 'Real reading statistics: today’s time, total time, streak, session count, longest session, common reading days, and frequent reading periods.' },
      { th: 'ตัวเลขทั้งหมดเก็บจากเวลาที่อยู่ใน Reader จริง ไม่ใช่ข้อมูลตัวอย่างที่สร้างไว้ล่วงหน้า', en: 'All statistics come from actual time spent in Reader—not prefilled sample data.' },
    ],
    note: { th: 'เครื่องมือทุกชิ้นต้องมีเหตุผลในการอยู่บนเครื่อง และไม่รบกวนหน้าที่หลักคือการอ่าน', en: 'Every tool must justify its place without distracting from the device’s main purpose: reading.' },
  },
  {
    number: '06',
    title: { th: 'ตรวจความปลอดภัยก่อนปล่อยไฟล์', en: 'Safety checks before every release' },
    body: {
      th: 'ไฟล์เผยแพร่สำหรับ X3 ถูกแยกจากรุ่นอื่นโดยเฉพาะ และต้องผ่านการตรวจทั้งตัวตนของอุปกรณ์ ความสมบูรณ์ของไฟล์ โครงสร้างพาร์ทิชัน และเส้นทางกู้คืนก่อนนำขึ้นดาวน์โหลด',
      en: 'X3 release files are separated from other models and checked for device identity, file integrity, partition structure, and recovery paths before publication.',
    },
    details: [
      { th: 'ตรวจว่าเป็นไฟล์ของ Ekicross X3 และปฏิเสธไฟล์ผิดรุ่น', en: 'Verifies Ekicross X3 files and rejects the wrong model.' },
      { th: 'ตรวจ Chip ID, Checksum และ SHA-256', en: 'Checks chip ID, checksum, and SHA-256.' },
      { th: 'ตรวจโครงสร้าง Dual OTA และ Recovery Slot ก่อนย้ายเฟิร์มแวร์', en: 'Checks dual-OTA structure and the recovery slot before switching firmware.' },
      { th: 'รักษา Rollback ไว้จนกว่าการเริ่มระบบครั้งแรกจะผ่านส่วนสำคัญ', en: 'Keeps rollback available until the first boot passes critical stages.' },
      { th: 'ไฟล์เผยแพร่ไม่เขียนทับ Bootloader หรือ Partition Table', en: 'Release files do not overwrite the bootloader or partition table.' },
      { th: 'ทดสอบด้วย Simulator ทุกครั้งก่อนปล่อยเฟิร์มแวร์', en: 'Runs the simulator before every firmware release.' },
      { th: 'มีรุ่น Stable แยกไว้เป็น Fallback', en: 'Keeps a separate Stable release as a fallback.' },
    ],
    note: { th: 'ระบบช่วยลดความเสี่ยง แต่ไม่กล่าวอ้างว่าไม่มีโอกาส Brick 100%', en: 'The system reduces risk without claiming a zero-percent chance of bricking.' },
  },
];
