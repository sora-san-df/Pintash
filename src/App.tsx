import {Formik, Field,Form,ErrorMessage} from 'formik'; 
import {IoIosArrowDown} from 'react-icons/io'; 
import { Key, useState } from 'react';
import {MdNotificationsActive} from 'react-icons/md'; 
import './styles/App.css'; 
function App() {

  const [estilos, setEstilos]= useState<String|null>(null);
  const [photo, setPhotos] = useState<any>(); 
  console.log(typeof(photo))
  // const open = url => window.open(url); 
  const setStyles = (id: String) =>{
      return setEstilos(id); 
  }

  return (
    <div>
      <header>
        <Formik
        initialValues={{search: '', create: ''}}
        onSubmit={async values=>{

          const response: Response = await fetch(`https://api.unsplash.com/search/photos?per_page=25&query=${values.search}`, {
            headers: {
              'Authorization': 'Client-ID eXPQGIYcb6aNV7sIo72mMDOIiwXhWHTEO8NlDookCHg'
            }
          })
          const result = await response.json(); 
          //Llamando a la api de unplash
          console.log(result); 
          setPhotos(result.results); 
        }}
        >
          <Form className='formContainer'>
            {/**A div for the home icon*/}
            <div className="leftContainer">
            <div className={estilos==='1'?'leftContainerStyles': 'null'} onClick={()=>setStyles('1')}>Home</div>
            <div className={estilos==='2'?'leftContainerStyles': 'null'} onClick={()=>setStyles('2')}>Create <IoIosArrowDown/></div>
            </div>
            
            {/* <Field name="create" as='select'>
              <option value="" disabled hidden>Create</option>
              <option value="create_idea_pin">create idea Pin</option>
              <option value="create_pin">create pin</option>
            </Field> */}
            <Field name="search"/>

            <div className="rigthContainer">
                {/**the notifications that if it is clicked it will display a modal with all of the notif */}
            <div><MdNotificationsActive></MdNotificationsActive></div>
            {/**A div that if it is clicked sends to check your profile */}
            <div>Profile</div>
            </div>
            
          </Form>
          
        </Formik>
      </header>

      <div className="ImagesContainer">
        <div className='imagesCenter_center'>
            {photo ? photo.map((photos)=>
              <article key={photos.id} onClick={()=>open(photos.link.html)}>
                  <img src={photos.urls.regular} />
                  <p>{[photos.description, photos.alt_description].join('-')}</p>
              </article>
            ): null}
        </div>
      </div>
    </div>
  )
}

export default App
