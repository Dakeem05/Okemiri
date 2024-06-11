<template>
    <div>
        <form class="w-full bg-white box text-black p-5 lg:p-10 lg:w-[582px] h-[742px] rounded-[14.85px]">
        <h3 class="font-semibold font-plus-jakarta-sans text-[20px]">Contact Form</h3>
        <div class="pt-10">
        <div class="flex flex-col gap-3">
            <label for="" class="font-lexend font-light text-[16px]">Full Name</label>
            <input type="text" name="" id="" class="border-[0.3px] border-[#00000066] rounded-[6.1px] w-full bg-[#8A938D0D] p-3" required>
        </div>
        <div class="flex flex-col gap-3 pt-5">
            <label for="" class="font-lexend font-light text-[16px]">Email address</label>
            <input type="email" name="" id="" class="border-[0.3px] border-[#00000066] rounded-[6.1px] w-full bg-[#8A938D0D] p-3" required>
        </div>
        <div class="flex flex-col gap-3 pt-5">
            <label for="" class="font-lexend font-light text-[16px]">Phone No</label>
            <input type="number" name="" id="" class="border-[0.3px] border-[#00000066] rounded-[6.1px] w-full bg-[#8A938D0D] p-3" required>
        </div>
        <div class="flex flex-col gap-3 pt-5">
            <label for="" class="font-lexend font-light text-[16px]">Message</label>
            <textarea type="email" name="" id="" class="border-[0.3px] border-[#00000066] rounded-[6.1px] w-full bg-[#8A938D0D] p-10"></textarea>
        </div>
        </div>
        <div class="flex justify-end pt-5">
            <button class="bg-black text-white px-8 py-4 rounded-full">Get In Touch</button>
        </div>
      </form>
    </div>
</template>
<style scoped>
.box{
     box-shadow: 0px 1.98px 3.96px 0px #0000001A;
}
</style>