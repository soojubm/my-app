import { Link, useParams } from "react-router-dom";

function Home() {
  let params = useParams();
  console.log("@", params);
  return (
    <div>
      <h1>Home</h1>
      <Link to="invoices">invoices</Link>
    </div>
  );
}

export default Home;
