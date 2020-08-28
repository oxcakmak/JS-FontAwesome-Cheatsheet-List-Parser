/*
Author: Osman Çakmak
Skype: oxcakmak
Email: oxcakmak@hotmail.com
Website: http://oxcakmak.com/
Country: Turkey [TR]
*/
var icons = document.getElementsByClassName('col-print-4');
var iconsCount = icons.length;
for(var i = 0; i<iconsCount;i++){
    var spt = icons[i].innerText.split(" ");
    console.log(spt[1]);
}
