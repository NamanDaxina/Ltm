let chart;

const proposals={
zoo:{title:"Zoo Plan",data:[49,3,95],labels:["Transport","Entry","Food"],total:147},
indroda:{title:"Indroda Park",data:[18,10,105],labels:["Transport","Entry+Bus","Food"],total:133},
science:{title:"Science City",data:[25,70,55],labels:["Transport+Entry","--","Food"],total:150}
};

function loadProposal(type){
let p=proposals[type];

document.getElementById("title").innerText=p.title;
document.getElementById("details").innerHTML=
`Transport: ₹${p.data[0]} <br>
Entry: ₹${p.data[1]} <br>
Food: ₹${p.data[2]}`;

document.getElementById("total").innerText="Total: ₹"+p.total;

if(p.total<150){
document.getElementById("status").innerText="Within Budget ✅";
document.getElementById("status").style.color="#00ff88";
}else{
document.getElementById("status").innerText="Maximum Budget Used ⚠";
document.getElementById("status").style.color="#ffcc00";
}

renderChart(p.labels,p.data);
}

function renderChart(labels,data){
if(chart) chart.destroy();
chart=new Chart(document.getElementById("budgetChart"),{
type:"doughnut",
data:{
labels:labels,
datasets:[{data:data}]
},
options:{
plugins:{legend:{labels:{color:"white"}}}
}
});
}

function toggleTheme(){
document.body.classList.toggle("light");
}

function startPresentation(){
document.body.requestFullscreen();
}

/* Particle Background */
tsParticles.load("particles",{
particles:{
number:{value:60},
size:{value:3},
move:{speed:1},
links:{enable:true}
}
});
