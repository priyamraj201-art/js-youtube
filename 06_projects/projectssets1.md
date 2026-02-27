# PROJECT RELATED TO DOM 
## PROJECT LINK

[clicl here]([text](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html))

# solution code
## project 1

```javascript

console.log('priyam')

const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach((button)=>{
  console.log(button)
  button.addEventListener('click' , (e)=>{
    console.log(e)
    console.log(e.target)
    body.style.backgroundColor = e.target.id
  })
});

```