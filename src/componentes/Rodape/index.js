import './style.css'


export default function Rodape() {
    return (
        <footer>
        <div className=" limitar-secao container-logo-informacoes">
            <img src="assets/logo.png"></img>
            <div>
                <h3>ENDEREÇO</h3>
                <p>Av. Bernadinho de Campos,98</p>
                <p>São Paulo, SP 12345-678</p>
            </div>
            <div>
                <h3>CONTATO</h3>
                <p>info@meusite.com</p>
                <p>tel: (11) 3456-7890</p>
            </div>
            <div>
                <h3>HORÁRIOS</h3>
                <p>ABERTO TODOS OS DIAS</p>
                <p>10:00 - 22:00</p>
            </div>
        </div>
        <div className='direito-autoral'>
                <p>Gelateria. Orgulhosamente desenvolvido por "Felipe José de Lima"</p>
        </div>
        </footer>
    )
}