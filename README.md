# Welcome to my repository👋
This is **FeedGet**, which consists of a button that the user can click and open a modal, which allows the user to register feedback for the specific application.
This repository is intended for the application backend.
The application has a single route "/feedbacks" of type POST, which expects an object {type, comment, screenshot (optional)} in the body of the request.💻

## A preview of the application:
https://user-images.githubusercontent.com/51724518/168090344-88f4ebb5-cc93-4d23-a51e-2fe1de02727a.mp4



## Techs:
Built with Express + Node. Also used:
- “Prisma” to assist in the database part, generating tables faster;
- “Jest” for implementing unit tests;
- The “nodemailer” lib for implementing sending e-mails after receiving feedback;
- Some SOLID concepts to avoid the coupling of technologies.

## Get started:
- Open the terminal inside the project folder and do: 'npm install' or 'yarn add'. When all packages are installed, do 'npm dev' or 'yarn dev' to start in development mode.
- To view the currently deployed version, visit: https://feedback-widget-back-production.up.railway.app/.
- To view the frontend of the currently deployed application, visit: https://feedback-widget-fpgl55ifi-vitinho.vercel.app/.

