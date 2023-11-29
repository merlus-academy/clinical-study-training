# Fullstack training - Clinical study example
This is a project for training on Fullstack development. We will be building simple clinical trial study system to learn concept

This will follow a monorepo architecture (i.e. every parts of the project will be in the same repository)

## Concept
We will keep each part of the application very simple, assessments will only be linear, with a limited type of questions. Designs will be simple using tailwind where possible

We will use technologies we know wherever possible (VueJS, NodeJS)

We will be writting some unit test, simple integration test, and end to end tests

## Proposed architecture of applications

- Databases: a SQL database and a separate Mongo DB database. The purpose is to have some separation for security reason, as well as learning both concepts
- Clinical study Frontend: a relatively simple frontend: it allows to login to a study as a subject, and complete assessments. The idea is that this frontend can be turned into a mobile app. We will explore both the PWA option, and using CapacitorJS as a wrapper to add native functionalities.
- Study Management Frontend: this will be a more complex part, where studies will be built. i.e. we create the list of assignments, questions and schedule.
- Study Management backend API: This is where most of the logic will happen. It will take care of the authentication and showing the right assignment to the right subject. Connection to the database will be configured "manually" rather than with an ORM in order to learn.
- Authentication microservice: a service that mostly handle verifying usernames and passwords, and jwt
- Scheduler microservice: used for sending email reminders (maybe push notifications?). Might create proxy emails.
- Study enrolment service: This will be a service to enrol subjects. This will be the only place where subject identifiable details will be stored. it will be a multipage application where the frontend is generated through templates. This is in order to learn MVC architecture


## Proposed Databases structured:

We will be using a mix of relational (PostgreSQL) and NoSQL (MongoDB) databases to learn both concepts. We won't use ORM so that we can learn SQL and Mongo queries.

- a database for storing assessment results for each study. it will also store study builder data.
- an authentication database: will store password and stuff securely
- a personal information database: will store subject identifiable info such as name and email.


## Concepts to learn:

- micro service architecture
- MVC architecture (Model View Controller)
- SQL
- NoSQL
- Rest API
- RabbitMQ?
- gRPC?
- Socket?
- Queue?
- CSS animations
- View Transitions API
- API Gateway?
- Docker
- CI/CD (through github actions)
- Kubernetes?
- and more

### Design patterns:
- [Repository pattern](https://medium.com/@pererikbergman/repository-design-pattern-e28c0f3e4a30)
- [Factory pattern]()
- [Proxy pattern]()
- [Strategy pattern]()
- [Observer pattern]()
- [Decorator pattern]()
- [Singleton pattern]()
- [Dependency Injection pattern]()
