export const currentRelease = {
  version: '4.1.2 Update',
  status: { th: 'เปิดดาวน์โหลด', en: 'Download available' },
  target: 'XTEINK X3',
  tests: [
    { value: '81/81', th: 'การทดสอบด้วย Python', en: 'Python tests' },
    { value: '180/180', th: 'การทดสอบด้วย C++', en: 'C++ tests' },
    { value: 'PASS', th: 'สร้างไฟล์ผ่านโดยไม่มีข้อผิดพลาด', en: 'Clean build' },
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
    title: { th: 'ทำให้ภาษาไทยเป็นส่วนหนึ่งของระบบอย่างแท้จริง', en: 'Making Thai a native part of the system' },
    body: {
      th: 'การรองรับภาษาไทยไม่ได้หยุดอยู่เพียงการแปลเมนู แต่ครอบคลุมถึงชื่อหนังสือ ชื่อผู้แต่ง ชื่อไฟล์ โฟลเดอร์ และพจนานุกรมส่วนตัว ระบบตัดคำใช้ข้อมูลจากพจนานุกรมร่วมกับกฎการจัดย่อหน้า เพื่อหลีกเลี่ยงการตัดกลางคำและรักษาจังหวะการอ่านให้เป็นธรรมชาติ',
      en: 'Thai support goes beyond translated menus to book titles, authors, filenames, folders, and a personal dictionary. Dictionary-aware word breaking and paragraph rules help preserve natural reading rhythm.',
    },
    details: [
      { th: 'ตรวจตำแหน่งสระและวรรณยุกต์บนพยัญชนะหลายรูปแบบ ไม่ให้ลอย ชนกัน หรือถูกตัดบริเวณขอบบรรทัด', en: 'Checks vowel and tone-mark placement across varied Thai letterforms to prevent collisions, floating marks, and edge clipping.' },
      { th: 'รองรับฟอนต์จาก SD Card พร้อมฟอนต์ที่ปรับแต่งมาโดยเฉพาะสำหรับหน้าจอ E-Ink', en: 'Supports fonts from the SD card alongside tuned fonts prepared for the E-Ink display.' },
    ],
    note: { th: 'ความถูกต้องของภาษาไทยต้องสัมผัสได้ตลอดทั้งเล่ม ไม่ใช่เฉพาะหน้าเมนู', en: 'Thai quality should remain visible throughout an entire book—not only in menus.' },
  },
  {
    number: '02',
    title: { th: 'ปรับหน้าหลักให้ใช้กับปุ่มจริงได้ง่าย', en: 'A Home screen made for physical buttons' },
    body: {
      th: 'หน้าหลักได้รับการออกแบบใหม่จากการใช้งานด้วยปุ่มจริง ทดลองทั้งไอคอน การ์ด ขนาดปก ระยะห่าง ช่องไฟของเส้นขอบ และตำแหน่งคำสั่งหลายรูปแบบ ก่อนเลือกโครงที่จัดวางหนังสืออ่านต่อ 3 เล่มและเครื่องมือ 6 ช่องได้อย่างสมมาตร',
      en: 'The Home screen was rebuilt through real button use, testing icons, cards, cover sizes, border spacing, and command placement before settling on a balanced layout with three recent books and six tools.',
    },
    details: [
      { th: 'คำสั่งด้านล่างสัมพันธ์กับปุ่มจริงของ X3 เพื่อให้มองแล้วเข้าใจได้โดยไม่ต้องเดาหรือแตะหน้าจอ', en: 'Bottom commands map clearly to X3 physical buttons, with no touchscreen assumptions.' },
      { th: 'ปรับความกว้าง ระยะห่าง และแนวเส้นทุกส่วนให้สมดุลบนจอจริง โดยไม่ได้ตัดสินจากภาพจำลองเพียงอย่างเดียว', en: 'Widths, spacing, and alignment are judged on the physical display rather than from mockups alone.' },
    ],
    note: { th: 'เก็บเฉพาะรูปแบบที่อ่านง่าย กดใช้งานชัดเจน และดูสมมาตรบนเครื่องจริง', en: 'Only layouts that remain readable, operable, and visually balanced on the real device are kept.' },
  },
  {
    number: '03',
    title: { th: 'เพิ่มแกลเลอรี เพื่อให้ X3 เปิดดูรูปได้สะดวก', en: 'A Gallery that makes images genuinely useful on X3' },
    body: {
      th: 'หลายคนมีบัตร เอกสาร รูปภาพ หรือนามบัตรที่อยากพกติดตัว บางคนใช้เครื่องร่วมกับเคสห้อยคอ หรือเก็บ QR Code สำหรับรับและจ่ายเงิน จึงพัฒนาแกลเลอรีให้เปิดภาพเหล่านี้ได้ง่ายและรวดเร็ว แทนที่จะใช้รูปภาพได้เพียงเป็นวอลล์เปเปอร์',
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
    title: { th: 'ปรับความคมชัดของหน้าหนังสือจนได้น้ำหนักหมึกที่พอดี', en: 'Refining Reader clarity until the ink weight feels right' },
    body: {
      th: 'ในช่วงแรก หน้าหนังสือจะแสดงผลคมและดำ ก่อนที่ตัวอักษรจะบางหรือจางลงเล็กน้อยหลังการรีเฟรช แม้เกิดขึ้นเพียงเสี้ยววินาที แต่เมื่ออ่านต่อเนื่องจะรู้สึกเหมือนหน้าจอกะพริบและน้ำหนักหมึกไม่นิ่ง จึงเปิดหน้าเดิมซ้ำเพื่อเปรียบเทียบน้ำหนักสีดำทั้งก่อนและหลังการรีเฟรชอย่างละเอียด',
      en: 'Early builds rendered a crisp dark page before text became slightly thinner after refresh. Even a brief shift can feel like flicker during long reading, so identical pages were repeatedly compared before and after refresh.',
    },
    details: [
      { th: 'เลือกใช้ Waveform ให้เหมาะสม เพื่อรักษาน้ำหนักขาวดำของตัวอักษรให้คงที่ ขณะเดียวกันภาพใน EPUB ยังแสดงระดับสีเทาและรายละเอียดที่จำเป็นได้', en: 'Waveform selection keeps text at a stable black-and-white weight while EPUB images retain useful gray levels and detail.' },
      { th: 'แยกวิธีแสดงผลตัวอักษรออกจากภาพ เพื่อลดสีเทาที่แทรกอยู่บริเวณขอบตัวอักษรหลังการรีเฟรช', en: 'Text and image rendering paths are separated to reduce gray intrusion around glyph edges after refresh.' },
      { th: 'ไม่แก้ปัญหาด้วยการเพิ่มคอนทราสต์หรือถมทุกอย่างให้ดำ เพราะอาจทำให้รายละเอียดของภาพและขอบตัวอักษรเสียไป', en: 'The solution is not simply higher contrast or filling everything with black, which can damage image detail and letter edges.' },
    ],
    note: { th: 'ความดำที่พอดีและคงที่มีผลต่อความสบายตาตลอดการอ่าน มากกว่าความเข้มในวินาทีแรก', en: 'Comfort comes from stable, balanced ink weight—not maximum darkness in the first instant.' },
  },
  {
    number: '05',
    title: { th: 'เพิ่มเครื่องมือเล็กๆ ที่นักอ่านใช้งานได้จริง', en: 'Small tools with real value for readers' },
    body: {
      th: 'เครื่องมือเสริมทุกชิ้นเลือกจากสิ่งที่มีประโยชน์บนเครื่องอ่านหนังสือจริง ไม่ได้เพิ่มเพียงเพื่อให้รายการคุณสมบัติดูยาวขึ้น ทุกหน้าต้องควบคุมได้ด้วยปุ่ม อ่านง่ายบนจอ E-Ink และช่วยให้ผู้ใช้เข้าใจพฤติกรรมการอ่านของตัวเองมากขึ้น',
      en: 'Supporting tools are chosen for real e-reader use, not to inflate a feature list. Every screen must work with physical buttons, remain clear on E-Ink, and help readers understand their habits.',
    },
    details: [
      { th: 'ปฏิทินเต็มจอ: ใช้ปุ่มเปลี่ยนเดือนและปี แสดงวันนี้แยกจากเดือนที่กำลังเปิดดู และเริ่มสัปดาห์ด้วยวันอาทิตย์ตามรูปแบบที่คนไทยคุ้นเคย', en: 'Full-screen calendar: changes month and year with buttons, distinguishes today from the viewed month, and starts weeks on Sunday.' },
      { th: 'สถิติการอ่านจากข้อมูลจริง: แสดงเวลาอ่านของวันนี้ เวลาสะสม จำนวนวันที่อ่านต่อเนื่อง จำนวนครั้งที่อ่าน ช่วงอ่านที่ยาวที่สุด วันที่มักอ่าน และช่วงเวลาที่อ่านบ่อย', en: 'Real reading statistics: today’s time, total time, streak, session count, longest session, common reading days, and frequent reading periods.' },
      { th: 'ตัวเลขทั้งหมดเก็บจากเวลาที่เปิดอ่านหนังสือจริง ไม่ใช่ข้อมูลตัวอย่างที่สร้างไว้ล่วงหน้า', en: 'All statistics come from actual time spent in Reader—not prefilled sample data.' },
    ],
    note: { th: 'เครื่องมือทุกชิ้นต้องมีเหตุผลในการอยู่บนเครื่อง และไม่รบกวนหน้าที่หลักคือการอ่าน', en: 'Every tool must justify its place without distracting from the device’s main purpose: reading.' },
  },
  {
    number: '06',
    title: { th: 'ตรวจความปลอดภัยก่อนปล่อยไฟล์', en: 'Safety checks before every release' },
    body: {
      th: 'ไฟล์สำหรับ X3 แยกออกจากรุ่นอื่นอย่างชัดเจน และต้องผ่านการตรวจสอบทั้งรุ่นของอุปกรณ์ ความสมบูรณ์ของไฟล์ โครงสร้างพาร์ทิชัน และระบบกู้คืนก่อนเปิดให้ดาวน์โหลด',
      en: 'X3 release files are separated from other models and checked for device identity, file integrity, partition structure, and recovery paths before publication.',
    },
    details: [
      { th: 'ตรวจว่าเป็นไฟล์ของ Ekicross X3 และปฏิเสธไฟล์ผิดรุ่น', en: 'Verifies Ekicross X3 files and rejects the wrong model.' },
      { th: 'ตรวจ Chip ID, Checksum และ SHA-256 เพื่อยืนยันรุ่นของเครื่องและความสมบูรณ์ของไฟล์', en: 'Checks chip ID, checksum, and SHA-256.' },
      { th: 'ตรวจโครงสร้าง Dual OTA และ Recovery Slot ก่อนสลับไปใช้เฟิร์มแวร์ใหม่', en: 'Checks dual-OTA structure and the recovery slot before switching firmware.' },
      { th: 'คงระบบ Rollback ไว้จนกว่าการเริ่มต้นระบบครั้งแรกจะผ่านขั้นตอนสำคัญ', en: 'Keeps rollback available until the first boot passes critical stages.' },
      { th: 'ไฟล์ที่เผยแพร่จะไม่เขียนทับ Bootloader หรือ Partition Table', en: 'Release files do not overwrite the bootloader or partition table.' },
      { th: 'ทดสอบด้วย Simulator ทุกครั้งก่อนเผยแพร่เฟิร์มแวร์', en: 'Runs the simulator before every firmware release.' },
      { th: 'เก็บรุ่น Stable แยกไว้สำหรับใช้ย้อนกลับเมื่อจำเป็น', en: 'Keeps a separate Stable release as a fallback.' },
    ],
    note: { th: 'ระบบเหล่านี้ช่วยลดความเสี่ยง แต่ไม่อาจรับประกันได้ว่าเครื่องจะไม่มีโอกาสเปิดไม่ติดเลย', en: 'The system reduces risk without claiming a zero-percent chance of bricking.' },
  },
];
