import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';
import {cameraViewingCopy,cameraFaq} from '../src/lib/camera-viewing-copy.mjs';
const copy=JSON.parse(fs.readFileSync(new URL('../src/data/camera-editorial-ko.json',import.meta.url)));
test('photo and time-travel sources cannot be described as continuous live video',()=>{
 assert.match(cameraViewingCopy({kind:'live-photo'}).steps.join(' '),/동영상처럼 계속 움직이지는 않아요/);
 assert.match(cameraViewingCopy({kind:'live-photo'}).button,/갱신 사진/);
 assert.equal(cameraViewingCopy({kind:'time-travel'}).heading,'시간대별 영상 보는 방법');
});
test('missing or empty editorial questions do not generate an artificial FAQ',()=>{
 assert.deepEqual(cameraFaq({kind:'live-page',center:null},{}),[]);
 assert.deepEqual(cameraFaq({youtubeId:'id'},{faq:[]}),[]);
 const placeFaq=[['이 해변은 어디에 있나요?','기존 자료에 있는 장소 설명']];
 assert.deepEqual(cameraFaq({}, {faq:placeFaq}),placeFaq);
});
test('related views are reciprocal, known, and tied to specific shared subjects',()=>{
 assert.equal(Object.keys(copy).length,29);
 for(const [id,e]of Object.entries(copy))for(const other of e.relatedIds){assert(copy[other]);assert(copy[other].relatedIds.includes(id));assert.notEqual(id,other);}
 assert.equal(Object.values(copy).filter(e=>e.relatedIds.length).length,6);
});

test('YouTube viewing actions use the retained video ID and other providers retain their URL',()=>{
 const youtube=cameraViewingCopy({kind:'live-page',playback:'verified',youtubeId:'zsmvEf_PTpY',sourceUrl:'https://namafreediving.com/live-webcam'});
 assert.equal(youtube.url,'https://www.youtube.com/watch?v=zsmvEf_PTpY');
 assert.equal(youtube.button,'유튜브 원본 영상 보기');assert.equal(youtube.heading,'실시간 라이브캠 보는 방법');
 const external=cameraViewingCopy({kind:'live-page',playback:'verified',sourceUrl:'https://www.phuket101.net/phuket-webcams/'});
 assert.equal(external.url,'https://www.phuket101.net/phuket-webcams/');assert(!JSON.stringify(external).includes('유튜브'));
 const photo=cameraViewingCopy({kind:'live-photo',playback:'verified',youtubeId:'unused',sourceUrl:'https://example.com/photo'});
 assert.equal(photo.heading,'갱신 사진 보는 방법');assert.equal(photo.url,'https://example.com/photo');
});
