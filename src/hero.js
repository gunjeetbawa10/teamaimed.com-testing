import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Pricing from './pages/pricing'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const navigation = [
  { name: 'Solution', href: '#' },
  { name: 'Features', href: '/' },
  { name: 'Pricing', href: '/' },
  { name: 'Book Demo', href: '#' },
  { name: 'Contact Sales', href: '#' },
 
]



export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Teamaimed</span>
              <img
                className="h-8 w-auto"
                src="https://raw.githubusercontent.com/gunjeetbawa10/logo-upload/6511306f3df24972f50482bacdad5d27f066d17f/Group%2025.svg"
                alt="logo"
              />
            </a>
          </div>
          
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
            
          </div>
       
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
         
       
            <a href="//teamaimedcom.typeform.com/to/Pb33lEsm" className="text-sm font-bold leading-3 text-gray-900">
              Stay Tuned <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
         
         
       
        
   
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Teamaimed</span>
                <img
                  className="h-8 w-auto"
                  src="https://raw.githubusercontent.com/gunjeetbawa10/logo-upload/6511306f3df24972f50482bacdad5d27f066d17f/Group%2025.svg"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="//teamaimedcom.typeform.com/to/Pb33lEsm"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Stay Tuned
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <div><br></br></div>
      <div><br></br></div>
      <div><br></br></div>
      <div><br></br></div>
      <div><br></br></div>
      <div><br></br></div>
    
      <div class="px-12 mx-auto max-w-7xl" >
       
        <div class="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
         <b>   Maximize Savings, Maximize Productivity !</b>{' '}
              <a href="/pricing" className="font-semibold text-rose-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
            <h1 class="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
              
                <span>Stay</span> <span class="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-rose-600 to-purple-800 lg:inline">Ahead with Teamaimed</span> <span>Your All-in-One Business Management Suite!</span>
            </h1>
            <p class="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
           <b> Streamline operations, boost productivity</b>, and from project management to HR, finance, and beyond, empower your team with the tools they need to thrive. 
            </p>
            <div class="mb-4 space-x-0 md:space-x-2 md:mb-8">
                <a href="//teamaimedcom.typeform.com/to/Pb33lEsm" class="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-rose-700 rounded-2xl sm:w-auto sm:mb-0">
                    Stay Tuned
                    <svg class="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
                <a href="#_" class="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg bg-gray-100 rounded-2xl sm:w-auto sm:mb-0">
                    Learn More
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                </a>
            </div>
        </div>
        <div class="w-full mx-auto mt-20 text-center md:w-10/12">
            <div class="relative z-0 w-full mt-8">
                <div class="relative overflow-hidden shadow-2xl">
                    <div class="flex items-center flex-none px-4 bg-rose-600 rounded-b-none h-11 rounded-xl">
                        <div class="flex space-x-1.5">
                            <div class="w-3 h-3 border-2 border-white rounded-full"></div>
                            <div class="w-3 h-3 border-2 border-white rounded-full"></div>
                            <div class="w-3 h-3 border-2 border-white rounded-full"></div>
                        </div>
                    </div>
                    <img src="https://github.com/gunjeetbawa10/new-back/blob/main/Task%20Boards.png?raw=true"/>
                </div>
            </div>
        </div>
    </div>
    
     
    </div>

  )
}
