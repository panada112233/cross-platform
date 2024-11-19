import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // นำเข้า useNavigate

function ChangeProfile() {
  const [profilePicture, setProfilePicture] = useState(null);
  const navigate = useNavigate();  // ใช้ useNavigate สำหรับการนำทาง

  // ฟังก์ชันจัดการการเลือกไฟล์รูปโปรไฟล์
  const handleFileChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  // ฟังก์ชันบันทึกรูปโปรไฟล์
  const handleSave = (e) => {
    e.preventDefault();
    if (profilePicture) {
      // ส่งข้อมูลไปยังเซิร์ฟเวอร์หรือเก็บไว้ในระบบ
      console.log('โปรไฟล์รูปภาพที่ถูกอัปโหลด:', profilePicture);
      alert('รูปโปรไฟล์ของคุณถูกอัปโหลดเรียบร้อยแล้ว');
      
      // หลังจากอัปโหลดเสร็จ นำทางไปที่ EmpHome
      navigate('/EmpHome');
    } else {
      alert('กรุณาเลือกไฟล์รูปภาพ');
    }
  };

  return (
    <div className="card shadow m-2">
      <div className="card-body">
        <h5 className="p-2 text-danger" style={{ borderBottom: '2px solid orange' }}>เปลี่ยนรูปโปรไฟล์</h5>
        
        <div className="container-fluid">
          <form onSubmit={handleSave}>
            <div className="form-group">
              <label>รูปโปรไฟล์</label>
              <input
                type="file"
                className="form-control"
                onChange={handleFileChange}
                accept="image/*"
                required
              />
              {profilePicture && (
                <div className="mt-2">
                  <img
                    src={URL.createObjectURL(profilePicture)}
                    alt="Profile Preview"
                    className="img-thumbnail"
                    style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                  />
                </div>
              )}
            </div>

            <button type="submit" className="btn btn-primary m-2">อัปโหลดรูปโปรไฟล์</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChangeProfile;
