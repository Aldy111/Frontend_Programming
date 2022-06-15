import styles from "./AddMovieForm.module.css";
import { nanoid } from "nanoid";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addMovie } from "../../features/moviesSlice";
const AddMovieForm = () => {
    //buat dispatch
    const dispatch = useDispatch();
    //buat navigation
    const Navigation = useNavigate();

  //membuat state menggunakan object untuk validasi
    const [validateData, setValidateData] = useState({
      title: "",
      date: "",
      poster: ""
    })
  //function validasi
  const validate = () => {
    if (title === "") {
      setValidateData(true)
      return false
    }else if (date === "") {
      setValidateData(true)
      return false
    }else if (poster === "") {
      setValidateData(true)
      return false
    }else{
      setValidateData(false)
      return true
    }
  }

  //membuat state menggunakan object
    const [formData, setFormData] = useState({
      title: "",
      date: "",
      poster: "",
      type: ""
    });

    const {title,date,poster,type} = formData;
  //function handle onchange
  const HandleChange = (e)=>{
    const{name,value} = e.target;

    setFormData({
      ...formData,
      [name]:value
    })
  }  

  const submitmovie = ()=> {
    const movie = {
        id: nanoid(),
        title: title,
        year: date,
        type: type,
        poster: poster,
    };

    dispatch(addMovie(movie))
    Navigation("/");
  }


  // handle form
    const handleSubmit = (e) => {
    //melakukan default agar form tidak tersubmit
    e.preventDefault();
    
    validate() && submitmovie()
    
    };
    return(
        <div className = {styles.container}>
            <section className = {styles.addmovieform}>
                <div className = {styles.addmovieform__left}>
                    <img className = {styles.addmovieform__image} src="https://picsum.photos/600/400" alt="" />
                </div>
                <div className = {styles.addmovieform__right}>
                    <h1 className = {styles.addmovieform__title}>Add Movie</h1>
                    <form className ={styles.addmovieform__form} action="" onSubmit={handleSubmit}>
                        <div className = {styles.addmovieform__formcontrol}>
                            <label className = {styles.addmovieform__Ltitle} htmlFor="">Title</label>
                            <input className = {styles.addmovieform__input} 
                              type="text" 
                              value={title} 
                              onChange={HandleChange}
                              name = "title"
                              />
                              {
                                validateData && <alert>Title Wajib Di Isi</alert>
                              }
                        </div>
                        <div className = {styles.addmovieform__formcontrol}>
                            <label className = {styles.addmovieform__Lyeard} htmlFor="">Yeard</label>
                            <input className ={styles.addmovieform__input} 
                              type="text" 
                              value={date} 
                              onChange={HandleChange} 
                              name = "date"
                              />
                              {
                                validateData && <alert>Date Wajib Di Isi</alert>
                              }
                        </div>
                        <div className={styles.addmovieform__formcontrol}>
                            <label htmlFor="poster" className={styles.addmovieform__label}>Add Poster</label>
                            <input className={styles.addmovieform__input} 
                              onChange={HandleChange} 
                              type="text" 
                              value={poster}
                              name = "poster"
                              />
                              {
                                validateData && <alert>Date Wajib Di Isi</alert>
                              }
                        </div>
                        <div className={styles.addmovieform__formcontrol}>
                            <label htmlFor="type" className={styles.addmovieform__label}>Pilih Genre</label>
                                <select className={styles.addmovieform__selectType} name="type" id="type" value={type} onChange={HandleChange} >
                                    <option value="Horror">Horror</option>
                                    <option value="Action">Action</option>
                                    <option value="Thriller">Thriller</option>
                                    <option value="Drama">Drama</option>
                                    <option value="Survival">Survival</option>
                                </select>
                        </div>
                        <div className = {styles.addmovieform__buttoncontrol}>
                            <button className = {styles.addmovieform__button}>Submit</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}
export default AddMovieForm;