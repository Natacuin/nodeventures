# nodeventures
Learning Node.js by doing - this repo chronicles the process. This repo has some of the code samples of the course [NodeJS - The Complete Guide](https://www.udemy.com/course/nodejs-the-complete-guide/) by Maximilian Schwarzmüller on Udemy which I recommend. This repo is not a course!


![Node.js](https://img.shields.io/badge/Node.js-2b9348?style=for-the-badge&logo=Node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-2b9348?style=for-the-badge&logo=javascript&logoColor=white)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](./LICENSE)

## REPL

REPL stands for Read, Eval, Print and Loop. This is not a feature needed to create node.js programs, but can be useful for debuging.

To start using REPL just type `node` in the terminal and then execute some node commands like `console.log("Hello world")` or a simple operation like `2+2`

To exit REPL just `Ctrl + C`

## How to use this repo
To run individual programs just type `node [nameofthefile]` for example `node .\play00.js`, be sure to open the terminal in the same folder of the file.

To run the entire server run `npm start`

### Visual Studio Code only
This step is just information, no action needed, the repo includes the change. Because this project is using *nodemon* changes on code will force the restart of the server automatically, to force the restart during debugging in Visual Studio Code go to "Run", then "Add Configuration..." Select "Node.js" and add `"start":true` and `"runtimeExecutable": "nodemon"` at the end of the code presented. The code should look like:

``` javascript
"version": "0.2.0",
"configurations": [
    {
        "type": "node",
        "request": "launch",
        "name": "Launch Program",
        "skipFiles": [
            "<node_internals>/**"
        ],
        "program": "${file}",
        "restart": true,
        "runtimeExecutable": "nodemon"
    }
]
``` 


## Structure of this project

In the following section there is a description of the content of each folder in the repository.

### JavaScriptBasics

This folder contains very basic Javascripts files to practice simple scenario. No need to run servers or browser to test the code. Just node installed and a terminal. 

### 01-Basics

This folder constains code to create a very basic node.js server. The is configured to run the server on http://localhost:3000. To quit the running Node.js server press `Ctrl + C` in the terminal. The sample codes shows how to do basic tasks like create responses based on the request information URL or METHOD.
