let productos = [];
let carrito = [];

async function cargarProductos() {
    try {
        const response = await fetch('./assets/js/products.json');
        productos = await response.json();
        renderizarProductos(productos);
        configurarFiltros(); // Nueva función para los botones
    } catch (error) {
        console.error("Error:", error);
    }
}

function configurarFiltros() {
    const botones = document.querySelectorAll('.cat-btn');
    
    botones.forEach(boton => {
        boton.addEventListener('click', (e) => {
            // Quitar clase active de todos y ponerla al clickeado
            botones.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            const categoria = e.target.dataset.category;
            
            // Filtrar lógica
            if (categoria === 'todos') {
                renderizarProductos(productos);
            } else {
                const filtrados = productos.filter(p => p.categoria === categoria);
                renderizarProductos(filtrados);
            }
        });
    });
}

// ... resto del código de renderizado y carrito