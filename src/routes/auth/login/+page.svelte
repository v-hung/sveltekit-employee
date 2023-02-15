<script lang="ts">
  import { goto } from "$app/navigation";
  import { auth } from "$lib/client/fb";
  import Logo from "$lib/svg/logo.svelte";
  import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

  let email: string = ""
  let password: string = ""

  const loginWithEmailAndPassword = async () => {
    try {
      signInWithEmailAndPassword(auth, email, password)

      await goto("/");

    } catch (e) {
      console.log('login with google error', e);
    }
  }

  const loginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider()

      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential?.accessToken;
          // The signed-in user info.
          const user = result.user;
          // IdP data available using getAdditionalUserInfo(result)
          // ...

          console.log({credential, token, user})
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code
          const errorMessage = error.message
          // The email of the user's account used.
          const email = error.customData.email
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error)
          
          console.log({errorCode, errorMessage, email, credential})
        })

      await goto("/");

    } catch (e) {
      console.log('login with google error', e);
    }
  }

  const loginWithFacebook = async () => {
    try {
      const provider = new FacebookAuthProvider()
      signInWithPopup(auth, provider)

      await goto("/");

    } catch (e) {
      console.log('login with google error', e);
    }
  }

  const loginWithGithub = async () => {
    try {
      const provider = new GithubAuthProvider()
      signInWithPopup(auth, provider)

      await goto("/");

    } catch (e) {
      console.log('login with google error', e);
    }
  }
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
        <a href="{'#'}" class="btn-outline">Sign up</a>
      </div>

      <div class="w-full max-w-lg mt-6 mx-auto">
        <div class="px-16"><img src="/images/login-1.jpg" alt=" " class="w-full"></div>

        <h3 class="text-2xl font-semibold text-center mt-6">Get started With V Staff</h3>
        <p class="mt-2 text-under text-center">Enter your details below</p>

        <form action="" class="mt-8"
          on:submit|preventDefault={loginWithEmailAndPassword}
        >
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
          <button class="icon icon-social"
            on:click|preventDefault={loginWithFacebook}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path></svg>
          </button>

          <button class="icon icon-social"
            on:click|preventDefault={loginWithGoogle}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path></svg>
          </button>

          <button class="icon icon-social"
            on:click|preventDefault={loginWithGithub}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path></svg>
          </button>
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