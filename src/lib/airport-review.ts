import {counterSeasonalNotice} from '../i18n/airport-counter-review';
import {airportUI} from '../i18n/airport-ui';
// Temporary local review: set false, then remove this module/component after approval.
export const airportKoreanReviewEnabled = true;
const files=import.meta.glob('../data/airport-review-*.json',{eager:true,import:'default'}) as Record<string,Record<string,string>>;
const labels=['공항 지연·결항','국가와 태국 사이의 항공편','편명·공항 검색','태국으로 출발','태국에서 출발','공항 카운터','항공사별 안내','수하물 파손','지연·결항 확인서','보험 청구','공식 안내','뒤로','항공사','노선','자료 확인일','공항별 안내','예정 운항시간','실제 이륙부터 착륙까지의 시간','등록된 목록에 일치하는 검색 결과가 없습니다.'];
const countries:Record<string,string>={'Malaysia':'말레이시아','中国大陆':'중국 본토','India':'인도','Россия':'러시아','日本':'일본','United Kingdom':'영국','United States':'미국','España':'스페인','台灣':'대만'};
const reviews:Record<string,string>={ms:'현지 검수용 버전입니다. 확인한 정보를 순차적으로 추가합니다. 목록에 없는 노선에도 직항편이 있을 수 있습니다.','zh-cn':'로컬 검수용 버전입니다. 확인한 자료를 순차적으로 추가하며, 목록에 없는 노선이 직항편이 없다는 뜻은 아닙니다.','zh-tw':'로컬 검수용 버전입니다. 확인한 자료를 순차적으로 추가하며, 목록에 없는 노선이 직항편이 없다는 뜻은 아닙니다.',ja:'로컬 검수용입니다. 확인한 정보부터 순차적으로 추가합니다. 목록에 없는 노선이 직항편이 없다는 뜻은 아닙니다.',ru:'로컬 검수용 버전입니다. 확인한 정보를 순차적으로 추가합니다. 목록에 노선이 없다고 해서 직항편이 없다는 뜻은 아닙니다.',es:'로컬 검수용 버전입니다. 확인한 자료를 순차적으로 추가합니다. 목록에 없는 노선에도 직항편이 있을 수 있습니다.'};
export function airportReviewDictionary(locale:string){
 const map={...countries,...files[`../data/airport-review-${locale}.json`]};
 (airportUI[locale]||[]).forEach((s,i)=>{map[s]=i===19?(reviews[locale]||'로컬 검수용 버전입니다. 확인한 정보를 순차적으로 추가합니다. 목록에 없는 노선에도 직항편이 있을 수 있습니다.'):labels[i];});
 const country={ms:'말레이시아','zh-cn':'중국 본토','zh-tw':'대만',ja:'일본',ru:'러시아',es:'스페인','en-in':'인도','en-gb':'영국','en-us':'미국'}[locale];
 const last=country?.charCodeAt(country.length-1);
 const conjunction=last&&last>=0xac00&&last<=0xd7a3&&(last-0xac00)%28!==0?'과':'와';
 map[airportUI[locale][1]]=`${country}${conjunction} 태국 사이의 항공편`;
 map[counterSeasonalNotice[locale]]=counterSeasonalNotice.ko;
 const segmenter=new Intl.Segmenter(locale,{granularity:"sentence"});
 const koSegmenter=new Intl.Segmenter("ko",{granularity:"sentence"});
 const counterOriginal=Array.from(segmenter.segment(counterSeasonalNotice[locale]),s=>s.segment.trim());
 const counterKorean=Array.from(koSegmenter.segment(counterSeasonalNotice.ko),s=>s.segment.trim());
 if(counterOriginal.length===1)map[counterOriginal[0]]=counterSeasonalNotice.ko;
 else if(counterOriginal.length===2){map[counterOriginal[0]]="카운터 위치는 시즌별로 바뀔 수 있습니다.";map[counterOriginal[1]]="해당 항공사에서 확인 바랍니다.";}
 const note=airportUI[locale][19];
 const original=Array.from(segmenter.segment(note),s=>s.segment.trim());
 const korean=Array.from(koSegmenter.segment(map[note]),s=>s.segment.trim());
 if(original.length===korean.length)original.forEach((text,i)=>{map[text]=korean[i];});
 map[airportUI[locale][20]]="당일 운항 상황 확인";
 map[airportUI[locale][21]]="확인한 출발일";
 map[airportUI[locale][22]]="시간표 적용 기간";
 map[airportUI[locale][23]]="태국 공항 선택";
 map[airportUI[locale][24]]=`${country} 공항 선택`;
 map[airportUI[locale][25]]="전체 공항";
 return map;
}
