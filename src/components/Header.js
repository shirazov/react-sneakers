function Header(props) {
    console.log(props.onClickCart)
    return (
        <header className="d-flex justify-between align-center">
            <div className="d-flex align-center">
                <img width={40} height={40} src="/img/logo.png" alt="Logo"/>
                <div >
                    <h3 className="text-uppercase">Shir-Shop React</h3>
                    <p className="opacity-5">Магазин лучших гаджетов</p>
                </div>
            </div>
            <ul className="d-flex">
                <li onClick={props.onClickCart} className="mr-30 cu-p">
                    <img width={20} height={20} src="/img/cart.svg" alt="Cart"/>
                    <span>1350 руб.</span>
                </li>
                <li className="mr-30 cu-p" > 
                    <img width={20} height={20} src="/img/heart.svg" alt="Закаладки"/>
                </li>
                <li>
                    <img width={20} height={20} src="/img/user.svg" alt="User"/>
                </li>
            </ul>
        </header>
    );
}
export default Header;