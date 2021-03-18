/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking 😄')

const url = `https://platzi-avo.vercel.app/api/avo`

const getAvo = async ()=>{
  const response = await fetch(url)
  const {data} = await response.json()

  const items = []
    data.forEach( n =>{
        console.log(n.name)
        //Creamos elementos

        const img = document.createElement('img')
        const title = document.createElement('h2')
        const price = document.createElement('div')

         const container = document.createElement('div')
         container.append(img, title, price)

         items.push(container)

        })
        document.body.append(...items)

  return data
}
getAvo()

// `const data = window.fetch(url)
// console.log(data)`