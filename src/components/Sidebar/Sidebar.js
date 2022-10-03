import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <aside className="-left-60 lg:left-0 lg:hidden xl:flex zzz lg:py-2 lg:pl-2 w-60 fixed flex z-40 top-0 h-screen transition-position overflow-hidden">
      <div className="lg:rounded-2xl flex-1 flex flex-col overflow-hidden dark:bg-slate-900 bg-gray-800">
        <div className="flex flex-row h-14 items-center justify-between dark:bg-slate-900 bg-gray-900 text-white">
          <div className="text-center flex-1 lg:text-left lg:pl-6 xl:text-center xl:pl-0">
            <b className="font-black uppercase">Trang quản lý</b>
          </div>
          <button className="hidden lg:inline-block xl:hidden p-3">
            <span className="inline-flex justify-center items-center w-6 h-6 ">
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                className="inline-block">
                <path
                  fill="currentColor"
                  d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"></path>
              </svg>
            </span>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto overflow-x-hidden aside-scrollbars-gray">
          <ul>
            <li>
              <Link
                to="/"
                href="https://justboil.github.io/admin-one-react-tailwind/tables"
                className="flex cursor-pointer py-3 text-gray-300 hover:text-white dark:text-slate-300 dark:hover:text-white">
                <span className="inline-flex justify-center items-center w-16 h-6 flex-none ">
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    className="inline-block">
                    <path
                      fill="currentColor"
                      d="M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z"></path>
                  </svg>
                </span>
                <span className="grow text-ellipsis line-clamp-1 pr-12 ">
                  Dashboard
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/benh-nhan"
                className="flex cursor-pointer py-3 text-gray-300 hover:text-white dark:text-slate-300 dark:hover:text-white">
                <span className="inline-flex justify-center items-center w-16 h-6 flex-none ">
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    className="inline-block">
                    <path
                      fill="currentColor"
                      d="M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z"></path>
                  </svg>
                </span>
                <span className="grow text-ellipsis line-clamp-1 pr-12 ">
                  Trang với quyền là bác sĩ
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="chi-tiet-benh-nhan"
                className="flex cursor-pointer py-3 text-gray-300 hover:text-white dark:text-slate-300 dark:hover:text-white">
                <span className="inline-flex justify-center items-center w-16 h-6 flex-none ">
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    className="inline-block">
                    <path
                      fill="currentColor"
                      d="M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z"></path>
                  </svg>
                </span>
                <span className="grow text-ellipsis line-clamp-1 pr-12 ">
                  Profile của bệnh nhân
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/benh-nhan/:id"
                className="flex cursor-pointer py-3 text-gray-300 hover:text-white dark:text-slate-300 dark:hover:text-white">
                <span className="inline-flex justify-center items-center w-16 h-6 flex-none ">
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    className="inline-block">
                    <path
                      fill="currentColor"
                      d="M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z"></path>
                  </svg>
                </span>
                <span className="grow text-ellipsis line-clamp-1 pr-12 ">
                  Bác sĩ
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/demo-dialog"
                className="flex cursor-pointer py-3 text-gray-300 hover:text-white dark:text-slate-300 dark:hover:text-white">
                <span className="inline-flex justify-center items-center w-16 h-6 flex-none ">
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    className="inline-block">
                    <path
                      fill="currentColor"
                      d="M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z"></path>
                  </svg>
                </span>
                <span className="grow text-ellipsis line-clamp-1 pr-12 ">
                  Demo dialog
                </span>
              </Link>
            </li>
            {/* <li> */}
            <li onClick={toggleClass}>
              <div className="flex cursor-pointer py-3 text-gray-300 hover:text-white dark:text-slate-300 dark:hover:text-white">
                <span className="inline-flex justify-center items-center w-16 h-6 flex-none ">
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    className="inline-block">
                    <path
                      fill="currentColor"
                      d="M9,5V9H21V5M9,19H21V15H9M9,14H21V10H9M4,9H8V5H4M4,19H8V15H4M4,14H8V10H4V14Z"></path>
                  </svg>
                </span>
                <span className="grow text-ellipsis line-clamp-1  ">
                  Dropdown
                </span>
                <span className="inline-flex justify-center items-center w-12 h-6 flex-none ">
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    className="inline-block">
                    <path
                      fill="currentColor"
                      d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"></path>
                  </svg>
                </span>
              </div>
              <ul
                className={
                  !isActive
                    ? 'bg-gray-700/50 hidden'
                    : 'bg-gray-700/50 block dark:bg-slate-800/50'
                }>
                <li>
                  <div className="flex cursor-pointer py-3 px-6 text-sm text-gray-300 hover:text-white dark:text-slate-300 dark:hover:text-white">
                    <span className="grow text-ellipsis line-clamp-1 pr-12 ">
                      Item One
                    </span>
                  </div>
                </li>
                <li>
                  <div className="flex cursor-pointer py-3 px-6 text-sm text-gray-300 hover:text-white dark:text-slate-300 dark:hover:text-white">
                    <span className="grow text-ellipsis line-clamp-1 pr-12 ">
                      Item Two
                    </span>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <ul>
          <li>
            <div className="flex cursor-pointer py-3 border-blue-600 dark:border-blue-500 ring-blue-300 dark:ring-blue-700 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 hover:border-blue-700 hover:dark:bg-blue-600 hover:dark:border-blue-600">
              <span className="inline-flex justify-center items-center w-16 h-6 flex-none ">
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  className="inline-block">
                  <path
                    fill="currentColor"
                    d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z"></path>
                </svg>
              </span>
              <span className="grow text-ellipsis line-clamp-1 pr-12 ">
                Đăng xuất
              </span>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
