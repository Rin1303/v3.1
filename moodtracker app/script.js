const msgBtn = document.querySelector(".msg-btn");
console.log(msgBtn);

msgBtn.addEventListener("click", function(){
    const pg2 = document.querySelector(".pg2");
    pg2.style.display = "block";
})

const saveBtn = document.querySelector(".save-btn");
console.log(saveBtn)

saveBtn.addEventListener("click", function(e){
    e.preventDefault();
    const pg2 = document.querySelector(".pg2");
    pg2.style.display = "none";
})

// const msg = document.querySelector(".msg");
// const msgTitle = document.querySelector(".msg-title");
// const msgTime = document.querySelector(".msg-time");
// const msgDescription = document.querySelector(".msg-description");
// const msgRating = document.querySelector(".msg-rating");

const msg = document.createElement("div");
msg.classList.add("msg");

const msgTitle = document.createElement("h4");
msgTitle.classList.add("msg-title");
msgTitle.appendChild(msg);

const msgTime = document.createElement("div");
msgTime.classList.add("msg-time");
msgTime.appendChild(msg);

const msgDesc = document.createElement("p");
msgDesc.classList.add("msg-description");
msgDesc.appendChild(msg);

const msgRating = document.createElement("div");
msgRating.classList.add("msg-rating");
msgRating.appendChild(msg);

// const msgtitle = document.createElement("h4"); laver et h4 tag
// document.createTextNode(); skriver noget text i h4 tagget som fx; Hej (siger google anyways)
// msgtitle.appendChild(txt); sætter h4 taggen ind i et andet element
// msgtitle.classList.add("msg-title"); giver h4 tagget en classe
// console.log(msgtitle);