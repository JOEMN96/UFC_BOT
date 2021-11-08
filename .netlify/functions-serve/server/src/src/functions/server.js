// src/functions/server.ts
exports.handler = async (event) => {
  if (event.httpMethod === "GET") {
    return {
      statusCode: 200,
      body: JSON.stringify({})
    };
  } else {
    return {
      statusCode: 404,
      body: JSON.stringify({ MSG: "ERROR" })
    };
  }
};
//# sourceMappingURL=server.js.map
