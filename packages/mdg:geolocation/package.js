Package.describe({
  name: "mdg:geolocation",
  summary: "Provides reactive geolocation on desktop and mobile.",
  version: "1.0.0-rc0"
});

Cordova.depends({
  "org.apache.cordova.geolocation": "0.3.9"
});

Package.on_use(function (api) {
  api.use(["reactive-var"]);
  api.versionsFrom("0.9.1");
  api.add_files(["geolocation.js"], "client");
  api.export("Geolocation", "client");
});