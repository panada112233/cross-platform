import React from "react";
import { Link } from "react-router-dom";

const EmpHome = () => {
    const userName = "ชื่อ-นามสกุล"; // Replace with dynamic user data
    const statistics = {
        totalEmployees: 50,
        totalDocuments: 100,
        totalExperience: 30,
    };
    const recentActivities = [
        { description: "อัปโหลดเอกสารใหม่", timestamp: "2 ชั่วโมงที่แล้ว", type: "upload" },
        { description: "แก้ไขประสบการณ์ทำงาน", timestamp: "1 วันที่แล้ว", type: "edit" },
    ];

    return (
        <div className="min-h-screen bg-base-200">
            <div className="flex flex-col items-center">
                <div className="text-center mt-6">
                    <h2 className="text-2xl font-bold text-primary">ระบบจัดเก็บเอกสารพนักงาน</h2>
                    <h4 className="text-xl text-success mt-2">ยินดีต้อนรับ, {userName}</h4>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6 w-10/12">
                    {/* ปุ่มเมนู */}
                    {[
                        { name: "ข้อมูลพนักงาน", to: "/EmpHome/Profile", color: "btn-info" },
                        { name: "จัดการเอกสาร", to: "/EmpHome/Document", color: "btn-primary" },
                        { name: "ประสบการณ์ทำงาน", to: "/EmpHome/My_experience", color: "btn-warning" },
                        { name: "การศึกษา", to: "/EmpHome/My_education", color: "btn-success" },
                        { name: "เปลี่ยนรหัสผ่าน", to: "/EmpHome/Change_password", color: "btn-secondary" },
                        { name: "ออกจากระบบ", to: "/EmpHome/Logout", color: "btn-error" },
                    ].map((menu, index) => (
                        <Link key={index} to={menu.to} className={`btn ${menu.color} w-full text-lg`}>
                            {menu.name}
                        </Link>
                    ))}
                </div>

                {/* สถิติระบบ และ กิจกรรมล่าสุด */}
                <div className="mt-8 flex gap-6 justify-center w-10/12">
                    {/* สถิติระบบ */}
                    <div className="card bg-base-100 shadow-lg w-1/2">
                        <div className="card-body">
                            <h3 className="card-title text-primary">สถิติระบบ</h3>
                            <p>พนักงานทั้งหมด: <strong>{statistics.totalEmployees}</strong> คน</p>
                            <p>เอกสารทั้งหมด: <strong>{statistics.totalDocuments}</strong> ไฟล์</p>
                            <p>ประสบการณ์ทำงานที่บันทึกไว้: <strong>{statistics.totalExperience}</strong> รายการ</p>
                        </div>
                    </div>

                    {/* กิจกรรมล่าสุด */}
                    <div className="card bg-base-100 shadow-lg w-1/2">
                        <div className="card-body">
                            <h3 className="card-title text-primary">กิจกรรมล่าสุด</h3>
                            <ul>
                                {recentActivities.length > 0 ? (
                                    recentActivities.map((activity, index) => (
                                        <li key={index} className="my-2">
                                            <span>{activity.description}</span> -{" "}
                                            <span className="text-sm text-gray-500">{activity.timestamp}</span>
                                        </li>
                                    ))
                                ) : (
                                    <li>ไม่มีข้อมูลกิจกรรมล่าสุด</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default EmpHome;
