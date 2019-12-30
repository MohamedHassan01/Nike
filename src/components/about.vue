<template>
  <section class="about" id="about">
    <div class="img-box">
      <img src="../assets/about/shoe.png" alt="">
      <div class="feat one">
        <div class="line animate"></div>
        <div class="description">
          <h4>Lorem ippusm</h4>
          <p>2155</p>
        </div>
      </div>
      <div class="feat two">
        <div class="line animate"></div>
        <div class="description">
          <h4>Lorem ippusm</h4>
          <p>2155</p>
        </div>
      </div>
      <div class="feat three">
        <div class="line animate"></div>
        <div class="description">
          <h4>Lorem ippusm</h4>
          <p>2155</p>
        </div>
      </div>
      <div class="feat four">
        <div class="line animate"></div>
        <div class="description">
          <h4>Lorem ippusm</h4>
          <p>2155</p>
        </div>
      </div>
      <div class="feat five">
        <div class="line animate"></div>
        <div class="description">
          <h4>Lorem ippusm</h4>
          <p>2155</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'about',
  mounted() {
    let lines = document.querySelectorAll('.line');
    lines.forEach(line => {
      line.addEventListener('mousemove', () => {
        line.classList.remove('animate');
        line.parentElement.lastElementChild.classList.add('active');
      });
      line.addEventListener('mouseleave', () => {
        line.classList.add('animate');
        line.parentElement.lastElementChild.classList.remove('active');
      });
    });
  }
}
</script>
