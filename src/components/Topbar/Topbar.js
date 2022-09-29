import React from 'react';

const Topbar = () => {
  return (
    <nav className="xl:pl-60  top-0 inset-x-0 fixed bg-gray-50 h-14 z-30 transition-position w-screen lg:w-auto dark:bg-slate-800">
      <div className="flex lg:items-stretch xl:max-w-6xl xl:mx-auto">
        <div className="flex flex-1 items-stretch h-14">
          <div className="items-center cursor-pointer dark:text-white dark:hover:text-slate-400 flex lg:hidden text-black hover:text-blue-500 py-2 px-3">
            <span className="inline-flex justify-center items-center w-6 h-6 ">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="inline-block">
                <path
                  fill="currentColor"
                  d="M19,13H3V11H19L15,7L16.4,5.6L22.8,12L16.4,18.4L15,17L19,13M3,6H13V8H3V6M13,16V18H3V16H13Z"></path>
              </svg>
            </span>
          </div>
          <div className="items-center cursor-pointer dark:text-white dark:hover:text-slate-400 hidden lg:flex xl:hidden text-black hover:text-blue-500 py-2 px-3">
            <span className="inline-flex justify-center items-center w-6 h-6 ">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="inline-block">
                <path
                  fill="currentColor"
                  d="M19,13H3V11H19L15,7L16.4,5.6L22.8,12L16.4,18.4L15,17L19,13M3,6H13V8H3V6M13,16V18H3V16H13Z"></path>
              </svg>
            </span>
          </div>
          <div className="flex-none items-stretch flex h-14 lg:hidden">
            <div className="items-center cursor-pointer dark:text-white dark:hover:text-slate-400 flex text-black hover:text-blue-500 py-2 px-3">
              <span className="inline-flex justify-center items-center w-6 h-6 ">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="inline-block">
                  <path
                    fill="currentColor"
                    d="M19,13H3V11H19L15,7L16.4,5.6L22.8,12L16.4,18.4L15,17L19,13M3,6H13V8H3V6M13,16V18H3V16H13Z"></path>
                </svg>
              </span>
            </div>
          </div>
          <div className="hidden max-h-screen-menu overflow-y-auto lg:overflow-visible absolute w-screen top-14 left-0 bg-gray-50 shadow-lg lg:w-auto lg:flex lg:static lg:shadow-none dark:bg-slate-800">
            <div className="block lg:flex items-center relative cursor-pointer text-black dark:text-white dark:hover:text-slate-400 hover:text-blue-500 lg:py-2 lg:px-3 ">
              <div className="flex items-center bg-gray-100 dark:bg-slate-800 lg:bg-transparent lg:dark:bg-transparent p-3 lg:p-0">
                <span className="inline-flex justify-center items-center w-6 h-6 transition-colors">
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    className="inline-block">
                    <path
                      fill="currentColor"
                      d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"></path>
                  </svg>
                </span>
                <span className="px-2 transition-colors ">Thêm bác sĩ</span>
                <span className="inline-flex justify-center items-center w-6 h-6 hidden lg:inline-flex transition-colors">
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    className="inline-block">
                    <path
                      fill="currentColor"
                      d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
                  </svg>
                </span>
              </div>

              <div className="lg:hidden text-sm border-b border-gray-100 lg:border lg:bg-white lg:absolute lg:top-full lg:left-0 lg:min-w-full lg:z-20 lg:rounded-lg lg:shadow-lg lg:dark:bg-slate-800 dark:border-slate-700">
                <div className="block lg:flex items-center relative cursor-pointer text-black dark:text-white dark:hover:text-slate-400 hover:text-blue-500 py-2 px-3 ">
                  <div className="flex items-center ">
                    <span className="inline-flex justify-center items-center w-6 h-6 transition-colors">
                      <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        className="inline-block">
                        <path
                          fill="currentColor"
                          d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"></path>
                      </svg>
                    </span>
                    <span className="px-2 transition-colors ">Item One</span>
                  </div>
                </div>

                <div className="block lg:flex items-center relative cursor-pointer text-black dark:text-white dark:hover:text-slate-400 hover:text-blue-500 py-2 px-3 ">
                  <div className="flex items-center ">
                    <span className="inline-flex justify-center items-center w-6 h-6 transition-colors">
                      <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        className="inline-block">
                        <path
                          fill="currentColor"
                          d="M19.35,10.03C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.03C2.34,8.36 0,10.9 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.03Z"></path>
                      </svg>
                    </span>
                    <span className="px-2 transition-colors ">Item Two</span>
                  </div>
                  <hr className="hidden lg:block lg:my-0.5 dark:border-slate-700 border-t border-gray-100" />
                </div>
              </div>
            </div>

            <div className="block lg:flex items-center relative cursor-pointer text-blue-600 dark:text-slate-400 lg:py-2 lg:px-3 ">
              <div className="flex items-center bg-gray-100 dark:bg-slate-800 lg:bg-transparent lg:dark:bg-transparent p-3 lg:p-0">
                <div className="w-6 h-6 mr-3 inline-flex">
                  <img
                    src="https://avatars.dicebear.com/api/avataaars/example.svg?options[top][]=shortHair&amp;options[accessoriesChance]=93"
                    alt="John Doe"
                    className="rounded-full block h-auto w-full max-w-full bg-gray-100 dark:bg-slate-800"
                  />
                </div>
                <span className="px-2 transition-colors ">John Doe</span>
                <span className="inline-flex justify-center items-center w-6 h-6 hidden lg:inline-flex transition-colors">
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    className="inline-block">
                    <path
                      fill="currentColor"
                      d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
                  </svg>
                </span>
              </div>
              <div className="lg:hidden text-sm border-b border-gray-100 lg:border lg:bg-white lg:absolute lg:top-full lg:left-0 lg:min-w-full lg:z-20 lg:rounded-lg lg:shadow-lg lg:dark:bg-slate-800 dark:border-slate-700">
                <a
                  className="block lg:flex items-center relative cursor-pointer text-black dark:text-white dark:hover:text-slate-400 hover:text-blue-500 py-2 px-3 "
                  href="/admin-one-react-tailwind/profile">
                  <div className="flex items-center ">
                    <span className="inline-flex justify-center items-center w-6 h-6 transition-colors">
                      <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        className="inline-block">
                        <path
                          fill="currentColor"
                          d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"></path>
                      </svg>
                    </span>
                    <span className="px-2 transition-colors ">My Profile</span>
                  </div>
                  <div className="flex items-center ">
                    <span className="inline-flex justify-center items-center w-6 h-6 transition-colors">
                      <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        className="inline-block">
                        <path
                          fill="currentColor"
                          d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"></path>
                      </svg>
                    </span>
                  </div>
                </a>
              </div>
            </div>

            <div className="block lg:flex items-center relative cursor-pointer text-black dark:text-white dark:hover:text-slate-400 hover:text-blue-500 py-2 px-3 lg:w-16 lg:justify-center">
              <div className="flex items-center ">
                <span className="inline-flex justify-center items-center w-6 h-6 transition-colors">
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    className="inline-block">
                    <path
                      fill="currentColor"
                      d="M7.5,2C5.71,3.15 4.5,5.18 4.5,7.5C4.5,9.82 5.71,11.85 7.53,13C4.46,13 2,10.54 2,7.5A5.5,5.5 0 0,1 7.5,2M19.07,3.5L20.5,4.93L4.93,20.5L3.5,19.07L19.07,3.5M12.89,5.93L11.41,5L9.97,6L10.39,4.3L9,3.24L10.75,3.12L11.33,1.47L12,3.1L13.73,3.13L12.38,4.26L12.89,5.93M9.59,9.54L8.43,8.81L7.31,9.59L7.65,8.27L6.56,7.44L7.92,7.35L8.37,6.06L8.88,7.33L10.24,7.36L9.19,8.23L9.59,9.54M19,13.5A5.5,5.5 0 0,1 13.5,19C12.28,19 11.15,18.6 10.24,17.93L17.93,10.24C18.6,11.15 19,12.28 19,13.5M14.6,20.08L17.37,18.93L17.13,22.28L14.6,20.08M18.93,17.38L20.08,14.61L22.28,17.15L18.93,17.38M20.08,12.42L18.94,9.64L22.28,9.88L20.08,12.42M9.63,18.93L12.4,20.08L9.87,22.27L9.63,18.93Z"></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
