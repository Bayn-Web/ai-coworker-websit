<template>
  <section id="features" class="py-20 px-6 relative overflow-hidden">
    <!-- 更炫酷的AI科技背景 -->
    <div class="absolute inset-0 z-0">
      <!-- 粒子系统 -->
      <div ref="particlesContainer" class="absolute inset-0"></div>

      <!-- 数据流效果 -->
      <div class="absolute inset-0 opacity-30">
        <div
          v-for="i in 15"
          :key="i"
          class="absolute top-0 h-0.5 bg-gradient-to-r from-cyan-400/0 via-cyan-400 to-cyan-400/0"
          :style="{
            width: `${Math.random() * 30 + 20}%`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `dataFlow ${Math.random() * 10 + 10}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }"
        ></div>
      </div>

      <!-- 3D网格背景 -->
      <div class="absolute inset-0 opacity-20">
        <div
          class="absolute inset-0"
          style="
            background: linear-gradient(rgba(0, 200, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 200, 255, 0.1) 1px, transparent 1px);
            background-size: 30px 30px;
          "
        ></div>
      </div>

      <!-- 脉冲光环 -->
      <div
        class="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl animate-pulse"
      ></div>
      <div
        class="absolute bottom-1/3 right-1/3 w-72 h-72 rounded-full bg-purple-500/10 blur-3xl animate-pulse animation-delay-2000"
      ></div>
    </div>

    <!-- 渐变遮罩 -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90 z-0"></div>

    <div class="max-w-7xl mx-auto relative z-10">
      <div class="text-center mb-16">
        <div class="inline-block relative">
          <h2
            class="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
          >
            核心功能
          </h2>
          <div
            class="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400/50 via-blue-500/50 to-purple-600/50 rounded-full"
          ></div>
        </div>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto mt-6">
          我们的AI协作员工具备多项强大功能，助您提升业务效率
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(feature, index) in features"
          :key="index"
          @mouseenter="hoveredFeature = index"
          @mouseleave="hoveredFeature = null"
          class="group relative bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 transform hover:-translate-y-3 shadow-2xl"
        >
          <!-- 悬停发光效果 -->
          <div
            class="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
          ></div>

          <!-- 脉冲动画 -->
          <div
            v-if="hoveredFeature === index"
            class="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/30 to-purple-500/30 opacity-70 animate-pulse blur-sm"
          ></div>

          <div class="relative z-10">
            <div
              class="text-5xl mb-4 filter drop-shadow-[0_0_8px_rgba(0,200,255,0.5)] transition-all duration-300 group-hover:scale-110"
            >
              {{ feature.icon }}
            </div>
            <h3
              class="text-2xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors duration-300"
            >
              {{ feature.title }}
            </h3>
            <p class="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
              {{ feature.description }}
            </p>

            <!-- 底部装饰线 -->
            <div
              class="mt-4 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent group-hover:via-cyan-400 transition-all duration-500"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const features = ref([
  {
    title: "快速训练",
    description: "只需少量样本数据，即可快速训练出适合您业务的AI模型",
    icon: "⚡",
  },
  {
    title: "智能协作",
    description: "AI员工可以与人类团队无缝协作，提升整体工作效率",
    icon: "🤖",
  },
  {
    title: "持续学习",
    description: "AI会根据实际工作情况不断优化，越用越聪明",
    icon: "🧠",
  },
  {
    title: "安全保障",
    description: "企业级安全保护，确保您的数据和隐私安全",
    icon: "🔒",
  },
]);

const hoveredFeature = ref<number | null>(null);
const particlesContainer = ref<HTMLElement | null>(null);
let animationFrameId: number;

// 创建高科技粒子系统
const createParticleSystem = () => {
  if (!particlesContainer.value) return;

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  canvas.className = "w-full h-full";
  particlesContainer.value.appendChild(canvas);

  const resizeCanvas = () => {
    canvas.width = particlesContainer.value!.clientWidth;
    canvas.height = particlesContainer.value!.clientHeight;
  };

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  // 粒子数组
  const particles: {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    color: string;
    pulse: number;
    type: "circle" | "square" | "triangle";
  }[] = [];
  const particleCount = 100;

  // 创建粒子
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      color:
        Math.random() > 0.5
          ? `rgba(0, ${Math.floor(Math.random() * 100 + 155)}, 255, ${Math.random() * 0.5 + 0.2})`
          : `rgba(${Math.floor(Math.random() * 100 + 155)}, 0, 255, ${Math.random() * 0.5 + 0.2})`,
      pulse: Math.random() * Math.PI * 2,
      type: Math.random() > 0.8 ? "circle" : Math.random() > 0.5 ? "square" : "triangle",
    });
  }

  // 动画循环
  const animate = () => {
    if (!ctx) return;

    // 半透明背景覆盖创造轨迹效果
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 更新和绘制粒子
    particles.forEach((particle) => {
      // 更新位置
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      // 边界处理
      if (particle.x < 0) particle.x = canvas.width;
      if (particle.x > canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = canvas.height;
      if (particle.y > canvas.height) particle.y = 0;

      // 脉冲效果
      particle.pulse += 0.02;
      const pulseFactor = Math.sin(particle.pulse) * 0.3 + 1;

      // 绘制不同类型的粒子
      ctx.save();
      ctx.globalAlpha = Math.sin(particle.pulse) * 0.3 + 0.4;

      switch (particle.type) {
        case "circle":
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * pulseFactor, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();
          break;

        case "square":
          ctx.fillStyle = particle.color;
          ctx.fillRect(
            particle.x - particle.size * pulseFactor,
            particle.y - particle.size * pulseFactor,
            particle.size * 2 * pulseFactor,
            particle.size * 2 * pulseFactor
          );
          break;

        case "triangle":
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y - particle.size * pulseFactor);
          ctx.lineTo(
            particle.x - particle.size * pulseFactor,
            particle.y + particle.size * pulseFactor
          );
          ctx.lineTo(
            particle.x + particle.size * pulseFactor,
            particle.y + particle.size * pulseFactor
          );
          ctx.closePath();
          ctx.fillStyle = particle.color;
          ctx.fill();
          break;
      }

      ctx.restore();
    });

    animationFrameId = requestAnimationFrame(animate);
  };

  animate();

  return () => {
    window.removeEventListener("resize", resizeCanvas);
    cancelAnimationFrame(animationFrameId);
  };
};

onMounted(() => {
  const cleanup = createParticleSystem();
  onBeforeUnmount(() => {
    if (cleanup) cleanup();
  });
});
</script>

<style scoped>
@keyframes dataFlow {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100vw);
  }
}

@keyframes pulse {
  0% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.1);
  }
  100% {
    opacity: 0.3;
    transform: scale(1);
  }
}

.animate-pulse {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}
</style>
