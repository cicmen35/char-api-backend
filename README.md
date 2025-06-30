## API BE
REST API connected to a database providing endpoint to read all character data and returning statistics.

### Features
- fetching all characters with their nemesis and secrets in JSON
- getting statistics: total count, average age, average weight, gender distribution

### Stack
- node
- express
- prisma ORM
- postgreSQL

### Setup
1. Clone the repo

2. Install dependencies
    ```
    npm install
    ```
3. Configure environment
- create .env file in the project root (.env file is created automatically when initialising Prisma):
    ```
    DATABASE_URL=your_postgres_string
    ```
4. Set up Prisma
    ```
    npx prisma generate
    ```    
5. Run the server
    ```
    node index.js
    ```
    - GET '/' returns the initial info
    - GET '/api/data' returns the required json response

### Future improvements
- process the retrieved data for further usage
- migrate to TypeScript for type safety
- add input validation and error handling for new endpoints 
- add automated tests 
- deploy the app
