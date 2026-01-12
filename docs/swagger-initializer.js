window.onload = function () {
  SwaggerUIBundle({
    url: "docs/swagger-docs-uai.yml",
    dom_id: "#swagger-ui",
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    layout: "StandaloneLayout"
  });
};