import http.server
import socketserver

PORT = 8000

# Handler pour servir les fichiers statiques
Handler = http.server.SimpleHTTPRequestHandler

# Configuration du serveur
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving at port {PORT}")
    httpd.serve_forever()