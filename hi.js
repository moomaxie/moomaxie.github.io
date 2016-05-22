function change(){
    if (document.getElementById("pg").style.width != "100%"){
        document.getElementById("pg").style.width="100%";
        document.getElementById("button").value="Go Down";

    } else {
        document.getElementById("pg").style.width="10%";
        document.getElementById("button").value="Go Up";
    }

    return true;
}
function getAmount(){
    return document.getElementById("pg").style.width;
}

function changeModal(){

    var user = getUsername();
    var pass = getPassword();

    document.getElementById("pData").innerHTML = "Username is: " + user + "<br />" + "Password is: " + pass;
}

function changePic(){

    if (document.getElementById("pictureId").src != "Blizzard4.jpg"){
        document.getElementById("pictureId").src = "baxter.jpg";
        document.getElementById("pictureCaption").innerHTML = "This is Baxter, he farts...";
    }

    else {
            document.getElementById("pictureId").src = "Blizzard4.jpg";
            document.getElementById("pictureCaption").innerHTML = "This is a blizzard, kinda like the one we had a few days ago. Is this long enough to test if the text wraps around.";
    }


}

function getUsername() {

    return document.getElementById("username").value;

}

function getPassword() {

    return document.getElementById("password").value;

}

$('#myModal').on('shown.bs.modal', function () {
    changeModal();
    $('#myInput').focus()
  })
