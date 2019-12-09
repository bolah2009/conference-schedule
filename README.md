[![Maintainability](https://api.codeclimate.com/v1/badges/63aba2a41083f98d73a2/maintainability)](https://codeclimate.com/github/bolah2009/conference-schedule/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/63aba2a41083f98d73a2/test_coverage)](https://codeclimate.com/github/bolah2009/conference-schedule/test_coverage)
[![Build Status](https://travis-ci.com/bolah2009/conference-schedule.svg?branch=development)](https://travis-ci.com/bolah2009/conference-schedule)
[![codecov](https://codecov.io/gh/bolah2009/conference-schedule/branch/development/graph/badge.svg)](https://codecov.io/gh/bolah2009/conference-schedule)

# Final Capstone Project: Conference Schedule

- The objective is to build a conference schedule based on the following design guide:

1. The user logs in the app.

2. The user is presented with a list of conference and the agenda page, where you can look the general schedule of the conference, day by day

3. When a user selects a talk, detailed information about the talk is presented and the possibility add it to your schedule

4. The user can access a list with your schedule

#### [Assignment link](https://www.notion.so/Final-Capstone-Project-Conference-Schedule-9c0c6feb29724247996ce13cc4666a5e)

#### [View in browser](https://conferences-schedule.herokuapp.com/

## Prerequisites

> Ruby: 2.6.3  
> Rails: 6.0.1

## Usage (Development)

- Clone the repo and run the app.

```sh
   git clone https://github.com/bolah2009/conference-schedule.git
   cd conference-schedule
   bundle install
   rails db:create
   rails db:migrate
   rspec #run tests
   yarn --cwd client install #install frontend dep
   rake start #run server
```

## How to run the test suite

- run tests:
  > `rpsec`
- view test coverage:
  > `open coverage/index.html`

## Contributing

If you are working on adding features, PRs, or bugfixes, this section should help get you going.

1. Fork it
2. Create your feature branch
   > `git checkout -b my-new-feature`
3. Make sure all tests are passing
   > `bundle install`  
   > `rspec`
4. Commit your changes
   > `git commit -am 'Add some feature'`
5. Push to the branch
   > `git push origin my-new-feature`
6. Create new Pull Request

## API Endpoints

API is exposed the following RESTful endpoints.

| Endpoint                        | Functionality                  |
| ------------------------------- | ------------------------------ |
| POST /signup                    | Signup                         |
| POST /login                     | Login                          |
| GET /conferences                | List all conferences           |
| POST /conferences               | Create a new conference        |
| GET /conferences/:id            | Get a conference               |
| PUT /conferences/:id            | Update a conference            |
| DELETE /conferences/:id         | Delete a conference            |
| GET /conferences/:id/agenda     | List a conference agenda       |
| POST /conferences/:id/agenda    | Create a new conference agenda |
| GET /conferences/:id/agenda/:id | Get a conference agenda        |
| PUT /conferences/:id            | Update a conference agenda     |
| DELETE /conferences/:id         | Delete a conference agenda     |
| GET /schedules                  | List all schedules             |
| POST /schedules                 | Creates a new schedule         |
| GET /schedules/:id              | Get a schedule                 |
| DELETE /schedules/:id           | Delete a schedule              |

## Author

- [@bolah2009](https://github.com/bolah2009/)

## Credits

- Design: https://www.behance.net/gallery/71179603/HCIE-App-UIUX-Design
- Icons: [Materails Designs Icon](https://materialdesignicons.com/) and [Flat Icons](https://www.flaticon.com/)
- Illustrations: [Undraw.co](https://undraw.co/)
- [Favico generator](https://www.favicon-generator.org/)
- [Build a RESTful JSON API With Rails 5](https://scotch.io/tutorials/build-a-restful-json-api-with-rails-5-part-one)
- [A Rock Solid, Modern Web Stack—Rails 5 API + ActiveAdmin + Create React App on Heroku](https://blog.heroku.com/a-rock-solid-modern-web-stack)
- [React Docs](https://reactjs.org/docs), [React Redux docs](https://react-redux.js.org/using-react-redux), [React Router Docs](https://reacttraining.com/react-router)
