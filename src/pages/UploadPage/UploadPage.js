
import "./UploadPage.scss";
import {addWord} from "../../api"

function UploadPage (){

    const uploadImg ={headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${sessionStorage.authToken}`,
    },};

    return (
        <section className="form">
            <form className="form__card" onSubmit={(event) => {
                event.preventDefault();
                if (!(event.target.word.value.trim())){
                    alert ("Please write a valid word. Thanks ...");    
                } else {
                    let newWord = new FormData();
                    newWord.append("word", event.target.word.value);
                    newWord.append("image", event.target.image.files[0]);

                    alert ("your word is added to the API. Thank you...");
                    event.target.reset();
                    
                    addWord(newWord, uploadImg);
                }
        }}>

                <div className="form__word">
                    <label htmlFor="word" className="form__card-title">Add Word:</label>
                    <input required type="text" placeholder="write the word" name="word" className="form__card-field"/>
                </div>
                <div className="form__image">
                    <p className="form__card-title">Please upload your image:</p>                    
                    <input required type="file" name="image" accept="image/*" className="form__card-field form__card-upload-button"/>
                </div>
                <button type="submit" className="form__card-button">Add your Word</button>
            </form>
        </section>
    );
}

export default UploadPage;