import React from "react";

const EmpBase = ({ children }) => {
  const profileImage = "/path-to-user-image"; // Replace with dynamic user image URL
  const menuItems = [
    { name: "แสดงข้อมูล", icon: "bi-house-door", url: "/EmpHome" },
    { name: "โปรไฟล์", icon: "bi-person", url: "/EmpHome/Profile" }, // ใช้ path แบบซ้อนกัน
    { name: "ประสบการณ์ทำงาน", icon: "bi-briefcase", url: "/EmpHome/My_experience" },
    { name: "การศึกษา", icon: "bi-book", url: "/EmpHome/My_education" },
    { name: "จัดการเอกสาร", icon: "bi-folder", url: "/EmpHome/Document" },
    { name: "เปลี่ยนรหัสผ่าน", icon: "bi-lock", url: "/EmpHome/Change_password", style: "bg-secondary text-white" },
    { name: "ออกจากระบบ", icon: "bi-box-arrow-right", url: "/EmpHome/Logout", style: "bg-danger text-white" },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-2 p-0 bg-info">
          <center>
            <img
              src={profileImage}
              width="100"
              height="100"
              className="img-thumbnail rounded my-3"
              alt="โปรไฟล์พนักงาน"
            />
            <a href="/Change_profile" className="btn btn-light btn-sm mt-2 px-3">
              เปลี่ยนรูปภาพ
            </a>
          </center>
          <div className="list-group">
            {menuItems.map((item, index) => (
              <a
                href={item.url}
                key={index}
                className={`list-group-item list-group-item-action ${item.style || ""}`}
              >
                <i className={`bi ${item.icon}`}></i> {item.name}
              </a>
            ))}
          </div>
        </div>

        <div className="col-sm-10 p-0">
          <div className="container-fluid p-2">
            <h5
              className="text-center p-3 font-weight-bold"
              style={{ borderBottom: "2px solid green", borderTop: "2px solid green" }}
            >
              ระบบจัดเก็บเอกสารพนักงาน
            </h5>
            <div className="card shadow bg-info" style={{ minHeight: "89vh" }}>
              <div className="card-body">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpBase;
