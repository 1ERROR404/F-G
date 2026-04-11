const http = require('http');
const fs = require('fs');
const path = require('path');
const dir = '/workspace/020f4076-9085-44af-ab17-6f27f319a906/sessions/agent_c86bbb95-2272-4beb-83c0-4af236cf15ee';
const mime = {'.html':'text/html','.css':'text/css','.js':'application/javascript','.json':'application/json'};
http.createServer((req,res)=>{
  let fp = path.join(dir, req.url==='/'?'/FG_Dashboard_v2.html':req.url);
  fs.readFile(fp,(err,data)=>{
    if(err){res.writeHead(404);res.end('Not found');return;}
    res.writeHead(200,{'Content-Type':mime[path.extname(fp)]||'text/plain','Access-Control-Allow-Origin':'*'});
    res.end(data);
  });
}).listen(8080,()=>console.log('OK'));
