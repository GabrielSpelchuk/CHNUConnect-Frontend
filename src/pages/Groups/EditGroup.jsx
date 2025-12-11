import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Groups.css";

export default function EditGroup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    visibility: "",
    allowComments: false
  });

  const [uploadedImage] = useState("banner1.png");

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
    console.log("Group updated:", formData);
  };

  const handleDelete = () => {
    if (window.confirm("Ви впевнені, що хочете видалити цю групу?")) {
      // Handle deletion
      navigate("/groups");
    }
  };

  return (
    <div className="groups-page">
      <Header />
      
      <div className="page-content">
        <div className="content-container">
          <div className="page-header">
            <button onClick={() => navigate(-1)} className="btn-back">
              ← Назад
            </button>
            <h1 className="page-title">Редагувати групу</h1>
          </div>
          
          <form className="group-form" onSubmit={handleSubmit}>
            <div className="form-section">
              <label className="form-label">Назва групи</label>
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
                rows="6"
                required
              />
              
              <label className="form-label">Категорія</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="form-input"
                placeholder="навчальна / культурна / спортивна / Інше"
              />
              
              <label className="form-label">Банер / Зображення</label>
              <div className="uploaded-images">
                <div className="image-item">
                  <span>• {uploadedImage}</span>
                  <div className="image-actions">
                    <button type="button" className="btn-edit-image">Редагувати</button>
                    <button type="button" className="btn-delete-image">Видалити</button>
                  </div>
                </div>
              </div>
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
                placeholder="(публічна / за посиланням / тільки для себе"
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
              <button type="submit" className="btn-primary">Зберегти зміни</button>
              <button type="button" onClick={handleDelete} className="btn-danger">Видалити групу</button>
              <button type="button" onClick={() => navigate(-1)} className="btn-secondary">Скасувати</button>
            </div>
          </form>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

