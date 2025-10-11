<script setup lang="ts">
import { ref } from "vue";

const formData = ref({
  name: "",
  email: "",
  company: "",
  message: "",
});

const isSubmitting = ref(false);
const submitSuccess = ref(false);

const handleSubmit = () => {
  isSubmitting.value = true;

  // 模拟提交过程
  setTimeout(() => {
    isSubmitting.value = false;
    submitSuccess.value = true;

    // 重置表单
    formData.value = {
      name: "",
      email: "",
      company: "",
      message: "",
    };

    // 3秒后隐藏成功消息
    setTimeout(() => {
      submitSuccess.value = false;
    }, 3000);
  }, 1500);
};
</script>

<template>
  <section
    id="contact"
    class="py-20 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 px-6"
  >
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4 text-gray-900 dark:text-white">开始使用</h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          联系我们获取免费演示，让AI协作员工助力您的业务发展
        </p>
      </div>

      <div class="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">联系我们</h3>

          <div class="space-y-6">
            <div class="flex items-start">
              <div class="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg mr-4">
                <svg
                  class="w-6 h-6 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 dark:text-white mb-1">电话</h4>
                <p class="text-gray-600 dark:text-gray-400">+86 158-6734-4561</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg mr-4">
                <svg
                  class="w-6 h-6 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 dark:text-white mb-1">邮箱</h4>
                <p class="text-gray-600 dark:text-gray-400">bayn1404@gmail.com</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg mr-4">
                <svg
                  class="w-6 h-6 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 dark:text-white mb-1">地址</h4>
                <p class="text-gray-600 dark:text-gray-400">浙江省宁波市海曙区</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <form
            @submit.prevent="handleSubmit"
            class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
          >
            <div
              v-if="submitSuccess"
              class="mb-6 p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg"
            >
              消息发送成功！我们会尽快与您联系。
            </div>

            <div class="mb-6">
              <label for="name" class="block text-gray-700 dark:text-gray-300 mb-2">姓名</label>
              <input
                id="name"
                v-model="formData.name"
                type="text"
                required
                class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="请输入您的姓名"
              />
            </div>

            <div class="mb-6">
              <label for="email" class="block text-gray-700 dark:text-gray-300 mb-2">邮箱</label>
              <input
                id="email"
                v-model="formData.email"
                type="email"
                required
                class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="请输入您的邮箱"
              />
            </div>

            <div class="mb-6">
              <label for="company" class="block text-gray-700 dark:text-gray-300 mb-2"
                >公司名称</label
              >
              <input
                id="company"
                v-model="formData.company"
                type="text"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="请输入公司名称"
              />
            </div>

            <div class="mb-6">
              <label for="message" class="block text-gray-700 dark:text-gray-300 mb-2">留言</label>
              <textarea
                id="message"
                v-model="formData.message"
                rows="4"
                required
                class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="请告诉我们您的需求"
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70"
            >
              {{ isSubmitting ? "发送中..." : "发送消息" }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
