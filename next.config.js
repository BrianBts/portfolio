module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/second',
          permanent: true,
        },
      ];
    },
  };