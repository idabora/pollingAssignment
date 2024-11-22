# Project Setup Instructions

Follow the steps below to set up and run the project:

```bash
# Step 1: Clone the Repository
git clone <repository-url>

# Step 2: Install Dependencies
cd <project-folder>
create a new .env file and paste these contents

MONGO_URI=mongodb://localhost:27017/polls
PORT=3000

npm init -y
npm i

# Step 3: Get Your IPv4 Address
# Run the following command to find your IPv4 address:
ipconfig
# Copy the IPv4 address of your Wireless LAN (e.g., 192.168.xx.xx) if you are on WiFi.
![Picture](/images/first.png)



# Step 4: Update Configuration Files
# Open the project folder in your code editor:
# 1. Edit docker-compose.yaml:
#    - Replace <PRIVATE_IP> with your IPv4 address in two places.
![Screenshot 2024-11-23 012525](https://github.com/user-attachments/assets/133e80f1-11be-4a23-ae75-614e75cecada)


# 2. Edit client.js:
#    - Update the brokers array with your IPv4 address.
![Screenshot 2024-11-23 012558](https://github.com/user-attachments/assets/7655c02a-d562-4249-8cba-bec2015f41a7)

# Step 5: Start Docker Containers
# Open Docker Desktop and run the following command to spin up the containers:
docker compose -f docker-compose.yaml up
# Wait until all containers are successfully initialized.

# Step 6: Start the Server
# Run the following command to start the server:
node server.js
# Create a poll, e.g., "Who is going to win?" with options like ind, pak, nz, aus.
![Screenshot 2024-11-23 015107](https://github.com/user-attachments/assets/64ab2e57-ed1a-4d1b-b8e5-1f5955ae8be0)

# Stop the application using Ctrl+C.

# Step 7: View Poll in MongoDB
# Open MongoDB, navigate to the polls database, and locate the poll collection.
# Copy the _id of the created poll.
![Screenshot 2024-11-23 015132](https://github.com/user-attachments/assets/d18ccb0f-89fa-44a0-a5cb-5f7a81007da2)

# Step 8: Create the Topic and Partition
# Open a new terminal tab and run:
node admin.js <poll_id>
# (Replace <poll_id> with the _id you copied earlier.)
![Screenshot 2024-11-23 024557](https://github.com/user-attachments/assets/df987130-ed3c-46d9-ae0e-d5e881b0a635)

# Step 9: Start the Application Components
# Open new terminal tabs and run the following commands:
node server.js
node consumer.js <poll_id>
# (Replace <poll_id> with the _id of the poll you copied earlier.)
![Screenshot 2024-11-23 024458](https://github.com/user-attachments/assets/1fb1bcfd-3b85-4fd5-ab77-fd20250db998)

# Step 10: Access the Application
# Open the application in your browser:
http://localhost:3000

Notes:
- When casting a vote, you can see:
- Now whenever you poll some team you can see which partition is assigned to it , which option have you selected and of which poll in that terminal where you run node consumer.js <PRIVATE_ID>  
![Screenshot 2024-11-23 024401](https://github.com/user-attachments/assets/f4d3c780-24da-4bcd-bdf7-39e35908d671)

 
- The leaderboard is currently compatible with a single poll only
