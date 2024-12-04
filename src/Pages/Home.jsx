import { useLoaderData } from "react-router-dom";

const Home = () => {
  const product = useLoaderData()
  return (
    <div>
      <h2>Home</h2>
      <p>Total : {product.length}</p>
    </div>
  );
};

export default Home;