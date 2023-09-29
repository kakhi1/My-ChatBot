# My-ChatBot
This is a simple chatbot project that connects to the OpenAI API to generate responses based on user input. The chatbot has a backend built using node.js and a frontend created with React and Tailwind CSS.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js installed on your local machine.
- An OpenAI API key. You can obtain one by signing up at OpenAI.

  ### Installation

  1. Clone the repository:
     ```bash
     git clone https://github.com/kakhi1/My-ChatBot.git
    
  2. Navigate to the project directory:
     ```bash
     cd My-ChatBot
           
  3. Install the project dependencies:
     ```bash
     npm install

# Usage

To run the chatbot locally, follow these steps:

1. Set your OpenAI API key as an environment variable. You can do this by creating a .env file in the project root and adding your API key:
   ```bash
   OPEN_AI_KEY=your_api_key_here
   
2. Start the development server:
   ```bash
   npm start

3. Open your web browser and go to http://localhost:8000 to use the chatbot.


## Changing the Prompt

You can change the chatbot's prompt by modifying the relevant code in the project's frontend or backend. In the frontend (React), look for the code that sends a request to the backend and pass a different prompt as needed. In the backend, locate the code responsible for interacting with the OpenAI API and update the prompt there.



