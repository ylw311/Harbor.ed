import React, { useState } from 'react';
import '../css/Card.scss';

const Card = () => {
  const options = [
    {
      id: 1,
      iconClass: "fas fa-walking",
      mainText: "Angel",
      subText: "Omuke trughte a otufta",
      backgroundImage: "https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg"
    },
    {
      id: 2,
      iconClass: "fas fa-snowflake",
      mainText: "Lindor",
      subText: "Omuke trughte a otufta",
      backgroundImage: "https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg"
    },
    {
        id: 3,
        iconClass: "fas fa-tree",
        mainText: "Nathene",
        subText: "Omuke trughte a otufta",
        backgroundImage: "https://66.media.tumblr.com/5516a22e0cdacaa85311ec3f8fd1e9ef/tumblr_o45jwvdsL11qho82wo1_1280.jpg"
    },
    {
        id: 4,
        iconClass: "fas fa-tint",
        mainText: "Rizzard",
        subText: "Omuke trughte a otufta",
        backgroundImage: "https://66.media.tumblr.com/f19901f50b79604839ca761cd6d74748/tumblr_o65rohhkQL1qho82wo1_1280.jpg"
      }
    // ...add other options
  ];

  // State to track the active option ID
  const [activeOptionId, setActiveOptionId] = useState(options[0].id);

  // Event handler for click
  const handleOptionClick = (id) => {
    setActiveOptionId(id);
  };

  return (
    <div>
      <div className="options">
        {options.map(option => (
          <div 
            className={`option ${activeOptionId === option.id ? 'active' : ''}`} 
            key={option.id}
            style={{ '--optionBackground': `url(${option.backgroundImage})` }}
            onClick={() => handleOptionClick(option.id)}
          >
            <div className="shadow"></div>
            <div className="label">
              <div className="icon">
                <i className={option.iconClass}></i>
              </div>
              <div className="info">
                <div className="main">{option.mainText}</div>
                <div className="sub">{option.subText}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <a href="http://victorofvalencia-blog.tumblr.com" target="_blank" className="credit">
        Photos from Victor of Valencia on tumblr
      </a>
    </div>
  );
};

export default Card;
