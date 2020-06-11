<template>
  <div class="container">
    <div class="row">
      <div id="homepage-feature" class="carousel slide">
        <ol class="carousel-indicators">
          <li data-target="#homepage-feature" data-slide-to="0" class="active"></li>
          <li data-target="#homepage-feature" data-slide-to="1"></li>
          <li data-target="#homepage-feature" data-slide-to="2"></li>
          <li data-target="#homepage-feature" data-slide-to="3"></li>
        </ol>

        <!-- Wrapper for slides -->
        <div class="carousel-inner" >
          <div class="item active" style="height: 500px">
            <img src="~@/assets/cs1.jpg" alt="OKWU.edu Homepage">
            <div class="carousel-caption">
              <h4>
                太平老街
              </h4>
              <p>
                太平街是长沙古城保留原有街巷格局最完整的一条街，坐落于长沙城区中部。
              </p>
            </div>
          </div>
          <div class="item" style="height: 500px">
            <img src="~@/assets/cs2.jpg" alt="OKWU Athletics Homepage">
            <div class="carousel-caption">
              <h4>太平老街</h4>
              <p>街区以太平街为主线，北至五一大道，南到解放路，西接卫国街，东到三兴街、三泰街；其中重点地段为沿太平街、西牌楼、马家巷、孚嘉巷、金线街、太傅里两侧的历史街区。</p>
            </div>
          </div>
          <div class="item" style="height: 500px">
            <img src="~@/assets/cs3.jpg" alt="OKWU Athletics Homepage">
            <div class="carousel-caption">
              <h4>太平老街</h4>
              <p>鱼骨状街区200年未变，全长375米，宽不过7米，占地面积约12.57公顷；交通十分便利，是“古老长沙”一缩影；自战国时期长沙有城池开始，是古城的核心地带，历经2000多年没有改变。</p>
            </div>
          </div>
          <div class="item" style="height: 500px">
            <img src="~@/assets/cs4.jpg" alt="Bartlesville Community Foundation">
            <div class="carousel-caption">
              <h4>
                太平老街
              </h4>
              <p>
                整治后的太平街历史文化街区不仅保留了贾谊故居、长怀井、明吉藩王府西牌楼旧址、辛亥革命共进会旧址、四正社旧址等文物古迹和近代历史遗迹。
              </p>
            </div>
          </div>
        </div>


        <a class="left carousel-control" href="#homepage-feature" data-slide="prev">
          <span class="icon fa fa-chevron-left"></span>
        </a>
        <a class="right carousel-control" href="#homepage-feature" data-slide="next">
          <span class="icon fa fa-chevron-right"></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Lun"
    }
</script>

<style scoped>

</style>
