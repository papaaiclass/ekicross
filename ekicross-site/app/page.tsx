'use client';

import { useState } from 'react';
import { currentRelease, development, stableRelease } from './firmware-data';

type Lang = 'th' | 'en';

const firmwareDownloads = {
  stable: {
    url: 'https://github.com/papaaiclass/ekicross/releases/download/v4.0.1/Ekicross-X3-4.0.1-Stable.bin',
    size: '6.21 MB',
    sha256: '2e63729e89467f0aa0a2ff5186af59441e990de437d118eff0769087cdfdcfbd',
  },
  update: {
    url: 'https://github.com/papaaiclass/ekicross/releases/download/v4.2.0/firmware.bin',
    size: '6.22 MB',
    sha256: '06cd360abe0ecbdfc6ef1578ac7d4d37b13676b6e247af9f1c0b412efabf79d0',
  },
};

const extensionPack = {
  url: 'https://github.com/papaaiclass/ekicross/releases/download/v4.2.0/Ekicross-X3-4.2.0-SD-Addon.zip',
  checksumUrl: 'https://github.com/papaaiclass/ekicross/releases/download/v4.2.0/Ekicross-X3-4.2.0-SD-Addon.zip.sha256',
  size: '3.89 MB',
  sha256: '863d4e0da052d60bfdd9952a237b1571f07f4346826468788708dd6298a86313',
  folders: ['dictionaries', 'Notes', 'screenshots', 'sleep', 'books', 'fonts', 'Articles', 'Gallery'],
};

const assetPath = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`;

const copy = {
  th: {
    nav: ['เรื่องราว', 'สิ่งที่พัฒนา', 'รุ่นเฟิร์มแวร์', 'การติดตั้ง', 'การเปลี่ยนแปลง'],
    eyebrow: 'EKICROSS FOR XTEINK X3',
    title: 'เฟิร์มแวร์ภาษาไทย\nสำหรับคนรักการอ่าน',
    intro: 'Ekicross เริ่มจากความตั้งใจที่จะทำให้ X3 ใช้ภาษาไทยได้อย่างสมบูรณ์ และควบคุมทุกอย่างได้สะดวกด้วยปุ่มจริงของเครื่อง',
    readMore: 'อ่านสิ่งที่พัฒนา',
    storyLabel: 'จุดเริ่มต้น',
    storyTitle: 'เริ่มจากความหลงใหลในเครื่องนี้ สู่เฟิร์มแวร์ที่ทำขึ้นเพื่อใช้เอง',
    storyBody1: 'Ekicross เริ่มต้นจากความอยากทำเครื่อง XTEINK X3 ที่ใช้อยู่ให้เหมาะกับการอ่านหนังสือภาษาไทยมากที่สุด คล้ายอาหารหรือเบเกอรี่โฮมเมดที่ตั้งใจทำไว้ทานเอง ตั้งแต่เลือกวัตถุดิบไปจนถึงค่อยๆ ปรับรสให้ถูกใจ',
    storyBody2: 'เมื่อพบรายละเอียดเล็กๆ ระหว่างอ่านก็ย้อนกลับไปแก้ ตั้งแต่รูปทรงตัวอักษร ระยะห่าง น้ำหนักหมึก ไปจนถึงจังหวะการกดปุ่ม ทุกส่วนจึงค่อยๆ ลงตัวจากการใช้งานจริงในแต่ละวัน',
    showcaseTitle: 'Ekicross บนเครื่อง X3',
    showcaseBody: 'หน้าหลักของเฟิร์มแวร์บนเครื่องจริง แสดงการจัดวางภาษาไทย เมนู หนังสือที่อ่านค้างไว้ และการควบคุมด้วยปุ่มของ X3',
    developerLabel: 'ผู้พัฒนาเฟิร์มแวร์',
    developerTitle: 'ดูแลทุกส่วน ตั้งแต่ภาษาไทยไปจนถึงประสบการณ์อ่าน',
    developerBody: 'Ekicross พัฒนาจากการใช้งานจริงบนเครื่อง X3 พร้อมปรับรายละเอียดทุกส่วนอย่างต่อเนื่อง เพื่อให้เหมาะกับการอ่านภาษาไทยมากที่สุด',
    developmentLabel: 'สิ่งที่พัฒนาแล้ว',
    developmentTitle: 'ทำขึ้น ใช้งานจริง แล้วปรับซ้ำจนกว่าจะลงตัว',
    developmentIntro: 'ความพิถีพิถันซ่อนอยู่ในรายละเอียดที่อาจไม่สะดุดตาในทันที แต่ผู้อ่านต้องมองเห็นและสัมผัสตลอดทั้งเล่ม จึงทดสอบตั้งแต่การตัดคำ การจัดย่อหน้า ตำแหน่งสระและวรรณยุกต์ ช่องไฟ เส้นขอบ ความสมมาตรของอินเทอร์เฟซ ปกหนังสือหลายรูปแบบ ไปจนถึงจังหวะการกดปุ่มซ้ำแล้วซ้ำอีกจนลงตัว',
    releaseLabel: 'รุ่นเฟิร์มแวร์',
    releaseTitle: 'รุ่นปัจจุบันและสถานะการเผยแพร่',
    releaseBody: 'Ekicross มีให้เลือกสองรุ่นสำหรับ XTEINK X3 ได้แก่ 4.0.1 Stable และ 4.2.0 Final รุ่นล่าสุดที่เพิ่ม Dark Interface ทั้งระบบ ปรับภาษาไทยและ Reader ครั้งใหญ่ พร้อมยกระดับแกนระบบ Connect ใหม่ทั้งหมด',
    target: 'รองรับเฉพาะ',
    download: 'ดาวน์โหลดเฟิร์มแวร์',
    fileSize: 'ไฟล์ .bin',
    checksum: 'รหัสตรวจสอบไฟล์',
    renameFile: 'ก่อนใช้งาน โปรดเปลี่ยนชื่อไฟล์เป็น firmware.bin',
    installReadyFile: 'ไฟล์นี้ใช้ชื่อ firmware.bin และพร้อมวางลงในพื้นที่หลักของ SD Card',
    warningTitle: 'ก่อนติดตั้ง',
    warning: 'เฟิร์มแวร์นี้รองรับเฉพาะ XTEINK X3 และการอัปเดตผ่าน SD Card เท่านั้น ไม่ใช่ X4 และไม่ใช่ไฟล์ Full-flash ก่อนอัปเดตควรสำรองข้อมูล ชาร์จแบตเตอรี่ให้เพียงพอ ตรวจ SHA-256 และห้ามปิดเครื่องหรือถอด SD Card ระหว่างติดตั้ง',
    addonLabel: 'ส่วนเสริมสำหรับ SD Card',
    addonTitle: 'Ekicross 4.2.0 Extension Pack',
    addonBody: 'สำหรับผู้ที่ติดตั้งเฟิร์มแวร์แล้ว แต่โฟลเดอร์สำหรับใช้งานบน SD Card ยังไม่ครบ ภายในมีพจนานุกรมอังกฤษ–ไทย ฟอนต์ Google Sans และ Sarabun พร้อมโครงสร้างโฟลเดอร์ที่จำเป็น',
    addonGuide: 'สำรองข้อมูลเดิมก่อน จากนั้นแตกไฟล์ ZIP แล้วจัดวางโฟลเดอร์ที่มีให้ตรงกับโครงสร้างหลักของ SD Card',
    addonContents: '8 โฟลเดอร์ · พจนานุกรมอังกฤษ–ไทย · ฟอนต์ภาษาไทย 2 ชุด',
    addonDownload: 'ดาวน์โหลด Extension Pack',
    addonChecksum: 'ดาวน์โหลดไฟล์ SHA-256',
    installLabel: 'การติดตั้ง',
    installTitle: 'คู่มือการติดตั้ง Ekicross',
    installBody: 'อ่านข้อควรทราบและเตรียมเครื่องกับ SD Card ให้พร้อมก่อนเริ่ม จากนั้นทำตามขั้นตอนตามลำดับโดยไม่ข้ามข้อใด',
    changelogLabel: 'บันทึกการเปลี่ยนแปลง',
    changelogTitle: 'การเปลี่ยนแปลงในแต่ละรุ่น',
    hub: 'เว็บไซต์หลักสำหรับข้อมูล รุ่นเฟิร์มแวร์ และไฟล์ดาวน์โหลดของ Ekicross',
    back: 'กลับด้านบน',
  },
  en: {
    nav: ['Story', 'What’s built', 'Firmware', 'Installation', 'Changelog'],
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
    releaseBody: 'Ekicross is available in two releases for the XTEINK X3: 4.0.1 Stable and the latest 4.2.0 Final with a system-wide Dark Interface, major Thai and Reader refinements, and a more resilient Connect core.',
    target: 'Target device',
    download: 'Download firmware',
    fileSize: '.bin file',
    checksum: 'File checksum',
    renameFile: 'Before use, rename the downloaded file to firmware.bin',
    installReadyFile: 'This file is already named firmware.bin and is ready for the root of the SD card',
    warningTitle: 'Before installing',
    warning: 'This firmware supports only the XTEINK X3 and SD card updates. It is not for X4 and is not a full-flash image. Back up important data, charge the battery, verify SHA-256, and never power off or remove the SD card during installation.',
    addonLabel: 'SD CARD ADD-ON',
    addonTitle: 'Ekicross 4.2.0 Extension Pack',
    addonBody: 'For firmware users whose SD card folders are incomplete. The pack includes an English–Thai dictionary, Google Sans and Sarabun fonts, and the required folder structure.',
    addonGuide: 'Back up existing data first. Extract the ZIP, then arrange the included folders to match the root structure of your SD card.',
    addonContents: '8 folders · English–Thai dictionary · 2 Thai font families',
    addonDownload: 'Download Extension Pack',
    addonChecksum: 'Download SHA-256 file',
    installLabel: 'INSTALLATION',
    installTitle: 'Installing Ekicross',
    installBody: 'Review the safety notes, prepare the device and SD card, then complete every step in order without interruption.',
    changelogLabel: 'CHANGELOG',
    changelogTitle: 'What changes with each release',
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
          body: 'ห้ามติดตั้งบน X4 ไฟล์นี้สร้างสำหรับ XTEINK X3 และการอัปเดตผ่าน SD Card เท่านั้น ไม่ใช่ไฟล์ Full-flash',
          details: [],
        },
        {
          title: 'ระบบ Dual-Slot และ Rollback',
          body: 'ระบบจะเขียนเฟิร์มแวร์ลงในช่องสำรองก่อน หากการติดตั้งไม่สมบูรณ์หรือไฟล์ไม่ผ่านการตรวจสอบ เครื่องจะพยายามกลับไปใช้เฟิร์มแวร์เดิมโดยอัตโนมัติ วิธีนี้ช่วยลดความเสี่ยงที่เครื่องจะค้างหรือเปิดไม่ติด แต่ไม่อาจรับประกันได้ว่าจะไม่มีความเสี่ยงเลย',
          details: [],
        },
        {
          title: 'ติดตั้งด้วย SD Card เท่านั้น',
          body: 'แม้ระบบจะรองรับการอัปเดตผ่าน OTA แต่ Ekicross ปิดช่องทางนี้ไว้เพื่อลดโอกาสอัปเดตโดยไม่ตั้งใจ จึงต้องติดตั้งเฟิร์มแวร์ด้วย SD Card เท่านั้น',
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
          body: 'ฟอร์แมตการ์ดเป็น exFAT แล้ววางไฟล์ .bin ไว้ในพื้นที่หลักของการ์ดโดยไม่ต้องสร้างโฟลเดอร์',
          highlight: 'สำคัญ: เปลี่ยนชื่อไฟล์ที่ดาวน์โหลดเป็น firmware.bin ก่อนนำไปใส่ SD Card เพราะชื่อไฟล์จากหน้าดาวน์โหลดอาจยังระบุชื่อรุ่นและไม่พร้อมสำหรับการติดตั้ง',
          details: [],
        },
        {
          title: 'ตรวจเฟิร์มแวร์เดิมและใส่การ์ด',
          body: 'เสียบ SD Card เข้ากับเครื่อง แล้วตรวจสอบว่าเฟิร์มแวร์เดิมมีเมนู SD Card Firmware Update',
          details: [],
        },
        {
          title: 'ตรวจระดับแบตเตอรี่',
          body: 'แบตเตอรี่ต้องเหลือไม่น้อยกว่า 60% และห้ามเสียบสายชาร์จระหว่างติดตั้ง',
          details: [],
        },
        {
          title: 'ตรวจไฟล์และเริ่มอัปเดต',
          body: 'เปิดเมนู SD Card Firmware Update แล้วรอจนระบบตรวจสอบไฟล์เรียบร้อย จากนั้นจึงเริ่มอัปเดต ระหว่างที่แถบความคืบหน้ายังไม่ครบ 100% ห้ามปิดเครื่อง ถอดการ์ด หรือกดปุ่มใดๆ',
          details: [],
        },
        {
          title: 'รอให้เครื่องเริ่มต้นใหม่',
          body: 'เมื่อเครื่องเริ่มต้นใหม่และแสดงโลโก้ Ekicross การติดตั้งถือว่าเสร็จสมบูรณ์และพร้อมใช้งาน',
          details: [],
        },
      ],
    },
    {
      number: '03',
      title: 'เทคนิคการติดตั้งเพิ่มเติม เพื่อประสบการณ์ใช้งานที่ลื่นไหล',
      kind: 'steps',
      items: [
        {
          title: 'ใช้ SD Card สองใบ สำหรับผู้ที่ติดตั้งและใช้งาน Ekicross อยู่แล้ว เมื่อต้องการอัปเดตเป็นรุ่นใหม่กว่า',
          body: 'แนวทางนี้เป็นทางเลือกเสริม ผู้ใช้ยังติดตั้งด้วยการ์ดใบเดียวได้ตามขั้นตอนปกติ แต่สำหรับผู้ที่ติดตามและติดตั้ง Ekicross รุ่นใหม่อย่างต่อเนื่อง การแยกการ์ดข้อมูลออกจากการ์ดติดตั้งจะช่วยลดการย้ายไฟล์ซ้ำ ไม่รบกวนโครงสร้างที่จัดไว้ และกลับมาอ่านต่อได้รวดเร็วหลังอัปเดต',
          details: [],
        },
        {
          title: 'ปิดเครื่องและถอดการ์ดประจำ',
          body: 'ปิดเครื่องให้สมบูรณ์ก่อนถอด SD Card ที่ใช้เก็บข้อมูลออก แล้วเก็บการ์ดใบนี้ไว้โดยไม่แก้ไขไฟล์ภายใน',
          details: [],
        },
        {
          title: 'เตรียมการ์ดติดตั้ง',
          body: 'นำการ์ดเปล่าอีกใบมาฟอร์แมตเป็น exFAT เปลี่ยนชื่อไฟล์เฟิร์มแวร์เป็น firmware.bin แล้ววางไว้ในพื้นที่หลักของการ์ดตามขั้นตอนการติดตั้งปกติ',
          highlight: 'ใช้การ์ดใบนี้สำหรับติดตั้งแต่ละเวอร์ชัน โดยไม่ต้องนำหนังสือหรือโฟลเดอร์ใช้งานประจำมาไว้ในการ์ดเดียวกัน',
          details: [],
        },
        {
          title: 'ติดตั้งและรอให้ระบบกลับมาสมบูรณ์',
          body: 'ติดตั้งเฟิร์มแวร์ตามขั้นตอนจนแถบความคืบหน้าครบ 100% จากนั้นรอให้เครื่องเริ่มต้นใหม่และกลับเข้าสู่ระบบตามปกติก่อนดำเนินการต่อ',
          details: [],
        },
        {
          title: 'สลับกลับมาใช้การ์ดประจำ',
          body: 'ปิดเครื่องอีกครั้ง ถอดการ์ดติดตั้งออก แล้วใส่การ์ดประจำกลับเข้าไป เมื่อเปิดเครื่อง หนังสือ โครงสร้างโฟลเดอร์ และการตั้งค่าที่บันทึกไว้บนการ์ดจะกลับมาพร้อมใช้งาน',
          details: [],
        },
      ],
    },
    {
      number: '04',
      title: 'ระบบฟอนต์ภาษาไทยและการปรับแต่ง',
      kind: 'notes',
      items: [
        {
          title: 'ฟอนต์มาตรฐานในตัวเครื่อง',
          body: 'มีฟอนต์ภาษาไทยพร้อมใช้ 2 แบบ ได้แก่ Google Sans และ Sarabun ซึ่งผ่านการปรับการตัดคำ รวมถึงตำแหน่งสระและวรรณยุกต์ เช่น ไม้เอกและไม้โทบนพยัญชนะ เพื่อให้อ่านง่ายบนจอ E-Ink',
          details: [],
        },
        {
          title: 'การติดตั้งฟอนต์เพิ่มเติม',
          body: 'รองรับฟอนต์ตามมาตรฐานของ CrossPoint หรือ CrossInk โดยต้องแปลงไฟล์ผ่านเว็บและเตรียมให้ครบทั้ง 4 ขนาดก่อนนำไปใช้',
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
        { title: 'XTEINK X3 only', body: 'Never install this build on X4. It is made for SD card updates on the XTEINK X3 and is not a full-flash image.', details: [] },
        { title: 'Dual-slot rollback', body: 'The firmware is written to the alternate slot first. If verification or installation fails, the device attempts to return to the previous firmware. This reduces risk but does not guarantee zero chance of a brick.', details: [] },
        { title: 'Manual SD card installation', body: 'OTA capability is intentionally disabled to prevent accidental updates. Install Ekicross manually from an SD card.', details: [] },
      ],
    },
    {
      number: '02',
      title: 'Installing Ekicross X3 firmware',
      kind: 'steps',
      items: [
        { title: 'Prepare the SD card', body: 'Format it as exFAT and place the .bin file at the card root. Do not create a folder.', highlight: 'Important: Rename the downloaded file to firmware.bin before placing it on the SD card. The downloaded filename may still include the release name and is not ready for installation as-is.', details: [] },
        { title: 'Check the current firmware', body: 'Insert the card and confirm that the device has the SD Card Firmware Update menu.', details: [] },
        { title: 'Check the battery', body: 'Battery level must be at least 60%. Do not connect a charger during installation.', details: [] },
        { title: 'Verify and update', body: 'Open SD Card Firmware Update, wait for file verification to pass, then start the update. Do not power off, remove the card, or operate the device before progress reaches 100%.', details: [] },
        { title: 'Finish', body: 'Installation is complete after the device restarts and the Ekicross logo appears.', details: [] },
      ],
    },
    {
      number: '03',
      title: 'Additional installation techniques for a smoother experience',
      kind: 'steps',
      items: [
        { title: 'Use two SD cards when updating an existing Ekicross installation to a newer release', body: 'This is an optional workflow, and a single card still works with the standard steps. For users who regularly follow and install new Ekicross releases, separating the data card from the installation card avoids repeated file moves, preserves the prepared structure, and makes it quicker to return to reading after an update.', details: [] },
        { title: 'Power off and remove the everyday card', body: 'Shut the device down completely before removing the SD card that holds your data. Keep this card unchanged while updating.', details: [] },
        { title: 'Prepare the installation card', body: 'Format the second card as exFAT, rename the firmware file to firmware.bin, and place it at the card root as described in the standard installation steps.', highlight: 'Use this card for each firmware installation without placing your everyday books or working folders on it.', details: [] },
        { title: 'Install and wait for a complete restart', body: 'Complete the firmware update through 100%, then wait until the device has restarted and returned to normal operation before continuing.', details: [] },
        { title: 'Return to the everyday card', body: 'Power off again, remove the installation card, and reinsert the everyday data card. After startup, books, folders, and settings stored on that card return ready for use.', details: [] },
      ],
    },
    {
      number: '04',
      title: 'Thai fonts and customization',
      kind: 'notes',
      items: [
        { title: 'Built-in fonts', body: 'Google Sans and Sarabun are included and tuned for Thai word breaks, vowels, and tone marks on the E-Ink display.', details: [] },
        { title: 'Custom fonts', body: 'CrossPoint- or CrossInk-compatible fonts can be converted through the web tool and supplied in all four required sizes.', details: ['Provide sizes 12, 14, 16, and 18.', 'Custom fonts may not match the word breaking or mark placement of the tuned built-in fonts. Results depend on the font structure and user settings.'] },
      ],
    },
  ],
};

const changelogEntries = [
  {
    version: '4.2.0',
    state: 'current',
    status: { th: 'Final · เปิดดาวน์โหลด', en: 'Final · Download available' },
    headline: { th: 'Dark Interface ใหม่ และยกระดับแกน Connect', en: 'A new Dark Interface and upgraded Connect core' },
    changes: [
      {
        th: 'เพิ่ม Dark Interface พื้นดำทั้งระบบพร้อมจำสถานะ โดยแยกอิสระจากโหมดมืดของ Reader และรักษาปกหนังสือกับภาพใน Gallery ไม่ให้กลับสีภาพ',
        en: 'Added a persistent system-wide Dark Interface, separate from Reader Dark Mode, while keeping book covers and Gallery images from being inverted.',
      },
      {
        th: 'Reader แสดงสถานะโหมดมืดว่าเปิดหรือปิด รักษา FAST page turn และเลือกเปลี่ยน Waveform เฉพาะจังหวะที่จำเป็น',
        en: 'Reader now shows whether Dark Mode is on or off, preserves FAST page turns, and changes waveform only when needed.',
      },
      {
        th: 'แก้สระอำร่วมวรรณยุกต์ เช่น น้ำ ซ้ำ ย้ำ รวมถึงสระและวรรณยุกต์หลายชั้นบนพยัญชนะไทยทรงสูง',
        en: 'Fixed tone marks combined with sara am in words such as น้ำ, ซ้ำ, and ย้ำ, plus multi-level marks on tall Thai consonants.',
      },
      {
        th: 'รองรับฟอนต์ทำเองขนาดเกิน 20 pt โดยไม่ปลดระบบ Safety พร้อมปรับการตัดคำไทยสำหรับฟอนต์ใหญ่และใช้มาตรฐาน Reader เดียวกันทั้ง UI ไทยและอังกฤษ',
        en: 'Supports custom fonts above 20 pt without disabling loader safety, with improved Thai word breaking and one Reader standard across Thai and English UI languages.',
      },
      {
        th: 'ยกระดับแกน Connect สำหรับ Wi-Fi, Web transfer, Calibre/WebDAV, Hotspot และ OPDS ให้จัดการหน่วยความจำและความล้มเหลวได้อย่างปลอดภัยขึ้น',
        en: 'Upgraded the Connect core across Wi-Fi, Web transfer, Calibre/WebDAV, Hotspot, and OPDS for safer memory and failure handling.',
      },
      {
        th: 'แก้ปุ่ม “เลือก/สลับ” ซ้อนกัน และเพิ่มเวอร์ชันที่ติดตั้งจริงจาก App Descriptor ในหน้า System',
        en: 'Fixed overlapping Select/Switch labels and added the installed App Descriptor version to the System page.',
      },
      {
        th: 'ปรับความคมของ Reader ให้คงที่หลังเปลี่ยนหน้า และลด Ghost ของภาพพักหน้าจอ X3 ด้วย Quality Refresh ในจังหวะสุดท้าย',
        en: 'Stabilized Reader sharpness after page turns and reduced X3 sleep-screen ghosting with a final quality refresh.',
      },
      {
        th: 'มั่นใจกว่าเดิมด้วยระบบ Dual-Slot, Rollback และการติดตั้งแบบ Fail-closed โดยไม่เขียน Bootloader หรือ Partition Table ที่พัฒนาให้ดียิ่งขึ้น',
        en: 'Preserves existing features, dual-slot rollback, and fail-closed installation without writing the bootloader or partition table.',
      },
    ],
  },
  {
    version: '4.1.2',
    state: 'reference',
    status: { th: 'รุ่นอ้างอิงเริ่มต้น', en: 'Initial reference release' },
    headline: { th: 'Gallery และเครื่องมือสำหรับนักอ่าน', en: 'Gallery and tools for readers' },
    changes: [
      {
        th: 'เข้าถึง Gallery ได้รวดเร็วขึ้น และแสดงภาพตัวอย่างได้ 12 รูปต่อหน้า รองรับภาพได้ 256 รูปต่อโฟลเดอร์',
        en: 'Made Gallery quicker to access, with 12 thumbnails per page and support for 256 images in each folder.',
      },
      {
        th: 'เปิดภาพเต็มจอโดยไม่มีปุ่มบังภาพ พร้อมเลื่อนไปรูปก่อนหน้า–ถัดไป หมุน ขยาย และลบรูปผ่านหน้าต่างยืนยัน',
        en: 'Added an unobstructed full-screen image view with previous/next navigation, rotation, zoom, and confirmed deletion.',
      },
      {
        th: 'เพิ่มหน้าสถิติการอ่านแบบใหม่ แสดงเวลาอ่าน จำนวนวันต่อเนื่อง จำนวนครั้ง ช่วงอ่านที่ยาวที่สุด รวมถึงวันและช่วงเวลาที่อ่านบ่อยจากข้อมูลการอ่านจริง',
        en: 'Added a redesigned statistics screen showing reading time, streaks, sessions, longest session, and common reading days and times from actual Reader activity.',
      },
      {
        th: 'เพิ่มปฏิทินเต็มจอสำหรับเครื่องที่ไม่มีจอสัมผัส ใช้ปุ่มจริงเปลี่ยนเดือนและปี พร้อมแยกวันปัจจุบันออกจากเดือนที่กำลังเปิดดู',
        en: 'Added a full-screen calendar designed for physical buttons, with month and year navigation and a clear distinction between today and the viewed month.',
      },
      {
        th: 'ปรับปรุง Dark Mode ให้ดีขึ้น เพื่อให้น้ำหนักตัวอักษรและการแสดงผลบนจอ E-Ink ลงตัวกว่าเดิม',
        en: 'Improved Dark Mode for more balanced text weight and E-Ink rendering.',
      },
    ],
  },
  {
    version: '4.1.1',
    state: 'previous',
    status: { th: 'รุ่นก่อนหน้า', en: 'Previous release' },
    headline: { th: 'ปรับการจัดข้อความภาษาไทย', en: 'Refined Thai text layout' },
    changes: [
      {
        th: 'ปรับการจัดข้อความเต็มบรรทัดให้เหมาะกับโครงสร้างภาษาไทยมากขึ้น เพื่อให้ขอบย่อหน้าดูเรียบร้อยโดยไม่บังคับระยะคำมากเกินไป',
        en: 'Refined full justification around Thai text structure, keeping paragraph edges tidy without forcing excessive word spacing.',
      },
      {
        th: 'ปรับระยะห่างระหว่างคำหลังการจัดเต็มบรรทัด ลดช่องว่างที่กว้างผิดธรรมชาติในบรรทัดที่มีคำไทยสั้น–ยาวปะปนกัน',
        en: 'Adjusted spacing after justification to reduce unnatural gaps in lines containing a mix of short and long Thai words.',
      },
      {
        th: 'ปรับจังหวะการตัดบรรทัดและขอบย่อหน้าให้ต่อเนื่องขึ้น เพื่อให้สายตาไล่อ่านข้อความยาวได้เป็นธรรมชาติกว่าเดิม',
        en: 'Refined line breaks and paragraph edges for a more continuous reading rhythm across long passages.',
      },
    ],
  },
  {
    version: '4.1.0',
    state: 'previous',
    status: { th: 'รุ่นเผยแพร่ก่อนหน้า', en: 'Earlier public release' },
    headline: { th: 'เริ่มเติมเครื่องมือที่นักอ่านใช้งานได้จริง', en: 'Reader tools built for everyday use' },
    changes: [
      {
        th: 'เพิ่ม Gallery ที่ควบคุมด้วยปุ่ม แสดงภาพตัวอย่าง 12 รูปต่อหน้า เปิดภาพเต็มจอ เลื่อน หมุน ขยาย และลบรูปผ่านหน้าต่างยืนยัน',
        en: 'Introduced a button-controlled Gallery with 12 thumbnails per page, full-screen viewing, navigation, rotation, zoom, and confirmed deletion.',
      },
      {
        th: 'เพิ่มปฏิทินเต็มจอสำหรับปุ่มจริง และสถิติการอ่านจากเวลาที่ใช้งาน Reader จริง',
        en: 'Added a full-screen physical-button calendar and reading statistics collected from actual Reader activity.',
      },
      {
        th: 'เพิ่ม Dark Mode ระหว่างอ่าน พร้อมปรับภาพปก Title Page ความคืบหน้าหลังเปลี่ยนฟอนต์ และรายละเอียดของ Reader',
        en: 'Added in-reader Dark Mode and refined covers, title pages, progress after font changes, and other Reader details.',
      },
      {
        th: 'แยกวิธีแสดงผลตัวอักษรและภาพ พร้อมเลือก Waveform ให้เหมาะกับแต่ละส่วน เพื่อให้น้ำหนักหมึกคงที่โดยยังรักษารายละเอียดสีเทาของภาพ',
        en: 'Separated text and image rendering with suitable waveforms to stabilize ink weight while retaining grayscale image detail.',
      },
      {
        th: 'เพิ่มการตรวจ SD migration และ Rollback ก่อนเผยแพร่ เพื่อช่วยลดความเสี่ยงระหว่างการติดตั้ง',
        en: 'Added SD migration and rollback checks to reduce installation risk.',
      },
    ],
  },
  {
    version: '4.0.1',
    state: 'stable',
    status: { th: 'Stable · เปิดดาวน์โหลด', en: 'Stable · Download available' },
    headline: { th: 'รุ่น Stable แรกที่เริ่มเผยแพร่', en: 'The first public Stable release' },
    changes: [
      {
        th: 'วางพื้นฐานการอ่าน EPUB ภาษาไทย เมนูภาษาไทย และการแสดงชื่อหนังสือ ชื่อผู้แต่ง ชื่อไฟล์ และโฟลเดอร์ภาษาไทย',
        en: 'Established the foundation for Thai EPUB reading, Thai menus, and Thai book titles, authors, filenames, and folders.',
      },
      {
        th: 'ปรับการตัดคำ ตำแหน่งสระและวรรณยุกต์ รวมถึงรองรับฟอนต์เพิ่มเติมจาก SD Card เพื่อให้ภาษาไทยอ่านได้เป็นธรรมชาติขึ้น',
        en: 'Refined Thai word breaking, vowel and tone-mark placement, and support for additional fonts from the SD card.',
      },
      {
        th: 'จัดหน้าหลักและคำสั่งให้สัมพันธ์กับปุ่มจริงของ X3 เพื่อให้หยิบเครื่องขึ้นมาแล้วใช้งานได้เข้าใจง่าย',
        en: 'Organized the Home screen and commands around X3 physical buttons for straightforward operation.',
      },
      {
        th: 'เก็บไว้เป็นรุ่น Stable สำหรับผู้ที่ต้องการฐานการใช้งานที่นิ่ง และใช้เป็นไฟล์ย้อนกลับเมื่อจำเป็น',
        en: 'Remains available as the Stable baseline and a fallback when needed.',
      },
    ],
  },
  {
    version: '1.x.x–3.x.x',
    state: 'legacy',
    status: { th: 'ช่วงพัฒนาเพื่อใช้งานเอง · ยังไม่แจกจ่าย', en: 'Personal development phase · Not distributed' },
    headline: { th: 'จากความเข้าใจปัญหาเครื่องติดล็อก สู่พื้นฐานของ Ekicross', en: 'From understanding locked devices to the foundation of Ekicross' },
    changes: [
      {
        th: 'เริ่มจากทำความเข้าใจปัญหาและข้อจำกัดของเครื่องที่ติดล็อก รวมถึงเส้นทางการติดตั้งที่ต้องระมัดระวังเป็นพิเศษ',
        en: 'Began by understanding the problems and limitations of locked devices, including installation paths that required extra care.',
      },
      {
        th: 'ค่อยๆ ต่อยอดและไล่ปรับปรุงภาษาไทย หน้าตา การควบคุมด้วยปุ่ม และประสบการณ์อ่านจากการใช้งานจริงของตัวเอง',
        en: 'Gradually refined Thai support, interface design, physical-button control, and the reading experience through personal daily use.',
      },
      {
        th: 'ช่วงนี้ยังทำไว้สำหรับใช้เองและทดสอบแนวทางต่างๆ จึงยังไม่ได้เริ่มแจกจ่ายให้ผู้ใช้ทั่วไป',
        en: 'These versions were personal builds used to test different directions and were not distributed publicly.',
      },
    ],
  },
];

export default function Home() {
  const [lang, setLang] = useState<Lang>('th');
  const t = copy[lang];

  return (
    <main lang={lang}>
      <div className="ambient ambient-one" /><div className="ambient ambient-two" /><div className="noise" />
      <header className="site-header glass">
        <a className="parent-brand" href="#top" aria-label="Ekicross"><img src={assetPath('/ekicross-parent-logo-transparent.png')} alt="Ekicross" /></a>
        <nav aria-label={lang === 'th' ? 'เมนูหลัก' : 'Main navigation'}>{t.nav.map((item, index) => <a key={item} href={['#story', '#development', '#release', '#install', '#changelog'][index]}>{item}</a>)}</nav>
        <div className="language" aria-label="Language"><button className={lang === 'th' ? 'active' : ''} onClick={() => setLang('th')}>TH</button><button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button></div>
      </header>

      <section className="hero wrap" id="top">
        <div className="hero-copy">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.title.split('\n').map(line => <span key={line}>{line}</span>)}</h1>
          <p className="lead">{t.intro}</p>
          <div className="hero-actions"><a className="primary-button" href="#development">{t.readMore}<span>↓</span></a><a className="version-link" href="#release">v{currentRelease.version} <span>→</span></a></div>
        </div>
        <figure className="release-art device-art"><img src={assetPath('/ekicross-on-device-cutout.png')} alt="Ekicross shown on an XTEINK X3" /></figure>
      </section>

      <section className="story wrap" id="story">
        <div className="section-kicker"><span>01</span>{t.storyLabel}</div>
        <div className="story-card glass"><h2>{t.storyTitle}</h2><div><p>{t.storyBody1}</p><p>{t.storyBody2}</p></div></div>
      </section>

      <section className="showcase wrap" aria-labelledby="showcase-title"><div className="section-heading"><h2 id="showcase-title">{t.showcaseTitle}</h2><p>{t.showcaseBody}</p></div><figure className="showcase-device"><img src={assetPath('/ekicross-home-ui-cutout.png')} alt="Ekicross Home interface on X3" /></figure></section>

      <section className="developer-profile wrap" id="developer" aria-labelledby="developer-title">
        <div className="developer-copy"><div className="section-kicker"><span>•</span>{t.developerLabel}</div><h2 id="developer-title">{t.developerTitle}</h2><p>{t.developerBody}</p></div>
        <figure><img src={assetPath('/ekicross-developer-device-cutout.png')} alt={t.developerLabel} /></figure>
      </section>

      <section className="development wrap" id="development">
        <div className="section-kicker"><span>02</span>{t.developmentLabel}</div>
        <div className="section-heading"><h2>{t.developmentTitle}</h2><p>{t.developmentIntro}</p></div>
        <div className="development-list">{development.map(item => <article className="development-card glass" key={item.number}><span className="item-number">{item.number}</span><div><h3>{item.title[lang]}</h3><p>{item.body[lang]}</p>{item.details.length > 0 && <ul className="development-detail-list">{item.details.map(detail => <li key={detail.th}>{detail[lang]}</li>)}</ul>}<small>{item.note[lang]}</small></div></article>)}</div>
      </section>

      <section className="release wrap" id="release">
        <div className="section-kicker"><span>03</span>{t.releaseLabel}</div>
        <div className="section-heading"><h2>{t.releaseTitle}</h2><p>{t.releaseBody}</p></div>
        <div className="release-grid two-releases">
          <article className="release-panel glass">
            <div className="release-top"><span className="status-dot ready" />{stableRelease[lang]}</div>
            <h3>Ekicross X3<br />{stableRelease.version}</h3>
            <a className="download-button" href={firmwareDownloads.stable.url}>{t.download}<span>↓</span></a>
            <p className="rename-file-note">{t.renameFile}</p>
            <p className="download-note">{t.fileSize} · {firmwareDownloads.stable.size}</p>
            <details className="checksum"><summary>{t.checksum}</summary><code>{firmwareDownloads.stable.sha256}</code></details>
          </article>
          <article className="release-panel update glass">
            <div className="release-top"><span className="status-dot ready" />{currentRelease.status[lang]}</div>
            <h3>Ekicross X3<br />{currentRelease.version}</h3>
            <ul className="release-highlights">{currentRelease.highlights.map(item => <li key={item.th}>{item[lang]}</li>)}</ul>
            <a className="download-button" href={firmwareDownloads.update.url}>{t.download}<span>↓</span></a>
            <p className="rename-file-note ready-file-note">{t.installReadyFile}</p>
            <p className="download-note">{t.fileSize} · {firmwareDownloads.update.size}</p>
            <details className="checksum"><summary>{t.checksum}</summary><code>{firmwareDownloads.update.sha256}</code></details>
          </article>
        </div>
        <div className="test-grid release-tests">{currentRelease.tests.map(test => <div key={`${test.value}-${test.th}`}><strong>{test.value}</strong><span>{test[lang]}</span></div>)}</div>
        <aside className="warning glass"><span>!</span><div><h3>{t.warningTitle}</h3><p>{t.warning}</p></div></aside>
        <article className="addon-card glass" aria-labelledby="addon-title">
          <div className="addon-copy">
            <span className="addon-label">{t.addonLabel}</span>
            <h3 id="addon-title">{t.addonTitle}</h3>
            <p>{t.addonBody}</p>
            <p className="addon-guide">{t.addonGuide}</p>
            <div className="addon-folders" aria-label={lang === 'th' ? 'โฟลเดอร์ภายในแพ็ก' : 'Folders included in the pack'}>{extensionPack.folders.map(folder => <code key={folder}>{folder}</code>)}</div>
          </div>
          <div className="addon-download">
            <span>{t.addonContents}</span>
            <a className="download-button" href={extensionPack.url}>{t.addonDownload}<span>↓</span></a>
            <p>{extensionPack.size} · ZIP</p>
            <a className="checksum-file-link" href={extensionPack.checksumUrl}>{t.addonChecksum}</a>
            <details className="checksum"><summary>{t.checksum}</summary><code>{extensionPack.sha256}</code></details>
          </div>
        </article>
      </section>

      <section className="installation wrap" id="install">
        <div className="section-kicker"><span>04</span>{t.installLabel}</div>
        <div className="installation-heading"><h2>{t.installTitle}</h2><p>{t.installBody}</p></div>
        <div className="installation-grid">
          {installationCards[lang].map(card => {
            const List = card.kind === 'steps' ? 'ol' : 'ul';
            return <article className={`installation-card installation-card-${card.number} glass`} key={card.number}>
              <div className="installation-card-heading"><span>{card.number}</span><h3>{card.title}</h3></div>
              <List>{card.items.map(item => <li key={item.title}><div><strong>{item.title}</strong><p>{item.body}</p>{'highlight' in item && <p className="install-highlight">{item.highlight}</p>}{item.details.length > 0 && <ul>{item.details.map(detail => <li key={detail}>{detail}</li>)}</ul>}</div></li>)}</List>
            </article>;
          })}
        </div>
      </section>

      <section className="changelog wrap" id="changelog">
        <div className="section-kicker"><span>05</span>{t.changelogLabel}</div>
        <div className="changelog-heading"><h2>{t.changelogTitle}</h2></div>
        <div className="changelog-list">
          {changelogEntries.map(entry => <article className={`changelog-card changelog-${entry.state} glass`} key={entry.version}>
            <div className="changelog-version"><span>VERSION</span><strong>{entry.version}</strong><small>{entry.status[lang]}</small><h3>{entry.headline[lang]}</h3></div>
            <ul>{entry.changes.map(change => <li key={change.th}><p>{change[lang]}</p></li>)}</ul>
          </article>)}
        </div>
      </section>

      <footer className="glass"><div className="footer-inner wrap"><div className="footer-brand"><img src={assetPath('/ekicross-parent-logo-transparent.png')} alt="Ekicross" /><span>{t.hub}</span></div><a href="#top">{t.back} ↑</a></div><div className="footer-bottom wrap"><span>EKICROSS © 2026</span><span>FOR X3 LAUNCHING</span></div></footer>
    </main>
  );
}
