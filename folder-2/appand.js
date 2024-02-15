// kthai add krbo 
const ulList = document.getElementById('cafe-fruit');
// kon element ta add krbo
const li = document.createElement('li');
li.innerText = ('dim khao boro hou');
// 
ulList.appendChild(li)

// example section creat
const mainContainer = document.getElementById('main-container');
const sectionAdd = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = ('md rakib hasan');
sectionAdd.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = ('kabba');
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = ('biriani');
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = ('rost');
ul.appendChild(li3);

const li4 = document.createElement('li');
li4.innerText = ('dim');
ul.appendChild(li4);
sectionAdd.appendChild(ul);


mainContainer.appendChild(sectionAdd);


// innerHtml------------
const shoppingSection = document.createElement('main-container');
shoppingSection.innerHTML=`
    <h1>tarin rahman</h1>
    <ul>
        <li>wwwwwwwwww</li>
        <li>ttttttttttt</li>
        <li>rrrrrrrrrrrr</li>
    </ul>
`
mainContainer.appendChild(shoppingSection)






