# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


:root {
  --lightgray: #D9D9D9;
  --gray: #9c9c9c;
  --orange: #f48915;
  --darkGrey: #464D53;
  --caloryCard: #656565;
  --planCard: linear-gradient(210.41deg, #fa5042 1.14%, #ffa739 100.75%);
  --appColor:  #3c3f45;
}

.App {
  background-image: url(data:image/png;base64,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);
  mix-blend-mode: overlay;
  background-color: var(--appColor);
  display: flex;
  flex-direction: column;
  gap: 6rem;
  overflow: hidden;
}
::-webkit-scrollbar{
  display: none;
}



  /*HEADER*/
 .header>:nth-child(2) {
position: fixed;
right: 2rem;
z-index: 99;
 }
 .header-menu {
  flex-direction: column;
  background-color: var(--orange);
  padding: 2rem;

 }

 /*HERO*/
  .hero {
    flex-direction: column;
  }
  .hero-blur {
    width: 14rem;
  }
  .the-best-ad {
    margin-top: 0;
    font-size: small;
    align-self: center;
    transform: scale(0.8);
  }
  .hero-text {
    font-size: xx-large;
    align-items: center;
    justify-content: center;
  }
  .hero-text>div:nth-of-type(3) {
    font-size: small;
    font-weight: 200;
    letter-spacing: 1px;
    text-align: center;
  }
  .hero-button {
    justify-content: center;
  }
  .figures>div>span:nth-of-type(1) {
    font-size: large;
  }
  .figures>div>span:nth-of-type(2) {
    font-size: small;
  }
  .right-h {
    position: relative;
    background: none;
  }
  .heart-rate {
    left: 1rem;
    top: 2rem;
  }
  .calory {
    position: relative;
    top: 5rem;left: 2rem;
  }
  .calory>img {
    width: 2rem;
  }
  .calory>div>:nth-child(2) {
    color: white;
    font-size: 1rem;
  }
  .hero-img {
    position: relative;
    width: 15rem;
    left: 7rem;
    top: 4rem;
    align-self: center;
  }
  .hero-img-back {
    width: 15rem;
    left: 2em;
    top: 0rem;
  }

  /*PROGRAM*/
  .program-header{
    flex-direction: column;
    gap: 1rem;
    font-size: x-large;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
  }
  .program-categories {
    flex-direction: column;
  }

  /*Reason*/
  .reason {
    flex-direction: column;
  }
  .left-side {
    grid-auto-rows: auto;
    overflow: hidden;
  }
  .left-side>:nth-child(1) {
 width: 7rem;
 height: 17rem;
  }
  .left-side>:nth-child(2) {
    width: 15rem;
    height: 10rem;
     }
     .left-side>:nth-child(3) {
      width: 7rem;
       }
       .left-side>:nth-child(4) {
        width: 7rem;
        height: 6rem;
         }

         /*PLANS*/
         .plans {
          flex-direction: column;
         }
         .plans>:nth-child(2) {
          transform: none;
         }

         /*TESTIMONIALS*/ 
         .testimonial {
          flex-direction: column;
         }
         .left-t>:nth-child(2),.left-t>:nth-child(3) {
          font-size: xx-large;
         }
         .right-t {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2rem;
         }
         .right-t>div {
          position: relative;
          display: none;
         }
         .right-t>img {
          top: 0;right: 0;position: relative;
          align-self: center;
         }
         .right-t>:last-child {
          display: block;
          bottom: 0;left: 0;
         }

/*JOIN*/
.join {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.join-l {
  font-size: x-large;
  flex-direction: column;
}
.join-r {
  padding: 2rem;

}#   F i t C l u b - s t a r t e r  
 