var sciboy = 0;

function wasClicked () {
    sciboy++;
    if (sciboy == 5) {
        document.getElementById("sciguybutton").src = "sciguy9f.png";
    }
    if (sciboy == 10) {
        document.getElementById("sciguybutton").src = "sciguy9.png";
    }
    if (sciboy == 20) {
        document.getElementById("sciguybutton").src = "sciguy9f.png";
    }
    if (sciboy == 30) {
        document.getElementById("sciguybutton").src = "sciguy9.png";
    }
    if (sciboy == 40) {
        alert("Ahh thanks. Found a note that reads 'ek9z3'. That should help you out.");
    }
};

function submitUser() {
    var userValue = document.getElementById("idValue").value;
    var userInfoTitle = document.getElementById("userInfoTitle");
    var userInfo = document.getElementById("userInfo");
    if (userValue == 1) {
        userInfoTitle.innerText = "User Information";
        userInfo.innerText = "This scientist was found to be a double agent. In his possession was a note that reads: \n 'TO ACCESS THE NECESSARY LOCATION AND MOVE 1 STEP CLOSER TO RESCUING THE KAIJUZ, YOU NEED TO ENTER A HIDDEN CODE INTO THE URL AS A SUBDIRECTORY. 5 CODES 5 POSSIBLE SOLUTIONS.'";
    } else if (userValue == 2) {
        userInfoTitle.innerText = "User Information";
        userInfo.innerText = "This scientist has lodged a complaint against the user information access page: \n ‘The user information access page is extremely poorly constructed. It feels like it was designed by someone from our marketing team, who has no web development experience. They even failed to follow the most basic opsec. I found a secret code just sitting in the html of this website. If someone found that, it could be disastrous.‘";
    } else if (userValue == 3) {
        userInfoTitle.innerText = "User Information";
        userInfo.innerText = "The following remark from this scientist has been recorded: \n ‘I’m the number 1 Scientist!’";
    } else if (userValue == 4) {
        userInfoTitle.innerText = "User Information";
        userInfo.innerText = "This scientist seems normal. No suspicious activity to report.";
    } else if (userValue == 5) {
        userInfoTitle.innerText = "User Information";
        userInfo.innerText = "The following remark from this scientist has been recorded: \n ‘I’m the number 3 Scientist!’";
    } else if (userValue == 6) {
        userInfoTitle.innerText = "User Information";
        userInfo.innerText = "This scientist seems to be slacking in their work. Please reprimand and require a 25% increase in productivity during the next quarterly meeting.";
    } else if (userValue == 7) {
        userInfoTitle.innerText = "User Information";
        userInfo.innerText = "The following remark from this scientist has been recorded: \n ‘I’m the number 2 Scientist!’";
    } else if (userValue == 8) {
        userInfoTitle.innerText = "User Information";
        userInfo.innerText = "The following remark from this scientist has been recorded: \n ‘I’m the number 4 Scientist!’";
    } else if (userValue == 9) {
        userInfoTitle.innerText = "User Information";
        userInfo.innerText = "This scientist is in desperate need of a back scratch. \n Can't somebody give him a hand...";
    } else if (userValue == 10) {
        userInfoTitle.innerText = "User Information";
        userInfo.innerText = "This scientist refuses to assist his colleague, Number 9, leaving his colleague vulnerable.";
    } else if (userValue == 11) {
        userInfoTitle.innerText = "User Information";
        userInfo.innerText = "This scientist has requested an inspection of their colleagues numbered 3, 5, 7, and 8. He is curious as to their ordering its relevance in the on the scientist user information access page.";
    } else if (userValue == 12) {
        userInfoTitle.innerText = "User Information";
        userInfo.innerText = "This scientist is highly suspicious. \n He may require immediate inspection of properties.";
    } else if (userValue == 13) {
        userInfoTitle.innerText = "User Information";
        userInfo.innerText = "This scientist took a walk.";
    } else if (userValue == 14) {
        userInfoTitle.innerText = "User Information";
        userInfo.innerText = "This scientist is in Poland.";
    } else if (userValue == 15) {
        userInfoTitle.innerText = "User Information";
        userInfo.innerText = "scientist behavior seems to be somewhat abnormal. he frequents the restroom much too often. number 15 does not drink any company provided coffee. 1st thing in the morning he smells radioactive waste. finally, he leaves this strange note: \n ‘The key is in my user information report. The 5 characters are found as the 1st…’ ";
    } else if (userValue == 16) {
        userInfoTitle.innerText = "User Information";
        userInfo.innerText = "Let it be known that this lab saves the best for last. Scientist 16’s performance has always been outstanding. No suspicious behavior to report.";
    } else if (userValue == 3758) {
        userInfoTitle.innerText = "User Information";
        userInfo.innerText = "Missing Scientist Note Discovered: \n 'nz5cm'";
    } else {
        userInfoTitle.innerText = "ERROR";
        userInfo.innerText = "";
    }
};