import styles from "./AddMovieForm.module.css";
import { nanoid } from "nanoid";
import { useState } from "react";
const AddMovieForm = (props) => {
    
  // melakukan props dari home.js
    const { movies, setMovies } = props;

  // melakukan state pada form input title, date dan genre
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [poster, setPoster] = useState("");
    const [genre, setGenre] = useState("Horror");

  // handle input title
    const handleTitle = (e) => {
    setTitle(e.target.value);
    };

  // handle input year
    const handleDate = (e) => {
    setDate(e.target.value);
    };

  // handle input poster
    const handlePoster = (e) => {
    setPoster(e.target.value);
    };

  // handle select genre
    const handleGenre = (e) => {
    setGenre(e.target.value);
    };

  // handle form
    const handleSubmit = (e) => {
    //melakukan default agar form tidak tersubmit
    e.preventDefault();

    const movie = {
        id: nanoid(),
        title: title,
        year: date,
        type: genre,
        poster: poster,
    };

    // melakukan push data ke setmovies
    setMovies([...movies, movie]);
    };
    return(
        <div className = {styles.container}>
            <section className = {styles.addmovieform}>
                <div className = {styles.addmovieform__left}>
                    <img className = {styles.addmovieform__image} src={poster} alt="" />
                </div>
                <div className = {styles.addmovieform__right}>
                    <h1 className = {styles.addmovieform__title}>Add Movie</h1>
                    <form className ={styles.addmovieform__form} action="" onSubmit={handleSubmit}>
                        <div className = {styles.addmovieform__formcontrol}>
                            <label className = {styles.addmovieform__Ltitle} htmlFor="">Title</label>
                            <input className = {styles.addmovieform__input} type="text" value={title} onChange={handleTitle}/>
                        </div>
                        <div className = {styles.addmovieform__formcontrol}>
                            <label className = {styles.addmovieform__Lyeard} htmlFor="">Yeard</label>
                            <input className ={styles.addmovieform__input} type="text" value={date} onChange={handleDate} />
                        </div>
                        <div className={styles.addmovieform__formcontrol}>
                            <label htmlFor="type" className={styles.addmovieform__label}>Pilih Genre</label>
                                <select className={styles.addmovieform__selectType} name="type" id="type" value={genre} onChange={handleGenre} >
                                    <option value="Horror">Horror</option>
                                    <option value="Action">Action</option>
                                    <option value="Thriller">Thriller</option>
                                    <option value="Drama">Drama</option>
                                    <option value="Survival">Survival</option>
                                </select>
                        </div>
                        <div className={styles.addmovieform__formcontrol}>
                            <label htmlFor="poster" className={styles.addmovieform__label}>Add Poster</label>
                            <input className={styles.addmovieform__input} onChange={handlePoster} type="text" value={poster}/>
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