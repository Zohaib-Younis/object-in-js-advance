// Object ->referance datatype -> gives original values when need to change a value -> dinamic nature


// const course = {
//     lecture:10,
//     section:3,
//     title:"javascript",
//     //nesting object
//     notes:{
//         introduction:"welcome to js course"
//     },
//     //function method
//     enroll (){
//         console.log("You are successfully enroll");  
//     }
// }
// course.enroll();
// console.log(course);
// console.log(course.notes);
// console.log(course.section);
// console.log(course.enroll);

// We can add any property in course object outside the object 
// course.price=5000;
// course.rating=`4.5 out of 5`;


//factory function
function createCourse(){
    return {
        lecture:10,
        section:3,
        title:"javascript",
        //nesting object
        notes:{
            introduction:"welcome to js course"
        },
        //function method
        enroll (){
            console.log("You are successfully enroll");  
        }
    }
}
const course=createCourse();
course.enroll();

//constractor function
function Course(title){
    this.title=title,
    this.enroll=function(){
        console.log("You are successfully enroll");    
    }
}

const coourse = new Course(`javascript`);
// Delete keyword
delete coourse.title;

coourse.enroll();
console.log(coourse.title);    //output will be undefined

//To create now function
coourse.checkEnrolment = function(){
    console.log("30 users are enrolled");
}
console.log(coourse.checkEnrolment);