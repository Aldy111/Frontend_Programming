import styles from "./AddMovieForm.module.css";
const AddMovieForm = () => {
    return(
        <div className = {styles.container}>
            <section className = {styles.addmovieform}>
                <div className = {styles.addmovieform__left}>
                    <img className = {styles.addmovieform__image} src="https://picsum.photos/600/400" alt="" />
                </div>
                <div className = {styles.addmovieform__right}>
                    <h1 className = {styles.addmovieform__title}>Add Movie</h1>
                    <form className ={styles.addmovieform__form} action="">
                        <div className = {styles.addmovieform__formcontrol}>
                            <label className = {styles.addmovieform__Ltitle} htmlFor="">Title</label>
                            <input className = {styles.addmovieform__input} type="text" />
                        </div>
                        <div className = {styles.addmovieform__formcontrol}>
                            <label className = {styles.addmovieform__Lyeard} htmlFor="">Yeard</label>
                            <input className ={styles.addmovieform__input} type="text" />
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