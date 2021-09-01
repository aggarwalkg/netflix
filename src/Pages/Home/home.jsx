import Featured from "../../Components/Featured/featured"
import Navbar from "../../Components/Navbar/navbar"
import "./home.scss"
import List from "../../Components/List/list"
const home = () => {
    return (
        <div className="home">
    <Navbar/>  
   <Featured types ="movie"/>
      <List/>
      <List/>
      <List/>

        </div>
    )
}

export default home
