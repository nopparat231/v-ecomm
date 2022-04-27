<template>
  <!-- Section-->
  <section class="py-5">
    <div class="container px-4 px-lg-5">
      <div
        class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
      >
        <!-- Product-->

        <div class="col mb-5" v-for="item in items" :key="item.id">
          <div class="card h-100">
            <!-- Product image-->
            <img class="card-img-top" :src="item.url" alt="..." />
            <!-- Product details-->
            <div class="card-body p-2">
              <div class="text-center">
                <!-- Product name-->
                <div class="pull-left name-price">
                  <span class="fw-light fs-5">Lorem ipsum dolor sit amet.</span>
                </div>

                <!-- Product price-->
              </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-2 pt-0 border-top-0 bg-transparent">
              <div class="pull-left m-price">
                <span class="fs-6 text-muted text-decoration-line-through"
                  >฿95</span
                >
                <span class="fs-6 s-price"> ฿25</span>
              </div>

              <div class="c-star">
                <i class="bi bi-heart c-hart"></i>
                <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i
                ><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i
                ><i class="bi bi-star-half"></i>
              </div>

              <div class="c-location fw-lighter">จังหวัดกรุงเทพมหานคร</div>
            </div>

            <!-- Buy btn -->
          </div>
        </div>
        <!-- Product-->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: "0",
          author: "PD 1",
          width: 200,
          height: 200,
          url: "https://picsum.photos/200/200?random=1",
        },
        {
          id: "2",
          author: "PD 2",
          width: 200,
          height: 200,
          url: "https://picsum.photos/200/200?random=2",
        },
        {
          id: "3",
          author: "PD 3",
          width: 200,
          height: 200,
          url: "https://picsum.photos/200/200?random=3",
        },
        {
          id: "4",
          author: "PD 4",
          width: 200,
          height: 200,
          url: "https://picsum.photos/200/200?random=4",
        },
        {
          id: "5",
          author: "PD 1",
          width: 200,
          height: 200,
          url: "https://picsum.photos/200/200?random=5",
        },
        {
          id: "6",
          author: "PD 2",
          width: 200,
          height: 200,
          url: "https://picsum.photos/200/200?random=6",
        },
        {
          id: "7",
          author: "PD 3",
          width: 200,
          height: 200,
          url: "https://picsum.photos/200/200?random=7",
        },
        {
          id: "8",
          author: "PD 4",
          width: 200,
          height: 200,
          url: "https://picsum.photos/200/200?random=8",
        },
      ],
    };
  },
};
</script>

<style scoped>
.card {
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
  transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
    0.3s box-shadow,
    0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
  cursor: pointer;
}

.card:hover {
  transform: scale(1.03);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
}
.m-price {
  white-space: nowrap;
}
.m-price .s-price {
  color: brown;
  padding-bottom: 1rem;
}
.name-price {
  text-align: left;
  padding-bottom: 2rem;
}
.c-hart {
  color: darkgray;
  padding: 0.5rem;
}
.c-star {
  color: orange;
  padding-top: 0.5rem;
}
.c-location {
  text-align: right;
  color: darkgrey;
  padding-top: 0.5rem;
}
</style>
>
