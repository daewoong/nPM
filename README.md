# nPM

nPM github page. [nPM](http://solar4.ssu.ac.kr:8080) service.

nPM is an open source project management system. methods including:

  * **nPMCore** - Framework, Database, Web, Service, Mobile, Security.
  * **nPMService** - Project Management, Gantt Chart, Mind Map
  * **nPMMobile** - Create iOS, Android, hybrid, and mobile web apps from The Titanium.
  * **nPMWeb** - nPM web page, Open ID (Facebook)
  * **nPMDesign** - nPM Web, Mobile icon and photo.

## Install
There are a few different ways you can install pyechonest:

* Download the zipfile from the [downloads](http://npmbynpm.github.com/nPM) page and install it. 
* Checkout the source: "git clone https://github.com/nPMbynPM/nPM.git" and install it yourself.
   
## Getting Started
 * Install nPM
 

## Examples
*All examples assume you have already setup your api key!*

HTML5 Canvas drawing HTML:

    <canvas id="canvasId" width="800" height="600"></canvas>
    var context = document.getElementById("canvasId").getContext("2d");

HTML5 Canvas drawing JS:

    var context = document.getElementById("canvasId").getContext("2d");
    // Draw a path
    context.beginPath();
    context.moveTo(padding + width/2, padding);        // Top Corner
    context.lineTo(padding + width, height + padding); // Bottom Right
    context.lineTo(padding, height + padding);         // Bottom Left
    context.closePath();

    // Fill the path
    context.fillStyle = "#ffc821";
    context.fill();

Database Connection:

    mysql jdbc: "org.gjt.mm.mysql.Driver"; 
    oracle jdbc: "oracle.jdbc.driver.OracleDriver";

Titaninum property:

    var goUserHome = function(site) {
    document.location.href = site;
   };



![alt text](http://i.imgur.com/WWLYo.gif "Frustrated cat can't believe this is the 12th time he's clicked on an auto-linked README.md URL")

