import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // ตรวจสอบรูปแบบอีเมล
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage('รูปแบบอีเมลไม่ถูกต้อง');
      setIsLoading(false);
      return;
    }

    // ในที่นี้เป็นการจำลองการส่งอีเมล
    setTimeout(() => {
      // จำลองการส่งอีเมล
      setMessage('ลิงก์สำหรับรีเซ็ตรหัสผ่านถูกส่งไปที่อีเมลของคุณแล้ว');
      setIsLoading(false);
      // นำทางกลับไปที่หน้าเข้าสู่ระบบ
      setTimeout(() => navigate('/Emp_login'), 3000);
    }, 2000);
  };

  return (
    <div className="forgot-password-container">
      <div className="card w-96 bg-base-100 shadow-xl rounded-3xl">
        <div className="card-body">
          <h5 className="text-center text-xl font-bold text-black mb-4">
            ลืมรหัสผ่าน
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
            <div className="flex justify-between mt-4">
              <button
                type="submit"
                className="btn btn-success px-5"
                disabled={isLoading}
              >
                {isLoading ? 'กำลังส่งลิงก์...' : 'ส่งลิงก์รีเซ็ตรหัสผ่าน'}
              </button>
            </div>
          </form>
          {message && (
            <div className="text-center mt-2">
              <div className={message.includes('สำเร็จ') ? 'text-green-500' : 'text-red-500'}>
                {message}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
