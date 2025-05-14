import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { FaArrowLeft } from "react-icons/fa6";

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://equi-sports-server-psi.vercel.app/product/${id}`)
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
      email: form.email.value,
    };

    fetch(`https://equi-sports-server-psi.vercel.app/product/${id}`, {
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
    <div className="flex justify-center items-center my-20 =">

      <form
        onSubmit={handleUpdateProduct}
        className="max-w-5xl mx-auto bg-[#F4F3F0] px-4 md:px-8 py-4 shadow-md rounded-lg"
      >
        <button
          onClick={() => navigate(-1)}
          className=" bg-cyan-600 h-8 gap-2 flex items-center justify-center text-gray-100 p-3 font-semibold  rounded-lg hover:bg-gray-500 transition"
        > <FaArrowLeft/>
          Home
        </button>
        <h6 className="text-gray-800 font-mono text-3xl mt-3 mb-6 font-bold  text-center">
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

          {/* Email */}
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-gray-800 text-xs font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                readOnly
                defaultValue={user?.email || ''}
                placeholder="Enter email"
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
              <select
                name="category"
                id="category"
                defaultValue={product.category}
                className="border-0 px-3 py-3 text-gray-800 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              >
                <option value="Cricket">Cricket</option>
                <option value="Football">Football</option>
                <option value="Cycling">Cycling</option>
                <option value="Running">Running</option>
                <option value="Accessories">Accessories</option>
              </select>
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
                placeholder="Enter Price"
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
                placeholder="Enter Product Rating"
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
                placeholder="Customization Requirement"
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
                placeholder="Enter product process time"
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
                placeholder="Enter Product Photo"
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
                placeholder="Enter Available Product"
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
                placeholder="Enter Product Details"
                className="border-0 px-3 py-3 placeholder-gray-800 text-gray-800 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="w-full px-4">
            <button
              type="submit"
              className="bg-cyan-700 text-white font-bold  text-sm px-6 py-3 shadow hover:shadow-lg focus:outline-none focus:ring w-full ease-linear transition-all duration-150 rounded-lg"
            >
              Update Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
