//var aTd = document.querySelectorAll("tr td:nth-of-type(1) a");
var aP = document.querySelectorAll("p code a");
var td = document.querySelectorAll("tr td:nth-of-type(1)");
var count = 0;

for(i=0; i<aP.length; i++) {
	count++;
}

for(i=0; i<td.length; i++) {
	if(!td[i].children[1] || td[i].children[1].children[0].className==="icon-beaker") {
		count++;
	}
}

console.log("Total # of events (contains duplicates): " + count);

//for(i=0; i<aTd.length; i++) {
//	aTd[i].style.color = "pink";
//	aTd[i].style.textDecoration = "line-through";
//}

//for(i=0; i<aP.length; i++) {
//	aP[i].style.color = "pink";
//	aP[i].style.textDecoration = "line-through";
//}

//for(i=0; i<td.length; i++) {
//	if(!td[i].children[1] || td[i].children[1].children[0].className==="icon-beaker") {
//		if(td[i].children[0].tagName==="A") {
//			td[i].children[0].style.color = "pink";
//		} else if(td[i].children[0].children[0].tagName==="A") {
//			td[i].children[0].children[0].style.color = "pink";
//		}
//	}
//}

//for(i=0; i<td.length; i++) {
//	if(td[i].children.length>1) {
//		console.log(i)
//		console.log(td[i].children[0]);
//		console.log(i)
//		console.log(td[i].children[1]);
//	} else {
//		console.log(i)
//		console.log(td[i].children[0]);
//	}
//}
//378
