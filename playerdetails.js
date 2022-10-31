let urlData = location.href;
let newUrl = new URL(urlData);
let playerUrl = newUrl.searchParams.get("name");
console.log(playerUrl);

// geting data from local storage
playersdetails = JSON.parse(localStorage.getItem("Player"));

let playerData = document.getElementById("player-details-con");
let data=playersdetails.map((ele)=> {
  if (ele.playerName == playerUrl) {
    var playingOrN = "";
    if (ele.isPlaying == true) {
      playingOrN = "Playing";
    } else {
      playingOrN = "On Bench";
    }
    playerData.innerHTML += `

        <div id="player_detail-img">
        <img src="${ele.playerImg}" alt="">
    </div>
        <div id="new-player-det">
        <table>
        <tr>
            <td>Player Name  </td>
            <td>${ele.playerName}  </td>
        </tr>
    <table>
        <tr>
            <td> Team Name </td>
            <td> ${ele.playerTeam}  </td>
        </tr>
    <table>
        <tr>
            <td> Team Code </td>
            <td>${ele.from}   </td>
        </tr>
    <table>
        <tr>
            <td> Worth </td>
            <td>${ele.price}  </td>
        </tr>
    <table>
        <tr>
            <td> Is playing </td>
            <td> ${playingOrN} </td>
        </tr>
    </table>
    </div>
    
        `;
  }
})
