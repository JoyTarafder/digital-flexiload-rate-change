function rateChange(){
    var rate = parseInt(document.getElementById("rate").value);
    document.getElementById("rate_val").innerText = rate + ((rate * 0.03) + 7);
}

function commission(){
    var buyOffer = parseInt(document.getElementById("buyDriveRate").value);
    var selectRatePack = parseInt(document.getElementById("selectRate").value);
    var commission = (selectRatePack - ( buyOffer + (( buyOffer * 0.03) + 7))).toFixed(2) ;
    document.getElementById("commission").innerText = commission;
    document.getElementById("appRate").innerText = buyOffer + (( buyOffer * 0.03) + 7);
}