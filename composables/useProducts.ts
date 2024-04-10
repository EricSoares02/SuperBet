
export default async function GetProducts(){


   const { data, pending, error, refresh } = await useAsyncData(
    'products',
    () => $fetch('http://localhost:5001/store/65e10493ab899bc407fa5a6b')
  )

  return { data, pending, error, refresh}
}