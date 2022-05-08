<template>
  <div id="carouselComponent" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselComponent"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselComponent"
        data-bs-slide-to="1"
        aria-current="true"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselComponent"
        data-bs-slide-to="2"
        aria-current="true"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="../../assets/carousel-1.png"
          class="d-block w-100"
          alt="../../assets/carousel-1.png"
        />
      </div>
      <div class="carousel-item">
        <img
          src="../../assets/carousel-2.png"
          class="d-block w-100"
          style="height: 502px"
          alt="../../assets/carousel-2.png"
        />
      </div>
      <div class="carousel-item">
        <img
          src="../../assets/carousel-3.png"
          class="d-block w-100"
          style="height: 502px"
          alt="../../assets/carousel-3.png"
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselComponent"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselComponent"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<script>
export default {
  name: "CarouselComponent",
};
</script>
<style scoped>
.carousel-item {
  max-height: 600px;
}
.carausel-padding {
  padding-left: 0px !important;
  padding-right: 0px !important;
}
</style>
