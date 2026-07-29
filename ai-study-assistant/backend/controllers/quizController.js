import Quiz from '../models/Quiz.js';

// Local question bank
const questionBank = {
  "Java": {
    "Easy": [
      { question: "Which keyword is used for inheritance in Java?", options: ["implements", "extends", "inherit", "super"], correctAnswer: "extends" },
      { question: "What is the size of int variable in Java?", options: ["8 bit", "16 bit", "32 bit", "64 bit"], correctAnswer: "32 bit" },
      { question: "Which statement is true about Java?", options: ["Java is a sequence-dependent programming language", "Java is a code dependent programming language", "Java is a platform-dependent programming language", "Java is a platform-independent programming language"], correctAnswer: "Java is a platform-independent programming language" },
      { question: "What is the extension of java code files?", options: [".js", ".txt", ".class", ".java"], correctAnswer: ".java" },
      { question: "Who invented Java Programming?", options: ["Guido van Rossum", "James Gosling", "Dennis Ritchie", "Bjarne Stroustrup"], correctAnswer: "James Gosling" },
      { question: "Which component is used to compile, debug and execute the java programs?", options: ["JRE", "JIT", "JDK", "JVM"], correctAnswer: "JDK" },
      { question: "Which of the following is not an OOPS concept in Java?", options: ["Polymorphism", "Inheritance", "Compilation", "Encapsulation"], correctAnswer: "Compilation" },
      { question: "What is the extension of compiled java classes?", options: [".txt", ".js", ".class", ".java"], correctAnswer: ".class" },
      { question: "Which exception is thrown when java is out of memory?", options: ["MemoryError", "OutOfMemoryError", "MemoryOutOfBoundsException", "MemoryFullException"], correctAnswer: "OutOfMemoryError" },
      { question: "Which of these are selection statements in Java?", options: ["break", "continue", "for()", "if()"], correctAnswer: "if()" }
    ],
    "Medium": [
      { question: "What is the return type of the hashCode() method in the Object class?", options: ["Object", "int", "long", "void"], correctAnswer: "int" },
      { question: "Which of the following is a valid long literal?", options: ["ABH", "L990023", "904423", "0xnf029L"], correctAnswer: "0xnf029L" },
      { question: "What does the expression float a = 35 / 0 return?", options: ["0", "Not a Number", "Infinity", "Run time exception"], correctAnswer: "Run time exception" },
      { question: "Which package contains the Random class?", options: ["java.util package", "java.lang package", "java.awt package", "java.io package"], correctAnswer: "java.util package" },
      { question: "Which of the following is a superclass of every class in Java?", options: ["ArrayList", "Abstract class", "Object class", "String"], correctAnswer: "Object class" },
      { question: "Which of the following is used to find and fix bugs in the Java programs?", options: ["JVM", "JRE", "JDK", "JDB"], correctAnswer: "JDB" },
      { question: "What is the default value of a local variable?", options: ["null", "0", "Depends on type", "Not assigned"], correctAnswer: "Not assigned" },
      { question: "Which method of the Class.class is used to determine the name of a class represented by the class object as a String?", options: ["getClass()", "intern()", "getName()", "toString()"], correctAnswer: "getName()" },
      { question: "In which process, a local variable has the same name as one of the instance variables?", options: ["Serialization", "Variable Shadowing", "Abstraction", "Multi-threading"], correctAnswer: "Variable Shadowing" },
      { question: "Which of the following is true about the anonymous inner class?", options: ["It has only methods", "Objects can't be created", "It has a fixed class name", "It has no class name"], correctAnswer: "It has no class name" }
    ],
    "Hard": [
      { question: "Which concept of Java is a way of converting abstract logic into concrete physical logic?", options: ["Data Binding", "Information Hiding", "Abstraction", "Encapsulation"], correctAnswer: "Encapsulation" },
      { question: "What happens if a thread calls a sleep() method?", options: ["It releases the lock", "It terminates", "It keeps the lock", "It goes to waiting state indefinitely"], correctAnswer: "It keeps the lock" },
      { question: "Which design pattern is used by the Java IO classes?", options: ["Factory", "Decorator", "Observer", "Singleton"], correctAnswer: "Decorator" },
      { question: "What is the purpose of the 'volatile' keyword in Java?", options: ["To prevent a variable from being modified", "To guarantee thread-safe execution", "To indicate that a variable's value will be modified by different threads", "To optimize garbage collection"], correctAnswer: "To indicate that a variable's value will be modified by different threads" },
      { question: "How does Java handle 'diamond problem' in multiple inheritance?", options: ["By using abstract classes", "Java does not support multiple inheritance with classes", "By using the 'super' keyword", "By overriding methods"], correctAnswer: "Java does not support multiple inheritance with classes" },
      { question: "Which of the following is true regarding Java garbage collection?", options: ["It guarantees that memory will never be exhausted", "It can be forced using System.gc()", "It runs asynchronously in a separate thread", "It only destroys objects with no references"], correctAnswer: "It only destroys objects with no references" },
      { question: "What is the time complexity of the HashSet.contains() method?", options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"], correctAnswer: "O(1)" },
      { question: "Which class loader loads the core Java API classes?", options: ["Bootstrap ClassLoader", "Extension ClassLoader", "System ClassLoader", "Custom ClassLoader"], correctAnswer: "Bootstrap ClassLoader" },
      { question: "What is a characteristic of a ThreadLocal variable?", options: ["It is shared across all threads", "It is synchronized automatically", "Each thread has its own independent initialized copy", "It is destroyed when the main thread ends"], correctAnswer: "Each thread has its own independent initialized copy" },
      { question: "Which interface in java.util concurrent does not extend Collection?", options: ["BlockingQueue", "TransferQueue", "ConcurrentMap", "NavigableSet"], correctAnswer: "ConcurrentMap" }
    ]
  },
  "Python": {
    "Easy": [
      { question: "What is the maximum possible length of an identifier in Python?", options: ["16", "32", "64", "None of these"], correctAnswer: "None of these" },
      { question: "Who developed the Python language?", options: ["Zim Den", "Guido van Rossum", "Niene Stom", "Wick van Rossum"], correctAnswer: "Guido van Rossum" },
      { question: "In which year was the Python language developed?", options: ["1995", "1972", "1981", "1989"], correctAnswer: "1989" },
      { question: "In which language is Python written?", options: ["English", "PHP", "C", "All of the above"], correctAnswer: "C" },
      { question: "Which one of the following is the correct extension of the Python file?", options: [".py", ".python", ".p", ".None of these"], correctAnswer: ".py" },
      { question: "What do we use to define a block of code in Python language?", options: ["Key", "Brackets", "Indentation", "None of these"], correctAnswer: "Indentation" },
      { question: "Which character is used in Python to make a single line comment?", options: ["/", "//", "#", "!"], correctAnswer: "#" },
      { question: "Which of the following declarations is incorrect?", options: ["_x = 2", "__x = 3", "__xyz__ = 5", "None of these"], correctAnswer: "None of these" },
      { question: "Why does the name of local variables start with an underscore discouraged?", options: ["To identify the variable", "It confuses the interpreter", "It indicates a private variable of a class", "None of these"], correctAnswer: "It indicates a private variable of a class" },
      { question: "Which of the following is not a keyword in Python language?", options: ["val", "raise", "try", "with"], correctAnswer: "val" }
    ],
    "Medium": [
      { question: "Which of the following functions is a built-in function in python language?", options: ["val()", "print()", "print()", "None of these"], correctAnswer: "print()" },
      { question: "What will be the output of the following expression: 4 + 3 % 5", options: ["7", "2", "4", "1"], correctAnswer: "7" },
      { question: "Which of the following is a mutable data type?", options: ["Tuple", "String", "List", "Integer"], correctAnswer: "List" },
      { question: "How to copy a list in Python?", options: ["list.copy()", "list_copy()", "copy(list)", "list[:]"], correctAnswer: "list.copy()" },
      { question: "What is the output of 'hello'[::-1]?", options: ["hello", "olleh", "o", "error"], correctAnswer: "olleh" },
      { question: "Which function is used to get the length of a list in Python?", options: ["length()", "len()", "size()", "count()"], correctAnswer: "len()" },
      { question: "What is a lambda function in Python?", options: ["A function with no name", "A recursive function", "A built-in function", "A generator function"], correctAnswer: "A function with no name" },
      { question: "Which module in Python supports regular expressions?", options: ["re", "regex", "pyregex", "reg"], correctAnswer: "re" },
      { question: "What does the 'pass' statement do in Python?", options: ["Terminates the program", "Skips the current iteration", "Does nothing", "Returns a value"], correctAnswer: "Does nothing" },
      { question: "Which exception is raised when a dictionary key is not found?", options: ["KeyError", "IndexError", "ValueError", "NameError"], correctAnswer: "KeyError" }
    ],
    "Hard": [
      { question: "What is the Global Interpreter Lock (GIL) in Python?", options: ["A lock that prevents multiple threads from executing Python bytecodes at once", "A tool for memory management", "A feature that allows multi-processing", "A global variable lock"], correctAnswer: "A lock that prevents multiple threads from executing Python bytecodes at once" },
      { question: "What is a generator in Python?", options: ["A function that returns a list", "A function that uses 'yield' instead of 'return'", "A class that generates objects", "A built-in module for iteration"], correctAnswer: "A function that uses 'yield' instead of 'return'" },
      { question: "What are Python metaclasses?", options: ["Classes that inherit from multiple classes", "Classes that define the behavior of other classes", "Abstract classes", "Classes used for decoration"], correctAnswer: "Classes that define the behavior of other classes" },
      { question: "How is memory managed in Python?", options: ["Manual allocation and deallocation", "Garbage collection using reference counting", "No memory management", "Stack allocation only"], correctAnswer: "Garbage collection using reference counting" },
      { question: "What is monkey patching in Python?", options: ["Fixing bugs quickly", "Dynamic modifications of a class or module at runtime", "Testing a program randomly", "Writing code using a specific IDE"], correctAnswer: "Dynamic modifications of a class or module at runtime" },
      { question: "Which design pattern is implemented by the 'yield' keyword?", options: ["Singleton", "Observer", "Iterator", "Factory"], correctAnswer: "Iterator" },
      { question: "What is the purpose of the '__slots__' attribute?", options: ["To define methods", "To restrict the dynamic creation of attributes and save memory", "To allow multiple inheritance", "To handle exceptions"], correctAnswer: "To restrict the dynamic creation of attributes and save memory" },
      { question: "What does the 'functools.lru_cache' decorator do?", options: ["Optimizes loops", "Caches the return values of a function based on arguments", "Prevents memory leaks", "Manages database connections"], correctAnswer: "Caches the return values of a function based on arguments" },
      { question: "In Python, what is the 'MRO'?", options: ["Memory Resolution Order", "Method Resolution Order", "Multiple Reference Object", "Module Resolution Order"], correctAnswer: "Method Resolution Order" },
      { question: "Which of the following is true about Python's 'asyncio'?", options: ["It uses true multithreading", "It allows running code concurrently using a single thread via an event loop", "It is only for web scraping", "It bypasses the GIL completely"], correctAnswer: "It allows running code concurrently using a single thread via an event loop" }
    ]
  },
  "JavaScript": {
    "Easy": [
      { question: "Inside which HTML element do we put the JavaScript?", options: ["<js>", "<scripting>", "<script>", "<javascript>"], correctAnswer: "<script>" },
      { question: "Where is the correct place to insert a JavaScript?", options: ["The <body> section", "The <head> section", "Both the <head> section and the <body> section are correct", "None of the above"], correctAnswer: "Both the <head> section and the <body> section are correct" },
      { question: "What is the correct syntax for referring to an external script called 'xxx.js'?", options: ["<script href='xxx.js'>", "<script name='xxx.js'>", "<script src='xxx.js'>", "<script file='xxx.js'>"], correctAnswer: "<script src='xxx.js'>" },
      { question: "The external JavaScript file must contain the <script> tag.", options: ["True", "False", "Depends on the browser", "None"], correctAnswer: "False" },
      { question: "How do you write 'Hello World' in an alert box?", options: ["msg('Hello World');", "alertBox('Hello World');", "msgBox('Hello World');", "alert('Hello World');"], correctAnswer: "alert('Hello World');" },
      { question: "How do you create a function in JavaScript?", options: ["function = myFunction()", "function myFunction()", "function:myFunction()", "create myFunction()"], correctAnswer: "function myFunction()" },
      { question: "How do you call a function named 'myFunction'?", options: ["call function myFunction()", "call myFunction()", "myFunction()", "execute myFunction()"], correctAnswer: "myFunction()" },
      { question: "How to write an IF statement in JavaScript?", options: ["if i = 5 then", "if i == 5 then", "if (i == 5)", "if i = 5"], correctAnswer: "if (i == 5)" },
      { question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?", options: ["if (i != 5)", "if i <> 5", "if i =! 5 then", "if (i <> 5)"], correctAnswer: "if (i != 5)" },
      { question: "How does a WHILE loop start?", options: ["while i = 1 to 10", "while (i <= 10; i++)", "while (i <= 10)", "while i <= 10"], correctAnswer: "while (i <= 10)" }
    ],
    "Medium": [
      { question: "What is a closure in JavaScript?", options: ["A closed browser window", "A function that has access to the outer function's scope", "An object that contains only private variables", "A way to end a script"], correctAnswer: "A function that has access to the outer function's scope" },
      { question: "What does the 'typeof' operator do?", options: ["Returns the type of a variable", "Creates a new type", "Checks if two types match", "Converts a variable to a string"], correctAnswer: "Returns the type of a variable" },
      { question: "Which method is used to serialize an object into a JSON string?", options: ["JSON.parse()", "JSON.stringify()", "JSON.serialize()", "JSON.toString()"], correctAnswer: "JSON.stringify()" },
      { question: "What is event bubbling?", options: ["When an event starts from the deepest element and propagates outwards", "When an event starts from the outermost element and propagates inwards", "When an event fires continuously", "When an event is prevented from executing"], correctAnswer: "When an event starts from the deepest element and propagates outwards" },
      { question: "What is the difference between '==' and '==='?", options: ["'==' compares value and type, '===' compares only value", "'==' compares only value, '===' compares value and type", "They are exactly the same", "'===' is used for strings only"], correctAnswer: "'==' compares only value, '===' compares value and type" },
      { question: "Which keyword is used to declare block-scoped variables?", options: ["var", "let", "function", "global"], correctAnswer: "let" },
      { question: "What does the 'this' keyword refer to?", options: ["The current function", "The global object", "The object that owns the executing code", "The parent object"], correctAnswer: "The object that owns the executing code" },
      { question: "How do you add an element to the end of an array?", options: ["push()", "pop()", "shift()", "unshift()"], correctAnswer: "push()" },
      { question: "What is a Promise in JavaScript?", options: ["A guarantee that a function will run", "An object representing the eventual completion or failure of an asynchronous operation", "A way to define variables", "A synchronous loop"], correctAnswer: "An object representing the eventual completion or failure of an asynchronous operation" },
      { question: "Which array method creates a new array populated with the results of calling a provided function on every element?", options: ["forEach()", "filter()", "map()", "reduce()"], correctAnswer: "map()" }
    ],
    "Hard": [
      { question: "What is the event loop in JavaScript?", options: ["A loop that repeats indefinitely", "A mechanism that handles asynchronous callbacks", "A way to iterate over objects", "A built-in animation library"], correctAnswer: "A mechanism that handles asynchronous callbacks" },
      { question: "What is the output of `console.log(typeof null)`?", options: ["null", "undefined", "object", "string"], correctAnswer: "object" },
      { question: "What is 'hoisting'?", options: ["Lifting an element to the top of the DOM", "JavaScript's default behavior of moving declarations to the top", "Creating a higher-order function", "Minifying JavaScript code"], correctAnswer: "JavaScript's default behavior of moving declarations to the top" },
      { question: "What does the `bind()` method do?", options: ["Executes a function immediately", "Creates a new function that, when called, has its `this` keyword set to the provided value", "Attaches an event listener", "Binds two variables together"], correctAnswer: "Creates a new function that, when called, has its `this` keyword set to the provided value" },
      { question: "How does Prototypal Inheritance work?", options: ["By using the `extends` keyword", "Objects inherit properties and methods directly from other objects", "Through interfaces and abstract classes", "By importing classes"], correctAnswer: "Objects inherit properties and methods directly from other objects" },
      { question: "What is the output of `0.1 + 0.2 === 0.3`?", options: ["true", "false", "undefined", "NaN"], correctAnswer: "false" },
      { question: "What is the difference between `call()` and `apply()`?", options: ["`call` takes arguments as an array, `apply` takes them separately", "`call` takes arguments separately, `apply` takes them as an array", "There is no difference", "`call` is synchronous, `apply` is asynchronous"], correctAnswer: "`call` takes arguments separately, `apply` takes them as an array" },
      { question: "What is a Symbol in ES6?", options: ["A primitive data type used as a unique identifier", "A special character string", "An icon in the browser", "A reserved keyword"], correctAnswer: "A primitive data type used as a unique identifier" },
      { question: "What is memoization?", options: ["Memorizing syntax", "An optimization technique to store the results of expensive function calls", "A way to log errors", "Allocating memory manually"], correctAnswer: "An optimization technique to store the results of expensive function calls" },
      { question: "What does `Object.freeze()` do?", options: ["Prevents new properties from being added, existing properties from being removed or modified", "Stops the event loop", "Freezes the UI", "Makes an object available globally"], correctAnswer: "Prevents new properties from being added, existing properties from being removed or modified" }
    ]
  }
};

const getRandomQuestions = (questionsArray, num) => {
  const shuffled = [...questionsArray].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};

export const generateQuiz = async (req, res) => {
  try {
    const { topic, difficulty, numberOfQuestions } = req.body;

    if (!topic || !difficulty || !numberOfQuestions) {
      return res.status(400).json({ error: "Please provide topic, difficulty, and numberOfQuestions" });
    }

    const num = parseInt(numberOfQuestions, 10);

    let selectedQuestions = [];

    // Check if topic exists in local bank
    let searchTopic = topic.trim();
    
    // Simple mapping for capitalization
    const availableTopics = Object.keys(questionBank);
    const matchedTopic = availableTopics.find(t => t.toLowerCase() === searchTopic.toLowerCase());

    if (matchedTopic && questionBank[matchedTopic][difficulty]) {
      selectedQuestions = getRandomQuestions(questionBank[matchedTopic][difficulty], num);
    } else {
      // Fallback if topic or difficulty not found
      selectedQuestions = getRandomQuestions(questionBank["JavaScript"]["Easy"], num);
      searchTopic = "Fallback: JavaScript";
    }

    // Attempt to save to MongoDB, but don't fail if DB is unavailable
    try {
      const quiz = new Quiz({
        topic: matchedTopic || searchTopic,
        difficulty,
        questions: selectedQuestions
      });
      await quiz.save();
    } catch (dbError) {
      console.error("MongoDB save error (Continuing without DB):", dbError.message);
    }

    res.status(200).json({
      topic: matchedTopic || searchTopic,
      difficulty,
      questions: selectedQuestions
    });

  } catch (error) {
    console.error("Error generating quiz:", error);
    res.status(500).json({ error: "Failed to generate quiz" });
  }
};
