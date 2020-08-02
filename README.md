The docker image should be built and run as below:
1. In a terminal checkout the project and move(cd) to the project directory 
2. Build the image with name autocomplete and version latest -> docker build -t autocomplete:latest . 
3. Check if the image has been created -> docker images
4. Run the image (port-forwarding internal docker port to localhost:3000) ->  docker run -p 3000:3000 autocomplete:latest 
5. open the URL localhost:3000 in the browser
 . 
