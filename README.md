[![Maintainability](https://api.codeclimate.com/v1/badges/63aba2a41083f98d73a2/maintainability)](https://codeclimate.com/github/bolah2009/conference-schedule/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/63aba2a41083f98d73a2/test_coverage)](https://codeclimate.com/github/bolah2009/conference-schedule/test_coverage)
[![Build Status](https://travis-ci.com/bolah2009/conference-schedule.svg?branch=development)](https://travis-ci.com/bolah2009/conference-schedule)
[![codecov](https://codecov.io/gh/bolah2009/conference-schedule/branch/development/graph/badge.svg)](https://codecov.io/gh/bolah2009/conference-schedule)

# Final Capstone Project: Conference Schedule

## Project Specifications

### The objective is to build a conference schedule based on the following design guide:

- A user can log in or/and sign up on the app.
- A user is presented with a list of conference and the agenda page, where the user can look at the general schedule of the conference, day by day
- When a user selects a talk, detailed information about the talk is presented and the possibility add it to the user schedule
- A user can access a list of the user's schedule
- An authentication using `JWT` (JSON web token) allows a user to log in and sign up to the app and authentic access to the user schedule.
- A user table is created with an association to both conferences and schedule tables. Here users have many conferences and schedules.

### Backend

#### Associations

There are four tables created for the backend with the following associations:
User table:
Has many conferences using `creator_id` has the `foreign key`
Has many schedules using user_id as the foreign key
Conference table:
Has many Agendas
Belongs to a user with creator_id as the foreign key
Agenda table belongs to a conference
Schedule table belong to both Agenda and User with a foreign key of agenda_id and user_id respectively

#### Validations and Schema

##### User

| Column    | Type   | Validation                                                   |
| --------- | ------ | ------------------------------------------------------------ |
| Name      | string | Presence                                                     |
| Email     | string | Presence, unique (case sensitive) and 100 maximum characters |
| Job title | string | Presence and minimum length 6 characters                     |
| Password  | string | Presence                                                     |

##### Conference

| Column     | Type    | Validation |
| ---------- | ------- | ---------- |
| Name       | string  | Presence   |
| Creator id | integer | Presence   |
| url        | string  | Presence   |
| startDate  | date    | Presence   |
| endDate    | date    | Presence   |
| city       | string  | Presence   |
| country    | string  | Present    |

##### Agenda

| Column        | Type     | Validation |
| ------------- | -------- | ---------- |
| Title         | string   | Presence   |
| conference id | integer  | Presence   |
| description   | string   | Presence   |
| startTIme     | datetime | Presence   |
| endTime       | datetime | Presence   |
| location      | string   | Presence   |

##### Schedule

| Column    | Type   | Validation         |
| --------- | ------ | ------------------ |
| User id   | string | Present            |
| Agenda id | string | Present and Unique |

#### API Endpoints

API is exposed to the following RESTful endpoints.

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

#### [Assignment link](https://www.notion.so/Final-Capstone-Project-Conference-Schedule-9c0c6feb29724247996ce13cc4666a5e)

#### [View in browser](https://conferences-schedule.herokuapp.com/

## Frontend

- The app used React with React redux for state management and React router for SPA routing

### Screenshots

|                                                                       Home Page                                                                        |                                                                    Conferences list                                                                    |
| :----------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------: |
|                   ![Home Page](https://user-images.githubusercontent.com/36057474/70427123-7635fe80-1a74-11ea-9b18-86c7ea84e8ea.png)                   |                  ![Conference](https://user-images.githubusercontent.com/36057474/70427307-c614c580-1a74-11ea-801a-f6929dd45c01.png)                   |
|                                                                    Conference page                                                                     |                                                                      Agenda List                                                                       |
|                  ![Conference](https://user-images.githubusercontent.com/36057474/70428167-53a4e500-1a76-11ea-9fef-8136aa73aaee.png)                   |                  ![Agenda List](https://user-images.githubusercontent.com/36057474/70428274-89e26480-1a76-11ea-9f49-d0ddb6a45c2b.png)                  |
|                                                                        Sign In                                                                         |                                                                        Sign Up                                                                         |
| ![localhost_3000_conferences_4(iPhone 5_SE) (3)](https://user-images.githubusercontent.com/36057474/70428406-d0d05a00-1a76-11ea-9dee-6b9eb9544104.png) | ![localhost_3000_conferences_4(iPhone 5_SE) (4)](https://user-images.githubusercontent.com/36057474/70428447-e04fa300-1a76-11ea-9a3e-6e1ead30c385.png) |
|                                                               Profile page/ My Schedule                                                                |                                                                      Agenda Page                                                                       |
|           ![Profile page/ My Schedule](https://user-images.githubusercontent.com/36057474/70428490-f8272700-1a76-11ea-948c-3015bbbbed13.png)           |                  ![Agenda Page](https://user-images.githubusercontent.com/36057474/70428326-aa122380-1a76-11ea-8242-502ac2cbcf0d.png)                  |

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
   > `bundle install` > `rspec`
4. Commit your changes
   > `git commit -am 'Add some feature'`
5. Push to the branch
   > `git push origin my-new-feature`
6. Create a new Pull Request

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
