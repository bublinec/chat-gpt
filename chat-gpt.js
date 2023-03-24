#!/usr/bin/env node

import path from 'path';
import { config } from 'dotenv';
config({ path: path.join(process.cwd(), 'Code/chat-gpt/.env') });

import { Configuration, OpenAIApi } from 'openai'
import readline from 'readline';

const openaiConfig = new Configuration({
  apiKey: process.env.API_KEY,
  basePath: 'https://api.openai.com/v1',
});

const openai = new OpenAIApi(openaiConfig);


const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

userInterface.prompt()

userInterface.on('line', async (input) => {
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        "content": input
      },
    ]
  });
  console.log('\n')
  console.log(response.data.choices[0].message.content);
  userInterface.prompt()
});












