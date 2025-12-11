import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Events.css";

export default function CreateEvent() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    date: "",
    time: "",
    venue: "",
    category: "",
    visibility: "",
    allowComments: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Event created:", formData);
  };

  return (
    <div className="events-page">
      <Header />
      
      <div className="page-content">
        <div className="content-container">
          <div className="page-header">
            <button onClick={() => navigate(-1)} className="btn-back">
              ← Назад
            </button>
            <h1 className="page-title">Створити подію</h1>
          </div>
          
          <form className="event-form" onSubmit={handleSubmit}>
            <div className="form-section">
              <label className="form-label">Назва події</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
              />
              
              <label className="form-label">Опис</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="form-textarea"
                rows="4"
                required
              />
              
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Дата</label>
                  <div className="input-with-icon">
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                    <span className="calendar-icon">📅</span>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Час</label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>
              
              <label className="form-label">Місце проведення</label>
              <input
                type="text"
                name="venue"
                value={formData.venue}
                onChange={handleChange}
                className="form-input"
                required
              />
              
              <label className="form-label">Категорія</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="form-input"
                placeholder="(навчальна / культурна / спортивна / інше)"
              />
              
              <label className="form-label">Банер / Зображення</label>
              <div className="file-upload-area">
                <p>Drag & Drop або Завантажити</p>
              </div>
            </div>
            
            <div className="form-section">
              <h3 className="section-title">Налаштування</h3>
              
              <label className="form-label">Категорія</label>
              <input
                type="text"
                name="visibility"
                value={formData.visibility}
                onChange={handleChange}
                className="form-input"
                placeholder="(публічна / лише для групи / за посиланням / тільки для себе)"
              />
              
              <div className="checkbox-group">
                <label className="form-label">Чи дозволені коментарі?</label>
                <div className="checkbox-options">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="allowComments"
                      checked={formData.allowComments}
                      onChange={handleChange}
                    />
                    Так
                  </label>
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="allowComments"
                      checked={!formData.allowComments}
                      onChange={(e) => setFormData(prev => ({ ...prev, allowComments: !e.target.checked }))}
                    />
                    Ні
                  </label>
                </div>
              </div>
            </div>
            
            <div className="form-actions">
              <button type="submit" className="btn-primary">Опублікувати</button>
              <button type="button" className="btn-secondary">Зберегти як чернетку</button>
              <button type="button" onClick={() => navigate(-1)} className="btn-secondary">Скасувати</button>
            </div>
          </form>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

