# apps
## Git Setup
Created repository on github
**On Windows machine, in Terminal**
1. Changed directory to C:\inetpub\wwwroot
`git clone https://github.com/andrewpen/apps`
This cloned my starter files from Github to my Windows machine and saved them in the wwwroot direction in a folder named \apps
2. Changed directory to new repo to C:\inetpub\wwwroot\apps
3. Created new HTML index file within \apps
4. Add new index file to track file and stage
`git add index.html`
Index.html is now being tracked
5. Commit the changes within index.html
`git commit -m "First commit of new index file."`
6. Push all committed changes (index.html) to github repository
`git push`
**On Mac machine, in Terminal**
1. Navigate to local host directory within Terminal
Go to HD\
cd ..\
cd ..\
Go to localhost directory\
cd Library/WebServer/Documents
2. Clone repo
`sudo git clone https://github.com/andrewpen/apps`