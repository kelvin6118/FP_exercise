const marking = () => new Promise(marked);

let check = true;

function checkPaper(student){
    if(student.paper === false){
        return check = false;
    }else{
        return check = true;
    }
}

function marked(res, rej){
    console.log(`marking student`);
    
    if(check === true){
        setTimeout(() => {
            console.log('"marked!"')
            res(Math.random() * (100 - 50) + 50);
        }, 3000)
    }else{
        const error = { message: "you haven't summited a paper" };
        rej(error);
    }
}

module.exports = {marked,marking,checkPaper}
