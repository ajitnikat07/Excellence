// Quiz questions stored in an array of objects
const quizQuestions = [
  {
    question: "What does HTML stand for?",
    options:[
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Tool Multi Language",
      "Hyperlinks Text Mark Language"
    ],
    correctAnswer:"Hyper Text Markup Language"
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    correctAnswer: "CSS"
  },
  {
    question: "Which is not a JavaScript data type?",
    options: ["Number", "Boolean", "Float", "Undefined"],
    correctAnswer: "Float"
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "int", "string", "define"],
    correctAnswer: "var"
  },
  {
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Model",
      "Document Oriented Model",
      "Digital Object Model"
    ],
    correctAnswer: "Document Object Model"
  },
  {
    question: "Which method adds an element to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correctAnswer: "push()"
  },
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: ["//", "/* */", "<!-- -->", "#"],
    correctAnswer: "//"
  },
  {
    question: "Which function converts JSON into a JavaScript object?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.object()"],
    correctAnswer: "JSON.parse()"
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Google", "Netscape", "Apple"],
    correctAnswer: "Netscape"
  },
  {
    question: "Which operator checks both value and type?",
    options: ["==", "=", "!=", "==="],
    correctAnswer: "==="
  },
  {
    question: "Which method removes the last element of an array?",
    options: ["pop()", "push()", "slice()", "splice()"],
    correctAnswer: "pop()"
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets"
    ],
    correctAnswer: "Cascading Style Sheets"
  },
  {
    question: "Which HTML tag is used to write JavaScript?",
    options: ["<script>", "<js>", "<javascript>", "<code>"],
    correctAnswer: "<script>"
  },
  {
    question: "Which loop runs at least once?",
    options: ["for", "while", "do...while", "foreach"],
    correctAnswer: "do...while"
  },
  {
    question: "Which method selects an element by ID?",
    options: [
      "getElementsByClassName",
      "querySelector",
      "getElementById",
      "getElementsByTagName"
    ],
    correctAnswer: "getElementById"
  },
  {
    question: "Which event occurs when a user clicks an element?",
    options: ["onchange", "onmouseover", "onclick", "onload"],
    correctAnswer: "onclick"
  },
  {
    question: "Which keyword is used to stop a loop?",
    options: ["exit", "stop", "break", "continue"],
    correctAnswer: "break"
  },
  {
    question: "Which array method creates a new array?",
    options: ["splice()", "slice()", "pop()", "push()"],
    correctAnswer: "slice()"
  },
  {
    question: "Which function prints output in the console?",
    options: ["print()", "log()", "console.log()", "write()"],
    correctAnswer: "console.log()"
  },
  {
    question: "Which framework is used for building UI components?",
    options: ["Node.js", "React", "MongoDB", "Express"],
    correctAnswer: "React"
  },
  {
    question: "Which HTML attribute provides extra information about an element?",
    options: ["class", "id", "title", "name"],
    correctAnswer: "title"
  },
  {
    question: "Which keyword is used to declare a constant?",
    options: ["var", "let", "const", "static"],
    correctAnswer: "const"
  },
  {
    question: "Which method converts an object to JSON?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.convert()"],
    correctAnswer: "JSON.stringify()"
  },
  {
    question: "Which tag is used to create a hyperlink?",
    options: ["<a>", "<link>", "<href>", "<url>"],
    correctAnswer: "<a>"
  },
  {
    question: "Which operator is used for logical AND?",
    options: ["||", "&", "&&", "!"],
    correctAnswer: "&&"
  },
  {
    question: "Which JavaScript method joins array elements into a string?",
    options: ["join()", "split()", "concat()", "map()"],
    correctAnswer: "join()"
  },
  {
    question: "Which HTML tag is used to display an image?",
    options: ["<img>", "<image>", "<src>", "<pic>"],
    correctAnswer: "<img>"
  },
  {
    question: "Which function is used to delay execution in JavaScript?",
    options: ["delay()", "timeout()", "setTimeout()", "wait()"],
    correctAnswer: "setTimeout()"
  },
  {
    question: "Which keyword refers to the current object?",
    options: ["self", "this", "object", "current"],
    correctAnswer: "this"
  },
  {
    question: "Which CSS property controls text size?",
    options: ["font-style", "text-size", "font-size", "text-style"],
    correctAnswer: "font-size"
  }
];

// Function to get 5 random questions
function randomQuestion(){
    const data = new Set();
    
    // Use Set for unique objects
    while(data.size != 5){
        const index = Math.floor(Math.random() * quizQuestions.length);
        data.add(quizQuestions[index]);
    }
    // Convert set into an array
    return [...data];
}

// Select the form and insert all the elements into it

const form = document.querySelector("#quizForm");
const problem = randomQuestion();

// Insert randomly selected questions into the form
problem.forEach((obj, index) => {
    const div_element = document.createElement("div");
    div_element.className = "questions";
    
    const para = document.createElement("p");
    para.textContent = `${index + 1}. ${obj["question"]}`;
    
    div_element.appendChild(para);
    
    // Create paragraph options using a forEach loop..
    obj["options"].forEach((data) => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = `q${index + 1}`;
        input.value = data;
        
        label.appendChild(input);
        label.appendChild(document.createTextNode(data));
        div_element.appendChild(label);
        div_element.appendChild(document.createElement("br"));
    });
    form.appendChild(div_element);
});

// Handle form submission and calculate score..
//obj[key] = value

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let score = 0;
    // Compare selected answers with correct answers
    problem.forEach((obj, index) => {
        const selectedOption = document.querySelector(`input[name="q${index + 1}"]:checked`);
        if (selectedOption && selectedOption.value === obj.correctAnswer) {
            score++;
        }
    });
    const resultDiv = document.getElementById('result');
    const percentage = (score / 5) * 100;
    resultDiv.innerHTML = `
        <h2>Quiz Completed!</h2>
        <p>Your Score: <strong>${score} out of 5</strong></p>
        <p>Percentage: <strong>${percentage.toFixed(1)}%</strong></p>
    `;
});