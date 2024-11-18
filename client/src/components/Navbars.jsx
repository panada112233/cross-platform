import React from 'react';
import { Disclosure, DisclosureButton } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import logo from "../assets/1.png";




const navigation = [
  { name: 'หน้าหลัก', href: '/', current: false },
  { name: 'เกี่ยวกับ', href: '/About', current: false },
  { name: 'ลงทะเบียน', href: '/Register', current: false },
  { name: 'พนักงาน', href: '/Emp_login', current: false },
  { name: 'ผู้ดูแล', href: '/Admin_login', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbars() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div
            className="flex items-center"
            style={{
              backgroundColor: 'white',  // พื้นหลังสีขาว
              border: '2px solid white', // ขอบสีขาว
              borderRadius: '10px',      // ขอบมน
              padding: '5px 10px',       // ระยะห่างภายใน
              display: 'inline-flex',    // จัดให้อยู่ในแถวเดียวกัน
              alignItems: 'center',      // จัดให้อยู่ตรงกลางแนวตั้ง
            }}
          >
            {/* รูปโลโก้ */}
            <img
              src={logo}
              className="h-8 w-auto mr-2"
              alt="Logo"
            />
            {/* ข้อความ */}
            <span style={{ color: 'black', fontWeight: 'bold' }}>THE </span>&nbsp;
            <span style={{ color: '#FF8800', fontWeight: 'bold' }}>EXPERTISE </span>&nbsp;
            <span style={{ color: 'black', fontWeight: 'bold' }}>CO, LTD.</span>
          </div>

          {/* ปุ่มแฮมเบอร์เกอร์สำหรับหน้าจอเล็ก */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>

          {/* เมนูสำหรับหน้าจอใหญ่ */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-white text-black'
                        : 'text-white hover:bg-cream hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
