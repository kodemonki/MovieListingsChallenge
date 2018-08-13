# MovieListingsChallenge

I decided to go for a React/Redux SPA approach for this, using stateless React components that are managed by Redux. The API calls were handled by Axios which is triggered through Redux using the Redux-thunk middleware.

I also decided to build several Progressive web app features which took the last point literally. "The input API's should only be called once.", So after the initial load the requests are cached so each subsequent load will use the service worker cache which is much more efficient and also only hitting the API once.

## Instructions

1.  clone the repo
2.  npm install
3.  npm start

## Improvements

The app basically loads the first page of results, which also returns the total number of pages available. So, then loads all the remaining pages. The problem is I'm not checking the order they are returned in... it makes the requests in order, and based on my tests is maintaining the popularity ordering but I need to chain them together in a more stable way. If some of the pages take a long time to load then it would potentially break the ordering. This is possible using either Axios.all, Promise.all and Async await, additionally I could change the movies array in to an array of pages, which would then be rendered in order... this has the advantage of the fastest loading time, and avoiding an expensive sorting operation which would be the final alternative.

Additionally, if any of the requests fail... it should retry them after a time interval, which it doesn't currently do. Also, Given more time I would also have liked to have written some automated test scripts for the project.
