import '../styles/Images.css';
import { GalleryData } from "../data/GalleryData.js";
import { useEffect, useState } from "react";

function Images() {
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    setData(GalleryData);

    // Extraer títulos únicos
    const titles = [...new Set(GalleryData.map((item) => item.title))];
    setCollection(titles);
  }, []);

  // Función para filtrar por categoría
  const gallery_filter = (itemData) => {
    const filteredData = GalleryData.filter((item) => item.title === itemData);
    setData(filteredData);
  };

  return (
    <div className="App">
      <div className="galleryWrapper">
        <div className="filterItem">
          <ul>
            <li>
              <button onClick={() => setData(GalleryData)}>All</button>
            </li>
            {collection.map((item) => (
              <li key={item}>
                <button onClick={() => gallery_filter(item)}>{item}</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="galleryContainer">
          {data.map((item) => (
            <div key={item.id} className="galleryItem">
              <img src={item.image} alt={`${item.title} ${item.id}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Images;
