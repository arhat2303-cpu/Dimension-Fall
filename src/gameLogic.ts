export const worldForDistance=(distance:number)=>Math.min(7,Math.floor(Math.max(0,distance)/500));
export const barrierIsSolid=(barrierDimension:-1|0|1,activeDimension:0|1)=>barrierDimension===-1||barrierDimension===activeDimension;
export const dailySeed=(utcDate:string)=>{let h=2166136261;for(const c of utcDate)h=Math.imul(h^c.charCodeAt(0),16777619);return h>>>0};
export const seededRandom=(seed:number)=>{let state=seed>>>0;return()=>{state=(state+0x6d2b79f5)>>>0;let t=state;t=Math.imul(t^(t>>>15),t|1);t^=t+Math.imul(t^(t>>>7),t|61);return((t^(t>>>14))>>>0)/4294967296}};
export const hasReachableGap=(width:number,gapWidth:number,edgeMargin:number,minimumGap=104)=>Number.isFinite(width)&&gapWidth>=minimumGap&&gapWidth<width&&edgeMargin>=0;
