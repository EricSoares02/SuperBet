
export default defineNuxtRouteMiddleware(()=>{

 
    if (isLoged()===true) {
        return navigateTo('/')
    }

})