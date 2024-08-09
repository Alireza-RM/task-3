function Card() {
  return (
    <div className="bg-white rounded-2xl flex flex-row  p-3 gap-x-2 shadow-lg">
      {/* Img */}
      <div className="rounded-lg w-1/4 sm:w-1/5 text-center">
        <img src="/Untitled.png" className="w-full h-20 sm:h-24 md:h-full rounded-lg object-fill" />
        {/* <img src="/Untitled.png" className="bg-purple-600 h-1/4  rounded-lg w-[25%] sm:w-1/5 text-center object-cover " /> */}
      </div>
      {/* Detail */}
      <div className="flex flex-col  w-3/4 sm:w-4/5 p-2 gap-y-3 xl:gap-y-8">
        {/* top */}
        <div className="flex justify-between items-end text-seconadry font-bold ">
          <span className=" text-xs sm:text-lg ">
            دوره ی حرفه ای متخصص ری اکت
          </span>

          <div className="hidden md:flex gap-x-1">
            <div className="bg-blue-400 border-green-900 border rounded-2xl overflow-hidden">
              <img src="/images1.jpg" className="w-10 h-full" />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] mt-1 text-slate-400">مدرس دوره</span>
              <span className="text-sm font-bold">صاحب محمدی</span>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="flex justify-between items-end">
          <div className="hidden md:grid md:grid-cols-2 gap-y-2 w-full text-xs font-semibold text-slate-500">
            <div className="flex items-center gap-x-1  w-1/2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </span>
              <span>45 ساعت</span>
            </div>
            <div className="flex items-center gap-x-1">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </span>
              <span>12000 دانشجو</span>
            </div>
            <div className="flex items-center gap-x-1">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
                  />
                </svg>
              </span>
              <span>270 جلسه</span>
            </div>
            <div className="flex items-center gap-x-1 text-sm font-bold text-amber-400">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
                  />
                </svg>
              </span>
              <span>چالشهای هفتگی</span>
            </div>
          </div>

          <div className="flex  gap-x-3 ">
            <span className="flex items-center gap-x-1">
              <p className="text-primary font-bold">6,298,000</p>
              <p className="text-[9px] pt-2 font-semibold text-slate-400">
                تومان
              </p>
            </span>
            <span className="border border-slate-300 rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4 text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
