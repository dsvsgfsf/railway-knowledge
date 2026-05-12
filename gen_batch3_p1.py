#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# gen_batch3_p1.py - 写入 quiz-bank-batch3.js 头部 + 铁路旅客运输组织
import os

OUTPUT = r"D:\YX\Zuoye\engineering\quiz-bank-batch3.js"

header = r"""/* quiz-bank-batch3.js - 题库扩充批次3 */
(function(){
'use strict';
if(!window.QUIZ_BANK) return;

function addQuestions(courseName, questions){
  const bank = QUIZ_BANK[courseName];
  if(!bank) return;
  questions.forEach(function(q){
    bank.questions.push({id: bank.questions.length + 1, type: q.type, q: q.q, opts: q.opts, ans: q.ans, exp: q.exp});
  });
  bank.totalQ = bank.questions.length;
}

/* ═══════════════════════════════════════
   铁路旅客运输组织 (~184题)
   ═══════════════════════════════════════ */
addQuestions("铁路旅客运输组织", [
"""

# 铁路旅客运输组织题目 (180题，用Python列表存，再写出)
# 为控制长度，每题用最短格式
questions = []


