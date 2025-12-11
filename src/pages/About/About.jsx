import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./About.css";

export default function About() {
  return (
    <div className="about-page">
      <Header />
      
      <div className="page-content">
        <div className="content-container">
          <h1 className="page-title">Про Нас</h1>
          <div className="about-content">
            <p>CHNU Connect - це соціальна мережа для студентів та викладачів Чернівецького національного університету.</p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

