/* eslint-disable jsx-a11y/img-redundant-alt */
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`${className} card-container`}>
      <div className="containers">
        <h1 className="heading">{title}</h1>
        <p className="description">{description}</p>

        <div className="image2">
          <img src={imgUrl} alt={title} />
        </div>
      </div>
    </li>
  )
}
export default CardItem
