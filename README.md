# the-watch-hub

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

Watchhub allows user to search for a movie/series/episodes using 3 different filters provided. It also allows user to select a movie/series/episode from the list to view additional details.User is able to maintain a list of any saved movie/series/episode.
This is a full stack application that uses React and GraphQL.

## Table of contents

- [Description](#Description)
- [Installation](#Installation)
- [Screenshot](#Screenshot)
- [API Integration](#API)
- [How to Run](#Run)
- [Contributing](#Contributing)
- [Questions](#Questions)
- [License](#License)

## Description

```md
When I arrive on this application
Then I can search for a movie/series/episodes by writing title in the search box
When I click on the search icon
Then I see a list of the results displayed
When I see the result item
Then each item has name and released year displayed
When I click on any result
Then on the right I can see the full description of the movie/series/episode
When I Click on LOGIN in the navbar
Then I am routed to a login page
When I want to Sign Up
Then I click on the sign up button on the login page
When I am logged in
Then I see an additional Saved Watchlist link on the navbar
When I view the details of a movie as a logged in user
Then I see an additional button called saved list
When I click on this Watchlist button
Then I am able to save the movie/series/episodes
When I click on the Saved Watchlist link in the navbar
Then I see list of movies displayed
When I click Logout
I am logged out of application
```

## Screenshot

[![Screenshot](./client/src/images/Screenshot1.gif)]

## Screenshot

[![Screenshot](./client/src/images/screenshot2.gif)]

## Screenshot

[![Screenshot](./client/src/images/screenshot3.gif)]

## Installation

```md
npx create-react-app the-watch-hub
```

```md
npm install react-router-dom@5.2.0
```

```md
npm install axios
```

```md
npm install --save styled-components
```

```md
For Slider bar
npm install classnames
```

```md
npm install --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome

Import:
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
Use:
<FontAwesomeIcon icon={faBars} />
```

````

# API

```md
OMDb API: https://www.omdbapi.com
```

## Run

On Localhost : npm run develop


## Contributing

Rajni Dua

## Questions

For any further questions, reachout to me at :

- Github: [rajnidua](https://github.com/rajnidua)
- Email: rajni.dua14@gmail.com

## License

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

&copy; 2021 Rajni Dua

_Licensed under [MIT](./license)_
````
