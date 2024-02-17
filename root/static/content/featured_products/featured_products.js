
/*<li style="display:flex; align-items: center;">
    <div class="product-all" id="first-product">
        <a class="in-stock-links" href="https://swiftwintekstore.com/products/type-c-usb-3-2-gen2-pcie-card-hub-usb-3-0-pci-express-board-pci-e-pci-e-usb-3-adapter-multiplier-usb3-3-1-controller-riser-cards"
            rel="Product page of a Type C USB 3.2 Gen2 PCIE Card Hub USB" title="Type C USB 3.2 Gen2 PCIE Card Hub">
            <p class="product-desc">
                Type C USB 3.2 Gen2 PCIE Card Hub USB 3.0 Adapter Multiplier USB3 3.1 Controller Riser Cards
            </p>
            <p class="discount-amount">
                <span class="now">Now 18.2% Off </span>
            </p>
        </a>
    </div>
</li> 
                    
<li class="product-all">
    <a class="in-stock-links" href="https://swiftwintekstore.com/products/super-si-pro-silicon-fast-charger-mobile-phone-30w"
        rel="Product page of a Super Si Pro Silicon Fast Charger Mobile Phone 30W " title="Super Si Pro Silicon Fast Charger Mobile 30W">
        <p class="product-desc">
            Super Si Pro Silicon Fast Charger Mobile Phone 30W
        </p>
        <p class="discount-amount">
            <span class="now">Now 7.14% Off </span>
        </p>
    </a>
</li>

<li class="product-all">
    <a class="in-stock-links" href="https://swiftwintekstore.com/products/zoerax-rj45-pass-through-crimper-for-cat6a-cat6-cat5-cat5e-ethernet-connector-all-in-one-crimp-tool"
        rel="Product page of the ZoeRax RJ45 Pass Through Crimper for Cat6a Cat6 Cat5 Cat5e Ethernet Connector" title="ZoeRax RJ45 Pass Through Crimper for Cat6a Cat6 Cat5 Cat5e Ethernet Connector">
        <p class="product-desc">
            ZoeRax RJ45 Pass Through Crimper for Cat6a Cat6 Cat5 Cat5e Ethernet Connector
        </p>
        <p class="discount-amount">
            <span class="now">Now 25% Off </span>
        </p>
    </a>
</li>

<li class="product-all">
    <a class="in-stock-links" href="https://swiftwintekstore.com/products/zoerax-network-cable-tester-rj45-rj11-cat5-tool-test-ethernet-telephone-cables?variant=47704487297362"
        rel="Product page of the ZoeRax Network Cable Tester RJ45 RJ11 CAT5 Tool" title="ZoeRax Network Cable Tester RJ45 RJ11 CAT5 Tool">
        <p class="product-desc">
            Ensure your CAT cables are working correctly. Get the ZoeRax Network Cable Tester RJ45 RJ11 CAT5 Tool with this <strong>huge</strong> discount!
        </p>
        <p class="discount-amount">
            <span class="now">Now 41.6% Off </span>
        </p>
    </a>
</li>

<li style="display:flex; align-items: center;">
    <div class="product-all" id="last-product">
        <a class="in-stock-links" href="https://swiftwintekstore.com/products/zoerax-all-in-one-pass-through-crimper-for-rj45-rj12-rj11-network-connectors-cat5-5e-6-6a-7?_pos=3&_sid=0cc4887e8&_ss=r"
            rel="Product page of the ZoeRax All-in-One Pass Through Crimper for RJ45 RJ12 RJ11 Network Connectors - CAT5/5e/6/6a/7" title="ZoeRax All-in-One Pass Through Crimper for RJ45 RJ12 RJ11 Network Connectors - CAT5/5e/6/6a/7">
            <p class="product-desc">
                ZoeRax All-in-One Pass Through Crimper for RJ45 RJ12 RJ11 Network Connectors - CAT5/5e/6/6a/7
            </p>
            <p class="discount-amount">
                <span class="now">Now 19.3% Off </span>
                </p>
        </a>
    </div>
    <div class="chevron" onclick="buttonPress()">
        <span id="chevron-right" class="material-symbols-outlined notranslate">
            chevron_right
        </span>
    </div> 
</li> */

import products from './data.json' assert { type: 'json' };

        // user pressed the left Chevron button. Replace the 'ul' content with the new objects in the JSON file.
        const buttonPress = (event) => {
            /*base_ul = document.getElementById('featured-prod-container');*/

            for (let index = 0; index < products.length; index++) {
                const product = products[index];
                console.log(product);
                /*console.log(product.url);
                li = document.createElement('li');
                li.innerHTML = `<li class="product-all">
                <a class="in-stock-links" href="${product.url}"
                    rel="${product.rel}" title="${product.title}">
                    <p class="product-desc">
                        ${product.desc}
                    </p>
                    <p class="discount-amount">
                        <span class="now">Now ${product.discount_amt}% Off </span>
                    </p>
                </a>
            </li>`;

                base_ul.appendChild(li);*/
            }
            
        }
        
buttonPress();