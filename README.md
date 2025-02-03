![Image](https://github.com/user-attachments/assets/45c81313-2060-478f-ae2c-bb233a5ca0eb)

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

## Functionalities

### Backend

1. **User Authentication and Management**
   - **Signup**: [`userSignupController`](backend/controller/userSignup.js) handles user registration.
   - **Signin**: [`userSignInController`](backend/controller/userSignin.js) handles user login.
   - **Logout**: [`userLogout`](backend/controller/userLogout.js) handles user logout.
   - **User Details**: [`userDetailsController`](backend/controller/useDetail.js) fetches user details.
   - **Update User**: [`updateUser`](backend/controller/updateUser.js) updates user information.
   - **All Users**: [`allUsers`](backend/controller/allUsers.js) fetches all users.

2. **Product Management**
   - **Upload Product**: [`UploadProductController`](backend/controller/uploadProduct.js) handles product upload.
   - **Update Product**: [`updateProductController`](backend/controller/updateProduct.js) updates product details.
   - **Get All Products**: [`getProductController`](backend/controller/getProduct.js) fetches all products.
   - **Get Product Details**: [`getProductDetail`](backend/controller/getProductDetail.js) fetches product details.
   - **Get Category Products**: [`getCategoryProduct`](backend/controller/getCategoryProductSingle.js) fetches products by category.
   - **Filter Products**: [`filterProductController`](backend/controller/filterProduct.js) filters products based on criteria.

3. **Cart Management**
   - **Add to Cart**: [`addToCartController`](backend/controller/addToCartController.js) adds a product to the cart.
   - **View Cart Products**: [`addToCartViewProduct`](backend/controller/addToCartViewProduct.js) fetches products in the cart.
   - **Update Cart Product**: [`updateAddToCartProduct`](backend/controller/updateAddToCartProduct.js) updates cart product quantity.
   - **Delete Cart Product**: [`deleteAddToCartProduct`](backend/controller/deleteAddToCartProduct.js) removes a product from the cart.
   - **Count Cart Products**: [`countAddToCartProduct`](backend/controller/countAddToCartProduct.js) counts the number of products in the cart.

4. **Search and Filter**
   - **Search Products**: [`searchProduct`](backend/controller/searchProduct.js) searches for products.
   - **Filter Products**: [`filterProductController`](backend/controller/filterProduct.js) filters products based on criteria.

### Frontend

1. **User Interface Components**
   - **Header**: [`Header`](frontend/src/components/Header.js) displays the navigation bar.
   - **Footer**: [`Footer`](frontend/src/components/Footer.js) displays the footer.
   - **Vertical Card Product**: [`VerticalCardProduct`](frontend/src/components/VerticalCardProduct.js) displays products in a vertical card layout.
   - **Horizontal Cart Product**: [`HorizontalCartProduct`](frontend/src/components/HorizontalCartProduct.js) displays products in a horizontal card layout.
   - **Admin Edit Product**: [`AdminEditProduct`](frontend/src/components/AdminEditProduct.js) allows admin to edit product details.
   - **Upload Products**: [`UploadProducts`](frontend/src/components/UploadProducts.js) allows admin to upload new products.
   - **Change User Role**: [`ChangeUserRole`](frontend/src/components/ChangeUserRole.js) allows admin to change user roles.

2. **Pages**
   - **Home**: [`Home`](frontend/src/pages/Home.js) displays the homepage.
   - **Login**: [`Login`](frontend/src/pages/Login.js) handles user login.
   - **Signup**: [`Signup`](frontend/src/pages/Signup.js) handles user registration.
   - **Cart**: [`Cart`](frontend/src/pages/Cart.js) displays the user's cart.
   - **Product Detail**: [`ProductDetail`](frontend/src/pages/ProductDetail.js) displays product details.
   - **Category Product**: [`CategoryProduct`](frontend/src/pages/CategoryProduct.js) displays products by category.
   - **Search Product**: [`SearchProduc`](frontend/src/pages/SearchProduc.js) displays search results.
   - **Admin Panel**: [`AdminPanel`](frontend/src/pages/AdminPanel.js) displays the admin panel.
   - **All Users**: [`AllUsers`](frontend/src/pages/AllUsers.js) displays all users for admin.
   - **Product Management**: [`Product`](frontend/src/pages/Product.js) displays all products for admin.

3. **State Management**
   - **Store**: [`store`](frontend/src/store/store.js) configures the Redux store.
   - **User Slice**: [`userSlice`](frontend/src/store/userSlice.js) manages user state.

4. **Helpers**
   - **Add to Cart**: [`addToCart`](frontend/src/helpers/addToCart.js) handles adding products to the cart.
   - **Fetch Category Wise Product**: [`fetchCategoryWiseProduct`](frontend/src/helpers/fetchCategoryWiseProduct.js) fetches products by category.
   - **Display Currency**: [`displayCurrency`](frontend/src/helpers/displayCurrency.js) formats currency.
   - **Scroll Top**: [`scrollTop`](frontend/src/helpers/scrollTop.js) scrolls to the top of the page.
