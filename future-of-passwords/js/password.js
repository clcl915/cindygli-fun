var input = document.getElementById("password");
var enterButton = document.getElementById("enterButton");
var invisible = document.getElementsByClassName("invisible")[0];
var visible = document.getElementsByClassName("visible")[0];
var commonPasswords= ["123456","123456789","password","1234","qwerty","111111","1234567890"]
var guessCount =0;
input.addEventListener("keyup", function(event) {
    if (event.key === 13 || event.key === 'Enter') {
      event.preventDefault();
      enterButton.click();
    }
});
enterButton.addEventListener("click", ()=>{
    for (let i=0;i<commonPasswords.length;i++){
        if (input.value == commonPasswords[i] || guessCount==2){
            console.log("next");
            window.location.href="middle.html";
        }
        else{
          input.value = ''
        }
    }
    console.log(guessCount)
    guessCount++;
});
invisible.addEventListener("click", ()=>{
    if (input.type === "password") {
        invisible.src="assets/visible.png";
        input.type = "text";
      } else {
        invisible.src="assets/invisible.png";
        input.type = "password";
      }
});


