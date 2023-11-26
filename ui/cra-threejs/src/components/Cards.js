import React, { useState } from 'react';
import '../css/Card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWalking, faSnowflake, faTree, faSoccerBall } from '@fortawesome/free-solid-svg-icons';


const Card = () => {
  const options = [
    {
      id: 1,
      icon: faWalking,
      mainText: "Lionfish - The Resilience Advisor",
      subText: "Omuke trughte a otufta",
      backgroundImage: "https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg"
    },
    {
      id: 2,
      icon: faSnowflake,
      mainText: "Lindor",
      subText: "Omuke trughte a otufta",
      backgroundImage: "https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg"
    },
    {
        id: 3,
        icon: faTree,
        mainText: "Nathene",
        subText: "Omuke trughte a otufta",
        backgroundImage: "https://66.media.tumblr.com/5516a22e0cdacaa85311ec3f8fd1e9ef/tumblr_o45jwvdsL11qho82wo1_1280.jpg"
    },
    {
        id: 4,
        icon: faSoccerBall,
        mainText: "Rizzard",
        subText: "Omuke trughte a otufta",
        backgroundImage: "https://66.media.tumblr.com/f19901f50b79604839ca761cd6d74748/tumblr_o65rohhkQL1qho82wo1_1280.jpg"
      },
      {
        id: 5,
        icon: faSoccerBall,
        mainText: "Rizzard",
        subText: "Omuke trughte a otufta",
        backgroundImage: "https://66.media.tumblr.com/f19901f50b79604839ca761cd6d74748/tumblr_o65rohhkQL1qho82wo1_1280.jpg"
      },
      {
        id: 6,
        icon: faSoccerBall,
        mainText: "Rizzard",
        subText: "Omuke trughte a otufta",
        backgroundImage: "https://66.media.tumblr.com/f19901f50b79604839ca761cd6d74748/tumblr_o65rohhkQL1qho82wo1_1280.jpg"
      },
      {
        id: 7,
        icon: faSoccerBall,
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
              {/* <div className="icon">
                <i className={option.iconClass}></i>
              </div> */}
              {/* TODO idk why tf this doesnt work */}
              <div className="icon">
                <FontAwesomeIcon icon={option.icon} />
                </div>
              <div className="info">
                <div className="main">{option.mainText}</div>
                <div className="sub">{option.subText}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
