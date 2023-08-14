// javascript engine - program that executes javascript code. ex - v8 engine in chrome and node.js (all the other web browsers have their own engines)

// js engine contains 2 main components:
// 1. heap - where objects are allocated in memory
// 2. call stack - where our code is executed using something called execution contexts

// comiplation vs interpretation
// compilation - entire code is converted into machine code at once, and written to a binary file that can be executed by a computer
// interpretation - interpreter runs through the source code and executes it line by line. no compilation step. interpreter needs to parse the code and run it immediately

// javascript engine uses both compilation and interpretation called just-in-time compilation. it compiles the entire code first, and then immediately executes it line by line

// javascript runtime 
// - javascript engine + web apis + callback queue + event loop