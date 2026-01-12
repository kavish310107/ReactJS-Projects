import C from '../images/chef.png'
import './Header.css'

function Header(){
    return(
        <div className="head">
            <img src={C} alt='cheflogo'></img>
            <h2>ChefClaude</h2>
        </div>
    )
};

export default Header;