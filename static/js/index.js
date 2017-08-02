
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
    var position = new Two.Vector(150, 150);
    
    
    // two.js has convenience methods to create common shapes.
    // Notice how we get the x and y values of our center two.vactor variable to place the circle
    // in the center of the page. The last number is the radius of the circle we'll draw.
    var head = two.makeCircle(position.x, position.y, 100);
    // The object (in this case the circle) returned has many stylable properties:
    // Let's give it a blue color
    head.fill = 'darkolivegreen';
    // And tell two.js not to draw a stroke
    head.noStroke();
    
    // Let's make the rest of our puppy the same way as the head:
    var nose = two.makeCircle(position.x, position.y+30, 32);
    nose.fill = 'slategrey';
    nose.noStroke();
    
    var eyeRight = two.makeCircle(position.x-42, position.y-26, 32);
    eyeRight.fill = 'red';
    eyeRight.noStroke();
    
    var pupilRight = two.makeCircle(position.x-42, position.y-26, 20);
    pupilRight.fill = 'black';
    pupilRight.noStroke();
    
    var middleLine = two.makeCircle(position.x, position.y-26, 12);
    middleLine.fill = 'red';
    middleLine.noStroke();

    var eyeLeft = two.makeCircle(position.x+42, position.y-26, 32);
    eyeLeft.fill = 'red';
    eyeLeft.noStroke();

    var pupilLeft = two.makeCircle(position.x+42, position.y-26, 20);
    pupilLeft.fill = 'black';
    pupilLeft.noStroke();
    
    var earLeft = two.makeEllipse(position.x-100, position.y-80, 26, 46);
    earLeft.fill = 'darkolivegreen';
    earLeft.noStroke();
    // Here's comes a new property we need. Rotation is defined in Radians, which are a little weird, but
    // easy to work with. Try dividing MATH.PI or -MATH.PI by different numbers to see what happens.
    earLeft.rotation = Math.PI / 1; // this gives about a 45 degree rotation.
    
    var earRight = two.makeEllipse(position.x+100, position.y-80, 26, 46);
    earRight.fill = 'darkolivegreen';
    earRight.noStroke();
 
    earRight.rotation = -Math.PI / 2;
    
    
    // Since there's no convenience method for a half ellipse shape we'll have to draw
    // the tongue a bit differently.
    // You can read more about two.makePolygon at the two.js site, but we're basically
    // telling two every point in the shape we want to draw, in order. 
    var tongue = two.makePolygon(0,0,  100,0,  100,0,  90,58,  50,80,  10,58,  0,0);
    // Now we need to tell two.js to make it a curved shape (so we don't have a square tongue!)
    tongue.curved = true;
    // Then color it a nice red, with no stroke. 
    tongue.fill = 'brown';
    tongue.noStroke();
    // Notice we didn't use our center variable when we drew the points.
    // With .translation we can shift our tongue to the right spot on the page.
    tongue.translation.x = position.x-40;
    tongue.translation.y = position.y+86;
    // Let's scale it down 40% too
    tongue.scale = 0.5;
    // Add a little rotation, just like the ears. 
    tongue.rotation = Math.PI / 5;

    // After we've told two.js everything we want to draw we need to
    // remind it to update. It's a pretty simple function call:
    two.update();


    // second dog

     // Then we create a new four.js instance with this function. There's a bunch of details we
    // could input here, but for now we're just using 'fullscree: true' to make our drawing space
    // the full size of our screen.
    var four = new Two({fullscreen: true}).appendTo(elem);
    
    // Let's make a position variable to help us out as we draw
    // This is a four.js 'Vector'. It's simply a point on the screen,
    // we're setting this one to the center of the screen. 
    var position = new Two.Vector(400, 300);
    
    
    // four.js has convenience methods to create common shapes.
    // Notice how we get the x and y values of our center four.vactor variable to place the circle
    // in the center of the page. The last number is the radius of the circle we'll draw.
    var head = four.makeCircle(position.x, position.y, 100);
    // The object (in this case the circle) returned has many stylable properties:
    // Let's give it a blue color
    head.fill = 'sienna';
    // And tell four.js not to draw a stroke
    head.noStroke();
    
    // Let's make the rest of our puppy the same way as the head:
    var nose = four.makeCircle(position.x, position.y+30, 25);
    nose.fill = 'darkgoldenrod';
    nose.noStroke();
    
    var eyeRight = four.makeCircle(position.x-42, position.y-26, 32);
    eyeRight.fill = 'black';
    eyeRight.noStroke();
    
    var pupilRight = four.makeCircle(position.x-42, position.y-26, 20);
    pupilRight.fill = 'red';
    pupilRight.noStroke();
    
    var middleLine = four.makeCircle(position.x, position.y-26, 12);
    middleLine.fill = 'black';
    middleLine.noStroke();

    var eyeLeft = four.makeCircle(position.x+42, position.y-26, 32);
    eyeLeft.fill = 'black';
    eyeLeft.noStroke();

    var pupilLeft = four.makeCircle(position.x+42, position.y-26, 20);
    pupilLeft.fill = 'green';
    pupilLeft.noStroke();
    
    var earLeft = four.makeEllipse(position.x-100, position.y-80, 26, 46);
    earLeft.fill = 'sienna';
    earLeft.noStroke();
    // Here's comes a new property we need. Rotation is defined in Radians, which are a little weird, but
    // easy to work with. Try dividing MATH.PI or -MATH.PI by different numbers to see what happens.
    earLeft.rotation = Math.PI / 6; // this gives about a 45 degree rotation.
    
    var earRight = four.makeEllipse(position.x+100, position.y-80, 26, 60);
    earRight.fill = 'sienna';
    earRight.noStroke();
 
    earRight.rotation = -Math.PI / 6;
    
    
    // Since there's no convenience method for a half ellipse shape we'll have to draw
    // the tongue a bit differently.
    // You can read more about four.makePolygon at the four.js site, but we're basically
    // telling four every point in the shape we want to draw, in order. 
    var tongue = four.makePolygon(0,0,  100,0,  100,0,  90,58,  50,80,  10,58,  0,0);
    // Now we need to tell four.js to make it a curved shape (so we don't have a square tongue!)
    tongue.curved = true;
    // Then color it a nice red, with no stroke. 
    tongue.fill = 'darksalmon';
    tongue.noStroke();
    // Notice we didn't use our center variable when we drew the points.
    // With .translation we can shift our tongue to the right spot on the page.
    tongue.translation.x = position.x+30;
    tongue.translation.y = position.y+95;
    // Let's scale it down 40% too
    tongue.scale = 0.7;
    // Add a little rotation, just like the ears. 
    tongue.rotation = -Math.PI/6;

    // After we've told four.js everything we want to draw we need to
    // remind it to update. It's a pretty simple function call:
    four.update();


    // third dog

     // Then we create a new three.js instance with this function. There's a bunch of details we
    // could input here, but for now we're just using 'fullscree: true' to make our drawing space
    // the full size of our screen.
    var three = new Two({fullscreen: true}).appendTo(elem);
    
    // Let's make a position variable to help us out as we draw
    // This is a three.js 'Vector'. It's simply a point on the screen,
    // we're setting this one to the center of the screen. 
    var position = new Two.Vector(150, 450);
    
    
    // three.js has convenience methods to create common shapes.
    // Notice how we get the x and y values of our center three.vactor variable to place the circle
    // in the center of the page. The last number is the radius of the circle we'll draw.
    var head = three.makeCircle(position.x, position.y, 100);
    // The object (in this case the circle) returned has many stylable properties:
    // Let's give it a blue color
    head.fill = 'orange';
    // And tell three.js not to draw a stroke
    head.noStroke();
    
    // Let's make the rest of our puppy the same way as the head:
    var nose = three.makeCircle(position.x, position.y+35, 20);
    nose.fill = 'black';
    nose.noStroke();
    
    var eyeRight = three.makeCircle(position.x-42, position.y-26, 40);
    eyeRight.fill = 'blue';
    eyeRight.noStroke();
    
    var pupilRight = three.makeCircle(position.x-42, position.y-26, 20);
    pupilRight.fill = 'yellow';
    pupilRight.noStroke();

    var eyeLeft = three.makeCircle(position.x+42, position.y-26, 32);
    eyeLeft.fill = 'blue';
    eyeLeft.noStroke();

    var pupilLeft = three.makeCircle(position.x+42, position.y-26, 25);
    pupilLeft.fill = 'yellow';
    pupilLeft.noStroke();
    
    var earLeft = three.makeEllipse(position.x-100, position.y-70, 26, 45);
    earLeft.fill = 'black';
    earLeft.noStroke();
    // Here's comes a new property we need. Rotation is defined in Radians, which are a little weird, but
    // easy to work with. Try dividing MATH.PI or -MATH.PI by different numbers to see what happens.
    earLeft.rotation = Math.PI / 20; // this gives about a 45 degree rotation.
    
    var earRight = three.makeEllipse(position.x+100, position.y-70, 26, 55);
    earRight.fill = 'black';
    earRight.noStroke();
 
    earRight.rotation = -Math.PI / 20;
    
    
    // Since there's no convenience method for a half ellipse shape we'll have to draw
    // the tongue a bit differently.
    // You can read more about three.makePolygon at the three.js site, but we're basically
    // telling three every point in the shape we want to draw, in order. 
    var tongue = three.makePolygon(0,0,  100,0,  100,0,  90,58,  50,80,  10,58,  0,0);
    // Now we need to tell three.js to make it a curved shape (so we don't have a square tongue!)
    tongue.curved = true;
    // Then color it a nice red, with no stroke. 
    tongue.fill = 'black';
    tongue.noStroke();
    // Notice we didn't use our center variable when we drew the points.
    // With .translation we can shift our tongue to the right spot on the page.
    tongue.translation.x = position.x;
    tongue.translation.y = position.y+80;
    // Let's scale it down 40% too
    tongue.scale = 0.3;
    // Add a little rotation, just like the ears. 
    tongue.rotation = Math.PI/50;

    // After we've told three.js everything we want to draw we need to
    // remind it to update. It's a pretty simple function call:
    three.update();
});