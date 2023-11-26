import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Card.scss";
import "../css/buttons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWalking,
  faSnowflake,
  faTree,
  faSoccerBall,
} from "@fortawesome/free-solid-svg-icons";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  useAnimations,
  Environment,
} from "@react-three/drei";
import { Suspense } from "react";
import { ModelBlob } from "./MyFish";
import { ModelKoi } from "./MyFish";
import { ModelLionFish } from "./MyFish";
import { ModelPuffer } from "./MyFish";
import { ModelSnapper } from "./MyFish";
import { ModelSwordFish } from "./MyFish";
import { ModelClownFish } from "./MyFish";

const Card = () => {
  const options = [
    {
      id: 1,
      icon: faWalking,
      mainText: "Koi - Journalist",
      subText: "Wise - Good for rants",
      backgroundImage:
        "https://i.pinimg.com/736x/95/59/6d/95596de5ffae2c9da9502f4e43b11d92.jpg",
    },
    {
      id: 2,
      icon: faSnowflake,
      mainText: "Clownfish - Joyful Distraction",
      subText: "Tells corny jokes, but a good friend",
      backgroundImage:
        "https://img.freepik.com/premium-photo/clown-fish-coral-reef-macro-underwater-scene-view-coral-fish-underwater-diving_548821-20382.jpg?size=626&ext=jpg",
    },
    {
      id: 3,
      icon: faTree,
      mainText: "Swordfish - Mentor",
      subText: "Sharp and goal-oriented.",
      backgroundImage:
        "https://i0.wp.com/www.divedesco.com/Content/images/waterBG.jpg",
    },
    {
      id: 4,
      icon: faSoccerBall,
      mainText: "Lionfish - Educator",
      subText: "Knowledgeable and informative",
      backgroundImage:
        "https://t3.ftcdn.net/jpg/01/88/01/62/360_F_188016281_A2vlSo5nfirsiBL9O955zKS43TO3XpcY.jpg",
    },
  ];

  const [activeOptionId, setActiveOptionId] = useState(options[0].id);
  const navigate = useNavigate(); // Direct use of the hook

  const handleOptionClick = (id) => {
    setActiveOptionId(activeOptionId === id ? null : id);
  };

  const handleButtonClick = () => {
    navigate("/chat"); // Use navigate function directly
  };

  // Function to select the model based on the option id
  const selectModel = (id) => {
    switch (id) {
      case 1:
        return <ModelKoi />;
      case 2:
        return <ModelClownFish />;
      case 3:
        return <ModelSwordFish />;
      case 4:
        return <ModelLionFish />;
      // Add other cases as needed
      default:
        return <ModelSnapper />; // default model
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center card-container">
        <div className="options">
          {options.map((option) => (
            <div
              className={`option ${
                activeOptionId === option.id ? "active" : ""
              }`}
              key={option.id}
              style={{ "--optionBackground": `url(${option.backgroundImage})` }}
              onClick={() => handleOptionClick(option.id)}
            >
              <Canvas camera={{ position: [10, 10, 10], fov: 25 }}>
                <Suspense fallback={null}>
                  <ambientLight intensity={1.5} />
                  <spotLight
                    intensity={4}
                    angle={0.1}
                    penumbra={1}
                    position={[10, 15, 10]}
                    castShadow
                  />
                  <Environment preset="sunset" />
                  {selectModel(option.id)}
                  <OrbitControls
                    enablePan={true}
                    enableZoom={true}
                    enableRotate={true}
                    maxPolarAngle={Math.PI / 2}
                  />
                </Suspense>
              </Canvas>
              <div className="shadow"></div>
              <div className="label">
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
      <button className="custom-btn btn-16" onClick={handleButtonClick}>
        <span>Confirm</span>
      </button>
    </div>
  );
};

function withNavigate(Component) {
  return (props) => {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
}

export default withNavigate(Card);
