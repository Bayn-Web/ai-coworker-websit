<template>
  <section id="demo" class="py-20 px-6 relative overflow-hidden">
    <!-- 科技感背景 -->
    <div class="absolute inset-0 z-0">
      <!-- 动态粒子背景 -->
      <div ref="particlesContainer" class="absolute inset-0"></div>

      <!-- 扫描线效果 -->
      <div class="absolute inset-0 scanline"></div>

      <!-- 渐变光晕 -->
      <div
        class="absolute top-1/4 left-1/4 w-80 h-80 bg-cyan-500 rounded-full filter blur-[120px] opacity-10"
      ></div>
      <div
        class="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-500 rounded-full filter blur-[140px] opacity-10"
      ></div>
    </div>

    <!-- 渐变遮罩 -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90 z-0"></div>

    <div class="max-w-7xl mx-auto relative z-10">
      <div class="text-center mb-16">
        <div class="inline-block relative">
          <h2
            class="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
          >
            AI 演示
          </h2>
          <div
            class="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400/50 via-blue-500/50 to-purple-500/50 rounded-full"
          ></div>
        </div>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto mt-6">
          与我们的AI协作员工进行实时互动，体验未来工作方式
        </p>
      </div>

      <div class="max-w-6xl mx-auto">
        <!-- AI演示控制面板 -->
        <div
          class="bg-gray-900/50 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-700/50 overflow-hidden"
        >
          <!-- 顶部控制栏 -->
          <div class="bg-gradient-to-r from-gray-900 to-gray-800 p-6 border-b border-gray-700/50">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-2xl font-bold text-white flex items-center">
                  <span class="w-3 h-3 bg-red-500 rounded-full mr-3 animate-pulse"></span>
                  AI 协作终端
                </h3>
                <p class="text-cyan-400 text-sm mt-1">实时AI交互演示系统 v2.0</p>
              </div>
              <div class="flex space-x-2">
                <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
          </div>

          <!-- 状态栏 -->
          <div class="bg-gray-800/50 px-6 py-3 border-b border-gray-700/30 flex items-center">
            <div class="flex items-center text-cyan-400 text-sm">
              <div class="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <span>系统运行中</span>
            </div>
            <div class="ml-4 text-gray-400 text-sm">
              延迟: <span class="text-green-400">42ms</span>
            </div>
            <div class="ml-auto flex space-x-4 text-gray-400 text-sm">
              <span>CPU: <span class="text-cyan-400">24%</span></span>
              <span>内存: <span class="text-purple-400">68%</span></span>
            </div>
          </div>

          <!-- 主要交互区域 -->
          <div class="flex flex-col lg:flex-row">
            <!-- 对话区域 -->
            <div class="lg:w-2/3 border-r border-gray-700/30">
              <div ref="chatContainer" class="h-96 lg:h-[500px] overflow-y-auto p-6 chat-container">
                <div
                  v-for="(message, index) in messages"
                  :key="message.id"
                  :class="[
                    'mb-6 p-4 rounded-2xl max-w-[85%] transition-all duration-300 transform',
                    message.sender === 'ai'
                      ? 'bg-gradient-to-br from-cyan-900/30 to-blue-900/20 border border-cyan-500/20 ml-0 mr-auto rounded-tl-none glow-cyan'
                      : 'bg-gradient-to-br from-purple-900/30 to-pink-900/20 border border-purple-500/20 ml-auto mr-0 rounded-tr-none glow-purple',
                  ]"
                  :style="{ animationDelay: `${index * 0.1}s` }"
                >
                  <div class="flex items-center mb-2">
                    <div
                      :class="[
                        'w-8 h-8 rounded-full flex items-center justify-center mr-3 text-lg',
                        message.sender === 'ai'
                          ? 'bg-cyan-500/20 text-cyan-400'
                          : 'bg-purple-500/20 text-purple-400',
                      ]"
                    >
                      {{ message.sender === "ai" ? "🤖" : "👤" }}
                    </div>
                    <div
                      class="font-bold"
                      :class="message.sender === 'ai' ? 'text-cyan-300' : 'text-purple-300'"
                    >
                      {{ message.sender === "ai" ? "AI 协作员工" : "您" }}
                    </div>
                    <div class="ml-2 text-gray-500 text-xs">
                      {{ formatTime(message.timestamp) }}
                    </div>
                  </div>
                  <div
                    class="text-gray-200 typing-effect"
                    v-if="message.sender === 'ai' && message.typing"
                  >
                    <span class="typing-dot"></span>
                    <span class="typing-dot animation-delay-200"></span>
                    <span class="typing-dot animation-delay-400"></span>
                  </div>
                  <div v-else class="text-gray-200" v-html="formatMessage(message.text)"></div>
                </div>
              </div>

              <!-- 输入区域 -->
              <div class="border-t border-gray-700/30 p-4">
                <div class="flex">
                  <div class="relative flex-1">
                    <input
                      v-model="newMessage"
                      @keyup.enter="sendMessage"
                      type="text"
                      placeholder="输入消息... (例如: 分析上季度销售数据)"
                      class="w-full px-6 py-4 rounded-l-2xl bg-gray-800/50 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                    />
                    <div
                      class="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm"
                    >
                      Enter 发送
                    </div>
                  </div>
                  <button
                    @click="sendMessage"
                    :disabled="!newMessage.trim()"
                    class="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-r-2xl font-semibold hover:opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                  >
                    <span>发送</span>
                    <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 5l7 7-7 7M5 5l7 7-7 7"
                      ></path>
                    </svg>
                  </button>
                </div>

                <!-- 快捷命令 -->
                <div class="mt-3 flex flex-wrap gap-2">
                  <button
                    v-for="command in quickCommands"
                    :key="command"
                    @click="sendQuickCommand(command)"
                    class="text-xs px-3 py-1.5 bg-gray-700/50 hover:bg-cyan-700/50 text-cyan-300 rounded-full border border-cyan-500/30 transition-all duration-300"
                  >
                    {{ command }}
                  </button>
                </div>
              </div>
            </div>

            <!-- AI能力展示面板 -->
            <div class="lg:w-1/3">
              <div class="p-6 h-full">
                <h4 class="text-lg font-bold text-white mb-4 flex items-center">
                  <span class="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                  AI 能力面板
                </h4>

                <div class="space-y-4">
                  <div
                    v-for="ability in aiAbilities"
                    :key="ability.name"
                    class="bg-gray-800/50 rounded-xl p-4 border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <div class="flex items-center mb-2">
                      <div class="text-xl mr-3">{{ ability.icon }}</div>
                      <div class="font-semibold text-white">{{ ability.name }}</div>
                    </div>
                    <div class="text-gray-400 text-sm">{{ ability.description }}</div>
                    <div class="mt-3 w-full bg-gray-700 rounded-full h-2">
                      <div
                        class="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full"
                        :style="{ width: ability.progress + '%' }"
                      ></div>
                    </div>
                  </div>
                </div>

                <!-- AI状态 -->
                <div class="mt-6 pt-4 border-t border-gray-700/30">
                  <h5 class="font-bold text-white mb-3">AI 状态</h5>
                  <div class="grid grid-cols-2 gap-3">
                    <div class="bg-gray-800/50 rounded-lg p-3 text-center">
                      <div class="text-2xl font-bold text-cyan-400">{{ aiStats.responses }}</div>
                      <div class="text-gray-400 text-sm">响应数</div>
                    </div>
                    <div class="bg-gray-800/50 rounded-lg p-3 text-center">
                      <div class="text-2xl font-bold text-purple-400">{{ aiStats.accuracy }}%</div>
                      <div class="text-gray-400 text-sm">准确率</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 技术指标 -->
        <div class="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div
            class="bg-gray-900/50 backdrop-blur-lg rounded-xl p-4 border border-gray-700/30 text-center"
          >
            <div class="text-2xl font-bold text-cyan-400">GPT-4</div>
            <div class="text-gray-400 text-sm">模型版本</div>
          </div>
          <div
            class="bg-gray-900/50 backdrop-blur-lg rounded-xl p-4 border border-gray-700/30 text-center"
          >
            <div class="text-2xl font-bold text-purple-400">128K</div>
            <div class="text-gray-400 text-sm">上下文长度</div>
          </div>
          <div
            class="bg-gray-900/50 backdrop-blur-lg rounded-xl p-4 border border-gray-700/30 text-center"
          >
            <div class="text-2xl font-bold text-pink-400">24/7</div>
            <div class="text-gray-400 text-sm">服务时间</div>
          </div>
          <div
            class="bg-gray-900/50 backdrop-blur-lg rounded-xl p-4 border border-gray-700/30 text-center"
          >
            <div class="text-2xl font-bold text-blue-400">99.9%</div>
            <div class="text-gray-400 text-sm">可用性</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";

const messages = ref([
  {
    id: 1,
    text: "您好！我是您的AI协作员工，可以帮助您处理各种任务。我可以分析数据、撰写报告、安排会议等。请问有什么我可以帮您的吗？",
    sender: "ai",
    timestamp: new Date(),
    typing: false,
  },
  {
    id: 2,
    text: "为了展示我的能力，我可以为您生成一份销售数据分析报告，或者帮您安排下周的会议日程。您希望我做什么？",
    sender: "ai",
    timestamp: new Date(),
    typing: false,
  },
]);

const newMessage = ref("");
const chatContainer = ref<HTMLElement | null>(null);
const particlesContainer = ref<HTMLElement | null>(null);
let animationFrameId: number;

const quickCommands = [
  "分析上季度销售数据",
  "生成项目报告",
  "安排团队会议",
  "总结会议纪要",
  "翻译技术文档",
];

const aiAbilities = ref([
  { name: "自然语言处理", icon: "🧠", description: "理解和生成人类语言", progress: 95 },
  { name: "数据分析", icon: "📊", description: "处理和分析复杂数据集", progress: 88 },
  { name: "任务自动化", icon: "🤖", description: "自动化重复性工作流程", progress: 92 },
  { name: "多语言支持", icon: "🌐", description: "支持20+种语言", progress: 85 },
]);

const aiStats = ref({
  responses: 12487,
  accuracy: 96.8,
});

const formatTime = (date: Date) => {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};

const formatMessage = (text: string) => {
  // 简单的格式化，将换行转换为<br>
  return text.replace(/\n/g, "<br>");
};

const sendMessage = () => {
  if (newMessage.value.trim()) {
    const userMessage = {
      id: messages.value.length + 1,
      text: newMessage.value,
      sender: "user",
      timestamp: new Date(),
      typing: false,
    };

    messages.value.push(userMessage);
    newMessage.value = "";

    // 滚动到底部
    scrollToBottom();

    // 模拟AI回复
    setTimeout(() => {
      const aiMessage = {
        id: messages.value.length + 1,
        text: "",
        sender: "ai",
        timestamp: new Date(),
        typing: true,
      };

      messages.value.push(aiMessage);
      scrollToBottom();

      // 模拟打字效果
      const responses = [
        "感谢您的消息！我正在分析您的请求。根据您提供的信息，我可以生成一份详细的分析报告。这可能需要几秒钟时间，请稍等...",
        "我已经收到您的请求。正在处理中... 根据我的分析，上季度销售额增长了12%，主要得益于新产品的推出。我将为您生成一份完整的报告。",
        "好的，我明白了您的需求。让我为您处理这个任务。我已经连接到数据源并开始分析相关数据。预计在30秒内完成。",
        "收到！我正在调用相关模块来处理您的请求。请稍等片刻，我将为您提供最准确的结果。在此期间，您可以查看我其他的能力。",
        "处理中... 我已经分析了您提供的参数，并正在生成定制化的解决方案。这通常需要一些时间来确保结果的准确性。",
      ];

      const response = responses[Math.floor(Math.random() * responses.length)]!;
      let i = 0;

      const typeWriter = () => {
        if (i < response.length) {
          aiMessage.text += response.charAt(i);
          i++;
          setTimeout(typeWriter, Math.random() * 30 + 10);
        } else {
          aiMessage.typing = false;
        }
      };

      setTimeout(typeWriter, 1000);
    }, 500);
  }
};

const sendQuickCommand = (command: string) => {
  newMessage.value = command;
  sendMessage();
};

const scrollToBottom = () => {
  nextTick(() => {
    if (chatContainer.value) {
      chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
    }
  });
};

// 创建高科技粒子背景
const createParticles = () => {
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
  }[] = [];
  const particleCount = 150;

  // 创建粒子
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      color:
        Math.random() > 0.5
          ? `rgba(0, ${Math.floor(Math.random() * 155 + 100)}, 255, ${Math.random() * 0.4 + 0.1})`
          : `rgba(${Math.floor(Math.random() * 155 + 100)}, 0, 255, ${Math.random() * 0.4 + 0.1})`,
      pulse: Math.random() * Math.PI * 2,
    });
  }

  // 动画循环
  const animate = () => {
    if (!ctx) return;

    // 半透明背景覆盖创造轨迹效果
    ctx.fillStyle = "rgba(0, 0, 0, 0.03)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 更新和绘制粒子
    particles.forEach((particle) => {
      // 更新位置
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      // 边界处理
      if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
      if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

      // 脉冲效果
      particle.pulse += 0.02;
      const pulseFactor = Math.sin(particle.pulse) * 0.3 + 1;

      // 绘制粒子
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * pulseFactor, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();

      // 绘制连接线
      particles.forEach((otherParticle) => {
        const distance = Math.sqrt(
          Math.pow(particle.x - otherParticle.x, 2) + Math.pow(particle.y - otherParticle.y, 2)
        );

        if (distance < 100) {
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(otherParticle.x, otherParticle.y);
          ctx.strokeStyle = `rgba(0, 200, 255, ${0.2 * (1 - distance / 100)})`;
          ctx.lineWidth = 0.5;
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
  const cleanup = createParticles();
  scrollToBottom();

  onBeforeUnmount(() => {
    if (cleanup) cleanup();
  });
});
</script>

<style scoped>
.scanline {
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 255, 255, 0.05) 10%,
    transparent 100%
  );
  animation: scan 8s linear infinite;
  background-size: 100% 200px;
}

@keyframes scan {
  0% {
    background-position: 0 -200px;
  }
  100% {
    background-position: 0 100vh;
  }
}

.chat-container {
  background: linear-gradient(rgba(0, 100, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 100, 255, 0.05) 1px, transparent 1px);
  background-size: 20px 20px;
}

.glow-cyan {
  box-shadow: 0 0 15px rgba(0, 200, 255, 0.2);
}

.glow-purple {
  box-shadow: 0 0 15px rgba(128, 0, 255, 0.2);
}

.typing-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #60a5fa;
  margin-right: 4px;
  animation: typing 1.4s infinite ease-in-out;
}

@keyframes typing {
  0%,
  60%,
  100% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-5px);
  }
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.chat-container > div {
  animation: fadeInUp 0.3s ease-out forwards;
  opacity: 0;
}
</style>
