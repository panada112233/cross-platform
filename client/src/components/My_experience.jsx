import React, { useState } from "react";
import jsPDF from "jspdf";

function MyExperience() {
  const [experiences, setExperiences] = useState([]);
  const [newExperience, setNewExperience] = useState({
    company: "",
    jobTitle: "",
    salary: "",
    year: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // ฟังก์ชันเพิ่ม/แก้ไขประสบการณ์ทำงาน
  const handleAddOrEditExperience = (e) => {
    e.preventDefault();

    if (isEditing) {
      const updatedExperiences = experiences.map((exp, index) =>
        index === editIndex ? newExperience : exp
      );
      setExperiences(updatedExperiences);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setExperiences([...experiences, newExperience]);
    }

    setNewExperience({ company: "", jobTitle: "", salary: "", year: "" });
  };

  // ฟังก์ชันจัดการการเปลี่ยนแปลงในฟอร์ม
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewExperience({ ...newExperience, [name]: value });
  };

  // ฟังก์ชันเริ่มแก้ไขประสบการณ์
  const handleEditExperience = (index) => {
    setNewExperience(experiences[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  // ฟังก์ชันลบประสบการณ์
  const handleDeleteExperience = (index) => {
    const updatedExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(updatedExperiences);
  };

  // ฟังก์ชัน Export PDF
  const handleExportPDF = () => {
    const doc = new jsPDF();
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(16);
    doc.text("ประสบการณ์ทำงาน", 10, 10);

    experiences.forEach((exp, index) => {
      doc.setFontSize(12);
      doc.text(
        `${index + 1}. บริษัท: ${exp.company} | ตำแหน่ง: ${exp.jobTitle} | เงินเดือน: ${exp.salary} บาท | ปี: ${exp.year}`,
        10,
        20 + index * 10
      );
    });

    doc.save("ประสบการณ์ทำงาน.pdf");
  };

  return (
    <div className="p-6 bg-base-200">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 relative">
        {/* ปุ่ม Export PDF ขวาบน */}
        <button
          className="btn btn-accent absolute top-4 right-4"
          onClick={handleExportPDF}
        >
          Export PDF
        </button>

        <h2 className="text-2xl font-bold text-center text-primary mb-4">
          ประสบการณ์ทำงาน
        </h2>
        <form onSubmit={handleAddOrEditExperience} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">บริษัท</span>
              </label>
              <input
                type="text"
                name="company"
                className="input input-bordered"
                placeholder="กรอกชื่อบริษัท"
                value={newExperience.company}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">ตำแหน่ง</span>
              </label>
              <input
                type="text"
                name="jobTitle"
                className="input input-bordered"
                placeholder="กรอกตำแหน่ง"
                value={newExperience.jobTitle}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">เงินเดือน</span>
              </label>
              <input
                type="number"
                name="salary"
                className="input input-bordered"
                placeholder="กรอกเงินเดือน"
                value={newExperience.salary}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">ปี พ.ศ. ที่ทำงาน</span>
              </label>
              <input
                type="number"
                name="year"
                className="input input-bordered"
                placeholder="กรอกปีที่ทำงาน"
                value={newExperience.year}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-full">
            {isEditing ? "บันทึกการแก้ไข" : "เพิ่มประสบการณ์"}
          </button>
        </form>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">ประสบการณ์ที่บันทึกไว้</h3>
          {experiences.length === 0 ? (
            <p className="text-gray-500">ไม่มีข้อมูลประสบการณ์ทำงาน</p>
          ) : (
            <ul className="space-y-4">
              {experiences.map((exp, index) => (
                <li
                  key={index}
                  className="p-4 bg-gray-100 rounded-lg shadow flex justify-between items-center"
                >
                  <div>
                    <p>
                      <strong>บริษัท:</strong> {exp.company}
                    </p>
                    <p>
                      <strong>ตำแหน่ง:</strong> {exp.jobTitle}
                    </p>
                    <p>
                      <strong>เงินเดือน:</strong> {exp.salary} บาท
                    </p>
                    <p>
                      <strong>ปี:</strong> {exp.year}
                    </p>
                  </div>
                  <div>
                    <button
                      className="btn btn-warning btn-sm mr-2"
                      onClick={() => handleEditExperience(index)}
                    >
                      แก้ไข
                    </button>
                    <button
                      className="btn btn-error btn-sm"
                      onClick={() => handleDeleteExperience(index)}
                    >
                      ลบ
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyExperience;