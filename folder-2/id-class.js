//  console.log(section.innerHTML); dile html er jemon formet ase sei akar a dekhabe 
//  console.log(section.innerText); dile tag er vitor er lekha dekhabe 
console.log('start new file work');
const sections=document.querySelectorAll('section');
// console.log(sections);
// styles 
for(const section of sections){
    section.style.border='2px solid tomato';
    section.style.marginBottom='5px';
    section.style.borderRadius='5px';
    section.style.padding='20px';
    section.style.backgroundColor='lightgray';
}

// id diye kono style krte gele ai vabe krte hbe 
const sectionStor=document.getElementById('last-section');
sectionStor.style.backgroundColor='green'
sectionStor.style.borderRadius='50px';

//  id diye kono class add remove korar jonno css file a add krte hbe je class ta akhane add krbo seta
const nameStor=document.getElementById('last-section');
// console.log(nameStor)
nameStor.classList.add('new_design');
// remove
nameStor.classList.remove('old-style')
