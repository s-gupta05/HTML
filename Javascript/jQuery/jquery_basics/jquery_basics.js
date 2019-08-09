//All divs - purple bg
$("div").css("backgroundColor", "purple");

//divs with class highlight - 200px width
$("div.highlight").css("width", "200px");

//divs with class third - orange border
$("#third").css("border", "2px solid orange");

//first div - pink font color
$("div:first-of-type").css("color", "pink");
//$("div:first").css("color", "pink"); --both are correct. This is jQuery shortcut; and is slower than the actual built-in css selector