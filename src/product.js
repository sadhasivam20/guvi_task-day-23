import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck,faTimes } from '@fortawesome/free-solid-svg-icons'

function ProductCard({item}){
    return <>
    <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{item.pay}</h5>
            <h6 className="card-price text-center">${item.price}<span className="period">/{item.period}</span></h6>
          <hr></hr>
            <ul className="fa-ul">
             {
              item.features.map((list)=>{
                return(
                  <li className={list.isEnable?"":'text-muted'}>
                  <span className='fa-li'>
                    {
                      
                    list.isEnable?<FontAwesomeIcon icon={faCheck}/>:<FontAwesomeIcon icon={faTimes}/>
                   }
                  </span>
                  <span>
                    {
                  list.isBold?<strong>{list.title}</strong>:list.title
                }
                  </span>
                  </li>
                )
              })

             } 
              {/* <li><span className="fa-li"><FontAwesomeIcon icon={faCheck}/></span>{props.cardData.features[0].title}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.cardData.features[1].title}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.cardData.features[2].title}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.cardData.features[3].title}</li>
              <li class=""><span className="fa-li"><i className="fas fa-times"></i></span>{props.cardData.features[4].title}</li>
              <li class="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{props.cardData.features[5].title}</li>
              <li class="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{props.cardData.features[6].title}</li>
              <li class="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{props.cardData.features[7].title}</li> */}
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
    

  </>
}
export default ProductCard;