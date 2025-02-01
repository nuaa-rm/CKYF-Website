/* eslint-disable @next/next/no-img-element */

import { siteConfig } from '@/lib/config'

/**
 * 合作伙伴
 * @returns
 */
export const Brand = () => {
  const brands = siteConfig('STARTER_BRANDS')
  return (
    <>
      {/* <!-- ====== Brands Section Start --> */}
      <section className='pb-20 dark:bg-dark'>
        <div className='container px-4'>
          <div className="-mx-4 flex flex-wrap items-center justify-center gap-8 xl:gap-11 ">
            {brands?.map((item, index) => {
              return (
                <a key={index} href={item.URL} className="group block p-2">
                  <img
                    src={item.IMAGE}
                    alt={item.TITLE}
                    className="dark:hidden max-w-[150px] md:max-w-[180px] lg:max-w-[200px] h-auto object-contain transition-all duration-300 group-hover:scale-105"
                  />
                  <img
                    src={item.IMAGE_WHITE}
                    alt={item.TITLE}
                    className="hidden dark:block max-w-[150px] md:max-w-[180px] lg:max-w-[200px] h-auto object-contain transition-all duration-300 group-hover:scale-105"
                  />
                </a>
              )
            })}
          </div>
        </div>
      </section>
      {/* <!-- ====== Brands Section End --> */}
    </>
  )
}
