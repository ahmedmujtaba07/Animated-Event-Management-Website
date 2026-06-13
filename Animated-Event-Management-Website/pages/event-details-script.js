const ham = document.getElementById('ham');
  const menu = document.getElementById('mobileMenu');
  ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    menu.classList.toggle('open');
  });
  document.querySelectorAll('.sched-tab').forEach(t => {
    t.addEventListener('click', function() {
      document.querySelectorAll('.sched-tab').forEach(x => x.classList.remove('active'));
      this.classList.add('active');
    });
  });