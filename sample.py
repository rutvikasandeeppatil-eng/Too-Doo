users = {
    "harshitha": "pass123"
}

username = input("Enter username: ")
password = input("Enter password: ")

if username not in users:
    print("Invalid username")
elif users[username] != password:
    print("Invalid password")
else:
    print("Login successful")
