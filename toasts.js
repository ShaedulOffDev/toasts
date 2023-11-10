document.addEventListener("DOMContentLoaded", () => {
  if(!document.getElementById('toasts')){
    var div = document.createElement('div')
    div.setAttribute('id', 'toasts')
    document.body.appendChild(div)
  }
})
function Toast(toast){
  var toasts = document.getElementById('toasts')
  var div = document.createElement('div')
  var i = document.createElement('i')
  i.classList.add('toast-close', 'fa', 'fa-times')
  div.classList.add('toast')
  if(toast.type){
    switch (toast.type) {
      case 'warning':
        div.classList.add('toast-warning')
        div.innerHTML = `
        <${toast.link ? 'a' : 'div'} ${toast.link ? `href="${toast.link}"` : ''} ${toast.newWindow ? 'target="_blank"' : ''} class="toast-message" style="align-items: ${toast.body ? 'start' : 'center'}">
          <i class="fa fa-warning"></i>
          <span>
            <h5 style="margin-bottom: ${toast.body ? '5px' : '0'}">${toast.title}</h5>
            ${toast.body ? `<p>${toast.body}</p>` : ''}
          </span>
          <div class="toast-loader" style="animation-duration: ${toast.duration}s"></div>
        </${toast.link ? 'a' : 'div'}>
        `
        break;
      case 'success':
        div.classList.add('toast-success')
        div.innerHTML = `
        <${toast.link ? 'a' : 'div'} ${toast.link ? `href="${toast.link}"` : ''} ${toast.newWindow ? 'target="_blank"' : ''} class="toast-message" style="align-items: ${toast.body ? 'start' : 'center'}">
          <i class="fa fa-check-circle"></i>
          <span>
            <h5 style="margin-bottom: ${toast.body ? '5px' : '0'}">${toast.title}</h5>
            ${toast.body ? `<p>${toast.body}</p>` : ''}
          </span>
          <div class="toast-loader" style="animation-duration: ${toast.duration}s"></div>
        </${toast.link ? 'a' : 'div'}>
        `
        break;
      case 'error':
        div.classList.add('toast-error')
        div.innerHTML = `
        <${toast.link ? 'a' : 'div'} ${toast.link ? `href="${toast.link}"` : ''} ${toast.newWindow ? 'target="_blank"' : ''} class="toast-message" style="align-items: ${toast.body ? 'start' : 'center'}">
          <i class="fa fa-shield-alt"></i>
          <span>
            <h5 style="margin-bottom: ${toast.body ? '5px' : '0'}">${toast.title}</h5>
            ${toast.body ? `<p>${toast.body}</p>` : ''}
          </span>
          <div class="toast-loader" style="animation-duration: ${toast.duration}s"></div>
        </${toast.link ? 'a' : 'div'}>
        `
        break;
      case 'info':
        div.classList.add('toast-info')
        div.innerHTML = `
        <${toast.link ? 'a' : 'div'} ${toast.link ? `href="${toast.link}"` : ''} ${toast.newWindow ? 'target="_blank"' : ''} class="toast-message" style="align-items: ${toast.body ? 'start' : 'center'}">
          <i class="fa fa-info-circle"></i>
          <span>
            <h5 style="margin-bottom: ${toast.body ? '5px' : '0'}">${toast.title}</h5>
            ${toast.body ? `<p>${toast.body}</p>` : ''}
          </span>
          <div class="toast-loader" style="animation-duration: ${toast.duration}s"></div>
        </${toast.link ? 'a' : 'div'}>
        `
        break;
      default:
        if(toast.bgColor){
          div.style.background = toast.bgColor
          div.style.color = toast.bgColor
        }
        if(toast.textColor){
          div.style.color = toast.textColor
          i.style.color = toast.textColor
        }
        div.innerHTML = `
        <${toast.link ? 'a' : 'div'} ${toast.link ? `href="${toast.link}"` : ''} ${toast.newWindow ? 'target="_blank"' : ''} class="toast-message" style="align-items: ${toast.body ? 'start' : 'center'}; color: ${toast.textColor ? toast.textColor : '#333'} !important;">
          ${toast.icon ? `<img src="${toast.icon}" width="20" alt="icon"/>`: ''}
          ${toast.iconClass ? `<i class="fa fa-${toast.iconClass}"></i>`: ''}
          <span>
            <h5 style="margin-bottom: ${toast.body ? '5px' : '0'}">${toast.title}</h5>
            ${toast.body ? `<p>${toast.body}</p>` : ''}
          </span>
          <div class="toast-loader" style="animation-duration: ${toast.duration}s; background: ${toast.textColor ? toast.textColor : '#ccc'}"></div>
        </${toast.link ? 'a' : 'div'}>
        `
        break;
    }
  }else{
    if(toast.bgColor){
      div.style.background = toast.bgColor
      div.style.color = toast.bgColor
    }
    if(toast.textColor){
      div.style.color = toast.textColor
      i.style.color = toast.textColor
    }
    div.innerHTML = `
    <${toast.link ? 'a' : 'div'} ${toast.link ? `href="${toast.link}"` : ''} ${toast.newWindow ? 'target="_blank"' : ''} class="toast-message" style="align-items: ${toast.body ? 'start' : 'center'}; color: ${toast.textColor ? toast.textColor : '#333'} !important;">
      ${toast.icon ? `<img src="${toast.icon}" width="20" alt="icon"/>`: ''}
      ${toast.iconClass ? `<i class="fa fa-${toast.iconClass}"></i>`: ''}
      <span>
        <h5 style="margin-bottom: ${toast.body ? '5px' : '0'}">${toast.title}</h5>
        ${toast.body ? `<p>${toast.body}</p>` : ''}
      </span>
      <div class="toast-loader" style="animation-duration: ${toast.duration}s; background: ${toast.textColor ? toast.textColor : '#ccc'}"></div>
    </${toast.link ? 'a' : 'div'}>
    `
  }
  div.appendChild(i)
  toasts.appendChild(div)
  i.addEventListener('click', () => {
    div.classList.add('hide-toast')
    clearTimeout(t)
    setTimeout(() => {
      toasts.removeChild(div)
    }, 300);
  })
  var t = setTimeout(() => {
    div.classList.add('hide-toast')
    setTimeout(() => {
      toasts.removeChild(div)
    }, 300);
  }, toast.duration * 1000);
}