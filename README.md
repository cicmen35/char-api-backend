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
- docker

### Setup
1. Clone the repo

2. **Configure environment**
    - Create a `.env` file in the **project root**
      ```
      DATABASE_URL=your_postgres_string
      ```

3. **Build the image**
    ```
    docker build -t your-image-name .
    ```

4. **Run the container**
    ```
    docker run --env-file .env -p 3000:3000 your-image-name
    ```
    - app will be available at [http://localhost:3000/api/data](http://localhost:3000/api/data)

5. **Or using docker compose**
    ```
    docker compose up --build
    ```

---

### Run without Docker
1. Install dependencies
    ```
    npm install
    ```
2. Set up Prisma
    ```
    npx prisma generate
    ```
3. Run the server
    ```
    npm run dev
    ```
    - GET '/' returns the initial info
    - GET '/api/data' returns the required json response

### Future improvements
- process the retrieved data for further usage
- migrate to TypeScript for type safety
- add input validation and error handling for new endpoints 
- add automated tests 
- deploy the app
