import React, { useState } from 'react';
import '../Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    empcode: '',
    email: '',
    pwd: '',
    cpwd: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.pwd !== formData.cpwd) {
      setError('รหัสผ่านไม่ตรงกัน');
      return;
    }

    // Mock backend validation
    if (formData.email === 'existing@example.com') {
      setError('อีเมลนี้มีผู้ใช้งานแล้ว');
      return;
    }

    if (formData.empcode === '12345') {
      setError('รหัสพนักงานนี้มีผู้ใช้งานแล้ว');
      return;
    }

    alert('ลงทะเบียนสำเร็จ');
    setError('');
    // Redirect or reset form as needed
  };

  return (
    <div className="register-container">
      <div className="card bg-base-100 shadow-xl w-96 ">
        <div className="card-body">
          <h5 className="p-2 text-danger" style={{ borderBottom: '2px solid orange' }}>สร้างบัญชี</h5>
          <div className="container-fluid">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="form-group">
                  <label>ชื่อ</label>
                  <input
                    type="text"
                    name="firstname"
                    className="input input-bordered w-full"
                    placeholder="กรอกชื่อจริง"
                    pattern="[\u0E00-\u0E7F]+"
                    title="กรุณากรอกเป็นภาษาไทย"
                    required
                    value={formData.firstname}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>นามสกุล</label>
                  <input
                    type="text"
                    name="lastname"
                    className="input input-bordered w-full"
                    placeholder="กรอกนามสกุล"
                    pattern="[\u0E00-\u0E7F]+"
                    title="กรุณากรอกเป็นภาษาไทย"
                    required
                    value={formData.lastname}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="form-group">
                  <label>รหัสพนักงาน</label>
                  <input
                    type="text"
                    name="empcode"
                    className="input input-bordered w-full"
                    placeholder="รหัสพนักงาน"
                    required
                    value={formData.empcode}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>อีเมล</label>
                  <input
                    type="email"
                    name="email"
                    className="input input-bordered w-full"
                    placeholder="อีเมล"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="form-group">
                  <label>รหัสผ่าน</label>
                  <input
                    type="password"
                    name="pwd"
                    className="input input-bordered w-full"
                    placeholder="รหัสผ่าน"
                    required
                    value={formData.pwd}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>ยืนยันรหัสผ่าน</label>
                  <input
                    type="password"
                    name="cpwd"
                    className="input input-bordered w-full"
                    placeholder="ยืนยันรหัสผ่าน"
                    required
                    value={formData.cpwd}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <button className="btn btn-primary ">ยืนยัน</button>
            </form>
            {error && <p className="text-danger mt-2">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
