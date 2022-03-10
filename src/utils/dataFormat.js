export function dataFormat(num) {
    const date = new Date(num*1000);
    //сегодняшее время
   const todayDate = `${new Date().getDate()} ${(new Date().toLocaleString('default', { month: 'long' })).slice(0,3)} ${new Date().getFullYear()}` 
    const month = (date.toLocaleString('default', { month: 'long' })).slice(0,3)
    const year = date.getFullYear()
    const hours = date.getHours()
    const minutes = (date.getMinutes()<10 ? '0' : '') + date.getMinutes()
    const day = date.getDate()
  
    //время публикации новости
    const dateNews = `${day} ${month} ${hours}:${minutes}`
    const today = `${day} ${month} ${year}`.toString() === todayDate.toString()
    const convertDate = !today ? dateNews : `Сегодня ${hours}:${minutes}`
    const fullConvertDate =  `${hours}:${minutes} ${day} ${month} ${year}`
   
    return {convertDate ,fullConvertDate}
  }