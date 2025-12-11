import React from 'react';
import Post from './Post';
import '../HomePage.css';

const POSTS_DATA = [
    { id: 1, author: 'Іван Іваненко', content: 'Сьогодні університет проводить День відкритих дверей...', likes: 154, comments: 9 },
    { id: 2, author: 'Марія Петренко', content: 'Запрошуємо студентів факультету Інформатики на безкоштовний семінар...', likes: 35, comments: 5 },
];

const NewsFeed = () => (
    <div className="news-feed-container">
        <h2 className="section-title">Стрічка новин</h2>
        
        {/* Поле створення посту */}
        <div className="post-creator">
            <div className="post-creator-buttons">
                <button className="post-btn-base post-btn-post">Post</button>
                <button className="post-btn-base post-btn-add">Add</button>
            </div>
        </div>

        {/* Список постів */}
        {POSTS_DATA.map(post => (
            <Post key={post.id} data={post} />
        ))}
    </div>
);

export default NewsFeed;
