# Sprint Challenge: JavaScript Fundamentals

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a survey of problems. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied variables, functions, object literals, arrays, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in JavaScript fundamentals.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your project manager.

## Description

You will notice there are several JavaScript files being brought into the index.html file.  Each of those files contain JavaScript problems you need to solve.  If you get stuck on something, skip over it and come back to it later.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager

1. Describe the biggest difference between `.forEach` & `.map`.
* `.forEach` executes a function on each element in a provided array but does not produce a new array (think of it as running a For Loop on an array), whereas `.map`which can execute a function each element in a provided array will produce a new array.*

2. What is the difference between a function and a method?
*A method is a function that is a property of or associated with an object.* 

3. What is closure?
*Closure is a combination of a function and its lexical environment, lexical environment defined as where the function was declared.*

4. Describe the four rules of the 'this' keyword.
*The four main rules of the `this` keyword are 1) window/global 2)explicit binding 3) implicit binding 4) `new` binding.*
*1) Window/global binding is the sort of the default `this`; in the global scope, `this` is the window object.*
*2) Explicit binding is when `this` is defined explicitly explictly with `.call` `bind`, and `.apply`*
*3) Implicit binding is simply where `this` is what is to the left of the dot. In other words, when a function is called and to the left of the function there is a dot, whatever is left of the dot is `this`.*
*4) `new` binding is what happens when a constructor function is called; `this` refers to the new instance of the object created by the constructor function*;

5. Why do we need super() in an extended class?
*`super()` is used to connect the extended class (specifically in the constructor) to the parent class that the extended class is extended. It allows us to connect to the parent class constructor and also use parent class methods*

## Project Set up

Follow these steps to set up and work on your project:

- [X] Create a forked copy of this project.
- [X] Add PM as collaborator on Github.
- [X] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [X] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [X] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
- [X] You are now ready to build this project with your preferred IDE
- [X] Implement the project on your Branch, committing changes regularly.
- [X] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project:

- [X] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your Project Manager as a Reviewer on the Pull-request
- [ ] PM then will count the HW as done by  merging the branch back into master.


## Minimum Viable Product

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

## Task 1: Objects and Arrays
Test your knowledge of objects and arrays. 
* [X] Use the [objects-arrays.js](challenges/objects-arrays.js) link to get started.  Read the instructions carefully!

## Task 2: Functions
This challenge takes a look at callbacks and closures as well as scope. 
* [X] Use the [functions.js](challenges/functions.js) link to get started. Read the instructions carefully!

## Task 3: Prototypes
Create constructors, bind methods, and create cuboids in this prototypes challenge.
* [X] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

## Task 4: Classes
Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.
* [X] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Stretch Problems

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!


## Sprint/B Week Reflections (Also Inputed on Airtable):

### Pull Request Link:
[https://github.com/arturolei/Sprint-Challenge--JavaScript/pull/1] (https://github.com/arturolei/Sprint-Challenge--JavaScript/pull/1) 

### What Went Well
I feel comfortable using `class` for elementary uses (still need to get around to static methods)

### What COuld Be better:
I personally would have liked more time spent on hoisting and the nature "strict" mode (especially with regard to `class`)


### Instructor Comments:
Great job, I love the review sessions toward the end of each module.

### What Else Should We KNow:
I've stated this before, and this might be an edge case, but for the question, "On a scale of 1-10, how likely are you to recommend Lambda School to a friend or colleague?", if one's colleagues/social circle already includes software engineers/web developers and/or persons who might not prefer the Lambda School remote learning approach, I'd give a rather low rating to this question. Maybe revise this question to say "On a scale of 1-10, how likely are you to recommend Lambda School to a friend or colleague who would be interested in learning software engineering/web development and would prefer a flexible remote solution?" Also maybe include N/A
