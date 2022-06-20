<template>
  <section class="py-5">
    <div class="container px-4 px-lg-5">
      <h1>Product Detail</h1>

      <div class="card mb-3 border-0">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              style="margin-bottom: 0.3rem"
              src="https://picsum.photos/800/700/?random=1"
              class="img-fluid rounded-start"
              alt="..."
            />
            <div>
              <img
                src="https://picsum.photos/120/120/?random=2"
                alt=""
                style="margin-left: 0.7rem"
              />
              <img
                src="https://picsum.photos/120/120/?random=3"
                alt=""
                style="margin-left: 0.7rem"
              />
              <img
                src="https://picsum.photos/120/120/?random=4"
                alt=""
                style="margin-left: 0.7rem"
              />
            </div>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h3 class="card-title">
                Lorem ipsum dolor sit amet ID : {{ id }}
              </h3>
              <div class="mb-1">
                <div class="pull-left m-price">
                  <span class="fs-4 text-muted text-decoration-line-through"
                    >฿95</span
                  >
                  <span class="fs-4 s-price"> ฿25</span>
                </div>

                <div class="c-star">
                  <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i
                  ><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i
                  ><i class="bi bi-star-half"></i>
                </div>
                <p>3 Reviews</p>
              </div>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis laudantium, ducimus quasi illum, rem nulla pariatur,
                est rerum odit voluptates sunt temporibus repudiandae quaerat
                itaque vitae. Nihil impedit, totam delectus aspernatur,
                voluptatum, eaque maxime aperiam tempore facere natus sed
                placeat ratione iste accusantium vitae error dignissimos vel id
                tempora exercitationem!
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
        <div class="c-location fw-lighter">จังหวัดกรุงเทพมหานคร</div>
      </div>
      <br />
      <hr />

      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home-tab-pane"
            type="button"
            role="tab"
            aria-controls="home-tab-pane"
            aria-selected="true"
          >
            Home
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile-tab-pane"
            type="button"
            role="tab"
            aria-controls="profile-tab-pane"
            aria-selected="false"
          >
            Profile
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact-tab-pane"
            type="button"
            role="tab"
            aria-controls="contact-tab-pane"
            aria-selected="false"
          >
            Contact
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="disabled-tab"
            data-bs-toggle="tab"
            data-bs-target="#disabled-tab-pane"
            type="button"
            role="tab"
            aria-controls="disabled-tab-pane"
            aria-selected="false"
            disabled
          >
            Disabled
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="home-tab-pane"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabindex="0"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit quam nam
          harum alias illo aspernatur deserunt pariatur facere maxime minima
          ducimus rem saepe velit, dicta, ea reiciendis, quibusdam dolores hic
          sint sunt esse. Quis voluptate molestias nulla, illum laboriosam autem
          consequuntur temporibus quibusdam aliquid? Qui nobis cupiditate
          dignissimos harum iure sunt adipisci molestias, impedit distinctio?
        </div>
        <div
          class="tab-pane fade"
          id="profile-tab-pane"
          role="tabpanel"
          aria-labelledby="profile-tab"
          tabindex="0"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          ratione voluptatibus consequatur earum a debitis ducimus, quasi optio
          quas incidunt.
        </div>
        <div
          class="tab-pane fade"
          id="contact-tab-pane"
          role="tabpanel"
          aria-labelledby="contact-tab"
          tabindex="0"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure rem
          ipsam ab nesciunt odit fuga perferendis quia pariatur blanditiis, quos
          cupiditate, beatae repellendus provident ea maiores dolor explicabo
          dolorem rerum non aliquam veritatis. Impedit, dolores?
        </div>
        <div
          class="tab-pane fade"
          id="disabled-tab-pane"
          role="tabpanel"
          aria-labelledby="disabled-tab"
          tabindex="0"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ea.
        </div>
      </div>
<br>
      <hr />
      <div class="card border-0">
        <div class="card-body">
          <h4 class="card-title">สินค้าที่เกี่ยวข้อง</h4>
          <Content />
        </div>
      </div>

      <!-- end tabs -->
      <br />
      <br />
    </div>
  </section>
</template>

<script>
import Content from "./Content.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  components: {
    Content,
  },
};
</script>

<style scoped>
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
