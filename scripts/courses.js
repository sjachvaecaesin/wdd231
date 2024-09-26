const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

const certificates = document.querySelector('#certificates');
const all = document.querySelector('#all');
const cse = document.querySelector('#cse');
const wdd = document.querySelector('#wdd');
const credits = document.querySelector('#credits');
const remaining = document.querySelector('#remaining');

const displayCourses = (courses) => {
    courses.forEach((course) => {
        let div = document.createElement('div');
        div.textContent = `${course.subject} ${course.number}`;

        if (course.completed) {
            div.style.backgroundColor = 'black';
            div.style.color = 'white';
        } else {
            div.style.backgroundColor = 'white';
            div.style.color = 'black';
            div.style.border = '1px solid';
        }

        certificates.appendChild(div);
    })
    credits.textContent = courses.map(course => course.credits).reduce(creds);
};

displayCourses(courses);

const displayCSE = (courses) => {
    let temp = [];
    courses.forEach((course) => {
        if (course.subject == 'CSE') {
            let div = document.createElement('div');
        div.textContent = `${course.subject} ${course.number}`;
            temp.push(course.credits);

        if (course.completed) {
            div.style.backgroundColor = 'black';
            div.style.color = 'white';
        } else {
            div.style.backgroundColor = 'white';
            div.style.color = 'black';
            div.style.border = '1px solid';
        }

        certificates.appendChild(div);
        }
    })
    credits.textContent = temp.reduce(creds);
};

const displayWDD = (courses) => {
    let temp = [];
    courses.forEach((course) => {
        if (course.subject == 'WDD') {
            let div = document.createElement('div');
        div.textContent = `${course.subject} ${course.number}`;
        temp.push(course.credits);

        if (course.completed) {
            div.style.backgroundColor = 'black';
            div.style.color = 'white';
        } else {
            div.style.backgroundColor = 'white';
            div.style.color = 'black';
            div.style.border = '1px solid';
        }

        certificates.appendChild(div);
        }
    })
    credits.textContent = temp.reduce(creds);
};

all.addEventListener('click', () => {
    certificates.innerHTML = '';
    displayCourses(courses);
});
cse.addEventListener('click',  () => {
    certificates.innerHTML = '';
    displayCSE(courses);

});
wdd.addEventListener('click',  () => {
    certificates.innerHTML = '';
    displayWDD(courses);
});

function creds (total, num) {
    return total + num;
};
