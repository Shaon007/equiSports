import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const AddNewProduct = () => {
  const { user } = useContext(AuthContext);

  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const processing = form.processing.value;
    const customization = form.customization.value;
    const rating = form.rating.value;
    const stock = form.stock.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const price = form.price.value;

    const newProduct = {
      name,
      rating,
      customization,
      processing,
      stock,
      category,
      details,
      photo,
      price,
      host: {
        name: user?.displayName,
        email: user?.email,
        photo: user?.photoURL,
      },
    };

    console.log(newProduct);

    fetch('https://equi-sports-server-psi.vercel.app/product', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Added New Product',
            icon: 'success',
            confirmButtonText: 'Added',
          });
          form.reset();
        }
      });
  };

  return (
    <div className="flex justify-center items-center my-10 md:w-11/12 lg:w-full mx-auto">
      <form
        onSubmit={handleAddProduct}
        className="max-w-5xl mx-auto bg-[#F4F3F0] px-4 md:px-8 py-4 rounded-xl"
      >
        <h6 className="text-gray-800 text-3xl mt-3 mb-6 font-bold uppercase text-center">
          Add New Product
        </h6>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-gray-800 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter a product name"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-gray-800 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-gray-800 text-xs font-bold mb-2"
                htmlFor="category"
              >
                Category
              </label>
              <select
                name="category"
                id="category"
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
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-gray-800 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Price
              </label>
              <input
                type="text"
                name="price"
                placeholder="Enter Price"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-gray-800 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-gray-800 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Rating
              </label>
              <input
                type="text"
                name="rating"
                placeholder="Enter Product Rating"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-gray-800 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-gray-800 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Customization
              </label>
              <input
                type="text"
                name="customization"
                placeholder="Customization Requirement"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-gray-800 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-gray-800 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Processing Time
              </label>
              <input
                type="text"
                name="processing"
                placeholder="Enter product process time"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-gray-800 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-gray-800 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Product Photo
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter Product Photo"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-gray-800 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-gray-800 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Stock Status
              </label>
              <input
                type="text"
                name="stock"
                placeholder="Enter Available Product"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-gray-800 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
          <div className="w-full px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-gray-800 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Description
              </label>
              <input
                type="text"
                name="details"
                placeholder="Enter Product Details"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-gray-800 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
          <div className="w-full px-4">
            <div className="relative w-full mb-3">
              <input
                className="border w-full py-2 rounded-md text-white font-semibold bg-gray-700 "
                type="submit"
                value="Add Product"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddNewProduct;
