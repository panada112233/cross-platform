import React from 'react';
import '../About.css'; // Import CSS สำหรับหน้า About

function About() {
  return (
    <div className="about-container">
      <div className="about-overlay">
        <h1 className="about-title">ABOUT US</h1>
        <hr className="about-divider" />
        <p className="about-description">
          บริษัท ดิ เอคซ-เพอะทีส (The Expertise) จำกัด
          ยินดีต้อนรับสู่ ระบบจัดเก็บเอกสารพนักงาน<br />ที่ออกแบบมาเพื่อตอบสนองความต้องการขององค์กรในยุคดิจิทัล!
          เรามุ่งมั่นที่จะสร้างแพลตฟอร์ม<br />ที่ใช้งานง่ายและมีประสิทธิภาพสำหรับการจัดเก็บข้อมูลพนักงานอย่างครบวงจร
        </p>
        <hr className="about-divider" />
        <h2 className="about-features">FEATURES</h2>
        <ul className="about-description">
          <li>หน้าแสดงข้อมูล: ดูข้อมูลพนักงานและอัปเดตข้อมูลที่สำคัญได้อย่างรวดเร็วและง่ายดาย</li>
          <li>หน้าโปรไฟล์: ข้อมูลส่วนบุคคล การติดต่อ และอื่นๆ</li>
          <li>หน้าประสบการณ์ทำงาน: ข้อมูลส่วนบุคคลและประสบการณ์การทำงาน</li>
          <li>หน้าอัปโหลดและแสดงเอกสาร: ให้พนักงานสามารถอัปโหลดและดาวน์โหลดเอกสารแบบง่ายดาย เพื่อความสะดวกรวดเร็ว</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
