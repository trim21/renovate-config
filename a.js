const later = require("@breejs/later");

const s = later.parse.text("every hours except on the 19th day of the month");

console.log(later.schedule(s).next(10));
