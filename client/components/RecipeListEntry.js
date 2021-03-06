import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';

moment().format();

const RecipeListEntry = (props) => {
  const createdTime = moment(props.recipe.created_at).fromNow();
  return (
    <div className="recipe-list-entry">
      <Link to={`/recipe/${props.recipe.recipe_id || props.recipe.id || 1}`} className="recipe-entry-title">{props.recipe.title}</Link>
      <p className="recipe-author" >Created by {props.recipe.display_name}</p>
      <p className="recipe-create-date" >Created at {createdTime}</p>
    </div>
  );
};
export default RecipeListEntry;
