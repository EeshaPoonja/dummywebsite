
let diva1=[];
var items=[{img:'img1',text:'rs 101'},{img:'img2',text:'rs 103'},
         {img:'img3',text:'rs 30'},{img:'img4',text:'rs 30'}]
/*const diva = document.createElement("div");
diva.style.display="block";
const node1= document.createElement("img");
node1.src="./assets/Captssure.PNG"

diva.appendChild(node1);
const node = document.createElement("li");
const textnode = document.createTextNode("Water");
const bnode=document.createElement("button");
const btextnode = document.createTextNode("ADD TO KART");
bnode.appendChild(btextnode);
diva.appendChild(bnode);
node.appendChild(textnode);
diva.appendChild(node);
*/
// Use querySelector to select the first element with the class "bc"
const container = document.querySelector(".img-con");

for(i=0;i<items.length;i++){
    for(j=0;j<2;j++){
    diva1[i] = document.createElement("div");
    const node1= document.createElement("img"); 
    node1.src="./assets/shop/"+items[i].img+".png";  
    node1.style.height='30vh';
    node1.style.width='20vw';
    diva1[i].appendChild(node1);
    const bnode=document.createElement("button");
    const btextnode = document.createTextNode("ADD TO KART");
    bnode.appendChild(btextnode);
    const textnode = document.createTextNode(items[i].text);
    diva1[i].appendChild(textnode);
    diva1[i].appendChild(bnode);
    container.appendChild(diva1[i]);
  
    }
    

}
