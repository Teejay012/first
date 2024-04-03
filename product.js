
// ////////////////  PRODUCT PAGE \\\\\\\\\\\\\\\\\\\\\\\\




// import { featureProductNav } from "./Data/featureProductNav";

const featureProductNav = [
    {
        id : "featureProductNav_1",
        img : "hero-1",
        name : "Grocery",
        link : "#",
        subNavigation : false,
    },
    {
        id : "featureProductNav_2",
        img : "hero-2",
        subNavigation : false,
    },
    {
        id : "featureProductNav_3",
        img : "hero-0",
        name : "Fashion",
        link : "#",
        subNavigation : true,
    },
    {
        id : "featureProductNav_4",
        img : "banner",
        name : "Electronics",
        link : "#",
        subNavigation : true,
    },
    {
        id : "featureProductNav_5",
        img : "hero-3",
        name : "Home",
        link : "#",
        subNavigation : true,
    },
    {
        id : "featureProductNav_6",
        img : "banner",
        name : "Appliances",
        link : "#",
        subNavigation : true,
    },
    {
        id : "featureProductNav_7",
        img : "hero-0",
        name : "Travel",
        link : "#",
        subNavigation : false,
    },
    {
        id : "featureProductNav_8",
        img : "hero-2",
        name : "Top Offers",
        link : "#",
        subNavigation : false,
    },
    {
        id : "featureProductNav_9",
        img : "hero-1",
        name : "Beauty & Toys",
        link : "#",
        subNavigation : true,
    },
    {
        id : "featureProductNav_9",
        img : "hero-3",
        name : "2-Wheelers",
        link : "#",
        subNavigation : true,
    }
  ];




//   =========== OTHER PRODUCTS ==================


const otherProductNav = [
    {
        img : "hero-1",
        productName : "Monitor",
        discount : "From ₹8279",
        brand : "DELL",
        link : "#"
    },
    {
        img : "hero-1",
        productName : "Top Mirrorless Cameras",
        discount : "Shop Now!",
        brand : "Canon, Sony, Fujifilm...",
        link : "#"
    },
    {
        img : "hero-1",
        productName : "Printers",
        discount : "From ₹3999",
        brand : "HP",
        link : "#"
    },
    {
        img : "hero-1",
        productName : "Monitor",
        discount : "From ₹8279",
        brand : "DELL",
        link : "#"
    },
    {
        img : "hero-0",
        productName : "Monitor",
        discount : "From ₹8279",
        brand : "DELL",
        link : "#"
    },
    {
        img : "hero-1",
        productName : "Best of Hair straighteners",
        discount : "From ₹8279",
        brand : "DELL",
        link : "#"
    },
    {
        img : "hero-1",
        productName : "Monitor",
        discount : "From ₹8279",
        brand : "DELL",
        link : "#"
    },
    {
        img : "hero-0",
        productName : "Monitor",
        discount : "From ₹8279",
        brand : "DELL",
        link : "#"
    },
    {
        img : "hero-1",
        productName : "Monitor",
        discount : "From ₹8279",
        brand : "DELL",
        link : "#"
    },
    {
        img : "hero-1",
        productName : "Top Mirrorless Cameras",
        discount : "Shop Now!",
        brand : "Canon, Sony, Fujifilm...",
        link : "#"
    },
    {
        img : "hero-1",
        productName : "Printers",
        discount : "From ₹3999",
        brand : "HP",
        link : "#"
    },
    {
        img : "hero-1",
        productName : "Monitor",
        discount : "From ₹8279",
        brand : "DELL",
        link : "#"
    },
];


  
  const imageSlider = [
    {
        img : "img/banner.png",
    },
    {
        img : "img/hero-3.png",
    },
    {
        img : "img/hero-2.png",
    },
    {
        img : "img/hero-1.png",
    },
    {
        img : "img/hero-0.png"
    }
  ];
  
  
  const electronicsProductData = [
    {
        img : "hero-1",
        productName : "Monitor",
        discount : "From ₹8279",
        brand : "DELL",
        link : "#"
    },
    {
        img : "hero-1",
        productName : "Top Mirrorless Cameras",
        discount : "Shop Now!",
        brand : "Canon, Sony, Fujifilm...",
        link : "#"
    },
    {
        img : "hero-1",
        productName : "Printers",
        discount : "From ₹3999",
        brand : "HP",
        link : "#"
    },
    {
        img : "hero-1",
        productName : "Monitor",
        discount : "From ₹8279",
        brand : "DELL",
        link : "#"
    },
    {
        img : "hero-0",
        productName : "Monitor",
        discount : "From ₹8279",
        brand : "DELL",
        link : "#"
    },
    {
        img : "hero-1",
        productName : "Best of Hair straighteners",
        discount : "From ₹8279",
        brand : "DELL",
        link : "#"
    },
    {
        img : "hero-1",
        productName : "Monitor",
        discount : "From ₹8279",
        brand : "DELL",
        link : "#"
    },
    {
        img : "hero-0",
        productName : "Monitor",
        discount : "From ₹8279",
        brand : "DELL",
        link : "#"
    },
  ]
  

  
  
  /**********feature product js***********/
  let featureProduct_listEl = document.querySelector(".featureProduct_list");
  let featureProductListHTML = '';
  // console.log(featureProductNav)
  
  featureProductNav.forEach(el => {
      featureProductListHTML += `
          <div class="featureProduct_item">
              <a href="#">
                  <div class="featureProduct_image">
                      <img src="img/${el.img}.png" />
                  </div>
                  <p class="featureProduct_name">
                      ${el.name}
  
                    ${el.subNavigation ? `<i class="fa-solid fa-angle-down featureProduct_icon_more"></i>` : ""}   
                  </p>
              </a>
          </div>
      `
  })
  featureProduct_listEl.innerHTML = featureProductListHTML;
  

  
  /*******************image Slider********************* */
  let imageSliderListEl = document.querySelector(".imageSliderList")
  let imageSliderListHTML = ''
  console.log(imageSlider)
  
  
  imageSlider.forEach(el => {
      imageSliderListHTML += `
      <div class="imageSliderItem">
          <img src="${el.img}" />
      </div>
      `
  })
  imageSliderListEl.innerHTML = imageSliderListHTML;
  
  let preve_imageBtnEl = document.getElementById("preve_imageBtn")
  let next_imageBtn = document.getElementById("next_imageBtn")
  let start = 0;
  let end = -400;
  
  preve_imageBtnEl.addEventListener("click", handlePreveImage)
  next_imageBtn.addEventListener("click", handleNextImage)
  
  function handlePreveImage() {
      let imageallList = document.querySelectorAll(".imageSliderItem")
      console.log(imageallList)
      if (start < 0)
          start += 100
      imageallList.forEach(el => {
          el.style.transform = `translateX(${start}%)`
      })
  
  }
  function handleNextImage() {
      let imageallList = document.querySelectorAll(".imageSliderItem")
      console.log(imageallList)
      if (start > end)
          start -= 100
      imageallList.forEach(el => {
          el.style.transform = `translateX(${start}%)`
      })
  }
  
  function renderImageSlider() {
      if (start > end) {
          handleNextImage()
      }
      else {
          start = 100
      }
  }
  
  setInterval(renderImageSlider, 5000)
  
  
  
  /*********************************bestofElctronic_product_item */
  let bestofElctronic_product_itemEl = document.querySelector(".bestofElctronic_product_item")
  let bestofElectornicProduct_html = ""
  
  console.log(electronicsProductData)
  electronicsProductData.forEach(el => {
  
      /* class move div to a tag */  //change done
      
      bestofElectornicProduct_html += `
      <div >
          <a href="${el.link}" class="BestofElectronic_item">   
  
          <div class="bestOfElectornic_image_Product">
              <img
                  src="img/${el.img}.png" />
          </div>
          <div class="bestofElectronicmoreOption">
              <p class="bestofElectornicProduct_name">${el.productName}</p>
              <p class="bestofElecronic_discount">${el.discount}</p>
              <p class="bestofElectronic_brand">${el.brand}</p>
          </div>
          </a>
  
      </div>
      
      `
  })
  
  bestofElctronic_product_itemEl.innerHTML = bestofElectornicProduct_html
  



  //   ============= Other Products /////////////////


  const productCards = document.querySelector(".products__contents");
  let productCards_html ="";


  otherProductNav.forEach((p) => {
  
    /* class move div to a tag */  //change done

    console.log(p)
    
    productCards_html += `
    <div class="product__card" >
        <a href="${p.link}" class="products__item">   

        <div class="product_image_Product">
            <img
                src="img/${p.img}.png" />
        </div>
        <div class="products__moreOption">
            <p class="product_name">${p.productName}</p>
            <p class="product_discount">${p.discount}</p>
            <p class="product__brand">${p.brand}</p>
        </div>
        </a>
                
    </div>
    
    `
})

productCards.innerHTML = productCards_html;