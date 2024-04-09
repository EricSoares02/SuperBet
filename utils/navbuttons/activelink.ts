

export default function NavButtonsIsActive(currentUrl: string, urlPage: string){

    console.log(currentUrl, urlPage)
    const style = "w-full h-1/6 flex items-center pl-9 gap-5 p-4 rounded-lg text-sm";


    if (currentUrl === urlPage) {
        return `${style} bg-purple-500 font-semibold`
    } 

    return  `${style} font-normal bg-night-800`
}