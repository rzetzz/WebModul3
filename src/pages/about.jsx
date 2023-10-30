import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";

function About() {
  return (
    <>
      <Navbar />
      <div className="about d-flex flex-column align-items-center">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
          officiis, dolore dignissimos, magnam saepe rem tenetur ex asperiores
          nostrum non officia nisi possimus ipsum architecto incidunt reiciendis
          placeat quisquam veniam!
        </p>
      </div>
      <Footer />
    </>
  );
}

export default About;
