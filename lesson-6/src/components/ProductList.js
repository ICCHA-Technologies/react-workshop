import React, { useState } from 'react'

const ProductList = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Apple', category: 'Fruits', price: 1.5 },
        { id: 2, name: 'Broccoli', category: 'Vegetables', price: 2 },
        { id: 3, name: 'Carrot', category: 'Vegetables', price: 0.8 },
        { id: 4, name: 'Watermelon', category: 'Fruits', price: 3 },
    ])

    const [filterCategory, setFilterCategory] = useState('')
    
    const onFilterChange = ({ target }) => setFilterCategory(target.value)

    const filteredProducts = filterCategory
        ? products.filter((product) => product.category === filterCategory)
        : products;

    const onDeleteHandler = (idToDelete) => {
        const withoutDeletedProduct = products.filter((product) => product.id !== idToDelete)
        setProducts(withoutDeletedProduct)
    }

    return (
        <div>
            <select value={filterCategory} onChange={onFilterChange}>
                <option value="">All</option>
                <option value="Fruits">Fruits</option>
                <option value="Vegetables">Vegetables</option>
            </select>
            <ul>
                {filteredProducts.map((product, _index) => {
                    return (
                        <li key={product.id}>
                            {product.name} - {product.category} - ${product.price} {' '}
                            <button onClick={() => onDeleteHandler(product.id)}>Delete</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ProductList