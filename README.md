# Backend-training

1. <h3>Update Package Lists:</h3>
   Execute the command 
   <br>

   - sudo apt update

   <br>
   to refresh the package information from the repositories, ensuring that you have access to the latest versions.

2. <h3>Install Curl:</h3>
   Utilize the command

   - sudo apt install curl

   to install the Curl tool, which is instrumental for transferring data between your system and servers.

3. <h3>Download Node.js Setup Script:</h3>
   Fetch the Node.js LTS version setup script from the NodeSource repository using

   - curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -

   This command not only downloads the script but also executes it with elevated privileges using `sudo -E bash -`, setting up the necessary repository.

3. <h3>Install Node.js and npm:</h3>
   Run
    
   - sudo apt install nodejs

   to install both Node.js, the runtime environment for executing JavaScript, and npm, the package manager for Node.js modules and libraries.

5. <h3>Verify Installation:</h3>
   Confirm the successful installation by checking the Node.js version with 

   - node -v
    
    and the npm version with 
   - npm -v

   These commands will display the installed versions in the terminal.

By following these steps, you establish a robust Node.js environment, empowering you to run JavaScript applications seamlessly while managing dependencies effortlessly through npm.



**Install and set up the latest stable version of Express.**      

- npm install express

**Setup  and configure cookie-parser dependency** 

**Install and set up the latest stable version of Postman.**

Open a terminal

Add the postman repository

- sudo sh -c 'echo "deb https://dl.pstmn.io/download/latest/linux64" > /etc/apt/sources.list.d/postman.list'

Import the Postman GPG Key

- sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 379CE192D401AB61

Update the package list

- sudo apt-get update

Install Postman

- sudo apt-get install postman

