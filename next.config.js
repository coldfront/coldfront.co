// next.config.js
module.exports = {
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/events": { page: "/events" },
      "/events/spring-masterclasses": { page: "/events/spring-masterclasses" },
      "/why-coldfront": { page: "/why-coldfront" }
    };
  }
};
