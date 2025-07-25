'use client'

import React from "react";

export default function Products() {

    const products = [
        {
            img: '/images/cinnamon.jpg',
            title: 'Cinnamon Essential Oil',
            description: 'Cinnamon oil soothes skin, provides a warming sensation, and is known for its anti-inflammatory and antimicrobial properties.',
            rating: 4.5
        },
        {
            img: '/images/lavender.jpg',
            title: 'Lavender Essential Oil',
            description: 'Lavender oil is popular for its calming and relaxing effects. It can help reduce stress and improve sleep quality.',
            rating: 4.8
        },
        {
            img: '/images/peppermint.jpg',
            title: 'Peppermint Essential Oil',
            description: 'Peppermint oil is invigorating and refreshing. It can help relieve headaches and improve focus.',
            rating: 4.6
        },
        {
            img: '/images/tea-tree.jpg',
            title: 'Tea Tree Essential Oil',
            description: 'Tea tree oil is well-known for its antibacterial and antifungal properties, making it great for skin care.',
            rating: 4.7
        },
        {
            img: '/images/eucalyptus.jpg',
            title: 'Eucalyptus Essential Oil',
            description: 'Eucalyptus oil helps clear the mind and supports respiratory health. It is commonly used in aromatherapy.',
            rating: 4.4
        },
        {
            img: '/images/lemongrass.jpg',
            title: 'Lemongrass Essential Oil',
            description: 'Lemongrass oil has a fresh, citrus scent and is used to relieve stress and anxiety.',
            rating: 4.3
        },
        {
            img: '/images/rose.jpg',
            title: 'Rose Essential Oil',
            description: 'Rose oil is cherished for its uplifting aroma and skin-nourishing benefits.',
            rating: 4.9
        },
        {
            img: '/images/orange.jpg',
            title: 'Sweet Orange Essential Oil',
            description: 'Sweet orange oil is known for its cheerful, sweet scent and mood-boosting properties.',
            rating: 4.2
        },
        {
            img: '/images/frankincense.jpg',
            title: 'Frankincense Essential Oil',
            description: 'Frankincense oil is valued for its grounding aroma and skin rejuvenating effects.',
            rating: 4.6
        }
    ]

    return (
        <div className='py-20 md:my-20'>
            <div className="grid md:grid-cols-3 gap-8">
                {products.map((product, idx) => (
                    <div key={idx} className="bg-white text-black rounded-lg shadow-md p-6 flex flex-col items-center">
                        <img src={product.img} alt={product.title} className="w-24 h-24 object-cover rounded-full mb-4" />
                        <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                        <p className="text-sm mb-2">{product.description}</p>
                        <div className="text-yellow-500 font-bold">Rating: {product.rating} / 5</div>
                    </div>
                ))}
            </div>
        </div>
    )
}