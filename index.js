module.exports = () => {
  return {
    flat: function(obj, depth = 1) {
      if (typeof obj === "object") {
        if (Array.isArray(obj)) {
          return obj.reduce(function(flat, toFlatten) {
            return flat.concat(
              Array.isArray(toFlatten) && depth > 1
                ? toFlatten.flat(depth - 1)
                : toFlatten
            );
          }, []);
        } else {
          throw new Error("Flattening for json objects not supported yet.");
        }
      } else {
        throw new Error("Not an object.");
      }
    }
  };
};
