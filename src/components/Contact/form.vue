<template>
  <div>
    <form
      action="mailto:your-email@example.com"
      method="post"
      enctype="text/plain"
      class="w-full bg-white box text-black p-5 lg:p-10 lg:w-[582px] h-[742px] rounded-[14.85px]"
    >
      <h3 class="font-semibold font-plus-jakarta-sans text-[20px]">Contact Form</h3>
      <div class="pt-10">
        <div class="flex flex-col gap-3">
          <label for="fullName" class="font-lexend font-light text-[16px]">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            class="border-[0.3px] border-[#00000066] rounded-[6.1px] w-full bg-[#8A938D0D] p-3"
            required
          />
        </div>
        <div class="flex flex-col gap-3 pt-5">
          <label for="email" class="font-lexend font-light text-[16px]">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            class="border-[0.3px] border-[#00000066] rounded-[6.1px] w-full bg-[#8A938D0D] p-3"
            required
          />
        </div>
        <div class="flex flex-col gap-3 pt-5">
          <label for="phone" class="font-lexend font-light text-[16px]">Phone No</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            class="border-[0.3px] border-[#00000066] rounded-[6.1px] w-full bg-[#8A938D0D] p-3"
            required
          />
        </div>
        <div class="flex flex-col gap-3 pt-5">
          <label for="message" class="font-lexend font-light text-[16px]">Message</label>
          <textarea
            id="message"
            name="message"
            class="border-[0.3px] border-[#00000066] rounded-[6.1px] w-full bg-[#8A938D0D] p-3"
            rows="6"
          ></textarea>
        </div>
      </div>
      <div class="flex justify-end pt-5">
        <button
          type="submit"
          class="bg-black text-white px-8 py-4 rounded-full"
        >
          Get In Touch
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.box {
  box-shadow: 0px 1.98px 3.96px 0px #0000001A;
}
</style>
