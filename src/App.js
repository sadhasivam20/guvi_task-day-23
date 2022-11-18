import logo from "./logo.svg";
import "./App.css";
import ProductCard from "./product";
import "./App.css"
// import "../public/Card.css";

function App() {
  const data=[
    {
      pay:"FREE",
      price:"0",
      period:"month",
      features:[
        {
          title :"Single User",
          isEnable:true, 
        },
        {
          title:"5GB Storage",
          isEnable:true,
        },
        {
          title:"Unlimited Public Projects",
          isEnable:true,
        },
        {
          title:"Community Access",
          isEnable:true,
        },
        {
          title:"Unlimited Private Projects",
          isEnable:false,
        },
        {
          title:"Dedicated Phone Support",
          isEnable:false,
        },
        {
          title:"Free Subdomain",
          isEnable:false,
        },
        {
          title:"Monthly Status Reports",
          isEnable:false,
        },
      ]
    },
    {
      pay:"PLUS",
      price:"9",
      period:"month",
      features:[
        {
          title :"5 Users",
          isEnable:true, 
          isBold:true,

        },
        {
          title:"50GB Storage",
          isEnable:true, 
        },
        {
          title:"Unlimited Public Projects",
          isEnable:true, 
        },
        {
          title:"Community Access",
          isEnable:true, 
        },
        {
          title:"Unlimited Private Projects",
          isEnable:true, 
        },
        {
          title:"Dedicated Phone Support",
          isEnable:true, 
        },
        {
          title:"Free Subdomain",
          isEnable:true, 
        },
        {
          title:"Monthly Status Reports",
          isEnable:false, 
        },
      ]
    },
    {
      pay:"PRO",
      price:"49",
      period:"month",
      features:[
        {
          title :"Unlimited User",
          isEnable:true, 
          isBold:true,
        },
        {
          title:"150GB Storage",
          isEnable:true, 
        },
        {
          title:"Unlimited Public Projects",
          isEnable:true, 
        },
        {
          title:"Community Access",
          isEnable:true, 
        },
        {
          title:"Unlimited Private Projects",
          isEnable:true, 
        },
        {
          title:"Dedicated Phone Support",
          isEnable:true, 
        },
        {
          title:"Unlimited Free Subdomain",
          isEnable:true,
          isBold:true, 
        },
        {
          title:"Monthly Status Reports",
          isEnable:true, 
        },
      ]
    }
]
  return (
    <>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
          {
          data.map((item)=>{
             return <ProductCard item={item}></ProductCard>
          })
          }
            {/* <ProductCard cardData={data[0]}></ProductCard>
            <ProductCard cardData={data[1]}></ProductCard>
            <ProductCard cardData={data[2]}></ProductCard> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
