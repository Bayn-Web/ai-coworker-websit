<template>
  <section id="testimonials" class="py-20 px-6 relative overflow-hidden">
    <!-- 全息数据流场背景 -->
    <div class="absolute inset-0 z-0 overflow-hidden">
      <!-- 全息容器 -->
      <div ref="hologramContainer" class="absolute inset-0"></div>

      <!-- 3D网格矩阵 -->
      <div class="absolute inset-0 opacity-20">
        <div class="hologram-grid"></div>
      </div>

      <!-- 中央能量核心 -->
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div
          class="w-48 h-48 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 opacity-10 blur-3xl animate-pulse"
        ></div>
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-white opacity-20 blur-xl"
        ></div>
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-cyan-400 opacity-80 animate-ping"
        ></div>
      </div>

      <!-- 数据流连接线 -->
      <div class="absolute inset-0 z-20">
        <div
          v-for="i in 15"
          :key="i"
          class="absolute bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-700 h-0.5 transform rounded-full shadow-[0_0_8px_rgba(0,200,255,0.7)]"
          :style="{
            width: `${Math.random() * 150 + 100}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
            animation: `pulse ${Math.random() * 4 + 2}s infinite ${Math.random() * 1}s`,
          }"
        ></div>
      </div>

      <!-- 脉冲光点 -->
      <div class="absolute inset-0 z-10">
        <div
          v-for="i in 25"
          :key="i"
          class="absolute w-2 h-2 rounded-full animate-ping"
          :style="{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${Math.random() * 3 + 1}s`,
            backgroundColor: Math.random() > 0.5 ? '#00ccff' : '#cc00ff',
          }"
        ></div>
      </div>
    </div>

    <!-- 渐变遮罩 -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90 z-0"></div>

    <div class="max-w-7xl mx-auto relative z-20">
      <div class="text-center mb-16">
        <div class="inline-block relative">
          <h2 class="text-4xl md:text-6xl font-bold mb-4">
            <span
              class="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
            >
              全球赞誉
            </span>
          </h2>
          <div
            class="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400/50 via-blue-500/50 to-purple-600/50 rounded-full"
          ></div>
        </div>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto mt-6">
          来自世界500强企业与创新公司的技术领袖们的真实评价
        </p>
      </div>

      <!-- 3D旋转评价卡片 -->
      <div class="perspective-1000 h-[600px] flex items-center justify-center">
        <!-- 修改这一行，移除旋转样式 -->
        <div class="carousel-3d relative w-full h-full">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="testimonial.name"
            class="carousel-item absolute bg-gray-900/60 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-700/50 p-8 transition-all duration-700"
            :style="getItemStyle(index)"
          >
            <div class="flex flex-col h-full">
              <div class="flex items-center mb-6">
                <div class="relative">
                  <img
                    :src="testimonial.avatar"
                    :alt="testimonial.name"
                    class="w-20 h-20 rounded-full object-cover border-4 border-cyan-500/30"
                  />
                  <div
                    class="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center"
                  >
                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <div class="ml-6">
                  <div class="font-bold text-2xl text-white">{{ testimonial.name }}</div>
                  <div class="text-cyan-400 font-medium text-lg">{{ testimonial.position }}</div>
                  <div class="flex items-center mt-2">
                    <span class="text-gray-400 text-sm flex items-center">
                      <svg
                        class="w-4 h-4 mr-1 text-cyan-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                        ></path>
                      </svg>
                      {{ testimonial.location }}
                    </span>
                  </div>
                </div>
              </div>

              <div class="flex-1">
                <blockquote class="text-xl italic text-gray-200 mb-6 relative">
                  <svg
                    class="absolute top-0 left-0 w-8 h-8 text-cyan-500/20 transform -translate-x-2 -translate-y-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
                    ></path>
                  </svg>
                  <p class="relative z-10">{{ testimonial.content }}</p>
                </blockquote>

                <div class="flex">
                  <div v-for="n in 5" :key="n" class="text-yellow-400 mr-1">
                    <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path
                        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div class="flex justify-between items-center mt-6 pt-6 border-t border-gray-700/50">
                <div class="text-gray-400 text-sm">
                  {{ testimonial.date }}
                </div>
                <div class="flex space-x-2">
                  <div
                    v-for="tag in testimonial.tags"
                    :key="tag"
                    class="px-3 py-1 bg-gray-800/50 text-cyan-400 rounded-full text-xs"
                  >
                    {{ tag }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 导航控件 -->
      <div class="flex justify-center mt-16 space-x-6">
        <button
          @click="prevTestimonial"
          class="w-16 h-16 rounded-full bg-gray-900/50 backdrop-blur-lg border border-gray-700/50 flex items-center justify-center hover:bg-cyan-900/30 transition-all duration-300 group"
        >
          <svg
            class="w-8 h-8 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>

        <div class="flex items-center space-x-2">
          <div
            v-for="(_, index) in testimonials"
            :key="index"
            @click="currentTestimonial = index"
            :class="[
              'w-4 h-4 rounded-full cursor-pointer transition-all duration-300',
              index === currentTestimonial ? 'bg-cyan-500 w-8' : 'bg-gray-700 hover:bg-gray-600',
            ]"
          ></div>
        </div>

        <button
          @click="nextTestimonial"
          class="w-16 h-16 rounded-full bg-gray-900/50 backdrop-blur-lg border border-gray-700/50 flex items-center justify-center hover:bg-cyan-900/30 transition-all duration-300 group"
        >
          <svg
            class="w-8 h-8 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const testimonials = ref([
  {
    name: "Elon Musk",
    position: "CEO at Tesla & SpaceX",
    content:
      "This AI coworker has revolutionized how we approach complex engineering problems. Its ability to understand and generate solutions across multiple domains is unprecedented. A true game-changer for innovation.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    location: "Austin, TX",
    date: "2023年12月",
    tags: ["Engineering", "Innovation"],
  },
  {
    name: "Satya Nadella",
    position: "CEO at Microsoft",
    content:
      "The seamless integration and multilingual capabilities have transformed our global operations. It's not just an AI assistant, it's a true collaborative partner that understands context and nuance.",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    location: "Seattle, WA",
    date: "2024年1月",
    tags: ["Enterprise", "Global"],
  },
  {
    name: "Sundar Pichai",
    position: "CEO at Google",
    content:
      "What sets this AI apart is its continuous learning capability. It adapts to our workflows and becomes more valuable over time. The productivity gains have been measurable and significant across our teams.",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    location: "Mountain View, CA",
    date: "2024年2月",
    tags: ["AI/ML", "Productivity"],
  },
  {
    name: "Tim Cook",
    position: "CEO at Apple",
    content:
      "The security and privacy features are world-class. We've implemented it across our design teams, and the creative augmentation it provides while maintaining our high standards is remarkable.",
    avatar: "https://randomuser.me/api/portraits/men/82.jpg",
    location: "Cupertino, CA",
    date: "2024年3月",
    tags: ["Security", "Design"],
  },
  {
    name: "Mark Zuckerberg",
    position: "CEO at Meta",
    content:
      "This AI coworker has accelerated our research timelines significantly. Its ability to synthesize information across disciplines and propose novel approaches has been instrumental in our recent breakthroughs.",
    avatar: "https://randomuser.me/api/portraits/men/91.jpg",
    location: "Menlo Park, CA",
    date: "2024年4月",
    tags: ["Research", "Innovation"],
  },
]);

const currentTestimonial = ref(0);
const rotationAngle = ref(0);
const globeContainer = ref<HTMLElement | null>(null);
let animationFrameId: number;

const nextTestimonial = () => {
  currentTestimonial.value = (currentTestimonial.value + 1) % testimonials.value.length;
  updateRotation();
};

const prevTestimonial = () => {
  currentTestimonial.value =
    currentTestimonial.value === 0 ? testimonials.value.length - 1 : currentTestimonial.value - 1;
  updateRotation();
};

const updateRotation = () => {
  rotationAngle.value = -currentTestimonial.value * 72; // 72 = 360/5
};

const getItemStyle = (index: number) => {
  // 计算当前卡片与选中卡片的差值
  const total = testimonials.value.length;
  let offset = index - currentTestimonial.value;

  // 处理循环情况，确保最短路径
  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;

  // 每个卡片之间的角度间隔
  const anglePerItem = 360 / total;
  const angle = offset * anglePerItem;

  // 转换为弧度
  const radian = angle * (Math.PI / 180);
  const radius = 300;

  // 计算3D位置
  const x = Math.sin(radian) * radius;
  const z = Math.cos(radian) * radius - radius; // 调整z位置使正面卡片居中

  // 根据z轴位置计算缩放和透明度
  const scale = (z + radius) / radius;
  const opacity = Math.max(scale * 0.7 + 0.3, 0.1);

  return {
    transform: `translate3d(${x}px, 0px, ${z}px) scale(${scale})`,
    opacity: opacity,
    zIndex: Math.round(scale * 10),
  };
};

// 创建3D地球背景
const createGlobe = () => {
  if (!globeContainer.value) return;

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  canvas.className = "w-full h-full";
  globeContainer.value.appendChild(canvas);

  const resizeCanvas = () => {
    canvas.width = globeContainer.value!.clientWidth;
    canvas.height = globeContainer.value!.clientHeight;
  };

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  // 地球点阵
  const points: {
    x: number;
    y: number;
    z: number;
    screenX: number;
    screenY: number;
    size: number;
    brightness: number;
    pulse: number;
  }[] = [];
  const pointCount = 400;

  // 创建点阵（模拟地球经纬度分布）
  for (let i = 0; i < pointCount; i++) {
    const lat = Math.acos(Math.random() * 2 - 1) - Math.PI / 2;
    const lon = Math.random() * Math.PI * 2;
    const x = Math.cos(lat) * Math.cos(lon);
    const y = Math.cos(lat) * Math.sin(lon);
    const z = Math.sin(lat);

    points.push({
      x,
      y,
      z,
      screenX: 0,
      screenY: 0,
      size: Math.random() * 2 + 0.5,
      brightness: Math.random() * 0.7 + 0.3,
      pulse: Math.random() * Math.PI * 2,
    });
  }

  let rotation = 0;

  // 动画循环
  const animate = () => {
    if (!ctx) return;

    // 半透明背景覆盖创造轨迹效果
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    rotation += 0.002;

    // 更新和绘制点
    points.forEach((point) => {
      // 旋转点
      const rotatedX = point.x * Math.cos(rotation) - point.z * Math.sin(rotation);
      const rotatedZ = point.x * Math.sin(rotation) + point.z * Math.cos(rotation);

      // 投影到2D
      const scale = 300 / (300 + rotatedZ);
      point.screenX = canvas.width / 2 + rotatedX * scale * 300;
      point.screenY = canvas.height / 2 + point.y * scale * 300;

      // 脉冲效果
      point.pulse += 0.03;
      const pulseFactor = Math.sin(point.pulse) * 0.5 + 0.5;

      // 绘制点
      if (
        point.screenX > 0 &&
        point.screenX < canvas.width &&
        point.screenY > 0 &&
        point.screenY < canvas.height
      ) {
        ctx.beginPath();
        ctx.arc(
          point.screenX,
          point.screenY,
          point.size * scale * (0.5 + pulseFactor * 0.5),
          0,
          Math.PI * 2
        );
        ctx.fillStyle = `rgba(0, ${Math.floor(100 + point.brightness * 155)}, 255, ${
          0.1 + point.brightness * 0.6
        })`;
        ctx.fill();
      }
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
  const cleanup = createGlobe();
  updateRotation();

  onBeforeUnmount(() => {
    if (cleanup) cleanup();
  });
});
const hologramContainer = ref<HTMLElement | null>(null);
// 创建全息数据流场
const createHologramField = () => {
  if (!hologramContainer.value) return;

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  canvas.className = "w-full h-full";
  hologramContainer.value.appendChild(canvas);

  const resizeCanvas = () => {
    canvas.width = hologramContainer.value!.clientWidth;
    canvas.height = hologramContainer.value!.clientHeight;
  };

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  // 数据流粒子系统
  const particles: {
    x: number;
    y: number;
    z: number;
    size: number;
    speed: number;
    color: string;
    trail: { x: number; y: number; size: number }[];
    maxTrail: number;
  }[] = [];
  const particleCount = 200;

  // 创建粒子
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * 1000,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 2 + 0.5,
      color: `hsl(${Math.random() * 60 + 180}, 100%, ${Math.random() * 30 + 60}%)`,
      trail: [],
      maxTrail: Math.floor(Math.random() * 10) + 5,
    });
  }

  // 数据节点网络
  const nodes: { x: number; y: number; size: number; pulse: number; connections: number }[] = [];
  const nodeCount = 30;

  for (let i = 0; i < nodeCount; i++) {
    nodes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 8 + 4,
      pulse: Math.random() * Math.PI * 2,
      connections: Math.floor(Math.random() * 3) + 1,
    });
  }

  // 动画循环
  const animate = () => {
    if (!ctx) return;

    // 半透明背景覆盖创造轨迹效果
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 更新和绘制数据流粒子
    particles.forEach((particle) => {
      // 更新位置 (3D效果)
      particle.z -= particle.speed;
      if (particle.z <= 0) {
        particle.z = 1000;
        particle.x = Math.random() * canvas.width;
        particle.y = Math.random() * canvas.height;
      }

      // 透视投影
      const scale = 1000 / (1000 + particle.z);
      const x = particle.x * scale;
      const y = particle.y * scale;
      const size = particle.size * scale;

      // 添加轨迹
      particle.trail.push({ x, y, size });
      if (particle.trail.length > particle.maxTrail) {
        particle.trail.shift();
      }

      // 绘制轨迹
      particle.trail.forEach((point, index) => {
        const alpha = (index / particle.trail.length) * 0.5;
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color.replace(")", `, ${alpha})`).replace("hsl", "hsla");
        ctx.fill();
      });
    });

    // 更新和绘制数据节点
    nodes.forEach((node) => {
      // 脉冲效果
      node.pulse += 0.05;
      const pulseScale = Math.sin(node.pulse) * 0.3 + 1;

      // 绘制节点
      const gradient = ctx.createRadialGradient(
        node.x,
        node.y,
        0,
        node.x,
        node.y,
        node.size * pulseScale
      );
      gradient.addColorStop(0, "rgba(0, 255, 255, 1)");
      gradient.addColorStop(0.7, "rgba(0, 200, 255, 0.5)");
      gradient.addColorStop(1, "rgba(0, 100, 255, 0)");

      ctx.beginPath();
      ctx.arc(node.x, node.y, node.size * pulseScale, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // 绘制连接线
      nodes.forEach((otherNode) => {
        if (node === otherNode) return;

        const distance = Math.sqrt(
          Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
        );

        if (distance < 150) {
          const alpha = 1 - distance / 150;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(otherNode.x, otherNode.y);
          ctx.strokeStyle = `rgba(0, 200, 255, ${alpha * 0.3})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });
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
  const cleanup = createHologramField();
  updateRotation();

  onBeforeUnmount(() => {
    if (cleanup) cleanup();
  });
});

// ... 其余代码保持不变 ...
</script>

<style scoped>
/* ... 其余样式保持不变 ... */

/* 添加全息网格样式 */
.hologram-grid {
  position: absolute;
  inset: 0;
  background: linear-gradient(rgba(0, 200, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 200, 255, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  transform: perspective(500px) rotateX(60deg) translateZ(-100px);
  animation: gridMove 20s linear infinite;
}

@keyframes gridMove {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100px 100px;
  }
}

/* 保持原有的动画定义 */
@keyframes pulse {
  0% {
    opacity: 0.2;
    transform: scaleX(1);
  }
  50% {
    opacity: 0.8;
    transform: scaleX(1.05);
  }
  100% {
    opacity: 0.2;
    transform: scaleX(1);
  }
}
</style>
