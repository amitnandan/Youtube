import React from "react";

const Head = () => {
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex  col-span-1">
        <img
          className="h-8 scale-150"
          alt="menu"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg6XmeytVztUaFJUj33AK5aORf5WDurpnW-w&usqp=CAU"
        />

        <img
          className="h-8 scale-150 w-20 ml-4"
          alt="logo"
          src="https://static.vecteezy.com/system/resources/previews/018/930/572/original/youtube-logo-youtube-icon-transparent-free-png.png"
        />
      </div>
      <div className=" text-center col-span-10 px-10">
        <input
          className=" w-1/3 border border-gray-400 p-2 rounded-l-full "
          type="text"
        />
        <button className="border border-gray-400 p-2 rounded-r-full">
          {" "}
          Search{" "}
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
        />
      </div>
    </div>
  );
};

export default Head;
