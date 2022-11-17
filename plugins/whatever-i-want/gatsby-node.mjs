const onPreBuild = (_, options) => {
  // console.log(`WHATEVER I WANT GATSBY-NODE`)
  // Test third-party ESM-only packages the same way we pass remark/rehype modules in
  // console.info(options.slugify(`I ♥ local plugin gatsby config`))
}

export { onPreBuild }
