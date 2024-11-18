import React from 'react';
import '../Admin_login.css'; // ใส่ไฟล์ CSS ของคุณ
import imgPath from '../assets/a.png';

const Admin_login = () => {
  return (
    <div className="emp_login-container">
      <div className="card w-96 bg-base-100 shadow-xl rounded-3xl">

        <div className="flex justify-center items-center">
          <img src={imgPath} width="100" height="100" className="rounded-full my-3 border-2 border-black" />
        </div>
        <div className="card-body">
          <form method="post">
            <div className="mb-3">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <i className="bi bi-person text-gray-500"></i>
                </span>
                <input
                  type="text"
                  name="username"
                  className="input input-bordered w-full pl-10 py-4"
                  placeholder="ชื่อผู้ใช้"
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <i className="bi bi-lock text-gray-500"></i>
                </span>
                <input
                  type="password"
                  name="pwd"
                  className="input input-bordered w-full pl-10 py-4"
                  placeholder="รหัสผ่าน"
                  required
                />
              </div>
            </div>

            <div className="flex justify-between mt-4">
              <button type="submit" className="btn btn-success px-5">เข้าสู่ระบบ</button>
              <a href="/" className="text-sm text-blue-500 mt-2">ย้อนกลับไปหน้าแรก</a>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
};

export default Admin_login;
