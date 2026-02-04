import { useState, useMemo } from "react";

function ProductFilter() {
    const products = useMemo(() => {
        return Array.from({ length: 5000 }, (_, i) => ({
            id: i + 1,
            name: `Product ${i + 1}`,
            price: Math.floor(Math.random() * 1000) + 1
        }));
    }, []);
    const [search, setSearch] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    const filteredProducts = useMemo(() => {
        console.time("filter-useMemo");

        const result = products.filter((p) => {
            const matchName = p.name
                .toLowerCase()
                .includes(search.toLowerCase());

            const matchMin =
                minPrice === "" || p.price >= Number(minPrice);

            const matchMax =
                maxPrice === "" || p.price <= Number(maxPrice);

            return matchName && matchMin && matchMax;
        });

        console.timeEnd("filter-useMemo");
        return result;
    }, [products, search, minPrice, maxPrice]);

    const totalPrice = useMemo(() => {
        console.time("total-useMemo");

        const total = filteredProducts.reduce(
            (sum, p) => sum + p.price,
            0
        );

        console.timeEnd("total-useMemo");
        return total;
    }, [filteredProducts]);

    return (
        <div style={{ padding: 20 }}>
            <h2>Product Filter + Total</h2>

            <input
                placeholder="Search name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <input
                placeholder="Min price"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                style={{ marginLeft: 10 }}
            />

            <input
                placeholder="Max price"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                style={{ marginLeft: 10 }}
            />

            <h3>Total price: ${totalPrice}</h3>
            <p>Products found: {filteredProducts.length}</p>

            <ul>
                {filteredProducts.slice(0, 20).map((p) => (
                    <li key={p.id}>
                        {p.name} - ${p.price}
                    </li>
                ))}
            </ul>

            <p>(Chỉ hiển thị 20 sản phẩm đầu cho nhẹ UI)</p>
        </div>
    );
}

export default ProductFilter;
