# Combined Strapi + Gatsby Template

More info soon

## Steps to recreate - Linux

1. Create project Folder

`mkdir [PROJECT-NAME]`

2. cd into new folder create backend strapi instance from template

`npx create-strapi-app backend --quickstart`

3. set up admin credentials for Strapi
4. cd to project folder and create frontend gatsby instance from template

`npx gatsby new frontend https://github.com/gatsbyjs/gatsby-starter-default`

5. remove pre-existing git folders (but leave .gitignore for now in each)

`rm -rf backend/.git && rm -rf frontend/.git`

6. create git repo at root, then add files and commit

`git init -b main && git add . && git commit -m "Frontend/Backend monorepo intialized"`
