
document.querySelectorAll('.section').forEach((sec,idx)=>{
  const side = idx%2===0 ? 'right':'left';
  const icons = document.createElement('div');
  icons.className='floating-icons';
  icons.innerHTML = `<a href='tel:+79137888449'><img src='phone.svg'></a>
                     <a href='https://wa.me/79137888449' target='_blank'><img src='whatsapp.svg'></a>`;
  icons.style[side]='15px';
  sec.appendChild(icons);
});
