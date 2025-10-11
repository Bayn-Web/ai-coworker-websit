<template>
  <div class="min-h-screen bg-black text-white overflow-x-hidden">
    <!-- 背景网格 with enhanced waving effect -->
    <div class="fixed inset-0 z-0">
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,100,255,0.1)_0%,rgba(0,0,0,0)_70%)]"
      ></div>
      <!-- Enhanced animated waving grid -->
      <div class="absolute inset-0 overflow-hidden">
        <canvas ref="gridCanvas" class="wave-canvas"></canvas>
      </div>
    </div>

    <header
      class="fixed w-full z-50 backdrop-blur-xl bg-black/30 py-4 px-6 border-b border-gray-800/50"
    >
      <nav class="max-w-7xl mx-auto flex justify-between items-center">
        <div class="text-2xl font-extrabold tracking-wider">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            AI
          </span>
          <span
            class="ml-1 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
          >
            CoWorker
          </span>
        </div>
        <div class="flex items-center space-x-8">
          <a
            href="#features"
            class="hover:text-cyan-400 transition-all duration-300 relative group"
          >
            功能
            <span
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"
            ></span>
          </a>
          <a href="#demo" class="hover:text-purple-400 transition-all duration-300 relative group">
            演示
            <span
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"
            ></span>
          </a>
          <a
            href="#testimonials"
            class="hover:text-pink-400 transition-all duration-300 relative group"
          >
            评价
            <span
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 transition-all duration-300 group-hover:w-full"
            ></span>
          </a>
          <button
            @click="toggleDarkMode"
            class="p-2 rounded-full hover:bg-gray-800/50 transition-all duration-300 group"
          >
            <div class="w-6 h-6 relative">
              <svg
                v-if="!isDarkMode"
                class="w-6 h-6 absolute inset-0 text-cyan-400 transition-all duration-300 group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                ></path>
              </svg>
              <svg
                v-else
                class="w-6 h-6 absolute inset-0 text-yellow-400 transition-all duration-300 group-hover:scale-125"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
            </div>
          </button>
        </div>
      </nav>
    </header>

    <main class="pt-20 relative z-10">
      <HeroSection />

      <!-- 分割线 -->
      <div class="relative py-20">
        <div class="absolute inset-0 flex items-center" aria-hidden="true">
          <div class="w-full border-t border-gray-800"></div>
        </div>
        <div class="relative flex justify-center">
          <span class="px-4 bg-black text-cyan-400 rounded-full border border-cyan-400/30">
            <svg
              class="w-6 h-6 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
          </span>
        </div>
      </div>

      <div id="features">
        <FeatureSection />
      </div>

      <div id="demo" class="py-20">
        <DemoSection />
      </div>

      <div id="testimonials" class="py-20">
        <TestimonialSection />
      </div>

      <div id="contact" class="py-20">
        <ContactSection />
      </div>
    </main>

    <footer
      class="py-16 bg-gradient-to-t from-gray-900/50 to-black border-t border-gray-800/30 relative"
    >
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div class="col-span-1 md:col-span-2">
            <h2 class="text-3xl font-bold mb-4">
              <span
                class="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
              >
                AI
              </span>
              <span
                class="ml-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
              >
                CoWorker
              </span>
            </h2>
            <p class="text-gray-400 max-w-md leading-relaxed">
              让AI成为您的最佳工作伙伴，提升工作效率，释放创造力。我们致力于为企业和个人提供最先进的AI解决方案。
            </p>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-4 text-cyan-400">链接</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">首页</a></li>
              <li>
                <a href="#features" class="text-gray-400 hover:text-white transition-colors"
                  >功能</a
                >
              </li>
              <li>
                <a href="#demo" class="text-gray-400 hover:text-white transition-colors">演示</a>
              </li>
              <li>
                <a href="#testimonials" class="text-gray-400 hover:text-white transition-colors"
                  >评价</a
                >
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-4 text-purple-400">联系</h3>
            <ul class="space-y-2 text-gray-400">
              <li>邮箱: contact@aicoworker.com</li>
              <li>电话: +86 158 6734 4561</li>
              <li>地址: 浙江省宁波市海曙区</li>
            </ul>
          </div>
        </div>

        <div class="border-t border-gray-800/50 mt-12 pt-8 text-center text-gray-500">
          <p>
            &copy; {{ new Date().getFullYear() }} AI CoWorker. 保留所有权利.
            让AI成为您的最佳工作伙伴.
          </p>
        </div>
      </div>

      <!-- 底部装饰元素 -->
      <div
        class="absolute top-0 left-1/4 w-64 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
      ></div>
      <div
        class="absolute top-0 right-1/4 w-64 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
      ></div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import HeroSection from "@/components/HeroSection.vue";
import FeatureSection from "@/components/FeatureSection.vue";
import DemoSection from "@/components/DemoSection.vue";
import TestimonialSection from "@/components/TestimonialSection.vue";
import ContactSection from "@/components/ContactSection.vue";

interface Point {
  x: number;
  y: number;
  origX: number;
  origY: number;
}

const isDarkMode = ref(true);
const gridCanvas = ref<HTMLCanvasElement | null>(null);
let animationFrameId: number | null = null;
let grid: GridSystem | null = null;
let time = 0;

class GridSystem {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D | null;
  width: number;
  height: number;
  gridSize: number;
  points: Point[][];

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");

    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.gridSize = 50;
    this.points = [];

    this.init();
    this.resize();
    window.addEventListener("resize", this.resize.bind(this));
  }

  init() {
    // Create grid points
    const cols = Math.ceil(this.width / this.gridSize) + 1;
    const rows = Math.ceil(this.height / this.gridSize) + 1;

    this.points = [];
    for (let x = 0; x < cols; x++) {
      this.points[x] = [];
      for (let y = 0; y < rows; y++) {
        this.points[x]![y] = {
          x: x * this.gridSize,
          y: y * this.gridSize,
          origX: x * this.gridSize,
          origY: y * this.gridSize,
        };
      }
    }
  }

  resize = () => {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.init();
  };

  update() {
    if (!this.ctx) return;

    time += 0.02;

    // Apply wave function to grid points
    for (let x = 0; x < this.points.length; x++) {
      for (let y = 0; y < this.points[x]!.length; y++) {
        const point = this.points[x]![y]!;

        // Create wave effect with multiple frequencies
        const distanceX = point.origX - this.width / 2;
        const distanceY = point.origY - this.height / 2;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

        // Combine multiple wave functions for more natural effect
        const wave1 = Math.sin(distance * 0.02 + time) * 5;
        const wave2 = Math.sin(point.origX * 0.01 + time * 1.2) * 3;
        const wave3 = Math.cos(point.origY * 0.015 + time * 0.8) * 4;

        // Apply displacement
        point.x = point.origX + wave1 + wave2;
        point.y = point.origY + wave2 + wave3;
      }
    }
  }

  draw() {
    if (!this.ctx) return;

    this.ctx.clearRect(0, 0, this.width, this.height);

    // Set line style
    this.ctx.strokeStyle = "rgba(0, 200, 255, 0.15)";
    this.ctx.lineWidth = 1;
    this.ctx.lineCap = "round";
    this.ctx.lineJoin = "round";

    // Draw vertical lines
    for (let x = 0; x < this.points.length; x++) {
      this.ctx.beginPath();
      for (let y = 0; y < this.points[x]!.length; y++) {
        const point = this.points[x]![y]!;
        if (y === 0) {
          this.ctx.moveTo(point.x, point.y);
        } else {
          this.ctx.lineTo(point.x, point.y);
        }
      }
      this.ctx.stroke();
    }

    // Draw horizontal lines
    for (let y = 0; y < this.points[0]!.length; y++) {
      this.ctx.beginPath();
      for (let x = 0; x < this.points.length; x++) {
        const point = this.points[x]![y]!;
        if (x === 0) {
          this.ctx.moveTo(point.x, point.y);
        } else {
          this.ctx.lineTo(point.x, point.y);
        }
      }
      this.ctx.stroke();
    }
  }

  animate() {
    this.update();
    this.draw();
  }
}

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle("dark", isDarkMode.value);
};

const animate = () => {
  if (grid) {
    grid.animate();
  }
  animationFrameId = requestAnimationFrame(animate);
};

onMounted(() => {
  document.documentElement.classList.add("dark");

  if (gridCanvas.value) {
    grid = new GridSystem(gridCanvas.value);
    animate();
  }
});

onBeforeUnmount(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
  window.removeEventListener("resize", grid?.resize);
});
</script>

<style>
/* 全局样式增强 */
body {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: #000;
  color: #fff;
  overflow-x: hidden;
}

.wave-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Rest of your styles remain the same */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #00ccff, #cc00ff);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #00ffff, #ff00ff);
}

* {
  cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%2300ccff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3C/svg%3E"),
    auto;
}

a,
button {
  cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23cc00ff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3C/svg%3E"),
    pointer;
}
</style>
