    server {&#xD;&#xA;        listen 80;&#xD;&#xA;        server_name mydomain.com;&#xD;&#xA;        location / {&#xD;&#xA;            proxy_pass http://localhost:3001;&#xD;&#xA;            proxy_http_version 1.1;&#xD;&#xA;            proxy_set_header Host $host;&#xD;&#xA;            proxy_cache_bypass $http_upgrade;&#xD;&#xA;        }&#xD;&#xA;    }