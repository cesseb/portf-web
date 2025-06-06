import { useEffect, useState } from "react";
import { GalleryData } from "../data/GalleryData.js";

function Tasks() {
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    setData(GalleryData);
    const titles = [...new Set(GalleryData.map((item) => item.title))];
    setCollection(titles);
  }, []);

  const gallery_filter = (category) => {
    const filtered = GalleryData.filter((item) => item.title === category);
    setData(filtered);
  };

  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
        My Projects
      </h1>

      {/* Botones de categorías */}
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <button
          type="button"
          onClick={() => setData(GalleryData)}
          className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
        >
          All categories
        </button>

        {collection.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => gallery_filter(item)}
            className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>

      {/* Imágenes filtradas */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((item) => (
          <div key={item.id}>
            <img
              className="h-auto max-w-full rounded-lg"
              src={item.image}
              alt={`${item.title} ${item.id}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tasks;
