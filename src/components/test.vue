<template>
    <div class="bg-white flex flex-col pl-20 pr-14 py-12 max-md:px-5">
      <header class="w-[474px] max-w-full mt-6 self-end">
        <div class="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div class="flex flex-col items-stretch w-[72%] max-md:w-full max-md:ml-0">
            <h1 class="justify-center text-black text-center text-5xl my-auto max-md:text-4xl max-md:mt-10">
              周排行/月排行
            </h1>
          </div>
          <div class="flex flex-col items-stretch w-[28%] ml-5 max-md:w-full max-md:ml-0">
            <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/425622524d40eb731a07169928ad2e09f2a63c501eb9e4e2d7fbefb1ebb6faae?apiKey=b9b3b6ed639148319b395bda7c06b973&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/425622524d40eb731a07169928ad2e09f2a63c501eb9e4e2d7fbefb1ebb6faae?apiKey=b9b3b6ed639148319b395bda7c06b973&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/425622524d40eb731a07169928ad2e09f2a63c501eb9e4e2d7fbefb1ebb6faae?apiKey=b9b3b6ed639148319b395bda7c06b973&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/425622524d40eb731a07169928ad2e09f2a63c501eb9e4e2d7fbefb1ebb6faae?apiKey=b9b3b6ed639148319b395bda7c06b973&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/425622524d40eb731a07169928ad2e09f2a63c501eb9e4e2d7fbefb1ebb6faae?apiKey=b9b3b6ed639148319b395bda7c06b973&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/425622524d40eb731a07169928ad2e09f2a63c501eb9e4e2d7fbefb1ebb6faae?apiKey=b9b3b6ed639148319b395bda7c06b973&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/425622524d40eb731a07169928ad2e09f2a63c501eb9e4e2d7fbefb1ebb6faae?apiKey=b9b3b6ed639148319b395bda7c06b973&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/425622524d40eb731a07169928ad2e09f2a63c501eb9e4e2d7fbefb1ebb6faae?apiKey=b9b3b6ed639148319b395bda7c06b973&" class="aspect-square object-contain object-center w-28 overflow-hidden shrink-0 max-w-full rounded-[50%] max-md:mt-10" />
          </div>
        </div>
      </header>
      <form class="self-center flex w-full max-w-[1761px] items-stretch justify-between gap-5 mt-14 pr-8 max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-md:pr-5">
        <div class="flex grow basis-[0%] flex-col items-center max-md:max-w-full">
          <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/508f35bfbcce8297590a7471619812a15e394cd5918f9b79e43d9da7ba21b8fb?apiKey=b9b3b6ed639148319b395bda7c06b973&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/508f35bfbcce8297590a7471619812a15e394cd5918f9b79e43d9da7ba21b8fb?apiKey=b9b3b6ed639148319b395bda7c06b973&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/508f35bfbcce8297590a7471619812a15e394cd5918f9b79e43d9da7ba21b8fb?apiKey=b9b3b6ed639148319b395bda7c06b973&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/508f35bfbcce8297590a7471619812a15e394cd5918f9b79e43d9da7ba21b8fb?apiKey=b9b3b6ed639148319b395bda7c06b973&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/508f35bfbcce8297590a7471619812a15e394cd5918f9b79e43d9da7ba21b8fb?apiKey=b9b3b6ed639148319b395bda7c06b973&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/508f35bfbcce8297590a7471619812a15e394cd5918f9b79e43d9da7ba21b8fb?apiKey=b9b3b6ed639148319b395bda7c06b973&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/508f35bfbcce8297590a7471619812a15e394cd5918f9b79e43d9da7ba21b8fb?apiKey=b9b3b6ed639148319b395bda7c06b973&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/508f35bfbcce8297590a7471619812a15e394cd5918f9b79e43d9da7ba21b8fb?apiKey=b9b3b6ed639148319b395bda7c06b973&" class="aspect-[1.5] object-contain object-center w-[943px] overflow-hidden max-w-full" />
          <div class="flex-col fill-white stroke-[1px] stroke-stone-400 overflow-hidden self-stretch relative flex min-h-[104px] w-full items-center justify-between gap-5 mt-10 pl-7 pr-4 py-2 max-md:max-w-full max-md:flex-wrap max-md:pl-5">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9437b010582da0a521b59377d01f776cd81f83e1696976958def0b3ed45029bd?apiKey=b9b3b6ed639148319b395bda7c06b973&" class="absolute h-full w-full object-cover object-center inset-0" />
            <div class="relative flex items-stretch gap-4 my-auto">
              <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e149e89d114d2149e4c2aa0b650819e48887990b92bc5a38c075fe7af74fef7f?apiKey=b9b3b6ed639148319b395bda7c06b973&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e149e89d114d2149e4c2aa0b650819e48887990b92bc5a38c075fe7af74fef7f?apiKey=b9b3b6ed639148319b395bda7c06b973&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e149e89d114d2149e4c2aa0b650819e48887990b92bc5a38c075fe7af74fef7f?apiKey=b9b3b6ed639148319b395bda7c06b973&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e149e89d114d2149e4c2aa0b650819e48887990b92bc5a38c075fe7af74fef7f?apiKey=b9b3b6ed639148319b395bda7c06b973&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e149e89d114d2149e4c2aa0b650819e48887990b92bc5a38c075fe7af74fef7f?apiKey=b9b3b6ed639148319b395bda7c06b973&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e149e89d114d2149e4c2aa0b650819e48887990b92bc5a38c075fe7af74fef7f?apiKey=b9b3b6ed639148319b395bda7c06b973&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e149e89d114d2149e4c2aa0b650819e48887990b92bc5a38c075fe7af74fef7f?apiKey=b9b3b6ed639148319b395bda7c06b973&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e149e89d114d2149e4c2aa0b650819e48887990b92bc5a38c075fe7af74fef7f?apiKey=b9b3b6ed639148319b395bda7c06b973&" class="aspect-[1.22] object-contain object-center w-[78px] overflow-hidden shrink-0 max-w-full" />
              <div class="justify-center text-stone-400 text-3xl self-center my-auto">
                美食、分類
              </div>
            </div>
            <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d2fb98ac653c157bb899008f3f712d33ced321c35296f620c5b1c9ebca5c339f?apiKey=b9b3b6ed639148319b395bda7c06b973&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2fb98ac653c157bb899008f3f712d33ced321c35296f620c5b1c9ebca5c339f?apiKey=b9b3b6ed639148319b395bda7c06b973&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2fb98ac653c157bb899008f3f712d33ced321c35296f620c5b1c9ebca5c339f?apiKey=b9b3b6ed639148319b395bda7c06b973&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2fb98ac653c157bb899008f3f712d33ced321c35296f620c5b1c9ebca5c339f?apiKey=b9b3b6ed639148319b395bda7c06b973&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2fb98ac653c157bb899008f3f712d33ced321c35296f620c5b1c9ebca5c339f?apiKey=b9b3b6ed639148319b395bda7c06b973&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2fb98ac653c157bb899008f3f712d33ced321c35296f620c5b1c9ebca5c339f?apiKey=b9b3b6ed639148319b395bda7c06b973&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2fb98ac653c157bb899008f3f712d33ced321c35296f620c5b1c9ebca5c339f?apiKey=b9b3b6ed639148319b395bda7c06b973&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2fb98ac653c157bb899008f3f712d33ced321c35296f620c5b1c9ebca5c339f?apiKey=b9b3b6ed639148319b395bda7c06b973&" class="aspect-[1.2] object-contain object-center w-[106px] overflow-hidden self-stretch shrink-0 max-w-full" />
          </div>
        </div>
        <div class="flex basis-[0%] flex-col mt-32 self-start items-start max-md:mt-10">
          <div class="flex items-stretch gap-1 ml-7 max-md:ml-2.5">
            <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d8f5405cf1830b290994221d8059ba0d8958d89d16730ec1390db15a95718bc4?apiKey=b9b3b6ed639148319b395bda7c06b973&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8f5405cf1830b290994221d8059ba0d8958d89d16730ec1390db15a95718bc4?apiKey=b9b3b6ed639148319b395bda7c06b973&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8f5405cf1830b290994221d8059ba0d8958d89d16730ec1390db15a95718bc4?apiKey=b9b3b6ed639148319b395bda7c06b973&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8f5405cf1830b290994221d8059ba0d8958d89d16730ec1390db15a95718bc4?apiKey=b9b3b6ed639148319b395bda7c06b973&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8f5405cf1830b290994221d8059ba0d8958d89d16730ec1390db15a95718bc4?apiKey=b9b3b6ed639148319b395bda7c06b973&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8f5405cf1830b290994221d8059ba0d8958d89d16730ec1390db15a95718bc4?apiKey=b9b3b6ed639148319b395bda7c06b973&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8f5405cf1830b290994221d8059ba0d8958d89d16730ec1390db15a95718bc4?apiKey=b9b3b6ed639148319b395bda7c06b973&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8f5405cf1830b290994221d8059ba0d8958d89d16730ec1390db15a95718bc4?apiKey=b9b3b6ed639148319b395bda7c06b973&" class="aspect-square object-contain object-center w-[60px] overflow-hidden shrink-0 max-w-full" />
            <div class="justify-center text-black text-center text-3xl my-auto">
              好食屋
            </div>
          </div>
          <div class="bg-black self-stretch shrink-0 h-0.5 mt-2.5"></div>
          <div class="self-stretch flex flex-col mt-14 px-16 max-md:mt-10 max-md:px-5">
            <div class="justify-center text-black text-center text-3xl">
              千兵衛
            </div>
            <div class="bg-black self-stretch shrink-0 h-px mt-1.5"></div>
            <div class="justify-center text-black text-center text-3xl self-stretch mt-12 max-md:mt-10">
              川味食堂
            </div>
            <div class="bg-stone-400 w-[87px] shrink-0 h-px mt-1.5 self-end"></div>
            <div class="justify-center text-black text-center text-3xl mt-14 max-md:mt-10">
              橘色
            </div>
            <div class="bg-stone-300 w-[76px] shrink-0 h-px mt-1.5 self-end"></div>
          </div>
        </div>
      </form>
      <div class="self-center flex items-stretch justify-between gap-5 mt-2.5 max-md:max-w-full max-md:flex-wrap">
        <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8294235cfd5beb394a12d7308fe9d5ce452783f0def2a7ba32a7d55d4b24cbe3?apiKey=b9b3b6ed639148319b395bda7c06b973&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8294235cfd5beb394a12d7308fe9d5ce452783f0def2a7ba32a7d55d4b24cbe3?apiKey=b9b3b6ed639148319b395bda7c06b973&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8294235cfd5beb394a12d7308fe9d5ce452783f0def2a7ba32a7d55d4b24cbe3?apiKey=b9b3b6ed639148319b395bda7c06b973&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8294235cfd5beb394a12d7308fe9d5ce452783f0def2a7ba32a7d55d4b24cbe3?apiKey=b9b3b6ed639148319b395bda7c06b973&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8294235cfd5beb394a12d7308fe9d5ce452783f0def2a7ba32a7d55d4b24cbe3?apiKey=b9b3b6ed639148319b395bda7c06b973&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8294235cfd5beb394a12d7308fe9d5ce452783f0def2a7ba32a7d55d4b24cbe3?apiKey=b9b3b6ed639148319b395bda7c06b973&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8294235cfd5beb394a12d7308fe9d5ce452783f0def2a7ba32a7d55d4b24cbe3?apiKey=b9b3b6ed639148319b395bda7c06b973&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8294235cfd5beb394a12d7308fe9d5ce452783f0def2a7ba32a7d55d4b24cbe3?apiKey=b9b3b6ed639148319b395bda7c06b973&" class="aspect-square object-contain object-center w-[60px] overflow-hidden shrink-0 max-w-full" />
        <div class="justify-center text-black text-3xl self-center my-auto max-md:max-w-full">
          <a href="#">山下公園 Hsiao.yen 松葉壽司</a>
        </div>
      </div>
      <div class="text-black text-center text-4xl bg-zinc-300 self-center justify-center items-stretch mt-11 mb-36 px-14 py-5 rounded-xl max-md:my-10 max-md:px-5">
        找食趣
      </div>
    </div>
  </template>