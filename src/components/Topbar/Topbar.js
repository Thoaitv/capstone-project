import React, { Fragment } from 'react';

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
                <div className="inline-flex items-center capitalize leading-none text-base border rounded-xl py-3 px-4 bg-emerald-600 border-emerald-200 text-white ml-5">
                  <span>Thêm bệnh nhân</span>
                </div>
              </div>
              <div className="flex items-center bg-gray-100 dark:bg-slate-800 lg:bg-transparent lg:dark:bg-transparent p-3 lg:p-0">
                <div className="inline-flex items-center capitalize leading-none text-base border rounded-xl py-3 px-4 bg-blue-600 border-emerald-200 text-white ml-5">
                  <span>Thêm nhân viên</span>
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
                <span className="px-2 transition-colors ">Tạ Văn Thoại</span>
              </div>
            </div>

            {/* <div className="block lg:flex items-center relative cursor-pointer text-black dark:text-white dark:hover:text-slate-400 hover:text-blue-500 py-2 px-3 lg:w-16 lg:justify-center flex-end">
              <div className="flex items-center ">
                <span class="inline-flex justify-center items-center w-6 h-6 transition-colors">
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    class="inline-block">
                    <path
                      fill="currentColor"
                      d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z"></path>
                  </svg>
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </nav>
    // <nav className="xl:pl-60  top-0 inset-x-0 fixed bg-gray-50 h-14 z-30 transition-position w-screen lg:w-auto dark:bg-slate-800">
    //   <div className="flex lg:items-stretch xl:max-w-6xl xl:mx-auto">
    //     <div className="flex flex-1 items-stretch h-14">
    //       <div className="items-center cursor-pointer dark:text-white dark:hover:text-slate-400 flex lg:hidden text-black hover:text-blue-500 py-2 px-3">
    //         <span class="inline-flex justify-center items-center w-6 h-6 ">
    //           <svg
    //             viewBox="0 0 24 24"
    //             width="24"
    //             height="24"
    //             class="inline-block">
    //             <path
    //               fill="currentColor"
    //               d="M19,13H3V11H19L15,7L16.4,5.6L22.8,12L16.4,18.4L15,17L19,13M3,6H13V8H3V6M13,16V18H3V16H13Z"></path>
    //           </svg>
    //         </span>
    //       </div>

    //       <div className="items-center cursor-pointer dark:text-white dark:hover:text-slate-400 hidden lg:flex xl:hidden text-black hover:text-blue-500 py-2 px-3">
    //         <span class="inline-flex justify-center items-center w-6 h-6 ">
    //           <svg
    //             viewBox="0 0 24 24"
    //             width="24"
    //             height="24"
    //             class="inline-block">
    //             <path
    //               fill="currentColor"
    //               d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"></path>
    //           </svg>
    //         </span>
    //       </div>
    //     </div>
    //     <div className="flex-none items-stretch flex h-14 lg:hidden">
    //       <div className="items-center cursor-pointer dark:text-white dark:hover:text-slate-400 flex text-black hover:text-blue-500 py-2 px-3">
    //         <span class="inline-flex justify-center items-center w-6 h-6 ">
    //           <svg
    //             viewBox="0 0 24 24"
    //             width="24"
    //             height="24"
    //             class="inline-block">
    //             <path
    //               fill="currentColor"
    //               d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"></path>
    //           </svg>
    //         </span>
    //       </div>
    //     </div>
    //     <div className="hidden max-h-screen-menu overflow-y-auto lg:overflow-visible absolute w-screen top-14 left-0 bg-gray-50 shadow-lg lg:w-auto lg:flex lg:static lg:shadow-none dark:bg-slate-800">
    //       <div className="block lg:flex items-center relative cursor-pointer text-black dark:text-white dark:hover:text-slate-400 hover:text-blue-500 lg:py-2 lg:px-3 ">
    //         <div className="flex items-center bg-gray-100 dark:bg-slate-800 lg:bg-transparent lg:dark:bg-transparent p-3 lg:p-0">
    //           <span class="inline-flex justify-center items-center w-6 h-6 transition-colors">
    //             <svg
    //               viewBox="0 0 24 24"
    //               width="16"
    //               height="16"
    //               class="inline-block">
    //               <path
    //                 fill="currentColor"
    //                 d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"></path>
    //             </svg>
    //           </span>
    //           <span class="px-2 transition-colors ">Sample menu</span>
    //           <span class="inline-flex justify-center items-center w-6 h-6 hidden lg:inline-flex transition-colors">
    //             <svg
    //               viewBox="0 0 24 24"
    //               width="16"
    //               height="16"
    //               class="inline-block">
    //               <path
    //                 fill="currentColor"
    //                 d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
    //             </svg>
    //           </span>
    //         </div>
    //       </div>
    //       <div className="block lg:flex items-center relative cursor-pointer text-black dark:text-white dark:hover:text-slate-400 hover:text-blue-500 lg:py-2 lg:px-3 ">
    //         <div className="flex items-center bg-gray-100 dark:bg-slate-800 lg:bg-transparent lg:dark:bg-transparent p-3 lg:p-0">
    //           <div class="w-6 h-6 mr-3 inline-flex">
    //             <img
    //               src="https://avatars.dicebear.com/api/avataaars/example.svg?options[top][]=shortHair&amp;options[accessoriesChance]=93"
    //               alt="John Doe"
    //               class="rounded-full block h-auto w-full max-w-full bg-gray-100 dark:bg-slate-800"
    //             />
    //           </div>
    //           <span class="px-2 transition-colors ">John Doe</span>
    //           <span class="inline-flex justify-center items-center w-6 h-6 hidden lg:inline-flex transition-colors">
    //             <svg
    //               viewBox="0 0 24 24"
    //               width="16"
    //               height="16"
    //               class="inline-block">
    //               <path
    //                 fill="currentColor"
    //                 d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
    //             </svg>
    //           </span>
    //         </div>
    //       </div>
    //       <div className="block lg:flex items-center relative cursor-pointer text-black dark:text-white dark:hover:text-slate-400 hover:text-blue-500 py-2 px-3 lg:w-16 lg:justify-center">
    //         <div className="flex items-center ">
    //           <span class="inline-flex justify-center items-center w-6 h-6 transition-colors">
    //             <svg
    //               viewBox="0 0 24 24"
    //               width="16"
    //               height="16"
    //               class="inline-block">
    //               <path
    //                 fill="currentColor"
    //                 d="M7.5,2C5.71,3.15 4.5,5.18 4.5,7.5C4.5,9.82 5.71,11.85 7.53,13C4.46,13 2,10.54 2,7.5A5.5,5.5 0 0,1 7.5,2M19.07,3.5L20.5,4.93L4.93,20.5L3.5,19.07L19.07,3.5M12.89,5.93L11.41,5L9.97,6L10.39,4.3L9,3.24L10.75,3.12L11.33,1.47L12,3.1L13.73,3.13L12.38,4.26L12.89,5.93M9.59,9.54L8.43,8.81L7.31,9.59L7.65,8.27L6.56,7.44L7.92,7.35L8.37,6.06L8.88,7.33L10.24,7.36L9.19,8.23L9.59,9.54M19,13.5A5.5,5.5 0 0,1 13.5,19C12.28,19 11.15,18.6 10.24,17.93L17.93,10.24C18.6,11.15 19,12.28 19,13.5M14.6,20.08L17.37,18.93L17.13,22.28L14.6,20.08M18.93,17.38L20.08,14.61L22.28,17.15L18.93,17.38M20.08,12.42L18.94,9.64L22.28,9.88L20.08,12.42M9.63,18.93L12.4,20.08L9.87,22.27L9.63,18.93Z"></path>
    //             </svg>
    //           </span>
    //           <span class="px-2 transition-colors lg:hidden">Light/Dark</span>
    //         </div>
    //       </div>
    //       <div className="block lg:flex items-center relative cursor-pointer text-black dark:text-white dark:hover:text-slate-400 hover:text-blue-500 py-2 px-3 lg:w-16 lg:justify-center">
    //         <div className="flex items-center ">
    //           <span class="inline-flex justify-center items-center w-6 h-6 transition-colors">
    //             <svg
    //               viewBox="0 0 24 24"
    //               width="16"
    //               height="16"
    //               class="inline-block">
    //               <path
    //                 fill="currentColor"
    //                 d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z"></path>
    //             </svg>
    //           </span>
    //           <span class="px-2 transition-colors lg:hidden">Log out</span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Topbar;
