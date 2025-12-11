import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Groups.css";

export default function GroupCard() {
  const navigate = useNavigate();
  const [description, setDescription] = useState("");
  const [posts, setPosts] = useState(["", ""]);
  const [participants, setParticipants] = useState([
    "Ім'я Прізвище",
    "Ім'я Прізвище",
    "Ім'я Прізвище"
  ]);
  const [files, setFiles] = useState([
    "lecture1.pdf",
    "notes.txt",
    "example_code.js"
  ]);

  const handleAddParticipant = () => {
    setParticipants([...participants, "Ім'я Прізвище"]);
  };

  const handleAddFile = () => {
    setFiles([...files, "new_file.txt"]);
  };

  return (
    <div className="groups-page">
      <Header />
      
      <div className="page-content">
        <div className="content-container">
          <h1 className="page-title">Картка Групи</h1>
          
          <div className="group-card-container">
            <div className="group-card-left">
              <div className="card-section">
                <label className="card-label">Опис групи:</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="card-textarea"
                  rows="8"
                  placeholder="Введіть опис групи..."
                />
              </div>
              
              <div className="card-section">
                <label className="card-label">Пост групи:</label>
                {posts.map((post, index) => (
                  <textarea
                    key={index}
                    value={post}
                    onChange={(e) => {
                      const newPosts = [...posts];
                      newPosts[index] = e.target.value;
                      setPosts(newPosts);
                    }}
                    className="card-textarea post-textarea"
                    rows="4"
                    placeholder="Пост учасника:"
                  />
                ))}
              </div>
            </div>
            
            <div className="group-card-right">
              <div className="card-section white-box">
                <label className="card-label">Список учасників:</label>
                <ul className="participants-list">
                  {participants.map((participant, index) => (
                    <li key={index} className="participant-item">
                      <span>{participant}</span>
                      <button className="btn-edit-small">Редагувати</button>
                    </li>
                  ))}
                </ul>
                <button onClick={handleAddParticipant} className="btn-add-item">
                  Додати
                </button>
              </div>
              
              <div className="card-section white-box">
                <label className="card-label">Матеріали / файли</label>
                <ul className="files-list">
                  {files.map((file, index) => (
                    <li key={index} className="file-item">
                      <span>{file}</span>
                      <button className="btn-edit-small">Редагувати</button>
                    </li>
                  ))}
                </ul>
                <button onClick={handleAddFile} className="btn-add-item">
                  Створити
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

