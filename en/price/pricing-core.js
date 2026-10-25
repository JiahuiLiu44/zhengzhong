(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.EnglishQuotePricing = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const money = value => `$${Number(value).toFixed(2)}`;
  const round = value => Math.round((value + Number.EPSILON) * 100) / 100;
  function quantityUnit(unit, quantity) {
    const singular = {'carton/day':'carton-day','pallet/day':'pallet-day'}[unit] || unit;
    if (singular === 'kg' || quantity === 1) return singular;
    return singular + 's';
  }
  const fulfillment = {
    trial: {label: '0–49 orders/day', rates: {'0-1':.8,'1-2':1,'2-5':1.5,'5-10':2,'10-15':2.5,'15-22':3}},
    small: {label: '50–99 orders/day', rates: {'0-1':.73,'1-2':.9,'2-5':1.5,'5-10':2,'10-15':2.5,'15-22':3}},
    medium: {label: '100–499 orders/day', rates: {'0-1':.67,'1-2':.82,'2-5':1.5,'5-10':2,'10-15':2.5,'15-22':3}},
    large: {label: '500+ orders/day', rates: {'0-1':.65,'1-2':.8,'2-5':1.5,'5-10':2,'10-15':2.5,'15-22':3}},
  };
  const weightLabels = {'0-1':'0–1 kg','1-2':'Over 1 to 2 kg','2-5':'Over 2 to 5 kg','5-10':'Over 5 to 10 kg','10-15':'Over 10 to 15 kg','15-22':'Over 15 to 22 kg'};
  const skuRates = {one:{label:'1 SKU per carton',price:0},twoToFive:{label:'2–5 SKUs per carton',price:1},overFive:{label:'More than 5 SKUs per carton',price:2}};
  const storage = [
    {id:'storage30',label:'Days 0–30',price:0,note:'Free storage'},
    {id:'storage90',label:'Days 31–90',price:.6},
    {id:'storage120',label:'Days 91–120',price:.8},
    {id:'storage180',label:'Days 121–180',price:1},
    {id:'storage365',label:'Days 181–365',price:1.5},
    {id:'storageOver365',label:'More than 365 days',price:2},
  ];
  const addons = [
    {id:'fbaReturn10',group:'fba',name:'FBA Return Handling · 0–10 lb',unit:'carton',price:3},
    {id:'fbaReturn20',group:'fba',name:'FBA Return Handling · 10.01–20 lb',unit:'carton',price:5},
    {id:'fbaReturn45',group:'fba',name:'FBA Return Handling · 20.01–45 lb',unit:'carton',price:10},
    {id:'fbaRelabel',group:'fba',name:'FBA Relabeling / Label Covering',unit:'label',price:1},
    {id:'fbaSort',group:'fba',name:'FBA Return Sorting',unit:'item',price:.3},
    {id:'count20',group:'counting',name:'Inventory Counting · 0–20 lb',unit:'item',price:.3},
    {id:'count45',group:'counting',name:'Inventory Counting · 20.01–45 lb',unit:'item',price:1},
    {id:'count65',group:'counting',name:'Inventory Counting · 45.01–65 lb',unit:'item',price:2},
    {id:'count110',group:'counting',name:'Inventory Counting · 65.01–110 lb',unit:'item',price:3},
    {id:'labelPiece',group:'labeling',name:'Item Labeling',unit:'item',price:1},
    {id:'labelBox',group:'labeling',name:'Carton Labeling',unit:'carton',price:1},
    {id:'labelPallet',group:'labeling',name:'Pallet Labeling',unit:'pallet',price:2},
    {id:'materialSmallBox',group:'cartons',name:'Small Carton',unit:'carton',price:3},
    {id:'materialMediumBox',group:'cartons',name:'Medium Carton',unit:'carton',price:4},
    {id:'materialLargeBox',group:'cartons',name:'Large Carton',unit:'carton',price:5},
    {id:'materialBubble05',group:'bubble',name:'Bubble Mailer',unit:'mailer',price:.5},
    {id:'materialBubble10',group:'bubble',name:'Large Bubble Mailer',unit:'mailer',price:1},
    {id:'polybag30',group:'polybags',name:'Poly Mailer · 30 × 40',unit:'mailer',price:.5},
    {id:'polybag50',group:'polybags',name:'Poly Mailer · 50 × 50',unit:'mailer',price:.8},
    {id:'repack',group:'handling',name:'Additional Packing Labor',unit:'carton',price:4},
    {id:'photo',group:'inspection',name:'Product Photography',unit:'photo',price:1},
    {id:'video',group:'inspection',name:'Product Video Recording',unit:'video',price:5},
    {id:'inspect',group:'inspection',name:'Packaging and Visual Inspection',unit:'item',price:2},
    {id:'destroy',group:'handling',name:'Disposal',unit:'kg',price:1,minimum:50,note:'Excludes electronics and battery products. Minimum $50 per shipment.'},
    {id:'dimensionCheck',group:'inspection',name:'Dimensions and Weight Verification',unit:'item',price:5},
    {id:'detentionBox',group:'holding',name:'Pickup Delay Holding Fee · Cartons',unit:'carton/day',price:1,note:'Applies when goods are ready but not picked up by the customer. Begins on the fifth business day, excluding weekends and holidays. The pickup day counts as one day.'},
    {id:'detentionPallet',group:'holding',name:'Pickup Delay Holding Fee · Pallets',unit:'pallet/day',price:8,note:'Applies when goods are ready but not picked up by the customer. Begins on the fifth business day, excluding weekends and holidays. The pickup day counts as one day.'},
    {id:'restockBox',group:'handling',name:'Return Picked Inventory to Storage',unit:'carton',price:2,note:'For inventory already picked when the dispatch is canceled.'},
    {id:'returnToStock',group:'handling',name:'Return-to-Stock Processing',unit:'item',price:3,note:'For returned goods originally dispatched by us. Inspection is charged separately.'},
    {id:'overtime',group:'handling',name:'Holiday Overtime Processing',unit:'hour',price:100},
    {id:'palletize',group:'handling',name:'Palletizing · Labor and Materials',unit:'pallet',price:18},
    {id:'truck',group:'freight',name:'Truck Delivery / Final-Mile Freight',unit:'shipment',manual:true,note:'Quoted separately for the actual shipment.'},
  ];
  const services = {fulfillment:'Ecommerce Order Fulfillment',y2Exchange:'Y2 Shipping Label Replacement',relocation:'Inventory Transfer & Relabeling',otherServices:'Other Services'};
  const rules = {
    fulfillment:[
      'The handling rate includes order processing, scan verification, packing, and an outbound scan. Each additional item in the same order is $0.30, starting with the second item. No additional-item quantity is collected here, so that fee is not included in this estimate.',
      'For bulky parcels, the greater of actual weight and dimensional weight is used. Reference estimates: length × width × height in cm ÷ 6,000 gives kg; dimensions in inches ÷ 167 gives lb. These are reference formulas, not a universal carrier rule. Confirm the applicable carrier and service before shipment.',
      'Order handling is based on the total packed parcel weight for each order, including orders with multiple SKUs. Exact weight endpoints of 1, 2, 5, 10, and 15 kg stay in the lower weight band. The published table ends at 22 kg; request a quote for heavier parcels.',
      'Order handling target: within 24 hours on business days. Materials, return processing, receiving/counting/putaway, storage, and other additional services are charged separately as applicable. Postage is not included; carrier charges are quoted separately.',
      'Daily volume tiers are 0–49, 50–99, 100–499, and 500+ orders. Special handling adds $0.10 per order and is accepted case by case; selecting it does not confirm that the goods can be accepted.',
    ],
    y2Exchange:[
      'Y2 shipping label replacement is charged at the selected order-volume tier.',
      'The rate is $0.35/order for 0–999 orders and $0.30/order for 1,000+ orders. Exactly 1,000 orders qualifies for the larger tier.',
      'Special channels, exceptions, or additional manual work require confirmation.',
      'Final charges depend on actual order data and system records. Postage is not included; carrier charges are quoted separately.',
    ],
    relocation:[
      'The item handling rate is $0.35/item for 0–9,999 items and $0.30/item for 10,000+ items. Exactly 10,000 items qualifies for the larger tier.',
      'Sorting is free for up to 5 SKUs. More than 5 SKUs adds $0.05 per item. Exactly 5 SKUs remains free.',
      'Loose-carton receiving is free. Palletized receiving is $15/pallet, carton-packing labor is $6/carton, and outer-carton labels are $1/label. These depend on actual quantities and are not added to the per-item estimate.',
      'Storage is charged by inventory age and occupied volume. Suitable original Amazon removal cartons are reused at $0/carton. Warehouse-supplied cartons cost $3, $4, or $5 each for small, medium, or large cartons.',
      'This page displays a per-item handling estimate. Final charges depend on actual operating quantities and system records. Postage and truck delivery are quoted separately.',
    ],
    otherServices:[
      'The estimate includes the additional services and quantities selected here. All amounts are in USD.',
      'Truck delivery / final-mile freight requires a separate quote. If selected, it is not included in the priced subtotal.',
      'Disposal costs $1/kg, with a minimum of $50 per shipment. Electronics and battery products are excluded. The minimum is applied to disposal before adding other selected services.',
      'Pickup delay holding begins on the fifth business day after goods are ready for customer pickup, excluding weekends and holidays. The pickup day counts as one day. Enter the billable carton-days or pallet-days, as applicable.',
      'Return picked inventory to storage applies after a dispatch is canceled. Return-to-stock processing applies to returned goods originally dispatched by us; inspection is separate. Final charges depend on actual work and system records.',
    ],
  };
  const materialGroups = [{id:'cartons',label:'Cartons'},{id:'bubble',label:'Bubble Mailers'},{id:'polybags',label:'Poly Mailers'}];
  const materialIds = new Set(addons.filter(a=>materialGroups.some(g=>g.id===a.group)).map(a=>a.id));
  const fulfillmentAddonIds = new Set(['repack','photo','video','inspect','destroy','dimensionCheck','detentionBox','detentionPallet','restockBox','returnToStock','overtime','palletize','truck']);
  function number(value,label) { if(typeof value!=='number'||!Number.isFinite(value)||value<0)throw new Error(`${label} must be a nonnegative number.`);return value; }
  function dailyVolumeTier(n){number(n,'Daily volume');return n>=500?'large':n>=100?'medium':n>=50?'small':'trial';}
  function weightBandFor(n){number(n,'Weight');if(n>22)throw new Error('Weights above 22 kg require a separate quote.');return n<=1?'0-1':n<=2?'1-2':n<=5?'2-5':n<=10?'5-10':n<=15?'10-15':'15-22';}
  function y2VolumeTier(n){number(n,'Order volume');return n>=1000?'bulk':'standard';}
  function relocationVolumeTier(n){number(n,'Item volume');return n>=10000?'bulk':'standard';}
  function relocationSkuTier(n){number(n,'SKU count');return n<=5?'upToFive':'overFive';}
  function requireKey(map,key,label){if(!Object.hasOwn(map,key))throw new Error(`Choose a valid ${label}.`);return map[key];}
  function info(id,name,rate,unit,detail,group='additional') {return {id,name,unitRate:rate,unit,detail,group,amount:0,informational:true,display:`${money(rate)}/${unit}`};}
  function buildQuote(selection) {
    const service=selection.service;
    if(!Object.hasOwn(services,service))throw new Error('Unknown service.');
    const lines=[];let unit='';
    if(service==='fulfillment') {
      const volume=requireKey(fulfillment,selection.dailyVolume,'daily order volume');
      requireKey(weightLabels,selection.weightBand,'weight band');
      requireKey({general:1,sensitive:1},selection.productType,'goods handling type');
      const sku=requireKey(skuRates,selection.skuCountTier,'SKUs per carton');
      const surcharge=selection.productType==='sensitive'?.1:0;
      const rate=round(volume.rates[selection.weightBand]+surcharge);
      unit='order';
      lines.push({id:'fulfillmentHandling',group:'handling',name:'Order Processing + Scan Verification + Packing + Outbound Scan',detail:`${volume.label} · ${weightLabels[selection.weightBand]} · ${surcharge?'Special handling +$0.10/order; acceptance requires confirmation':'Standard goods'}`,amount:rate,display:`${money(rate)}/order`});
      lines.push(info('additionalItem','Additional Items',.3,'item','Starting with the second item in the same order. Informational only; item quantity is not collected here.'));
      lines.push(info('receiving','Receiving, Counting & Putaway',sku.price,'carton',`${sku.label}. A separate per-carton fee; not added to the per-order estimate.`));
    } else if(service==='y2Exchange') {
      const rate=requireKey({standard:{price:.35,label:'0–999 orders'},bulk:{price:.3,label:'1,000+ orders'}},selection.y2Volume,'Y2 order volume');
      unit='order';lines.push({id:'y2Handling',group:'handling',name:services.y2Exchange,detail:rate.label,amount:rate.price,display:`${money(rate.price)}/order`});
    } else if(service==='relocation') {
      const volume=requireKey({standard:{price:.35,label:'0–9,999 items'},bulk:{price:.3,label:'10,000+ items'}},selection.relocationVolume,'transfer volume');
      const sku=requireKey({upToFive:{price:0,label:'Up to 5 SKUs'},overFive:{price:.05,label:'More than 5 SKUs'}},selection.relocationSku,'SKU count');
      unit='item';
      lines.push({id:'transferHandling',group:'handling',name:'Item Handling',detail:volume.label,amount:volume.price,display:`${money(volume.price)}/item`});
      lines.push({id:'transferSorting',group:'handling',name:'Sorting',detail:sku.label,amount:sku.price,display:`${money(sku.price)}/item`});
      lines.push(info('looseInbound','Loose-Carton Receiving',0,'shipment','Charged according to the actual receiving method.'));
      lines.push(info('palletInbound','Palletized Receiving',15,'pallet','Charged by the actual number of pallets.'));
      lines.push(info('cartonPacking','Carton-Packing Labor',6,'carton','Charged by the actual number of cartons packed.'));
      lines.push(info('outerLabels','Outer-Carton Labels',1,'label','Charged by the actual number of labels.'));
      for(const s of storage)lines.push(info(s.id,`Storage · ${s.label}`,s.price,'m³/day','Charged by inventory age and occupied volume.','storage'));
      lines.push(info('amazonCartons','Suitable Original Amazon Removal Cartons',0,'carton','Reuse suitable original cartons first. Warehouse-supplied cartons are charged separately.','materials'));
      for(const a of addons.filter(a=>a.group==='cartons'))lines.push(info(a.id,a.name,a.price,a.unit,'Warehouse-supplied cartons, charged by actual quantity.','materials'));
    } else {
      if(!selection.addons?.length)throw new Error('Select at least one service.');
      for(const item of selection.addons){
        const addon=addons.find(a=>a.id===item.id);
        if(!addon)throw new Error('Unknown additional service.');
        if(addon.manual){lines.push({id:addon.id,name:addon.name,group:addon.group,detail:addon.note,amount:0,manual:true});continue;}
        const qty=Number(item.qty);
        if(!Number.isFinite(qty)||qty<=0)throw new Error(`Enter a positive quantity for ${addon.name}.`);
        const amount=round(Math.max(qty*addon.price,addon.minimum||0));
        lines.push({id:addon.id,name:addon.name,group:addon.group,detail:`${qty} ${quantityUnit(addon.unit,qty)} × ${money(addon.price)}${addon.note?` · ${addon.note}`:''}`,amount,display:money(amount)});
      }
    }
    return {service,unit,lines,total:round(lines.reduce((sum,line)=>sum+line.amount,0)),hasManual:lines.some(l=>l.manual)};
  }
  function quoteText(quote){
    const label=quote.hasManual?'Priced subtotal (separate freight quote required)':'Estimated handling charge';
    const amount=quote.hasManual&&quote.lines.every(l=>l.manual)?'Separate quote required':`${money(quote.total)}${quote.unit?'/'+quote.unit:''}`;
    return [`Zhengzhong Fulfillment — ${services[quote.service]}`,`${label}: ${amount}`,...quote.lines.map(l=>`${l.name}: ${l.manual?'Quoted separately':l.display||money(l.amount)} — ${l.detail}`),'All amounts in USD. Postage and other applicable services are separate.',...rules[quote.service]].join('\n');
  }
  async function copyText(text,environment=globalThis){
    try{if(environment.navigator?.clipboard?.writeText){await environment.navigator.clipboard.writeText(text);return {copied:true,text};}}catch{}
    return {copied:false,text};
  }
  return {money,quantityUnit,fulfillment,weightLabels,skuRates,storage,addons,services,rules,materialGroups,materialIds,fulfillmentAddonIds,dailyVolumeTier,weightBandFor,y2VolumeTier,relocationVolumeTier,relocationSkuTier,buildQuote,quoteText,copyText};
});
