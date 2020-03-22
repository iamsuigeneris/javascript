// This is the javascript task1
// call the function with different courses to the program.

const name = "lanre irewole"
const evenCourses = ['html','css','javascript','nodejs']
const oddCourses = ['html','css','javascript','nodejs','python']

console.log(`my name is ${name} my courses are: ${courses}`)

const numbers = courses => {
    let even = 0;
    let odd = 1;
        for(let i = 1;i <= 200;i++){
            if(courses.length % 2 === 0){
                even = i+=1;
                console.log(even)
            }else{
                if(courses.length % 2 !== 0){
                    console.log(odd)
                    odd = odd += 2                
                }
            }
        }
    }

numbers(evenCourses)
numbers(oddCourses)

