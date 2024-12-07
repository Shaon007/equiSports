import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product details:", error));
  }, [id]);

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedProduct = {
      name: form.name.value,
      rating: form.rating.value,
      customization: form.customization.value,
      processing: form.processing.value,
      stock: form.stock.value,
      category: form.category.value,
      details: form.details.value,
      photo: form.photo.value,
      price: form.price.value,
    };

    fetch(`http://localhost:5000/product/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Updated!",
            text: "Your product has been updated.",
            icon: "success",
            confirmButtonText: "Great",
          });
          navigate(`/product/${id}`);
        }
      })
      .catch((error) => console.error("Error updating product:", error));
  };

  if (!product) {
    return <div className="text-center text-xl font-bold mt-20">Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center my-10">
      <form
        onSubmit={handleUpdateProduct}
        className="max-w-5xl mx-auto bg-[#F4F3F0] px-4 md:px-8 py-4"
      >
        <h6 className="text-gray-800 text-3xl mt-3 mb-6 font-bold uppercase text-center">
          Update Product
        </h6>
        <div className="flex flex-wrap">
          {/* Name */}
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-gray-800 text-xs font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                defaultValue={product.name}
                placeholder="Enter product name"
                className="border-0 px-3 py-3 placeholder-gray-800 text-gray-800 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>

          {/* Category */}
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-gray-800 text-xs font-bold mb-2">
                Category
              </label>
              <input
                type="text"
                name="category"
                defaultValue={product.category}
                placeholder="Enter product category"
                className="border-0 px-3 py-3 placeholder-gray-800 text-gray-800 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>

          {/* Price */}
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-gray-800 text-xs font-bold mb-2">
                Price
              </label>
              <input
                type="text"
                name="price"
                defaultValue={product.price}
                placeholder="Enter product price"
                className="border-0 px-3 py-3 placeholder-gray-800 text-gray-800 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>

          {/* Rating */}
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-gray-800 text-xs font-bold mb-2">
                Rating
              </label>
              <input
                type="text"
                name="rating"
                defaultValue={product.rating}
                placeholder="Enter product rating"
                className="border-0 px-3 py-3 placeholder-gray-800 text-gray-800 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>

          {/* Customization */}
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-gray-800 text-xs font-bold mb-2">
                Customization
              </label>
              <input
                type="text"
                name="customization"
                defaultValue={product.customization}
                placeholder="Enter customization requirement"
                className="border-0 px-3 py-3 placeholder-gray-800 text-gray-800 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>

          {/* Processing Time */}
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-gray-800 text-xs font-bold mb-2">
                Processing Time
              </label>
              <input
                type="text"
                name="processing"
                defaultValue={product.processing}
                placeholder="Enter processing time"
                className="border-0 px-3 py-3 placeholder-gray-800 text-gray-800 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>

          {/* Product Photo */}
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-gray-800 text-xs font-bold mb-2">
                Product Photo
              </label>
              <input
                type="text"
                name="photo"
                defaultValue={product.photo}
                placeholder="Enter product photo URL"
                className="border-0 px-3 py-3 placeholder-gray-800 text-gray-800 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>

          {/* Stock Status */}
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-gray-800 text-xs font-bold mb-2">
                Stock Status
              </label>
              <input
                type="text"
                name="stock"
                defaultValue={product.stock}
                placeholder="Enter stock status"
                className="border-0 px-3 py-3 placeholder-gray-800 text-gray-800 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>

          {/* Description */}
          <div className="w-full px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-gray-800 text-xs font-bold mb-2">
                Description
              </label>
              <input
                type="text"
                name="details"
                defaultValue={product.details}
                placeholder="Enter product details"
                className="border-0 px-3 py-3 placeholder-gray-800 text-gray-800 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="w-full px-4">
            <div className="relative w-full mb-3">
              <input
                className="border w-full py-2 rounded-md text-[#331A15] font-semibold bg-[#D2B48C]"
                type="submit"
                value="Update Product"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
