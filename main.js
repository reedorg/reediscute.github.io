function dateDiff(dateFrom, dateTo) {
    var from = {
        d: dateFrom.getDate(),
        m: dateFrom.getMonth(),
        y: dateFrom.getFullYear()
    };

    var to = {
        d: dateTo.getDate(),
        m: dateTo.getMonth() + 1,
        y: dateTo.getFullYear()
    };
    
    var daysFebruary = to.y % 4 != 0 || (to.y % 100 == 0 && to.y % 400 != 0)? 28 : 29;
    var daysInMonths = [0, 31, daysFebruary, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (to.d < from.d) {
        to.d   += daysInMonths[parseInt(to.m)];
        from.m += 1;
    }
    if (to.m < from.m) {
        to.m   += 12;
        from.y += 1;
    }

    return {
        days:   to.d - from.d,
        months: to.m - from.m,
        years:  to.y - from.y
    };
}  

d1 = new Date(2015,9,20); // change this mate
d2 = new Date();
d3 = dateDiff(d1, d2);

var cuteTexts = ["have been cute gay lumps", "have been gay together", "have been dating", "have been snuggling", "have wanted to hug forever", "have been cute together", "have been each other's second half", "have been hugging tightly", "have been planning to meet", "have been in love"];
// Change that this too, also change the date up
document.getElementById("dateText").textContent = "Arc and Reed " + cuteTexts[Math.floor((Math.random() * cuteTexts.length) + 0)] + " for " + d3.months + " months and " + d3.days + " days.";


var $ = function(s) {
    return document.getElementById(s);
}

// You need to change a lot of shit here, basically copy pasting username and @ name
// Have fun mate :))))
function showDesc(from) {
    var descdiv = $("desc");

    if(descdiv.className == "hidden arc" || descdiv.className == "hidden reed" || descdiv.className == "hidden")
    {
        if(from == "arcAvi") {
            descdiv.className = "shown arc";
            $("reedAvi").setAttribute("style","opacity:0;z-index:3");
            $("descLink").setAttribute("href", "https://twitter.com/arc3tera");
            $("descLink").textContent = "@arc3tera";
            $("bioText").textContent = "@bf1re is my qt fluffball :3 // furry who listens to music, writes code, and steals dinosaurs. normal stuff";
        }
        else
        {
            descdiv.className = "shown reed";
            $("arcAvi").setAttribute("style","opacity:0;z-index:3");
            $("descText").className = "reedText";
            $("descLink").setAttribute("href", "https://twitter.com/bf1re");
            $("descLink").textContent = "@bf1re";
            $("bioText").textContent = "@arc3tera is fluffy :3 // I'm apparently the best Lucario according to arc (previously known as networkednode, and cyn0id)";
        }
        $("descText").setAttribute("style", "");
    }
    else
    {
        if(from == "arcAvi")
            descdiv.className = "hidden arc";
        else
            descdiv.className = "hidden reed";
        
        setTimeout(function(){$("reedAvi").setAttribute("style",""); }, 100);
        setTimeout(function(){$("arcAvi").setAttribute("style",""); }, 100);
        setTimeout(function(){$("descText").className = "";}, 100);
        $("descText").setAttribute("style", "opacity:0");

    }
}
