import test from 'node:test';import assert from 'node:assert/strict';import {englishMarketText} from '../src/lib/attraction-english-market.mjs';
test('regional English spelling preserves numbers, units, limits and source URL bytes',()=>{
 const source={paragraph:'The centre has a 46-metre figure; travellers can see colourful exhibits. Admission is 300 baht, not included in the programme.',url:'https://example.test/centre/programme?colour=red',details:[['Height','at least 120 cm'],['Fee','1,040 baht']]};
 const us=englishMarketText(source,'en-us');assert.equal(us.paragraph,'The center has a 46-meter figure; travelers can see colorful exhibits. Admission is 300 baht, not included in the program.');assert.equal(us.url,source.url);assert.deepEqual(us.details,source.details);assert.deepEqual(englishMarketText(us,'en-gb'),source);assert.deepEqual(englishMarketText(source,'en'),source);
});
test('regional rules preserve capitalised official names and unrelated substrings',()=>{
 const value='Creative Centre, SEA LIFE Bangkok Ocean World: centre; programme. The eccentric traveller pays US$8.49.';
 assert.equal(englishMarketText(value,'en-us'),'Creative Centre, SEA LIFE Bangkok Ocean World: center; program. The eccentric traveler pays US$8.49.');
});
