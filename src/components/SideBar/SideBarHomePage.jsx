import React from 'react';
import '../HomePage.css';

const SIDEBAR_GROUPS = ['Фотографи ЧНУ', 'IT Community', 'Мистецька спільнота', 'Волонтери'];
const SIDEBAR_EVENTS = [
    'Подія 1', 'Лекція з ІТ', 'Волонтерський день', 'Квест кампусом', 'Концерт', 'Подія 2', 'Подія 3'
];

const SidebarSection = ({ title, items }) => (
    <div className="sidebar-section">
        <h3 className="sidebar-title">{title}</h3>
        <ul className="sidebar-list">
            {items.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
        <button className="see-more-button">See more</button>
    </div>
);

const SidebarHomePage = () => (
    <div className="sidebar-container">
        <SidebarSection title="Популярні групи" items={SIDEBAR_GROUPS} />
        <SidebarSection title="Події" items={SIDEBAR_EVENTS} />
    </div>
);

export default SidebarHomePage;
