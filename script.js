function scrollToMenu(){
  document.getElementById('menu').scrollIntoView({behavior:'smooth'});
}

function showTab(id, btn){
  document.querySelectorAll('.grid').forEach(g => g.classList.remove('active'));
  document.querySelectorAll('.tabs button').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  btn.classList.add('active');
}