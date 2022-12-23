<template>
<section id="contact">
<div class="w-96 md:max-w-full mx-auto my-12">
    <div class="p-6 border-4 border-green sm:rounded-md">
      <h3 class="font-bold text-2xl text-white text-center pb-4">Get in touch</h3>
    <form method="POST" action="https://herotofu.com/start">
      <label class="block mb-6">
        <span class="text-white">Your name</span>
        <input
          type="text"
          name="name"
          class="
            p-2
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-green
            focus:ring
            focus:ring-green
            focus:ring-opacity-50
          "
          placeholder="Dennis Ritchie"
        />
      </label>
      <label class="block mb-6">
        <span class="text-white">Email address</span>
        <input
          name="email"
          type="email"
          class="
            p-2
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-green
            focus:ring
            focus:ring-green
            focus:ring-opacity-50
          "
          placeholder="dennis.ritchie@example.com"
          required
        />
      </label>
      <label class="block mb-6">
        <span class="text-white">Message</span>
        <textarea
          name="message"
          class="
            p-2
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-green
            focus:ring
            focus:ring-green
            focus:ring-opacity-50
          "
          rows="3"
          placeholder="Write your message here..."
        ></textarea>
      </label>
      <div class="mb-2 text-center">
        <button type="submit"
            class="font-bold bg-transparent hover:bg-green text-white hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border-2 hover:border-transparent"> 
            Send</button>
      
      </div>
    </form>
  </div>
</div>
</section>
</template>