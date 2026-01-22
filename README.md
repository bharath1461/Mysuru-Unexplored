# Mysuru Unexplored - Local Server Setup

This project can be run locally using Python's built-in HTTP server.

## Prerequisites

- Python 3.x installed on your machine

## How to Run

1. Open a terminal/command prompt
2. Navigate to this directory (where server.py is located)
3. Run the following command:

```bash
python server.py
```

4. The server will start and show the URLs you can use to access the website:
   - Local access: `http://localhost:8000`
   - Network access: `http://[your-local-ip]:8000`

## Access from Mobile Device

1. Make sure your phone is connected to the same WiFi network as your computer
2. Check the IP address shown when you run the server (e.g., `http://192.168.1.100:8000`)
3. Open your mobile browser and go to that address
4. You should now be able to access the Mysuru Unexplored website from your phone

## Stopping the Server

Press `Ctrl+C` in the terminal to stop the server.

## Troubleshooting

- If you can't access from your phone, make sure your computer's firewall allows incoming connections on port 8000
- Ensure both devices are on the same network
- Some routers may have client isolation enabled - check your router settings if you have issues