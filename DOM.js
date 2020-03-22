function hideBanner() {
    document.getElementById("bannerId").style.visibility = "hidden";
}

function showBanner() {
    document.getElementById("bannerId").style.visibility = "visible";
    document.getElementById("bannerId").innerHTML = "Thank you for contacting us, " + document.getElementById('firstName').value;
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("event").addEventListener("click", myFunction);
    hideBanner();
});

function myFunction() {
    let valid = true;
    let fNameStr = document.getElementById('firstName').value;
    if (fNameStr === null || fNameStr === "" || fNameStr === undefined || fNameStr.length < 2) {
        document.getElementById("firstName").style.borderColor = "red";
        valid = false;
    } else { document.getElementById("firstName").style.borderColor = "white"; }
    console.log(fNameStr);

    let sNameStr = document.getElementById('secondName').value;
    if (sNameStr === null || sNameStr === "" || sNameStr === undefined || sNameStr.lenght < 2) {
        document.getElementById("secondName").style.borderColor = "red";
        valid = false;
    } else { document.getElementById("secondName").style.borderColor = "white"; }
    console.log(sNameStr);

    let ele = document.getElementsByName('gender');
    let nr = 0;
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {

            nr++;
            console.log(ele[i].value);
        }
    }
    if (nr === 0) { valid = false; }

    let descriptionText = document.getElementById('description').value;
    if (descriptionText === null || descriptionText === "") {
        document.getElementById("description").style.borderColor = "red";
        valid = false;
    } else { document.getElementById("description").style.borderColor = "white"; }
    console.log(descriptionText);

    if (valid === true) {
        showBanner();
    } else {
        hideBanner();
    }

}