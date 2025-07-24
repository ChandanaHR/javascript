//html file
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1 id="demo1">Chandana</h1>
    <div class="demo2">
        <h2>Asha</h1>
        <h2>Ravi</h1>
        <h2>Krishna</h1>
    </div>
    <h2>Ammu</h2>
    <div class = "demo3">First</div>
    <div class = "demo3">Second</div>
</body>
<script src = "dom.js"></script>
</html>

//js
let elem = document.getElementById("demo1");
console.log(elem.textContent);

let elem1 = document.getElementsByClassName("demo2")
console.log(elem1[0].textContent)

let elem2 = document.getElementsByTagName("h2")
console.log(elem2[0].textContent)

let elem3 = document.querySelector(".demo3")
console.log(elem3.textContent)

let elem4 = document.querySelectorAll(".demo3")
elem4.forEach((ele)=>console.log(ele.textContent))
