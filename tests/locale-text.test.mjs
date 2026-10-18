import test from 'node:test';
import assert from 'node:assert/strict';
import {translateLocaleText as translate} from '../src/lib/locale-text.mjs';
test('localized text preserves whitespace and uses the complete authored fragment',()=>{
 const dict={'태국 여행':'Thailand travel','태국 여행 →':'Explore Thailand →'};
 assert.equal(translate('  태국 여행 →  ',dict),'  Explore Thailand →  ');
 assert.equal(translate('Hello',dict),'Hello');assert.equal(translate('미등록 문장',dict),'미등록 문장');
});
test('specific page patterns win over short suffix patterns and keep numbered pagination numeric',()=>{
 const dict={'${page}페이지':'Page ${page}','도시별 루프탑·전망대 찾기 · ${page}페이지':'Find rooftops and viewpoints · Page ${page}'};
 assert.equal(translate('도시별 루프탑·전망대 찾기 · 2페이지',dict),'Find rooftops and viewpoints · Page 2');
 assert.equal(translate('방콕 페이지',dict),'방콕 페이지');
});
test('variable content keeps punctuation and is localized only when a matching label exists',()=>{
 const dict={'${name} 여행 시기':'When to visit ${name}','지역 (${name})':'Area (${name})','방콕':'Bangkok'};
 assert.equal(translate('방콕 여행 시기',dict),'When to visit Bangkok');
 assert.equal(translate('지역 (A+B)',dict),'Area (A+B)');
 assert.equal(translate('지역 xA+Bx',dict),'지역 xA+Bx');
});
test('dictionary caches remain scoped to the exact language dictionary',()=>{
 const en={'태국 여행':'Thailand travel'},ms={'태국 여행':'Percutian Thailand'};
 assert.equal(translate('태국 여행',en),'Thailand travel');assert.equal(translate('태국 여행',ms),'Percutian Thailand');
});

test('nested template labels resolve in initial HTML without waiting for client mutation',()=>{
 const dict={'${name} 사진':'${name} photos','차암 · 현지 풍경 photos':'Cha-am · Local scenery photographs'};
 assert.equal(translate('차암 · 현지 풍경 사진',dict),'Cha-am · Local scenery photographs');
 assert.equal(translate('태국',{'태국':'한국','한국':'태국'}),'한국');
});

test('a conditional placeholder without a real Korean anchor cannot consume unrelated text',()=>{
 const dict={"${name} ${photo?'현지 사진':'영상'}":"${name} · ${photo?'현지 사진':'영상'}",'${name} 현지 사진':'${name} local photos'};
 assert.equal(translate('Chai Nat 현지 사진',dict),'Chai Nat local photos');
 assert.equal(translate('누락된 긴 제목',dict),'누락된 긴 제목');
});

test('authored translations can localize English UI labels while preserving unknown credits',()=>{
 const dict={'YouTube · original provider':'YouTube · 原始发布方'};
 assert.equal(translate('YouTube · original provider',dict),'YouTube · 原始发布方');
 assert.equal(translate('Wolfgang Holzem',dict),'Wolfgang Holzem');
});

test('link arrows preserve the authored translated label even when the arrow is a separate template fragment',()=>{
 assert.equal(translate('유튜브 원본 영상 보기 ↗',{'유튜브 원본 영상 보기':'Открыть исходное видео YouTube'}),'Открыть исходное видео YouTube ↗');
});
