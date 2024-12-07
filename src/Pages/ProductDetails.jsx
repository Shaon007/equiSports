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
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-shrink-0">
          <img
            src={product.photo}
            alt={product.name}
            className="rounded-lg w-full lg:w-96 h-auto object-cover"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-6">{product.details}</p>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-2xl font-semibold text-gray-800">${product.price}</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
              Rating: {product.rating} / 5
            </span>
          </div>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
          <div className="flex gap-4">
            <Link to={`/updateProduct/${product._id}`} className="mt-4 btn btn-primary">
              Edit
            </Link>
            <button onClick={() => handleDelete(id)} className="mt-4 btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
