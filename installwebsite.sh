

# apt-get is a command-line tool which helps in handling packages in Linux. 
# It retrieves the information and packages from the authenticated sources 
# for installation, upgrade and removal of packages along with their dependencies.

# install curl if not installed. 
# cURL is a command-line tool for getting or sending files using URL syntax. 
sudo apt-get install curl

# use node release version 12
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -

# install nodejs
sudo apt-get install nodejs -y

# install pm2 - a process manager for the JavaScript runtime Node.js
sudo npm install pm2 -g

# install zip
sudo apt-get install zip -y

# install unzip
sudo apt-get install unzip -y

# update apt. 
# The apt command is a powerful command-line tool, which works with 
# Ubuntu's Advanced Packaging Tool (APT) performing such functions as 
# installation of new software packages, upgrade of existing software packages, 
# updating of the package list index, and even upgrading the entire Ubuntu system.
sudo apt update

Clone the project on server
# Clones a repository to your server
git clone https://github.com/Mohit-Shukla-EQ/website.git

# add react
# to create react app first go to parent dir 
npx create-react-app website

# discard the unwanted files created by react app template
rm -rf public
rm -rf src
README.old.md 
rm package.json 
rm .gitignore

# Grab online updates and merge them with your local server when needed
git pull origin main

#Install dependencies
npm install --save react-router-dom
