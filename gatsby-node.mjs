import { helloSync, helloAsync } from "./test-esm-module.mjs"
import { helloSync2, helloAsync2 } from "./test-cjs-module.js"
import slugify from "@sindresorhus/slugify"

// Test ESM imports
const syncResponse = helloSync()
const asyncResponse = await helloAsync()
// console.info(`ESM imports:`, { syncResponse, asyncResponse })

// Test CJS imports
const syncResponse2 = helloSync2()
const asyncResponse2 = await helloAsync2()
// console.info(`CJS imports:`, { syncResponse2, asyncResponse2 })

// Test third-party ESM-only packages
// console.info(slugify(`I ♥ gatsby node`))

const onPreBuild = () => {
  // console.log(`I AM IN PRE BUILD`)
}

export { onPreBuild }
