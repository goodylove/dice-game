
// decleration
let userName = prompt("Enter your username")
alert("welcome" + " " + userName + "  " + " click ok to start the game")
let dicCont = document.querySelector(".dice-cont");
let congratulation = document.querySelector(".congratulation");
let congrateSms = document.querySelector(".congrates-sms")
let rollBtn = document.querySelector(".rollbtn")
// functionality
let number = ["one", "two", "three", "four", "five", "six", "seven"]
rollBtn.addEventListener("click", function () {
    let randomNum = Math.floor(Math.random() * 6)
    let randNum = Math.floor(Math.random() * 6)
   
    if (randomNum ==5) {
        if (randNum==5) {
            
        
        congrateSms.textContent = " congratulations smarty  you rolled a six!!!!...."
        setTimeout(() => {
            congratulation.style.display = "block"
        }, 100);
    }
    }
    else {
        congratulation.style.display = "none"
    }

    dicCont.textContent = ""
    let di = number[randomNum];
    let de = number[randNum]
    // let si = number[randomNum]
    let dic = document.createElement("i")
    dic.classList.add("dice", "fas", `fa-dice-${di}`);
    let din = document.createElement("i")
    din.classList.add("dice", "fas", `fa-dice-${de}`);

    dicCont.appendChild(dic)
    dicCont.appendChild(din)


})



