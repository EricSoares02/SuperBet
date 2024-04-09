

export default function NavButtonsIsActive(currentUrl: string, urlPage: string){

    console.log(currentUrl, urlPage)
    const style = "w-full h-1/6 flex items-center pl-9 gap-5 p-4 rounded-lg font-normal text-sm";


    if (currentUrl === urlPage) {
        return `${style} bg-purple-500`
    } 

    return  `${style} bg-night-800`
}