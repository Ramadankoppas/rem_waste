import { useEffect , useState } from 'react';
import Apis from './ApiClass';
import './App.css';

function App() {
  const apiData = new Apis()
  const [listData , setListData] = useState([])
  const [colorSelectView , setColorSelectView] = useState('')
  const [hoverId , setHoveredId] = useState(null)
  const [selectedId , setSelectedId] = useState(null)
  const [selectedPrice , setSelectePrice] = useState(null)
  const [selectedSize , setSelecteSize] = useState(null)
  const [selectedPeriodDays , setSelectePeriodDays] = useState(null)
  const [showBottomSection , setShowBottomSection] = useState('none')
  const [displayMessageDone , setDisplayMessageDone] = useState('none')
  const [Allow , setAllow] = useState(null)
  useEffect(()=>{
    apiData.getDataFromServer().then(data =>{
      setListData(data)
    })
  },[])
  const selectItem = (allowValue , id , size , price , periodDays)=>{
      setAllow(allowValue)
      if(selectedId === id){
        setSelectedId(null) 
        setShowBottomSection('none')
        setSelectePrice(null)
        setSelecteSize(null)
        setSelectePeriodDays(null)
      }else{
        setSelectedId(id)
        setSelectePrice(price)
        setSelecteSize(size)
        setSelectePeriodDays(periodDays)
        setShowBottomSection('flex')
      }
      // if(allowValue){
      // }else{

      // }
  }
  const renderItemWasteData =(data)=>{
      const Elements = []
      data.map(item =>{ 
        Elements.push(
          <div className='ItemSize' key={item["id"]}
                onClick={()=>{
                    selectItem(item["allowed_on_road"] , item["id"] , item["size"] , item["price_before_vat"] , item["hire_period_days"])
                }}
                onMouseEnter={()=>{
                  setHoveredId(item['id'])
                  item["allowed_on_road"] ? setColorSelectView('green'):setColorSelectView('red')
                }}
                onMouseLeave={()=>{setHoveredId(null)}}
              style={{borderColor:selectedId === item["id"] ? 'green':'transparent'}}>
              <div className='selectView' style={{display:hoverId === item["id"] ?'flex':'none'}}><p style={{color:colorSelectView}}>{item["allowed_on_road"] ? selectedId === item["id"]? "Selected":"Select This Skip":"Road Placement Not Available"}</p></div>
              <div className="topItemSize">
                <h1 className='sizeYard'>{item["size"]} Yard Skip</h1>
                <img src="https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/8-yarder-skip.jpg" alt="Rem Waste Product"></img>
                <div className='notAllow' style={{display:item["allowed_on_road"]?'none':'flex'}}>
                  <img src="../assets/images/warn.svg" alt="warn Rem Waste" />
                  <p>Not Allowed On The Road</p>
                </div>
              </div>
              <div className='bottomItemSize'>
                  <p className='priceItem'>{item["price_before_vat"]} &#8364;</p>
                  <p>{item["hire_period_days"]} day hire period</p>
              </div>
          </div>
        )
      })
      return Elements
  }
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>REM Waste</title>
      <div className="App">
          <h1 className='title'>Chooes Your Skip Size</h1>
          <p className='subTitle'>Select the skip size that best suits your needs</p>
          <div className='mainItemSize'>
            {renderItemWasteData(listData)}
          </div>
          {Allow ? 
              <div className='viewSelectedItemData' style={{display:showBottomSection}}>
                  <p>Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.</p>
                  <div className='subViewSelectedItemData'>
                      <div>
                        <p>{selectedSize} Yard</p>
                        <p className='price'>&nbsp;&nbsp;{selectedPrice} &#8364;</p>
                        <p>&nbsp;&nbsp;{selectedPeriodDays} day hire period</p>
                      </div>
                      <div>
                        <button onClick={()=>{setDisplayMessageDone('flex')}}>Continue</button>
                      </div>
                  </div>
              </div>:
              <div className='viewSelectedItemData2' style={{backgroundColor:'#9A0404' , display:showBottomSection}}>
                  <p>Road Placement Not Available</p>
              </div>
          
          }
          <div className='messageDone' style={{display:displayMessageDone}}>
              <p className='message'>
                <span>Task Done</span><br /> 
                Thank You for your time if you have any question. <br /> Please contact me. <br />
                Email : <a href="mailto:ramadankoppas400@gmail.com">ramadankoppas400@gmail.com</a> <br />
                Whatsapp: +966583757003
              </p>
              <button onClick={()=>{setDisplayMessageDone('none')}}>Ok</button>
          </div>
      </div>
    </>
  );
}

export default App;
