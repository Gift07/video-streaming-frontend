import { AiOutlineSearch } from "react-icons/ai";

function App() {
  return (
    <div className="w-screen min-h-screen bg-gray-50">
      {/* navbar */}
      <nav className="w-full h-16 flex items-center justify-between px-32 fixed top-0 z-30 bg-gray-100">
        {/* logo */}
        <div className="flex items-center gap-x-2">
          <img src="logo.png" alt="logo" className="h-12 object-cover" />
          <div className="flex items-center text-xl ">
            <h1 className="text-red-500 font-semibold">Y</h1>
            {"-"}
            <h1 className="font-semibold text-gray-700">Streams</h1>
          </div>
        </div>
        {/* logo ended */}
        <div className="relative flex items-center">
          <div className="absolute px-2 text-gray-500 font-semibold">
            <AiOutlineSearch />
          </div>
          <input
            placeholder="search videos"
            className="w-96 bg-gray-100 outline-none border border-gray-300 rounded-full px-2 py-1 pl-6 placeholder:text-sm "
          />
        </div>
        {/* user part */}
        <div className="flex items-center gap-x-2">
          <img
            src="https://images.unsplash.com/photo-1602442787305-decbd65be507?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="user"
            className="h-10 w-10 object-cover rounded-full"
          />
          <div className="text-sm text-gray-400">
            <h1>Gift</h1>
            <h1>giftedwards9@gmail.com</h1>
          </div>
        </div>
      </nav>
      {/* navbar ends */}
      {/* subscription */}
      <div className="w-full px-32 py-2 pt-16">
        <div className="pt-1 text-gray-600">
          <h1>Updates from subscriptions</h1>
        </div>
        <div className="w-full flex items-center gap-x-2 py-2 hover:cursor-pointer">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i}>
              <img
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                alt="subscriptions"
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      {/* subscription */}
      {/* lister and its videos*/}
      <div className="w-full px-32 flex flex-col">
        <div className="flex items-end gap-x-2">
          <hr className="w-1 h-8 bg-green-500 rounded-lg" />
          <h1>Featured videos</h1>
        </div>
        {/* video list */}
        <div className="w-full flex items-center gap-x-3 py-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="w-1/3">
              <div className="w-full relative">
                <img
                  src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt="video"
                  className="w-full h-48 rounded-xl object-cover absolute"
                />
                <div className="absolute w-full h-48 z-10 bg-gray-500 bg-opacity-20 rounded-xl">
                  <div className="w-full h-full relative">
                    <div className="w-12 text-xs flex items-center justify-center bottom-0 right-0 absolute m-2 py-1 text-white bg-gray-700">
                      3:45
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-red-500 flex items-center gap-x-3">
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1485875437342-9b39470b3d95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80"
                    alt="user"
                    className="w-8 h-8 rounded-full object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
