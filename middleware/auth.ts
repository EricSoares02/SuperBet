

export default defineNuxtRouteMiddleware(()=>{

 
    if (isLoged()===false) {
        return navigateTo('/login')
    }

})