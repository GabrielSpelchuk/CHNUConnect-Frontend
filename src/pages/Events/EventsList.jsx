import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Events.css";

export default function EventsList() {
  return (
    <div className="events-page">
      <Header />
      
      <div className="page-content">
        <div className="content-container">
          <div className="page-header">
            <h1 className="page-title">Події</h1>
            <Link to="/events/create" className="btn-create">
              Створити подію
            </Link>
          </div>
          
          <h2 className="section-subtitle">Список подій</h2>
          
          <div className="events-list">
            <div className="event-card">
              <div className="event-info">
                <div className="event-field">
                  <strong>Назва:</strong> ....
                </div>
                <div className="event-field">
                  <strong>Дата:</strong>
                </div>
                <div className="event-field">
                  <strong>Опис:</strong>
                </div>
              </div>
              <div className="event-actions">
                <button className="btn-participate">Взяти участь</button>
                <button className="btn-details">Детальніше</button>
              </div>
            </div>
            
            <div className="event-card">
              <div className="event-info">
                <div className="event-field">
                  <strong>Назва:</strong> ....
                </div>
                <div className="event-field">
                  <strong>Дата:</strong>
                </div>
                <div className="event-field">
                  <strong>Опис:</strong>
                </div>
              </div>
              <div className="event-actions">
                <button className="btn-participate">Взяти участь</button>
                <button className="btn-collapse">Згорнути</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

