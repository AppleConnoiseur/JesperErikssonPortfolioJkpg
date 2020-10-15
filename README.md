# Publiceringsverktyg
School project to the course **Publiceringsverktyg**.

## Prerequisities
* [Node.js](https://nodejs.org/)
* [Gatsby CLI](https://www.gatsbyjs.com/docs/gatsby-cli/)

### Install prerequisities
1. Install Node.js by visiting the link and following instructions for it.
2. For Gatsby CLI enter in a terminal: `npm install -g gatsby-cli`

## How to configure and build
1. Clone the git repot.
2. Open and navigate with your terminal to the cloned git repository.
3. Install backend packages: `cd portfolio-backend` and then `npm install`. If nothing went wrong, proceed to next point.
5. Go back to git repot root if you haven't already. `cd ..`.
4. Install frontend packages: `cd portfolio-frontend` and then `npm install`.
6. Go back to the backend if you haven't already with `cd ..` and then `cd portfolio-backend`. Then finally launch it with: `npm run develop`
7. Configure Strapi with your content by visiting http://localhost:1337/admin .
8. Go back to the frontend if you haven't already with `cd ..` and then `cd portfolio-frontend`. Then finally launch it with: `npm start`
9. Visit http://localhost:8000/ and ensure the website for the frontend is visible. If you change anything on the backend, then you must restart the frontend by pressing `Ctrl + C` and entering `Y`. Then enter `npm start` again.
10. If you are happy with how everything looks, then shutdown the frontend (`Ctrl + C` then enter `Y`) and build the frontend with: `gatsby build`
11. The `public` folder inside `portfolio-frontend` will be used for publishing this website.

## How to publish on Netlify
1. Visit https://www.netlify.com/ and create an account if you haven't already. Then login.
2. Drag the `public` folder from your `portfolio-frontend` project onto the drop area.
3. The site should now be deploying and you can configure it meanwhile it is working.

# Tentamen
My published website: https://jesper-e-portfolio.netlify.app/