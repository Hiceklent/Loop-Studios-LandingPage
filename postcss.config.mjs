import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

export default {
  plugins: [
    autoprefixer({
      overrideBrowserslist: ['last 2 versions', '> 1%', 'ie 11']
    }),
    cssnano({ preset: 'default' })
  ]
};