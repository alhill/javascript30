function setTime(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();
    
    moveHands(hours, minutes, seconds);
}

function moveHands(h,m,s){
    console.log(h + ":" + m + ":" + s);
    h_hand = document.getElementById("hours");
    m_hand = document.getElementById("minutes");
    s_hand = document.getElementById("seconds");
    
    if(h>=12){h-=12;} 
    
    h_angle = ((h/12)*360)-90;
    m_angle = ((((60*h)+m)/60)*360)-90;
    s_angle = ((((60*m)+s)/60)*360)-90;
    
    h_hand.style.transform = "rotate("+h_angle+"deg)";
    m_hand.style.transform = "rotate("+m_angle+"deg)";
    s_hand.style.transform = "rotate("+s_angle+"deg)";
    
}


setInterval(setTime, 1000);