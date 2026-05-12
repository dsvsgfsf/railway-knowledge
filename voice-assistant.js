/**
 * AI语音助手模块 - 边狱巴士风格
 * 集成语音识别和语音合成功能
 * 使用Web Speech API实现
 */

(function() {
  'use strict';

  // 防止重复加载
  if (window.RailwayVoiceAssistant) return;

  window.RailwayVoiceAssistant = {
    isOpen: false,
    isRecording: false,
    isSpeaking: false,
    recognition: null,
    synth: window.speechSynthesis,
    assistantName: '小站',
    
    // 初始化
    init: function() {
      this.createUI();
      this.initSpeechRecognition();
      this.bindEvents();
      console.log('[RailwayVoiceAssistant] AI语音助手已初始化');
    },

    // 创建UI界面
    createUI: function() {
      // 添加样式
      const styles = document.createElement('style');
      styles.id = 'voice-assistant-styles';
      styles.textContent = `
        /* AI语音助手悬浮按钮 */
        #ai-assistant-fab {
          position: fixed;
          bottom: 24px;
          left: 24px;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6c5ce7 0%, #a29bfe 50%, #fd79a8 100%);
          border: 3px solid #fff;
          box-shadow: 0 4px 20px rgba(108, 92, 231, 0.4), 0 0 30px rgba(253, 121, 168, 0.3);
          cursor: pointer;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          transition: all 0.3s ease;
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        #ai-assistant-fab:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 30px rgba(108, 92, 231, 0.5), 0 0 40px rgba(253, 121, 168, 0.4);
        }
        
        #ai-assistant-fab.recording {
          animation: recording-pulse 1s ease-in-out infinite;
          background: linear-gradient(135deg, #e74c3c 0%, #e17055 100%);
        }
        
        #ai-assistant-fab.speaking {
          animation: speaking-pulse 0.5s ease-in-out infinite;
          background: linear-gradient(135deg, #00b894 0%, #55efc4 100%);
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 4px 20px rgba(108, 92, 231, 0.4), 0 0 30px rgba(253, 121, 168, 0.3); }
          50% { box-shadow: 0 4px 30px rgba(108, 92, 231, 0.6), 0 0 50px rgba(253, 121, 168, 0.5); }
        }
        
        @keyframes recording-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        @keyframes speaking-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        /* AI助手面板 */
        #ai-assistant-panel {
          position: fixed;
          bottom: 100px;
          left: 24px;
          width: 380px;
          max-width: calc(100vw - 48px);
          height: 520px;
          max-height: calc(100vh - 140px);
          background: linear-gradient(180deg, #1a1a2e 0%, #16213e 100%);
          border-radius: 20px;
          border: 2px solid rgba(162, 155, 254, 0.3);
          box-shadow: 0 10px 50px rgba(0, 0, 0, 0.5), 0 0 100px rgba(108, 92, 231, 0.2);
          z-index: 999;
          display: none;
          flex-direction: column;
          overflow: hidden;
          animation: panel-slide-in 0.3s ease-out;
        }
        
        #ai-assistant-panel.show {
          display: flex;
        }
        
        @keyframes panel-slide-in {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        /* 面板头部 */
        .assistant-header {
          background: linear-gradient(135deg, rgba(108, 92, 231, 0.3) 0%, rgba(253, 121, 168, 0.2) 100%);
          padding: 16px 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .assistant-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6c5ce7 0%, #fd79a8 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          animation: avatar-bounce 3s ease-in-out infinite;
        }
        
        @keyframes avatar-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        
        .assistant-info {
          flex: 1;
        }
        
        .assistant-name {
          font-size: 16px;
          font-weight: 700;
          color: #fff;
        }
        
        .assistant-status {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.6);
          display: flex;
          align-items: center;
          gap: 4px;
        }
        
        .assistant-status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #00b894;
          animation: status-blink 2s ease-in-out infinite;
        }
        
        @keyframes status-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .assistant-close {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: rgba(255, 255, 255, 0.7);
          font-size: 18px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        
        .assistant-close:hover {
          background: rgba(231, 76, 60, 0.8);
          color: #fff;
        }
        
        /* 对话区域 */
        .assistant-messages {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .assistant-message {
          max-width: 85%;
          padding: 10px 14px;
          border-radius: 16px;
          font-size: 14px;
          line-height: 1.5;
          animation: message-in 0.3s ease-out;
        }
        
        @keyframes message-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .assistant-message.assistant {
          background: linear-gradient(135deg, rgba(108, 92, 231, 0.8) 0%, rgba(162, 155, 254, 0.8) 100%);
          color: #fff;
          align-self: flex-start;
          border-bottom-left-radius: 4px;
        }
        
        .assistant-message.user {
          background: linear-gradient(135deg, #00b894 0%, #55efc4 100%);
          color: #1a1a2e;
          align-self: flex-end;
          border-bottom-right-radius: 4px;
        }
        
        .assistant-message.system {
          background: rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.7);
          align-self: center;
          text-align: center;
          font-size: 12px;
          padding: 8px 16px;
          border-radius: 20px;
        }
        
        /* 输入区域 */
        .assistant-input-area {
          padding: 12px 16px;
          background: rgba(0, 0, 0, 0.2);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .assistant-input-row {
          display: flex;
          gap: 8px;
          align-items: flex-end;
        }
        
        #assistant-input {
          flex: 1;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          padding: 10px 16px;
          color: #fff;
          font-size: 14px;
          resize: none;
          max-height: 80px;
          outline: none;
          transition: all 0.2s;
        }
        
        #assistant-input::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }
        
        #assistant-input:focus {
          border-color: rgba(162, 155, 254, 0.6);
          background: rgba(255, 255, 255, 0.15);
        }
        
        .assistant-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          transition: all 0.2s;
        }
        
        .assistant-btn.voice {
          background: linear-gradient(135deg, #e74c3c 0%, #e17055 100%);
          color: #fff;
        }
        
        .assistant-btn.voice:hover {
          transform: scale(1.1);
        }
        
        .assistant-btn.voice.recording {
          animation: voice-recording 0.5s ease-in-out infinite;
        }
        
        @keyframes voice-recording {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(231, 76, 60, 0.7); }
          50% { transform: scale(1.1); box-shadow: 0 0 0 10px rgba(231, 76, 60, 0); }
        }
        
        .assistant-btn.send {
          background: linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%);
          color: #fff;
        }
        
        .assistant-btn.send:hover {
          transform: scale(1.1);
        }
        
        .assistant-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        /* 功能提示 */
        .assistant-tip {
          text-align: center;
          font-size: 11px;
          color: rgba(255, 255, 255, 0.4);
          margin-top: 8px;
        }
        
        /* 波形动画 */
        .voice-wave {
          display: none;
          align-items: center;
          justify-content: center;
          gap: 3px;
          padding: 8px;
        }
        
        .voice-wave.show {
          display: flex;
        }
        
        .voice-wave span {
          width: 4px;
          background: linear-gradient(to top, #e74c3c, #e17055);
          border-radius: 2px;
          animation: wave 0.5s ease-in-out infinite;
        }
        
        .voice-wave span:nth-child(1) { animation-delay: 0s; }
        .voice-wave span:nth-child(2) { animation-delay: 0.1s; }
        .voice-wave span:nth-child(3) { animation-delay: 0.2s; }
        .voice-wave span:nth-child(4) { animation-delay: 0.3s; }
        .voice-wave span:nth-child(5) { animation-delay: 0.4s; }
        
        @keyframes wave {
          0%, 100% { height: 4px; }
          50% { height: 20px; }
        }
        
        /* 气泡提示 */
        .voice-bubble {
          position: fixed;
          bottom: 100px;
          left: 100px;
          background: rgba(108, 92, 231, 0.95);
          color: #fff;
          padding: 12px 20px;
          border-radius: 12px;
          font-size: 14px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          animation: bubble-in 0.3s ease-out;
          z-index: 1001;
        }
        
        @keyframes bubble-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `;
      document.head.appendChild(styles);

      // 创建悬浮按钮
      const fab = document.createElement('div');
      fab.id = 'ai-assistant-fab';
      fab.innerHTML = '🤖';
      fab.title = '点击开启AI语音助手';
      document.body.appendChild(fab);

      // 创建助手面板
      const panel = document.createElement('div');
      panel.id = 'ai-assistant-panel';
      panel.innerHTML = `
        <div class="assistant-header">
          <div class="assistant-avatar">🚂</div>
          <div class="assistant-info">
            <div class="assistant-name">铁路小站</div>
            <div class="assistant-status">
              <span class="assistant-status-dot"></span>
              <span id="assistant-status-text">在线 · 随时为您服务</span>
            </div>
          </div>
          <button class="assistant-close" onclick="RailwayVoiceAssistant.toggle()">✕</button>
        </div>
        <div class="assistant-messages" id="assistant-messages">
          <div class="assistant-message system">
            👋 您好！我是铁路小站，您的智能学习助手。<br>
            可以点击麦克风🎤语音提问，或直接输入文字哦~
          </div>
        </div>
        <div class="voice-wave" id="voice-wave">
          <span></span><span></span><span></span><span></span><span></span>
        </div>
        <div class="assistant-input-area">
          <div class="assistant-input-row">
            <textarea id="assistant-input" rows="1" placeholder="输入您的问题..."></textarea>
            <button class="assistant-btn voice" id="voice-btn" title="语音输入">🎤</button>
            <button class="assistant-btn send" id="send-btn" title="发送">➤</button>
          </div>
          <div class="assistant-tip">🎤 点击麦克风语音提问 · 🔇 支持语音播报回答</div>
        </div>
      `;
      document.body.appendChild(panel);
    },

    // 初始化语音识别
    initSpeechRecognition: function() {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      
      if (!SpeechRecognition) {
        console.warn('[RailwayVoiceAssistant] 当前浏览器不支持语音识别');
        document.getElementById('voice-btn').style.display = 'none';
        return;
      }

      this.recognition = new SpeechRecognition();
      this.recognition.lang = 'zh-CN';
      this.recognition.continuous = false;
      this.recognition.interimResults = true;
      this.recognition.maxAlternatives = 1;

      this.recognition.onstart = () => {
        this.isRecording = true;
        this.updateUI('recording');
        this.addMessage('system', '🎤 正在聆听，请说话...');
      };

      this.recognition.onresult = (event) => {
        const results = event.results;
        const transcript = results[results.length - 1][0].transcript;
        
        if (results[results.length - 1].isFinal) {
          this.addMessage('user', transcript);
          this.processUserInput(transcript);
        }
      };

      this.recognition.onerror = (event) => {
        console.error('[RailwayVoiceAssistant] 语音识别错误:', event.error);
        this.isRecording = false;
        this.updateUI('idle');
        
        if (event.error === 'not-allowed') {
          this.addMessage('system', '⚠️ 请允许麦克风权限后重试');
        } else if (event.error === 'no-speech') {
          this.addMessage('system', '🤔 没有检测到语音，请重试');
        }
      };

      this.recognition.onend = () => {
        this.isRecording = false;
        this.updateUI('idle');
      };
    },

    // 绑定事件
    bindEvents: function() {
      // 悬浮按钮点击
      document.getElementById('ai-assistant-fab').addEventListener('click', () => {
        this.toggle();
      });

      // 语音按钮点击
      document.getElementById('voice-btn').addEventListener('click', () => {
        this.toggleRecording();
      });

      // 发送按钮点击
      document.getElementById('send-btn').addEventListener('click', () => {
        this.sendText();
      });

      // 输入框回车发送
      document.getElementById('assistant-input').addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          this.sendText();
        }
      });
    },

    // 切换面板显示
    toggle: function() {
      this.isOpen = !this.isOpen;
      const panel = document.getElementById('ai-assistant-panel');
      const fab = document.getElementById('ai-assistant-fab');
      
      if (this.isOpen) {
        panel.classList.add('show');
        fab.innerHTML = '✕';
        fab.title = '关闭AI助手';
      } else {
        panel.classList.remove('show');
        fab.innerHTML = '🤖';
        fab.title = '点击开启AI语音助手';
      }
    },

    // 切换录音状态
    toggleRecording: function() {
      if (!this.recognition) {
        this.showBubble('当前浏览器不支持语音识别');
        return;
      }

      if (this.isRecording) {
        this.recognition.stop();
      } else {
        try {
          this.recognition.start();
        } catch (e) {
          console.error('[RailwayVoiceAssistant] 启动语音识别失败:', e);
        }
      }
    },

    // 发送文字
    sendText: function() {
      const input = document.getElementById('assistant-input');
      const text = input.value.trim();
      
      if (!text) return;
      
      input.value = '';
      this.addMessage('user', text);
      this.processUserInput(text);
    },

    // 处理用户输入
    processUserInput: function(text) {
      // 更新状态
      document.getElementById('assistant-status-text').textContent = '思考中...';
      
      // 如果主系统有quickAsk函数，使用它处理问题
      if (window.quickAsk) {
        // 直接使用主系统的搜索功能
        const result = window.searchCorpus ? window.searchCorpus(text) : null;
        
        if (result) {
          // 从结果中提取纯文本用于语音播报
          const plainText = this.extractPlainText(result);
          this.addMessage('assistant', plainText);
          this.speak(plainText);
        } else {
          // 使用AI API
          this.askAI(text);
        }
      } else {
        // 独立模式，使用本地知识库
        this.searchLocalKnowledge(text);
      }
    },

    // 搜索本地知识库
    searchLocalKnowledge: function(query) {
      // 简单的本地知识库搜索
      const knowledge = {
        '你好': '您好！我是铁路小站，很高兴为您服务。有什么铁路知识方面的问题想问我吗？',
        '铁路': '铁路是由路基、轨道、桥梁、隧道等组成的交通运输基础设施。中国铁路经过多次提速，已达到世界先进水平。',
        '高铁': '高速铁路是指设计时速250公里以上的铁路。中国高铁运营里程已超过4万公里，位居世界第一。',
        '火车': '火车是铁路运输的主要交通工具，分为客运列车和货运列车两大类。',
        '信号': '铁路信号是指挥列车运行的重要设备，包括信号机、轨道电路、联锁系统等。',
        '工资': '铁路局薪资待遇因地区和岗位不同有所差异，一般实习期3000-5000元，转正后5000-12000元不等。',
        '招聘': '铁路局招聘一般每年9-10月发布公告，需要参加笔试（行测+铁路基础）和面试。',
        '专业': '黑龙江交通职业技术学院开设27个铁路及通用专业，包括铁道机车、铁道车辆、动车组检修等。'
      };

      const lowerQuery = query.toLowerCase();
      let response = '抱歉，我暂时没有找到相关信息。您可以尝试询问：铁路基本知识、高铁发展、铁路信号、招聘要求等话题。';

      for (const [key, value] of Object.entries(knowledge)) {
        if (lowerQuery.includes(key)) {
          response = value;
          break;
        }
      }

      this.addMessage('assistant', response);
      this.speak(response);
    },

    // 使用AI API
    askAI: async function(text) {
      const apiConfig = this.getApiConfig();
      
      if (!apiConfig.key) {
        this.addMessage('assistant', '请先在侧边栏配置DeepSeek API才能使用AI功能。');
        return;
      }

      try {
        const response = await fetch(apiConfig.url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiConfig.key}`
          },
          body: JSON.stringify({
            model: apiConfig.model,
            messages: [
              { role: 'system', content: '你是黑龙江交通职业技术学院的AI助手铁路小站，用简洁友好的方式回答铁路知识问题。' },
              { role: 'user', content: text }
            ],
            stream: false
          })
        });

        if (!response.ok) throw new Error('API请求失败');
        
        const data = await response.json();
        const answer = data.choices[0].message.content;
        
        this.addMessage('assistant', answer);
        this.speak(answer);
      } catch (error) {
        console.error('[RailwayVoiceAssistant] API错误:', error);
        this.addMessage('assistant', '抱歉，AI服务暂时不可用。请检查API配置或稍后重试。');
      }
    },

    // 获取API配置
    getApiConfig: function() {
      return {
        key: localStorage.getItem('railway_api_key') || '',
        url: localStorage.getItem('railway_api_url') || 'https://api.deepseek.com/v1/chat/completions',
        model: localStorage.getItem('railway_api_model') || 'deepseek-chat'
      };
    },

    // 添加消息
    addMessage: function(type, content) {
      const container = document.getElementById('assistant-messages');
      const msg = document.createElement('div');
      msg.className = `assistant-message ${type}`;
      msg.textContent = content;
      container.appendChild(msg);
      container.scrollTop = container.scrollHeight;
      
      // 更新状态
      if (type === 'assistant') {
        document.getElementById('assistant-status-text').textContent = '在线 · 随时为您服务';
      }
    },

    // 提取纯文本（去掉HTML标签）
    extractPlainText: function(html) {
      const div = document.createElement('div');
      div.innerHTML = html;
      return div.textContent || div.innerText || '';
    },

    // 语音播报
    speak: function(text) {
      if (!this.synth) {
        console.warn('[RailwayVoiceAssistant] 语音合成不可用');
        return;
      }

      // 停止之前的播报
      this.synth.cancel();

      // 截断过长文本
      const maxLength = 500;
      if (text.length > maxLength) {
        text = text.substring(0, maxLength) + '...';
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'zh-CN';
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;

      // 尝试选择中文语音
      const voices = this.synth.getVoices();
      const zhVoice = voices.find(v => v.lang.includes('zh') || v.lang.includes('CN'));
      if (zhVoice) {
        utterance.voice = zhVoice;
      }

      utterance.onstart = () => {
        this.isSpeaking = true;
        this.updateUI('speaking');
        document.getElementById('assistant-status-text').textContent = '🔊 播报中...';
      };

      utterance.onend = () => {
        this.isSpeaking = false;
        this.updateUI('idle');
        document.getElementById('assistant-status-text').textContent = '在线 · 随时为您服务';
      };

      utterance.onerror = (e) => {
        console.error('[RailwayVoiceAssistant] 语音播报错误:', e);
        this.isSpeaking = false;
        this.updateUI('idle');
      };

      this.synth.speak(utterance);
    },

    // 更新UI状态
    updateUI: function(state) {
      const fab = document.getElementById('ai-assistant-fab');
      const voiceBtn = document.getElementById('voice-btn');
      const voiceWave = document.getElementById('voice-wave');

      // 移除所有状态类
      fab.classList.remove('recording', 'speaking');
      voiceBtn.classList.remove('recording');
      voiceWave.classList.remove('show');

      switch (state) {
        case 'recording':
          fab.classList.add('recording');
          voiceBtn.classList.add('recording');
          voiceWave.classList.add('show');
          break;
        case 'speaking':
          fab.classList.add('speaking');
          break;
        default:
          // idle状态
          break;
      }
    },

    // 显示气泡提示
    showBubble: function(message) {
      // 移除已有气泡
      const existing = document.querySelector('.voice-bubble');
      if (existing) existing.remove();

      const bubble = document.createElement('div');
      bubble.className = 'voice-bubble';
      bubble.textContent = message;
      document.body.appendChild(bubble);

      setTimeout(() => {
        bubble.remove();
      }, 3000);
    },

    // 测试语音功能
    testVoice: function() {
      this.speak('您好！我是铁路小站，语音功能测试成功！');
    }
  };

  // 页面加载完成后初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => RailwayVoiceAssistant.init(), 100);
    });
  } else {
    setTimeout(() => RailwayVoiceAssistant.init(), 100);
  }

  // 确保语音列表加载
  if (window.speechSynthesis) {
    window.speechSynthesis.onvoiceschanged = () => {
      console.log('[RailwayVoiceAssistant] 语音列表已加载');
    };
  }

})();
