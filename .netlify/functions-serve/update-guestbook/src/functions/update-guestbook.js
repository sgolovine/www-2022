var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// functions/update-guestbook.ts
var update_guestbook_exports = {};
__export(update_guestbook_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(update_guestbook_exports);
var handler = async (event) => {
  if (!event.body) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Body Not Found"
      })
    };
  }
  const body = JSON.parse(event.body);
  if (!body.message) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Message Not Found"
      })
    };
  }
  if (!body.author) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Author Missing"
      })
    };
  }
  const template = `${body.message}

  - ${body.author}

  ------
  `;
  console.log(template);
  return {
    statusCode: 201,
    body: JSON.stringify({
      message: "Success"
    })
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=update-guestbook.js.map
