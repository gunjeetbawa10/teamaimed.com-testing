const stats = [
  { id: 1, name: 'Users Registered', value: '10000 +' },
  { id: 2, name: 'Assets under holding', value: '$119 trillion' },
  { id: 3, name: 'New users annually', value: '46,000' },
 
]

export default function Stats() {
    return (
      <section class="py-20">
        <b>
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          class="rounded-2xl py-10 px-10 xl:py-16 xl:px-20 bg-white flex items-center justify-between flex-col gap-16 lg:flex-row">
          <div class="w-full lg:w-60">
            <h2
              class="font-manrope text-4xl font-bold text-gray-900 mb-4 text-center lg:text-left"
            >
              Our Stats
            </h2>
            <p class="text-sm text-gray-500 leading-6 text-center lg:text-left">
              We help you to unleash the power within your business
            </p>
          </div>
          <div class="w-full lg:w-4/5">
            <div
              class="flex flex-col flex-1 gap-10 lg:gap-0 lg:flex-row lg:justify-between"
            >
              <div class="block">
                <div
                  class="font-manrope font-extrabold text-4xl text-rose-700 mb-3 text-center lg:text-left"
                >
                  2500+
                </div>
                <span class="text-gray-900 text-center block lg:text-left"
                  >Registered companies
                </span>
              </div>
              <div class="block">
                <div
                  class="font-manrope font-extrabold text-4xl text-rose-700 mb-3 text-center lg:text-left"
                >
                  36,000+
                </div>
                <span class="text-gray-900 text-center block lg:text-left"
                  >Active Employees
                </span>
              </div>
              <div class="block">
                <div
                  class="font-manrope font-extrabold text-4xl text-rose-700 mb-3 text-center lg:text-left"
                >
                  500K+
                </div>
                <span class="text-gray-900 text-center block lg:text-left"
                  >Task Assigned</span
                >
              </div>
              <div class="block">
                <div
                  class="font-manrope font-extrabold text-4xl text-rose-700 mb-3 text-center lg:text-left"
                >
                  10M+
                </div>
                <span class="text-gray-900 text-center block lg:text-left"
                  >Messages Exchange</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      </b>
  </section>
                                          
    )
  }