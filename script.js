let frond_end = `<a href="https://mental-math.kanishkarkanish.repl.co/" target="_blank">Mental Math </a>
<a href="https://bmi.kanishkarkanish.repl.co/" target="_blank">BMI Calculator </a>
<a href="https://pomodoro.kanishkarkanish.repl.co/" target="_blank">Pomodoro Timer </a>`;

let javapro = `<a href="https://replit.com/join/ixacscxfpk-kanishkarkanish" target="_blank">Vowels Calculator </a>
<a href="https://replit.com/join/gngekonkmt-kanishkarkanish" target="_blank">unit converter  </a>
<a href="https://replit.com/join/yptwlyduqj-kanishkarkanish" target="_blank">Time table editor </a>`;

let testing = ` <a href="https://workdrive.zohopublic.com/sheet/open/ah1hv003c42724af74bfc8c1882c7cbc548d7" target="-blank">Google blogger</a>
<a href="https://workdrive.zohopublic.com/sheet/open/ah1hv36237cb8f31f4224a17f3794b765e70a" target="_blank">rediff</a>
<a href="https://workdrive.zohopublic.com/sheet/open/ah1hvaec63c7ebf7d47f09450233ef63037b5" target="_blank">Microsoft singup</a>`;
let ide = ` <a href="https://workdrive.zohoexternal.com/file/ah1hvda79162eb497490ba8e0f6f52aaddc8f" target="_blank">Zoho connect</a>
 <a href="https://workdrive.zohoexternal.com/file/ah1hv7d30b2a63b0143558443626d950dc660" target="_blank">Maruthisuziki</a>
 <a href="https://workdrive.zohoexternal.com/file/ah1hv1533614576414bf49866228d48a11b1d" target="_blank">Flipkart </a>
 <a href="https://workdrive.zohoexternal.com/folder/ah1hv6f0db496778e4c51bff4680e97a1ae55"target="_blank" id="viewcode">view code</a>`;
let webdriver = `<a href="https://workdrive.zohoexternal.com/file/ah1hvb786278287634fcebe95938f517a7126" target="_blank">TO Do template  </a>
 <a href="https://workdrive.zohoexternal.com/file/ah1hv61c4ba05d0724cbb94a1bc6cc7eff981" target="_blank">Gmail</a>
 <a href="https://workdrive.zohoexternal.com/file/ah1hv48fd99d91ea4452ea176db0f3c3d3b12" target="_blank">meesho</a>
 <a href="https://workdrive.zohoexternal.com/folder/ah1hv6f0db496778e4c51bff4680e97a1ae55"target="_blank" id="viewcode">view code</a> `;
let testng = `<a href="https://workdrive.zohoexternal.com/file/pcwoa007bf6a95ffb479b87db98dd84bcb385" target="_blank">TestNg-Game</a>
 <a href="https://workdrive.zohoexternal.com/file/letcocbaf06a60ca14054b4146e70a99b9c79">Youtube-Filter</a>
  <a href="https://workdrive.zohoexternal.com/file/72y107ef890c593a3461c8d790b95412ad1b9" target="_blank">Railyatri</a>
 <a href="https://workdrive.zohoexternal.com/folder/ah1hv6f0db496778e4c51bff4680e97a1ae55"target="_blank" id="viewcode">view code</a> `;

function showcon(val) {
  if (val == 1) {
    document.querySelector(".worklist").innerHTML = frond_end;
    document.querySelector("#diswork").style.display = "block";
    document.querySelector(".body").style.display = "none";

  }
  else if (val == 2) {
    document.querySelector(".worklist").innerHTML = javapro;
    document.querySelector("#diswork").style.display = "block";
    document.querySelector(".body").style.display = "none";
  }
  else if (val == 3) {
    document.querySelector(".worklist").innerHTML = testing;
    document.querySelector("#diswork").style.display = "block";
    document.querySelector(".body").style.display = "none";
  }
  else if (val == 4) {
    document.querySelector(".worklist").innerHTML = ide;
    document.querySelector("#diswork").style.display = "block";
    document.querySelector(".body").style.display = "none";
  }
  else if (val == 5) {
    document.querySelector(".worklist").innerHTML = webdriver;
    document.querySelector("#diswork").style.display = "block";
    document.querySelector(".body").style.display = "none";
  }
  else {
    document.querySelector(".worklist").innerHTML = testng;
    document.querySelector("#diswork").style.display = "block";
    document.querySelector(".body").style.display = "none";
  }
}
function closediv() {
  document.querySelector("#diswork").style.display = "none";
  document.querySelector(".body").style.display = "block";
}
