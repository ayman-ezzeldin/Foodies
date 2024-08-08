import React, { Suspense } from 'react'
import Link from 'next/link'
import classes from './page.module.css'
import MealsGrid from '@/components/meals/meal-grid'

import { getMeals } from '@/lib/meals'
import Loading from '@/app/meals/loading-out.js'

export const metadata = {
  title: "All Meals",
  description: "Delicious meals, shared by a food-loving community.",
};


async function Meals() {
  const meals = await getMeals()
  return <MealsGrid meals={meals} />

}

const MealsPage = async  () => {
  const meals = await getMeals()
  return (
    <>
    <header className={classes.header} > 
      <h1> Delicious meals , created <span className={classes.highlight} > by you </span> </h1>
      <p>Share your favorite recipes with the world</p>
      <p className={classes.cta}> <Link href='/meals/share' > Share your fav Recipe </Link> </p>
    </header>
    <main className={classes.main} >
      <Suspense fallback={<Loading />} >
        <Meals />
      </Suspense>
    </main>
    </>
  )
}

export default MealsPage