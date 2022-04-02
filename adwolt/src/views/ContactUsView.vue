<template>
  <div class="container">
    <div class="row">
      <div class="col-md-5">
        <img
          src="../assets/contact-us.jpg"
          class="img-fluid h-75 float-end"
          alt="contact-us-image"
        />
      </div>
      <div class="col-md-1"></div>
      <div class="col-md-6 contact-us-form">
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
.contact-us-form {
  margin-top: 5em;
}
</style>
