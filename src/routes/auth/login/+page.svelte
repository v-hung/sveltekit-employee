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
          <label for="email" class="uppercase font-semibold text-sm">email address</label>
          <input type="text" class="mt-1 w-full bg-gray-100 px-4 py-2.5 rounded border-gray-200 border text-sm" placeholder="Enter Your Email">

          <button class="btn mt-6 mx-auto">Get started For Free</button>
        </form>

        <p class="mt-6 text-under text-center">Or continue with these social profile</p>

        <div class="mt-6 flex justify-center space-x-2">
          <span class="icon w-11 h-11 text-primary rounded-full border p-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path></svg>
          </span>
        </div>
      </div>
    </div>
  </div>
</div>