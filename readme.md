### Database Setup Guide for KAM Lead Management System

This guide provides step-by-step instructions to set up the MySQL database, configure the backend, and run the frontend for the **KAM Lead Management System**.

---

### Step 1: Install MySQL Workbench CE
1. Download and install **MySQL Workbench CE** from the official website:
   [MySQL Workbench Download](https://dev.mysql.com/downloads/workbench/).
2. Follow the installation instructions for your operating system.

---

### Step 2: Create a Database Connection
1. Open **MySQL Workbench CE**.
2. Click on the **"+"** icon next to "MySQL Connections" to create a new connection.
3. Configure the connection with the following details:
   - **Connection Name**: `KAM_LEAD_MANAGEMENT`
   - **Hostname**: `localhost`
   - **Username**: `root`
   - **Password**: `Kam123456` (ensure this matches the password in your backend configuration).
4. Click **Test Connection** to verify the connection. If successful, click **OK** to save.

---

### Step 3: Create the Database
1. Open the newly created connection (`KAM_LEAD_MANAGEMENT`).
2. In the query editor, run the following SQL commands to create and use the database:
   ```sql
   CREATE DATABASE kam_lead_management;
   USE kam_lead_management;
   ```
3. Verify that the database is created by checking the **Schemas** section in MySQL Workbench.

---

### Step 4: Configure Backend
1. Ensure the backend is configured to connect to the MySQL database. Update the configuration file (e.g., `config.js` or `env` file) with the following details:
   ```javascript
   module.exports = {
     HOST: 'localhost',
     USER: 'root',
     PASSWORD: 'Kam123456',
     DB: 'kam_lead_management',
     dialect: 'mysql',
   };
   ```
2. Install backend dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   npm start
   ```
4. The backend will automatically create the required tables in the `kam_lead_management` database.

---

### Step 5: Set Up Frontend
1. Navigate to the frontend directory.
2. Install frontend dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm start
   ```
4. The frontend application will launch in your default browser.

---

### Additional Notes:
- **Database Password**: Ensure the password (`Kam123456`) is securely stored and matches the configuration in both MySQL Workbench and the backend. Please refer this document for setting the password in the DB https://ultahost.com/knowledge-base/change-mysql-workbench-password/
- **Environment Variables**: For production, consider using environment variables to store sensitive information like database credentials.
- **Database Backups**: Regularly back up the `kam_lead_management` database to prevent data loss.

---

### Troubleshooting:
- **Connection Issues**: Verify that MySQL Server is running and the credentials are correct.
- **Dependency Errors**: Ensure you have the correct versions of Node.js and npm installed. Run `npm install` to resolve missing dependencies.
- **Table Creation Errors**: Check the backend logs for any errors during table creation.

---

