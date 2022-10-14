module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
  
  //base name
  //https://github.com/charles-mrt.github.io/ignite-lab-design-system
  viteFinal: (config, { configType }) => {
    const baseName = '/ignite-lab-design-system';
    if (configType === 'PRODUCTION' ) {
      condfig.base = baseName;
    }
  }
}