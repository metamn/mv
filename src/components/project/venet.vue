<template lang="html">
  <section>
    <h3 hidden>Bernar Venet MetaMetria</h3>

    <aside>
      <h3 hidden>Bernar Venet MetaMetria Image 1</h3>
    </aside>

    <aside>
      <h3 hidden>Bernar Venet MetaMetria Image 2</h3>
    </aside>

    <aside>
      <h3 hidden>Bernar Venet MetaMetria Image 3</h3>
    </aside>

    <div id='warped'>
      <span class='w0'>B</span><span class='w1'>e</span><span class='w2'>r</span><span class='w3'>n</span><span class='w4'>a</span><span class='w5'>r</span><span class='w6'> </span><span class='w7'>V</span><span class='w8'>e</span><span class='w9'>n</span><span class='w10'>e</span><span class='w11'>t</span><span class='w12'>:</span><span class='w13'> </span><span class='w14'>M</span><span class='w15'>e</span><span class='w16'>t</span><span class='w17'>a</span><span class='w18'>M</span><span class='w19'>e</span><span class='w20'>t</span><span class='w21'>r</span><span class='w22'>i</span><span class='w23'>a</span>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'mv-venet'
  }
</script>

<style module scoped>
  section {
    width: 100%;
    min-height: 100vh;
    position: relative;
  }

  aside {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
  }

  aside:nth-of-type(1) {
    background-image: url(/static/images/bazaart-1.png);
    mix-blend-mode: luminosity;
  }

  aside:nth-of-type(2) {
    background-image: url(/static/images/bazaart-2.png);
    mix-blend-mode: difference;
  }

  aside:nth-of-type(3) {
    background-image: url(/static/images/bazaart-3.png);
    mix-blend-mode: luminosity;
  }

  div {
    text-transform: uppercase;
    mix-blend-mode: luminosity;
    transform: scale(1.2) translate(10em, 5em);
  }

  div span {
    font-size: 300%;
  }
</style>

<style type='text/css'>

              #warped {position: relative; display: block; width:744.0000081658363px;
              height:601px;}

              #warped>span[class^=w]:nth-of-type(n+0){display:block; position:absolute;
              -moz-transform-origin:50% 100%; -webkit-transform-origin:50% 100%; -o-transform-origin:50%
              100%; -ms-transform-origin:50% 100%; transform-origin:50% 100%; }

              #warped span{font-weight:regular;font-style:normal;
              line-height:0.65; white-space:pre; overflow:visible; padding:0px;}

              #warped .w0 {-moz-transform: rotate(-8.13rad);-webkit-transform: rotate(-8.13rad);-o-transform:
              rotate(-8.13rad);-ms-transform: rotate(-8.13rad); transform: rotate(-8.13rad);
              width: 51px; height: 53px; left: 227.31px; top: 118.6px;}

              #warped .w1 {-moz-transform: rotate(-7.87rad);-webkit-transform: rotate(-7.87rad);-o-transform:
              rotate(-7.87rad);-ms-transform: rotate(-7.87rad); transform: rotate(-7.87rad);
              width: 44px; height: 53px; left: 222.55px; top: 67.75px;}

              #warped .w2 {-moz-transform: rotate(-7.17rad);-webkit-transform: rotate(-7.17rad);-o-transform:
              rotate(-7.17rad);-ms-transform: rotate(-7.17rad); transform: rotate(-7.17rad);
              width: 32px; height: 53px; left: 239.83px; top: 27.33px;}

              #warped .w3 {-moz-transform: rotate(-6.24rad);-webkit-transform: rotate(-6.24rad);-o-transform:
              rotate(-6.24rad);-ms-transform: rotate(-6.24rad); transform: rotate(-6.24rad);
              width: 48px; height: 53px; left: 272.25px; top: 12.62px;}

              #warped .w4 {-moz-transform: rotate(-5.88rad);-webkit-transform: rotate(-5.88rad);-o-transform:
              rotate(-5.88rad);-ms-transform: rotate(-5.88rad); transform: rotate(-5.88rad);
              width: 50px; height: 53px; left: 322.98px; top: 26.3px;}

              #warped .w5 {-moz-transform: rotate(-5.74rad);-webkit-transform: rotate(-5.74rad);-o-transform:
              rotate(-5.74rad);-ms-transform: rotate(-5.74rad); transform: rotate(-5.74rad);
              width: 32px; height: 53px; left: 373.42px; top: 48.11px;}

              #warped .w6 {-moz-transform: rotate(-5.66rad);-webkit-transform: rotate(-5.66rad);-o-transform:
              rotate(-5.66rad);-ms-transform: rotate(-5.66rad); transform: rotate(-5.66rad);
              width: 24px; height: 53px; left: 404.65px; top: 66.36px;}

              #warped .w7 {-moz-transform: rotate(-5.57rad);-webkit-transform: rotate(-5.57rad);-o-transform:
              rotate(-5.57rad);-ms-transform: rotate(-5.57rad); transform: rotate(-5.57rad);
              width: 52px; height: 53px; left: 424.6px; top: 93.34px;}

              #warped .w8 {-moz-transform: rotate(-5.47rad);-webkit-transform: rotate(-5.47rad);-o-transform:
              rotate(-5.47rad);-ms-transform: rotate(-5.47rad); transform: rotate(-5.47rad);
              width: 44px; height: 53px; left: 466.16px; top: 129.44px;}

              #warped .w9 {-moz-transform: rotate(-5.35rad);-webkit-transform: rotate(-5.35rad);-o-transform:
              rotate(-5.35rad);-ms-transform: rotate(-5.35rad); transform: rotate(-5.35rad);
              width: 48px; height: 53px; left: 497.22px; top: 168.97px;}

              #warped .w10 {-moz-transform: rotate(-5.2rad);-webkit-transform: rotate(-5.2rad);-o-transform:
              rotate(-5.2rad);-ms-transform: rotate(-5.2rad); transform: rotate(-5.2rad);
              width: 44px; height: 53px; left: 526.27px; top: 211.66px;}

              #warped .w11 {-moz-transform: rotate(-5.01rad);-webkit-transform: rotate(-5.01rad);-o-transform:
              rotate(-5.01rad);-ms-transform: rotate(-5.01rad); transform: rotate(-5.01rad);
              width: 32px; height: 53px; left: 548.79px; top: 251.11px;}

              #warped .w12 {-moz-transform: rotate(-4.8rad);-webkit-transform: rotate(-4.8rad);-o-transform:
              rotate(-4.8rad);-ms-transform: rotate(-4.8rad); transform: rotate(-4.8rad);
              width: 24px; height: 53px; left: 559.25px; top: 283.75px;}

              #warped .w13 {-moz-transform: rotate(-10.83rad);-webkit-transform: rotate(-10.83rad);-o-transform:
              rotate(-10.83rad);-ms-transform: rotate(-10.83rad); transform: rotate(-10.83rad);
              width: 24px; height: 53px; left: 558.12px; top: 312.78px;}

              #warped .w14 {-moz-transform: rotate(-10.35rad);-webkit-transform: rotate(-10.35rad);-o-transform:
              rotate(-10.35rad);-ms-transform: rotate(-10.35rad); transform: rotate(-10.35rad);
              width: 67px; height: 53px; left: 515.27px; top: 359.78px;}

              #warped .w15 {-moz-transform: rotate(-9.8rad);-webkit-transform: rotate(-9.8rad);-o-transform:
              rotate(-9.8rad);-ms-transform: rotate(-9.8rad); transform: rotate(-9.8rad);
              width: 44px; height: 53px; left: 478.74px; top: 396.61px;}

              #warped .w16 {-moz-transform: rotate(-9.46rad);-webkit-transform: rotate(-9.46rad);-o-transform:
              rotate(-9.46rad);-ms-transform: rotate(-9.46rad); transform: rotate(-9.46rad);
              width: 32px; height: 53px; left: 443.22px; top: 404.72px;}

              #warped .w17 {-moz-transform: rotate(-9.2rad);-webkit-transform: rotate(-9.2rad);-o-transform:
              rotate(-9.2rad);-ms-transform: rotate(-9.2rad); transform: rotate(-9.2rad);
              width: 50px; height: 53px; left: 388.76px; top: 399.64px;}

              #warped .w18 {-moz-transform: rotate(-8.96rad);-webkit-transform: rotate(-8.96rad);-o-transform:
              rotate(-8.96rad);-ms-transform: rotate(-8.96rad); transform: rotate(-8.96rad);
              width: 67px; height: 53px; left: 320.2px; top: 376.97px;}

              #warped .w19 {-moz-transform: rotate(-8.8rad);-webkit-transform: rotate(-8.8rad);-o-transform:
              rotate(-8.8rad);-ms-transform: rotate(-8.8rad); transform: rotate(-8.8rad);
              width: 44px; height: 53px; left: 280.98px; top: 345.76px;}

              #warped .w20 {-moz-transform: rotate(-8.71rad);-webkit-transform: rotate(-8.71rad);-o-transform:
              rotate(-8.71rad);-ms-transform: rotate(-8.71rad); transform: rotate(-8.71rad);
              width: 32px; height: 53px; left: 253.49px; top: 319px;}

              #warped .w21 {-moz-transform: rotate(-8.63rad);-webkit-transform: rotate(-8.63rad);-o-transform:
              rotate(-8.63rad);-ms-transform: rotate(-8.63rad); transform: rotate(-8.63rad);
              width: 32px; height: 53px; left: 225.97px; top: 292.79px;}

              #warped .w22 {-moz-transform: rotate(-8.56rad);-webkit-transform: rotate(-8.56rad);-o-transform:
              rotate(-8.56rad);-ms-transform: rotate(-8.56rad); transform: rotate(-8.56rad);
              width: 20px; height: 53px; left: 211.04px; top: 269.76px;}

              #warped .w23 {-moz-transform: rotate(-8.48rad);-webkit-transform: rotate(-8.48rad);-o-transform:
              rotate(-8.48rad);-ms-transform: rotate(-8.48rad); transform: rotate(-8.48rad);
              width: 50px; height: 53px; left: 171.83px; top: 238.67px;}


</style>
