<template>
  <div class="flex flex-col w-screen min-h-screen">
    <div style="background:#111;" class="flex flex-row border border-black border-l-0 border-r-0 items-center justify-center p-2">
      <span class="text-sm font-semibold text-gray-200">We've released Neutron to the public!</span>
      <span class="ml-4 mr-4 text-xs text-gray-400">|</span>
      <button class="text-sm font-semibold text-gray-200" type="button">Read more 👉</button>
    </div>
    <!-- Navigation Bar -->
    <nav style="background:rgba(0,0,0,.85);" class="sticky top-0 flex w-full items-center justify-center p-4 shadow-sm nc-nav border border-t-0 border-l-0 border-r-0 border-b-0 z-50 border-gray-100">
      <div class="flex flex-row w-11/12 max-w-5xl justify-between">
        <n-link class="flex flex-row items-center justify-center mr-auto" to="/">
          <img style="width: 120px;" src="/Sidebar-brandmark.svg"/>
        </n-link>
        <ul class="flex flex-row items-center justify-center text-gray-300 text-sm">
          <n-link to="/">
            <li class="p-2 pl-4 pr-4 hover:text-gray-100 cursor-pointer rounded">Overview</li>
          </n-link>
          <n-link to="/features">
            <li class="p-2 pl-4 pr-4 hover:text-gray-100 cursor-pointer rounded">Features</li>
          </n-link>
          <n-link to="/community">
            <li class="p-2 pl-4 pr-4 hover:text-gray-100 cursor-pointer rounded">Community</li>
          </n-link>
          <n-link to="/pricing"><li class="p-2 pl-4 pr-4 hover:text-gray-100 cursor-pointer rounded">Pricing</li></n-link>
          <iframe style="transform: scale(.8);" src="https://ghbtns.com/github-btn.html?user=neutron-creative&repo=neutron&type=star&count=true&size=large" frameborder="0" scrolling="0" width="170" height="30" title="GitHub"></iframe>
        </ul>
        <ul class="flex flex-row text-gray-300">
          <a href="https://client.neutron.so">
            <li class="p-2 pl-4 pr-4 hover:text-white cursor-pointer text-sm rounded">Login</li>
          </a>
          <a href="https://client.neutron.so/create-account">
            <li class="flex ml-2 p-2 pl-4 pr-4 bg-indigo-600 hover:bg-indigo-500 cursor-pointer text-xs rounded text-white font-medium uppercase tracking-wide shadow justify-center items-center">Get started free</li>
          </a>
        </ul>
      </div>
    </nav>
    <Nuxt />
    <section class="flex flex-col w-full nc-purple-bg items-center justify-content p-8 md:p-20 bg-black">
      <div class="flex flex-col md:flex-row w-full max-w-5xl justify-between">
        <div class="flex flex-col">
          <h2 class="text-white font-bold text-5xl mb-2">Ready to get started?</h2>
          <p class="text-gray-300 text-xl max-w-2xl leading-relaxed">Join one of the fastest growing communities on the web in a mission to build better websites.</p>
        </div>
        <div class="flex flex-col items-center justify-center mt-4 md:mt-0">
          <button class="text-xs uppercase p-4 pl-6 pr-6 rounded bg-indigo-600 hover:bg-indigo-500 font-semibold text-white shadow tracking-wide w-full mb-4">Add your first website</button>
          <button class="text-xs uppercase p-4 pl-6 pr-6 rounded bg-white hover:bg-gray-200 font-semibold text-black shadow tracking-wide w-full">Schedule a demo</button>
        </div>
      </div>
    </section>
    <footer style="background:#111;" class="flex w-full justify-center text-center text-gray-600 text-sm mt-auto border border-black border-l-0 border-r-0 border-b-4 p-8">
      <div class="flex flex-col w-full max-w-5xl">
        <div class="flex flex-row w-full text-left">
          <ul class="flex flex-col w-full lg:w-1/4 p-4">
            <h4 class="text-gray-300 mb-4">Features</h4>
            <li class="text-gray-500 hover:text-white cursor-pointer p-1 pl-0 pr-0 mb-2">Neutron Web Suite</li>
            <li class="text-gray-500 hover:text-white cursor-pointer p-1 pl-0 pr-0 mb-2">Singlelink</li>
            <li class="text-gray-500 hover:text-white cursor-pointer p-1 pl-0 pr-0 mb-2">WordPress Together</li>
          </ul>
          <ul class="flex flex-col w-full lg:w-1/4 p-4">
            <h4 class="text-gray-300 mb-4">Resources</h4>
            <li class="text-gray-500 hover:text-white cursor-pointer p-1 pl-0 pr-0 mb-2">Documentation</li>
            <li class="text-gray-500 hover:text-white cursor-pointer p-1 pl-0 pr-0 mb-2">Knowledgebase</li>
            <li class="text-gray-500 hover:text-white cursor-pointer p-1 pl-0 pr-0 mb-2">API Reference</li>
            <li class="text-gray-500 hover:text-white cursor-pointer p-1 pl-0 pr-0 mb-2">OSS (Open-Source Software)</li>
          </ul>
          <ul class="flex flex-col w-full lg:w-1/4 p-4">
            <h4 class="text-gray-300 mb-4">Application</h4>
            <li class="text-gray-500 hover:text-white cursor-pointer p-1 pl-0 pr-0 mb-2">Login</li>
            <li class="text-gray-500 hover:text-white cursor-pointer p-1 pl-0 pr-0 mb-2">Create an account</li>
            <li class="text-gray-500 hover:text-white cursor-pointer p-1 pl-0 pr-0 mb-2">Reset your password</li>
            <li class="text-gray-500 hover:text-white cursor-pointer p-1 pl-0 pr-0 mb-2">Get support</li>
          </ul>
          <ul class="flex flex-col w-full lg:w-1/4 p-4">
            <h4 class="text-gray-300 mb-4">Legal</h4>
            <li class="text-gray-500 hover:text-white cursor-pointer p-1 pl-0 pr-0 mb-2">Terms of use</li>
            <li class="text-gray-500 hover:text-white cursor-pointer p-1 pl-0 pr-0 mb-2">Privacy policy</li>
            <li class="text-gray-500 hover:text-white cursor-pointer p-1 pl-0 pr-0 mb-2">SLA (Service Level Agreement)</li>
          </ul>
        </div>
        <div class="flex flex-row w-full p-4">
          <div class="flex flex-col">
            <n-link class="flex flex-col justify-center mb-4" to="/">
              <img style="width: 120px;" src="/Sidebar-brandmark.svg"/>
            </n-link>
            <p class="text-gray-500">Copyright ©2020 Neutron Creative Inc. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
    <!-- Dark Mode -->
  </div>
</template>

<style>
  .nc-nav {
    backdrop-filter: saturate(180%) blur(5px);
  }
  body {
    background:#111;
  }
</style>

<style>
  @import url('https://rsms.me/inter/inter.css');
  html {
    font-family:
            'Inter',
            -apple-system,
            BlinkMacSystemFont,
            Roboto,
            'Helvetica Neue',
            Arial,
            sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }
</style>

<script>
  export default {
    data: function () {
      return {
      };
    }
  };
</script>

<style>
  .leadup {
    width: 1px;
    height: 115px;
    background: linear-gradient(rgba(83,83,236,0), #5353EC);
  }
  .circle {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 40px;
    color: #FFF;
    font-weight: 500;
    font-size: 1.2em;
    background: linear-gradient(#5353EC, #4242DB);
  }
</style>
