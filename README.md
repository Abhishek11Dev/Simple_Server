# Simple_Server
Simple_Server is program in nodejs.It display the count of total request number.To understand concept of containerization,
we use docker in our program. 
Structure of program:
First, we create one container for running only node js program.
Second container for redis database
then by using docker-compose we make both these container can communicate with each other.
Let's do these things practically..

# Installation
  
   On Debian-based linux Distributions --
   
   1) Install docker-engine in your os
       sudo apt install docker.io
   2)  you need to start and enable docker
       sudo systemctl start docker
       sudo systemctl enable docker
   3)  you can also check status 
        sudo systemctl status docker
        
     now you need to create one docker conatiner by dockerfile to run nodejs program
     1) create docker image
        inside one directory where your dockerfile and source code is present
       
       docker build -t <<your_dockerhub_username>>/<<image_name>> .
       
     2) you can verify weather the image is build sucessfully or not 
     
        docker images
        
     3) After building images we need to create container from it 
     docker run — name <<container_name>> -p 80:8080 -d <<your_dockerhub_username>>/<<image_name>>
     
     and we can check this container by cmd 
     docker ps
        
        
      
   
 

     
       
       
       
   
     
        
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
       
