const {marking, marked, checkPaper} = require(`./office`)

let students = [
    {name:'kelvin', paper:true},
    {name:'tom', paper:true},
    {name:'marco', paper:false},
    {name:'ahn', paper:true},
    {name:'leanne', paper:true},
    {name:'heather', paper:true},
    {name:'arvin', paper:true},
    {name:'ikenna', paper:true}
];

function mark(student){
    console.log("start marking now")

    marking().then(
        r => console.log(`${student.name} got a mark of ${r}`)
    ).catch(
        e => console.log(`${student.name} ${e.message}`)
    )
    
}

for(s of students){
    checkPaper(s);
    mark(s);
}

module.exports = {students}
