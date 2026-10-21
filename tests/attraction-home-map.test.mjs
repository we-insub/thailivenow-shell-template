import test from 'node:test';
import assert from 'node:assert/strict';
import attractions from '../src/data/attraction-details-ko.json' with { type: 'json' };
import mapData from '../src/data/attraction-map-points.json' with { type: 'json' };

test('every attraction in the multilingual hub has one sourced home-map point', () => {
  assert.equal(attractions.length, 87);
  assert.equal(Object.keys(mapData.points).length, attractions.length);
  assert.equal(mapData.license, 'Data © OpenStreetMap contributors, ODbL 1.0');
  for (const attraction of attractions) {
    const point = mapData.points[attraction.id];
    assert.ok(point, `missing map point: ${attraction.id}`);
    assert.ok(Number.isFinite(point.lat) && point.lat >= 5 && point.lat <= 21, `invalid latitude: ${attraction.id}`);
    assert.ok(Number.isFinite(point.lng) && point.lng >= 97 && point.lng <= 106, `invalid longitude: ${attraction.id}`);
    assert.match(point.source, /^https?:\/\//, `missing coordinate source: ${attraction.id}`);
  }
});
