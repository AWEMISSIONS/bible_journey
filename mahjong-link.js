(function(){
  function addScriptureTilesCard(){
    var hero=document.querySelector("#app .screen .hero");
    if(!hero||document.getElementById("scripture-tiles-card"))return;
    var card=document.createElement("a");
    card.id="scripture-tiles-card";
    card.className="journey-card";
    card.href="christian-mahjong.html";
    card.style.textDecoration="none";
    card.innerHTML='<div class="chapter-icon" style="background:#e5d7a9">✝️</div><div style="flex:1"><div class="eyebrow" style="color:#8d6924">A new puzzle</div><h3>Scripture Tiles</h3><p>Match open pairs with Bible symbols and verse references.</p></div><b>›</b>';
    hero.after(card);
  }
  addScriptureTilesCard();
  new MutationObserver(addScriptureTilesCard).observe(document.getElementById("app"),{childList:true,subtree:true});
})();