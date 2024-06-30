var plugins = [{
      name: 'gatsby-plugin-manifest',
      plugin: require('C:/Users/tobyh/Desktop/coding-projects/tobyhogan-space/node_modules/.pnpm/gatsby-plugin-manifest@5.13.1_gatsby@5.13.6_babel-eslint@10.1.0_eslint@7.32.0__react-dom@18.3_jlbmpt4hr46nhk5wd2yeymkmua/node_modules/gatsby-plugin-manifest/gatsby-ssr.js'),
      options: {"plugins":[],"icon":"src/assets/icon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"fbbdb40488fd9905461d5a44dd88e664"},
    },{
      name: 'partytown',
      plugin: require('C:/Users/tobyh/Desktop/coding-projects/tobyhogan-space/node_modules/.pnpm/gatsby@5.13.6_babel-eslint@10.1.0_eslint@7.32.0__react-dom@18.3.1_react@18.3.1__react@18.3.1__mq6ksqwrbnjt5mkthjz6fiytki/node_modules/gatsby/dist/internal-plugins/partytown/gatsby-ssr.js'),
      options: {"plugins":[]},
    }]
/* global plugins */
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

function augmentErrorWithPlugin(plugin, err) {
  if (plugin.name !== `default-site-plugin`) {
    // default-site-plugin is user code and will print proper stack trace,
    // so no point in annotating error message pointing out which plugin is root of the problem
    err.message += ` (from plugin: ${plugin.name})`
  }

  throw err
}

export function apiRunner(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  const results = []
  plugins.forEach(plugin => {
    const apiFn = plugin.plugin[api]
    if (!apiFn) {
      return
    }

    try {
      const result = apiFn(args, plugin.options)

      if (result && argTransform) {
        args = argTransform({ args, result })
      }

      // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4
      if (typeof result !== `undefined`) {
        results.push(result)
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e)
    }
  })

  return results.length ? results : [defaultReturn]
}

export async function apiRunnerAsync(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  const results = []
  for (const plugin of plugins) {
    const apiFn = plugin.plugin[api]
    if (!apiFn) {
      continue
    }

    try {
      const result = await apiFn(args, plugin.options)

      if (result && argTransform) {
        args = argTransform({ args, result })
      }

      // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4
      if (typeof result !== `undefined`) {
        results.push(result)
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e)
    }
  }

  return results.length ? results : [defaultReturn]
}
