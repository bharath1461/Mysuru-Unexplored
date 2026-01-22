import http.server
import socketserver
import webbrowser
import socket
import json
import os
from pathlib import Path
from urllib.parse import urlparse, parse_qs

def get_local_ip():
    """Get the local IP address of the machine"""
    try:
        # Connect to a remote address to determine local IP
        with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as s:
            s.connect(("8.8.8.8", 80))
            ip = s.getsockname()[0]
        return ip
    except Exception:
        return "127.0.0.1"

def serve_website(port=8000):
    """Serve the website on the specified port"""
    # Change to the project directory
    project_dir = Path(__file__).parent
    import os
    os.chdir(project_dir)
    
    # Get local IP
    local_ip = get_local_ip()
    
    # Define the handler to serve static files
    class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
        def __init__(self, *args, **kwargs):
            super().__init__(*args, directory=str(project_dir), **kwargs)
        
        def end_headers(self):
            self.send_header('Access-Control-Allow-Origin', '*')
            self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
            self.send_header('Access-Control-Allow-Headers', '*')
            # Set cache control headers to prevent caching issues
            self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate, max-age=0')
            self.send_header('Pragma', 'no-cache')
            self.send_header('Expires', '0')
            # Additional headers to ensure fresh content
            self.send_header('ETag', '')
            super().end_headers()
        
        def do_GET(self):
            # Parse the URL to check if it's a data API request
            parsed_path = urlparse(self.path)
            path_parts = parsed_path.path.strip('/').split('/')
            
            if len(path_parts) >= 2 and path_parts[0] == 'api' and path_parts[1] == 'data':
                # Handle API request to get data
                category = path_parts[2] if len(path_parts) > 2 else None
                
                if category:
                    # Read data from the corresponding file
                    data_file = Path(__file__).parent / 'data' / category / f'{category}.json'
                    
                    if data_file.exists():
                        with open(data_file, 'r', encoding='utf-8') as f:
                            data = json.load(f)
                        
                        self.send_response(200)
                        self.send_header('Content-type', 'application/json')
                        self.end_headers()
                        self.wfile.write(json.dumps(data).encode('utf-8'))
                    else:
                        # Return empty array if file doesn't exist
                        self.send_response(200)
                        self.send_header('Content-type', 'application/json')
                        self.end_headers()
                        self.wfile.write(json.dumps([]).encode('utf-8'))
                else:
                    self.send_response(400)
                    self.end_headers()
            else:
                # Handle regular file serving
                super().do_GET()
        
        def do_POST(self):
            # Parse the URL to check if it's a data API request
            parsed_path = urlparse(self.path)
            path_parts = parsed_path.path.strip('/').split('/')
            
            if len(path_parts) >= 2 and path_parts[0] == 'api' and path_parts[1] == 'data':
                # Handle API request to save data
                category = path_parts[2] if len(path_parts) > 2 else None
                
                if category:
                    # Get the content length and read the data
                    content_length = int(self.headers['Content-Length'])
                    post_data = self.rfile.read(content_length)
                    
                    try:
                        data = json.loads(post_data.decode('utf-8'))
                        
                        # Create the data directory if it doesn't exist
                        data_dir = Path(__file__).parent / 'data' / category
                        data_dir.mkdir(parents=True, exist_ok=True)
                        
                        # Write the data to the corresponding file
                        data_file = data_dir / f'{category}.json'
                        with open(data_file, 'w', encoding='utf-8') as f:
                            json.dump(data, f, ensure_ascii=False, indent=2)
                        
                        self.send_response(200)
                        self.send_header('Content-type', 'application/json')
                        self.end_headers()
                        self.wfile.write(json.dumps({'success': True}).encode('utf-8'))
                    except json.JSONDecodeError:
                        self.send_response(400)
                        self.send_header('Content-type', 'application/json')
                        self.end_headers()
                        self.wfile.write(json.dumps({'success': False, 'error': 'Invalid JSON'}).encode('utf-8'))
                else:
                    self.send_response(400)
                    self.send_header('Content-type', 'application/json')
                    self.end_headers()
                    self.wfile.write(json.dumps({'success': False, 'error': 'Missing category'}).encode('utf-8'))
            else:
                self.send_response(404)
                self.end_headers()

    # Start the server
    with socketserver.TCPServer(("", port), CustomHTTPRequestHandler) as httpd:
        print(f"\n{'='*60}")
        print(f"🌐 Mysuru Unexplored Server Started")
        print(f"{'='*60}")
        print(f"📁 Serving files from: {project_dir}")
        print(f"🔗 Local Access: http://localhost:{port}")
        print(f"📱 Network Access: http://{local_ip}:{port}")
        print(f"📱 Mobile Access: http://{local_ip}:{port}")
        print(f"⏹️  Stop Server: Press Ctrl+C")
        print(f"{'='*60}")
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print(f"\n{'='*60}")
            print("🛑 Server stopped by user")
            print("👋 Thank you for using Mysuru Unexplored!")
            print(f"{'='*60}")

if __name__ == "__main__":
    serve_website()