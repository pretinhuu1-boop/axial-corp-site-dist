/* Small, idempotent enhancements. The original application bundle stays intact. */
(() => {
  const questions = [
    ['O que é um Company OS personalizado?', 'É um sistema operacional para a empresa que conecta processos internos, aplicações, integrações e agentes de inteligência artificial. A Axial desenha esse sistema a partir da rotina e das prioridades de cada operação, com supervisão humana e governança.'],
    ['Como começa um projeto com a Axial Corp?', 'O primeiro passo é conversar sobre a operação. Depois, a imersão mapeia rotinas, decisões, dados, ferramentas e gargalos. O trabalho segue com o blueprint do sistema, construção e piloto, e operação contínua.'],
    ['Quais serviços fazem parte da Axial Corp?', 'A Axial reúne consultoria em IA (Axial Intelligence), marketing (LUMIAI), motion e vídeo com IA (Axial Motion), audiovisual (STUDIOLUMI), educação e comunidade (Axial Connect), e agentes e automações (Axial Agents).'],
    ['Os agentes funcionam com supervisão humana?', 'Sim. A proposta do Company OS inclui supervisão humana, regras, auditoria e evolução contínua. Os agentes compartilham contexto e ferramentas dentro da arquitetura definida para a empresa.'],
    ['Como solicitar um diagnóstico da operação?', 'Use o formulário de contato, escolha a ramificação e descreva sua operação. Ao continuar, o site abre o WhatsApp com a mensagem preenchida. A conversa é o ponto de partida para a proposta de imersão.']
  ];
  function enhance() {
    const header = document.querySelector('.site-header');
    const main = document.querySelector('#root main');
    if (!header || !main) return;
    const whatsappUrl = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
      ? 'https://wa.me/5511941777769'
      : 'https://web.whatsapp.com/send?phone=5511941777769';
    document.querySelectorAll('a').forEach(link => {
      const href = link.getAttribute('href') || '';
      if (/^https:\/\/(wa\.me\/|(?:api|web)\.whatsapp\.com\/)/i.test(href)) {
        link.href = whatsappUrl; link.target = '_blank'; link.rel = 'noopener noreferrer';
      }
      if (/^https:\/\/(?:www\.)?instagram\.com\//i.test(href)) {
        link.href = 'https://www.instagram.com/axial.corp/'; link.target = '_blank'; link.rel = 'noopener noreferrer';
      }
    });
    if (!document.querySelector('.whatsapp-float')) {
      const floating = document.createElement('a');
      floating.className = 'whatsapp-float'; floating.href = whatsappUrl;
      floating.target = '_blank'; floating.rel = 'noopener noreferrer';
      floating.setAttribute('aria-label', 'Conversar com a Axial Corp no WhatsApp (abre em nova aba)');
      floating.title = 'Conversar no WhatsApp';
      floating.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.5 0 .1 5.4.1 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6a12 12 0 0 0 5.9 1.5c6.6 0 11.9-5.4 11.9-12 0-3.2-1.2-6.2-3.5-8.4ZM12.1 21.9a10 10 0 0 1-5.1-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A10 10 0 0 1 2.1 12a10 10 0 1 1 10 9.9Zm5.5-7.4c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-.9 1.1-.3.2-.6.1a8.2 8.2 0 0 1-2.5-1.5 9.4 9.4 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.5-.6.3-.5c.1-.2 0-.4 0-.6l-1-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4S5.7 7.8 5.7 9.3s1.1 2.8 1.3 3 2.2 3.4 5.2 4.6c.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4s-.2-.2-.5-.3Z"/></svg>';
      document.body.append(floating);
    }
    main.id = 'conteudo';
    if (!document.querySelector('.skip-link')) {
      const skip = document.createElement('a');
      skip.className = 'skip-link'; skip.href = '#conteudo'; skip.textContent = 'Pular para o conteúdo';
      document.body.prepend(skip);
    }
    const nav = header.querySelector('nav');
    nav.id = 'navegacao-principal';
    nav.setAttribute('aria-label', 'Navegação principal');
    if (!header.querySelector('.menu-toggle')) {
      const button = document.createElement('button');
      button.type = 'button'; button.className = 'menu-toggle'; button.textContent = 'Menu';
      button.setAttribute('aria-controls', nav.id); button.setAttribute('aria-expanded', 'false');
      const close = () => { header.classList.remove('menu-open'); button.setAttribute('aria-expanded', 'false'); };
      button.addEventListener('click', () => {
        const open = header.classList.toggle('menu-open');
        button.setAttribute('aria-expanded', String(open));
      });
      nav.addEventListener('click', e => { if (e.target.closest('a')) close(); });
      header.addEventListener('keydown', e => { if (e.key === 'Escape') { close(); button.focus(); } });
      document.addEventListener('click', e => { if (!header.contains(e.target)) close(); });
      matchMedia('(min-width: 1280px)').addEventListener('change', close);
      header.append(button);
    }
    if (!main.querySelector('#perguntas-frequentes')) {
      const section = document.createElement('section'); section.className = 'answers'; section.id = 'perguntas-frequentes';
      section.setAttribute('aria-labelledby', 'perguntas-title');
      const inner = document.createElement('div'); inner.className = 'answers-inner';
      const heading = document.createElement('h2'); heading.id = 'perguntas-title'; heading.textContent = 'Perguntas sobre IA e Company OS'; inner.append(heading);
      questions.forEach(([question, answer]) => {
        const details = document.createElement('details');
        const summary = document.createElement('summary'); summary.textContent = question;
        const paragraph = document.createElement('p'); paragraph.textContent = answer;
        details.append(summary, paragraph); inner.append(details);
      });
      section.append(inner); main.insertBefore(section, main.querySelector('.footer-cta'));
    }
    const hero = main.querySelector('.hero-object');
    if (hero) { hero.fetchPriority = 'high'; hero.decoding = 'async'; }
    main.querySelectorAll('img').forEach(img => {
      if (!img.closest('.hero')) { img.loading = 'lazy'; img.decoding = 'async'; }
    });
    const autocomplete = ['name', 'organization', 'tel', 'email'];
    main.querySelectorAll('.contact-grid input').forEach((input, i) => {
      if (autocomplete[i]) input.autocomplete = autocomplete[i];
      if (input.type === 'tel') input.inputMode = 'tel';
    });
  }
  // Observe child changes only: GSAP's animation styles don't trigger this observer.
  let queued = false;
  new MutationObserver(() => {
    if (queued) return;
    queued = true;
    queueMicrotask(() => { queued = false; enhance(); });
  }).observe(document.getElementById('root'), {childList: true, subtree: true});
  enhance();
})();
