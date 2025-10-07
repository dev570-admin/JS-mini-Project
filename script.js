
var rect=   document.querySelector("#center");
rect.addEventListener( 'mousemove',function(detail) {

 var rectangleLocation = rect.getBoundingClientRect();// to get the size of the rectangle and its position relative to the viewport
var insiderectVal = detail.clientX -rectangleLocation.left;
 

if(insiderectVal < rectangleLocation.width/2){

    // change the background color of the rectangle to red
    gsap.to(rect, { backgroundColor: "red", duration: 0.3 });
    console.log("left side");

}else{

    // change the background color of the rectangle to blue
    gsap.to(rect, { backgroundColor: "blue", duration: 0.3 });
    console.log("right side");

}

} );
 // Optional: Reset to grey when mouse leaves
    rect.addEventListener('mouseleave', function() {
      gsap.to(rect, { backgroundColor: "white", duration: 0.3 });
    });