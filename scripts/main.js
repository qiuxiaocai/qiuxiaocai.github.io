let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
// myHeading.style.color = 'red'
document.querySelector("img").addEventListener("click", function () {
    // alert("别戳我，我怕疼。");
  });

let myImage = document.querySelector("img")
let imgFunc = function() {
    let mysrc = myImage.getAttribute("src")
    if (mysrc === "images/ailiao@2x.png") {
        myImage.setAttribute("src", "images/phone@2x.png")
    } else {
        myImage.setAttribute("src", "images/ailiao@2x.png")
    }
}
myImage.onclick = imgFunc

/// 通过id获取node元素
let myButton = document.getElementById("changeUser")
myButton.onclick = function() {
    setUserName()
}

function setUserName() {
    let myName = prompt("请输入你的名字")
    if (myName.length > 0) {
        localStorage.setItem("name", myName)
        myHeading.textContent = "哈喽" + myName
    }
}

if (!localStorage.getItem("name")) {
    setUserName()
} else {
    let storedName = localStorage.getItem("name")
    myHeading.textContent = "你好" + storedName
}