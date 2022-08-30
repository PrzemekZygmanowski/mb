<template>
  <div class="section-container d-flex flex-column align-center">
    <div class="contact__common-section" v-show="address">
      <p class="section-text">adres:</p>
      <strong class="section-small-subtitle">{{ address.street }}</strong>
      <strong class="section-small-subtitle">{{ address.city }}</strong>
    </div>
    <div
      :key="`${phoneNumber.id}-${phoneNumber.number}`"
      v-for="phoneNumber in phoneNumbers"
      class="contact__common-section"
    >
      <p class="section-text">numer kontaktowy:</p>
      <a
        class="link-reset section-small-subtitle contact_link"
        :href="`tel:${phoneNumber.number}`"
        >{{ phoneNumber.number }}</a
      >
    </div>
    <div
      :key="`${email.id}-${email.email}`"
      v-for="email in mails"
      class="contact__common-section"
    >
      <p class="section-text">e-mail:</p>
      <a
        class="link-reset section-small-subtitle contact_link"
        :href="`mailto:${email.email}`"
        >{{ email.email }}</a
      >
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: 'skontaktuj sie z nami',
    },
    address: {
      type: Object,
    },
    phoneNumbers: {
      type: Array,
    },
    mails: {
      type: Array,
    },
  },
};
</script>

<style scoped lang="scss">
@import 'styles/global/_all.scss';

.contact__common-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}
.contact_link {
  position: relative;
  padding-bottom: 2px;
  color: $mb-black;
  display: inline-block;
}
</style>
