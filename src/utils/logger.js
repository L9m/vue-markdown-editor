const Logger = new Proxy(
    {},
    {
      get(target, prop) {
        if (typeof console !== 'undefined' && prop in console) {
          return console[prop];
        }
        return () => {};
      },
    },
  );
  
  export default Logger;