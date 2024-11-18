import React from "react";
import EmpBase from "./EmpBase";
import { Link } from 'react-router-dom';

const EmpHome = () => {
    const userName = "ชื่อ-นามสกุล"; // Replace with dynamic user data
    const statistics = {
        totalEmployees: 50, // Replace with dynamic data
        totalDocuments: 100,
        totalExperience: 30,
    };
    const recentActivities = [
        { description: "อัปโหลดเอกสารใหม่", timestamp: "2 ชั่วโมง", type: "upload" },
        { description: "แก้ไขประสบการณ์ทำงาน", timestamp: "1 วัน", type: "edit" },
    ]; // Replace with dynamic data

    return (
        <EmpBase>
            <div className="card shadow m-2">
                <div className="card-body">
                    <div className="container mt-4">
                        <div className="row">
                            <div className="col-md-12 text-center mb-4">
                                <h4 className="text-danger p-2" style={{ borderBottom: "3px solid orangered" }}>
                                    ระบบจัดเก็บเอกสารพนักงาน
                                </h4>
                                <h5 className="text-success">ยินดีต้อนรับ, {userName}</h5>
                                <p className="text-muted">คุณสามารถจัดการข้อมูลส่วนตัวและเอกสารได้จากเมนูด้านล่าง</p>
                            </div>

                            <div className="col-md-12">
                                <div className="row text-center">
                                    <div className="col-sm-4 mb-3">
                                        <Link to="/EmpHome/Profile" className="btn btn-outline-info w-100 py-3 shadow">
                                            ข้อมูลพนักงาน
                                        </Link>
                                    </div>
                                    <div className="col-sm-4 mb-3">
                                        <Link to="/EmpHome/Document" className="btn btn-outline-primary w-100 py-3 shadow">
                                            จัดการเอกสาร
                                        </Link>
                                    </div>
                                    <div className="col-sm-4 mb-3">
                                        <Link to="/EmpHome/My_experience" className="btn btn-outline-warning w-100 py-3 shadow">
                                            ประสบการณ์ทำงาน
                                        </Link>
                                    </div>
                                </div>
                                <div className="row text-center">
                                    <div className="col-sm-4 mb-3">
                                        <Link to="/EmpHome/My_education" className="btn btn-outline-success w-100 py-3 shadow">
                                            การศึกษา
                                        </Link>
                                    </div>
                                    <div className="col-sm-4 mb-3">
                                        <Link to="/EmpHome/Change_password" className="btn btn-outline-secondary w-100 py-3 shadow">
                                            เปลี่ยนรหัสผ่าน
                                        </Link>
                                    </div>
                                    <div className="col-sm-4 mb-3">
                                        <Link to="/EmpHome/Logout" className="btn btn-outline-danger w-100 py-3 shadow">
                                            ออกจากระบบ
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12 mt-4">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="card shadow-sm">
                                            <div className="card-body">
                                                <h5 className="card-title text-primary">สถิติระบบ</h5>
                                                <p>พนักงานทั้งหมด: <strong>{statistics.totalEmployees}</strong> คน</p>
                                                <p>เอกสารทั้งหมด: <strong>{statistics.totalDocuments}</strong> ไฟล์</p>
                                                <p>ประสบการณ์ทำงานที่บันทึกไว้: <strong>{statistics.totalExperience}</strong> รายการ</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card shadow-sm">
                                            <div className="card-body">
                                                <h5 className="card-title text-primary">กิจกรรมล่าสุด</h5>
                                                <ul className="list-unstyled">
                                                    {recentActivities.length > 0 ? (
                                                        recentActivities.map((activity, index) => (
                                                            <li key={index}>
                                                                <i className={`fas fa-${activity.type} text-secondary`}></i> {activity.description} -{" "}
                                                                <span className="text-muted">{activity.timestamp}</span>
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

                        </div>
                    </div>
                </div>
            </div>
        </EmpBase>
    );
};

export default EmpHome;
