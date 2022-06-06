import { defineBuildConfig } from 'unbuild';
import fg from 'fast-glob';
export default defineBuildConfig({
  entries: [...fg.sync('src/commands/*.ts').map(i => i.slice(0, -3))],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
});
