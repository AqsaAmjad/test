const withtailwindcss = require('@tailwindcss/typography');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = 
    withtailwindcss({
        webpack(config, options) {
          config.optimization.minimizer = [];
          config.optimization.minimizer.push(new withtailwindcss({}));

        return config;
      }
    });

module.exports = withPlugins([
  [optimizedImages, {
    /* config for next-optimized-images */
    // but you can overwrite them here with any valid value you want.
      images: {
        disableStaticImages: true
      },
    inlineImageLimit: 8192,
    imagesFolder: 'images',
    imagesName: '[name]-[hash].[ext]',
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    removeOriginalExtension: false,
    optimizeImages: true,
    optimizeImagesInDev: false,
    mozjpeg: {
      quality: 80,
    },
    optipng: {
      optimizationLevel: 3,
    },
    pngquant: false,
    gifsicle: {
      interlaced: true,
      optimizationLevel: 3,
    },
    svgo: {
      // enable/disable svgo plugins here
    },
    webp: {
      preset: 'default',
      quality: 75,
    },
  }],

  // your other plugins here

]);

const withImages = require('next-images')
module.exports = withImages()
// module.exports = {
//   images: {
//     disableStaticImages: true,
//   },
//   handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
// }
// module.exports = {
//   reactStrictMode: true, // was there by default
//   webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//     config.module.rules.push({
//       test: /\.my-file$/i,
//       loader: "raw-loader",
//     });

//     // Important: return the modified config
//     return config;
//   },
// };
