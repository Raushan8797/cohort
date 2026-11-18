import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const dummyUrls = [
  {
    _id: "1",
    originalUrl: "https://www.amazon.in/s?k=dancing+cactus&i=toys&s=exact-awar",
    ShortCode: "IUSJDF",
    clicks: 9,
  },
  {
    _id: "2",
    originalUrl: "https://www.amazon.in/s?k=dancing+cactus&i=toys&s=exact-awar",
    shortCode: "IUSJDF",
    clicks: 5,
  },
  {
    _id: "3",
    originalUrl: "https://www.amazon.in/s?k=dancing+cactus&i=toys&s=exact-awar",
    shortCode: "IUSJDF",
    clicks: 4,
  },
];

const App = () => {
  const [urls, setUrls] = useState(dummyUrls);
  const [inputValue, setInputValue] = useState("");
  const [currentUrl, setCurrentUrl] = useState(null);

  const fetchUrls = async () => {
    const responce = await axios.get("http://localhost:5173/API/url/");
    const Result = responce.data;

    setUrls(Result.data.urls);
    console.log(Result.data.urls);
  };

  const createShortUrl = async () => {
    const response = await axios.post("http://localhost:5173/API/url/", {
      url: inputValue,
    });
      console.log("API RESPONSE:", response.data);

  setCurrentUrl(response.data.data);
    // setCurrentUrl({
    //   originalUrl: response.data.originalUrl,
    //   ShortCode: response.data.ShortCode,
    //   Clicks: response.data.Clicks,
    // });
    
    fetchUrls();
  };
  const deleteUrl = async (id) => {
    await axios.delete(`http://localhost:5173/API/url/${id}`);
    fetchUrls();
  };

  useEffect(() => {
    fetchUrls();
  }, []);

  return (
    <main className="bg-amber-50 min-h-screen flex flex-col justify-center items-center gap-10 px-5 py-10">
      <div className="flex w-full max-w-4xl gap-4">
        <input
          className="border border-gray-300 bg-white w-full rounded-xl py-3 px-5 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          placeholder="Enter URL..."
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button
          onClick={createShortUrl}
          className="bg-red-500 cursor-pointer hover:bg-red-600 active:scale-95 text-white font-semibold px-7 py-3 rounded-xl shadow-md transition duration-200"
        >
          Shorten
        </button>
      </div>
      
      <div className="flex w-full max-w-4xl gap-4">
        <p className="text-gray-700 break-all"> {currentUrl ? `Shortened URL: http://localhost:3000/${currentUrl.ShortCode}` : null}</p>
      </div>

      <div className="w-full max-w-4xl flex flex-col gap-5">
        {urls.map((url) => {
          return (
            <div
              className="bg-white border border-gray-200 hover:border-red-300 rounded-2xl flex flex-col gap-2 p-5 shadow-sm hover:shadow-md transition duration-200"
              key={url._id}
            >
              <p className="text-gray-700 break-all">
                <span className="font-semibold text-gray-900">
                  Original URL:
                </span>{" "}
                {url.originalUrl}
              </p>

              <div className=" w-fit flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 bg-yellow-100">
                <a
                  href={`http://localhost:3000/${url.ShortCode}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700"
                >
                  <span className="font-semibold text-gray-900">
                    Short Code:
                  </span>{" "}
                  {url.ShortCode}
                </a>
              </div>

              <p className="text-gray-700">
                <span className="font-semibold text-gray-900">Clicks:</span>{" "}
                {url.Clicks}
              </p>
              <div className="flex justify-between ">
                <button
                onClick={() => {
                  navigator.clipboard.writeText(
                    `http://localhost:3000/${url.ShortCode}`
                  );
                }} 
                 className=" cursor-pointer bg-amber-300 hover:bg-amber-600 active:scale-95 text-white font-semibold px-7 py-3 rounded-xl shadow-md transition duration-200">
                  copy
                </button>
                <button
                  onClick={() => deleteUrl(url._id)}
                  className="cursor-pointer bg-red-500 hover:bg-red-600 active:scale-95 text-white font-semibold px-7 py-3 rounded-xl shadow-md transition duration-200"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default App;
