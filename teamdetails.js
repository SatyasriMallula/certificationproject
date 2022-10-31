let urlData = location.href;
let newUrl = new URL(urlData);
let teamFull = newUrl.searchParams.get("name");


 console.log(teamFull)


// geting data from local storage

teamsDetails = JSON.parse(localStorage.getItem("Teams"));
playersDetails = JSON.parse(localStorage.getItem("Player"));
console.log(playersDetails)
var container=document.getElementById("teamdetails_container")
var tableTeam=document.getElementById("table-team")

var cnt=0;
    
let data=playersDetails.map((ele)=>{
if(teamFull==ele.from){
  var isPlay=""
  if(ele.isPlaying==true){
    isPlay="Playing"
  }
  else{
    isPlay="On Bench"
  }
cnt++
let player=document.createElement("div")
player.classList.add("minibox")
container.append(player)
let pimg=document.createElement("img")
pimg.classList.add("mainimage")
pimg.src=ele.playerImg
player.append(pimg)
let dataofcard=document.createElement("div")
dataofcard.classList.add("dataodcard")
player.append(dataofcard)
let p1=document.createElement("p")
player.classList.add("text1")
p1.innerHTML=ele.playerName
dataofcard.append(p1)
let p2=document.createElement("p")
player.classList.add("text2")
p2.innerHTML=ele.price
dataofcard.append(p2)
let p3=document.createElement("p")
player.classList.add("text3")
p3.innerHTML=isPlay
dataofcard.append(p3)
let p4=document.createElement("p")
player.classList.add("text4")
p4.innerHTML=ele.description
dataofcard.append(p4)
player.addEventListener("click",()=>{
  window.open(`./playerdetals.html?name=${ele.playerName}`,"_self")
})
}
})

// teamMainBox.innerHTML+=`
// <div    onclick="makethisinclick('${currentP}')"    class="minibox mn2">

// <img src="${ele.playerImg}" class="mainimage" alt=""/> 
// <div class="dataodcard">

//   <p class="text1"> ${ele.playerName}   </p>
//   <p class="text2"> Worth : ${ele.price} </p>
//   <p class="text2"> Playing : ${isPlay} </p>
//   <p class="text2">
//    ${ele.description} </p>
 
// </div>

// </div>

// `}
// (res){
//   window.open(`./playerDetails.html?name=${res}`,"_self")
// }

// })
// search for top batsman
var topBatsman=""
for(var j=0;j<playersDetails.length;j++){
  if(playersDetails[j].description=="Batsman"&&playersDetails[j].from==teamFull){
   topBatsman=playersDetails[j].playerName

   break
  }
  else{
   topBatsman="No Player"
  }
}
// search for top bowler
var topBowler=""
for(var j=0;j<playersDetails.length;j++){
  if(playersDetails[j].description=="Bowler"&&playersDetails[j].from==teamFull){
   topBowler=playersDetails[j].playerName

   break
  }
  else{
   topBowler="No Player"
  }
}


// team table
teamsDetails.map((item)=>{
  if(teamFull==item.sName){

 
 return tableTeam.innerHTML+=`
 <table>
 <tr>
     <td>Team name</td>
     <td>${item.teamFullName}</td>
 </tr>

 <tr>
     <td>Team icon</td>
     <td> <img src="${item.teamIcon}" class="team-page-icon" alt=""></td>
 </tr>

 <tr>
     <td>Player count</td>
     <td>  ${cnt}</td>
 </tr>

 <tr>
     <td>Top Batsman</td>
     <td>${topBatsman}</td>
 </tr>
 <tr>
     <td>Top Bowler</td>
     <td>${topBowler}</td>
 </tr>

 <tr>
     <td>Won Count</td>
     <td>${item.WonCount}</td>
 </tr>
</table>

`
}

})


