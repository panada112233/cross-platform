import React from 'react';
import { Disclosure } from '@headlessui/react';
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

export default function Navbars({ isLoggedIn }) {
  // ซ่อน Navbar หาก isLoggedIn เป็น true
  if (isLoggedIn) {
    return null; // ไม่แสดง Navbar เมื่อผู้ใช้ล็อกอิน
  }

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Logo Section */}
              <div
                className="flex items-center"
                style={{
                  backgroundColor: 'white',
                  border: '2px solid white',
                  borderRadius: '10px',
                  padding: '5px 10px',
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
              >
                <img src={logo} className="h-8 w-auto mr-2" alt="Logo" />
                <span style={{ color: 'black', fontWeight: 'bold' }}>THE </span>
                &nbsp;
                <span style={{ color: '#FF8800', fontWeight: 'bold' }}>
                  EXPERTISE{' '}
                </span>
                &nbsp;
                <span style={{ color: 'black', fontWeight: 'bold' }}>
                  CO, LTD.
                </span>
              </div>

              {/* Hamburger Menu (Small Screens) */}
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Navigation Links (Large Screens) */}
              <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-white text-black'
                          : 'text-white hover:bg-orange-500 hover:text-white',
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

          {/* Mobile Menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-white text-black'
                      : 'text-white hover:bg-orange-500 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
