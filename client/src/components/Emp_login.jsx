import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Emp_login.css'; // Import CSS สำหรับการปรับแต่ง
import imgPath from '../assets/2.png';

const Emp_login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Mock ตรวจสอบข้อมูล
    setTimeout(() => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setError('รูปแบบอีเมลไม่ถูกต้อง');
        setIsLoading(false);
        return;
      }

      if (email === 'test@example.com' && password === 'password') {
        setError('');
        alert('เข้าสู่ระบบสำเร็จ');
        navigate('/EmpHome');
      } else {
        setError('กรุณาตรวจสอบอีเมลและรหัสผ่าน');
      }
      setIsLoading(false);
    }, 2000); // Mock delay
  };

  return (
    <div className="emp_login-container">
      <div className="card w-96 bg-base-100 shadow-xl rounded-3xl">
        <div className="flex justify-center items-center">
          <img
            src={imgPath}
            width="100"
            height="100"
            className="rounded-full my-3 border-2 border-black"
            alt="User Avatar"
          />
        </div>
        <div className="card-body">
          <h5 className="text-center text-xl font-bold text-black mb-4">
            เข้าสู่ระบบพนักงาน
          </h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700">
                อีเมลที่ใช้สมัคร
              </label>
              <input
                type="email"
                className="input input-bordered w-full py-4"
                placeholder="กรอกอีเมล"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700">
                รหัสผ่าน
              </label>
              <input
                type="password"
                className="input input-bordered w-full py-4"
                placeholder="กรอกรหัสผ่าน"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-between mt-4">
              <button
                type="submit"
                className="btn btn-success px-5"
                disabled={isLoading}
              >
                {isLoading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ'}
              </button>
              <a href="/" className="text-sm text-blue-500 mt-2">
                ย้อนกลับไปหน้าแรก
              </a>
            </div>
          </form>
          {error && (
            <div className="text-red-500 mt-2 text-center">{error}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Emp_login;
