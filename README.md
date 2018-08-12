# MovieListingsChallenge

I decided to go for a React/Redux SPA approach for this, using stateless React components that are managed by Redux. The API calls were handled by Axios which is triggered through Redux using the Redux-thunk middleware.

I also decided to build several Progressive web app features which took the last point literally. "The input API's should only be called once.", So after the initial load the requests are cached so each subsequent load will use the service worker cache which is much more efficient and also only hitting the API once.

## Instructions

1.  clone the repo
2.  npm install
3.  npm start

## Improvements

The app basically loads the first page of results, which also returns the total number of pages available. So, it then loads all the remaining pages. The problem is I'm not checking the order they are returned in... it makes the requests in order, and based on my tests is maintaining the popularity ordering but I need to chain them together in a more stable way. This is possible with Axios using Axios.all or a promise chain. If some of the pages take a long time to load then it would potentially mess up the order.
