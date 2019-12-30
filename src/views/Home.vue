<template>
  <div>
    <div class="home">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="2"
            class="d-none d-md-block"
          >
            <div class="left-side">
              <div class="slider-details">
                <div class="number">
                  <span>{{ current }}</span> /
                  {{ totalProducts }}
                </div>
                <div class="progress-bar">
                  <span class="bar" ref="bar"></span>
                </div>
              </div>

              <div class="social">
                <h4>Follow</h4>
                <div class="social-icons">
                  <v-btn fab text small>
                    <v-icon >mdi-facebook</v-icon>
                  </v-btn>
                  <v-btn fab text small>
                    <v-icon>mdi-linkedin</v-icon>
                  </v-btn>
                  <v-btn fab text small>
                    <v-icon>mdi-twitter</v-icon>
                  </v-btn>
                </div>
              </div>
            </div>
          </v-col>

          <v-col
            cols="12"
            md="4"
          >
            <div
              v-for="slide in products"
              :key="slide.id"
            >
              <div
                class="home-content"
                v-if="slide.isSelected"
              >
                <h2>{{ slide.title }}</h2>
                <p>{{ slide.details }}</p>
                <div class="buy">
                  <v-btn text depressed>Buy now</v-btn>
                  <span class="price">${{  slide.price }}</span>
                </div>
              </div>
            </div>

            <div class="see-more d-none d-md-block">
              <p>See More</p>
              <div class="btn" v-scroll-to="'#about'">
                <v-icon large>mdi-chevron-double-down</v-icon>
              </div>
            </div>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <div class="slider">
              <div class="circle"></div>
              <img class="selected" ref="imageSlider" src="../assets/home/01.png" alt="">
              <div class="delimiter">
                <v-btn class="prev" small fab text>
                  <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
                <div
                  class="product"
                  v-for="product in products"
                  :key="product.id"
                >
                  <div
                    :class="[{'active': product.isSelected},'box']"
                    @click="selectProduct(product)"
                  >
                    <img :class="{'selected': product.isSelected}" :src="product.img" alt="">
                  </div>
                </div>
                <v-btn class="next" small fab text>
                  <v-icon>mdi-arrow-right</v-icon>
                </v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <About />
  </div>
</template>

<script>
import About from "@/components/about.vue";

export default {
  name: "home",
  components: {
    About
  },

  data() {
    return {
      current: '01',
      totalProducts: '04',
      products: [
        {id: '1', img: require('@/assets/home/01.png'), isSelected: true, title: 'Nike running shoes', details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, repellendus voluptatibus assumenda cupiditate perferendis.', price: 199, value: '25%'},
        {id: '2', img: require('@/assets/home/02.png'), isSelected: false, title: 'Nike women running shoes', details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, repellendus voluptatibus assumenda cupiditate perferendis.', price: 149, value: '50%'},
        {id: '3', img: require('@/assets/home/03.png'), isSelected: false, title: 'Running Shoes vlue', details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, repellendus voluptatibus assumenda cupiditate perferendis.', price: 159, value: '75%'},
        {id: '4', img: require('@/assets/home/04.png'), isSelected: false, title: 'Running Shoes black', details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, repellendus voluptatibus assumenda cupiditate perferendis.', price: 239, value: '100%'},
      ]
    }
  },

  methods: {
    selectProduct(product) {
      this.products.forEach(p => {
        p.isSelected = false;
      });
      product.isSelected = true;

      window.setTimeout(() => {
        this.$refs.imageSlider.setAttribute('src', product.img);
      }, 500);

      this.$refs.bar.style.height = product.value
      this.current = '0' + product.id;
    }
  }
};
</script>
