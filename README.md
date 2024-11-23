# Project Setup Instructions

Follow the steps below to set up and run the project:

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
![Screenshot 2024-11-23 012525](https://github.com/user-attachments/assets/58eb699b-98bd-4c54-8e52-3ae5861d7475)


# 2. Edit client.js:
#    - Update the brokers array with your IPv4 address.
![Screenshot 2024-11-23 012558](https://github.com/user-attachments/assets/0a8de49d-3888-4bcc-8d05-ad11b9c6da4d)

# Step 5: Start Docker Containers
# Open Docker Desktop and run the following command to spin up the containers:
docker compose -f docker-compose.yaml up
# Wait until all containers are successfully initialized.

# Step 6: Start the Server
# Run the following command to start the server:
node server.js
# Create a poll, e.g., "Who is going to win?" with options like ind, pak, nz, aus.
![Screenshot 2024-11-23 015107](https://github.com/user-attachments/assets/9d435980-df7c-4ca1-a465-3f856c23ba46)

# Stop the application using Ctrl+C.

# Step 7: View Poll in MongoDB
# Open MongoDB, navigate to the polls database, and locate the poll collection.
# Copy the _id of the created poll.
![Screenshot 2024-11-23 015132](https://github.com/user-attachments/assets/0d5669b0-60b4-44e4-a846-964c494b6acf)

# Step 8: Create the Topic and Partition
# Open a new terminal tab and run:
node admin.js <poll_id>
# (Replace <poll_id> with the _id you copied earlier.)
![Screenshot 2024-11-23 024401](https://github.com/user-attachments/assets/fa61bd40-0f71-4670-84eb-05733a6d7ac6)

# Step 9: Start the Application Components
# Open new terminal tabs and run the following commands:
node server.js
node consumer.js <poll_id>
# (Replace <poll_id> with the _id of the poll you copied earlier.)
![Screenshot 2024-11-23 024458](https://github.com/user-attachments/assets/4ed58f20-35e2-417c-bc1e-fdc37cf2dbb8)

# Step 10: Access the Application
# Open the application in your browser:
http://localhost:3000

Notes:
- When casting a vote, you can see:
- Now whenever you poll some team you can see which partition is assigned to it , which option have you selected and of which poll in that terminal where you run node consumer.js <PRIVATE_ID>  
![Screenshot 2024-11-23 024557](https://github.com/user-attachments/assets/8e0b7ddb-7de5-4d4f-b90a-1eda01055318)

 
- The leaderboard is currently compatible with a single poll only
