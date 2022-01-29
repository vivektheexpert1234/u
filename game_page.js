player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
document.getElementById("player1name").innerHTML=player1_name+":";
document.getElementById("player2name").innerHTML=player2_name+":";
player1_score=0
player2_score=0
document.getElementById("player1score").innerHTML=player1_score;
document.getElementById("player2score").innerHTML=player2_score;
document.getElementById("questionturn").innerHTML="questionturn="+player1_name
document.getElementById("awnserturn").innerHTML="awnserturn="+player2_name
function send()
{
    getword=document.getElementById("word").value
    word=getword.toLowerCase()
    console.log(word)
    c1=word.charAt(1)
    console.log(c1)
    lengthdivideby2=Math.floor(word.length/2)
    c2=word.charAt(lengthdivideby2)
    lengthminus1=word.length-1
    c3=word.charAt(lengthminus1)
    console.log(c3)
    remove1=word.replace(c1,"_")
    remove2=remove1.replace(c2,"_")
    remove3=remove2.replace(c3,"_")
    console.log(remove3)
    q="<h4>Q. "+remove3+"</h4> <br>"
    input="<input id='input' ><br><br>"
    button="<button class='btn btn-info' id='checkbutton' onclick='check()'>check</button>"
    row=q+input+button
    document.getElementById("output").innerHTML=row
    document.getElementById("word").value=""
}
questionturn="player1"
awnserturn="player2"
function check()
{
    getawnser=document.getElementById("input").value
    awnser=getawnser.toLowerCase()
    console.log(awnser)
    if (awnser==word) {
        if (awnserturn=="player1") {
            player1_score=player1_score+1
            document.getElementById("player1score").innerHTML=player1_score
        } else {
            player2_score=player2_score+1
            document.getElementById("player2score").innerHTML=player2_score
        }
    }
    if (questionturn=="player1") {
        questionturn="player2"
        document.getElementById("questionturn").innerHTML="Questionturn="+ player2_name
    } else {
        questionturn="player1"
        document.getElementById("questionturn").innerHTML="Questionturn="+ player1_name
    }
    if (awnserturn=="player1") {
        awnserturn="player2"
        document.getElementById("awnserturn").innerHTML="Answerturn="+ player2_name
    } else {
        awnserturn="player1"
        document.getElementById("awnserturn").innerHTML="Answerturn="+ player1_name
    }
    document.getElementById("output").innerHTML=""
}

