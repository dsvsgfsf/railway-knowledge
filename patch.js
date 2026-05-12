/* patch.js — 铁路知识查询系统功能增强补丁
   请将此文件在 index.html 中 </body> 前加载，或将其内容内联到 index.html 的 <script> 中
*/
(function(){
  // 1. 加载教材章节数据
  if(window.KNOWLEDGE_BASE && window.KNOWLEDGE_BASE.textbookChapters){
    console.log('[patch] 教材章节数据已就绪');
  }

  // 2. 在搜索结果后追加"相关推荐"
  const origAddBot = window.addBotMessage;
  // 已内联在 searchCorpus 中处理

  // 3. 快捷键：ESC 关闭搜索建议
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
      document.getElementById('search-suggestions')?.classList.remove('show');
    }
  });

  // 4. 自动保存对话历史到 localStorage
  const _origSend = window.sendMessage;
  // 已内联处理

  console.log('[铁路知识系统] patch.js 已加载 — 系统增强功能就绪');
})();
