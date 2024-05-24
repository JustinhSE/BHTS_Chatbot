'use client' 
import React from 'react';
import {useState, useEffect} from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const steps = [
    {
        id: '0',
        message: 'Hey!',
        trigger: '1',
    }, {
        id: '1',
        message: 'What is your name?',
        trigger: '2'
    }, {
        id: '2',
        user: true,
        trigger: '3',
    }, {
        id: '3',
        message: " Hi {previousValue}! Which terms would you like to know more about?",
        trigger: '4'
    }, {
        id: '4',
        options: [
            { value: 1, label: 'Credit' },
            { value: 2, label: 'Loans' },
            { value: 3, label: 'Budgeting' },
        ],
        end: true
    }
];

const theme = {
    background: '#FFFFFF', // white
    headerBgColor: '#0047BB', // blue
    headerFontSize: '20px',
    botBubbleColor: '#0047BB', // blue
    headerFontColor: '#FFFFFF', // white
    botFontColor: '#FFFFFF', // white
    userBubbleColor: '#D8262C', // red
    userFontColor: '#FFFFFF', // white
};

const config = {
    botAvatar: 'https://www.shutterstock.com/image-vector/3d-vector-robot-chatbot-ai-600nw-2294117979.jpg' ,
    floating: true,
};

function App() {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    console.log('useEffect is running'); // This will log every time the useEffect hook runs
    setStarted(true);
  }, []);


  if (!started) {
    return null;
  } else {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <ChatBot
            headerTitle="FinLit Chatbot"
            steps={steps}
            {...config}
          />
        </ThemeProvider>
      </div>
    );
  }
}
export default React.memo(App);