import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const chat = async (e, message) => {
    e.preventDefault();

    if (!message) return;
    setIsTyping(true);
    scrollTo(0, 1e10);

    let msgs = chats;
    msgs.push({ role: "user", content: message });
    setChats(msgs);

    setMessage("");

    fetch("https://ai-chatbot-k5aq.onrender.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chats,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        msgs.push(data.output);
        setChats(msgs);
        setIsTyping(false);
        scrollTo(0, 1e10);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <main className=" border-black border-2 bg-[#F6F4EB] flex h-[700px] flex-col justify-between text-left items-start m-5 rounded-md ">
      <div className="w-full flex items-center justify-between h-[15%] bg-green-500 gap-5 px-5 border-b-2 border-black">
        <div className="w-10 h-10 rounded-full bg-white "></div>
        <h1 className="text-lg font-bold uppercase text-white">chatbot</h1>
      </div>

      <section className=" text-green-500 w-full h-[70%] overflow-x-hidden overflow-y-scroll">
        {chats && chats.length
          ? chats.map((chat, index) => (
              <p
                key={index}
                className={`m-4 w-full flex gap-1 ${
                  chat.role === "user" ? "user_msg" : ""
                }`}
              >
                <span className="text-green bg-white w-[20%] h-[20px] rounded-full flex items-center 
                justify-center shadow-sm shadow-black text-[10px] ">
                  <b>{chat.role.toUpperCase()}</b>
                </span>
                <span>:</span>
                <span className="bg-white rounded-lg w-[80%] flex items-center justify-center
                 shadow-sm shadow-black p-2">{chat.content}</span>
              </p>
            ))
          : ""}
      </section>

      <div className={`text-green-500 pl-4 ${isTyping ? "" : "hide"}`}>
        <p>
          <i>{isTyping ? "Typing" : ""}</i>
        </p>
      </div>

      <form
        className="w-full h-20 text-left  border-t-2 border-black "
        action=""
        onSubmit={(e) => chat(e, message)}
      >
        <input
          className="w-full h-full pl-4 "
          type="text"
          name="message"
          value={message}
          placeholder="Type a message here and hit Enter..."
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
    </main>
  );
}

export default App;
