const questions = [
    {
        "question": "1. What does DBMS stand for?",
        "options": ["0. Database Management System", "1. Data Base Management Software", "2. Database Maintenance System", "3. Data Management Base System"],
        "answer": 0
    },
    {
        "question": "2. Which of the following is a type of DBMS?",
        "options": ["0. Hierarchical", "1. Network", "2. Relational", "3. All of the above"],
        "answer": 3
    },
    {
        "question": "3. What is a primary key?",
        "options": ["0. A key that can be null", "1. A unique identifier for a record", "2. A key that allows duplicate values", "3. A foreign key"],
        "answer": 1
    },
    {
        "question": "4. Which SQL statement is used to extract data from a database?",
        "options": ["0. GET", "1. SELECT", "2. EXTRACT", "3. PULL"],
        "answer": 1
    },
    {
        "question": "5. What is normalization?",
        "options": ["0. The process of organizing data", "1. The process of backing up data", "2. The process of encrypting data", "3. The process of deleting data"],
        "answer": 0
    },
    {
        "question": "6. What is a foreign key?",
        "options": ["0. A key that can be null", "1. A primary key in another table", "2. A unique identifier for a record", "3. A key used for indexing"],
        "answer": 1
    },
    {
        "question": "7. Which of the following is not a relational database management system?",
        "options": ["0. MySQL", "1. Oracle", "2. MongoDB", "3. PostgreSQL"],
        "answer": 2
    },
    {
        "question": "8. What does SQL stand for?",
        "options": ["0. Structured Query Language", "1. Simple Query Language", "2. Standard Query Language", "3. Secure Query Language"],
        "answer": 0
    },
    {
        "question": "9. What is a database?",
        "options": ["0. A structured collection of data", "1. A collection of unorganized data", "2. A single file of data", "3. A temporary storage area"],
        "answer": 0
    },
    {
        "question": "10. What is a table in a database?",
        "options": ["0. A collection of rows and columns", "1. A type of database", "2. A form of data storage", "3. A method of indexing"],
        "answer": 0
    },
    {
        "question": "11. Which command is used to update data in a database?",
        "options": ["0. UPDATE", "1. MODIFY", "2. EDIT", "3. CHANGE"],
        "answer": 0
    },
    {
        "question": "12. Which of the following is an example of a NoSQL database?",
        "options": ["0. PostgreSQL", "1. SQLite", "2. MongoDB", "3. Microsoft SQL Server"],
        "answer": 2
    },
    {
        "question": "13. What is the purpose of indexing in a database?",
        "options": ["0. To speed up data retrieval", "1. To encrypt data", "2. To back up data", "3. To organize data"],
        "answer": 0
    },
    {
        "question": "14. What is data integrity?",
        "options": ["0. Accuracy and consistency of data", "1. Security of data", "2. Backup of data", "3. Speed of data access"],
        "answer": 0
    },
    {
        "question": "15. What type of relationship exists when one record in a table is associated with many records in another table?",
        "options": ["0. One-to-One", "1. One-to-Many", "2. Many-to-Many", "3. Self-Referencing"],
        "answer": 1
    },
    {
        "question": "16. What does ACID stand for in database systems?",
        "options": ["0. Atomicity, Consistency, Isolation, Durability", "1. Atomicity, Consistency, Indexing, Durability", "2. Atomicity, Change, Isolation, Durability", "3. Atomicity, Consistency, Isolation, Data"],
        "answer": 0
    },
    {
        "question": "17. What is a schema in a database?",
        "options": ["0. Structure of the database", "1. Type of data", "2. Database software", "3. A command in SQL"],
        "answer": 0
    },
    {
        "question": "18. Which SQL clause is used to filter records?",
        "options": ["0. WHERE", "1. FILTER", "2. SELECT", "3. HAVING"],
        "answer": 0
    },
    {
        "question": "19. What is a transaction in DBMS?",
        "options": ["0. A sequence of operations performed as a single logical unit", "1. A backup of the database", "2. A query executed in the database", "3. A type of index"],
        "answer": 0
    },
    {
        "question": "20. What is the main purpose of a database management system?",
        "options": ["0. To manage data", "1. To encrypt data", "2. To speed up queries", "3. To generate reports"],
        "answer": 0
    },
    {
        "question": "21. Which of the following commands is used to delete data from a database?",
        "options": ["0. REMOVE", "1. DELETE", "2. DROP", "3. ERASE"],
        "answer": 1
    },
    {
        "question": "22. What is a join in SQL?",
        "options": ["0. Combining rows from two or more tables", "1. A type of database", "2. A method of indexing", "3. A command in SQL"],
        "answer": 0
    },
    {
        "question": "23. Which SQL keyword is used to retrieve a unique value?",
        "options": ["0. DISTINCT", "1. UNIQUE", "2. DIFFERENT", "3. SINGLE"],
        "answer": 0
    },
    {
        "question": "24. What is a view in SQL?",
        "options": ["0. A virtual table", "1. A physical table", "2. A command to query data", "3. A method of indexing"],
        "answer": 0
    },
    {
        "question": "25. What is data redundancy?",
        "options": ["0. Unnecessary duplication of data", "1. Data backup", "2. Data encryption", "3. Data normalization"],
        "answer": 0
    },
    {
        "question": "26. Which of the following is a DDL command?",
        "options": ["0. SELECT", "1. INSERT", "2. UPDATE", "3. CREATE"],
        "answer": 3
    },
    {
        "question": "27. What is a stored procedure?",
        "options": ["0. A saved SQL query", "1. A type of index", "2. A data backup method", "3. A command to delete data"],
        "answer": 0
    },
    {
        "question": "28. Which of the following describes a many-to-many relationship?",
        "options": ["0. One record in table A is associated with one record in table B", "1. One record in table A is associated with many records in table B", "2. Many records in table A are associated with many records in table B", "3. No relationship"],
        "answer": 2
    },
    {
        "question": "29. What is the purpose of a database index?",
        "options": ["0. To improve query performance", "1. To backup data", "2. To encrypt data", "3. To delete records"],
        "answer": 0
    },
    {
        "question": "30. What is the difference between a clustered and a non-clustered index?",
        "options": ["0. Clustered index sorts and stores data rows", "1. Non-clustered index sorts data in a different structure", "2. Clustered index allows duplicate values", "3. Non-clustered index does not sort"],
        "answer": 0
    },
    {
        "question": "31. What is an entity in database terms?",
        "options": ["0. A real-world object or concept", "1. A type of database", "2. A command in SQL", "3. A table in a database"],
        "answer": 0
    },
    {
        "question": "32. Which of the following is true about a database relationship?",
        "options": ["0. One table can have multiple relationships", "1. One relationship can exist between two tables", "2. A relationship must be many-to-many", "3. All of the above"],
        "answer": 0
    },
    {
        "question": "33. What does the term 'referential integrity' mean?",
        "options": ["0. Maintaining consistent relationships between tables", "1. Allowing duplicate values", "2. Backing up data", "3. Encrypting data"],
        "answer": 0
    },
    {
        "question": "34. Which of the following is not a SQL data type?",
        "options": ["0. INT", "1. STRING", "2. VARCHAR", "3. DATE"],
        "answer": 1
    },
    {
        "question": "35. What is the purpose of the GROUP BY clause?",
        "options": ["0. To group rows sharing a property", "1. To filter records", "2. To sort records", "3. To combine tables"],
        "answer": 0
    },
    {
        "question": "36. What is a trigger in SQL?",
        "options": ["0. A procedure that is automatically executed", "1. A type of index", "2. A command to delete data", "3. A type of database"],
        "answer": 0
    },
    {
        "question": "37. Which of the following is a characteristic of a relational database?",
        "options": ["0. Data is stored in tables", "1. Data is stored in files", "2. Data is stored in a tree structure", "3. Data is not organized"],
        "answer": 0
    },
    {
        "question": "38. What is the SQL command to create a new database?",
        "options": ["0. CREATE DATABASE", "1. NEW DATABASE", "2. MAKE DATABASE", "3. INIT DATABASE"],
        "answer": 0
    },
    {
        "question": "39. What is the purpose of the HAVING clause?",
        "options": ["0. To filter groups based on aggregate functions", "1. To filter records", "2. To sort results", "3. To combine tables"],
        "answer": 0
    },
    {
        "question": "40. What is a subquery?",
        "options": ["0. A query within another query", "1. A type of index", "2. A command to delete data", "3. A method of encryption"],
        "answer": 0
    },
    {
        "question": "41. What is data mining?",
        "options": ["0. The process of discovering patterns in data", "1. The process of backing up data", "2. The process of encrypting data", "3. The process of deleting data"],
        "answer": 0
    },
    {
        "question": "42. Which SQL function is used to count the number of rows?",
        "options": ["0. COUNT()", "1. SUM()", "2. AVERAGE()", "3. TOTAL()"],
        "answer": 0
    },
    {
        "question": "43. What is a data warehouse?",
        "options": ["0. A system for reporting and data analysis", "1. A method of data backup", "2. A type of database", "3. A command in SQL"],
        "answer": 0
    },
    {
        "question": "44. Which of the following is a benefit of using a DBMS?",
        "options": ["0. Improved data security", "1. Increased data redundancy", "2. Decreased data consistency", "3. All of the above"],
        "answer": 0
    },
    {
        "question": "45. What is the purpose of data modeling?",
        "options": ["0. To define data structures", "1. To encrypt data", "2. To delete records", "3. To back up data"],
        "answer": 0
    },
    {
        "question": "46. What does 'data normalization' help to achieve?",
        "options": ["0. Reducing data redundancy", "1. Increasing data duplication", "2. Making data harder to manage", "3. None of the above"],
        "answer": 0
    },
    {
        "question": "47. Which of the following is not a benefit of a DBMS?",
        "options": ["0. Data redundancy", "1. Data consistency", "2. Data security", "3. Data integrity"],
        "answer": 0
    },
    {
        "question": "48. What does OLAP stand for?",
        "options": ["0. Online Analytical Processing", "1. Online Application Processing", "2. Offline Analytical Processing", "3. Offline Application Processing"],
        "answer": 0
    },
    {
        "question": "49. What is the purpose of a data dictionary?",
        "options": ["0. To store metadata", "1. To store data", "2. To encrypt data", "3. To back up data"],
        "answer": 0
    },
    {
        "question": "50. What is the difference between SQL and MySQL?",
        "options": ["0. SQL is a language, MySQL is a database", "1. SQL is a database, MySQL is a language", "2. SQL is a software, MySQL is a system", "3. SQL is a type of DBMS, MySQL is a model"],
        "answer": 0
    },
    {
        "question": "51. What command is used to remove a table from a database?",
        "options": ["0. DROP TABLE", "1. DELETE TABLE", "2. REMOVE TABLE", "3. CLEAR TABLE"],
        "answer": 0
    },
    {
        "question": "52. What does SQL stand for?",
        "options": ["0. Structured Query Language", "1. Simple Query Language", "2. Structured Question Language", "3. Simple Question Language"],
        "answer": 0
    },
    {
        "question": "53. What is an index in SQL?",
        "options": ["0. A performance optimization feature", "1. A type of database", "2. A data backup tool", "3. A command to delete data"],
        "answer": 0
    },
    {
        "question": "54. What is the purpose of the DISTINCT keyword?",
        "options": ["0. To remove duplicate records", "1. To sort records", "2. To combine tables", "3. To filter results"],
        "answer": 0
    },
    {
        "question": "55. Which of the following is a type of JOIN in SQL?",
        "options": ["0. INNER JOIN", "1. OUTER JOIN", "2. LEFT JOIN", "3. All of the above"],
        "answer": 3
    },
    {
        "question": "56. What is the purpose of the LIMIT clause?",
        "options": ["0. To specify the number of records returned", "1. To sort records", "2. To filter records", "3. To combine tables"],
        "answer": 0
    },
    {
        "question": "57. What does the acronym ACID stand for in database management?",
        "options": ["0. Atomicity, Consistency, Isolation, Durability", "1. Allocation, Consistency, Isolation, Delivery", "2. Atomicity, Concurrency, Integrity, Durability", "3. Allocation, Concurrency, Isolation, Delivery"],
        "answer": 0
    },
    {
        "question": "58. What SQL function is used to return the highest value?",
        "options": ["0. MAX()", "1. HIGH()", "2. TOP()", "3. HIGHEST()"],
        "answer": 0
    },
    {
        "question": "59. Which SQL command is used to update existing records?",
        "options": ["0. UPDATE", "1. MODIFY", "2. CHANGE", "3. EDIT"],
        "answer": 0
    },
    {
        "question": "60. What is a primary key?",
        "options": ["0. A unique identifier for a record", "1. A foreign key", "2. A type of index", "3. A command to delete records"],
        "answer": 0
    }

];

let currentQuestionIndex = 0;
let timeLeft = 700;
let timerId;
let mistakes = 0; 

const questionContainer = document.getElementById('question-container');
const timeDisplay = document.getElementById('time');
const resultDisplay = document.getElementById('result');
const popup = document.getElementById('popup');
const popupMessage = document.getElementById('popup-message');
const remainingQuestionsCount = document.getElementById('remaining-questions-count');
const startQuizBtn = document.getElementById('start-quiz-btn');
const quizInfo = document.querySelector('.quiz-info');

function startQuiz() {
    startQuizBtn.style.display = 'none'; 
    quizInfo.style.display = 'block'; 
    updateRemainingQuestions();
    displayQuestion();
    startTimer();
}

function displayQuestion() {
    clearPrevious();
    const currentQuestion = questions[currentQuestionIndex];
    
    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.textContent = currentQuestion.question;
    questionContainer.appendChild(questionElement);
    
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option';
        button.textContent = option;
        button.onclick = () => checkAnswer(index, button);
        questionContainer.appendChild(button);
    });
    questionContainer.style.display = 'block'; 
}

function checkAnswer(selectedIndex, selectedButton) {

    const optionButtons = document.querySelectorAll('.option');
    optionButtons.forEach(button => button.disabled = true);
    
    const currentQuestion = questions[currentQuestionIndex];
    
    if (selectedIndex === currentQuestion.answer) {

        selectedButton.classList.add('correct');
        
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            setTimeout(() => {
                displayQuestion();
                updateRemainingQuestions();
            }, 1000);
        } else {
            endQuiz();
        }
    } else {

        selectedButton.classList.add('incorrect');
   
        mistakes++;
        popupMessage.textContent = "You got it wrong!"; 
        popup.style.display = 'block'; 
        setTimeout(() => {
            selectedButton.classList.remove('incorrect');
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                displayQuestion(); 
                updateRemainingQuestions(); 
            } else {
                endQuiz();
            }
        }, 3000); 
    }
}

function startTimer() {
    timeLeft = 700;
    timeDisplay.textContent = timeLeft;

    timerId = setInterval(() => {
        timeLeft--; 
        timeDisplay.textContent = timeLeft; 

        if (timeLeft <= 0) {
            clearInterval(timerId); 
            endQuiz();
        }
    }, 1000); 
}

function endTimer() {
    clearInterval(timerId);
}

function endQuiz() {
    endTimer();
    resultDisplay.style.display = 'block';
    showCompletionPopup(); 
}

function showCompletionPopup() {
    const completionMessage = `You have completed the quiz! You made ${mistakes} mistakes out of ${questions.length}.`;
    popupMessage.textContent = completionMessage; 
    popup.style.display = 'block'; 
    setTimeout(closePopup, 6000); 
}

function restartQuiz() {
    currentQuestionIndex = 0;
    mistakes = 0; 
    resultDisplay.style.display = 'none';
    clearPrevious();
    startQuiz();
}

function clearPrevious() {
    questionContainer.innerHTML = '';
}

function closePopup() {
    popup.style.display = 'none';
}

function updateRemainingQuestions() {
    remainingQuestionsCount.textContent = questions.length - currentQuestionIndex;
}
