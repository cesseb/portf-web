import { useEffect, useState } from "react";
import { GalleryData } from "../data/GalleryData.js";
import { IconButtons } from "../data/IconButtons.js";

function Tasks() {
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    setData(GalleryData);
    const titles = [...new Set(GalleryData.map((item) => item.categoryName))];
    setCollection(titles);
  }, []);

  const gallery_filter = (category) => {
    const filtered = GalleryData.filter(
      (item) => item.categoryName === category
    );
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
          All
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

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <img
              className="rounded-t-lg"
              src={item.image}
              alt={`${item.title} ${item.id}`}
            />

            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.nameProject}
              </h5>

              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.description || "Descripción genérica para este proyecto."}
              </p>

              <div className="flex justify-end space-x-2 mt-4">
                {IconButtons.map((button, index) => {
                  const href = item.links?.[button.key];
                  if (!href) return null;

                  return (
                    <div key={index} className="relative group">
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                      >
                        <img
                          src={button.image}
                          alt={button.alt}
                          className="w-7 h-7"
                        />
                      </a>
                      

                      <div className="absolute bottom-full mt-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs rounded-md px-2 py-1 whitespace-nowrap z-10">
                        {button.info}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tasks;
