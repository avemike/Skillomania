import pino from "pino-http";

export const configuredPino = pino({
  serializers: {
    req: (req) => {
      const { id, method, url, query, params, body, ...hidden } = req;

      const hiddenKeys = Object.keys(hidden).join(", ");

      return {
        id,
        method,
        url,
        query,
        params,
        body,
        hidden: hiddenKeys,
      };
    },
    res: (res) => {
      const { statusCode, headerKeys, ...hidden } = res;

      const hiddenKeys = Object.keys(hidden).join(", ");

      return {
        statusCode,
        headers: headerKeys,
        hidden: hiddenKeys,
      };
    },
  },
});
