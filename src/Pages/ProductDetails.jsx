import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch product details.");
        }
        return res.json();
      })
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product details:", error));
  }, [id]);

  if (!product) {
    return <div className="text-center text-xl font-bold mt-20">Loading...</div>;
  }

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/product/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your product has been deleted.",
                icon: "success",
              });
              navigate("/");
            }
          })
          .catch((err) => console.error("Delete failed", err));
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg my-10">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Product Image */}
        <div className="flex flex-col flex-shrink-0 justify-center items-center lg:w-1/3">
          <img
            src={product.photo}
            alt={product.name}
            className="rounded-lg w-full object-contain"
          />
          <div className="flex flex-col lg:flex-row gap-4 my-4">
            <span className="text-3xl font-semibold text-gray-800">${product.price}</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-lg">
              ⭐ {product.rating} / 5
            </span>
          </div>
        </div>

        {/* Product Information */}
        <div className="flex flex-col lg:w-2/3 gap-6">
          <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-gray-600 mb-2">{product.details}</p>

          {/* Specifications Section */}
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Specifications</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>High-quality material</li>
              <li>Durable and long-lasting</li>
              <li>Available in multiple colors</li>
              <li>1-year warranty</li>
            </ul>
          </div>
          <p className="text-gray-700">
            <strong>Category:</strong> {product.category}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              to={`/updateProduct/${product._id}`}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
            >
              Edit
            </Link>
            <button
              onClick={() => handleDelete(id)}
              className="px-6 py-2 bg-red-800 text-white rounded-lg shadow-md hover:bg-red-900"
            >
              Delete
            </button>
            <button className="px-6 py-2 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
