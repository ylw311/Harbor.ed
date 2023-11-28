import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/App.scss';

const data = {
  headerText: "Hi ✨",
  pText: "",
  p2Text: "",
  userMessages: [],
  botMessages: [],
  botGreeting: "oh hi! nice day today?",
  botLoading: false
};

// var


var Header = props => {
  return (
    <div className="header">
      <div className="header-img" />
      <h1> {props.headerText} </h1>
      <h2> {props.pText} </h2>
      <p> {props.p2Text} </p>
    </div>
  );
};

var ChatHeader = props => {
  return (
    <div className="chat-header">
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
    </div>
  );
};


var UserInput = props => {
  return (
    <div className="input-container">
      <input
        id="chat"
        type="text"
        onKeyDown={props.onInput}
        placeholder="type something"
      />
      <button className="input-submit" onClick={props.onClick} />
    </div>
  );
};

// classes
class UserBubble extends React.Component {
  render() {
    return (
      <div className="user-message-container" ref={this.props.thisRef}>
        <div className="chat-bubble user">
          {this.props.message}
        </div>
      </div>
    );
  }
}

class BotBubble extends React.Component {
  render() {
    return (
      <div className="bot-message-container" ref={this.props.thisRef}>
        <div className="bot-avatar" />
        <div className="chat-bubble bot">
          {this.props.message}
        </div>
      </div>
    );
  }
}

// begin of main:

class Main extends React.Component {
  constructor(props) {
    super(props);
    const selectedFish = this?.props?.location?.state?.selectedFish || { mainText: "Koi - Journalist" };
    console.log(props);
    const initialMessages = this.getInitialMessages(selectedFish);

    this.state = {
      ...data,
      botCharacter: selectedFish,
      userMessages: [initialMessages.userMessage],
      llmInstruction: initialMessages.llmInstruction,
      initialInstructionSent: false
    };

    this.updateUserMessages = this.updateUserMessages.bind(this);
    this.scrollBubble = this.scrollBubble.bind(this);
    this.showMessages = this.showMessages.bind(this);
    this.onInput = this.onInput.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  getInitialMessages(selectedFish) {
    switch (selectedFish.mainText) {
      case "Koi - Journalist":
        return {
          llmInstruction: "Emulate a Koi character: wise, insightful, and contemplative. Provide deep, thoughtful responses and engage in meaningful, philosophical discussions.",
          userMessage: "As a wise Koi, I'm here to share wisdom and reflect on life's deeper questions."
        };
      case "Clownfish - Joyful Distraction":
        return {
          llmInstruction: "Emulate a Clownfish character: cheerful, funny, and light-hearted. Tell jokes, make puns, and keep the conversation upbeat and amusing.",
          userMessage: "Hello! I'm a cheerful Clownfish, ready to spread joy and laughter!"
        };
      case "Swordfish - Mentor":
        return {
          llmInstruction: "Emulate a Swordfish character: sharp, focused, and goal-oriented. Provide clear, concise advice and guidance, focusing on achieving objectives.",
          userMessage: "Greetings! As a Swordfish, I'm here to offer guidance and help you stay on point."
        };
      case "Lionfish - Educator":
        return {
          llmInstruction: "Emulate a Lionfish character: knowledgeable, informative, and enlightening. Share facts, educate, and explain complex topics in a comprehensible way.",
          userMessage: "Welcome! I'm a Lionfish, full of knowledge and ready to educate and inform."
        };
      default:
        return { llmInstruction: "", userMessage: "" };
    }
  }


  // updateUserMessages = newMessage => {
  //   if (!newMessage){
  //     return;  
  //   }

  //   var updatedMessages = this.state.userMessages;

  //   var updatedBotMessages = this.state.botMessages;

  //   this.setState({
  //     userMessages: updatedMessages.concat(newMessage),
  //     botLoading: true
  //   });

  //   // placeholder dialogflow api call
  //   var request = new Request(
  //     "https://api.dialogflow.com/v1/query?v=20150910&contexts=shop&lang=en&query=" +
  //       newMessage +
  //       "&sessionId=12345",
  //     {
  //       headers: new Headers({
  //         Authorization: "Bearer bc13467053ad45feaaa6f23c8bfafa9d"
  //       })
  //     }
  //   );

  //   fetch(request)
  //     .then(response => response.json())
  //     .then(json => {
  //       var botResponse = json.result.fulfillment.speech;

  //       this.setState({
  //         botMessages: updatedBotMessages.concat(botResponse),
  //         botLoading: false
  //       });
  //     })
  //     .catch(error => {
  //       console.log("ERROR:", error);
  //        this.setState({
  //         botMessages: updatedBotMessages.concat(':)'),
  //         botLoading: false
  //       });
  //       // redirect to character selection
  //       // setTimeout(() => {
  //       //   this.props.navigate('/character-selection');
  //       // }, 1000);
  //     });
  // };

  updateUserMessages = newMessage => {
    if (!newMessage) {
      return;
    }

    let updatedUserMessages = this.state.userMessages;
    let updatedBotMessages = this.state.botMessages;

    // adding new user message to the chat history
    this.setState({
      userMessages: updatedUserMessages.concat(newMessage),
      botLoading: true
    });

    // preparing chat history for the API call
    let chatHistory = this.state.initialInstructionSent ? [] : [{ agent: "", human: this.state.llmInstruction }];

    chatHistory = chatHistory.concat(this.state.userMessages.map((message, index) => ({
      agent: this.state.botMessages[index] || "",
      human: message
    })));

    if (!this.state.initialInstructionSent) {
      this.setState({ initialInstructionSent: true });
    }

    // API request body
    let requestBody = {
      input: {
        question: newMessage,
        chat_history: chatHistory
      },
      config: {},
      kwargs: {}
    };

    // API call to the custom backend
    fetch("https://chat-langchain-backend.langchain.dev/chat/invoke", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    })
      .then(response => response.json())
      .then(data => {
        let botResponse = data.output || "Sorry, I didn't get that.";

        this.setState({
          botMessages: updatedBotMessages.concat(botResponse),
          botLoading: false
        });
      })
      .catch(error => {
        console.error("Error:", error);
        this.setState({
          botMessages: updatedBotMessages.concat("There was an error."),
          botLoading: false
        });
      });
  };


  scrollBubble = element => {
    if (element != null) {
      element.scrollIntoView(true);
    }
  };

  showMessages = () => {
    var userMessages = this.state.userMessages;
    var botMessages = this.state.botMessages;

    var allMessages = [];

    var i = 0;
    for (; i < userMessages.length; i++) {
      if (i === userMessages.length - 1) {
        //if bot replied to last message
        if (botMessages[i]) {
          allMessages.push(<UserBubble message={userMessages[i]} />);
          allMessages.push(
            <BotBubble message={botMessages[i]} thisRef={this.scrollBubble} />
          );
        } else {
          allMessages.push(
            <UserBubble message={userMessages[i]} thisRef={this.scrollBubble} />
          );
        }
        break;
      }

      allMessages.push(<UserBubble message={userMessages[i]} />);
      allMessages.push(<BotBubble message={botMessages[i]} />);
    }

    allMessages.unshift(
      <BotBubble
        message={this.state.botGreeting}
        thisRef={i === 0 ? this.scrollBubble : ""}
      />
    );

    return <div className="msg-container">{allMessages}</div>;
  };

  onInput = event => {
    if (event.key === "Enter") {
      var userInput = event.target.value;

      this.updateUserMessages(userInput);
      event.target.value = "";
    }

    if (event.target.value?.trim()?.length > 0) {
      event.target.parentElement.style.background = 'rgba(69,58,148,0.6)';
    }
    else {
      event.target.parentElement.style.background = 'rgba(255, 255, 255, 0.6)';
    }
  };

  onClick = () => {
    var inp = document.getElementById("chat");
    var userInput = inp.value;

    this.updateUserMessages(userInput);
    inp.value = "";
  };



  render() {

    // const readMoreButton = (
    //   <button className="custom-btn btn-6"><span></span></button>
    // );


    return (
      <div className="app-container">


        <Header
          headerText={this.state.headerText}
          // buttonElement={readMoreButton}
          pText={this.state.pText}
          p2Text={this.state.p2Text}
        />



        <div className="chat-container">
          <ChatHeader />
          {this.showMessages()}
          <UserInput onInput={this.onInput} onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

function withNavigate(Component) {
  return function(props) {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
}


// export default Main;
export default withNavigate(Main);