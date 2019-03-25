// next.config.js
module.exports = {
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/events": { page: "/events" },
      "/events/summer-masterclasses": { page: "/events/summer-masterclasses" },
      "/why-coldfront": { page: "/why-coldfront" }
    };
  }
};
