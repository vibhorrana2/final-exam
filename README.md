This project is a modular TypeScript backend system designed for a Movie Production Company. It manages people involved in productions (actors, directors, and production staff), their roles, and salaries via contracts.
Module Structure
Each module consists of:
A TypeScript model (.ts) representing data types
An API handler (Api.ts) for basic routes
A unit test (Api.test.ts) using Supertest + Jest
An index.ts for clean exports
 Modules
1.  Persons
Tracks everyone the company hires — actors, directors, and staff.
File: persons.ts
Fields:
union_id: unique ID for the person
name: name of the person
date_of_birth: date of birth
nationality: nationality
biography: brief biography
contact_info: contact information
2.  Contracts
Links people to productions and tracks their salaries (per movie).
File: contracts.ts
Fields:
contract_id: UUID per production
union_id: person involved
movie_id: production ID
salary: amount paid
3.  Production Staff
Defines which people are part of the staff and their job roles.
File: productionStaff.ts
Fields:
union_id: person working
role_id: role they hold (linked to Roles)
4.  Roles
Defines available staff roles like Editor, Camera Operator, etc.
File: roles.ts
Fields:
role_id: ID of the role
role_name: title of the role
API Endpoints
Example endpoints included for each module:
Endpoint
Method
Description
/api/persons
GET
Returns all persons
/api/contracts
GET
Returns all contract data
/api/production-staff
GET
Returns production staff assignments
/api/roles
GET
Returns list of all roles
Each module includes a basic mock response using Express.
Testing
Tests are written using Jest + Supertest
Located in files like personsApi.test.ts, contractsApi.test.ts, etc.
Example: GET /api/persons returns a mock list of people
To run tests:
 File Structure
Here's an example of how your project directory might look:
├── src
│   ├── modules
│   │   ├── persons.ts
│   │   ├── contracts.ts
│   │   ├── productionStaff.ts
│   │   ├── roles.ts
│   │   ├── personsApi.ts
│   │   ├── contractsApi.ts
│   │   ├── productionStaffApi.ts
│   │   ├── rolesApi.ts
│   │   ├── personsApi.test.ts
│   │   ├── contractsApi.test.ts
│   │   ├── productionStaffApi.test.ts
│   │   ├── rolesApi.test.ts
│   │   ├── index.ts
│   ├── server.ts
├── package.json
├── tsconfig.json
├── jest.config.js
└── README.md
