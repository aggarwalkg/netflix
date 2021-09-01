import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import "./featured.scss"

const Featured = ({types}) => {
    return (
  <div className="faetured">
    {
      types && (
        <div className="category">
          <span>{types==="movie"?"Movies":"Series"}</span>
  <select name="gener" id="gener">
    <option >Gener</option>
    <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
  </select>
        </div>
      )
    }
      <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="info">
          {/* <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt=""
          /> */}
        <span className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde tenetur blanditiis maiores. Quibusdam quae minima, debitis rem soluta ipsam sint eius officiis ut ducimus. Temporibus accusantium nisi culpa repudiandae corrupti.</span> 
       <div className="buttons">
           <button className="play">
<PlayArrow/>
<span>Play</span>
           </button>
           <button className="more">
<InfoOutlined/>
<span>Info</span>
           </button>
       </div>
          </div>
  </div>
    )
}

export default Featured
