
$(document).ready( function() {

    // First we'll make an instance of two.js and place it on the page.
    // Let's create a variable to hold the location of our 'doodle' div, that's where we'll
    // place our two,js instance.
    var elem = document.getElementById('doodle');
    
    // Then we create a new two.js instance with this function. There's a bunch of details we
    // could input here, but for now we're just using 'fullscree: true' to make our drawing space
    // the full size of our screen.
    var two = new Two({fullscreen: true}).appendTo(elem);
    
    // Let's make a position variable to help us out as we draw
    // This is a two.js 'Vector'. It's simply a point on the screen,
    // we're setting this one to the center of the screen. 
    var position = new Two.Vector(two.width/2, two.height/2);
    
    
    // two.js has convenience methods to create common shapes.
    // Notice how we get the x and y values of our center two.vactor variable to place the circle
    // in the center of the page. The last number is the radius of the circle we'll draw.
    var head = two.makeCircle(position.x, position.y, 100);
    // The object (in this case the circle) returned has many stylable properties:
    // Let's give it a blue color
    head.fill = '#52C5DC';
    // And tell two.js not to draw a stroke
    head.noStroke();
    
    // Let's make the rest of our puppy the same way as the head:
    var nose = two.makeCircle(position.x, position.y+30, 32);
    nose.fill = '#EFB8D2';
    nose.noStroke();
    
    var eyeRight = two.makeCircle(position.x-42, position.y-26, 32);
    eyeRight.fill = '#FFFFFF';
    eyeRight.noStroke();
    
    var pupilRight = two.makeCircle(position.x-42, position.y-26, 20);
    pupilRight.fill = '#7FC35E';
    pupilRight.noStroke();
    
    var eyeLeft = two.makeCircle(position.x+42, position.y-26, 32);
    eyeLeft.fill = '#FFFFFF';
    eyeLeft.noStroke();

    var pupilLeft = two.makeCircle(position.x+42, position.y-26, 20);
    pupilLeft.fill = '#7FC35E';
    pupilLeft.noStroke();
    
    var earLeft = two.makeEllipse(position.x-100, position.y-80, 26, 46);
    earLeft.fill = '#52C5DC';
    earLeft.noStroke();
    // Here's comes a new property we need. Rotation is defined in Radians, which are a little weird, but
    // easy to work with. Try dividing MATH.PI or -MATH.PI by different numbers to see what happens.
    earLeft.rotation = Math.PI / 4; // this gives about a 45 degree rotation.
    
    var earRight = two.makeEllipse(position.x+100, position.y-80, 26, 46);
    earRight.fill = '#52C5DC';
    earRight.noStroke();
 
    earRight.rotation = -Math.PI / 4;
    
    
    // Since there's no convenience method for a half ellipse shape we'll have to draw
    // the tongue a bit differently.
    // You can read more about two.makePolygon at the two.js site, but we're basically
    // telling two every point in the shape we want to draw, in order. 
    var tongue = two.makePolygon(0,0,  100,0,  100,0,  90,58,  50,80,  10,58,  0,0);
    // Now we need to tell two.js to make it a curved shape (so we don't have a square tongue!)
    tongue.curved = true;
    // Then color it a nice red, with no stroke. 
    tongue.fill = '#EE3E36';
    tongue.noStroke();
    // Notice we didn't use our center variable when we drew the points.
    // With .translation we can shift our tongue to the right spot on the page.
    tongue.translation.x = position.x-40;
    tongue.translation.y = position.y+86;
    // Let's scale it down 40% too
    tongue.scale = 0.4;
    // Add a little rotation, just like the ears. 
    tongue.rotation = Math.PI / 5;

    // After we've told two.js everything we want to draw we need to
    // remind it to update. It's a pretty simple function call:
    two.update();
    
});