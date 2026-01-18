//last project quiz different different techniques( in this folder )

// to acheive sorting of an array properly then callback function is required
// arr.sort((a,b) => return)

//How to sort an array in random way??

//random sort honge object yaha.quizquestions is the array of the objects
//nlog(n).

// quizQuestions.sort(()=>{
//     Math.random() - 0.5;
// });
// return quizQuestions.slice(0,5);

//better approach fishe algorithm complexity( O(n) )
//empty array creation..
const arr = [];
let length = quizQuestions.length;

for(let i=0;i<5;i++){

    const index=Math.floor(Math.random()*length);
    arr.push(quizQuestions[index]);

    //swapping operation..
    [quizQuestions[index],quizQuestions[length-1]] = [quizQuestions[length-1],quizQuestions[index]]
    length--;
}
return arr;