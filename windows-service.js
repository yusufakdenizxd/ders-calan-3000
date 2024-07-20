const Service = require("node-windows").Service;

const svc = new Service({
  name: "Ders-calan-3000",
  description: "HTTP Requester for ITU as a Windows service.",
  script: "C:\\path\\to\\your\\app\\index.js",
});

svc.on("install", () => {
  svc.start();
});

svc.install();
