let readmore = document.getElementById('readmore');
let extrapara = document.getElementById('extrapara');
readmore.onclick = (e) =>{
    e.preventDefault();
if(extrapara.style.display==='none'){
    extrapara.style.display= 'inline';
    readmore.textContent = 'Read Less'
}
else{
   extrapara.style.display= 'none';
    readmore.textContent = 'Read More' 
}
}
let readMore = document.getElementById('readMore');
let extraPara = document.getElementById('extraPara');
readMore.onclick = (e) =>{
    e.preventDefault();
if(extraPara.style.display==='none'){
    extraPara.style.display= 'inline';
    readMore.textContent = 'Read Less'
}
else{
   extraPara.style.display= 'none';
    readMore.textContent = 'Read More' 
}
}
let ReadMore = document.getElementById('ReadMore');
let ExtraPara = document.getElementById('ExtraPara');
ReadMore.onclick = (e) =>{
    e.preventDefault();
if(ExtraPara.style.display==='none'){
    ExtraPara.style.display= 'inline';
    ReadMore.textContent = 'Read Less'
}
else{
   ExtraPara.style.display= 'none';
   ReadMore.textContent = 'Read More' 
}
}
let removeBtn = document.getElementById('removeBtn');
let sideImage = document.getElementById('sideImage');
removeBtn.addEventListener('click', function () {
  sideImage.style.display = 'none';
});
let RemoveBtn = document.getElementById('RemoveBtn');
let SideImage = document.getElementById('SideImage');
RemoveBtn.addEventListener('click', function () {
  SideImage.style.display = 'none';
});
