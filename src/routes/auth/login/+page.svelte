<script lang="ts">
  import Logo from "$lib/svg/logo.svelte";

  
</script>

<div class="w-full min-h-screen h-0">
  <div class="w-full h-full flex flex-wrap items-stretch -mx-4">
    <div class="w-[35rem] px-4 bg-[var(--primary)] grid place-items-center">
      <div class="w-full max-w-sm px-8 text-white">
        <Logo class="w-40 h-40 mx-auto" />
        <p class="mt-6 text-center text-white/90">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, hic facilis natus, consequuntur deserunt eum tempora quod modi cumque consequatur minima! Natus quibusdam nobis
        </p>
      </div>
    </div>

    <div class="flex-grow px-4 py-4">
      <div class="flex justify-end items-center space-x-4">
        <p class="text-under">Allready have a account?</p>
        <a href="#" class="btn-outline">Sign up</a>
      </div>

      <div class="w-full max-w-lg mt-6 mx-auto">
        <div class="px-16"><img src="/images/login-1.jpg" alt=" " class="w-full"></div>

        <h3 class="text-2xl font-semibold text-center mt-6">Get started With V Staff</h3>
        <p class="mt-2 text-under text-center">Enter your details below</p>

        <form action="" class="mt-8">
          <label for="email" class="uppercase font-semibold text-xs">email address</label>
          <input type="text" class="mt-1 w-full bg-gray-100 px-4 py-2.5 rounded border-gray-200 border text-sm" placeholder="Enter Your Email">

          <div class="mt-4">
            <label for="email" class="uppercase font-semibold text-xs">password</label>
            <input type="password" class="mt-1 w-full bg-gray-100 px-4 py-2.5 rounded border-gray-200 border text-sm" placeholder="Enter Your Email">
          </div>

          <button class="btn mt-6 mx-auto">Get started For Free</button>
        </form>

        <p class="mt-6 text-under text-center">Or continue with these social profile</p>

        <div class="mt-6 flex justify-center space-x-4">
          <span class="icon icon-social">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path></svg>
          </span>

          <span class="icon icon-social">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m18.73 5.41-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z"></path></svg>
          </span>

          <span class="icon icon-social">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.265 3 3 6.236v13.223h4.502V21l2.531.85 2.392-2.391h3.658l4.923-4.924V3H4.265zm15.052 10.691-2.813 2.814h-4.502l-2.391 2.391v-2.391H5.813V4.688h13.504v9.003zm-2.812-5.767v4.923h-1.688V7.924h1.688zm-4.502 0v4.923h-1.688V7.924h1.688z"></path></svg>
          </span>
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  .icon-social {
    @apply w-12 h-12 text-[var(--primary)] bg-gray-100 rounded-full border border-gray-200 p-1.5 hover:bg-[var(--primary)] hover:text-white hover:border-transparent cursor-pointer;
  }
</style>