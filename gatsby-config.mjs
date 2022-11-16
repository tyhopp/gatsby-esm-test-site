import { helloSync, helloAsync } from "./test-esm-module.mjs"
import { helloSync2, helloAsync2 } from "./test-cjs-module.js"

// Test ESM imports
const syncResponse = helloSync()
const asyncResponse = await helloAsync()
console.info(`ESM imports:`, { syncResponse, asyncResponse })

// Test CJS imports
const syncResponse2 = helloSync2()
const asyncResponse2 = await helloAsync2()
console.info(`CJS imports:`, { syncResponse2, asyncResponse2 })

const config = {
  plugins: [],
}

export default config
