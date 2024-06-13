<script setup>
import { ref, onMounted } from 'vue';
import emailjs from 'emailjs-com';
import { useRoute } from 'vue-router';

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
});

const responseMessage = ref('');

const route = useRoute();

onMounted(() => {
  const queryMessage = route.query.message;
  if (queryMessage) {
    form.value.message = queryMessage;
  }
});

const sendEmail = () => {
  const templateParams = {
    name: form.value.name,
    email: form.value.email,
    phone: form.value.phone,
    message: form.value.message,
    to_name: "Mr. Okemiri",
    reply_to:"edidiongsamuel14@gmail.com",
    to_email:"edidiongsamuel14@gmail.com"
  };

  emailjs.send('service_5lguqnn', 'template_06a8d4c', templateParams, 'zllEYbgyaDL6IJFHQ')
    .then(response => {
      form.value.name = '';
      form.value.email = '';
      form.value.phone = '';
      form.value.message = '';

      responseMessage.value = 'Message sent successfully!';
      setTimeout(() => {
        responseMessage.value = '';
      }, 5000);
    })
    .catch(error => {
      console.error('FAILED...', error);
      form.value.name = '';
      form.value.email = '';
      form.value.phone = '';
      form.value.message = '';
      responseMessage.value = 'Failed to auto-send message. Redirecting to email app...';
      setTimeout(() => {
        responseMessage.value = '';
      }, 5000);
      redirectToEmailApp(templateParams);
    });
};

const redirectToEmailApp = (params) => {
  const { name, email, message, phone, to_email } = params;
  const subject = encodeURIComponent('Contact Us Form Submission');
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`);
  const mailtoLink = `mailto:${to_email}?subject=${subject}&body=${body}`;
  window.location.href = mailtoLink;
};
</script>

<template>
  <div>
    <form
      @submit.prevent="sendEmail"
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
            v-model="form.name"
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
            v-model="form.email"
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
            v-model="form.phone"
            class="border-[0.3px] border-[#00000066] rounded-[6.1px] w-full bg-[#8A938D0D] p-3"
            required
          />
        </div>
        <div class="flex flex-col gap-3 pt-5">
          <label for="message" class="font-lexend font-light text-[16px]">Message</label>
          <textarea
            id="message"
            name="message"
            v-model="form.message"
            class="border-[0.3px] border-[#00000066] rounded-[6.1px] w-full bg-[#8A938D0D] p-3"
            rows="6"
          ></textarea>
        </div>
      </div>
      <div v-if="responseMessage">{{ responseMessage }}</div>
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
