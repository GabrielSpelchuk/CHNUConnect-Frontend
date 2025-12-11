import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Groups.css";

export default function GroupsList() {
  return (
    <div className="groups-page">
      <Header />
      
      <div className="page-content">
        <div className="content-container">
          <div className="page-header">
            <h1 className="page-title">Група / Спільноти</h1>
            <Link to="/groups/create" className="btn-create">
              Створити групу
            </Link>
          </div>
          
          <h2 className="section-subtitle">Список Груп</h2>
          
          <div className="groups-list">
            <div className="group-card">
              <div className="group-info">
                <div className="group-field">
                  <strong>Назва:</strong> ....
                </div>
                <div className="group-field">
                  <strong>Опис:</strong> ....
                </div>
                <div className="group-field">
                  <strong>Учасники:</strong> ....
                </div>
              </div>
              <button className="btn-join">Приєднатися</button>
            </div>
            
            <div className="group-card">
              <div className="group-info">
                <div className="group-field">
                  <strong>Назва:</strong> ....
                </div>
                <div className="group-field">
                  <strong>Опис:</strong> ....
                </div>
                <div className="group-field">
                  <strong>Учасники:</strong> ....
                </div>
              </div>
              <button className="btn-join">Приєднатися</button>
            </div>
            
            <div className="group-card">
              <div className="group-info">
                <div className="group-field">
                  <strong>Назва:</strong> ....
                </div>
                <div className="group-field">
                  <strong>Опис:</strong> ....
                </div>
                <div className="group-field">
                  <strong>Учасники:</strong> ....
                </div>
              </div>
              <button className="btn-join">Приєднатися</button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

