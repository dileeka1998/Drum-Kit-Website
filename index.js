function handleClick() {
    alert("I got clicked")
}



document.addEventListener('DOMContentLoaded',()=>{
    const button = document.querySelector('button')

    button.addEventListener('click',handleClick)
})