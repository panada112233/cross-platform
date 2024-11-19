import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";

function Profile() {
  const [employee, setEmployee] = useState({
    firstname: "",
    lastname: "",
    empcode: "",
    department: "",
    designation: "",
    contact: "",
    emailid: "",
    jdate: "",
    gender: "None",
  });

  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/get_employee_data")
      .then((response) => response.json())
      .then((data) => {
        setEmployee(data);
      })
      .catch((err) => {
        console.error("Error fetching data: ", err);
        setError("ไม่สามารถดึงข้อมูลได้");
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/update_profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("อัปเดตโปรไฟล์สำเร็จ");
          setEmployee(data.updatedEmployee);
        } else {
          alert("มีข้อผิดพลาดเกิดขึ้น โปรดลองอีกครั้ง");
        }
      })
      .catch((err) => {
        console.error("Error updating profile: ", err);
        alert("มีข้อผิดพลาดเกิดขึ้น โปรดลองอีกครั้ง");
      });
  };

  const handleExportPDF = () => {
    const doc = new jsPDF();

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(16);
    doc.text("โปรไฟล์พนักงาน", 10, 10);

    const content = `
      ชื่อ: ${employee.firstname}
      นามสกุล: ${employee.lastname}
      รหัสพนักงาน: ${employee.empcode}
      แผนกพนักงาน: ${employee.department}
      ตำแหน่งพนักงาน: ${employee.designation}
      การติดต่อ: ${employee.contact}
      อีเมล: ${employee.emailid}
      วันที่เข้าร่วม: ${employee.jdate}
      เพศ: ${employee.gender === "None" ? "ไม่ระบุ" : employee.gender}
    `;

    doc.setFontSize(12);
    doc.text(content, 10, 30);
    doc.save("employee_profile.pdf");
  };

  return (
    <div className="p-6 bg-base-200">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md relative">
        {/* ปุ่ม Export PDF */}
        <button
          onClick={handleExportPDF}
          className="btn btn-secondary absolute top-4 right-4"
        >
          Export PDF
        </button>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-center text-primary">โปรไฟล์</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">ชื่อ</span>
                </label>
                <input
                  type="text"
                  name="firstname"
                  className="input input-bordered"
                  placeholder="กรอกชื่อจริง"
                  value={employee.firstname}
                  onChange={handleChange}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">นามสกุล</span>
                </label>
                <input
                  type="text"
                  name="lastname"
                  className="input input-bordered"
                  placeholder="กรอกนามสกุล"
                  value={employee.lastname}
                  onChange={handleChange}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">รหัสพนักงาน</span>
                </label>
                <input
                  type="text"
                  name="empcode"
                  className="input input-bordered"
                  placeholder="ป้อนรหัสพนักงานของคุณ"
                  value={employee.empcode}
                  onChange={handleChange}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">แผนกพนักงาน</span>
                </label>
                <input
                  type="text"
                  name="department"
                  className="input input-bordered"
                  placeholder="กรอกแผนกพนักงาน"
                  value={employee.department}
                  onChange={handleChange}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">ตำแหน่งพนักงาน</span>
                </label>
                <input
                  type="text"
                  name="designation"
                  className="input input-bordered"
                  placeholder="กรอกตำแหน่งพนักงาน"
                  value={employee.designation}
                  onChange={handleChange}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">การติดต่อ</span>
                </label>
                <input
                  type="text"
                  name="contact"
                  className="input input-bordered"
                  placeholder="กรอกข้อมูลการติดต่อ"
                  value={employee.contact}
                  onChange={handleChange}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">อีเมล</span>
                </label>
                <input
                  type="email"
                  name="emailid"
                  className="input input-bordered"
                  placeholder="กรอกอีเมลของคุณ"
                  value={employee.emailid}
                  onChange={handleChange}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">วันที่เข้าร่วม</span>
                </label>
                <input
                  type="date"
                  name="jdate"
                  className="input input-bordered"
                  value={employee.jdate}
                  onChange={handleChange}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">เพศ</span>
                </label>
                <select
                  name="gender"
                  className="select select-bordered"
                  value={employee.gender}
                  onChange={handleChange}
                >
                  <option value="None">กรุณาเลือกเพศ</option>
                  <option value="Male">ชาย</option>
                  <option value="Female">หญิง</option>
                </select>
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-full">
              ยืนยัน
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
