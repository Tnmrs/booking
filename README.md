

## The project is a SPA (Single Page Application) developed in React using Redux-saga and React Router. The project implements authorization and display pages for hotels.

On the authorization page, the user can enter his login and password, which pass the standard validation. If the entered data does not pass validation, an error warning is displayed. When entering the site with valid data, the user is redirected to the hotels page.

On the hotels page, the user can enter a city, arrival date and number of days, as a result of which hotels and information about them are displayed. The page displays a carousel of images that you can scroll through. The user can add hotels to favorites and remove them from it. Selected hotels can be sorted by cost and number of stars.

Travelpayouts.com API is used to get hotel data. When you first load the page with default data, the corresponding hotels are displayed.

If the user selects new search data, the list of favorite hotels is not reset. When reloading the page with hotels, the user's authorization is not reset.

When you click on the "Exit" button, the authorization is reset and you are redirected to the authorization page.
The project is a SPA (Single Page Application) developed in React using Redux-saga and React Router. The project implements authorization and display pages for hotels.

On the authorization page, the user can enter his login and password, which pass the standard validation. If the entered data does not pass validation, an error warning is displayed. When entering the site with valid data, the user is redirected to the hotels page.

On the hotels page, the user can enter a city, arrival date and number of days, as a result of which hotels and information about them are displayed. The page displays a carousel of images that you can scroll through. The user can add hotels to favorites and remove them from it. Selected hotels can be sorted by cost and number of stars.

Travelpayouts.com API is used to get hotel data. When you first load the page with default data, the corresponding hotels are displayed.

If the user selects new search data, the list of favorite hotels is not reset. When reloading the page with hotels, the user's authorization is not reset.

<img width="1680" alt="Снимок экрана 2023-03-14 в 22 18 32" src="https://user-images.githubusercontent.com/106652477/225995326-25c90acb-0885-49e1-80cf-87eccb0f8aa7.png">
<img width="1680" alt="Снимок экрана 2023-03-14 в 22 18 45" src="https://user-images.githubusercontent.com/106652477/225995370-a95e32b4-132c-4d8a-b026-96c3afbab98a.png">

<img width="1680" alt="Снимок экрана 2023-03-14 в 22 18 57" src="https://user-images.githubusercontent.com/106652477/225995398-66c4059e-df70-44a5-88e6-5c002c8d82fe.png">

## Clone the project https://github.com/Tnmrs/booking.git
## Install dependencies:
 yarn install

##Start the app in dev:
yarn dev

## Start the app in production:
yarn build

## then:
yarn start
