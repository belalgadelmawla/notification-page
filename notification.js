let ReadMsg = document.querySelectorAll(".read");
let number =document.getElementById("number");
let mark =document.getElementById("mark-all");
number.innerText=ReadMsg.length;

ReadMsg.forEach((message) => {
    message.addEventListener("click",()=> {

        message.classList.remove("read");
        
        let NewMsg =document.querySelectorAll(".read");

        number.innerText=NewMsg.length;
    })
})

mark.addEventListener("click",()=> {
    ReadMsg.forEach((message) => {

    message.classList.remove("read");

    let NewMsg=document.querySelectorAll(".read");

    number.innerText=NewMsg.length;
    })


})



