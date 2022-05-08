<template>
  <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-lg-6">
        <h1 class="text-danger text-left">Get in touch</h1>
        <form>
          <div class="form-group row">
            <label for="name" class="col-sm-3 col-form-label">Name</label>
            <div class="col-sm-9">
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Please enter your full name"
                v-model="name"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="phone" class="col-sm-3 col-form-label"
              >Phone Number</label
            >
            <div class="col-sm-9">
              <input
                type="text"
                class="form-control"
                id="phone"
                placeholder="Please enter your phone number"
                v-model="phoneNumber"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="email" class="col-sm-3 col-form-label">Email</label>
            <div class="col-sm-9">
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Please enter a valid email address"
                v-model="email"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="message" class="col-sm-3 col-form-label"> Query </label>
            <div class="col-sm-9">
              <textarea
                class="form-control"
                id="message"
                rows="3"
                placeholder="Please enter your query and our team will get back to you"
                v-model="message"
              ></textarea>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-12">
              <button type="submit" class="btn btn-danger float-end">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
      <div class="col-10 col-sm-8 col-lg-6">
        <img
          src="../assets/contact-us.jpg"
          class="d-block mx-lg-auto img-fluid"
          alt="Bootstrap Themes"
          width="700"
          height="500"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
  components: {},
  data() {
    return {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    };
  },
};
</script>
<style scoped>
.form-group {
  padding: 12px 0px;
}
</style>
