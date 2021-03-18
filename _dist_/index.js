/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking 😄')

const url = `https://platzi-avo.vercel.app/api/avo`


//API Intl, api de internacionalización de moneda / fecha
const formatPrice = (price)=>{

  const newPrice = new window.Intl.NumberFormat('en-EN',
  { style: 'currency', 
  currency:'USD'}).format(price)
  return newPrice

}

const getAvo = async ()=>{
  const response = await fetch(url)
  const {data} = await response.json()
//create items as array empty
  const items = []
  //Create container in main body in this case id='app'
  const appNode = document.querySelector('#app')
 
    data.forEach( avo =>{
        console.log(avo.attributes)
        //Create Elements
        const img = document.createElement('img')
        img.src= `https://platzi-avo.vercel.app/${avo.image}` 
        img.className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
        
        
        const description = document.createElement('p')
        description.textContent= avo.attributes.description
        description.className = 'text-lg font-semibold '

        const title = document.createElement('h2')
        title.textContent=avo.name
        title.className = 'text-lg font-semibold '
        

        const price = document.createElement('div')
        price.className="text-gray-600"
        price.textContent = formatPrice(avo.price)
        //Create container
        const container = document.createElement('div')
        container.className="md:flex bg-gray-100 rounded-xl p-8 md:p-0"
        // container.className="flex flex-wrap"
        //Add elements to container
        container.append(img, description, title, price)
        //Add container to conts items
        items.push(container)

        })
        //Add to DOM items, we can use spread operator
      
        appNode.append(...items)

  return data
}
getAvo()

// `const data = window.fetch(url)
// console.log(data)`