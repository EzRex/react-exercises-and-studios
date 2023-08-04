import styles from './Description.module.css';
import React from 'react';
function RecipeAuthor() {
    let authorLink ='https://www.tastesoflizzyt.com/homemade-cinnamon-rolls/';
    let authorPhoto = 'https://secure.gravatar.com/avatar/7b9069438be1b88545ada16c050d7aa6?s=48&d=mm&r=g';
    let authorName = "Julie Clark";
    return(
        <div className = {styles.recipeAuthorBlick}>
            <img src={authorPhoto} alt = "author picture" className = {styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Homemade Cinnamon Rolls</a>
            </div>
        </div>
    );
}

class RecipeDescription extends React.Component {
    render() {
        return(
            <div>
                <div>
                    <h1>Homemade Cinnamon Rolls</h1>
                    <p>A cinnabon cinnamon rolls clone</p>
                </div>
                <RecipeAuthor />
            </div>
        )
    }

}

export default RecipeDescription;