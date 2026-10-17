import test from 'node:test';
import assert from 'node:assert/strict';
import {cameraVideoPreview,cameraCardPreview} from '../src/lib/camera-video-preview.mjs';
test('video preview follows the exact detail player ID ahead of regional photos',()=>{
 const result=cameraCardPreview({youtubeId:'zsmvEf_PTpY',preview:{url:'https://example.com/region.jpg',license:'CC BY',licenseUrl:'https://example.com/license'}});
 assert.equal(result.kind,'video');
 assert.equal(result.url,'https://i.ytimg.com/vi/zsmvEf_PTpY/hqdefault.jpg');
 assert.equal(result.sourceUrl,'https://www.youtube.com/watch?v=zsmvEf_PTpY');
 assert.match(result.label,/실시간 화면 아님/);
});
test('licensed reference photos retain attribution and are identified as reference photos',()=>{
 const preview={url:'https://example.com/region.jpg',credit:'Photographer',sourceUrl:'https://example.com/source',license:'CC BY',licenseUrl:'https://example.com/license'};
 const result=cameraCardPreview({preview});
 assert.equal(result.kind,'reference');assert.equal(result.credit,preview.credit);assert.equal(result.licenseUrl,preview.licenseUrl);assert.match(result.label,/카메라 화면 아님/);
});
test('missing or malformed IDs and unlicensed images do not become video previews',()=>{
 assert.equal(cameraVideoPreview({youtubeId:'../bad'}),undefined);
 assert.equal(cameraCardPreview({preview:{url:'https://example.com/unknown.jpg'}}),undefined);
});
