import "./styles/parcial2.css"
import { useState } from "react"
import { Link } from "react-router-dom"; 

function Parcial2(){

    const [imagen,setImagen] = useState(null)
    const [titulo,setTitulo] = useState("")

    const abrir = (img,tit) =>{
        setImagen(img)
        setTitulo(tit)
    }

    const cerrar = () =>{
        setImagen(null)
    }

    return(
        <div className="container">

            <div className="card1">
                <h1>METODOLOGÍAS DE DESARROLLO DE SW</h1>

                <h2>¿Qué es una metodología de desarrollo de software?</h2>

                <p>
                Las metodologías de desarrollo de software son un conjunto de técnicas y métodos organizativos que se aplican para diseñar soluciones de software informático.
                El objetivo de las distintas metodologías es el de intentar organizar los equipos de trabajo para que estos desarrollen las funciones de un programa de la mejor manera posible.
                </p>
            </div>


            <div className="card2">

                <h3>TIPOS DE METODOLOGÍAS</h3>

                <div className="lista">

                    <button className="cascada" onClick={()=>abrir("/1_cascada.png","Vista de Cascada")}>
                        CASCADA
                    </button>

                    <button className="modelo" onClick={()=>abrir("/2_modelo_v.png","Vista Modelo V")}>
                        MODELO V
                    </button>

                    <button className="agiles" onClick={()=>abrir("/3_agiles.png","Vista Ágiles")}>
                        ÁGILES
                    </button>

                    <button className="scrum" onClick={()=>abrir("/4_scrum.png","Vista Scrum")}>
                        SCRUM
                    </button>

                    <button className="kanban" onClick={()=>abrir("/5_kanvan.png","Vista Kanban")}>
                        KANBAN
                    </button>

                    <button className="xp" onClick={()=>abrir("/6_xp.png","Vista XP")}>
                        XP
                    </button>

                    <button className="hibridas" onClick={()=>abrir("/7_hibridas_modernas.png","Vista Híbridas")}>
                        HÍBRIDAS
                    </button>

                </div>

            </div>


            <div className="card3">

                <h4>LINK A TABLERO DE TRABAJO</h4>
                <a href="https://velvetbuffer.atlassian.net/jira/software/projects/KAN/boards/1?atlOrigin=eyJpIjoiYzVmNzA3ODI3ODlkNDFlYWI5YzFjNDkwNzY4ZTcwZWYiLCJwIjoiaiJ9">
                      <button className="jira">
                    --- JIRA ---
                </button>
                </a>
              

            </div>


            <div className="card4">
                      
                 <Link to="/">
                    <button className="jira">
                    --- REGRESAR A MENU PRINCIPAL ---
                        </button>
                 </Link>       
                <h5>
                No se necesita ser grande para empezar, pero para ser grande se necesita empezar
                </h5>

                <p>
                Alumno: Gomez Aguirre Eli
                </p>

            </div>


            {/* MODAL */}

            {imagen && (

                <div className="modal">

                    <div className="modalContenido">

                        <div className="modalHeader">

                            <span>{titulo}</span>

                            <button className="cerrar" onClick={cerrar}>
                                X
                            </button>

                        </div>

                        <img src={imagen} alt="metodologia"/>

                    </div>

                </div>

            )}

        </div>
    )
}

export default Parcial2