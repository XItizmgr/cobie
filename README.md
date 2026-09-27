# What is COBIE

> COBIE is your local ai
> COBIE is a local AI coding agent that works directly with your project through the terminal.

Cobie is powered by gemini api . which u can get it for free in _ https://aistudio.google.com/api-keys _

## Feature

- directly run on terminal no need to copy paste and ask llm for fixing u can directly fix it
- Read file
- Write file
- edit file , etc

# Tech Stack

- python
- Rich for terminal ui
- google gemini api key
- python subprocess module

# For website Tech Stack

- React
- Typescript
- Tailwind

# How COBIE work

The basic flow is user ask cobie to edit or create or any kinda task in terminal and cobie send that request to agent(gemini api) and the api will respond with tool and tools will do the work and send response

# Project FOlder.

## agent

the brain of COBIE
That handle the communication with gemini and manges the tool

## tools

The worker who work as per the command of agent

## Cli

THe terminal interface .
it handle user input , commands and etc

# Installation

## Requirements

- python must be install
- A google gemini api key

### 1. Clone the repository

```bash
    git clone https://github.com/XItizmgr/cobie
    cd cobie
```

### 2. Create a virtual enrironment

````bash
    python -m venv venv
    venv\Scripts\activate
````

### 3. Install dependencies

````bash
    pip install -r requirements.txt
````
### 4. Get a gemini API key
COBIE use google gemini api as its llm model 
u can get it from here 
*https://aistudio.google.com/apikey*

### 5. Run COBIE
````bash
    python __main__.py
````

# Reminder 
The project is not fully complete as i want to make COBIE a vs code extension which can help many devloper and it will have many future plan..
