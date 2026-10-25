(function () {
  'use strict';
  const P = window.EnglishQuotePricing;
  const $ = id => document.getElementById(id);
  const state = {skuCountTier:'one'};
  let activeStep = 'service';
  let historyStack = [];
  let currentQuote = null;
  const nextSteps = {service:()=>({fulfillment:'productType',y2Exchange:'y2Volume',relocation:'relocationVolume',otherServices:'otherServices'})[state.service],productType:()=> 'weightBand',weightBand:()=> 'dailyVolume',dailyVolume:()=> 'result',y2Volume:()=> 'result',relocationVolume:()=> 'relocationSku',relocationSku:()=> 'result'};
  const escape = text => String(text).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function updateProgress(){
    const total=state.service==='fulfillment'?5:state.service==='relocation'?4:3;
    const current=({service:1,productType:2,weightBand:3,dailyVolume:4,y2Volume:2,relocationVolume:2,relocationSku:3,otherServices:2,result:total})[activeStep];
    $('progressText').textContent=`Step ${current} of ${total}`;
    $('progressBar').style.width=`${Math.round(current/total*100)}%`;
    $('resultTopActions').classList.toggle('show-actions',activeStep!=='service');
    document.querySelectorAll('.result-top-action').forEach(button=>{button.disabled=activeStep==='service';});
  }
  function goToStep(step,push=true,focus=true){
    if(step==='result'){
      try {currentQuote=P.buildQuote(selection());}catch(error){$('otherError').textContent=error.message;$('otherError').classList.remove('hidden');const invalid=document.querySelector('#otherAddonList input[aria-invalid="true"]');invalid?.focus();return;}
    }
    if(push&&activeStep!==step)historyStack.push(activeStep);
    activeStep=step;
    document.querySelectorAll('.wizard-step').forEach(panel=>panel.classList.toggle('hidden',panel.dataset.step!==step));
    updateProgress();
    if(step==='result')renderResult();
    if(focus){document.querySelector(`[data-step="${step}"] h2`)?.focus({preventScroll:true});$('quoteForm').scrollIntoView({block:'start',behavior:'instant'});}
  }
  function selection(){
    return {...state,addons:P.addons.filter(addon=>$(`otherAddon_${addon.id}Enabled`).checked).map(addon=>({id:addon.id,qty:addon.manual?undefined:$(`otherAddon_${addon.id}Qty`).value}))};
  }
  function setOption(field,value){
    state[field]=value;
    document.querySelectorAll(`[data-field="${field}"]`).forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.value===value)));
    if(field==='skuCountTier'){currentQuote=P.buildQuote(selection());renderResult();return;}
    const next=nextSteps[activeStep]?.();
    if(next)goToStep(next);
  }
  function lineMarkup(line){return `<div class="line-row"><div><strong>${escape(line.name)}</strong><small>${escape(line.detail)}</small></div><div class="amount ${line.manual?'manual':''} ${line.informational?'informational':''}">${escape(line.manual?'Quoted separately':line.display||P.money(line.amount))}</div></div>`;}
  function rateCards(items){return items.map(item=>`<div class="addon-price-card"><strong>${escape(item.name)}</strong><span>${item.manual?'Quoted separately':`${P.money(item.price)} / ${escape(item.unit)}`}</span><small>${escape(item.note||'Charged separately according to actual service quantities.')}</small></div>`).join('');}
  function renderStorage(id){$(id).innerHTML=P.storage.map(item=>`<span class="storage-price-option"><strong>${escape(item.label)}</strong><small>${P.money(item.price)} / m³/day${item.note?' · '+escape(item.note):''}</small></span>`).join('');}
  function materialCard(addon){return `<span class="material-price-option"><strong>${escape(addon.name)}</strong><small>${P.money(addon.price)} / ${escape(addon.unit)}</small></span>`;}
  function renderRateSections(){
    $('fulfillmentAddonPriceSection').classList.toggle('hidden',state.service!=='fulfillment');
    $('relocationAddonPriceSection').classList.toggle('hidden',state.service!=='relocation');
    if(state.service==='fulfillment'){
      renderStorage('fulfillmentStoragePrices');
      $('fulfillmentMaterialPrices').innerHTML=P.materialGroups.map(group=>`<section class="material-price-group"><h4>${escape(group.label)}</h4><div class="segmented weight-options">${P.addons.filter(a=>a.group===group.id).map(materialCard).join('')}</div></section>`).join('');
      $('fulfillmentAddonPrices').innerHTML=rateCards([{name:'Return Processing',price:3,unit:'item',note:'Return handling service.'},...P.addons.filter(addon=>P.fulfillmentAddonIds.has(addon.id))]);
    }
    if(state.service==='relocation'){
      renderStorage('relocationStoragePrices');
      $('relocationMaterialPrices').innerHTML=`<p class="material-note">Reuse suitable original Amazon removal cartons first. Warehouse-supplied cartons are charged separately.</p><div class="segmented weight-options">${materialCard({name:'Suitable Original Amazon Removal Carton',price:0,unit:'carton'})}${P.addons.filter(a=>a.group==='cartons').map(materialCard).join('')}</div>`;
    }
  }
  function renderResult(){
    const quote=currentQuote;
    $('resultLabel').textContent=quote.service==='fulfillment'?'Ecommerce order handling rate':quote.service==='relocation'?'Transfer & relabeling handling rate':quote.service==='y2Exchange'?'Y2 shipping label replacement rate':quote.hasManual?'Priced subtotal':'Additional services estimate';
    const manualOnly=quote.hasManual&&quote.lines.every(line=>line.manual);
    $('totalPrice').textContent=manualOnly?'Separate quote required':`${P.money(quote.total)}${quote.unit?'/'+quote.unit:''}`;
    $('totalPrice').classList.toggle('manual-total',manualOnly);
    $('manualHint').textContent=quote.hasManual?'Freight requires confirmation and is not included in the priced subtotal.':'Estimate based on your selections. Additional charges are shown below.';
    $('manualHint').classList.toggle('clean',!quote.hasManual);
    $('breakdownRows').innerHTML=quote.lines.filter(line=>!['storage','materials'].includes(line.group)).map(lineMarkup).join('');
    $('serviceRules').innerHTML=P.rules[quote.service].map(rule=>`<li>${escape(rule)}</li>`).join('');
    $('emailQuoteLink').href=`mailto:shiyi@zhengzhong.tech?subject=${encodeURIComponent('Warehouse quote request — '+P.services[quote.service])}&body=${encodeURIComponent(P.quoteText(quote)+'\n\nShipment details:\n')}`;
    renderRateSections();
  }
  function renderAddons(){
    $('otherAddonList').innerHTML=P.addons.map(addon=>`<div class="addon"><input id="otherAddon_${addon.id}Enabled" type="checkbox" aria-labelledby="otherAddon_${addon.id}Label"><label id="otherAddon_${addon.id}Label" for="otherAddon_${addon.id}Enabled"><span class="addon-name">${escape(addon.name)}</span><small>${addon.manual?'Quoted separately':`${P.money(addon.price)} / ${escape(addon.unit)}`}${addon.note?' · '+escape(addon.note):''}</small></label>${addon.manual?'':`<label class="qty-field" for="otherAddon_${addon.id}Qty">Quantity (${escape(P.quantityUnit(addon.unit,2))})<input id="otherAddon_${addon.id}Qty" type="number" min="0" step="any" inputmode="decimal" value="" disabled aria-label="${escape(addon.name)} quantity in ${escape(P.quantityUnit(addon.unit,2))}" placeholder="Qty"></label>`}</div>`).join('');
    P.addons.forEach(addon=>{
      const checkbox=$(`otherAddon_${addon.id}Enabled`);
      const input=$(`otherAddon_${addon.id}Qty`);
      checkbox.addEventListener('change',()=>{if(input){input.disabled=!checkbox.checked;input.setAttribute('aria-invalid','false');if(checkbox.checked)input.focus();}$('otherError').classList.add('hidden');});
      input?.addEventListener('input',()=>{input.setAttribute('aria-invalid','false');$('otherError').classList.add('hidden');});
    });
  }
  function startOver(){
    $('quoteForm').reset();
    Object.keys(state).forEach(key=>delete state[key]);state.skuCountTier='one';
    historyStack=[];currentQuote=null;
    document.querySelectorAll('[data-field]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.field==='skuCountTier'&&button.dataset.value==='one')));
    P.addons.forEach(addon=>{const input=$(`otherAddon_${addon.id}Qty`);if(input){input.disabled=true;input.setAttribute('aria-invalid','false');}});
    $('otherError').classList.add('hidden');$('copyFallback').classList.add('hidden');$('copyStatus').textContent='';$('wechatBtnText').textContent='Copy WeChat ID';
    setCollapse('addon',false);setCollapse('relocationAddon',false);goToStep('service',false);
  }
  function setCollapse(prefix,expanded){
    $(`${prefix}CollapseBody`).classList.toggle('hidden',!expanded);
    $(`${prefix}Toggle`).setAttribute('aria-expanded',String(expanded));
    $(`${prefix}ToggleIcon`).textContent=expanded?'Hide':'Show';
  }
  async function copy(text,kind){
    const result=await P.copyText(text);
    $('copyFallback').classList.toggle('hidden',result.copied);
    $('copyStatus').textContent=result.copied?`${kind} copied.`:'Clipboard unavailable. Select and copy the text below.';
    if(!result.copied){$('copyFallbackLabel').textContent=`Select and copy ${kind.toLowerCase()}`;$('copyFallbackText').value=result.text;$('copyFallbackText').focus();$('copyFallbackText').select();}
    return result.copied;
  }
  renderAddons();
  document.querySelectorAll('[data-field]').forEach(button=>button.addEventListener('click',()=>setOption(button.dataset.field,button.dataset.value)));
  document.querySelectorAll('[data-back]').forEach(button=>button.addEventListener('click',()=>{const previous=historyStack.pop()||'service';goToStep(previous,false);}));
  $('startOverBtn').addEventListener('click',startOver);
  $('otherResultBtn').addEventListener('click',()=>{
    P.addons.forEach(addon=>{const input=$(`otherAddon_${addon.id}Qty`);if(input){const invalid=$(`otherAddon_${addon.id}Enabled`).checked&&(!Number.isFinite(Number(input.value))||Number(input.value)<=0);input.setAttribute('aria-invalid',String(invalid));}});
    goToStep('result');
  });
  $('quoteForm').addEventListener('submit',event=>{event.preventDefault();if(activeStep==='otherServices')$('otherResultBtn').click();});
  $('wechatBtn').addEventListener('click',async()=>{$('wechatBtnText').textContent=await copy('zhengzhonghwc','WeChat ID')?'Copied':'Copy manually below';});
  $('copyQuoteBtn').addEventListener('click',()=>{if(currentQuote)copy(P.quoteText(currentQuote),'Estimate');});
  ['addon','relocationAddon'].forEach(prefix=>$(`${prefix}Toggle`).addEventListener('click',()=>setCollapse(prefix,$(`${prefix}Toggle`).getAttribute('aria-expanded')!=='true')));
  goToStep('service',false,false);
})();
