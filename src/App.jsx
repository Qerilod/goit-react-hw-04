// use
import { useState, useEffect } from "react";
// components
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
// additionally
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Modal from "react-modal";
// base information
axios.defaults.baseURL = "https://api.unsplash.com/";
const API_KEY = "mPU2yfzsogi5r3YCHQPtQirBoFkEGrsCoPb-tFFvtSQ";
Modal.setAppElement("#root");

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const fetchImages = async (searchQuery, page) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`/search/photos`, {
        params: {
          query: searchQuery,
          page,
          per_page: 12,
          client_id: API_KEY,
        },
      });
      if (response.data.results.length === 0) {
        toast.error("No images found. Please try a different search term.", {
          position: "top-right",
        });
      } else {
        setImages((prevImages) => [...prevImages, ...response.data.results]);
      }
    } catch (error) {
      setError("Error fetching images", {
        position: "top-right",
      });
      toast.error(`Error fetching images: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      fetchImages(query, page);
    }
  }, [query, page]);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setPage(1);
    setImages([]);
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div id="root">
      <Toaster />
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={openModal} />
      {loading && <Loader />}
      {images.length > 0 && !loading && <LoadMoreBtn onClick={loadMore} />}
      {modalImage && (
        <ImageModal
          isOpen={!!modalImage}
          onRequestClose={closeModal}
          image={modalImage}
        />
      )}
    </div>
  );
}

export default App;
