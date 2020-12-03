export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Neutron | Better websites in one click',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Neutron is the ultimate automated webmaster tool combined with an intuitive workflow, making your websites faster, more secure, and more affordable in one-click.' },
		{ hid: 'og:type', name: 'og:type', content: 'website' },
		{ hid: 'og:url', name: 'og:url', content: 'https://neutron.so' },
		{ hid: 'og:title', name: 'og:title', content: 'Neutron | Better websites in one click' },
		{ hid: 'og:description', name: 'og:description', content: 'Neutron is the ultimate automated webmaster tool combined with an intuitive workflow, making your websites faster, more secure, and more affordable in one-click.' },
		{ hid: 'og:image', name: 'og:image', content: 'https://neutron.so/open-graph-image.png' },
		{ hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
		{ hid: 'twitter:url', name: 'twitter:url', content: 'https://neutron.so' },
		{ hid: 'twitter:title', name: 'twitter:title', content: 'Neutron | Better websites in one click' },
		{ hid: 'twitter:description', name: 'twitter:description', content: 'Neutron is the ultimate automated webmaster tool combined with an intuitive workflow, making your websites faster, more secure, and more affordable in one-click.' },
		{ hid: 'twitter:image', name: 'twitter:image', content: 'https://neutron.so/open-graph-image.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
