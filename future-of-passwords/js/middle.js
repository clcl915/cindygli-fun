var commonPasswords= ["123456","123456789","12345","qwerty","password"];
var stats=["103,170,552","46,027,530","32,955,431","22,317,280","20,958,297"];
var i=0;
function changeText(){
    document.getElementsByClassName("headline")[0].innerHTML = commonPasswords[i];
    document.getElementsByClassName("headline")[0].setAttribute("title", commonPasswords[i]);
    document.getElementsByClassName("headline")[1].innerHTML = stats[i];
    document.getElementsByClassName("headline")[1].setAttribute("title", stats[i]);
    if(i < ( commonPasswords.length - 1 ) ){       
      i++;
    }else{
      i = 0;
    } 
}
setInterval(changeText, 2000);
changeText();

new fullpage("#fullpage",{
    autoScrolling:true,
    navigation:true
})