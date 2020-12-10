<template>
  <section class="p-8 md:p-16 flex flex-col items-center justify-content bg-black">
    <div class="w-full max-w-4xl flex flex-col items-center justify-content text-center">
      <h1 style="font-weight: 800; line-height:1.2; letter-spacing:-2px;" class="text-5xl large-text max-w-4xl text-white mb-8 mt-8 lg:mt-0">Put your websites on <span class="text-indigo-600" style="text-shadow: 0 0 65px rgba(88, 80, 236, .85);">autopilot</span></h1>
	  <!--
		<div class="flex flex-col md:flex-row mb-10 w-full items-center justify-center">
		  <button class="flex flex-row items-center justify-center text-center rounded shadow text-white uppercase font-medium tracking-wide p-4 pl-6 pr-6 bg-indigo-600 hover:bg-indigo-500 mr-4">Join the waitlist</button>
			<button class="flex flex-row items-center justify-center text-center rounded shadow text-white uppercase font-medium tracking-wide p-4 pl-6 pr-6 bg-indigo-600 hover:bg-indigo-500 mr-4">Add your first website free</button>
			<button class="flex flex-row items-center justify-center text-center rounded shadow text-white uppercase font-medium tracking-wide p-4 pl-6 pr-6 bg-gray-900 hover:bg-gray-800 mr-4">View plans &amp; pricing</button>
      </div>
		  -->
      <p class="text-gray-500 text-xl mb-12">Neutron is the ultimate automated webmaster tool combined with an intuitive workflow, making your websites faster, more secure, and infitely scalable in one-click.</p>
	  <a href="https://www.producthunt.com/upcoming/neutron" class="flex flex-row items-center justify-center text-center rounded shadow text-white uppercase font-medium tracking-wide p-4 pl-6 pr-6 bg-indigo-600 hover:bg-indigo-500 mb-32">Join the waitlist</a>
      <h3 style="letter-spacing: 2px;" class="uppercase text-white font-medium">Explore the Neutron way</h3>
      <div class="leadup"></div>
      <div class="circle mb-4">1</div>
      <h3 class="text-indigo-600 text-3xl font-bold mb-2">One-click Import</h3>
      <h2 class="text-white text-4xl lg:text-5xl font-bold">Get started in seconds</h2>
		<div class="flex flex-col lg:flex-row text-left text-gray-500 font-medium mb-16 text-xl justify-center items-center w-full max-w-4xl">
			<div class="w-full lg:w-1/2 p-8 text-center lg:text-left">
				<p>With one-click import, Neutron makes it easy to make your sites faster, more secure, and scalable in seconds with just one-click. Simply enter your domain name, and click!</p>
			</div>
			<img class="w-full lg:w-1/2 p-8 h-auto order-first lg:order-none" src="/add-site.png">
		</div>
    </div>

	<div class="leadup"></div>
	<div class="circle mb-4">2</div>
	<h3 class="text-indigo-600 text-3xl font-bold mb-2 text-center">Git-integrated site management</h3>
	<h2 class="text-white text-4xl lg:text-5xl font-bold text-center">Take control with versioned environments</h2>
	<div class="flex flex-col lg:flex-row text-left text-gray-500 font-medium mb-16 text-xl justify-center items-center w-full max-w-4xl">
		<img class="w-full lg:w-1/2 p-8 h-auto order-first lg:order-none" src="/git-websites.png" />
		<div class="w-full lg:w-1/2 p-8 text-center lg:text-left">
			<p>
				Neutron brings the power of Git version control to every website. Audit website changes, manage staging &amp; production environments with branching, get real-time backups with one-click rollback, and deploy with confidence.
			</p>
		</div>
	</div>
	
	<div class="leadup"></div>
	<div class="circle mb-4">3</div>
	<h3 class="text-indigo-600 text-3xl font-bold mb-2 text-center">Websites supercharged</h3>
	<h2 class="text-white text-4xl lg:text-5xl font-bold text-center">Faster, more secure, & infinity scalable</h2>
	<div class="flex flex-col lg:flex-row text-left text-gray-500 font-medium mb-16 text-xl justify-center items-center w-full max-w-4xl">
		<div class="w-full lg:w-1/2 p-8 text-center lg:text-left">
			<p>
				Websites on Neutron are better in every way by making proven enterprise solutions affordable &amp; one-click away. With servers up to 160x faster than the competition, deploy quicker with Neutron.
			</p>
		</div>
		<img class="w-full lg:w-1/2 p-8 h-auto order-first lg:order-none" src="/get-neutron.png" />
	</div>
  </section>
</template>
<style>
	@media(min-width:1028px) {
		.large-text {
			font-size: 6.6em !important;
			letter-spacing:-4px !important;
			line-height:1.1 !important;
		}
	}
</style>
