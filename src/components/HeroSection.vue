<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
    <!-- 极致炫酷背景 -->
    <div class="absolute inset-0 z-0">
      <!-- 粒子背景 -->
      <div ref="particlesContainer" class="absolute inset-0"></div>

      <!-- 3D旋转立方体 -->
      <div class="absolute top-1/4 left-1/4 transform-gpu">
        <div class="cube-container">
          <div class="cube">
            <div class="face front"></div>
            <div class="face back"></div>
            <div class="face right"></div>
            <div class="face left"></div>
            <div class="face top"></div>
            <div class="face bottom"></div>
          </div>
        </div>
      </div>

      <!-- 全屏光效 -->
      <div class="absolute inset-0">
        <div
          class="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-[100px] opacity-20 animate-pulse"
        ></div>
        <div
          class="absolute top-1/2 right-1/3 w-72 h-72 bg-purple-500 rounded-full filter blur-[120px] opacity-20 animate-pulse animation-delay-1000"
        ></div>
        <div
          class="absolute bottom-1/4 left-1/2 w-80 h-80 bg-pink-500 rounded-full filter blur-[140px] opacity-20 animate-pulse animation-delay-2000"
        ></div>
      </div>

      <!-- 扫描线效果 -->
      <div class="scanline absolute inset-0"></div>
    </div>

    <!-- 主要内容 -->
    <div class="container mx-auto px-6 py-20 relative z-10">
      <div class="text-center">
        <!-- 主标题带霓虹效果 -->
        <h1 class="text-6xl md:text-8xl font-black mb-6 relative">
          <span
            class="neon-text bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse"
          >
            AI CO
          </span>
          <span
            class="neon-text bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 animate-pulse animation-delay-500"
          >
            WORKER
          </span>
          <span class="absolute inset-2 bg-blue-500 blur-sm opacity-10 animate-pulse scale-x-50 rounded-full"></span>
        </h1>

        <!-- 副标题全息效果 -->
        <div class="hologram-text-wrapper mb-12">
          <p
            class="text-2xl md:text-3xl text-gray-300 font-light tracking-wider hologram-text max-w-4xl mx-auto"
          >
            <span
              class="glitch-text"
              data-text="让AI成为您的最佳工作伙伴，提升工作效率，释放创造力"
            >
              让AI成为您的最佳工作伙伴，提升工作效率，释放创造力
            </span>
          </p>
        </div>

        <!-- 按钮组 - 更炫酷 -->
        <div class="flex flex-col sm:flex-row justify-center gap-6 animate-float">
          <button
            class="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl shadow-2xl hover:shadow-cyan-500/30 transform hover:-translate-y-2 transition-all duration-500 overflow-hidden"
          >
            <span class="relative z-10">立即体验</span>
            <span
              class="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            ></span>
            <span
              class="absolute top-0 left-0 w-full h-full bg-white opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
            ></span>
          </button>

          <button
            class="group relative px-10 py-5 bg-transparent border-2 border-purple-500 text-purple-400 font-bold rounded-xl shadow-2xl hover:shadow-purple-500/30 transform hover:-translate-y-2 transition-all duration-500 overflow-hidden"
          >
            <span class="relative z-10">查看演示</span>
            <span
              class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
            ></span>
          </button>
        </div>

        <!-- 数据统计 -->
        <div class="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div class="stat-card group">
            <div class="text-4xl font-bold text-cyan-400 mb-2 counter" data-target="99">0</div>
            <div class="text-gray-400 uppercase text-sm tracking-widest">效率提升</div>
          </div>
          <div class="stat-card group">
            <div class="text-4xl font-bold text-purple-400 mb-2 counter" data-target="1000">0</div>
            <div class="text-gray-400 uppercase text-sm tracking-widest">满意客户</div>
          </div>
          <div class="stat-card group">
            <div class="text-4xl font-bold text-pink-400 mb-2 counter" data-target="24">0</div>
            <div class="text-gray-400 uppercase text-sm tracking-widest">小时服务</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 边框装饰 -->
    <div
      class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
    ></div>
    <div
      class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
    ></div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const particlesContainer = ref<HTMLElement | null>(null);
let animationFrameId: number;

// 创建粒子背景
const createParticles = () => {
  if (!particlesContainer.value) return;

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  particlesContainer.value.appendChild(canvas);

  const particles: {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    color: string;
  }[] = [];
  const particleCount = 150;

  // 创建粒子
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5,
      speedX: Math.random() * 1 - 0.5,
      speedY: Math.random() * 1 - 0.5,
      color: `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(
        Math.random() * 100 + 155
      )}, 255, ${Math.random() * 0.5 + 0.1})`,
    });
  }

  // 动画循环
  const animate = () => {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      if (particle.x > canvas.width || particle.x < 0) particle.speedX *= -1;
      if (particle.y > canvas.height || particle.y < 0) particle.speedY *= -1;

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
    });

    animationFrameId = requestAnimationFrame(animate);
  };

  animate();

  // 窗口大小变化时调整canvas尺寸
  const handleResize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
    cancelAnimationFrame(animationFrameId);
  };
};

// 数字计数动画
const animateCounters = () => {
  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    const target = parseInt(counter.getAttribute("data-target") || "0");
    const duration = 2000;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const updateCounter = () => {
      current += increment;
      if (current >= target) {
        counter.textContent = target.toLocaleString();
      } else {
        counter.textContent = Math.floor(current).toLocaleString();
        requestAnimationFrame(updateCounter);
      }
    };

    setTimeout(updateCounter, 300);
  });
};

onMounted(() => {
  const cleanup = createParticles();
  animateCounters();

  // 清理函数
  onBeforeUnmount(() => {
    if (cleanup) cleanup();
    cancelAnimationFrame(animationFrameId);
  });
});
</script>

<style scoped>
@keyframes rotateCube {
  0% {
    transform: rotateX(0deg) rotateY(0deg);
  }
  100% {
    transform: rotateX(360deg) rotateY(360deg);
  }
}

.cube-container {
  perspective: 1000px;
  width: 100px;
  height: 100px;
}

.cube {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  animation: rotateCube 15s infinite linear;
}

.face {
  position: absolute;
  width: 100px;
  height: 100px;
  background: rgba(0, 200, 255, 0.1);
  border: 2px solid rgba(0, 200, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  color: rgba(0, 200, 255, 0.8);
  backdrop-filter: blur(5px);
}

.front {
  transform: translateZ(50px);
  background: linear-gradient(45deg, rgba(0, 200, 255, 0.2), rgba(128, 0, 128, 0.2));
}

.back {
  transform: rotateY(180deg) translateZ(50px);
  background: linear-gradient(45deg, rgba(255, 0, 255, 0.2), rgba(0, 200, 255, 0.2));
}

.right {
  transform: rotateY(90deg) translateZ(50px);
  background: linear-gradient(45deg, rgba(0, 255, 255, 0.2), rgba(255, 0, 255, 0.2));
}

.left {
  transform: rotateY(-90deg) translateZ(50px);
  background: linear-gradient(45deg, rgba(128, 0, 128, 0.2), rgba(0, 255, 255, 0.2));
}

.top {
  transform: rotateX(90deg) translateZ(50px);
  background: linear-gradient(45deg, rgba(0, 200, 255, 0.2), rgba(255, 0, 255, 0.2));
}

.bottom {
  transform: rotateX(-90deg) translateZ(50px);
  background: linear-gradient(45deg, rgba(255, 0, 255, 0.2), rgba(128, 0, 128, 0.2));
}

.neon-text {
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0ff, 0 0 20px #0ff, 0 0 35px #0ff,
    0 0 40px #0ff;
  animation: neonGlow 2s ease-in-out infinite alternate;
}

@keyframes neonGlow {
  from {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0ff, 0 0 20px #0ff, 0 0 35px #0ff,
      0 0 40px #0ff;
  }
  to {
    text-shadow: 0 0 2px #fff, 0 0 5px #fff, 0 0 7px #0ff, 0 0 10px #0ff, 0 0 17px #0ff,
      0 0 20px #0ff;
  }
}

.hologram-text {
  position: relative;
  text-shadow: 0 0 10px rgba(0, 200, 255, 0.5);
  animation: hologramFlicker 3s infinite;
}

@keyframes hologramFlicker {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.9;
  }
  51% {
    opacity: 0.1;
  }
  52% {
    opacity: 0.9;
  }
}

.glitch-text {
  position: relative;
}

.glitch-text::before,
.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch-text::before {
  left: 2px;
  text-shadow: -2px 0 #ff00c1;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim 5s infinite linear alternate-reverse;
}

.glitch-text::after {
  left: -2px;
  text-shadow: -2px 0 #00fff9;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim2 5s infinite linear alternate-reverse;
}

@keyframes glitch-anim {
  0% {
    clip: rect(42px, 9999px, 44px, 0);
  }
  5% {
    clip: rect(12px, 9999px, 59px, 0);
  }
  10% {
    clip: rect(48px, 9999px, 29px, 0);
  }
  15% {
    clip: rect(42px, 9999px, 73px, 0);
  }
  20% {
    clip: rect(63px, 9999px, 27px, 0);
  }
  25% {
    clip: rect(34px, 9999px, 55px, 0);
  }
  30% {
    clip: rect(86px, 9999px, 73px, 0);
  }
  35% {
    clip: rect(20px, 9999px, 20px, 0);
  }
  40% {
    clip: rect(26px, 9999px, 60px, 0);
  }
  45% {
    clip: rect(25px, 9999px, 66px, 0);
  }
  50% {
    clip: rect(57px, 9999px, 98px, 0);
  }
  55% {
    clip: rect(5px, 9999px, 46px, 0);
  }
  60% {
    clip: rect(82px, 9999px, 31px, 0);
  }
  65% {
    clip: rect(54px, 9999px, 27px, 0);
  }
  70% {
    clip: rect(28px, 9999px, 99px, 0);
  }
  75% {
    clip: rect(45px, 9999px, 69px, 0);
  }
  80% {
    clip: rect(23px, 9999px, 85px, 0);
  }
  85% {
    clip: rect(1px, 9999px, 83px, 0);
  }
  90% {
    clip: rect(72px, 9999px, 11px, 0);
  }
  95% {
    clip: rect(60px, 9999px, 89px, 0);
  }
  100% {
    clip: rect(52px, 9999px, 74px, 0);
  }
}

@keyframes glitch-anim2 {
  0% {
    clip: rect(65px, 9999px, 100px, 0);
  }
  5% {
    clip: rect(52px, 9999px, 74px, 0);
  }
  10% {
    clip: rect(79px, 9999px, 85px, 0);
  }
  15% {
    clip: rect(75px, 9999px, 5px, 0);
  }
  20% {
    clip: rect(67px, 9999px, 61px, 0);
  }
  25% {
    clip: rect(14px, 9999px, 79px, 0);
  }
  30% {
    clip: rect(1px, 9999px, 66px, 0);
  }
  35% {
    clip: rect(86px, 9999px, 30px, 0);
  }
  40% {
    clip: rect(23px, 9999px, 98px, 0);
  }
  45% {
    clip: rect(85px, 9999px, 72px, 0);
  }
  50% {
    clip: rect(71px, 9999px, 75px, 0);
  }
  55% {
    clip: rect(2px, 9999px, 48px, 0);
  }
  60% {
    clip: rect(30px, 9999px, 16px, 0);
  }
  65% {
    clip: rect(59px, 9999px, 50px, 0);
  }
  70% {
    clip: rect(41px, 9999px, 62px, 0);
  }
  75% {
    clip: rect(2px, 9999px, 82px, 0);
  }
  80% {
    clip: rect(47px, 9999px, 73px, 0);
  }
  85% {
    clip: rect(3px, 9999px, 27px, 0);
  }
  90% {
    clip: rect(26px, 9999px, 55px, 0);
  }
  95% {
    clip: rect(42px, 9999px, 97px, 0);
  }
  100% {
    clip: rect(38px, 9999px, 49px, 0);
  }
}

.scanline {
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 255, 255, 0.1) 10%,
    transparent 100%
  );
  animation: scan 4s linear infinite;
}

@keyframes scan {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100vh);
  }
}

.stat-card {
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 200, 255, 0.2);
  border: 1px solid rgba(0, 200, 255, 0.3);
}

.animation-delay-500 {
  animation-delay: 0.5s;
}

.animation-delay-1000 {
  animation-delay: 1s;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
</style>
