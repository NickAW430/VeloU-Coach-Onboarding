/* VeloU Coach Onboarding · marks every tappable section with a cue above it.
   Each rule: the control group to find, and the sentence shown above it. */
(function(){
  var RULES=[
    {s:'.mods',t:'Tap any module to open it'},
    {s:'#arcBtns',prev:1,t:'Tap a phase to see its objective'},
    {s:'.dsr',up:1,t:'Change the numbers to see the Day Score update'},
    {s:'#tabs',t:'Tap a program to see its phases'},
    {s:'#splitBtns',t:'Tap a split to see its week'},
    {s:'#ep',closest:'.field',up:1,t:'Change the numbers to see where he places'},
    {s:'.case summary',closest:'.case',up:1,t:'Decide first, then tap "Show the call"'},
    {s:'#xtabs',t:'Tap an exam to see how it is scored'},
    {s:'#sytabs',t:'Tap a finding to see what it looks like'},
    {s:'#lk',t:'Tap a group to see the muscle behind each finding'},
    {s:'#replist',up:1,t:'Tap a rep type to see its bar path'},
    {s:'.zbtns',t:'Tap the number of coaches on the floor'},
    {s:'#ptabs',t:'Tap a population to see what changes'},
    {s:'.recap',t:'Tap a card to jump back to that module'},
    {s:'#checks',t:'Tap each item to check it off'}
  ];
  function run(){
    RULES.forEach(function(r){
      var el=document.querySelector(r.s);
      if(!el)return;
      if(r.closest)el=el.closest(r.closest)||el;
      if(r.up)el=el.parentElement;
      if(r.prev&&el.previousElementSibling)el=el.previousElementSibling;
      if(el.previousElementSibling&&el.previousElementSibling.classList.contains('tapcue'))return;
      var c=document.createElement('div');
      c.className='tapcue';
      c.textContent=r.t;
      el.parentNode.insertBefore(c,el);
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else run();
})();
