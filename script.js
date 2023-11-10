// Error Toast
document.querySelector('.error').addEventListener('click', () => {
  Toast({
    type: 'error',
    title: `Error`,
    body: 'System busy!', 
    duration: 5,
  })
})

// Warning Toast
document.querySelector('.warning').addEventListener('click', () => {
  Toast({
    type: 'warning',
    title: `Warning`,
    body: 'You must enter a title!!', 
    duration: 5,
  })
})

// Success Toast
document.querySelector('.success').addEventListener('click', () => {
  Toast({
    type: 'success',
    title: `Success`,
    body: 'Article successfuly posted', 
    duration: 5,
  })
})

// Info Toast
document.querySelector('.info').addEventListener('click', () => {
  Toast({
    type: 'info',
    title: `Info`,
    body: 'You need to learn introduction!', 
    duration: 5,
  })
})

// Without body Toast
document.querySelector('.wb').addEventListener('click', () => {
  Toast({
    title: `Without Body Toast`,
    duration: 5,
  })
})

// With Icon Toast
document.querySelector('.icon').addEventListener('click', () => {
  Toast({
    iconClass: 'instagram fab',
    title: `Toast with icon`,
    body: 'This toast notify witch icon.',
    duration: 5,
  })
})

// With Image Toast
document.querySelector('.image').addEventListener('click', () => {
  Toast({
    icon: 'https://picsum.photos/20',
    title: `Image Toast`,
    body: 'This toast notify witch image.',
    duration: 5,
  })
})

// Custom Toast
document.querySelector('.c').addEventListener('click', () => {
  Toast({
    link: 'https://t.me/shaedul_off',
    newWindow: true,
    iconClass: 'telegram fab',
    title: `Telegram channel`,
    body: '@Shaedul_Off',
    textColor: '#fff',
    bgColor: 'dodgerblue',
    duration: 5,
  })
})

// Simple Toast
document.querySelector('.simple').addEventListener('click', () => {
  Toast({
    title: `Simple Toast`,
    body: 'This is a simple toast.',
    duration: 5,
  })
})

// Full Toast
document.querySelector('.full').addEventListener('click', () => {
  Toast({
    type: 'null',
    icon: 'https://picsum.photos/20',
    iconClass: 'circle',
    bgColor: '#000',
    textColor: 'white',
    title: `Full Functional Toast`,
    body: 'Toast with all of functionality',
    duration: 10,
  })
})
