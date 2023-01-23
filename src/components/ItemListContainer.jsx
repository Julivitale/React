import React from "react";



const ItemListContainer = () => {
    let items = [
        {
          curso: "Gestion de empresas",
          duracion: "5 meses",
          precio: 5000,
          id: 1,
          imagen: '../curso-excelavanzado.jpg',
        },
        {
          curso: "Cursos de Gestión y Management",
          duracion: "3 meses",
          precio: 7000,
          id: 2,
          imagen: '../Curso-gestiondeempresa.jpg',

        },
        {
          curso: "Curso de Gestión empresarial",
        duracion: "7 meses",
        precio: 10000,
        id: 3,
        imagen: '../Curso-managment.jpg',
        },
        {
          curso: "Curso de Excel Avanzado",
          duracion: "5 meses",
          precio: 7000,
          id: 4,
          imagen: '../Curso-ingenieria.jpg',
        },
        {
          curso: "Curso de Excel",
          duracion: "2 meses",
          precio: 4000,
          id: 5,
          imagen: '../Curso-excell.jpg'
        }
      ]

    return(
        <div>
            {items.map(item =>
                <div className="arritems">
                    <h4>
                        {item.curso}
                    </h4>
                    <p>{item.id}</p>
                    <img src={item.imagen} alt={item.curso} height= "50px" />

                </div>
            )}
        </div>
    )
}

export default ItemListContainer;