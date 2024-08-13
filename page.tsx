import Image from "next/image";

export default function Home() {
  return  (
    <main className="bg-pink-50 flex justify-center items-center ">

      {/* Container */}
      <div className="flex space-x-6 max-h-min">

        {/* Weather Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-64">
          <h2 className="text-2xl font-bold mb-6">Weather</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 flex justify-between items-center ring-2 ring-black">
              <div className="pr-5">
                <p className="text-sm font-semibold">Casius</p>
                <p className="text-xs text-black">Mars, 12AM</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-10">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
              </svg>
              <p className="text-2xl font-bold">85°</p>
            </div>
            <div className="bg-yellow-500 rounded-lg p-4 flex justify-between items-center ring-2 ring-black">
              <div className="pr-5">
                <p className="text-sm font-semibold">Dlacria</p>
                <p className="text-xs text-black">Mars, 12AM</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-10">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
              </svg>
              <p className="text-2xl font-bold">85°</p>
            </div>
            <div className="bg-teal-400 rounded-lg p-4 flex justify-between items-center ring-2 ring-black">
              <div className="pr-5">
                <p className="text-sm font-semibold">New York</p>
                <p className="text-xs text-black">USA, 12AM</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-10">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg>
              <p className="text-2xl font-bold">85°</p>
            </div>
            <div className="bg-red-500 rounded-lg p-4 flex justify-between items-center ring-2 ring-black">
              <div className="pr-5">
                <p className="text-sm font-semibold">Zomato</p>
                <p className="text-xs text-black">India, 12AM</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-10">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
              </svg>
              <p className="text-2xl font-bold">20°</p>
            </div>
            <div className="flex justify-center h-screen py-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="size-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </div>
          </div>
        </div>

        {/* Work Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 py-10 w-64">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" className="size-10">
            <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
          <h6 className="text-xs font-extrabold text-gray-500 mb-1 text-center">SIMPLE TAG</h6>
          <h2 className="text-2xl font-bold mb-6 text-center">Work with best designers</h2>
          <div className="grid grid-cols-2 gap-4">
          <div className="bg-yellow-500 rounded-lg h-24 ring-2 ring-black flex items-center justify-center">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="w-6 h-6"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
                </svg>
            </div>
            <div className="bg-teal-400 rounded-lg h-24 ring-2 ring-black flex items-center justify-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="w-6 h-6"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
                </svg>
            </div>
            <div className="bg-pink-300 rounded-lg h-24 ring-2 ring-black flex items-center justify-center">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="w-6 h-6"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
                </svg>
            </div>
            <div className="bg-orange-500 rounded-lg h-24 ring-2 ring-black flex items-center justify-center">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="w-6 h-6"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
                </svg>
            </div>
          </div>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-xl mt-6 w-full">
            Let's get it done
          </button>
        </div>

        {/* Friends Section */}
        <div className="bg-yellow-500 rounded-lg shadow-lg p-6 py-10 w-64">
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-10">
                <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>

          <h2 className="text-xl text-center font-bold mb-5">Friends</h2>
          
          <div className="relative w-full mb-6">
            <input
                type="text"
                placeholder="Search with love ..."
                className="w-full p-2 px-4 pr-10 rounded-lg focus:outline-none ring-2 ring-black text-sm"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 text-gray-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-white flex justify-between items-center p-4 rounded-lg ring-2 ring-black">
              <div>
                <p className="font-semibold">Bill Rizer</p>
                <p className="text-sm text-gray-500">Planet Designer</p>
              </div>
              <button className="bg-yellow-500 text-white text-xs font-bold py-1 px-3 ring-2 ring-black rounded-lg">
                Invite
              </button>
            </div>
            <div className="bg-white flex justify-between items-center p-4 rounded-lg ring-2 ring-black">
              <div>
                <p className="font-semibold">Genbei Yagy</p>
                <p className="text-sm text-gray-500">Planet Designer</p>
              </div>
              <button className="bg-yellow-500 text-white text-xs font-bold py-1 px-3 ring-2 ring-black rounded-lg">
                Invite
              </button>
            </div>
            <div className="bg-white flex justify-between items-center p-4 rounded-lg ring-2 ring-black">
              <div>
                <p className="font-semibold">Lancy Neo</p>
                <p className="text-sm text-gray-500">Rogue Corp</p>
              </div>
              <button className="bg-black text-white text-xs font-bold py-1 px-3 ring-2 ring-black rounded-lg">
                Invited
              </button>
            </div>
            <div className="bg-white flex justify-between items-center p-4 rounded-lg ring-2 ring-black">
              <div>
                <p className="font-semibold">Bill Rizer</p>
                <p className="text-sm text-gray-500">Hard Cops</p>
              </div>
              <button className="bg-yellow-500 text-white text-xs font-bold py-1 px-3 ring-2 ring-black rounded-lg">
                Invite
              </button>
            </div>
            <div className="bg-white flex justify-between items-center p-4 rounded-lg ring-2 ring-black">
              <div>
                <p className="font-semibold">Konami</p>
                <p className="text-sm text-gray-500">Xenon Creator</p>
              </div>
              <button className="bg-yellow-500 text-white text-xs font-bold py-1 px-3 ring-2 ring-black rounded-lg">
                Invite
              </button>
            </div>
          </div>
        </div>

    </div>
    </main>
  );
}
