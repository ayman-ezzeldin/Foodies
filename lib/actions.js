'use server' ;
import { redirect } from "next/navigation";

import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvalid(text) {
  return !text || text.length === 0 || text.trim() === '';
}

export async function shareMeal( prevState , formDate) {
  const meal = {
    title : formDate.get('title') ,
    summary : formDate.get('summary'),
    instructions : formDate.get('instructions') ,
    image : formDate.get('image') ,
    creator : formDate.get('name') ,
    creator_email : formDate.get('email')
  }

  if (isInvalid(meal.title) ||
      isInvalid(meal.summary) ||
      isInvalid(meal.instructions) ||
      isInvalid(meal.creator) || 
      isInvalid(meal.creator_email) ||
      !meal.image || meal.image.size === 0 || !meal.creator_email.includes('@')
    ) {
      return {
        message : 'Invalid input'
      }
    }
  await saveMeal(meal)
  revalidatePath('/meals') // revalidate the page after saving the new meal , if wanna to validate all pagees , we can revalidatePath('/meals' , 'layout')
  redirect('/meals')
}