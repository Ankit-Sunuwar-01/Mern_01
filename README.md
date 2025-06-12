# Mern_01

Why are you here?

## Git Commands

- Git setup

* 'git init' --- Initialize the git repo
* 'git remote add origin <url>' --- Add <url> to out local repo

-'git remove -v' --- To visit the remote list wi th It's url

- 'git remote set-url <origin><url> --- Update the url set from add command

* Commit code

- 'git add .' --- This will add all the changes for tracking
- 'git commit -m' "<WriteYourMessage>" --- This will add all the changes for tracking

* Push

- After commit then run
- 'git push <origin><branchName> [:<remoteBranch>]'
- e.g. 'git push origin main' ~ 'git push origin main:main'

* Branch

- 'git branch'

* Git clone

- git clone <repo> ---Download all the source code from <repo>

# Commit

- set identifier
- git config --global user.name "<write your name>"
- git config --global user.email"<write your email>"

# Pull

- Pull strategy
- 'git config --global pull.rebase false' ---Merge Strategy
- 'git config --global pull.rebase true' --- Rebase Strategy (future strategy)
- 'git config --global pull.ff only' --- Fast forward strategy

---

git clone
git checkout -b ankit-sunuwar (user ko nam)
git push origin <path(name)>
