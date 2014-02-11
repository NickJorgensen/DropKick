DropKick
========

A demo Node-Webkit app that uploads a file to a designated Amazon S3 bucket.

###Build instructions
------

#####Windows

 1. Download and install Node.js and npm.
 2. Clone or download DropKick repo.
 3. Open up a cmd prompt and cd into your DropKick folder.
 4. Type:
    `npm install`
 5. Zip up the following 4 folders and files - node_modules, public, package.json, main.html
 6. Name the zipped file app.nw
 7. Download Node-Webkit “win32” Prebuilt binary at [Node-Webkit](https://github.com/rogerwang/node-webkit).
 8. Unzip the Node-Webkit win32 package and move the contents into the DropKick folder.  Make sure you move all the contents, they are needed to run DropKick
 9. In the cmd prompt type: `copy /b nw.exe+app.nw DropKick.exe`
 10. A file called "DropKick.exe" should now appear…  Just double click "DropKick.exe" to start DropKick.

#####OSX

 1. Download and install Node.js and npm.
 2. Clone or download DropKick repo.
 3. Open up a Terminal prompt and cd into your DropKick folder.
 4. Type: `npm install`
 5. Download Node-Webkit “Mac” Prebuilt binary at [Node-Webkit](https://github.com/rogerwang/node-webkit).
 6. Unzip the Node-Webkit Mac package and move the contents into the DropKick folder.  Make sure you move all the contents, they are needed to run DropKick.
 7. Open up a terminal prompt and cd into your DropKick folder.
 8. In the cmd prompt type: `zip -r ./${PWD##*/}.nw *`  A file called DropKick.nw will be created.
 9. Rename the file "node-webkit.app" to "DropKick.app" … Finally, double click "DropKick.app" to start Mixtris.
