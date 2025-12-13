document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.menu');
  const mobileMenu = document.getElementById('mobileMenu');

  if (!burger || !mobileMenu) return;

  burger.addEventListener('click', (e) => {
    e.stopPropagation(); // ВАЖНО
    mobileMenu.classList.toggle('active');
    document.documentElement.classList.toggle(
      'no-scroll',
      mobileMenu.classList.contains('active')
    );
  });

  mobileMenu.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  document.addEventListener('click', () => {
    if (mobileMenu.classList.contains('active')) {
      mobileMenu.classList.remove('active');
      document.documentElement.classList.remove('no-scroll');
    }
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modalForm');
  if (!modal) return;

  const openButtons = document.querySelectorAll('[data-modal-open]');
  const closeBtn = modal.querySelector('.modal-close');
  const overlay = modal.querySelector('.modal-overlay');
  const modalForm = modal.querySelector('.modal-form');

  // открытие модалки
  openButtons.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      modal.classList.add('active');
    });
  });

  // закрытие модалки
  closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  overlay.addEventListener('click', () => modal.classList.remove('active'));

  // имитация отправки формы
  modalForm.addEventListener('submit', e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(modalForm).entries());
    
    modal.classList.remove('active');
    modalForm.reset();
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const banner = document.querySelector('.contactes-ban-con');
  const btn = document.querySelector('.contactes-ban-con-btn');

  if (!banner || !btn) return;

  /* ——— Мягкое подпрыгивание баннера ——— */
  let direction = 1;

  setInterval(() => {
    banner.style.transform = `translateY(${direction * -3}px)`;
    direction *= -1;
  }, 2000);

  /* ——— Пульсация кнопки ——— */
  setInterval(() => {
    btn.style.transform = 'scale(1.05)';
    btn.style.boxShadow = '0 0 20px rgba(255,255,255,0.6)';

    setTimeout(() => {
      btn.style.transform = 'scale(1)';
      btn.style.boxShadow = 'none';
    }, 400);
  }, 3000);
});
