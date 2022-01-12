module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3e1f41f2deb901d97e43dbced29584a2'),
  },
});
