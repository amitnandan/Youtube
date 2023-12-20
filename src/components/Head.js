import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    //api call after every key press
    //but if difference between 2 call is <200ms decline
    const timer = setTimeout(() => getSearchSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex  col-span-1">
        <img
          className="h-8 scale-150 mr-8 cursor-pointer"
          onClick={() => toggleMenuHandler()}
          alt="menu"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg6XmeytVztUaFJUj33AK5aORf5WDurpnW-w&usqp=CAU"
        />

        <img
          className="h-8 scale-150 "
          alt="logo"
          src="https://www.shutterstock.com/image-vector/youtube-logo-social-media-icon-260nw-2310134969.jpg"
        />
      </div>

      <div className="  col-span-10 px-10 scale-125">
        <div>
          <input
            className=" w-1/3 border border-gray-400 p-2 rounded-l-full "
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        <div className="fixed bg-white py-2 px-5">
          <ul>
            <li>Iphone</li>
            <li>Iphone</li>
            <li>Iphone</li>
            <li>Iphone</li>
          </ul>
        </div>
      </div>

      <div className="col-span-1">
        <img
          className="h-8 scale-150"
          alt="user"
          src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
        />
      </div>
    </div>
  );
};

export default Head;
