import React from 'react'
import "../../Styles/Productdrop.css";

const ProductDropDown = () => {
  return (
    <>
    <div className='container'>
    <div class="accordions">
    <h1>Frequently Asked Questions</h1>
    <div class="accordion-item">
        <input type="checkbox" id="accordion1" />
        <label for="accordion1" class="accordion-item-title"><span class="icon"></span>What is the warranty on refurbished laptops?</label>
        <div class="accordion-item-desc">
        All laptops come with a 6-month warranty against defects in materials and workmanship.
        <ul>
            <li>Please note that liquid damages are not covered under our warranty scheme.</li>
            <li>Batteries come with a 3-month warranty. The battery backup time ranges from 1 to 2 hours.</li>
            <li>We provide a new charger with a warranty for laptops of the same brand.</li>
            <li>Hinges come with a 3-month warranty.</li>
            <li>If you receive a damaged laptop, please contact our support team immediately.
</li>
            <li>Please note that the warranty does not cover software issues. Service charges will apply in case of software-related problems.</li>
            <li>Two free visits are provided for repairs during the warranty period. After that, a visiting charge of Rs. 299 per visit will be applicable.</li>
          
        </ul>
        If you have any questions or concerns about our warranty policy, please feel free to contact us.
        </div>
    </div>

    <div class="accordion-item">
        <input type="checkbox" id="accordion2" />
        <label for="accordion2" class="accordion-item-title"><span class="icon"></span>Can I upgrade the RAM or SSD on my refurbished laptop?</label>
        <div class="accordion-item-desc">Yes, you can customize your refurbished laptop. We offer a range of customization options, such as adding more RAM, upgrading the hard drive, or SSD. Contact us for more information about customization options. </div>
    </div>

    <div class="accordion-item">
        <input type="checkbox" id="accordion3" />
        <label for="accordion3" class="accordion-item-title"><span class="icon"></span>Can I customize my refurbished laptop?</label>
        <div class="accordion-item-desc">Yes, you can customize your refurbished laptop. We offer a range of customization options, such as adding more RAM, upgrading the hard drive, or SSD. Contact us for more information about customization options.</div>
    </div>

    <div class="accordion-item">
        <input type="checkbox" id="accordion4" />
        <label for="accordion4" class="accordion-item-title"><span class="icon"></span>Do refurbished laptops come with a charger?</label>
        <div class="accordion-item-desc">It is common for refurbished laptops to come with a charger. In our case, we make sure that each renewed laptop is accompanied by its own brand charger.</div>
    </div>

 

</div>
    </div>

    </>
  )
}

export default ProductDropDown