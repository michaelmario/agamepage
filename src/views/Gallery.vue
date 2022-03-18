<template>
  <section class="container-fluid galleryPage">
    <div class="row">
      <div class="col-md-8 displayItem mb-3">
          <div class="row">
        <div class="col-md-3"
          v-for="product in displayedProducts"
          :key="product.albumId"
        >
          <div class="card cardProducts">
            <div class="card-title">
              <img :src="product.thumbnailUrl" alt="" />
            </div>
          </div>
        </div>
      </div>
      </div>
      <div class="col-md-3 sidebar mb-3">
        <div
          class="d-flex flex-column align-items-stretch flex-shrink-0 bg-white"
        >
          <a
            href="/"
            class="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom"
          >
            <svg class="bi me-2" width="30" height="24">
              <use xlink:href="#bootstrap"></use>
            </svg>
            <span class="fs-5 fw-semibold">List group</span>
          </a>
          <div class="list-group list-group-flush border-bottom scrollarea">
            <a
              href="#"
              class="list-group-item list-group-item-action active py-3 lh-tight"
              aria-current="true"
            >
              <div
                class="d-flex w-100 align-items-center justify-content-between"
              >
                <strong class="mb-1">List group item heading</strong>
                <small>Wed</small>
              </div>
              <div class="col-10 mb-1 small">
                Some placeholder content in a paragraph below the heading and
                date.
              </div>
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action py-3 lh-tight"
            >
              <div
                class="d-flex w-100 align-items-center justify-content-between"
              >
                <strong class="mb-1">List group item heading</strong>
                <small class="text-muted">Tues</small>
              </div>
              <div class="col-10 mb-1 small">
                Some placeholder content in a paragraph below the heading and
                date.
              </div>
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action py-3 lh-tight"
            >
              <div
                class="d-flex w-100 align-items-center justify-content-between"
              >
                <strong class="mb-1">List group item heading</strong>
                <small class="text-muted">Mon</small>
              </div>
              <div class="col-10 mb-1 small">
                Some placeholder content in a paragraph below the heading and
                date.
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Gallery",
  data() {
    return {
      displayedProducts: [
        {
          albumId: 1,
          id: 1,
          title: "accusamus beatae ad facilis cum similique qui sunt",
          url: "https://via.placeholder.com/600/92c952",
          thumbnailUrl: "https://via.placeholder.com/150/92c952",
        },
        {
          albumId: 1,
          id: 2,
          title: "reprehenderit est deserunt velit ipsam",
          url: "https://via.placeholder.com/600/771796",
          thumbnailUrl: "https://via.placeholder.com/150/771796",
        },
        {
          albumId: 1,
          id: 3,
          title: "officia porro iure quia iusto qui ipsa ut modi",
          url: "https://via.placeholder.com/600/24f355",
          thumbnailUrl: "https://via.placeholder.com/150/24f355",
        },
        {
          albumId: 1,
          id: 4,
          title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
          url: "https://via.placeholder.com/600/d32776",
          thumbnailUrl: "https://via.placeholder.com/150/d32776",
        },
        {
          albumId: 1,
          id: 5,
          title: "natus nisi omnis corporis facere molestiae rerum in",
          url: "https://via.placeholder.com/600/f66b97",
          thumbnailUrl: "https://via.placeholder.com/150/f66b97",
        },
        {
          albumId: 1,
          id: 6,
          title: "accusamus ea aliquid et amet sequi nemo",
          url: "https://via.placeholder.com/600/56a8c2",
          thumbnailUrl: "https://via.placeholder.com/150/56a8c2",
        },
        {
          albumId: 1,
          id: 7,
          title:
            "officia delectus consequatur vero aut veniam explicabo molestias",
          url: "https://via.placeholder.com/600/b0f7cc",
          thumbnailUrl: "https://via.placeholder.com/150/b0f7cc",
        },
        {
          albumId: 1,
          id: 8,
          title: "aut porro officiis laborum odit ea laudantium corporis",
          url: "https://via.placeholder.com/600/54176f",
          thumbnailUrl: "https://via.placeholder.com/150/54176f",
        },
        {
          albumId: 1,
          id: 9,
          title: "qui eius qui autem sed",
          url: "https://via.placeholder.com/600/51aa97",
          thumbnailUrl: "https://via.placeholder.com/150/51aa97",
        },
        {
          albumId: 1,
          id: 10,
          title: "beatae et provident et ut vel",
          url: "https://via.placeholder.com/600/810b14",
          thumbnailUrl: "https://via.placeholder.com/150/810b14",
        },
        {
          albumId: 1,
          id: 11,
          title: "nihil at amet non hic quia qui",
          url: "https://via.placeholder.com/600/1ee8a4",
          thumbnailUrl: "https://via.placeholder.com/150/1ee8a4",
        },
        {
          albumId: 1,
          id: 12,
          title:
            "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
          url: "https://via.placeholder.com/600/66b7d2",
          thumbnailUrl: "https://via.placeholder.com/150/66b7d2",
        },
        {
          albumId: 1,
          id: 13,
          title: "repudiandae iusto deleniti rerum",
          url: "https://via.placeholder.com/600/197d29",
          thumbnailUrl: "https://via.placeholder.com/150/197d29",
        },
      ],
    };
  },
};
</script>
<style>
.galleryPage {
  padding-top: 150px;
}
.sidebar {
  height: auto;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  border: 2px solid orange;
  width: 100%;
  margin-right: 10px;
  background-color: aliceblue;
}
.displayItem{  
    height:auto;
    padding:20px;
}
.cardProducts {
  width: 18rem;
  height: 350px;
  padding: 20px;
  margin-top: 10px;
  margin-right: 20px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  border: 2px solid orange;
}
</style>
