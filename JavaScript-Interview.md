---- ## ⚛️ Java Script
### 1. What is JavaScript?
JavaScript is a high-level, dynamic, untyped, and interpreted programming language. It is primarily used for creating interactive and dynamic web content. JavaScript is an essential part of web development,
enabling developers to implement complex features on web pages, such as interactive forms, animations, and real-time updates.

### 2. Is JavaScript a compiled or interpreted language?
JavaScript is primarily an interpreted language, meaning that it is executed line by line at runtime.
However, modern JavaScript engines (like V8 in Chrome) use Just-In-Time (JIT) compilation to improve performance by compiling frequently executed code into machine code at runtime.

### 3. What are the data types in JavaScript?
JavaScript has several data types, including:
- **Primitive Types**:
  - **Number**: Represents both integer and floating-point numbers.
  - **String**: Represents sequences of characters.
  - **Boolean**: Represents true or false values.
  - **Undefined**: Represents a variable that has been declared but not assigned a value.
  - **Null**: Represents the intentional absence of any object value.
  - **Symbol**: Represents a unique and immutable value, often used as object property keys.
  - **BigInt**: Represents integers with arbitrary precision.
- **Reference Types**:
  - **Object**: A collection of key-value pairs, where keys are strings (orSymbols) and values can be of any type.
  - **Array**: A special type of object used to store ordered collections of values.
  - **Function**: A callable object that can be invoked to perform actions or compute values.
  - 
### 4. What is the difference between `==` and `===` in JavaScript?
The `==` operator performs type coercion, meaning it converts the operands to the same type before making the comparison. The `===` operator, on the other hand, checks for both value and type equality without performing type coercion. 
Therefore, `===` is generally preferred for strict equality checks.

### 5. Is JavaScript is synchronous or asynchronous? 
IMP: **JavaScript is a single-threaded and primarily synchronous programming language.**
JavaScript is primarily a synchronous language, meaning that code execution happens in a single thread, one line at a time.
However, it supports asynchronous programming through mechanisms like callbacks, promises, and async/await. 
This allows developers to perform non-blocking operations, such as fetching data from a server or reading files, without freezing the main thread.

