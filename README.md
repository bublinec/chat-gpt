ChatGPT CLI Tool
================

This README provides detailed information on how to use and configure the ChatGPT CLI tool, a command-line interface (CLI) tool for interacting with OpenAI's GPT-3.5-turbo model. 

**The tool is written by Juraj Bublinec, and this README was generated by GPT-4.**


Table of Contents
-----------------

- [ChatGPT CLI Tool](#chatgpt-cli-tool)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Usage](#usage)
  - [Acknowledgments](#acknowledgments)

Overview
--------

The ChatGPT CLI tool is a simple, yet powerful command-line interface for users to interact with OpenAI's GPT-3.5-turbo model. It allows you to send messages to the model and receive responses without the need for a web application or any other user interface. The tool is perfect for developers and hobbyists alike who want to experiment with GPT-4 or integrate it into their projects.

Requirements
------------

To use the ChatGPT CLI tool, you need the following:

*   Node.js (version 14.x or higher)
*   An OpenAI API key

Installation
------------

Clone the repository and navigate to the root folder:

shCopy code

`git clone https://github.com/your-username/chat-gpt-cli.git cd chat-gpt-cli`

Install the required dependencies:

shCopy code

`npm install`

Configuration
-------------

1.  Create a `.env` file in the `Code/chat-gpt` folder:

shCopy code

`touch Code/chat-gpt/.env`

2.  Open the `.env` file and add your OpenAI API key:

makefileCopy code

`API_KEY=your_openai_api_key_here`

Replace `your_openai_api_key_here` with your actual API key.

Usage
-----

To start using the ChatGPT CLI tool, run the following command in the root folder:

shCopy code

`node index.js`

The tool will prompt you for input. Type your message and press Enter to send it to the GPT-3.5-turbo model. You will receive a response shortly after. Continue the conversation by entering more messages.

To exit the tool, press `Ctrl + C`.

Acknowledgments
---------------

This ChatGPT CLI tool was developed by Juraj Bublinec, and the README was generated by OpenAI's GPT-4 model. Special thanks to OpenAI for providing the GPT-3.5-turbo and API, which powers this tool.