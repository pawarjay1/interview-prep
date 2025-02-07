# Git & GitHub Notes 

## Git 

- git is a version control system. 
- used for tracking changes in source code during software development. 
- It allows multiple developers to work on the same project simultaneously.

### Key Features of Git:

- Tracks changes to files over time, allowing developers to revert to previous versions if needed.
-  Every developer has a complete copy of the repository, making it more resilient to failures.
- Enables developers to create separate branches for features or fixes and later merge them into the main project.

## GitHub 

- github is a website that allows developers to store and manage their code using git


## Git commands 

### clone 

- cloning a repository on our local machine 
- syntax : <b>git clone <--link--> </b>

### status

- display the state of the code 
- syntax : <b>git status </b>

- <b>untracked : </b> new file that git does not yet tracked
- <b>modified : </b> changed file
- <b>staged : </b> file is ready to be commited
- <b>unmodified : </b> unchanged

### Add

- adds new file in your working directory to git staging area.
- syntax : <b>git add <--file name--> </b>
- use (.) to select all file once

### commit 

- it is the record of change 
- syntax : <b>git commit -m "somting message" </b>

### push 

- upload local repo content to remote repo(GitHub). 
- syntax : <b>git push orgin main</b>

### init

- used to create a new git repo 
- syntax : <b>git remote add orgin <-link-></b>

*** remote ***
- Add a new remote repository
- syntax : <b> git remote add orgin https://github.com/pawarjay1/local-repo.git </b>

- Show all remotes
- syntax : <b>git remote -v </b>

*** branch ***



### branches 

- to check branch
- syntax : <b>git branch </b>

- to rename branch
- syntaxv:v<b>git branch -m main</b>  

- to navigate 
- syntax : <b>git checkout <-branch name-> </b> 

- to create new branch 
- syntax : <b>git checkout -b <-new branch name-></b>

- to delete a branch 
- syntax : <b>git branch -d <-branch name-></b>


### marging two branches 

- to comapair branches
- syntax : <b>git diff <-branch name-></b> 

- to merge two branches
 
*** way one ***
- syntax : <b>git merge <-branch name-></b> 

*** way two ***

- create a pull request using github 
- it tells others about changes you pushed to a branch. 

### pull command 

- syntax : <b>git pull orgin main </b> 
- used to fetch and download content from a remote repo and immediately update the local repo to match that content 


### undoing changes 

jay

kumar 