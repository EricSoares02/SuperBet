

export default function NavButtonsIsActive(currentUrl: string, urlPage: string){

    const style = "w-full h-20 flex items-center pl-3.5 gap-5 p-4 rounded-lg text-sm";


    if (currentUrl === urlPage) {
        return `${style} bg-purple-500 font-semibold`
    } 

    return  `${style} font-normal bg-night-800`
}