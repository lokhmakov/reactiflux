// TODO: https://github.com/vercel/turbo/issues/1600
module.exports = {
  root: true,
  extends: ['custom'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
}
