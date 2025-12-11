import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-page">
      <Header />
      
      <div className="banner-section">
        <div className="banner-overlay">
          <h1 className="banner-title">Ласкаво просимо!</h1>
        </div>
      </div>
      
      <div className="main-content">
        <div className="content-wrapper">
          <div className="left-column">
            <h2 className="section-title">Стрічка новин</h2>
            
            <div className="post-creation-box">
              <div className="post-actions">
                <button className="btn-post">Post</button>
                <button className="btn-add">Add</button>
              </div>
            </div>
            
            <div className="news-post">
              <div className="post-header">
                <div className="avatar"></div>
                <div className="post-author-info">
                  <div className="author-name">Іван Іваненко</div>
                  <div className="post-time">2 години тому</div>
                </div>
              </div>
              <div className="post-content">
                Сьогодні університет проводить День відкритих дверей. Запрошуємо всіх бажаючих відвідати лекції та майстер-класи.
              </div>
              <div className="post-actions-bar">
                <div className="action-item">
                  <span className="action-icon">❤️</span>
                  <span className="action-count">154</span>
                </div>
                <div className="action-item">
                  <span className="action-icon">💬</span>
                  <span className="action-count">9</span>
                </div>
                <button className="btn-share">Share</button>
              </div>
            </div>
            
            <div className="news-post">
              <div className="post-header">
                <div className="avatar"></div>
                <div className="post-author-info">
                  <div className="author-name">Марія Петренко</div>
                  <div className="post-time">2 дні тому</div>
                </div>
              </div>
              <div className="post-content">
                Запрошуємо студентів факультету інформатики на безкоштовний семінар з веб-розробки. Реєстрація відкрита до кінця тижня.
              </div>
              <div className="post-actions-bar">
                <div className="action-item">
                  <span className="action-icon">❤️</span>
                  <span className="action-count">35</span>
                </div>
                <div className="action-item">
                  <span className="action-icon">💬</span>
                  <span className="action-count">5</span>
                </div>
                <button className="btn-share">Share</button>
              </div>
            </div>
          </div>
          
          <div className="right-column">
            <div className="sidebar-section">
              <h3 className="sidebar-title">Популярні групи</h3>
              <div className="sidebar-list">
                <div className="sidebar-item"></div>
                <div className="sidebar-item"></div>
                <div className="sidebar-item"></div>
                <div className="sidebar-item"></div>
                <div className="sidebar-item"></div>
                <div className="sidebar-item"></div>
              </div>
              <button className="btn-see-more">See more</button>
            </div>
            
            <div className="sidebar-section">
              <h3 className="sidebar-title">Події</h3>
              <div className="sidebar-list">
                <div className="sidebar-item"></div>
                <div className="sidebar-item"></div>
                <div className="sidebar-item"></div>
                <div className="sidebar-item"></div>
                <div className="sidebar-item"></div>
                <div className="sidebar-item"></div>
                <div className="sidebar-item"></div>
              </div>
              <button className="btn-see-more">See more</button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

