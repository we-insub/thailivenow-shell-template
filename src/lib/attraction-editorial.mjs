// Korean revisions stay separate from the source version used by existing locale packs.
export function applyAttractionEditorial(place,locale,edits){
 if(locale!=='ko'||!edits?.[place.id])return place;
 return {...place,...edits[place.id]};
}
