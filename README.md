# MovieListingsChallenge

I decided to go for a React/Redux SPA approach for this, using stateless React components that are managed by Redux. The API calls were handled by Axios which is triggered through Redux using the Redux-thunk middleware.

I also decided to build several Progressive web app features which took the last point literally. "The input API's should only be called once.", So after the initial load the requests are cached so each subsequent load will use the service worker cache which is much more efficient and also only hitting the API once.

## Instructions

1.  clone the repo
2.  npm install
3.  npm start

## Improvements

The app basically loads the first page of results, which also returns the total number of pages available. So, then loads all the remaining pages.

If any of the requests fail... it should retry them after a time interval, which it doesn't currently do. Also, Given more time I would also have liked to have written some automated test scripts for the project.
