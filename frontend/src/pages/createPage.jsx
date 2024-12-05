import { useState } from "react";
import { createProduct } from "../actions/actions";

export default function CreatePage() {
  const [productDetails, setProductDetails] = useState({
    name: "",
    category: "",
    author: "",
    image: "",
    price: 0,
    publication: "",
    releaseDate: "",
    isLatest: false,
    isTrending: false,
    isBestSelling: false,
  });
  const [submitLoader, setSubmitLoader] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await createProduct(productDetails)
      .then((res) => {
        if (res.success) {
          alert("Book record added");
        } else {
          alert("Something went wrong");
        }
      })
      .catch(() => {
        alert("API call failed");
      });
  };
  return (
    <div className="flex flex-col justify-center items-center w-full py-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-start items-start w-2/3 gap-2.5 px-5 py-4 bg-[#5F5F5F] shadow-lg rounded-md"
      >
        <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Create a Book!
        </h2>
        {/* -------------------- TITLE & AUTHOR CONTAINER -------------------- */}
        <div className="flex flex-row justify-start items-center w-full gap-2">
          {/* -------------------- TITLE CONTAINER -------------------- */}
          <div className="flex flex-col justify-start items-start gap-1 w-full">
            <label htmlFor="title" className="text-[#F1F1F1] font-medium">
              Book Title
            </label>
            <input
              type="text"
              id="title"
              className="flex w-full px-2 py-1.5 rounded border-2 border-gray-700 shadow-sm"
              value={productDetails.name}
              onChange={(e) =>
                setProductDetails({ ...productDetails, name: e.target.value })
              }
            />
          </div>
          {/* -------------------- AUTHOR CONTAINER -------------------- */}
          <div className="flex flex-col justify-start items-start gap-1 w-full">
            <label htmlFor="author" className="text-[#F1F1F1] font-medium">
              Authored By
            </label>
            <input
              type="text"
              id="author"
              className="flex w-full px-2 py-1.5 rounded border-2 border-gray-700 shadow-sm"
              value={productDetails.author}
              onChange={(e) =>
                setProductDetails({ ...productDetails, author: e.target.value })
              }
            />
          </div>
        </div>
        {/* -------------------- CATEGORY & IMAGE URL CONTAINER -------------------- */}
        <div className="flex flex-row justify-start items-center w-full gap-2">
          {/* -------------------- BOOK CATEGORY -------------------- */}
          <div className="flex flex-col justify-start items-start gap-1 w-full">
            <label htmlFor="category" className="text-[#F1F1F1] font-medium">
              Book Category
            </label>
            <input
              type="text"
              id="category"
              className="flex w-full px-2 py-1.5 rounded border-2 border-gray-700 shadow-sm"
              value={productDetails.category}
              onChange={(e) =>
                setProductDetails({
                  ...productDetails,
                  category: e.target.value,
                })
              }
            />
          </div>
          {/* -------------------- IMAGE URL -------------------- */}
          <div className="flex flex-col justify-start items-start gap-1 w-full">
            <label htmlFor="image" className="text-[#F1F1F1] font-medium">
              Image URL
            </label>
            <input
              type="text"
              id="image"
              className="flex w-full px-2 py-1.5 rounded border-2 border-gray-700 shadow-sm"
              value={productDetails.image}
              onChange={(e) =>
                setProductDetails({ ...productDetails, image: e.target.value })
              }
            />
          </div>
        </div>
        {/* -------------------- PRICE, PUBLICATION & RELEASE DATE CONTAINER -------------------- */}
        <div className="flex flex-row justify-start items-center w-full gap-2">
          {/* -------------------- PRICE -------------------- */}
          <div className="flex flex-col justify-start items-start gap-1 w-1/4">
            <label htmlFor="price" className="text-[#F1F1F1] font-medium">
              Price in(₹)
            </label>
            <input
              type="text"
              id="price"
              className="flex w-full px-2 py-1.5 rounded border-2 border-gray-700 shadow-sm"
              value={productDetails.price}
              onChange={(e) =>
                setProductDetails({
                  ...productDetails,
                  price: parseInt(e.target.value),
                })
              }
            />
          </div>
          {/* -------------------- RELEASE DATE CONTAINER -------------------- */}
          <div className="flex flex-col justify-start items-start gap-1 w-1/4">
            <label htmlFor="release" className="text-[#F1F1F1] font-medium">
              Release Date
            </label>
            <input
              type="text"
              id="release"
              className="flex w-full px-2 py-1.5 rounded border-2 border-gray-700 shadow-sm"
              value={productDetails.releaseDate}
              onChange={(e) =>
                setProductDetails({
                  ...productDetails,
                  releaseDate: e.target.value,
                })
              }
            />
          </div>
          {/* -------------------- PUBLICATION -------------------- */}
          <div className="flex flex-col justify-start items-start gap-1 w-full">
            <label htmlFor="publisher">Publisher</label>
            <input
              type="text"
              id="publisher"
              className="flex w-full px-2 py-1.5 rounded border-2 border-gray-700 shadow-sm"
              value={productDetails.publication}
              onChange={(e) =>
                setProductDetails({
                  ...productDetails,
                  publication: e.target.value,
                })
              }
            />
          </div>
        </div>
        {/* -------------------- IS LATEST, IS TRENDING, IS BEST SELLING CONTAINER -------------------- */}
        <div className="flex flex-row justify-center items-center w-full gap-2">
          {/* -------------------- IS LATEST -------------------- */}
          <div className="flex flex-row justify-start items-center gap-1">
            <input
              type="checkbox"
              id="latest"
              checked={productDetails.isLatest}
              onChange={(e) =>
                setProductDetails({
                  ...productDetails,
                  isLatest: e.target.checked,
                })
              }
              className="h-4 w-4 rounded-md"
            />
            <label htmlFor="latest" className="text-[#F1F1F1] font-medium">
              Is Latest
            </label>
          </div>
          {/* -------------------- IS TRENDING -------------------- */}
          <div className="flex flex-row justify-start items-center gap-1">
            <input
              type="checkbox"
              id="trending"
              checked={productDetails.isTrending}
              onChange={(e) =>
                setProductDetails({
                  ...productDetails,
                  isTrending: e.target.checked,
                })
              }
              className="h-4 w-4 rounded-md"
            />
            <label htmlFor="trending" className="text-[#F1F1F1] font-medium">
              Is Trending
            </label>
          </div>
          {/* -------------------- IS BEST SELLING -------------------- */}
          <div className="flex flex-row justify-start items-center gap-1">
            <input
              type="checkbox"
              id="bestselling"
              checked={productDetails.isBestSelling}
              onChange={(e) =>
                setProductDetails({
                  ...productDetails,
                  isBestSelling: e.target.checked,
                })
              }
              className="h-4 w-4 rounded-md"
            />
            <label htmlFor="bestselling" className="text-[#F1F1F1] font-medium">
              Is Best selling
            </label>
          </div>
        </div>
        {/* -------------------- IS LATEST, IS TRENDING, IS BEST SELLING CONTAINER -------------------- */}
        <div className="flex justify-center items-center w-full">
          <button
            type="submit"
            disabled={submitLoader}
            className={`px-6 py-2 rounded text-white font-semibold ${
              submitLoader
                ? "opacity-75 cursor-not-allowed bg-[#bdb9b8] shadow-xl"
                : "bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500"
            }`}
          >
            Upload!
          </button>
        </div>
      </form>
    </div>
  );
}
