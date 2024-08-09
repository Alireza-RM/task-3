function Payment() {
  return (
    <div className=" bg-white rounded-2xl items-start lg:col-span-1 shadow-lg">
          {/* top */}
          <div className="flex gap-x-2 items-center font-bold text-seconadry p-5 border-b border-slate-200">
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
                  d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </span>
            <p>پرداخت</p>
          </div>
          {/* center */}
          <div className="border-b border-dashed border-slate-200">
            <div className="flex justify-between items-center p-5">
              <span className="text-seconadry text-sm font-bold">
                جمع دوره ها
              </span>
              <span className="text-primary font-bold"> 4,250,000 +</span>
            </div>
            <div className="flex justify-between items-center p-5">
              <span className="text-seconadry text-sm font-bold">تخفیف ها</span>
              <span className="text-red-500 font-bold"> 750,000 -</span>
            </div>
          </div>
          {/* bottom */}
          <div className="p-5 flex flex-col gap-y-5 items-center">
            <p>کد تخفیف دارم !</p>
            <div className="flex gap-x-1 bg-primary rounded-2xl px-8 py-3 text-white">
              <p>پرداخت</p>
              <span className="flex items-center gap-x-1">
                <p className="font-bold">6,298,000</p>
                <p className="text-[9px] pt-2 font-semibold">تومان</p>
              </span>
            </div>
          </div>
        </div>
  );
}

export default Payment;
