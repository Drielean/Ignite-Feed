//lembre-se todo componente deve comecar com letra maiuscula para nao confundir com elementos do proprio HTML
//no React ao inves de usarmos class, utilizamos className, pois class 'e utilizado para javascript

//import'./Header.module.css' se o import no css for feito desse formato nao ira funcionar, pois por ele ser modules tem a necessidade 
//de dar nome ao import, porem se o import for feito "import styles from './Header.module.css', vc precisara colocar className={}"com 
//chave e dentro dela puxar o styles.header, para que assim vc consiga puxar sua className de uma variavel javascript

import styles from './Header.module.css';

import igniteLogo from '../assets/Ignite-logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo do Ignite" />
        </header>
        
    );

}