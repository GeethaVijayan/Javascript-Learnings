/**
 * call stack: This is where all your javascript code gets pushed and executed
 one by one as the interpreter reads your program, and gets popped out
 once the execution is done.

🚀Heap: This is where all the memory allocation happens for your variables,
 that you have defined in your program.

🚀Callback Queue: This is where your asynchronous code gets pushed to, 
and waits for the execution.

🚀Event Loop: montiors the call back queue and call stack.
when call stack is empty and callback queue is not empty then it
picks one task from queue and push it in the stack.

 */