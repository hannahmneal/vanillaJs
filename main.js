let containerRef = document.querySelector("#container");
console.log(containerRef);
// containerRef.innerHTML = `<h1 class="xx-large">Marcus Fulbright'</h1>`

    //If we want to add another student, rather than doing this whole thing again:

// containerRef.innerHTML += `<h1 class="xx-large">Morley Bankston</h1>`
// containerRefRef.innerHTML = containerRef.innerHTML + `<h1 class="xx-large">Morley Bankston</h1>`

    // The following is even better:

const h1 = () => {
    return `<h1 class="xx-large">Marcus Fulbright</h1>`;
}

// We want the function to be flexible enough to addd studnets with names besides "marcus fulbright":

// const h1 = () => {
//     return `<h1 class="xx-large">Marcus Fulbright</h1>`;
// }
//Add this below function:
containerRef.innerHTML = `${h1("Marcus Fulbright")}`;
//If we want to call the function again with Morley:
containerRef.innerHTML = `${h1("Morley Bankston")}`;


//If we wanted to change the class from xx-large to something else but keep the same code,

// const h1 = (title, style) => {
//     return `<h1 class="${style}">${title}/h1>`;
// }


//Now we want to add two more functions, one that creates a section and one that creates an aside:

const section = (title, style) => {
    return `<section class="bordered dashed ${style}">${title}</section>`
}

const aside = (title, style) => {
    return `<aside class="${style}">${title}</aside>`
}

//For each student, we call a function which states the name, class, etc., and uses string interpolation.
//Within the interpolation are three more functions which creates different sections with different classes.

const student = (name, className, info) => `        
    <div id="student">
        ${h1(name, "xx-large")}
        ${section(className, "section--padded")}
        ${aside(info, "pushRight")}
    </div>
`
//  (If your function has one line, you do not need curly brackets)

containerRef.innerHTML = student("Marcus Fulbright", "Algebra", "Not a bright student")
//By calling this function, you are getting a div with an h1, section and aside that are dynamic enough to populate with whatever you want for classes.

//You still have to type this multiple times, so the best thing to do is write a loop:
//Write a loop that calls a function for each student:
const students = [
    {
        name: "Chris Miller",
        class: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        class: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        class: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        class: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        class: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        class: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        class: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        class: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        class: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        class: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        class: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        class: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

// loop through array of students; each student is represented by an object


for(let i=0; i < students.length; i++) {
console.log(students[1]);
}

// //If you only want to access the name of the student and call the function, how would you do that?

// for(let i=0; i < students.length; i++) {
//     student(students[i].name, students.[i].class, students[i].info);
//     }

//In order to append the above code to the DOM:

// for(let i=0; i < students.length; i++) {
//     containerRef.innerHTML += student(students[i].name, students.[i].class, students[i].info);
//     }

//          **************              *******************                 *************


//  //Part two of example:
// const h1 = () => {
//       // return `<h1 class="xx-large">Marcus Fulbright</h1>`; The code below is doing what this line originally did in part 1
// const h1Element = document.createElement('h1');
// h1Element.textContent = title;
// h1Element.classList.add(style);
// return h1Element;        <-- At this point the function is returning a DOM component or element itself; we cannot mix HTML and elements created in this way; to use this, we have to change containerRef.innerHTML (from line 152) to containerRef.appendChild (line 168)
//}

// for (let i=0; i < students.length; i++) {
//     containerRef.appendChild(student(students[i].name, etc.));
// }


//See lines 38-39; They are the functions that create the DOM components. In order to use the new code, we must append them with the following info:

// const section (title, style) => {
//     const sectionElement = document.createElement("section");
//     sectionElement.textContent = title;     <-- You must add these two sections
//     sectionElement.classList.add(style);    <-- for each new HTML component
//     return sectionElement
// }